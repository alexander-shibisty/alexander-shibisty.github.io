/**
 * Places a fixed-position element at (x, y) and pulls it back inside the
 * viewport if it would overflow. Must be called AFTER the element is in the
 * document, so its size is real.
 */
export declare function placeInViewport(el: HTMLElement, x: number, y: number): void;
/** Strips markup (incl. inline <svg>/<style>/<script>) and collapses whitespace. */
export declare function htmlToText(html: string): string;
/** Canvas frame geometry: its viewport rect plus the zoom factor. */
export interface FrameGeometry {
    rect: DOMRect;
    scale: number;
}
export declare function getFrameGeometry(frameEl: HTMLIFrameElement): FrameGeometry;
/** Converts a point in the canvas iframe viewport to a point in the host page viewport. */
export declare function framePointToPage(frameEl: HTMLIFrameElement, x: number, y: number): {
    x: number;
    y: number;
};
