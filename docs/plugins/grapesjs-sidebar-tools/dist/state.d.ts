import type { ResolvedOptions, SidebarState } from './types';
export interface StateStore {
    readonly state: SidebarState;
    save(): void;
}
export declare function defaultState(): SidebarState;
/** Validates whatever was found in storage; unknown/broken fields fall back to defaults. */
export declare function sanitizeState(raw: unknown): SidebarState;
/**
 * Loads the persisted state (when `persist` is on) and returns a store
 * whose `save()` writes it back. With `persist: false` everything lives
 * in memory only.
 */
export declare function createStateStore(options: Pick<ResolvedOptions, 'persist' | 'storageKey'>): StateStore;
