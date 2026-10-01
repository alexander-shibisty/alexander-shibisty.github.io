/**
 * Remembers which Style Manager sectors are open and re-applies that
 * whenever sectors appear (initial render, `style:sector:add`, ...).
 */
export interface SectorLike {
    get(key: string): any;
    set(key: string, value: any): any;
    on(event: string, cb: (...args: any[]) => void): any;
    off?(event: string, cb?: (...args: any[]) => void): any;
    getId?(): string;
}
export interface StyleManagerLike {
    getSectors?(): unknown;
}
export declare function getSectorList(sm: StyleManagerLike | null | undefined): SectorLike[];
export declare function sectorId(sector: SectorLike): string;
export interface SectorMemory {
    sync(): void;
    destroy(): void;
}
export declare function createSectorMemory(getStyleManager: () => StyleManagerLike | null | undefined, stored: Record<string, boolean>, save: () => void): SectorMemory;
