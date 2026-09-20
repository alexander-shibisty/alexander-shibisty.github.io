import type { Editor } from 'grapesjs';
import type { StorageProvider } from '../types';
export interface CloudMediaBlockOptions {
    providers: StorageProvider[];
    /**
     * @deprecated Больше не используется. Раньше подписывал общий блок
     * "Cloud media" (открывал пикер на той вкладке, что была активна в
     * прошлый раз) — этот блок убрали как визуальный дубликат блока
     * первого провайдера (обычно "Свои файлы"/Local, см. `LocalAssetsProvider`):
     * по факту оба открывали одно и то же окно, просто с разной начальной
     * вкладкой, и на панели блоков это выглядело как две одинаковые кнопки
     * "Storage". Поле оставлено в типе только ради обратной совместимости
     * `pluginsOpts`, значение игнорируется.
     */
    blockLabel?: string;
    blockCategory?: string;
    /**
     * @deprecated Больше не используется здесь — заголовком окна у
     * каждого блока провайдера всегда служит `provider.label` (см.
     * `registerProviderBlock`). Поле оставлено в типе ради обратной
     * совместимости `pluginsOpts`; на модалку кнопки тулбара
     * (`registerCloudMediaButton`) не влияет.
     */
    modalTitle?: string;
}
/**
 * Регистрирует в Block Manager по одному блоку на каждое уже
 * добавленное хранилище (провайдера) — отдельно от Asset Manager,
 * чтобы не зависеть от `assetManager.custom` (см. `picker.ts`).
 * Общего блока "Cloud media", который открывал бы пикер на
 * последней активной вкладке, больше нет: он визуально дублировал
 * блок первого провайдера (обычно "Свои файлы"/Local) — оба вели в
 * одно и то же окно, только с разной начальной вкладкой, и на
 * панели "Storage" это выглядело как две одинаковые кнопки. См.
 * `registerProviderBlocks` — она и делает всю работу.
 */
export declare function registerCloudMediaBlock(editor: Editor, opts: CloudMediaBlockOptions): void;
