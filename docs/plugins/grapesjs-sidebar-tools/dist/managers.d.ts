/**
 * The real Style Manager / Trait Manager DOM lives in their own top tabs.
 * A DOM node can only be in one place, so while the Layers tab is open and
 * something is selected we MOVE those nodes into the bottom half of the
 * layers panel, and put them back as soon as that condition stops being
 * true. We never call render(), which would recreate the views (and break
 * the managers' own tabs).
 */
export type ManagerKey = 'sm' | 'tm';
export interface ManagerSlot {
    el: HTMLElement;
    /** Original place, to move the element back. */
    parent: Node | null;
    next: Node | null;
}
interface ModuleLike {
    getConfig?: () => {
        appendTo?: unknown;
        custom?: unknown;
    } | undefined;
    /** TraitManager keeps its root view here. */
    view?: {
        el?: HTMLElement;
    };
    /** StyleManager keeps its root view here. */
    SectView?: {
        el?: HTMLElement;
    };
}
/**
 * CSS classes of the root element each manager renders (default `gjs-`
 * prefix). The Trait Manager root is `gjs-traits-cs` in GrapesJS 0.21+,
 * `gjs-trt-traits` in older versions.
 */
export declare const MANAGER_CLASSES: Record<ManagerKey, string[]>;
/**
 * Finds the rendered root element of a manager:
 *  1. inside its `appendTo` container (by class, else the first child)
 *  2. the module's own view element
 *  3. anywhere in the document, by class
 * Elements inside `exclude` (our own pane) are skipped in 2 and 3.
 */
export declare function locateManager(mod: ModuleLike | undefined | null, classes: string | string[], exclude?: Node | null): ManagerSlot | null;
/** Default commands that render each manager into the views panel. */
export declare const MANAGER_COMMANDS: Record<ManagerKey, string>;
/**
 * With the default GrapesJS panels a manager is rendered only when its
 * tab is opened for the first time, so e.g. the Trait Manager does not
 * exist until the "settings" tab was clicked once. Render it through its
 * own command without touching the panel buttons: the command object is
 * called directly (no `run:*` event) with an inactive sender, then
 * stopped, so nothing becomes visible in the views panel.
 *
 * Returns true when the command was run.
 */
export declare function prerenderManager(editor: any, key: ManagerKey, module: ModuleLike | null | undefined): boolean;
export interface ManagerMover {
    /** Moves the manager into `container` (remembers where it came from). */
    moveIn(key: ManagerKey, container: HTMLElement): void;
    /** Moves the manager back to where it was found. */
    moveBack(key: ManagerKey): void;
    moveAllBack(): void;
    get(key: ManagerKey): ManagerSlot | null;
}
export declare function createManagerMover(getModule: (key: ManagerKey) => ModuleLike | undefined | null, 
/** Called once per manager when it is not rendered yet; return true if it may be now. */
prerender?: (key: ManagerKey) => boolean): ManagerMover;
export {};
