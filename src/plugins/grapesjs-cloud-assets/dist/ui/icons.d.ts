import type { ResolvedAssetType } from '../types';
export declare const FOLDER_ICON: string;
export declare function typeIcon(type: ResolvedAssetType): string;
/** Переключатель "плитка"/"таблица" в тулбаре — см. `AssetBrowser.renderViewToggle`. */
export declare const GRID_VIEW_ICON: string;
export declare const TABLE_VIEW_ICON: string;
/** Кнопка настроек (выпадающее меню с "Выйти") в тулбаре — см. `AssetBrowser.renderSettingsMenu`. */
export declare const SETTINGS_ICON: string;
/** Кнопка "Обновить сейчас" (сбросить 15-минутный кеш списка) — см. `AssetBrowser.renderRefreshButton`. */
export declare const REFRESH_ICON: string;
/** Переключатель на древовидный вид в тулбаре — см. `AssetBrowser.renderViewToggle`. */
export declare const TREE_VIEW_ICON: string;
/**
 * Шеврон-раскрыватель узла дерева — рисуется указывающим вправо,
 * поворот на 90° при раскрытом узле делается в CSS через
 * `.gca-tree-node__toggle--expanded` (см. styles.ts), а не двумя
 * разными иконками, чтобы анимация поворота была плавной.
 */
export declare const CHEVRON_RIGHT_ICON: string;
/** Кнопка "Развернуть всё" в тулбаре древовидного вида — см. `AssetBrowser.renderTree`. */
export declare const EXPAND_ALL_ICON: string;
/** Кнопка "Свернуть всё" в тулбаре древовидного вида — см. `AssetBrowser.renderTree`. */
export declare const COLLAPSE_ALL_ICON: string;
/** Иконка облака-загрузки в оверлее drag-and-drop — см. `AssetBrowser.renderDropOverlay`. */
export declare const CLOUD_UPLOAD_ICON: string;
/** Кнопка "+" в конце ряда вкладок (выпадающее меню "Подключить S3") — см. `AssetBrowser.renderShell`. */
export declare const PLUS_ICON: string;
/**
 * Шеврон вниз — кнопка "ещё вкладки" (не поместившиеся по ширине) в
 * конце ряда вкладок, см. `AssetBrowser.updateTabsOverflow`. Отдельная
 * иконка, а не повёрнутый `CHEVRON_RIGHT_ICON` (тот уже используется
 * с вращением под раскрытие узла дерева — не хотим завязывать два
 * независимых UI на одну и ту же переходную анимацию).
 */
export declare const CHEVRON_DOWN_ICON: string;
