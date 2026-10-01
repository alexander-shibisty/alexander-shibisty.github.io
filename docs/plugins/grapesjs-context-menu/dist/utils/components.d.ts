import type { Component, Editor } from 'grapesjs';
export declare function getParent(comp: Component): Component | undefined;
/** First child that can be selected (text nodes and `selectable: false` are skipped). */
export declare function firstSelectableChild(comp: Component): Component | undefined;
export declare function isAncestorOrSelf(ancestor: Component, comp: Component | undefined): boolean;
/** Human readable component name, as the Layer Manager shows it. */
export declare function componentName(comp: Component): string;
/** `tag.firstClass` hint shown next to the name in the hierarchy list. */
export declare function componentHint(comp: Component): string;
/** Everything a component allows / forbids for the menu actions. */
export interface ComponentCapabilities {
    parent?: Component;
    child?: Component;
    index: number;
    siblingsCount: number;
    canAddInside: boolean;
    canMoveUp: boolean;
    canMoveDown: boolean;
    canDrag: boolean;
    canClone: boolean;
    canRemove: boolean;
}
export declare function getCapabilities(comp: Component): ComponentCapabilities;
/**
 * Moves a component one position up (`-1`) or down (`+1`) among its
 * siblings and keeps it selected. Returns `false` when it can't move.
 */
export declare function moveAmongSiblings(editor: Editor, comp: Component, dir: -1 | 1): boolean;
/**
 * `false` once `editor.destroy()` ran. GrapesJS 0.21 doesn't emit a
 * `destroy` event, so long-lived loops/listeners check this themselves.
 */
export declare function isEditorAlive(editor: Editor): boolean;
/** Finds the component whose view element is `el` (depth-first). */
export declare function findByEl(root: Component, el: Element): Component | undefined;
/**
 * Component under a node of the canvas iframe: the closest element that
 * GrapesJS attached a view to (`el.__gjsv`, set by every ComponentView),
 * falling back to a tree walk; the wrapper if nothing matched.
 */
export declare function componentFromCanvasEl(editor: Editor, el: Element | null): Component | undefined;
/** Finds the component whose Layer Manager row element is `rowEl`. */
export declare function findByLayerEl(root: Component, rowEl: Element): Component | undefined;
