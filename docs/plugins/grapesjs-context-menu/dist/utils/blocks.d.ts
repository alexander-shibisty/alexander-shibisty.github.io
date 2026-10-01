import type { Block, Component, Editor } from 'grapesjs';
/** The part of the Block Manager API the plugin uses (the class itself isn't exported by grapesjs). */
export interface BlockSource {
    get(id: string): Block | null | undefined;
    getAll(): unknown;
}
export declare function getBlockManager(editor: Editor): BlockSource | undefined;
export declare function blockId(block: Block): string;
/** Plain-text label of a block (labels often contain inline SVG icons). */
export declare function blockText(block: Block): string;
/** Category label; categories may be a string, a Category model or a plain object. */
export declare function blockCategory(block: Block): string;
/** Blocks available in the "Add element" submenu. */
export declare function getAvailableBlocks(editor: Editor, only: string[] | null): Block[];
/** Groups blocks by category, keeping the order in which categories first appear. */
export declare function groupBlocks(blocks: Block[]): {
    category: string;
    blocks: Block[];
}[];
/**
 * Appends the block content INTO `target` and returns the first added
 * component. Some plugins (countdown, tabs, ...) define `content` as a
 * function of the editor.
 */
export declare function appendBlock(editor: Editor, block: Block, target: Component): Component | undefined;
