(this["images-to-pdfconverter-by-techno-sahil"] = this["images-to-pdfconverter-by-techno-sahil"] || []).push([
    [0], {
        20: function(e, t, i) {},
        21: function(e, t, i) {},
        22: function(e, t, i) {
            "use strict";
            i.r(t);
            var n = i(0),
                a = i(1),
                c = i.n(a),
                r = i(6),
                s = i.n(r),
                o = (i(20), i(11)),
                h = i(7),
                l = i(8),
                u = i(9),
                d = i(10),
                m = i(12),
                g = i(13),
                b = function(e) {
                    Object(d.a)(i, e);
                    var t = Object(m.a)(i);

                    function i(e) {
                        var n;
                        return Object(l.a)(this, i), (n = t.call(this)).mimeType = e, n
                    }
                    return Object(u.a)(i, [{
                        key: "imageType",
                        get: function() {
                            return this.mimeType.split("/")[1]
                        }
                    }]), i
                }(Object(g.a)(Image)),
                p = 210,
                f = 297,
                j = p / f,
                w = function(e) {
                    return new Promise((function(t, i) {
                        var n = new b(e.type);
                        n.onload = function() {
                            t(n)
                        }, n.onerror = function() {
                            i(new Error("Failed to convert File to Image"))
                        }, n.src = URL.createObjectURL(e)
                    }))
                },
                O = function(e) {
                    var t = new h.a;
                    t.deletePage(1), e.forEach((function(e) {
                        var i = function(e) {
                            if (e.width >= e.height) return {
                                width: p,
                                height: p / (e.width / e.height)
                            };
                            var t = e.width / e.height;
                            if (t > j) {
                                var i = j * e.height / e.width,
                                    n = f * i;
                                return {
                                    height: n,
                                    width: n * t
                                }
                            }
                            return {
                                width: f / (e.height / e.width),
                                height: f
                            }
                        }({
                            width: e.width,
                            height: e.height
                        });
                        t.addPage(), t.addImage(e.src, e.imageType, (p - i.width) / 2, (f - i.height) / 2, i.width, i.height)
                    }));
                    var i = t.output("bloburl");
                    window.open(i, "_blank")
                };
            i(21);
            var v = function() {
                var e = c.a.useState([]),
                    t = Object(o.a)(e, 2),
                    i = t[0],
                    a = t[1],
                    r = c.a.useCallback((function(e) {
                        var t = e.target.files,
                            i = (t ? Array.from(t) : []).map(w);
                        Promise.all(i).then(a)
                    }), [a]),
                    s = c.a.useCallback((function() {
                        a([]), i.forEach((function(e) {
                            URL.revokeObjectURL(e.src)
                        }))
                    }), [a, i]),
                    h = c.a.useCallback((function() {
                        O(i), s()
                    }), [i, s]);
                return Object(n.jsxs)(n.Fragment, {
                    children: [Object(n.jsx)("h1", {
                        children: "Convert images to PDFs"
                    }), Object(n.jsx)("div", {
                        className: "images-container",
                        children: i.length > 0 ? i.map((function(e) {
                            return Object(n.jsx)("img", {
                                src: e.src,
                                className: "uploaded-image"
                            }, e.src)
                        })) : Object(n.jsx)("p", {
                            children: "Upload some images..."
                        })
                    }), Object(n.jsxs)("div", {
                        className: "buttons-container",
                        children: [Object(n.jsxs)("label", {
                            htmlFor: "file-input",
                            children: [Object(n.jsx)("span", {
                                className: "button",
                                children: "Upload images"
                            }), Object(n.jsx)("input", {
                                id: "file-input",
                                type: "file",
                                accept: "image/*",
                                onChange: r,
                                style: {
                                    display: "none"
                                },
                                multiple: !0
                            })]
                        }), Object(n.jsx)("button", {
                            onClick: h,
                            className: "button",
                            disabled: 0 === i.length,
                            children: "Generate PDF"
                        })]
                    })]
                })
            };
            s.a.render(Object(n.jsx)(c.a.StrictMode, {
                children: Object(n.jsx)(v, {})
            }), document.getElementById("root"))
        }
    },
    [
        [22, 1, 3]
    ]
]);
//# sourceMappingURL=main.44914f55.chunk.js.map
