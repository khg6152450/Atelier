(function (t) {
    function e(e) {
        for (var a, n, r = e[0], o = e[1], u = e[2], h = 0, f = []; h < r.length; h++) n = r[h], Object.prototype.hasOwnProperty.call(i, n) && i[n] && f.push(i[n][0]), i[n] = 0;
        for (a in o) Object.prototype.hasOwnProperty.call(o, a) && (t[a] = o[a]);
        c && c(e);
        while (f.length) f.shift()();
        return s.push.apply(s, u || []), l()
    }

    function l() {
        for (var t, e = 0; e < s.length; e++) {
            for (var l = s[e], a = !0, r = 1; r < l.length; r++) {
                var o = l[r];
                0 !== i[o] && (a = !1)
            }
            a && (s.splice(e--, 1), t = n(n.s = l[0]))
        }
        return t
    }
    var a = {},
        i = {
            app: 0
        },
        s = [];

    function n(e) {
        if (a[e]) return a[e].exports;
        var l = a[e] = {
            i: e,
            l: !1,
            exports: {}
        };
        return t[e].call(l.exports, l, l.exports, n), l.l = !0, l.exports
    }
    n.m = t, n.c = a, n.d = function (t, e, l) {
        n.o(t, e) || Object.defineProperty(t, e, {
            enumerable: !0,
            get: l
        })
    }, n.r = function (t) {
        "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(t, "__esModule", {
            value: !0
        })
    }, n.t = function (t, e) {
        if (1 & e && (t = n(t)), 8 & e) return t;
        if (4 & e && "object" === typeof t && t && t.__esModule) return t;
        var l = Object.create(null);
        if (n.r(l), Object.defineProperty(l, "default", {
                enumerable: !0,
                value: t
            }), 2 & e && "string" != typeof t)
            for (var a in t) n.d(l, a, function (e) {
                return t[e]
            }.bind(null, a));
        return l
    }, n.n = function (t) {
        var e = t && t.__esModule ? function () {
            return t["default"]
        } : function () {
            return t
        };
        return n.d(e, "a", e), e
    }, n.o = function (t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }, n.p = "/";
    var r = window["webpackJsonp"] = window["webpackJsonp"] || [],
        o = r.push.bind(r);
    r.push = e, r = r.slice();
    for (var u = 0; u < r.length; u++) e(r[u]);
    var c = o;
    s.push([0, "chunk-vendors"]), l()
})({
    0: function (t, e, l) {
        t.exports = l("56d7")
    },
    "56d7": function (t, e, l) {
        "use strict";
        l.r(e);
        l("cadf"), l("551c"), l("f751"), l("097d");
        var a = l("2b0e"),
            i = function () {
                var t = this,
                    e = t.$createElement,
                    l = t._self._c || e;
                return l("iApp", [l("iButton", {
                    attrs: {
                        slot: "headerLeft"
                    },
                    slot: "headerLeft"
                }, [t._v("L")]), l("iButton", {
                    attrs: {
                        slot: "headerRight"
                    },
                    slot: "headerRight"
                }, [t._v("R")]), l("iSearchField", {
                    attrs: {
                        slot: "largeHeader",
                        width: "100%",
                        maxlength: "15"
                    },
                    slot: "largeHeader",
                    model: {
                        value: t.textValue,
                        callback: function (e) {
                            t.textValue = e
                        },
                        expression: "textValue"
                    }
                }), l("Main", {
                    attrs: {
                        slot: "main",
                        alert: t.showAlert
                    },
                    on: {
                        onAlert: t.onAlert
                    },
                    slot: "main"
                }), l("Sub", {
                    attrs: {
                        slot: "sub"
                    },
                    slot: "sub"
                }), l("iAlert", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: t.showAlert,
                        expression: "showAlert"
                    }],
                    attrs: {
                        slot: "alert",
                        title: "iAlert"
                    },
                    on: {
                        close: function (e) {
                            t.showAlert = !1
                        }
                    },
                    slot: "alert"
                }, [l("div", {
                    attrs: {
                        slot: "body"
                    },
                    slot: "body"
                }, [t._v(t._s(t.textValue))]), l("div", {
                    attrs: {
                        slot: "footer"
                    },
                    slot: "footer"
                }, [l("iButton", {
                    attrs: {
                        bold: "true"
                    },
                    on: {
                        click: function (e) {
                            t.showAlert = !1
                        }
                    }
                }, [t._v("Cancel")]), l("iButton", {
                    on: {
                        click: function (e) {
                            t.showAlert = !1
                        }
                    }
                }, [t._v("Ok")])], 1)])], 1)
            },
            s = [],
            n = l("6208"),
            r = function () {
                var t = this,
                    e = t.$createElement,
                    l = t._self._c || e;
                return l("iView", [l("iTable", {
                    attrs: {
                        title: t.tableTitle
                    }
                }, [l("iTableItem", [l("iLabel", {
                    staticClass: "left"
                }, [t._v("Switch " + t._s(t.switchValue ? "On" : "Off"))]), l("iSwitch", {
                    staticClass: "right",
                    model: {
                        value: t.switchValue,
                        callback: function (e) {
                            t.switchValue = e
                        },
                        expression: "switchValue"
                    }
                })], 1), l("iTableItem", [l("iButton", {
                    staticClass: "left",
                    on: {
                        click: function (e) {
                            t.count++
                        }
                    }
                }, [t._v("Click me")]), l("iLabel", {
                    staticClass: "right"
                }, [t._v(t._s(t.count))])], 1), l("iTableItem", [l("iLabel", {
                    staticClass: "left"
                }, [t._v(t._s(t.textValue || "No text"))])], 1), l("iTableItem", [l("iLabel", {
                    staticClass: "left"
                }, [t._v("Vue.js")])], 1), l("iTableItem", [l("iLabel", {
                    staticClass: "center"
                }, [t._v("Vue.js")])], 1), l("iTableItem", [l("iLabel", {
                    staticClass: "right"
                }, [t._v("Vue.js")])], 1), l("iTableItem", [l("iLabel", {
                    staticClass: "left"
                }, [t._v("Vue.js")]), l("iLabel", {
                    staticClass: "right"
                }, [t._v("Vue.js")])], 1), l("iTableItem", [l("iLabel", {
                    staticClass: "left"
                }, [t._v("Vue.js")]), l("iLabel", {
                    staticClass: "center"
                }, [t._v("Vue.js")]), l("iLabel", {
                    staticClass: "right"
                }, [t._v("Vue.js")])], 1)], 1), l("iTable", {
                    attrs: {
                        title: "Register"
                    }
                }, [l("iTableItem", [l("iTextField", {
                    attrs: {
                        width: "100%",
                        maxlength: "15",
                        placeholder: "Name"
                    },
                    model: {
                        value: t.idValue,
                        callback: function (e) {
                            t.idValue = e
                        },
                        expression: "idValue"
                    }
                })], 1), l("iTableItem", [l("iTextField", {
                    attrs: {
                        width: "100%",
                        maxlength: "15",
                        type: "password",
                        placeholder: "Password"
                    },
                    model: {
                        value: t.passwordValue,
                        callback: function (e) {
                            t.passwordValue = e
                        },
                        expression: "passwordValue"
                    }
                })], 1), l("iTableItem", [l("h2", [t._v("ID:" + t._s(t.idValue))])]), l("iTableItem", [l("h2", [t._v("Password: " + t._s(t.passwordValue))])])], 1)], 1)
            },
            o = [],
            u = {
                name: "app",
                props: {
                    alert: {
                        type: Boolean
                    }
                },
                data: function () {
                    return {
                        textValue: "Hello, world!",
                        tableTitle: "iTable",
                        switchValue: !1,
                        idValue: "",
                        passwordValue: "",
                        count: 0
                    }
                },
                components: {
                    iButton: n["c"],
                    iLabel: n["d"],
                    iSwitch: n["f"],
                    iTable: n["g"],
                    iTableItem: n["h"],
                    iTextField: n["i"],
                    iView: n["j"]
                },
                watch: {
                    alert: function (t) {
                        this.switchValue = t
                    },
                    switchValue: function (t) {
                        this.$emit("onAlert", t)
                    }
                },
                created: function () {
                    this.switchValue = this.alert
                }
            },
            c = u,
            h = l("2877"),
            f = Object(h["a"])(c, r, o, !1, null, null, null),
            d = f.exports,
            b = function () {
                var t = this,
                    e = t.$createElement,
                    l = t._self._c || e;
                return l("iView", [l("iTable", {
                    attrs: {
                        title: "Sub"
                    }
                }, [l("iTableItem", [l("iLabel", {
                    staticClass: "left"
                }, [t._v("Switch " + t._s(t.switchValue ? "On" : "Off"))]), l("iSwitch", {
                    staticClass: "right",
                    model: {
                        value: t.switchValue,
                        callback: function (e) {
                            t.switchValue = e
                        },
                        expression: "switchValue"
                    }
                })], 1)], 1)], 1)
            },
            p = [],
            w = {
                name: "app",
                data: function () {
                    return {
                        switchValue: !1
                    }
                },
                components: {
                    iLabel: n["d"],
                    iSwitch: n["f"],
                    iTable: n["g"],
                    iTableItem: n["h"],
                    iView: n["j"]
                }
            },
            v = w,
            m = Object(h["a"])(v, b, p, !1, null, null, null),
            V = m.exports,
            _ = {
                name: "app",
                components: {
                    iApp: n["b"],
                    iAlert: n["a"],
                    iButton: n["c"],
                    iSearchField: n["e"],
                    Main: d,
                    Sub: V
                },
                data: function () {
                    return {
                        textValue: "Alert body",
                        showAlert: !1
                    }
                },
                created: function () {
                    console.log(n["b"])
                },
                methods: {
                    onAlert: function (t) {
                        this.showAlert = t
                    }
                }
            },
            g = _,
            x = Object(h["a"])(g, i, s, !1, null, null, null),
            T = x.exports;
        a["a"].config.productionTip = !1, new a["a"]({
            render: function (t) {
                return t(T)
            }
        }).$mount("#app")
    }
});
//# sourceMappingURL=app.4381544f.js.map
