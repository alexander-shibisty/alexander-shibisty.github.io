/**
 * Минимальная реализация AWS Signature Version 4 для прямых запросов
 * из браузера к S3/S3-совместимому эндпоинту — без aws-sdk (там речь
 * о десятках килобайт в бандл ради того, что укладывается в
 * ~150 строк через `crypto.subtle`, который и так нужен PKCE, см.
 * `providers/pkce.ts`). Используется только `S3Provider.ts`.
 *
 * Два режима подписи, как и в самом протоколе:
 *  - `presignUrl()` — подпись в query-параметрах (`X-Amz-Signature=...`),
 *    для GET (просмотр/вставка файла — идёт прямо в `<img src>`) и PUT
 *    (загрузка через XMLHttpRequest, чтобы был `xhr.upload.onprogress`
 *    — у presigned PUT это единственный способ получить прогресс,
 *    fetch его не отдаёт).
 *  - `signedHeaders()` — подпись в заголовке `Authorization`, для
 *    остальных запросов (`GET`/`ListObjectsV2`, `DELETE`) через обычный
 *    `fetch`, где прогресс не нужен.
 *
 * Важное условие для обоих режимов — бакет должен разрешать CORS с
 * origin'а сайта (см. `s3.corsHint` в мастере подключения): без этого
 * браузер просто не даст прочитать ответ, сама подпись тут ни при
 * чём.
 */
export interface S3Endpoint {
    bucket: string;
    region: string;
    /** Свой эндпоинт (без протокола обязателен хост, схема опциональна — по умолчанию https). Пусто — настоящий AWS S3. */
    endpoint?: string;
    forcePathStyle?: boolean;
}
export interface S3RequestUrl {
    /** Хост для заголовка Host/подписи — ОБЯЗАТЕЛЬНО совпадает с хостом итогового URL. */
    host: string;
    /** Абсолютный `https://...` URL без query. */
    baseUrl: string;
    /** Путь запроса (с ведущим `/`) — часть канонического запроса. */
    canonicalPath: string;
}
/**
 * Строит хост/URL для бакета — virtual-hosted (`bucket.s3.region.amazonaws.com`
 * или `bucket.<кастомный-хост>`) или path-style (`<хост>/bucket`),
 * плюс сам путь к объекту (`key` — не кодируется здесь, кодирование
 * происходит в `canonicalUriPath`/при сборке итогового URL).
 */
export declare function buildRequestUrl(endpoint: S3Endpoint, key: string): S3RequestUrl;
export interface SignedHeadersResult {
    headers: Record<string, string>;
    /** Готовый URL (с query, если был) — гарантированно та же кодировка, что участвовала в подписи. */
    url: string;
}
interface BaseSignOptions {
    method: string;
    endpoint: S3Endpoint;
    key: string;
    accessKeyId: string;
    secretAccessKey: string;
    /** Query-параметры запроса (например `list-type=2&prefix=...`) — БЕЗ параметров самой подписи. */
    query?: Record<string, string>;
}
/**
 * Подпись через заголовок Authorization — для ListObjectsV2/DELETE
 * через `fetch`. Тело запроса у обоих либо нет, либо не участвует в
 * подписи содержательно (DELETE без тела) — поэтому здесь всегда
 * `UNSIGNED-PAYLOAD`-эквивалент через sha256('') и НЕ поддерживается
 * подписанное тело (не нужно ни одному из вызовов `S3Provider`).
 */
export declare function signedHeaders(opts: BaseSignOptions): Promise<SignedHeadersResult>;
interface PresignOptions extends BaseSignOptions {
    expiresSeconds: number;
}
/**
 * Подпись в query-параметрах — для GET (превью/вставка файла,
 * подставляется прямо в `src`) и PUT (загрузка через XMLHttpRequest,
 * ради `upload.onprogress`). `UNSIGNED-PAYLOAD` — тело не участвует в
 * подписи (иначе для PUT пришлось бы заранее знать sha256 всего
 * файла, а для GET тела нет вовсе) — стандартная практика для
 * presigned-загрузок из браузера.
 */
export declare function presignUrl(opts: PresignOptions): Promise<string>;
export {};
