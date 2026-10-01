import type { Editor } from 'grapesjs';
import type { ElementTarget } from './types';
export interface LayersRootResult {
    el: HTMLElement | null;
    /** true when the user explicitly configured a target (worth a warning if it is missing). */
    explicit: boolean;
}
/**
 * Where the layer tree lives:
 *  1. `layersContainer` plugin option
 *  2. `layerManager.appendTo` from the editor config
 *  3. the container of the default `open-layers` command
 */
export declare function findLayersRoot(editor: Editor, layersContainer: ElementTarget): LayersRootResult;
