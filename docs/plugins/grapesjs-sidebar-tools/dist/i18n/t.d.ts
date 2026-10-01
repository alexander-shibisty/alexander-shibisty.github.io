import type { Editor } from 'grapesjs';
import type { SidebarToolsMessages } from './types';
/** Namespace the plugin's catalog lives under in `editor.I18n`. */
export declare const NAMESPACE = "sidebarTools";
/**
 * `editor.I18n.t()` with the plugin namespace baked in. GrapesJS resolves
 * dotted paths and falls back to `localeFallback` ('en' by default) on
 * its own; if the key is still missing (editor without the I18n module,
 * a site that replaced the messages entirely) the built-in English text
 * is used, never `undefined` or the raw key.
 */
export declare function t(editor: Editor, key: keyof SidebarToolsMessages, params?: Record<string, unknown>, 
/** Explicit locale (e.g. the new value inside an `i18n:locale` handler). */
locale?: string): string;
/** Current editor locale ('en' when the I18n module is not available). */
export declare function getLocale(editor: Editor): string;
export declare function isRtlLocale(locale: string): boolean;
