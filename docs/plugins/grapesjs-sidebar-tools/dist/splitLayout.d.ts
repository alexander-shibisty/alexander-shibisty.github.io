import type { BottomTab, SidebarToolsLabels } from './types';
export interface SplitLayoutOptions {
    labels: SidebarToolsLabels;
    /** Right-to-left tabs (ar / he / fa). */
    rtl?: boolean;
    minRatio: number;
    maxRatio: number;
    initialTab: BottomTab;
    initialRatio: number;
    /** Called when the user switches the tab. */
    onTabChange?(tab: BottomTab): void;
    /** Called once a drag / double-click on the resizer is finished. */
    onRatioCommit?(ratio: number): void;
}
export interface SplitLayout {
    /** The layers container the split was built in. */
    readonly host: HTMLElement;
    /** `.gjs-lsb-split` element (flex column). */
    readonly el: HTMLElement;
    readonly topPane: HTMLElement;
    readonly resizer: HTMLElement;
    readonly bottomPane: HTMLElement;
    /** Where the Style Manager is moved to. */
    readonly smContainer: HTMLElement;
    /** Where the Trait Manager is moved to. */
    readonly tmContainer: HTMLElement;
    readonly tab: BottomTab;
    readonly ratio: number;
    showTab(tab: BottomTab): void;
    setRatio(ratio: number): number;
    setOpen(open: boolean): void;
    /** Updates the texts (e.g. after the editor locale changed). */
    setLabels(labels: SidebarToolsLabels, rtl?: boolean): void;
    isOpen(): boolean;
    /** true when the layers container is actually rendered (not display:none). */
    isVisible(): boolean;
    /** Puts the original children back into the host and removes everything added. */
    destroy(): void;
}
export declare const SPLIT_CLASS = "gjs-lsb-split";
export declare const HOST_CLASS = "gjs-lsb-host";
export declare const OPEN_CLASS = "gjs-lsb-split--open";
export declare const RESIZING_CLASS = "gjs-lsb-resizing";
export declare const TAB_ACTIVE_CLASS = "gjs-lsb-tab--active";
/** Returns the split already built inside `host`, if any. */
export declare function findSplitElement(host: HTMLElement): HTMLElement | null;
/**
 * Wraps the current content of `host` (the layer tree) into the top pane
 * and adds a resizer plus a tabbed bottom pane below it.
 */
export declare function createSplitLayout(host: HTMLElement, opts: SplitLayoutOptions): SplitLayout;
