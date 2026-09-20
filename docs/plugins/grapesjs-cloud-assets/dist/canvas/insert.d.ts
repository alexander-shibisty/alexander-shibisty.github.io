import type { Component, Editor } from 'grapesjs';
import type { ComponentDef } from './componentDef';
/**
 * Вставляет компонент сразу следующим соседом выбранного (если
 * ничего не выбрано — в конец страницы) и сразу выделяет его.
 * Используется и кнопкой на панели (там нет позиции дропа — нужна
 * разумная точка по умолчанию), и в дальнейшем может быть
 * переопределена сайтом, который слушает результат
 * `openCloudMediaPicker` напрямую вместо стандартной кнопки/блока.
 */
export declare function insertAfterSelectionOrEnd(editor: Editor, def: ComponentDef): Component;
