import type { Component, Editor } from 'grapesjs';
import type { ContextMenuLabels, MenuContext, MenuItem, ResolvedOptions } from './types';
export declare const EVENTS: {
    readonly open: "context-menu:open";
    readonly close: "context-menu:close";
    readonly action: "context-menu:action";
};
type Translate = (key: keyof ContextMenuLabels) => string;
/**
 * The right-click menu itself: renders into `document.body` with
 * `position: fixed`, so the caller passes viewport coordinates of the HOST
 * page (canvas coordinates must be converted first, see framePointToPage).
 */
export declare class ContextMenu {
    private readonly editor;
    private readonly options;
    private readonly t;
    private readonly getFrameDoc;
    private menuEl;
    private submenuEl;
    private ctx;
    private items;
    /** Documents with our "click outside / Escape" listeners (host + canvas iframe). */
    private listened;
    private listenTimer;
    constructor(editor: Editor, options: ResolvedOptions, t: Translate, getFrameDoc: () => Document | null);
    get isOpen(): boolean;
    get element(): HTMLElement | null;
    get submenuElement(): HTMLElement | null;
    /** Item list for a component (after `extendMenu`). Exposed for tests/extensions. */
    buildItems(ctx: MenuContext): MenuItem[];
    open(x: number, y: number, component: Component, source: MenuContext['source']): void;
    close(): void;
    destroy(): void;
    private renderSeparator;
    private renderItem;
    private onMenuClick;
    /** Runs a menu item by id (also used by keyboard handling and tests). */
    runAction(id: string, event?: Event): void;
    private closeSubmenu;
    openAddSubmenu(anchorEl?: HTMLElement): void;
    private onSubmenuClick;
    /** Appends a block into the menu's component and selects the result. */
    addBlock(id: string): Component | undefined;
    private onOutside;
    private onKeydown;
    private listen;
    private onFrameWheel;
    private unlisten;
}
export {};
