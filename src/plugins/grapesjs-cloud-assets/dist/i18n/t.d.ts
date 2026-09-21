import type { Editor } from 'grapesjs';
/**
 * `editor.I18n.t()` с зашитым namespace плагина и без лишнего
 * приведения типов на каждом вызове. `editor.I18n.t()` сам умеет
 * точечные пути ('a.b.c') и fallback на `localeFallback` (по
 * умолчанию 'en'), если ключа нет в текущей локали — а он есть
 * всегда, потому что `registerI18n()` регистрирует полный перевод
 * сразу на все локали, что поддерживает GrapesJS (см. `index.ts`
 * этой папки).
 */
export declare function t(editor: Editor, key: string, params?: Record<string, unknown>): string;
export declare function isRtlLocale(locale: string): boolean;
