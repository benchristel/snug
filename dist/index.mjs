var U, h, z, T, R, M = {}, V = [], te = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function b(e, t) {
  for (var n in t)
    e[n] = t[n];
  return e;
}
function q(e) {
  var t = e.parentNode;
  t && t.removeChild(e);
}
function u(e, t, n) {
  var l, r, o, f = {};
  for (o in t)
    o == "key" ? l = t[o] : o == "ref" ? r = t[o] : f[o] = t[o];
  if (arguments.length > 2 && (f.children = arguments.length > 3 ? U.call(arguments, 2) : n), typeof e == "function" && e.defaultProps != null)
    for (o in e.defaultProps)
      f[o] === void 0 && (f[o] = e.defaultProps[o]);
  return D(e, f, l, r, null);
}
function D(e, t, n, l, r) {
  var o = { type: e, props: t, key: n, ref: l, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: r == null ? ++z : r };
  return r == null && h.vnode != null && h.vnode(o), o;
}
function H(e) {
  return e.children;
}
function E(e, t) {
  this.props = e, this.context = t;
}
function w(e, t) {
  if (t == null)
    return e.__ ? w(e.__, e.__.__k.indexOf(e) + 1) : null;
  for (var n; t < e.__k.length; t++)
    if ((n = e.__k[t]) != null && n.__e != null)
      return n.__e;
  return typeof e.type == "function" ? w(e) : null;
}
function J(e) {
  var t, n;
  if ((e = e.__) != null && e.__c != null) {
    for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++)
      if ((n = e.__k[t]) != null && n.__e != null) {
        e.__e = e.__c.base = n.__e;
        break;
      }
    return J(e);
  }
}
function $(e) {
  (!e.__d && (e.__d = !0) && T.push(e) && !N.__r++ || R !== h.debounceRendering) && ((R = h.debounceRendering) || setTimeout)(N);
}
function N() {
  for (var e; N.__r = T.length; )
    e = T.sort(function(t, n) {
      return t.__v.__b - n.__v.__b;
    }), T = [], e.some(function(t) {
      var n, l, r, o, f, p;
      t.__d && (f = (o = (n = t).__v).__e, (p = n.__P) && (l = [], (r = b({}, o)).__v = o.__v + 1, F(p, o, r, n.__n, p.ownerSVGElement !== void 0, o.__h != null ? [f] : null, l, f == null ? w(o) : f, o.__h), Y(l, o), o.__e != f && J(o)));
    });
}
function K(e, t, n, l, r, o, f, p, a, d) {
  var _, v, s, i, c, x, y, g = l && l.__k || V, k = g.length;
  for (n.__k = [], _ = 0; _ < t.length; _++)
    if ((i = n.__k[_] = (i = t[_]) == null || typeof i == "boolean" ? null : typeof i == "string" || typeof i == "number" || typeof i == "bigint" ? D(null, i, null, null, i) : Array.isArray(i) ? D(H, { children: i }, null, null, null) : i.__b > 0 ? D(i.type, i.props, i.key, i.ref ? i.ref : null, i.__v) : i) != null) {
      if (i.__ = n, i.__b = n.__b + 1, (s = g[_]) === null || s && i.key == s.key && i.type === s.type)
        g[_] = void 0;
      else
        for (v = 0; v < k; v++) {
          if ((s = g[v]) && i.key == s.key && i.type === s.type) {
            g[v] = void 0;
            break;
          }
          s = null;
        }
      F(e, i, s = s || M, r, o, f, p, a, d), c = i.__e, (v = i.ref) && s.ref != v && (y || (y = []), s.ref && y.push(s.ref, null, i), y.push(v, i.__c || c, i)), c != null ? (x == null && (x = c), typeof i.type == "function" && i.__k === s.__k ? i.__d = a = Q(i, a, e) : a = X(e, i, s, g, c, a), typeof n.type == "function" && (n.__d = a)) : a && s.__e == a && a.parentNode != e && (a = w(s));
    }
  for (n.__e = x, _ = k; _--; )
    g[_] != null && (typeof n.type == "function" && g[_].__e != null && g[_].__e == n.__d && (n.__d = w(l, _ + 1)), ee(g[_], g[_]));
  if (y)
    for (_ = 0; _ < y.length; _++)
      Z(y[_], y[++_], y[++_]);
}
function Q(e, t, n) {
  for (var l, r = e.__k, o = 0; r && o < r.length; o++)
    (l = r[o]) && (l.__ = e, t = typeof l.type == "function" ? Q(l, t, n) : X(n, l, l, r, l.__e, t));
  return t;
}
function X(e, t, n, l, r, o) {
  var f, p, a;
  if (t.__d !== void 0)
    f = t.__d, t.__d = void 0;
  else if (n == null || r != o || r.parentNode == null)
    e:
      if (o == null || o.parentNode !== e)
        e.appendChild(r), f = null;
      else {
        for (p = o, a = 0; (p = p.nextSibling) && a < l.length; a += 2)
          if (p == r)
            break e;
        e.insertBefore(r, o), f = o;
      }
  return f !== void 0 ? f : r.nextSibling;
}
function ne(e, t, n, l, r) {
  var o;
  for (o in n)
    o === "children" || o === "key" || o in t || L(e, o, null, n[o], l);
  for (o in t)
    r && typeof t[o] != "function" || o === "children" || o === "key" || o === "value" || o === "checked" || n[o] === t[o] || L(e, o, t[o], n[o], l);
}
function B(e, t, n) {
  t[0] === "-" ? e.setProperty(t, n) : e[t] = n == null ? "" : typeof n != "number" || te.test(t) ? n : n + "px";
}
function L(e, t, n, l, r) {
  var o;
  e:
    if (t === "style")
      if (typeof n == "string")
        e.style.cssText = n;
      else {
        if (typeof l == "string" && (e.style.cssText = l = ""), l)
          for (t in l)
            n && t in n || B(e.style, t, "");
        if (n)
          for (t in n)
            l && n[t] === l[t] || B(e.style, t, n[t]);
      }
    else if (t[0] === "o" && t[1] === "n")
      o = t !== (t = t.replace(/Capture$/, "")), t = t.toLowerCase() in e ? t.toLowerCase().slice(2) : t.slice(2), e.l || (e.l = {}), e.l[t + o] = n, n ? l || e.addEventListener(t, o ? G : O, o) : e.removeEventListener(t, o ? G : O, o);
    else if (t !== "dangerouslySetInnerHTML") {
      if (r)
        t = t.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
      else if (t !== "href" && t !== "list" && t !== "form" && t !== "tabIndex" && t !== "download" && t in e)
        try {
          e[t] = n == null ? "" : n;
          break e;
        } catch {
        }
      typeof n == "function" || (n != null && (n !== !1 || t[0] === "a" && t[1] === "r") ? e.setAttribute(t, n) : e.removeAttribute(t));
    }
}
function O(e) {
  this.l[e.type + !1](h.event ? h.event(e) : e);
}
function G(e) {
  this.l[e.type + !0](h.event ? h.event(e) : e);
}
function F(e, t, n, l, r, o, f, p, a) {
  var d, _, v, s, i, c, x, y, g, k, S, I, C, m = t.type;
  if (t.constructor !== void 0)
    return null;
  n.__h != null && (a = n.__h, p = t.__e = n.__e, t.__h = null, o = [p]), (d = h.__b) && d(t);
  try {
    e:
      if (typeof m == "function") {
        if (y = t.props, g = (d = m.contextType) && l[d.__c], k = d ? g ? g.props.value : d.__ : l, n.__c ? x = (_ = t.__c = n.__c).__ = _.__E : ("prototype" in m && m.prototype.render ? t.__c = _ = new m(y, k) : (t.__c = _ = new E(y, k), _.constructor = m, _.render = oe), g && g.sub(_), _.props = y, _.state || (_.state = {}), _.context = k, _.__n = l, v = _.__d = !0, _.__h = []), _.__s == null && (_.__s = _.state), m.getDerivedStateFromProps != null && (_.__s == _.state && (_.__s = b({}, _.__s)), b(_.__s, m.getDerivedStateFromProps(y, _.__s))), s = _.props, i = _.state, v)
          m.getDerivedStateFromProps == null && _.componentWillMount != null && _.componentWillMount(), _.componentDidMount != null && _.__h.push(_.componentDidMount);
        else {
          if (m.getDerivedStateFromProps == null && y !== s && _.componentWillReceiveProps != null && _.componentWillReceiveProps(y, k), !_.__e && _.shouldComponentUpdate != null && _.shouldComponentUpdate(y, _.__s, k) === !1 || t.__v === n.__v) {
            _.props = y, _.state = _.__s, t.__v !== n.__v && (_.__d = !1), _.__v = t, t.__e = n.__e, t.__k = n.__k, t.__k.forEach(function(P) {
              P && (P.__ = t);
            }), _.__h.length && f.push(_);
            break e;
          }
          _.componentWillUpdate != null && _.componentWillUpdate(y, _.__s, k), _.componentDidUpdate != null && _.__h.push(function() {
            _.componentDidUpdate(s, i, c);
          });
        }
        if (_.context = k, _.props = y, _.__v = t, _.__P = e, S = h.__r, I = 0, "prototype" in m && m.prototype.render)
          _.state = _.__s, _.__d = !1, S && S(t), d = _.render(_.props, _.state, _.context);
        else
          do
            _.__d = !1, S && S(t), d = _.render(_.props, _.state, _.context), _.state = _.__s;
          while (_.__d && ++I < 25);
        _.state = _.__s, _.getChildContext != null && (l = b(b({}, l), _.getChildContext())), v || _.getSnapshotBeforeUpdate == null || (c = _.getSnapshotBeforeUpdate(s, i)), C = d != null && d.type === H && d.key == null ? d.props.children : d, K(e, Array.isArray(C) ? C : [C], t, n, l, r, o, f, p, a), _.base = t.__e, t.__h = null, _.__h.length && f.push(_), x && (_.__E = _.__ = null), _.__e = !1;
      } else
        o == null && t.__v === n.__v ? (t.__k = n.__k, t.__e = n.__e) : t.__e = _e(n.__e, t, n, l, r, o, f, a);
    (d = h.diffed) && d(t);
  } catch (P) {
    t.__v = null, (a || o != null) && (t.__e = p, t.__h = !!a, o[o.indexOf(p)] = null), h.__e(P, t, n);
  }
}
function Y(e, t) {
  h.__c && h.__c(t, e), e.some(function(n) {
    try {
      e = n.__h, n.__h = [], e.some(function(l) {
        l.call(n);
      });
    } catch (l) {
      h.__e(l, n.__v);
    }
  });
}
function _e(e, t, n, l, r, o, f, p) {
  var a, d, _, v = n.props, s = t.props, i = t.type, c = 0;
  if (i === "svg" && (r = !0), o != null) {
    for (; c < o.length; c++)
      if ((a = o[c]) && "setAttribute" in a == !!i && (i ? a.localName === i : a.nodeType === 3)) {
        e = a, o[c] = null;
        break;
      }
  }
  if (e == null) {
    if (i === null)
      return document.createTextNode(s);
    e = r ? document.createElementNS("http://www.w3.org/2000/svg", i) : document.createElement(i, s.is && s), o = null, p = !1;
  }
  if (i === null)
    v === s || p && e.data === s || (e.data = s);
  else {
    if (o = o && U.call(e.childNodes), d = (v = n.props || M).dangerouslySetInnerHTML, _ = s.dangerouslySetInnerHTML, !p) {
      if (o != null)
        for (v = {}, c = 0; c < e.attributes.length; c++)
          v[e.attributes[c].name] = e.attributes[c].value;
      (_ || d) && (_ && (d && _.__html == d.__html || _.__html === e.innerHTML) || (e.innerHTML = _ && _.__html || ""));
    }
    if (ne(e, s, v, r, p), _)
      t.__k = [];
    else if (c = t.props.children, K(e, Array.isArray(c) ? c : [c], t, n, l, r && i !== "foreignObject", o, f, o ? o[0] : n.__k && w(n, 0), p), o != null)
      for (c = o.length; c--; )
        o[c] != null && q(o[c]);
    p || ("value" in s && (c = s.value) !== void 0 && (c !== e.value || i === "progress" && !c || i === "option" && c !== v.value) && L(e, "value", c, v.value, !1), "checked" in s && (c = s.checked) !== void 0 && c !== e.checked && L(e, "checked", c, v.checked, !1));
  }
  return e;
}
function Z(e, t, n) {
  try {
    typeof e == "function" ? e(t) : e.current = t;
  } catch (l) {
    h.__e(l, n);
  }
}
function ee(e, t, n) {
  var l, r;
  if (h.unmount && h.unmount(e), (l = e.ref) && (l.current && l.current !== e.__e || Z(l, null, t)), (l = e.__c) != null) {
    if (l.componentWillUnmount)
      try {
        l.componentWillUnmount();
      } catch (o) {
        h.__e(o, t);
      }
    l.base = l.__P = null, e.__c = void 0;
  }
  if (l = e.__k)
    for (r = 0; r < l.length; r++)
      l[r] && ee(l[r], t, typeof e.type != "function");
  n || e.__e == null || q(e.__e), e.__ = e.__e = e.__d = void 0;
}
function oe(e, t, n) {
  return this.constructor(e, n);
}
function le(e, t, n) {
  var l, r, o;
  h.__ && h.__(e, t), r = (l = typeof n == "function") ? null : n && n.__k || t.__k, o = [], F(t, e = (!l && n || t).__k = u(H, null, [e]), r || M, M, t.ownerSVGElement !== void 0, !l && n ? [n] : r ? null : t.firstChild ? U.call(t.childNodes) : null, o, !l && n ? n : r ? r.__e : t.firstChild, l), Y(o, e);
}
U = V.slice, h = { __e: function(e, t, n, l) {
  for (var r, o, f; t = t.__; )
    if ((r = t.__c) && !r.__)
      try {
        if ((o = r.constructor) && o.getDerivedStateFromError != null && (r.setState(o.getDerivedStateFromError(e)), f = r.__d), r.componentDidCatch != null && (r.componentDidCatch(e, l || {}), f = r.__d), f)
          return r.__E = r;
      } catch (p) {
        e = p;
      }
  throw e;
} }, z = 0, E.prototype.setState = function(e, t) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = b({}, this.state), typeof e == "function" && (e = e(b({}, n), this.props)), e && b(n, e), e != null && this.__v && (t && this.__h.push(t), $(this));
}, E.prototype.forceUpdate = function(e) {
  this.__v && (this.__e = !0, e && this.__h.push(e), $(this));
}, E.prototype.render = H, T = [], N.__r = 0;
function re() {
  const e = { padding: "4px 12px", color: "#fff" };
  return /* @__PURE__ */ u(W, null, /* @__PURE__ */ u(se, null, /* @__PURE__ */ u(ie, null, /* @__PURE__ */ u("nav", null, /* @__PURE__ */ u(j, null, /* @__PURE__ */ u("a", {
    style: e,
    href: "#"
  }, "Company Name"), /* @__PURE__ */ u(A, {
    color: "#aaa"
  }), /* @__PURE__ */ u("a", {
    style: e,
    href: "#"
  }, "Menu 1"), /* @__PURE__ */ u(A, {
    color: "#aaa"
  }), /* @__PURE__ */ u("a", {
    style: e,
    href: "#"
  }, "Menu 2"), /* @__PURE__ */ u(W, null), /* @__PURE__ */ u("a", {
    style: e,
    href: "#"
  }, "This link is on the right")))), /* @__PURE__ */ u(A, {
    color: "#0ff",
    weight: "3px"
  }), /* @__PURE__ */ u(W, null, /* @__PURE__ */ u(j, null, /* @__PURE__ */ u("div", {
    style: { background: "aliceblue", padding: 16 }
  }, /* @__PURE__ */ u("h1", null, "Sidebar")), /* @__PURE__ */ u(A, null), /* @__PURE__ */ u("div", {
    style: { background: "white", padding: 16, flexGrow: 1 }
  }, /* @__PURE__ */ u("h1", null, "Text"), /* @__PURE__ */ u("h1", null, "Text"), /* @__PURE__ */ u("h1", null, "Text"), /* @__PURE__ */ u("h1", null, "Text"), /* @__PURE__ */ u("h1", null, "Text"), /* @__PURE__ */ u("h1", null, "Text")))), /* @__PURE__ */ u("div", {
    style: { background: "#444", color: "#fff", padding: 8 }
  }, "This is the footer")));
}
function ie(e) {
  return /* @__PURE__ */ u("div", {
    style: { background: "#46f", color: "white", padding: 8 }
  }, e.children);
}
function A(e) {
  var t, n, l;
  return /* @__PURE__ */ u("div", {
    style: {
      minWidth: (t = e.weight) != null ? t : 1,
      minHeight: (n = e.weight) != null ? n : 1,
      background: (l = e.color) != null ? l : "#000"
    }
  });
}
function W(e) {
  return /* @__PURE__ */ u("div", {
    class: "snug-spring"
  }, e.children);
}
function se(e) {
  return /* @__PURE__ */ u("div", {
    class: "snug-stack"
  }, e.children);
}
function j(e) {
  return /* @__PURE__ */ u("div", {
    class: "snug-shelf"
  }, e.children);
}
le(/* @__PURE__ */ u(re, null), document.body);
