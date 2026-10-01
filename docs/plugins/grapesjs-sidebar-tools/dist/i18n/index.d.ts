import type { Editor } from 'grapesjs';
import type { SidebarToolsMessages } from './types';
/**
 * Exactly the locale codes GrapesJS core ships in `grapesjs/locale` (ar,
 * bs, ca, de, el, en, es, fa, fr, he, id, it, ko, nb, nl, pl, pt, ru, se,
 * tr, vi, zh), so wherever a site configures or detects the core locale,
 * the plugin has a translation under the same code. `se` is Swedish (a
 * historically wrong code in GrapesJS itself, see `locales/se.ts`), kept
 * as is for compatibility with the core.
 */
export declare const LOCALE_MESSAGES: Record<string, SidebarToolsMessages>;
export declare const SUPPORTED_LOCALES: readonly string[];
/**
 * Registers the plugin's translations in `editor.I18n` under the
 * `sidebarTools` key, for every supported language at once.
 *
 * Nothing else needs to be configured: GrapesJS detects the locale from
 * the browser language by default (`i18n.detectLocale`) or uses the
 * explicit `i18n.locale`, and falls back to `localeFallback` ('en') for
 * languages that aren't in the list.
 *
 * Uses `addMessages()` (merge), not `setMessages()`, so messages the site
 * configured itself or other plugins' catalogs are kept. To override a
 * single string, call `editor.I18n.addMessages(...)` after init (or use
 * the `labels` plugin option) — the later `addMessages()` call wins.
 */
export declare function registerI18n(editor: Editor): void;
export { getLocale, isRtlLocale, NAMESPACE, t } from './t';
export type { SidebarToolsMessages } from './types';
