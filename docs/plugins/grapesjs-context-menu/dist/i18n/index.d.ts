import type { Editor } from 'grapesjs';
import type { ContextMenuLabels } from '../types';
/** i18n namespace inside `editor.I18n`: keys are `contextMenu.<label>`. */
export declare const I18N_NS = "contextMenu";
/**
 * The same language codes as `grapesjs/locale` (ar, bs, ca, de, el, en, es,
 * fa, fr, he, id, it, ko, nb, nl, pl, pt, ru, se, tr, vi, zh) plus `uk`.
 * Wherever the site configures or detects the GrapesJS core locale, the
 * plugin has a translation under the same code. `se` is Swedish (the core's
 * historical code, see locales/se.ts).
 */
export declare const locales: Record<string, ContextMenuLabels>;
export declare const SUPPORTED_LOCALES: readonly string[];
/**
 * Registers every built-in locale in `editor.I18n` under `contextMenu`.
 *
 * Nothing else has to be configured: GrapesJS detects the locale from the
 * browser language by default (`i18n.detectLocale`) and falls back to
 * `localeFallback` ('en') for languages nobody translated.
 *
 * Uses `addMessages()` (merge), not `setMessages()`, so messages from the
 * site config or other plugins survive. To override a phrase of this plugin,
 * call `editor.I18n.addMessages(...)` AFTER the plugin is loaded (e.g. in
 * `editor.onReady`) — the later call wins — or use the `labels` option.
 */
export declare function registerMessages(editor: Editor): void;
/**
 * Label lookup order: explicit `labels` option → `editor.I18n` (current
 * locale, then the editor's fallback locale) → built-in English.
 */
export declare function createTranslator(editor: Editor, overrides: Partial<ContextMenuLabels>): (key: keyof ContextMenuLabels) => string;
