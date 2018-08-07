!(function(e) {
  var t = {};
  function r(n) {
    if (t[n]) return t[n].exports;
    var o = (t[n] = { i: n, l: !1, exports: {} });
    return e[n].call(o.exports, o, o.exports, r), (o.l = !0), o.exports;
  }
  (r.m = e),
    (r.c = t),
    (r.d = function(e, t, n) {
      r.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: n });
    }),
    (r.r = function(e) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (r.t = function(e, t) {
      if ((1 & t && (e = r(e)), 8 & t)) return e;
      if (4 & t && "object" == typeof e && e && e.__esModule) return e;
      var n = Object.create(null);
      if (
        (r.r(n),
        Object.defineProperty(n, "default", { enumerable: !0, value: e }),
        2 & t && "string" != typeof e)
      )
        for (var o in e)
          r.d(
            n,
            o,
            function(t) {
              return e[t];
            }.bind(null, o)
          );
      return n;
    }),
    (r.n = function(e) {
      var t =
        e && e.__esModule
          ? function() {
              return e.default;
            }
          : function() {
              return e;
            };
      return r.d(t, "a", t), t;
    }),
    (r.o = function(e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (r.p = ""),
    r((r.s = 6));
})([
  function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var n =
      "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
        ? function(e) {
            return typeof e;
          }
        : function(e) {
            return e &&
              "function" == typeof Symbol &&
              e.constructor === Symbol &&
              e !== Symbol.prototype
              ? "symbol"
              : typeof e;
          };
    (t.errorPost = function(e, t) {
      var r = new XMLHttpRequest();
      r.open("POST", e, !0),
        r.setRequestHeader("Content-Type", "text/plain"),
        r.send(t);
    }),
      (t.stringfy = function(e) {
        if (e && "object" === (void 0 === e ? "undefined" : n(e))) {
          var t = encodeURIComponent;
          return Object.keys(e)
            .map(function(r) {
              return r + "=" + t(e[r]);
            })
            .join("&");
        }
      }),
      (t.extend = function(e) {
        var t = arguments;
        if (t.length >= 2)
          for (var r = 1, n = t.length; r < n; r++)
            for (var o in t[r]) e[o] = t[r][o];
        return e;
      }),
      (t.typeofObj = function(e, t) {
        return (
          Object.prototype.toString.call(e) ===
          "[object " + (t || "Object") + "]"
        );
      }),
      (t.removeBlank = function(e) {
        return e.replace(/\s/g, "");
      }),
      (t.compressString = function(e, t) {
        if (!e || !t) return "null";
        for (var r = 0, n = 0, o = 0; o < e.length; o++) r += e[o].charCodeAt();
        for (var i = 0; i < t.length; i++) n += t[i].charCodeAt();
        var a =
          r +
          "" +
          t[t.length - 1].charCodeAt() +
          n +
          e[e.length - 1].charCodeAt();
        return a && (a += "ABCDEFGHJKMNPQRSTWXYZ"[a[a.length - 1]]), a;
      }),
      (t.randomString = function(e) {
        e = e || 32;
        for (
          var t = "ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678",
            r = t.length,
            n = "",
            o = 0;
          o < e;
          o++
        )
          n += t.charAt(Math.floor(Math.random() * r));
        return n;
      }),
      (t.findPath = function(e) {
        var t = void 0;
        for (t = []; e && e.nodeType == Node.ELEMENT_NODE; e = e.parentNode) {
          var r = void 0,
            n = 0,
            o = !1;
          for (r = e.previousSibling; r; r = r.previousSibling)
            r.nodeType != Node.DOCUMENT_TYPE_NODE &&
              r.nodeName == e.nodeName &&
              ++n;
          for (r = e.nextSibling; r && !o; r = r.nextSibling)
            r.nodeName == e.nodeName && (o = !0);
          var i = (e.prefix ? e.prefix + ":" : "") + e.localName,
            a = n || o ? "[" + (n + 1) + "]" : "";
          t.splice(0, 0, i + a);
        }
        return t.length ? "/" + t.join("/") : null;
      }),
      (t.findSelector = function(e) {
        var t = void 0;
        for (t = []; e.parentNode; ) {
          if (e.id) {
            t.unshift("#" + e.id);
            break;
          }
          if (e == e.ownerDocument.documentElement) t.unshift(e.tagName);
          else {
            for (
              var r = 1, n = e;
              n.previousElementSibling;
              n = n.previousElementSibling, r++
            );
            t.unshift(e.tagName + ":nth-child(" + r + ")");
          }
          e = e.parentNode;
        }
        return t.join(" > ");
      });
  },
  function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var n = r(0),
      o = [/KgWebSupperCall/i];
    t.default = function(e, t) {
      var r;
      if (!e.file || !e.file.match(/^(http|https):\/\/yun./)) return !0;
      if (
        ((r = t.ignore).push.apply(r, o), (0, n.typeofObj)(t.ignore, "Array"))
      )
        for (var i = 0, a = t.ignore.length; i < a; i++) {
          var u = t.ignore[i];
          if (
            ((0, n.typeofObj)(u, "RegExp") && u.test(e.msg)) ||
            ((0, n.typeofObj)(u, "Function") && u(e))
          )
            return !0;
        }
      return !1;
    };
  },
  function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var n = r(0),
      o = (function() {
        var e,
          t,
          r = navigator.userAgent,
          o = "",
          i = "",
          a = "Unknown",
          u = r.match(/(ipod).*\s([\d_]+)/i),
          l = r.match(/(ipad).*\s([\d_]+)/i),
          c = r.match(/(iphone)\sos\s([\d_]+)/i),
          s = r.match(
            /(Android\s\S*)(\szh-cn;|\szh-CN;)?\s?((\S*)\s(\S*\s\S*)|(\w*)-(\w*)|(\S*)\s(\S*))\sBuild/i
          ),
          f = void 0,
          d = (f = r.match(/(MSIE [\d.]+)/))
            ? f[1]
            : (f = r.match(/(Firefox\/[\d.]+)/))
              ? f[1]
              : (f = r.match(/(Chrome\/[\d.]+)/))
                ? f[1]
                : (f = r.match(/(Opera.[\d.]+)/))
                  ? f[1]
                  : (f = r.match(/(Version\/[\d.]+).*Safari/))
                    ? f[1]
                    : "Unknown";
        a =
          s && s.length > 2
            ? s[1].replace(";", "") + "," + s[3]
            : c
              ? "iPhone,iOS " + c[2].replace(/_/g, ".")
              : l
                ? "iPad,iOS " + l[2].replace(/_/g, ".")
                : u
                  ? "iPod,iOS " + u[2].replace(/_/g, ".")
                  : "browser," + d;
        var p = (a = (0, n.removeBlank)(a)).split(",");
        (e = p[0]), (t = p[1]), (a = "Unknown");
        var g = (a =
          "https:" == location.protocol
            ? "HTTPS"
            : "http:" == location.protocol
              ? "HTTP"
              : location.protocol.replace(":", ""));
        return (
          (a = "Unknown"),
          (i = r.toLowerCase().match(/ nettype\/([^ ]+)/g)) && i[0]
            ? (i = g += ", " + (a = (i = i[0].split("/"))[1]))
            : (o = g),
          {
            system: e,
            mobile: t,
            ua: r,
            protocol: o,
            network: i,
            time: new Date().toISOString()
          }
        );
      })();
    t.default = o;
  },
  function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var n = /^(warn|warning)/i;
    t.default = function(e, t) {
      return !(0 !== t || !n.exec(e));
    };
  },
  function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.has = l),
      (t.getItem = c),
      (t.setItem = function(e, t) {
        if ((e || (e = "unknow"), Object.keys(a).length >= t && f(), l(e))) {
          var r = c(e);
          if (r >= t) return !0;
          a[e] = { value: r + 1, time: Date.now() };
        } else a[e] = { value: 1, time: Date.now() };
        return u(), !1;
      }),
      (t.removeItem = s),
      (t.clear = f);
    var n = "FE_TIMING",
      o = window.localStorage,
      i = 144e4,
      a = void 0;
    function u() {
      try {
        a
          ? o.setItem(n, JSON.stringify(a))
          : (a = JSON.parse(o.getItem(n) || "{}"));
      } catch (e) {
        console.log(e);
      }
    }
    function l(e) {
      return Object.hasOwnProperty.call(a, e);
    }
    function c(e) {
      if (!l(e)) return !1;
      var t = a[e] || {},
        r = t.value;
      return t.time, r;
    }
    function s(e) {
      l(e) && (delete a[e], u());
    }
    function f() {
      var e = !1,
        t = null,
        r = Number.MAX_SAFE_INTEGER;
      for (var n in a) {
        var o = a[n] || {},
          u = o.value,
          l = o.time;
        new Date() - l > i && (s(n), (e = !0)), +l < r && ((r = u), (t = n));
      }
      e || s(t);
    }
    u();
  },
  function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var n = r(0),
      o = r(4),
      i = l(r(3)),
      a = l(r(2)),
      u = l(r(1));
    function l(e) {
      return e && e.__esModule ? e : { default: e };
    }
    var c = {};
    function s(e) {
      if (c.client && c.imgUrl && c.pageId) {
        var t = {};
        if (e.target != window) {
          var r = e,
            l = (e = e.target ? e.target : e.srcElement) && e.outerHTML;
          if (
            (l && l.length > 200 && (l = l.slice(0, 200)),
            (t = {
              target: "resourceError",
              type: r.type || "unknown",
              file: e.currentSrc || e.src,
              page: location.href,
              outerHTML: l,
              tagName: e && e.tagName,
              id: e.id || "null",
              className: e.className || "null",
              path: (0, n.findPath)(e),
              selector: (0, n.findSelector)(e),
              errorKey: (0, n.compressString)(l, (0, n.findPath)(e)),
              eventTaskList: window.eventTaskList
            }),
            "img" === String(e.tagName).toLowerCase())
          )
            return;
          if (!c.isResource) return;
        } else {
          var s = e.message.match(/Uncaught\s(\S*):/i);
          if (
            ((t = {
              target: "scriptError",
              msg: e.message,
              file: e.filename,
              line: e.lineno,
              col: e.colno,
              errorStack: e.stack || (e.error ? e.error.stack : void 0),
              page: location.href,
              type: s && s[1],
              errorKey: (0, n.compressString)(
                String(e.message),
                String(e.colno) + String(e.lineno)
              ),
              eventTaskList: window.eventTaskList
            }),
            (0, u.default)(t, c) ||
              (0, i.default)(t.msg, c.level) ||
              (0, o.setItem)(t.errorKey, c.repeat))
          )
            return;
        }
        var f = (0, n.extend)(
          {
            client: c.client,
            version: c.version,
            key: +new Date() + "@" + (0, n.randomString)(8),
            pageId: c.pageId
          },
          t,
          a.default
        );
        new Image().src = "" + c.imgUrl + (0, n.stringfy)(f);
      }
    }
    t.default = function(e) {
      c = e;
      var t = window._error_storage_;
      t.length > 0 &&
        t.map(function(e, r) {
          return s(t[r][0]);
        }),
        window.addEventListener && window.addEventListener("error", s, !0);
    };
  },
  function(e, t, r) {
    "use strict";
    var n = (function(e) {
        return e && e.__esModule ? e : { default: e };
      })(r(5)),
      o = r(0),
      i = {
        client: "",
        pageId: "",
        imgUrl: "",
        level: "0",
        repeat: "5",
        version: "1.0.1",
        isResource: !1,
        ignore: []
      };
    (i = (0, o.extend)(i, window.ERROR_CONFIG)),
      (i = (0, o.extend)(i, { version: "1.0.1" })),
      (0, n.default)(i);
  }
]);
