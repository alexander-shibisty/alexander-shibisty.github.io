import type { CloudAssetsMessages } from '../types';
/**
 * Локаль `se` — код неверный по ISO 639-1 (должен быть `sv`), но так
 * исторически называется файл шведского языка в самом
 * `grapesjs/locale/se.js` (проверено — там реально шведский текст).
 * Используем тот же код, что и ядро GrapesJS, чтобы совпадать с ним,
 * если сайт когда-нибудь явно укажет `i18n.locale: 'se'`.
 */
declare const messages: CloudAssetsMessages;
export default messages;
