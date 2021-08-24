/*! For license information please see 3.95f1edd8.chunk.js.LICENSE.txt */
(this["images-to-pdfconverter-by-techno-sahil"] = this["images-to-pdfconverter-by-techno-sahil"] || []).push([
            [3],
            [function(t, e, n) {
                    "use strict";
                    t.exports = n(15)
                }, function(t, e, n) {
                    "use strict";
                    t.exports = n(16)
                }, function(t, e, n) {
                    "use strict";

                    function r(t, e) {
                        return (r = Object.setPrototypeOf || function(t, e) {
                            return t.__proto__ = e, t
                        })(t, e)
                    }
                    n.d(e, "a", (function() {
                        return r
                    }))
                }, function(t, e, n) {
                    "use strict";

                    function r(t) {
                        return (r = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
                            return t.__proto__ || Object.getPrototypeOf(t)
                        })(t)
                    }
                    n.d(e, "a", (function() {
                        return r
                    }))
                }, function(t, e, n) {
                    "use strict";

                    function r() {
                        if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
                        if (Reflect.construct.sham) return !1;
                        if ("function" === typeof Proxy) return !0;
                        try {
                            return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
                        } catch (t) {
                            return !1
                        }
                    }
                    n.d(e, "a", (function() {
                        return r
                    }))
                }, function(t, e, n) {
                    "use strict";
                    var r = Object.getOwnPropertySymbols,
                        i = Object.prototype.hasOwnProperty,
                        a = Object.prototype.propertyIsEnumerable;

                    function o(t) {
                        if (null === t || void 0 === t) throw new TypeError("Object.assign cannot be called with null or undefined");
                        return Object(t)
                    }
                    t.exports = function() {
                        try {
                            if (!Object.assign) return !1;
                            var t = new String("abc");
                            if (t[5] = "de", "5" === Object.getOwnPropertyNames(t)[0]) return !1;
                            for (var e = {}, n = 0; n < 10; n++) e["_" + String.fromCharCode(n)] = n;
                            if ("0123456789" !== Object.getOwnPropertyNames(e).map((function(t) {
                                    return e[t]
                                })).join("")) return !1;
                            var r = {};
                            return "abcdefghijklmnopqrst".split("").forEach((function(t) {
                                r[t] = t
                            })), "abcdefghijklmnopqrst" === Object.keys(Object.assign({}, r)).join("")
                        } catch (i) {
                            return !1
                        }
                    }() ? Object.assign : function(t, e) {
                        for (var n, s, l = o(t), u = 1; u < arguments.length; u++) {
                            for (var c in n = Object(arguments[u])) i.call(n, c) && (l[c] = n[c]);
                            if (r) {
                                s = r(n);
                                for (var f = 0; f < s.length; f++) a.call(n, s[f]) && (l[s[f]] = n[s[f]])
                            }
                        }
                        return l
                    }
                }, function(t, e, n) {
                    "use strict";
                    ! function t() {
                        if ("undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE) try {
                            __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t)
                        } catch (e) {
                            console.error(e)
                        }
                    }(), t.exports = n(17)
                }, function(t, e, n) {
                    "use strict";
                    (function(t) {
                            var r = function() {
                                return "undefined" != typeof window ? window : "undefined" != typeof t ? t : "undefined" != typeof self ? self : this
                            }();

                            function i() {
                                r.console && "function" == typeof r.console.log && r.console.log.apply(r.console, arguments)
                            }
                            var a = {
                                log: i,
                                warn: function(t) {
                                    r.console && ("function" == typeof r.console.warn ? r.console.warn.apply(r.console, arguments) : i.call(null, arguments))
                                },
                                error: function(t) {
                                    r.console && ("function" == typeof r.console.error ? r.console.error.apply(r.console, arguments) : i(t))
                                }
                            };

                            function o(t, e, n) {
                                var r = new XMLHttpRequest;
                                r.open("GET", t), r.responseType = "blob", r.onload = function() {
                                    f(r.response, e, n)
                                }, r.onerror = function() {
                                    a.error("could not download file")
                                }, r.send()
                            }

                            function s(t) {
                                var e = new XMLHttpRequest;
                                e.open("HEAD", t, !1);
                                try {
                                    e.send()
                                } catch (t) {}
                                return e.status >= 200 && e.status <= 299
                            }

                            function l(t) {
                                try {
                                    t.dispatchEvent(new MouseEvent("click"))
                                } catch (a) {
                                    var e = document.createEvent("MouseEvents");
                                    e.initMouseEvent("click", !0, !0, window, 0, 0, 0, 80, 20, !1, !1, !1, !1, 0, null), t.dispatchEvent(e)
                                }
                            }
                            var u, c, f = r.saveAs || ("object" != typeof window || window !== r ? function() {} : "download" in HTMLAnchorElement.prototype ? function(t, e, n) {
                                var i = r.URL || r.webkitURL,
                                    a = document.createElement("a");
                                e = e || t.name || "download", a.download = e, a.rel = "noopener", "string" == typeof t ? (a.href = t, a.origin !== location.origin ? s(a.href) ? o(t, e, n) : l(a, a.target = "_blank") : l(a)) : (a.href = i.createObjectURL(t), setTimeout((function() {
                                    i.revokeObjectURL(a.href)
                                }), 4e4), setTimeout((function() {
                                    l(a)
                                }), 0))
                            } : "msSaveOrOpenBlob" in navigator ? function(t, e, n) {
                                if (e = e || t.name || "download", "string" == typeof t)
                                    if (s(t)) o(t, e, n);
                                    else {
                                        var r = document.createElement("a");
                                        r.href = t, r.target = "_blank", setTimeout((function() {
                                            l(r)
                                        }))
                                    }
                                else navigator.msSaveOrOpenBlob(function(t, e) {
                                    return void 0 === e ? e = {
                                        autoBom: !1
                                    } : "object" != typeof e && (a.warn("Deprecated: Expected third argument to be a object"), e = {
                                        autoBom: !e
                                    }), e.autoBom && /^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(t.type) ? new Blob([String.fromCharCode(65279), t], {
                                        type: t.type
                                    }) : t
                                }(t, n), e)
                            } : function(t, e, n, i) {
                                if ((i = i || open("", "_blank")) && (i.document.title = i.document.body.innerText = "downloading..."), "string" == typeof t) return o(t, e, n);
                                var a = "application/octet-stream" === t.type,
                                    s = /constructor/i.test(r.HTMLElement) || r.safari,
                                    l = /CriOS\/[\d]+/.test(navigator.userAgent);
                                if ((l || a && s) && "object" == typeof FileReader) {
                                    var u = new FileReader;
                                    u.onloadend = function() {
                                        var t = u.result;
                                        t = l ? t : t.replace(/^data:[^;]*;/, "data:attachment/file;"), i ? i.location.href = t : location = t, i = null
                                    }, u.readAsDataURL(t)
                                } else {
                                    var c = r.URL || r.webkitURL,
                                        f = c.createObjectURL(t);
                                    i ? i.location = f : location.href = f, i = null, setTimeout((function() {
                                        c.revokeObjectURL(f)
                                    }), 4e4)
                                }
                            });

                            function h(t) {
                                var e;
                                t = t || "", this.ok = !1, "#" == t.charAt(0) && (t = t.substr(1, 6)), t = {
                                    aliceblue: "f0f8ff",
                                    antiquewhite: "faebd7",
                                    aqua: "00ffff",
                                    aquamarine: "7fffd4",
                                    azure: "f0ffff",
                                    beige: "f5f5dc",
                                    bisque: "ffe4c4",
                                    black: "000000",
                                    blanchedalmond: "ffebcd",
                                    blue: "0000ff",
                                    blueviolet: "8a2be2",
                                    brown: "a52a2a",
                                    burlywood: "deb887",
                                    cadetblue: "5f9ea0",
                                    chartreuse: "7fff00",
                                    chocolate: "d2691e",
                                    coral: "ff7f50",
                                    cornflowerblue: "6495ed",
                                    cornsilk: "fff8dc",
                                    crimson: "dc143c",
                                    cyan: "00ffff",
                                    darkblue: "00008b",
                                    darkcyan: "008b8b",
                                    darkgoldenrod: "b8860b",
                                    darkgray: "a9a9a9",
                                    darkgreen: "006400",
                                    darkkhaki: "bdb76b",
                                    darkmagenta: "8b008b",
                                    darkolivegreen: "556b2f",
                                    darkorange: "ff8c00",
                                    darkorchid: "9932cc",
                                    darkred: "8b0000",
                                    darksalmon: "e9967a",
                                    darkseagreen: "8fbc8f",
                                    darkslateblue: "483d8b",
                                    darkslategray: "2f4f4f",
                                    darkturquoise: "00ced1",
                                    darkviolet: "9400d3",
                                    deeppink: "ff1493",
                                    deepskyblue: "00bfff",
                                    dimgray: "696969",
                                    dodgerblue: "1e90ff",
                                    feldspar: "d19275",
                                    firebrick: "b22222",
                                    floralwhite: "fffaf0",
                                    forestgreen: "228b22",
                                    fuchsia: "ff00ff",
                                    gainsboro: "dcdcdc",
                                    ghostwhite: "f8f8ff",
                                    gold: "ffd700",
                                    goldenrod: "daa520",
                                    gray: "808080",
                                    green: "008000",
                                    greenyellow: "adff2f",
                                    honeydew: "f0fff0",
                                    hotpink: "ff69b4",
                                    indianred: "cd5c5c",
                                    indigo: "4b0082",
                                    ivory: "fffff0",
                                    khaki: "f0e68c",
                                    lavender: "e6e6fa",
                                    lavenderblush: "fff0f5",
                                    lawngreen: "7cfc00",
                                    lemonchiffon: "fffacd",
                                    lightblue: "add8e6",
                                    lightcoral: "f08080",
                                    lightcyan: "e0ffff",
                                    lightgoldenrodyellow: "fafad2",
                                    lightgrey: "d3d3d3",
                                    lightgreen: "90ee90",
                                    lightpink: "ffb6c1",
                                    lightsalmon: "ffa07a",
                                    lightseagreen: "20b2aa",
                                    lightskyblue: "87cefa",
                                    lightslateblue: "8470ff",
                                    lightslategray: "778899",
                                    lightsteelblue: "b0c4de",
                                    lightyellow: "ffffe0",
                                    lime: "00ff00",
                                    limegreen: "32cd32",
                                    linen: "faf0e6",
                                    magenta: "ff00ff",
                                    maroon: "800000",
                                    mediumaquamarine: "66cdaa",
                                    mediumblue: "0000cd",
                                    mediumorchid: "ba55d3",
                                    mediumpurple: "9370d8",
                                    mediumseagreen: "3cb371",
                                    mediumslateblue: "7b68ee",
                                    mediumspringgreen: "00fa9a",
                                    mediumturquoise: "48d1cc",
                                    mediumvioletred: "c71585",
                                    midnightblue: "191970",
                                    mintcream: "f5fffa",
                                    mistyrose: "ffe4e1",
                                    moccasin: "ffe4b5",
                                    navajowhite: "ffdead",
                                    navy: "000080",
                                    oldlace: "fdf5e6",
                                    olive: "808000",
                                    olivedrab: "6b8e23",
                                    orange: "ffa500",
                                    orangered: "ff4500",
                                    orchid: "da70d6",
                                    palegoldenrod: "eee8aa",
                                    palegreen: "98fb98",
                                    paleturquoise: "afeeee",
                                    palevioletred: "d87093",
                                    papayawhip: "ffefd5",
                                    peachpuff: "ffdab9",
                                    peru: "cd853f",
                                    pink: "ffc0cb",
                                    plum: "dda0dd",
                                    powderblue: "b0e0e6",
                                    purple: "800080",
                                    red: "ff0000",
                                    rosybrown: "bc8f8f",
                                    royalblue: "4169e1",
                                    saddlebrown: "8b4513",
                                    salmon: "fa8072",
                                    sandybrown: "f4a460",
                                    seagreen: "2e8b57",
                                    seashell: "fff5ee",
                                    sienna: "a0522d",
                                    silver: "c0c0c0",
                                    skyblue: "87ceeb",
                                    slateblue: "6a5acd",
                                    slategray: "708090",
                                    snow: "fffafa",
                                    springgreen: "00ff7f",
                                    steelblue: "4682b4",
                                    tan: "d2b48c",
                                    teal: "008080",
                                    thistle: "d8bfd8",
                                    tomato: "ff6347",
                                    turquoise: "40e0d0",
                                    violet: "ee82ee",
                                    violetred: "d02090",
                                    wheat: "f5deb3",
                                    white: "ffffff",
                                    whitesmoke: "f5f5f5",
                                    yellow: "ffff00",
                                    yellowgreen: "9acd32"
                                } [t = (t = t.replace(/ /g, "")).toLowerCase()] || t;
                                for (var n = [{
                                        re: /^rgb\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3})\)$/,
                                        example: ["rgb(123, 234, 45)", "rgb(255,234,245)"],
                                        process: function(t) {
                                            return [parseInt(t[1]), parseInt(t[2]), parseInt(t[3])]
                                        }
                                    }, {
                                        re: /^(\w{2})(\w{2})(\w{2})$/,
                                        example: ["#00ff00", "336699"],
                                        process: function(t) {
                                            return [parseInt(t[1], 16), parseInt(t[2], 16), parseInt(t[3], 16)]
                                        }
                                    }, {
                                        re: /^(\w{1})(\w{1})(\w{1})$/,
                                        example: ["#fb0", "f0f"],
                                        process: function(t) {
                                            return [parseInt(t[1] + t[1], 16), parseInt(t[2] + t[2], 16), parseInt(t[3] + t[3], 16)]
                                        }
                                    }], r = 0; r < n.length; r++) {
                                    var i = n[r].re,
                                        a = n[r].process,
                                        o = i.exec(t);
                                    o && (e = a(o), this.r = e[0], this.g = e[1], this.b = e[2], this.ok = !0)
                                }
                                this.r = this.r < 0 || isNaN(this.r) ? 0 : this.r > 255 ? 255 : this.r, this.g = this.g < 0 || isNaN(this.g) ? 0 : this.g > 255 ? 255 : this.g, this.b = this.b < 0 || isNaN(this.b) ? 0 : this.b > 255 ? 255 : this.b, this.toRGB = function() {
                                    return "rgb(" + this.r + ", " + this.g + ", " + this.b + ")"
                                }, this.toHex = function() {
                                    var t = this.r.toString(16),
                                        e = this.g.toString(16),
                                        n = this.b.toString(16);
                                    return 1 == t.length && (t = "0" + t), 1 == e.length && (e = "0" + e), 1 == n.length && (n = "0" + n), "#" + t + e + n
                                }
                            }

                            function d(t) {
                                if ("object" != typeof t) throw new Error("Invalid Context passed to initialize PubSub (jsPDF-module)");
                                var e = {};
                                this.subscribe = function(t, n, r) {
                                    if (r = r || !1, "string" != typeof t || "function" != typeof n || "boolean" != typeof r) throw new Error("Invalid arguments passed to PubSub.subscribe (jsPDF-module)");
                                    e.hasOwnProperty(t) || (e[t] = {});
                                    var i = Math.random().toString(35);
                                    return e[t][i] = [n, !!r], i
                                }, this.unsubscribe = function(t) {
                                    for (var n in e)
                                        if (e[n][t]) return delete e[n][t], 0 === Object.keys(e[n]).length && delete e[n], !0;
                                    return !1
                                }, this.publish = function(n) {
                                    if (e.hasOwnProperty(n)) {
                                        var i = Array.prototype.slice.call(arguments, 1),
                                            o = [];
                                        for (var s in e[n]) {
                                            var l = e[n][s];
                                            try {
                                                l[0].apply(t, i)
                                            } catch (t) {
                                                r.console && a.error("jsPDF PubSub Error", t.message, t)
                                            }
                                            l[1] && o.push(s)
                                        }
                                        o.length && o.forEach(this.unsubscribe)
                                    }
                                }, this.getTopics = function() {
                                    return e
                                }
                            }

                            function p(t) {
                                if (!(this instanceof p)) return new p(t);
                                var e = "opacity,stroke-opacity".split(",");
                                for (var n in t) t.hasOwnProperty(n) && e.indexOf(n) >= 0 && (this[n] = t[n]);
                                this.id = "", this.objectNumber = -1
                            }

                            function g(t, e) {
                                this.gState = t, this.matrix = e, this.id = "", this.objectNumber = -1
                            }

                            function m(t, e, n, r, i) {
                                if (!(this instanceof m)) return new m(t, e, n, r, i);
                                this.type = "axial" === t ? 2 : 3, this.coords = e, this.colors = n, g.call(this, r, i)
                            }

                            function v(t, e, n, r, i) {
                                if (!(this instanceof v)) return new v(t, e, n, r, i);
                                this.boundingBox = t, this.xStep = e, this.yStep = n, this.stream = "", this.cloneIndex = 0, g.call(this, r, i)
                            }

                            function b(t) {
                                var e, n = "string" == typeof arguments[0] ? arguments[0] : "p",
                                    i = arguments[1],
                                    o = arguments[2],
                                    s = arguments[3],
                                    l = [],
                                    u = 1,
                                    g = 16,
                                    y = "S";
                                "object" == typeof(t = t || {}) && (n = t.orientation, i = t.unit || i, o = t.format || o, s = t.compress || t.compressPdf || s, u = "number" == typeof t.userUnit ? Math.abs(t.userUnit) : 1, void 0 !== t.precision && (e = t.precision), void 0 !== t.floatPrecision && (g = t.floatPrecision), y = t.defaultPathOperation || "S"), l = t.filters || (!0 === s ? ["FlateEncode"] : l), i = i || "mm", n = ("" + (n || "P")).toLowerCase();
                                var w = t.putOnlyUsedFonts || !1,
                                    x = {},
                                    _ = {
                                        internal: {},
                                        __private__: {}
                                    };
                                _.__private__.PubSub = d;
                                var N = "1.3",
                                    L = _.__private__.getPdfVersion = function() {
                                        return N
                                    };
                                _.__private__.setPdfVersion = function(t) {
                                    N = t
                                };
                                var S = {
                                    a0: [2383.94, 3370.39],
                                    a1: [1683.78, 2383.94],
                                    a2: [1190.55, 1683.78],
                                    a3: [841.89, 1190.55],
                                    a4: [595.28, 841.89],
                                    a5: [419.53, 595.28],
                                    a6: [297.64, 419.53],
                                    a7: [209.76, 297.64],
                                    a8: [147.4, 209.76],
                                    a9: [104.88, 147.4],
                                    a10: [73.7, 104.88],
                                    b0: [2834.65, 4008.19],
                                    b1: [2004.09, 2834.65],
                                    b2: [1417.32, 2004.09],
                                    b3: [1000.63, 1417.32],
                                    b4: [708.66, 1000.63],
                                    b5: [498.9, 708.66],
                                    b6: [354.33, 498.9],
                                    b7: [249.45, 354.33],
                                    b8: [175.75, 249.45],
                                    b9: [124.72, 175.75],
                                    b10: [87.87, 124.72],
                                    c0: [2599.37, 3676.54],
                                    c1: [1836.85, 2599.37],
                                    c2: [1298.27, 1836.85],
                                    c3: [918.43, 1298.27],
                                    c4: [649.13, 918.43],
                                    c5: [459.21, 649.13],
                                    c6: [323.15, 459.21],
                                    c7: [229.61, 323.15],
                                    c8: [161.57, 229.61],
                                    c9: [113.39, 161.57],
                                    c10: [79.37, 113.39],
                                    dl: [311.81, 623.62],
                                    letter: [612, 792],
                                    "government-letter": [576, 756],
                                    legal: [612, 1008],
                                    "junior-legal": [576, 360],
                                    ledger: [1224, 792],
                                    tabloid: [792, 1224],
                                    "credit-card": [153, 243]
                                };
                                _.__private__.getPageFormats = function() {
                                    return S
                                };
                                var A = _.__private__.getPageFormat = function(t) {
                                    return S[t]
                                };
                                o = o || "a4";
                                var k = {
                                        COMPAT: "compat",
                                        ADVANCED: "advanced"
                                    },
                                    P = k.COMPAT;

                                function C() {
                                    this.saveGraphicsState(), ot(new qt(xt, 0, 0, -xt, 0, Fn() * xt).toString() + " cm"), this.setFontSize(this.getFontSize() / xt), y = "n", P = k.ADVANCED
                                }

                                function E() {
                                    this.restoreGraphicsState(), y = "S", P = k.COMPAT
                                }
                                _.advancedAPI = function(t) {
                                    var e = P === k.COMPAT;
                                    return e && C.call(this), "function" != typeof t || (t(this), e && E.call(this)), this
                                }, _.compatAPI = function(t) {
                                    var e = P === k.ADVANCED;
                                    return e && E.call(this), "function" != typeof t || (t(this), e && C.call(this)), this
                                }, _.isAdvancedAPI = function() {
                                    return P === k.ADVANCED
                                };
                                var F, I = function(t) {
                                        if (P !== k.ADVANCED) throw new Error(t + " is only available in 'advanced' API mode. You need to call advancedAPI() first.")
                                    },
                                    O = _.roundToPrecision = _.__private__.roundToPrecision = function(t, n) {
                                        var r = e || n;
                                        if (isNaN(t) || isNaN(r)) throw new Error("Invalid argument passed to jsPDF.roundToPrecision");
                                        return t.toFixed(r).replace(/0+$/, "")
                                    };
                                F = _.hpf = _.__private__.hpf = "number" == typeof g ? function(t) {
                                    if (isNaN(t)) throw new Error("Invalid argument passed to jsPDF.hpf");
                                    return O(t, g)
                                } : "smart" === g ? function(t) {
                                    if (isNaN(t)) throw new Error("Invalid argument passed to jsPDF.hpf");
                                    return O(t, t > -1 && t < 1 ? 16 : 5)
                                } : function(t) {
                                    if (isNaN(t)) throw new Error("Invalid argument passed to jsPDF.hpf");
                                    return O(t, 16)
                                };
                                var j = _.f2 = _.__private__.f2 = function(t) {
                                        if (isNaN(t)) throw new Error("Invalid argument passed to jsPDF.f2");
                                        return O(t, 2)
                                    },
                                    M = _.__private__.f3 = function(t) {
                                        if (isNaN(t)) throw new Error("Invalid argument passed to jsPDF.f3");
                                        return O(t, 3)
                                    },
                                    T = _.scale = _.__private__.scale = function(t) {
                                        if (isNaN(t)) throw new Error("Invalid argument passed to jsPDF.scale");
                                        return P === k.COMPAT ? t * xt : P === k.ADVANCED ? t : void 0
                                    },
                                    B = function(t) {
                                        return P === k.COMPAT ? Fn() - t : P === k.ADVANCED ? t : void 0
                                    },
                                    R = function(t) {
                                        return T(B(t))
                                    };
                                _.__private__.setPrecision = _.setPrecision = function(t) {
                                    "number" == typeof parseInt(t, 10) && (e = parseInt(t, 10))
                                };
                                var D, q = "00000000000000000000000000000000",
                                    z = _.__private__.getFileId = function() {
                                        return q
                                    },
                                    U = _.__private__.setFileId = function(t) {
                                        return q = void 0 !== t && /^[a-fA-F0-9]{32}$/.test(t) ? t.toUpperCase() : q.split("").map((function() {
                                            return "ABCDEF0123456789".charAt(Math.floor(16 * Math.random()))
                                        })).join("")
                                    };
                                _.setFileId = function(t) {
                                    return U(t), this
                                }, _.getFileId = function() {
                                    return z()
                                };
                                var H = _.__private__.convertDateToPDFDate = function(t) {
                                        var e = t.getTimezoneOffset(),
                                            n = e < 0 ? "+" : "-",
                                            r = Math.floor(Math.abs(e / 60)),
                                            i = Math.abs(e % 60),
                                            a = [n, X(r), "'", X(i), "'"].join("");
                                        return ["D:", t.getFullYear(), X(t.getMonth() + 1), X(t.getDate()), X(t.getHours()), X(t.getMinutes()), X(t.getSeconds()), a].join("")
                                    },
                                    V = _.__private__.convertPDFDateToDate = function(t) {
                                        var e = parseInt(t.substr(2, 4), 10),
                                            n = parseInt(t.substr(6, 2), 10) - 1,
                                            r = parseInt(t.substr(8, 2), 10),
                                            i = parseInt(t.substr(10, 2), 10),
                                            a = parseInt(t.substr(12, 2), 10),
                                            o = parseInt(t.substr(14, 2), 10);
                                        return new Date(e, n, r, i, a, o, 0)
                                    },
                                    W = _.__private__.setCreationDate = function(t) {
                                        var e;
                                        if (void 0 === t && (t = new Date), t instanceof Date) e = H(t);
                                        else {
                                            if (!/^D:(20[0-2][0-9]|203[0-7]|19[7-9][0-9])(0[0-9]|1[0-2])([0-2][0-9]|3[0-1])(0[0-9]|1[0-9]|2[0-3])(0[0-9]|[1-5][0-9])(0[0-9]|[1-5][0-9])(\+0[0-9]|\+1[0-4]|-0[0-9]|-1[0-1])'(0[0-9]|[1-5][0-9])'?$/.test(t)) throw new Error("Invalid argument passed to jsPDF.setCreationDate");
                                            e = t
                                        }
                                        return D = e
                                    },
                                    G = _.__private__.getCreationDate = function(t) {
                                        var e = D;
                                        return "jsDate" === t && (e = V(D)), e
                                    };
                                _.setCreationDate = function(t) {
                                    return W(t), this
                                }, _.getCreationDate = function(t) {
                                    return G(t)
                                };
                                var Y, X = _.__private__.padd2 = function(t) {
                                        return ("0" + parseInt(t)).slice(-2)
                                    },
                                    K = _.__private__.padd2Hex = function(t) {
                                        return ("00" + (t = t.toString())).substr(t.length)
                                    },
                                    $ = 0,
                                    J = [],
                                    Q = [],
                                    Z = 0,
                                    tt = [],
                                    et = [],
                                    nt = !1,
                                    rt = Q,
                                    it = function() {
                                        $ = 0, Z = 0, Q = [], J = [], tt = [], Xt = Wt(), Kt = Wt()
                                    };
                                _.__private__.setCustomOutputDestination = function(t) {
                                    nt = !0, rt = t
                                };
                                var at = function(t) {
                                    nt || (rt = t)
                                };
                                _.__private__.resetCustomOutputDestination = function() {
                                    nt = !1, rt = Q
                                };
                                var ot = _.__private__.out = function(t) {
                                        return t = t.toString(), Z += t.length + 1, rt.push(t), rt
                                    },
                                    st = _.__private__.write = function(t) {
                                        return ot(1 === arguments.length ? t.toString() : Array.prototype.join.call(arguments, " "))
                                    },
                                    lt = _.__private__.getArrayBuffer = function(t) {
                                        for (var e = t.length, n = new ArrayBuffer(e), r = new Uint8Array(n); e--;) r[e] = t.charCodeAt(e);
                                        return n
                                    },
                                    ut = [
                                        ["Helvetica", "helvetica", "normal", "WinAnsiEncoding"],
                                        ["Helvetica-Bold", "helvetica", "bold", "WinAnsiEncoding"],
                                        ["Helvetica-Oblique", "helvetica", "italic", "WinAnsiEncoding"],
                                        ["Helvetica-BoldOblique", "helvetica", "bolditalic", "WinAnsiEncoding"],
                                        ["Courier", "courier", "normal", "WinAnsiEncoding"],
                                        ["Courier-Bold", "courier", "bold", "WinAnsiEncoding"],
                                        ["Courier-Oblique", "courier", "italic", "WinAnsiEncoding"],
                                        ["Courier-BoldOblique", "courier", "bolditalic", "WinAnsiEncoding"],
                                        ["Times-Roman", "times", "normal", "WinAnsiEncoding"],
                                        ["Times-Bold", "times", "bold", "WinAnsiEncoding"],
                                        ["Times-Italic", "times", "italic", "WinAnsiEncoding"],
                                        ["Times-BoldItalic", "times", "bolditalic", "WinAnsiEncoding"],
                                        ["ZapfDingbats", "zapfdingbats", "normal", null],
                                        ["Symbol", "symbol", "normal", null]
                                    ];
                                _.__private__.getStandardFonts = function() {
                                    return ut
                                };
                                var ct = t.fontSize || 16;
                                _.__private__.setFontSize = _.setFontSize = function(t) {
                                    return ct = P === k.ADVANCED ? t / xt : t, this
                                };
                                var ft, ht = _.__private__.getFontSize = _.getFontSize = function() {
                                        return P === k.COMPAT ? ct : ct * xt
                                    },
                                    dt = t.R2L || !1;
                                _.__private__.setR2L = _.setR2L = function(t) {
                                    return dt = t, this
                                }, _.__private__.getR2L = _.getR2L = function() {
                                    return dt
                                };
                                var pt, gt = _.__private__.setZoomMode = function(t) {
                                    if (/^\d*\.?\d*%$/.test(t)) ft = t;
                                    else if (isNaN(t)) {
                                        if (-1 === [void 0, null, "fullwidth", "fullheight", "fullpage", "original"].indexOf(t)) throw new Error('zoom must be Integer (e.g. 2), a percentage Value (e.g. 300%) or fullwidth, fullheight, fullpage, original. "' + t + '" is not recognized.');
                                        ft = t
                                    } else ft = parseInt(t, 10)
                                };
                                _.__private__.getZoomMode = function() {
                                    return ft
                                };
                                var mt, vt = _.__private__.setPageMode = function(t) {
                                    if (-1 == [void 0, null, "UseNone", "UseOutlines", "UseThumbs", "FullScreen"].indexOf(t)) throw new Error('Page mode must be one of UseNone, UseOutlines, UseThumbs, or FullScreen. "' + t + '" is not recognized.');
                                    pt = t
                                };
                                _.__private__.getPageMode = function() {
                                    return pt
                                };
                                var bt = _.__private__.setLayoutMode = function(t) {
                                    if (-1 == [void 0, null, "continuous", "single", "twoleft", "tworight", "two"].indexOf(t)) throw new Error('Layout mode must be one of continuous, single, twoleft, tworight. "' + t + '" is not recognized.');
                                    mt = t
                                };
                                _.__private__.getLayoutMode = function() {
                                    return mt
                                }, _.__private__.setDisplayMode = _.setDisplayMode = function(t, e, n) {
                                    return gt(t), bt(e), vt(n), this
                                };
                                var yt = {
                                    title: "",
                                    subject: "",
                                    author: "",
                                    keywords: "",
                                    creator: ""
                                };
                                _.__private__.getDocumentProperty = function(t) {
                                    if (-1 === Object.keys(yt).indexOf(t)) throw new Error("Invalid argument passed to jsPDF.getDocumentProperty");
                                    return yt[t]
                                }, _.__private__.getDocumentProperties = function() {
                                    return yt
                                }, _.__private__.setDocumentProperties = _.setProperties = _.setDocumentProperties = function(t) {
                                    for (var e in yt) yt.hasOwnProperty(e) && t[e] && (yt[e] = t[e]);
                                    return this
                                }, _.__private__.setDocumentProperty = function(t, e) {
                                    if (-1 === Object.keys(yt).indexOf(t)) throw new Error("Invalid arguments passed to jsPDF.setDocumentProperty");
                                    return yt[t] = e
                                };
                                var wt, xt, _t, Nt, Lt, St = {},
                                    At = {},
                                    kt = [],
                                    Pt = {},
                                    Ct = {},
                                    Et = {},
                                    Ft = {},
                                    It = null,
                                    Ot = 0,
                                    jt = [],
                                    Mt = new d(_),
                                    Tt = t.hotfixes || [],
                                    Bt = {},
                                    Rt = {},
                                    Dt = [],
                                    qt = function t(e, n, r, i, a, o) {
                                        if (!(this instanceof t)) return new t(e, n, r, i, a, o);
                                        isNaN(e) && (e = 1), isNaN(n) && (n = 0), isNaN(r) && (r = 0), isNaN(i) && (i = 1), isNaN(a) && (a = 0), isNaN(o) && (o = 0), this._matrix = [e, n, r, i, a, o]
                                    };
                                Object.defineProperty(qt.prototype, "sx", {
                                    get: function() {
                                        return this._matrix[0]
                                    },
                                    set: function(t) {
                                        this._matrix[0] = t
                                    }
                                }), Object.defineProperty(qt.prototype, "shy", {
                                    get: function() {
                                        return this._matrix[1]
                                    },
                                    set: function(t) {
                                        this._matrix[1] = t
                                    }
                                }), Object.defineProperty(qt.prototype, "shx", {
                                    get: function() {
                                        return this._matrix[2]
                                    },
                                    set: function(t) {
                                        this._matrix[2] = t
                                    }
                                }), Object.defineProperty(qt.prototype, "sy", {
                                    get: function() {
                                        return this._matrix[3]
                                    },
                                    set: function(t) {
                                        this._matrix[3] = t
                                    }
                                }), Object.defineProperty(qt.prototype, "tx", {
                                    get: function() {
                                        return this._matrix[4]
                                    },
                                    set: function(t) {
                                        this._matrix[4] = t
                                    }
                                }), Object.defineProperty(qt.prototype, "ty", {
                                    get: function() {
                                        return this._matrix[5]
                                    },
                                    set: function(t) {
                                        this._matrix[5] = t
                                    }
                                }), Object.defineProperty(qt.prototype, "a", {
                                    get: function() {
                                        return this._matrix[0]
                                    },
                                    set: function(t) {
                                        this._matrix[0] = t
                                    }
                                }), Object.defineProperty(qt.prototype, "b", {
                                    get: function() {
                                        return this._matrix[1]
                                    },
                                    set: function(t) {
                                        this._matrix[1] = t
                                    }
                                }), Object.defineProperty(qt.prototype, "c", {
                                    get: function() {
                                        return this._matrix[2]
                                    },
                                    set: function(t) {
                                        this._matrix[2] = t
                                    }
                                }), Object.defineProperty(qt.prototype, "d", {
                                    get: function() {
                                        return this._matrix[3]
                                    },
                                    set: function(t) {
                                        this._matrix[3] = t
                                    }
                                }), Object.defineProperty(qt.prototype, "e", {
                                    get: function() {
                                        return this._matrix[4]
                                    },
                                    set: function(t) {
                                        this._matrix[4] = t
                                    }
                                }), Object.defineProperty(qt.prototype, "f", {
                                    get: function() {
                                        return this._matrix[5]
                                    },
                                    set: function(t) {
                                        this._matrix[5] = t
                                    }
                                }), Object.defineProperty(qt.prototype, "rotation", {
                                    get: function() {
                                        return Math.atan2(this.shx, this.sx)
                                    }
                                }), Object.defineProperty(qt.prototype, "scaleX", {
                                    get: function() {
                                        return this.decompose().scale.sx
                                    }
                                }), Object.defineProperty(qt.prototype, "scaleY", {
                                    get: function() {
                                        return this.decompose().scale.sy
                                    }
                                }), Object.defineProperty(qt.prototype, "isIdentity", {
                                    get: function() {
                                        return 1 === this.sx && 0 === this.shy && 0 === this.shx && 1 === this.sy && 0 === this.tx && 0 === this.ty
                                    }
                                }), qt.prototype.join = function(t) {
                                    return [this.sx, this.shy, this.shx, this.sy, this.tx, this.ty].map(F).join(t)
                                }, qt.prototype.multiply = function(t) {
                                    var e = t.sx * this.sx + t.shy * this.shx,
                                        n = t.sx * this.shy + t.shy * this.sy,
                                        r = t.shx * this.sx + t.sy * this.shx,
                                        i = t.shx * this.shy + t.sy * this.sy,
                                        a = t.tx * this.sx + t.ty * this.shx + this.tx,
                                        o = t.tx * this.shy + t.ty * this.sy + this.ty;
                                    return new qt(e, n, r, i, a, o)
                                }, qt.prototype.decompose = function() {
                                    var t = this.sx,
                                        e = this.shy,
                                        n = this.shx,
                                        r = this.sy,
                                        i = this.tx,
                                        a = this.ty,
                                        o = Math.sqrt(t * t + e * e),
                                        s = (t /= o) * n + (e /= o) * r;
                                    n -= t * s, r -= e * s;
                                    var l = Math.sqrt(n * n + r * r);
                                    return s /= l, t * (r /= l) < e * (n /= l) && (t = -t, e = -e, s = -s, o = -o), {
                                        scale: new qt(o, 0, 0, l, 0, 0),
                                        translate: new qt(1, 0, 0, 1, i, a),
                                        rotate: new qt(t, e, -e, t, 0, 0),
                                        skew: new qt(1, 0, s, 1, 0, 0)
                                    }
                                }, qt.prototype.toString = function(t) {
                                    return this.join(" ")
                                }, qt.prototype.inversed = function() {
                                    var t = this.sx,
                                        e = this.shy,
                                        n = this.shx,
                                        r = this.sy,
                                        i = this.tx,
                                        a = this.ty,
                                        o = 1 / (t * r - e * n),
                                        s = r * o,
                                        l = -e * o,
                                        u = -n * o,
                                        c = t * o;
                                    return new qt(s, l, u, c, -s * i - u * a, -l * i - c * a)
                                }, qt.prototype.applyToPoint = function(t) {
                                    var e = t.x * this.sx + t.y * this.shx + this.tx,
                                        n = t.x * this.shy + t.y * this.sy + this.ty;
                                    return new Nn(e, n)
                                }, qt.prototype.applyToRectangle = function(t) {
                                    var e = this.applyToPoint(t),
                                        n = this.applyToPoint(new Nn(t.x + t.w, t.y + t.h));
                                    return new Ln(e.x, e.y, n.x - e.x, n.y - e.y)
                                }, qt.prototype.clone = function() {
                                    var t = this.sx,
                                        e = this.shy,
                                        n = this.shx,
                                        r = this.sy,
                                        i = this.tx,
                                        a = this.ty;
                                    return new qt(t, e, n, r, i, a)
                                }, _.Matrix = qt;
                                var zt = _.matrixMult = function(t, e) {
                                        return e.multiply(t)
                                    },
                                    Ut = new qt(1, 0, 0, 1, 0, 0);
                                _.unitMatrix = _.identityMatrix = Ut;
                                var Ht = function(t, e) {
                                    if (!Ct[t]) {
                                        var n = (e instanceof m ? "Sh" : "P") + (Object.keys(Pt).length + 1).toString(10);
                                        e.id = n, Ct[t] = n, Pt[n] = e, Mt.publish("addPattern", e)
                                    }
                                };
                                _.ShadingPattern = m, _.TilingPattern = v, _.addShadingPattern = function(t, e) {
                                    return I("addShadingPattern()"), Ht(t, e), this
                                }, _.beginTilingPattern = function(t) {
                                    I("beginTilingPattern()"), An(t.boundingBox[0], t.boundingBox[1], t.boundingBox[2] - t.boundingBox[0], t.boundingBox[3] - t.boundingBox[1], t.matrix)
                                }, _.endTilingPattern = function(t, e) {
                                    I("endTilingPattern()"), e.stream = et[Y].join("\n"), Ht(t, e), Mt.publish("endTilingPattern", e), Dt.pop().restore()
                                };
                                var Vt = _.__private__.newObject = function() {
                                        var t = Wt();
                                        return Gt(t, !0), t
                                    },
                                    Wt = _.__private__.newObjectDeferred = function() {
                                        return $++, J[$] = function() {
                                            return Z
                                        }, $
                                    },
                                    Gt = function(t, e) {
                                        return e = "boolean" == typeof e && e, J[t] = Z, e && ot(t + " 0 obj"), t
                                    },
                                    Yt = _.__private__.newAdditionalObject = function() {
                                        var t = {
                                            objId: Wt(),
                                            content: ""
                                        };
                                        return tt.push(t), t
                                    },
                                    Xt = Wt(),
                                    Kt = Wt(),
                                    $t = _.__private__.decodeColorString = function(t) {
                                        var e = t.split(" ");
                                        if (2 !== e.length || "g" !== e[1] && "G" !== e[1]) 5 !== e.length || "k" !== e[4] && "K" !== e[4] || (e = [(1 - e[0]) * (1 - e[3]), (1 - e[1]) * (1 - e[3]), (1 - e[2]) * (1 - e[3]), "r"]);
                                        else {
                                            var n = parseFloat(e[0]);
                                            e = [n, n, n, "r"]
                                        }
                                        for (var r = "#", i = 0; i < 3; i++) r += ("0" + Math.floor(255 * parseFloat(e[i])).toString(16)).slice(-2);
                                        return r
                                    },
                                    Jt = _.__private__.encodeColorString = function(t) {
                                        var e;
                                        "string" == typeof t && (t = {
                                            ch1: t
                                        });
                                        var n = t.ch1,
                                            r = t.ch2,
                                            i = t.ch3,
                                            a = t.ch4,
                                            o = "draw" === t.pdfColorType ? ["G", "RG", "K"] : ["g", "rg", "k"];
                                        if ("string" == typeof n && "#" !== n.charAt(0)) {
                                            var s = new h(n);
                                            if (s.ok) n = s.toHex();
                                            else if (!/^\d*\.?\d*$/.test(n)) throw new Error('Invalid color "' + n + '" passed to jsPDF.encodeColorString.')
                                        }
                                        if ("string" == typeof n && /^#[0-9A-Fa-f]{3}$/.test(n) && (n = "#" + n[1] + n[1] + n[2] + n[2] + n[3] + n[3]), "string" == typeof n && /^#[0-9A-Fa-f]{6}$/.test(n)) {
                                            var l = parseInt(n.substr(1), 16);
                                            n = l >> 16 & 255, r = l >> 8 & 255, i = 255 & l
                                        }
                                        if (void 0 === r || void 0 === a && n === r && r === i)
                                            if ("string" == typeof n) e = n + " " + o[0];
                                            else switch (t.precision) {
                                                case 2:
                                                    e = j(n / 255) + " " + o[0];
                                                    break;
                                                case 3:
                                                default:
                                                    e = M(n / 255) + " " + o[0]
                                            } else if (void 0 === a || "object" == typeof a) {
                                                if (a && !isNaN(a.a) && 0 === a.a) return ["1.", "1.", "1.", o[1]].join(" ");
                                                if ("string" == typeof n) e = [n, r, i, o[1]].join(" ");
                                                else switch (t.precision) {
                                                    case 2:
                                                        e = [j(n / 255), j(r / 255), j(i / 255), o[1]].join(" ");
                                                        break;
                                                    default:
                                                    case 3:
                                                        e = [M(n / 255), M(r / 255), M(i / 255), o[1]].join(" ")
                                                }
                                            } else if ("string" == typeof n) e = [n, r, i, a, o[2]].join(" ");
                                        else switch (t.precision) {
                                            case 2:
                                                e = [j(n), j(r), j(i), j(a), o[2]].join(" ");
                                                break;
                                            case 3:
                                            default:
                                                e = [M(n), M(r), M(i), M(a), o[2]].join(" ")
                                        }
                                        return e
                                    },
                                    Qt = _.__private__.getFilters = function() {
                                        return l
                                    },
                                    Zt = _.__private__.putStream = function(t) {
                                        var e = (t = t || {}).data || "",
                                            n = t.filters || Qt(),
                                            r = t.alreadyAppliedFilters || [],
                                            i = t.addLength1 || !1,
                                            a = e.length,
                                            o = {};
                                        !0 === n && (n = ["FlateEncode"]);
                                        var s = t.additionalKeyValues || [],
                                            l = (o = void 0 !== b.API.processDataByFilters ? b.API.processDataByFilters(e, n) : {
                                                data: e,
                                                reverseChain: []
                                            }).reverseChain + (Array.isArray(r) ? r.join(" ") : r.toString());
                                        if (0 !== o.data.length && (s.push({
                                                key: "Length",
                                                value: o.data.length
                                            }), !0 === i && s.push({
                                                key: "Length1",
                                                value: a
                                            })), 0 != l.length)
                                            if (l.split("/").length - 1 == 1) s.push({
                                                key: "Filter",
                                                value: l
                                            });
                                            else {
                                                s.push({
                                                    key: "Filter",
                                                    value: "[" + l + "]"
                                                });
                                                for (var u = 0; u < s.length; u += 1)
                                                    if ("DecodeParms" === s[u].key) {
                                                        for (var c = [], f = 0; f < o.reverseChain.split("/").length - 1; f += 1) c.push("null");
                                                        c.push(s[u].value), s[u].value = "[" + c.join(" ") + "]"
                                                    }
                                            } ot("<<");
                                        for (var h = 0; h < s.length; h++) ot("/" + s[h].key + " " + s[h].value);
                                        ot(">>"), 0 !== o.data.length && (ot("stream"), ot(o.data), ot("endstream"))
                                    },
                                    te = _.__private__.putPage = function(t) {
                                        var e = t.number,
                                            n = t.data,
                                            r = t.objId,
                                            i = t.contentsObjId;
                                        Gt(r, !0), ot("<</Type /Page"), ot("/Parent " + t.rootDictionaryObjId + " 0 R"), ot("/Resources " + t.resourceDictionaryObjId + " 0 R"), ot("/MediaBox [" + parseFloat(F(t.mediaBox.bottomLeftX)) + " " + parseFloat(F(t.mediaBox.bottomLeftY)) + " " + F(t.mediaBox.topRightX) + " " + F(t.mediaBox.topRightY) + "]"), null !== t.cropBox && ot("/CropBox [" + F(t.cropBox.bottomLeftX) + " " + F(t.cropBox.bottomLeftY) + " " + F(t.cropBox.topRightX) + " " + F(t.cropBox.topRightY) + "]"), null !== t.bleedBox && ot("/BleedBox [" + F(t.bleedBox.bottomLeftX) + " " + F(t.bleedBox.bottomLeftY) + " " + F(t.bleedBox.topRightX) + " " + F(t.bleedBox.topRightY) + "]"), null !== t.trimBox && ot("/TrimBox [" + F(t.trimBox.bottomLeftX) + " " + F(t.trimBox.bottomLeftY) + " " + F(t.trimBox.topRightX) + " " + F(t.trimBox.topRightY) + "]"), null !== t.artBox && ot("/ArtBox [" + F(t.artBox.bottomLeftX) + " " + F(t.artBox.bottomLeftY) + " " + F(t.artBox.topRightX) + " " + F(t.artBox.topRightY) + "]"), "number" == typeof t.userUnit && 1 !== t.userUnit && ot("/UserUnit " + t.userUnit), Mt.publish("putPage", {
                                            objId: r,
                                            pageContext: jt[e],
                                            pageNumber: e,
                                            page: n
                                        }), ot("/Contents " + i + " 0 R"), ot(">>"), ot("endobj");
                                        var a = n.join("\n");
                                        return P === k.ADVANCED && (a += "\nQ"), Gt(i, !0), Zt({
                                            data: a,
                                            filters: Qt()
                                        }), ot("endobj"), r
                                    },
                                    ee = _.__private__.putPages = function() {
                                        var t, e, n = [];
                                        for (t = 1; t <= Ot; t++) jt[t].objId = Wt(), jt[t].contentsObjId = Wt();
                                        for (t = 1; t <= Ot; t++) n.push(te({
                                            number: t,
                                            data: et[t],
                                            objId: jt[t].objId,
                                            contentsObjId: jt[t].contentsObjId,
                                            mediaBox: jt[t].mediaBox,
                                            cropBox: jt[t].cropBox,
                                            bleedBox: jt[t].bleedBox,
                                            trimBox: jt[t].trimBox,
                                            artBox: jt[t].artBox,
                                            userUnit: jt[t].userUnit,
                                            rootDictionaryObjId: Xt,
                                            resourceDictionaryObjId: Kt
                                        }));
                                        Gt(Xt, !0), ot("<</Type /Pages");
                                        var r = "/Kids [";
                                        for (e = 0; e < Ot; e++) r += n[e] + " 0 R ";
                                        ot(r + "]"), ot("/Count " + Ot), ot(">>"), ot("endobj"), Mt.publish("postPutPages")
                                    },
                                    ne = function(t) {
                                        var e = function(t, e) {
                                            return -1 !== t.indexOf(" ") ? "(" + Se(t, e) + ")" : Se(t, e)
                                        };
                                        Mt.publish("putFont", {
                                            font: t,
                                            out: ot,
                                            newObject: Vt,
                                            putStream: Zt,
                                            pdfEscapeWithNeededParanthesis: e
                                        }), !0 !== t.isAlreadyPutted && (t.objectNumber = Vt(), ot("<<"), ot("/Type /Font"), ot("/BaseFont /" + e(t.postScriptName)), ot("/Subtype /Type1"), "string" == typeof t.encoding && ot("/Encoding /" + t.encoding), ot("/FirstChar 32"), ot("/LastChar 255"), ot(">>"), ot("endobj"))
                                    },
                                    re = function() {
                                        for (var t in St) St.hasOwnProperty(t) && (!1 === w || !0 === w && x.hasOwnProperty(t)) && ne(St[t])
                                    },
                                    ie = function(t) {
                                        t.objectNumber = Vt();
                                        var e = [];
                                        e.push({
                                            key: "Type",
                                            value: "/XObject"
                                        }), e.push({
                                            key: "Subtype",
                                            value: "/Form"
                                        }), e.push({
                                            key: "BBox",
                                            value: "[" + [F(t.x), F(t.y), F(t.x + t.width), F(t.y + t.height)].join(" ") + "]"
                                        }), e.push({
                                            key: "Matrix",
                                            value: "[" + t.matrix.toString() + "]"
                                        });
                                        var n = t.pages[1].join("\n");
                                        Zt({
                                            data: n,
                                            additionalKeyValues: e
                                        }), ot("endobj")
                                    },
                                    ae = function() {
                                        for (var t in Bt) Bt.hasOwnProperty(t) && ie(Bt[t])
                                    },
                                    oe = function(t, e) {
                                        var n, r = [],
                                            i = 1 / (e - 1);
                                        for (n = 0; n < 1; n += i) r.push(n);
                                        if (r.push(1), 0 != t[0].offset) {
                                            var a = {
                                                offset: 0,
                                                color: t[0].color
                                            };
                                            t.unshift(a)
                                        }
                                        if (1 != t[t.length - 1].offset) {
                                            var o = {
                                                offset: 1,
                                                color: t[t.length - 1].color
                                            };
                                            t.push(o)
                                        }
                                        for (var s = "", l = 0, u = 0; u < r.length; u++) {
                                            for (n = r[u]; n > t[l + 1].offset;) l++;
                                            var c = t[l].offset,
                                                f = (n - c) / (t[l + 1].offset - c),
                                                h = t[l].color,
                                                d = t[l + 1].color;
                                            s += K(Math.round((1 - f) * h[0] + f * d[0]).toString(16)) + K(Math.round((1 - f) * h[1] + f * d[1]).toString(16)) + K(Math.round((1 - f) * h[2] + f * d[2]).toString(16))
                                        }
                                        return s.trim()
                                    },
                                    se = function(t, e) {
                                        e || (e = 21);
                                        var n = Vt(),
                                            r = oe(t.colors, e),
                                            i = [];
                                        i.push({
                                            key: "FunctionType",
                                            value: "0"
                                        }), i.push({
                                            key: "Domain",
                                            value: "[0.0 1.0]"
                                        }), i.push({
                                            key: "Size",
                                            value: "[" + e + "]"
                                        }), i.push({
                                            key: "BitsPerSample",
                                            value: "8"
                                        }), i.push({
                                            key: "Range",
                                            value: "[0.0 1.0 0.0 1.0 0.0 1.0]"
                                        }), i.push({
                                            key: "Decode",
                                            value: "[0.0 1.0 0.0 1.0 0.0 1.0]"
                                        }), Zt({
                                            data: r,
                                            additionalKeyValues: i,
                                            alreadyAppliedFilters: ["/ASCIIHexDecode"]
                                        }), ot("endobj"), t.objectNumber = Vt(), ot("<< /ShadingType " + t.type), ot("/ColorSpace /DeviceRGB");
                                        var a = "/Coords [" + F(parseFloat(t.coords[0])) + " " + F(parseFloat(t.coords[1])) + " ";
                                        2 === t.type ? a += F(parseFloat(t.coords[2])) + " " + F(parseFloat(t.coords[3])) : a += F(parseFloat(t.coords[2])) + " " + F(parseFloat(t.coords[3])) + " " + F(parseFloat(t.coords[4])) + " " + F(parseFloat(t.coords[5])), ot(a += "]"), t.matrix && ot("/Matrix [" + t.matrix.toString() + "]"), ot("/Function " + n + " 0 R"), ot("/Extend [true true]"), ot(">>"), ot("endobj")
                                    },
                                    le = function(t, e) {
                                        var n = Wt(),
                                            r = Vt();
                                        e.push({
                                            resourcesOid: n,
                                            objectOid: r
                                        }), t.objectNumber = r;
                                        var i = [];
                                        i.push({
                                            key: "Type",
                                            value: "/Pattern"
                                        }), i.push({
                                            key: "PatternType",
                                            value: "1"
                                        }), i.push({
                                            key: "PaintType",
                                            value: "1"
                                        }), i.push({
                                            key: "TilingType",
                                            value: "1"
                                        }), i.push({
                                            key: "BBox",
                                            value: "[" + t.boundingBox.map(F).join(" ") + "]"
                                        }), i.push({
                                            key: "XStep",
                                            value: F(t.xStep)
                                        }), i.push({
                                            key: "YStep",
                                            value: F(t.yStep)
                                        }), i.push({
                                            key: "Resources",
                                            value: n + " 0 R"
                                        }), t.matrix && i.push({
                                            key: "Matrix",
                                            value: "[" + t.matrix.toString() + "]"
                                        }), Zt({
                                            data: t.stream,
                                            additionalKeyValues: i
                                        }), ot("endobj")
                                    },
                                    ue = function(t) {
                                        var e;
                                        for (e in Pt) Pt.hasOwnProperty(e) && (Pt[e] instanceof m ? se(Pt[e]) : Pt[e] instanceof v && le(Pt[e], t))
                                    },
                                    ce = function(t) {
                                        for (var e in t.objectNumber = Vt(), ot("<<"), t) switch (e) {
                                            case "opacity":
                                                ot("/ca " + j(t[e]));
                                                break;
                                            case "stroke-opacity":
                                                ot("/CA " + j(t[e]))
                                        }
                                        ot(">>"), ot("endobj")
                                    },
                                    fe = function() {
                                        var t;
                                        for (t in Et) Et.hasOwnProperty(t) && ce(Et[t])
                                    },
                                    he = function() {
                                        for (var t in ot("/XObject <<"), Bt) Bt.hasOwnProperty(t) && Bt[t].objectNumber >= 0 && ot("/" + t + " " + Bt[t].objectNumber + " 0 R");
                                        Mt.publish("putXobjectDict"), ot(">>")
                                    },
                                    de = function() {
                                        for (var t in ot("/Font <<"), St) St.hasOwnProperty(t) && (!1 === w || !0 === w && x.hasOwnProperty(t)) && ot("/" + t + " " + St[t].objectNumber + " 0 R");
                                        ot(">>")
                                    },
                                    pe = function() {
                                        if (Object.keys(Pt).length > 0) {
                                            for (var t in ot("/Shading <<"), Pt) Pt.hasOwnProperty(t) && Pt[t] instanceof m && Pt[t].objectNumber >= 0 && ot("/" + t + " " + Pt[t].objectNumber + " 0 R");
                                            Mt.publish("putShadingPatternDict"), ot(">>")
                                        }
                                    },
                                    ge = function(t) {
                                        if (Object.keys(Pt).length > 0) {
                                            for (var e in ot("/Pattern <<"), Pt) Pt.hasOwnProperty(e) && Pt[e] instanceof _.TilingPattern && Pt[e].objectNumber >= 0 && Pt[e].objectNumber < t && ot("/" + e + " " + Pt[e].objectNumber + " 0 R");
                                            Mt.publish("putTilingPatternDict"), ot(">>")
                                        }
                                    },
                                    me = function() {
                                        if (Object.keys(Et).length > 0) {
                                            var t;
                                            for (t in ot("/ExtGState <<"), Et) Et.hasOwnProperty(t) && Et[t].objectNumber >= 0 && ot("/" + t + " " + Et[t].objectNumber + " 0 R");
                                            Mt.publish("putGStateDict"), ot(">>")
                                        }
                                    },
                                    ve = function(t) {
                                        Gt(t.resourcesOid, !0), ot("<<"), ot("/ProcSet [/PDF /Text /ImageB /ImageC /ImageI]"), de(), pe(), ge(t.objectOid), me(), he(), ot(">>"), ot("endobj")
                                    },
                                    be = function() {
                                        var t = [];
                                        re(), fe(), ae(), ue(t), Mt.publish("putResources"), t.forEach(ve), ve({
                                            resourcesOid: Kt,
                                            objectOid: Number.MAX_SAFE_INTEGER
                                        }), Mt.publish("postPutResources")
                                    },
                                    ye = function() {
                                        Mt.publish("putAdditionalObjects");
                                        for (var t = 0; t < tt.length; t++) {
                                            var e = tt[t];
                                            Gt(e.objId, !0), ot(e.content), ot("endobj")
                                        }
                                        Mt.publish("postPutAdditionalObjects")
                                    },
                                    we = function(t) {
                                        At[t.fontName] = At[t.fontName] || {}, At[t.fontName][t.fontStyle] = t.id
                                    },
                                    xe = function(t, e, n, r, i) {
                                        var a = {
                                            id: "F" + (Object.keys(St).length + 1).toString(10),
                                            postScriptName: t,
                                            fontName: e,
                                            fontStyle: n,
                                            encoding: r,
                                            isStandardFont: i || !1,
                                            metadata: {}
                                        };
                                        return Mt.publish("addFont", {
                                            font: a,
                                            instance: this
                                        }), St[a.id] = a, we(a), a.id
                                    },
                                    _e = function(t) {
                                        for (var e = 0, n = ut.length; e < n; e++) {
                                            var r = xe.call(this, t[e][0], t[e][1], t[e][2], ut[e][3], !0);
                                            !1 === w && (x[r] = !0);
                                            var i = t[e][0].split("-");
                                            we({
                                                id: r,
                                                fontName: i[0],
                                                fontStyle: i[1] || ""
                                            })
                                        }
                                        Mt.publish("addFonts", {
                                            fonts: St,
                                            dictionary: At
                                        })
                                    },
                                    Ne = function(t) {
                                        return t.foo = function() {
                                            try {
                                                return t.apply(this, arguments)
                                            } catch (t) {
                                                var e = t.stack || "";
                                                ~e.indexOf(" at ") && (e = e.split(" at ")[1]);
                                                var n = "Error in function " + e.split("\n")[0].split("<")[0] + ": " + t.message;
                                                if (!r.console) throw new Error(n);
                                                r.console.error(n, t), r.alert && alert(n)
                                            }
                                        }, t.foo.bar = t, t.foo
                                    },
                                    Le = function(t, e) {
                                        var n, r, i, a, o, s, l, u, c;
                                        if (i = (e = e || {}).sourceEncoding || "Unicode", o = e.outputEncoding, (e.autoencode || o) && St[wt].metadata && St[wt].metadata[i] && St[wt].metadata[i].encoding && (a = St[wt].metadata[i].encoding, !o && St[wt].encoding && (o = St[wt].encoding), !o && a.codePages && (o = a.codePages[0]), "string" == typeof o && (o = a[o]), o)) {
                                            for (l = !1, s = [], n = 0, r = t.length; n < r; n++)(u = o[t.charCodeAt(n)]) ? s.push(String.fromCharCode(u)) : s.push(t[n]), s[n].charCodeAt(0) >> 8 && (l = !0);
                                            t = s.join("")
                                        }
                                        for (n = t.length; void 0 === l && 0 !== n;) t.charCodeAt(n - 1) >> 8 && (l = !0), n--;
                                        if (!l) return t;
                                        for (s = e.noBOM ? [] : [254, 255], n = 0, r = t.length; n < r; n++) {
                                            if ((c = (u = t.charCodeAt(n)) >> 8) >> 8) throw new Error("Character at position " + n + " of string '" + t + "' exceeds 16bits. Cannot be encoded into UCS-2 BE");
                                            s.push(c), s.push(u - (c << 8))
                                        }
                                        return String.fromCharCode.apply(void 0, s)
                                    },
                                    Se = _.__private__.pdfEscape = _.pdfEscape = function(t, e) {
                                        return Le(t, e).replace(/\\/g, "\\\\").replace(/\(/g, "\\(").replace(/\)/g, "\\)")
                                    },
                                    Ae = _.__private__.beginPage = function(t) {
                                        et[++Ot] = [], jt[Ot] = {
                                            objId: 0,
                                            contentsObjId: 0,
                                            userUnit: Number(u),
                                            artBox: null,
                                            bleedBox: null,
                                            cropBox: null,
                                            trimBox: null,
                                            mediaBox: {
                                                bottomLeftX: 0,
                                                bottomLeftY: 0,
                                                topRightX: Number(t[0]),
                                                topRightY: Number(t[1])
                                            }
                                        }, Ce(Ot), at(et[Y])
                                    },
                                    ke = function(t, e) {
                                        var r, i, s;
                                        switch (n = e || n, "string" == typeof t && (r = A(t.toLowerCase()), Array.isArray(r) && (i = r[0], s = r[1])), Array.isArray(t) && (i = t[0] * xt, s = t[1] * xt), isNaN(i) && (i = o[0], s = o[1]), (i > 14400 || s > 14400) && (a.warn("A page in a PDF can not be wider or taller than 14400 userUnit. jsPDF limits the width/height to 14400"), i = Math.min(14400, i), s = Math.min(14400, s)), o = [i, s], n.substr(0, 1)) {
                                            case "l":
                                                s > i && (o = [s, i]);
                                                break;
                                            case "p":
                                                i > s && (o = [s, i])
                                        }
                                        Ae(o), on(an), ot(pn), 0 !== wn && ot(wn + " J"), 0 !== xn && ot(xn + " j"), Mt.publish("addPage", {
                                            pageNumber: Ot
                                        })
                                    },
                                    Pe = function(t) {
                                        t > 0 && t <= Ot && (et.splice(t, 1), jt.splice(t, 1), Ot--, Y > Ot && (Y = Ot), this.setPage(Y))
                                    },
                                    Ce = function(t) {
                                        t > 0 && t <= Ot && (Y = t)
                                    },
                                    Ee = _.__private__.getNumberOfPages = _.getNumberOfPages = function() {
                                        return et.length - 1
                                    },
                                    Fe = function(t, e, n) {
                                        var r, i = void 0;
                                        return n = n || {}, t = void 0 !== t ? t : St[wt].fontName, e = void 0 !== e ? e : St[wt].fontStyle, r = t.toLowerCase(), void 0 !== At[r] && void 0 !== At[r][e] ? i = At[r][e] : void 0 !== At[t] && void 0 !== At[t][e] ? i = At[t][e] : !1 === n.disableWarning && a.warn("Unable to look up font label for font '" + t + "', '" + e + "'. Refer to getFontList() for available fonts."), i || n.noFallback || null == (i = At.times[e]) && (i = At.times.normal), i
                                    },
                                    Ie = _.__private__.putInfo = function() {
                                        for (var t in Vt(), ot("<<"), ot("/Producer (jsPDF " + b.version + ")"), yt) yt.hasOwnProperty(t) && yt[t] && ot("/" + t.substr(0, 1).toUpperCase() + t.substr(1) + " (" + Se(yt[t]) + ")");
                                        ot("/CreationDate (" + D + ")"), ot(">>"), ot("endobj")
                                    },
                                    Oe = _.__private__.putCatalog = function(t) {
                                        var e = (t = t || {}).rootDictionaryObjId || Xt;
                                        switch (Vt(), ot("<<"), ot("/Type /Catalog"), ot("/Pages " + e + " 0 R"), ft || (ft = "fullwidth"), ft) {
                                            case "fullwidth":
                                                ot("/OpenAction [3 0 R /FitH null]");
                                                break;
                                            case "fullheight":
                                                ot("/OpenAction [3 0 R /FitV null]");
                                                break;
                                            case "fullpage":
                                                ot("/OpenAction [3 0 R /Fit]");
                                                break;
                                            case "original":
                                                ot("/OpenAction [3 0 R /XYZ null null 1]");
                                                break;
                                            default:
                                                var n = "" + ft;
                                                "%" === n.substr(n.length - 1) && (ft = parseInt(ft) / 100), "number" == typeof ft && ot("/OpenAction [3 0 R /XYZ null null " + j(ft) + "]")
                                        }
                                        switch (mt || (mt = "continuous"), mt) {
                                            case "continuous":
                                                ot("/PageLayout /OneColumn");
                                                break;
                                            case "single":
                                                ot("/PageLayout /SinglePage");
                                                break;
                                            case "two":
                                            case "twoleft":
                                                ot("/PageLayout /TwoColumnLeft");
                                                break;
                                            case "tworight":
                                                ot("/PageLayout /TwoColumnRight")
                                        }
                                        pt && ot("/PageMode /" + pt), Mt.publish("putCatalog"), ot(">>"), ot("endobj")
                                    },
                                    je = _.__private__.putTrailer = function() {
                                        ot("trailer"), ot("<<"), ot("/Size " + ($ + 1)), ot("/Root " + $ + " 0 R"), ot("/Info " + ($ - 1) + " 0 R"), ot("/ID [ <" + q + "> <" + q + "> ]"), ot(">>")
                                    },
                                    Me = _.__private__.putHeader = function() {
                                        ot("%PDF-" + N), ot("%\xba\xdf\xac\xe0")
                                    },
                                    Te = _.__private__.putXRef = function() {
                                        var t = "0000000000";
                                        ot("xref"), ot("0 " + ($ + 1)), ot("0000000000 65535 f ");
                                        for (var e = 1; e <= $; e++) "function" == typeof J[e] ? ot((t + J[e]()).slice(-10) + " 00000 n ") : void 0 !== J[e] ? ot((t + J[e]).slice(-10) + " 00000 n ") : ot("0000000000 00000 n ")
                                    },
                                    Be = _.__private__.buildDocument = function() {
                                        it(), at(Q), Mt.publish("buildDocument"), Me(), ee(), ye(), be(), Ie(), Oe();
                                        var t = Z;
                                        return Te(), je(), ot("startxref"), ot("" + t), ot("%%EOF"), at(et[Y]), Q.join("\n")
                                    },
                                    Re = _.__private__.getBlob = function(t) {
                                        return new Blob([lt(t)], {
                                            type: "application/pdf"
                                        })
                                    },
                                    De = _.output = _.__private__.output = Ne((function(t, e) {
                                        switch ("string" == typeof(e = e || {}) ? e = {
                                                filename: e
                                            } : e.filename = e.filename || "generated.pdf", t) {
                                            case void 0:
                                                return Be();
                                            case "save":
                                                _.save(e.filename);
                                                break;
                                            case "arraybuffer":
                                                return lt(Be());
                                            case "blob":
                                                return Re(Be());
                                            case "bloburi":
                                            case "bloburl":
                                                if (void 0 !== r.URL && "function" == typeof r.URL.createObjectURL) return r.URL && r.URL.createObjectURL(Re(Be())) || void 0;
                                                a.warn("bloburl is not supported by your system, because URL.createObjectURL is not supported by your browser.");
                                                break;
                                            case "datauristring":
                                            case "dataurlstring":
                                                var n = "",
                                                    i = Be();
                                                try {
                                                    n = c(i)
                                                } catch (r) {
                                                    n = c(unescape(encodeURIComponent(i)))
                                                }
                                                return "data:application/pdf;filename=" + e.filename + ";base64," + n;
                                            case "pdfobjectnewwindow":
                                                if ("[object Window]" === Object.prototype.toString.call(r)) {
                                                    var o = '<html><style>html, body { padding: 0; margin: 0; } iframe { width: 100%; height: 100%; border: 0;}  </style><body><script src="' + (e.pdfObjectUrl || "https://cdnjs.cloudflare.com/ajax/libs/pdfobject/2.1.1/pdfobject.min.js") + '"><\/script><script >PDFObject.embed("' + this.output("dataurlstring") + '", ' + JSON.stringify(e) + ");<\/script></body></html>",
                                                        s = r.open();
                                                    return null !== s && s.document.write(o), s
                                                }
                                                throw new Error("The option pdfobjectnewwindow just works in a browser-environment.");
                                            case "pdfjsnewwindow":
                                                if ("[object Window]" === Object.prototype.toString.call(r)) {
                                                    var l = '<html><style>html, body { padding: 0; margin: 0; } iframe { width: 100%; height: 100%; border: 0;}  </style><body><iframe id="pdfViewer" src="' + (e.pdfJsUrl || "examples/PDF.js/web/viewer.html") + "?file=&downloadName=" + e.filename + '" width="500px" height="400px" /></body></html>',
                                                        u = r.open();
                                                    if (null !== u) {
                                                        u.document.write(l);
                                                        var f = this;
                                                        u.document.documentElement.querySelector("#pdfViewer").onload = function() {
                                                            u.document.title = e.filename, u.document.documentElement.querySelector("#pdfViewer").contentWindow.PDFViewerApplication.open(f.output("bloburl"))
                                                        }
                                                    }
                                                    return u
                                                }
                                                throw new Error("The option pdfjsnewwindow just works in a browser-environment.");
                                            case "dataurlnewwindow":
                                                if ("[object Window]" !== Object.prototype.toString.call(r)) throw new Error("The option dataurlnewwindow just works in a browser-environment.");
                                                var h = '<html><style>html, body { padding: 0; margin: 0; } iframe { width: 100%; height: 100%; border: 0;}  </style><body><iframe src="' + this.output("datauristring", e) + '"></iframe></body></html>',
                                                    d = r.open();
                                                if (null !== d && (d.document.write(h), d.document.title = e.filename), d || "undefined" == typeof safari) return d;
                                                break;
                                            case "datauri":
                                            case "dataurl":
                                                return r.document.location.href = this.output("datauristring", e);
                                            default:
                                                return null
                                        }
                                    })),
                                    qe = function(t) {
                                        return !0 === Array.isArray(Tt) && Tt.indexOf(t) > -1
                                    };
                                switch (i) {
                                    case "pt":
                                        xt = 1;
                                        break;
                                    case "mm":
                                        xt = 72 / 25.4;
                                        break;
                                    case "cm":
                                        xt = 72 / 2.54;
                                        break;
                                    case "in":
                                        xt = 72;
                                        break;
                                    case "px":
                                        xt = 1 == qe("px_scaling") ? .75 : 96 / 72;
                                        break;
                                    case "pc":
                                    case "em":
                                        xt = 12;
                                        break;
                                    case "ex":
                                        xt = 6;
                                        break;
                                    default:
                                        throw new Error("Invalid unit: " + i)
                                }
                                W(), U();
                                var ze = _.__private__.getPageInfo = _.getPageInfo = function(t) {
                                        if (isNaN(t) || t % 1 != 0) throw new Error("Invalid argument passed to jsPDF.getPageInfo");
                                        return {
                                            objId: jt[t].objId,
                                            pageNumber: t,
                                            pageContext: jt[t]
                                        }
                                    },
                                    Ue = _.__private__.getPageInfoByObjId = function(t) {
                                        if (isNaN(t) || t % 1 != 0) throw new Error("Invalid argument passed to jsPDF.getPageInfoByObjId");
                                        for (var e in jt)
                                            if (jt[e].objId === t) break;
                                        return ze(e)
                                    },
                                    He = _.__private__.getCurrentPageInfo = _.getCurrentPageInfo = function() {
                                        return {
                                            objId: jt[Y].objId,
                                            pageNumber: Y,
                                            pageContext: jt[Y]
                                        }
                                    };
                                _.addPage = function() {
                                    return ke.apply(this, arguments), this
                                }, _.setPage = function() {
                                    return Ce.apply(this, arguments), at.call(this, et[Y]), this
                                }, _.insertPage = function(t) {
                                    return this.addPage(), this.movePage(Y, t), this
                                }, _.movePage = function(t, e) {
                                    var n, r;
                                    if (t > e) {
                                        n = et[t], r = jt[t];
                                        for (var i = t; i > e; i--) et[i] = et[i - 1], jt[i] = jt[i - 1];
                                        et[e] = n, jt[e] = r, this.setPage(e)
                                    } else if (t < e) {
                                        n = et[t], r = jt[t];
                                        for (var a = t; a < e; a++) et[a] = et[a + 1], jt[a] = jt[a + 1];
                                        et[e] = n, jt[e] = r, this.setPage(e)
                                    }
                                    return this
                                }, _.deletePage = function() {
                                    return Pe.apply(this, arguments), this
                                }, _.__private__.text = _.text = function(t, e, n, r, i) {
                                    var a, o, s, l, u, c, f, h, d = (r = r || {}).scope || this;
                                    if ("number" == typeof t && "number" == typeof e && ("string" == typeof n || Array.isArray(n))) {
                                        var p = n;
                                        n = e, e = t, t = p
                                    }
                                    if (arguments[3] instanceof qt == 0 ? (s = arguments[4], l = arguments[5], "object" == typeof(f = arguments[3]) && null !== f || ("string" == typeof s && (l = s, s = null), "string" == typeof f && (l = f, f = null), "number" == typeof f && (s = f, f = null), r = {
                                            flags: f,
                                            angle: s,
                                            align: l
                                        })) : (I("The transform parameter of text() with a Matrix value"), h = i), isNaN(e) || isNaN(n) || null == t) throw new Error("Invalid arguments passed to jsPDF.text");
                                    if (0 === t.length) return d;
                                    var g = "",
                                        m = !1,
                                        v = "number" == typeof r.lineHeightFactor ? r.lineHeightFactor : rn,
                                        b = d.internal.scaleFactor;

                                    function y(t) {
                                        return t = t.split("\t").join(Array(r.TabLen || 9).join(" ")), Se(t, f)
                                    }

                                    function w(t) {
                                        for (var e, n = t.concat(), r = [], i = n.length; i--;) "string" == typeof(e = n.shift()) ? r.push(e) : Array.isArray(t) && (1 === e.length || void 0 === e[1] && void 0 === e[2]) ? r.push(e[0]) : r.push([e[0], e[1], e[2]]);
                                        return r
                                    }

                                    function _(t, e) {
                                        var n;
                                        if ("string" == typeof t) n = e(t)[0];
                                        else if (Array.isArray(t)) {
                                            for (var r, i, a = t.concat(), o = [], s = a.length; s--;) "string" == typeof(r = a.shift()) ? o.push(e(r)[0]) : Array.isArray(r) && "string" == typeof r[0] && (i = e(r[0], r[1], r[2]), o.push([i[0], i[1], i[2]]));
                                            n = o
                                        }
                                        return n
                                    }
                                    var N = !1,
                                        L = !0;
                                    if ("string" == typeof t) N = !0;
                                    else if (Array.isArray(t)) {
                                        var S = t.concat();
                                        o = [];
                                        for (var A, C = S.length; C--;)("string" != typeof(A = S.shift()) || Array.isArray(A) && "string" != typeof A[0]) && (L = !1);
                                        N = L
                                    }
                                    if (!1 === N) throw new Error('Type of text must be string or Array. "' + t + '" is not recognized.');
                                    "string" == typeof t && (t = t.match(/[\r?\n]/) ? t.split(/\r\n|\r|\n/g) : [t]);
                                    var E = ct / d.internal.scaleFactor,
                                        O = E * (rn - 1);
                                    switch (r.baseline) {
                                        case "bottom":
                                            n -= O;
                                            break;
                                        case "top":
                                            n += E - O;
                                            break;
                                        case "hanging":
                                            n += E - 2 * O;
                                            break;
                                        case "middle":
                                            n += E / 2 - O
                                    }
                                    if ((c = r.maxWidth || 0) > 0 && ("string" == typeof t ? t = d.splitTextToSize(t, c) : "[object Array]" === Object.prototype.toString.call(t) && (t = d.splitTextToSize(t.join(" "), c))), a = {
                                            text: t,
                                            x: e,
                                            y: n,
                                            options: r,
                                            mutex: {
                                                pdfEscape: Se,
                                                activeFontKey: wt,
                                                fonts: St,
                                                activeFontSize: ct
                                            }
                                        }, Mt.publish("preProcessText", a), t = a.text, s = (r = a.options).angle, h instanceof qt == 0 && s && "number" == typeof s) {
                                        s *= Math.PI / 180, 0 === r.rotationDirection && (s = -s), P === k.ADVANCED && (s = -s);
                                        var j = Math.cos(s),
                                            M = Math.sin(s);
                                        h = new qt(j, M, -M, j, 0, 0)
                                    } else s && s instanceof qt && (h = s);
                                    P !== k.ADVANCED || h || (h = Ut), void 0 !== (u = r.charSpace || bn) && (g += F(T(u)) + " Tc\n", this.setCharSpace(this.getCharSpace() || 0)), r.lang;
                                    var B = -1,
                                        R = void 0 !== r.renderingMode ? r.renderingMode : r.stroke,
                                        D = d.internal.getCurrentPageInfo().pageContext;
                                    switch (R) {
                                        case 0:
                                        case !1:
                                        case "fill":
                                            B = 0;
                                            break;
                                        case 1:
                                        case !0:
                                        case "stroke":
                                            B = 1;
                                            break;
                                        case 2:
                                        case "fillThenStroke":
                                            B = 2;
                                            break;
                                        case 3:
                                        case "invisible":
                                            B = 3;
                                            break;
                                        case 4:
                                        case "fillAndAddForClipping":
                                            B = 4;
                                            break;
                                        case 5:
                                        case "strokeAndAddPathForClipping":
                                            B = 5;
                                            break;
                                        case 6:
                                        case "fillThenStrokeAndAddToPathForClipping":
                                            B = 6;
                                            break;
                                        case 7:
                                        case "addToPathForClipping":
                                            B = 7
                                    }
                                    var q = void 0 !== D.usedRenderingMode ? D.usedRenderingMode : -1; - 1 !== B ? g += B + " Tr\n" : -1 !== q && (g += "0 Tr\n"), -1 !== B && (D.usedRenderingMode = B), l = r.align || "left";
                                    var z, U = ct * v,
                                        H = d.internal.pageSize.getWidth(),
                                        V = St[wt];
                                    u = r.charSpace || bn, c = r.maxWidth || 0, f = {};
                                    var W = [];
                                    if ("[object Array]" === Object.prototype.toString.call(t)) {
                                        var G;
                                        o = w(t), "left" !== l && (z = o.map((function(t) {
                                            return d.getStringUnitWidth(t, {
                                                font: V,
                                                charSpace: u,
                                                fontSize: ct,
                                                doKerning: !1
                                            }) * ct / b
                                        })));
                                        var Y, X = 0;
                                        if ("right" === l) {
                                            e -= z[0], t = [], C = o.length;
                                            for (var K = 0; K < C; K++) 0 === K ? (Y = cn(e), G = fn(n)) : (Y = T(X - z[K]), G = -U), t.push([o[K], Y, G]), X = z[K]
                                        } else if ("center" === l) {
                                            e -= z[0] / 2, t = [], C = o.length;
                                            for (var $ = 0; $ < C; $++) 0 === $ ? (Y = cn(e), G = fn(n)) : (Y = T((X - z[$]) / 2), G = -U), t.push([o[$], Y, G]), X = z[$]
                                        } else if ("left" === l) {
                                            t = [], C = o.length;
                                            for (var J = 0; J < C; J++) t.push(o[J])
                                        } else {
                                            if ("justify" !== l) throw new Error('Unrecognized alignment option, use "left", "center", "right" or "justify".');
                                            t = [], C = o.length, c = 0 !== c ? c : H;
                                            for (var Q = 0; Q < C; Q++) G = 0 === Q ? fn(n) : -U, Y = 0 === Q ? cn(e) : 0, Q < C - 1 && W.push(F(T((c - z[Q]) / (o[Q].split(" ").length - 1)))), t.push([o[Q], Y, G])
                                        }
                                    }
                                    var Z = "boolean" == typeof r.R2L ? r.R2L : dt;
                                    !0 === Z && (t = _(t, (function(t, e, n) {
                                        return [t.split("").reverse().join(""), e, n]
                                    }))), a = {
                                        text: t,
                                        x: e,
                                        y: n,
                                        options: r,
                                        mutex: {
                                            pdfEscape: Se,
                                            activeFontKey: wt,
                                            fonts: St,
                                            activeFontSize: ct
                                        }
                                    }, Mt.publish("postProcessText", a), t = a.text, m = a.mutex.isHex || !1;
                                    var tt = St[wt].encoding;
                                    "WinAnsiEncoding" !== tt && "StandardEncoding" !== tt || (t = _(t, (function(t, e, n) {
                                        return [y(t), e, n]
                                    }))), o = w(t), t = [];
                                    for (var et, nt, rt, it = 0, at = 1, st = Array.isArray(o[0]) ? at : it, lt = "", ut = function(t, e, n) {
                                            var i = "";
                                            return n instanceof qt ? (n = "number" == typeof r.angle ? zt(n, new qt(1, 0, 0, 1, t, e)) : zt(new qt(1, 0, 0, 1, t, e), n), P === k.ADVANCED && (n = zt(new qt(1, 0, 0, -1, 0, 0), n)), i = n.join(" ") + " Tm\n") : i = F(t) + " " + F(e) + " Td\n", i
                                        }, ft = 0; ft < o.length; ft++) {
                                        switch (lt = "", st) {
                                            case at:
                                                rt = (m ? "<" : "(") + o[ft][0] + (m ? ">" : ")"), et = parseFloat(o[ft][1]), nt = parseFloat(o[ft][2]);
                                                break;
                                            case it:
                                                rt = (m ? "<" : "(") + o[ft] + (m ? ">" : ")"), et = cn(e), nt = fn(n)
                                        }
                                        void 0 !== W && void 0 !== W[ft] && (lt = W[ft] + " Tw\n"), 0 === ft ? t.push(lt + ut(et, nt, h) + rt) : st === it ? t.push(lt + rt) : st === at && t.push(lt + ut(et, nt, h) + rt)
                                    }
                                    t = st === it ? t.join(" Tj\nT* ") : t.join(" Tj\n"), t += " Tj\n";
                                    var ht = "BT\n/";
                                    return ht += wt + " " + ct + " Tf\n", ht += F(ct * v) + " TL\n", ht += mn + "\n", ht += g, ht += t, ot(ht += "ET"), x[wt] = !0, d
                                };
                                var Ve = _.__private__.clip = _.clip = function(t) {
                                    return ot("evenodd" === t ? "W*" : "W"), this
                                };
                                _.clipEvenOdd = function() {
                                    return Ve("evenodd")
                                }, _.__private__.discardPath = _.discardPath = function() {
                                    return ot("n"), this
                                };
                                var We = _.__private__.isValidStyle = function(t) {
                                    var e = !1;
                                    return -1 !== [void 0, null, "S", "D", "F", "DF", "FD", "f", "f*", "B", "B*", "n"].indexOf(t) && (e = !0), e
                                };
                                _.__private__.setDefaultPathOperation = _.setDefaultPathOperation = function(t) {
                                    return We(t) && (y = t), this
                                };
                                var Ge = _.__private__.getStyle = _.getStyle = function(t) {
                                        var e = y;
                                        switch (t) {
                                            case "D":
                                            case "S":
                                                e = "S";
                                                break;
                                            case "F":
                                                e = "f";
                                                break;
                                            case "FD":
                                            case "DF":
                                                e = "B";
                                                break;
                                            case "f":
                                            case "f*":
                                            case "B":
                                            case "B*":
                                                e = t
                                        }
                                        return e
                                    },
                                    Ye = _.close = function() {
                                        return ot("h"), this
                                    };
                                _.stroke = function() {
                                    return ot("S"), this
                                }, _.fill = function(t) {
                                    return Xe("f", t), this
                                }, _.fillEvenOdd = function(t) {
                                    return Xe("f*", t), this
                                }, _.fillStroke = function(t) {
                                    return Xe("B", t), this
                                }, _.fillStrokeEvenOdd = function(t) {
                                    return Xe("B*", t), this
                                };
                                var Xe = function(t, e) {
                                        "object" == typeof e ? Je(e, t) : ot(t)
                                    },
                                    Ke = function(t) {
                                        null === t || P === k.ADVANCED && void 0 === t || (t = Ge(t), ot(t))
                                    };

                                function $e(t, e, n, r, i) {
                                    var a = new v(e || this.boundingBox, n || this.xStep, r || this.yStep, this.gState, i || this.matrix);
                                    a.stream = this.stream;
                                    var o = t + "$$" + this.cloneIndex++ + "$$";
                                    return Ht(o, a), a
                                }
                                var Je = function(t, e) {
                                        var n = Ct[t.key],
                                            r = Pt[n];
                                        if (r instanceof m) ot("q"), ot(Qe(e)), r.gState && _.setGState(r.gState), ot(t.matrix.toString() + " cm"), ot("/" + n + " sh"), ot("Q");
                                        else if (r instanceof v) {
                                            var i = new qt(1, 0, 0, -1, 0, Fn());
                                            t.matrix && (i = i.multiply(t.matrix || Ut), n = $e.call(r, t.key, t.boundingBox, t.xStep, t.yStep, i).id), ot("q"), ot("/Pattern cs"), ot("/" + n + " scn"), r.gState && _.setGState(r.gState), ot(e), ot("Q")
                                        }
                                    },
                                    Qe = function(t) {
                                        switch (t) {
                                            case "f":
                                            case "F":
                                                return "W n";
                                            case "f*":
                                                return "W* n";
                                            case "B":
                                                return "W S";
                                            case "B*":
                                                return "W* S";
                                            case "S":
                                                return "W S";
                                            case "n":
                                                return "W n"
                                        }
                                    },
                                    Ze = _.moveTo = function(t, e) {
                                        return ot(F(T(t)) + " " + F(R(e)) + " m"), this
                                    },
                                    tn = _.lineTo = function(t, e) {
                                        return ot(F(T(t)) + " " + F(R(e)) + " l"), this
                                    },
                                    en = _.curveTo = function(t, e, n, r, i, a) {
                                        return ot([F(T(t)), F(R(e)), F(T(n)), F(R(r)), F(T(i)), F(R(a)), "c"].join(" ")), this
                                    };
                                _.__private__.line = _.line = function(t, e, n, r, i) {
                                    if (isNaN(t) || isNaN(e) || isNaN(n) || isNaN(r) || !We(i)) throw new Error("Invalid arguments passed to jsPDF.line");
                                    return P === k.COMPAT ? this.lines([
                                        [n - t, r - e]
                                    ], t, e, [1, 1], i || "S") : this.lines([
                                        [n - t, r - e]
                                    ], t, e, [1, 1]).stroke()
                                }, _.__private__.lines = _.lines = function(t, e, n, r, i, a) {
                                    var o, s, l, u, c, f, h, d, p, g, m, v;
                                    if ("number" == typeof t && (v = n, n = e, e = t, t = v), r = r || [1, 1], a = a || !1, isNaN(e) || isNaN(n) || !Array.isArray(t) || !Array.isArray(r) || !We(i) || "boolean" != typeof a) throw new Error("Invalid arguments passed to jsPDF.lines");
                                    for (Ze(e, n), o = r[0], s = r[1], u = t.length, g = e, m = n, l = 0; l < u; l++) 2 === (c = t[l]).length ? (g = c[0] * o + g, m = c[1] * s + m, tn(g, m)) : (f = c[0] * o + g, h = c[1] * s + m, d = c[2] * o + g, p = c[3] * s + m, g = c[4] * o + g, m = c[5] * s + m, en(f, h, d, p, g, m));
                                    return a && Ye(), Ke(i), this
                                }, _.path = function(t) {
                                    for (var e = 0; e < t.length; e++) {
                                        var n = t[e],
                                            r = n.c;
                                        switch (n.op) {
                                            case "m":
                                                Ze(r[0], r[1]);
                                                break;
                                            case "l":
                                                tn(r[0], r[1]);
                                                break;
                                            case "c":
                                                en.apply(this, r);
                                                break;
                                            case "h":
                                                Ye()
                                        }
                                    }
                                    return this
                                }, _.__private__.rect = _.rect = function(t, e, n, r, i) {
                                    if (isNaN(t) || isNaN(e) || isNaN(n) || isNaN(r) || !We(i)) throw new Error("Invalid arguments passed to jsPDF.rect");
                                    return P === k.COMPAT && (r = -r), ot([F(T(t)), F(R(e)), F(T(n)), F(T(r)), "re"].join(" ")), Ke(i), this
                                }, _.__private__.triangle = _.triangle = function(t, e, n, r, i, a, o) {
                                    if (isNaN(t) || isNaN(e) || isNaN(n) || isNaN(r) || isNaN(i) || isNaN(a) || !We(o)) throw new Error("Invalid arguments passed to jsPDF.triangle");
                                    return this.lines([
                                        [n - t, r - e],
                                        [i - n, a - r],
                                        [t - i, e - a]
                                    ], t, e, [1, 1], o, !0), this
                                }, _.__private__.roundedRect = _.roundedRect = function(t, e, n, r, i, a, o) {
                                    if (isNaN(t) || isNaN(e) || isNaN(n) || isNaN(r) || isNaN(i) || isNaN(a) || !We(o)) throw new Error("Invalid arguments passed to jsPDF.roundedRect");
                                    var s = 4 / 3 * (Math.SQRT2 - 1);
                                    return i = Math.min(i, .5 * n), a = Math.min(a, .5 * r), this.lines([
                                        [n - 2 * i, 0],
                                        [i * s, 0, i, a - a * s, i, a],
                                        [0, r - 2 * a],
                                        [0, a * s, -i * s, a, -i, a],
                                        [2 * i - n, 0],
                                        [-i * s, 0, -i, -a * s, -i, -a],
                                        [0, 2 * a - r],
                                        [0, -a * s, i * s, -a, i, -a]
                                    ], t + i, e, [1, 1], o, !0), this
                                }, _.__private__.ellipse = _.ellipse = function(t, e, n, r, i) {
                                    if (isNaN(t) || isNaN(e) || isNaN(n) || isNaN(r) || !We(i)) throw new Error("Invalid arguments passed to jsPDF.ellipse");
                                    var a = 4 / 3 * (Math.SQRT2 - 1) * n,
                                        o = 4 / 3 * (Math.SQRT2 - 1) * r;
                                    return Ze(t + n, e), en(t + n, e - o, t + a, e - r, t, e - r), en(t - a, e - r, t - n, e - o, t - n, e), en(t - n, e + o, t - a, e + r, t, e + r), en(t + a, e + r, t + n, e + o, t + n, e), Ke(i), this
                                }, _.__private__.circle = _.circle = function(t, e, n, r) {
                                    if (isNaN(t) || isNaN(e) || isNaN(n) || !We(r)) throw new Error("Invalid arguments passed to jsPDF.circle");
                                    return this.ellipse(t, e, n, n, r)
                                }, _.setFont = function(t, e) {
                                    return wt = Fe(t, e, {
                                        disableWarning: !1
                                    }), this
                                };
                                var nn = _.__private__.getFont = _.getFont = function() {
                                    return St[Fe.apply(_, arguments)]
                                };
                                _.__private__.getFontList = _.getFontList = function() {
                                    var t, e, n = {};
                                    for (t in At)
                                        if (At.hasOwnProperty(t))
                                            for (e in n[t] = [], At[t]) At[t].hasOwnProperty(e) && n[t].push(e);
                                    return n
                                }, _.addFont = function(t, e, n, r) {
                                    return r = r || "Identity-H", xe.call(this, t, e, n, r)
                                };
                                var rn, an = t.lineWidth || .200025,
                                    on = _.__private__.setLineWidth = _.setLineWidth = function(t) {
                                        return ot(F(T(t)) + " w"), this
                                    };
                                _.__private__.setLineDash = b.API.setLineDash = b.API.setLineDashPattern = function(t, e) {
                                    if (t = t || [], e = e || 0, isNaN(e) || !Array.isArray(t)) throw new Error("Invalid arguments passed to jsPDF.setLineDash");
                                    return t = t.map((function(t) {
                                        return F(T(t))
                                    })).join(" "), e = F(T(e)), ot("[" + t + "] " + e + " d"), this
                                };
                                var sn = _.__private__.getLineHeight = _.getLineHeight = function() {
                                    return ct * rn
                                };
                                _.__private__.getLineHeight = _.getLineHeight = function() {
                                    return ct * rn
                                };
                                var ln = _.__private__.setLineHeightFactor = _.setLineHeightFactor = function(t) {
                                        return "number" == typeof(t = t || 1.15) && (rn = t), this
                                    },
                                    un = _.__private__.getLineHeightFactor = _.getLineHeightFactor = function() {
                                        return rn
                                    };
                                ln(t.lineHeight);
                                var cn = _.__private__.getHorizontalCoordinate = function(t) {
                                        return T(t)
                                    },
                                    fn = _.__private__.getVerticalCoordinate = function(t) {
                                        return P === k.ADVANCED ? t : jt[Y].mediaBox.topRightY - jt[Y].mediaBox.bottomLeftY - T(t)
                                    },
                                    hn = _.__private__.getHorizontalCoordinateString = _.getHorizontalCoordinateString = function(t) {
                                        return F(cn(t))
                                    },
                                    dn = _.__private__.getVerticalCoordinateString = _.getVerticalCoordinateString = function(t) {
                                        return F(fn(t))
                                    },
                                    pn = t.strokeColor || "0 G";
                                _.__private__.getStrokeColor = _.getDrawColor = function() {
                                    return $t(pn)
                                }, _.__private__.setStrokeColor = _.setDrawColor = function(t, e, n, r) {
                                    return pn = Jt({
                                        ch1: t,
                                        ch2: e,
                                        ch3: n,
                                        ch4: r,
                                        pdfColorType: "draw",
                                        precision: 2
                                    }), ot(pn), this
                                };
                                var gn = t.fillColor || "0 g";
                                _.__private__.getFillColor = _.getFillColor = function() {
                                    return $t(gn)
                                }, _.__private__.setFillColor = _.setFillColor = function(t, e, n, r) {
                                    return gn = Jt({
                                        ch1: t,
                                        ch2: e,
                                        ch3: n,
                                        ch4: r,
                                        pdfColorType: "fill",
                                        precision: 2
                                    }), ot(gn), this
                                };
                                var mn = t.textColor || "0 g",
                                    vn = _.__private__.getTextColor = _.getTextColor = function() {
                                        return $t(mn)
                                    };
                                _.__private__.setTextColor = _.setTextColor = function(t, e, n, r) {
                                    return mn = Jt({
                                        ch1: t,
                                        ch2: e,
                                        ch3: n,
                                        ch4: r,
                                        pdfColorType: "text",
                                        precision: 3
                                    }), this
                                };
                                var bn = t.charSpace,
                                    yn = _.__private__.getCharSpace = _.getCharSpace = function() {
                                        return parseFloat(bn || 0)
                                    };
                                _.__private__.setCharSpace = _.setCharSpace = function(t) {
                                    if (isNaN(t)) throw new Error("Invalid argument passed to jsPDF.setCharSpace");
                                    return bn = t, this
                                };
                                var wn = 0;
                                _.CapJoinStyles = {
                                    0: 0,
                                    butt: 0,
                                    but: 0,
                                    miter: 0,
                                    1: 1,
                                    round: 1,
                                    rounded: 1,
                                    circle: 1,
                                    2: 2,
                                    projecting: 2,
                                    project: 2,
                                    square: 2,
                                    bevel: 2
                                }, _.__private__.setLineCap = _.setLineCap = function(t) {
                                    var e = _.CapJoinStyles[t];
                                    if (void 0 === e) throw new Error("Line cap style of '" + t + "' is not recognized. See or extend .CapJoinStyles property for valid styles");
                                    return wn = e, ot(e + " J"), this
                                };
                                var xn = 0;
                                _.__private__.setLineJoin = _.setLineJoin = function(t) {
                                    var e = _.CapJoinStyles[t];
                                    if (void 0 === e) throw new Error("Line join style of '" + t + "' is not recognized. See or extend .CapJoinStyles property for valid styles");
                                    return xn = e, ot(e + " j"), this
                                }, _.__private__.setLineMiterLimit = _.__private__.setMiterLimit = _.setLineMiterLimit = _.setMiterLimit = function(t) {
                                    if (t = t || 0, isNaN(t)) throw new Error("Invalid argument passed to jsPDF.setLineMiterLimit");
                                    return ot(F(T(t)) + " M"), this
                                }, _.GState = p, _.setGState = function(t) {
                                    (t = "string" == typeof t ? Et[Ft[t]] : _n(null, t)).equals(It) || (ot("/" + t.id + " gs"), It = t)
                                };
                                var _n = function(t, e) {
                                    if (!t || !Ft[t]) {
                                        var n = !1;
                                        for (var r in Et)
                                            if (Et.hasOwnProperty(r) && Et[r].equals(e)) {
                                                n = !0;
                                                break
                                            } if (n) e = Et[r];
                                        else {
                                            var i = "GS" + (Object.keys(Et).length + 1).toString(10);
                                            Et[i] = e, e.id = i
                                        }
                                        return t && (Ft[t] = e.id), Mt.publish("addGState", e), e
                                    }
                                };
                                _.addGState = function(t, e) {
                                    return _n(t, e), this
                                }, _.saveGraphicsState = function() {
                                    return ot("q"), kt.push({
                                        key: wt,
                                        size: ct,
                                        color: mn
                                    }), this
                                }, _.restoreGraphicsState = function() {
                                    ot("Q");
                                    var t = kt.pop();
                                    return wt = t.key, ct = t.size, mn = t.color, It = null, this
                                }, _.setCurrentTransformationMatrix = function(t) {
                                    return ot(t.toString() + " cm"), this
                                }, _.comment = function(t) {
                                    return ot("#" + t), this
                                };
                                var Nn = function(t, e) {
                                        var n = t || 0;
                                        Object.defineProperty(this, "x", {
                                            enumerable: !0,
                                            get: function() {
                                                return n
                                            },
                                            set: function(t) {
                                                isNaN(t) || (n = parseFloat(t))
                                            }
                                        });
                                        var r = e || 0;
                                        Object.defineProperty(this, "y", {
                                            enumerable: !0,
                                            get: function() {
                                                return r
                                            },
                                            set: function(t) {
                                                isNaN(t) || (r = parseFloat(t))
                                            }
                                        });
                                        var i = "pt";
                                        return Object.defineProperty(this, "type", {
                                            enumerable: !0,
                                            get: function() {
                                                return i
                                            },
                                            set: function(t) {
                                                i = t.toString()
                                            }
                                        }), this
                                    },
                                    Ln = function(t, e, n, r) {
                                        Nn.call(this, t, e), this.type = "rect";
                                        var i = n || 0;
                                        Object.defineProperty(this, "w", {
                                            enumerable: !0,
                                            get: function() {
                                                return i
                                            },
                                            set: function(t) {
                                                isNaN(t) || (i = parseFloat(t))
                                            }
                                        });
                                        var a = r || 0;
                                        return Object.defineProperty(this, "h", {
                                            enumerable: !0,
                                            get: function() {
                                                return a
                                            },
                                            set: function(t) {
                                                isNaN(t) || (a = parseFloat(t))
                                            }
                                        }), this
                                    },
                                    Sn = function() {
                                        this.page = Ot, this.currentPage = Y, this.pages = et.slice(0), this.pagesContext = jt.slice(0), this.x = _t, this.y = Nt, this.matrix = Lt, this.width = Cn(Y), this.height = Fn(Y), this.outputDestination = rt, this.id = "", this.objectNumber = -1
                                    };
                                Sn.prototype.restore = function() {
                                    Ot = this.page, Y = this.currentPage, jt = this.pagesContext, et = this.pages, _t = this.x, Nt = this.y, Lt = this.matrix, En(Y, this.width), In(Y, this.height), rt = this.outputDestination
                                };
                                var An = function(t, e, n, r, i) {
                                        Dt.push(new Sn), Ot = Y = 0, et = [], _t = t, Nt = e, Lt = i, Ae([n, r])
                                    },
                                    kn = function(t) {
                                        if (!Rt[t]) {
                                            var e = new Sn,
                                                n = "Xo" + (Object.keys(Bt).length + 1).toString(10);
                                            e.id = n, Rt[t] = n, Bt[n] = e, Mt.publish("addFormObject", e), Dt.pop().restore()
                                        }
                                    };
                                for (var Pn in _.beginFormObject = function(t, e, n, r, i) {
                                        return An(t, e, n, r, i), this
                                    }, _.endFormObject = function(t) {
                                        return kn(t), this
                                    }, _.doFormObject = function(t, e) {
                                        var n = Bt[Rt[t]];
                                        return ot("q"), ot(e.toString() + " cm"), ot("/" + n.id + " Do"), ot("Q"), this
                                    }, _.getFormObject = function(t) {
                                        var e = Bt[Rt[t]];
                                        return {
                                            x: e.x,
                                            y: e.y,
                                            width: e.width,
                                            height: e.height,
                                            matrix: e.matrix
                                        }
                                    }, _.save = function(t, e) {
                                        return t = t || "generated.pdf", (e = e || {}).returnPromise = e.returnPromise || !1, !1 === e.returnPromise ? (f(Re(Be()), t), "function" == typeof f.unload && r.setTimeout && setTimeout(f.unload, 911), this) : new Promise((function(e, n) {
                                            try {
                                                var i = f(Re(Be()), t);
                                                "function" == typeof f.unload && r.setTimeout && setTimeout(f.unload, 911), e(i)
                                            } catch (r) {
                                                n(r.message)
                                            }
                                        }))
                                    }, b.API) b.API.hasOwnProperty(Pn) && ("events" === Pn && b.API.events.length ? function(t, e) {
                                    var n, r, i;
                                    for (i = e.length - 1; - 1 !== i; i--) n = e[i][0], r = e[i][1], t.subscribe.apply(t, [n].concat("function" == typeof r ? [r] : r))
                                }(Mt, b.API.events) : _[Pn] = b.API[Pn]);
                                var Cn = _.getPageWidth = function(t) {
                                        return (jt[t = t || Y].mediaBox.topRightX - jt[t].mediaBox.bottomLeftX) / xt
                                    },
                                    En = _.setPageWidth = function(t, e) {
                                        jt[t].mediaBox.topRightX = e * xt + jt[t].mediaBox.bottomLeftX
                                    },
                                    Fn = _.getPageHeight = function(t) {
                                        return (jt[t = t || Y].mediaBox.topRightY - jt[t].mediaBox.bottomLeftY) / xt
                                    },
                                    In = _.setPageHeight = function(t, e) {
                                        jt[t].mediaBox.topRightY = e * xt + jt[t].mediaBox.bottomLeftY
                                    };
                                return _.internal = {
                                    pdfEscape: Se,
                                    getStyle: Ge,
                                    getFont: nn,
                                    getFontSize: ht,
                                    getCharSpace: yn,
                                    getTextColor: vn,
                                    getLineHeight: sn,
                                    getLineHeightFactor: un,
                                    write: st,
                                    getHorizontalCoordinate: cn,
                                    getVerticalCoordinate: fn,
                                    getCoordinateString: hn,
                                    getVerticalCoordinateString: dn,
                                    collections: {},
                                    newObject: Vt,
                                    newAdditionalObject: Yt,
                                    newObjectDeferred: Wt,
                                    newObjectDeferredBegin: Gt,
                                    getFilters: Qt,
                                    putStream: Zt,
                                    events: Mt,
                                    scaleFactor: xt,
                                    pageSize: {
                                        getWidth: function() {
                                            return Cn(Y)
                                        },
                                        setWidth: function(t) {
                                            En(Y, t)
                                        },
                                        getHeight: function() {
                                            return Fn(Y)
                                        },
                                        setHeight: function(t) {
                                            In(Y, t)
                                        }
                                    },
                                    output: De,
                                    getNumberOfPages: Ee,
                                    pages: et,
                                    out: ot,
                                    f2: j,
                                    f3: M,
                                    getPageInfo: ze,
                                    getPageInfoByObjId: Ue,
                                    getCurrentPageInfo: He,
                                    getPDFVersion: L,
                                    Point: Nn,
                                    Rectangle: Ln,
                                    Matrix: qt,
                                    hasHotfix: qe
                                }, Object.defineProperty(_.internal.pageSize, "width", {
                                    get: function() {
                                        return Cn(Y)
                                    },
                                    set: function(t) {
                                        En(Y, t)
                                    },
                                    enumerable: !0,
                                    configurable: !0
                                }), Object.defineProperty(_.internal.pageSize, "height", {
                                    get: function() {
                                        return Fn(Y)
                                    },
                                    set: function(t) {
                                        In(Y, t)
                                    },
                                    enumerable: !0,
                                    configurable: !0
                                }), _e.call(_, ut), wt = "F1", ke(o, n), Mt.publish("initialized"), _
                            }
                            u = r.atob, c = r.btoa, p.prototype.equals = function(t) {
                                var e, n = "id,objectNumber,equals";
                                if (!t || typeof t != typeof this) return !1;
                                var r = 0;
                                for (e in this)
                                    if (!(n.indexOf(e) >= 0)) {
                                        if (this.hasOwnProperty(e) && !t.hasOwnProperty(e)) return !1;
                                        if (this[e] !== t[e]) return !1;
                                        r++
                                    } for (e in t) t.hasOwnProperty(e) && n.indexOf(e) < 0 && r--;
                                return 0 === r
                            }, b.API = {
                                events: []
                            }, b.version = "2.1.1";
                            var y, w = b.API,
                                x = 1,
                                _ = function(t) {
                                    return t.replace(/\\/g, "\\\\").replace(/\(/g, "\\(").replace(/\)/g, "\\)")
                                },
                                N = function(t) {
                                    return t.replace(/\\\\/g, "\\").replace(/\\\(/g, "(").replace(/\\\)/g, ")")
                                },
                                L = function(t) {
                                    return t.toFixed(2)
                                },
                                S = function(t) {
                                    return t.toFixed(5)
                                };
                            w.__acroform__ = {};
                            var A = function(t, e) {
                                    t.prototype = Object.create(e.prototype), t.prototype.constructor = t
                                },
                                k = function(t) {
                                    return t * x
                                },
                                P = function(t) {
                                    var e = new J,
                                        n = ft.internal.getHeight(t) || 0,
                                        r = ft.internal.getWidth(t) || 0;
                                    return e.BBox = [0, 0, Number(L(r)), Number(L(n))], e
                                },
                                C = w.__acroform__.setBit = function(t, e) {
                                    if (t = t || 0, e = e || 0, isNaN(t) || isNaN(e)) throw new Error("Invalid arguments passed to jsPDF.API.__acroform__.setBit");
                                    return t | 1 << e
                                },
                                E = w.__acroform__.clearBit = function(t, e) {
                                    if (t = t || 0, e = e || 0, isNaN(t) || isNaN(e)) throw new Error("Invalid arguments passed to jsPDF.API.__acroform__.clearBit");
                                    return t & ~(1 << e)
                                },
                                F = w.__acroform__.getBit = function(t, e) {
                                    if (isNaN(t) || isNaN(e)) throw new Error("Invalid arguments passed to jsPDF.API.__acroform__.getBit");
                                    return 0 == (t & 1 << e) ? 0 : 1
                                },
                                I = w.__acroform__.getBitForPdf = function(t, e) {
                                    if (isNaN(t) || isNaN(e)) throw new Error("Invalid arguments passed to jsPDF.API.__acroform__.getBitForPdf");
                                    return F(t, e - 1)
                                },
                                O = w.__acroform__.setBitForPdf = function(t, e) {
                                    if (isNaN(t) || isNaN(e)) throw new Error("Invalid arguments passed to jsPDF.API.__acroform__.setBitForPdf");
                                    return C(t, e - 1)
                                },
                                j = w.__acroform__.clearBitForPdf = function(t, e) {
                                    if (isNaN(t) || isNaN(e)) throw new Error("Invalid arguments passed to jsPDF.API.__acroform__.clearBitForPdf");
                                    return E(t, e - 1)
                                },
                                M = w.__acroform__.calculateCoordinates = function(t) {
                                    var e = this.internal.getHorizontalCoordinate,
                                        n = this.internal.getVerticalCoordinate,
                                        r = t[0],
                                        i = t[1],
                                        a = t[2],
                                        o = t[3],
                                        s = {};
                                    return s.lowerLeft_X = e(r) || 0, s.lowerLeft_Y = n(i + o) || 0, s.upperRight_X = e(r + a) || 0, s.upperRight_Y = n(i) || 0, [Number(L(s.lowerLeft_X)), Number(L(s.lowerLeft_Y)), Number(L(s.upperRight_X)), Number(L(s.upperRight_Y))]
                                },
                                T = function(t) {
                                    if (t.appearanceStreamContent) return t.appearanceStreamContent;
                                    if (t.V || t.DV) {
                                        var e = [],
                                            n = t.V || t.DV,
                                            r = B(t, n),
                                            i = y.internal.getFont(t.fontName, t.fontStyle).id;
                                        e.push("/Tx BMC"), e.push("q"), e.push("BT"), e.push(y.__private__.encodeColorString(t.color)), e.push("/" + i + " " + L(r.fontSize) + " Tf"), e.push("1 0 0 1 0 0 Tm"), e.push(r.text), e.push("ET"), e.push("Q"), e.push("EMC");
                                        var a = new P(t);
                                        return a.stream = e.join("\n"), a
                                    }
                                },
                                B = function(t, e) {
                                    var n = 0 === t.fontSize ? t.maxFontSize : t.fontSize,
                                        r = {
                                            text: "",
                                            fontSize: ""
                                        },
                                        i = (e = ")" == (e = "(" == e.substr(0, 1) ? e.substr(1) : e).substr(e.length - 1) ? e.substr(0, e.length - 1) : e).split(" "),
                                        a = n,
                                        o = ft.internal.getHeight(t) || 0;
                                    o = o < 0 ? -o : o;
                                    var s = ft.internal.getWidth(t) || 0;
                                    s = s < 0 ? -s : s;
                                    var l = function(e, n, r) {
                                        if (e + 1 < i.length) {
                                            var a = n + " " + i[e + 1];
                                            return R(a, t, r).width <= s - 4
                                        }
                                        return !1
                                    };
                                    a++;
                                    t: for (; a > 0;) {
                                        e = "", a--;
                                        var u, c, f = R("3", t, a).height,
                                            h = t.multiline ? o - a : (o - f) / 2,
                                            d = h += 2,
                                            p = 0,
                                            g = 0;
                                        if (a <= 0) {
                                            e = "(...) Tj\n", e += "% Width of Text: " + R(e, t, a = 12).width + ", FieldWidth:" + s + "\n";
                                            break
                                        }
                                        var m = "",
                                            v = 0;
                                        for (var b in i)
                                            if (i.hasOwnProperty(b)) {
                                                m = " " == (m += i[b] + " ").substr(m.length - 1) ? m.substr(0, m.length - 1) : m;
                                                var y = parseInt(b),
                                                    w = l(y, m, a),
                                                    x = b >= i.length - 1;
                                                if (w && !x) {
                                                    m += " ";
                                                    continue
                                                }
                                                if (w || x) {
                                                    if (x) g = y;
                                                    else if (t.multiline && (f + 2) * (v + 2) + 2 > o) continue t
                                                } else {
                                                    if (!t.multiline) continue t;
                                                    if ((f + 2) * (v + 2) + 2 > o) continue t;
                                                    g = y
                                                }
                                                for (var N = "", S = p; S <= g; S++) N += i[S] + " ";
                                                switch (N = " " == N.substr(N.length - 1) ? N.substr(0, N.length - 1) : N, c = R(N, t, a).width, t.textAlign) {
                                                    case "right":
                                                        u = s - c - 2;
                                                        break;
                                                    case "center":
                                                        u = (s - c) / 2;
                                                        break;
                                                    case "left":
                                                    default:
                                                        u = 2
                                                }
                                                e += L(u) + " " + L(d) + " Td\n", e += "(" + _(N) + ") Tj\n", e += -L(u) + " 0 Td\n", d = -(a + 2), c = 0, p = g + 1, v++, m = ""
                                            } break
                                    }
                                    return r.text = e, r.fontSize = a, r
                                },
                                R = function(t, e, n) {
                                    var r = y.internal.getFont(e.fontName, e.fontStyle),
                                        i = y.getStringUnitWidth(t, {
                                            font: r,
                                            fontSize: parseFloat(n),
                                            charSpace: 0
                                        }) * parseFloat(n);
                                    return {
                                        height: y.getStringUnitWidth("3", {
                                            font: r,
                                            fontSize: parseFloat(n),
                                            charSpace: 0
                                        }) * parseFloat(n) * 1.5,
                                        width: i
                                    }
                                },
                                D = {
                                    fields: [],
                                    xForms: [],
                                    acroFormDictionaryRoot: null,
                                    printedOut: !1,
                                    internal: null,
                                    isInitialized: !1
                                },
                                q = function() {
                                    y.internal.acroformPlugin.acroFormDictionaryRoot.objId = void 0;
                                    var t = y.internal.acroformPlugin.acroFormDictionaryRoot.Fields;
                                    for (var e in t)
                                        if (t.hasOwnProperty(e)) {
                                            var n = t[e];
                                            n.objId = void 0, n.hasAnnotation && U.call(y, n)
                                        }
                                },
                                z = function(t) {
                                    y.internal.acroformPlugin.printedOut && (y.internal.acroformPlugin.printedOut = !1, y.internal.acroformPlugin.acroFormDictionaryRoot = null), y.internal.acroformPlugin.acroFormDictionaryRoot || Y.call(y), y.internal.acroformPlugin.acroFormDictionaryRoot.Fields.push(t)
                                },
                                U = function(t) {
                                    var e = {
                                        type: "reference",
                                        object: t
                                    };
                                    void 0 === y.internal.getPageInfo(t.page).pageContext.annotations.find((function(t) {
                                        return t.type === e.type && t.object === e.object
                                    })) && y.internal.getPageInfo(t.page).pageContext.annotations.push(e)
                                },
                                H = function() {
                                    if (void 0 === y.internal.acroformPlugin.acroFormDictionaryRoot) throw new Error("putCatalogCallback: Root missing.");
                                    y.internal.write("/AcroForm " + y.internal.acroformPlugin.acroFormDictionaryRoot.objId + " 0 R")
                                },
                                V = function() {
                                    y.internal.events.unsubscribe(y.internal.acroformPlugin.acroFormDictionaryRoot._eventID), delete y.internal.acroformPlugin.acroFormDictionaryRoot._eventID, y.internal.acroformPlugin.printedOut = !0
                                },
                                W = function(t) {
                                    var e = !t;
                                    for (var n in t || (y.internal.newObjectDeferredBegin(y.internal.acroformPlugin.acroFormDictionaryRoot.objId, !0), y.internal.acroformPlugin.acroFormDictionaryRoot.putStream()), t = t || y.internal.acroformPlugin.acroFormDictionaryRoot.Kids)
                                        if (t.hasOwnProperty(n)) {
                                            var r = t[n],
                                                i = [],
                                                a = r.Rect;
                                            if (r.Rect && (r.Rect = M.call(this, r.Rect)), y.internal.newObjectDeferredBegin(r.objId, !0), r.DA = ft.createDefaultAppearanceStream(r), "object" == typeof r && "function" == typeof r.getKeyValueListForStream && (i = r.getKeyValueListForStream()), r.Rect = a, r.hasAppearanceStream && !r.appearanceStreamContent) {
                                                var o = T.call(this, r);
                                                i.push({
                                                    key: "AP",
                                                    value: "<</N " + o + ">>"
                                                }), y.internal.acroformPlugin.xForms.push(o)
                                            }
                                            if (r.appearanceStreamContent) {
                                                var s = "";
                                                for (var l in r.appearanceStreamContent)
                                                    if (r.appearanceStreamContent.hasOwnProperty(l)) {
                                                        var u = r.appearanceStreamContent[l];
                                                        if (s += "/" + l + " ", s += "<<", Object.keys(u).length >= 1 || Array.isArray(u)) {
                                                            for (var n in u)
                                                                if (u.hasOwnProperty(n)) {
                                                                    var c = u[n];
                                                                    "function" == typeof c && (c = c.call(this, r)), s += "/" + n + " " + c + " ", y.internal.acroformPlugin.xForms.indexOf(c) >= 0 || y.internal.acroformPlugin.xForms.push(c)
                                                                }
                                                        } else "function" == typeof(c = u) && (c = c.call(this, r)), s += "/" + n + " " + c, y.internal.acroformPlugin.xForms.indexOf(c) >= 0 || y.internal.acroformPlugin.xForms.push(c);
                                                        s += ">>"
                                                    } i.push({
                                                    key: "AP",
                                                    value: "<<\n" + s + ">>"
                                                })
                                            }
                                            y.internal.putStream({
                                                additionalKeyValues: i
                                            }), y.internal.out("endobj")
                                        } e && G.call(this, y.internal.acroformPlugin.xForms)
                                },
                                G = function(t) {
                                    for (var e in t)
                                        if (t.hasOwnProperty(e)) {
                                            var n = e,
                                                r = t[e];
                                            y.internal.newObjectDeferredBegin(r && r.objId, !0), "object" == typeof r && "function" == typeof r.putStream && r.putStream(), delete t[n]
                                        }
                                },
                                Y = function() {
                                    if (void 0 !== this.internal && (void 0 === this.internal.acroformPlugin || !1 === this.internal.acroformPlugin.isInitialized)) {
                                        if (y = this, Z.FieldNum = 0, this.internal.acroformPlugin = JSON.parse(JSON.stringify(D)), this.internal.acroformPlugin.acroFormDictionaryRoot) throw new Error("Exception while creating AcroformDictionary");
                                        x = y.internal.scaleFactor, y.internal.acroformPlugin.acroFormDictionaryRoot = new Q, y.internal.acroformPlugin.acroFormDictionaryRoot._eventID = y.internal.events.subscribe("postPutResources", V), y.internal.events.subscribe("buildDocument", q), y.internal.events.subscribe("putCatalog", H), y.internal.events.subscribe("postPutPages", W), y.internal.acroformPlugin.isInitialized = !0
                                    }
                                },
                                X = w.__acroform__.arrayToPdfArray = function(t) {
                                    if (Array.isArray(t)) {
                                        for (var e = "[", n = 0; n < t.length; n++) switch (0 !== n && (e += " "), typeof t[n]) {
                                            case "boolean":
                                            case "number":
                                            case "object":
                                                e += t[n].toString();
                                                break;
                                            case "string":
                                                "/" !== t[n].substr(0, 1) ? e += "(" + _(t[n].toString()) + ")" : e += t[n].toString()
                                        }
                                        return e + "]"
                                    }
                                    throw new Error("Invalid argument passed to jsPDF.__acroform__.arrayToPdfArray")
                                },
                                K = function(t) {
                                    return (t = t || "").toString(), "(" + _(t) + ")"
                                },
                                $ = function() {
                                    var t;
                                    Object.defineProperty(this, "objId", {
                                        configurable: !0,
                                        get: function() {
                                            return t || (t = y.internal.newObjectDeferred()), t
                                        },
                                        set: function(e) {
                                            t = e
                                        }
                                    })
                                };
                            $.prototype.toString = function() {
                                return this.objId + " 0 R"
                            }, $.prototype.putStream = function() {
                                var t = this.getKeyValueListForStream();
                                y.internal.putStream({
                                    data: this.stream,
                                    additionalKeyValues: t
                                }), y.internal.out("endobj")
                            }, $.prototype.getKeyValueListForStream = function() {
                                return function(t) {
                                    var e = [],
                                        n = Object.getOwnPropertyNames(t).filter((function(t) {
                                            return "content" != t && "appearanceStreamContent" != t && "_" != t.substring(0, 1)
                                        }));
                                    for (var r in n)
                                        if (!1 === Object.getOwnPropertyDescriptor(t, n[r]).configurable) {
                                            var i = n[r],
                                                a = t[i];
                                            a && (Array.isArray(a) ? e.push({
                                                key: i,
                                                value: X(a)
                                            }) : a instanceof $ ? e.push({
                                                key: i,
                                                value: a.objId + " 0 R"
                                            }) : "function" != typeof a && e.push({
                                                key: i,
                                                value: a
                                            }))
                                        } return e
                                }(this)
                            };
                            var J = function() {
                                $.call(this), Object.defineProperty(this, "Type", {
                                    value: "/XObject",
                                    configurable: !1,
                                    writeable: !0
                                }), Object.defineProperty(this, "Subtype", {
                                    value: "/Form",
                                    configurable: !1,
                                    writeable: !0
                                }), Object.defineProperty(this, "FormType", {
                                    value: 1,
                                    configurable: !1,
                                    writeable: !0
                                });
                                var t, e = [];
                                Object.defineProperty(this, "BBox", {
                                    configurable: !1,
                                    writeable: !0,
                                    get: function() {
                                        return e
                                    },
                                    set: function(t) {
                                        e = t
                                    }
                                }), Object.defineProperty(this, "Resources", {
                                    value: "2 0 R",
                                    configurable: !1,
                                    writeable: !0
                                }), Object.defineProperty(this, "stream", {
                                    enumerable: !1,
                                    configurable: !0,
                                    set: function(e) {
                                        t = e.trim()
                                    },
                                    get: function() {
                                        return t || null
                                    }
                                })
                            };
                            A(J, $);
                            var Q = function() {
                                $.call(this);
                                var t, e = [];
                                Object.defineProperty(this, "Kids", {
                                    enumerable: !1,
                                    configurable: !0,
                                    get: function() {
                                        return e.length > 0 ? e : void 0
                                    }
                                }), Object.defineProperty(this, "Fields", {
                                    enumerable: !1,
                                    configurable: !1,
                                    get: function() {
                                        return e
                                    }
                                }), Object.defineProperty(this, "DA", {
                                    enumerable: !1,
                                    configurable: !1,
                                    get: function() {
                                        if (t) return "(" + t + ")"
                                    },
                                    set: function(e) {
                                        t = e
                                    }
                                })
                            };
                            A(Q, $);
                            var Z = function t() {
                                $.call(this);
                                var e = 4;
                                Object.defineProperty(this, "F", {
                                    enumerable: !1,
                                    configurable: !1,
                                    get: function() {
                                        return e
                                    },
                                    set: function(t) {
                                        if (isNaN(t)) throw new Error('Invalid value "' + t + '" for attribute F supplied.');
                                        e = t
                                    }
                                }), Object.defineProperty(this, "showWhenPrinted", {
                                    enumerable: !0,
                                    configurable: !0,
                                    get: function() {
                                        return Boolean(I(e, 3))
                                    },
                                    set: function(t) {
                                        !0 === Boolean(t) ? this.F = O(e, 3) : this.F = j(e, 3)
                                    }
                                });
                                var n = 0;
                                Object.defineProperty(this, "Ff", {
                                    enumerable: !1,
                                    configurable: !1,
                                    get: function() {
                                        return n
                                    },
                                    set: function(t) {
                                        if (isNaN(t)) throw new Error('Invalid value "' + t + '" for attribute Ff supplied.');
                                        n = t
                                    }
                                });
                                var r = [];
                                Object.defineProperty(this, "Rect", {
                                    enumerable: !1,
                                    configurable: !1,
                                    get: function() {
                                        if (0 !== r.length) return r
                                    },
                                    set: function(t) {
                                        r = void 0 !== t ? t : []
                                    }
                                }), Object.defineProperty(this, "x", {
                                    enumerable: !0,
                                    configurable: !0,
                                    get: function() {
                                        return !r || isNaN(r[0]) ? 0 : r[0]
                                    },
                                    set: function(t) {
                                        r[0] = t
                                    }
                                }), Object.defineProperty(this, "y", {
                                    enumerable: !0,
                                    configurable: !0,
                                    get: function() {
                                        return !r || isNaN(r[1]) ? 0 : r[1]
                                    },
                                    set: function(t) {
                                        r[1] = t
                                    }
                                }), Object.defineProperty(this, "width", {
                                    enumerable: !0,
                                    configurable: !0,
                                    get: function() {
                                        return !r || isNaN(r[2]) ? 0 : r[2]
                                    },
                                    set: function(t) {
                                        r[2] = t
                                    }
                                }), Object.defineProperty(this, "height", {
                                    enumerable: !0,
                                    configurable: !0,
                                    get: function() {
                                        return !r || isNaN(r[3]) ? 0 : r[3]
                                    },
                                    set: function(t) {
                                        r[3] = t
                                    }
                                });
                                var i = "";
                                Object.defineProperty(this, "FT", {
                                    enumerable: !0,
                                    configurable: !1,
                                    get: function() {
                                        return i
                                    },
                                    set: function(t) {
                                        switch (t) {
                                            case "/Btn":
                                            case "/Tx":
                                            case "/Ch":
                                            case "/Sig":
                                                i = t;
                                                break;
                                            default:
                                                throw new Error('Invalid value "' + t + '" for attribute FT supplied.')
                                        }
                                    }
                                });
                                var a = null;
                                Object.defineProperty(this, "T", {
                                    enumerable: !0,
                                    configurable: !1,
                                    get: function() {
                                        if (!a || a.length < 1) {
                                            if (this instanceof st) return;
                                            a = "FieldObject" + t.FieldNum++
                                        }
                                        return "(" + _(a) + ")"
                                    },
                                    set: function(t) {
                                        a = t.toString()
                                    }
                                }), Object.defineProperty(this, "fieldName", {
                                    configurable: !0,
                                    enumerable: !0,
                                    get: function() {
                                        return a
                                    },
                                    set: function(t) {
                                        a = t
                                    }
                                });
                                var o = "helvetica";
                                Object.defineProperty(this, "fontName", {
                                    enumerable: !0,
                                    configurable: !0,
                                    get: function() {
                                        return o
                                    },
                                    set: function(t) {
                                        o = t
                                    }
                                });
                                var s = "normal";
                                Object.defineProperty(this, "fontStyle", {
                                    enumerable: !0,
                                    configurable: !0,
                                    get: function() {
                                        return s
                                    },
                                    set: function(t) {
                                        s = t
                                    }
                                });
                                var l = 0;
                                Object.defineProperty(this, "fontSize", {
                                    enumerable: !0,
                                    configurable: !0,
                                    get: function() {
                                        return l
                                    },
                                    set: function(t) {
                                        l = t
                                    }
                                });
                                var u = void 0;
                                Object.defineProperty(this, "maxFontSize", {
                                    enumerable: !0,
                                    configurable: !0,
                                    get: function() {
                                        return void 0 === u ? 50 / x : u
                                    },
                                    set: function(t) {
                                        u = t
                                    }
                                });
                                var c = "black";
                                Object.defineProperty(this, "color", {
                                    enumerable: !0,
                                    configurable: !0,
                                    get: function() {
                                        return c
                                    },
                                    set: function(t) {
                                        c = t
                                    }
                                });
                                var f = "/F1 0 Tf 0 g";
                                Object.defineProperty(this, "DA", {
                                    enumerable: !0,
                                    configurable: !1,
                                    get: function() {
                                        if (!(!f || this instanceof st || this instanceof ut)) return K(f)
                                    },
                                    set: function(t) {
                                        t = t.toString(), f = t
                                    }
                                });
                                var h = null;
                                Object.defineProperty(this, "DV", {
                                    enumerable: !1,
                                    configurable: !1,
                                    get: function() {
                                        if (h) return this instanceof it == 0 ? K(h) : h
                                    },
                                    set: function(t) {
                                        t = t.toString(), h = this instanceof it == 0 ? "(" === t.substr(0, 1) ? N(t.substr(1, t.length - 2)) : N(t) : t
                                    }
                                }), Object.defineProperty(this, "defaultValue", {
                                    enumerable: !0,
                                    configurable: !0,
                                    get: function() {
                                        return this instanceof it == 1 ? N(h.substr(1, h.length - 1)) : h
                                    },
                                    set: function(t) {
                                        t = t.toString(), h = this instanceof it == 1 ? "/" + t : t
                                    }
                                });
                                var d = null;
                                Object.defineProperty(this, "V", {
                                    enumerable: !1,
                                    configurable: !1,
                                    get: function() {
                                        if (d) return this instanceof it == 0 ? K(d) : d
                                    },
                                    set: function(t) {
                                        t = t.toString(), d = this instanceof it == 0 ? "(" === t.substr(0, 1) ? N(t.substr(1, t.length - 2)) : N(t) : t
                                    }
                                }), Object.defineProperty(this, "value", {
                                    enumerable: !0,
                                    configurable: !0,
                                    get: function() {
                                        return this instanceof it == 1 ? N(d.substr(1, d.length - 1)) : d
                                    },
                                    set: function(t) {
                                        t = t.toString(), d = this instanceof it == 1 ? "/" + t : t
                                    }
                                }), Object.defineProperty(this, "hasAnnotation", {
                                    enumerable: !0,
                                    configurable: !0,
                                    get: function() {
                                        return this.Rect
                                    }
                                }), Object.defineProperty(this, "Type", {
                                    enumerable: !0,
                                    configurable: !1,
                                    get: function() {
                                        return this.hasAnnotation ? "/Annot" : null
                                    }
                                }), Object.defineProperty(this, "Subtype", {
                                    enumerable: !0,
                                    configurable: !1,
                                    get: function() {
                                        return this.hasAnnotation ? "/Widget" : null
                                    }
                                });
                                var p, g = !1;
                                Object.defineProperty(this, "hasAppearanceStream", {
                                    enumerable: !0,
                                    configurable: !0,
                                    writeable: !0,
                                    get: function() {
                                        return g
                                    },
                                    set: function(t) {
                                        t = Boolean(t), g = t
                                    }
                                }), Object.defineProperty(this, "page", {
                                    enumerable: !0,
                                    configurable: !0,
                                    writeable: !0,
                                    get: function() {
                                        if (p) return p
                                    },
                                    set: function(t) {
                                        p = t
                                    }
                                }), Object.defineProperty(this, "readOnly", {
                                    enumerable: !0,
                                    configurable: !0,
                                    get: function() {
                                        return Boolean(I(this.Ff, 1))
                                    },
                                    set: function(t) {
                                        !0 === Boolean(t) ? this.Ff = O(this.Ff, 1) : this.Ff = j(this.Ff, 1)
                                    }
                                }), Object.defineProperty(this, "required", {
                                    enumerable: !0,
                                    configurable: !0,
                                    get: function() {
                                        return Boolean(I(this.Ff, 2))
                                    },
                                    set: function(t) {
                                        !0 === Boolean(t) ? this.Ff = O(this.Ff, 2) : this.Ff = j(this.Ff, 2)
                                    }
                                }), Object.defineProperty(this, "noExport", {
                                    enumerable: !0,
                                    configurable: !0,
                                    get: function() {
                                        return Boolean(I(this.Ff, 3))
                                    },
                                    set: function(t) {
                                        !0 === Boolean(t) ? this.Ff = O(this.Ff, 3) : this.Ff = j(this.Ff, 3)
                                    }
                                });
                                var m = null;
                                Object.defineProperty(this, "Q", {
                                    enumerable: !0,
                                    configurable: !1,
                                    get: function() {
                                        if (null !== m) return m
                                    },
                                    set: function(t) {
                                        if (-1 === [0, 1, 2].indexOf(t)) throw new Error('Invalid value "' + t + '" for attribute Q supplied.');
                                        m = t
                                    }
                                }), Object.defineProperty(this, "textAlign", {
                                    get: function() {
                                        var t;
                                        switch (m) {
                                            case 0:
                                            default:
                                                t = "left";
                                                break;
                                            case 1:
                                                t = "center";
                                                break;
                                            case 2:
                                                t = "right"
                                        }
                                        return t
                                    },
                                    configurable: !0,
                                    enumerable: !0,
                                    set: function(t) {
                                        switch (t) {
                                            case "right":
                                            case 2:
                                                m = 2;
                                                break;
                                            case "center":
                                            case 1:
                                                m = 1;
                                                break;
                                            case "left":
                                            case 0:
                                            default:
                                                m = 0
                                        }
                                    }
                                })
                            };
                            A(Z, $);
                            var tt = function() {
                                Z.call(this), this.FT = "/Ch", this.V = "()", this.fontName = "zapfdingbats";
                                var t = 0;
                                Object.defineProperty(this, "TI", {
                                    enumerable: !0,
                                    configurable: !1,
                                    get: function() {
                                        return t
                                    },
                                    set: function(e) {
                                        t = e
                                    }
                                }), Object.defineProperty(this, "topIndex", {
                                    enumerable: !0,
                                    configurable: !0,
                                    get: function() {
                                        return t
                                    },
                                    set: function(e) {
                                        t = e
                                    }
                                });
                                var e = [];
                                Object.defineProperty(this, "Opt", {
                                    enumerable: !0,
                                    configurable: !1,
                                    get: function() {
                                        return X(e)
                                    },
                                    set: function(t) {
                                        var n, r;
                                        r = [], "string" == typeof(n = t) && (r = function(t, e, n) {
                                            n || (n = 1);
                                            for (var r, i = []; r = e.exec(t);) i.push(r[n]);
                                            return i
                                        }(n, /\((.*?)\)/g)), e = r
                                    }
                                }), this.getOptions = function() {
                                    return e
                                }, this.setOptions = function(t) {
                                    e = t, this.sort && e.sort()
                                }, this.addOption = function(t) {
                                    t = (t = t || "").toString(), e.push(t), this.sort && e.sort()
                                }, this.removeOption = function(t, n) {
                                    for (n = n || !1, t = (t = t || "").toString(); - 1 !== e.indexOf(t) && (e.splice(e.indexOf(t), 1), !1 !== n););
                                }, Object.defineProperty(this, "combo", {
                                    enumerable: !0,
                                    configurable: !0,
                                    get: function() {
                                        return Boolean(I(this.Ff, 18))
                                    },
                                    set: function(t) {
                                        !0 === Boolean(t) ? this.Ff = O(this.Ff, 18) : this.Ff = j(this.Ff, 18)
                                    }
                                }), Object.defineProperty(this, "edit", {
                                    enumerable: !0,
                                    configurable: !0,
                                    get: function() {
                                        return Boolean(I(this.Ff, 19))
                                    },
                                    set: function(t) {
                                        !0 === this.combo && (!0 === Boolean(t) ? this.Ff = O(this.Ff, 19) : this.Ff = j(this.Ff, 19))
                                    }
                                }), Object.defineProperty(this, "sort", {
                                    enumerable: !0,
                                    configurable: !0,
                                    get: function() {
                                        return Boolean(I(this.Ff, 20))
                                    },
                                    set: function(t) {
                                        !0 === Boolean(t) ? (this.Ff = O(this.Ff, 20), e.sort()) : this.Ff = j(this.Ff, 20)
                                    }
                                }), Object.defineProperty(this, "multiSelect", {
                                    enumerable: !0,
                                    configurable: !0,
                                    get: function() {
                                        return Boolean(I(this.Ff, 22))
                                    },
                                    set: function(t) {
                                        !0 === Boolean(t) ? this.Ff = O(this.Ff, 22) : this.Ff = j(this.Ff, 22)
                                    }
                                }), Object.defineProperty(this, "doNotSpellCheck", {
                                    enumerable: !0,
                                    configurable: !0,
                                    get: function() {
                                        return Boolean(I(this.Ff, 23))
                                    },
                                    set: function(t) {
                                        !0 === Boolean(t) ? this.Ff = O(this.Ff, 23) : this.Ff = j(this.Ff, 23)
                                    }
                                }), Object.defineProperty(this, "commitOnSelChange", {
                                    enumerable: !0,
                                    configurable: !0,
                                    get: function() {
                                        return Boolean(I(this.Ff, 27))
                                    },
                                    set: function(t) {
                                        !0 === Boolean(t) ? this.Ff = O(this.Ff, 27) : this.Ff = j(this.Ff, 27)
                                    }
                                }), this.hasAppearanceStream = !1
                            };
                            A(tt, Z);
                            var et = function() {
                                tt.call(this), this.fontName = "helvetica", this.combo = !1
                            };
                            A(et, tt);
                            var nt = function() {
                                et.call(this), this.combo = !0
                            };
                            A(nt, et);
                            var rt = function() {
                                nt.call(this), this.edit = !0
                            };
                            A(rt, nt);
                            var it = function() {
                                Z.call(this), this.FT = "/Btn", Object.defineProperty(this, "noToggleToOff", {
                                    enumerable: !0,
                                    configurable: !0,
                                    get: function() {
                                        return Boolean(I(this.Ff, 15))
                                    },
                                    set: function(t) {
                                        !0 === Boolean(t) ? this.Ff = O(this.Ff, 15) : this.Ff = j(this.Ff, 15)
                                    }
                                }), Object.defineProperty(this, "radio", {
                                    enumerable: !0,
                                    configurable: !0,
                                    get: function() {
                                        return Boolean(I(this.Ff, 16))
                                    },
                                    set: function(t) {
                                        !0 === Boolean(t) ? this.Ff = O(this.Ff, 16) : this.Ff = j(this.Ff, 16)
                                    }
                                }), Object.defineProperty(this, "pushButton", {
                                    enumerable: !0,
                                    configurable: !0,
                                    get: function() {
                                        return Boolean(I(this.Ff, 17))
                                    },
                                    set: function(t) {
                                        !0 === Boolean(t) ? this.Ff = O(this.Ff, 17) : this.Ff = j(this.Ff, 17)
                                    }
                                }), Object.defineProperty(this, "radioIsUnison", {
                                    enumerable: !0,
                                    configurable: !0,
                                    get: function() {
                                        return Boolean(I(this.Ff, 26))
                                    },
                                    set: function(t) {
                                        !0 === Boolean(t) ? this.Ff = O(this.Ff, 26) : this.Ff = j(this.Ff, 26)
                                    }
                                });
                                var t, e = {};
                                Object.defineProperty(this, "MK", {
                                    enumerable: !1,
                                    configurable: !1,
                                    get: function() {
                                        if (0 !== Object.keys(e).length) {
                                            var t, n = [];
                                            for (t in n.push("<<"), e) n.push("/" + t + " (" + e[t] + ")");
                                            return n.push(">>"), n.join("\n")
                                        }
                                    },
                                    set: function(t) {
                                        "object" == typeof t && (e = t)
                                    }
                                }), Object.defineProperty(this, "caption", {
                                    enumerable: !0,
                                    configurable: !0,
                                    get: function() {
                                        return e.CA || ""
                                    },
                                    set: function(t) {
                                        "string" == typeof t && (e.CA = t)
                                    }
                                }), Object.defineProperty(this, "AS", {
                                    enumerable: !1,
                                    configurable: !1,
                                    get: function() {
                                        return t
                                    },
                                    set: function(e) {
                                        t = e
                                    }
                                }), Object.defineProperty(this, "appearanceState", {
                                    enumerable: !0,
                                    configurable: !0,
                                    get: function() {
                                        return t.substr(1, t.length - 1)
                                    },
                                    set: function(e) {
                                        t = "/" + e
                                    }
                                })
                            };
                            A(it, Z);
                            var at = function() {
                                it.call(this), this.pushButton = !0
                            };
                            A(at, it);
                            var ot = function() {
                                it.call(this), this.radio = !0, this.pushButton = !1;
                                var t = [];
                                Object.defineProperty(this, "Kids", {
                                    enumerable: !0,
                                    configurable: !1,
                                    get: function() {
                                        return t
                                    },
                                    set: function(e) {
                                        t = void 0 !== e ? e : []
                                    }
                                })
                            };
                            A(ot, it);
                            var st = function() {
                                var t, e;
                                Z.call(this), Object.defineProperty(this, "Parent", {
                                    enumerable: !1,
                                    configurable: !1,
                                    get: function() {
                                        return t
                                    },
                                    set: function(e) {
                                        t = e
                                    }
                                }), Object.defineProperty(this, "optionName", {
                                    enumerable: !1,
                                    configurable: !0,
                                    get: function() {
                                        return e
                                    },
                                    set: function(t) {
                                        e = t
                                    }
                                });
                                var n, r = {};
                                Object.defineProperty(this, "MK", {
                                    enumerable: !1,
                                    configurable: !1,
                                    get: function() {
                                        var t, e = [];
                                        for (t in e.push("<<"), r) e.push("/" + t + " (" + r[t] + ")");
                                        return e.push(">>"), e.join("\n")
                                    },
                                    set: function(t) {
                                        "object" == typeof t && (r = t)
                                    }
                                }), Object.defineProperty(this, "caption", {
                                    enumerable: !0,
                                    configurable: !0,
                                    get: function() {
                                        return r.CA || ""
                                    },
                                    set: function(t) {
                                        "string" == typeof t && (r.CA = t)
                                    }
                                }), Object.defineProperty(this, "AS", {
                                    enumerable: !1,
                                    configurable: !1,
                                    get: function() {
                                        return n
                                    },
                                    set: function(t) {
                                        n = t
                                    }
                                }), Object.defineProperty(this, "appearanceState", {
                                    enumerable: !0,
                                    configurable: !0,
                                    get: function() {
                                        return n.substr(1, n.length - 1)
                                    },
                                    set: function(t) {
                                        n = "/" + t
                                    }
                                }), this.caption = "l", this.appearanceState = "Off", this._AppearanceType = ft.RadioButton.Circle, this.appearanceStreamContent = this._AppearanceType.createAppearanceStream(this.optionName)
                            };
                            A(st, Z), ot.prototype.setAppearance = function(t) {
                                if (!("createAppearanceStream" in t) || !("getCA" in t)) throw new Error("Couldn't assign Appearance to RadioButton. Appearance was Invalid!");
                                for (var e in this.Kids)
                                    if (this.Kids.hasOwnProperty(e)) {
                                        var n = this.Kids[e];
                                        n.appearanceStreamContent = t.createAppearanceStream(n.optionName), n.caption = t.getCA()
                                    }
                            }, ot.prototype.createOption = function(t) {
                                var e = new st;
                                return e.Parent = this, e.optionName = t, this.Kids.push(e), ht.call(this, e), e
                            };
                            var lt = function() {
                                it.call(this), this.fontName = "zapfdingbats", this.caption = "3", this.appearanceState = "On", this.value = "On", this.textAlign = "center", this.appearanceStreamContent = ft.CheckBox.createAppearanceStream()
                            };
                            A(lt, it);
                            var ut = function() {
                                Z.call(this), this.FT = "/Tx", Object.defineProperty(this, "multiline", {
                                    enumerable: !0,
                                    configurable: !0,
                                    get: function() {
                                        return Boolean(I(this.Ff, 13))
                                    },
                                    set: function(t) {
                                        !0 === Boolean(t) ? this.Ff = O(this.Ff, 13) : this.Ff = j(this.Ff, 13)
                                    }
                                }), Object.defineProperty(this, "fileSelect", {
                                    enumerable: !0,
                                    configurable: !0,
                                    get: function() {
                                        return Boolean(I(this.Ff, 21))
                                    },
                                    set: function(t) {
                                        !0 === Boolean(t) ? this.Ff = O(this.Ff, 21) : this.Ff = j(this.Ff, 21)
                                    }
                                }), Object.defineProperty(this, "doNotSpellCheck", {
                                    enumerable: !0,
                                    configurable: !0,
                                    get: function() {
                                        return Boolean(I(this.Ff, 23))
                                    },
                                    set: function(t) {
                                        !0 === Boolean(t) ? this.Ff = O(this.Ff, 23) : this.Ff = j(this.Ff, 23)
                                    }
                                }), Object.defineProperty(this, "doNotScroll", {
                                    enumerable: !0,
                                    configurable: !0,
                                    get: function() {
                                        return Boolean(I(this.Ff, 24))
                                    },
                                    set: function(t) {
                                        !0 === Boolean(t) ? this.Ff = O(this.Ff, 24) : this.Ff = j(this.Ff, 24)
                                    }
                                }), Object.defineProperty(this, "comb", {
                                    enumerable: !0,
                                    configurable: !0,
                                    get: function() {
                                        return Boolean(I(this.Ff, 25))
                                    },
                                    set: function(t) {
                                        !0 === Boolean(t) ? this.Ff = O(this.Ff, 25) : this.Ff = j(this.Ff, 25)
                                    }
                                }), Object.defineProperty(this, "richText", {
                                    enumerable: !0,
                                    configurable: !0,
                                    get: function() {
                                        return Boolean(I(this.Ff, 26))
                                    },
                                    set: function(t) {
                                        !0 === Boolean(t) ? this.Ff = O(this.Ff, 26) : this.Ff = j(this.Ff, 26)
                                    }
                                });
                                var t = null;
                                Object.defineProperty(this, "MaxLen", {
                                    enumerable: !0,
                                    configurable: !1,
                                    get: function() {
                                        return t
                                    },
                                    set: function(e) {
                                        t = e
                                    }
                                }), Object.defineProperty(this, "maxLength", {
                                    enumerable: !0,
                                    configurable: !0,
                                    get: function() {
                                        return t
                                    },
                                    set: function(e) {
                                        Number.isInteger(e) && (t = e)
                                    }
                                }), Object.defineProperty(this, "hasAppearanceStream", {
                                    enumerable: !0,
                                    configurable: !0,
                                    get: function() {
                                        return this.V || this.DV
                                    }
                                })
                            };
                            A(ut, Z);
                            var ct = function() {
                                ut.call(this), Object.defineProperty(this, "password", {
                                    enumerable: !0,
                                    configurable: !0,
                                    get: function() {
                                        return Boolean(I(this.Ff, 14))
                                    },
                                    set: function(t) {
                                        !0 === Boolean(t) ? this.Ff = O(this.Ff, 14) : this.Ff = j(this.Ff, 14)
                                    }
                                }), this.password = !0
                            };
                            A(ct, ut);
                            var ft = {
                                CheckBox: {
                                    createAppearanceStream: function() {
                                        return {
                                            N: {
                                                On: ft.CheckBox.YesNormal
                                            },
                                            D: {
                                                On: ft.CheckBox.YesPushDown,
                                                Off: ft.CheckBox.OffPushDown
                                            }
                                        }
                                    },
                                    YesPushDown: function(t) {
                                        var e = new P(t),
                                            n = [],
                                            r = y.internal.getFont(t.fontName, t.fontStyle).id,
                                            i = y.__private__.encodeColorString(t.color),
                                            a = B(t, t.caption);
                                        return n.push("0.749023 g"), n.push("0 0 " + L(ft.internal.getWidth(t)) + " " + L(ft.internal.getHeight(t)) + " re"), n.push("f"), n.push("BMC"), n.push("q"), n.push("0 0 1 rg"), n.push("/" + r + " " + L(a.fontSize) + " Tf " + i), n.push("BT"), n.push(a.text), n.push("ET"), n.push("Q"), n.push("EMC"), e.stream = n.join("\n"), e
                                    },
                                    YesNormal: function(t) {
                                        var e = new P(t),
                                            n = y.internal.getFont(t.fontName, t.fontStyle).id,
                                            r = y.__private__.encodeColorString(t.color),
                                            i = [],
                                            a = ft.internal.getHeight(t),
                                            o = ft.internal.getWidth(t),
                                            s = B(t, t.caption);
                                        return i.push("1 g"), i.push("0 0 " + L(o) + " " + L(a) + " re"), i.push("f"), i.push("q"), i.push("0 0 1 rg"), i.push("0 0 " + L(o - 1) + " " + L(a - 1) + " re"), i.push("W"), i.push("n"), i.push("0 g"), i.push("BT"), i.push("/" + n + " " + L(s.fontSize) + " Tf " + r), i.push(s.text), i.push("ET"), i.push("Q"), e.stream = i.join("\n"), e
                                    },
                                    OffPushDown: function(t) {
                                        var e = new P(t),
                                            n = [];
                                        return n.push("0.749023 g"), n.push("0 0 " + L(ft.internal.getWidth(t)) + " " + L(ft.internal.getHeight(t)) + " re"), n.push("f"), e.stream = n.join("\n"), e
                                    }
                                },
                                RadioButton: {
                                    Circle: {
                                        createAppearanceStream: function(t) {
                                            var e = {
                                                D: {
                                                    Off: ft.RadioButton.Circle.OffPushDown
                                                },
                                                N: {}
                                            };
                                            return e.N[t] = ft.RadioButton.Circle.YesNormal, e.D[t] = ft.RadioButton.Circle.YesPushDown, e
                                        },
                                        getCA: function() {
                                            return "l"
                                        },
                                        YesNormal: function(t) {
                                            var e = new P(t),
                                                n = [],
                                                r = ft.internal.getWidth(t) <= ft.internal.getHeight(t) ? ft.internal.getWidth(t) / 4 : ft.internal.getHeight(t) / 4;
                                            r = Number((.9 * r).toFixed(5));
                                            var i = ft.internal.Bezier_C,
                                                a = Number((r * i).toFixed(5));
                                            return n.push("q"), n.push("1 0 0 1 " + S(ft.internal.getWidth(t) / 2) + " " + S(ft.internal.getHeight(t) / 2) + " cm"), n.push(r + " 0 m"), n.push(r + " " + a + " " + a + " " + r + " 0 " + r + " c"), n.push("-" + a + " " + r + " -" + r + " " + a + " -" + r + " 0 c"), n.push("-" + r + " -" + a + " -" + a + " -" + r + " 0 -" + r + " c"), n.push(a + " -" + r + " " + r + " -" + a + " " + r + " 0 c"), n.push("f"), n.push("Q"), e.stream = n.join("\n"), e
                                        },
                                        YesPushDown: function(t) {
                                            var e = new P(t),
                                                n = [],
                                                r = ft.internal.getWidth(t) <= ft.internal.getHeight(t) ? ft.internal.getWidth(t) / 4 : ft.internal.getHeight(t) / 4,
                                                i = (r = Number((.9 * r).toFixed(5)), Number((2 * r).toFixed(5))),
                                                a = Number((i * ft.internal.Bezier_C).toFixed(5)),
                                                o = Number((r * ft.internal.Bezier_C).toFixed(5));
                                            return n.push("0.749023 g"), n.push("q"), n.push("1 0 0 1 " + S(ft.internal.getWidth(t) / 2) + " " + S(ft.internal.getHeight(t) / 2) + " cm"), n.push(i + " 0 m"), n.push(i + " " + a + " " + a + " " + i + " 0 " + i + " c"), n.push("-" + a + " " + i + " -" + i + " " + a + " -" + i + " 0 c"), n.push("-" + i + " -" + a + " -" + a + " -" + i + " 0 -" + i + " c"), n.push(a + " -" + i + " " + i + " -" + a + " " + i + " 0 c"), n.push("f"), n.push("Q"), n.push("0 g"), n.push("q"), n.push("1 0 0 1 " + S(ft.internal.getWidth(t) / 2) + " " + S(ft.internal.getHeight(t) / 2) + " cm"), n.push(r + " 0 m"), n.push(r + " " + o + " " + o + " " + r + " 0 " + r + " c"), n.push("-" + o + " " + r + " -" + r + " " + o + " -" + r + " 0 c"), n.push("-" + r + " -" + o + " -" + o + " -" + r + " 0 -" + r + " c"), n.push(o + " -" + r + " " + r + " -" + o + " " + r + " 0 c"), n.push("f"), n.push("Q"), e.stream = n.join("\n"), e
                                        },
                                        OffPushDown: function(t) {
                                            var e = new P(t),
                                                n = [],
                                                r = ft.internal.getWidth(t) <= ft.internal.getHeight(t) ? ft.internal.getWidth(t) / 4 : ft.internal.getHeight(t) / 4;
                                            r = Number((.9 * r).toFixed(5));
                                            var i = Number((2 * r).toFixed(5)),
                                                a = Number((i * ft.internal.Bezier_C).toFixed(5));
                                            return n.push("0.749023 g"), n.push("q"), n.push("1 0 0 1 " + S(ft.internal.getWidth(t) / 2) + " " + S(ft.internal.getHeight(t) / 2) + " cm"), n.push(i + " 0 m"), n.push(i + " " + a + " " + a + " " + i + " 0 " + i + " c"), n.push("-" + a + " " + i + " -" + i + " " + a + " -" + i + " 0 c"), n.push("-" + i + " -" + a + " -" + a + " -" + i + " 0 -" + i + " c"), n.push(a + " -" + i + " " + i + " -" + a + " " + i + " 0 c"), n.push("f"), n.push("Q"), e.stream = n.join("\n"), e
                                        }
                                    },
                                    Cross: {
                                        createAppearanceStream: function(t) {
                                            var e = {
                                                D: {
                                                    Off: ft.RadioButton.Cross.OffPushDown
                                                },
                                                N: {}
                                            };
                                            return e.N[t] = ft.RadioButton.Cross.YesNormal, e.D[t] = ft.RadioButton.Cross.YesPushDown, e
                                        },
                                        getCA: function() {
                                            return "8"
                                        },
                                        YesNormal: function(t) {
                                            var e = new P(t),
                                                n = [],
                                                r = ft.internal.calculateCross(t);
                                            return n.push("q"), n.push("1 1 " + L(ft.internal.getWidth(t) - 2) + " " + L(ft.internal.getHeight(t) - 2) + " re"), n.push("W"), n.push("n"), n.push(L(r.x1.x) + " " + L(r.x1.y) + " m"), n.push(L(r.x2.x) + " " + L(r.x2.y) + " l"), n.push(L(r.x4.x) + " " + L(r.x4.y) + " m"), n.push(L(r.x3.x) + " " + L(r.x3.y) + " l"), n.push("s"), n.push("Q"), e.stream = n.join("\n"), e
                                        },
                                        YesPushDown: function(t) {
                                            var e = new P(t),
                                                n = ft.internal.calculateCross(t),
                                                r = [];
                                            return r.push("0.749023 g"), r.push("0 0 " + L(ft.internal.getWidth(t)) + " " + L(ft.internal.getHeight(t)) + " re"), r.push("f"), r.push("q"), r.push("1 1 " + L(ft.internal.getWidth(t) - 2) + " " + L(ft.internal.getHeight(t) - 2) + " re"), r.push("W"), r.push("n"), r.push(L(n.x1.x) + " " + L(n.x1.y) + " m"), r.push(L(n.x2.x) + " " + L(n.x2.y) + " l"), r.push(L(n.x4.x) + " " + L(n.x4.y) + " m"), r.push(L(n.x3.x) + " " + L(n.x3.y) + " l"), r.push("s"), r.push("Q"), e.stream = r.join("\n"), e
                                        },
                                        OffPushDown: function(t) {
                                            var e = new P(t),
                                                n = [];
                                            return n.push("0.749023 g"), n.push("0 0 " + L(ft.internal.getWidth(t)) + " " + L(ft.internal.getHeight(t)) + " re"), n.push("f"), e.stream = n.join("\n"), e
                                        }
                                    }
                                },
                                createDefaultAppearanceStream: function(t) {
                                    var e = y.internal.getFont(t.fontName, t.fontStyle).id,
                                        n = y.__private__.encodeColorString(t.color);
                                    return "/" + e + " " + t.fontSize + " Tf " + n
                                }
                            };
                            ft.internal = {
                                Bezier_C: .551915024494,
                                calculateCross: function(t) {
                                    var e = ft.internal.getWidth(t),
                                        n = ft.internal.getHeight(t),
                                        r = Math.min(e, n);
                                    return {
                                        x1: {
                                            x: (e - r) / 2,
                                            y: (n - r) / 2 + r
                                        },
                                        x2: {
                                            x: (e - r) / 2 + r,
                                            y: (n - r) / 2
                                        },
                                        x3: {
                                            x: (e - r) / 2,
                                            y: (n - r) / 2
                                        },
                                        x4: {
                                            x: (e - r) / 2 + r,
                                            y: (n - r) / 2 + r
                                        }
                                    }
                                }
                            }, ft.internal.getWidth = function(t) {
                                var e = 0;
                                return "object" == typeof t && (e = k(t.Rect[2])), e
                            }, ft.internal.getHeight = function(t) {
                                var e = 0;
                                return "object" == typeof t && (e = k(t.Rect[3])), e
                            };
                            var ht = w.addField = function(t) {
                                if (Y.call(this), !(t instanceof Z)) throw new Error("Invalid argument passed to jsPDF.addField.");
                                return z.call(this, t), t.page = y.internal.getCurrentPageInfo().pageNumber, this
                            };
                            w.AcroFormChoiceField = tt, w.AcroFormListBox = et, w.AcroFormComboBox = nt, w.AcroFormEditBox = rt, w.AcroFormButton = it, w.AcroFormPushButton = at, w.AcroFormRadioButton = ot, w.AcroFormCheckBox = lt, w.AcroFormTextField = ut, w.AcroFormPasswordField = ct, w.AcroFormAppearance = ft, w.AcroForm = {
                                ChoiceField: tt,
                                ListBox: et,
                                ComboBox: nt,
                                EditBox: rt,
                                Button: it,
                                PushButton: at,
                                RadioButton: ot,
                                CheckBox: lt,
                                TextField: ut,
                                PasswordField: ct,
                                Appearance: ft
                            }, b.AcroForm = {
                                ChoiceField: tt,
                                ListBox: et,
                                ComboBox: nt,
                                EditBox: rt,
                                Button: it,
                                PushButton: at,
                                RadioButton: ot,
                                CheckBox: lt,
                                TextField: ut,
                                PasswordField: ct,
                                Appearance: ft
                            };
                            b.AcroForm;
                            ! function(t) {
                                t.__addimage__ = {};
                                var e = "UNKNOWN",
                                    n = {
                                        PNG: [
                                            [137, 80, 78, 71]
                                        ],
                                        TIFF: [
                                            [77, 77, 0, 42],
                                            [73, 73, 42, 0]
                                        ],
                                        JPEG: [
                                            [255, 216, 255, 224, void 0, void 0, 74, 70, 73, 70, 0],
                                            [255, 216, 255, 225, void 0, void 0, 69, 120, 105, 102, 0, 0],
                                            [255, 216, 255, 219],
                                            [255, 216, 255, 238]
                                        ],
                                        JPEG2000: [
                                            [0, 0, 0, 12, 106, 80, 32, 32]
                                        ],
                                        GIF87a: [
                                            [71, 73, 70, 56, 55, 97]
                                        ],
                                        GIF89a: [
                                            [71, 73, 70, 56, 57, 97]
                                        ],
                                        WEBP: [
                                            [82, 73, 70, 70, void 0, void 0, void 0, void 0, 87, 69, 66, 80]
                                        ],
                                        BMP: [
                                            [66, 77],
                                            [66, 65],
                                            [67, 73],
                                            [67, 80],
                                            [73, 67],
                                            [80, 84]
                                        ]
                                    },
                                    r = t.__addimage__.getImageFileTypeByImageData = function(t, r) {
                                        var i, a;
                                        r = r || e;
                                        var o, s, l, u = e;
                                        if (L(t))
                                            for (l in n)
                                                for (o = n[l], i = 0; i < o.length; i += 1) {
                                                    for (s = !0, a = 0; a < o[i].length; a += 1)
                                                        if (void 0 !== o[i][a] && o[i][a] !== t[a]) {
                                                            s = !1;
                                                            break
                                                        } if (!0 === s) {
                                                        u = l;
                                                        break
                                                    }
                                                } else
                                                    for (l in n)
                                                        for (o = n[l], i = 0; i < o.length; i += 1) {
                                                            for (s = !0, a = 0; a < o[i].length; a += 1)
                                                                if (void 0 !== o[i][a] && o[i][a] !== t.charCodeAt(a)) {
                                                                    s = !1;
                                                                    break
                                                                } if (!0 === s) {
                                                                u = l;
                                                                break
                                                            }
                                                        }
                                        return u === e && r !== e && (u = r), u
                                    },
                                    i = function t(e) {
                                        for (var n = this.internal.write, r = this.internal.putStream, i = (0, this.internal.getFilters)(); - 1 !== i.indexOf("FlateEncode");) i.splice(i.indexOf("FlateEncode"), 1);
                                        e.objectId = this.internal.newObject();
                                        var a = [];
                                        if (a.push({
                                                key: "Type",
                                                value: "/XObject"
                                            }), a.push({
                                                key: "Subtype",
                                                value: "/Image"
                                            }), a.push({
                                                key: "Width",
                                                value: e.width
                                            }), a.push({
                                                key: "Height",
                                                value: e.height
                                            }), e.colorSpace === b.INDEXED ? a.push({
                                                key: "ColorSpace",
                                                value: "[/Indexed /DeviceRGB " + (e.palette.length / 3 - 1) + " " + ("sMask" in e && void 0 !== e.sMask ? e.objectId + 2 : e.objectId + 1) + " 0 R]"
                                            }) : (a.push({
                                                key: "ColorSpace",
                                                value: "/" + e.colorSpace
                                            }), e.colorSpace === b.DEVICE_CMYK && a.push({
                                                key: "Decode",
                                                value: "[1 0 1 0 1 0 1 0]"
                                            })), a.push({
                                                key: "BitsPerComponent",
                                                value: e.bitsPerComponent
                                            }), "decodeParameters" in e && void 0 !== e.decodeParameters && a.push({
                                                key: "DecodeParms",
                                                value: "<<" + e.decodeParameters + ">>"
                                            }), "transparency" in e && Array.isArray(e.transparency)) {
                                            for (var o = "", s = 0, l = e.transparency.length; s < l; s++) o += e.transparency[s] + " " + e.transparency[s] + " ";
                                            a.push({
                                                key: "Mask",
                                                value: "[" + o + "]"
                                            })
                                        }
                                        void 0 !== e.sMask && a.push({
                                            key: "SMask",
                                            value: e.objectId + 1 + " 0 R"
                                        });
                                        var u = void 0 !== e.filter ? ["/" + e.filter] : void 0;
                                        if (r({
                                                data: e.data,
                                                additionalKeyValues: a,
                                                alreadyAppliedFilters: u
                                            }), n("endobj"), "sMask" in e && void 0 !== e.sMask) {
                                            var c = "/Predictor " + e.predictor + " /Colors 1 /BitsPerComponent " + e.bitsPerComponent + " /Columns " + e.width,
                                                f = {
                                                    width: e.width,
                                                    height: e.height,
                                                    colorSpace: "DeviceGray",
                                                    bitsPerComponent: e.bitsPerComponent,
                                                    decodeParameters: c,
                                                    data: e.sMask
                                                };
                                            "filter" in e && (f.filter = e.filter), t.call(this, f)
                                        }
                                        e.colorSpace === b.INDEXED && (this.internal.newObject(), r({
                                            data: A(new Uint8Array(e.palette))
                                        }), n("endobj"))
                                    },
                                    a = function() {
                                        var t = this.internal.collections.addImage_images;
                                        for (var e in t) i.call(this, t[e])
                                    },
                                    o = function() {
                                        var t, e = this.internal.collections.addImage_images,
                                            n = this.internal.write;
                                        for (var r in e) n("/I" + (t = e[r]).index, t.objectId, "0", "R")
                                    },
                                    s = function() {
                                        this.internal.collections.addImage_images || (this.internal.collections.addImage_images = {}, this.internal.events.subscribe("putResources", a), this.internal.events.subscribe("putXobjectDict", o))
                                    },
                                    l = function() {
                                        var t = this.internal.collections.addImage_images;
                                        return s.call(this), t
                                    },
                                    f = function() {
                                        return Object.keys(this.internal.collections.addImage_images).length
                                    },
                                    h = function(e) {
                                        return "function" == typeof t["process" + e.toUpperCase()]
                                    },
                                    d = function(t) {
                                        return "object" == typeof t && 1 === t.nodeType
                                    },
                                    p = function(e, n) {
                                        if ("IMG" === e.nodeName && e.hasAttribute("src")) {
                                            var r = "" + e.getAttribute("src");
                                            if (0 === r.indexOf("data:image/")) return u(unescape(r).split("base64,").pop());
                                            var i = t.loadFile(r, !0);
                                            if (void 0 !== i) return i
                                        }
                                        if ("CANVAS" === e.nodeName) {
                                            var a;
                                            switch (n) {
                                                case "PNG":
                                                    a = "image/png";
                                                    break;
                                                case "WEBP":
                                                    a = "image/webp";
                                                    break;
                                                case "JPEG":
                                                case "JPG":
                                                default:
                                                    a = "image/jpeg"
                                            }
                                            return u(e.toDataURL(a, 1).split("base64,").pop())
                                        }
                                    },
                                    g = function(t) {
                                        var e = this.internal.collections.addImage_images;
                                        if (e)
                                            for (var n in e)
                                                if (t === e[n].alias) return e[n]
                                    },
                                    m = function(t, e, n) {
                                        return t || e || (t = -96, e = -96), t < 0 && (t = -1 * n.width * 72 / t / this.internal.scaleFactor), e < 0 && (e = -1 * n.height * 72 / e / this.internal.scaleFactor), 0 === t && (t = e * n.width / n.height), 0 === e && (e = t * n.height / n.width), [t, e]
                                    },
                                    v = function(t, e, n, r, i, a) {
                                        var o = m.call(this, n, r, i),
                                            s = this.internal.getCoordinateString,
                                            u = this.internal.getVerticalCoordinateString,
                                            c = l.call(this);
                                        if (n = o[0], r = o[1], c[i.index] = i, a) {
                                            a *= Math.PI / 180;
                                            var f = Math.cos(a),
                                                h = Math.sin(a),
                                                d = function(t) {
                                                    return t.toFixed(4)
                                                },
                                                p = [d(f), d(h), d(-1 * h), d(f), 0, 0, "cm"]
                                        }
                                        this.internal.write("q"), a ? (this.internal.write([1, "0", "0", 1, s(t), u(e + r), "cm"].join(" ")), this.internal.write(p.join(" ")), this.internal.write([s(n), "0", "0", s(r), "0", "0", "cm"].join(" "))) : this.internal.write([s(n), "0", "0", s(r), s(t), u(e + r), "cm"].join(" ")), this.isAdvancedAPI() && this.internal.write([1, 0, 0, -1, 0, 0, "cm"].join(" ")), this.internal.write("/I" + i.index + " Do"), this.internal.write("Q")
                                    },
                                    b = t.color_spaces = {
                                        DEVICE_RGB: "DeviceRGB",
                                        DEVICE_GRAY: "DeviceGray",
                                        DEVICE_CMYK: "DeviceCMYK",
                                        CAL_GREY: "CalGray",
                                        CAL_RGB: "CalRGB",
                                        LAB: "Lab",
                                        ICC_BASED: "ICCBased",
                                        INDEXED: "Indexed",
                                        PATTERN: "Pattern",
                                        SEPARATION: "Separation",
                                        DEVICE_N: "DeviceN"
                                    };
                                t.decode = {
                                    DCT_DECODE: "DCTDecode",
                                    FLATE_DECODE: "FlateDecode",
                                    LZW_DECODE: "LZWDecode",
                                    JPX_DECODE: "JPXDecode",
                                    JBIG2_DECODE: "JBIG2Decode",
                                    ASCII85_DECODE: "ASCII85Decode",
                                    ASCII_HEX_DECODE: "ASCIIHexDecode",
                                    RUN_LENGTH_DECODE: "RunLengthDecode",
                                    CCITT_FAX_DECODE: "CCITTFaxDecode"
                                };
                                var y = t.image_compression = {
                                        NONE: "NONE",
                                        FAST: "FAST",
                                        MEDIUM: "MEDIUM",
                                        SLOW: "SLOW"
                                    },
                                    w = t.__addimage__.sHashCode = function(t) {
                                        var e, n, r = 0;
                                        if ("string" == typeof t)
                                            for (n = t.length, e = 0; e < n; e++) r = (r << 5) - r + t.charCodeAt(e), r |= 0;
                                        else if (L(t))
                                            for (n = t.byteLength / 2, e = 0; e < n; e++) r = (r << 5) - r + t[e], r |= 0;
                                        return r
                                    },
                                    x = t.__addimage__.validateStringAsBase64 = function(t) {
                                        (t = t || "").toString().trim();
                                        var e = !0;
                                        return 0 === t.length && (e = !1), t.length % 4 != 0 && (e = !1), !1 === /^[A-Za-z0-9+/]+$/.test(t.substr(0, t.length - 2)) && (e = !1), !1 === /^[A-Za-z0-9/][A-Za-z0-9+/]|[A-Za-z0-9+/]=|==$/.test(t.substr(-2)) && (e = !1), e
                                    },
                                    _ = t.__addimage__.extractImageFromDataUrl = function(t) {
                                        var e = (t = t || "").split("base64,"),
                                            n = null;
                                        if (2 === e.length) {
                                            var r = /^data:(\w*\/\w*);*(charset=[\w=-]*)*;*$/.exec(e[0]);
                                            Array.isArray(r) && (n = {
                                                mimeType: r[1],
                                                charset: r[2],
                                                data: e[1]
                                            })
                                        }
                                        return n
                                    },
                                    N = t.__addimage__.supportsArrayBuffer = function() {
                                        return "undefined" != typeof ArrayBuffer && "undefined" != typeof Uint8Array
                                    };
                                t.__addimage__.isArrayBuffer = function(t) {
                                    return N() && t instanceof ArrayBuffer
                                };
                                var L = t.__addimage__.isArrayBufferView = function(t) {
                                        return N() && "undefined" != typeof Uint32Array && (t instanceof Int8Array || t instanceof Uint8Array || "undefined" != typeof Uint8ClampedArray && t instanceof Uint8ClampedArray || t instanceof Int16Array || t instanceof Uint16Array || t instanceof Int32Array || t instanceof Uint32Array || t instanceof Float32Array || t instanceof Float64Array)
                                    },
                                    S = t.__addimage__.binaryStringToUint8Array = function(t) {
                                        for (var e = t.length, n = new Uint8Array(e), r = 0; r < e; r++) n[r] = t.charCodeAt(r);
                                        return n
                                    },
                                    A = t.__addimage__.arrayBufferToBinaryString = function(t) {
                                        try {
                                            return u(c(String.fromCharCode.apply(null, t)))
                                        } catch (e) {
                                            if ("undefined" != typeof Uint8Array && void 0 !== Uint8Array.prototype.reduce) return new Uint8Array(t).reduce((function(t, e) {
                                                return t.push(String.fromCharCode(e)), t
                                            }), []).join("")
                                        }
                                    };
                                t.addImage = function() {
                                    var t, n, r, i, a, o, l, u, c;
                                    if ("number" == typeof arguments[1] ? (n = e, r = arguments[1], i = arguments[2], a = arguments[3], o = arguments[4], l = arguments[5], u = arguments[6], c = arguments[7]) : (n = arguments[1], r = arguments[2], i = arguments[3], a = arguments[4], o = arguments[5], l = arguments[6], u = arguments[7], c = arguments[8]), "object" == typeof(t = arguments[0]) && !d(t) && "imageData" in t) {
                                        var f = t;
                                        t = f.imageData, n = f.format || n || e, r = f.x || r || 0, i = f.y || i || 0, a = f.w || f.width || a, o = f.h || f.height || o, l = f.alias || l, u = f.compression || u, c = f.rotation || f.angle || c
                                    }
                                    var h = this.internal.getFilters();
                                    if (void 0 === u && -1 !== h.indexOf("FlateEncode") && (u = "SLOW"), isNaN(r) || isNaN(i)) throw new Error("Invalid coordinates passed to jsPDF.addImage");
                                    s.call(this);
                                    var p = k.call(this, t, n, l, u);
                                    return v.call(this, r, i, a, o, p, c), this
                                };
                                var k = function(n, i, a, o) {
                                        var s, l, u;
                                        if ("string" == typeof n && r(n) === e) {
                                            n = unescape(n);
                                            var c = P(n, !1);
                                            ("" !== c || void 0 !== (c = t.loadFile(n, !0))) && (n = c)
                                        }
                                        if (d(n) && (n = p(n, i)), i = r(n, i), !h(i)) throw new Error("addImage does not support files of type '" + i + "', please ensure that a plugin for '" + i + "' support is added.");
                                        if ((null == (u = a) || 0 === u.length) && (a = function(t) {
                                                return "string" == typeof t || L(t) ? w(t) : null
                                            }(n)), (s = g.call(this, a)) || (N() && (n instanceof Uint8Array || (l = n, n = S(n))), s = this["process" + i.toUpperCase()](n, f.call(this), a, function(e) {
                                                return e && "string" == typeof e && (e = e.toUpperCase()), e in t.image_compression ? e : y.NONE
                                            }(o), l)), !s) throw new Error("An unknown error occurred whilst processing the image.");
                                        return s
                                    },
                                    P = t.__addimage__.convertBase64ToBinaryString = function(t, e) {
                                        var n;
                                        e = "boolean" != typeof e || e;
                                        var r, i = "";
                                        if ("string" == typeof t) {
                                            r = null !== (n = _(t)) ? n.data : t;
                                            try {
                                                i = u(r)
                                            } catch (t) {
                                                if (e) throw x(r) ? new Error("atob-Error in jsPDF.convertBase64ToBinaryString " + t.message) : new Error("Supplied Data is not a valid base64-String jsPDF.convertBase64ToBinaryString ")
                                            }
                                        }
                                        return i
                                    };
                                t.getImageProperties = function(n) {
                                    var i, a, o = "";
                                    if (d(n) && (n = p(n)), "string" == typeof n && r(n) === e && ("" === (o = P(n, !1)) && (o = t.loadFile(n) || ""), n = o), a = r(n), !h(a)) throw new Error("addImage does not support files of type '" + a + "', please ensure that a plugin for '" + a + "' support is added.");
                                    if (!N() || n instanceof Uint8Array || (n = S(n)), !(i = this["process" + a.toUpperCase()](n))) throw new Error("An unknown error occurred whilst processing the image");
                                    return i.fileType = a, i
                                }
                            }(b.API),
                            function(t) {
                                var e = function(t) {
                                    if (void 0 !== t && "" != t) return !0
                                };
                                b.API.events.push(["addPage", function(t) {
                                    this.internal.getPageInfo(t.pageNumber).pageContext.annotations = []
                                }]), t.events.push(["putPage", function(t) {
                                    for (var n, r, i, a = this.internal.getCoordinateString, o = this.internal.getVerticalCoordinateString, s = this.internal.getPageInfoByObjId(t.objId), l = t.pageContext.annotations, u = !1, c = 0; c < l.length && !u; c++) switch ((n = l[c]).type) {
                                        case "link":
                                            (e(n.options.url) || e(n.options.pageNumber)) && (u = !0);
                                            break;
                                        case "reference":
                                        case "text":
                                        case "freetext":
                                            u = !0
                                    }
                                    if (0 != u) {
                                        this.internal.write("/Annots [");
                                        for (var f = 0; f < l.length; f++) switch ((n = l[f]).type) {
                                            case "reference":
                                                this.internal.write(" " + n.object.objId + " 0 R ");
                                                break;
                                            case "text":
                                                var h = this.internal.newAdditionalObject(),
                                                    d = this.internal.newAdditionalObject(),
                                                    p = n.title || "Note";
                                                i = "<</Type /Annot /Subtype /Text " + (r = "/Rect [" + a(n.bounds.x) + " " + o(n.bounds.y + n.bounds.h) + " " + a(n.bounds.x + n.bounds.w) + " " + o(n.bounds.y) + "] ") + "/Contents (" + n.contents + ")", i += " /Popup " + d.objId + " 0 R", i += " /P " + s.objId + " 0 R", i += " /T (" + p + ") >>", h.content = i;
                                                var g = h.objId + " 0 R";
                                                i = "<</Type /Annot /Subtype /Popup " + (r = "/Rect [" + a(n.bounds.x + 30) + " " + o(n.bounds.y + n.bounds.h) + " " + a(n.bounds.x + n.bounds.w + 30) + " " + o(n.bounds.y) + "] ") + " /Parent " + g, n.open && (i += " /Open true"), i += " >>", d.content = i, this.internal.write(h.objId, "0 R", d.objId, "0 R");
                                                break;
                                            case "freetext":
                                                r = "/Rect [" + a(n.bounds.x) + " " + o(n.bounds.y) + " " + a(n.bounds.x + n.bounds.w) + " " + o(n.bounds.y + n.bounds.h) + "] ";
                                                var m = n.color || "#ff0000";
                                                i = "<</Type /Annot /Subtype /FreeText " + r + "/Contents (" + n.contents + ")", i += " /DS(font: Helvetica,sans-serif 12.0pt; text-align:left; color:#" + m + ")", i += " /Border [0 0 0]", i += " >>", this.internal.write(i);
                                                break;
                                            case "link":
                                                if (n.options.name) {
                                                    var v = this.annotations._nameMap[n.options.name];
                                                    n.options.pageNumber = v.page, n.options.top = v.y
                                                } else n.options.top || (n.options.top = 0);
                                                if (r = "/Rect [" + a(n.x) + " " + o(n.y) + " " + a(n.x + n.w) + " " + o(n.y + n.h) + "] ", i = "", n.options.url) i = "<</Type /Annot /Subtype /Link " + r + "/Border [0 0 0] /A <</S /URI /URI (" + n.options.url + ") >>";
                                                else if (n.options.pageNumber) switch (i = "<</Type /Annot /Subtype /Link " + r + "/Border [0 0 0] /Dest [" + this.internal.getPageInfo(n.options.pageNumber).objId + " 0 R", n.options.magFactor = n.options.magFactor || "XYZ", n.options.magFactor) {
                                                    case "Fit":
                                                        i += " /Fit]";
                                                        break;
                                                    case "FitH":
                                                        i += " /FitH " + n.options.top + "]";
                                                        break;
                                                    case "FitV":
                                                        n.options.left = n.options.left || 0, i += " /FitV " + n.options.left + "]";
                                                        break;
                                                    case "XYZ":
                                                    default:
                                                        var b = o(n.options.top);
                                                        n.options.left = n.options.left || 0, void 0 === n.options.zoom && (n.options.zoom = 0), i += " /XYZ " + n.options.left + " " + b + " " + n.options.zoom + "]"
                                                }
                                                "" != i && (i += " >>", this.internal.write(i))
                                        }
                                        this.internal.write("]")
                                    }
                                }]), t.createAnnotation = function(t) {
                                    var e = this.internal.getCurrentPageInfo();
                                    switch (t.type) {
                                        case "link":
                                            this.link(t.bounds.x, t.bounds.y, t.bounds.w, t.bounds.h, t);
                                            break;
                                        case "text":
                                        case "freetext":
                                            e.pageContext.annotations.push(t)
                                    }
                                }, t.link = function(t, e, n, r, i) {
                                    this.internal.getCurrentPageInfo().pageContext.annotations.push({
                                        x: t,
                                        y: e,
                                        w: n,
                                        h: r,
                                        options: i,
                                        type: "link"
                                    })
                                }, t.textWithLink = function(t, e, n, r) {
                                    var i = this.getTextWidth(t),
                                        a = this.internal.getLineHeight() / this.internal.scaleFactor;
                                    return this.text(t, e, n, r), n += .2 * a, this.link(e, n - a, i, a, r), i
                                }, t.getTextWidth = function(t) {
                                    var e = this.internal.getFontSize();
                                    return this.getStringUnitWidth(t) * e / this.internal.scaleFactor
                                }
                            }(b.API),
                            function(t) {
                                var e = {
                                        1569: [65152],
                                        1570: [65153, 65154],
                                        1571: [65155, 65156],
                                        1572: [65157, 65158],
                                        1573: [65159, 65160],
                                        1574: [65161, 65162, 65163, 65164],
                                        1575: [65165, 65166],
                                        1576: [65167, 65168, 65169, 65170],
                                        1577: [65171, 65172],
                                        1578: [65173, 65174, 65175, 65176],
                                        1579: [65177, 65178, 65179, 65180],
                                        1580: [65181, 65182, 65183, 65184],
                                        1581: [65185, 65186, 65187, 65188],
                                        1582: [65189, 65190, 65191, 65192],
                                        1583: [65193, 65194],
                                        1584: [65195, 65196],
                                        1585: [65197, 65198],
                                        1586: [65199, 65200],
                                        1587: [65201, 65202, 65203, 65204],
                                        1588: [65205, 65206, 65207, 65208],
                                        1589: [65209, 65210, 65211, 65212],
                                        1590: [65213, 65214, 65215, 65216],
                                        1591: [65217, 65218, 65219, 65220],
                                        1592: [65221, 65222, 65223, 65224],
                                        1593: [65225, 65226, 65227, 65228],
                                        1594: [65229, 65230, 65231, 65232],
                                        1601: [65233, 65234, 65235, 65236],
                                        1602: [65237, 65238, 65239, 65240],
                                        1603: [65241, 65242, 65243, 65244],
                                        1604: [65245, 65246, 65247, 65248],
                                        1605: [65249, 65250, 65251, 65252],
                                        1606: [65253, 65254, 65255, 65256],
                                        1607: [65257, 65258, 65259, 65260],
                                        1608: [65261, 65262],
                                        1609: [65263, 65264, 64488, 64489],
                                        1610: [65265, 65266, 65267, 65268],
                                        1649: [64336, 64337],
                                        1655: [64477],
                                        1657: [64358, 64359, 64360, 64361],
                                        1658: [64350, 64351, 64352, 64353],
                                        1659: [64338, 64339, 64340, 64341],
                                        1662: [64342, 64343, 64344, 64345],
                                        1663: [64354, 64355, 64356, 64357],
                                        1664: [64346, 64347, 64348, 64349],
                                        1667: [64374, 64375, 64376, 64377],
                                        1668: [64370, 64371, 64372, 64373],
                                        1670: [64378, 64379, 64380, 64381],
                                        1671: [64382, 64383, 64384, 64385],
                                        1672: [64392, 64393],
                                        1676: [64388, 64389],
                                        1677: [64386, 64387],
                                        1678: [64390, 64391],
                                        1681: [64396, 64397],
                                        1688: [64394, 64395],
                                        1700: [64362, 64363, 64364, 64365],
                                        1702: [64366, 64367, 64368, 64369],
                                        1705: [64398, 64399, 64400, 64401],
                                        1709: [64467, 64468, 64469, 64470],
                                        1711: [64402, 64403, 64404, 64405],
                                        1713: [64410, 64411, 64412, 64413],
                                        1715: [64406, 64407, 64408, 64409],
                                        1722: [64414, 64415],
                                        1723: [64416, 64417, 64418, 64419],
                                        1726: [64426, 64427, 64428, 64429],
                                        1728: [64420, 64421],
                                        1729: [64422, 64423, 64424, 64425],
                                        1733: [64480, 64481],
                                        1734: [64473, 64474],
                                        1735: [64471, 64472],
                                        1736: [64475, 64476],
                                        1737: [64482, 64483],
                                        1739: [64478, 64479],
                                        1740: [64508, 64509, 64510, 64511],
                                        1744: [64484, 64485, 64486, 64487],
                                        1746: [64430, 64431],
                                        1747: [64432, 64433]
                                    },
                                    n = {
                                        65247: {
                                            65154: 65269,
                                            65156: 65271,
                                            65160: 65273,
                                            65166: 65275
                                        },
                                        65248: {
                                            65154: 65270,
                                            65156: 65272,
                                            65160: 65274,
                                            65166: 65276
                                        },
                                        65165: {
                                            65247: {
                                                65248: {
                                                    65258: 65010
                                                }
                                            }
                                        },
                                        1617: {
                                            1612: 64606,
                                            1613: 64607,
                                            1614: 64608,
                                            1615: 64609,
                                            1616: 64610
                                        }
                                    },
                                    r = {
                                        1612: 64606,
                                        1613: 64607,
                                        1614: 64608,
                                        1615: 64609,
                                        1616: 64610
                                    },
                                    i = [1570, 1571, 1573, 1575];
                                t.__arabicParser__ = {};
                                var a = t.__arabicParser__.isInArabicSubstitutionA = function(t) {
                                        return void 0 !== e[t.charCodeAt(0)]
                                    },
                                    o = t.__arabicParser__.isArabicLetter = function(t) {
                                        return "string" == typeof t && /^[\u0600-\u06FF\u0750-\u077F\u08A0-\u08FF\uFB50-\uFDFF\uFE70-\uFEFF]+$/.test(t)
                                    },
                                    s = t.__arabicParser__.isArabicEndLetter = function(t) {
                                        return o(t) && a(t) && e[t.charCodeAt(0)].length <= 2
                                    },
                                    l = t.__arabicParser__.isArabicAlfLetter = function(t) {
                                        return o(t) && i.indexOf(t.charCodeAt(0)) >= 0
                                    };
                                t.__arabicParser__.arabicLetterHasIsolatedForm = function(t) {
                                    return o(t) && a(t) && e[t.charCodeAt(0)].length >= 1
                                };
                                var u = t.__arabicParser__.arabicLetterHasFinalForm = function(t) {
                                    return o(t) && a(t) && e[t.charCodeAt(0)].length >= 2
                                };
                                t.__arabicParser__.arabicLetterHasInitialForm = function(t) {
                                    return o(t) && a(t) && e[t.charCodeAt(0)].length >= 3
                                };
                                var c = t.__arabicParser__.arabicLetterHasMedialForm = function(t) {
                                        return o(t) && a(t) && 4 == e[t.charCodeAt(0)].length
                                    },
                                    f = t.__arabicParser__.resolveLigatures = function(t) {
                                        var e = 0,
                                            r = n,
                                            i = "",
                                            a = 0;
                                        for (e = 0; e < t.length; e += 1) void 0 !== r[t.charCodeAt(e)] ? (a++, "number" == typeof(r = r[t.charCodeAt(e)]) && (i += String.fromCharCode(r), r = n, a = 0), e === t.length - 1 && (r = n, i += t.charAt(e - (a - 1)), e -= a - 1, a = 0)) : (r = n, i += t.charAt(e - a), e -= a, a = 0);
                                        return i
                                    };
                                t.__arabicParser__.isArabicDiacritic = function(t) {
                                    return void 0 !== t && void 0 !== r[t.charCodeAt(0)]
                                };
                                var h = t.__arabicParser__.getCorrectForm = function(t, e, n) {
                                        return o(t) ? !1 === a(t) ? -1 : !u(t) || !o(e) && !o(n) || !o(n) && s(e) || s(t) && !o(e) || s(t) && l(e) || s(t) && s(e) ? 0 : c(t) && o(e) && !s(e) && o(n) && u(n) ? 3 : s(t) || !o(n) ? 1 : 2 : -1
                                    },
                                    d = function(t) {
                                        var n = 0,
                                            r = 0,
                                            i = 0,
                                            a = "",
                                            s = "",
                                            l = "",
                                            u = (t = t || "").split("\\s+"),
                                            c = [];
                                        for (n = 0; n < u.length; n += 1) {
                                            for (c.push(""), r = 0; r < u[n].length; r += 1) a = u[n][r], s = u[n][r - 1], l = u[n][r + 1], o(a) ? (i = h(a, s, l), c[n] += -1 !== i ? String.fromCharCode(e[a.charCodeAt(0)][i]) : a) : c[n] += a;
                                            c[n] = f(c[n])
                                        }
                                        return c.join(" ")
                                    },
                                    p = t.__arabicParser__.processArabic = t.processArabic = function() {
                                        var t, e = "string" == typeof arguments[0] ? arguments[0] : arguments[0].text,
                                            n = [];
                                        if (Array.isArray(e)) {
                                            var r = 0;
                                            for (n = [], r = 0; r < e.length; r += 1) Array.isArray(e[r]) ? n.push([d(e[r][0]), e[r][1], e[r][2]]) : n.push([d(e[r])]);
                                            t = n
                                        } else t = d(e);
                                        return "string" == typeof arguments[0] ? t : (arguments[0].text = t, arguments[0])
                                    };
                                t.events.push(["preProcessText", p])
                            }(b.API), b.API.autoPrint = function(t) {
                                    var e;
                                    switch ((t = t || {}).variant = t.variant || "non-conform", t.variant) {
                                        case "javascript":
                                            this.addJS("print({});");
                                            break;
                                        case "non-conform":
                                        default:
                                            this.internal.events.subscribe("postPutResources", (function() {
                                                e = this.internal.newObject(), this.internal.out("<<"), this.internal.out("/S /Named"), this.internal.out("/Type /Action"), this.internal.out("/N /Print"), this.internal.out(">>"), this.internal.out("endobj")
                                            })), this.internal.events.subscribe("putCatalog", (function() {
                                                this.internal.out("/OpenAction " + e + " 0 R")
                                            }))
                                    }
                                    return this
                                },
                                function(t) {
                                    var e = function() {
                                        var t = void 0;
                                        Object.defineProperty(this, "pdf", {
                                            get: function() {
                                                return t
                                            },
                                            set: function(e) {
                                                t = e
                                            }
                                        });
                                        var e = 150;
                                        Object.defineProperty(this, "width", {
                                            get: function() {
                                                return e
                                            },
                                            set: function(t) {
                                                e = isNaN(t) || !1 === Number.isInteger(t) || t < 0 ? 150 : t, this.getContext("2d").pageWrapXEnabled && (this.getContext("2d").pageWrapX = e + 1)
                                            }
                                        });
                                        var n = 300;
                                        Object.defineProperty(this, "height", {
                                            get: function() {
                                                return n
                                            },
                                            set: function(t) {
                                                n = isNaN(t) || !1 === Number.isInteger(t) || t < 0 ? 300 : t, this.getContext("2d").pageWrapYEnabled && (this.getContext("2d").pageWrapY = n + 1)
                                            }
                                        });
                                        var r = [];
                                        Object.defineProperty(this, "childNodes", {
                                            get: function() {
                                                return r
                                            },
                                            set: function(t) {
                                                r = t
                                            }
                                        });
                                        var i = {};
                                        Object.defineProperty(this, "style", {
                                            get: function() {
                                                return i
                                            },
                                            set: function(t) {
                                                i = t
                                            }
                                        }), Object.defineProperty(this, "parentNode", {})
                                    };
                                    e.prototype.getContext = function(t, e) {
                                        var n;
                                        if ("2d" !== (t = t || "2d")) return null;
                                        for (n in e) this.pdf.context2d.hasOwnProperty(n) && (this.pdf.context2d[n] = e[n]);
                                        return this.pdf.context2d._canvas = this, this.pdf.context2d
                                    }, e.prototype.toDataURL = function() {
                                        throw new Error("toDataURL is not implemented.")
                                    }, t.events.push(["initialized", function() {
                                        this.canvas = new e, this.canvas.pdf = this
                                    }])
                                }(b.API),
                                function(t) {
                                    var e = {
                                            left: 0,
                                            top: 0,
                                            bottom: 0,
                                            right: 0
                                        },
                                        n = !1,
                                        r = function() {
                                            void 0 === this.internal.__cell__ && (this.internal.__cell__ = {}, this.internal.__cell__.padding = 3, this.internal.__cell__.headerFunction = void 0, this.internal.__cell__.margins = Object.assign({}, e), this.internal.__cell__.margins.width = this.getPageWidth(), i.call(this))
                                        },
                                        i = function() {
                                            this.internal.__cell__.lastCell = new a, this.internal.__cell__.pages = 1
                                        },
                                        a = function() {
                                            var t = arguments[0];
                                            Object.defineProperty(this, "x", {
                                                enumerable: !0,
                                                get: function() {
                                                    return t
                                                },
                                                set: function(e) {
                                                    t = e
                                                }
                                            });
                                            var e = arguments[1];
                                            Object.defineProperty(this, "y", {
                                                enumerable: !0,
                                                get: function() {
                                                    return e
                                                },
                                                set: function(t) {
                                                    e = t
                                                }
                                            });
                                            var n = arguments[2];
                                            Object.defineProperty(this, "width", {
                                                enumerable: !0,
                                                get: function() {
                                                    return n
                                                },
                                                set: function(t) {
                                                    n = t
                                                }
                                            });
                                            var r = arguments[3];
                                            Object.defineProperty(this, "height", {
                                                enumerable: !0,
                                                get: function() {
                                                    return r
                                                },
                                                set: function(t) {
                                                    r = t
                                                }
                                            });
                                            var i = arguments[4];
                                            Object.defineProperty(this, "text", {
                                                enumerable: !0,
                                                get: function() {
                                                    return i
                                                },
                                                set: function(t) {
                                                    i = t
                                                }
                                            });
                                            var a = arguments[5];
                                            Object.defineProperty(this, "lineNumber", {
                                                enumerable: !0,
                                                get: function() {
                                                    return a
                                                },
                                                set: function(t) {
                                                    a = t
                                                }
                                            });
                                            var o = arguments[6];
                                            return Object.defineProperty(this, "align", {
                                                enumerable: !0,
                                                get: function() {
                                                    return o
                                                },
                                                set: function(t) {
                                                    o = t
                                                }
                                            }), this
                                        };
                                    a.prototype.clone = function() {
                                        return new a(this.x, this.y, this.width, this.height, this.text, this.lineNumber, this.align)
                                    }, a.prototype.toArray = function() {
                                        return [this.x, this.y, this.width, this.height, this.text, this.lineNumber, this.align]
                                    }, t.setHeaderFunction = function(t) {
                                        return r.call(this), this.internal.__cell__.headerFunction = "function" == typeof t ? t : void 0, this
                                    }, t.getTextDimensions = function(t, e) {
                                        r.call(this);
                                        var n = (e = e || {}).fontSize || this.getFontSize(),
                                            i = e.font || this.getFont(),
                                            a = e.scaleFactor || this.internal.scaleFactor,
                                            o = 0,
                                            s = 0,
                                            l = 0;
                                        if (!Array.isArray(t) && "string" != typeof t) {
                                            if ("number" != typeof t) throw new Error("getTextDimensions expects text-parameter to be of type String or type Number or an Array of Strings.");
                                            t = String(t)
                                        }
                                        var u = e.maxWidth;
                                        u > 0 ? "string" == typeof t ? t = this.splitTextToSize(t, u) : "[object Array]" === Object.prototype.toString.call(t) && (t = this.splitTextToSize(t.join(" "), u)) : t = Array.isArray(t) ? t : [t];
                                        for (var c = 0; c < t.length; c++) o < (l = this.getStringUnitWidth(t[c], {
                                            font: i
                                        }) * n) && (o = l);
                                        return 0 !== o && (s = t.length), {
                                            w: o /= a,
                                            h: Math.max((s * n * this.getLineHeightFactor() - n * (this.getLineHeightFactor() - 1)) / a, 0)
                                        }
                                    }, t.cellAddPage = function() {
                                        r.call(this), this.addPage();
                                        var t = this.internal.__cell__.margins || e;
                                        return this.internal.__cell__.lastCell = new a(t.left, t.top, void 0, void 0), this.internal.__cell__.pages += 1, this
                                    };
                                    var o = t.cell = function() {
                                        var t;
                                        t = arguments[0] instanceof a ? arguments[0] : new a(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]), r.call(this);
                                        var i = this.internal.__cell__.lastCell,
                                            o = this.internal.__cell__.padding,
                                            s = this.internal.__cell__.margins || e,
                                            l = this.internal.__cell__.tableHeaderRow,
                                            u = this.internal.__cell__.printHeaders;
                                        return void 0 !== i.lineNumber && (i.lineNumber === t.lineNumber ? (t.x = (i.x || 0) + (i.width || 0), t.y = i.y || 0) : i.y + i.height + t.height + s.bottom > this.getPageHeight() ? (this.cellAddPage(), t.y = s.top, u && l && (this.printHeaderRow(t.lineNumber, !0), t.y += l[0].height)) : t.y = i.y + i.height || t.y), void 0 !== t.text[0] && (this.rect(t.x, t.y, t.width, t.height, !0 === n ? "FD" : void 0), "right" === t.align ? this.text(t.text, t.x + t.width - o, t.y + o, {
                                            align: "right",
                                            baseline: "top"
                                        }) : "center" === t.align ? this.text(t.text, t.x + t.width / 2, t.y + o, {
                                            align: "center",
                                            baseline: "top",
                                            maxWidth: t.width - o - o
                                        }) : this.text(t.text, t.x + o, t.y + o, {
                                            align: "left",
                                            baseline: "top",
                                            maxWidth: t.width - o - o
                                        })), this.internal.__cell__.lastCell = t, this
                                    };
                                    t.table = function(t, n, l, u, c) {
                                        if (r.call(this), !l) throw new Error("No data for PDF table.");
                                        var f, h, d, p, g = [],
                                            m = [],
                                            v = [],
                                            b = {},
                                            y = {},
                                            w = [],
                                            x = [],
                                            _ = (c = c || {}).autoSize || !1,
                                            N = !1 !== c.printHeaders,
                                            L = c.css && void 0 !== c.css["font-size"] ? 16 * c.css["font-size"] : c.fontSize || 12,
                                            S = c.margins || Object.assign({
                                                width: this.getPageWidth()
                                            }, e),
                                            A = "number" == typeof c.padding ? c.padding : 3,
                                            k = c.headerBackgroundColor || "#c8c8c8";
                                        if (i.call(this), this.internal.__cell__.printHeaders = N, this.internal.__cell__.margins = S, this.internal.__cell__.table_font_size = L, this.internal.__cell__.padding = A, this.internal.__cell__.headerBackgroundColor = k, this.setFontSize(L), null == u) m = g = Object.keys(l[0]), v = g.map((function() {
                                            return "left"
                                        }));
                                        else if (Array.isArray(u) && "object" == typeof u[0])
                                            for (g = u.map((function(t) {
                                                    return t.name
                                                })), m = u.map((function(t) {
                                                    return t.prompt || t.name || ""
                                                })), v = g.map((function(t) {
                                                    return t.align || "left"
                                                })), f = 0; f < u.length; f += 1) y[u[f].name] = u[f].width * (19.049976 / 25.4);
                                        else Array.isArray(u) && "string" == typeof u[0] && (m = g = u, v = g.map((function() {
                                            return "left"
                                        })));
                                        if (_)
                                            for (f = 0; f < g.length; f += 1) {
                                                for (b[p = g[f]] = l.map((function(t) {
                                                        return t[p]
                                                    })), this.setFont(void 0, "bold"), w.push(this.getTextDimensions(m[f], {
                                                        fontSize: this.internal.__cell__.table_font_size,
                                                        scaleFactor: this.internal.scaleFactor
                                                    }).w), h = b[p], this.setFont(void 0, "normal"), d = 0; d < h.length; d += 1) w.push(this.getTextDimensions(h[d], {
                                                    fontSize: this.internal.__cell__.table_font_size,
                                                    scaleFactor: this.internal.scaleFactor
                                                }).w);
                                                y[p] = Math.max.apply(null, w) + A + A, w = []
                                            }
                                        if (N) {
                                            var P = {};
                                            for (f = 0; f < g.length; f += 1) P[g[f]] = {}, P[g[f]].text = m[f], P[g[f]].align = v[f];
                                            var C = s.call(this, P, y);
                                            x = g.map((function(e) {
                                                return new a(t, n, y[e], C, P[e].text, void 0, P[e].align)
                                            })), this.setTableHeaderRow(x), this.printHeaderRow(1, !1)
                                        }
                                        var E = u.reduce((function(t, e) {
                                            return t[e.name] = e.align, t
                                        }), {});
                                        for (f = 0; f < l.length; f += 1) {
                                            var F = s.call(this, l[f], y);
                                            for (d = 0; d < g.length; d += 1) o.call(this, new a(t, n, y[g[d]], F, l[f][g[d]], f + 2, E[g[d]]))
                                        }
                                        return this.internal.__cell__.table_x = t, this.internal.__cell__.table_y = n, this
                                    };
                                    var s = function(t, e) {
                                        var n = this.internal.__cell__.padding,
                                            r = this.internal.__cell__.table_font_size,
                                            i = this.internal.scaleFactor;
                                        return Object.keys(t).map((function(e) {
                                            return [e, t[e]]
                                        })).map((function(t) {
                                            var e = t[0],
                                                n = t[1];
                                            return "object" == typeof n ? [e, n.text] : [e, n]
                                        })).map((function(t) {
                                            var r = t[0],
                                                i = t[1];
                                            return this.splitTextToSize(i, e[r] - n - n)
                                        }), this).map((function(t) {
                                            return this.getLineHeightFactor() * t.length * r / i + n + n
                                        }), this).reduce((function(t, e) {
                                            return Math.max(t, e)
                                        }), 0)
                                    };
                                    t.setTableHeaderRow = function(t) {
                                        r.call(this), this.internal.__cell__.tableHeaderRow = t
                                    }, t.printHeaderRow = function(t, e) {
                                        if (r.call(this), !this.internal.__cell__.tableHeaderRow) throw new Error("Property tableHeaderRow does not exist.");
                                        var i;
                                        if (n = !0, "function" == typeof this.internal.__cell__.headerFunction) {
                                            var s = this.internal.__cell__.headerFunction(this, this.internal.__cell__.pages);
                                            this.internal.__cell__.lastCell = new a(s[0], s[1], s[2], s[3], void 0, -1)
                                        }
                                        this.setFont(void 0, "bold");
                                        for (var l = [], u = 0; u < this.internal.__cell__.tableHeaderRow.length; u += 1) i = this.internal.__cell__.tableHeaderRow[u].clone(), e && (i.y = this.internal.__cell__.margins.top || 0, l.push(i)), i.lineNumber = t, this.setFillColor(this.internal.__cell__.headerBackgroundColor), o.call(this, i);
                                        l.length > 0 && this.setTableHeaderRow(l), this.setFont(void 0, "normal"), n = !1
                                    }
                                }(b.API),
                                function(t) {
                                    var e, n, r, i, o, s, l, u, c, f = function(t) {
                                        return t = t || {}, this.isStrokeTransparent = t.isStrokeTransparent || !1, this.strokeOpacity = t.strokeOpacity || 1, this.strokeStyle = t.strokeStyle || "#ff0000", this.fillStyle = t.fillStyle || "#ff0000", this.isFillTransparent = t.isFillTransparent || !1, this.fillOpacity = t.fillOpacity || 1, this.font = t.font || "10px sans-serif", this.textBaseline = t.textBaseline || "alphabetic", this.textAlign = t.textAlign || "left", this.lineWidth = t.lineWidth || 1, this.lineJoin = t.lineJoin || "miter", this.lineCap = t.lineCap || "butt", this.path = t.path || [], this.transform = void 0 !== t.transform ? t.transform.clone() : new u, this.globalCompositeOperation = t.globalCompositeOperation || "normal", this.globalAlpha = t.globalAlpha || 1, this.clip_path = t.clip_path || [], this.currentPoint = t.currentPoint || new s, this.miterLimit = t.miterLimit || 10, this.lastPoint = t.lastPoint || new s, this.ignoreClearRect = "boolean" != typeof t.ignoreClearRect || t.ignoreClearRect, this
                                    };
                                    t.events.push(["initialized", function() {
                                        this.context2d = new d(this), e = this.internal.f2, n = this.internal.getCoordinateString, r = this.internal.getVerticalCoordinateString, i = this.internal.getHorizontalCoordinate, o = this.internal.getVerticalCoordinate, s = this.internal.Point, l = this.internal.Rectangle, u = this.internal.Matrix, c = new f
                                    }]);
                                    var d = function(t) {
                                        Object.defineProperty(this, "canvas", {
                                            get: function() {
                                                return {
                                                    parentNode: !1,
                                                    style: !1
                                                }
                                            }
                                        });
                                        var e = t;
                                        Object.defineProperty(this, "pdf", {
                                            get: function() {
                                                return e
                                            }
                                        });
                                        var n = !1;
                                        Object.defineProperty(this, "pageWrapXEnabled", {
                                            get: function() {
                                                return n
                                            },
                                            set: function(t) {
                                                n = Boolean(t)
                                            }
                                        });
                                        var r = !1;
                                        Object.defineProperty(this, "pageWrapYEnabled", {
                                            get: function() {
                                                return r
                                            },
                                            set: function(t) {
                                                r = Boolean(t)
                                            }
                                        });
                                        var i = 0;
                                        Object.defineProperty(this, "posX", {
                                            get: function() {
                                                return i
                                            },
                                            set: function(t) {
                                                isNaN(t) || (i = t)
                                            }
                                        });
                                        var a = 0;
                                        Object.defineProperty(this, "posY", {
                                            get: function() {
                                                return a
                                            },
                                            set: function(t) {
                                                isNaN(t) || (a = t)
                                            }
                                        });
                                        var o = !1;
                                        Object.defineProperty(this, "autoPaging", {
                                            get: function() {
                                                return o
                                            },
                                            set: function(t) {
                                                o = Boolean(t)
                                            }
                                        });
                                        var s = 0;
                                        Object.defineProperty(this, "lastBreak", {
                                            get: function() {
                                                return s
                                            },
                                            set: function(t) {
                                                s = t
                                            }
                                        });
                                        var l = [];
                                        Object.defineProperty(this, "pageBreaks", {
                                            get: function() {
                                                return l
                                            },
                                            set: function(t) {
                                                l = t
                                            }
                                        }), Object.defineProperty(this, "ctx", {
                                            get: function() {
                                                return c
                                            },
                                            set: function(t) {
                                                t instanceof f && (c = t)
                                            }
                                        }), Object.defineProperty(this, "path", {
                                            get: function() {
                                                return c.path
                                            },
                                            set: function(t) {
                                                c.path = t
                                            }
                                        });
                                        var u = [];
                                        Object.defineProperty(this, "ctxStack", {
                                            get: function() {
                                                return u
                                            },
                                            set: function(t) {
                                                u = t
                                            }
                                        }), Object.defineProperty(this, "fillStyle", {
                                            get: function() {
                                                return this.ctx.fillStyle
                                            },
                                            set: function(t) {
                                                var e;
                                                e = p(t), this.ctx.fillStyle = e.style, this.ctx.isFillTransparent = 0 === e.a, this.ctx.fillOpacity = e.a, this.pdf.setFillColor(e.r, e.g, e.b, {
                                                    a: e.a
                                                }), this.pdf.setTextColor(e.r, e.g, e.b, {
                                                    a: e.a
                                                })
                                            }
                                        }), Object.defineProperty(this, "strokeStyle", {
                                            get: function() {
                                                return this.ctx.strokeStyle
                                            },
                                            set: function(t) {
                                                var e = p(t);
                                                this.ctx.strokeStyle = e.style, this.ctx.isStrokeTransparent = 0 === e.a, this.ctx.strokeOpacity = e.a, 0 === e.a ? this.pdf.setDrawColor(255, 255, 255) : (e.a, this.pdf.setDrawColor(e.r, e.g, e.b))
                                            }
                                        }), Object.defineProperty(this, "lineCap", {
                                            get: function() {
                                                return this.ctx.lineCap
                                            },
                                            set: function(t) {
                                                -1 !== ["butt", "round", "square"].indexOf(t) && (this.ctx.lineCap = t, this.pdf.setLineCap(t))
                                            }
                                        }), Object.defineProperty(this, "lineWidth", {
                                            get: function() {
                                                return this.ctx.lineWidth
                                            },
                                            set: function(t) {
                                                isNaN(t) || (this.ctx.lineWidth = t, this.pdf.setLineWidth(t))
                                            }
                                        }), Object.defineProperty(this, "lineJoin", {
                                            get: function() {
                                                return this.ctx.lineJoin
                                            },
                                            set: function(t) {
                                                -1 !== ["bevel", "round", "miter"].indexOf(t) && (this.ctx.lineJoin = t, this.pdf.setLineJoin(t))
                                            }
                                        }), Object.defineProperty(this, "miterLimit", {
                                            get: function() {
                                                return this.ctx.miterLimit
                                            },
                                            set: function(t) {
                                                isNaN(t) || (this.ctx.miterLimit = t, this.pdf.setMiterLimit(t))
                                            }
                                        }), Object.defineProperty(this, "textBaseline", {
                                            get: function() {
                                                return this.ctx.textBaseline
                                            },
                                            set: function(t) {
                                                this.ctx.textBaseline = t
                                            }
                                        }), Object.defineProperty(this, "textAlign", {
                                            get: function() {
                                                return this.ctx.textAlign
                                            },
                                            set: function(t) {
                                                -1 !== ["right", "end", "center", "left", "start"].indexOf(t) && (this.ctx.textAlign = t)
                                            }
                                        }), Object.defineProperty(this, "font", {
                                            get: function() {
                                                return this.ctx.font
                                            },
                                            set: function(t) {
                                                var e;
                                                if (this.ctx.font = t, null !== (e = /^\s*(?=(?:(?:[-a-z]+\s*){0,2}(italic|oblique))?)(?=(?:(?:[-a-z]+\s*){0,2}(small-caps))?)(?=(?:(?:[-a-z]+\s*){0,2}(bold(?:er)?|lighter|[1-9]00))?)(?:(?:normal|\1|\2|\3)\s*){0,3}((?:xx?-)?(?:small|large)|medium|smaller|larger|[.\d]+(?:\%|in|[cem]m|ex|p[ctx]))(?:\s*\/\s*(normal|[.\d]+(?:\%|in|[cem]m|ex|p[ctx])))?\s*([-_,\"\'\sa-z]+?)\s*$/i.exec(t))) {
                                                    var n = e[1],
                                                        r = (e[2], e[3]),
                                                        i = e[4],
                                                        a = (e[5], e[6]),
                                                        o = /^([.\d]+)((?:%|in|[cem]m|ex|p[ctx]))$/i.exec(i)[2];
                                                    i = "px" === o ? Math.floor(parseFloat(i) * this.pdf.internal.scaleFactor) : "em" === o ? Math.floor(parseFloat(i) * this.pdf.getFontSize()) : Math.floor(parseFloat(i) * this.pdf.internal.scaleFactor), this.pdf.setFontSize(i);
                                                    var s = "";
                                                    ("bold" === r || parseInt(r, 10) >= 700 || "bold" === n) && (s = "bold"), "italic" === n && (s += "italic"), 0 === s.length && (s = "normal");
                                                    for (var l = "", u = a.replace(/"|'/g, "").split(/\s*,\s*/), c = {
                                                            arial: "Helvetica",
                                                            Arial: "Helvetica",
                                                            verdana: "Helvetica",
                                                            Verdana: "Helvetica",
                                                            helvetica: "Helvetica",
                                                            Helvetica: "Helvetica",
                                                            "sans-serif": "Helvetica",
                                                            fixed: "Courier",
                                                            monospace: "Courier",
                                                            terminal: "Courier",
                                                            cursive: "Times",
                                                            fantasy: "Times",
                                                            serif: "Times"
                                                        }, f = 0; f < u.length; f++) {
                                                        if (void 0 !== this.pdf.internal.getFont(u[f], s, {
                                                                noFallback: !0,
                                                                disableWarning: !0
                                                            })) {
                                                            l = u[f];
                                                            break
                                                        }
                                                        if ("bolditalic" === s && void 0 !== this.pdf.internal.getFont(u[f], "bold", {
                                                                noFallback: !0,
                                                                disableWarning: !0
                                                            })) l = u[f], s = "bold";
                                                        else if (void 0 !== this.pdf.internal.getFont(u[f], "normal", {
                                                                noFallback: !0,
                                                                disableWarning: !0
                                                            })) {
                                                            l = u[f], s = "normal";
                                                            break
                                                        }
                                                    }
                                                    if ("" === l)
                                                        for (var h = 0; h < u.length; h++)
                                                            if (c[u[h]]) {
                                                                l = c[u[h]];
                                                                break
                                                            } l = "" === l ? "Times" : l, this.pdf.setFont(l, s)
                                                }
                                            }
                                        }), Object.defineProperty(this, "globalCompositeOperation", {
                                            get: function() {
                                                return this.ctx.globalCompositeOperation
                                            },
                                            set: function(t) {
                                                this.ctx.globalCompositeOperation = t
                                            }
                                        }), Object.defineProperty(this, "globalAlpha", {
                                            get: function() {
                                                return this.ctx.globalAlpha
                                            },
                                            set: function(t) {
                                                this.ctx.globalAlpha = t
                                            }
                                        }), Object.defineProperty(this, "ignoreClearRect", {
                                            get: function() {
                                                return this.ctx.ignoreClearRect
                                            },
                                            set: function(t) {
                                                this.ctx.ignoreClearRect = Boolean(t)
                                            }
                                        })
                                    };
                                    d.prototype.fill = function() {
                                        x.call(this, "fill", !1)
                                    }, d.prototype.stroke = function() {
                                        x.call(this, "stroke", !1)
                                    }, d.prototype.beginPath = function() {
                                        this.path = [{
                                            type: "begin"
                                        }]
                                    }, d.prototype.moveTo = function(t, e) {
                                        if (isNaN(t) || isNaN(e)) throw a.error("jsPDF.context2d.moveTo: Invalid arguments", arguments), new Error("Invalid arguments passed to jsPDF.context2d.moveTo");
                                        var n = this.ctx.transform.applyToPoint(new s(t, e));
                                        this.path.push({
                                            type: "mt",
                                            x: n.x,
                                            y: n.y
                                        }), this.ctx.lastPoint = new s(t, e)
                                    }, d.prototype.closePath = function() {
                                        var t = new s(0, 0),
                                            e = 0;
                                        for (e = this.path.length - 1; - 1 !== e; e--)
                                            if ("begin" === this.path[e].type && "object" == typeof this.path[e + 1] && "number" == typeof this.path[e + 1].x) {
                                                t = new s(this.path[e + 1].x, this.path[e + 1].y), this.path.push({
                                                    type: "lt",
                                                    x: t.x,
                                                    y: t.y
                                                });
                                                break
                                            }
                                        "object" == typeof this.path[e + 2] && "number" == typeof this.path[e + 2].x && this.path.push(JSON.parse(JSON.stringify(this.path[e + 2]))), this.path.push({
                                            type: "close"
                                        }), this.ctx.lastPoint = new s(t.x, t.y)
                                    }, d.prototype.lineTo = function(t, e) {
                                        if (isNaN(t) || isNaN(e)) throw a.error("jsPDF.context2d.lineTo: Invalid arguments", arguments), new Error("Invalid arguments passed to jsPDF.context2d.lineTo");
                                        var n = this.ctx.transform.applyToPoint(new s(t, e));
                                        this.path.push({
                                            type: "lt",
                                            x: n.x,
                                            y: n.y
                                        }), this.ctx.lastPoint = new s(n.x, n.y)
                                    }, d.prototype.clip = function() {
                                        this.ctx.clip_path = JSON.parse(JSON.stringify(this.path)), x.call(this, null, !0)
                                    }, d.prototype.quadraticCurveTo = function(t, e, n, r) {
                                        if (isNaN(n) || isNaN(r) || isNaN(t) || isNaN(e)) throw a.error("jsPDF.context2d.quadraticCurveTo: Invalid arguments", arguments), new Error("Invalid arguments passed to jsPDF.context2d.quadraticCurveTo");
                                        var i = this.ctx.transform.applyToPoint(new s(n, r)),
                                            o = this.ctx.transform.applyToPoint(new s(t, e));
                                        this.path.push({
                                            type: "qct",
                                            x1: o.x,
                                            y1: o.y,
                                            x: i.x,
                                            y: i.y
                                        }), this.ctx.lastPoint = new s(i.x, i.y)
                                    }, d.prototype.bezierCurveTo = function(t, e, n, r, i, o) {
                                        if (isNaN(i) || isNaN(o) || isNaN(t) || isNaN(e) || isNaN(n) || isNaN(r)) throw a.error("jsPDF.context2d.bezierCurveTo: Invalid arguments", arguments), new Error("Invalid arguments passed to jsPDF.context2d.bezierCurveTo");
                                        var l = this.ctx.transform.applyToPoint(new s(i, o)),
                                            u = this.ctx.transform.applyToPoint(new s(t, e)),
                                            c = this.ctx.transform.applyToPoint(new s(n, r));
                                        this.path.push({
                                            type: "bct",
                                            x1: u.x,
                                            y1: u.y,
                                            x2: c.x,
                                            y2: c.y,
                                            x: l.x,
                                            y: l.y
                                        }), this.ctx.lastPoint = new s(l.x, l.y)
                                    }, d.prototype.arc = function(t, e, n, r, i, o) {
                                        if (isNaN(t) || isNaN(e) || isNaN(n) || isNaN(r) || isNaN(i)) throw a.error("jsPDF.context2d.arc: Invalid arguments", arguments), new Error("Invalid arguments passed to jsPDF.context2d.arc");
                                        if (o = Boolean(o), !this.ctx.transform.isIdentity) {
                                            var l = this.ctx.transform.applyToPoint(new s(t, e));
                                            t = l.x, e = l.y;
                                            var u = this.ctx.transform.applyToPoint(new s(0, n)),
                                                c = this.ctx.transform.applyToPoint(new s(0, 0));
                                            n = Math.sqrt(Math.pow(u.x - c.x, 2) + Math.pow(u.y - c.y, 2))
                                        }
                                        Math.abs(i - r) >= 2 * Math.PI && (r = 0, i = 2 * Math.PI), this.path.push({
                                            type: "arc",
                                            x: t,
                                            y: e,
                                            radius: n,
                                            startAngle: r,
                                            endAngle: i,
                                            counterclockwise: o
                                        })
                                    }, d.prototype.arcTo = function(t, e, n, r, i) {
                                        throw new Error("arcTo not implemented.")
                                    }, d.prototype.rect = function(t, e, n, r) {
                                        if (isNaN(t) || isNaN(e) || isNaN(n) || isNaN(r)) throw a.error("jsPDF.context2d.rect: Invalid arguments", arguments), new Error("Invalid arguments passed to jsPDF.context2d.rect");
                                        this.moveTo(t, e), this.lineTo(t + n, e), this.lineTo(t + n, e + r), this.lineTo(t, e + r), this.lineTo(t, e), this.lineTo(t + n, e), this.lineTo(t, e)
                                    }, d.prototype.fillRect = function(t, e, n, r) {
                                        if (isNaN(t) || isNaN(e) || isNaN(n) || isNaN(r)) throw a.error("jsPDF.context2d.fillRect: Invalid arguments", arguments), new Error("Invalid arguments passed to jsPDF.context2d.fillRect");
                                        if (!g.call(this)) {
                                            var i = {};
                                            "butt" !== this.lineCap && (i.lineCap = this.lineCap, this.lineCap = "butt"), "miter" !== this.lineJoin && (i.lineJoin = this.lineJoin, this.lineJoin = "miter"), this.beginPath(), this.rect(t, e, n, r), this.fill(), i.hasOwnProperty("lineCap") && (this.lineCap = i.lineCap), i.hasOwnProperty("lineJoin") && (this.lineJoin = i.lineJoin)
                                        }
                                    }, d.prototype.strokeRect = function(t, e, n, r) {
                                        if (isNaN(t) || isNaN(e) || isNaN(n) || isNaN(r)) throw a.error("jsPDF.context2d.strokeRect: Invalid arguments", arguments), new Error("Invalid arguments passed to jsPDF.context2d.strokeRect");
                                        m.call(this) || (this.beginPath(), this.rect(t, e, n, r), this.stroke())
                                    }, d.prototype.clearRect = function(t, e, n, r) {
                                        if (isNaN(t) || isNaN(e) || isNaN(n) || isNaN(r)) throw a.error("jsPDF.context2d.clearRect: Invalid arguments", arguments), new Error("Invalid arguments passed to jsPDF.context2d.clearRect");
                                        this.ignoreClearRect || (this.fillStyle = "#ffffff", this.fillRect(t, e, n, r))
                                    }, d.prototype.save = function(t) {
                                        t = "boolean" != typeof t || t;
                                        for (var e = this.pdf.internal.getCurrentPageInfo().pageNumber, n = 0; n < this.pdf.internal.getNumberOfPages(); n++) this.pdf.setPage(n + 1), this.pdf.internal.out("q");
                                        if (this.pdf.setPage(e), t) {
                                            this.ctx.fontSize = this.pdf.internal.getFontSize();
                                            var r = new f(this.ctx);
                                            this.ctxStack.push(this.ctx), this.ctx = r
                                        }
                                    }, d.prototype.restore = function(t) {
                                        t = "boolean" != typeof t || t;
                                        for (var e = this.pdf.internal.getCurrentPageInfo().pageNumber, n = 0; n < this.pdf.internal.getNumberOfPages(); n++) this.pdf.setPage(n + 1), this.pdf.internal.out("Q");
                                        this.pdf.setPage(e), t && 0 !== this.ctxStack.length && (this.ctx = this.ctxStack.pop(), this.fillStyle = this.ctx.fillStyle, this.strokeStyle = this.ctx.strokeStyle, this.font = this.ctx.font, this.lineCap = this.ctx.lineCap, this.lineWidth = this.ctx.lineWidth, this.lineJoin = this.ctx.lineJoin)
                                    }, d.prototype.toDataURL = function() {
                                        throw new Error("toDataUrl not implemented.")
                                    };
                                    var p = function(t) {
                                            var e, n, r, i;
                                            if (!0 === t.isCanvasGradient && (t = t.getColor()), !t) return {
                                                r: 0,
                                                g: 0,
                                                b: 0,
                                                a: 0,
                                                style: t
                                            };
                                            if (/transparent|rgba\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*,\s*0+\s*\)/.test(t)) e = 0, n = 0, r = 0, i = 0;
                                            else {
                                                var a = /rgb\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\)/.exec(t);
                                                if (null !== a) e = parseInt(a[1]), n = parseInt(a[2]), r = parseInt(a[3]), i = 1;
                                                else if (null !== (a = /rgba\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*,\s*([\d.]+)\s*\)/.exec(t))) e = parseInt(a[1]), n = parseInt(a[2]), r = parseInt(a[3]), i = parseFloat(a[4]);
                                                else {
                                                    if (i = 1, "string" == typeof t && "#" !== t.charAt(0)) {
                                                        var o = new h(t);
                                                        t = o.ok ? o.toHex() : "#ff0000"
                                                    }
                                                    4 === t.length ? (e = t.substring(1, 2), e += e, n = t.substring(2, 3), n += n, r = t.substring(3, 4), r += r) : (e = t.substring(1, 3), n = t.substring(3, 5), r = t.substring(5, 7)), e = parseInt(e, 16), n = parseInt(n, 16), r = parseInt(r, 16)
                                                }
                                            }
                                            return {
                                                r: e,
                                                g: n,
                                                b: r,
                                                a: i,
                                                style: t
                                            }
                                        },
                                        g = function() {
                                            return this.ctx.isFillTransparent || 0 == this.globalAlpha
                                        },
                                        m = function() {
                                            return Boolean(this.ctx.isStrokeTransparent || 0 == this.globalAlpha)
                                        };
                                    d.prototype.fillText = function(t, e, n, r) {
                                        if (isNaN(e) || isNaN(n) || "string" != typeof t) throw a.error("jsPDF.context2d.fillText: Invalid arguments", arguments), new Error("Invalid arguments passed to jsPDF.context2d.fillText");
                                        if (r = isNaN(r) ? void 0 : r, !g.call(this)) {
                                            n = N.call(this, n);
                                            var i = j(this.ctx.transform.rotation),
                                                o = this.ctx.transform.scaleX;
                                            P.call(this, {
                                                text: t,
                                                x: e,
                                                y: n,
                                                scale: o,
                                                angle: i,
                                                align: this.textAlign,
                                                maxWidth: r
                                            })
                                        }
                                    }, d.prototype.strokeText = function(t, e, n, r) {
                                        if (isNaN(e) || isNaN(n) || "string" != typeof t) throw a.error("jsPDF.context2d.strokeText: Invalid arguments", arguments), new Error("Invalid arguments passed to jsPDF.context2d.strokeText");
                                        if (!m.call(this)) {
                                            r = isNaN(r) ? void 0 : r, n = N.call(this, n);
                                            var i = j(this.ctx.transform.rotation),
                                                o = this.ctx.transform.scaleX;
                                            P.call(this, {
                                                text: t,
                                                x: e,
                                                y: n,
                                                scale: o,
                                                renderingMode: "stroke",
                                                angle: i,
                                                align: this.textAlign,
                                                maxWidth: r
                                            })
                                        }
                                    }, d.prototype.measureText = function(t) {
                                        if ("string" != typeof t) throw a.error("jsPDF.context2d.measureText: Invalid arguments", arguments), new Error("Invalid arguments passed to jsPDF.context2d.measureText");
                                        var e = this.pdf,
                                            n = this.pdf.internal.scaleFactor,
                                            r = e.internal.getFontSize(),
                                            i = e.getStringUnitWidth(t) * r / e.internal.scaleFactor,
                                            o = function(t) {
                                                var e = (t = t || {}).width || 0;
                                                return Object.defineProperty(this, "width", {
                                                    get: function() {
                                                        return e
                                                    }
                                                }), this
                                            };
                                        return new o({
                                            width: i *= Math.round(96 * n / 72 * 1e4) / 1e4
                                        })
                                    }, d.prototype.scale = function(t, e) {
                                        if (isNaN(t) || isNaN(e)) throw a.error("jsPDF.context2d.scale: Invalid arguments", arguments), new Error("Invalid arguments passed to jsPDF.context2d.scale");
                                        var n = new u(t, 0, 0, e, 0, 0);
                                        this.ctx.transform = this.ctx.transform.multiply(n)
                                    }, d.prototype.rotate = function(t) {
                                        if (isNaN(t)) throw a.error("jsPDF.context2d.rotate: Invalid arguments", arguments), new Error("Invalid arguments passed to jsPDF.context2d.rotate");
                                        var e = new u(Math.cos(t), Math.sin(t), -Math.sin(t), Math.cos(t), 0, 0);
                                        this.ctx.transform = this.ctx.transform.multiply(e)
                                    }, d.prototype.translate = function(t, e) {
                                        if (isNaN(t) || isNaN(e)) throw a.error("jsPDF.context2d.translate: Invalid arguments", arguments), new Error("Invalid arguments passed to jsPDF.context2d.translate");
                                        var n = new u(1, 0, 0, 1, t, e);
                                        this.ctx.transform = this.ctx.transform.multiply(n)
                                    }, d.prototype.transform = function(t, e, n, r, i, o) {
                                        if (isNaN(t) || isNaN(e) || isNaN(n) || isNaN(r) || isNaN(i) || isNaN(o)) throw a.error("jsPDF.context2d.transform: Invalid arguments", arguments), new Error("Invalid arguments passed to jsPDF.context2d.transform");
                                        var s = new u(t, e, n, r, i, o);
                                        this.ctx.transform = this.ctx.transform.multiply(s)
                                    }, d.prototype.setTransform = function(t, e, n, r, i, a) {
                                        t = isNaN(t) ? 1 : t, e = isNaN(e) ? 0 : e, n = isNaN(n) ? 0 : n, r = isNaN(r) ? 1 : r, i = isNaN(i) ? 0 : i, a = isNaN(a) ? 0 : a, this.ctx.transform = new u(t, e, n, r, i, a)
                                    }, d.prototype.drawImage = function(t, e, n, r, i, a, o, s, c) {
                                        var f = this.pdf.getImageProperties(t),
                                            h = 1,
                                            d = 1,
                                            p = 1,
                                            g = 1;
                                        void 0 !== r && void 0 !== s && (p = s / r, g = c / i, h = f.width / r * s / r, d = f.height / i * c / i), void 0 === a && (a = e, o = n, e = 0, n = 0), void 0 !== r && void 0 === s && (s = r, c = i), void 0 === r && void 0 === s && (s = f.width, c = f.height);
                                        for (var m, b = this.ctx.transform.decompose(), x = j(b.rotate.shx), N = new u, L = (N = (N = (N = N.multiply(b.translate)).multiply(b.skew)).multiply(b.scale)).applyToRectangle(new l(a - e * p, o - n * g, r * h, i * d)), S = v.call(this, L), A = [], k = 0; k < S.length; k += 1) - 1 === A.indexOf(S[k]) && A.push(S[k]);
                                        if (w(A), this.autoPaging)
                                            for (var P = A[0], C = A[A.length - 1], E = P; E < C + 1; E++) {
                                                if (this.pdf.setPage(E), 0 !== this.ctx.clip_path.length) {
                                                    var F = this.path;
                                                    m = JSON.parse(JSON.stringify(this.ctx.clip_path)), this.path = y(m, this.posX, -1 * this.pdf.internal.pageSize.height * (E - 1) + this.posY), _.call(this, "fill", !0), this.path = F
                                                }
                                                var I = JSON.parse(JSON.stringify(L));
                                                I = y([I], this.posX, -1 * this.pdf.internal.pageSize.height * (E - 1) + this.posY)[0], this.pdf.addImage(t, "JPEG", I.x, I.y, I.w, I.h, null, null, x)
                                            } else this.pdf.addImage(t, "JPEG", L.x, L.y, L.w, L.h, null, null, x)
                                    };
                                    var v = function(t, e, n) {
                                            var r = [];
                                            switch (e = e || this.pdf.internal.pageSize.width, n = n || this.pdf.internal.pageSize.height, t.type) {
                                                default:
                                                case "mt":
                                                case "lt":
                                                    r.push(Math.floor((t.y + this.posY) / n) + 1);
                                                    break;
                                                case "arc":
                                                    r.push(Math.floor((t.y + this.posY - t.radius) / n) + 1), r.push(Math.floor((t.y + this.posY + t.radius) / n) + 1);
                                                    break;
                                                case "qct":
                                                    var i = M(this.ctx.lastPoint.x, this.ctx.lastPoint.y, t.x1, t.y1, t.x, t.y);
                                                    r.push(Math.floor(i.y / n) + 1), r.push(Math.floor((i.y + i.h) / n) + 1);
                                                    break;
                                                case "bct":
                                                    var a = T(this.ctx.lastPoint.x, this.ctx.lastPoint.y, t.x1, t.y1, t.x2, t.y2, t.x, t.y);
                                                    r.push(Math.floor(a.y / n) + 1), r.push(Math.floor((a.y + a.h) / n) + 1);
                                                    break;
                                                case "rect":
                                                    r.push(Math.floor((t.y + this.posY) / n) + 1), r.push(Math.floor((t.y + t.h + this.posY) / n) + 1)
                                            }
                                            for (var o = 0; o < r.length; o += 1)
                                                for (; this.pdf.internal.getNumberOfPages() < r[o];) b.call(this);
                                            return r
                                        },
                                        b = function() {
                                            var t = this.fillStyle,
                                                e = this.strokeStyle,
                                                n = this.font,
                                                r = this.lineCap,
                                                i = this.lineWidth,
                                                a = this.lineJoin;
                                            this.pdf.addPage(), this.fillStyle = t, this.strokeStyle = e, this.font = n, this.lineCap = r, this.lineWidth = i, this.lineJoin = a
                                        },
                                        y = function(t, e, n) {
                                            for (var r = 0; r < t.length; r++) switch (t[r].type) {
                                                case "bct":
                                                    t[r].x2 += e, t[r].y2 += n;
                                                case "qct":
                                                    t[r].x1 += e, t[r].y1 += n;
                                                case "mt":
                                                case "lt":
                                                case "arc":
                                                default:
                                                    t[r].x += e, t[r].y += n
                                            }
                                            return t
                                        },
                                        w = function(t) {
                                            return t.sort((function(t, e) {
                                                return t - e
                                            }))
                                        },
                                        x = function(t, e) {
                                            for (var n, r, i = this.fillStyle, a = this.strokeStyle, o = this.lineCap, s = this.lineWidth, l = s * this.ctx.transform.scaleX, u = this.lineJoin, c = JSON.parse(JSON.stringify(this.path)), f = JSON.parse(JSON.stringify(this.path)), h = [], d = 0; d < f.length; d++)
                                                if (void 0 !== f[d].x)
                                                    for (var p = v.call(this, f[d]), g = 0; g < p.length; g += 1) - 1 === h.indexOf(p[g]) && h.push(p[g]);
                                            for (var m = 0; m < h.length; m++)
                                                for (; this.pdf.internal.getNumberOfPages() < h[m];) b.call(this);
                                            if (w(h), this.autoPaging)
                                                for (var x = h[0], N = h[h.length - 1], L = x; L < N + 1; L++) {
                                                    if (this.pdf.setPage(L), this.fillStyle = i, this.strokeStyle = a, this.lineCap = o, this.lineWidth = l, this.lineJoin = u, 0 !== this.ctx.clip_path.length) {
                                                        var S = this.path;
                                                        n = JSON.parse(JSON.stringify(this.ctx.clip_path)), this.path = y(n, this.posX, -1 * this.pdf.internal.pageSize.height * (L - 1) + this.posY), _.call(this, t, !0), this.path = S
                                                    }
                                                    r = JSON.parse(JSON.stringify(c)), this.path = y(r, this.posX, -1 * this.pdf.internal.pageSize.height * (L - 1) + this.posY), !1 !== e && 0 !== L || _.call(this, t, e), this.lineWidth = s
                                                } else this.lineWidth = l, _.call(this, t, e), this.lineWidth = s;
                                            this.path = c
                                        },
                                        _ = function(t, e) {
                                            if (("stroke" !== t || e || !m.call(this)) && ("stroke" === t || e || !g.call(this))) {
                                                for (var n, r, i = [], a = this.path, o = 0; o < a.length; o++) {
                                                    var s = a[o];
                                                    switch (s.type) {
                                                        case "begin":
                                                            i.push({
                                                                begin: !0
                                                            });
                                                            break;
                                                        case "close":
                                                            i.push({
                                                                close: !0
                                                            });
                                                            break;
                                                        case "mt":
                                                            i.push({
                                                                start: s,
                                                                deltas: [],
                                                                abs: []
                                                            });
                                                            break;
                                                        case "lt":
                                                            var l = i.length;
                                                            if (!isNaN(a[o - 1].x) && (n = [s.x - a[o - 1].x, s.y - a[o - 1].y], l > 0))
                                                                for (; l >= 0; l--)
                                                                    if (!0 !== i[l - 1].close && !0 !== i[l - 1].begin) {
                                                                        i[l - 1].deltas.push(n), i[l - 1].abs.push(s);
                                                                        break
                                                                    } break;
                                                        case "bct":
                                                            n = [s.x1 - a[o - 1].x, s.y1 - a[o - 1].y, s.x2 - a[o - 1].x, s.y2 - a[o - 1].y, s.x - a[o - 1].x, s.y - a[o - 1].y], i[i.length - 1].deltas.push(n);
                                                            break;
                                                        case "qct":
                                                            var u = a[o - 1].x + 2 / 3 * (s.x1 - a[o - 1].x),
                                                                c = a[o - 1].y + 2 / 3 * (s.y1 - a[o - 1].y),
                                                                f = s.x + 2 / 3 * (s.x1 - s.x),
                                                                h = s.y + 2 / 3 * (s.y1 - s.y),
                                                                d = s.x,
                                                                p = s.y;
                                                            n = [u - a[o - 1].x, c - a[o - 1].y, f - a[o - 1].x, h - a[o - 1].y, d - a[o - 1].x, p - a[o - 1].y], i[i.length - 1].deltas.push(n);
                                                            break;
                                                        case "arc":
                                                            i.push({
                                                                deltas: [],
                                                                abs: [],
                                                                arc: !0
                                                            }), Array.isArray(i[i.length - 1].abs) && i[i.length - 1].abs.push(s)
                                                    }
                                                }
                                                r = e ? null : "stroke" === t ? "stroke" : "fill";
                                                for (var v = 0; v < i.length; v++) {
                                                    if (i[v].arc) {
                                                        for (var b = i[v].abs, y = 0; y < b.length; y++) {
                                                            var w = b[y];
                                                            "arc" === w.type ? L.call(this, w.x, w.y, w.radius, w.startAngle, w.endAngle, w.counterclockwise, void 0, e) : C.call(this, w.x, w.y)
                                                        }
                                                        S.call(this, r), this.pdf.internal.out("h")
                                                    }
                                                    if (!i[v].arc && !0 !== i[v].close && !0 !== i[v].begin) {
                                                        var x = i[v].start.x,
                                                            _ = i[v].start.y;
                                                        E.call(this, i[v].deltas, x, _)
                                                    }
                                                }
                                                r && S.call(this, r), e && A.call(this)
                                            }
                                        },
                                        N = function(t) {
                                            var e = this.pdf.internal.getFontSize() / this.pdf.internal.scaleFactor,
                                                n = e * (this.pdf.internal.getLineHeightFactor() - 1);
                                            switch (this.ctx.textBaseline) {
                                                case "bottom":
                                                    return t - n;
                                                case "top":
                                                    return t + e - n;
                                                case "hanging":
                                                    return t + e - 2 * n;
                                                case "middle":
                                                    return t + e / 2 - n;
                                                case "ideographic":
                                                    return t;
                                                case "alphabetic":
                                                default:
                                                    return t
                                            }
                                        };
                                    d.prototype.createLinearGradient = function() {
                                        var t = function() {};
                                        return t.colorStops = [], t.addColorStop = function(t, e) {
                                            this.colorStops.push([t, e])
                                        }, t.getColor = function() {
                                            return 0 === this.colorStops.length ? "#ff0000" : this.colorStops[0][1]
                                        }, t.isCanvasGradient = !0, t
                                    }, d.prototype.createPattern = function() {
                                        return this.createLinearGradient()
                                    }, d.prototype.createRadialGradient = function() {
                                        return this.createLinearGradient()
                                    };
                                    var L = function(t, e, n, r, i, a, o, s) {
                                            for (var l = I.call(this, n, r, i, a), u = 0; u < l.length; u++) {
                                                var c = l[u];
                                                0 === u && k.call(this, c.x1 + t, c.y1 + e), F.call(this, t, e, c.x2, c.y2, c.x3, c.y3, c.x4, c.y4)
                                            }
                                            s ? A.call(this) : S.call(this, o)
                                        },
                                        S = function(t) {
                                            switch (t) {
                                                case "stroke":
                                                    this.pdf.internal.out("S");
                                                    break;
                                                case "fill":
                                                    this.pdf.internal.out("f")
                                            }
                                        },
                                        A = function() {
                                            this.pdf.clip(), this.pdf.discardPath()
                                        },
                                        k = function(t, e) {
                                            this.pdf.internal.out(n(t) + " " + r(e) + " m")
                                        },
                                        P = function(t) {
                                            var e;
                                            switch (t.align) {
                                                case "right":
                                                case "end":
                                                    e = "right";
                                                    break;
                                                case "center":
                                                    e = "center";
                                                    break;
                                                case "left":
                                                case "start":
                                                default:
                                                    e = "left"
                                            }
                                            var n = this.ctx.transform.applyToPoint(new s(t.x, t.y)),
                                                r = this.ctx.transform.decompose(),
                                                i = new u;
                                            i = (i = (i = i.multiply(r.translate)).multiply(r.skew)).multiply(r.scale);
                                            for (var a, o, c, f = this.pdf.getTextDimensions(t.text), h = this.ctx.transform.applyToRectangle(new l(t.x, t.y, f.w, f.h)), d = i.applyToRectangle(new l(t.x, t.y - f.h, f.w, f.h)), p = v.call(this, d), g = [], m = 0; m < p.length; m += 1) - 1 === g.indexOf(p[m]) && g.push(p[m]);
                                            if (w(g), !0 === this.autoPaging)
                                                for (var b = g[0], x = g[g.length - 1], N = b; N < x + 1; N++) {
                                                    if (this.pdf.setPage(N), 0 !== this.ctx.clip_path.length) {
                                                        var L = this.path;
                                                        a = JSON.parse(JSON.stringify(this.ctx.clip_path)), this.path = y(a, this.posX, -1 * this.pdf.internal.pageSize.height * (N - 1) + this.posY), _.call(this, "fill", !0), this.path = L
                                                    }
                                                    var S = JSON.parse(JSON.stringify(h));
                                                    S = y([S], this.posX, -1 * this.pdf.internal.pageSize.height * (N - 1) + this.posY)[0], t.scale >= .01 && (o = this.pdf.internal.getFontSize(), this.pdf.setFontSize(o * t.scale), c = this.lineWidth, this.lineWidth = c * t.scale), this.pdf.text(t.text, S.x, S.y, {
                                                        angle: t.angle,
                                                        align: e,
                                                        renderingMode: t.renderingMode,
                                                        maxWidth: t.maxWidth
                                                    }), t.scale >= .01 && (this.pdf.setFontSize(o), this.lineWidth = c)
                                                } else t.scale >= .01 && (o = this.pdf.internal.getFontSize(), this.pdf.setFontSize(o * t.scale), c = this.lineWidth, this.lineWidth = c * t.scale), this.pdf.text(t.text, n.x + this.posX, n.y + this.posY, {
                                                    angle: t.angle,
                                                    align: e,
                                                    renderingMode: t.renderingMode,
                                                    maxWidth: t.maxWidth
                                                }), t.scale >= .01 && (this.pdf.setFontSize(o), this.lineWidth = c)
                                        },
                                        C = function(t, e, i, a) {
                                            i = i || 0, a = a || 0, this.pdf.internal.out(n(t + i) + " " + r(e + a) + " l")
                                        },
                                        E = function(t, e, n) {
                                            return this.pdf.lines(t, e, n, null, null)
                                        },
                                        F = function(t, n, r, a, s, l, u, c) {
                                            this.pdf.internal.out([e(i(r + t)), e(o(a + n)), e(i(s + t)), e(o(l + n)), e(i(u + t)), e(o(c + n)), "c"].join(" "))
                                        },
                                        I = function(t, e, n, r) {
                                            for (var i = 2 * Math.PI, a = Math.PI / 2; e > n;) e -= i;
                                            var o = Math.abs(n - e);
                                            o < i && r && (o = i - o);
                                            for (var s = [], l = r ? -1 : 1, u = e; o > 1e-5;) {
                                                var c = u + l * Math.min(o, a);
                                                s.push(O.call(this, t, u, c)), o -= Math.abs(c - u), u = c
                                            }
                                            return s
                                        },
                                        O = function(t, e, n) {
                                            var r = (n - e) / 2,
                                                i = t * Math.cos(r),
                                                a = t * Math.sin(r),
                                                o = i,
                                                s = -a,
                                                l = o * o + s * s,
                                                u = l + o * i + s * a,
                                                c = 4 / 3 * (Math.sqrt(2 * l * u) - u) / (o * a - s * i),
                                                f = o - c * s,
                                                h = s + c * o,
                                                d = f,
                                                p = -h,
                                                g = r + e,
                                                m = Math.cos(g),
                                                v = Math.sin(g);
                                            return {
                                                x1: t * Math.cos(e),
                                                y1: t * Math.sin(e),
                                                x2: f * m - h * v,
                                                y2: f * v + h * m,
                                                x3: d * m - p * v,
                                                y3: d * v + p * m,
                                                x4: t * Math.cos(n),
                                                y4: t * Math.sin(n)
                                            }
                                        },
                                        j = function(t) {
                                            return 180 * t / Math.PI
                                        },
                                        M = function(t, e, n, r, i, a) {
                                            var o = t + .5 * (n - t),
                                                s = e + .5 * (r - e),
                                                u = i + .5 * (n - i),
                                                c = a + .5 * (r - a),
                                                f = Math.min(t, i, o, u),
                                                h = Math.max(t, i, o, u),
                                                d = Math.min(e, a, s, c),
                                                p = Math.max(e, a, s, c);
                                            return new l(f, d, h - f, p - d)
                                        },
                                        T = function(t, e, n, r, i, a, o, s) {
                                            var u, c, f, h, d, p, g, m, v, b, y, w, x, _, N = n - t,
                                                L = r - e,
                                                S = i - n,
                                                A = a - r,
                                                k = o - i,
                                                P = s - a;
                                            for (c = 0; c < 41; c++) v = (g = (f = t + (u = c / 40) * N) + u * ((d = n + u * S) - f)) + u * (d + u * (i + u * k - d) - g), b = (m = (h = e + u * L) + u * ((p = r + u * A) - h)) + u * (p + u * (a + u * P - p) - m), 0 == c ? (y = v, w = b, x = v, _ = b) : (y = Math.min(y, v), w = Math.min(w, b), x = Math.max(x, v), _ = Math.max(_, b));
                                            return new l(Math.round(y), Math.round(w), Math.round(x - y), Math.round(_ - w))
                                        }
                                }(b.API);
                            var dt = [0, 1, 2, 3, 4, 4, 5, 5, 6, 6, 6, 6, 7, 7, 7, 7, 8, 8, 8, 8, 8, 8, 8, 8, 9, 9, 9, 9, 9, 9, 9, 9, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 0, 0, 16, 17, 18, 18, 19, 19, 20, 20, 20, 20, 21, 21, 21, 21, 22, 22, 22, 22, 22, 22, 22, 22, 23, 23, 23, 23, 23, 23, 23, 23, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29];

                            function pt() {
                                var t = this;

                                function e(t, e) {
                                    var n = 0;
                                    do {
                                        n |= 1 & t, t >>>= 1, n <<= 1
                                    } while (--e > 0);
                                    return n >>> 1
                                }
                                t.build_tree = function(n) {
                                    var r, i, a, o = t.dyn_tree,
                                        s = t.stat_desc.static_tree,
                                        l = t.stat_desc.elems,
                                        u = -1;
                                    for (n.heap_len = 0, n.heap_max = 573, r = 0; r < l; r++) 0 !== o[2 * r] ? (n.heap[++n.heap_len] = u = r, n.depth[r] = 0) : o[2 * r + 1] = 0;
                                    for (; n.heap_len < 2;) o[2 * (a = n.heap[++n.heap_len] = u < 2 ? ++u : 0)] = 1, n.depth[a] = 0, n.opt_len--, s && (n.static_len -= s[2 * a + 1]);
                                    for (t.max_code = u, r = Math.floor(n.heap_len / 2); r >= 1; r--) n.pqdownheap(o, r);
                                    a = l;
                                    do {
                                        r = n.heap[1], n.heap[1] = n.heap[n.heap_len--], n.pqdownheap(o, 1), i = n.heap[1], n.heap[--n.heap_max] = r, n.heap[--n.heap_max] = i, o[2 * a] = o[2 * r] + o[2 * i], n.depth[a] = Math.max(n.depth[r], n.depth[i]) + 1, o[2 * r + 1] = o[2 * i + 1] = a, n.heap[1] = a++, n.pqdownheap(o, 1)
                                    } while (n.heap_len >= 2);
                                    n.heap[--n.heap_max] = n.heap[1],
                                        function(e) {
                                            var n, r, i, a, o, s, l = t.dyn_tree,
                                                u = t.stat_desc.static_tree,
                                                c = t.stat_desc.extra_bits,
                                                f = t.stat_desc.extra_base,
                                                h = t.stat_desc.max_length,
                                                d = 0;
                                            for (a = 0; a <= 15; a++) e.bl_count[a] = 0;
                                            for (l[2 * e.heap[e.heap_max] + 1] = 0, n = e.heap_max + 1; n < 573; n++)(a = l[2 * l[2 * (r = e.heap[n]) + 1] + 1] + 1) > h && (a = h, d++), l[2 * r + 1] = a, r > t.max_code || (e.bl_count[a]++, o = 0, r >= f && (o = c[r - f]), s = l[2 * r], e.opt_len += s * (a + o), u && (e.static_len += s * (u[2 * r + 1] + o)));
                                            if (0 !== d) {
                                                do {
                                                    for (a = h - 1; 0 === e.bl_count[a];) a--;
                                                    e.bl_count[a]--, e.bl_count[a + 1] += 2, e.bl_count[h]--, d -= 2
                                                } while (d > 0);
                                                for (a = h; 0 !== a; a--)
                                                    for (r = e.bl_count[a]; 0 !== r;)(i = e.heap[--n]) > t.max_code || (l[2 * i + 1] !== a && (e.opt_len += (a - l[2 * i + 1]) * l[2 * i], l[2 * i + 1] = a), r--)
                                            }
                                        }(n),
                                        function(t, n, r) {
                                            var i, a, o, s = [],
                                                l = 0;
                                            for (i = 1; i <= 15; i++) s[i] = l = l + r[i - 1] << 1;
                                            for (a = 0; a <= n; a++) 0 !== (o = t[2 * a + 1]) && (t[2 * a] = e(s[o]++, o))
                                        }(o, t.max_code, n.bl_count)
                                }
                            }

                            function gt(t, e, n, r, i) {
                                this.static_tree = t, this.extra_bits = e, this.extra_base = n, this.elems = r, this.max_length = i
                            }

                            function mt(t, e, n, r, i) {
                                this.good_length = t, this.max_lazy = e, this.nice_length = n, this.max_chain = r, this.func = i
                            }
                            pt._length_code = [0, 1, 2, 3, 4, 5, 6, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 12, 12, 13, 13, 13, 13, 14, 14, 14, 14, 15, 15, 15, 15, 16, 16, 16, 16, 16, 16, 16, 16, 17, 17, 17, 17, 17, 17, 17, 17, 18, 18, 18, 18, 18, 18, 18, 18, 19, 19, 19, 19, 19, 19, 19, 19, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 28], pt.base_length = [0, 1, 2, 3, 4, 5, 6, 7, 8, 10, 12, 14, 16, 20, 24, 28, 32, 40, 48, 56, 64, 80, 96, 112, 128, 160, 192, 224, 0], pt.base_dist = [0, 1, 2, 3, 4, 6, 8, 12, 16, 24, 32, 48, 64, 96, 128, 192, 256, 384, 512, 768, 1024, 1536, 2048, 3072, 4096, 6144, 8192, 12288, 16384, 24576], pt.d_code = function(t) {
                                return t < 256 ? dt[t] : dt[256 + (t >>> 7)]
                            }, pt.extra_lbits = [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0], pt.extra_dbits = [0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13], pt.extra_blbits = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 3, 7], pt.bl_order = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15], gt.static_ltree = [12, 8, 140, 8, 76, 8, 204, 8, 44, 8, 172, 8, 108, 8, 236, 8, 28, 8, 156, 8, 92, 8, 220, 8, 60, 8, 188, 8, 124, 8, 252, 8, 2, 8, 130, 8, 66, 8, 194, 8, 34, 8, 162, 8, 98, 8, 226, 8, 18, 8, 146, 8, 82, 8, 210, 8, 50, 8, 178, 8, 114, 8, 242, 8, 10, 8, 138, 8, 74, 8, 202, 8, 42, 8, 170, 8, 106, 8, 234, 8, 26, 8, 154, 8, 90, 8, 218, 8, 58, 8, 186, 8, 122, 8, 250, 8, 6, 8, 134, 8, 70, 8, 198, 8, 38, 8, 166, 8, 102, 8, 230, 8, 22, 8, 150, 8, 86, 8, 214, 8, 54, 8, 182, 8, 118, 8, 246, 8, 14, 8, 142, 8, 78, 8, 206, 8, 46, 8, 174, 8, 110, 8, 238, 8, 30, 8, 158, 8, 94, 8, 222, 8, 62, 8, 190, 8, 126, 8, 254, 8, 1, 8, 129, 8, 65, 8, 193, 8, 33, 8, 161, 8, 97, 8, 225, 8, 17, 8, 145, 8, 81, 8, 209, 8, 49, 8, 177, 8, 113, 8, 241, 8, 9, 8, 137, 8, 73, 8, 201, 8, 41, 8, 169, 8, 105, 8, 233, 8, 25, 8, 153, 8, 89, 8, 217, 8, 57, 8, 185, 8, 121, 8, 249, 8, 5, 8, 133, 8, 69, 8, 197, 8, 37, 8, 165, 8, 101, 8, 229, 8, 21, 8, 149, 8, 85, 8, 213, 8, 53, 8, 181, 8, 117, 8, 245, 8, 13, 8, 141, 8, 77, 8, 205, 8, 45, 8, 173, 8, 109, 8, 237, 8, 29, 8, 157, 8, 93, 8, 221, 8, 61, 8, 189, 8, 125, 8, 253, 8, 19, 9, 275, 9, 147, 9, 403, 9, 83, 9, 339, 9, 211, 9, 467, 9, 51, 9, 307, 9, 179, 9, 435, 9, 115, 9, 371, 9, 243, 9, 499, 9, 11, 9, 267, 9, 139, 9, 395, 9, 75, 9, 331, 9, 203, 9, 459, 9, 43, 9, 299, 9, 171, 9, 427, 9, 107, 9, 363, 9, 235, 9, 491, 9, 27, 9, 283, 9, 155, 9, 411, 9, 91, 9, 347, 9, 219, 9, 475, 9, 59, 9, 315, 9, 187, 9, 443, 9, 123, 9, 379, 9, 251, 9, 507, 9, 7, 9, 263, 9, 135, 9, 391, 9, 71, 9, 327, 9, 199, 9, 455, 9, 39, 9, 295, 9, 167, 9, 423, 9, 103, 9, 359, 9, 231, 9, 487, 9, 23, 9, 279, 9, 151, 9, 407, 9, 87, 9, 343, 9, 215, 9, 471, 9, 55, 9, 311, 9, 183, 9, 439, 9, 119, 9, 375, 9, 247, 9, 503, 9, 15, 9, 271, 9, 143, 9, 399, 9, 79, 9, 335, 9, 207, 9, 463, 9, 47, 9, 303, 9, 175, 9, 431, 9, 111, 9, 367, 9, 239, 9, 495, 9, 31, 9, 287, 9, 159, 9, 415, 9, 95, 9, 351, 9, 223, 9, 479, 9, 63, 9, 319, 9, 191, 9, 447, 9, 127, 9, 383, 9, 255, 9, 511, 9, 0, 7, 64, 7, 32, 7, 96, 7, 16, 7, 80, 7, 48, 7, 112, 7, 8, 7, 72, 7, 40, 7, 104, 7, 24, 7, 88, 7, 56, 7, 120, 7, 4, 7, 68, 7, 36, 7, 100, 7, 20, 7, 84, 7, 52, 7, 116, 7, 3, 8, 131, 8, 67, 8, 195, 8, 35, 8, 163, 8, 99, 8, 227, 8], gt.static_dtree = [0, 5, 16, 5, 8, 5, 24, 5, 4, 5, 20, 5, 12, 5, 28, 5, 2, 5, 18, 5, 10, 5, 26, 5, 6, 5, 22, 5, 14, 5, 30, 5, 1, 5, 17, 5, 9, 5, 25, 5, 5, 5, 21, 5, 13, 5, 29, 5, 3, 5, 19, 5, 11, 5, 27, 5, 7, 5, 23, 5], gt.static_l_desc = new gt(gt.static_ltree, pt.extra_lbits, 257, 286, 15), gt.static_d_desc = new gt(gt.static_dtree, pt.extra_dbits, 0, 30, 15), gt.static_bl_desc = new gt(null, pt.extra_blbits, 0, 19, 7);
                            var vt, bt, yt, wt = [new mt(0, 0, 0, 0, 0), new mt(4, 4, 8, 4, 1), new mt(4, 5, 16, 8, 1), new mt(4, 6, 32, 32, 1), new mt(4, 4, 16, 16, 2), new mt(8, 16, 32, 32, 2), new mt(8, 16, 128, 128, 2), new mt(8, 32, 128, 256, 2), new mt(32, 128, 258, 1024, 2), new mt(32, 258, 258, 4096, 2)],
                                xt = ["need dictionary", "stream end", "", "", "stream error", "data error", "", "buffer error", "", ""];

                            function _t(t, e, n, r) {
                                var i = t[2 * e],
                                    a = t[2 * n];
                                return i < a || i === a && r[e] <= r[n]
                            }

                            function Nt() {
                                var t, e, n, r, i, a, o, s, l, u, c, f, h, d, p, g, m, v, b, y, w, x, _, N, L, S, A, k, P, C, E, F, I, O, j, M, T, B, R, D, q, z = this,
                                    U = new pt,
                                    H = new pt,
                                    V = new pt;

                                function W() {
                                    var t;
                                    for (t = 0; t < 286; t++) E[2 * t] = 0;
                                    for (t = 0; t < 30; t++) F[2 * t] = 0;
                                    for (t = 0; t < 19; t++) I[2 * t] = 0;
                                    E[512] = 1, z.opt_len = z.static_len = 0, M = B = 0
                                }

                                function G(t, e) {
                                    var n, r, i = -1,
                                        a = t[1],
                                        o = 0,
                                        s = 7,
                                        l = 4;
                                    for (0 === a && (s = 138, l = 3), t[2 * (e + 1) + 1] = 65535, n = 0; n <= e; n++) r = a, a = t[2 * (n + 1) + 1], ++o < s && r === a || (o < l ? I[2 * r] += o : 0 !== r ? (r !== i && I[2 * r]++, I[32]++) : o <= 10 ? I[34]++ : I[36]++, o = 0, i = r, 0 === a ? (s = 138, l = 3) : r === a ? (s = 6, l = 3) : (s = 7, l = 4))
                                }

                                function Y(t) {
                                    z.pending_buf[z.pending++] = t
                                }

                                function X(t) {
                                    Y(255 & t), Y(t >>> 8 & 255)
                                }

                                function K(t, e) {
                                    var n, r = e;
                                    q > 16 - r ? (X(D |= (n = t) << q & 65535), D = n >>> 16 - q, q += r - 16) : (D |= t << q & 65535, q += r)
                                }

                                function $(t, e) {
                                    var n = 2 * t;
                                    K(65535 & e[n], 65535 & e[n + 1])
                                }

                                function J(t, e) {
                                    var n, r, i = -1,
                                        a = t[1],
                                        o = 0,
                                        s = 7,
                                        l = 4;
                                    for (0 === a && (s = 138, l = 3), n = 0; n <= e; n++)
                                        if (r = a, a = t[2 * (n + 1) + 1], !(++o < s && r === a)) {
                                            if (o < l)
                                                do {
                                                    $(r, I)
                                                } while (0 != --o);
                                            else 0 !== r ? (r !== i && ($(r, I), o--), $(16, I), K(o - 3, 2)) : o <= 10 ? ($(17, I), K(o - 3, 3)) : ($(18, I), K(o - 11, 7));
                                            o = 0, i = r, 0 === a ? (s = 138, l = 3) : r === a ? (s = 6, l = 3) : (s = 7, l = 4)
                                        }
                                }

                                function Q() {
                                    16 === q ? (X(D), D = 0, q = 0) : q >= 8 && (Y(255 & D), D >>>= 8, q -= 8)
                                }

                                function Z(t, e) {
                                    var n, r, i;
                                    if (z.pending_buf[T + 2 * M] = t >>> 8 & 255, z.pending_buf[T + 2 * M + 1] = 255 & t, z.pending_buf[O + M] = 255 & e, M++, 0 === t ? E[2 * e]++ : (B++, t--, E[2 * (pt._length_code[e] + 256 + 1)]++, F[2 * pt.d_code(t)]++), 0 == (8191 & M) && A > 2) {
                                        for (n = 8 * M, r = w - m, i = 0; i < 30; i++) n += F[2 * i] * (5 + pt.extra_dbits[i]);
                                        if (n >>>= 3, B < Math.floor(M / 2) && n < Math.floor(r / 2)) return !0
                                    }
                                    return M === j - 1
                                }

                                function tt(t, e) {
                                    var n, r, i, a, o = 0;
                                    if (0 !== M)
                                        do {
                                            n = z.pending_buf[T + 2 * o] << 8 & 65280 | 255 & z.pending_buf[T + 2 * o + 1], r = 255 & z.pending_buf[O + o], o++, 0 === n ? $(r, t) : ($((i = pt._length_code[r]) + 256 + 1, t), 0 !== (a = pt.extra_lbits[i]) && K(r -= pt.base_length[i], a), n--, $(i = pt.d_code(n), e), 0 !== (a = pt.extra_dbits[i]) && K(n -= pt.base_dist[i], a))
                                        } while (o < M);
                                    $(256, t), R = t[513]
                                }

                                function et() {
                                    q > 8 ? X(D) : q > 0 && Y(255 & D), D = 0, q = 0
                                }

                                function nt(t, e, n) {
                                    K(0 + (n ? 1 : 0), 3),
                                        function(t, e, n) {
                                            et(), R = 8, X(e), X(~e), z.pending_buf.set(s.subarray(t, t + e), z.pending), z.pending += e
                                        }(t, e)
                                }

                                function rt(e) {
                                    (function(t, e, n) {
                                        var r, i, a = 0;
                                        A > 0 ? (U.build_tree(z), H.build_tree(z), a = function() {
                                            var t;
                                            for (G(E, U.max_code), G(F, H.max_code), V.build_tree(z), t = 18; t >= 3 && 0 === I[2 * pt.bl_order[t] + 1]; t--);
                                            return z.opt_len += 3 * (t + 1) + 5 + 5 + 4, t
                                        }(), r = z.opt_len + 3 + 7 >>> 3, (i = z.static_len + 3 + 7 >>> 3) <= r && (r = i)) : r = i = e + 5, e + 4 <= r && -1 !== t ? nt(t, e, n) : i === r ? (K(2 + (n ? 1 : 0), 3), tt(gt.static_ltree, gt.static_dtree)) : (K(4 + (n ? 1 : 0), 3), function(t, e, n) {
                                            var r;
                                            for (K(t - 257, 5), K(e - 1, 5), K(n - 4, 4), r = 0; r < n; r++) K(I[2 * pt.bl_order[r] + 1], 3);
                                            J(E, t - 1), J(F, e - 1)
                                        }(U.max_code + 1, H.max_code + 1, a + 1), tt(E, F)), W(), n && et()
                                    })(m >= 0 ? m : -1, w - m, e), m = w, t.flush_pending()
                                }

                                function it() {
                                    var e, n, r, a;
                                    do {
                                        if (0 === (a = l - _ - w) && 0 === w && 0 === _) a = i;
                                        else if (-1 === a) a--;
                                        else if (w >= i + i - 262) {
                                            s.set(s.subarray(i, i + i), 0), x -= i, w -= i, m -= i, r = e = h;
                                            do {
                                                n = 65535 & c[--r], c[r] = n >= i ? n - i : 0
                                            } while (0 != --e);
                                            r = e = i;
                                            do {
                                                n = 65535 & u[--r], u[r] = n >= i ? n - i : 0
                                            } while (0 != --e);
                                            a += i
                                        }
                                        if (0 === t.avail_in) return;
                                        e = t.read_buf(s, w + _, a), (_ += e) >= 3 && (f = ((f = 255 & s[w]) << g ^ 255 & s[w + 1]) & p)
                                    } while (_ < 262 && 0 !== t.avail_in)
                                }

                                function at(t) {
                                    var e, n, r = L,
                                        a = w,
                                        l = N,
                                        c = w > i - 262 ? w - (i - 262) : 0,
                                        f = C,
                                        h = o,
                                        d = w + 258,
                                        p = s[a + l - 1],
                                        g = s[a + l];
                                    N >= P && (r >>= 2), f > _ && (f = _);
                                    do {
                                        if (s[(e = t) + l] === g && s[e + l - 1] === p && s[e] === s[a] && s[++e] === s[a + 1]) {
                                            a += 2, e++;
                                            do {} while (s[++a] === s[++e] && s[++a] === s[++e] && s[++a] === s[++e] && s[++a] === s[++e] && s[++a] === s[++e] && s[++a] === s[++e] && s[++a] === s[++e] && s[++a] === s[++e] && a < d);
                                            if (n = 258 - (d - a), a = d - 258, n > l) {
                                                if (x = t, l = n, n >= f) break;
                                                p = s[a + l - 1], g = s[a + l]
                                            }
                                        }
                                    } while ((t = 65535 & u[t & h]) > c && 0 != --r);
                                    return l <= _ ? l : _
                                }

                                function ot(t) {
                                    return t.total_in = t.total_out = 0, t.msg = null, z.pending = 0, z.pending_out = 0, e = 113, r = 0, U.dyn_tree = E, U.stat_desc = gt.static_l_desc, H.dyn_tree = F, H.stat_desc = gt.static_d_desc, V.dyn_tree = I, V.stat_desc = gt.static_bl_desc, D = 0, q = 0, R = 8, W(),
                                        function() {
                                            var t;
                                            for (l = 2 * i, c[h - 1] = 0, t = 0; t < h - 1; t++) c[t] = 0;
                                            S = wt[A].max_lazy, P = wt[A].good_length, C = wt[A].nice_length, L = wt[A].max_chain, w = 0, m = 0, _ = 0, v = N = 2, y = 0, f = 0
                                        }(), 0
                                }
                                z.depth = [], z.bl_count = [], z.heap = [], E = [], F = [], I = [], z.pqdownheap = function(t, e) {
                                    for (var n = z.heap, r = n[e], i = e << 1; i <= z.heap_len && (i < z.heap_len && _t(t, n[i + 1], n[i], z.depth) && i++, !_t(t, r, n[i], z.depth));) n[e] = n[i], e = i, i <<= 1;
                                    n[e] = r
                                }, z.deflateInit = function(t, e, r, l, f, m) {
                                    return l || (l = 8), f || (f = 8), m || (m = 0), t.msg = null, -1 === e && (e = 6), f < 1 || f > 9 || 8 !== l || r < 9 || r > 15 || e < 0 || e > 9 || m < 0 || m > 2 ? -2 : (t.dstate = z, o = (i = 1 << (a = r)) - 1, p = (h = 1 << (d = f + 7)) - 1, g = Math.floor((d + 3 - 1) / 3), s = new Uint8Array(2 * i), u = [], c = [], j = 1 << f + 6, z.pending_buf = new Uint8Array(4 * j), n = 4 * j, T = Math.floor(j / 2), O = 3 * j, A = e, k = m, ot(t))
                                }, z.deflateEnd = function() {
                                    return 42 !== e && 113 !== e && 666 !== e ? -2 : (z.pending_buf = null, c = null, u = null, s = null, z.dstate = null, 113 === e ? -3 : 0)
                                }, z.deflateParams = function(t, e, n) {
                                    var r = 0;
                                    return -1 === e && (e = 6), e < 0 || e > 9 || n < 0 || n > 2 ? -2 : (wt[A].func !== wt[e].func && 0 !== t.total_in && (r = t.deflate(1)), A !== e && (S = wt[A = e].max_lazy, P = wt[A].good_length, C = wt[A].nice_length, L = wt[A].max_chain), k = n, r)
                                }, z.deflateSetDictionary = function(t, n, r) {
                                    var a, l = r,
                                        h = 0;
                                    if (!n || 42 !== e) return -2;
                                    if (l < 3) return 0;
                                    for (l > i - 262 && (h = r - (l = i - 262)), s.set(n.subarray(h, h + l), 0), w = l, m = l, f = ((f = 255 & s[0]) << g ^ 255 & s[1]) & p, a = 0; a <= l - 3; a++) f = (f << g ^ 255 & s[a + 2]) & p, u[a & o] = c[f], c[f] = a;
                                    return 0
                                }, z.deflate = function(l, d) {
                                    var L, P, C, E, F, I;
                                    if (d > 4 || d < 0) return -2;
                                    if (!l.next_out || !l.next_in && 0 !== l.avail_in || 666 === e && 4 !== d) return l.msg = xt[4], -2;
                                    if (0 === l.avail_out) return l.msg = xt[7], -5;
                                    if (t = l, E = r, r = d, 42 === e && (P = 8 + (a - 8 << 4) << 8, (C = (A - 1 & 255) >> 1) > 3 && (C = 3), P |= C << 6, 0 !== w && (P |= 32), e = 113, Y((I = P += 31 - P % 31) >> 8 & 255), Y(255 & I)), 0 !== z.pending) {
                                        if (t.flush_pending(), 0 === t.avail_out) return r = -1, 0
                                    } else if (0 === t.avail_in && d <= E && 4 !== d) return t.msg = xt[7], -5;
                                    if (666 === e && 0 !== t.avail_in) return l.msg = xt[7], -5;
                                    if (0 !== t.avail_in || 0 !== _ || 0 !== d && 666 !== e) {
                                        switch (F = -1, wt[A].func) {
                                            case 0:
                                                F = function(e) {
                                                    var r, a = 65535;
                                                    for (a > n - 5 && (a = n - 5);;) {
                                                        if (_ <= 1) {
                                                            if (it(), 0 === _ && 0 === e) return 0;
                                                            if (0 === _) break
                                                        }
                                                        if (w += _, _ = 0, r = m + a, (0 === w || w >= r) && (_ = w - r, w = r, rt(!1), 0 === t.avail_out)) return 0;
                                                        if (w - m >= i - 262 && (rt(!1), 0 === t.avail_out)) return 0
                                                    }
                                                    return rt(4 === e), 0 === t.avail_out ? 4 === e ? 2 : 0 : 4 === e ? 3 : 1
                                                }(d);
                                                break;
                                            case 1:
                                                F = function(e) {
                                                    for (var n, r = 0;;) {
                                                        if (_ < 262) {
                                                            if (it(), _ < 262 && 0 === e) return 0;
                                                            if (0 === _) break
                                                        }
                                                        if (_ >= 3 && (f = (f << g ^ 255 & s[w + 2]) & p, r = 65535 & c[f], u[w & o] = c[f], c[f] = w), 0 !== r && (w - r & 65535) <= i - 262 && 2 !== k && (v = at(r)), v >= 3)
                                                            if (n = Z(w - x, v - 3), _ -= v, v <= S && _ >= 3) {
                                                                v--;
                                                                do {
                                                                    w++, f = (f << g ^ 255 & s[w + 2]) & p, r = 65535 & c[f], u[w & o] = c[f], c[f] = w
                                                                } while (0 != --v);
                                                                w++
                                                            } else w += v, v = 0, f = ((f = 255 & s[w]) << g ^ 255 & s[w + 1]) & p;
                                                        else n = Z(0, 255 & s[w]), _--, w++;
                                                        if (n && (rt(!1), 0 === t.avail_out)) return 0
                                                    }
                                                    return rt(4 === e), 0 === t.avail_out ? 4 === e ? 2 : 0 : 4 === e ? 3 : 1
                                                }(d);
                                                break;
                                            case 2:
                                                F = function(e) {
                                                    for (var n, r, a = 0;;) {
                                                        if (_ < 262) {
                                                            if (it(), _ < 262 && 0 === e) return 0;
                                                            if (0 === _) break
                                                        }
                                                        if (_ >= 3 && (f = (f << g ^ 255 & s[w + 2]) & p, a = 65535 & c[f], u[w & o] = c[f], c[f] = w), N = v, b = x, v = 2, 0 !== a && N < S && (w - a & 65535) <= i - 262 && (2 !== k && (v = at(a)), v <= 5 && (1 === k || 3 === v && w - x > 4096) && (v = 2)), N >= 3 && v <= N) {
                                                            r = w + _ - 3, n = Z(w - 1 - b, N - 3), _ -= N - 1, N -= 2;
                                                            do {
                                                                ++w <= r && (f = (f << g ^ 255 & s[w + 2]) & p, a = 65535 & c[f], u[w & o] = c[f], c[f] = w)
                                                            } while (0 != --N);
                                                            if (y = 0, v = 2, w++, n && (rt(!1), 0 === t.avail_out)) return 0
                                                        } else if (0 !== y) {
                                                            if ((n = Z(0, 255 & s[w - 1])) && rt(!1), w++, _--, 0 === t.avail_out) return 0
                                                        } else y = 1, w++, _--
                                                    }
                                                    return 0 !== y && (n = Z(0, 255 & s[w - 1]), y = 0), rt(4 === e), 0 === t.avail_out ? 4 === e ? 2 : 0 : 4 === e ? 3 : 1
                                                }(d)
                                        }
                                        if (2 !== F && 3 !== F || (e = 666), 0 === F || 2 === F) return 0 === t.avail_out && (r = -1), 0;
                                        if (1 === F) {
                                            if (1 === d) K(2, 3), $(256, gt.static_ltree), Q(), 1 + R + 10 - q < 9 && (K(2, 3), $(256, gt.static_ltree), Q()), R = 7;
                                            else if (nt(0, 0, !1), 3 === d)
                                                for (L = 0; L < h; L++) c[L] = 0;
                                            if (t.flush_pending(), 0 === t.avail_out) return r = -1, 0
                                        }
                                    }
                                    return 4 !== d ? 0 : 1
                                }
                            }

                            function Lt() {
                                this.next_in_index = 0, this.next_out_index = 0, this.avail_in = 0, this.total_in = 0, this.avail_out = 0, this.total_out = 0
                            }

                            function St(t) {
                                var e = new Lt,
                                    n = new Uint8Array(512),
                                    r = t ? t.level : -1;
                                void 0 === r && (r = -1), e.deflateInit(r), e.next_out = n, this.append = function(t, r) {
                                    var i, a = [],
                                        o = 0,
                                        s = 0,
                                        l = 0;
                                    if (t.length) {
                                        e.next_in_index = 0, e.next_in = t, e.avail_in = t.length;
                                        do {
                                            if (e.next_out_index = 0, e.avail_out = 512, 0 !== e.deflate(0)) throw new Error("deflating: " + e.msg);
                                            e.next_out_index && (512 === e.next_out_index ? a.push(new Uint8Array(n)) : a.push(new Uint8Array(n.subarray(0, e.next_out_index)))), l += e.next_out_index, r && e.next_in_index > 0 && e.next_in_index !== o && (r(e.next_in_index), o = e.next_in_index)
                                        } while (e.avail_in > 0 || 0 === e.avail_out);
                                        return i = new Uint8Array(l), a.forEach((function(t) {
                                            i.set(t, s), s += t.length
                                        })), i
                                    }
                                }, this.flush = function() {
                                    var t, r, i = [],
                                        a = 0,
                                        o = 0;
                                    do {
                                        if (e.next_out_index = 0, e.avail_out = 512, 1 !== (t = e.deflate(4)) && 0 !== t) throw new Error("deflating: " + e.msg);
                                        512 - e.avail_out > 0 && i.push(new Uint8Array(n.subarray(0, e.next_out_index))), o += e.next_out_index
                                    } while (e.avail_in > 0 || 0 === e.avail_out);
                                    return e.deflateEnd(), r = new Uint8Array(o), i.forEach((function(t) {
                                        r.set(t, a), a += t.length
                                    })), r
                                }
                            }
                            Lt.prototype = {
                                    deflateInit: function(t, e) {
                                        return this.dstate = new Nt, e || (e = 15), this.dstate.deflateInit(this, t, e)
                                    },
                                    deflate: function(t) {
                                        return this.dstate ? this.dstate.deflate(this, t) : -2
                                    },
                                    deflateEnd: function() {
                                        if (!this.dstate) return -2;
                                        var t = this.dstate.deflateEnd();
                                        return this.dstate = null, t
                                    },
                                    deflateParams: function(t, e) {
                                        return this.dstate ? this.dstate.deflateParams(this, t, e) : -2
                                    },
                                    deflateSetDictionary: function(t, e) {
                                        return this.dstate ? this.dstate.deflateSetDictionary(this, t, e) : -2
                                    },
                                    read_buf: function(t, e, n) {
                                        var r = this.avail_in;
                                        return r > n && (r = n), 0 === r ? 0 : (this.avail_in -= r, t.set(this.next_in.subarray(this.next_in_index, this.next_in_index + r), e), this.next_in_index += r, this.total_in += r, r)
                                    },
                                    flush_pending: function() {
                                        var t = this.dstate.pending;
                                        t > this.avail_out && (t = this.avail_out), 0 !== t && (this.next_out.set(this.dstate.pending_buf.subarray(this.dstate.pending_out, this.dstate.pending_out + t), this.next_out_index), this.next_out_index += t, this.dstate.pending_out += t, this.total_out += t, this.avail_out -= t, this.dstate.pending -= t, 0 === this.dstate.pending && (this.dstate.pending_out = 0))
                                    }
                                },
                                function(t) {
                                    var e = function(t) {
                                            var e, n, r, i, a, o, s, l, u, c;
                                            for (/[^\x00-\xFF]/.test(t), n = [], r = 0, i = (t += e = "\0\0\0\0".slice(t.length % 4 || 4)).length; i > r; r += 4) 0 !== (a = (t.charCodeAt(r) << 24) + (t.charCodeAt(r + 1) << 16) + (t.charCodeAt(r + 2) << 8) + t.charCodeAt(r + 3)) ? (o = (a = ((a = ((a = ((a = (a - (c = a % 85)) / 85) - (u = a % 85)) / 85) - (l = a % 85)) / 85) - (s = a % 85)) / 85) % 85, n.push(o + 33, s + 33, l + 33, u + 33, c + 33)) : n.push(122);
                                            return function(t, e) {
                                                for (var n = e; n > 0; n--) t.pop()
                                            }(n, e.length), String.fromCharCode.apply(String, n) + "~>"
                                        },
                                        n = function(t) {
                                            var e, n, r, i, a, o = String,
                                                s = "length",
                                                l = 255,
                                                u = "charCodeAt",
                                                c = "slice",
                                                f = "replace";
                                            for (t[c](-2), t = t[c](0, -2)[f](/\s/g, "")[f]("z", "!!!!!"), r = [], i = 0, a = (t += e = "uuuuu" [c](t[s] % 5 || 5))[s]; a > i; i += 5) n = 52200625 * (t[u](i) - 33) + 614125 * (t[u](i + 1) - 33) + 7225 * (t[u](i + 2) - 33) + 85 * (t[u](i + 3) - 33) + (t[u](i + 4) - 33), r.push(l & n >> 24, l & n >> 16, l & n >> 8, l & n);
                                            return function(t, e) {
                                                for (var n = e; n > 0; n--) t.pop()
                                            }(r, e[s]), o.fromCharCode.apply(o, r)
                                        },
                                        r = function(t) {
                                            var e = new RegExp(/^([0-9A-Fa-f]{2})+$/);
                                            if (-1 !== (t = t.replace(/\s/g, "")).indexOf(">") && (t = t.substr(0, t.indexOf(">"))), t.length % 2 && (t += "0"), !1 === e.test(t)) return "";
                                            for (var n = "", r = 0; r < t.length; r += 2) n += String.fromCharCode("0x" + (t[r] + t[r + 1]));
                                            return n
                                        },
                                        i = function(e) {
                                            for (var n, r, i, a, o, s = [], l = e.length; l--;) s[l] = e.charCodeAt(l);
                                            return n = t.adler32cs.from(e), i = e = (r = new St(6)).append(new Uint8Array(s)), a = r.flush(), (o = new Uint8Array(i.byteLength + a.byteLength)).set(new Uint8Array(i), 0), o.set(new Uint8Array(a), i.byteLength), e = o, (s = new Uint8Array(e.byteLength + 6)).set(new Uint8Array([120, 156])), s.set(e, 2), s.set(new Uint8Array([255 & n, n >> 8 & 255, n >> 16 & 255, n >> 24 & 255]), e.byteLength + 2), s.reduce((function(t, e) {
                                                return t + String.fromCharCode(e)
                                            }), "")
                                        };
                                    t.processDataByFilters = function(t, a) {
                                        var o = 0,
                                            s = t || "",
                                            l = [];
                                        for ("string" == typeof(a = a || []) && (a = [a]), o = 0; o < a.length; o += 1) switch (a[o]) {
                                            case "ASCII85Decode":
                                            case "/ASCII85Decode":
                                                s = n(s), l.push("/ASCII85Encode");
                                                break;
                                            case "ASCII85Encode":
                                            case "/ASCII85Encode":
                                                s = e(s), l.push("/ASCII85Decode");
                                                break;
                                            case "ASCIIHexDecode":
                                            case "/ASCIIHexDecode":
                                                s = r(s), l.push("/ASCIIHexEncode");
                                                break;
                                            case "ASCIIHexEncode":
                                            case "/ASCIIHexEncode":
                                                s = s.split("").map((function(t) {
                                                    return ("0" + t.charCodeAt().toString(16)).slice(-2)
                                                })).join("") + ">", l.push("/ASCIIHexDecode");
                                                break;
                                            case "FlateEncode":
                                            case "/FlateEncode":
                                                s = i(s), l.push("/FlateDecode");
                                                break;
                                            default:
                                                throw new Error('The filter: "' + a[o] + '" is not implemented')
                                        }
                                        return {
                                            data: s,
                                            reverseChain: l.reverse().join(" ")
                                        }
                                    }
                                }(b.API),
                                function(t) {
                                    t.loadFile = function(t, e, n) {
                                        return function(t, e, n) {
                                            e = !1 !== e, n = "function" == typeof n ? n : function() {};
                                            var r = void 0;
                                            try {
                                                r = function(t, e, n) {
                                                    var r = new XMLHttpRequest,
                                                        i = 0,
                                                        a = function(t) {
                                                            var e = t.length,
                                                                n = [],
                                                                r = String.fromCharCode;
                                                            for (i = 0; i < e; i += 1) n.push(r(255 & t.charCodeAt(i)));
                                                            return n.join("")
                                                        };
                                                    if (r.open("GET", t, !e), r.overrideMimeType("text/plain; charset=x-user-defined"), !1 === e && (r.onload = function() {
                                                            200 === r.status ? n(a(this.responseText)) : n(void 0)
                                                        }), r.send(null), e && 200 === r.status) return a(r.responseText)
                                                }(t, e, n)
                                            } catch (t) {}
                                            return r
                                        }(t, e, n)
                                    }, t.loadImageFile = t.loadFile
                                }(b.API),
                                function(t) {
                                    function e() {
                                        return (r.html2canvas ? Promise.resolve(r.html2canvas) : n.e(5).then(n.t.bind(null, 23, 7))).catch((function(t) {
                                            return Promise.reject(new Error("Could not load dompurify: " + t))
                                        })).then((function(t) {
                                            return t.default ? t.default : t
                                        }))
                                    }

                                    function i() {
                                        return (r.DOMPurify ? Promise.resolve(r.DOMPurify) : n.e(4).then(n.t.bind(null, 24, 7))).catch((function(t) {
                                            return Promise.reject(new Error("Could not load dompurify: " + t))
                                        })).then((function(t) {
                                            return t.default ? t.default : t
                                        }))
                                    }
                                    var a = function(t) {
                                            var e = typeof t;
                                            return "undefined" === e ? "undefined" : "string" === e || t instanceof String ? "string" : "number" === e || t instanceof Number ? "number" : "function" === e || t instanceof Function ? "function" : t && t.constructor === Array ? "array" : t && 1 === t.nodeType ? "element" : "object" === e ? "object" : "unknown"
                                        },
                                        o = function(t, e) {
                                            var n = document.createElement(t);
                                            for (var r in e.className && (n.className = e.className), e.innerHTML && e.dompurify && (n.innerHTML = e.dompurify.sanitize(e.innerHTML)), e.style) n.style[r] = e.style[r];
                                            return n
                                        },
                                        s = function t(e, n) {
                                            for (var r = 3 === e.nodeType ? document.createTextNode(e.nodeValue) : e.cloneNode(!1), i = e.firstChild; i; i = i.nextSibling) !0 !== n && 1 === i.nodeType && "SCRIPT" === i.nodeName || r.appendChild(t(i, n));
                                            return 1 === e.nodeType && ("CANVAS" === e.nodeName ? (r.width = e.width, r.height = e.height, r.getContext("2d").drawImage(e, 0, 0)) : "TEXTAREA" !== e.nodeName && "SELECT" !== e.nodeName || (r.value = e.value), r.addEventListener("load", (function() {
                                                r.scrollTop = e.scrollTop, r.scrollLeft = e.scrollLeft
                                            }), !0)), r
                                        },
                                        l = function t(e) {
                                            var n = Object.assign(t.convert(Promise.resolve()), JSON.parse(JSON.stringify(t.template))),
                                                r = t.convert(Promise.resolve(), n);
                                            return (r = r.setProgress(1, t, 1, [t])).set(e)
                                        };
                                    (l.prototype = Object.create(Promise.prototype)).constructor = l, l.convert = function(t, e) {
                                        return t.__proto__ = e || l.prototype, t
                                    }, l.template = {
                                        prop: {
                                            src: null,
                                            container: null,
                                            overlay: null,
                                            canvas: null,
                                            img: null,
                                            pdf: null,
                                            pageSize: null,
                                            callback: function() {}
                                        },
                                        progress: {
                                            val: 0,
                                            state: null,
                                            n: 0,
                                            stack: []
                                        },
                                        opt: {
                                            filename: "file.pdf",
                                            margin: [0, 0, 0, 0],
                                            enableLinks: !0,
                                            x: 0,
                                            y: 0,
                                            html2canvas: {},
                                            jsPDF: {},
                                            backgroundColor: "transparent"
                                        }
                                    }, l.prototype.from = function(t, e) {
                                        return this.then((function() {
                                            switch (e = e || function(t) {
                                                    switch (a(t)) {
                                                        case "string":
                                                            return "string";
                                                        case "element":
                                                            return "canvas" === t.nodeName.toLowerCase ? "canvas" : "element";
                                                        default:
                                                            return "unknown"
                                                    }
                                                }(t)) {
                                                case "string":
                                                    return this.then(i).then((function(e) {
                                                        return this.set({
                                                            src: o("div", {
                                                                innerHTML: t,
                                                                dompurify: e
                                                            })
                                                        })
                                                    }));
                                                case "element":
                                                    return this.set({
                                                        src: t
                                                    });
                                                case "canvas":
                                                    return this.set({
                                                        canvas: t
                                                    });
                                                case "img":
                                                    return this.set({
                                                        img: t
                                                    });
                                                default:
                                                    return this.error("Unknown source type.")
                                            }
                                        }))
                                    }, l.prototype.to = function(t) {
                                        switch (t) {
                                            case "container":
                                                return this.toContainer();
                                            case "canvas":
                                                return this.toCanvas();
                                            case "img":
                                                return this.toImg();
                                            case "pdf":
                                                return this.toPdf();
                                            default:
                                                return this.error("Invalid target.")
                                        }
                                    }, l.prototype.toContainer = function() {
                                        return this.thenList([function() {
                                            return this.prop.src || this.error("Cannot duplicate - no source HTML.")
                                        }, function() {
                                            return this.prop.pageSize || this.setPageSize()
                                        }]).then((function() {
                                            var t = {
                                                    position: "relative",
                                                    display: "inline-block",
                                                    width: Math.max(this.prop.src.clientWidth, this.prop.src.scrollWidth, this.prop.src.offsetWidth) + "px",
                                                    left: 0,
                                                    right: 0,
                                                    top: 0,
                                                    margin: "auto",
                                                    backgroundColor: this.opt.backgroundColor
                                                },
                                                e = s(this.prop.src, this.opt.html2canvas.javascriptEnabled);
                                            "BODY" === e.tagName && (t.height = Math.max(document.body.scrollHeight, document.body.offsetHeight, document.documentElement.clientHeight, document.documentElement.scrollHeight, document.documentElement.offsetHeight) + "px"), this.prop.overlay = o("div", {
                                                className: "html2pdf__overlay",
                                                style: {
                                                    position: "fixed",
                                                    overflow: "hidden",
                                                    zIndex: 1e3,
                                                    left: "-100000px",
                                                    right: 0,
                                                    bottom: 0,
                                                    top: 0
                                                }
                                            }), this.prop.container = o("div", {
                                                className: "html2pdf__container",
                                                style: t
                                            }), this.prop.container.appendChild(e), this.prop.container.firstChild.appendChild(o("div", {
                                                style: {
                                                    clear: "both",
                                                    border: "0 none transparent",
                                                    margin: 0,
                                                    padding: 0,
                                                    height: 0
                                                }
                                            })), this.prop.container.style.float = "none", this.prop.overlay.appendChild(this.prop.container), document.body.appendChild(this.prop.overlay), this.prop.container.firstChild.style.position = "relative", this.prop.container.height = Math.max(this.prop.container.firstChild.clientHeight, this.prop.container.firstChild.scrollHeight, this.prop.container.firstChild.offsetHeight) + "px"
                                        }))
                                    }, l.prototype.toCanvas = function() {
                                        var t = [function() {
                                            return document.body.contains(this.prop.container) || this.toContainer()
                                        }];
                                        return this.thenList(t).then(e).then((function(t) {
                                            var e = Object.assign({}, this.opt.html2canvas);
                                            return delete e.onrendered, t(this.prop.container, e)
                                        })).then((function(t) {
                                            (this.opt.html2canvas.onrendered || function() {})(t), this.prop.canvas = t, document.body.removeChild(this.prop.overlay)
                                        }))
                                    }, l.prototype.toContext2d = function() {
                                        var t = [function() {
                                            return document.body.contains(this.prop.container) || this.toContainer()
                                        }];
                                        return this.thenList(t).then(e).then((function(t) {
                                            var e = this.opt.jsPDF,
                                                n = Object.assign({
                                                    async: !0,
                                                    allowTaint: !0,
                                                    scale: 1,
                                                    scrollX: this.opt.scrollX || 0,
                                                    scrollY: this.opt.scrollY || 0,
                                                    backgroundColor: "#ffffff",
                                                    imageTimeout: 15e3,
                                                    logging: !0,
                                                    proxy: null,
                                                    removeContainer: !0,
                                                    foreignObjectRendering: !1,
                                                    useCORS: !1
                                                }, this.opt.html2canvas);
                                            return delete n.onrendered, e.context2d.autoPaging = !0, e.context2d.posX = this.opt.x, e.context2d.posY = this.opt.y, n.windowHeight = n.windowHeight || 0, n.windowHeight = 0 == n.windowHeight ? Math.max(this.prop.container.clientHeight, this.prop.container.scrollHeight, this.prop.container.offsetHeight) : n.windowHeight, t(this.prop.container, n)
                                        })).then((function(t) {
                                            (this.opt.html2canvas.onrendered || function() {})(t), this.prop.canvas = t, document.body.removeChild(this.prop.overlay)
                                        }))
                                    }, l.prototype.toImg = function() {
                                        return this.thenList([function() {
                                            return this.prop.canvas || this.toCanvas()
                                        }]).then((function() {
                                            var t = this.prop.canvas.toDataURL("image/" + this.opt.image.type, this.opt.image.quality);
                                            this.prop.img = document.createElement("img"), this.prop.img.src = t
                                        }))
                                    }, l.prototype.toPdf = function() {
                                        return this.thenList([function() {
                                            return this.toContext2d()
                                        }]).then((function() {
                                            this.prop.pdf = this.prop.pdf || this.opt.jsPDF
                                        }))
                                    }, l.prototype.output = function(t, e, n) {
                                        return "img" === (n = n || "pdf").toLowerCase() || "image" === n.toLowerCase() ? this.outputImg(t, e) : this.outputPdf(t, e)
                                    }, l.prototype.outputPdf = function(t, e) {
                                        return this.thenList([function() {
                                            return this.prop.pdf || this.toPdf()
                                        }]).then((function() {
                                            return this.prop.pdf.output(t, e)
                                        }))
                                    }, l.prototype.outputImg = function(t) {
                                        return this.thenList([function() {
                                            return this.prop.img || this.toImg()
                                        }]).then((function() {
                                            switch (t) {
                                                case void 0:
                                                case "img":
                                                    return this.prop.img;
                                                case "datauristring":
                                                case "dataurlstring":
                                                    return this.prop.img.src;
                                                case "datauri":
                                                case "dataurl":
                                                    return document.location.href = this.prop.img.src;
                                                default:
                                                    throw 'Image output type "' + t + '" is not supported.'
                                            }
                                        }))
                                    }, l.prototype.save = function(t) {
                                        return this.thenList([function() {
                                            return this.prop.pdf || this.toPdf()
                                        }]).set(t ? {
                                            filename: t
                                        } : null).then((function() {
                                            this.prop.pdf.save(this.opt.filename)
                                        }))
                                    }, l.prototype.doCallback = function() {
                                        return this.thenList([function() {
                                            return this.prop.pdf || this.toPdf()
                                        }]).then((function() {
                                            this.prop.callback(this.prop.pdf)
                                        }))
                                    }, l.prototype.set = function(t) {
                                        if ("object" !== a(t)) return this;
                                        var e = Object.keys(t || {}).map((function(e) {
                                            if (e in l.template.prop) return function() {
                                                this.prop[e] = t[e]
                                            };
                                            switch (e) {
                                                case "margin":
                                                    return this.setMargin.bind(this, t.margin);
                                                case "jsPDF":
                                                    return function() {
                                                        return this.opt.jsPDF = t.jsPDF, this.setPageSize()
                                                    };
                                                case "pageSize":
                                                    return this.setPageSize.bind(this, t.pageSize);
                                                default:
                                                    return function() {
                                                        this.opt[e] = t[e]
                                                    }
                                            }
                                        }), this);
                                        return this.then((function() {
                                            return this.thenList(e)
                                        }))
                                    }, l.prototype.get = function(t, e) {
                                        return this.then((function() {
                                            var n = t in l.template.prop ? this.prop[t] : this.opt[t];
                                            return e ? e(n) : n
                                        }))
                                    }, l.prototype.setMargin = function(t) {
                                        return this.then((function() {
                                            switch (a(t)) {
                                                case "number":
                                                    t = [t, t, t, t];
                                                case "array":
                                                    if (2 === t.length && (t = [t[0], t[1], t[0], t[1]]), 4 === t.length) break;
                                                default:
                                                    return this.error("Invalid margin array.")
                                            }
                                            this.opt.margin = t
                                        })).then(this.setPageSize)
                                    }, l.prototype.setPageSize = function(t) {
                                        function e(t, e) {
                                            return Math.floor(t * e / 72 * 96)
                                        }
                                        return this.then((function() {
                                            (t = t || b.getPageSize(this.opt.jsPDF)).hasOwnProperty("inner") || (t.inner = {
                                                width: t.width - this.opt.margin[1] - this.opt.margin[3],
                                                height: t.height - this.opt.margin[0] - this.opt.margin[2]
                                            }, t.inner.px = {
                                                width: e(t.inner.width, t.k),
                                                height: e(t.inner.height, t.k)
                                            }, t.inner.ratio = t.inner.height / t.inner.width), this.prop.pageSize = t
                                        }))
                                    }, l.prototype.setProgress = function(t, e, n, r) {
                                        return null != t && (this.progress.val = t), null != e && (this.progress.state = e), null != n && (this.progress.n = n), null != r && (this.progress.stack = r), this.progress.ratio = this.progress.val / this.progress.state, this
                                    }, l.prototype.updateProgress = function(t, e, n, r) {
                                        return this.setProgress(t ? this.progress.val + t : null, e || null, n ? this.progress.n + n : null, r ? this.progress.stack.concat(r) : null)
                                    }, l.prototype.then = function(t, e) {
                                        var n = this;
                                        return this.thenCore(t, e, (function(t, e) {
                                            return n.updateProgress(null, null, 1, [t]), Promise.prototype.then.call(this, (function(e) {
                                                return n.updateProgress(null, t), e
                                            })).then(t, e).then((function(t) {
                                                return n.updateProgress(1), t
                                            }))
                                        }))
                                    }, l.prototype.thenCore = function(t, e, n) {
                                        n = n || Promise.prototype.then, t && (t = t.bind(this)), e && (e = e.bind(this));
                                        var r = -1 !== Promise.toString().indexOf("[native code]") && "Promise" === Promise.name ? this : l.convert(Object.assign({}, this), Promise.prototype),
                                            i = n.call(r, t, e);
                                        return l.convert(i, this.__proto__)
                                    }, l.prototype.thenExternal = function(t, e) {
                                        return Promise.prototype.then.call(this, t, e)
                                    }, l.prototype.thenList = function(t) {
                                        var e = this;
                                        return t.forEach((function(t) {
                                            e = e.thenCore(t)
                                        })), e
                                    }, l.prototype.catch = function(t) {
                                        t && (t = t.bind(this));
                                        var e = Promise.prototype.catch.call(this, t);
                                        return l.convert(e, this)
                                    }, l.prototype.catchExternal = function(t) {
                                        return Promise.prototype.catch.call(this, t)
                                    }, l.prototype.error = function(t) {
                                        return this.then((function() {
                                            throw new Error(t)
                                        }))
                                    }, l.prototype.using = l.prototype.set, l.prototype.saveAs = l.prototype.save, l.prototype.export = l.prototype.output, l.prototype.run = l.prototype.then, b.getPageSize = function(t, e, n) {
                                        if ("object" == typeof t) {
                                            var r = t;
                                            t = r.orientation, e = r.unit || e, n = r.format || n
                                        }
                                        e = e || "mm", n = n || "a4", t = ("" + (t || "P")).toLowerCase();
                                        var i, a = ("" + n).toLowerCase(),
                                            o = {
                                                a0: [2383.94, 3370.39],
                                                a1: [1683.78, 2383.94],
                                                a2: [1190.55, 1683.78],
                                                a3: [841.89, 1190.55],
                                                a4: [595.28, 841.89],
                                                a5: [419.53, 595.28],
                                                a6: [297.64, 419.53],
                                                a7: [209.76, 297.64],
                                                a8: [147.4, 209.76],
                                                a9: [104.88, 147.4],
                                                a10: [73.7, 104.88],
                                                b0: [2834.65, 4008.19],
                                                b1: [2004.09, 2834.65],
                                                b2: [1417.32, 2004.09],
                                                b3: [1000.63, 1417.32],
                                                b4: [708.66, 1000.63],
                                                b5: [498.9, 708.66],
                                                b6: [354.33, 498.9],
                                                b7: [249.45, 354.33],
                                                b8: [175.75, 249.45],
                                                b9: [124.72, 175.75],
                                                b10: [87.87, 124.72],
                                                c0: [2599.37, 3676.54],
                                                c1: [1836.85, 2599.37],
                                                c2: [1298.27, 1836.85],
                                                c3: [918.43, 1298.27],
                                                c4: [649.13, 918.43],
                                                c5: [459.21, 649.13],
                                                c6: [323.15, 459.21],
                                                c7: [229.61, 323.15],
                                                c8: [161.57, 229.61],
                                                c9: [113.39, 161.57],
                                                c10: [79.37, 113.39],
                                                dl: [311.81, 623.62],
                                                letter: [612, 792],
                                                "government-letter": [576, 756],
                                                legal: [612, 1008],
                                                "junior-legal": [576, 360],
                                                ledger: [1224, 792],
                                                tabloid: [792, 1224],
                                                "credit-card": [153, 243]
                                            };
                                        switch (e) {
                                            case "pt":
                                                i = 1;
                                                break;
                                            case "mm":
                                                i = 72 / 25.4;
                                                break;
                                            case "cm":
                                                i = 72 / 2.54;
                                                break;
                                            case "in":
                                                i = 72;
                                                break;
                                            case "px":
                                                i = .75;
                                                break;
                                            case "pc":
                                            case "em":
                                                i = 12;
                                                break;
                                            case "ex":
                                                i = 6;
                                                break;
                                            default:
                                                throw "Invalid unit: " + e
                                        }
                                        var s, l = 0,
                                            u = 0;
                                        if (o.hasOwnProperty(a)) l = o[a][1] / i, u = o[a][0] / i;
                                        else try {
                                            l = n[1], u = n[0]
                                        } catch (t) {
                                            throw new Error("Invalid format: " + n)
                                        }
                                        if ("p" === t || "portrait" === t) t = "p", u > l && (s = u, u = l, l = s);
                                        else {
                                            if ("l" !== t && "landscape" !== t) throw "Invalid orientation: " + t;
                                            t = "l", l > u && (s = u, u = l, l = s)
                                        }
                                        return {
                                            width: u,
                                            height: l,
                                            unit: e,
                                            k: i,
                                            orientation: t
                                        }
                                    }, t.html = function(t, e) {
                                        (e = e || {}).callback = e.callback || function() {}, e.html2canvas = e.html2canvas || {}, e.html2canvas.canvas = e.html2canvas.canvas || this.canvas, e.jsPDF = e.jsPDF || this;
                                        var n = new l(e);
                                        return e.worker ? n : n.from(t).doCallback()
                                    }
                                }(b.API), b.API.addJS = function(t) {
                                    return yt = t, this.internal.events.subscribe("postPutResources", (function() {
                                        vt = this.internal.newObject(), this.internal.out("<<"), this.internal.out("/Names [(EmbeddedJS) " + (vt + 1) + " 0 R]"), this.internal.out(">>"), this.internal.out("endobj"), bt = this.internal.newObject(), this.internal.out("<<"), this.internal.out("/S /JavaScript"), this.internal.out("/JS (" + yt + ")"), this.internal.out(">>"), this.internal.out("endobj")
                                    })), this.internal.events.subscribe("putCatalog", (function() {
                                        void 0 !== vt && void 0 !== bt && this.internal.out("/Names <</JavaScript " + vt + " 0 R>>")
                                    })), this
                                },
                                function(t) {
                                    var e;
                                    t.events.push(["postPutResources", function() {
                                        var t = this,
                                            n = /^(\d+) 0 obj$/;
                                        if (this.outline.root.children.length > 0)
                                            for (var r = t.outline.render().split(/\r\n/), i = 0; i < r.length; i++) {
                                                var a = r[i],
                                                    o = n.exec(a);
                                                if (null != o) {
                                                    var s = o[1];
                                                    t.internal.newObjectDeferredBegin(s, !1)
                                                }
                                                t.internal.write(a)
                                            }
                                        if (this.outline.createNamedDestinations) {
                                            var l = this.internal.pages.length,
                                                u = [];
                                            for (i = 0; i < l; i++) {
                                                var c = t.internal.newObject();
                                                u.push(c);
                                                var f = t.internal.getPageInfo(i + 1);
                                                t.internal.write("<< /D[" + f.objId + " 0 R /XYZ null null null]>> endobj")
                                            }
                                            var h = t.internal.newObject();
                                            for (t.internal.write("<< /Names [ "), i = 0; i < u.length; i++) t.internal.write("(page_" + (i + 1) + ")" + u[i] + " 0 R");
                                            t.internal.write(" ] >>", "endobj"), e = t.internal.newObject(), t.internal.write("<< /Dests " + h + " 0 R"), t.internal.write(">>", "endobj")
                                        }
                                    }]), t.events.push(["putCatalog", function() {
                                        this.outline.root.children.length > 0 && (this.internal.write("/Outlines", this.outline.makeRef(this.outline.root)), this.outline.createNamedDestinations && this.internal.write("/Names " + e + " 0 R"))
                                    }]), t.events.push(["initialized", function() {
                                        var t = this;
                                        t.outline = {
                                            createNamedDestinations: !1,
                                            root: {
                                                children: []
                                            }
                                        }, t.outline.add = function(t, e, n) {
                                            var r = {
                                                title: e,
                                                options: n,
                                                children: []
                                            };
                                            return null == t && (t = this.root), t.children.push(r), r
                                        }, t.outline.render = function() {
                                            return this.ctx = {}, this.ctx.val = "", this.ctx.pdf = t, this.genIds_r(this.root), this.renderRoot(this.root), this.renderItems(this.root), this.ctx.val
                                        }, t.outline.genIds_r = function(e) {
                                            e.id = t.internal.newObjectDeferred();
                                            for (var n = 0; n < e.children.length; n++) this.genIds_r(e.children[n])
                                        }, t.outline.renderRoot = function(t) {
                                            this.objStart(t), this.line("/Type /Outlines"), t.children.length > 0 && (this.line("/First " + this.makeRef(t.children[0])), this.line("/Last " + this.makeRef(t.children[t.children.length - 1]))), this.line("/Count " + this.count_r({
                                                count: 0
                                            }, t)), this.objEnd()
                                        }, t.outline.renderItems = function(e) {
                                            for (var n = this.ctx.pdf.internal.getVerticalCoordinateString, r = 0; r < e.children.length; r++) {
                                                var i = e.children[r];
                                                this.objStart(i), this.line("/Title " + this.makeString(i.title)), this.line("/Parent " + this.makeRef(e)), r > 0 && this.line("/Prev " + this.makeRef(e.children[r - 1])), r < e.children.length - 1 && this.line("/Next " + this.makeRef(e.children[r + 1])), i.children.length > 0 && (this.line("/First " + this.makeRef(i.children[0])), this.line("/Last " + this.makeRef(i.children[i.children.length - 1])));
                                                var a = this.count = this.count_r({
                                                    count: 0
                                                }, i);
                                                if (a > 0 && this.line("/Count " + a), i.options && i.options.pageNumber) {
                                                    var o = t.internal.getPageInfo(i.options.pageNumber);
                                                    this.line("/Dest [" + o.objId + " 0 R /XYZ 0 " + n(0) + " 0]")
                                                }
                                                this.objEnd()
                                            }
                                            for (var s = 0; s < e.children.length; s++) this.renderItems(e.children[s])
                                        }, t.outline.line = function(t) {
                                            this.ctx.val += t + "\r\n"
                                        }, t.outline.makeRef = function(t) {
                                            return t.id + " 0 R"
                                        }, t.outline.makeString = function(e) {
                                            return "(" + t.internal.pdfEscape(e) + ")"
                                        }, t.outline.objStart = function(t) {
                                            this.ctx.val += "\r\n" + t.id + " 0 obj\r\n<<\r\n"
                                        }, t.outline.objEnd = function() {
                                            this.ctx.val += ">> \r\nendobj\r\n"
                                        }, t.outline.count_r = function(t, e) {
                                            for (var n = 0; n < e.children.length; n++) t.count++, this.count_r(t, e.children[n]);
                                            return t.count
                                        }
                                    }])
                                }(b.API),
                                function(t) {
                                    var e = [192, 193, 194, 195, 196, 197, 198, 199];
                                    t.processJPEG = function(t, n, r, i, a, o) {
                                        var s, l = this.decode.DCT_DECODE,
                                            u = null;
                                        if ("string" == typeof t || this.__addimage__.isArrayBuffer(t) || this.__addimage__.isArrayBufferView(t)) {
                                            switch (t = a || t, t = this.__addimage__.isArrayBuffer(t) ? new Uint8Array(t) : t, (s = function(t) {
                                                    for (var n, r = 256 * t.charCodeAt(4) + t.charCodeAt(5), i = t.length, a = {
                                                            width: 0,
                                                            height: 0,
                                                            numcomponents: 1
                                                        }, o = 4; o < i; o += 2) {
                                                        if (o += r, -1 !== e.indexOf(t.charCodeAt(o + 1))) {
                                                            n = 256 * t.charCodeAt(o + 5) + t.charCodeAt(o + 6), a = {
                                                                width: 256 * t.charCodeAt(o + 7) + t.charCodeAt(o + 8),
                                                                height: n,
                                                                numcomponents: t.charCodeAt(o + 9)
                                                            };
                                                            break
                                                        }
                                                        r = 256 * t.charCodeAt(o + 2) + t.charCodeAt(o + 3)
                                                    }
                                                    return a
                                                }(t = this.__addimage__.isArrayBufferView(t) ? this.__addimage__.arrayBufferToBinaryString(t) : t)).numcomponents) {
                                                case 1:
                                                    o = this.color_spaces.DEVICE_GRAY;
                                                    break;
                                                case 4:
                                                    o = this.color_spaces.DEVICE_CMYK;
                                                    break;
                                                case 3:
                                                    o = this.color_spaces.DEVICE_RGB
                                            }
                                            u = {
                                                data: t,
                                                width: s.width,
                                                height: s.height,
                                                colorSpace: o,
                                                bitsPerComponent: 8,
                                                filter: l,
                                                index: n,
                                                alias: r
                                            }
                                        }
                                        return u
                                    }
                                }(b.API);
                            var At, kt, Pt, Ct, Et, Ft = function() {
                                    function t() {
                                        this.pos = 0, this.bufferLength = 0, this.eof = !1, this.buffer = null
                                    }
                                    return t.prototype = {
                                        ensureBuffer: function(t) {
                                            var e = this.buffer,
                                                n = e ? e.byteLength : 0;
                                            if (t < n) return e;
                                            for (var r = 512; r < t;) r <<= 1;
                                            for (var i = new Uint8Array(r), a = 0; a < n; ++a) i[a] = e[a];
                                            return this.buffer = i
                                        },
                                        getByte: function() {
                                            for (var t = this.pos; this.bufferLength <= t;) {
                                                if (this.eof) return null;
                                                this.readBlock()
                                            }
                                            return this.buffer[this.pos++]
                                        },
                                        getBytes: function(t) {
                                            var e = this.pos;
                                            if (t) {
                                                this.ensureBuffer(e + t);
                                                for (var n = e + t; !this.eof && this.bufferLength < n;) this.readBlock();
                                                var r = this.bufferLength;
                                                n > r && (n = r)
                                            } else {
                                                for (; !this.eof;) this.readBlock();
                                                n = this.bufferLength
                                            }
                                            return this.pos = n, this.buffer.subarray(e, n)
                                        },
                                        lookChar: function() {
                                            for (var t = this.pos; this.bufferLength <= t;) {
                                                if (this.eof) return null;
                                                this.readBlock()
                                            }
                                            return String.fromCharCode(this.buffer[this.pos])
                                        },
                                        getChar: function() {
                                            for (var t = this.pos; this.bufferLength <= t;) {
                                                if (this.eof) return null;
                                                this.readBlock()
                                            }
                                            return String.fromCharCode(this.buffer[this.pos++])
                                        },
                                        makeSubStream: function(t, e, n) {
                                            for (var r = t + e; this.bufferLength <= r && !this.eof;) this.readBlock();
                                            return new Stream(this.buffer, t, e, n)
                                        },
                                        skip: function(t) {
                                            t || (t = 1), this.pos += t
                                        },
                                        reset: function() {
                                            this.pos = 0
                                        }
                                    }, t
                                }(),
                                It = ("undefined" != typeof self && self || "undefined" != typeof window && window || "undefined" != typeof t && t || Function('return typeof this === "object" && this.content')() || Function("return this")()).FlateStream = function() {
                                    if ("undefined" != typeof Uint32Array) {
                                        var t = new Uint32Array([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]),
                                            e = new Uint32Array([3, 4, 5, 6, 7, 8, 9, 10, 65547, 65549, 65551, 65553, 131091, 131095, 131099, 131103, 196643, 196651, 196659, 196667, 262211, 262227, 262243, 262259, 327811, 327843, 327875, 327907, 258, 258, 258]),
                                            n = new Uint32Array([1, 2, 3, 4, 65541, 65543, 131081, 131085, 196625, 196633, 262177, 262193, 327745, 327777, 393345, 393409, 459009, 459137, 524801, 525057, 590849, 591361, 657409, 658433, 724993, 727041, 794625, 798721, 868353, 876545]),
                                            r = [new Uint32Array([459008, 524368, 524304, 524568, 459024, 524400, 524336, 590016, 459016, 524384, 524320, 589984, 524288, 524416, 524352, 590048, 459012, 524376, 524312, 589968, 459028, 524408, 524344, 590032, 459020, 524392, 524328, 59e4, 524296, 524424, 524360, 590064, 459010, 524372, 524308, 524572, 459026, 524404, 524340, 590024, 459018, 524388, 524324, 589992, 524292, 524420, 524356, 590056, 459014, 524380, 524316, 589976, 459030, 524412, 524348, 590040, 459022, 524396, 524332, 590008, 524300, 524428, 524364, 590072, 459009, 524370, 524306, 524570, 459025, 524402, 524338, 590020, 459017, 524386, 524322, 589988, 524290, 524418, 524354, 590052, 459013, 524378, 524314, 589972, 459029, 524410, 524346, 590036, 459021, 524394, 524330, 590004, 524298, 524426, 524362, 590068, 459011, 524374, 524310, 524574, 459027, 524406, 524342, 590028, 459019, 524390, 524326, 589996, 524294, 524422, 524358, 590060, 459015, 524382, 524318, 589980, 459031, 524414, 524350, 590044, 459023, 524398, 524334, 590012, 524302, 524430, 524366, 590076, 459008, 524369, 524305, 524569, 459024, 524401, 524337, 590018, 459016, 524385, 524321, 589986, 524289, 524417, 524353, 590050, 459012, 524377, 524313, 589970, 459028, 524409, 524345, 590034, 459020, 524393, 524329, 590002, 524297, 524425, 524361, 590066, 459010, 524373, 524309, 524573, 459026, 524405, 524341, 590026, 459018, 524389, 524325, 589994, 524293, 524421, 524357, 590058, 459014, 524381, 524317, 589978, 459030, 524413, 524349, 590042, 459022, 524397, 524333, 590010, 524301, 524429, 524365, 590074, 459009, 524371, 524307, 524571, 459025, 524403, 524339, 590022, 459017, 524387, 524323, 589990, 524291, 524419, 524355, 590054, 459013, 524379, 524315, 589974, 459029, 524411, 524347, 590038, 459021, 524395, 524331, 590006, 524299, 524427, 524363, 590070, 459011, 524375, 524311, 524575, 459027, 524407, 524343, 590030, 459019, 524391, 524327, 589998, 524295, 524423, 524359, 590062, 459015, 524383, 524319, 589982, 459031, 524415, 524351, 590046, 459023, 524399, 524335, 590014, 524303, 524431, 524367, 590078, 459008, 524368, 524304, 524568, 459024, 524400, 524336, 590017, 459016, 524384, 524320, 589985, 524288, 524416, 524352, 590049, 459012, 524376, 524312, 589969, 459028, 524408, 524344, 590033, 459020, 524392, 524328, 590001, 524296, 524424, 524360, 590065, 459010, 524372, 524308, 524572, 459026, 524404, 524340, 590025, 459018, 524388, 524324, 589993, 524292, 524420, 524356, 590057, 459014, 524380, 524316, 589977, 459030, 524412, 524348, 590041, 459022, 524396, 524332, 590009, 524300, 524428, 524364, 590073, 459009, 524370, 524306, 524570, 459025, 524402, 524338, 590021, 459017, 524386, 524322, 589989, 524290, 524418, 524354, 590053, 459013, 524378, 524314, 589973, 459029, 524410, 524346, 590037, 459021, 524394, 524330, 590005, 524298, 524426, 524362, 590069, 459011, 524374, 524310, 524574, 459027, 524406, 524342, 590029, 459019, 524390, 524326, 589997, 524294, 524422, 524358, 590061, 459015, 524382, 524318, 589981, 459031, 524414, 524350, 590045, 459023, 524398, 524334, 590013, 524302, 524430, 524366, 590077, 459008, 524369, 524305, 524569, 459024, 524401, 524337, 590019, 459016, 524385, 524321, 589987, 524289, 524417, 524353, 590051, 459012, 524377, 524313, 589971, 459028, 524409, 524345, 590035, 459020, 524393, 524329, 590003, 524297, 524425, 524361, 590067, 459010, 524373, 524309, 524573, 459026, 524405, 524341, 590027, 459018, 524389, 524325, 589995, 524293, 524421, 524357, 590059, 459014, 524381, 524317, 589979, 459030, 524413, 524349, 590043, 459022, 524397, 524333, 590011, 524301, 524429, 524365, 590075, 459009, 524371, 524307, 524571, 459025, 524403, 524339, 590023, 459017, 524387, 524323, 589991, 524291, 524419, 524355, 590055, 459013, 524379, 524315, 589975, 459029, 524411, 524347, 590039, 459021, 524395, 524331, 590007, 524299, 524427, 524363, 590071, 459011, 524375, 524311, 524575, 459027, 524407, 524343, 590031, 459019, 524391, 524327, 589999, 524295, 524423, 524359, 590063, 459015, 524383, 524319, 589983, 459031, 524415, 524351, 590047, 459023, 524399, 524335, 590015, 524303, 524431, 524367, 590079]), 9],
                                            i = [new Uint32Array([327680, 327696, 327688, 327704, 327684, 327700, 327692, 327708, 327682, 327698, 327690, 327706, 327686, 327702, 327694, 0, 327681, 327697, 327689, 327705, 327685, 327701, 327693, 327709, 327683, 327699, 327691, 327707, 327687, 327703, 327695, 0]), 5];
                                        return o.prototype = Object.create(Ft.prototype), o.prototype.getBits = function(t) {
                                            for (var e, n = this.codeSize, r = this.codeBuf, i = this.bytes, o = this.bytesPos; n < t;) void 0 === (e = i[o++]) && a("Bad encoding in flate stream"), r |= e << n, n += 8;
                                            return e = r & (1 << t) - 1, this.codeBuf = r >> t, this.codeSize = n -= t, this.bytesPos = o, e
                                        }, o.prototype.getCode = function(t) {
                                            for (var e = t[0], n = t[1], r = this.codeSize, i = this.codeBuf, o = this.bytes, s = this.bytesPos; r < n;) {
                                                var l;
                                                void 0 === (l = o[s++]) && a("Bad encoding in flate stream"), i |= l << r, r += 8
                                            }
                                            var u = e[i & (1 << n) - 1],
                                                c = u >> 16,
                                                f = 65535 & u;
                                            return (0 == r || r < c || 0 == c) && a("Bad encoding in flate stream"), this.codeBuf = i >> c, this.codeSize = r - c, this.bytesPos = s, f
                                        }, o.prototype.generateHuffmanTable = function(t) {
                                            for (var e = t.length, n = 0, r = 0; r < e; ++r) t[r] > n && (n = t[r]);
                                            for (var i = 1 << n, a = new Uint32Array(i), o = 1, s = 0, l = 2; o <= n; ++o, s <<= 1, l <<= 1)
                                                for (var u = 0; u < e; ++u)
                                                    if (t[u] == o) {
                                                        var c = 0,
                                                            f = s;
                                                        for (r = 0; r < o; ++r) c = c << 1 | 1 & f, f >>= 1;
                                                        for (r = c; r < i; r += l) a[r] = o << 16 | u;
                                                        ++s
                                                    } return [a, n]
                                        }, o.prototype.readBlock = function() {
                                            function o(t, e, n, r, i) {
                                                for (var a = t.getBits(n) + r; a-- > 0;) e[p++] = i
                                            }
                                            var s = this.getBits(3);
                                            if (1 & s && (this.eof = !0), 0 != (s >>= 1)) {
                                                var l, u;
                                                if (1 == s) l = r, u = i;
                                                else if (2 == s) {
                                                    for (var c = this.getBits(5) + 257, f = this.getBits(5) + 1, h = this.getBits(4) + 4, d = Array(t.length), p = 0; p < h;) d[t[p++]] = this.getBits(3);
                                                    for (var g = this.generateHuffmanTable(d), m = 0, v = (p = 0, c + f), b = new Array(v); p < v;) {
                                                        var y = this.getCode(g);
                                                        16 == y ? o(this, b, 2, 3, m) : 17 == y ? o(this, b, 3, 3, m = 0) : 18 == y ? o(this, b, 7, 11, m = 0) : b[p++] = m = y
                                                    }
                                                    l = this.generateHuffmanTable(b.slice(0, c)), u = this.generateHuffmanTable(b.slice(c, v))
                                                } else a("Unknown block type in flate stream");
                                                for (var w = (I = this.buffer) ? I.length : 0, x = this.bufferLength;;) {
                                                    var _ = this.getCode(l);
                                                    if (_ < 256) x + 1 >= w && (w = (I = this.ensureBuffer(x + 1)).length), I[x++] = _;
                                                    else {
                                                        if (256 == _) return void(this.bufferLength = x);
                                                        var N = (_ = e[_ -= 257]) >> 16;
                                                        N > 0 && (N = this.getBits(N)), m = (65535 & _) + N, _ = this.getCode(u), (N = (_ = n[_]) >> 16) > 0 && (N = this.getBits(N));
                                                        var L = (65535 & _) + N;
                                                        x + m >= w && (w = (I = this.ensureBuffer(x + m)).length);
                                                        for (var S = 0; S < m; ++S, ++x) I[x] = I[x - L]
                                                    }
                                                }
                                            } else {
                                                var A, k = this.bytes,
                                                    P = this.bytesPos;
                                                void 0 === (A = k[P++]) && a("Bad block header in flate stream");
                                                var C = A;
                                                void 0 === (A = k[P++]) && a("Bad block header in flate stream"), C |= A << 8, void 0 === (A = k[P++]) && a("Bad block header in flate stream");
                                                var E = A;
                                                void 0 === (A = k[P++]) && a("Bad block header in flate stream"), (E |= A << 8) != (65535 & ~C) && a("Bad uncompressed block length in flate stream"), this.codeBuf = 0, this.codeSize = 0;
                                                var F = this.bufferLength,
                                                    I = this.ensureBuffer(F + C),
                                                    O = F + C;
                                                this.bufferLength = O;
                                                for (var j = F; j < O; ++j) {
                                                    if (void 0 === (A = k[P++])) {
                                                        this.eof = !0;
                                                        break
                                                    }
                                                    I[j] = A
                                                }
                                                this.bytesPos = P
                                            }
                                        }, o
                                    }

                                    function a(t) {
                                        throw new Error(t)
                                    }

                                    function o(t) {
                                        var e = 0,
                                            n = t[e++],
                                            r = t[e++]; - 1 != n && -1 != r || a("Invalid header in flate stream"), 8 != (15 & n) && a("Unknown compression method in flate stream"), ((n << 8) + r) % 31 != 0 && a("Bad FCHECK in flate stream"), 32 & r && a("FDICT bit set in flate stream"), this.bytes = t, this.bytesPos = 2, this.codeSize = 0, this.codeBuf = 0, Ft.call(this)
                                    }
                                }(),
                                Ot = function() {
                                    var t, e, n;

                                    function i(t) {
                                        var e, n, r, i, a, o, s, l, u, c, f, h, d, p;
                                        for (this.data = t, this.pos = 8, this.palette = [], this.imgData = [], this.transparency = {}, this.animation = null, this.text = {}, o = null;;) {
                                            switch (e = this.readUInt32(), u = function() {
                                                    var t, e;
                                                    for (e = [], t = 0; t < 4; ++t) e.push(String.fromCharCode(this.data[this.pos++]));
                                                    return e
                                                }.call(this).join("")) {
                                                case "IHDR":
                                                    this.width = this.readUInt32(), this.height = this.readUInt32(), this.bits = this.data[this.pos++], this.colorType = this.data[this.pos++], this.compressionMethod = this.data[this.pos++], this.filterMethod = this.data[this.pos++], this.interlaceMethod = this.data[this.pos++];
                                                    break;
                                                case "acTL":
                                                    this.animation = {
                                                        numFrames: this.readUInt32(),
                                                        numPlays: this.readUInt32() || 1 / 0,
                                                        frames: []
                                                    };
                                                    break;
                                                case "PLTE":
                                                    this.palette = this.read(e);
                                                    break;
                                                case "fcTL":
                                                    o && this.animation.frames.push(o), this.pos += 4, o = {
                                                        width: this.readUInt32(),
                                                        height: this.readUInt32(),
                                                        xOffset: this.readUInt32(),
                                                        yOffset: this.readUInt32()
                                                    }, a = this.readUInt16(), i = this.readUInt16() || 100, o.delay = 1e3 * a / i, o.disposeOp = this.data[this.pos++], o.blendOp = this.data[this.pos++], o.data = [];
                                                    break;
                                                case "IDAT":
                                                case "fdAT":
                                                    for ("fdAT" === u && (this.pos += 4, e -= 4), t = (null != o ? o.data : void 0) || this.imgData, h = 0; 0 <= e ? h < e : h > e; 0 <= e ? ++h : --h) t.push(this.data[this.pos++]);
                                                    break;
                                                case "tRNS":
                                                    switch (this.transparency = {}, this.colorType) {
                                                        case 3:
                                                            if (r = this.palette.length / 3, this.transparency.indexed = this.read(e), this.transparency.indexed.length > r) throw new Error("More transparent colors than palette size");
                                                            if ((c = r - this.transparency.indexed.length) > 0)
                                                                for (d = 0; 0 <= c ? d < c : d > c; 0 <= c ? ++d : --d) this.transparency.indexed.push(255);
                                                            break;
                                                        case 0:
                                                            this.transparency.grayscale = this.read(e)[0];
                                                            break;
                                                        case 2:
                                                            this.transparency.rgb = this.read(e)
                                                    }
                                                    break;
                                                case "tEXt":
                                                    s = (f = this.read(e)).indexOf(0), l = String.fromCharCode.apply(String, f.slice(0, s)), this.text[l] = String.fromCharCode.apply(String, f.slice(s + 1));
                                                    break;
                                                case "IEND":
                                                    return o && this.animation.frames.push(o), this.colors = function() {
                                                        switch (this.colorType) {
                                                            case 0:
                                                            case 3:
                                                            case 4:
                                                                return 1;
                                                            case 2:
                                                            case 6:
                                                                return 3
                                                        }
                                                    }.call(this), this.hasAlphaChannel = 4 === (p = this.colorType) || 6 === p, n = this.colors + (this.hasAlphaChannel ? 1 : 0), this.pixelBitlength = this.bits * n, this.colorSpace = function() {
                                                        switch (this.colors) {
                                                            case 1:
                                                                return "DeviceGray";
                                                            case 3:
                                                                return "DeviceRGB"
                                                        }
                                                    }.call(this), void(this.imgData = new Uint8Array(this.imgData));
                                                default:
                                                    this.pos += e
                                            }
                                            if (this.pos += 4, this.pos > this.data.length) throw new Error("Incomplete or corrupt PNG file")
                                        }
                                    }
                                    i.prototype.read = function(t) {
                                        var e, n;
                                        for (n = [], e = 0; 0 <= t ? e < t : e > t; 0 <= t ? ++e : --e) n.push(this.data[this.pos++]);
                                        return n
                                    }, i.prototype.readUInt32 = function() {
                                        return this.data[this.pos++] << 24 | this.data[this.pos++] << 16 | this.data[this.pos++] << 8 | this.data[this.pos++]
                                    }, i.prototype.readUInt16 = function() {
                                        return this.data[this.pos++] << 8 | this.data[this.pos++]
                                    }, i.prototype.decodePixels = function(t) {
                                        var e = this.pixelBitlength / 8,
                                            n = new Uint8Array(this.width * this.height * e),
                                            r = 0,
                                            i = this;
                                        if (null == t && (t = this.imgData), 0 === t.length) return new Uint8Array(0);

                                        function a(a, o, s, l) {
                                            var u, c, f, h, d, p, g, m, v, b, y, w, x, _, N, L, S, A, k, P, C, E = Math.ceil((i.width - a) / s),
                                                F = Math.ceil((i.height - o) / l),
                                                I = i.width == E && i.height == F;
                                            for (_ = e * E, w = I ? n : new Uint8Array(_ * F), p = t.length, x = 0, c = 0; x < F && r < p;) {
                                                switch (t[r++]) {
                                                    case 0:
                                                        for (h = S = 0; S < _; h = S += 1) w[c++] = t[r++];
                                                        break;
                                                    case 1:
                                                        for (h = A = 0; A < _; h = A += 1) u = t[r++], d = h < e ? 0 : w[c - e], w[c++] = (u + d) % 256;
                                                        break;
                                                    case 2:
                                                        for (h = k = 0; k < _; h = k += 1) u = t[r++], f = (h - h % e) / e, N = x && w[(x - 1) * _ + f * e + h % e], w[c++] = (N + u) % 256;
                                                        break;
                                                    case 3:
                                                        for (h = P = 0; P < _; h = P += 1) u = t[r++], f = (h - h % e) / e, d = h < e ? 0 : w[c - e], N = x && w[(x - 1) * _ + f * e + h % e], w[c++] = (u + Math.floor((d + N) / 2)) % 256;
                                                        break;
                                                    case 4:
                                                        for (h = C = 0; C < _; h = C += 1) u = t[r++], f = (h - h % e) / e, d = h < e ? 0 : w[c - e], 0 === x ? N = L = 0 : (N = w[(x - 1) * _ + f * e + h % e], L = f && w[(x - 1) * _ + (f - 1) * e + h % e]), g = d + N - L, m = Math.abs(g - d), b = Math.abs(g - N), y = Math.abs(g - L), v = m <= b && m <= y ? d : b <= y ? N : L, w[c++] = (u + v) % 256;
                                                        break;
                                                    default:
                                                        throw new Error("Invalid filter algorithm: " + t[r - 1])
                                                }
                                                if (!I) {
                                                    var O = ((o + x * l) * i.width + a) * e,
                                                        j = x * _;
                                                    for (h = 0; h < E; h += 1) {
                                                        for (var M = 0; M < e; M += 1) n[O++] = w[j++];
                                                        O += (s - 1) * e
                                                    }
                                                }
                                                x++
                                            }
                                        }
                                        return t = (t = new It(t)).getBytes(), 1 == i.interlaceMethod ? (a(0, 0, 8, 8), a(4, 0, 8, 8), a(0, 4, 4, 8), a(2, 0, 4, 4), a(0, 2, 2, 4), a(1, 0, 2, 2), a(0, 1, 1, 2)) : a(0, 0, 1, 1), n
                                    }, i.prototype.decodePalette = function() {
                                        var t, e, n, r, i, a, o, s, l;
                                        for (n = this.palette, a = this.transparency.indexed || [], i = new Uint8Array((a.length || 0) + n.length), r = 0, t = 0, e = o = 0, s = n.length; o < s; e = o += 3) i[r++] = n[e], i[r++] = n[e + 1], i[r++] = n[e + 2], i[r++] = null != (l = a[t++]) ? l : 255;
                                        return i
                                    }, i.prototype.copyToImageData = function(t, e) {
                                        var n, r, i, a, o, s, l, u, c, f, h;
                                        if (r = this.colors, c = null, n = this.hasAlphaChannel, this.palette.length && (c = null != (h = this._decodedPalette) ? h : this._decodedPalette = this.decodePalette(), r = 4, n = !0), u = (i = t.data || t).length, o = c || e, a = s = 0, 1 === r)
                                            for (; a < u;) l = c ? 4 * e[a / 4] : s, f = o[l++], i[a++] = f, i[a++] = f, i[a++] = f, i[a++] = n ? o[l++] : 255, s = l;
                                        else
                                            for (; a < u;) l = c ? 4 * e[a / 4] : s, i[a++] = o[l++], i[a++] = o[l++], i[a++] = o[l++], i[a++] = n ? o[l++] : 255, s = l
                                    }, i.prototype.decode = function() {
                                        var t;
                                        return t = new Uint8Array(this.width * this.height * 4), this.copyToImageData(t, this.decodePixels()), t
                                    };
                                    var a = function() {
                                        if ("[object Window]" === Object.prototype.toString.call(r)) {
                                            try {
                                                e = r.document.createElement("canvas"), n = e.getContext("2d")
                                            } catch (r) {
                                                return !1
                                            }
                                            return !0
                                        }
                                        return !1
                                    };
                                    return a(), t = function(t) {
                                        var r;
                                        if (!0 === a()) return n.width = t.width, n.height = t.height, n.clearRect(0, 0, t.width, t.height), n.putImageData(t, 0, 0), (r = new Image).src = e.toDataURL(), r;
                                        throw new Error("This method requires a Browser with Canvas-capability.")
                                    }, i.prototype.decodeFrames = function(e) {
                                        var n, r, i, a, o, s, l, u;
                                        if (this.animation) {
                                            for (u = [], r = o = 0, s = (l = this.animation.frames).length; o < s; r = ++o) n = l[r], i = e.createImageData(n.width, n.height), a = this.decodePixels(new Uint8Array(n.data)), this.copyToImageData(i, a), n.imageData = i, u.push(n.image = t(i));
                                            return u
                                        }
                                    }, i.prototype.renderFrame = function(t, e) {
                                        var n, r, i;
                                        return n = (r = this.animation.frames)[e], i = r[e - 1], 0 === e && t.clearRect(0, 0, this.width, this.height), 1 === (null != i ? i.disposeOp : void 0) ? t.clearRect(i.xOffset, i.yOffset, i.width, i.height) : 2 === (null != i ? i.disposeOp : void 0) && t.putImageData(i.imageData, i.xOffset, i.yOffset), 0 === n.blendOp && t.clearRect(n.xOffset, n.yOffset, n.width, n.height), t.drawImage(n.image, n.xOffset, n.yOffset)
                                    }, i.prototype.animate = function(t) {
                                        var e, n, r, i, a, o, s = this;
                                        return n = 0, o = this.animation, i = o.numFrames, r = o.frames, a = o.numPlays, (e = function() {
                                            var o, l;
                                            if (o = n++ % i, l = r[o], s.renderFrame(t, o), i > 1 && n / i < a) return s.animation._timeout = setTimeout(e, l.delay)
                                        })()
                                    }, i.prototype.stopAnimation = function() {
                                        var t;
                                        return clearTimeout(null != (t = this.animation) ? t._timeout : void 0)
                                    }, i.prototype.render = function(t) {
                                        var e, n;
                                        return t._png && t._png.stopAnimation(), t._png = this, t.width = this.width, t.height = this.height, e = t.getContext("2d"), this.animation ? (this.decodeFrames(e), this.animate(e)) : (n = e.createImageData(this.width, this.height), this.copyToImageData(n, this.decodePixels()), e.putImageData(n, 0, 0))
                                    }, i
                                }();

                            function jt(t) {
                                var e = 0;
                                if (71 !== t[e++] || 73 !== t[e++] || 70 !== t[e++] || 56 !== t[e++] || 56 != (t[e++] + 1 & 253) || 97 !== t[e++]) throw new Error("Invalid GIF 87a/89a header.");
                                var n = t[e++] | t[e++] << 8,
                                    r = t[e++] | t[e++] << 8,
                                    i = t[e++],
                                    a = i >> 7,
                                    o = 1 << 1 + (7 & i);
                                t[e++], t[e++];
                                var s = null,
                                    l = null;
                                a && (s = e, l = o, e += 3 * o);
                                var u = !0,
                                    c = [],
                                    f = 0,
                                    h = null,
                                    d = 0,
                                    p = null;
                                for (this.width = n, this.height = r; u && e < t.length;) switch (t[e++]) {
                                    case 33:
                                        switch (t[e++]) {
                                            case 255:
                                                if (11 !== t[e] || 78 == t[e + 1] && 69 == t[e + 2] && 84 == t[e + 3] && 83 == t[e + 4] && 67 == t[e + 5] && 65 == t[e + 6] && 80 == t[e + 7] && 69 == t[e + 8] && 50 == t[e + 9] && 46 == t[e + 10] && 48 == t[e + 11] && 3 == t[e + 12] && 1 == t[e + 13] && 0 == t[e + 16]) e += 14, p = t[e++] | t[e++] << 8, e++;
                                                else
                                                    for (e += 12;;) {
                                                        if (!((k = t[e++]) >= 0)) throw Error("Invalid block size");
                                                        if (0 === k) break;
                                                        e += k
                                                    }
                                                break;
                                            case 249:
                                                if (4 !== t[e++] || 0 !== t[e + 4]) throw new Error("Invalid graphics extension block.");
                                                var g = t[e++];
                                                f = t[e++] | t[e++] << 8, h = t[e++], 0 == (1 & g) && (h = null), d = g >> 2 & 7, e++;
                                                break;
                                            case 254:
                                                for (;;) {
                                                    if (!((k = t[e++]) >= 0)) throw Error("Invalid block size");
                                                    if (0 === k) break;
                                                    e += k
                                                }
                                                break;
                                            default:
                                                throw new Error("Unknown graphic control label: 0x" + t[e - 1].toString(16))
                                        }
                                        break;
                                    case 44:
                                        var m = t[e++] | t[e++] << 8,
                                            v = t[e++] | t[e++] << 8,
                                            b = t[e++] | t[e++] << 8,
                                            y = t[e++] | t[e++] << 8,
                                            w = t[e++],
                                            x = w >> 6 & 1,
                                            _ = 1 << 1 + (7 & w),
                                            N = s,
                                            L = l,
                                            S = !1;
                                        w >> 7 && (S = !0, N = e, L = _, e += 3 * _);
                                        var A = e;
                                        for (e++;;) {
                                            var k;
                                            if (!((k = t[e++]) >= 0)) throw Error("Invalid block size");
                                            if (0 === k) break;
                                            e += k
                                        }
                                        c.push({
                                            x: m,
                                            y: v,
                                            width: b,
                                            height: y,
                                            has_local_palette: S,
                                            palette_offset: N,
                                            palette_size: L,
                                            data_offset: A,
                                            data_length: e - A,
                                            transparent_index: h,
                                            interlaced: !!x,
                                            delay: f,
                                            disposal: d
                                        });
                                        break;
                                    case 59:
                                        u = !1;
                                        break;
                                    default:
                                        throw new Error("Unknown gif block: 0x" + t[e - 1].toString(16))
                                }
                                this.numFrames = function() {
                                    return c.length
                                }, this.loopCount = function() {
                                    return p
                                }, this.frameInfo = function(t) {
                                    if (t < 0 || t >= c.length) throw new Error("Frame index out of range.");
                                    return c[t]
                                }, this.decodeAndBlitFrameBGRA = function(e, r) {
                                    var i = this.frameInfo(e),
                                        a = i.width * i.height,
                                        o = new Uint8Array(a);
                                    Mt(t, i.data_offset, o, a);
                                    var s = i.palette_offset,
                                        l = i.transparent_index;
                                    null === l && (l = 256);
                                    var u = i.width,
                                        c = n - u,
                                        f = u,
                                        h = 4 * (i.y * n + i.x),
                                        d = 4 * ((i.y + i.height) * n + i.x),
                                        p = h,
                                        g = 4 * c;
                                    !0 === i.interlaced && (g += 4 * n * 7);
                                    for (var m = 8, v = 0, b = o.length; v < b; ++v) {
                                        var y = o[v];
                                        if (0 === f && (f = u, (p += g) >= d && (g = 4 * c + 4 * n * (m - 1), p = h + (u + c) * (m << 1), m >>= 1)), y === l) p += 4;
                                        else {
                                            var w = t[s + 3 * y],
                                                x = t[s + 3 * y + 1],
                                                _ = t[s + 3 * y + 2];
                                            r[p++] = _, r[p++] = x, r[p++] = w, r[p++] = 255
                                        }--f
                                    }
                                }, this.decodeAndBlitFrameRGBA = function(e, r) {
                                    var i = this.frameInfo(e),
                                        a = i.width * i.height,
                                        o = new Uint8Array(a);
                                    Mt(t, i.data_offset, o, a);
                                    var s = i.palette_offset,
                                        l = i.transparent_index;
                                    null === l && (l = 256);
                                    var u = i.width,
                                        c = n - u,
                                        f = u,
                                        h = 4 * (i.y * n + i.x),
                                        d = 4 * ((i.y + i.height) * n + i.x),
                                        p = h,
                                        g = 4 * c;
                                    !0 === i.interlaced && (g += 4 * n * 7);
                                    for (var m = 8, v = 0, b = o.length; v < b; ++v) {
                                        var y = o[v];
                                        if (0 === f && (f = u, (p += g) >= d && (g = 4 * c + 4 * n * (m - 1), p = h + (u + c) * (m << 1), m >>= 1)), y === l) p += 4;
                                        else {
                                            var w = t[s + 3 * y],
                                                x = t[s + 3 * y + 1],
                                                _ = t[s + 3 * y + 2];
                                            r[p++] = w, r[p++] = x, r[p++] = _, r[p++] = 255
                                        }--f
                                    }
                                }
                            }

                            function Mt(t, e, n, r) {
                                for (var i = t[e++], o = 1 << i, s = o + 1, l = s + 1, u = i + 1, c = (1 << u) - 1, f = 0, h = 0, d = 0, p = t[e++], g = new Int32Array(4096), m = null;;) {
                                    for (; f < 16 && 0 !== p;) h |= t[e++] << f, f += 8, 1 === p ? p = t[e++] : --p;
                                    if (f < u) break;
                                    var v = h & c;
                                    if (h >>= u, f -= u, v !== o) {
                                        if (v === s) break;
                                        for (var b = v < l ? v : m, y = 0, w = b; w > o;) w = g[w] >> 8, ++y;
                                        var x = w;
                                        if (d + y + (b !== v ? 1 : 0) > r) return void a.log("Warning, gif stream longer than expected.");
                                        n[d++] = x;
                                        var _ = d += y;
                                        for (b !== v && (n[d++] = x), w = b; y--;) w = g[w], n[--_] = 255 & w, w >>= 8;
                                        null !== m && l < 4096 && (g[l++] = m << 8 | x, l >= c + 1 && u < 12 && (++u, c = c << 1 | 1)), m = v
                                    } else l = s + 1, c = (1 << (u = i + 1)) - 1, m = null
                                }
                                return d !== r && a.log("Warning, gif stream shorter than expected."), n
                            }

                            function Tt(t) {
                                var e, n, r, i, a, o = Math.floor,
                                    s = new Array(64),
                                    l = new Array(64),
                                    u = new Array(64),
                                    c = new Array(64),
                                    f = new Array(65535),
                                    h = new Array(65535),
                                    d = new Array(64),
                                    p = new Array(64),
                                    g = [],
                                    m = 0,
                                    v = 7,
                                    b = new Array(64),
                                    y = new Array(64),
                                    w = new Array(64),
                                    x = new Array(256),
                                    _ = new Array(2048),
                                    N = [0, 1, 5, 6, 14, 15, 27, 28, 2, 4, 7, 13, 16, 26, 29, 42, 3, 8, 12, 17, 25, 30, 41, 43, 9, 11, 18, 24, 31, 40, 44, 53, 10, 19, 23, 32, 39, 45, 52, 54, 20, 22, 33, 38, 46, 51, 55, 60, 21, 34, 37, 47, 50, 56, 59, 61, 35, 36, 48, 49, 57, 58, 62, 63],
                                    L = [0, 0, 1, 5, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0],
                                    S = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
                                    A = [0, 0, 2, 1, 3, 3, 2, 4, 3, 5, 5, 4, 4, 0, 0, 1, 125],
                                    k = [1, 2, 3, 0, 4, 17, 5, 18, 33, 49, 65, 6, 19, 81, 97, 7, 34, 113, 20, 50, 129, 145, 161, 8, 35, 66, 177, 193, 21, 82, 209, 240, 36, 51, 98, 114, 130, 9, 10, 22, 23, 24, 25, 26, 37, 38, 39, 40, 41, 42, 52, 53, 54, 55, 56, 57, 58, 67, 68, 69, 70, 71, 72, 73, 74, 83, 84, 85, 86, 87, 88, 89, 90, 99, 100, 101, 102, 103, 104, 105, 106, 115, 116, 117, 118, 119, 120, 121, 122, 131, 132, 133, 134, 135, 136, 137, 138, 146, 147, 148, 149, 150, 151, 152, 153, 154, 162, 163, 164, 165, 166, 167, 168, 169, 170, 178, 179, 180, 181, 182, 183, 184, 185, 186, 194, 195, 196, 197, 198, 199, 200, 201, 202, 210, 211, 212, 213, 214, 215, 216, 217, 218, 225, 226, 227, 228, 229, 230, 231, 232, 233, 234, 241, 242, 243, 244, 245, 246, 247, 248, 249, 250],
                                    P = [0, 0, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0],
                                    C = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
                                    E = [0, 0, 2, 1, 2, 4, 4, 3, 4, 7, 5, 4, 4, 0, 1, 2, 119],
                                    F = [0, 1, 2, 3, 17, 4, 5, 33, 49, 6, 18, 65, 81, 7, 97, 113, 19, 34, 50, 129, 8, 20, 66, 145, 161, 177, 193, 9, 35, 51, 82, 240, 21, 98, 114, 209, 10, 22, 36, 52, 225, 37, 241, 23, 24, 25, 26, 38, 39, 40, 41, 42, 53, 54, 55, 56, 57, 58, 67, 68, 69, 70, 71, 72, 73, 74, 83, 84, 85, 86, 87, 88, 89, 90, 99, 100, 101, 102, 103, 104, 105, 106, 115, 116, 117, 118, 119, 120, 121, 122, 130, 131, 132, 133, 134, 135, 136, 137, 138, 146, 147, 148, 149, 150, 151, 152, 153, 154, 162, 163, 164, 165, 166, 167, 168, 169, 170, 178, 179, 180, 181, 182, 183, 184, 185, 186, 194, 195, 196, 197, 198, 199, 200, 201, 202, 210, 211, 212, 213, 214, 215, 216, 217, 218, 226, 227, 228, 229, 230, 231, 232, 233, 234, 242, 243, 244, 245, 246, 247, 248, 249, 250];

                                function I(t, e) {
                                    for (var n = 0, r = 0, i = new Array, a = 1; a <= 16; a++) {
                                        for (var o = 1; o <= t[a]; o++) i[e[r]] = [], i[e[r]][0] = n, i[e[r]][1] = a, r++, n++;
                                        n *= 2
                                    }
                                    return i
                                }

                                function O(t) {
                                    for (var e = t[0], n = t[1] - 1; n >= 0;) e & 1 << n && (m |= 1 << v), n--, --v < 0 && (255 == m ? (j(255), j(0)) : j(m), v = 7, m = 0)
                                }

                                function j(t) {
                                    g.push(t)
                                }

                                function M(t) {
                                    j(t >> 8 & 255), j(255 & t)
                                }

                                function T(t, e, n, r, i) {
                                    for (var a, o = i[0], s = i[240], l = function(t, e) {
                                            var n, r, i, a, o, s, l, u, c, f, h = 0;
                                            for (c = 0; c < 8; ++c) {
                                                n = t[h], r = t[h + 1], i = t[h + 2], a = t[h + 3], o = t[h + 4], s = t[h + 5], l = t[h + 6];
                                                var p = n + (u = t[h + 7]),
                                                    g = n - u,
                                                    m = r + l,
                                                    v = r - l,
                                                    b = i + s,
                                                    y = i - s,
                                                    w = a + o,
                                                    x = a - o,
                                                    _ = p + w,
                                                    N = p - w,
                                                    L = m + b,
                                                    S = m - b;
                                                t[h] = _ + L, t[h + 4] = _ - L;
                                                var A = .707106781 * (S + N);
                                                t[h + 2] = N + A, t[h + 6] = N - A;
                                                var k = .382683433 * ((_ = x + y) - (S = v + g)),
                                                    P = .5411961 * _ + k,
                                                    C = 1.306562965 * S + k,
                                                    E = .707106781 * (L = y + v),
                                                    F = g + E,
                                                    I = g - E;
                                                t[h + 5] = I + P, t[h + 3] = I - P, t[h + 1] = F + C, t[h + 7] = F - C, h += 8
                                            }
                                            for (h = 0, c = 0; c < 8; ++c) {
                                                n = t[h], r = t[h + 8], i = t[h + 16], a = t[h + 24], o = t[h + 32], s = t[h + 40], l = t[h + 48];
                                                var O = n + (u = t[h + 56]),
                                                    j = n - u,
                                                    M = r + l,
                                                    T = r - l,
                                                    B = i + s,
                                                    R = i - s,
                                                    D = a + o,
                                                    q = a - o,
                                                    z = O + D,
                                                    U = O - D,
                                                    H = M + B,
                                                    V = M - B;
                                                t[h] = z + H, t[h + 32] = z - H;
                                                var W = .707106781 * (V + U);
                                                t[h + 16] = U + W, t[h + 48] = U - W;
                                                var G = .382683433 * ((z = q + R) - (V = T + j)),
                                                    Y = .5411961 * z + G,
                                                    X = 1.306562965 * V + G,
                                                    K = .707106781 * (H = R + T),
                                                    $ = j + K,
                                                    J = j - K;
                                                t[h + 40] = J + Y, t[h + 24] = J - Y, t[h + 8] = $ + X, t[h + 56] = $ - X, h++
                                            }
                                            for (c = 0; c < 64; ++c) f = t[c] * e[c], d[c] = f > 0 ? f + .5 | 0 : f - .5 | 0;
                                            return d
                                        }(t, e), u = 0; u < 64; ++u) p[N[u]] = l[u];
                                    var c = p[0] - n;
                                    n = p[0], 0 == c ? O(r[0]) : (O(r[h[a = 32767 + c]]), O(f[a]));
                                    for (var g = 63; g > 0 && 0 == p[g];) g--;
                                    if (0 == g) return O(o), n;
                                    for (var m, v = 1; v <= g;) {
                                        for (var b = v; 0 == p[v] && v <= g;) ++v;
                                        var y = v - b;
                                        if (y >= 16) {
                                            m = y >> 4;
                                            for (var w = 1; w <= m; ++w) O(s);
                                            y &= 15
                                        }
                                        a = 32767 + p[v], O(i[(y << 4) + h[a]]), O(f[a]), v++
                                    }
                                    return 63 != g && O(o), n
                                }

                                function B(t) {
                                    t = Math.min(Math.max(t, 1), 100), a != t && (function(t) {
                                        for (var e = [16, 11, 10, 16, 24, 40, 51, 61, 12, 12, 14, 19, 26, 58, 60, 55, 14, 13, 16, 24, 40, 57, 69, 56, 14, 17, 22, 29, 51, 87, 80, 62, 18, 22, 37, 56, 68, 109, 103, 77, 24, 35, 55, 64, 81, 104, 113, 92, 49, 64, 78, 87, 103, 121, 120, 101, 72, 92, 95, 98, 112, 100, 103, 99], n = 0; n < 64; n++) {
                                            var r = o((e[n] * t + 50) / 100);
                                            r = Math.min(Math.max(r, 1), 255), s[N[n]] = r
                                        }
                                        for (var i = [17, 18, 24, 47, 99, 99, 99, 99, 18, 21, 26, 66, 99, 99, 99, 99, 24, 26, 56, 99, 99, 99, 99, 99, 47, 66, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99], a = 0; a < 64; a++) {
                                            var f = o((i[a] * t + 50) / 100);
                                            f = Math.min(Math.max(f, 1), 255), l[N[a]] = f
                                        }
                                        for (var h = [1, 1.387039845, 1.306562965, 1.175875602, 1, .785694958, .5411961, .275899379], d = 0, p = 0; p < 8; p++)
                                            for (var g = 0; g < 8; g++) u[d] = 1 / (s[N[d]] * h[p] * h[g] * 8), c[d] = 1 / (l[N[d]] * h[p] * h[g] * 8), d++
                                    }(t < 50 ? Math.floor(5e3 / t) : Math.floor(200 - 2 * t)), a = t)
                                }
                                this.encode = function(t, a) {
                                        a && B(a), g = new Array, m = 0, v = 7, M(65496), M(65504), M(16), j(74), j(70), j(73), j(70), j(0), j(1), j(1), j(0), M(1), M(1), j(0), j(0),
                                            function() {
                                                M(65499), M(132), j(0);
                                                for (var t = 0; t < 64; t++) j(s[t]);
                                                j(1);
                                                for (var e = 0; e < 64; e++) j(l[e])
                                            }(),
                                            function(t, e) {
                                                M(65472), M(17), j(8), M(e), M(t), j(3), j(1), j(17), j(0), j(2), j(17), j(1), j(3), j(17), j(1)
                                            }(t.width, t.height),
                                            function() {
                                                M(65476), M(418), j(0);
                                                for (var t = 0; t < 16; t++) j(L[t + 1]);
                                                for (var e = 0; e <= 11; e++) j(S[e]);
                                                j(16);
                                                for (var n = 0; n < 16; n++) j(A[n + 1]);
                                                for (var r = 0; r <= 161; r++) j(k[r]);
                                                j(1);
                                                for (var i = 0; i < 16; i++) j(P[i + 1]);
                                                for (var a = 0; a <= 11; a++) j(C[a]);
                                                j(17);
                                                for (var o = 0; o < 16; o++) j(E[o + 1]);
                                                for (var s = 0; s <= 161; s++) j(F[s])
                                            }(), M(65498), M(12), j(3), j(1), j(0), j(2), j(17), j(3), j(17), j(0), j(63), j(0);
                                        var o = 0,
                                            f = 0,
                                            h = 0;
                                        m = 0, v = 7, this.encode.displayName = "_encode_";
                                        for (var d, p, x, N, I, R, D, q, z, U = t.data, H = t.width, V = t.height, W = 4 * H, G = 0; G < V;) {
                                            for (d = 0; d < W;) {
                                                for (I = W * G + d, D = -1, q = 0, z = 0; z < 64; z++) R = I + (q = z >> 3) * W + (D = 4 * (7 & z)), G + q >= V && (R -= W * (G + 1 + q - V)), d + D >= W && (R -= d + D - W + 4), p = U[R++], x = U[R++], N = U[R++], b[z] = (_[p] + _[x + 256 >> 0] + _[N + 512 >> 0] >> 16) - 128, y[z] = (_[p + 768 >> 0] + _[x + 1024 >> 0] + _[N + 1280 >> 0] >> 16) - 128, w[z] = (_[p + 1280 >> 0] + _[x + 1536 >> 0] + _[N + 1792 >> 0] >> 16) - 128;
                                                o = T(b, u, o, e, r), f = T(y, c, f, n, i), h = T(w, c, h, n, i), d += 32
                                            }
                                            G += 8
                                        }
                                        if (v >= 0) {
                                            var Y = [];
                                            Y[1] = v + 1, Y[0] = (1 << v + 1) - 1, O(Y)
                                        }
                                        return M(65497), new Uint8Array(g)
                                    }, t = t || 50,
                                    function() {
                                        for (var t = String.fromCharCode, e = 0; e < 256; e++) x[e] = t(e)
                                    }(), e = I(L, S), n = I(P, C), r = I(A, k), i = I(E, F),
                                    function() {
                                        for (var t = 1, e = 2, n = 1; n <= 15; n++) {
                                            for (var r = t; r < e; r++) h[32767 + r] = n, f[32767 + r] = [], f[32767 + r][1] = n, f[32767 + r][0] = r;
                                            for (var i = -(e - 1); i <= -t; i++) h[32767 + i] = n, f[32767 + i] = [], f[32767 + i][1] = n, f[32767 + i][0] = e - 1 + i;
                                            t <<= 1, e <<= 1
                                        }
                                    }(),
                                    function() {
                                        for (var t = 0; t < 256; t++) _[t] = 19595 * t, _[t + 256 >> 0] = 38470 * t, _[t + 512 >> 0] = 7471 * t + 32768, _[t + 768 >> 0] = -11059 * t, _[t + 1024 >> 0] = -21709 * t, _[t + 1280 >> 0] = 32768 * t + 8421375, _[t + 1536 >> 0] = -27439 * t, _[t + 1792 >> 0] = -5329 * t
                                    }(), B(t)
                            }

                            function Bt(t, e) {
                                if (this.pos = 0, this.buffer = t, this.datav = new DataView(t.buffer), this.is_with_alpha = !!e, this.bottom_up = !0, this.flag = String.fromCharCode(this.buffer[0]) + String.fromCharCode(this.buffer[1]), this.pos += 2, -1 === ["BM", "BA", "CI", "CP", "IC", "PT"].indexOf(this.flag)) throw new Error("Invalid BMP File");
                                this.parseHeader(), this.parseBGR()
                            }

                            function Rt(t) {
                                function e(t) {
                                    if (!t) throw Error("assert :P")
                                }

                                function n(t, e, n) {
                                    for (var r = 0; 4 > r; r++)
                                        if (t[e + r] != n.charCodeAt(r)) return !0;
                                    return !1
                                }

                                function r(t, e, n, r, i) {
                                    for (var a = 0; a < i; a++) t[e + a] = n[r + a]
                                }

                                function i(t, e, n, r) {
                                    for (var i = 0; i < r; i++) t[e + i] = n
                                }

                                function a(t) {
                                    return new Int32Array(t)
                                }

                                function o(t, e) {
                                    for (var n = [], r = 0; r < t; r++) n.push(new e);
                                    return n
                                }

                                function s(t, e) {
                                    var n = [];
                                    return function t(n, r, i) {
                                        for (var a = i[r], o = 0; o < a && (n.push(i.length > r + 1 ? [] : new e), !(i.length < r + 1)); o++) t(n[o], r + 1, i)
                                    }(n, 0, t), n
                                }

                                function l(t, e) {
                                    for (var n = "", r = 0; r < 4; r++) n += String.fromCharCode(t[e++]);
                                    return n
                                }

                                function u(t, e) {
                                    return (t[e + 0] << 0 | t[e + 1] << 8 | t[e + 2] << 16) >>> 0
                                }

                                function c(t, e) {
                                    return (t[e + 0] << 0 | t[e + 1] << 8 | t[e + 2] << 16 | t[e + 3] << 24) >>> 0
                                }
                                new(Rt = function() {
                                        var t = this;

                                        function l(t, e) {
                                            for (var n = 1 << e - 1 >>> 0; t & n;) n >>>= 1;
                                            return n ? (t & n - 1) + n : t
                                        }

                                        function u(t, n, r, i, a) {
                                            e(!(i % r));
                                            do {
                                                t[n + (i -= r)] = a
                                            } while (0 < i)
                                        }

                                        function c(t, n, r, i, o) {
                                            if (e(2328 >= o), 512 >= o) var s = a(512);
                                            else if (null == (s = a(o))) return 0;
                                            return function(t, n, r, i, o, s) {
                                                var c, h, d = n,
                                                    p = 1 << r,
                                                    g = a(16),
                                                    m = a(16);
                                                for (e(0 != o), e(null != i), e(null != t), e(0 < r), h = 0; h < o; ++h) {
                                                    if (15 < i[h]) return 0;
                                                    ++g[i[h]]
                                                }
                                                if (g[0] == o) return 0;
                                                for (m[1] = 0, c = 1; 15 > c; ++c) {
                                                    if (g[c] > 1 << c) return 0;
                                                    m[c + 1] = m[c] + g[c]
                                                }
                                                for (h = 0; h < o; ++h) c = i[h], 0 < i[h] && (s[m[c]++] = h);
                                                if (1 == m[15]) return (i = new f).g = 0, i.value = s[0], u(t, d, 1, p, i), p;
                                                var v, b = -1,
                                                    y = p - 1,
                                                    w = 0,
                                                    x = 1,
                                                    _ = 1,
                                                    N = 1 << r;
                                                for (h = 0, c = 1, o = 2; c <= r; ++c, o <<= 1) {
                                                    if (x += _ <<= 1, 0 > (_ -= g[c])) return 0;
                                                    for (; 0 < g[c]; --g[c])(i = new f).g = c, i.value = s[h++], u(t, d + w, o, N, i), w = l(w, c)
                                                }
                                                for (c = r + 1, o = 2; 15 >= c; ++c, o <<= 1) {
                                                    if (x += _ <<= 1, 0 > (_ -= g[c])) return 0;
                                                    for (; 0 < g[c]; --g[c]) {
                                                        if (i = new f, (w & y) != b) {
                                                            for (d += N, v = 1 << (b = c) - r; 15 > b && !(0 >= (v -= g[b]));) ++b, v <<= 1;
                                                            p += N = 1 << (v = b - r), t[n + (b = w & y)].g = v + r, t[n + b].value = d - n - b
                                                        }
                                                        i.g = c - r, i.value = s[h++], u(t, d + (w >> r), o, N, i), w = l(w, c)
                                                    }
                                                }
                                                return x != 2 * m[15] - 1 ? 0 : p
                                            }(t, n, r, i, o, s)
                                        }

                                        function f() {
                                            this.value = this.g = 0
                                        }

                                        function h() {
                                            this.value = this.g = 0
                                        }

                                        function d() {
                                            this.G = o(5, f), this.H = a(5), this.jc = this.Qb = this.qb = this.nd = 0, this.pd = o(Dn, h)
                                        }

                                        function p(t, n, r, i) {
                                            e(null != t), e(null != n), e(2147483648 > i), t.Ca = 254, t.I = 0, t.b = -8, t.Ka = 0, t.oa = n, t.pa = r, t.Jd = n, t.Yc = r + i, t.Zc = 4 <= i ? r + i - 4 + 1 : r, A(t)
                                        }

                                        function g(t, e) {
                                            for (var n = 0; 0 < e--;) n |= P(t, 128) << e;
                                            return n
                                        }

                                        function m(t, e) {
                                            var n = g(t, e);
                                            return k(t) ? -n : n
                                        }

                                        function v(t, n, r, i) {
                                            var a, o = 0;
                                            for (e(null != t), e(null != n), e(4294967288 > i), t.Sb = i, t.Ra = 0, t.u = 0, t.h = 0, 4 < i && (i = 4), a = 0; a < i; ++a) o += n[r + a] << 8 * a;
                                            t.Ra = o, t.bb = i, t.oa = n, t.pa = r
                                        }

                                        function b(t) {
                                            for (; 8 <= t.u && t.bb < t.Sb;) t.Ra >>>= 8, t.Ra += t.oa[t.pa + t.bb] << Un - 8 >>> 0, ++t.bb, t.u -= 8;
                                            N(t) && (t.h = 1, t.u = 0)
                                        }

                                        function y(t, n) {
                                            if (e(0 <= n), !t.h && n <= zn) {
                                                var r = _(t) & qn[n];
                                                return t.u += n, b(t), r
                                            }
                                            return t.h = 1, t.u = 0
                                        }

                                        function w() {
                                            this.b = this.Ca = this.I = 0, this.oa = [], this.pa = 0, this.Jd = [], this.Yc = 0, this.Zc = [], this.Ka = 0
                                        }

                                        function x() {
                                            this.Ra = 0, this.oa = [], this.h = this.u = this.bb = this.Sb = this.pa = 0
                                        }

                                        function _(t) {
                                            return t.Ra >>> (t.u & Un - 1) >>> 0
                                        }

                                        function N(t) {
                                            return e(t.bb <= t.Sb), t.h || t.bb == t.Sb && t.u > Un
                                        }

                                        function L(t, e) {
                                            t.u = e, t.h = N(t)
                                        }

                                        function S(t) {
                                            t.u >= Hn && (e(t.u >= Hn), b(t))
                                        }

                                        function A(t) {
                                            e(null != t && null != t.oa), t.pa < t.Zc ? (t.I = (t.oa[t.pa++] | t.I << 8) >>> 0, t.b += 8) : (e(null != t && null != t.oa), t.pa < t.Yc ? (t.b += 8, t.I = t.oa[t.pa++] | t.I << 8) : t.Ka ? t.b = 0 : (t.I <<= 8, t.b += 8, t.Ka = 1))
                                        }

                                        function k(t) {
                                            return g(t, 1)
                                        }

                                        function P(t, e) {
                                            var n = t.Ca;
                                            0 > t.b && A(t);
                                            var r = t.b,
                                                i = n * e >>> 8,
                                                a = (t.I >>> r > i) + 0;
                                            for (a ? (n -= i, t.I -= i + 1 << r >>> 0) : n = i + 1, r = n, i = 0; 256 <= r;) i += 8, r >>= 8;
                                            return r = 7 ^ i + Vn[r], t.b -= r, t.Ca = (n << r) - 1, a
                                        }

                                        function C(t, e, n) {
                                            t[e + 0] = n >> 24 & 255, t[e + 1] = n >> 16 & 255, t[e + 2] = n >> 8 & 255, t[e + 3] = n >> 0 & 255
                                        }

                                        function E(t, e) {
                                            return t[e + 0] << 0 | t[e + 1] << 8
                                        }

                                        function F(t, e) {
                                            return E(t, e) | t[e + 2] << 16
                                        }

                                        function I(t, e) {
                                            return E(t, e) | E(t, e + 2) << 16
                                        }

                                        function O(t, n) {
                                            var r = 1 << n;
                                            return e(null != t), e(0 < n), t.X = a(r), null == t.X ? 0 : (t.Mb = 32 - n, t.Xa = n, 1)
                                        }

                                        function j(t, n) {
                                            e(null != t), e(null != n), e(t.Xa == n.Xa), r(n.X, 0, t.X, 0, 1 << n.Xa)
                                        }

                                        function M() {
                                            this.X = [], this.Xa = this.Mb = 0
                                        }

                                        function T(t, n, r, i) {
                                            e(null != r), e(null != i);
                                            var a = r[0],
                                                o = i[0];
                                            return 0 == a && (a = (t * o + n / 2) / n), 0 == o && (o = (n * a + t / 2) / t), 0 >= a || 0 >= o ? 0 : (r[0] = a, i[0] = o, 1)
                                        }

                                        function B(t, e) {
                                            return t + (1 << e) - 1 >>> e
                                        }

                                        function R(t, e) {
                                            return ((4278255360 & t) + (4278255360 & e) >>> 0 & 4278255360) + ((16711935 & t) + (16711935 & e) >>> 0 & 16711935) >>> 0
                                        }

                                        function D(e, n) {
                                            t[n] = function(n, r, i, a, o, s, l) {
                                                var u;
                                                for (u = 0; u < o; ++u) {
                                                    var c = t[e](s[l + u - 1], i, a + u);
                                                    s[l + u] = R(n[r + u], c)
                                                }
                                            }
                                        }

                                        function q() {
                                            this.ud = this.hd = this.jd = 0
                                        }

                                        function z(t, e) {
                                            return ((4278124286 & (t ^ e)) >>> 1) + (t & e) >>> 0
                                        }

                                        function U(t) {
                                            return 0 <= t && 256 > t ? t : 0 > t ? 0 : 255 < t ? 255 : void 0
                                        }

                                        function H(t, e) {
                                            return U(t + (t - e + .5 >> 1))
                                        }

                                        function V(t, e, n) {
                                            return Math.abs(e - n) - Math.abs(t - n)
                                        }

                                        function W(t, e, n, r, i, a, o) {
                                            for (r = a[o - 1], n = 0; n < i; ++n) a[o + n] = r = R(t[e + n], r)
                                        }

                                        function G(t, e, n, r, i) {
                                            var a;
                                            for (a = 0; a < n; ++a) {
                                                var o = t[e + a],
                                                    s = o >> 8 & 255,
                                                    l = 16711935 & (l = (l = 16711935 & o) + ((s << 16) + s));
                                                r[i + a] = (4278255360 & o) + l >>> 0
                                            }
                                        }

                                        function Y(t, e) {
                                            e.jd = t >> 0 & 255, e.hd = t >> 8 & 255, e.ud = t >> 16 & 255
                                        }

                                        function X(t, e, n, r, i, a) {
                                            var o;
                                            for (o = 0; o < r; ++o) {
                                                var s = e[n + o],
                                                    l = s >>> 8,
                                                    u = s,
                                                    c = 255 & (c = (c = s >>> 16) + ((t.jd << 24 >> 24) * (l << 24 >> 24) >>> 5));
                                                u = 255 & (u = (u += (t.hd << 24 >> 24) * (l << 24 >> 24) >>> 5) + ((t.ud << 24 >> 24) * (c << 24 >> 24) >>> 5)), i[a + o] = (4278255360 & s) + (c << 16) + u
                                            }
                                        }

                                        function K(e, n, r, i, a) {
                                            t[n] = function(t, e, n, r, o, s, l, u, c) {
                                                for (r = l; r < u; ++r)
                                                    for (l = 0; l < c; ++l) o[s++] = a(n[i(t[e++])])
                                            }, t[e] = function(e, n, o, s, l, u, c) {
                                                var f = 8 >> e.b,
                                                    h = e.Ea,
                                                    d = e.K[0],
                                                    p = e.w;
                                                if (8 > f)
                                                    for (e = (1 << e.b) - 1, p = (1 << f) - 1; n < o; ++n) {
                                                        var g, m = 0;
                                                        for (g = 0; g < h; ++g) g & e || (m = i(s[l++])), u[c++] = a(d[m & p]), m >>= f
                                                    } else t["VP8LMapColor" + r](s, l, d, p, u, c, n, o, h)
                                            }
                                        }

                                        function $(t, e, n, r, i) {
                                            for (n = e + n; e < n;) {
                                                var a = t[e++];
                                                r[i++] = a >> 16 & 255, r[i++] = a >> 8 & 255, r[i++] = a >> 0 & 255
                                            }
                                        }

                                        function J(t, e, n, r, i) {
                                            for (n = e + n; e < n;) {
                                                var a = t[e++];
                                                r[i++] = a >> 16 & 255, r[i++] = a >> 8 & 255, r[i++] = a >> 0 & 255, r[i++] = a >> 24 & 255
                                            }
                                        }

                                        function Q(t, e, n, r, i) {
                                            for (n = e + n; e < n;) {
                                                var a = (o = t[e++]) >> 16 & 240 | o >> 12 & 15,
                                                    o = o >> 0 & 240 | o >> 28 & 15;
                                                r[i++] = a, r[i++] = o
                                            }
                                        }

                                        function Z(t, e, n, r, i) {
                                            for (n = e + n; e < n;) {
                                                var a = (o = t[e++]) >> 16 & 248 | o >> 13 & 7,
                                                    o = o >> 5 & 224 | o >> 3 & 31;
                                                r[i++] = a, r[i++] = o
                                            }
                                        }

                                        function tt(t, e, n, r, i) {
                                            for (n = e + n; e < n;) {
                                                var a = t[e++];
                                                r[i++] = a >> 0 & 255, r[i++] = a >> 8 & 255, r[i++] = a >> 16 & 255
                                            }
                                        }

                                        function et(t, e, n, i, a, o) {
                                            if (0 == o)
                                                for (n = e + n; e < n;) C(i, ((o = t[e++])[0] >> 24 | o[1] >> 8 & 65280 | o[2] << 8 & 16711680 | o[3] << 24) >>> 0), a += 32;
                                            else r(i, a, t, e, n)
                                        }

                                        function nt(e, n) {
                                            t[n][0] = t[e + "0"], t[n][1] = t[e + "1"], t[n][2] = t[e + "2"], t[n][3] = t[e + "3"], t[n][4] = t[e + "4"], t[n][5] = t[e + "5"], t[n][6] = t[e + "6"], t[n][7] = t[e + "7"], t[n][8] = t[e + "8"], t[n][9] = t[e + "9"], t[n][10] = t[e + "10"], t[n][11] = t[e + "11"], t[n][12] = t[e + "12"], t[n][13] = t[e + "13"], t[n][14] = t[e + "0"], t[n][15] = t[e + "0"]
                                        }

                                        function rt(t) {
                                            return t == Hr || t == Vr || t == Wr || t == Gr
                                        }

                                        function it() {
                                            this.eb = [], this.size = this.A = this.fb = 0
                                        }

                                        function at() {
                                            this.y = [], this.f = [], this.ea = [], this.F = [], this.Tc = this.Ed = this.Cd = this.Fd = this.lb = this.Db = this.Ab = this.fa = this.J = this.W = this.N = this.O = 0
                                        }

                                        function ot() {
                                            this.Rd = this.height = this.width = this.S = 0, this.f = {}, this.f.RGBA = new it, this.f.kb = new at, this.sd = null
                                        }

                                        function st() {
                                            this.width = [0], this.height = [0], this.Pd = [0], this.Qd = [0], this.format = [0]
                                        }

                                        function lt() {
                                            this.Id = this.fd = this.Md = this.hb = this.ib = this.da = this.bd = this.cd = this.j = this.v = this.Da = this.Sd = this.ob = 0
                                        }

                                        function ut(t) {
                                            return alert("todo:WebPSamplerProcessPlane"), t.T
                                        }

                                        function ct(t, e) {
                                            var n = t.T,
                                                i = e.ba.f.RGBA,
                                                a = i.eb,
                                                o = i.fb + t.ka * i.A,
                                                s = vi[e.ba.S],
                                                l = t.y,
                                                u = t.O,
                                                c = t.f,
                                                f = t.N,
                                                h = t.ea,
                                                d = t.W,
                                                p = e.cc,
                                                g = e.dc,
                                                m = e.Mc,
                                                v = e.Nc,
                                                b = t.ka,
                                                y = t.ka + t.T,
                                                w = t.U,
                                                x = w + 1 >> 1;
                                            for (0 == b ? s(l, u, null, null, c, f, h, d, c, f, h, d, a, o, null, null, w) : (s(e.ec, e.fc, l, u, p, g, m, v, c, f, h, d, a, o - i.A, a, o, w), ++n); b + 2 < y; b += 2) p = c, g = f, m = h, v = d, f += t.Rc, d += t.Rc, o += 2 * i.A, s(l, (u += 2 * t.fa) - t.fa, l, u, p, g, m, v, c, f, h, d, a, o - i.A, a, o, w);
                                            return u += t.fa, t.j + y < t.o ? (r(e.ec, e.fc, l, u, w), r(e.cc, e.dc, c, f, x), r(e.Mc, e.Nc, h, d, x), n--) : 1 & y || s(l, u, null, null, c, f, h, d, c, f, h, d, a, o + i.A, null, null, w), n
                                        }

                                        function ft(t, n, r) {
                                            var i = t.F,
                                                a = [t.J];
                                            if (null != i) {
                                                var o = t.U,
                                                    s = n.ba.S,
                                                    l = s == qr || s == Wr;
                                                n = n.ba.f.RGBA;
                                                var u = [0],
                                                    c = t.ka;
                                                u[0] = t.T, t.Kb && (0 == c ? --u[0] : (--c, a[0] -= t.width), t.j + t.ka + t.T == t.o && (u[0] = t.o - t.j - c));
                                                var f = n.eb;
                                                c = n.fb + c * n.A, t = Sr(i, a[0], t.width, o, u, f, c + (l ? 0 : 3), n.A), e(r == u), t && rt(s) && Nr(f, c, l, o, u, n.A)
                                            }
                                            return 0
                                        }

                                        function ht(t) {
                                            var e = t.ma,
                                                n = e.ba.S,
                                                r = 11 > n,
                                                i = n == Br || n == Dr || n == qr || n == zr || 12 == n || rt(n);
                                            if (e.memory = null, e.Ib = null, e.Jb = null, e.Nd = null, !Tn(e.Oa, t, i ? 11 : 12)) return 0;
                                            if (i && rt(n) && yn(), t.da) alert("todo:use_scaling");
                                            else {
                                                if (r) {
                                                    if (e.Ib = ut, t.Kb) {
                                                        if (n = t.U + 1 >> 1, e.memory = a(t.U + 2 * n), null == e.memory) return 0;
                                                        e.ec = e.memory, e.fc = 0, e.cc = e.ec, e.dc = e.fc + t.U, e.Mc = e.cc, e.Nc = e.dc + n, e.Ib = ct, yn()
                                                    }
                                                } else alert("todo:EmitYUV");
                                                i && (e.Jb = ft, r && vn())
                                            }
                                            if (r && !Fi) {
                                                for (t = 0; 256 > t; ++t) Ii[t] = 89858 * (t - 128) + Ai >> Si, Mi[t] = -22014 * (t - 128) + Ai, ji[t] = -45773 * (t - 128), Oi[t] = 113618 * (t - 128) + Ai >> Si;
                                                for (t = ki; t < Pi; ++t) e = 76283 * (t - 16) + Ai >> Si, Ti[t - ki] = Wt(e, 255), Bi[t - ki] = Wt(e + 8 >> 4, 15);
                                                Fi = 1
                                            }
                                            return 1
                                        }

                                        function dt(t) {
                                            var n = t.ma,
                                                r = t.U,
                                                i = t.T;
                                            return e(!(1 & t.ka)), 0 >= r || 0 >= i ? 0 : (r = n.Ib(t, n), null != n.Jb && n.Jb(t, n, r), n.Dc += r, 1)
                                        }

                                        function pt(t) {
                                            t.ma.memory = null
                                        }

                                        function gt(t, e, n, r) {
                                            return 47 != y(t, 8) ? 0 : (e[0] = y(t, 14) + 1, n[0] = y(t, 14) + 1, r[0] = y(t, 1), 0 != y(t, 3) ? 0 : !t.h)
                                        }

                                        function mt(t, e) {
                                            if (4 > t) return t + 1;
                                            var n = t - 2 >> 1;
                                            return (2 + (1 & t) << n) + y(e, n) + 1
                                        }

                                        function vt(t, e) {
                                            return 120 < e ? e - 120 : 1 <= (n = ((n = Qr[e - 1]) >> 4) * t + (8 - (15 & n))) ? n : 1;
                                            var n
                                        }

                                        function bt(t, e, n) {
                                            var r = _(n),
                                                i = t[e += 255 & r].g - 8;
                                            return 0 < i && (L(n, n.u + 8), r = _(n), e += t[e].value, e += r & (1 << i) - 1), L(n, n.u + t[e].g), t[e].value
                                        }

                                        function yt(t, n, r) {
                                            return r.g += t.g, r.value += t.value << n >>> 0, e(8 >= r.g), t.g
                                        }

                                        function wt(t, n, r) {
                                            var i = t.xc;
                                            return e((n = 0 == i ? 0 : t.vc[t.md * (r >> i) + (n >> i)]) < t.Wb), t.Ya[n]
                                        }

                                        function xt(t, n, i, a) {
                                            var o = t.ab,
                                                s = t.c * n,
                                                l = t.C;
                                            n = l + n;
                                            var u = i,
                                                c = a;
                                            for (a = t.Ta, i = t.Ua; 0 < o--;) {
                                                var f = t.gc[o],
                                                    h = l,
                                                    d = n,
                                                    p = u,
                                                    g = c,
                                                    m = (c = a, u = i, f.Ea);
                                                switch (e(h < d), e(d <= f.nc), f.hc) {
                                                    case 2:
                                                        Yn(p, g, (d - h) * m, c, u);
                                                        break;
                                                    case 0:
                                                        var v = h,
                                                            b = d,
                                                            y = c,
                                                            w = u,
                                                            x = (A = f).Ea;
                                                        0 == v && (Wn(p, g, null, null, 1, y, w), W(p, g + 1, 0, 0, x - 1, y, w + 1), g += x, w += x, ++v);
                                                        for (var _ = 1 << A.b, N = _ - 1, L = B(x, A.b), S = A.K, A = A.w + (v >> A.b) * L; v < b;) {
                                                            var k = S,
                                                                P = A,
                                                                C = 1;
                                                            for (Gn(p, g, y, w - x, 1, y, w); C < x;) {
                                                                var E = (C & ~N) + _;
                                                                E > x && (E = x), (0, Qn[k[P++] >> 8 & 15])(p, g + +C, y, w + C - x, E - C, y, w + C), C = E
                                                            }
                                                            g += x, w += x, ++v & N || (A += L)
                                                        }
                                                        d != f.nc && r(c, u - m, c, u + (d - h - 1) * m, m);
                                                        break;
                                                    case 1:
                                                        for (m = p, b = g, x = (p = f.Ea) - (w = p & ~(y = (g = 1 << f.b) - 1)), v = B(p, f.b), _ = f.K, f = f.w + (h >> f.b) * v; h < d;) {
                                                            for (N = _, L = f, S = new q, A = b + w, k = b + p; b < A;) Y(N[L++], S), Zn(S, m, b, g, c, u), b += g, u += g;
                                                            b < k && (Y(N[L++], S), Zn(S, m, b, x, c, u), b += x, u += x), ++h & y || (f += v)
                                                        }
                                                        break;
                                                    case 3:
                                                        if (p == c && g == u && 0 < f.b) {
                                                            for (b = c, p = m = u + (d - h) * m - (w = (d - h) * B(f.Ea, f.b)), g = c, y = u, v = [], w = (x = w) - 1; 0 <= w; --w) v[w] = g[y + w];
                                                            for (w = x - 1; 0 <= w; --w) b[p + w] = v[w];
                                                            Xn(f, h, d, c, m, c, u)
                                                        } else Xn(f, h, d, p, g, c, u)
                                                }
                                                u = a, c = i
                                            }
                                            c != i && r(a, i, u, c, s)
                                        }

                                        function _t(t, n) {
                                            var r = t.V,
                                                i = t.Ba + t.c * t.C,
                                                a = n - t.C;
                                            if (e(n <= t.l.o), e(16 >= a), 0 < a) {
                                                var o = t.l,
                                                    s = t.Ta,
                                                    l = t.Ua,
                                                    u = o.width;
                                                if (xt(t, a, r, i), a = l = [l], e((r = t.C) < (i = n)), e(o.v < o.va), i > o.o && (i = o.o), r < o.j) {
                                                    var c = o.j - r;
                                                    r = o.j, a[0] += c * u
                                                }
                                                if (r >= i ? r = 0 : (a[0] += 4 * o.v, o.ka = r - o.j, o.U = o.va - o.v, o.T = i - r, r = 1), r) {
                                                    if (l = l[0], 11 > (r = t.ca).S) {
                                                        var f = r.f.RGBA,
                                                            h = (i = r.S, a = o.U, o = o.T, c = f.eb, f.A),
                                                            d = o;
                                                        for (f = f.fb + t.Ma * f.A; 0 < d--;) {
                                                            var p = s,
                                                                g = l,
                                                                m = a,
                                                                v = c,
                                                                b = f;
                                                            switch (i) {
                                                                case Tr:
                                                                    tr(p, g, m, v, b);
                                                                    break;
                                                                case Br:
                                                                    er(p, g, m, v, b);
                                                                    break;
                                                                case Hr:
                                                                    er(p, g, m, v, b), Nr(v, b, 0, m, 1, 0);
                                                                    break;
                                                                case Rr:
                                                                    ir(p, g, m, v, b);
                                                                    break;
                                                                case Dr:
                                                                    et(p, g, m, v, b, 1);
                                                                    break;
                                                                case Vr:
                                                                    et(p, g, m, v, b, 1), Nr(v, b, 0, m, 1, 0);
                                                                    break;
                                                                case qr:
                                                                    et(p, g, m, v, b, 0);
                                                                    break;
                                                                case Wr:
                                                                    et(p, g, m, v, b, 0), Nr(v, b, 1, m, 1, 0);
                                                                    break;
                                                                case zr:
                                                                    nr(p, g, m, v, b);
                                                                    break;
                                                                case Gr:
                                                                    nr(p, g, m, v, b), Lr(v, b, m, 1, 0);
                                                                    break;
                                                                case Ur:
                                                                    rr(p, g, m, v, b);
                                                                    break;
                                                                default:
                                                                    e(0)
                                                            }
                                                            l += u, f += h
                                                        }
                                                        t.Ma += o
                                                    } else alert("todo:EmitRescaledRowsYUVA");
                                                    e(t.Ma <= r.height)
                                                }
                                            }
                                            t.C = n, e(t.C <= t.i)
                                        }

                                        function Nt(t) {
                                            var e;
                                            if (0 < t.ua) return 0;
                                            for (e = 0; e < t.Wb; ++e) {
                                                var n = t.Ya[e].G,
                                                    r = t.Ya[e].H;
                                                if (0 < n[1][r[1] + 0].g || 0 < n[2][r[2] + 0].g || 0 < n[3][r[3] + 0].g) return 0
                                            }
                                            return 1
                                        }

                                        function Lt(t, n, r, i, a, o) {
                                            if (0 != t.Z) {
                                                var s = t.qd,
                                                    l = t.rd;
                                                for (e(null != mi[t.Z]); n < r; ++n) mi[t.Z](s, l, i, a, i, a, o), s = i, l = a, a += o;
                                                t.qd = s, t.rd = l
                                            }
                                        }

                                        function St(t, n) {
                                            var r = t.l.ma,
                                                i = 0 == r.Z || 1 == r.Z ? t.l.j : t.C;
                                            if (i = t.C < i ? i : t.C, e(n <= t.l.o), n > i) {
                                                var a = t.l.width,
                                                    o = r.ca,
                                                    s = r.tb + a * i,
                                                    l = t.V,
                                                    u = t.Ba + t.c * i,
                                                    c = t.gc;
                                                e(1 == t.ab), e(3 == c[0].hc), $n(c[0], i, n, l, u, o, s), Lt(r, i, n, o, s, a)
                                            }
                                            t.C = t.Ma = n
                                        }

                                        function At(t, n, r, i, a, o, s) {
                                            var l = t.$ / i,
                                                u = t.$ % i,
                                                c = t.m,
                                                f = t.s,
                                                h = r + t.$,
                                                d = h;
                                            a = r + i * a;
                                            var p = r + i * o,
                                                g = 280 + f.ua,
                                                m = t.Pb ? l : 16777216,
                                                v = 0 < f.ua ? f.Wa : null,
                                                b = f.wc,
                                                y = h < p ? wt(f, u, l) : null;
                                            e(t.C < o), e(p <= a);
                                            var w = !1;
                                            t: for (;;) {
                                                for (; w || h < p;) {
                                                    var x = 0;
                                                    if (l >= m) {
                                                        var A = h - r;
                                                        e((m = t).Pb), m.wd = m.m, m.xd = A, 0 < m.s.ua && j(m.s.Wa, m.s.vb), m = l + ti
                                                    }
                                                    if (u & b || (y = wt(f, u, l)), e(null != y), y.Qb && (n[h] = y.qb, w = !0), !w)
                                                        if (S(c), y.jc) {
                                                            x = c, A = n;
                                                            var k = h,
                                                                P = y.pd[_(x) & Dn - 1];
                                                            e(y.jc), 256 > P.g ? (L(x, x.u + P.g), A[k] = P.value, x = 0) : (L(x, x.u + P.g - 256), e(256 <= P.value), x = P.value), 0 == x && (w = !0)
                                                        } else x = bt(y.G[0], y.H[0], c);
                                                    if (c.h) break;
                                                    if (w || 256 > x) {
                                                        if (!w)
                                                            if (y.nd) n[h] = (y.qb | x << 8) >>> 0;
                                                            else {
                                                                if (S(c), w = bt(y.G[1], y.H[1], c), S(c), A = bt(y.G[2], y.H[2], c), k = bt(y.G[3], y.H[3], c), c.h) break;
                                                                n[h] = (k << 24 | w << 16 | x << 8 | A) >>> 0
                                                            } if (w = !1, ++h, ++u >= i && (u = 0, ++l, null != s && l <= o && !(l % 16) && s(t, l), null != v))
                                                            for (; d < h;) x = n[d++], v.X[(506832829 * x & 4294967295) >>> v.Mb] = x
                                                    } else if (280 > x) {
                                                        if (x = mt(x - 256, c), A = bt(y.G[4], y.H[4], c), S(c), A = vt(i, A = mt(A, c)), c.h) break;
                                                        if (h - r < A || a - h < x) break t;
                                                        for (k = 0; k < x; ++k) n[h + k] = n[h + k - A];
                                                        for (h += x, u += x; u >= i;) u -= i, ++l, null != s && l <= o && !(l % 16) && s(t, l);
                                                        if (e(h <= a), u & b && (y = wt(f, u, l)), null != v)
                                                            for (; d < h;) x = n[d++], v.X[(506832829 * x & 4294967295) >>> v.Mb] = x
                                                    } else {
                                                        if (!(x < g)) break t;
                                                        for (w = x - 280, e(null != v); d < h;) x = n[d++], v.X[(506832829 * x & 4294967295) >>> v.Mb] = x;
                                                        x = h, e(!(w >>> (A = v).Xa)), n[x] = A.X[w], w = !0
                                                    }
                                                    w || e(c.h == N(c))
                                                }
                                                if (t.Pb && c.h && h < a) e(t.m.h), t.a = 5, t.m = t.wd, t.$ = t.xd, 0 < t.s.ua && j(t.s.vb, t.s.Wa);
                                                else {
                                                    if (c.h) break t;
                                                    null != s && s(t, l > o ? o : l), t.a = 0, t.$ = h - r
                                                }
                                                return 1
                                            }
                                            return t.a = 3, 0
                                        }

                                        function kt(t) {
                                            e(null != t), t.vc = null, t.yc = null, t.Ya = null;
                                            var n = t.Wa;
                                            null != n && (n.X = null), t.vb = null, e(null != t)
                                        }

                                        function Pt() {
                                            var e = new sn;
                                            return null == e ? null : (e.a = 0, e.xb = gi, nt("Predictor", "VP8LPredictors"), nt("Predictor", "VP8LPredictors_C"), nt("PredictorAdd", "VP8LPredictorsAdd"), nt("PredictorAdd", "VP8LPredictorsAdd_C"), Yn = G, Zn = X, tr = $, er = J, nr = Q, rr = Z, ir = tt, t.VP8LMapColor32b = Kn, t.VP8LMapColor8b = Jn, e)
                                        }

                                        function Ct(t, n, r, s, l) {
                                            var u = 1,
                                                h = [t],
                                                p = [n],
                                                g = s.m,
                                                m = s.s,
                                                v = null,
                                                b = 0;
                                            t: for (;;) {
                                                if (r)
                                                    for (; u && y(g, 1);) {
                                                        var w = h,
                                                            x = p,
                                                            N = s,
                                                            A = 1,
                                                            k = N.m,
                                                            P = N.gc[N.ab],
                                                            C = y(k, 2);
                                                        if (N.Oc & 1 << C) u = 0;
                                                        else {
                                                            switch (N.Oc |= 1 << C, P.hc = C, P.Ea = w[0], P.nc = x[0], P.K = [null], ++N.ab, e(4 >= N.ab), C) {
                                                                case 0:
                                                                case 1:
                                                                    P.b = y(k, 3) + 2, A = Ct(B(P.Ea, P.b), B(P.nc, P.b), 0, N, P.K), P.K = P.K[0];
                                                                    break;
                                                                case 3:
                                                                    var E, F = y(k, 8) + 1,
                                                                        I = 16 < F ? 0 : 4 < F ? 1 : 2 < F ? 2 : 3;
                                                                    if (w[0] = B(P.Ea, I), P.b = I, E = A = Ct(F, 1, 0, N, P.K)) {
                                                                        var j, M = F,
                                                                            T = P,
                                                                            D = 1 << (8 >> T.b),
                                                                            q = a(D);
                                                                        if (null == q) E = 0;
                                                                        else {
                                                                            var z = T.K[0],
                                                                                U = T.w;
                                                                            for (q[0] = T.K[0][0], j = 1; j < 1 * M; ++j) q[j] = R(z[U + j], q[j - 1]);
                                                                            for (; j < 4 * D; ++j) q[j] = 0;
                                                                            T.K[0] = null, T.K[0] = q, E = 1
                                                                        }
                                                                    }
                                                                    A = E;
                                                                    break;
                                                                case 2:
                                                                    break;
                                                                default:
                                                                    e(0)
                                                            }
                                                            u = A
                                                        }
                                                    }
                                                if (h = h[0], p = p[0], u && y(g, 1) && !(u = 1 <= (b = y(g, 4)) && 11 >= b)) {
                                                    s.a = 3;
                                                    break t
                                                }
                                                var H;
                                                if (H = u) e: {
                                                    var V, W, G, Y = s,
                                                        X = h,
                                                        K = p,
                                                        $ = b,
                                                        J = r,
                                                        Q = Y.m,
                                                        Z = Y.s,
                                                        tt = [null],
                                                        et = 1,
                                                        nt = 0,
                                                        rt = Zr[$];n: for (;;) {
                                                        if (J && y(Q, 1)) {
                                                            var it = y(Q, 3) + 2,
                                                                at = B(X, it),
                                                                ot = B(K, it),
                                                                st = at * ot;
                                                            if (!Ct(at, ot, 0, Y, tt)) break n;
                                                            for (tt = tt[0], Z.xc = it, V = 0; V < st; ++V) {
                                                                var lt = tt[V] >> 8 & 65535;
                                                                tt[V] = lt, lt >= et && (et = lt + 1)
                                                            }
                                                        }
                                                        if (Q.h) break n;
                                                        for (W = 0; 5 > W; ++W) {
                                                            var ut = Kr[W];
                                                            !W && 0 < $ && (ut += 1 << $), nt < ut && (nt = ut)
                                                        }
                                                        var ct = o(et * rt, f),
                                                            ft = et,
                                                            ht = o(ft, d);
                                                        if (null == ht) var dt = null;
                                                        else e(65536 >= ft), dt = ht;
                                                        var pt = a(nt);
                                                        if (null == dt || null == pt || null == ct) {
                                                            Y.a = 1;
                                                            break n
                                                        }
                                                        var gt = ct;
                                                        for (V = G = 0; V < et; ++V) {
                                                            var mt = dt[V],
                                                                vt = mt.G,
                                                                bt = mt.H,
                                                                wt = 0,
                                                                xt = 1,
                                                                _t = 0;
                                                            for (W = 0; 5 > W; ++W) {
                                                                ut = Kr[W], vt[W] = gt, bt[W] = G, !W && 0 < $ && (ut += 1 << $);
                                                                r: {
                                                                    var Nt, Lt = ut,
                                                                        St = Y,
                                                                        Pt = pt,
                                                                        Et = gt,
                                                                        Ft = G,
                                                                        It = 0,
                                                                        Ot = St.m,
                                                                        jt = y(Ot, 1);
                                                                    if (i(Pt, 0, 0, Lt), jt) {
                                                                        var Mt = y(Ot, 1) + 1,
                                                                            Tt = y(Ot, 1),
                                                                            Bt = y(Ot, 0 == Tt ? 1 : 8);
                                                                        Pt[Bt] = 1, 2 == Mt && (Pt[Bt = y(Ot, 8)] = 1);
                                                                        var Rt = 1
                                                                    } else {
                                                                        var Dt = a(19),
                                                                            qt = y(Ot, 4) + 4;
                                                                        if (19 < qt) {
                                                                            St.a = 3;
                                                                            var zt = 0;
                                                                            break r
                                                                        }
                                                                        for (Nt = 0; Nt < qt; ++Nt) Dt[Jr[Nt]] = y(Ot, 3);
                                                                        var Ut = void 0,
                                                                            Ht = void 0,
                                                                            Vt = St,
                                                                            Wt = Dt,
                                                                            Gt = Lt,
                                                                            Yt = Pt,
                                                                            Xt = 0,
                                                                            Kt = Vt.m,
                                                                            $t = 8,
                                                                            Jt = o(128, f);
                                                                        i: for (; c(Jt, 0, 7, Wt, 19);) {
                                                                            if (y(Kt, 1)) {
                                                                                var Qt = 2 + 2 * y(Kt, 3);
                                                                                if ((Ut = 2 + y(Kt, Qt)) > Gt) break i
                                                                            } else Ut = Gt;
                                                                            for (Ht = 0; Ht < Gt && Ut--;) {
                                                                                S(Kt);
                                                                                var Zt = Jt[0 + (127 & _(Kt))];
                                                                                L(Kt, Kt.u + Zt.g);
                                                                                var te = Zt.value;
                                                                                if (16 > te) Yt[Ht++] = te, 0 != te && ($t = te);
                                                                                else {
                                                                                    var ee = 16 == te,
                                                                                        ne = te - 16,
                                                                                        re = Xr[ne],
                                                                                        ie = y(Kt, Yr[ne]) + re;
                                                                                    if (Ht + ie > Gt) break i;
                                                                                    for (var ae = ee ? $t : 0; 0 < ie--;) Yt[Ht++] = ae
                                                                                }
                                                                            }
                                                                            Xt = 1;
                                                                            break i
                                                                        }
                                                                        Xt || (Vt.a = 3), Rt = Xt
                                                                    }(Rt = Rt && !Ot.h) && (It = c(Et, Ft, 8, Pt, Lt)),
                                                                    Rt && 0 != It ? zt = It : (St.a = 3, zt = 0)
                                                                }
                                                                if (0 == zt) break n;
                                                                if (xt && 1 == $r[W] && (xt = 0 == gt[G].g), wt += gt[G].g, G += zt, 3 >= W) {
                                                                    var oe, se = pt[0];
                                                                    for (oe = 1; oe < ut; ++oe) pt[oe] > se && (se = pt[oe]);
                                                                    _t += se
                                                                }
                                                            }
                                                            if (mt.nd = xt, mt.Qb = 0, xt && (mt.qb = (vt[3][bt[3] + 0].value << 24 | vt[1][bt[1] + 0].value << 16 | vt[2][bt[2] + 0].value) >>> 0, 0 == wt && 256 > vt[0][bt[0] + 0].value && (mt.Qb = 1, mt.qb += vt[0][bt[0] + 0].value << 8)), mt.jc = !mt.Qb && 6 > _t, mt.jc) {
                                                                var le, ue = mt;
                                                                for (le = 0; le < Dn; ++le) {
                                                                    var ce = le,
                                                                        fe = ue.pd[ce],
                                                                        he = ue.G[0][ue.H[0] + ce];
                                                                    256 <= he.value ? (fe.g = he.g + 256, fe.value = he.value) : (fe.g = 0, fe.value = 0, ce >>= yt(he, 8, fe), ce >>= yt(ue.G[1][ue.H[1] + ce], 16, fe), ce >>= yt(ue.G[2][ue.H[2] + ce], 0, fe), yt(ue.G[3][ue.H[3] + ce], 24, fe))
                                                                }
                                                            }
                                                        }
                                                        Z.vc = tt, Z.Wb = et, Z.Ya = dt, Z.yc = ct, H = 1;
                                                        break e
                                                    }
                                                    H = 0
                                                }
                                                if (!(u = H)) {
                                                    s.a = 3;
                                                    break t
                                                }
                                                if (0 < b) {
                                                    if (m.ua = 1 << b, !O(m.Wa, b)) {
                                                        s.a = 1, u = 0;
                                                        break t
                                                    }
                                                } else m.ua = 0;
                                                var de = s,
                                                    pe = h,
                                                    ge = p,
                                                    me = de.s,
                                                    ve = me.xc;
                                                if (de.c = pe, de.i = ge, me.md = B(pe, ve), me.wc = 0 == ve ? -1 : (1 << ve) - 1, r) {
                                                    s.xb = pi;
                                                    break t
                                                }
                                                if (null == (v = a(h * p))) {
                                                    s.a = 1, u = 0;
                                                    break t
                                                }
                                                u = (u = At(s, v, 0, h, p, p, null)) && !g.h;
                                                break t
                                            }
                                            return u ? (null != l ? l[0] = v : (e(null == v), e(r)), s.$ = 0, r || kt(m)) : kt(m), u
                                        }

                                        function Et(t, n) {
                                            var r = t.c * t.i,
                                                i = r + n + 16 * n;
                                            return e(t.c <= n), t.V = a(i), null == t.V ? (t.Ta = null, t.Ua = 0, t.a = 1, 0) : (t.Ta = t.V, t.Ua = t.Ba + r + n, 1)
                                        }

                                        function Ft(t, n) {
                                            var r = t.C,
                                                i = n - r,
                                                a = t.V,
                                                o = t.Ba + t.c * r;
                                            for (e(n <= t.l.o); 0 < i;) {
                                                var s = 16 < i ? 16 : i,
                                                    l = t.l.ma,
                                                    u = t.l.width,
                                                    c = u * s,
                                                    f = l.ca,
                                                    h = l.tb + u * r,
                                                    d = t.Ta,
                                                    p = t.Ua;
                                                xt(t, s, a, o), Ar(d, p, f, h, c), Lt(l, r, r + s, f, h, u), i -= s, a += s * t.c, r += s
                                            }
                                            e(r == n), t.C = t.Ma = n
                                        }

                                        function It() {
                                            this.ub = this.yd = this.td = this.Rb = 0
                                        }

                                        function Ot() {
                                            this.Kd = this.Ld = this.Ud = this.Td = this.i = this.c = 0
                                        }

                                        function jt() {
                                            this.Fb = this.Bb = this.Cb = 0, this.Zb = a(4), this.Lb = a(4)
                                        }

                                        function Mt() {
                                            this.Yb = function() {
                                                var t = [];
                                                return function t(e, n, r) {
                                                    for (var i = r[n], a = 0; a < i && (e.push(r.length > n + 1 ? [] : 0), !(r.length < n + 1)); a++) t(e[a], n + 1, r)
                                                }(t, 0, [3, 11]), t
                                            }()
                                        }

                                        function Tt() {
                                            this.jb = a(3), this.Wc = s([4, 8], Mt), this.Xc = s([4, 17], Mt)
                                        }

                                        function Bt() {
                                            this.Pc = this.wb = this.Tb = this.zd = 0, this.vd = new a(4), this.od = new a(4)
                                        }

                                        function Rt() {
                                            this.ld = this.La = this.dd = this.tc = 0
                                        }

                                        function Dt() {
                                            this.Na = this.la = 0
                                        }

                                        function qt() {
                                            this.Sc = [0, 0], this.Eb = [0, 0], this.Qc = [0, 0], this.ia = this.lc = 0
                                        }

                                        function zt() {
                                            this.ad = a(384), this.Za = 0, this.Ob = a(16), this.$b = this.Ad = this.ia = this.Gc = this.Hc = this.Dd = 0
                                        }

                                        function Ut() {
                                            this.uc = this.M = this.Nb = 0, this.wa = Array(new Rt), this.Y = 0, this.ya = Array(new zt), this.aa = 0, this.l = new Gt
                                        }

                                        function Ht() {
                                            this.y = a(16), this.f = a(8), this.ea = a(8)
                                        }

                                        function Vt() {
                                            this.cb = this.a = 0, this.sc = "", this.m = new w, this.Od = new It, this.Kc = new Ot, this.ed = new Bt, this.Qa = new jt, this.Ic = this.$c = this.Aa = 0, this.D = new Ut, this.Xb = this.Va = this.Hb = this.zb = this.yb = this.Ub = this.za = 0, this.Jc = o(8, w), this.ia = 0, this.pb = o(4, qt), this.Pa = new Tt, this.Bd = this.kc = 0, this.Ac = [], this.Bc = 0, this.zc = [0, 0, 0, 0], this.Gd = Array(new Ht), this.Hd = 0, this.rb = Array(new Dt), this.sb = 0, this.wa = Array(new Rt), this.Y = 0, this.oc = [], this.pc = 0, this.sa = [], this.ta = 0, this.qa = [], this.ra = 0, this.Ha = [], this.B = this.R = this.Ia = 0, this.Ec = [], this.M = this.ja = this.Vb = this.Fc = 0, this.ya = Array(new zt), this.L = this.aa = 0, this.gd = s([4, 2], Rt), this.ga = null, this.Fa = [], this.Cc = this.qc = this.P = 0, this.Gb = [], this.Uc = 0, this.mb = [], this.nb = 0, this.rc = [], this.Ga = this.Vc = 0
                                        }

                                        function Wt(t, e) {
                                            return 0 > t ? 0 : t > e ? e : t
                                        }

                                        function Gt() {
                                            this.T = this.U = this.ka = this.height = this.width = 0, this.y = [], this.f = [], this.ea = [], this.Rc = this.fa = this.W = this.N = this.O = 0, this.ma = "void", this.put = "VP8IoPutHook", this.ac = "VP8IoSetupHook", this.bc = "VP8IoTeardownHook", this.ha = this.Kb = 0, this.data = [], this.hb = this.ib = this.da = this.o = this.j = this.va = this.v = this.Da = this.ob = this.w = 0, this.F = [], this.J = 0
                                        }

                                        function Yt() {
                                            var t = new Vt;
                                            return null != t && (t.a = 0, t.sc = "OK", t.cb = 0, t.Xb = 0, ri || (ri = Jt)), t
                                        }

                                        function Xt(t, e, n) {
                                            return 0 == t.a && (t.a = e, t.sc = n, t.cb = 0), 0
                                        }

                                        function Kt(t, e, n) {
                                            return 3 <= n && 157 == t[e + 0] && 1 == t[e + 1] && 42 == t[e + 2]
                                        }

                                        function $t(t, n) {
                                            if (null == t) return 0;
                                            if (t.a = 0, t.sc = "OK", null == n) return Xt(t, 2, "null VP8Io passed to VP8GetHeaders()");
                                            var r = n.data,
                                                a = n.w,
                                                o = n.ha;
                                            if (4 > o) return Xt(t, 7, "Truncated header.");
                                            var s = r[a + 0] | r[a + 1] << 8 | r[a + 2] << 16,
                                                l = t.Od;
                                            if (l.Rb = !(1 & s), l.td = s >> 1 & 7, l.yd = s >> 4 & 1, l.ub = s >> 5, 3 < l.td) return Xt(t, 3, "Incorrect keyframe parameters.");
                                            if (!l.yd) return Xt(t, 4, "Frame not displayable.");
                                            a += 3, o -= 3;
                                            var u = t.Kc;
                                            if (l.Rb) {
                                                if (7 > o) return Xt(t, 7, "cannot parse picture header");
                                                if (!Kt(r, a, o)) return Xt(t, 3, "Bad code word");
                                                u.c = 16383 & (r[a + 4] << 8 | r[a + 3]), u.Td = r[a + 4] >> 6, u.i = 16383 & (r[a + 6] << 8 | r[a + 5]), u.Ud = r[a + 6] >> 6, a += 7, o -= 7, t.za = u.c + 15 >> 4, t.Ub = u.i + 15 >> 4, n.width = u.c, n.height = u.i, n.Da = 0, n.j = 0, n.v = 0, n.va = n.width, n.o = n.height, n.da = 0, n.ib = n.width, n.hb = n.height, n.U = n.width, n.T = n.height, i((s = t.Pa).jb, 0, 255, s.jb.length), e(null != (s = t.Qa)), s.Cb = 0, s.Bb = 0, s.Fb = 1, i(s.Zb, 0, 0, s.Zb.length), i(s.Lb, 0, 0, s.Lb)
                                            }
                                            if (l.ub > o) return Xt(t, 7, "bad partition length");
                                            p(s = t.m, r, a, l.ub), a += l.ub, o -= l.ub, l.Rb && (u.Ld = k(s), u.Kd = k(s)), u = t.Qa;
                                            var c, f = t.Pa;
                                            if (e(null != s), e(null != u), u.Cb = k(s), u.Cb) {
                                                if (u.Bb = k(s), k(s)) {
                                                    for (u.Fb = k(s), c = 0; 4 > c; ++c) u.Zb[c] = k(s) ? m(s, 7) : 0;
                                                    for (c = 0; 4 > c; ++c) u.Lb[c] = k(s) ? m(s, 6) : 0
                                                }
                                                if (u.Bb)
                                                    for (c = 0; 3 > c; ++c) f.jb[c] = k(s) ? g(s, 8) : 255
                                            } else u.Bb = 0;
                                            if (s.Ka) return Xt(t, 3, "cannot parse segment header");
                                            if ((u = t.ed).zd = k(s), u.Tb = g(s, 6), u.wb = g(s, 3), u.Pc = k(s), u.Pc && k(s)) {
                                                for (f = 0; 4 > f; ++f) k(s) && (u.vd[f] = m(s, 6));
                                                for (f = 0; 4 > f; ++f) k(s) && (u.od[f] = m(s, 6))
                                            }
                                            if (t.L = 0 == u.Tb ? 0 : u.zd ? 1 : 2, s.Ka) return Xt(t, 3, "cannot parse filter header");
                                            var h = o;
                                            if (o = c = a, a = c + h, u = h, t.Xb = (1 << g(t.m, 2)) - 1, h < 3 * (f = t.Xb)) r = 7;
                                            else {
                                                for (c += 3 * f, u -= 3 * f, h = 0; h < f; ++h) {
                                                    var d = r[o + 0] | r[o + 1] << 8 | r[o + 2] << 16;
                                                    d > u && (d = u), p(t.Jc[+h], r, c, d), c += d, u -= d, o += 3
                                                }
                                                p(t.Jc[+f], r, c, u), r = c < a ? 0 : 5
                                            }
                                            if (0 != r) return Xt(t, r, "cannot parse partitions");
                                            for (r = g(c = t.m, 7), o = k(c) ? m(c, 4) : 0, a = k(c) ? m(c, 4) : 0, u = k(c) ? m(c, 4) : 0, f = k(c) ? m(c, 4) : 0, c = k(c) ? m(c, 4) : 0, h = t.Qa, d = 0; 4 > d; ++d) {
                                                if (h.Cb) {
                                                    var v = h.Zb[d];
                                                    h.Fb || (v += r)
                                                } else {
                                                    if (0 < d) {
                                                        t.pb[d] = t.pb[0];
                                                        continue
                                                    }
                                                    v = r
                                                }
                                                var b = t.pb[d];
                                                b.Sc[0] = ei[Wt(v + o, 127)], b.Sc[1] = ni[Wt(v + 0, 127)], b.Eb[0] = 2 * ei[Wt(v + a, 127)], b.Eb[1] = 101581 * ni[Wt(v + u, 127)] >> 16, 8 > b.Eb[1] && (b.Eb[1] = 8), b.Qc[0] = ei[Wt(v + f, 117)], b.Qc[1] = ni[Wt(v + c, 127)], b.lc = v + c
                                            }
                                            if (!l.Rb) return Xt(t, 4, "Not a key frame.");
                                            for (k(s), l = t.Pa, r = 0; 4 > r; ++r) {
                                                for (o = 0; 8 > o; ++o)
                                                    for (a = 0; 3 > a; ++a)
                                                        for (u = 0; 11 > u; ++u) f = P(s, ui[r][o][a][u]) ? g(s, 8) : si[r][o][a][u], l.Wc[r][o].Yb[a][u] = f;
                                                for (o = 0; 17 > o; ++o) l.Xc[r][o] = l.Wc[r][ci[o]]
                                            }
                                            return t.kc = k(s), t.kc && (t.Bd = g(s, 8)), t.cb = 1
                                        }

                                        function Jt(t, e, n, r, i, a, o) {
                                            var s = e[i].Yb[n];
                                            for (n = 0; 16 > i; ++i) {
                                                if (!P(t, s[n + 0])) return i;
                                                for (; !P(t, s[n + 1]);)
                                                    if (s = e[++i].Yb[0], n = 0, 16 == i) return 16;
                                                var l = e[i + 1].Yb;
                                                if (P(t, s[n + 2])) {
                                                    var u = t,
                                                        c = 0;
                                                    if (P(u, (h = s)[(f = n) + 3]))
                                                        if (P(u, h[f + 6])) {
                                                            for (s = 0, f = 2 * (c = P(u, h[f + 8])) + (h = P(u, h[f + 9 + c])), c = 0, h = ii[f]; h[s]; ++s) c += c + P(u, h[s]);
                                                            c += 3 + (8 << f)
                                                        } else P(u, h[f + 7]) ? (c = 7 + 2 * P(u, 165), c += P(u, 145)) : c = 5 + P(u, 159);
                                                    else c = P(u, h[f + 4]) ? 3 + P(u, h[f + 5]) : 2;
                                                    s = l[2]
                                                } else c = 1, s = l[1];
                                                l = o + ai[i], 0 > (u = t).b && A(u);
                                                var f, h = u.b,
                                                    d = (f = u.Ca >> 1) - (u.I >> h) >> 31;
                                                --u.b, u.Ca += d, u.Ca |= 1, u.I -= (f + 1 & d) << h, a[l] = ((c ^ d) - d) * r[(0 < i) + 0]
                                            }
                                            return 16
                                        }

                                        function Qt(t) {
                                            var e = t.rb[t.sb - 1];
                                            e.la = 0, e.Na = 0, i(t.zc, 0, 0, t.zc.length), t.ja = 0
                                        }

                                        function Zt(t, n) {
                                            if (null == t) return 0;
                                            if (null == n) return Xt(t, 2, "NULL VP8Io parameter in VP8Decode().");
                                            if (!t.cb && !$t(t, n)) return 0;
                                            if (e(t.cb), null == n.ac || n.ac(n)) {
                                                n.ob && (t.L = 0);
                                                var s = Di[t.L];
                                                if (2 == t.L ? (t.yb = 0, t.zb = 0) : (t.yb = n.v - s >> 4, t.zb = n.j - s >> 4, 0 > t.yb && (t.yb = 0), 0 > t.zb && (t.zb = 0)), t.Va = n.o + 15 + s >> 4, t.Hb = n.va + 15 + s >> 4, t.Hb > t.za && (t.Hb = t.za), t.Va > t.Ub && (t.Va = t.Ub), 0 < t.L) {
                                                    var l = t.ed;
                                                    for (s = 0; 4 > s; ++s) {
                                                        var u;
                                                        if (t.Qa.Cb) {
                                                            var c = t.Qa.Lb[s];
                                                            t.Qa.Fb || (c += l.Tb)
                                                        } else c = l.Tb;
                                                        for (u = 0; 1 >= u; ++u) {
                                                            var f = t.gd[s][u],
                                                                h = c;
                                                            if (l.Pc && (h += l.vd[0], u && (h += l.od[0])), 0 < (h = 0 > h ? 0 : 63 < h ? 63 : h)) {
                                                                var d = h;
                                                                0 < l.wb && (d = 4 < l.wb ? d >> 2 : d >> 1) > 9 - l.wb && (d = 9 - l.wb), 1 > d && (d = 1), f.dd = d, f.tc = 2 * h + d, f.ld = 40 <= h ? 2 : 15 <= h ? 1 : 0
                                                            } else f.tc = 0;
                                                            f.La = u
                                                        }
                                                    }
                                                }
                                                s = 0
                                            } else Xt(t, 6, "Frame setup failed"), s = t.a;
                                            if (s = 0 == s) {
                                                if (s) {
                                                    t.$c = 0, 0 < t.Aa || (t.Ic = zi);
                                                    t: {
                                                        s = t.Ic,
                                                        l = 4 * (d = t.za);
                                                        var p = 32 * d,
                                                            g = d + 1,
                                                            m = 0 < t.L ? d * (0 < t.Aa ? 2 : 1) : 0,
                                                            v = (2 == t.Aa ? 2 : 1) * d;
                                                        if ((f = l + 832 + (u = 3 * (16 * s + Di[t.L]) / 2 * p) + (c = null != t.Fa && 0 < t.Fa.length ? t.Kc.c * t.Kc.i : 0)) != f) s = 0;
                                                        else {
                                                            if (f > t.Vb) {
                                                                if (t.Vb = 0, t.Ec = a(f), t.Fc = 0, null == t.Ec) {
                                                                    s = Xt(t, 1, "no memory during frame initialization.");
                                                                    break t
                                                                }
                                                                t.Vb = f
                                                            }
                                                            f = t.Ec, h = t.Fc, t.Ac = f, t.Bc = h, h += l, t.Gd = o(p, Ht), t.Hd = 0, t.rb = o(g + 1, Dt), t.sb = 1, t.wa = m ? o(m, Rt) : null, t.Y = 0, t.D.Nb = 0, t.D.wa = t.wa, t.D.Y = t.Y, 0 < t.Aa && (t.D.Y += d), e(!0), t.oc = f, t.pc = h, h += 832, t.ya = o(v, zt), t.aa = 0, t.D.ya = t.ya, t.D.aa = t.aa, 2 == t.Aa && (t.D.aa += d), t.R = 16 * d, t.B = 8 * d, d = (p = Di[t.L]) * t.R, p = p / 2 * t.B, t.sa = f, t.ta = h + d, t.qa = t.sa, t.ra = t.ta + 16 * s * t.R + p, t.Ha = t.qa, t.Ia = t.ra + 8 * s * t.B + p, t.$c = 0, h += u, t.mb = c ? f : null, t.nb = c ? h : null, e(h + c <= t.Fc + t.Vb), Qt(t), i(t.Ac, t.Bc, 0, l), s = 1
                                                        }
                                                    }
                                                    if (s) {
                                                        if (n.ka = 0, n.y = t.sa, n.O = t.ta, n.f = t.qa, n.N = t.ra, n.ea = t.Ha, n.Vd = t.Ia, n.fa = t.R, n.Rc = t.B, n.F = null, n.J = 0, !Fr) {
                                                            for (s = -255; 255 >= s; ++s) kr[255 + s] = 0 > s ? -s : s;
                                                            for (s = -1020; 1020 >= s; ++s) Pr[1020 + s] = -128 > s ? -128 : 127 < s ? 127 : s;
                                                            for (s = -112; 112 >= s; ++s) Cr[112 + s] = -16 > s ? -16 : 15 < s ? 15 : s;
                                                            for (s = -255; 510 >= s; ++s) Er[255 + s] = 0 > s ? 0 : 255 < s ? 255 : s;
                                                            Fr = 1
                                                        }
                                                        ar = ue, or = ae, lr = oe, ur = se, cr = le, sr = ie, fr = Xe, hr = Ke, dr = Qe, pr = Ze, gr = $e, mr = Je, vr = tn, br = en, yr = Ue, wr = He, xr = Ve, _r = We, hi[0] = Le, hi[1] = fe, hi[2] = _e, hi[3] = Ne, hi[4] = Se, hi[5] = ke, hi[6] = Ae, hi[7] = Pe, hi[8] = Ee, hi[9] = Ce, fi[0] = ve, fi[1] = de, fi[2] = pe, fi[3] = ge, fi[4] = be, fi[5] = ye, fi[6] = we, di[0] = je, di[1] = he, di[2] = Fe, di[3] = Ie, di[4] = Te, di[5] = Me, di[6] = Be, s = 1
                                                    } else s = 0
                                                }
                                                s && (s = function(t, n) {
                                                    for (t.M = 0; t.M < t.Va; ++t.M) {
                                                        var o, s = t.Jc[t.M & t.Xb],
                                                            l = t.m,
                                                            u = t;
                                                        for (o = 0; o < u.za; ++o) {
                                                            var c = l,
                                                                f = u,
                                                                h = f.Ac,
                                                                d = f.Bc + 4 * o,
                                                                p = f.zc,
                                                                g = f.ya[f.aa + o];
                                                            if (f.Qa.Bb ? g.$b = P(c, f.Pa.jb[0]) ? 2 + P(c, f.Pa.jb[2]) : P(c, f.Pa.jb[1]) : g.$b = 0, f.kc && (g.Ad = P(c, f.Bd)), g.Za = !P(c, 145) + 0, g.Za) {
                                                                var m = g.Ob,
                                                                    v = 0;
                                                                for (f = 0; 4 > f; ++f) {
                                                                    var b, y = p[0 + f];
                                                                    for (b = 0; 4 > b; ++b) {
                                                                        y = li[h[d + b]][y];
                                                                        for (var w = oi[P(c, y[0])]; 0 < w;) w = oi[2 * w + P(c, y[w])];
                                                                        y = -w, h[d + b] = y
                                                                    }
                                                                    r(m, v, h, d, 4), v += 4, p[0 + f] = y
                                                                }
                                                            } else y = P(c, 156) ? P(c, 128) ? 1 : 3 : P(c, 163) ? 2 : 0, g.Ob[0] = y, i(h, d, y, 4), i(p, 0, y, 4);
                                                            g.Dd = P(c, 142) ? P(c, 114) ? P(c, 183) ? 1 : 3 : 2 : 0
                                                        }
                                                        if (u.m.Ka) return Xt(t, 7, "Premature end-of-partition0 encountered.");
                                                        for (; t.ja < t.za; ++t.ja) {
                                                            if (u = s, c = (l = t).rb[l.sb - 1], h = l.rb[l.sb + l.ja], o = l.ya[l.aa + l.ja], d = l.kc ? o.Ad : 0) c.la = h.la = 0, o.Za || (c.Na = h.Na = 0), o.Hc = 0, o.Gc = 0, o.ia = 0;
                                                            else {
                                                                var x, _;
                                                                if (c = h, h = u, d = l.Pa.Xc, p = l.ya[l.aa + l.ja], g = l.pb[p.$b], f = p.ad, m = 0, v = l.rb[l.sb - 1], y = b = 0, i(f, m, 0, 384), p.Za) var N = 0,
                                                                    L = d[3];
                                                                else {
                                                                    w = a(16);
                                                                    var S = c.Na + v.Na;
                                                                    if (S = ri(h, d[1], S, g.Eb, 0, w, 0), c.Na = v.Na = (0 < S) + 0, 1 < S) ar(w, 0, f, m);
                                                                    else {
                                                                        var A = w[0] + 3 >> 3;
                                                                        for (w = 0; 256 > w; w += 16) f[m + w] = A
                                                                    }
                                                                    N = 1, L = d[0]
                                                                }
                                                                var k = 15 & c.la,
                                                                    C = 15 & v.la;
                                                                for (w = 0; 4 > w; ++w) {
                                                                    var E = 1 & C;
                                                                    for (A = _ = 0; 4 > A; ++A) k = k >> 1 | (E = (S = ri(h, L, S = E + (1 & k), g.Sc, N, f, m)) > N) << 7, _ = _ << 2 | (3 < S ? 3 : 1 < S ? 2 : 0 != f[m + 0]), m += 16;
                                                                    k >>= 4, C = C >> 1 | E << 7, b = (b << 8 | _) >>> 0
                                                                }
                                                                for (L = k, N = C >> 4, x = 0; 4 > x; x += 2) {
                                                                    for (_ = 0, k = c.la >> 4 + x, C = v.la >> 4 + x, w = 0; 2 > w; ++w) {
                                                                        for (E = 1 & C, A = 0; 2 > A; ++A) S = E + (1 & k), k = k >> 1 | (E = 0 < (S = ri(h, d[2], S, g.Qc, 0, f, m))) << 3, _ = _ << 2 | (3 < S ? 3 : 1 < S ? 2 : 0 != f[m + 0]), m += 16;
                                                                        k >>= 2, C = C >> 1 | E << 5
                                                                    }
                                                                    y |= _ << 4 * x, L |= k << 4 << x, N |= (240 & C) << x
                                                                }
                                                                c.la = L, v.la = N, p.Hc = b, p.Gc = y, p.ia = 43690 & y ? 0 : g.ia, d = !(b | y)
                                                            }
                                                            if (0 < l.L && (l.wa[l.Y + l.ja] = l.gd[o.$b][o.Za], l.wa[l.Y + l.ja].La |= !d), u.Ka) return Xt(t, 7, "Premature end-of-file encountered.")
                                                        }
                                                        if (Qt(t), l = n, u = 1, o = (s = t).D, c = 0 < s.L && s.M >= s.zb && s.M <= s.Va, 0 == s.Aa) t: {
                                                            if (o.M = s.M, o.uc = c, jn(s, o), u = 1, o = (_ = s.D).Nb, c = (y = Di[s.L]) * s.R, h = y / 2 * s.B, w = 16 * o * s.R, A = 8 * o * s.B, d = s.sa, p = s.ta - c + w, g = s.qa, f = s.ra - h + A, m = s.Ha, v = s.Ia - h + A, C = 0 == (k = _.M), b = k >= s.Va - 1, 2 == s.Aa && jn(s, _), _.uc)
                                                                for (E = (S = s).D.M, e(S.D.uc), _ = S.yb; _ < S.Hb; ++_) {
                                                                    N = _, L = E;
                                                                    var F = (I = (z = S).D).Nb;
                                                                    x = z.R;
                                                                    var I = I.wa[I.Y + N],
                                                                        O = z.sa,
                                                                        j = z.ta + 16 * F * x + 16 * N,
                                                                        M = I.dd,
                                                                        T = I.tc;
                                                                    if (0 != T)
                                                                        if (e(3 <= T), 1 == z.L) 0 < N && wr(O, j, x, T + 4), I.La && _r(O, j, x, T), 0 < L && yr(O, j, x, T + 4), I.La && xr(O, j, x, T);
                                                                        else {
                                                                            var B = z.B,
                                                                                R = z.qa,
                                                                                D = z.ra + 8 * F * B + 8 * N,
                                                                                q = z.Ha,
                                                                                z = z.Ia + 8 * F * B + 8 * N;
                                                                            F = I.ld, 0 < N && (hr(O, j, x, T + 4, M, F), pr(R, D, q, z, B, T + 4, M, F)), I.La && (mr(O, j, x, T, M, F), br(R, D, q, z, B, T, M, F)), 0 < L && (fr(O, j, x, T + 4, M, F), dr(R, D, q, z, B, T + 4, M, F)), I.La && (gr(O, j, x, T, M, F), vr(R, D, q, z, B, T, M, F))
                                                                        }
                                                                }
                                                            if (s.ia && alert("todo:DitherRow"), null != l.put) {
                                                                if (_ = 16 * k, k = 16 * (k + 1), C ? (l.y = s.sa, l.O = s.ta + w, l.f = s.qa, l.N = s.ra + A, l.ea = s.Ha, l.W = s.Ia + A) : (_ -= y, l.y = d, l.O = p, l.f = g, l.N = f, l.ea = m, l.W = v), b || (k -= y), k > l.o && (k = l.o), l.F = null, l.J = null, null != s.Fa && 0 < s.Fa.length && _ < k && (l.J = hn(s, l, _, k - _), l.F = s.mb, null == l.F && 0 == l.F.length)) {
                                                                    u = Xt(s, 3, "Could not decode alpha data.");
                                                                    break t
                                                                }
                                                                _ < l.j && (y = l.j - _, _ = l.j, e(!(1 & y)), l.O += s.R * y, l.N += s.B * (y >> 1), l.W += s.B * (y >> 1), null != l.F && (l.J += l.width * y)), _ < k && (l.O += l.v, l.N += l.v >> 1, l.W += l.v >> 1, null != l.F && (l.J += l.v), l.ka = _ - l.j, l.U = l.va - l.v, l.T = k - _, u = l.put(l))
                                                            }
                                                            o + 1 != s.Ic || b || (r(s.sa, s.ta - c, d, p + 16 * s.R, c), r(s.qa, s.ra - h, g, f + 8 * s.B, h), r(s.Ha, s.Ia - h, m, v + 8 * s.B, h))
                                                        }
                                                        if (!u) return Xt(t, 6, "Output aborted.")
                                                    }
                                                    return 1
                                                }(t, n)), null != n.bc && n.bc(n), s &= 1
                                            }
                                            return s ? (t.cb = 0, s) : 0
                                        }

                                        function te(t, e, n, r, i) {
                                            i = t[e + n + 32 * r] + (i >> 3), t[e + n + 32 * r] = -256 & i ? 0 > i ? 0 : 255 : i
                                        }

                                        function ee(t, e, n, r, i, a) {
                                            te(t, e, 0, n, r + i), te(t, e, 1, n, r + a), te(t, e, 2, n, r - a), te(t, e, 3, n, r - i)
                                        }

                                        function ne(t) {
                                            return (20091 * t >> 16) + t
                                        }

                                        function re(t, e, n, r) {
                                            var i, o = 0,
                                                s = a(16);
                                            for (i = 0; 4 > i; ++i) {
                                                var l = t[e + 0] + t[e + 8],
                                                    u = t[e + 0] - t[e + 8],
                                                    c = (35468 * t[e + 4] >> 16) - ne(t[e + 12]),
                                                    f = ne(t[e + 4]) + (35468 * t[e + 12] >> 16);
                                                s[o + 0] = l + f, s[o + 1] = u + c, s[o + 2] = u - c, s[o + 3] = l - f, o += 4, e++
                                            }
                                            for (i = o = 0; 4 > i; ++i) l = (t = s[o + 0] + 4) + s[o + 8], u = t - s[o + 8], c = (35468 * s[o + 4] >> 16) - ne(s[o + 12]), te(n, r, 0, 0, l + (f = ne(s[o + 4]) + (35468 * s[o + 12] >> 16))), te(n, r, 1, 0, u + c), te(n, r, 2, 0, u - c), te(n, r, 3, 0, l - f), o++, r += 32
                                        }

                                        function ie(t, e, n, r) {
                                            var i = t[e + 0] + 4,
                                                a = 35468 * t[e + 4] >> 16,
                                                o = ne(t[e + 4]),
                                                s = 35468 * t[e + 1] >> 16;
                                            ee(n, r, 0, i + o, t = ne(t[e + 1]), s), ee(n, r, 1, i + a, t, s), ee(n, r, 2, i - a, t, s), ee(n, r, 3, i - o, t, s)
                                        }

                                        function ae(t, e, n, r, i) {
                                            re(t, e, n, r), i && re(t, e + 16, n, r + 4)
                                        }

                                        function oe(t, e, n, r) {
                                            or(t, e + 0, n, r, 1), or(t, e + 32, n, r + 128, 1)
                                        }

                                        function se(t, e, n, r) {
                                            var i;
                                            for (t = t[e + 0] + 4, i = 0; 4 > i; ++i)
                                                for (e = 0; 4 > e; ++e) te(n, r, e, i, t)
                                        }

                                        function le(t, e, n, r) {
                                            t[e + 0] && ur(t, e + 0, n, r), t[e + 16] && ur(t, e + 16, n, r + 4), t[e + 32] && ur(t, e + 32, n, r + 128), t[e + 48] && ur(t, e + 48, n, r + 128 + 4)
                                        }

                                        function ue(t, e, n, r) {
                                            var i, o = a(16);
                                            for (i = 0; 4 > i; ++i) {
                                                var s = t[e + 0 + i] + t[e + 12 + i],
                                                    l = t[e + 4 + i] + t[e + 8 + i],
                                                    u = t[e + 4 + i] - t[e + 8 + i],
                                                    c = t[e + 0 + i] - t[e + 12 + i];
                                                o[0 + i] = s + l, o[8 + i] = s - l, o[4 + i] = c + u, o[12 + i] = c - u
                                            }
                                            for (i = 0; 4 > i; ++i) s = (t = o[0 + 4 * i] + 3) + o[3 + 4 * i], l = o[1 + 4 * i] + o[2 + 4 * i], u = o[1 + 4 * i] - o[2 + 4 * i], c = t - o[3 + 4 * i], n[r + 0] = s + l >> 3, n[r + 16] = c + u >> 3, n[r + 32] = s - l >> 3, n[r + 48] = c - u >> 3, r += 64
                                        }

                                        function ce(t, e, n) {
                                            var r, i = e - 32,
                                                a = jr,
                                                o = 255 - t[i - 1];
                                            for (r = 0; r < n; ++r) {
                                                var s, l = a,
                                                    u = o + t[e - 1];
                                                for (s = 0; s < n; ++s) t[e + s] = l[u + t[i + s]];
                                                e += 32
                                            }
                                        }

                                        function fe(t, e) {
                                            ce(t, e, 4)
                                        }

                                        function he(t, e) {
                                            ce(t, e, 8)
                                        }

                                        function de(t, e) {
                                            ce(t, e, 16)
                                        }

                                        function pe(t, e) {
                                            var n;
                                            for (n = 0; 16 > n; ++n) r(t, e + 32 * n, t, e - 32, 16)
                                        }

                                        function ge(t, e) {
                                            var n;
                                            for (n = 16; 0 < n; --n) i(t, e, t[e - 1], 16), e += 32
                                        }

                                        function me(t, e, n) {
                                            var r;
                                            for (r = 0; 16 > r; ++r) i(e, n + 32 * r, t, 16)
                                        }

                                        function ve(t, e) {
                                            var n, r = 16;
                                            for (n = 0; 16 > n; ++n) r += t[e - 1 + 32 * n] + t[e + n - 32];
                                            me(r >> 5, t, e)
                                        }

                                        function be(t, e) {
                                            var n, r = 8;
                                            for (n = 0; 16 > n; ++n) r += t[e - 1 + 32 * n];
                                            me(r >> 4, t, e)
                                        }

                                        function ye(t, e) {
                                            var n, r = 8;
                                            for (n = 0; 16 > n; ++n) r += t[e + n - 32];
                                            me(r >> 4, t, e)
                                        }

                                        function we(t, e) {
                                            me(128, t, e)
                                        }

                                        function xe(t, e, n) {
                                            return t + 2 * e + n + 2 >> 2
                                        }

                                        function _e(t, e) {
                                            var n, i = e - 32;
                                            for (i = new Uint8Array([xe(t[i - 1], t[i + 0], t[i + 1]), xe(t[i + 0], t[i + 1], t[i + 2]), xe(t[i + 1], t[i + 2], t[i + 3]), xe(t[i + 2], t[i + 3], t[i + 4])]), n = 0; 4 > n; ++n) r(t, e + 32 * n, i, 0, i.length)
                                        }

                                        function Ne(t, e) {
                                            var n = t[e - 1],
                                                r = t[e - 1 + 32],
                                                i = t[e - 1 + 64],
                                                a = t[e - 1 + 96];
                                            C(t, e + 0, 16843009 * xe(t[e - 1 - 32], n, r)), C(t, e + 32, 16843009 * xe(n, r, i)), C(t, e + 64, 16843009 * xe(r, i, a)), C(t, e + 96, 16843009 * xe(i, a, a))
                                        }

                                        function Le(t, e) {
                                            var n, r = 4;
                                            for (n = 0; 4 > n; ++n) r += t[e + n - 32] + t[e - 1 + 32 * n];
                                            for (r >>= 3, n = 0; 4 > n; ++n) i(t, e + 32 * n, r, 4)
                                        }

                                        function Se(t, e) {
                                            var n = t[e - 1 + 0],
                                                r = t[e - 1 + 32],
                                                i = t[e - 1 + 64],
                                                a = t[e - 1 - 32],
                                                o = t[e + 0 - 32],
                                                s = t[e + 1 - 32],
                                                l = t[e + 2 - 32],
                                                u = t[e + 3 - 32];
                                            t[e + 0 + 96] = xe(r, i, t[e - 1 + 96]), t[e + 1 + 96] = t[e + 0 + 64] = xe(n, r, i), t[e + 2 + 96] = t[e + 1 + 64] = t[e + 0 + 32] = xe(a, n, r), t[e + 3 + 96] = t[e + 2 + 64] = t[e + 1 + 32] = t[e + 0 + 0] = xe(o, a, n), t[e + 3 + 64] = t[e + 2 + 32] = t[e + 1 + 0] = xe(s, o, a), t[e + 3 + 32] = t[e + 2 + 0] = xe(l, s, o), t[e + 3 + 0] = xe(u, l, s)
                                        }

                                        function Ae(t, e) {
                                            var n = t[e + 1 - 32],
                                                r = t[e + 2 - 32],
                                                i = t[e + 3 - 32],
                                                a = t[e + 4 - 32],
                                                o = t[e + 5 - 32],
                                                s = t[e + 6 - 32],
                                                l = t[e + 7 - 32];
                                            t[e + 0 + 0] = xe(t[e + 0 - 32], n, r), t[e + 1 + 0] = t[e + 0 + 32] = xe(n, r, i), t[e + 2 + 0] = t[e + 1 + 32] = t[e + 0 + 64] = xe(r, i, a), t[e + 3 + 0] = t[e + 2 + 32] = t[e + 1 + 64] = t[e + 0 + 96] = xe(i, a, o), t[e + 3 + 32] = t[e + 2 + 64] = t[e + 1 + 96] = xe(a, o, s), t[e + 3 + 64] = t[e + 2 + 96] = xe(o, s, l), t[e + 3 + 96] = xe(s, l, l)
                                        }

                                        function ke(t, e) {
                                            var n = t[e - 1 + 0],
                                                r = t[e - 1 + 32],
                                                i = t[e - 1 + 64],
                                                a = t[e - 1 - 32],
                                                o = t[e + 0 - 32],
                                                s = t[e + 1 - 32],
                                                l = t[e + 2 - 32],
                                                u = t[e + 3 - 32];
                                            t[e + 0 + 0] = t[e + 1 + 64] = a + o + 1 >> 1, t[e + 1 + 0] = t[e + 2 + 64] = o + s + 1 >> 1, t[e + 2 + 0] = t[e + 3 + 64] = s + l + 1 >> 1, t[e + 3 + 0] = l + u + 1 >> 1, t[e + 0 + 96] = xe(i, r, n), t[e + 0 + 64] = xe(r, n, a), t[e + 0 + 32] = t[e + 1 + 96] = xe(n, a, o), t[e + 1 + 32] = t[e + 2 + 96] = xe(a, o, s), t[e + 2 + 32] = t[e + 3 + 96] = xe(o, s, l), t[e + 3 + 32] = xe(s, l, u)
                                        }

                                        function Pe(t, e) {
                                            var n = t[e + 0 - 32],
                                                r = t[e + 1 - 32],
                                                i = t[e + 2 - 32],
                                                a = t[e + 3 - 32],
                                                o = t[e + 4 - 32],
                                                s = t[e + 5 - 32],
                                                l = t[e + 6 - 32],
                                                u = t[e + 7 - 32];
                                            t[e + 0 + 0] = n + r + 1 >> 1, t[e + 1 + 0] = t[e + 0 + 64] = r + i + 1 >> 1, t[e + 2 + 0] = t[e + 1 + 64] = i + a + 1 >> 1, t[e + 3 + 0] = t[e + 2 + 64] = a + o + 1 >> 1, t[e + 0 + 32] = xe(n, r, i), t[e + 1 + 32] = t[e + 0 + 96] = xe(r, i, a), t[e + 2 + 32] = t[e + 1 + 96] = xe(i, a, o), t[e + 3 + 32] = t[e + 2 + 96] = xe(a, o, s), t[e + 3 + 64] = xe(o, s, l), t[e + 3 + 96] = xe(s, l, u)
                                        }

                                        function Ce(t, e) {
                                            var n = t[e - 1 + 0],
                                                r = t[e - 1 + 32],
                                                i = t[e - 1 + 64],
                                                a = t[e - 1 + 96];
                                            t[e + 0 + 0] = n + r + 1 >> 1, t[e + 2 + 0] = t[e + 0 + 32] = r + i + 1 >> 1, t[e + 2 + 32] = t[e + 0 + 64] = i + a + 1 >> 1, t[e + 1 + 0] = xe(n, r, i), t[e + 3 + 0] = t[e + 1 + 32] = xe(r, i, a), t[e + 3 + 32] = t[e + 1 + 64] = xe(i, a, a), t[e + 3 + 64] = t[e + 2 + 64] = t[e + 0 + 96] = t[e + 1 + 96] = t[e + 2 + 96] = t[e + 3 + 96] = a
                                        }

                                        function Ee(t, e) {
                                            var n = t[e - 1 + 0],
                                                r = t[e - 1 + 32],
                                                i = t[e - 1 + 64],
                                                a = t[e - 1 + 96],
                                                o = t[e - 1 - 32],
                                                s = t[e + 0 - 32],
                                                l = t[e + 1 - 32],
                                                u = t[e + 2 - 32];
                                            t[e + 0 + 0] = t[e + 2 + 32] = n + o + 1 >> 1, t[e + 0 + 32] = t[e + 2 + 64] = r + n + 1 >> 1, t[e + 0 + 64] = t[e + 2 + 96] = i + r + 1 >> 1, t[e + 0 + 96] = a + i + 1 >> 1, t[e + 3 + 0] = xe(s, l, u), t[e + 2 + 0] = xe(o, s, l), t[e + 1 + 0] = t[e + 3 + 32] = xe(n, o, s), t[e + 1 + 32] = t[e + 3 + 64] = xe(r, n, o), t[e + 1 + 64] = t[e + 3 + 96] = xe(i, r, n), t[e + 1 + 96] = xe(a, i, r)
                                        }

                                        function Fe(t, e) {
                                            var n;
                                            for (n = 0; 8 > n; ++n) r(t, e + 32 * n, t, e - 32, 8)
                                        }

                                        function Ie(t, e) {
                                            var n;
                                            for (n = 0; 8 > n; ++n) i(t, e, t[e - 1], 8), e += 32
                                        }

                                        function Oe(t, e, n) {
                                            var r;
                                            for (r = 0; 8 > r; ++r) i(e, n + 32 * r, t, 8)
                                        }

                                        function je(t, e) {
                                            var n, r = 8;
                                            for (n = 0; 8 > n; ++n) r += t[e + n - 32] + t[e - 1 + 32 * n];
                                            Oe(r >> 4, t, e)
                                        }

                                        function Me(t, e) {
                                            var n, r = 4;
                                            for (n = 0; 8 > n; ++n) r += t[e + n - 32];
                                            Oe(r >> 3, t, e)
                                        }

                                        function Te(t, e) {
                                            var n, r = 4;
                                            for (n = 0; 8 > n; ++n) r += t[e - 1 + 32 * n];
                                            Oe(r >> 3, t, e)
                                        }

                                        function Be(t, e) {
                                            Oe(128, t, e)
                                        }

                                        function Re(t, e, n) {
                                            var r = t[e - n],
                                                i = t[e + 0],
                                                a = 3 * (i - r) + Ir[1020 + t[e - 2 * n] - t[e + n]],
                                                o = Or[112 + (a + 4 >> 3)];
                                            t[e - n] = jr[255 + r + Or[112 + (a + 3 >> 3)]], t[e + 0] = jr[255 + i - o]
                                        }

                                        function De(t, e, n, r) {
                                            var i = t[e + 0],
                                                a = t[e + n];
                                            return Mr[255 + t[e - 2 * n] - t[e - n]] > r || Mr[255 + a - i] > r
                                        }

                                        function qe(t, e, n, r) {
                                            return 4 * Mr[255 + t[e - n] - t[e + 0]] + Mr[255 + t[e - 2 * n] - t[e + n]] <= r
                                        }

                                        function ze(t, e, n, r, i) {
                                            var a = t[e - 3 * n],
                                                o = t[e - 2 * n],
                                                s = t[e - n],
                                                l = t[e + 0],
                                                u = t[e + n],
                                                c = t[e + 2 * n],
                                                f = t[e + 3 * n];
                                            return 4 * Mr[255 + s - l] + Mr[255 + o - u] > r ? 0 : Mr[255 + t[e - 4 * n] - a] <= i && Mr[255 + a - o] <= i && Mr[255 + o - s] <= i && Mr[255 + f - c] <= i && Mr[255 + c - u] <= i && Mr[255 + u - l] <= i
                                        }

                                        function Ue(t, e, n, r) {
                                            var i = 2 * r + 1;
                                            for (r = 0; 16 > r; ++r) qe(t, e + r, n, i) && Re(t, e + r, n)
                                        }

                                        function He(t, e, n, r) {
                                            var i = 2 * r + 1;
                                            for (r = 0; 16 > r; ++r) qe(t, e + r * n, 1, i) && Re(t, e + r * n, 1)
                                        }

                                        function Ve(t, e, n, r) {
                                            var i;
                                            for (i = 3; 0 < i; --i) Ue(t, e += 4 * n, n, r)
                                        }

                                        function We(t, e, n, r) {
                                            var i;
                                            for (i = 3; 0 < i; --i) He(t, e += 4, n, r)
                                        }

                                        function Ge(t, e, n, r, i, a, o, s) {
                                            for (a = 2 * a + 1; 0 < i--;) {
                                                if (ze(t, e, n, a, o))
                                                    if (De(t, e, n, s)) Re(t, e, n);
                                                    else {
                                                        var l = t,
                                                            u = e,
                                                            c = n,
                                                            f = l[u - 2 * c],
                                                            h = l[u - c],
                                                            d = l[u + 0],
                                                            p = l[u + c],
                                                            g = l[u + 2 * c],
                                                            m = 27 * (b = Ir[1020 + 3 * (d - h) + Ir[1020 + f - p]]) + 63 >> 7,
                                                            v = 18 * b + 63 >> 7,
                                                            b = 9 * b + 63 >> 7;
                                                        l[u - 3 * c] = jr[255 + l[u - 3 * c] + b], l[u - 2 * c] = jr[255 + f + v], l[u - c] = jr[255 + h + m], l[u + 0] = jr[255 + d - m], l[u + c] = jr[255 + p - v], l[u + 2 * c] = jr[255 + g - b]
                                                    } e += r
                                            }
                                        }

                                        function Ye(t, e, n, r, i, a, o, s) {
                                            for (a = 2 * a + 1; 0 < i--;) {
                                                if (ze(t, e, n, a, o))
                                                    if (De(t, e, n, s)) Re(t, e, n);
                                                    else {
                                                        var l = t,
                                                            u = e,
                                                            c = n,
                                                            f = l[u - c],
                                                            h = l[u + 0],
                                                            d = l[u + c],
                                                            p = Or[112 + (4 + (g = 3 * (h - f)) >> 3)],
                                                            g = Or[112 + (g + 3 >> 3)],
                                                            m = p + 1 >> 1;
                                                        l[u - 2 * c] = jr[255 + l[u - 2 * c] + m], l[u - c] = jr[255 + f + g], l[u + 0] = jr[255 + h - p], l[u + c] = jr[255 + d - m]
                                                    } e += r
                                            }
                                        }

                                        function Xe(t, e, n, r, i, a) {
                                            Ge(t, e, n, 1, 16, r, i, a)
                                        }

                                        function Ke(t, e, n, r, i, a) {
                                            Ge(t, e, 1, n, 16, r, i, a)
                                        }

                                        function $e(t, e, n, r, i, a) {
                                            var o;
                                            for (o = 3; 0 < o; --o) Ye(t, e += 4 * n, n, 1, 16, r, i, a)
                                        }

                                        function Je(t, e, n, r, i, a) {
                                            var o;
                                            for (o = 3; 0 < o; --o) Ye(t, e += 4, 1, n, 16, r, i, a)
                                        }

                                        function Qe(t, e, n, r, i, a, o, s) {
                                            Ge(t, e, i, 1, 8, a, o, s), Ge(n, r, i, 1, 8, a, o, s)
                                        }

                                        function Ze(t, e, n, r, i, a, o, s) {
                                            Ge(t, e, 1, i, 8, a, o, s), Ge(n, r, 1, i, 8, a, o, s)
                                        }

                                        function tn(t, e, n, r, i, a, o, s) {
                                            Ye(t, e + 4 * i, i, 1, 8, a, o, s), Ye(n, r + 4 * i, i, 1, 8, a, o, s)
                                        }

                                        function en(t, e, n, r, i, a, o, s) {
                                            Ye(t, e + 4, 1, i, 8, a, o, s), Ye(n, r + 4, 1, i, 8, a, o, s)
                                        }

                                        function nn() {
                                            this.ba = new ot, this.ec = [], this.cc = [], this.Mc = [], this.Dc = this.Nc = this.dc = this.fc = 0, this.Oa = new lt, this.memory = 0, this.Ib = "OutputFunc", this.Jb = "OutputAlphaFunc", this.Nd = "OutputRowFunc"
                                        }

                                        function rn() {
                                            this.data = [], this.offset = this.kd = this.ha = this.w = 0, this.na = [], this.xa = this.gb = this.Ja = this.Sa = this.P = 0
                                        }

                                        function an() {
                                            this.nc = this.Ea = this.b = this.hc = 0, this.K = [], this.w = 0
                                        }

                                        function on() {
                                            this.ua = 0, this.Wa = new M, this.vb = new M, this.md = this.xc = this.wc = 0, this.vc = [], this.Wb = 0, this.Ya = new d, this.yc = new f
                                        }

                                        function sn() {
                                            this.xb = this.a = 0, this.l = new Gt, this.ca = new ot, this.V = [], this.Ba = 0, this.Ta = [], this.Ua = 0, this.m = new x, this.Pb = 0, this.wd = new x, this.Ma = this.$ = this.C = this.i = this.c = this.xd = 0, this.s = new on, this.ab = 0, this.gc = o(4, an), this.Oc = 0
                                        }

                                        function ln() {
                                            this.Lc = this.Z = this.$a = this.i = this.c = 0, this.l = new Gt, this.ic = 0, this.ca = [], this.tb = 0, this.qd = null, this.rd = 0
                                        }

                                        function un(t, e, n, r, i, a, o) {
                                            for (t = null == t ? 0 : t[e + 0], e = 0; e < o; ++e) i[a + e] = t + n[r + e] & 255, t = i[a + e]
                                        }

                                        function cn(t, e, n, r, i, a, o) {
                                            var s;
                                            if (null == t) un(null, null, n, r, i, a, o);
                                            else
                                                for (s = 0; s < o; ++s) i[a + s] = t[e + s] + n[r + s] & 255
                                        }

                                        function fn(t, e, n, r, i, a, o) {
                                            if (null == t) un(null, null, n, r, i, a, o);
                                            else {
                                                var s, l = t[e + 0],
                                                    u = l,
                                                    c = l;
                                                for (s = 0; s < o; ++s) u = c + (l = t[e + s]) - u, c = n[r + s] + (-256 & u ? 0 > u ? 0 : 255 : u) & 255, u = l, i[a + s] = c
                                            }
                                        }

                                        function hn(t, n, i, o) {
                                            var s = n.width,
                                                l = n.o;
                                            if (e(null != t && null != n), 0 > i || 0 >= o || i + o > l) return null;
                                            if (!t.Cc) {
                                                if (null == t.ga) {
                                                    var u;
                                                    if (t.ga = new ln, (u = null == t.ga) || (u = n.width * n.o, e(0 == t.Gb.length), t.Gb = a(u), t.Uc = 0, null == t.Gb ? u = 0 : (t.mb = t.Gb, t.nb = t.Uc, t.rc = null, u = 1), u = !u), !u) {
                                                        u = t.ga;
                                                        var c = t.Fa,
                                                            f = t.P,
                                                            h = t.qc,
                                                            d = t.mb,
                                                            p = t.nb,
                                                            g = f + 1,
                                                            m = h - 1,
                                                            b = u.l;
                                                        if (e(null != c && null != d && null != n), mi[0] = null, mi[1] = un, mi[2] = cn, mi[3] = fn, u.ca = d, u.tb = p, u.c = n.width, u.i = n.height, e(0 < u.c && 0 < u.i), 1 >= h) n = 0;
                                                        else if (u.$a = c[f + 0] >> 0 & 3, u.Z = c[f + 0] >> 2 & 3, u.Lc = c[f + 0] >> 4 & 3, f = c[f + 0] >> 6 & 3, 0 > u.$a || 1 < u.$a || 4 <= u.Z || 1 < u.Lc || f) n = 0;
                                                        else if (b.put = dt, b.ac = ht, b.bc = pt, b.ma = u, b.width = n.width, b.height = n.height, b.Da = n.Da, b.v = n.v, b.va = n.va, b.j = n.j, b.o = n.o, u.$a) t: {
                                                            e(1 == u.$a),
                                                            n = Pt();e: for (;;) {
                                                                if (null == n) {
                                                                    n = 0;
                                                                    break t
                                                                }
                                                                if (e(null != u), u.mc = n, n.c = u.c, n.i = u.i, n.l = u.l, n.l.ma = u, n.l.width = u.c, n.l.height = u.i, n.a = 0, v(n.m, c, g, m), !Ct(u.c, u.i, 1, n, null)) break e;
                                                                if (1 == n.ab && 3 == n.gc[0].hc && Nt(n.s) ? (u.ic = 1, c = n.c * n.i, n.Ta = null, n.Ua = 0, n.V = a(c), n.Ba = 0, null == n.V ? (n.a = 1, n = 0) : n = 1) : (u.ic = 0, n = Et(n, u.c)), !n) break e;
                                                                n = 1;
                                                                break t
                                                            }
                                                            u.mc = null,
                                                            n = 0
                                                        }
                                                        else n = m >= u.c * u.i;
                                                        u = !n
                                                    }
                                                    if (u) return null;
                                                    1 != t.ga.Lc ? t.Ga = 0 : o = l - i
                                                }
                                                e(null != t.ga), e(i + o <= l);
                                                t: {
                                                    if (n = (c = t.ga).c, l = c.l.o, 0 == c.$a) {
                                                        if (g = t.rc, m = t.Vc, b = t.Fa, f = t.P + 1 + i * n, h = t.mb, d = t.nb + i * n, e(f <= t.P + t.qc), 0 != c.Z)
                                                            for (e(null != mi[c.Z]), u = 0; u < o; ++u) mi[c.Z](g, m, b, f, h, d, n), g = h, m = d, d += n, f += n;
                                                        else
                                                            for (u = 0; u < o; ++u) r(h, d, b, f, n), g = h, m = d, d += n, f += n;
                                                        t.rc = g, t.Vc = m
                                                    } else {
                                                        if (e(null != c.mc), n = i + o, e(null != (u = c.mc)), e(n <= u.i), u.C >= n) n = 1;
                                                        else if (c.ic || vn(), c.ic) {
                                                            c = u.V, g = u.Ba, m = u.c;
                                                            var y = u.i,
                                                                w = (b = 1, f = u.$ / m, h = u.$ % m, d = u.m, p = u.s, u.$),
                                                                x = m * y,
                                                                _ = m * n,
                                                                L = p.wc,
                                                                A = w < _ ? wt(p, h, f) : null;
                                                            e(w <= x), e(n <= y), e(Nt(p));
                                                            e: for (;;) {
                                                                for (; !d.h && w < _;) {
                                                                    if (h & L || (A = wt(p, h, f)), e(null != A), S(d), 256 > (y = bt(A.G[0], A.H[0], d))) c[g + w] = y, ++w, ++h >= m && (h = 0, ++f <= n && !(f % 16) && St(u, f));
                                                                    else {
                                                                        if (!(280 > y)) {
                                                                            b = 0;
                                                                            break e
                                                                        }
                                                                        y = mt(y - 256, d);
                                                                        var k, P = bt(A.G[4], A.H[4], d);
                                                                        if (S(d), !(w >= (P = vt(m, P = mt(P, d))) && x - w >= y)) {
                                                                            b = 0;
                                                                            break e
                                                                        }
                                                                        for (k = 0; k < y; ++k) c[g + w + k] = c[g + w + k - P];
                                                                        for (w += y, h += y; h >= m;) h -= m, ++f <= n && !(f % 16) && St(u, f);
                                                                        w < _ && h & L && (A = wt(p, h, f))
                                                                    }
                                                                    e(d.h == N(d))
                                                                }
                                                                St(u, f > n ? n : f);
                                                                break e
                                                            }!b || d.h && w < x ? (b = 0, u.a = d.h ? 5 : 3) : u.$ = w, n = b
                                                        } else n = At(u, u.V, u.Ba, u.c, u.i, n, Ft);
                                                        if (!n) {
                                                            o = 0;
                                                            break t
                                                        }
                                                    }
                                                    i + o >= l && (t.Cc = 1),
                                                    o = 1
                                                }
                                                if (!o) return null;
                                                if (t.Cc && (null != (o = t.ga) && (o.mc = null), t.ga = null, 0 < t.Ga)) return alert("todo:WebPDequantizeLevels"), null
                                            }
                                            return t.nb + i * s
                                        }

                                        function dn(t, e, n, r, i, a) {
                                            for (; 0 < i--;) {
                                                var o, s = t,
                                                    l = e + (n ? 1 : 0),
                                                    u = t,
                                                    c = e + (n ? 0 : 3);
                                                for (o = 0; o < r; ++o) {
                                                    var f = u[c + 4 * o];
                                                    255 != f && (f *= 32897, s[l + 4 * o + 0] = s[l + 4 * o + 0] * f >> 23, s[l + 4 * o + 1] = s[l + 4 * o + 1] * f >> 23, s[l + 4 * o + 2] = s[l + 4 * o + 2] * f >> 23)
                                                }
                                                e += a
                                            }
                                        }

                                        function pn(t, e, n, r, i) {
                                            for (; 0 < r--;) {
                                                var a;
                                                for (a = 0; a < n; ++a) {
                                                    var o = t[e + 2 * a + 0],
                                                        s = 15 & (u = t[e + 2 * a + 1]),
                                                        l = 4369 * s,
                                                        u = (240 & u | u >> 4) * l >> 16;
                                                    t[e + 2 * a + 0] = (240 & o | o >> 4) * l >> 16 & 240 | (15 & o | o << 4) * l >> 16 >> 4 & 15, t[e + 2 * a + 1] = 240 & u | s
                                                }
                                                e += i
                                            }
                                        }

                                        function gn(t, e, n, r, i, a, o, s) {
                                            var l, u, c = 255;
                                            for (u = 0; u < i; ++u) {
                                                for (l = 0; l < r; ++l) {
                                                    var f = t[e + l];
                                                    a[o + 4 * l] = f, c &= f
                                                }
                                                e += n, o += s
                                            }
                                            return 255 != c
                                        }

                                        function mn(t, e, n, r, i) {
                                            var a;
                                            for (a = 0; a < i; ++a) n[r + a] = t[e + a] >> 8
                                        }

                                        function vn() {
                                            Nr = dn, Lr = pn, Sr = gn, Ar = mn
                                        }

                                        function bn(n, r, i) {
                                            t[n] = function(t, n, a, o, s, l, u, c, f, h, d, p, g, m, v, b, y) {
                                                var w, x = y - 1 >> 1,
                                                    _ = s[l + 0] | u[c + 0] << 16,
                                                    N = f[h + 0] | d[p + 0] << 16;
                                                e(null != t);
                                                var L = 3 * _ + N + 131074 >> 2;
                                                for (r(t[n + 0], 255 & L, L >> 16, g, m), null != a && (L = 3 * N + _ + 131074 >> 2, r(a[o + 0], 255 & L, L >> 16, v, b)), w = 1; w <= x; ++w) {
                                                    var S = s[l + w] | u[c + w] << 16,
                                                        A = f[h + w] | d[p + w] << 16,
                                                        k = _ + S + N + A + 524296,
                                                        P = k + 2 * (S + N) >> 3;
                                                    L = P + _ >> 1, _ = (k = k + 2 * (_ + A) >> 3) + S >> 1, r(t[n + 2 * w - 1], 255 & L, L >> 16, g, m + (2 * w - 1) * i), r(t[n + 2 * w - 0], 255 & _, _ >> 16, g, m + (2 * w - 0) * i), null != a && (L = k + N >> 1, _ = P + A >> 1, r(a[o + 2 * w - 1], 255 & L, L >> 16, v, b + (2 * w - 1) * i), r(a[o + 2 * w + 0], 255 & _, _ >> 16, v, b + (2 * w + 0) * i)), _ = S, N = A
                                                }
                                                1 & y || (L = 3 * _ + N + 131074 >> 2, r(t[n + y - 1], 255 & L, L >> 16, g, m + (y - 1) * i), null != a && (L = 3 * N + _ + 131074 >> 2, r(a[o + y - 1], 255 & L, L >> 16, v, b + (y - 1) * i)))
                                            }
                                        }

                                        function yn() {
                                            vi[Tr] = bi, vi[Br] = wi, vi[Rr] = yi, vi[Dr] = xi, vi[qr] = _i, vi[zr] = Ni, vi[Ur] = Li, vi[Hr] = wi, vi[Vr] = xi, vi[Wr] = _i, vi[Gr] = Ni
                                        }

                                        function wn(t) {
                                            return t & ~Ei ? 0 > t ? 0 : 255 : t >> Ci
                                        }

                                        function xn(t, e) {
                                            return wn((19077 * t >> 8) + (26149 * e >> 8) - 14234)
                                        }

                                        function _n(t, e, n) {
                                            return wn((19077 * t >> 8) - (6419 * e >> 8) - (13320 * n >> 8) + 8708)
                                        }

                                        function Nn(t, e) {
                                            return wn((19077 * t >> 8) + (33050 * e >> 8) - 17685)
                                        }

                                        function Ln(t, e, n, r, i) {
                                            r[i + 0] = xn(t, n), r[i + 1] = _n(t, e, n), r[i + 2] = Nn(t, e)
                                        }

                                        function Sn(t, e, n, r, i) {
                                            r[i + 0] = Nn(t, e), r[i + 1] = _n(t, e, n), r[i + 2] = xn(t, n)
                                        }

                                        function An(t, e, n, r, i) {
                                            var a = _n(t, e, n);
                                            e = a << 3 & 224 | Nn(t, e) >> 3, r[i + 0] = 248 & xn(t, n) | a >> 5, r[i + 1] = e
                                        }

                                        function kn(t, e, n, r, i) {
                                            var a = 240 & Nn(t, e) | 15;
                                            r[i + 0] = 240 & xn(t, n) | _n(t, e, n) >> 4, r[i + 1] = a
                                        }

                                        function Pn(t, e, n, r, i) {
                                            r[i + 0] = 255, Ln(t, e, n, r, i + 1)
                                        }

                                        function Cn(t, e, n, r, i) {
                                            Sn(t, e, n, r, i), r[i + 3] = 255
                                        }

                                        function En(t, e, n, r, i) {
                                            Ln(t, e, n, r, i), r[i + 3] = 255
                                        }

                                        function Wt(t, e) {
                                            return 0 > t ? 0 : t > e ? e : t
                                        }

                                        function Fn(e, n, r) {
                                            t[e] = function(t, e, i, a, o, s, l, u, c) {
                                                for (var f = u + (-2 & c) * r; u != f;) n(t[e + 0], i[a + 0], o[s + 0], l, u), n(t[e + 1], i[a + 0], o[s + 0], l, u + r), e += 2, ++a, ++s, u += 2 * r;
                                                1 & c && n(t[e + 0], i[a + 0], o[s + 0], l, u)
                                            }
                                        }

                                        function In(t, e, n) {
                                            return 0 == n ? 0 == t ? 0 == e ? 6 : 5 : 0 == e ? 4 : 0 : n
                                        }

                                        function On(t, e, n, r, i) {
                                            switch (t >>> 30) {
                                                case 3:
                                                    or(e, n, r, i, 0);
                                                    break;
                                                case 2:
                                                    sr(e, n, r, i);
                                                    break;
                                                case 1:
                                                    ur(e, n, r, i)
                                            }
                                        }

                                        function jn(t, e) {
                                            var n, a, o = e.M,
                                                s = e.Nb,
                                                l = t.oc,
                                                u = t.pc + 40,
                                                c = t.oc,
                                                f = t.pc + 584,
                                                h = t.oc,
                                                d = t.pc + 600;
                                            for (n = 0; 16 > n; ++n) l[u + 32 * n - 1] = 129;
                                            for (n = 0; 8 > n; ++n) c[f + 32 * n - 1] = 129, h[d + 32 * n - 1] = 129;
                                            for (0 < o ? l[u - 1 - 32] = c[f - 1 - 32] = h[d - 1 - 32] = 129 : (i(l, u - 32 - 1, 127, 21), i(c, f - 32 - 1, 127, 9), i(h, d - 32 - 1, 127, 9)), a = 0; a < t.za; ++a) {
                                                var p = e.ya[e.aa + a];
                                                if (0 < a) {
                                                    for (n = -1; 16 > n; ++n) r(l, u + 32 * n - 4, l, u + 32 * n + 12, 4);
                                                    for (n = -1; 8 > n; ++n) r(c, f + 32 * n - 4, c, f + 32 * n + 4, 4), r(h, d + 32 * n - 4, h, d + 32 * n + 4, 4)
                                                }
                                                var g = t.Gd,
                                                    m = t.Hd + a,
                                                    v = p.ad,
                                                    b = p.Hc;
                                                if (0 < o && (r(l, u - 32, g[m].y, 0, 16), r(c, f - 32, g[m].f, 0, 8), r(h, d - 32, g[m].ea, 0, 8)), p.Za) {
                                                    var y = l,
                                                        w = u - 32 + 16;
                                                    for (0 < o && (a >= t.za - 1 ? i(y, w, g[m].y[15], 4) : r(y, w, g[m + 1].y, 0, 4)), n = 0; 4 > n; n++) y[w + 128 + n] = y[w + 256 + n] = y[w + 384 + n] = y[w + 0 + n];
                                                    for (n = 0; 16 > n; ++n, b <<= 2) y = l, w = u + Ri[n], hi[p.Ob[n]](y, w), On(b, v, 16 * +n, y, w)
                                                } else if (y = In(a, o, p.Ob[0]), fi[y](l, u), 0 != b)
                                                    for (n = 0; 16 > n; ++n, b <<= 2) On(b, v, 16 * +n, l, u + Ri[n]);
                                                for (n = p.Gc, y = In(a, o, p.Dd), di[y](c, f), di[y](h, d), b = v, y = c, w = f, 255 & (p = n >> 0) && (170 & p ? lr(b, 256, y, w) : cr(b, 256, y, w)), p = h, b = d, 255 & (n >>= 8) && (170 & n ? lr(v, 320, p, b) : cr(v, 320, p, b)), o < t.Ub - 1 && (r(g[m].y, 0, l, u + 480, 16), r(g[m].f, 0, c, f + 224, 8), r(g[m].ea, 0, h, d + 224, 8)), n = 8 * s * t.B, g = t.sa, m = t.ta + 16 * a + 16 * s * t.R, v = t.qa, p = t.ra + 8 * a + n, b = t.Ha, y = t.Ia + 8 * a + n, n = 0; 16 > n; ++n) r(g, m + n * t.R, l, u + 32 * n, 16);
                                                for (n = 0; 8 > n; ++n) r(v, p + n * t.B, c, f + 32 * n, 8), r(b, y + n * t.B, h, d + 32 * n, 8)
                                            }
                                        }

                                        function Mn(t, r, i, a, o, s, l, u, c) {
                                            var f = [0],
                                                h = [0],
                                                d = 0,
                                                p = null != c ? c.kd : 0,
                                                g = null != c ? c : new rn;
                                            if (null == t || 12 > i) return 7;
                                            g.data = t, g.w = r, g.ha = i, r = [r], i = [i], g.gb = [g.gb];
                                            t: {
                                                var m = r,
                                                    b = i,
                                                    y = g.gb;
                                                if (e(null != t), e(null != b), e(null != y), y[0] = 0, 12 <= b[0] && !n(t, m[0], "RIFF")) {
                                                    if (n(t, m[0] + 8, "WEBP")) {
                                                        y = 3;
                                                        break t
                                                    }
                                                    var w = I(t, m[0] + 4);
                                                    if (12 > w || 4294967286 < w) {
                                                        y = 3;
                                                        break t
                                                    }
                                                    if (p && w > b[0] - 8) {
                                                        y = 7;
                                                        break t
                                                    }
                                                    y[0] = w, m[0] += 12, b[0] -= 12
                                                }
                                                y = 0
                                            }
                                            if (0 != y) return y;
                                            for (w = 0 < g.gb[0], i = i[0];;) {
                                                t: {
                                                    var _ = t;b = r,
                                                    y = i;
                                                    var N = f,
                                                        L = h,
                                                        S = m = [0];
                                                    if ((P = d = [d])[0] = 0, 8 > y[0]) y = 7;
                                                    else {
                                                        if (!n(_, b[0], "VP8X")) {
                                                            if (10 != I(_, b[0] + 4)) {
                                                                y = 3;
                                                                break t
                                                            }
                                                            if (18 > y[0]) {
                                                                y = 7;
                                                                break t
                                                            }
                                                            var A = I(_, b[0] + 8),
                                                                k = 1 + F(_, b[0] + 12);
                                                            if (2147483648 <= k * (_ = 1 + F(_, b[0] + 15))) {
                                                                y = 3;
                                                                break t
                                                            }
                                                            null != S && (S[0] = A), null != N && (N[0] = k), null != L && (L[0] = _), b[0] += 18, y[0] -= 18, P[0] = 1
                                                        }
                                                        y = 0
                                                    }
                                                }
                                                if (d = d[0], m = m[0], 0 != y) return y;
                                                if (b = !!(2 & m), !w && d) return 3;
                                                if (null != s && (s[0] = !!(16 & m)), null != l && (l[0] = b), null != u && (u[0] = 0), l = f[0], m = h[0], d && b && null == c) {
                                                    y = 0;
                                                    break
                                                }
                                                if (4 > i) {
                                                    y = 7;
                                                    break
                                                }
                                                if (w && d || !w && !d && !n(t, r[0], "ALPH")) {
                                                    i = [i], g.na = [g.na], g.P = [g.P], g.Sa = [g.Sa];
                                                    t: {
                                                        A = t,
                                                        y = r,
                                                        w = i;
                                                        var P = g.gb;N = g.na,
                                                        L = g.P,
                                                        S = g.Sa,
                                                        k = 22,
                                                        e(null != A),
                                                        e(null != w),
                                                        _ = y[0];
                                                        var C = w[0];
                                                        for (e(null != N), e(null != S), N[0] = null, L[0] = null, S[0] = 0;;) {
                                                            if (y[0] = _, w[0] = C, 8 > C) {
                                                                y = 7;
                                                                break t
                                                            }
                                                            var E = I(A, _ + 4);
                                                            if (4294967286 < E) {
                                                                y = 3;
                                                                break t
                                                            }
                                                            var O = 8 + E + 1 & -2;
                                                            if (k += O, 0 < P && k > P) {
                                                                y = 3;
                                                                break t
                                                            }
                                                            if (!n(A, _, "VP8 ") || !n(A, _, "VP8L")) {
                                                                y = 0;
                                                                break t
                                                            }
                                                            if (C[0] < O) {
                                                                y = 7;
                                                                break t
                                                            }
                                                            n(A, _, "ALPH") || (N[0] = A, L[0] = _ + 8, S[0] = E), _ += O, C -= O
                                                        }
                                                    }
                                                    if (i = i[0], g.na = g.na[0], g.P = g.P[0], g.Sa = g.Sa[0], 0 != y) break
                                                }
                                                i = [i],
                                                g.Ja = [g.Ja],
                                                g.xa = [g.xa];t: if (P = t, y = r, w = i, N = g.gb[0], L = g.Ja, S = g.xa, A = y[0], _ = !n(P, A, "VP8 "), k = !n(P, A, "VP8L"), e(null != P), e(null != w), e(null != L), e(null != S), 8 > w[0]) y = 7;
                                                    else {
                                                        if (_ || k) {
                                                            if (P = I(P, A + 4), 12 <= N && P > N - 12) {
                                                                y = 3;
                                                                break t
                                                            }
                                                            if (p && P > w[0] - 8) {
                                                                y = 7;
                                                                break t
                                                            }
                                                            L[0] = P, y[0] += 8, w[0] -= 8, S[0] = k
                                                        } else S[0] = 5 <= w[0] && 47 == P[A + 0] && !(P[A + 4] >> 5), L[0] = w[0];
                                                        y = 0
                                                    }if (i = i[0], g.Ja = g.Ja[0], g.xa = g.xa[0], r = r[0], 0 != y) break;
                                                if (4294967286 < g.Ja) return 3;
                                                if (null == u || b || (u[0] = g.xa ? 2 : 1), l = [l], m = [m], g.xa) {
                                                    if (5 > i) {
                                                        y = 7;
                                                        break
                                                    }
                                                    u = l, p = m, b = s, null == t || 5 > i ? t = 0 : 5 <= i && 47 == t[r + 0] && !(t[r + 4] >> 5) ? (w = [0], P = [0], N = [0], v(L = new x, t, r, i), gt(L, w, P, N) ? (null != u && (u[0] = w[0]), null != p && (p[0] = P[0]), null != b && (b[0] = N[0]), t = 1) : t = 0) : t = 0
                                                } else {
                                                    if (10 > i) {
                                                        y = 7;
                                                        break
                                                    }
                                                    u = m, null == t || 10 > i || !Kt(t, r + 3, i - 3) ? t = 0 : (p = t[r + 0] | t[r + 1] << 8 | t[r + 2] << 16, b = 16383 & (t[r + 7] << 8 | t[r + 6]), t = 16383 & (t[r + 9] << 8 | t[r + 8]), 1 & p || 3 < (p >> 1 & 7) || !(p >> 4 & 1) || p >> 5 >= g.Ja || !b || !t ? t = 0 : (l && (l[0] = b), u && (u[0] = t), t = 1))
                                                }
                                                if (!t) return 3;
                                                if (l = l[0], m = m[0], d && (f[0] != l || h[0] != m)) return 3;null != c && (c[0] = g, c.offset = r - c.w, e(4294967286 > r - c.w), e(c.offset == c.ha - i));
                                                break
                                            }
                                            return 0 == y || 7 == y && d && null == c ? (null != s && (s[0] |= null != g.na && 0 < g.na.length), null != a && (a[0] = l), null != o && (o[0] = m), 0) : y
                                        }

                                        function Tn(t, e, n) {
                                            var r = e.width,
                                                i = e.height,
                                                a = 0,
                                                o = 0,
                                                s = r,
                                                l = i;
                                            if (e.Da = null != t && 0 < t.Da, e.Da && (s = t.cd, l = t.bd, a = t.v, o = t.j, 11 > n || (a &= -2, o &= -2), 0 > a || 0 > o || 0 >= s || 0 >= l || a + s > r || o + l > i)) return 0;
                                            if (e.v = a, e.j = o, e.va = a + s, e.o = o + l, e.U = s, e.T = l, e.da = null != t && 0 < t.da, e.da) {
                                                if (!T(s, l, n = [t.ib], a = [t.hb])) return 0;
                                                e.ib = n[0], e.hb = a[0]
                                            }
                                            return e.ob = null != t && t.ob, e.Kb = null == t || !t.Sd, e.da && (e.ob = e.ib < 3 * r / 4 && e.hb < 3 * i / 4, e.Kb = 0), 1
                                        }

                                        function Bn(t) {
                                            if (null == t) return 2;
                                            if (11 > t.S) {
                                                var e = t.f.RGBA;
                                                e.fb += (t.height - 1) * e.A, e.A = -e.A
                                            } else e = t.f.kb, t = t.height, e.O += (t - 1) * e.fa, e.fa = -e.fa, e.N += (t - 1 >> 1) * e.Ab, e.Ab = -e.Ab, e.W += (t - 1 >> 1) * e.Db, e.Db = -e.Db, null != e.F && (e.J += (t - 1) * e.lb, e.lb = -e.lb);
                                            return 0
                                        }

                                        function Rn(t, e, n, r) {
                                            if (null == r || 0 >= t || 0 >= e) return 2;
                                            if (null != n) {
                                                if (n.Da) {
                                                    var i = n.cd,
                                                        o = n.bd,
                                                        s = -2 & n.v,
                                                        l = -2 & n.j;
                                                    if (0 > s || 0 > l || 0 >= i || 0 >= o || s + i > t || l + o > e) return 2;
                                                    t = i, e = o
                                                }
                                                if (n.da) {
                                                    if (!T(t, e, i = [n.ib], o = [n.hb])) return 2;
                                                    t = i[0], e = o[0]
                                                }
                                            }
                                            r.width = t, r.height = e;
                                            t: {
                                                var u = r.width,
                                                    c = r.height;
                                                if (t = r.S, 0 >= u || 0 >= c || !(t >= Tr && 13 > t)) t = 2;
                                                else {
                                                    if (0 >= r.Rd && null == r.sd) {
                                                        s = o = i = e = 0;
                                                        var f = (l = u * Ui[t]) * c;
                                                        if (11 > t || (o = (c + 1) / 2 * (e = (u + 1) / 2), 12 == t && (s = (i = u) * c)), null == (c = a(f + 2 * o + s))) {
                                                            t = 1;
                                                            break t
                                                        }
                                                        r.sd = c, 11 > t ? ((u = r.f.RGBA).eb = c, u.fb = 0, u.A = l, u.size = f) : ((u = r.f.kb).y = c, u.O = 0, u.fa = l, u.Fd = f, u.f = c, u.N = 0 + f, u.Ab = e, u.Cd = o, u.ea = c, u.W = 0 + f + o, u.Db = e, u.Ed = o, 12 == t && (u.F = c, u.J = 0 + f + 2 * o), u.Tc = s, u.lb = i)
                                                    }
                                                    if (e = 1, i = r.S, o = r.width, s = r.height, i >= Tr && 13 > i)
                                                        if (11 > i) t = r.f.RGBA, e &= (l = Math.abs(t.A)) * (s - 1) + o <= t.size, e &= l >= o * Ui[i], e &= null != t.eb;
                                                        else {
                                                            t = r.f.kb, l = (o + 1) / 2, f = (s + 1) / 2, u = Math.abs(t.fa), c = Math.abs(t.Ab);
                                                            var h = Math.abs(t.Db),
                                                                d = Math.abs(t.lb),
                                                                p = d * (s - 1) + o;
                                                            e &= u * (s - 1) + o <= t.Fd, e &= c * (f - 1) + l <= t.Cd, e = (e &= h * (f - 1) + l <= t.Ed) & u >= o & c >= l & h >= l, e &= null != t.y, e &= null != t.f, e &= null != t.ea, 12 == i && (e &= d >= o, e &= p <= t.Tc, e &= null != t.F)
                                                        }
                                                    else e = 0;
                                                    t = e ? 0 : 2
                                                }
                                            }
                                            return 0 != t || null != n && n.fd && (t = Bn(r)), t
                                        }
                                        var Dn = 64,
                                            qn = [0, 1, 3, 7, 15, 31, 63, 127, 255, 511, 1023, 2047, 4095, 8191, 16383, 32767, 65535, 131071, 262143, 524287, 1048575, 2097151, 4194303, 8388607, 16777215],
                                            zn = 24,
                                            Un = 32,
                                            Hn = 8,
                                            Vn = [0, 0, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7];
                                        D("Predictor0", "PredictorAdd0"), t.Predictor0 = function() {
                                            return 4278190080
                                        }, t.Predictor1 = function(t) {
                                            return t
                                        }, t.Predictor2 = function(t, e, n) {
                                            return e[n + 0]
                                        }, t.Predictor3 = function(t, e, n) {
                                            return e[n + 1]
                                        }, t.Predictor4 = function(t, e, n) {
                                            return e[n - 1]
                                        }, t.Predictor5 = function(t, e, n) {
                                            return z(z(t, e[n + 1]), e[n + 0])
                                        }, t.Predictor6 = function(t, e, n) {
                                            return z(t, e[n - 1])
                                        }, t.Predictor7 = function(t, e, n) {
                                            return z(t, e[n + 0])
                                        }, t.Predictor8 = function(t, e, n) {
                                            return z(e[n - 1], e[n + 0])
                                        }, t.Predictor9 = function(t, e, n) {
                                            return z(e[n + 0], e[n + 1])
                                        }, t.Predictor10 = function(t, e, n) {
                                            return z(z(t, e[n - 1]), z(e[n + 0], e[n + 1]))
                                        }, t.Predictor11 = function(t, e, n) {
                                            var r = e[n + 0];
                                            return 0 >= V(r >> 24 & 255, t >> 24 & 255, (e = e[n - 1]) >> 24 & 255) + V(r >> 16 & 255, t >> 16 & 255, e >> 16 & 255) + V(r >> 8 & 255, t >> 8 & 255, e >> 8 & 255) + V(255 & r, 255 & t, 255 & e) ? r : t
                                        }, t.Predictor12 = function(t, e, n) {
                                            var r = e[n + 0];
                                            return (U((t >> 24 & 255) + (r >> 24 & 255) - ((e = e[n - 1]) >> 24 & 255)) << 24 | U((t >> 16 & 255) + (r >> 16 & 255) - (e >> 16 & 255)) << 16 | U((t >> 8 & 255) + (r >> 8 & 255) - (e >> 8 & 255)) << 8 | U((255 & t) + (255 & r) - (255 & e))) >>> 0
                                        }, t.Predictor13 = function(t, e, n) {
                                            var r = e[n - 1];
                                            return (H((t = z(t, e[n + 0])) >> 24 & 255, r >> 24 & 255) << 24 | H(t >> 16 & 255, r >> 16 & 255) << 16 | H(t >> 8 & 255, r >> 8 & 255) << 8 | H(t >> 0 & 255, r >> 0 & 255)) >>> 0
                                        };
                                        var Wn = t.PredictorAdd0;
                                        t.PredictorAdd1 = W, D("Predictor2", "PredictorAdd2"), D("Predictor3", "PredictorAdd3"), D("Predictor4", "PredictorAdd4"), D("Predictor5", "PredictorAdd5"), D("Predictor6", "PredictorAdd6"), D("Predictor7", "PredictorAdd7"), D("Predictor8", "PredictorAdd8"), D("Predictor9", "PredictorAdd9"), D("Predictor10", "PredictorAdd10"), D("Predictor11", "PredictorAdd11"), D("Predictor12", "PredictorAdd12"), D("Predictor13", "PredictorAdd13");
                                        var Gn = t.PredictorAdd2;
                                        K("ColorIndexInverseTransform", "MapARGB", "32b", (function(t) {
                                            return t >> 8 & 255
                                        }), (function(t) {
                                            return t
                                        })), K("VP8LColorIndexInverseTransformAlpha", "MapAlpha", "8b", (function(t) {
                                            return t
                                        }), (function(t) {
                                            return t >> 8 & 255
                                        }));
                                        var Yn, Xn = t.ColorIndexInverseTransform,
                                            Kn = t.MapARGB,
                                            $n = t.VP8LColorIndexInverseTransformAlpha,
                                            Jn = t.MapAlpha,
                                            Qn = t.VP8LPredictorsAdd = [];
                                        Qn.length = 16, (t.VP8LPredictors = []).length = 16, (t.VP8LPredictorsAdd_C = []).length = 16, (t.VP8LPredictors_C = []).length = 16;
                                        var Zn, tr, er, nr, rr, ir, ar, or, sr, lr, ur, cr, fr, hr, dr, pr, gr, mr, vr, br, yr, wr, xr, _r, Nr, Lr, Sr, Ar, kr = a(511),
                                            Pr = a(2041),
                                            Cr = a(225),
                                            Er = a(767),
                                            Fr = 0,
                                            Ir = Pr,
                                            Or = Cr,
                                            jr = Er,
                                            Mr = kr,
                                            Tr = 0,
                                            Br = 1,
                                            Rr = 2,
                                            Dr = 3,
                                            qr = 4,
                                            zr = 5,
                                            Ur = 6,
                                            Hr = 7,
                                            Vr = 8,
                                            Wr = 9,
                                            Gr = 10,
                                            Yr = [2, 3, 7],
                                            Xr = [3, 3, 11],
                                            Kr = [280, 256, 256, 256, 40],
                                            $r = [0, 1, 1, 1, 0],
                                            Jr = [17, 18, 0, 1, 2, 3, 4, 5, 16, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
                                            Qr = [24, 7, 23, 25, 40, 6, 39, 41, 22, 26, 38, 42, 56, 5, 55, 57, 21, 27, 54, 58, 37, 43, 72, 4, 71, 73, 20, 28, 53, 59, 70, 74, 36, 44, 88, 69, 75, 52, 60, 3, 87, 89, 19, 29, 86, 90, 35, 45, 68, 76, 85, 91, 51, 61, 104, 2, 103, 105, 18, 30, 102, 106, 34, 46, 84, 92, 67, 77, 101, 107, 50, 62, 120, 1, 119, 121, 83, 93, 17, 31, 100, 108, 66, 78, 118, 122, 33, 47, 117, 123, 49, 63, 99, 109, 82, 94, 0, 116, 124, 65, 79, 16, 32, 98, 110, 48, 115, 125, 81, 95, 64, 114, 126, 97, 111, 80, 113, 127, 96, 112],
                                            Zr = [2954, 2956, 2958, 2962, 2970, 2986, 3018, 3082, 3212, 3468, 3980, 5004],
                                            ti = 8,
                                            ei = [4, 5, 6, 7, 8, 9, 10, 10, 11, 12, 13, 14, 15, 16, 17, 17, 18, 19, 20, 20, 21, 21, 22, 22, 23, 23, 24, 25, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 91, 93, 95, 96, 98, 100, 101, 102, 104, 106, 108, 110, 112, 114, 116, 118, 122, 124, 126, 128, 130, 132, 134, 136, 138, 140, 143, 145, 148, 151, 154, 157],
                                            ni = [4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 60, 62, 64, 66, 68, 70, 72, 74, 76, 78, 80, 82, 84, 86, 88, 90, 92, 94, 96, 98, 100, 102, 104, 106, 108, 110, 112, 114, 116, 119, 122, 125, 128, 131, 134, 137, 140, 143, 146, 149, 152, 155, 158, 161, 164, 167, 170, 173, 177, 181, 185, 189, 193, 197, 201, 205, 209, 213, 217, 221, 225, 229, 234, 239, 245, 249, 254, 259, 264, 269, 274, 279, 284],
                                            ri = null,
                                            ii = [
                                                [173, 148, 140, 0],
                                                [176, 155, 140, 135, 0],
                                                [180, 157, 141, 134, 130, 0],
                                                [254, 254, 243, 230, 196, 177, 153, 140, 133, 130, 129, 0]
                                            ],
                                            ai = [0, 1, 4, 8, 5, 2, 3, 6, 9, 12, 13, 10, 7, 11, 14, 15],
                                            oi = [-0, 1, -1, 2, -2, 3, 4, 6, -3, 5, -4, -5, -6, 7, -7, 8, -8, -9],
                                            si = [
                                                [
                                                    [
                                                        [128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128],
                                                        [128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128],
                                                        [128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128]
                                                    ],
                                                    [
                                                        [253, 136, 254, 255, 228, 219, 128, 128, 128, 128, 128],
                                                        [189, 129, 242, 255, 227, 213, 255, 219, 128, 128, 128],
                                                        [106, 126, 227, 252, 214, 209, 255, 255, 128, 128, 128]
                                                    ],
                                                    [
                                                        [1, 98, 248, 255, 236, 226, 255, 255, 128, 128, 128],
                                                        [181, 133, 238, 254, 221, 234, 255, 154, 128, 128, 128],
                                                        [78, 134, 202, 247, 198, 180, 255, 219, 128, 128, 128]
                                                    ],
                                                    [
                                                        [1, 185, 249, 255, 243, 255, 128, 128, 128, 128, 128],
                                                        [184, 150, 247, 255, 236, 224, 128, 128, 128, 128, 128],
                                                        [77, 110, 216, 255, 236, 230, 128, 128, 128, 128, 128]
                                                    ],
                                                    [
                                                        [1, 101, 251, 255, 241, 255, 128, 128, 128, 128, 128],
                                                        [170, 139, 241, 252, 236, 209, 255, 255, 128, 128, 128],
                                                        [37, 116, 196, 243, 228, 255, 255, 255, 128, 128, 128]
                                                    ],
                                                    [
                                                        [1, 204, 254, 255, 245, 255, 128, 128, 128, 128, 128],
                                                        [207, 160, 250, 255, 238, 128, 128, 128, 128, 128, 128],
                                                        [102, 103, 231, 255, 211, 171, 128, 128, 128, 128, 128]
                                                    ],
                                                    [
                                                        [1, 152, 252, 255, 240, 255, 128, 128, 128, 128, 128],
                                                        [177, 135, 243, 255, 234, 225, 128, 128, 128, 128, 128],
                                                        [80, 129, 211, 255, 194, 224, 128, 128, 128, 128, 128]
                                                    ],
                                                    [
                                                        [1, 1, 255, 128, 128, 128, 128, 128, 128, 128, 128],
                                                        [246, 1, 255, 128, 128, 128, 128, 128, 128, 128, 128],
                                                        [255, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128]
                                                    ]
                                                ],
                                                [
                                                    [
                                                        [198, 35, 237, 223, 193, 187, 162, 160, 145, 155, 62],
                                                        [131, 45, 198, 221, 172, 176, 220, 157, 252, 221, 1],
                                                        [68, 47, 146, 208, 149, 167, 221, 162, 255, 223, 128]
                                                    ],
                                                    [
                                                        [1, 149, 241, 255, 221, 224, 255, 255, 128, 128, 128],
                                                        [184, 141, 234, 253, 222, 220, 255, 199, 128, 128, 128],
                                                        [81, 99, 181, 242, 176, 190, 249, 202, 255, 255, 128]
                                                    ],
                                                    [
                                                        [1, 129, 232, 253, 214, 197, 242, 196, 255, 255, 128],
                                                        [99, 121, 210, 250, 201, 198, 255, 202, 128, 128, 128],
                                                        [23, 91, 163, 242, 170, 187, 247, 210, 255, 255, 128]
                                                    ],
                                                    [
                                                        [1, 200, 246, 255, 234, 255, 128, 128, 128, 128, 128],
                                                        [109, 178, 241, 255, 231, 245, 255, 255, 128, 128, 128],
                                                        [44, 130, 201, 253, 205, 192, 255, 255, 128, 128, 128]
                                                    ],
                                                    [
                                                        [1, 132, 239, 251, 219, 209, 255, 165, 128, 128, 128],
                                                        [94, 136, 225, 251, 218, 190, 255, 255, 128, 128, 128],
                                                        [22, 100, 174, 245, 186, 161, 255, 199, 128, 128, 128]
                                                    ],
                                                    [
                                                        [1, 182, 249, 255, 232, 235, 128, 128, 128, 128, 128],
                                                        [124, 143, 241, 255, 227, 234, 128, 128, 128, 128, 128],
                                                        [35, 77, 181, 251, 193, 211, 255, 205, 128, 128, 128]
                                                    ],
                                                    [
                                                        [1, 157, 247, 255, 236, 231, 255, 255, 128, 128, 128],
                                                        [121, 141, 235, 255, 225, 227, 255, 255, 128, 128, 128],
                                                        [45, 99, 188, 251, 195, 217, 255, 224, 128, 128, 128]
                                                    ],
                                                    [
                                                        [1, 1, 251, 255, 213, 255, 128, 128, 128, 128, 128],
                                                        [203, 1, 248, 255, 255, 128, 128, 128, 128, 128, 128],
                                                        [137, 1, 177, 255, 224, 255, 128, 128, 128, 128, 128]
                                                    ]
                                                ],
                                                [
                                                    [
                                                        [253, 9, 248, 251, 207, 208, 255, 192, 128, 128, 128],
                                                        [175, 13, 224, 243, 193, 185, 249, 198, 255, 255, 128],
                                                        [73, 17, 171, 221, 161, 179, 236, 167, 255, 234, 128]
                                                    ],
                                                    [
                                                        [1, 95, 247, 253, 212, 183, 255, 255, 128, 128, 128],
                                                        [239, 90, 244, 250, 211, 209, 255, 255, 128, 128, 128],
                                                        [155, 77, 195, 248, 188, 195, 255, 255, 128, 128, 128]
                                                    ],
                                                    [
                                                        [1, 24, 239, 251, 218, 219, 255, 205, 128, 128, 128],
                                                        [201, 51, 219, 255, 196, 186, 128, 128, 128, 128, 128],
                                                        [69, 46, 190, 239, 201, 218, 255, 228, 128, 128, 128]
                                                    ],
                                                    [
                                                        [1, 191, 251, 255, 255, 128, 128, 128, 128, 128, 128],
                                                        [223, 165, 249, 255, 213, 255, 128, 128, 128, 128, 128],
                                                        [141, 124, 248, 255, 255, 128, 128, 128, 128, 128, 128]
                                                    ],
                                                    [
                                                        [1, 16, 248, 255, 255, 128, 128, 128, 128, 128, 128],
                                                        [190, 36, 230, 255, 236, 255, 128, 128, 128, 128, 128],
                                                        [149, 1, 255, 128, 128, 128, 128, 128, 128, 128, 128]
                                                    ],
                                                    [
                                                        [1, 226, 255, 128, 128, 128, 128, 128, 128, 128, 128],
                                                        [247, 192, 255, 128, 128, 128, 128, 128, 128, 128, 128],
                                                        [240, 128, 255, 128, 128, 128, 128, 128, 128, 128, 128]
                                                    ],
                                                    [
                                                        [1, 134, 252, 255, 255, 128, 128, 128, 128, 128, 128],
                                                        [213, 62, 250, 255, 255, 128, 128, 128, 128, 128, 128],
                                                        [55, 93, 255, 128, 128, 128, 128, 128, 128, 128, 128]
                                                    ],
                                                    [
                                                        [128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128],
                                                        [128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128],
                                                        [128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128]
                                                    ]
                                                ],
                                                [
                                                    [
                                                        [202, 24, 213, 235, 186, 191, 220, 160, 240, 175, 255],
                                                        [126, 38, 182, 232, 169, 184, 228, 174, 255, 187, 128],
                                                        [61, 46, 138, 219, 151, 178, 240, 170, 255, 216, 128]
                                                    ],
                                                    [
                                                        [1, 112, 230, 250, 199, 191, 247, 159, 255, 255, 128],
                                                        [166, 109, 228, 252, 211, 215, 255, 174, 128, 128, 128],
                                                        [39, 77, 162, 232, 172, 180, 245, 178, 255, 255, 128]
                                                    ],
                                                    [
                                                        [1, 52, 220, 246, 198, 199, 249, 220, 255, 255, 128],
                                                        [124, 74, 191, 243, 183, 193, 250, 221, 255, 255, 128],
                                                        [24, 71, 130, 219, 154, 170, 243, 182, 255, 255, 128]
                                                    ],
                                                    [
                                                        [1, 182, 225, 249, 219, 240, 255, 224, 128, 128, 128],
                                                        [149, 150, 226, 252, 216, 205, 255, 171, 128, 128, 128],
                                                        [28, 108, 170, 242, 183, 194, 254, 223, 255, 255, 128]
                                                    ],
                                                    [
                                                        [1, 81, 230, 252, 204, 203, 255, 192, 128, 128, 128],
                                                        [123, 102, 209, 247, 188, 196, 255, 233, 128, 128, 128],
                                                        [20, 95, 153, 243, 164, 173, 255, 203, 128, 128, 128]
                                                    ],
                                                    [
                                                        [1, 222, 248, 255, 216, 213, 128, 128, 128, 128, 128],
                                                        [168, 175, 246, 252, 235, 205, 255, 255, 128, 128, 128],
                                                        [47, 116, 215, 255, 211, 212, 255, 255, 128, 128, 128]
                                                    ],
                                                    [
                                                        [1, 121, 236, 253, 212, 214, 255, 255, 128, 128, 128],
                                                        [141, 84, 213, 252, 201, 202, 255, 219, 128, 128, 128],
                                                        [42, 80, 160, 240, 162, 185, 255, 205, 128, 128, 128]
                                                    ],
                                                    [
                                                        [1, 1, 255, 128, 128, 128, 128, 128, 128, 128, 128],
                                                        [244, 1, 255, 128, 128, 128, 128, 128, 128, 128, 128],
                                                        [238, 1, 255, 128, 128, 128, 128, 128, 128, 128, 128]
                                                    ]
                                                ]
                                            ],
                                            li = [
                                                [
                                                    [231, 120, 48, 89, 115, 113, 120, 152, 112],
                                                    [152, 179, 64, 126, 170, 118, 46, 70, 95],
                                                    [175, 69, 143, 80, 85, 82, 72, 155, 103],
                                                    [56, 58, 10, 171, 218, 189, 17, 13, 152],
                                                    [114, 26, 17, 163, 44, 195, 21, 10, 173],
                                                    [121, 24, 80, 195, 26, 62, 44, 64, 85],
                                                    [144, 71, 10, 38, 171, 213, 144, 34, 26],
                                                    [170, 46, 55, 19, 136, 160, 33, 206, 71],
                                                    [63, 20, 8, 114, 114, 208, 12, 9, 226],
                                                    [81, 40, 11, 96, 182, 84, 29, 16, 36]
                                                ],
                                                [
                                                    [134, 183, 89, 137, 98, 101, 106, 165, 148],
                                                    [72, 187, 100, 130, 157, 111, 32, 75, 80],
                                                    [66, 102, 167, 99, 74, 62, 40, 234, 128]
