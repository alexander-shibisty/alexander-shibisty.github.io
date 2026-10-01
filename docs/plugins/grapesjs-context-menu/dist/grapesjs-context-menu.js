var V = Object.defineProperty;
var _ = (n, e, t) => e in n ? V(n, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : n[e] = t;
var m = (n, e, t) => _(n, typeof e != "symbol" ? e + "" : e, t);
const R = {
  blocks: null,
  injectCss: !0,
  canvasMenu: !0,
  layersMenu: !0,
  hierarchyBadge: !0,
  viewStylesCommand: "layers-sidebar:show-styles",
  labels: {},
  extendMenu: void 0
};
function X(n) {
  const e = { ...R, labels: {} };
  return n && Object.keys(n).forEach((t) => {
    const s = n[t];
    s !== void 0 && (t === "labels" ? e.labels = { ...s } : e[t] = s);
  }), e;
}
const Y = {
  add: "إضافة عنصر",
  noBlocks: "لا توجد كتل متاحة",
  selectParent: "تحديد العنصر الأب",
  selectChild: "تحديد العنصر الفرعي",
  moveUp: "نقل لأعلى",
  moveDown: "نقل لأسفل",
  move: "نقل (سحب)",
  clone: "تكرار",
  viewStyles: "عرض الأنماط",
  delete: "حذف",
  hierarchyTitle: "التسلسل الهرمي: اختر العنصر الذي تريد العمل عليه"
}, G = {
  add: "Dodaj element",
  noBlocks: "Nema dostupnih blokova",
  selectParent: "Odaberi roditelja",
  selectChild: "Odaberi podređeni",
  moveUp: "Pomjeri gore",
  moveDown: "Pomjeri dolje",
  move: "Pomjeri (prevlačenje)",
  clone: "Dupliciraj",
  viewStyles: "Prikaži stilove",
  delete: "Obriši",
  hierarchyTitle: "Hijerarhija: odaberite s kojim elementom radite"
}, J = {
  add: "Afegeix un element",
  noBlocks: "No hi ha blocs disponibles",
  selectParent: "Selecciona el pare",
  selectChild: "Selecciona el fill",
  moveUp: "Mou amunt",
  moveDown: "Mou avall",
  move: "Mou (arrossega)",
  clone: "Duplica",
  viewStyles: "Mostra els estils",
  delete: "Elimina",
  hierarchyTitle: "Jerarquia: tria amb quin element vols treballar"
}, Q = {
  add: "Element hinzufügen",
  noBlocks: "Keine Blöcke verfügbar",
  selectParent: "Übergeordnetes auswählen",
  selectChild: "Untergeordnetes auswählen",
  moveUp: "Nach oben verschieben",
  moveDown: "Nach unten verschieben",
  move: "Verschieben (ziehen)",
  clone: "Duplizieren",
  viewStyles: "Stile anzeigen",
  delete: "Löschen",
  hierarchyTitle: "Hierarchie: Element zum Bearbeiten auswählen"
}, Z = {
  add: "Προσθήκη στοιχείου",
  noBlocks: "Δεν υπάρχουν διαθέσιμα μπλοκ",
  selectParent: "Επιλογή γονικού",
  selectChild: "Επιλογή θυγατρικού",
  moveUp: "Μετακίνηση πάνω",
  moveDown: "Μετακίνηση κάτω",
  move: "Μετακίνηση (σύρσιμο)",
  clone: "Αντιγραφή",
  viewStyles: "Προβολή στυλ",
  delete: "Διαγραφή",
  hierarchyTitle: "Ιεραρχία: επιλέξτε με ποιο στοιχείο θα δουλέψετε"
}, z = {
  add: "Add element",
  noBlocks: "No blocks available",
  selectParent: "Select parent",
  selectChild: "Select child",
  moveUp: "Move up",
  moveDown: "Move down",
  move: "Move (drag)",
  clone: "Duplicate",
  viewStyles: "View styles",
  delete: "Delete",
  hierarchyTitle: "Hierarchy: choose which element to work with"
}, ee = {
  add: "Añadir elemento",
  noBlocks: "No hay bloques disponibles",
  selectParent: "Seleccionar padre",
  selectChild: "Seleccionar hijo",
  moveUp: "Mover arriba",
  moveDown: "Mover abajo",
  move: "Mover (arrastrar)",
  clone: "Duplicar",
  viewStyles: "Ver estilos",
  delete: "Eliminar",
  hierarchyTitle: "Jerarquía: elige con qué elemento trabajar"
}, te = {
  add: "افزودن عنصر",
  noBlocks: "هیچ بلوکی در دسترس نیست",
  selectParent: "انتخاب والد",
  selectChild: "انتخاب فرزند",
  moveUp: "انتقال به بالا",
  moveDown: "انتقال به پایین",
  move: "انتقال (کشیدن)",
  clone: "تکثیر",
  viewStyles: "مشاهده استایل‌ها",
  delete: "حذف",
  hierarchyTitle: "سلسله‌مراتب: عنصری را که می‌خواهید با آن کار کنید انتخاب کنید"
}, ne = {
  add: "Ajouter un élément",
  noBlocks: "Aucun bloc disponible",
  selectParent: "Sélectionner le parent",
  selectChild: "Sélectionner l’enfant",
  moveUp: "Monter",
  moveDown: "Descendre",
  move: "Déplacer (glisser)",
  clone: "Dupliquer",
  viewStyles: "Voir les styles",
  delete: "Supprimer",
  hierarchyTitle: "Hiérarchie : choisissez l’élément à modifier"
}, se = {
  add: "הוספת רכיב",
  noBlocks: "אין בלוקים זמינים",
  selectParent: "בחירת רכיב אב",
  selectChild: "בחירת רכיב צאצא",
  moveUp: "הזזה למעלה",
  moveDown: "הזזה למטה",
  move: "הזזה (גרירה)",
  clone: "שכפול",
  viewStyles: "הצגת סגנונות",
  delete: "מחיקה",
  hierarchyTitle: "היררכיה: בחרו עם איזה רכיב לעבוד"
}, oe = {
  add: "Tambah elemen",
  noBlocks: "Tidak ada blok tersedia",
  selectParent: "Pilih induk",
  selectChild: "Pilih anak",
  moveUp: "Pindah ke atas",
  moveDown: "Pindah ke bawah",
  move: "Pindahkan (seret)",
  clone: "Duplikat",
  viewStyles: "Lihat gaya",
  delete: "Hapus",
  hierarchyTitle: "Hierarki: pilih elemen yang ingin dikerjakan"
}, ie = {
  add: "Aggiungi elemento",
  noBlocks: "Nessun blocco disponibile",
  selectParent: "Seleziona genitore",
  selectChild: "Seleziona figlio",
  moveUp: "Sposta su",
  moveDown: "Sposta giù",
  move: "Sposta (trascina)",
  clone: "Duplica",
  viewStyles: "Mostra stili",
  delete: "Elimina",
  hierarchyTitle: "Gerarchia: scegli con quale elemento lavorare"
}, le = {
  add: "요소 추가",
  noBlocks: "사용 가능한 블록 없음",
  selectParent: "상위 요소 선택",
  selectChild: "하위 요소 선택",
  moveUp: "위로 이동",
  moveDown: "아래로 이동",
  move: "이동 (드래그)",
  clone: "복제",
  viewStyles: "스타일 보기",
  delete: "삭제",
  hierarchyTitle: "계층 구조: 작업할 요소를 선택하세요"
}, re = {
  add: "Legg til element",
  noBlocks: "Ingen blokker tilgjengelig",
  selectParent: "Velg overordnet",
  selectChild: "Velg underordnet",
  moveUp: "Flytt opp",
  moveDown: "Flytt ned",
  move: "Flytt (dra)",
  clone: "Dupliser",
  viewStyles: "Vis stiler",
  delete: "Slett",
  hierarchyTitle: "Hierarki: velg hvilket element du vil jobbe med"
}, ae = {
  add: "Element toevoegen",
  noBlocks: "Geen blokken beschikbaar",
  selectParent: "Bovenliggend selecteren",
  selectChild: "Onderliggend selecteren",
  moveUp: "Omhoog verplaatsen",
  moveDown: "Omlaag verplaatsen",
  move: "Verplaatsen (slepen)",
  clone: "Dupliceren",
  viewStyles: "Stijlen bekijken",
  delete: "Verwijderen",
  hierarchyTitle: "Hiërarchie: kies met welk element je werkt"
}, ce = {
  add: "Dodaj element",
  noBlocks: "Brak dostępnych bloków",
  selectParent: "Wybierz element nadrzędny",
  selectChild: "Wybierz element podrzędny",
  moveUp: "Przenieś wyżej",
  moveDown: "Przenieś niżej",
  move: "Przenieś (przeciągnij)",
  clone: "Duplikuj",
  viewStyles: "Pokaż style",
  delete: "Usuń",
  hierarchyTitle: "Hierarchia: wybierz, z którym elementem pracować"
}, de = {
  add: "Adicionar elemento",
  noBlocks: "Nenhum bloco disponível",
  selectParent: "Selecionar pai",
  selectChild: "Selecionar filho",
  moveUp: "Mover para cima",
  moveDown: "Mover para baixo",
  move: "Mover (arrastar)",
  clone: "Duplicar",
  viewStyles: "Ver estilos",
  delete: "Excluir",
  hierarchyTitle: "Hierarquia: escolha com qual elemento trabalhar"
}, ue = {
  add: "Добавить элемент",
  noBlocks: "Нет доступных блоков",
  selectParent: "Выбрать родителя",
  selectChild: "Выбрать вложенный",
  moveUp: "Переместить выше",
  moveDown: "Переместить ниже",
  move: "Переместить (перетаскивание)",
  clone: "Копировать",
  viewStyles: "Просмотреть стили",
  delete: "Удалить",
  hierarchyTitle: "Иерархия: выберите, с каким элементом работать"
}, me = {
  add: "Lägg till element",
  noBlocks: "Inga block tillgängliga",
  selectParent: "Välj överordnat",
  selectChild: "Välj underordnat",
  moveUp: "Flytta upp",
  moveDown: "Flytta ned",
  move: "Flytta (dra)",
  clone: "Duplicera",
  viewStyles: "Visa stilar",
  delete: "Ta bort",
  hierarchyTitle: "Hierarki: välj vilket element du vill arbeta med"
}, he = {
  add: "Öğe ekle",
  noBlocks: "Kullanılabilir blok yok",
  selectParent: "Üst öğeyi seç",
  selectChild: "Alt öğeyi seç",
  moveUp: "Yukarı taşı",
  moveDown: "Aşağı taşı",
  move: "Taşı (sürükle)",
  clone: "Çoğalt",
  viewStyles: "Stilleri görüntüle",
  delete: "Sil",
  hierarchyTitle: "Hiyerarşi: üzerinde çalışılacak öğeyi seçin"
}, pe = {
  add: "Додати елемент",
  noBlocks: "Немає доступних блоків",
  selectParent: "Вибрати батьківський",
  selectChild: "Вибрати вкладений",
  moveUp: "Перемістити вище",
  moveDown: "Перемістити нижче",
  move: "Перемістити (перетягування)",
  clone: "Копіювати",
  viewStyles: "Переглянути стилі",
  delete: "Видалити",
  hierarchyTitle: "Ієрархія: виберіть, з яким елементом працювати"
}, fe = {
  add: "Thêm phần tử",
  noBlocks: "Không có khối nào",
  selectParent: "Chọn phần tử cha",
  selectChild: "Chọn phần tử con",
  moveUp: "Di chuyển lên",
  moveDown: "Di chuyển xuống",
  move: "Di chuyển (kéo)",
  clone: "Nhân bản",
  viewStyles: "Xem kiểu",
  delete: "Xóa",
  hierarchyTitle: "Phân cấp: chọn phần tử để làm việc"
}, ge = {
  add: "添加元素",
  noBlocks: "没有可用的区块",
  selectParent: "选择父元素",
  selectChild: "选择子元素",
  moveUp: "上移",
  moveDown: "下移",
  move: "移动（拖动）",
  clone: "复制",
  viewStyles: "查看样式",
  delete: "删除",
  hierarchyTitle: "层级：选择要操作的元素"
}, O = "contextMenu", F = {
  ar: Y,
  bs: G,
  ca: J,
  de: Q,
  el: Z,
  en: z,
  es: ee,
  fa: te,
  fr: ne,
  he: se,
  id: oe,
  it: ie,
  ko: le,
  nb: re,
  nl: ae,
  pl: ce,
  pt: de,
  ru: ue,
  se: me,
  tr: he,
  uk: pe,
  vi: fe,
  zh: ge
}, ve = Object.keys(F);
function be(n) {
  const e = n.I18n;
  if (!e || typeof e.addMessages != "function") return;
  const t = {};
  ve.forEach((s) => {
    t[s] = { [O]: F[s] };
  }), e.addMessages(t);
}
function ye(n, e) {
  return (t) => {
    var i;
    const s = e[t];
    if (typeof s == "string") return s;
    let o;
    try {
      o = (i = n.I18n) == null ? void 0 : i.t(`${O}.${t}`);
    } catch {
      o = void 0;
    }
    return typeof o == "string" && o ? o : z[t];
  };
}
const l = "gjs-cm", P = "gjs-cm-styles", j = "position:fixed;background:#333;color:#ddd;border:1px solid rgba(255,255,255,.12);border-radius:4px;box-shadow:0 4px 14px rgba(0,0,0,.35);padding:4px 0;font-size:13px;font-family:var(--gjs-main-font,Helvetica,Arial,sans-serif);box-sizing:border-box;", we = [
  `.${l}-menu,.${l}-submenu{${j}z-index:99999;min-width:190px;}`,
  `.${l}-submenu{max-height:min(70vh,520px);overflow-y:auto;}`,
  `.${l}-crumbmenu{${j}z-index:99998;min-width:220px;max-height:60vh;overflow-y:auto;}`,
  `.${l}-item{padding:7px 14px;cursor:pointer;white-space:nowrap;display:flex;justify-content:space-between;align-items:center;gap:10px;outline:none;}`,
  `.${l}-item:hover,.${l}-item:focus-visible,.${l}-item--open{background:#3b97e3;color:#fff;}`,
  `.${l}-item--danger{color:#ff7a7a;}`,
  `.${l}-item--danger:hover,.${l}-item--danger:focus-visible{background:#c33;color:#fff;}`,
  `.${l}-item--disabled,.${l}-item--empty{opacity:.45;cursor:default;}`,
  `.${l}-item--disabled:hover,.${l}-item--empty:hover{background:transparent;color:inherit;}`,
  `.${l}-item--current{font-weight:600;cursor:default;}`,
  `.${l}-item--current:hover{background:transparent;color:inherit;}`,
  `.${l}-item small{opacity:.6;margin-left:10px;font-size:11px;}`,
  `.${l}-ico{display:inline-block;width:16px;margin-right:8px;text-align:center;opacity:.8;font-style:normal;}`,
  `.${l}-group{padding:6px 14px 3px;font-size:10px;letter-spacing:.06em;text-transform:uppercase;opacity:.55;}`,
  `.${l}-sep{height:1px;margin:4px 0;background:rgba(255,255,255,.1);}`,
  `.${l}-crumb{position:fixed;z-index:100;display:none;align-items:center;gap:5px;padding:0 8px;height:20px;font-size:12px;line-height:20px;background:#3b97e3;color:#fff;border-radius:3px 3px 0 0;cursor:pointer;user-select:none;white-space:nowrap;font-family:var(--gjs-main-font,Helvetica,Arial,sans-serif);}`,
  `.${l}-crumb:hover{background:#2f86d0;}`
].join(`
`);
function ke(n = document) {
  if (n.getElementById(P)) return;
  const e = n.createElement("style");
  e.id = P, e.textContent = we, n.head.appendChild(e);
}
function B(n, e, t) {
  const s = window.innerWidth, o = window.innerHeight, i = n.offsetWidth, c = n.offsetHeight;
  let r = e, a = t;
  r + i > s && (r = Math.max(0, s - i - 4)), a + c > o && (a = Math.max(0, o - c - 4)), n.style.left = `${r}px`, n.style.top = `${a}px`;
}
function Ee(n) {
  const e = document.createElement("div");
  return e.innerHTML = n, e.querySelectorAll("svg,style,script").forEach((t) => t.remove()), (e.textContent || "").replace(/\s+/g, " ").trim();
}
function H(n) {
  const e = n.getBoundingClientRect(), t = n.offsetWidth ? e.width / n.offsetWidth : 1;
  return { rect: e, scale: t };
}
function xe(n, e, t) {
  const { rect: s, scale: o } = H(n);
  return { x: s.left + e * o, y: s.top + t * o };
}
function A(n) {
  return n.parent ? n.parent() : void 0;
}
function Ce(n) {
  return n.components().find((e) => e.get("selectable") !== !1 && e.get("type") !== "textnode");
}
function Se(n, e) {
  for (let t = e; t; t = A(t))
    if (t === n) return !0;
  return !1;
}
function T(n) {
  return n.getName && n.getName() || n.get("name") || n.get("type") || "Component";
}
function $e(n) {
  const e = n.get("tagName") || "", t = n.getClasses ? n.getClasses()[0] : "";
  return e + (t ? `.${t}` : "");
}
function N(n) {
  const e = A(n), t = e ? e.components() : null, s = t ? t.indexOf(n) : -1, o = t ? t.length : 0, i = n.get("draggable") !== !1;
  return {
    parent: e,
    child: Ce(n),
    index: s,
    siblingsCount: o,
    canAddInside: n.get("droppable") !== !1,
    canMoveUp: !!e && i && s > 0,
    canMoveDown: !!e && i && s >= 0 && s < o - 1,
    canDrag: !!e && i,
    canClone: !!e && n.get("copyable") !== !1,
    canRemove: !!e && n.get("removable") !== !1
  };
}
function U(n, e, t) {
  const s = A(e);
  if (!s) return !1;
  const o = s.components(), i = o.indexOf(e);
  return i < 0 || i + t < 0 || i + t >= o.length ? !1 : (typeof e.move == "function" ? e.move(s, { at: t < 0 ? i - 1 : i + 2 }) : (o.remove(e, { temporary: !0 }), o.add(e, { at: i + t })), n.select(e), !0);
}
function w(n) {
  const e = n.getModel ? n.getModel() : void 0;
  return !!e && !e.destroyed;
}
function I(n, e) {
  if (n.getEl && n.getEl() === e) return n;
  const t = n.components ? n.components() : null;
  if (t)
    for (const s of t.models) {
      const o = I(s, e);
      if (o) return o;
    }
}
function De(n, e) {
  const t = n.getWrapper ? n.getWrapper() : void 0;
  for (let s = e; s; s = s.parentElement) {
    const o = s.__gjsv;
    if (o && o.model) return o.model;
    const i = t && I(t, s);
    if (i) return i;
  }
  return t || void 0;
}
function q(n, e) {
  var t;
  if (((t = n.viewLayer) == null ? void 0 : t.el) === e) return n;
  for (const s of n.components().models) {
    const o = q(s, e);
    if (o) return o;
  }
}
function K(n) {
  return n.Blocks || n.BlockManager;
}
function L(n) {
  return String(n.get("id") || n.id || "");
}
function Ae(n) {
  const e = n.get("label");
  return (typeof e == "string" ? Ee(e) : "") || L(n);
}
function Be(n) {
  const e = n.get("category");
  if (!e) return "";
  if (typeof e == "string") return e;
  const t = e, s = t.get ? t.get("label") || t.get("id") : t.label || t.id;
  return s ? String(s) : "";
}
function Le(n, e) {
  const t = K(n);
  if (!t) return [];
  const s = t.getAll(), o = Array.isArray(s) ? s : s && s.models ? s.models : [];
  return e ? o.filter((i) => e.indexOf(L(i)) !== -1) : o;
}
function Me(n) {
  const e = [], t = {};
  return n.forEach((s) => {
    const o = Be(s);
    t[o] || (t[o] = { category: o, blocks: [] }, e.push(t[o])), t[o].blocks.push(s);
  }), e;
}
function Pe(n, e, t) {
  let s = e.get("content");
  if (typeof s == "function" && (s = s(n)), s == null || s === "") return;
  const o = t.append(s);
  return Array.isArray(o) ? o[0] : o;
}
const D = {
  open: "context-menu:open",
  close: "context-menu:close",
  action: "context-menu:action"
};
class je {
  constructor(e, t, s, o) {
    m(this, "menuEl", null);
    m(this, "submenuEl", null);
    m(this, "ctx", null);
    m(this, "items", []);
    /** Documents with our "click outside / Escape" listeners (host + canvas iframe). */
    m(this, "listened", []);
    m(this, "listenTimer");
    // ---- actions --------------------------------------------------------------
    m(this, "onMenuClick", (e) => {
      const t = e.target.closest(`.${l}-item`);
      if (!t || t.classList.contains(`${l}-item--disabled`)) return;
      const s = t.getAttribute("data-action") || "";
      if (s === "add") {
        this.openAddSubmenu(t);
        return;
      }
      this.runAction(s, e);
    });
    m(this, "onSubmenuClick", (e) => {
      const t = e.target.closest("[data-block-id]");
      t && this.addBlock(t.getAttribute("data-block-id") || "");
    });
    // ---- outside click / keyboard ---------------------------------------------------
    m(this, "onOutside", (e) => {
      var s, o;
      if (!w(this.editor)) return this.close();
      const t = e.target;
      t && ((s = this.menuEl) != null && s.contains(t)) || t && ((o = this.submenuEl) != null && o.contains(t)) || this.close();
    });
    m(this, "onKeydown", (e) => {
      var r, a, u;
      const t = this.menuEl;
      if (!t) return;
      if (!w(this.editor)) return this.close();
      if (e.key === "Escape") {
        e.preventDefault(), this.submenuEl ? this.closeSubmenu() : this.close();
        return;
      }
      const s = this.submenuEl || t, o = Array.from(
        s.querySelectorAll(
          `.${l}-item:not(.${l}-item--disabled):not(.${l}-item--empty)`
        )
      );
      if (!o.length) return;
      const i = s.ownerDocument, c = o.indexOf(i.activeElement);
      if (e.key === "ArrowDown" || e.key === "ArrowUp") {
        e.preventDefault();
        const p = e.key === "ArrowDown" ? 1 : -1, f = c < 0 ? p > 0 ? 0 : o.length - 1 : (c + p + o.length) % o.length;
        o[f].focus();
      } else if (e.key === "ArrowRight" && !this.submenuEl && ((r = o[c]) == null ? void 0 : r.dataset.action) === "add") {
        e.preventDefault(), this.openAddSubmenu(o[c]);
        const p = this.submenuElement;
        (a = p == null ? void 0 : p.querySelector(`.${l}-item[data-block-id]`)) == null || a.focus();
      } else e.key === "ArrowLeft" && this.submenuEl ? (e.preventDefault(), this.closeSubmenu(), (u = t.querySelector('[data-action="add"]')) == null || u.focus()) : (e.key === "Enter" || e.key === " ") && c >= 0 && (e.preventDefault(), o[c].click());
    });
    m(this, "onFrameWheel", () => this.close());
    this.editor = e, this.options = t, this.t = s, this.getFrameDoc = o;
  }
  get isOpen() {
    return !!this.menuEl;
  }
  get element() {
    return this.menuEl;
  }
  get submenuElement() {
    return this.submenuEl;
  }
  /** Item list for a component (after `extendMenu`). Exposed for tests/extensions. */
  buildItems(e) {
    const { editor: t, options: s, t: o } = this, i = N(e.component), c = s.viewStylesCommand, r = !!c && t.Commands.has(c), a = [
      { id: "add", icon: "＋", label: o("add"), disabled: !i.canAddInside },
      { id: "parent", icon: "↑", label: o("selectParent"), disabled: !i.parent, separator: !0 },
      { id: "child", icon: "↓", label: o("selectChild"), disabled: !i.child },
      { id: "up", icon: "⇡", label: o("moveUp"), disabled: !i.canMoveUp },
      { id: "down", icon: "⇣", label: o("moveDown"), disabled: !i.canMoveDown },
      { id: "move", icon: "✥", label: o("move"), disabled: !i.canDrag },
      { id: "clone", icon: "⧉", label: o("clone"), disabled: !i.canClone }
    ];
    return r && a.push({ id: "styles", icon: "✎", label: o("viewStyles"), separator: !0 }), a.push({
      id: "delete",
      icon: "🗑",
      label: o("delete"),
      disabled: !i.canRemove,
      danger: !0,
      separator: !0
    }), s.extendMenu && s.extendMenu(a, e) || a;
  }
  open(e, t, s, o) {
    this.close();
    const i = { editor: this.editor, component: s, source: o };
    this.ctx = i, this.items = this.buildItems(i);
    const c = document.createElement("div");
    c.className = `${l}-menu`, c.setAttribute("role", "menu"), c.style.left = `${e}px`, c.style.top = `${t}px`, this.items.forEach((r, a) => {
      r.separator && a > 0 && c.appendChild(this.renderSeparator()), c.appendChild(this.renderItem(r));
    }), c.addEventListener("click", this.onMenuClick), c.addEventListener("contextmenu", (r) => r.preventDefault()), document.body.appendChild(c), this.menuEl = c, B(c, e, t), this.listenTimer = setTimeout(() => this.listen(), 0), this.editor.trigger(D.open, { component: s, source: o });
  }
  close() {
    var t;
    if (clearTimeout(this.listenTimer), this.unlisten(), this.closeSubmenu(), !this.menuEl) return;
    this.menuEl.remove(), this.menuEl = null;
    const e = (t = this.ctx) == null ? void 0 : t.component;
    this.ctx = null, this.items = [], this.editor.trigger(D.close, { component: e });
  }
  destroy() {
    this.close();
  }
  // ---- rendering ----------------------------------------------------------
  renderSeparator() {
    const e = document.createElement("div");
    return e.className = `${l}-sep`, e.setAttribute("role", "separator"), e;
  }
  renderItem(e) {
    const t = document.createElement("div");
    t.className = `${l}-item`, e.danger && t.classList.add(`${l}-item--danger`), e.disabled && (t.classList.add(`${l}-item--disabled`), t.setAttribute("aria-disabled", "true")), t.setAttribute("role", "menuitem"), t.setAttribute("data-action", e.id), t.tabIndex = -1;
    const s = document.createElement("span"), o = document.createElement("i");
    if (o.className = `${l}-ico`, o.textContent = e.icon || "", s.appendChild(o), s.appendChild(document.createTextNode(e.label)), t.appendChild(s), e.id === "add") {
      t.setAttribute("aria-haspopup", "true");
      const i = document.createElement("span");
      i.textContent = "▸", t.appendChild(i);
    }
    return t;
  }
  /** Runs a menu item by id (also used by keyboard handling and tests). */
  runAction(e, t) {
    const s = this.ctx, o = this.items.find((a) => a.id === e);
    if (!s || !o || o.disabled) return;
    const { editor: i, options: c } = this, r = s.component;
    if (this.close(), o.run)
      o.run(s);
    else {
      const a = N(r);
      switch (e) {
        case "parent":
          a.parent && i.select(a.parent);
          break;
        case "child":
          a.child && i.select(a.child);
          break;
        case "up":
          U(i, r, -1);
          break;
        case "down":
          U(i, r, 1);
          break;
        case "move":
          i.select(r);
          try {
            i.runCommand("tlb-move", { target: r, event: t });
          } catch (u) {
            console.warn("[grapesjs-context-menu] tlb-move failed", u);
          }
          break;
        case "clone":
          i.select(r), i.runCommand("tlb-clone");
          break;
        case "styles":
          i.select(r), c.viewStylesCommand && i.Commands.has(c.viewStylesCommand) && i.runCommand(c.viewStylesCommand);
          break;
        case "delete":
          r.remove();
          break;
        default:
          return;
      }
    }
    i.trigger(D.action, { id: e, component: r, source: s.source });
  }
  // ---- "Add element" submenu --------------------------------------------------
  closeSubmenu() {
    var e, t;
    this.submenuEl && (this.submenuEl.remove(), this.submenuEl = null), (t = (e = this.menuEl) == null ? void 0 : e.querySelector(`.${l}-item--open`)) == null || t.classList.remove(`${l}-item--open`);
  }
  openAddSubmenu(e) {
    var c;
    this.closeSubmenu();
    const t = e || ((c = this.menuEl) == null ? void 0 : c.querySelector('[data-action="add"]'));
    if (!t || !this.ctx) return;
    t.classList.add(`${l}-item--open`);
    const s = document.createElement("div");
    s.className = `${l}-submenu`, s.setAttribute("role", "menu");
    const o = Le(this.editor, this.options.blocks);
    if (o.length)
      Me(o).forEach((r) => {
        if (r.category) {
          const a = document.createElement("div");
          a.className = `${l}-group`, a.textContent = r.category, s.appendChild(a);
        }
        r.blocks.forEach((a) => {
          const u = document.createElement("div");
          u.className = `${l}-item`, u.setAttribute("role", "menuitem"), u.setAttribute("data-block-id", L(a)), u.tabIndex = -1, u.textContent = Ae(a), s.appendChild(u);
        });
      });
    else {
      const r = document.createElement("div");
      r.className = `${l}-item ${l}-item--empty`, r.textContent = this.t("noBlocks"), s.appendChild(r);
    }
    s.addEventListener("click", this.onSubmenuClick), document.body.appendChild(s), this.submenuEl = s;
    const i = t.getBoundingClientRect();
    B(s, i.right, i.top);
  }
  /** Appends a block into the menu's component and selects the result. */
  addBlock(e) {
    var i;
    const t = this.ctx;
    if (!t) return;
    const s = (i = K(this.editor)) == null ? void 0 : i.get(e);
    let o;
    return s && (o = Pe(this.editor, s, t.component), o && this.editor.select(o)), this.close(), o && this.editor.trigger(D.action, {
      id: "add",
      component: t.component,
      added: o,
      block: e,
      source: t.source
    }), o;
  }
  listen() {
    const e = [document], t = this.getFrameDoc();
    t && t !== document && e.push(t), e.forEach((s) => {
      s.addEventListener("mousedown", this.onOutside, !0), s.addEventListener("keydown", this.onKeydown, !0);
    }), t == null || t.addEventListener("wheel", this.onFrameWheel, !0), window.addEventListener("resize", this.onFrameWheel), this.listened = e;
  }
  unlisten() {
    this.listened.forEach((e) => {
      e.removeEventListener("mousedown", this.onOutside, !0), e.removeEventListener("keydown", this.onKeydown, !0), e.removeEventListener("wheel", this.onFrameWheel, !0);
    }), window.removeEventListener("resize", this.onFrameWheel), this.listened = [];
  }
}
class Te {
  constructor(e, t) {
    m(this, "badgeEl", null);
    m(this, "listEl", null);
    m(this, "raf", 0);
    /** Last applied position/name, to avoid touching the DOM on every frame. */
    m(this, "lastKey", "");
    m(this, "listDocs", []);
    /** Starts following the selection (safe to call repeatedly). */
    m(this, "start", () => {
      this.raf || !w(this.editor) || this.editor.getSelected() && (this.raf = requestAnimationFrame(this.tick));
    });
    m(this, "tick", () => {
      var e, t;
      if (this.raf = 0, !w(this.editor)) {
        this.destroy(), (t = (e = this.deps).onEditorDestroyed) == null || t.call(e);
        return;
      }
      this.update(), this.raf = this.editor.getSelected() ? requestAnimationFrame(this.tick) : 0, this.raf || (this.hide(), this.closeList());
    });
    m(this, "onOutside", (e) => {
      var s, o;
      if (!w(this.editor)) return this.destroy();
      const t = e.target;
      t && ((s = this.listEl) != null && s.contains(t)) || t && ((o = this.badgeEl) != null && o.contains(t)) || this.closeList();
    });
    m(this, "onKeydown", (e) => {
      e.key === "Escape" && this.closeList();
    });
    this.editor = e, this.deps = t;
  }
  getFrameEl() {
    return this.deps.getFrameEl();
  }
  get element() {
    return this.badgeEl;
  }
  get listElement() {
    return this.listEl;
  }
  destroy() {
    var e;
    this.raf && cancelAnimationFrame(this.raf), this.raf = 0, this.closeList(), (e = this.badgeEl) == null || e.remove(), this.badgeEl = null, this.lastKey = "";
  }
  ensureBadge() {
    if (this.badgeEl) return this.badgeEl;
    const e = document.createElement("div");
    e.className = `${l}-crumb`, e.setAttribute("role", "button"), e.setAttribute("aria-haspopup", "true");
    const t = document.createElement("span");
    t.className = `${l}-crumb-name`;
    const s = document.createElement("span");
    return s.textContent = "▾", e.appendChild(t), e.appendChild(s), e.addEventListener("mousedown", (o) => {
      o.preventDefault(), o.stopPropagation();
    }), e.addEventListener("click", (o) => {
      o.stopPropagation(), this.listEl ? this.closeList() : this.openList();
    }), document.body.appendChild(e), this.badgeEl = e, e;
  }
  hide() {
    this.badgeEl && this.lastKey !== "hidden" && (this.badgeEl.style.display = "none", this.lastKey = "hidden");
  }
  /** Repositions the badge over the selected element (one frame of the loop). */
  update() {
    var h;
    const e = this.editor.getSelected(), t = this.getFrameEl(), s = (h = e == null ? void 0 : e.getEl) == null ? void 0 : h.call(e);
    let o = !1;
    try {
      o = this.editor.Commands.isActive("preview");
    } catch {
      o = !1;
    }
    if (!e || !t || !s || !s.isConnected || o) return this.hide();
    const { rect: i, scale: c } = H(t), r = s.getBoundingClientRect(), a = i.left + r.left * c, u = i.top + r.top * c, p = a + r.width * c;
    if (u + r.height * c < i.top || u > i.bottom || p < i.left || a > i.right) return this.hide();
    const g = this.ensureBadge(), b = T(e), $ = g.firstChild;
    $.textContent !== b && ($.textContent = b), g.title = this.deps.title(), g.style.display = "flex";
    const C = g.offsetHeight || 20, y = g.offsetWidth || 60;
    let x = u - C;
    x < i.top && (x = Math.min(u, i.bottom - C));
    const S = Math.max(i.left, Math.min(a, i.right - y)), d = `${Math.round(S)}:${Math.round(x)}:${b}`;
    d !== this.lastKey && (this.lastKey = d, g.style.left = `${S}px`, g.style.top = `${x}px`);
  }
  /** The selected component followed by every selectable ancestor. */
  getChain() {
    const e = [];
    for (let t = this.editor.getSelected(); t; t = A(t))
      t.get("selectable") !== !1 && e.push(t);
    return e;
  }
  openList() {
    var c, r, a;
    const e = this.editor.getSelected();
    if (!e) return;
    (r = (c = this.deps).beforeOpen) == null || r.call(c), this.closeList();
    const t = document.createElement("div");
    t.className = `${l}-crumbmenu`, t.setAttribute("role", "menu"), this.getChain().forEach((u) => {
      const p = u === e, f = document.createElement("div");
      f.className = `${l}-item${p ? ` ${l}-item--current` : ""}`, f.setAttribute("role", "menuitem");
      const g = document.createElement("span");
      g.textContent = `${p ? "● " : "↑ "}${T(u)}`;
      const b = document.createElement("small");
      b.textContent = $e(u), f.appendChild(g), f.appendChild(b), p || f.addEventListener("click", () => {
        this.closeList(), this.editor.select(u);
      }), t.appendChild(f);
    }), document.body.appendChild(t), this.listEl = t;
    const s = (this.badgeEl || t).getBoundingClientRect();
    B(t, s.left, s.bottom);
    const o = [document], i = (a = this.getFrameEl()) == null ? void 0 : a.contentDocument;
    i && i !== document && o.push(i), o.forEach((u) => {
      u.addEventListener("mousedown", this.onOutside, !0), u.addEventListener("keydown", this.onKeydown, !0);
    }), this.listDocs = o;
  }
  closeList() {
    this.listDocs.forEach((e) => {
      e.removeEventListener("mousedown", this.onOutside, !0), e.removeEventListener("keydown", this.onKeydown, !0);
    }), this.listDocs = [], this.listEl && (this.listEl.remove(), this.listEl = null);
  }
}
const W = "__contextMenu";
function Ne(n) {
  return n[W];
}
function ze(n, e = {}) {
  var S;
  (S = Ne(n)) == null || S.destroy();
  const t = X(e);
  let s = !1;
  be(n);
  const o = ye(n, t.labels);
  t.injectCss && ke();
  const i = () => {
    try {
      return n.Canvas.getFrameEl() || null;
    } catch {
      return null;
    }
  }, c = () => {
    var d;
    try {
      return ((d = i()) == null ? void 0 : d.contentDocument) || null;
    } catch {
      return null;
    }
  }, r = new je(n, t, o, c), a = t.hierarchyBadge ? new Te(n, {
    title: () => o("hierarchyTitle"),
    getFrameEl: i,
    beforeOpen: () => r.close(),
    onEditorDestroyed: () => y()
  }) : null, u = [], p = (d) => {
    if (!w(n)) return y();
    d.preventDefault();
    let h = De(n, d.target);
    if (!h) return;
    const v = n.getSelected();
    v && Se(v, h) ? h = v : n.select(h);
    const k = i(), E = k ? xe(k, d.clientX, d.clientY) : { x: d.clientX, y: d.clientY };
    r.open(E.x, E.y, h, "canvas");
  }, f = () => {
    if (!t.canvasMenu) return;
    const d = c();
    !d || d.__gjsCmBound || (d.__gjsCmBound = !0, d.addEventListener("contextmenu", p), u.push(d));
  }, g = /* @__PURE__ */ new WeakMap(), b = ({ component: d, el: h }) => {
    d && h && g.set(h, d);
  }, $ = (d) => {
    for (let E = d; E; E = E.parentElement) {
      const M = g.get(E);
      if (M) return M;
    }
    const h = n.getConfig().stylePrefix || "gjs-", v = d.closest(`.${h}layer`), k = n.getWrapper();
    return v && k ? q(k, v) : void 0;
  }, C = (d) => {
    if (!w(n)) return y();
    if (!t.layersMenu) return;
    const h = d.target;
    if (!h || !h.closest) return;
    const v = $(h);
    v && (d.preventDefault(), n.select(v), r.open(d.clientX, d.clientY, v, "layers"));
  };
  n.on("layer:render", b), n.on("canvas:frame:load", f), a && n.on("component:toggled", a.start), n.onReady(() => {
    s || (f(), document.addEventListener("contextmenu", C), a == null || a.start());
  });
  function y() {
    s || (s = !0, r.destroy(), a == null || a.destroy(), document.removeEventListener("contextmenu", C), u.forEach((d) => {
      d.removeEventListener("contextmenu", p), delete d.__gjsCmBound;
    }), u.length = 0, w(n) && (n.off("layer:render", b), n.off("canvas:frame:load", f), a && n.off("component:toggled", a.start), n.off("destroy", y)));
  }
  n.on("destroy", y);
  const x = {
    open: (d, h, v, k = "canvas") => r.open(d, h, v, k),
    close: () => r.close(),
    get isOpen() {
      return r.isOpen;
    },
    destroy: y
  };
  n[W] = x;
}
export {
  D as EVENTS,
  ve as SUPPORTED_LOCALES,
  ze as contextMenuPlugin,
  ze as default,
  Ne as getContextMenu,
  F as locales
};
//# sourceMappingURL=grapesjs-context-menu.js.map
