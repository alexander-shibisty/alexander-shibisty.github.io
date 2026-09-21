import type { ResolvedAssetType } from '../types';
/**
 * Общие мелкие хелперы: угадывание MIME-типа и "крупного" типа
 * asset'а (image/video/audio/document/other) по имени файла. Раньше
 * лежало в `providers/shared.ts` — переехало в `utils/`, потому что
 * этим же угадыванием типа теперь пользуется и `ui/AssetBrowser.ts`
 * (иконка/подпись типа в гриде и таблице), а UI-код не должен тянуть
 * файлы из `providers/`. Провайдеры (Dropbox/Local/будущие Google
 * Drive, OneDrive, S3) используют то же самое, чтобы не дублировать
 * одну и ту же таблицу расширений.
 *
 * Разбивка по расширениям — по образцу core/modules/* в
 * embed-inserter (C:\OSPanel6\home\embed-inserter): там то же самое
 * разделение image/video/audio/doc через regex по имени файла.
 * Списки расширений и разделение audio/video для .ogg/.oga —
 * оттуда же. Разница в том, что там на каждый тип ещё и свой
 * render() в превью — нам этого не нужно, GrapesJS сам рисует
 * компонент нужного типа (см. `src/canvas/componentDef.ts`), здесь
 * достаточно одной функции классификации.
 */
export declare const IMAGE_EXT: RegExp;
export declare const VIDEO_EXT: RegExp;
export declare const AUDIO_EXT: RegExp;
export declare const DOC_EXT: RegExp;
export declare function guessMimeType(name: string): string | undefined;
/**
 * По MIME-типу (если известен) и/или имени файла определяет, каким
 * компонентом GrapesJS вставлять asset — см.
 * `src/canvas/componentDef.ts`, который читает именно это поле
 * (`ResolvedAsset.type`).
 */
export declare function guessAssetType(mimeType: string | undefined, name: string): ResolvedAssetType;
/** Имя файла из URL — используется, когда пользователь просто вставляет ссылку. */
export declare function nameFromUrl(url: string): string;
