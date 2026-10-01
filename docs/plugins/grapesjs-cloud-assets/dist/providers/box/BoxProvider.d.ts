import type { AuthState, ListOptions, ListResult, ProviderSessionInfo, ProviderSetupInfo, ResolvedAsset, StorageItem, StorageProvider, UploadProgress } from '../../types';
export interface BoxProviderOptions {
    /**
     * URL собственного серверного эндпоинта владельца сайта, который
     * делает обмен code→token / refresh_token→token с Box, храня
     * Client Secret приложения только на сервере.
     *
     * ОБЯЗАТЕЛЬНОЕ поле, без значения по умолчанию — и в этом
     * принципиальное отличие BoxProvider от Dropbox/Google/OneDrive
     * выше. Проверено по официальной документации Box
     * (developer.box.com), а не предположено:
     *   - `GET /authorize` принимает `response_type` только со
     *     значением `code` — implicit-flow (`token`) не поддерживается;
     *   - `POST /oauth2/token` требует `client_secret` для ЛЮБОГО
     *     обмена — и authorization_code, и refresh_token — Box нигде
     *     не предлагает PKCE (`code_challenge`/`code_verifier`) как
     *     альтернативу для публичных клиентов без бэкенда (в отличие
     *     от Dropbox и Microsoft-SPA, которые PKCE поддерживают, — см.
     *     `pkce.ts`).
     * Сам Box явно предупреждает в документации: client_secret нельзя
     * держать в клиентском (браузерном) коде. Значит, "вписать его в
     * бандл" — не обходной путь, а дыра в безопасности (любой
     * посетитель сайта сможет вытащить секрет и действовать от имени
     * приложения), и этот путь был явно отклонён (см. историю проекта:
     * пользователь выбрал "добавить, но с собственным сервером", а не
     * "с секретом в браузере"). Поэтому единственный правильный способ
     * добавить Box в этот целиком клиентский плагин — маленький
     * сервер-посредник, который владелец сайта разворачивает сам.
     *
     * Контракт эндпоинта — `POST tokenEndpoint`, тело JSON:
     *   - `{ grant_type: 'authorization_code', code, redirect_uri }`
     *   - `{ grant_type: 'refresh_token', refresh_token }`
     * В обоих случаях сервер должен подставить свои `client_id` +
     * `client_secret` и переслать запрос как есть на
     * `https://api.box.com/oauth2/token`, а ответ Box (JSON с
     * `access_token`/`refresh_token`/`expires_in`) вернуть КАК ЕСТЬ
     * (тем же статусом). Это буквально проксирование в несколько
     * строк — пример на Node.js/Express есть в README, раздел "Box".
     * Refresh-токен у Box одноразовый и каждый раз меняется — сервер
     * не должен ничего "запоминать": он просто пересылает то, что
     * получил, назад в ответе, а хранением новой пары токенов в
     * браузере занимается уже сам `BoxProvider` (см. `StoredTokens`).
     */
    tokenEndpoint: string;
    /**
     * Полный URL `public/box-callback.html`, зарегистрированный в Box
     * как Redirect URI. Необязательно — по умолчанию вычисляется из
     * расположения самого скрипта плагина (см. `ownScript.ts`), как и
     * у Dropbox/OneDrive.
     */
    redirectUri?: string;
    /** Ключ в localStorage — поменяйте, если на странице несколько инстансов плагина. */
    storageKey?: string;
}
/**
 * Реализация StorageProvider для Box — единственная из четырёх
 * облачных, которой НУЖЕН собственный бэкенд владельца сайта (см.
 * doc-комментарий `BoxProviderOptions.tokenEndpoint` выше: у Box нет
 * ни PKCE, ни implicit-flow, обмен code/refresh на токен обязательно
 * требует client_secret). Всё остальное в этом файле устроено так же,
 * как у остальных трёх провайдеров: Client ID — не опция конструктора
 * (вводится через мастер настройки, `getSetupInfo()`/`setCredential()`,
 * и хранится в localStorage), OAuth-попап — тот же `runPopupAuth()`
 * из `pkce.ts`, что и у Dropbox (без генерации code_verifier/
 * code_challenge — Box их не принимает).
 *
 * Иерархия файлов у Box — по id, а не по пути (как у Google Drive, а
 * не как у Dropbox/OneDrive): `StorageItem.path`/`parentPath` здесь
 * хранят id папки/файла, а не строку пути.
 *
 * `resolve()` (вставка файла) сделан так же, как у Google Drive —
 * авторизованный fetch + `data:` URL с тем же лимитом
 * `MAX_INLINE_BYTES` — а не через "временную ссылку", как у
 * Dropbox/OneDrive. Так решили по двум причинам, обе — по итогам
 * проверки документации Box, не предположений:
 *   1. `GET /files/{id}/content` требует заголовок Authorization на
 *      каждый запрос (в отличие от `get_temporary_link`
 *      Dropbox/`downloadUrl` OneDrive, которые отдают самодостаточную
 *      ссылку) и отвечает редиректом на `dl.boxcloud.com` — Box
 *      официально документирует поддержку CORS только для
 *      `api.box.com` (см. `getSetupInfo()`, шаг про CORS Domains), а
 *      передаёт ли эти CORS-заголовки конечный редирект на
 *      `dl.boxcloud.com` — НЕ задокументировано нигде. Если у
 *      конкретного файла это всё же ломается с ошибкой CORS именно
 *      на вставке (не на самом списке файлов) — см. README, раздел
 *      "Box", там описан обходной путь (расширить тот же
 *      `tokenEndpoint`-сервер до простого прокси скачивания).
 *   2. Альтернатива — Box Shared Links (`PUT /files/{id}` с
 *      `shared_link.access: 'open'`) — была рассмотрена и
 *      отклонена: это не "временная ссылка", а самостоятельный
 *      публичный доступ к файлу, который остаётся открытым
 *      бессрочно, если явно не выключить (`unshared_at` для
 *      автоистечения Box разрешает ставить только платным аккаунтам —
 *      подтверждено документацией). Делать приватный файл публичным
 *      только чтобы превью показать пользователю в его собственном
 *      редакторе — куда более серьёзный побочный эффект, чем у
 *      остальных провайдеров, поэтому не используется.
 */
export declare class BoxProvider implements StorageProvider {
    readonly id = "box";
    readonly label = "Box";
    readonly icon = "<svg viewBox=\"0 0 24 24\" fill=\"currentColor\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M12 2 3 6.5V17.5L12 22l9-4.5V6.5L12 2Zm0 2.24 5.76 2.88L12 10 6.24 7.12 12 4.24ZM5 8.3l6 3v8.16l-6-3V8.3Zm8 11.16V11.3l6-3v8.16l-6 3Z\"/></svg>";
    private readonly storageKey;
    private readonly redirectUri;
    private readonly tokenEndpoint;
    private clientId;
    private tokens;
    constructor(options: BoxProviderOptions);
    getAuthState(): AuthState;
    getSetupInfo(): ProviderSetupInfo;
    setCredential(value: string): void;
    authenticate(): Promise<AuthState>;
    /** См. `ProviderSessionInfo` — данные для вкладки "Подключённые аккаунты". Чисто информационные, ничем не управляют. */
    getSessionInfo(): ProviderSessionInfo;
    disconnect(): void;
    private requireClientId;
    private requireRedirectUri;
    private requireTokenEndpoint;
    private get clientIdStorageKey();
    private readClientId;
    /**
     * POST на `tokenEndpoint` владельца сайта — см. подробный контракт
     * в doc-комментарии `BoxProviderOptions.tokenEndpoint`. Используется
     * и для authorization_code (в `authenticate()`), и для refresh_token
     * (в `ensureAccessToken()`) — тело запроса отличается только
     * `grant_type` и сопутствующими полями.
     */
    private exchangeToken;
    private ensureAccessToken;
    private readTokens;
    private writeTokens;
    list(folderPath: string, opts?: ListOptions): Promise<ListResult>;
    /**
     * Превью — best effort, как у Google Drive: у Box нет
     * batch-эндпоинта для миниатюр (в отличие от Dropbox), только
     * `files/{id}/thumbnail.png` по одному файлу — поэтому
     * ограниченно-параллельный fetch с Authorization-заголовком, как у
     * `GoogleDriveProvider.attachThumbnails`. `200` — реальная
     * миниатюра; `202` (ещё генерируется) и `302` (недоступна для
     * этого типа файла) намеренно пропускаются, а не читаются как
     * готовая картинка — оба статуса отдают Location на
     * заглушку/плейсхолдер, а не сам превью.
     */
    private attachThumbnails;
    /**
     * См. doc-комментарий класса выше — вставка через авторизованный
     * fetch + `data:` URL (как у Google Drive), не через временную
     * ссылку, и с тем же ограничением по размеру.
     */
    resolve(item: StorageItem): Promise<ResolvedAsset>;
    upload(file: File, folderPath: string, onProgress?: (progress: UploadProgress) => void): Promise<StorageItem>;
    /**
     * Поиск по ВСЕМУ Box (не только текущей папке) — как и у
     * Dropbox/Google Drive. `type` не ограничивается: сервер сам вернёт
     * files/folders/web_links, лишнее (web_link) отфильтровывается тут же.
     */
    search(query: string, opts?: ListOptions): Promise<ListResult>;
    delete(item: StorageItem): Promise<void>;
}
