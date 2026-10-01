/**
 * grapesjs-context-menu
 * ---------------------
 * Right-click context menu for the GrapesJS canvas and Layer Manager, plus a
 * clickable hierarchy badge over the selected element.
 *
 * Menu items (in this order):
 *   - Add element        -> submenu with Block Manager blocks grouped by
 *                           category; the block is appended INTO the target
 *   - Select parent / Select child
 *   - Move up / Move down (order among siblings)
 *   - Move (drag)        -> the same `tlb-move` command as the toolbar
 *   - Duplicate          -> `tlb-clone`
 *   - View styles        -> runs `viewStylesCommand`; hidden when that
 *                           command is not registered
 *   - Delete
 *
 * Usage:
 *   import grapesjs from 'grapesjs';
 *   import contextMenu from 'grapesjs-context-menu';
 *   grapesjs.init({ plugins: [contextMenu], pluginsOpts: { [contextMenu]: { ... } } });
 *
 * or without a bundler (UMD build, global `grapesjsContextMenu`):
 *   grapesjs.init({ plugins: [grapesjsContextMenu.default] });
 */
import type { Component, Editor } from 'grapesjs';
import type { ContextMenuOptions } from './types';
export type { BuiltinItemId, ContextMenuLabels, ContextMenuOptions, MenuContext, MenuItem, } from './types';
export { locales, SUPPORTED_LOCALES } from './i18n';
export { EVENTS } from './ContextMenu';
/** Public API stored on the editor, e.g. to open the menu programmatically. */
export interface ContextMenuApi {
    /** Opens the menu at viewport coordinates of the host page. */
    open(x: number, y: number, component: Component, source?: 'canvas' | 'layers'): void;
    close(): void;
    readonly isOpen: boolean;
    /** Removes every listener and element the plugin created. */
    destroy(): void;
}
/** Returns the plugin API of an editor (undefined if the plugin isn't loaded). */
export declare function getContextMenu(editor: Editor): ContextMenuApi | undefined;
declare function contextMenuPlugin(editor: Editor, opts?: ContextMenuOptions): void;
export { contextMenuPlugin };
export default contextMenuPlugin;
