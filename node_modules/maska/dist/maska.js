/*! maska v2.1.8 | (c) Alexander Shabunevich | Released under the MIT license */
var W = Object.defineProperty;
var b = (n, t, s) => t in n ? W(n, t, { enumerable: !0, configurable: !0, writable: !0, value: s }) : n[t] = s;
var m = (n, t, s) => (b(n, typeof t != "symbol" ? t + "" : t, s), s);
const O = {
  "#": { pattern: /[0-9]/ },
  "@": { pattern: /[a-zA-Z]/ },
  "*": { pattern: /[a-zA-Z0-9]/ }
};
class w {
  constructor(t = {}) {
    m(this, "opts", {});
    m(this, "memo", /* @__PURE__ */ new Map());
    var e;
    const s = { ...t };
    if (s.tokens != null) {
      s.tokens = s.tokensReplace ? { ...s.tokens } : { ...O, ...s.tokens };
      for (const a of Object.values(s.tokens))
        typeof a.pattern == "string" && (a.pattern = new RegExp(a.pattern));
    } else
      s.tokens = O;
    Array.isArray(s.mask) && (s.mask.length > 1 ? s.mask = [...s.mask].sort((a, i) => a.length - i.length) : s.mask = (e = s.mask[0]) != null ? e : ""), s.mask === "" && (s.mask = null), this.opts = s;
  }
  masked(t) {
    return this.process(t, this.findMask(t));
  }
  unmasked(t) {
    return this.process(t, this.findMask(t), !1);
  }
  isEager() {
    return this.opts.eager === !0;
  }
  isReversed() {
    return this.opts.reversed === !0;
  }
  completed(t) {
    const s = this.findMask(t);
    if (this.opts.mask == null || s == null)
      return !1;
    const e = this.process(t, s).length;
    return typeof this.opts.mask == "string" ? e >= this.opts.mask.length : typeof this.opts.mask == "function" ? e >= s.length : this.opts.mask.filter((a) => e >= a.length).length === this.opts.mask.length;
  }
  findMask(t) {
    var a, i;
    const s = this.opts.mask;
    if (s == null)
      return null;
    if (typeof s == "string")
      return s;
    if (typeof s == "function")
      return s(t);
    const e = this.process(t, (a = s.slice(-1).pop()) != null ? a : "", !1);
    return (i = s.find((c) => this.process(t, c, !1).length >= e.length)) != null ? i : "";
  }
  escapeMask(t) {
    const s = [], e = [];
    return t.split("").forEach((a, i) => {
      a === "!" && t[i - 1] !== "!" ? e.push(i - e.length) : s.push(a);
    }), { mask: s.join(""), escaped: e };
  }
  process(t, s, e = !0) {
    var A;
    if (s == null)
      return t;
    const a = `value=${t},mask=${s},masked=${e ? 1 : 0}`;
    if (this.memo.has(a))
      return this.memo.get(a);
    const { mask: i, escaped: c } = this.escapeMask(s), r = [], k = this.opts.tokens != null ? this.opts.tokens : {}, l = this.isReversed() ? -1 : 1, d = this.isReversed() ? "unshift" : "push", g = this.isReversed() ? 0 : i.length - 1, C = this.isReversed() ? () => o > -1 && p > -1 : () => o < i.length && p < t.length, S = (f) => !this.isReversed() && f <= g || this.isReversed() && f >= g;
    let E, u = -1, o = this.isReversed() ? i.length - 1 : 0, p = this.isReversed() ? t.length - 1 : 0;
    for (; C(); ) {
      const f = i.charAt(o), h = k[f], M = (h == null ? void 0 : h.transform) != null ? h.transform(t.charAt(p)) : t.charAt(p);
      if (!c.includes(o) && h != null) {
        if (M.match(h.pattern) != null)
          r[d](M), h.repeated ? (u === -1 ? u = o : o === g && o !== u && (o = u - l), g === u && (o -= l)) : h.multiple && (o -= l), o += l;
        else if (h.multiple) {
          const P = ((A = r[p - l]) == null ? void 0 : A.match(h.pattern)) != null, R = i.charAt(o + l);
          P && R !== "" && k[R] == null ? (o += l, p -= l) : r[d]("");
        } else
          M === E ? E = void 0 : h.optional && (o += l, p -= l);
        p += l;
      } else
        e && !this.isEager() && r[d](f), M === f && !this.isEager() ? p += l : E = f, this.isEager() || (o += l);
      if (this.isEager())
        for (; S(o) && (k[i.charAt(o)] == null || c.includes(o)); )
          e ? r[d](i.charAt(o)) : i.charAt(o) === t.charAt(p) && (p += l), o += l;
    }
    return this.memo.set(a, r.join("")), this.memo.get(a);
  }
}
const V = (n) => JSON.parse(n.replaceAll("'", '"')), T = (n, t = {}) => {
  const s = { ...t };
  return n.dataset.maska != null && n.dataset.maska !== "" && (s.mask = L(n.dataset.maska)), n.dataset.maskaEager != null && (s.eager = y(n.dataset.maskaEager)), n.dataset.maskaReversed != null && (s.reversed = y(n.dataset.maskaReversed)), n.dataset.maskaTokensReplace != null && (s.tokensReplace = y(n.dataset.maskaTokensReplace)), n.dataset.maskaTokens != null && (s.tokens = x(n.dataset.maskaTokens)), s;
}, y = (n) => n !== "" ? Boolean(JSON.parse(n)) : !0, L = (n) => n.startsWith("[") && n.endsWith("]") ? V(n) : n, x = (n) => {
  if (n.startsWith("{") && n.endsWith("}"))
    return V(n);
  const t = {};
  return n.split("|").forEach((s) => {
    const e = s.split(":");
    t[e[0]] = {
      pattern: new RegExp(e[1]),
      optional: e[2] === "optional",
      multiple: e[2] === "multiple",
      repeated: e[2] === "repeated"
    };
  }), t;
};
class J {
  constructor(t, s = {}) {
    m(this, "items", /* @__PURE__ */ new Map());
    m(this, "beforeinputEvent", (t) => {
      const s = t.target, e = this.items.get(s);
      e.isEager() && "inputType" in t && t.inputType.startsWith("delete") && e.unmasked(s.value).length <= 1 && this.setMaskedValue(s, "");
    });
    m(this, "inputEvent", (t) => {
      if (t instanceof CustomEvent && t.type === "input" && t.detail != null && typeof t.detail == "object" && "masked" in t.detail)
        return;
      const s = t.target, e = this.items.get(s), a = s.value, i = s.selectionStart, c = s.selectionEnd;
      let r = a;
      if (e.isEager()) {
        const k = e.masked(a), l = e.unmasked(a);
        l === "" && "data" in t && t.data != null ? r = t.data : l !== e.unmasked(k) && (r = l);
      }
      if (this.setMaskedValue(s, r), "inputType" in t && (t.inputType.startsWith("delete") || i != null && i < a.length))
        try {
          s.setSelectionRange(i, c);
        } catch {
        }
    });
    this.options = s, typeof t == "string" ? this.init(
      Array.from(document.querySelectorAll(t)),
      this.getMaskOpts(s)
    ) : this.init(
      "length" in t ? Array.from(t) : [t],
      this.getMaskOpts(s)
    );
  }
  destroy() {
    for (const t of this.items.keys())
      t.removeEventListener("input", this.inputEvent), t.removeEventListener("beforeinput", this.beforeinputEvent);
    this.items.clear();
  }
  needUpdateOptions(t, s) {
    const e = this.items.get(t), a = new w(T(t, this.getMaskOpts(s)));
    return JSON.stringify(e.opts) !== JSON.stringify(a.opts);
  }
  needUpdateValue(t) {
    const s = t.dataset.maskaValue;
    return s == null && t.value !== "" || s != null && s !== t.value;
  }
  getMaskOpts(t) {
    const { onMaska: s, preProcess: e, postProcess: a, ...i } = t;
    return i;
  }
  init(t, s) {
    for (const e of t) {
      const a = new w(T(e, s));
      this.items.set(e, a), e.value !== "" && this.setMaskedValue(e, e.value), e.addEventListener("input", this.inputEvent), e.addEventListener("beforeinput", this.beforeinputEvent);
    }
  }
  setMaskedValue(t, s) {
    const e = this.items.get(t);
    this.options.preProcess != null && (s = this.options.preProcess(s));
    const a = e.masked(s), i = e.unmasked(e.isEager() ? a : s), c = e.completed(s), r = { masked: a, unmasked: i, completed: c };
    s = a, this.options.postProcess != null && (s = this.options.postProcess(s)), t.value = s, t.dataset.maskaValue = s, this.options.onMaska != null && (Array.isArray(this.options.onMaska) ? this.options.onMaska.forEach((k) => k(r)) : this.options.onMaska(r)), t.dispatchEvent(new CustomEvent("maska", { detail: r })), t.dispatchEvent(new CustomEvent("input", { detail: r }));
  }
}
const v = /* @__PURE__ */ new WeakMap(), N = (n) => {
  setTimeout(() => {
    var t;
    ((t = v.get(n)) == null ? void 0 : t.needUpdateValue(n)) === !0 && n.dispatchEvent(new CustomEvent("input"));
  });
}, U = (n, t) => {
  const s = n instanceof HTMLInputElement ? n : n.querySelector("input"), e = { ...t.arg };
  if (s == null)
    return;
  N(s);
  const a = v.get(s);
  if (a != null) {
    if (!a.needUpdateOptions(s, e))
      return;
    a.destroy();
  }
  if (t.value != null) {
    const i = t.value, c = (r) => {
      i.masked = r.masked, i.unmasked = r.unmasked, i.completed = r.completed;
    };
    e.onMaska = e.onMaska == null ? c : Array.isArray(e.onMaska) ? [...e.onMaska, c] : [e.onMaska, c];
  }
  v.set(s, new J(s, e));
};
export {
  w as Mask,
  J as MaskInput,
  O as tokens,
  U as vMaska
};
