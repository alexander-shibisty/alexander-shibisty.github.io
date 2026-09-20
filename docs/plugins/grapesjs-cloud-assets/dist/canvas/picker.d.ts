import type { Editor } from 'grapesjs';
import type { ResolvedAsset, StorageProvider } from '../types';
/**
 * Своё, полностью отдельное от Asset Manager окно выбора файла.
 *
 * Раньше плагин занимал `assetManager.custom` — это единственный
 * слот на весь редактор: если на сайте есть ещё один плагин,
 * которому тоже нужен свой Asset Manager UI, один из них молча
 * перезаписывает другого при инициализации. Здесь этот слот вообще
 * не трогается — стандартный Asset Manager (и любой другой плагин,
 * который его настраивает) остаётся как есть, а наш пикер открывает
 * `editor.Modal` напрямую, по собственной команде/блоку (см.
 * `panelButton.ts`, `block.ts`). `editor.Modal` — это общий стек
 * модалок редактора (сама GrapesJS так показывает код, настройки
 * и т.п.), а не чей-то персональный ресурс, так что открывать его
 * по клику пользователя безопасно и не конфликтует ни с чем.
 *
 * Резолвится массивом выбранных asset'ов (один или несколько — см.
 * множественный выбор shift/ctrl+клик в AssetBrowser), или `null`,
 * если пользователь закрыл окно, ничего не выбрав.
 */
export declare function openCloudMediaPicker(editor: Editor, providers: StorageProvider[], opts?: {
    title?: string;
    initialProviderId?: string;
}): Promise<ResolvedAsset[] | null>;
