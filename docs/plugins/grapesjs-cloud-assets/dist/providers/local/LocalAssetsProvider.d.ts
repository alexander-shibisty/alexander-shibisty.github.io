import type { Editor } from 'grapesjs';
import type { AuthState, ListOptions, ListResult, ResolvedAsset, StorageItem, StorageProvider, UploadProgress } from '../../types';
export interface LocalAssetsProviderOptions {
    /** Заголовок вкладки. По умолчанию — перевод `cloudAssets.local.tabLabel` ("Свои файлы" на русском). */
    label?: string;
}
/**
 * "Дефолтный" локальный менеджер как ОБЫЧНАЯ вкладка того же
 * единого AssetBrowser — тот самый выбор между "своими" файлами и
 * облаком, который иначе пропадает: как только `assetManager.custom`
 * подключён, стандартная сетка/загрузка/поле URL GrapesJS больше не
 * рисуется вообще, и без этой вкладки способа добавить файл с диска
 * или вставить прямую ссылку не остаётся.
 *
 * Источник данных этой вкладки — та же коллекция, что
 * `editor.AssetManager.getAll()`/`.add()` использовали всегда, так
 * что она видит и то, что в холст добавляют другие части редактора.
 *
 * Загрузка с диска сделана через data: URL (как `embedAsBase64` в
 * самом grapesjs, только без завязки на конфиг) — своего сервера для
 * файлов у демонстрационной страницы нет. Если на сайте уже есть
 * backend для загрузок, замените здесь тело `upload()` на POST на
 * свой endpoint — вкладка и её UI никак не привязаны к конкретному
 * способу хранения.
 */
export declare class LocalAssetsProvider implements StorageProvider {
    private readonly editor;
    readonly id = "local";
    readonly label: string;
    readonly icon = "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\" stroke-linejoin=\"round\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M12 3v11m0 0 3.5-3.5M12 14l-3.5-3.5\"/><path d=\"M5 16v2a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-2\"/></svg>";
    constructor(editor: Editor, options?: LocalAssetsProviderOptions);
    getAuthState(): AuthState;
    authenticate(): Promise<AuthState>;
    disconnect(): void;
    list(_folderPath: string, _opts?: ListOptions): Promise<ListResult>;
    resolve(item: StorageItem): Promise<ResolvedAsset>;
    upload(file: File, _folderPath: string, onProgress?: (progress: UploadProgress) => void): Promise<StorageItem>;
    addByUrl(url: string): Promise<StorageItem>;
}
