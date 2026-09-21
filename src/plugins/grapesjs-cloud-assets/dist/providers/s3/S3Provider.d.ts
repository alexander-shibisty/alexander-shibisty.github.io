import type { AuthState, ListOptions, ListResult, ResolvedAsset, S3ConnectionConfig, StorageItem, StorageProvider, UploadProgress } from '../../types';
/**
 * `StorageProvider` для прямого доступа к S3-совместимому бакету
 * (настоящий AWS S3 или MinIO/Wasabi/DigitalOcean Spaces/Cloudflare
 * R2 и т.п. — см. `S3ConnectionConfig.endpoint`/`forcePathStyle`) —
 * без сервера, напрямую из браузера через подписанные запросы
 * (`../s3/sigv4.ts`).
 *
 * В отличие от Dropbox/Google/OneDrive здесь нет OAuth: доступ у
 * пользователя уже есть в момент, когда он вводит пару ключей в
 * попапе "Подключить S3" (`AssetBrowser.openConnectS3Modal`), поэтому
 * `getAuthState()` всегда `authenticated: true` — экран входа/мастер
 * настройки для этого провайдера в принципе не показывается
 * (AssetBrowser создаёт инстанс, только когда все параметры уже
 * известны).
 *
 * Требование к самому бакету — CORS должен разрешать запросы с
 * origin'а сайта (методы GET/PUT/DELETE/HEAD) — без этого браузер не
 * даст прочитать ответ ни на один вызов ниже, никакая подпись тут не
 * поможет. Текст-подсказка об этом — `s3.corsHint` в мастере
 * подключения.
 */
export declare class S3Provider implements StorageProvider {
    private readonly config;
    /** См. doc-комментарий у `S3_ICON` выше. */
    static readonly ICON: string;
    readonly id: string;
    readonly label: string;
    readonly icon: string;
    constructor(config: S3ConnectionConfig);
    private get endpoint();
    getAuthState(): AuthState;
    authenticate(): Promise<AuthState>;
    disconnect(): void;
    list(folderPath: string, opts?: ListOptions): Promise<ListResult>;
    resolve(item: StorageItem): Promise<ResolvedAsset>;
    upload(file: File, folderPath: string, onProgress?: (progress: UploadProgress) => void): Promise<StorageItem>;
    delete(item: StorageItem): Promise<void>;
}
