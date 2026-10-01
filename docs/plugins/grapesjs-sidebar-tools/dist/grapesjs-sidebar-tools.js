function Z(t, e) {
  let n = null;
  try {
    t.Panels.getPanels().forEach((i) => {
      const r = i.get("buttons");
      r && r.forEach((s) => {
        !n && s.get("command") === e && (n = s);
      });
    });
  } catch {
  }
  return n;
}
function X(t, e) {
  let n = !1, a = null;
  const i = (r) => typeof r == "string" && e.commands.indexOf(r) !== -1;
  return {
    onRun(r) {
      n && i(r) && e.set(r);
    },
    restore() {
      const r = e.get();
      if (e.restore && i(r)) {
        const s = Z(t, r);
        s && !s.get("active") && s.set("active", !0);
      }
      a = setTimeout(() => {
        a = null, n = !0;
      }, e.recordDelay ?? 100);
    },
    destroy() {
      a && clearTimeout(a), a = null, n = !1;
    }
  };
}
const U = {
  styleManagerTab: "Style Manager",
  settingsTab: "Component Settings",
  resizerTitle: "Drag to resize (double-click to reset to 50/50)"
}, q = "sidebarTools";
function Q(t, e, n, a) {
  var s;
  let i;
  const r = {};
  a && (r.l = a);
  try {
    i = (s = t.I18n) == null ? void 0 : s.t(`${q}.${e}`, Object.keys(r).length ? r : void 0);
  } catch {
    i = void 0;
  }
  return typeof i == "string" && i ? i : U[e];
}
function w(t) {
  var e, n;
  try {
    return ((n = (e = t.I18n) == null ? void 0 : e.getLocale) == null ? void 0 : n.call(e)) || "en";
  } catch {
    return "en";
  }
}
const ee = /* @__PURE__ */ new Set(["ar", "he", "fa"]);
function P(t) {
  return ee.has(String(t).split("-")[0]);
}
const te = {
  styleManagerTab: "إعدادات النمط",
  settingsTab: "إعدادات السمات",
  resizerTitle: "اسحب لتغيير الحجم (انقر نقرًا مزدوجًا للعودة إلى 50/50)"
}, ne = {
  styleManagerTab: "Postavke izgleda",
  settingsTab: "Postavke komponente",
  resizerTitle: "Povucite za promjenu veličine (dvostruki klik vraća na 50/50)"
}, se = {
  styleManagerTab: "Administrador d'estils",
  settingsTab: "Configuració de components",
  resizerTitle: "Arrossega per canviar la mida (doble clic per tornar a 50/50)"
}, re = {
  styleManagerTab: "Style Manager",
  settingsTab: "Komponenten Eigenschaften",
  resizerTitle: "Ziehen, um die Größe zu ändern (Doppelklick setzt auf 50/50 zurück)"
}, ae = {
  styleManagerTab: "Διαχειριστής Μορφοποίησης",
  settingsTab: "Ρυθμίσεις Συστατικού",
  resizerTitle: "Σύρετε για αλλαγή μεγέθους (διπλό κλικ για επαναφορά σε 50/50)"
}, ie = {
  styleManagerTab: "Administrador de estilos",
  settingsTab: "Ajustes de componentes",
  resizerTitle: "Arrastra para cambiar el tamaño (doble clic para volver a 50/50)"
}, oe = {
  styleManagerTab: "مدیریت استایل",
  settingsTab: "تنظیمات جزء",
  resizerTitle: "برای تغییر اندازه بکشید (دوبار کلیک برای بازگشت به 50/50)"
}, le = {
  styleManagerTab: "Gestionnaire de style",
  settingsTab: "Paramètres composant",
  resizerTitle: "Faites glisser pour redimensionner (double-clic pour revenir à 50/50)"
}, ce = {
  styleManagerTab: "ניהול סגנון",
  settingsTab: "הגדרות רכיב",
  resizerTitle: "גררו כדי לשנות את הגודל (לחיצה כפולה מחזירה ל־50/50)"
}, ue = {
  styleManagerTab: "Manajemen Style",
  settingsTab: "Pengaturan komponen",
  resizerTitle: "Seret untuk mengubah ukuran (klik dua kali untuk kembali ke 50/50)"
}, ge = {
  styleManagerTab: "Style Manager",
  settingsTab: "Configurazione componente",
  resizerTitle: "Trascina per ridimensionare (doppio clic per tornare a 50/50)"
}, be = {
  styleManagerTab: "Style Manager",
  settingsTab: "Component 설정",
  resizerTitle: "드래그하여 크기 조절 (더블 클릭하면 50/50으로 초기화)"
}, fe = {
  styleManagerTab: "Stiladministrator",
  settingsTab: "Komponentinnstillinger",
  resizerTitle: "Dra for å endre størrelse (dobbeltklikk for å tilbakestille til 50/50)"
}, pe = {
  styleManagerTab: "Stijl Manager",
  settingsTab: "Component instellingen",
  resizerTitle: "Sleep om het formaat te wijzigen (dubbelklik om terug te zetten naar 50/50)"
}, de = {
  styleManagerTab: "Menedżer stylów",
  settingsTab: "Ustawienia elementu",
  resizerTitle: "Przeciągnij, aby zmienić rozmiar (dwuklik przywraca 50/50)"
}, me = {
  styleManagerTab: "Gerenciador de estilos",
  settingsTab: "Configurações do componente",
  resizerTitle: "Arraste para redimensionar (clique duplo para voltar a 50/50)"
}, ye = {
  styleManagerTab: "Диспетчер стилей",
  settingsTab: "Настройки компонента",
  resizerTitle: "Потяните, чтобы изменить высоту (двойной клик — 50/50)"
}, Te = {
  styleManagerTab: "Stilhanterare",
  settingsTab: "Komponentinställningar",
  resizerTitle: "Dra för att ändra storlek (dubbelklicka för att återställa till 50/50)"
}, he = {
  styleManagerTab: "Stil Düzenleyici",
  settingsTab: "Bileşen Özellikleri",
  resizerTitle: "Boyutlandırmak için sürükleyin (50/50'ye dönmek için çift tıklayın)"
}, ve = {
  styleManagerTab: "Trình soạn thảo style",
  settingsTab: "Thiết lập thành phần",
  resizerTitle: "Kéo để thay đổi kích thước (nhấp đúp để đặt lại 50/50)"
}, Ce = {
  styleManagerTab: "样式管理器",
  settingsTab: "组件设置",
  resizerTitle: "拖动以调整大小（双击恢复为 50/50）"
}, H = {
  ar: te,
  bs: ne,
  ca: se,
  de: re,
  el: ae,
  en: U,
  es: ie,
  fa: oe,
  fr: le,
  he: ce,
  id: ue,
  it: ge,
  ko: be,
  nb: fe,
  nl: pe,
  pl: de,
  pt: me,
  ru: ye,
  se: Te,
  tr: he,
  vi: ve,
  zh: Ce
}, Se = Object.keys(H);
function je(t) {
  const e = t.I18n;
  if (!e || typeof e.addMessages != "function") return;
  const n = {};
  for (const a of Se)
    n[a] = { [q]: { ...H[a] } };
  e.addMessages(n);
}
function R(t) {
  let e = t;
  if (typeof e == "function")
    try {
      e = e();
    } catch {
      return null;
    }
  if (!e) return null;
  if (typeof e == "string")
    try {
      return document.querySelector(e);
    } catch {
      return null;
    }
  return typeof e == "object" && e.nodeType === 1 ? e : null;
}
const _ = "gjs-lsb-split", I = "gjs-lsb-host", D = "gjs-lsb-split--open", B = "gjs-lsb-resizing", Me = "gjs-lsb-tab--active";
function v(t, e) {
  const n = document.createElement(t);
  return n.className = e, n;
}
function Ee(t) {
  for (let e = 0; e < t.children.length; e++) {
    const n = t.children[e];
    if (n.classList.contains(_)) return n;
  }
  return null;
}
function Ae(t, e) {
  const n = v("div", _), a = v("div", "gjs-lsb-top");
  Array.prototype.slice.call(t.childNodes).forEach((u) => a.appendChild(u));
  const r = v("div", "gjs-lsb-resizer");
  r.setAttribute("role", "separator"), r.setAttribute("aria-orientation", "horizontal");
  const s = v("div", "gjs-lsb-bottom"), o = v("div", "gjs-lsb-tabs");
  o.setAttribute("role", "tablist");
  const l = {
    style: v("button", "gjs-lsb-tab"),
    settings: v("button", "gjs-lsb-tab")
  };
  Object.keys(l).forEach((u) => {
    const f = l[u];
    f.type = "button", f.setAttribute("role", "tab"), f.setAttribute("data-tab", u), o.appendChild(f);
  });
  function g(u, f = !1) {
    r.title = u.resizerTitle, l.style.textContent = l.style.title = u.styleManagerTab, l.settings.textContent = l.settings.title = u.settingsTab, o.setAttribute("dir", f ? "rtl" : "ltr");
  }
  g(e.labels, e.rtl);
  const b = v("div", "gjs-lsb-tab-content"), m = v("div", "gjs-lsb-panel gjs-lsb-panel--style"), y = v("div", "gjs-lsb-panel gjs-lsb-panel--settings");
  m.setAttribute("role", "tabpanel"), y.setAttribute("role", "tabpanel"), b.appendChild(m), b.appendChild(y), s.appendChild(o), s.appendChild(b), n.appendChild(a), n.appendChild(r), n.appendChild(s), t.appendChild(n), t.classList.add(I);
  let C = e.initialTab === "settings" ? "settings" : "style", T = 0.5;
  function S(u) {
    const f = isFinite(u) ? u : 0.5;
    return T = Math.min(e.maxRatio, Math.max(e.minRatio, f)), n.style.setProperty("--lsb-top", `${T * 100}%`), T;
  }
  function L(u) {
    C = u, Object.keys(l).forEach((f) => {
      const d = f === u;
      l[f].classList.toggle(Me, d), l[f].setAttribute("aria-selected", String(d));
    }), m.hidden = u !== "style", y.hidden = u !== "settings";
  }
  function z(u) {
    var p;
    const f = u === "settings" ? "settings" : "style", d = f !== C;
    L(f), d && ((p = e.onTabChange) == null || p.call(e, f));
  }
  const k = (u) => {
    var d, p;
    const f = (p = (d = u.target).closest) == null ? void 0 : p.call(d, ".gjs-lsb-tab");
    f && z(f.getAttribute("data-tab"));
  };
  o.addEventListener("click", k);
  let j = null;
  const E = (u) => {
    if (u.button !== void 0 && u.button !== 0) return;
    u.preventDefault();
    const f = u.pointerId;
    try {
      r.setPointerCapture(f);
    } catch {
    }
    n.classList.add(B);
    const d = (A) => {
      const c = n.getBoundingClientRect();
      c.height && S((A.clientY - c.top) / c.height);
    }, p = () => {
      var A;
      r.removeEventListener("pointermove", d), r.removeEventListener("pointerup", p), r.removeEventListener("pointercancel", p);
      try {
        r.releasePointerCapture(f);
      } catch {
      }
      n.classList.remove(B), j = null, (A = e.onRatioCommit) == null || A.call(e, T);
    };
    r.addEventListener("pointermove", d), r.addEventListener("pointerup", p), r.addEventListener("pointercancel", p), j = p;
  }, x = () => {
    var u;
    S(0.5), (u = e.onRatioCommit) == null || u.call(e, T);
  };
  return r.addEventListener("pointerdown", E), r.addEventListener("dblclick", x), S(e.initialRatio), L(C), {
    host: t,
    el: n,
    topPane: a,
    resizer: r,
    bottomPane: s,
    smContainer: m,
    tmContainer: y,
    get tab() {
      return C;
    },
    get ratio() {
      return T;
    },
    showTab: z,
    setRatio: S,
    setLabels: g,
    setOpen(u) {
      n.classList.toggle(D, u);
    },
    isOpen() {
      return n.classList.contains(D);
    },
    isVisible() {
      return n.isConnected && n.getClientRects().length > 0;
    },
    destroy() {
      for (j == null || j(), o.removeEventListener("click", k), r.removeEventListener("pointerdown", E), r.removeEventListener("dblclick", x); a.firstChild; ) t.insertBefore(a.firstChild, n);
      n.remove(), t.classList.remove(I);
    }
  };
}
const Le = ["open-layers", "core:open-layers"];
function J(t) {
  const e = t;
  return e.LayerManager || e.Layers || null;
}
function ze(t) {
  var n, a;
  const e = t.Commands;
  for (const i of Le)
    try {
      if (e.has && !e.has(i)) continue;
      const r = e.get(i), s = R(r && r.layers);
      if (s) return s;
    } catch {
    }
  try {
    const i = (a = (n = J(t)) == null ? void 0 : n.view) == null ? void 0 : a.el, r = i == null ? void 0 : i.parentElement;
    if (r && !r.closest(`.${_}`)) return r;
  } catch {
  }
  return null;
}
function ke(t, e) {
  var a, i, r;
  if (e) return { el: R(e), explicit: !0 };
  let n;
  try {
    n = (r = (i = (a = J(t)) == null ? void 0 : a.getConfig) == null ? void 0 : i.call(a)) == null ? void 0 : r.appendTo;
  } catch {
    n = void 0;
  }
  return n ? { el: R(n), explicit: !0 } : { el: ze(t), explicit: !1 };
}
const xe = {
  sm: ["gjs-sm-sectors"],
  tm: ["gjs-traits-cs", "gjs-trt-traits"]
};
function Re(t) {
  var n, a;
  const e = ((n = t == null ? void 0 : t.SectView) == null ? void 0 : n.el) || ((a = t == null ? void 0 : t.view) == null ? void 0 : a.el);
  return e && e.nodeType === 1 && e.isConnected ? e : null;
}
function we(t, e, n) {
  var l, g;
  const i = (Array.isArray(e) ? e : [e]).map((b) => `.${b}`).join(","), r = (b) => !!b && (!n || !n.contains(b));
  let s = null;
  try {
    s = R((g = (l = t == null ? void 0 : t.getConfig) == null ? void 0 : l.call(t)) == null ? void 0 : g.appendTo);
  } catch {
    s = null;
  }
  let o = null;
  if (s && (o = s.querySelector(i) || s.firstElementChild), !o) {
    const b = Re(t);
    r(b) && (o = b);
  }
  if (!o) {
    const b = document.querySelectorAll(i);
    for (let m = 0; m < b.length && !o; m++)
      r(b[m]) && (o = b[m]);
  }
  return o ? { el: o, parent: o.parentNode, next: o.nextSibling } : null;
}
const Oe = {
  sm: "open-sm",
  tm: "open-tm"
};
function Ne(t, e, n) {
  var a, i;
  try {
    const r = t == null ? void 0 : t.Commands, s = ((a = n == null ? void 0 : n.getConfig) == null ? void 0 : a.call(n)) || {};
    if (s.appendTo || s.custom) return !1;
    const o = Oe[e];
    if (!r || r.has && !r.has(o)) return !1;
    const l = r.get(o);
    if (!l || typeof l.run != "function" || l.$cn || l.$cnt) return !1;
    const g = { get: () => !1 };
    return l.run(t, g), (i = l.stop) == null || i.call(l, t, g), !0;
  } catch {
    return !1;
  }
}
function $e(t, e) {
  const n = { sm: !1, tm: !1 }, a = { sm: null, tm: null };
  function i(s, o) {
    const l = a[s];
    if (l && l.el.isConnected) return l;
    const g = we(t(s), xe[s], o);
    return a[s] = g, g;
  }
  function r(s) {
    const o = a[s];
    if (!o || !o.parent || o.el.parentNode === o.parent) return;
    const l = o.next && o.next.parentNode === o.parent ? o.next : null;
    o.parent.insertBefore(o.el, l);
  }
  return {
    get: (s) => i(s),
    moveIn(s, o) {
      const l = a[s];
      let g = l && l.el.isConnected ? l : i(s, o);
      !g && e && !n[s] && (n[s] = !0, e(s) && (g = i(s, o))), g && g.el.parentNode !== o && (g.el.parentNode && (g.parent = g.el.parentNode, g.next = g.el.nextSibling), o.appendChild(g.el));
    },
    moveBack: r,
    moveAllBack() {
      r("sm"), r("tm");
    }
  };
}
const O = {
  injectCss: !0,
  persist: !0,
  storageKey: "gjs-lsb-state",
  globalTabCommands: ["open-sm", "open-tm", "open-layers", "open-blocks"],
  restoreGlobalTab: !0,
  layersContainer: null,
  prerenderManagers: !0,
  minRatio: 0.15,
  maxRatio: 0.85,
  // Empty: texts come from editor.I18n (see src/i18n), `labels` only overrides.
  labels: {}
};
function N(t) {
  return !!t && typeof t == "object" && !Array.isArray(t) && !(t instanceof Node);
}
function W(t, e) {
  const n = { ...t };
  return e && Object.keys(e).forEach((a) => {
    const i = e[a];
    i !== void 0 && (n[a] = N(i) && N(t[a]) ? W(t[a], i) : i);
  }), n;
}
function _e(t) {
  const e = W(O, t);
  let n = Number(e.minRatio), a = Number(e.maxRatio);
  isFinite(n) || (n = O.minRatio), isFinite(a) || (a = O.maxRatio), n = Math.min(Math.max(n, 0), 1), a = Math.min(Math.max(a, 0), 1), n > a && ([n, a] = [a, n]), e.minRatio = n, e.maxRatio = a;
  const i = N(e.labels) ? e.labels : {};
  return e.labels = {}, Object.keys(i).forEach((r) => {
    typeof i[r] == "string" && i[r] && (e.labels[r] = i[r]);
  }), e.globalTabCommands = Array.isArray(e.globalTabCommands) ? e.globalTabCommands.slice() : [], e;
}
function Pe(t) {
  var n;
  let e;
  try {
    e = (n = t == null ? void 0 : t.getSectors) == null ? void 0 : n.call(t);
  } catch {
    return [];
  }
  return e ? Array.isArray(e.models) ? e.models : Array.isArray(e) ? e : typeof e.toArray == "function" ? e.toArray() : [] : [];
}
function G(t) {
  return String(t.getId ? t.getId() : t.get("id"));
}
function Ie(t, e, n) {
  const a = /* @__PURE__ */ new Map();
  let i = !1;
  function r(s) {
    if (a.has(s)) return;
    const o = () => {
      i || (e[G(s)] = !!s.get("open"), n());
    };
    s.on("change:open", o), a.set(s, o);
  }
  return {
    sync() {
      const s = Pe(t());
      s.forEach(r), i = !0;
      try {
        s.forEach((o) => {
          const l = G(o);
          if (!Object.prototype.hasOwnProperty.call(e, l)) return;
          const g = !!e[l];
          !!o.get("open") !== g && o.set("open", g);
        });
      } finally {
        i = !1;
      }
    },
    destroy() {
      a.forEach((s, o) => {
        var l;
        return (l = o.off) == null ? void 0 : l.call(o, "change:open", s);
      }), a.clear();
    }
  };
}
function $() {
  return { tab: "style", ratio: 0.5, sectors: {}, globalTab: null };
}
function De() {
  try {
    return typeof localStorage < "u" ? localStorage : null;
  } catch {
    return null;
  }
}
function Be(t) {
  const e = $();
  if (!t || typeof t != "object") return e;
  const n = t;
  return e.tab = n.tab === "settings" ? "settings" : "style", typeof n.ratio == "number" && isFinite(n.ratio) && (e.ratio = n.ratio), n.sectors && typeof n.sectors == "object" && !Array.isArray(n.sectors) && Object.keys(n.sectors).forEach((a) => {
    e.sectors[a] = !!n.sectors[a];
  }), e.globalTab = typeof n.globalTab == "string" ? n.globalTab : null, e;
}
function Ge(t) {
  const e = t.persist ? De() : null;
  let n = $();
  if (e)
    try {
      n = Be(JSON.parse(e.getItem(t.storageKey) || "null"));
    } catch {
      n = $();
    }
  return {
    state: n,
    save() {
      if (e)
        try {
          e.setItem(t.storageKey, JSON.stringify(n));
        } catch {
        }
    }
  };
}
const V = "gjs-lsb-styles", Ve = [
  ".gjs-lsb-host{height:100%;}",
  ".gjs-lsb-split{display:flex;flex-direction:column;height:100%;min-height:0;--lsb-top:50%;}",
  ".gjs-lsb-top{flex:1 1 auto;min-height:0;overflow:auto;}",
  ".gjs-lsb-split--open .gjs-lsb-top{flex:0 0 var(--lsb-top,50%);}",
  ".gjs-lsb-resizer{display:none;flex:0 0 6px;cursor:row-resize;background:rgba(255,255,255,.08);touch-action:none;}",
  ".gjs-lsb-resizer:hover,.gjs-lsb-resizing .gjs-lsb-resizer{background:#3b97e3;}",
  ".gjs-lsb-resizing{user-select:none;}",
  ".gjs-lsb-split--open .gjs-lsb-resizer{display:block;}",
  ".gjs-lsb-bottom{display:none;flex:1 1 0;min-height:0;overflow:hidden;flex-direction:column;}",
  ".gjs-lsb-split--open .gjs-lsb-bottom{display:flex;}",
  ".gjs-lsb-tabs{display:flex;flex:0 0 auto;}",
  ".gjs-lsb-tab{flex:1 1 50%;padding:8px 6px;text-align:center;font-size:12px;background:transparent;border:none;color:#b8b8b8;cursor:pointer;border-bottom:2px solid transparent;min-width:0;line-height:1.3;overflow-wrap:break-word;}",
  ".gjs-lsb-tab:hover{color:#fff;}",
  ".gjs-lsb-tab--active{color:#fff;border-bottom-color:#3b97e3;}",
  ".gjs-lsb-tab-content{flex:1 1 auto;min-height:0;overflow:auto;}",
  ".gjs-lsb-panel{height:100%;}",
  ".gjs-lsb-panel[hidden]{display:none !important;}"
].join("");
function Ke(t = document) {
  if (t.getElementById(V)) return;
  const e = t.createElement("style");
  e.id = V, e.textContent = Ve, t.head.appendChild(e);
}
const Fe = "layers-sidebar:show-styles", Ye = "layers-sidebar:show-settings", Ue = "[grapesjs-sidebar-tools]", K = "component:toggled run stop style:sector:add", F = "i18n:locale", Y = "i18n:update", qe = ["styleManagerTab", "settingsTab", "resizerTitle"];
function He(t, e = {}) {
  const n = _e(e);
  je(t), n.injectCss && typeof document < "u" && Ke(document);
  const a = Ge(n), { state: i } = a, r = t;
  let s = null, o = !1, l = !1, g = null, b = null;
  const m = (c) => c === "sm" ? r.StyleManager || r.Styles : r.TraitManager || r.Traits, y = $e(
    m,
    (c) => n.prerenderManagers ? Ne(t, c, m(c)) : !1
  ), C = Ie(() => r.StyleManager || r.Styles, i.sectors, a.save), T = X(t, {
    commands: n.globalTabCommands,
    restore: n.restoreGlobalTab,
    get: () => i.globalTab,
    set: (c) => {
      i.globalTab = c, a.save();
    }
  });
  function S(c = w(t)) {
    const h = {};
    return qe.forEach((M) => {
      h[M] = n.labels[M] || Q(t, M, void 0, c);
    }), h;
  }
  function L(c = w(t)) {
    s && !l && s.setLabels(S(c), P(c));
  }
  const z = (c) => L(typeof (c == null ? void 0 : c.value) == "string" && c.value ? c.value : void 0), k = () => L();
  function j(c) {
    b == null || b.disconnect(), b = null, typeof ResizeObserver < "u" && (b = new ResizeObserver(() => u()), b.observe(c));
  }
  function E() {
    if (l) return null;
    if (s && s.el.isConnected) return s;
    s && !s.el.isConnected && (y.moveAllBack(), s = null);
    const { el: c, explicit: h } = ke(t, n.layersContainer);
    return c ? Ee(c) ? null : (s = Ae(c, {
      labels: S(),
      rtl: P(w(t)),
      minRatio: n.minRatio,
      maxRatio: n.maxRatio,
      initialTab: i.tab,
      initialRatio: i.ratio,
      onTabChange(M) {
        i.tab = M, a.save();
      },
      onRatioCommit(M) {
        i.ratio = M, a.save();
      }
    }), i.ratio = s.ratio, j(s.el), s) : (h && !o && (o = !0, console.warn(`${Ue} Could not resolve the layers container, split layout skipped.`)), null);
  }
  function x() {
    if (g = null, l) return;
    C.sync();
    const c = E();
    if (!c) return;
    const h = c.isVisible() && !!t.getSelected();
    c.setOpen(h), h ? (y.moveIn("sm", c.smContainer), y.moveIn("tm", c.tmContainer), c.showTab(i.tab)) : y.moveAllBack();
  }
  function u() {
    l || (g && clearTimeout(g), g = setTimeout(x, 0));
  }
  function f(c) {
    const h = E();
    h && (h.showTab(c), x());
  }
  t.Commands.add(Fe, { run: () => f("style") }), t.Commands.add(Ye, { run: () => f("settings") });
  const d = (c) => T.onRun(c), p = () => {
    E(), t.on(K, u), t.on(F, z), t.on(Y, k), u(), setTimeout(() => {
      l || T.restore();
    }, 0);
  }, A = () => {
    l || (l = !0, g && clearTimeout(g), g = null, b == null || b.disconnect(), b = null, t.off(K, u), t.off(F, z), t.off(Y, k), t.off("run", d), t.off("load", p), T.destroy(), C.destroy(), y.moveAllBack(), s == null || s.destroy(), s = null);
  };
  t.on("load", p), t.on("run", d), t.on("destroy", A);
}
export {
  He as default
};
//# sourceMappingURL=grapesjs-sidebar-tools.js.map
