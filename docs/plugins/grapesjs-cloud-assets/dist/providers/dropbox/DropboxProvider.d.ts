import type { AuthState, ListOptions, ListResult, ProviderSessionInfo, ProviderSetupInfo, ResolvedAsset, StorageItem, StorageProvider, UploadProgress } from '../../types';
export interface DropboxProviderOptions {
    /**
     * Полный URL `public/dropbox-callback.html`, зарегистрированный в
     * Dropbox как Redirect URI. Необязательно — по умолчанию
     * вычисляется из расположения самого скрипта плагина (соседняя с
     * `dist/` папка `public/`, см. `ownScript.ts`). Передайте явно,
     * если разложили файлы иначе или подключаете ESM-сборку через
     * `<script type="module">`/бандлер (там автоопределение не
     * работает — `document.currentScript` для модулей всегда `null`).
     */
    redirectUri?: string;
    /** Ключ в localStorage — поменяйте, если на странице несколько инстансов плагина. */
    storageKey?: string;
}
/**
 * Реализация StorageProvider для Dropbox через прямые вызовы Files
 * API v2 (НЕ через Dropbox Chooser) — так у нас один и тот же
 * AssetBrowser UI для всех хранилищ. Плата за это: приложение
 * должно быть типа "Full Dropbox" и, при большом числе
 * пользователей, проходит ревью Dropbox (в отличие от Chooser,
 * которому ревью не нужно — см. документ анализа, раздел Dropbox).
 *
 * Ни Dropbox, ни Google, ни Microsoft не позволяют одному общему App
 * Key работать на произвольном чужом домене без его
 * предрегистрации — это защита самих провайдеров, а не что-то, что
 * можно обойти в коде. Поэтому App Key здесь — не опция конструктора
 * (её пришлось бы задавать в коде сайта заранее), а вводится
 * владельцем сайта прямо в интерфейсе, через мастер настройки
 * (`getSetupInfo()`/`setCredential()`) — и сохраняется в его
 * браузере. Токены и сам ключ живут только в localStorage.
 */
export declare class DropboxProvider implements StorageProvider {
    readonly id = "dropbox";
    readonly label = "Dropbox";
    readonly icon = "<svg viewBox=\"0 0 24 24\" fill=\"currentColor\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M12 2 6 6.2 12 10.4 6 14.6 12 18.8l6-4.2-6-4.2 6-4.2Zm-6 14 6 4 6-4-6-4Z\"/></svg>";
    private readonly storageKey;
    private readonly redirectUri;
    private appKey;
    private tokens;
    constructor(options?: DropboxProviderOptions);
    getAuthState(): AuthState;
    getSetupInfo(): ProviderSetupInfo;
    setCredential(value: string): void;
    authenticate(): Promise<AuthState>;
    /** См. `ProviderSessionInfo` — данные для вкладки "Подключённые аккаунты" (AssetBrowser.openSettingsModal). Чисто информационные, ничем не управляют. */
    getSessionInfo(): ProviderSessionInfo;
    disconnect(): void;
    private requireAppKey;
    private requireRedirectUri;
    private get appKeyStorageKey();
    private readAppKey;
    private ensureAccessToken;
    private readTokens;
    private writeTokens;
    list(folderPath: string, opts?: ListOptions): Promise<ListResult>;
    /**
     * Подгружает превью для файлов-картинок текущей страницы через
     * `files/get_thumbnail_batch` (до 25 файлов за один запрос — а не
     * по одному `get_thumbnail_v2` на файл, как раньше сознательно не
     * делали из-за лимитов API, см. README). Результат — data: URL
     * прямо в `item.thumbnailUrl`, так что дальше рендер грида/таблицы
     * ничего не знает о провайдере — как и с `LocalAssetsProvider`.
     */
    private attachThumbnails;
    resolve(item: StorageItem): Promise<ResolvedAsset>;
    upload(file: File, folderPath: string, onProgress?: (progress: UploadProgress) => void): Promise<StorageItem>;
    /**
     * Поиск по ВСЕМУ Dropbox (а не только текущей папке) через
     * `files/search_v2` — так и просили: "поиск по хранилищу", не по
     * текущей директории. `filename_only: true` — ищем по имени, не по
     * содержимому файлов (полнотекстовый поиск был бы куда медленнее и
     * шумнее для файлового пикера).
     */
    search(query: string, opts?: ListOptions): Promise<ListResult>;
    delete(item: StorageItem): Promise<void>;
    private callApi;
}
