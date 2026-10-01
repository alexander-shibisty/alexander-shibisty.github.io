import type { Component, Editor } from 'grapesjs';
export interface HierarchyBadgeDeps {
    /** Tooltip text of the badge. */
    title: () => string;
    getFrameEl: () => HTMLIFrameElement | null;
    /** Called before the list opens (the plugin closes the context menu there). */
    beforeOpen?: () => void;
    /** Called when the loop notices the editor was destroyed. */
    onEditorDestroyed?: () => void;
}
/**
 * A clickable "Name ▾" pill over the selected element (where GrapesJS shows
 * its own name badge). Clicking it lists the element and all its ancestors
 * up to the wrapper; picking one selects it, so the context menu then works
 * with that level.
 *
 * It's a plain fixed-position element in the host page, positioned from the
 * element's getBoundingClientRect() on every animation frame while something
 * is selected: that follows canvas scroll, zoom, resize and device changes
 * without depending on canvas internals.
 */
export declare class HierarchyBadge {
    private readonly editor;
    private readonly deps;
    private badgeEl;
    private listEl;
    private raf;
    /** Last applied position/name, to avoid touching the DOM on every frame. */
    private lastKey;
    private listDocs;
    constructor(editor: Editor, deps: HierarchyBadgeDeps);
    private getFrameEl;
    get element(): HTMLElement | null;
    get listElement(): HTMLElement | null;
    /** Starts following the selection (safe to call repeatedly). */
    start: () => void;
    destroy(): void;
    private tick;
    private ensureBadge;
    hide(): void;
    /** Repositions the badge over the selected element (one frame of the loop). */
    update(): void;
    /** The selected component followed by every selectable ancestor. */
    getChain(): Component[];
    openList(): void;
    closeList(): void;
    private onOutside;
    private onKeydown;
}
