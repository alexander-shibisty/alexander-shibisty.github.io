import type { ResolvedOptions, SidebarToolsOptions } from './types';
export declare const DEFAULT_OPTIONS: ResolvedOptions;
/**
 * Deep-merges plain objects; arrays, functions and DOM nodes are taken
 * from `extra` as is. `undefined` values in `extra` are ignored, so
 * `{ storageKey: undefined }` keeps the default.
 */
export declare function mergeDeep<T extends Record<string, any>>(base: T, extra?: Record<string, any> | null): T;
export declare function resolveOptions(opts?: SidebarToolsOptions | null): ResolvedOptions;
