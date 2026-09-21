import type { Editor } from 'grapesjs';
import type { StorageProvider } from '../types';
export interface CloudMediaButtonOptions {
    providers: StorageProvider[];
    buttonLabel?: string;
    modalTitle?: string;
}
/**
 * Кнопка "Вставить из облака" на верхней панели ('options' — тот же
 * стандартный панель, куда добавляют свои кнопки export-в-zip,
 * просмотр кода и т.п. официальные плагины). Не трогает Asset
 * Manager — открывает наш собственный пикер (`picker.ts`) и
 * вставляет результат рядом с выделенным компонентом (см.
 * `insert.ts`).
 */
export declare function registerCloudMediaButton(editor: Editor, opts: CloudMediaButtonOptions): void;
