/**
 * Every element of the plugin is rendered into document.body (position:
 * fixed, viewport coordinates), outside the editor container, so nothing
 * can be inherited from the GrapesJS theme: colors and font are explicit.
 */
/** CSS class prefix of every element the plugin renders. */
export declare const PFX = "gjs-cm";
export declare const STYLE_ID = "gjs-cm-styles";
export declare const CSS: string;
export declare function injectCss(doc?: Document): void;
