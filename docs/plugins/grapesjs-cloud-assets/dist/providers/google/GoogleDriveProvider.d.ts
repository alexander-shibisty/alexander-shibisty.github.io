import type { AuthState, ListOptions, ListResult, ProviderSessionInfo, ProviderSetupInfo, ResolvedAsset, StorageItem, StorageProvider, UploadProgress } from '../../types';
export interface GoogleDriveProviderOptions {
    /** Ключ в localStorage — поменяйте, если на странице несколько инстансов плагина. */
    storageKey?: string;
}
/**
 * Минимальная часть API Google Identity Services (GIS), которой
 * пользуется этот файл — полных типов `@types/google.accounts` в
 * проекте нет. `callback` — намеренно мутируемое поле: это
 * задокументированный самим Google паттерн переиспользования одного
 * token client между несколькими вызовами `requestAccessToken()` —
 * callback переприсваивается перед каждым вызовом (см. `requestToken()`).
 */
interface GisTokenClient {
    callback: (response: GisTokenResponse) => void;
    requestAccessToken(overridableParams?: {
        prompt?: string;
    }): void;
}
interface GisTokenResponse {
    access_token?: string;
    expires_in?: number;
    error?: string;
}
interface GisGlobal {
    accounts: {
        oauth2: {
            initTokenClient(config: {
                client_id: string;
                scope: string;
                callback: (response: GisTokenResponse) => void;
                error_callback?: (error: {
                    type?: string;
                    message?: string;
                }) => void;
            }): GisTokenClient;
            revoke(token: string, done?: () => void): void;
        };
    };
}
declare global {
    interface Window {
        google?: GisGlobal;
    }
}
/**
 * Реализация StorageProvider для Google Drive — единственная из
 * трёх облачных, которая НЕ использует ручной PKCE-попап (как
 * Dropbox/OneDrive). Google не даёт публичному клиенту без backend'а
 * обменять code на токен без client_secret (проверено отдельным
 * технически исследованием документации Google, не предположением) —
 * поэтому вместо этого используется официальный клиентский путь
 * Google Identity Services (GIS), "Token client": он выдаёт access
 * token напрямую в браузере, без code/PKCE/redirect URI вообще — за
 * это платим отсутствием refresh-токена (Google его в этой схеме не
 * выдаёт), поэтому раз в ~час `ensureAccessToken()` тихо переспрашивает
 * токен через тот же GIS, и если тихо не получилось — просит войти
 * заново тем же экраном, что и у остальных провайдеров.
 *
 * Второе отличие от Dropbox/OneDrive: у Google Drive REST API нет
 * способа отдать готовую embeddable-ссылку на приватный файл без
 * заголовка Authorization — поэтому `resolve()` сам скачивает файл
 * через авторизованный fetch и превращает его в data: URL (см.
 * `MAX_INLINE_BYTES` и README).
 */
export declare class GoogleDriveProvider implements StorageProvider {
    readonly id = "google-drive";
    readonly label = "Google Drive";
    readonly icon = "<svg viewBox=\"0 0 24 24\" fill=\"currentColor\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M8.1 2.6 2 13.3l3 5.2 6.1-10.7-3-5.2Zm2.6 15.9h9.8l-3-5.2H7.7l3 5.2ZM15.4 2.6h-6l6.1 10.7 3-5.2-3.1-5.5Z\"/></svg>";
    private readonly storageKey;
    private clientId;
    private token;
    private tokenClient;
    constructor(options?: GoogleDriveProviderOptions);
    getAuthState(): AuthState;
    getSetupInfo(): ProviderSetupInfo;
    setCredential(value: string): void;
    authenticate(): Promise<AuthState>;
    disconnect(): void;
    private requireClientId;
    private get clientIdStorageKey();
    private readClientId;
    private getTokenClient;
    /**
     * Запрашивает access token через GIS. `silent: true` — попытка без
     * UI (`prompt: ''`): срабатывает, если пользователь уже давал
     * согласие и его сессия Google жива; если GIS не смог показать
     * (или пользователь закрыл) — переиспользуем ту же ошибку
     * `sessionExpired`, что и у остальных провайдеров, чтобы UI
     * одинаково падал обратно на экран "Войти".
     */
    private requestToken;
    private ensureAccessToken;
    /** См. `ProviderSessionInfo` — данные для вкладки "Подключённые аккаунты" (AssetBrowser.openSettingsModal). Чисто информационные, ничем не управляют. */
    getSessionInfo(): ProviderSessionInfo;
    private readToken;
    private writeToken;
    list(folderPath: string, opts?: ListOptions): Promise<ListResult>;
    /**
     * Превью — best effort, как и у Dropbox/OneDrive: у Google Drive
     * REST API нет batch-эндпоинта для миниатюр (в отличие от
     * Dropbox'а и `$expand` у Graph), а сам `thumbnailLink` требует
     * авторизованный запрос для приватных файлов — поэтому тут
     * ограниченно-параллельный per-файл fetch с Authorization header,
     * результат — object URL (годится, это только превью в самом UI
     * браузера файлов, не финальный src вставляемого asset'а — тот
     * собирается в `resolve()` отдельно, как data: URL).
     */
    private attachThumbnails;
    resolve(item: StorageItem): Promise<ResolvedAsset>;
    upload(file: File, folderPath: string, onProgress?: (progress: UploadProgress) => void): Promise<StorageItem>;
    /**
     * Поиск по ВСЕМУ Google Drive пользователя (не только текущей
     * папке) — по имени файла (`name contains`), а не по содержимому:
     * полнотекстовый `fullText contains` шумит результатами (совпадения
     * внутри документов) и не то, чего ждут от строки поиска в файловом
     * пикере.
     */
    search(query: string, opts?: ListOptions): Promise<ListResult>;
    /**
     * Отправляет файл в корзину Google Drive (`trashed: true`) вместо
     * необратимого `DELETE` — пользователь может ещё 30 дней
     * восстановить его через сам drive.google.com, если удалил не то.
     */
    delete(item: StorageItem): Promise<void>;
}
export {};
