import type { AuthState, ListOptions, ListResult, ProviderSessionInfo, ProviderSetupInfo, ResolvedAsset, StorageItem, StorageProvider, UploadProgress } from '../../types';
export interface OneDriveProviderOptions {
    /**
     * Полный URL `public/microsoft-callback.html`, зарегистрированный
     * в Azure как Redirect URI (платформа — Single-page application,
     * см. `getSetupInfo()`). Необязательно — по умолчанию вычисляется
     * из расположения самого скрипта плагина, как и у DropboxProvider
     * (см. комментарий в `ownScript.ts`). Передайте явно при ESM/
     * бандлерной сборке, где автоопределение не работает.
     */
    redirectUri?: string;
    /** Ключ в localStorage — поменяйте, если на странице несколько инстансов плагина. */
    storageKey?: string;
}
/**
 * Реализация StorageProvider для OneDrive через Microsoft Graph API
 * (архитектурно почти копия DropboxProvider — тот же PKCE-попап без
 * client secret, см. `providers/pkce.ts`, и тот же одноразовый App
 * Key-стиль настройки). Ключевое отличие от Dropbox: в Azure Portal
 * redirect URI ОБЯЗАТЕЛЬНО регистрируется под платформой
 * "Single-page application", а не "Web" — только у SPA-платформы
 * включён CORS на /token endpoint, иначе browser fetch() до обмена
 * code→token не достучится (см. `getSetupInfo()` и README).
 *
 * Приятная особенность Graph API по сравнению и с Dropbox, и с
 * Google Drive: `?$expand=thumbnails` отдаёт превью сразу в том же
 * запросе списка папки (см. `list()`) — не нужен отдельный batch-
 * запрос, как у Dropbox, и не нужен per-файл авторизованный fetch,
 * как у Google. И `@microsoft.graph.downloadUrl` — уже готовая,
 * преавторизованная прямая ссылка (аналог `get_temporary_link` у
 * Dropbox), которую можно вставлять в `<img src>` без заголовка
 * Authorization — так что `resolve()` тоже не сложнее Dropbox.
 */
export declare class OneDriveProvider implements StorageProvider {
    readonly id = "onedrive";
    readonly label = "OneDrive";
    readonly icon = "<svg viewBox=\"0 0 24 24\" fill=\"currentColor\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M7.5 17.5a4 4 0 0 1-.6-7.96 5 5 0 0 1 9.62-1.9 4.25 4.25 0 0 1 .98 8.36c-.15.02-.3.03-.46.03H8c-.17 0-.34-.01-.5-.03Z\"/></svg>";
    private readonly storageKey;
    private readonly redirectUri;
    private clientId;
    private tokens;
    constructor(options?: OneDriveProviderOptions);
    getAuthState(): AuthState;
    getSetupInfo(): ProviderSetupInfo;
    setCredential(value: string): void;
    authenticate(): Promise<AuthState>;
    disconnect(): void;
    /** См. `ProviderSessionInfo` — данные для вкладки "Подключённые аккаунты" (AssetBrowser.openSettingsModal). Чисто информационные, ничем не управляют. */
    getSessionInfo(): ProviderSessionInfo;
    private requireClientId;
    private requireRedirectUri;
    private get clientIdStorageKey();
    private readClientId;
    private ensureAccessToken;
    private readTokens;
    private writeTokens;
    /**
     * Резолвит "сырую" ошибку Microsoft Graph в понятное сообщение,
     * где это возможно. Сейчас распознаётся один конкретный случай,
     * с которым реально столкнулись при тестировании: рабочий/учебный
     * аккаунт, у чьего tenant'а не включена лицензия SharePoint Online
     * (на которой основан OneDrive for Business) — Graph в этом случае
     * возвращает `400 BadRequest` с текстом "Tenant does not have a
     * SPO license" вместо какой-либо более специфичной ошибки авторизации,
     * так что без этой проверки пользователь увидел бы малопонятный
     * сырой JSON. Остальные ошибки Graph показываются как есть — их
     * текст и так достаточно информативен (как и у сырых ответов Dropbox).
     */
    private throwGraphError;
    list(folderPath: string, opts?: ListOptions): Promise<ListResult>;
    resolve(item: StorageItem): Promise<ResolvedAsset>;
    /**
     * `@microsoft.graph.downloadUrl` у СВЕЖЕ загруженного/скопированного
     * файла иногда отсутствует в первом ответе Graph — по словам самой
     * команды OneDrive, часть метаданных досчитывается лениво "после
     * первых попыток скачивания" (github.com/OneDrive/onedrive-api-docs
     * issue #1258), и повторный запрос через мгновение обычно уже
     * отдаёт её. Ретраим ТОЛЬКО когда у элемента есть facet `file` — то
     * есть это точно обычный файл, а не папка/пакет (для них ссылки не
     * появится в принципе, лишние запросы только замедлят и без того
     * гарантированную ошибку).
     */
    private fetchItemMetadataWithRetry;
    private fetchItemMetadata;
    upload(file: File, folderPath: string, onProgress?: (progress: UploadProgress) => void): Promise<StorageItem>;
    /**
     * Поиск по ВСЕМУ OneDrive пользователя (не только текущей папке)
     * через `/me/drive/root/search(q='...')` — Graph сам ищет и по
     * имени, и немного по содержимому, но в первую очередь ранжирует
     * совпадения имени файла, что и нужно файловому пикеру.
     */
    search(query: string, opts?: ListOptions): Promise<ListResult>;
    delete(item: StorageItem): Promise<void>;
}
