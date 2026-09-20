import type { Editor } from 'grapesjs';
import type { ResolvedAsset, StorageProvider } from '../types';
export interface AssetBrowserProps {
    editor: Editor;
    providers: StorageProvider[];
    /**
     * Какая вкладка должна быть активна сразу при открытии — id
     * провайдера (`provider.id`, у S3 это `s3:<connectionId>`). Нужен,
     * когда пикер открыт через отдельный блок конкретного хранилища
     * (см. `canvas/block.ts`, `registerProviderBlock`) — тогда окно
     * должно сразу показать нужную вкладку, а не первую/последнюю
     * использованную. Если провайдера с таким id уже нет (например,
     * S3-соединение отключили между регистрацией блока и кликом по
     * нему) — тихо откатываемся на первый провайдер, как и без этого
     * параметра.
     */
    initialProviderId?: string;
    /** Вызывается для КАЖДОГО вставленного файла (их может быть несколько за одно действие — см. множественный выбор). */
    onSelect: (asset: ResolvedAsset) => void;
    /**
     * Вызывается один раз, когда пользователь завершил вставку (двойной
     * клик по одному файлу или кнопка "Вставить (N)" после множественного
     * выбора) — сигнал вызывающему коду, что пора закрыть модалку.
     * Раньше это делал сам `onSelect` (закрывал по первому же файлу) —
     * так больше нельзя, потому что с множественным выбором `onSelect`
     * может вызваться несколько раз подряд для одного действия.
     */
    onDone?: () => void;
    /** Необязательный текст первой вкладки — обычной галереи GrapesJS. */
    onError?: (error: unknown, providerId: string) => void;
}
/**
 * Один UI на всех провайдеров. Провайдер не рисует ничего сам — он
 * только отдаёт данные через StorageProvider. Это и был явный
 * архитектурный запрос: единый вид вкладок/грида независимо от
 * того, Dropbox это, Google Drive, OneDrive или S3.
 */
export declare class AssetBrowser {
    private readonly root;
    private readonly props;
    private readonly editor;
    private readonly state;
    /**
     * Провайдеры, переданные владельцем сайта (`props.providers`),
     * ПЛЮС S3-соединения, которые сам посетитель подключил через попап
     * "Подключить S3" (см. `openConnectS3Modal`/`readS3Connections`) —
     * везде ниже вместо `this.props.providers` читается это поле, оно
     * же и определяет порядок/состав вкладок в `renderShell()`.
     */
    private allProviders;
    /** Конфиги persisted S3-соединений — источник истины для localStorage, 1:1 с S3-инстансами в `allProviders` (см. `addS3Connection`/`removeS3Connection`). */
    private s3Connections;
    /** "Кеш содержимого на 15 минут" — ключ см. `cacheKey()`. Общий на все вкладки/провайдеры инстанса. */
    private readonly listCache;
    private activeProviderId;
    private activeRequest;
    private viewMode;
    private searchDebounceTimer;
    private contextMenuEl;
    private closeContextMenuListener;
    /** Счётчик вложенности dragenter/dragleave — см. `handleDragEnter`/`handleDragLeave`. */
    private dragDepth;
    private dropOverlayEl;
    private uploadQueueEl;
    /** Баннер "не удалось вставить файл" — сиблинг body, см. renderShell()/renderInsertErrorBanner(). */
    private insertErrorEl;
    private uploadQueueItems;
    private connectModalEl;
    /** Модалка "Подключённые аккаунты" (шестерёнка в ряду вкладок рядом с "+", см. `openSettingsModal`) — не путать с `connectModalEl` (попап "Подключить S3"). */
    private settingsModalEl;
    /** Тикает раз в минуту, пока открыта settingsModalEl, чтобы обратный отсчёт токена не "замирал" — см. `openSettingsModal`. */
    private settingsModalInterval;
    private readonly onLocaleChange;
    private readonly onEscapeCloseMenu;
    private readonly onEscapeCloseConnectModal;
    private readonly onEscapeCloseSettingsModal;
    /**
     * Пересчитывает, какие вкладки помещаются по ширине, при изменении
     * размера окна (сплит-панель редактора, поворот телефона и т.п.) —
     * не только при самом рендере. Один слушатель на весь инстанс (не
     * пере-навешивается в каждом renderShell()), снимается в destroy().
     */
    private readonly onWindowResize;
    constructor(container: HTMLElement, props: AssetBrowserProps);
    destroy(): void;
    /** Отличает S3-вкладку, подключённую самим посетителем (можно удалить кнопкой "×" на вкладке), от вкладок владельца сайта (`pluginsOpts.providers` — постоянные, без "×"). */
    private isDynamicProvider;
    private generateS3ConnectionId;
    private addS3Connection;
    private removeS3Connection;
    /**
     * Попап "Подключить S3" — своя мини-модалка внутри `.gca-root`, не
     * через `editor.Modal` (см. комментарий у `.gca-connect-modal-backdrop`
     * в styles.ts). Перед сохранением реально проверяет введённые
     * ключи вызовом `list('')` — иначе опечатка в Secret Access Key
     * осталась бы незамеченной вплоть до первого открытия вкладки.
     */
    private openConnectS3Modal;
    private closeConnectModal;
    /**
     * Локализованная длительность вроде "42 минуты"/"3 часа" — через
     * `Intl.NumberFormat` со `style: 'unit'` (широко поддерживается, но
     * не абсолютно везде — например, старые движки без ICU); при сбое
     * просто возвращает нелокализованные "N min"/"N h", как и
     * `formatSize()` для единиц KB/MB (см. её комментарий) — это лучше,
     * чем уронить всю модалку на редком браузере.
     */
    private formatDuration;
    /** Провайдеры, которые вообще имеет смысл показывать в "Подключённые аккаунты" — с App Key/Client ID, уже сохранённым через мастер настройки (иначе там нечего показывать, кроме как "не настроено", а это уже экран самой вкладки). */
    private settingsModalProviders;
    private openSettingsModal;
    private closeSettingsModal;
    private rootCrumb;
    private freshProviderState;
    /** Вид (плитка/таблица/дерево) общий для всех вкладок и переживает перезагрузку страницы. */
    private readViewMode;
    private setViewMode;
    /**
     * Ключ localStorage для раскрытых папок дерева — свой на каждого
     * провайдера (у Dropbox и Google Drive структура папок совершенно
     * разная, общий набор путей не имел бы смысла).
     */
    private expandedPathsStorageKey;
    private readExpandedPaths;
    private persistExpandedPaths;
    /**
     * Вызывается везде, откуда меняется активный провайдер/режим вида:
     * если сейчас показан древовидный вид и провайдер уже авторизован,
     * подгружает корневой узел (если ещё не загружен). Ничего не делает
     * в остальных случаях (грид/таблица сами дозагружаются через
     * `loadActiveProvider`, авторизации ещё нет — покажется экран входа).
     */
    private ensureTreeRootLoadedIfNeeded;
    /**
     * После того, как узел '' (или любой другой) успешно загружен,
     * догружает всех его ПРЯМЫХ детей, которые уже отмечены раскрытыми
     * в `expandedPaths` (persisted, см. readExpandedPaths) — и
     * рекурсивно продолжает вниз. Это и есть "запоминать, что было
     * раскрыто, и показывать это при повторном открытии" — раскрытые
     * узлы сами себя не подгружают во время рендера (см. комментарий в
     * renderTreeChildren про риск вложенного renderBody()), так что кто-то
     * должен явно инициировать их загрузку СНАРУЖИ рендера — здесь и в
     * toggleTreeNode() ниже.
     */
    private restoreExpandedTreeNodes;
    /** Подпись типа файла — и в колонке "Тип" таблицы, и как title у иконки в плитке. */
    private typeLabel;
    /** Единицы KB/MB/GB намеренно не переводятся ни в одной локали — техническая нотация, как и у остальных провайдеров. */
    private formatSize;
    private formatDate;
    /**
     * Переводит ошибку в текст для показа пользователю. `GcaError` —
     * ошибка из наших же провайдеров/pkce.ts с "адресом" перевода
     * вместо готового текста (см. `i18n/errors.ts`) — резолвится через
     * `editor.I18n.t()` на текущий язык. Обычный `Error` (например,
     * сырой ответ Dropbox API) показывается как есть — его текст и так
     * содержит полезную диагностику, а не то, что стоило бы переводить.
     */
    private describeError;
    private get activeProvider();
    private get activeState();
    private renderShell;
    /**
     * Кнопка "+" в конце ряда вкладок — сейчас единственный пункт
     * выпадающего меню это "Подключить S3" (см. openConnectS3Modal), но
     * оформлено как меню, а не сразу кнопка действия, чтобы новый тип
     * соединения в будущем не требовал менять сам ряд вкладок, только
     * добавить пункт сюда. Тот же паттерн открытия/закрытия по клику
     * вовне, что и у renderSettingsMenu.
     */
    private renderAddConnectionButton;
    /**
     * Шестерёнка "Подключённые аккаунты" — по просьбе пользователя
     * рядом с "+" в ряду вкладок (см. историю проекта), одна на все
     * OAuth-провайдеры сразу (Dropbox/Google Drive/OneDrive — у кого
     * есть `setCredential`), открывает `openSettingsModal()`. НЕ путать
     * с `renderSettingsMenu()` — той шестерёнкой внутри тулбара ОДНОЙ
     * конкретной вкладки, где сейчас только пункт "Выйти".
     */
    private renderGlobalSettingsButton;
    /**
     * Шеврон "ещё вкладки" — скрыт по умолчанию (`hidden`), содержимое
     * и видимость выставляет `updateTabsOverflow()` уже после того, как
     * все вкладки реально в DOM и можно измерить, влезли ли они. Сама
     * кнопка тут — просто разметка-заготовка + логика открытия/закрытия
     * меню; какие именно провайдеры в него попадут, эта функция не
     * знает и не должна — это ответственность updateTabsOverflow().
     */
    private renderTabOverflowButton;
    /**
     * Прячет за шеврон (`.gca-tab-overflow`) ровно те вкладки, которые
     * не влезли в ширину ряда — а не отдаёт их на откуп CSS-переносу
     * (`.gca-tabs` теперь `flex-wrap: nowrap`, см. styles.ts). Активная
     * вкладка ВСЕГДА остаётся видимой (иначе переключение на вкладку из
     * самого выпадающего меню тут же спрятало бы её саму — см. ниже),
     * даже если по чистому порядку она должна была бы уйти в меню.
     *
     * jsdom (юнит-тесты) и модалка, которая ещё не открылась/не имеет
     * размера, всегда отдают `clientWidth === 0` — в этом случае просто
     * ничего не трогаем и оставляем все вкладки видимыми: считать "по
     * нулевой ширине ничего не влезло" было бы неверно и спрятало бы
     * вообще все вкладки.
     */
    private updateTabsOverflow;
    private renderBody;
    private fillBody;
    /**
     * Ловит фокус ТОЛЬКО у полей, явно помеченных `data-gca-focus-id`
     * (сейчас — поиск, фильтр по типу, поле "Добавить по URL" и поле
     * App Key/Client ID в мастере настройки): это единственные элементы
     * внутри body, куда человек может печатать и где полная пересборка
     * DOM на каждый renderBody() иначе сбивала бы фокус/курсор.
     */
    private captureFocusState;
    private restoreFocusState;
    private renderAuthGate;
    /**
     * Мастер настройки — первое, что видит пользователь, пока провайдеру
     * не хватает пользовательских данных для входа (у Dropbox — App Key).
     * Показывает ссылку на консоль провайдера, пошаговую инструкцию
     * (со значениями для копирования — например, redirect URI) и, если
     * провайдер это поддерживает, поле для ввода и сохранения ключа.
     */
    private renderSetupWizard;
    private renderCopyRow;
    private copyToClipboard;
    private renderToolbar;
    /** Поиск по хранилищу + фильтр по типу — только если провайдер вообще поддерживает search() (не у "Своих файлов"). */
    private renderSearchRow;
    private renderRefreshButton;
    /**
     * Настройки в виде выпадающего меню под иконкой-шестерёнкой — раньше
     * "Выйти" была отдельной кнопкой прямо в тулбаре, теперь спрятана
     * сюда (см. запрос пользователя) и требует подтверждения: первый
     * клик переводит пункт меню в состояние "Точно выйти?" на несколько
     * секунд, обычный `window.confirm()` тут сознательно не используется
     * — модальные браузерные диалоги хуже вписываются в общий стиль
     * плагина и не стилизуются под тему редактора.
     */
    private renderSettingsMenu;
    /**
     * Разлогин из текущего аккаунта провайдера — не путать с "Изменить
     * App Key"/setCredential('') на экране входа: тот сбрасывает вообще
     * всё (включая Client ID), а это только сессионные токены, чтобы
     * попробовать другой аккаунт, оставив настройку приложения как есть.
     * Сбрасываем также локальное состояние списка файлов (и его кеш) —
     * иначе после повторного входа на миг мелькнёт список из прошлой сессии.
     */
    private handleLogout;
    /** Переключатель "плитка"/"таблица" — общий для всех провайдеров, см. VIEW_MODE_STORAGE_KEY. */
    private renderViewToggle;
    private renderUrlForm;
    /**
     * Панель "Выбрано N" — теперь рендерится ВСЕГДА (см. fillBody()), а не
     * только при множественном выборе, чтобы место под неё было
     * зарезервировано с самого начала и остальной контент не прыгал при
     * первом/последнем клике. Пока выбора нет — просто "0 выбрано" и
     * кнопки Cancel/Insert невидимые (`visibility: hidden` через
     * `.gca-selection-bar__actions--empty`, НЕ `display: none`/`hidden` —
     * тогда они по-прежнему занимают место в разметке, но некликабельны).
     */
    private renderSelectionBar;
    private visibleItems;
    /** Папки всегда впереди файлов (как и раньше, когда это просто был порядок из API) — сортировка применяется внутри каждой из групп. */
    private sortItems;
    private compareFn;
    private renderGrid;
    private renderTable;
    private renderLoadMoreButton;
    private handleItemClick;
    /** Двойной клик по файлу — вставляет его сразу и закрывает пикер (быстрый путь для одного файла, без похода за кнопкой "Вставить"). */
    private handleItemDblClick;
    private quickInsert;
    /** Кнопка "Вставить (N)" из панели выбора — вставляет все выбранные файлы по очереди и закрывает пикер, если хотя бы один прошёл успешно. */
    private insertSelection;
    /**
     * Наполняет/прячет insertErrorEl (см. поле выше и комментарий в
     * renderShell()) текстом ошибки АКТИВНОГО провайдера — сам баннер не
     * принимает состояние параметром, а всегда читает `this.activeState`,
     * потому что элемент один на весь пикер (как и uploadQueueEl) и
     * показывается только для той вкладки, что сейчас открыта.
     */
    private renderInsertErrorBanner;
    private handleContextMenu;
    /** Долгое нажатие (мобильные) — эквивалент правого клика для контекстного меню. */
    private attachLongPress;
    private openContextMenuAt;
    private closeContextMenu;
    private deleteItem;
    private switchProvider;
    private navigateTo;
    /** Ключ кеша — своя запись на каждую комбинацию провайдер+путь ИЛИ провайдер+поисковый запрос (фильтр по типу в ключ не входит, он считается на клиенте поверх уже загруженного). */
    private cacheKey;
    private activeCacheKey;
    /**
     * "Кеш содержимого на 15 минут, с кнопкой обновить сейчас" — при
     * обычном (не `append`, не `force`) заходе на уже виденную
     * папку/поисковый запрос в пределах TTL отдаём то, что уже
     * загружали, без похода в сеть. `force: true` (кнопка "Обновить")
     * всегда идёт в сеть и обновляет запись кеша свежими данными.
     */
    private loadActiveProvider;
    private addByUrl;
    /**
     * Общий путь для обоих способов начать загрузку — кнопки "Загрузить"
     * (теперь умеет сразу несколько файлов, `input.multiple`) и
     * drag-and-drop (см. `handleDrop`/`collectDroppedFiles`). Показывает
     * панель очереди с прогрессом на каждый файл, продолжает загрузку
     * остальных файлов, даже если один упал с ошибкой, и обновляет
     * список содержимого папки один раз в конце — а не на каждый файл.
     */
    private uploadFiles;
    /** Панель прогресса загрузки — сиблинг body (см. renderShell), обновляется точечно, без полной пересборки body. */
    private renderUploadQueue;
    private renderDropOverlay;
    private showDropOverlay;
    /** Активна ли зона перетаскивания прямо сейчас — только когда провайдер умеет upload() и уже авторизован (иначе непонятно, куда грузить). */
    private dropEnabled;
    private attachDropHandlers;
    private handleDragEnter;
    private handleDragOver;
    private handleDragLeave;
    private handleDrop;
    /**
     * Разбирает перетащенное — включая целые ПАПКИ — в плоский список
     * `File`. Папка рекурсивно обходится через `webkitGetAsEntry()` /
     * `FileSystemDirectoryReader` (нестандартный, но поддерживаемый
     * всеми основными браузерами API) и все найденные файлы (из папки и
     * её подпапок) грузятся в ТЕКУЩУЮ открытую папку без попытки
     * воссоздать структуру — ни у одного из провайдеров пока нет API
     * создания папок, так что это единственный осмысленный вариант.
     * Сами подпапки просто молча игнорируются, без ошибки — так и было
     * решено (см. обсуждение задачи).
     */
    private collectDroppedFiles;
    private walkFileSystemEntry;
    private renderTree;
    private renderTreeLevel;
    private renderTreeNode;
    private renderTreeChildren;
    private renderTreeNodeError;
    private renderTreeLoadMore;
    private toggleTreeNode;
    private collapseAllTree;
    /** "Развернуть всё" — рекурсивно раскрывает и подгружает КАЖДУЮ папку от корня вниз, со всеми страницами (см. обсуждение задачи). */
    private expandAllTree;
    private expandAllFrom;
    /**
     * Подгружает первую страницу содержимого узла (папки) дерева, если
     * ещё не загружена/не грузится — используя тот же 15-минутный кеш
     * `listCache`, что и обычный просмотр (та же папка, только что
     * открытая через грид/таблицу, не запросится у API повторно).
     */
    private ensureTreeNodeLoaded;
    private loadMoreTreeNode;
}
