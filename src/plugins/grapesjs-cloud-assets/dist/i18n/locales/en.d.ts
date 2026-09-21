import type { CloudAssetsMessages } from '../types';
/**
 * Канонический источник переводов — остальные языки переводят
 * отсюда. Заодно это же значение используется как `localeFallback`
 * GrapesJS по умолчанию, так что при опечатке ключа или неполном
 * переводе в другом языке пользователь увидит английский текст, а
 * не пустую строку или сам ключ.
 */
declare const messages: CloudAssetsMessages;
export default messages;
