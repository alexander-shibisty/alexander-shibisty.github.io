import type { Editor } from 'grapesjs';
/**
 * Remembers the last "global" (top panel) tab command and re-activates it
 * after a reload.
 */
/**
 * A "view" button is a panel button whose command is the string `cmdId`.
 * GrapesJS default panels don't set `togglable: false` on them (they are
 * grouped with `context`), so that is not required.
 */
export declare function findViewButton(editor: Editor, cmdId: string): any;
export interface GlobalTabMemory {
    /** Handler for the editor's `run` event. */
    onRun(id: unknown): void;
    /** Re-activates the remembered tab, then starts recording. */
    restore(): void;
    destroy(): void;
}
export interface GlobalTabMemoryOptions {
    commands: string[];
    restore: boolean;
    get(): string | null;
    set(id: string): void;
    /** Delay before recording starts (lets the editor's own initial runs pass). */
    recordDelay?: number;
}
export declare function createGlobalTabMemory(editor: Editor, opts: GlobalTabMemoryOptions): GlobalTabMemory;
