import type { ContextMenuOptions, ResolvedOptions } from './types';
export declare const DEFAULT_OPTIONS: ResolvedOptions;
/**
 * Shallow merge with defaults; `labels` is merged one level deeper so a
 * single overridden label does not wipe the others. `undefined` values in
 * the user options are ignored (they must not erase a default).
 */
export declare function resolveOptions(opts?: ContextMenuOptions | null): ResolvedOptions;
