!(function (e, t) {
    "object" == typeof exports && "object" == typeof module
        ? (module.exports = t(require("jquery")))
        : "function" == typeof define && define.amd
        ? define(["jquery"], t)
        : "object" == typeof exports
        ? (exports.autonumeric = t(require("jquery")))
        : (e.autonumeric = t(e.jQuery));
})(this, function (e) {
    return (function (e) {
        function t(i) {
            if (a[i]) return a[i].exports;
            var r = (a[i] = { exports: {}, id: i, loaded: !1 });
            return (
                e[i].call(r.exports, r, r.exports, t),
                (r.loaded = !0),
                r.exports
            );
        }
        var a = {};
        return (t.m = e), (t.c = a), (t.p = ""), t(0);
    })([
        function (e, t, a) {
            var i, r, n;
            a(1), a(1);
            (function () {
                "use strict";
                function o(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError(
                            "Cannot call a class as a function"
                        );
                }
                Object.defineProperty(t, "__esModule", { value: !0 });
                var l = (function () {
                        function e(e, t) {
                            for (var a = 0; a < t.length; a++) {
                                var i = t[a];
                                (i.enumerable = i.enumerable || !1),
                                    (i.configurable = !0),
                                    "value" in i && (i.writable = !0),
                                    Object.defineProperty(e, i.key, i);
                            }
                        }
                        return function (t, a, i) {
                            return a && e(t.prototype, a), i && e(t, i), t;
                        };
                    })(),
                    s = (function () {
                        function e(e, t) {
                            var a = [],
                                i = !0,
                                r = !1,
                                n = void 0;
                            try {
                                for (
                                    var o, l = e[Symbol.iterator]();
                                    !(i = (o = l.next()).done) &&
                                    (a.push(o.value), !t || a.length !== t);
                                    i = !0
                                );
                            } catch (e) {
                                (r = !0), (n = e);
                            } finally {
                                try {
                                    !i && l.return && l.return();
                                } finally {
                                    if (r) throw n;
                                }
                            }
                            return a;
                        }
                        return function (t, a) {
                            if (Array.isArray(t)) return t;
                            if (Symbol.iterator in Object(t)) return e(t, a);
                            throw new TypeError(
                                "Invalid attempt to destructure non-iterable instance"
                            );
                        };
                    })(),
                    c =
                        "function" == typeof Symbol &&
                        "symbol" == typeof Symbol.iterator
                            ? function (e) {
                                  return typeof e;
                              }
                            : function (e) {
                                  return e &&
                                      "function" == typeof Symbol &&
                                      e.constructor === Symbol &&
                                      e !== Symbol.prototype
                                      ? "symbol"
                                      : typeof e;
                              },
                    u = void 0,
                    d = void 0,
                    m = void 0,
                    h = void 0,
                    g = void 0,
                    v = void 0,
                    p = [
                        "b",
                        "caption",
                        "cite",
                        "code",
                        "const",
                        "dd",
                        "del",
                        "div",
                        "dfn",
                        "dt",
                        "em",
                        "h1",
                        "h2",
                        "h3",
                        "h4",
                        "h5",
                        "h6",
                        "ins",
                        "kdb",
                        "label",
                        "li",
                        "option",
                        "output",
                        "p",
                        "q",
                        "s",
                        "sample",
                        "span",
                        "strong",
                        "td",
                        "th",
                        "u",
                    ],
                    f = {
                        digitGroupSeparator: ",",
                        noSeparatorOnFocus: !1,
                        digitalGroupSpacing: "3",
                        decimalCharacter: ".",
                        decimalCharacterAlternative: null,
                        currencySymbol: "",
                        currencySymbolPlacement: "p",
                        negativePositiveSignPlacement: null,
                        showPositiveSign: !1,
                        suffixText: "",
                        overrideMinMaxLimits: null,
                        maximumValue: "9999999999999.99",
                        minimumValue: "-9999999999999.99",
                        decimalPlacesOverride: null,
                        decimalPlacesShownOnFocus: null,
                        scaleDivisor: null,
                        scaleDecimalPlaces: null,
                        scaleSymbol: null,
                        saveValueToSessionStorage: !1,
                        onInvalidPaste: "error",
                        roundingMethod: "S",
                        allowDecimalPadding: !0,
                        negativeBracketsTypeOnBlur: null,
                        emptyInputBehavior: "focus",
                        leadingZero: "deny",
                        formatOnPageLoad: !0,
                        selectNumberOnly: !1,
                        defaultValueOverride: null,
                        unformatOnSubmit: !1,
                        outputFormat: null,
                        showWarnings: !0,
                        failOnUnknownOption: !1,
                    },
                    y = {
                        Backspace: 8,
                        Tab: 9,
                        Enter: 13,
                        Shift: 16,
                        Ctrl: 17,
                        Alt: 18,
                        PauseBreak: 19,
                        CapsLock: 20,
                        Esc: 27,
                        Space: 32,
                        PageUp: 33,
                        PageDown: 34,
                        End: 35,
                        Home: 36,
                        LeftArrow: 37,
                        UpArrow: 38,
                        RightArrow: 39,
                        DownArrow: 40,
                        Insert: 45,
                        Delete: 46,
                        num0: 48,
                        num1: 49,
                        num2: 50,
                        num3: 51,
                        num4: 52,
                        num5: 53,
                        num6: 54,
                        num7: 55,
                        num8: 56,
                        num9: 57,
                        a: 65,
                        b: 66,
                        c: 67,
                        d: 68,
                        e: 69,
                        f: 70,
                        g: 71,
                        h: 72,
                        i: 73,
                        j: 74,
                        k: 75,
                        l: 76,
                        m: 77,
                        n: 78,
                        o: 79,
                        p: 80,
                        q: 81,
                        r: 82,
                        s: 83,
                        t: 84,
                        u: 85,
                        v: 86,
                        w: 87,
                        x: 88,
                        y: 89,
                        z: 90,
                        Windows: 91,
                        RightClick: 93,
                        numpad0: 96,
                        numpad1: 97,
                        numpad2: 98,
                        numpad3: 99,
                        numpad4: 100,
                        numpad5: 101,
                        numpad6: 102,
                        numpad7: 103,
                        numpad8: 104,
                        numpad9: 105,
                        MultiplyNumpad: 106,
                        PlusNumpad: 107,
                        MinusNumpad: 109,
                        DotNumpad: 110,
                        SlashNumpad: 111,
                        F1: 112,
                        F2: 113,
                        F3: 114,
                        F4: 115,
                        F5: 116,
                        F6: 117,
                        F7: 118,
                        F8: 119,
                        F9: 120,
                        F10: 121,
                        F11: 122,
                        F12: 123,
                        NumLock: 144,
                        ScrollLock: 145,
                        MyComputer: 182,
                        MyCalculator: 183,
                        Semicolon: 186,
                        Equal: 187,
                        Comma: 188,
                        Hyphen: 189,
                        Dot: 190,
                        Slash: 191,
                        Backquote: 192,
                        LeftBracket: 219,
                        Backslash: 220,
                        RightBracket: 221,
                        Quote: 222,
                        Command: 224,
                    },
                    S = {
                        Unidentified: "Unidentified",
                        Alt: "Alt",
                        AltGr: "AltGraph",
                        CapsLock: "CapsLock",
                        Ctrl: "Control",
                        Fn: "Fn",
                        FnLock: "FnLock",
                        Hyper: "Hyper",
                        Meta: "Meta",
                        Windows: "Meta",
                        Command: "Meta",
                        NumLock: "NumLock",
                        ScrollLock: "ScrollLock",
                        Shift: "Shift",
                        Super: "Super",
                        Symbol: "Symbol",
                        SymbolLock: "SymbolLock",
                        Enter: "Enter",
                        Tab: "Tab",
                        Space: " ",
                        DownArrow: "ArrowDown",
                        LeftArrow: "ArrowLeft",
                        RightArrow: "ArrowRight",
                        UpArrow: "ArrowUp",
                        End: "End",
                        Home: "Home",
                        PageDown: "PageDown",
                        PageUp: "PageUp",
                        Backspace: "Backspace",
                        Clear: "Clear",
                        Copy: "Copy",
                        CrSel: "CrSel",
                        Cut: "Cut",
                        Delete: "Delete",
                        EraseEof: "EraseEof",
                        ExSel: "ExSel",
                        Insert: "Insert",
                        Paste: "Paste",
                        Redo: "Redo",
                        Undo: "Undo",
                        Accept: "Accept",
                        Again: "Again",
                        Attn: "Attn",
                        Cancel: "Cancel",
                        ContextMenu: "ContextMenu",
                        Esc: "Escape",
                        Execute: "Execute",
                        Find: "Find",
                        Finish: "Finish",
                        Help: "Help",
                        Pause: "Pause",
                        Play: "Play",
                        Props: "Props",
                        Select: "Select",
                        ZoomIn: "ZoomIn",
                        ZoomOut: "ZoomOut",
                        BrightnessDown: "BrightnessDown",
                        BrightnessUp: "BrightnessUp",
                        Eject: "Eject",
                        LogOff: "LogOff",
                        Power: "Power",
                        PowerOff: "PowerOff",
                        PrintScreen: "PrintScreen",
                        Hibernate: "Hibernate",
                        Standby: "Standby",
                        WakeUp: "WakeUp",
                        Compose: "Compose",
                        Dead: "Dead",
                        F1: "F1",
                        F2: "F2",
                        F3: "F3",
                        F4: "F4",
                        F5: "F5",
                        F6: "F6",
                        F7: "F7",
                        F8: "F8",
                        F9: "F9",
                        F10: "F10",
                        F11: "F11",
                        F12: "F12",
                        Print: "Print",
                        num0: "0",
                        num1: "1",
                        num2: "2",
                        num3: "3",
                        num4: "4",
                        num5: "5",
                        num6: "6",
                        num7: "7",
                        num8: "8",
                        num9: "9",
                        numpad0: "0",
                        numpad1: "1",
                        numpad2: "2",
                        numpad3: "3",
                        numpad4: "4",
                        numpad5: "5",
                        numpad6: "6",
                        numpad7: "7",
                        numpad8: "8",
                        numpad9: "9",
                        a: "a",
                        b: "b",
                        c: "c",
                        d: "d",
                        e: "e",
                        f: "f",
                        g: "g",
                        h: "h",
                        i: "i",
                        j: "j",
                        k: "k",
                        l: "l",
                        m: "m",
                        n: "n",
                        o: "o",
                        p: "p",
                        q: "q",
                        r: "r",
                        s: "s",
                        t: "t",
                        u: "u",
                        v: "v",
                        w: "w",
                        x: "x",
                        y: "y",
                        z: "z",
                        MultiplyNumpad: "*",
                        PlusNumpad: "+",
                        MinusNumpad: "-",
                        DotNumpad: ".",
                        SlashNumpad: "/",
                        Semicolon: ";",
                        Equal: "=",
                        Comma: ",",
                        Hyphen: "-",
                        Minus: "-",
                        Plus: "+",
                        Dot: ".",
                        Slash: "/",
                        Backquote: "`",
                        LeftBracket: "[",
                        RightBracket: "]",
                        Backslash: "\\",
                        Quote: "'",
                    },
                    b = "-999999999999.99",
                    P = "999999999999.99",
                    C = "U",
                    w = "deny",
                    x = !0,
                    O = {
                        French: {
                            digitGroupSeparator: ".",
                            decimalCharacter: ",",
                            decimalCharacterAlternative: ".",
                            currencySymbol: " €",
                            currencySymbolPlacement: "s",
                            selectNumberOnly: x,
                            roundingMethod: C,
                            leadingZero: w,
                            minimumValue: b,
                            maximumValue: P,
                        },
                        NorthAmerican: {
                            digitGroupSeparator: ",",
                            decimalCharacter: ".",
                            currencySymbol: "$",
                            currencySymbolPlacement: "p",
                            selectNumberOnly: x,
                            roundingMethod: C,
                            leadingZero: w,
                            minimumValue: b,
                            maximumValue: P,
                        },
                        British: {
                            digitGroupSeparator: ",",
                            decimalCharacter: ".",
                            currencySymbol: "£",
                            currencySymbolPlacement: "p",
                            selectNumberOnly: x,
                            roundingMethod: C,
                            leadingZero: w,
                            minimumValue: b,
                            maximumValue: P,
                        },
                        Swiss: {
                            digitGroupSeparator: "'",
                            decimalCharacter: ".",
                            currencySymbol: " CHF",
                            currencySymbolPlacement: "s",
                            selectNumberOnly: x,
                            roundingMethod: C,
                            leadingZero: w,
                            minimumValue: b,
                            maximumValue: P,
                        },
                        Japanese: {
                            digitGroupSeparator: ",",
                            decimalCharacter: ".",
                            currencySymbol: "¥",
                            currencySymbolPlacement: "p",
                            selectNumberOnly: x,
                            roundingMethod: C,
                            leadingZero: w,
                            minimumValue: b,
                            maximumValue: P,
                        },
                    };
                (O.Spanish = O.French),
                    (O.Chinese = O.Japanese),
                    (function (o) {
                        (r = [a(1)]),
                            (i = o),
                            (n = "function" == typeof i ? i.apply(t, r) : i),
                            !(void 0 !== n && (e.exports = n));
                    })(function (e) {
                        function t(e) {
                            return null === e;
                        }
                        function a(e) {
                            return void 0 === e;
                        }
                        function i(e) {
                            return null === e || void 0 === e || "" === e;
                        }
                        function r(e) {
                            return "string" == typeof e || e instanceof String;
                        }
                        function n(e) {
                            return "boolean" == typeof e;
                        }
                        function b(e) {
                            var t = String(e).toLowerCase();
                            return "true" === t || "false" === t;
                        }
                        function P(e) {
                            return (
                                "object" ===
                                    ("undefined" == typeof e
                                        ? "undefined"
                                        : c(e)) &&
                                null !== e &&
                                !Array.isArray(e)
                            );
                        }
                        function C(e) {
                            for (var t in e) if (e.hasOwnProperty(t)) return !1;
                            return !0;
                        }
                        function w(e) {
                            return (
                                !F(e) && !isNaN(parseFloat(e)) && isFinite(e)
                            );
                        }
                        function x(e) {
                            return (
                                "number" == typeof e &&
                                parseFloat(e) === parseInt(e, 10) &&
                                !isNaN(e)
                            );
                        }
                        function N(e, t) {
                            return Q(e, t.settingsClone, !0).replace(
                                t.settingsClone.decimalCharacter,
                                "."
                            );
                        }
                        function k(e, t) {
                            return (
                                !(!r(e) || !r(t) || "" === e || "" === t) &&
                                e.indexOf(t) !== -1
                            );
                        }
                        function V(e, t) {
                            return (
                                !(!F(t) || t === [] || a(e)) &&
                                t.indexOf(e) !== -1
                            );
                        }
                        function F(e) {
                            if (
                                "[object Array]" ===
                                Object.prototype.toString.call([])
                            )
                                return (
                                    Array.isArray(e) ||
                                    ("object" ===
                                        ("undefined" == typeof e
                                            ? "undefined"
                                            : c(e)) &&
                                        "[object Array]" ===
                                            Object.prototype.toString.call(e))
                                );
                            throw new Error(
                                "toString message changed for Object Array"
                            );
                        }
                        function A(e) {
                            var t = e.split("."),
                                i = s(t, 2),
                                r = i[1];
                            return a(r) ? 0 : r.length;
                        }
                        function T(e) {
                            return "undefined" == typeof e.which
                                ? e.keyCode
                                : e.which;
                        }
                        function D(e) {
                            return "undefined" == typeof e.key ||
                                "Unidentified" === e.key
                                ? String.fromCharCode(T(e))
                                : e.key;
                        }
                        function B(e, t, a) {
                            var i = le(e);
                            return se(t, i) > -1 && se(a, i) < 1;
                        }
                        function L(e) {
                            var t =
                                !(
                                    arguments.length > 1 &&
                                    void 0 !== arguments[1]
                                ) || arguments[1];
                            return t ? k(e, "-") : M(e);
                        }
                        function M(e) {
                            return "-" === e.charAt(0);
                        }
                        function E(e) {
                            return !/[1-9]/g.test(e);
                        }
                        function I(e) {
                            return M(e) ? e : "-" + e;
                        }
                        function _(e, t, a) {
                            return (
                                "" + e.substr(0, t) + a + e.substr(t + a.length)
                            );
                        }
                        function K(e, t) {
                            return Math.max(
                                t.minimumValue,
                                Math.min(t.maximumValue, e)
                            );
                        }
                        function R(e, t, a) {
                            for (
                                var i = new RegExp("[0-9" + a + "-]"),
                                    r = 0,
                                    n = 0;
                                n < t;
                                n++
                            )
                                i.test(e[n]) && r++;
                            return r;
                        }
                        function U(e, t, a, i) {
                            var r = a.length,
                                n = e.length,
                                o = void 0,
                                l = 0;
                            for (o = 0; o < r && l < n && l < t; o++)
                                (e[l] === a[o] ||
                                    ("." === e[l] && a[o] === i)) &&
                                    l++;
                            return o;
                        }
                        function j(e, t) {
                            for (var a = 0, i = 0; i < t.length; i++)
                                t[i] === e && a++;
                            return a;
                        }
                        function G(e) {
                            return Math.max(e, e - 1);
                        }
                        function $(e) {
                            var t = {};
                            if (a(e.selectionStart)) {
                                e.focus();
                                var i = document.selection.createRange();
                                (t.length = i.text.length),
                                    i.moveStart("character", -e.value.length),
                                    (t.end = i.text.length),
                                    (t.start = t.end - t.length);
                            } else (t.start = e.selectionStart), (t.end = e.selectionEnd), (t.length = t.end - t.start);
                            return t;
                        }
                        function Z(e, t) {
                            var r =
                                arguments.length > 2 && void 0 !== arguments[2]
                                    ? arguments[2]
                                    : null;
                            if ((i(r) && (r = t), a(e.selectionStart))) {
                                e.focus();
                                var n = e.createTextRange();
                                n.collapse(!0),
                                    n.moveEnd("character", r),
                                    n.moveStart("character", t),
                                    n.select();
                            } else (e.selectionStart = t), (e.selectionEnd = r);
                        }
                        function z(e) {
                            throw new Error(e);
                        }
                        function H(e) {
                            var t =
                                !(
                                    arguments.length > 1 &&
                                    void 0 !== arguments[1]
                                ) || arguments[1];
                            t && console.warn("Warning: " + e);
                        }
                        function q(t, a) {
                            e.each(a, function (e, i) {
                                "function" == typeof i
                                    ? (a[e] = i(t, a, e))
                                    : "function" == typeof t.autoNumeric[i] &&
                                      (a[e] = t.autoNumeric[i](t, a, e));
                            });
                        }
                        function W(e, t) {
                            return Math.max(A(e), A(t));
                        }
                        function Q(e, t, i) {
                            if (
                                ("" !== t.currencySymbol &&
                                    (e = e.replace(t.currencySymbol, "")),
                                t.suffixText)
                            )
                                for (; k(e, t.suffixText); )
                                    e = e.replace(t.suffixText, "");
                            (e = e.replace(t.skipFirstAutoStrip, "$1$2")),
                                ("s" === t.negativePositiveSignPlacement ||
                                    ("s" === t.currencySymbolPlacement &&
                                        "p" !==
                                            t.negativePositiveSignPlacement)) &&
                                    L(e) &&
                                    "" !== e &&
                                    (t.trailingNegative = !0),
                                (e = e.replace(t.skipLastAutoStrip, "$1")),
                                (e = e.replace(t.allowedAutoStrip, "")),
                                t.decimalCharacterAlternative &&
                                    (e = e.replace(
                                        t.decimalCharacterAlternative,
                                        t.decimalCharacter
                                    ));
                            var r = e.match(t.numRegAutoStrip);
                            if (
                                ((e = r ? [r[1], r[2], r[3]].join("") : ""),
                                "allow" === t.leadingZero ||
                                    "keep" === t.leadingZero)
                            ) {
                                var n = "",
                                    o = e.split(t.decimalCharacter),
                                    l = s(o, 2),
                                    c = l[0],
                                    u = l[1],
                                    d = c;
                                k(d, t.negativeSignCharacter) &&
                                    ((n = t.negativeSignCharacter),
                                    (d = d.replace(
                                        t.negativeSignCharacter,
                                        ""
                                    ))),
                                    "" === n &&
                                        d.length > t.mIntPos &&
                                        "0" === d.charAt(0) &&
                                        (d = d.slice(1)),
                                    "" !== n &&
                                        d.length > t.mIntNeg &&
                                        "0" === d.charAt(0) &&
                                        (d = d.slice(1)),
                                    (e =
                                        "" +
                                        n +
                                        d +
                                        (a(u) ? "" : t.decimalCharacter + u));
                            }
                            return (
                                ((i && "deny" === t.leadingZero) ||
                                    (!t.hasFocus &&
                                        "allow" === t.leadingZero)) &&
                                    (e = e.replace(t.stripReg, "$1$2")),
                                e
                            );
                        }
                        function J(e, t) {
                            if (
                                ("p" === t.currencySymbolPlacement &&
                                    "l" === t.negativePositiveSignPlacement) ||
                                ("s" === t.currencySymbolPlacement &&
                                    "p" === t.negativePositiveSignPlacement)
                            ) {
                                var a = t.negativeBracketsTypeOnBlur.split(","),
                                    i = s(a, 2),
                                    r = i[0],
                                    n = i[1];
                                t.hasFocus
                                    ? t.hasFocus &&
                                      e.charAt(0) === r &&
                                      ((e = e.replace(
                                          r,
                                          t.negativeSignCharacter
                                      )),
                                      (e = e.replace(n, "")))
                                    : ((e = e.replace(
                                          t.negativeSignCharacter,
                                          ""
                                      )),
                                      (e = r + e + n));
                            }
                            return e;
                        }
                        function Y(e, t) {
                            (e = e.replace(t.currencySymbol, "")),
                                (e = e.replace(t.digitGroupSeparator, "")),
                                "." !== t.decimalCharacter &&
                                    (e = e.replace(t.decimalCharacter, ".")),
                                L(e) &&
                                    e.lastIndexOf("-") === e.length - 1 &&
                                    ((e = e.replace("-", "")), (e = "-" + e));
                            var a = _e(e, !0, !1, !1);
                            return isNaN(a) || (e = a.toString()), e;
                        }
                        function X(e, a) {
                            if (t(a) || "string" === a) return e;
                            var i = void 0;
                            switch (a) {
                                case "number":
                                    i = Number(e);
                                    break;
                                case ".-":
                                    i = L(e) ? e.replace("-", "") + "-" : e;
                                    break;
                                case ",":
                                case "-,":
                                    i = e.replace(".", ",");
                                    break;
                                case ",-":
                                    (i = e.replace(".", ",")),
                                        (i = L(i)
                                            ? i.replace("-", "") + "-"
                                            : i);
                                    break;
                                case ".":
                                case "-.":
                                    i = e;
                                    break;
                                default:
                                    z(
                                        "The given outputFormat [" +
                                            a +
                                            "] option is not recognized."
                                    );
                            }
                            return i;
                        }
                        function ee(e, t) {
                            return (
                                "." !== t.decimalCharacter &&
                                    (e = e.replace(t.decimalCharacter, ".")),
                                "-" !== t.negativeSignCharacter &&
                                    "" !== t.negativeSignCharacter &&
                                    (e = e.replace(
                                        t.negativeSignCharacter,
                                        "-"
                                    )),
                                e.match(/\d/) || (e += "0"),
                                e
                            );
                        }
                        function te(e, t) {
                            return (
                                "-" !== t.negativeSignCharacter &&
                                    "" !== t.negativeSignCharacter &&
                                    (e = e.replace(
                                        "-",
                                        t.negativeSignCharacter
                                    )),
                                "." !== t.decimalCharacter &&
                                    (e = e.replace(".", t.decimalCharacter)),
                                e
                            );
                        }
                        function ae(e, t, a) {
                            return "" === e || e === t.negativeSignCharacter
                                ? "always" === t.emptyInputBehavior || a
                                    ? "l" === t.negativePositiveSignPlacement
                                        ? e + t.currencySymbol + t.suffixText
                                        : t.currencySymbol + e + t.suffixText
                                    : e
                                : null;
                        }
                        function ie(e, i) {
                            i.strip && (e = Q(e, i, !1)),
                                i.trailingNegative && !L(e) && (e = "-" + e);
                            var r = ae(e, i, !0),
                                n = L(e),
                                o = E(e);
                            if ((n && (e = e.replace("-", "")), !t(r)))
                                return r;
                            i.digitalGroupSpacing =
                                i.digitalGroupSpacing.toString();
                            var l = void 0;
                            switch (i.digitalGroupSpacing) {
                                case "2":
                                    l = /(\d)((\d)(\d{2}?)+)$/;
                                    break;
                                case "2s":
                                    l =
                                        /(\d)((?:\d{2}){0,2}\d{3}(?:(?:\d{2}){2}\d{3})*?)$/;
                                    break;
                                case "4":
                                    l = /(\d)((\d{4}?)+)$/;
                                    break;
                                default:
                                    l = /(\d)((\d{3}?)+)$/;
                            }
                            var c = e.split(i.decimalCharacter),
                                u = s(c, 2),
                                d = u[0],
                                m = u[1];
                            if (i.decimalCharacterAlternative && a(m)) {
                                var h = e.split(i.decimalCharacterAlternative),
                                    g = s(h, 2);
                                (d = g[0]), (m = g[1]);
                            }
                            if ("" !== i.digitGroupSeparator)
                                for (; l.test(d); )
                                    d = d.replace(
                                        l,
                                        "$1" + i.digitGroupSeparator + "$2"
                                    );
                            if (
                                (0 === i.decimalPlacesOverride || a(m)
                                    ? (e = d)
                                    : (m.length > i.decimalPlacesOverride &&
                                          (m = m.substring(
                                              0,
                                              i.decimalPlacesOverride
                                          )),
                                      (e = d + i.decimalCharacter + m)),
                                (i.trailingNegative = !1),
                                "p" === i.currencySymbolPlacement)
                            )
                                if (n)
                                    switch (i.negativePositiveSignPlacement) {
                                        case "l":
                                            e =
                                                "" +
                                                i.negativeSignCharacter +
                                                i.currencySymbol +
                                                e;
                                            break;
                                        case "r":
                                            e =
                                                "" +
                                                i.currencySymbol +
                                                i.negativeSignCharacter +
                                                e;
                                            break;
                                        case "s":
                                            (e =
                                                "" +
                                                i.currencySymbol +
                                                e +
                                                i.negativeSignCharacter),
                                                (i.trailingNegative = !0);
                                    }
                                else if (i.showPositiveSign && !o)
                                    switch (i.negativePositiveSignPlacement) {
                                        case "l":
                                            e =
                                                "" +
                                                i.positiveSignCharacter +
                                                i.currencySymbol +
                                                e;
                                            break;
                                        case "r":
                                            e =
                                                "" +
                                                i.currencySymbol +
                                                i.positiveSignCharacter +
                                                e;
                                            break;
                                        case "s":
                                            e =
                                                "" +
                                                i.currencySymbol +
                                                e +
                                                i.positiveSignCharacter;
                                    }
                                else e = i.currencySymbol + e;
                            if ("s" === i.currencySymbolPlacement)
                                if (n)
                                    switch (i.negativePositiveSignPlacement) {
                                        case "r":
                                            (e =
                                                "" +
                                                e +
                                                i.currencySymbol +
                                                i.negativeSignCharacter),
                                                (i.trailingNegative = !0);
                                            break;
                                        case "l":
                                            (e =
                                                "" +
                                                e +
                                                i.negativeSignCharacter +
                                                i.currencySymbol),
                                                (i.trailingNegative = !0);
                                            break;
                                        case "p":
                                            e =
                                                "" +
                                                i.negativeSignCharacter +
                                                e +
                                                i.currencySymbol;
                                    }
                                else if (i.showPositiveSign && !o)
                                    switch (i.negativePositiveSignPlacement) {
                                        case "r":
                                            e =
                                                "" +
                                                e +
                                                i.currencySymbol +
                                                i.positiveSignCharacter;
                                            break;
                                        case "l":
                                            e =
                                                "" +
                                                e +
                                                i.positiveSignCharacter +
                                                i.currencySymbol;
                                            break;
                                        case "p":
                                            e =
                                                "" +
                                                i.positiveSignCharacter +
                                                e +
                                                i.currencySymbol;
                                    }
                                else e += i.currencySymbol;
                            return (
                                null !== i.negativeBracketsTypeOnBlur &&
                                    (i.rawValue < 0 || M(e)) &&
                                    (e = J(e, i)),
                                e + i.suffixText
                            );
                        }
                        function re(e, t) {
                            var a = void 0;
                            switch (t) {
                                case 0:
                                    a = /(\.(?:\d*[1-9])?)0*$/;
                                    break;
                                case 1:
                                    a = /(\.\d(?:\d*[1-9])?)0*$/;
                                    break;
                                default:
                                    a = new RegExp(
                                        "(\\.\\d{" + t + "}(?:\\d*[1-9])?)0*"
                                    );
                            }
                            return (
                                (e = e.replace(a, "$1")),
                                0 === t && (e = e.replace(/\.$/, "")),
                                e
                            );
                        }
                        function ne(e, t) {
                            if (
                                ((e = "" === e ? "0" : e.toString()),
                                "N05" === t.roundingMethod ||
                                    "CHF" === t.roundingMethod ||
                                    "U05" === t.roundingMethod ||
                                    "D05" === t.roundingMethod)
                            ) {
                                switch (t.roundingMethod) {
                                    case "N05":
                                        e = (
                                            Math.round(20 * e) / 20
                                        ).toString();
                                        break;
                                    case "U05":
                                        e = (Math.ceil(20 * e) / 20).toString();
                                        break;
                                    default:
                                        e = (
                                            Math.floor(20 * e) / 20
                                        ).toString();
                                }
                                var a = void 0;
                                return (a = k(e, ".")
                                    ? e.length - e.indexOf(".") < 3
                                        ? e + "0"
                                        : e
                                    : e + ".00");
                            }
                            var i = "",
                                r = 0,
                                n = "",
                                o = void 0;
                            (o = t.allowDecimalPadding
                                ? t.decimalPlacesOverride
                                : 0),
                                M(e) && ((n = "-"), (e = e.replace("-", ""))),
                                e.match(/^\d/) || (e = "0" + e),
                                0 === Number(e) && (n = ""),
                                ((Number(e) > 0 && "keep" !== t.leadingZero) ||
                                    (e.length > 0 &&
                                        "allow" === t.leadingZero)) &&
                                    (e = e.replace(/^0*(\d)/, "$1"));
                            var l = e.lastIndexOf("."),
                                s = l === -1,
                                c = s ? e.length - 1 : l,
                                u = e.length - 1 - c;
                            if (u <= t.decimalPlacesOverride) {
                                if (((i = e), u < o)) {
                                    s && (i += t.decimalCharacter);
                                    for (var d = "000000"; u < o; )
                                        (d = d.substring(0, o - u)),
                                            (i += d),
                                            (u += d.length);
                                } else
                                    u > o
                                        ? (i = re(i, o))
                                        : 0 === u &&
                                          0 === o &&
                                          (i = i.replace(/\.$/, ""));
                                return 0 === Number(i) ? i : n + i;
                            }
                            var m = void 0;
                            m = s
                                ? t.decimalPlacesOverride - 1
                                : t.decimalPlacesOverride + l;
                            var h = Number(e.charAt(m + 1)),
                                g =
                                    "." === e.charAt(m)
                                        ? e.charAt(m - 1) % 2
                                        : e.charAt(m) % 2,
                                v = e.substring(0, m + 1).split("");
                            if (
                                (h > 4 && "S" === t.roundingMethod) ||
                                (h > 4 &&
                                    "A" === t.roundingMethod &&
                                    "" === n) ||
                                (h > 5 &&
                                    "A" === t.roundingMethod &&
                                    "-" === n) ||
                                (h > 5 && "s" === t.roundingMethod) ||
                                (h > 5 &&
                                    "a" === t.roundingMethod &&
                                    "" === n) ||
                                (h > 4 &&
                                    "a" === t.roundingMethod &&
                                    "-" === n) ||
                                (h > 5 && "B" === t.roundingMethod) ||
                                (5 === h &&
                                    "B" === t.roundingMethod &&
                                    1 === g) ||
                                (h > 0 &&
                                    "C" === t.roundingMethod &&
                                    "" === n) ||
                                (h > 0 &&
                                    "F" === t.roundingMethod &&
                                    "-" === n) ||
                                (h > 0 && "U" === t.roundingMethod)
                            )
                                for (r = v.length - 1; r >= 0; r -= 1)
                                    if ("." !== v[r]) {
                                        if (((v[r] = +v[r] + 1), v[r] < 10))
                                            break;
                                        r > 0 && (v[r] = "0");
                                    }
                            return (
                                (v = v.slice(0, m + 1)),
                                (i = re(v.join(""), o)),
                                0 === Number(i) ? i : n + i
                            );
                        }
                        function oe(e, t, a) {
                            if (
                                ((e = a ? ne(e, t) : e),
                                t.decimalCharacter && t.decimalPlacesOverride)
                            ) {
                                var i = e.split(t.decimalCharacter),
                                    r = s(i, 2),
                                    n = r[0],
                                    o = r[1];
                                if (o && o.length > t.decimalPlacesOverride)
                                    if (t.decimalPlacesOverride > 0) {
                                        var l = o.substring(
                                            0,
                                            t.decimalPlacesOverride
                                        );
                                        e = "" + n + t.decimalCharacter + l;
                                    } else e = n;
                            }
                            return e;
                        }
                        function le(e) {
                            var t = {},
                                a = void 0,
                                i = void 0,
                                r = void 0,
                                n = void 0;
                            if (
                                (0 === e && 1 / e < 0 && (e = "-0"),
                                (e = e.toString()),
                                M(e)
                                    ? ((e = e.slice(1)), (t.s = -1))
                                    : (t.s = 1),
                                (a = e.indexOf(".")),
                                a > -1 && (e = e.replace(".", "")),
                                a < 0 && (a = e.length),
                                (i =
                                    e.search(/[1-9]/i) === -1
                                        ? e.length
                                        : e.search(/[1-9]/i)),
                                (r = e.length),
                                i === r)
                            )
                                (t.e = 0), (t.c = [0]);
                            else {
                                for (n = r - 1; "0" === e.charAt(n); n -= 1)
                                    r -= 1;
                                for (
                                    r -= 1, t.e = a - i - 1, t.c = [], a = 0;
                                    i <= r;
                                    i += 1
                                )
                                    (t.c[a] = +e.charAt(i)), (a += 1);
                            }
                            return t;
                        }
                        function se(e, t) {
                            var a = t.c,
                                i = e.c,
                                r = t.s,
                                n = e.s,
                                o = t.e,
                                l = e.e;
                            if (!a[0] || !i[0]) {
                                var s = void 0;
                                return (s = a[0] ? r : i[0] ? -n : 0);
                            }
                            if (r !== n) return r;
                            var c = r < 0;
                            if (o !== l) return (o > l) ^ c ? 1 : -1;
                            for (
                                r = -1,
                                    o = a.length,
                                    l = i.length,
                                    n = o < l ? o : l,
                                    r += 1;
                                r < n;
                                r += 1
                            )
                                if (a[r] !== i[r])
                                    return (a[r] > i[r]) ^ c ? 1 : -1;
                            var u = void 0;
                            return (u = o === l ? 0 : (o > l) ^ c ? 1 : -1);
                        }
                        function ce(e, t) {
                            (e = e.toString()), (e = e.replace(",", "."));
                            var a = le(t.minimumValue),
                                i = le(t.maximumValue),
                                r = le(e),
                                n = void 0;
                            switch (t.overrideMinMaxLimits) {
                                case "floor":
                                    n = [se(a, r) > -1, !0];
                                    break;
                                case "ceiling":
                                    n = [!0, se(i, r) < 1];
                                    break;
                                case "ignore":
                                    n = [!0, !0];
                                    break;
                                default:
                                    n = [se(a, r) > -1, se(i, r) < 1];
                            }
                            return n;
                        }
                        function ue(t) {
                            return (
                                r(t) &&
                                    (t =
                                        "#" +
                                        t.replace(/(:|\.|\[|]|,|=)/g, "\\$1")),
                                e(t)
                            );
                        }
                        function de(e, t) {
                            var i =
                                    arguments.length > 2 &&
                                    void 0 !== arguments[2] &&
                                    arguments[2],
                                r = e.data("autoNumeric");
                            r || ((r = {}), e.data("autoNumeric", r));
                            var n = r.holder;
                            return (
                                (i || (a(n) && t)) &&
                                    ((n = new Re(e.get(0), t)), (r.holder = n)),
                                n
                            );
                        }
                        function me(e) {
                            (e.oDec = e.decimalPlacesOverride),
                                (e.oPad = e.allowDecimalPadding),
                                (e.oBracket = e.negativeBracketsTypeOnBlur),
                                (e.oSep = e.digitGroupSeparator),
                                (e.oSign = e.currencySymbol),
                                (e.oSuffix = e.suffixText);
                        }
                        function he(e) {
                            for (
                                var t = e + "=",
                                    a = document.cookie.split(";"),
                                    i = "",
                                    r = 0;
                                r < a.length;
                                r += 1
                            ) {
                                for (i = a[r]; " " === i.charAt(0); )
                                    i = i.substring(1, i.length);
                                if (0 === i.indexOf(t))
                                    return i.substring(t.length, i.length);
                            }
                            return null;
                        }
                        function ge() {
                            var e = "modernizr";
                            try {
                                return (
                                    sessionStorage.setItem(e, e),
                                    sessionStorage.removeItem(e),
                                    !0
                                );
                            } catch (e) {
                                return !1;
                            }
                        }
                        function ve(e, t) {
                            return "" === e
                                ? ""
                                : 0 === Number(e) && "keep" !== t.leadingZero
                                ? "0"
                                : ("keep" !== t.leadingZero &&
                                      ((e = e.replace(/^(-)?0+(?=\d)/g, "$1")),
                                      k(e, ".") &&
                                          (e = e.replace(
                                              /(\.[0-9]*?)0+$/,
                                              "$1"
                                          ))),
                                  (e = e.replace(/\.$/, "")));
                        }
                        function pe(e) {
                            var t = e.split("."),
                                a = s(t, 2),
                                r = a[0],
                                n = a[1];
                            if (i(n)) return r;
                            var o = n.replace(/0+$/g, ""),
                                l = void 0;
                            return (l = "" === o ? r : r + "." + o);
                        }
                        function fe(e, t, i) {
                            if (t.saveValueToSessionStorage) {
                                var r =
                                        "" === e.name || a(e.name)
                                            ? "AUTO_" + e.id
                                            : "AUTO_" +
                                              decodeURIComponent(e.name),
                                    n = void 0,
                                    o = void 0;
                                if (ge() === !1)
                                    switch (i) {
                                        case "set":
                                            document.cookie =
                                                r +
                                                "=" +
                                                t.rawValue +
                                                "; expires= ; path=/";
                                            break;
                                        case "wipe":
                                            (n = new Date()),
                                                n.setTime(n.getTime() + -864e5),
                                                (o =
                                                    "; expires=" +
                                                    n.toUTCString()),
                                                (document.cookie =
                                                    r +
                                                    "='' ;" +
                                                    o +
                                                    "; path=/");
                                            break;
                                        case "get":
                                            return he(r);
                                    }
                                else
                                    switch (i) {
                                        case "set":
                                            sessionStorage.setItem(
                                                r,
                                                t.rawValue
                                            );
                                            break;
                                        case "wipe":
                                            sessionStorage.removeItem(r);
                                            break;
                                        case "get":
                                            return sessionStorage.getItem(r);
                                    }
                            }
                        }
                        function ye() {
                            var t =
                                    !(
                                        arguments.length > 0 &&
                                        void 0 !== arguments[0]
                                    ) || arguments[0],
                                a = arguments[1],
                                i = ue(a),
                                r = e("form").index(i),
                                n = e("form:eq(" + r + ")")[0],
                                o = [],
                                l = [],
                                u = /^(?:submit|button|image|reset|file)$/i,
                                d = /^(?:input|select|textarea|keygen)/i,
                                m = /^(?:checkbox|radio)$/i,
                                h =
                                    /^(?:button|checkbox|color|date|datetime|datetime-local|email|file|image|month|number|password|radio|range|reset|search|submit|time|url|week)/i,
                                g = 0;
                            if (
                                (e.each(n, function (e, t) {
                                    "" === t.name ||
                                    !d.test(t.localName) ||
                                    u.test(t.type) ||
                                    t.disabled ||
                                    (!t.checked && m.test(t.type))
                                        ? l.push(-1)
                                        : (l.push(g), g++);
                                }),
                                (g = 0),
                                e.each(n, function (e, t) {
                                    "input" !== t.localName ||
                                    ("" !== t.type &&
                                        "text" !== t.type &&
                                        "hidden" !== t.type &&
                                        "tel" !== t.type)
                                        ? (o.push(-1),
                                          "input" === t.localName &&
                                              h.test(t.type) &&
                                              g++)
                                        : (o.push(g), g++);
                                }),
                                t)
                            ) {
                                var v = i.serializeArray();
                                return (
                                    e.each(v, function (t, a) {
                                        var i = l.indexOf(t);
                                        if (i > -1 && o[i] > -1) {
                                            var n = e(
                                                    "form:eq(" +
                                                        r +
                                                        ") input:eq(" +
                                                        o[i] +
                                                        ")"
                                                ),
                                                s = n.data("autoNumeric");
                                            "object" ===
                                                ("undefined" == typeof s
                                                    ? "undefined"
                                                    : c(s)) &&
                                                (a.value = n
                                                    .autoNumeric("getLocalized")
                                                    .toString());
                                        }
                                    }),
                                    v
                                );
                            }
                            var p = (function () {
                                var t = i.serialize(),
                                    a = t.split("&");
                                return (
                                    e.each(a, function (t) {
                                        var i = a[t].split("="),
                                            n = s(i, 2),
                                            u = n[0],
                                            d = n[1],
                                            m = l.indexOf(t);
                                        if (m > -1 && o[m] > -1) {
                                            var h = e(
                                                    "form:eq(" +
                                                        r +
                                                        ") input:eq(" +
                                                        o[m] +
                                                        ")"
                                                ),
                                                g = h.data("autoNumeric");
                                            if (
                                                "object" ===
                                                    ("undefined" == typeof g
                                                        ? "undefined"
                                                        : c(g)) &&
                                                null !== d
                                            ) {
                                                var v = h
                                                    .autoNumeric("getLocalized")
                                                    .toString();
                                                a[t] = u + "=" + v;
                                            }
                                        }
                                    }),
                                    { v: a.join("&") }
                                );
                            })();
                            if (
                                "object" ===
                                ("undefined" == typeof p ? "undefined" : c(p))
                            )
                                return p.v;
                        }
                        function Se(e, t, a) {
                            var i = t.settingsClone;
                            if (
                                "focusin" === a.type ||
                                ("mouseenter" === a.type &&
                                    !e.is(":focus") &&
                                    "focus" === i.emptyInputBehavior)
                            ) {
                                (i.hasFocus = !0),
                                    null !== i.negativeBracketsTypeOnBlur &&
                                        "" !== i.negativeSignCharacter &&
                                        e.val(J(a.target.value, i));
                                var r = Q(a.target.value, i, !0);
                                (r = Y(r, i)),
                                    (r = ve(r, i)),
                                    i.trailingNegative && (r = "-" + r),
                                    i.decimalPlacesShownOnFocus
                                        ? ((i.decimalPlacesOverride =
                                              i.decimalPlacesShownOnFocus),
                                          e.autoNumeric("set", i.rawValue))
                                        : i.scaleDivisor
                                        ? ((i.decimalPlacesOverride = i.oDec),
                                          e.autoNumeric("set", i.rawValue))
                                        : i.noSeparatorOnFocus
                                        ? ((i.digitGroupSeparator = ""),
                                          (i.currencySymbol = ""),
                                          (i.suffixText = ""),
                                          e.autoNumeric("set", i.rawValue))
                                        : r !== i.rawValue &&
                                          e.autoNumeric("set", r),
                                    (t.valueOnFocus = a.target.value),
                                    (t.lastVal = t.valueOnFocus);
                                var n = ae(t.valueOnFocus, i, !0);
                                null !== n &&
                                    "" !== n &&
                                    "focus" === i.emptyInputBehavior &&
                                    (e.val(n),
                                    n === i.currencySymbol &&
                                        "s" === i.currencySymbolPlacement &&
                                        Z(a.target, 0, 0));
                            }
                        }
                        function be(e, t) {
                            return (
                                e._updateAutoNumericHolderEventKeycode(t),
                                (e.initialValueOnKeydown = t.target.value),
                                e.that.readOnly
                                    ? void (e.processed = !0)
                                    : (e.eventKeyCode === y.Enter &&
                                          e.valueOnFocus !== t.target.value &&
                                          (Ke("change", t.target),
                                          (e.valueOnFocus = t.target.value)),
                                      e._updateAutoNumericHolderProperties(t),
                                      e._skipAlways(t)
                                          ? void (e.processed = !0)
                                          : e.eventKeyCode === y.Backspace ||
                                            e.eventKeyCode === y.Delete
                                          ? (e._processCharacterDeletion(),
                                            (e.processed = !0),
                                            e._formatValue(t),
                                            t.target.value !== e.lastVal &&
                                                e.settingsClone.throwInput &&
                                                (Ke("input", t.target),
                                                t.preventDefault()),
                                            (e.lastVal = t.target.value),
                                            void (e.settingsClone.throwInput =
                                                !0))
                                          : void (e.formatted = !1))
                            );
                        }
                        function Pe(e, t) {
                            var a = D(t);
                            if (a !== S.Insert) {
                                var i = e.processed;
                                if (
                                    (e._updateAutoNumericHolderProperties(t),
                                    !e._skipAlways(t))
                                ) {
                                    if (i) return void t.preventDefault();
                                    var r = e._processCharacterInsertion(t);
                                    if (r) {
                                        if (
                                            (e._formatValue(t),
                                            t.target.value !== e.lastVal &&
                                                e.settingsClone.throwInput)
                                        )
                                            Ke("input", t.target),
                                                t.preventDefault();
                                        else {
                                            if (
                                                (a ===
                                                    e.settings
                                                        .decimalCharacter ||
                                                    a ===
                                                        e.settings
                                                            .decimalCharacterAlternative) &&
                                                $(t.target).start ===
                                                    $(t.target).end &&
                                                $(t.target).start ===
                                                    t.target.value.indexOf(
                                                        e.settings
                                                            .decimalCharacter
                                                    )
                                            ) {
                                                var n = $(t.target).start + 1;
                                                Z(t.target, n, n);
                                            }
                                            t.preventDefault();
                                        }
                                        return (
                                            (e.lastVal = t.target.value),
                                            void (e.settingsClone.throwInput =
                                                !0)
                                        );
                                    }
                                    t.preventDefault(), (e.formatted = !1);
                                }
                            }
                        }
                        function Ce(e, t, a) {
                            e._updateAutoNumericHolderProperties(a);
                            var i = e._skipAlways(a);
                            delete e.valuePartsBeforePaste,
                                i ||
                                    "" === a.target.value ||
                                    (a.target.value ===
                                    e.settingsClone.currencySymbol
                                        ? "s" ===
                                          e.settingsClone
                                              .currencySymbolPlacement
                                            ? Z(a.target, 0, 0)
                                            : Z(
                                                  a.target,
                                                  e.settingsClone.currencySymbol
                                                      .length,
                                                  e.settingsClone.currencySymbol
                                                      .length
                                              )
                                        : e.eventKeyCode === y.Tab &&
                                          Z(a.target, 0, a.target.value.length),
                                    (a.target.value ===
                                        e.settingsClone.suffixText ||
                                        ("" === e.settingsClone.rawValue &&
                                            "" !==
                                                e.settingsClone
                                                    .currencySymbol &&
                                            "" !==
                                                e.settingsClone.suffixText)) &&
                                        Z(a.target, 0, 0),
                                    null !==
                                        e.settingsClone
                                            .decimalPlacesShownOnFocus &&
                                        e.settingsClone
                                            .saveValueToSessionStorage &&
                                        fe(a.target, t, "set"),
                                    e.formatted || e._formatValue(a),
                                    a.target.value !==
                                        e.initialValueOnKeydown &&
                                        Ke("autoNumeric:formatted", a.target));
                        }
                        function we(e, t, a) {
                            if (!e.is(":focus")) {
                                var i = a.target.value,
                                    r = i,
                                    n = t.settingsClone;
                                if (
                                    ((n.hasFocus = !1),
                                    n.saveValueToSessionStorage &&
                                        fe(a.target, n, "set"),
                                    n.noSeparatorOnFocus === !0 &&
                                        ((n.digitGroupSeparator = n.oSep),
                                        (n.currencySymbol = n.oSign),
                                        (n.suffixText = n.oSuffix)),
                                    null !== n.decimalPlacesShownOnFocus &&
                                        ((n.decimalPlacesOverride = n.oDec),
                                        (n.allowDecimalPadding = n.oPad),
                                        (n.negativeBracketsTypeOnBlur =
                                            n.oBracket)),
                                    (i = Q(i, n, !0)),
                                    "" !== i)
                                ) {
                                    n.trailingNegative &&
                                        !L(i) &&
                                        ((i = "-" + i),
                                        (n.trailingNegative = !1));
                                    var o = ce(i, n),
                                        l = s(o, 2),
                                        c = l[0],
                                        u = l[1];
                                    null === ae(i, n, !1) && c && u
                                        ? ((i = ee(i, n)),
                                          (n.rawValue = ve(i, n)),
                                          n.scaleDivisor &&
                                              ((i /= n.scaleDivisor),
                                              (i = i.toString())),
                                          (n.decimalPlacesOverride =
                                              n.scaleDivisor &&
                                              n.scaleDecimalPlaces
                                                  ? +n.scaleDecimalPlaces
                                                  : n.decimalPlacesOverride),
                                          (i = ne(i, n)),
                                          (i = te(i, n)))
                                        : (c ||
                                              e.trigger(
                                                  "autoNumeric:minExceeded"
                                              ),
                                          u ||
                                              e.trigger(
                                                  "autoNumeric:maxExceeded"
                                              ),
                                          (i = n.rawValue));
                                } else
                                    "zero" === n.emptyInputBehavior
                                        ? ((n.rawValue = "0"), (i = ne("0", n)))
                                        : (n.rawValue = "");
                                var d = ae(i, n, !1);
                                null === d && (d = ie(i, n)),
                                    d !== r &&
                                        ((d = n.scaleSymbol
                                            ? d + n.scaleSymbol
                                            : d),
                                        e.val(d)),
                                    d !== t.valueOnFocus &&
                                        (e.change(), delete t.valueOnFocus);
                            }
                        }
                        function xe(e, t, a) {
                            a.preventDefault();
                            var i = a.clipboardData.getData("text/plain"),
                                r = a.target.value,
                                n = a.target.selectionStart || 0,
                                o = a.target.selectionEnd || 0,
                                l = o - n,
                                s = !1;
                            l === r.length && (s = !0);
                            var c = M(i);
                            c && (i = i.slice(1, i.length));
                            var u = N(i, t),
                                d = void 0;
                            if (
                                ((d = "." === u ? "." : _e(u, !1, !1, !1)),
                                "." !== d && (!w(d) || "" === d))
                            )
                                return void (
                                    "error" === t.settings.onInvalidPaste &&
                                    z(
                                        "The pasted value '" +
                                            i +
                                            "' is not a valid paste content."
                                    )
                                );
                            var m = void 0,
                                h = void 0;
                            h =
                                "" === a.target.value
                                    ? ""
                                    : e.autoNumeric("get");
                            var g = M(h),
                                v = void 0,
                                p = void 0;
                            c && !g
                                ? ((h = "-" + h), (g = !0), (v = !0))
                                : (v = !1);
                            var f = !1;
                            switch (t.settings.onInvalidPaste) {
                                case "truncate":
                                case "replace":
                                    var y = r.slice(0, n),
                                        S = r.slice(o, r.length);
                                    (p = n !== o ? N(y + S, t) : N(r, t)),
                                        g && (p = I(p)),
                                        (m = G(
                                            R(r, n, t.settings.decimalCharacter)
                                        )),
                                        v && m++;
                                    var b = p.slice(0, m),
                                        P = p.slice(m, p.length);
                                    "." === d &&
                                        (k(b, ".") &&
                                            ((f = !0),
                                            (b = b.replace(".", ""))),
                                        (P = P.replace(".", "")));
                                    for (
                                        var C = le(t.settings.minimumValue),
                                            x = le(t.settings.maximumValue),
                                            O = p,
                                            V = 0,
                                            F = b;
                                        V < d.length &&
                                        ((F += d[V]), (p = F + P), B(p, C, x));

                                    )
                                        (O = p), V++;
                                    if (
                                        ((m += V),
                                        "truncate" ===
                                            t.settings.onInvalidPaste)
                                    ) {
                                        (p = O), f && m--;
                                        break;
                                    }
                                    for (
                                        var A = m, T = O.length;
                                        V < d.length && A < T;

                                    )
                                        if ("." !== O[A]) {
                                            if (
                                                ((p = _(O, A, d[V])),
                                                !B(p, C, x))
                                            )
                                                break;
                                            (O = p), V++, A++;
                                        } else A++;
                                    (m = A), f && m--, (p = O);
                                    break;
                                case "error":
                                case "ignore":
                                case "clamp":
                                default:
                                    var D = r.slice(0, n),
                                        L = r.slice(o, r.length);
                                    if (
                                        ((p = n !== o ? N(D + L, t) : N(r, t)),
                                        g && (p = I(p)),
                                        (m = G(
                                            R(r, n, t.settings.decimalCharacter)
                                        )),
                                        v && m++,
                                        (b = p.slice(0, m)),
                                        (P = p.slice(m, p.length)),
                                        "." === d &&
                                            (k(b, ".") &&
                                                ((f = !0),
                                                (b = b.replace(".", ""))),
                                            (P = P.replace(".", ""))),
                                        (p = "" + b + d + P),
                                        n === o)
                                    ) {
                                        var E = G(
                                            R(r, n, t.settings.decimalCharacter)
                                        );
                                        m = E + d.length;
                                    } else if (s) m = p.length;
                                    else if ("" === P)
                                        m =
                                            G(
                                                R(
                                                    r,
                                                    n,
                                                    t.settings.decimalCharacter
                                                )
                                            ) + d.length;
                                    else {
                                        var $ = G(
                                                R(
                                                    r,
                                                    o,
                                                    t.settings.decimalCharacter
                                                )
                                            ),
                                            H = a.target.value.slice(n, o);
                                        m =
                                            $ -
                                            l +
                                            j(
                                                t.settings.digitGroupSeparator,
                                                H
                                            ) +
                                            d.length;
                                    }
                                    s || (v && m++, f && m--);
                            }
                            if (!w(p) || "" === p)
                                return void (
                                    "error" === t.settings.onInvalidPaste &&
                                    z(
                                        "The pasted value '" +
                                            i +
                                            "' would result into an invalid content '" +
                                            p +
                                            "'."
                                    )
                                );
                            var q = !1,
                                W = !1;
                            try {
                                e.autoNumeric("set", p), (q = !0);
                            } catch (a) {
                                var Q = void 0;
                                switch (t.settings.onInvalidPaste) {
                                    case "clamp":
                                        Q = K(p, t.settings);
                                        try {
                                            e.autoNumeric("set", Q);
                                        } catch (e) {
                                            z(
                                                "Fatal error: Unable to set the clamped value '" +
                                                    Q +
                                                    "'."
                                            );
                                        }
                                        (W = !0), (q = !0), (p = Q);
                                        break;
                                    case "error":
                                    case "truncate":
                                    case "replace":
                                        z(
                                            "The pasted value '" +
                                                i +
                                                "' results in a value '" +
                                                p +
                                                "' that is outside of the minimum [" +
                                                t.settings.minimumValue +
                                                "] and maximum [" +
                                                t.settings.maximumValue +
                                                "] value range."
                                        );
                                    case "ignore":
                                    default:
                                        return;
                                }
                            }
                            var J = void 0;
                            if (q)
                                switch (t.settings.onInvalidPaste) {
                                    case "clamp":
                                        if (W) {
                                            "s" ===
                                            t.settings.currencySymbolPlacement
                                                ? Z(
                                                      a.target,
                                                      a.target.value.length -
                                                          t.settings
                                                              .currencySymbol
                                                              .length
                                                  )
                                                : Z(
                                                      a.target,
                                                      a.target.value.length
                                                  );
                                            break;
                                        }
                                    case "error":
                                    case "ignore":
                                    case "truncate":
                                    case "replace":
                                    default:
                                        (J = U(
                                            p,
                                            m,
                                            a.target.value,
                                            t.settings.decimalCharacter
                                        )),
                                            Z(a.target, J);
                                }
                            q && r !== a.target.value && Ke("input", a.target);
                        }
                        function Oe(e, t) {
                            t.target.value !== e.valueOnFocus &&
                                Ke("change", t.target);
                        }
                        function Ne(e, t) {
                            e.closest("form").on(
                                "submit.autoNumeric",
                                function () {
                                    if (t) {
                                        var a = t.settingsClone;
                                        a.unformatOnSubmit && e.val(a.rawValue);
                                    }
                                }
                            );
                        }
                        function ke(e) {
                            var t = e.is(
                                "input[type=text], input[type=hidden], input[type=tel], input:not([type])"
                            );
                            t ||
                                "input" !== e.prop("tagName").toLowerCase() ||
                                z(
                                    'The input type "' +
                                        e.prop("type") +
                                        '" is not supported by autoNumeric'
                                );
                            var a = e.prop("tagName").toLowerCase();
                            return (
                                "input" === a ||
                                    V(a, p) ||
                                    z(
                                        "The <" +
                                            a +
                                            "> tag is not supported by autoNumeric"
                                    ),
                                t
                            );
                        }
                        function Ve(e, t, a) {
                            var r = !0;
                            if (t) {
                                var n = a.val(),
                                    o = Ie(n, e);
                                if (
                                    e.formatOnPageLoad &&
                                    "" !== n &&
                                    i(a.attr("value"))
                                )
                                    isNaN(o) || 1 / 0 === o
                                        ? z(
                                              "The value [" +
                                                  n +
                                                  "] used in the input is not a valid value autoNumeric can work with."
                                          )
                                        : (a.autoNumeric("set", o), (r = !1));
                                else if (
                                    (null !== e.defaultValueOverride &&
                                        e.defaultValueOverride.toString() !==
                                            n) ||
                                    (null === e.defaultValueOverride &&
                                        "" !== n &&
                                        n !== a.attr("value")) ||
                                    ("" !== n &&
                                        "hidden" === a.attr("type") &&
                                        !w(o))
                                ) {
                                    if (
                                        (((null !==
                                            e.decimalPlacesShownOnFocus &&
                                            e.saveValueToSessionStorage) ||
                                            (e.scaleDivisor &&
                                                e.saveValueToSessionStorage)) &&
                                            (e.rawValue = fe(a[0], e, "get")),
                                        !e.saveValueToSessionStorage)
                                    ) {
                                        var l = void 0;
                                        null !== e.negativeBracketsTypeOnBlur &&
                                        "" !== e.negativeSignCharacter
                                            ? ((e.hasFocus = !0), (l = J(n, e)))
                                            : (l = n),
                                            ("s" ===
                                                e.negativePositiveSignPlacement ||
                                                ("p" !==
                                                    e.negativePositiveSignPlacement &&
                                                    "s" ===
                                                        e.currencySymbolPlacement)) &&
                                            "" !== e.negativeSignCharacter &&
                                            L(n)
                                                ? (e.rawValue =
                                                      e.negativeSignCharacter +
                                                      Q(l, e, !0))
                                                : (e.rawValue = Q(l, e, !0));
                                    }
                                    r = !1;
                                }
                                if ("" === n)
                                    switch (e.emptyInputBehavior) {
                                        case "focus":
                                            r = !1;
                                            break;
                                        case "always":
                                            a.val(e.currencySymbol), (r = !1);
                                            break;
                                        case "zero":
                                            a.autoNumeric("set", "0"), (r = !1);
                                    }
                                else
                                    r &&
                                        n === a.attr("value") &&
                                        a.autoNumeric("set", n);
                            }
                            V(a.prop("tagName").toLowerCase(), e.tagList) &&
                                "" !== a.text() &&
                                (null !== e.defaultValueOverride
                                    ? e.defaultValueOverride === a.text() &&
                                      a.autoNumeric("set", a.text())
                                    : a.autoNumeric("set", a.text()));
                        }
                        function Fe(e) {
                            if (t(e.negativePositiveSignPlacement))
                                if (
                                    a(e) ||
                                    !i(e.negativePositiveSignPlacement) ||
                                    i(e.currencySymbol)
                                )
                                    e.negativePositiveSignPlacement = "l";
                                else
                                    switch (e.currencySymbolPlacement) {
                                        case "s":
                                            e.negativePositiveSignPlacement =
                                                "p";
                                            break;
                                        case "p":
                                            e.negativePositiveSignPlacement =
                                                "l";
                                    }
                        }
                        function Ae(e) {
                            var t = e.maximumValue.toString().split("."),
                                a = s(t, 1),
                                i = a[0],
                                r =
                                    e.minimumValue || 0 === e.minimumValue
                                        ? e.minimumValue.toString().split(".")
                                        : [],
                                n = s(r, 1),
                                o = n[0];
                            (i = i.replace("-", "")),
                                (o = o.replace("-", "")),
                                (e.mIntPos = Math.max(i.length, 1)),
                                (e.mIntNeg = Math.max(o.length, 1));
                        }
                        function Te(e) {
                            t(e.scaleDivisor) || t(e.scaleDecimalPlaces)
                                ? t(e.decimalPlacesOverride) &&
                                  (e.decimalPlacesOverride = W(
                                      e.minimumValue,
                                      e.maximumValue
                                  ))
                                : (e.decimalPlacesOverride =
                                      e.scaleDecimalPlaces),
                                (e.oDec = String(e.decimalPlacesOverride)),
                                (e.decimalPlacesOverride = Number(
                                    e.decimalPlacesOverride
                                ));
                        }
                        function De(e) {
                            t(e.decimalCharacterAlternative) &&
                                Number(e.decimalPlacesOverride) > 0 &&
                                ("." === e.decimalCharacter &&
                                "," !== e.digitGroupSeparator
                                    ? (e.decimalCharacterAlternative = ",")
                                    : "," === e.decimalCharacter &&
                                      "." !== e.digitGroupSeparator &&
                                      (e.decimalCharacterAlternative = "."));
                        }
                        function Be(e) {
                            var t = "[0-9]",
                                a = "[^0-9]",
                                i = e.negativeSignCharacter
                                    ? "([-\\" + e.negativeSignCharacter + "]?)"
                                    : "(-?)";
                            e.aNegRegAutoStrip = i;
                            var r = void 0;
                            (r = e.negativeSignCharacter
                                ? "\\" + e.negativeSignCharacter
                                : ""),
                                (e.skipFirstAutoStrip = new RegExp(
                                    i +
                                        "[^-" +
                                        r +
                                        "\\" +
                                        e.decimalCharacter +
                                        t +
                                        "].*?(" +
                                        t +
                                        "|\\" +
                                        e.decimalCharacter +
                                        t +
                                        ")"
                                )),
                                (e.skipLastAutoStrip = new RegExp(
                                    "(" +
                                        t +
                                        "\\" +
                                        e.decimalCharacter +
                                        "?)[^\\" +
                                        e.decimalCharacter +
                                        t +
                                        "]" +
                                        a +
                                        "*$"
                                ));
                            var n = "-0123456789\\" + e.decimalCharacter;
                            (e.allowedAutoStrip = new RegExp(
                                "[^" + n + "]",
                                "g"
                            )),
                                (e.numRegAutoStrip = new RegExp(
                                    i +
                                        "(?:\\" +
                                        e.decimalCharacter +
                                        "?(" +
                                        t +
                                        "+\\" +
                                        e.decimalCharacter +
                                        t +
                                        "+)|(" +
                                        t +
                                        "*(?:\\" +
                                        e.decimalCharacter +
                                        t +
                                        "*)?))"
                                )),
                                (e.stripReg = new RegExp(
                                    "^" + e.aNegRegAutoStrip + "0*(" + t + ")"
                                ));
                        }
                        function Le(t) {
                            e.each(t, function (e, a) {
                                ("true" !== a && "false" !== a) ||
                                    (t[e] = "true" === a),
                                    "number" == typeof a &&
                                        "aScale" !== e &&
                                        (t[e] = a.toString());
                            });
                        }
                        function Me(e) {
                            var t = {
                                aSep: "digitGroupSeparator",
                                nSep: "noSeparatorOnFocus",
                                dGroup: "digitalGroupSpacing",
                                aDec: "decimalCharacter",
                                altDec: "decimalCharacterAlternative",
                                aSign: "currencySymbol",
                                pSign: "currencySymbolPlacement",
                                pNeg: "negativePositiveSignPlacement",
                                aSuffix: "suffixText",
                                oLimits: "overrideMinMaxLimits",
                                vMax: "maximumValue",
                                vMin: "minimumValue",
                                mDec: "decimalPlacesOverride",
                                eDec: "decimalPlacesShownOnFocus",
                                scaleDecimal: "scaleDecimalPlaces",
                                aStor: "saveValueToSessionStorage",
                                mRound: "roundingMethod",
                                aPad: "allowDecimalPadding",
                                nBracket: "negativeBracketsTypeOnBlur",
                                wEmpty: "emptyInputBehavior",
                                lZero: "leadingZero",
                                aForm: "formatOnPageLoad",
                                sNumber: "selectNumberOnly",
                                anDefault: "defaultValueOverride",
                                unSetOnSubmit: "unformatOnSubmit",
                                outputType: "outputFormat",
                                debug: "showWarnings",
                                digitGroupSeparator: !0,
                                noSeparatorOnFocus: !0,
                                digitalGroupSpacing: !0,
                                decimalCharacter: !0,
                                decimalCharacterAlternative: !0,
                                currencySymbol: !0,
                                currencySymbolPlacement: !0,
                                negativePositiveSignPlacement: !0,
                                showPositiveSign: !0,
                                suffixText: !0,
                                overrideMinMaxLimits: !0,
                                maximumValue: !0,
                                minimumValue: !0,
                                decimalPlacesOverride: !0,
                                decimalPlacesShownOnFocus: !0,
                                scaleDivisor: !0,
                                scaleDecimalPlaces: !0,
                                scaleSymbol: !0,
                                saveValueToSessionStorage: !0,
                                onInvalidPaste: !0,
                                roundingMethod: !0,
                                allowDecimalPadding: !0,
                                negativeBracketsTypeOnBlur: !0,
                                emptyInputBehavior: !0,
                                leadingZero: !0,
                                formatOnPageLoad: !0,
                                selectNumberOnly: !0,
                                defaultValueOverride: !0,
                                unformatOnSubmit: !0,
                                outputFormat: !0,
                                showWarnings: !0,
                                failOnUnknownOption: !0,
                                hasFocus: !0,
                                runOnce: !0,
                                rawValue: !0,
                                trailingNegative: !0,
                                caretFix: !0,
                                throwInput: !0,
                                strip: !0,
                                tagList: !0,
                                negativeSignCharacter: !0,
                                positiveSignCharacter: !0,
                                mIntPos: !0,
                                mIntNeg: !0,
                                oDec: !0,
                                oPad: !0,
                                oBracket: !0,
                                oSep: !0,
                                oSign: !0,
                                oSuffix: !0,
                                aNegRegAutoStrip: !0,
                                skipFirstAutoStrip: !0,
                                skipLastAutoStrip: !0,
                                allowedAutoStrip: !0,
                                numRegAutoStrip: !0,
                                stripReg: !0,
                                holder: !0,
                            };
                            for (var a in e)
                                if (e.hasOwnProperty(a)) {
                                    if (t[a] === !0) continue;
                                    t.hasOwnProperty(a)
                                        ? (H(
                                              "You are using the deprecated option name '" +
                                                  a +
                                                  "'. Please use '" +
                                                  t[a] +
                                                  "' instead from now on. The old option name will be dropped soon.",
                                              !0
                                          ),
                                          (e[t[a]] = e[a]),
                                          delete e[a])
                                        : e.failOnUnknownOption &&
                                          z(
                                              "Option name '" +
                                                  a +
                                                  "' is unknown. Please fix the options passed to autoNumeric"
                                          );
                                }
                        }
                        function Ee(i, r) {
                            var n =
                                    arguments.length > 2 &&
                                    void 0 !== arguments[2] &&
                                    arguments[2],
                                o = r.data("autoNumeric");
                            if (((!n && t(i)) || Me(i), n || a(o))) {
                                if (n) o = e.extend(o, i);
                                else {
                                    var l = r.data();
                                    o = e.extend({}, f, l, i, {
                                        hasFocus: !1,
                                        runOnce: !1,
                                        rawValue: "",
                                        trailingNegative: !1,
                                        caretFix: !1,
                                        throwInput: !0,
                                        strip: !0,
                                        tagList: p,
                                    });
                                }
                                return (
                                    Le(o),
                                    Fe(o),
                                    (o.negativeSignCharacter =
                                        o.minimumValue < 0 ? "-" : ""),
                                    (o.positiveSignCharacter =
                                        o.maximumValue >= 0 ? "+" : ""),
                                    q(r, o),
                                    Ae(o),
                                    Te(o),
                                    De(o),
                                    Be(o),
                                    g(o, !1),
                                    me(o),
                                    r.data("autoNumeric", o),
                                    o
                                );
                            }
                            return null;
                        }
                        function Ie(e, t) {
                            var a = void 0;
                            return (
                                w(Number(e))
                                    ? (a = e)
                                    : ((a = Y(e.toString(), t)),
                                      w(Number(a)) ||
                                          (H(
                                              'The value "' +
                                                  e +
                                                  '" being "set" is not numeric and therefore cannot be used appropriately.',
                                              t.showWarnings
                                          ),
                                          (a = NaN))),
                                a
                            );
                        }
                        function _e(e) {
                            var t =
                                    !(
                                        arguments.length > 1 &&
                                        void 0 !== arguments[1]
                                    ) || arguments[1],
                                a =
                                    arguments.length > 2 &&
                                    void 0 !== arguments[2] &&
                                    arguments[2],
                                i =
                                    arguments.length > 3 &&
                                    void 0 !== arguments[3] &&
                                    arguments[3],
                                r = e.toString();
                            if ("" === r) return e;
                            a && (r = r.replace(/٫/, ".")),
                                i && (r = r.replace(/٬/g, "")),
                                (r = r
                                    .replace(/[٠١٢٣٤٥٦٧٨٩]/g, function (e) {
                                        return e.charCodeAt(0) - 1632;
                                    })
                                    .replace(/[۰۱۲۳۴۵۶۷۸۹]/g, function (e) {
                                        return e.charCodeAt(0) - 1776;
                                    }));
                            var n = Number(r);
                            return isNaN(n) ? n : (t && (r = n), r);
                        }
                        function Ke(e) {
                            var t =
                                    arguments.length > 1 &&
                                    void 0 !== arguments[1]
                                        ? arguments[1]
                                        : document,
                                a =
                                    arguments.length > 2 &&
                                    void 0 !== arguments[2]
                                        ? arguments[2]
                                        : null,
                                i = void 0;
                            window.CustomEvent
                                ? (i = new CustomEvent(e, {
                                      detail: a,
                                      bubbles: !1,
                                      cancelable: !1,
                                  }))
                                : ((i = document.createEvent("CustomEvent")),
                                  i.initCustomEvent(e, !0, !0, { detail: a })),
                                t.dispatchEvent(i);
                        }
                        var Re = (function () {
                                function t(a, i) {
                                    o(this, t),
                                        (this.settings = i),
                                        (this.that = a),
                                        (this.$that = e(a)),
                                        (this.formatted = !1),
                                        (this.settingsClone = i),
                                        (this.value = a.value);
                                }
                                return (
                                    l(t, [
                                        {
                                            key: "_updateAutoNumericHolderProperties",
                                            value: function () {
                                                (this.value = this.that.value),
                                                    (this.selection = $(
                                                        this.that
                                                    )),
                                                    (this.processed = !1),
                                                    (this.formatted = !1);
                                            },
                                        },
                                        {
                                            key: "_updateAutoNumericHolderEventKeycode",
                                            value: function (e) {
                                                this.eventKeyCode = T(e);
                                            },
                                        },
                                        {
                                            key: "_setSelection",
                                            value: function (e, t, i) {
                                                (e = Math.max(e, 0)),
                                                    (t = Math.min(
                                                        t,
                                                        this.that.value.length
                                                    )),
                                                    (this.selection = {
                                                        start: e,
                                                        end: t,
                                                        length: t - e,
                                                    }),
                                                    (a(i) || i) &&
                                                        Z(this.that, e, t);
                                            },
                                        },
                                        {
                                            key: "_setCaretPosition",
                                            value: function (e, t) {
                                                this._setSelection(e, e, t);
                                            },
                                        },
                                        {
                                            key: "_getLeftAndRightPartAroundTheSelection",
                                            value: function () {
                                                var e = this.value,
                                                    t = e.substring(
                                                        0,
                                                        this.selection.start
                                                    ),
                                                    a = e.substring(
                                                        this.selection.end,
                                                        e.length
                                                    );
                                                return [t, a];
                                            },
                                        },
                                        {
                                            key: "_getUnformattedLeftAndRightPartAroundTheSelection",
                                            value: function () {
                                                var e = this.settingsClone,
                                                    t =
                                                        this._getLeftAndRightPartAroundTheSelection(),
                                                    a = s(t, 2),
                                                    i = a[0],
                                                    r = a[1];
                                                "" === i &&
                                                    "" === r &&
                                                    (e.trailingNegative = !1);
                                                var n = !0;
                                                return (
                                                    this.eventKeyCode ===
                                                        y.Hyphen &&
                                                        0 === Number(i) &&
                                                        (n = !1),
                                                    (i = Q(
                                                        i,
                                                        this.settingsClone,
                                                        n
                                                    )),
                                                    (r = Q(
                                                        r,
                                                        this.settingsClone,
                                                        !1
                                                    )),
                                                    e.trailingNegative &&
                                                        !L(i) &&
                                                        ((i = "-" + i),
                                                        (r =
                                                            "-" === r ? "" : r),
                                                        (e.trailingNegative =
                                                            !1)),
                                                    [i, r]
                                                );
                                            },
                                        },
                                        {
                                            key: "_normalizeParts",
                                            value: function (e, t) {
                                                var a = this.settingsClone,
                                                    i = !0;
                                                if (
                                                    (this.eventKeyCode ===
                                                        y.Hyphen &&
                                                        0 === Number(e) &&
                                                        (i = !1),
                                                    (e = Q(e, a, i)),
                                                    (t = Q(t, a, !1)),
                                                    "deny" !== a.leadingZero ||
                                                        (this.eventKeyCode !==
                                                            y.num0 &&
                                                            this
                                                                .eventKeyCode !==
                                                                y.numpad0) ||
                                                        0 !== Number(e) ||
                                                        k(
                                                            e,
                                                            a.decimalCharacter
                                                        ) ||
                                                        "" === t ||
                                                        (e = e.substring(
                                                            0,
                                                            e.length - 1
                                                        )),
                                                    a.trailingNegative &&
                                                        !L(e) &&
                                                        ((e = "-" + e),
                                                        (a.trailingNegative =
                                                            !1)),
                                                    (this.newValue = e + t),
                                                    a.decimalCharacter)
                                                ) {
                                                    var r = this.newValue.match(
                                                        new RegExp(
                                                            "^" +
                                                                a.aNegRegAutoStrip +
                                                                "\\" +
                                                                a.decimalCharacter
                                                        )
                                                    );
                                                    r &&
                                                        ((e = e.replace(
                                                            r[1],
                                                            r[1] + "0"
                                                        )),
                                                        (this.newValue =
                                                            e + t));
                                                }
                                                return [e, t];
                                            },
                                        },
                                        {
                                            key: "_setValueParts",
                                            value: function (e, t) {
                                                var a =
                                                        arguments.length > 2 &&
                                                        void 0 !==
                                                            arguments[2] &&
                                                        arguments[2],
                                                    i = this.settingsClone,
                                                    r = this._normalizeParts(
                                                        e,
                                                        t
                                                    ),
                                                    n = ce(this.newValue, i),
                                                    o = s(n, 2),
                                                    l = o[0],
                                                    c = o[1],
                                                    u = r[0].length;
                                                if (
                                                    ((this.newValue =
                                                        r.join("")),
                                                    l && c)
                                                ) {
                                                    this.newValue = oe(
                                                        this.newValue,
                                                        i,
                                                        a
                                                    );
                                                    var d = k(
                                                        this.newValue,
                                                        ","
                                                    )
                                                        ? this.newValue.replace(
                                                              ",",
                                                              "."
                                                          )
                                                        : this.newValue;
                                                    return (
                                                        "" === d ||
                                                        d ===
                                                            i.negativeSignCharacter
                                                            ? (i.rawValue =
                                                                  "zero" ===
                                                                  i.emptyInputBehavior
                                                                      ? "0"
                                                                      : "")
                                                            : (i.rawValue = ve(
                                                                  d,
                                                                  i
                                                              )),
                                                        u >
                                                            this.newValue
                                                                .length &&
                                                            (u =
                                                                this.newValue
                                                                    .length),
                                                        1 === u &&
                                                            "0" === r[0] &&
                                                            "deny" ===
                                                                i.leadingZero &&
                                                            (u =
                                                                "" === r[1] ||
                                                                ("0" === r[0] &&
                                                                    "" !== r[1])
                                                                    ? 1
                                                                    : 0),
                                                        (this.value =
                                                            this.newValue),
                                                        this._setCaretPosition(
                                                            u,
                                                            !1
                                                        ),
                                                        !0
                                                    );
                                                }
                                                return (
                                                    l
                                                        ? c ||
                                                          this.$that.trigger(
                                                              "autoNumeric:maxExceeded"
                                                          )
                                                        : this.$that.trigger(
                                                              "autoNumeric:minExceeded"
                                                          ),
                                                    !1
                                                );
                                            },
                                        },
                                        {
                                            key: "_getSignPosition",
                                            value: function () {
                                                var e = this.settingsClone,
                                                    t = e.currencySymbol,
                                                    a = this.that;
                                                if (t) {
                                                    var i = t.length;
                                                    if (
                                                        "p" ===
                                                        e.currencySymbolPlacement
                                                    ) {
                                                        var r =
                                                            e.negativeSignCharacter &&
                                                            a.value &&
                                                            a.value.charAt(
                                                                0
                                                            ) ===
                                                                e.negativeSignCharacter;
                                                        return r
                                                            ? [1, i + 1]
                                                            : [0, i];
                                                    }
                                                    var n = a.value.length;
                                                    return [n - i, n];
                                                }
                                                return [1e3, -1];
                                            },
                                        },
                                        {
                                            key: "_expandSelectionOnSign",
                                            value: function (e) {
                                                var t = this._getSignPosition(),
                                                    a = this.selection;
                                                a.start < t[1] &&
                                                    a.end > t[0] &&
                                                    ((a.start < t[0] ||
                                                        a.end > t[1]) &&
                                                    this.value
                                                        .substring(
                                                            Math.max(
                                                                a.start,
                                                                t[0]
                                                            ),
                                                            Math.min(
                                                                a.end,
                                                                t[1]
                                                            )
                                                        )
                                                        .match(/^\s*$/)
                                                        ? a.start < t[0]
                                                            ? this._setSelection(
                                                                  a.start,
                                                                  t[0],
                                                                  e
                                                              )
                                                            : this._setSelection(
                                                                  t[1],
                                                                  a.end,
                                                                  e
                                                              )
                                                        : this._setSelection(
                                                              Math.min(
                                                                  a.start,
                                                                  t[0]
                                                              ),
                                                              Math.max(
                                                                  a.end,
                                                                  t[1]
                                                              ),
                                                              e
                                                          ));
                                            },
                                        },
                                        {
                                            key: "_checkPaste",
                                            value: function () {
                                                if (
                                                    !a(
                                                        this
                                                            .valuePartsBeforePaste
                                                    )
                                                ) {
                                                    var e =
                                                            this
                                                                .valuePartsBeforePaste,
                                                        t =
                                                            this._getLeftAndRightPartAroundTheSelection(),
                                                        i = s(t, 2),
                                                        r = i[0],
                                                        n = i[1];
                                                    delete this
                                                        .valuePartsBeforePaste;
                                                    var o =
                                                        r.substr(
                                                            0,
                                                            e[0].length
                                                        ) +
                                                        Q(
                                                            r.substr(
                                                                e[0].length
                                                            ),
                                                            this.settingsClone,
                                                            !0
                                                        );
                                                    this._setValueParts(
                                                        o,
                                                        n,
                                                        !0
                                                    ) ||
                                                        ((this.value =
                                                            e.join("")),
                                                        this._setCaretPosition(
                                                            e[0].length,
                                                            !1
                                                        ));
                                                }
                                            },
                                        },
                                        {
                                            key: "_skipAlways",
                                            value: function (e) {
                                                if (
                                                    ((e.ctrlKey || e.metaKey) &&
                                                        "keyup" === e.type &&
                                                        !a(
                                                            this
                                                                .valuePartsBeforePaste
                                                        )) ||
                                                    (e.shiftKey &&
                                                        this.eventKeyCode ===
                                                            y.Insert)
                                                )
                                                    return (
                                                        this._checkPaste(), !1
                                                    );
                                                if (
                                                    (this.eventKeyCode >=
                                                        y.F1 &&
                                                        this.eventKeyCode <=
                                                            y.F12) ||
                                                    (this.eventKeyCode >=
                                                        y.Windows &&
                                                        this.eventKeyCode <=
                                                            y.RightClick) ||
                                                    (this.eventKeyCode >=
                                                        y.Tab &&
                                                        this.eventKeyCode <
                                                            y.Space) ||
                                                    (this.eventKeyCode <
                                                        y.Backspace &&
                                                        (0 === e.which ||
                                                            e.which ===
                                                                this
                                                                    .eventKeyCode)) ||
                                                    this.eventKeyCode ===
                                                        y.NumLock ||
                                                    this.eventKeyCode ===
                                                        y.ScrollLock ||
                                                    this.eventKeyCode ===
                                                        y.Insert ||
                                                    this.eventKeyCode ===
                                                        y.Command
                                                )
                                                    return !0;
                                                if (
                                                    (e.ctrlKey || e.metaKey) &&
                                                    this.eventKeyCode === y.a
                                                ) {
                                                    if (
                                                        this.settings
                                                            .selectNumberOnly
                                                    ) {
                                                        e.preventDefault();
                                                        var t =
                                                                this.that.value
                                                                    .length,
                                                            i =
                                                                this.settings
                                                                    .currencySymbol
                                                                    .length,
                                                            r = L(
                                                                this.that.value
                                                            )
                                                                ? 1
                                                                : 0,
                                                            n =
                                                                this.settings
                                                                    .suffixText
                                                                    .length,
                                                            o =
                                                                this.settings
                                                                    .currencySymbolPlacement,
                                                            l =
                                                                this.settings
                                                                    .negativePositiveSignPlacement,
                                                            s = void 0;
                                                        s =
                                                            "s" === o
                                                                ? 0
                                                                : "l" === l &&
                                                                  1 === r &&
                                                                  i > 0
                                                                ? i + 1
                                                                : i;
                                                        var c = void 0;
                                                        if ("p" === o)
                                                            c = t - n;
                                                        else
                                                            switch (l) {
                                                                case "l":
                                                                    c =
                                                                        t -
                                                                        (n + i);
                                                                    break;
                                                                case "r":
                                                                    c =
                                                                        i > 0
                                                                            ? t -
                                                                              (i +
                                                                                  r +
                                                                                  n)
                                                                            : t -
                                                                              (i +
                                                                                  n);
                                                                    break;
                                                                default:
                                                                    c =
                                                                        t -
                                                                        (i + n);
                                                            }
                                                        Z(this.that, s, c);
                                                    }
                                                    return !0;
                                                }
                                                return (!e.ctrlKey &&
                                                    !e.metaKey) ||
                                                    (this.eventKeyCode !==
                                                        y.c &&
                                                        this.eventKeyCode !==
                                                            y.v &&
                                                        this.eventKeyCode !==
                                                            y.x)
                                                    ? !(
                                                          !e.ctrlKey &&
                                                          !e.metaKey
                                                      ) ||
                                                          (this.eventKeyCode ===
                                                              y.LeftArrow ||
                                                          this.eventKeyCode ===
                                                              y.RightArrow
                                                              ? ("keydown" !==
                                                                    e.type ||
                                                                    e.shiftKey ||
                                                                    (this
                                                                        .eventKeyCode !==
                                                                        y.LeftArrow ||
                                                                    (this.that.value.charAt(
                                                                        this
                                                                            .selection
                                                                            .start -
                                                                            2
                                                                    ) !==
                                                                        this
                                                                            .settingsClone
                                                                            .digitGroupSeparator &&
                                                                        this.that.value.charAt(
                                                                            this
                                                                                .selection
                                                                                .start -
                                                                                2
                                                                        ) !==
                                                                            this
                                                                                .settingsClone
                                                                                .decimalCharacter)
                                                                        ? this
                                                                              .eventKeyCode !==
                                                                              y.RightArrow ||
                                                                          (this.that.value.charAt(
                                                                              this
                                                                                  .selection
                                                                                  .start +
                                                                                  1
                                                                          ) !==
                                                                              this
                                                                                  .settingsClone
                                                                                  .digitGroupSeparator &&
                                                                              this.that.value.charAt(
                                                                                  this
                                                                                      .selection
                                                                                      .start +
                                                                                      1
                                                                              ) !==
                                                                                  this
                                                                                      .settingsClone
                                                                                      .decimalCharacter) ||
                                                                          this._setCaretPosition(
                                                                              this
                                                                                  .selection
                                                                                  .start +
                                                                                  1
                                                                          )
                                                                        : this._setCaretPosition(
                                                                              this
                                                                                  .selection
                                                                                  .start -
                                                                                  1
                                                                          )),
                                                                !0)
                                                              : this
                                                                    .eventKeyCode >=
                                                                    y.PageDown &&
                                                                this
                                                                    .eventKeyCode <=
                                                                    y.DownArrow)
                                                    : ("keydown" === e.type &&
                                                          this._expandSelectionOnSign(),
                                                      (this.eventKeyCode !==
                                                          y.v &&
                                                          this.eventKeyCode !==
                                                              y.Insert) ||
                                                          ("keydown" ===
                                                              e.type ||
                                                          "keypress" === e.type
                                                              ? a(
                                                                    this
                                                                        .valuePartsBeforePaste
                                                                ) &&
                                                                (this.valuePartsBeforePaste =
                                                                    this._getLeftAndRightPartAroundTheSelection())
                                                              : this._checkPaste()),
                                                      "keydown" === e.type ||
                                                          "keypress" ===
                                                              e.type ||
                                                          this.eventKeyCode ===
                                                              y.c);
                                            },
                                        },
                                        {
                                            key: "_processCharacterDeletionIfTrailingNegativeSign",
                                            value: function (e) {
                                                var t = s(e, 2),
                                                    a = t[0],
                                                    i = t[1],
                                                    r = this.settingsClone;
                                                return (
                                                    "p" ===
                                                        r.currencySymbolPlacement &&
                                                        "s" ===
                                                            r.negativePositiveSignPlacement &&
                                                        (this.eventKeyCode ===
                                                        y.Backspace
                                                            ? ((r.caretFix =
                                                                  this.selection
                                                                      .start >=
                                                                      this.value.indexOf(
                                                                          r.suffixText
                                                                      ) &&
                                                                  "" !==
                                                                      r.suffixText),
                                                              "-" ===
                                                              this.value.charAt(
                                                                  this.selection
                                                                      .start - 1
                                                              )
                                                                  ? (a =
                                                                        a.substring(
                                                                            1
                                                                        ))
                                                                  : this
                                                                        .selection
                                                                        .start <=
                                                                        this
                                                                            .value
                                                                            .length -
                                                                            r
                                                                                .suffixText
                                                                                .length &&
                                                                    (a =
                                                                        a.substring(
                                                                            0,
                                                                            a.length -
                                                                                1
                                                                        )))
                                                            : ((r.caretFix =
                                                                  this.selection
                                                                      .start >=
                                                                      this.value.indexOf(
                                                                          r.suffixText
                                                                      ) &&
                                                                  "" !==
                                                                      r.suffixText),
                                                              this.selection
                                                                  .start >=
                                                                  this.value.indexOf(
                                                                      r.currencySymbol
                                                                  ) +
                                                                      r
                                                                          .currencySymbol
                                                                          .length &&
                                                                  (i =
                                                                      i.substring(
                                                                          1,
                                                                          i.length
                                                                      )),
                                                              L(a) &&
                                                                  "-" ===
                                                                      this.value.charAt(
                                                                          this
                                                                              .selection
                                                                              .start
                                                                      ) &&
                                                                  (a =
                                                                      a.substring(
                                                                          1
                                                                      )))),
                                                    "s" ===
                                                        r.currencySymbolPlacement &&
                                                        "l" ===
                                                            r.negativePositiveSignPlacement &&
                                                        ((r.caretFix =
                                                            this.selection
                                                                .start >=
                                                            this.value.indexOf(
                                                                r.negativeSignCharacter
                                                            ) +
                                                                r
                                                                    .negativeSignCharacter
                                                                    .length),
                                                        this.eventKeyCode ===
                                                        y.Backspace
                                                            ? this.selection
                                                                  .start ===
                                                                  this.value.indexOf(
                                                                      r.negativeSignCharacter
                                                                  ) +
                                                                      r
                                                                          .negativeSignCharacter
                                                                          .length &&
                                                              k(
                                                                  this.value,
                                                                  r.negativeSignCharacter
                                                              )
                                                                ? (a =
                                                                      a.substring(
                                                                          1
                                                                      ))
                                                                : "-" !== a &&
                                                                  (this
                                                                      .selection
                                                                      .start <=
                                                                      this.value.indexOf(
                                                                          r.negativeSignCharacter
                                                                      ) ||
                                                                      !k(
                                                                          this
                                                                              .value,
                                                                          r.negativeSignCharacter
                                                                      )) &&
                                                                  (a =
                                                                      a.substring(
                                                                          0,
                                                                          a.length -
                                                                              1
                                                                      ))
                                                            : ("-" === a[0] &&
                                                                  (i =
                                                                      i.substring(
                                                                          1
                                                                      )),
                                                              this.selection
                                                                  .start ===
                                                                  this.value.indexOf(
                                                                      r.negativeSignCharacter
                                                                  ) &&
                                                                  k(
                                                                      this
                                                                          .value,
                                                                      r.negativeSignCharacter
                                                                  ) &&
                                                                  (a =
                                                                      a.substring(
                                                                          1
                                                                      )))),
                                                    "s" ===
                                                        r.currencySymbolPlacement &&
                                                        "r" ===
                                                            r.negativePositiveSignPlacement &&
                                                        ((r.caretFix =
                                                            this.selection
                                                                .start >=
                                                            this.value.indexOf(
                                                                r.negativeSignCharacter
                                                            ) +
                                                                r
                                                                    .negativeSignCharacter
                                                                    .length),
                                                        this.eventKeyCode ===
                                                        y.Backspace
                                                            ? this.selection
                                                                  .start ===
                                                              this.value.indexOf(
                                                                  r.negativeSignCharacter
                                                              ) +
                                                                  r
                                                                      .negativeSignCharacter
                                                                      .length
                                                                ? (a =
                                                                      a.substring(
                                                                          1
                                                                      ))
                                                                : "-" !== a &&
                                                                  this.selection
                                                                      .start <=
                                                                      this.value.indexOf(
                                                                          r.negativeSignCharacter
                                                                      ) -
                                                                          r
                                                                              .currencySymbol
                                                                              .length
                                                                ? (a =
                                                                      a.substring(
                                                                          0,
                                                                          a.length -
                                                                              1
                                                                      ))
                                                                : "" === a ||
                                                                  k(
                                                                      this
                                                                          .value,
                                                                      r.negativeSignCharacter
                                                                  ) ||
                                                                  (a =
                                                                      a.substring(
                                                                          0,
                                                                          a.length -
                                                                              1
                                                                      ))
                                                            : ((r.caretFix =
                                                                  this.selection
                                                                      .start >=
                                                                      this.value.indexOf(
                                                                          r.currencySymbol
                                                                      ) &&
                                                                  "" !==
                                                                      r.currencySymbol),
                                                              this.selection
                                                                  .start ===
                                                                  this.value.indexOf(
                                                                      r.negativeSignCharacter
                                                                  ) &&
                                                                  (a =
                                                                      a.substring(
                                                                          1
                                                                      )),
                                                              (i =
                                                                  i.substring(
                                                                      1
                                                                  )))),
                                                    [a, i]
                                                );
                                            },
                                        },
                                        {
                                            key: "_processCharacterDeletion",
                                            value: function () {
                                                var e = this.settingsClone,
                                                    t = void 0,
                                                    a = void 0;
                                                if (this.selection.length) {
                                                    this._expandSelectionOnSign(
                                                        !1
                                                    );
                                                    var i =
                                                            this._getUnformattedLeftAndRightPartAroundTheSelection(),
                                                        r = s(i, 2);
                                                    (t = r[0]), (a = r[1]);
                                                } else {
                                                    var n =
                                                            this._getUnformattedLeftAndRightPartAroundTheSelection(),
                                                        o = s(n, 2);
                                                    if (
                                                        ((t = o[0]),
                                                        (a = o[1]),
                                                        "" === t &&
                                                            "" === a &&
                                                            (e.throwInput = !1),
                                                        (("p" ===
                                                            e.currencySymbolPlacement &&
                                                            "s" ===
                                                                e.negativePositiveSignPlacement) ||
                                                            ("s" ===
                                                                e.currencySymbolPlacement &&
                                                                ("l" ===
                                                                    e.negativePositiveSignPlacement ||
                                                                    "r" ===
                                                                        e.negativePositiveSignPlacement))) &&
                                                            L(this.value))
                                                    ) {
                                                        var l =
                                                                this._processCharacterDeletionIfTrailingNegativeSign(
                                                                    [t, a]
                                                                ),
                                                            c = s(l, 2);
                                                        (t = c[0]), (a = c[1]);
                                                    } else
                                                        this.eventKeyCode ===
                                                        y.Backspace
                                                            ? (t = t.substring(
                                                                  0,
                                                                  t.length - 1
                                                              ))
                                                            : (a = a.substring(
                                                                  1,
                                                                  a.length
                                                              ));
                                                }
                                                this._setValueParts(t, a);
                                            },
                                        },
                                        {
                                            key: "_processCharacterInsertion",
                                            value: function (e) {
                                                var t = this.settingsClone,
                                                    a =
                                                        this._getUnformattedLeftAndRightPartAroundTheSelection(),
                                                    i = s(a, 2),
                                                    r = i[0],
                                                    n = i[1];
                                                t.throwInput = !0;
                                                var o = D(e);
                                                if (
                                                    o === t.decimalCharacter ||
                                                    (t.decimalCharacterAlternative &&
                                                        o ===
                                                            t.decimalCharacterAlternative) ||
                                                    (("." === o || "," === o) &&
                                                        this.eventKeyCode ===
                                                            y.DotNumpad)
                                                )
                                                    return (
                                                        !t.decimalPlacesOverride ||
                                                        !t.decimalCharacter ||
                                                        !(
                                                            !t.negativeSignCharacter ||
                                                            !k(
                                                                n,
                                                                t.negativeSignCharacter
                                                            )
                                                        ) ||
                                                        !!k(
                                                            r,
                                                            t.decimalCharacter
                                                        ) ||
                                                        n.indexOf(
                                                            t.decimalCharacter
                                                        ) > 0 ||
                                                        (0 ===
                                                            n.indexOf(
                                                                t.decimalCharacter
                                                            ) &&
                                                            (n = n.substr(1)),
                                                        this._setValueParts(
                                                            r +
                                                                t.decimalCharacter,
                                                            n
                                                        ),
                                                        !0)
                                                    );
                                                if (
                                                    ("-" === o || "+" === o) &&
                                                    "-" ===
                                                        t.negativeSignCharacter
                                                )
                                                    return (
                                                        !t ||
                                                        (("p" ===
                                                            t.currencySymbolPlacement &&
                                                            "s" ===
                                                                t.negativePositiveSignPlacement) ||
                                                        ("s" ===
                                                            t.currencySymbolPlacement &&
                                                            "p" !==
                                                                t.negativePositiveSignPlacement)
                                                            ? ("" === r &&
                                                                  k(
                                                                      n,
                                                                      t.negativeSignCharacter
                                                                  ) &&
                                                                  ((r =
                                                                      t.negativeSignCharacter),
                                                                  (n =
                                                                      n.substring(
                                                                          1,
                                                                          n.length
                                                                      ))),
                                                              (r =
                                                                  M(r) ||
                                                                  k(
                                                                      r,
                                                                      t.negativeSignCharacter
                                                                  )
                                                                      ? r.substring(
                                                                            1,
                                                                            r.length
                                                                        )
                                                                      : "-" ===
                                                                        o
                                                                      ? t.negativeSignCharacter +
                                                                        r
                                                                      : r))
                                                            : ("" === r &&
                                                                  k(
                                                                      n,
                                                                      t.negativeSignCharacter
                                                                  ) &&
                                                                  ((r =
                                                                      t.negativeSignCharacter),
                                                                  (n =
                                                                      n.substring(
                                                                          1,
                                                                          n.length
                                                                      ))),
                                                              (r =
                                                                  r.charAt(
                                                                      0
                                                                  ) ===
                                                                  t.negativeSignCharacter
                                                                      ? r.substring(
                                                                            1,
                                                                            r.length
                                                                        )
                                                                      : "-" ===
                                                                        o
                                                                      ? t.negativeSignCharacter +
                                                                        r
                                                                      : r)),
                                                        this._setValueParts(
                                                            r,
                                                            n
                                                        ),
                                                        !0)
                                                    );
                                                var l = Number(o);
                                                return l >= 0 && l <= 9
                                                    ? (t.negativeSignCharacter &&
                                                          "" === r &&
                                                          k(
                                                              n,
                                                              t.negativeSignCharacter
                                                          ) &&
                                                          ((r =
                                                              t.negativeSignCharacter),
                                                          (n = n.substring(
                                                              1,
                                                              n.length
                                                          ))),
                                                      t.maximumValue <= 0 &&
                                                          t.minimumValue <
                                                              t.maximumValue &&
                                                          !k(
                                                              this.value,
                                                              t.negativeSignCharacter
                                                          ) &&
                                                          "0" !== o &&
                                                          (r =
                                                              t.negativeSignCharacter +
                                                              r),
                                                      this._setValueParts(
                                                          r + o,
                                                          n
                                                      ),
                                                      !0)
                                                    : ((t.throwInput = !1), !1);
                                            },
                                        },
                                        {
                                            key: "_formatValue",
                                            value: function (t) {
                                                var a = this,
                                                    i = this.settingsClone,
                                                    r = this.value,
                                                    n =
                                                        this._getUnformattedLeftAndRightPartAroundTheSelection(),
                                                    o = s(n, 1),
                                                    l = o[0];
                                                if (
                                                    ("" ===
                                                        i.digitGroupSeparator ||
                                                        ("" !==
                                                            i.digitGroupSeparator &&
                                                            !k(
                                                                r,
                                                                i.digitGroupSeparator
                                                            ))) &&
                                                    ("" === i.currencySymbol ||
                                                        ("" !==
                                                            i.currencySymbol &&
                                                            !k(
                                                                r,
                                                                i.currencySymbol
                                                            )))
                                                ) {
                                                    var c = r.split(
                                                            i.decimalCharacter
                                                        ),
                                                        u = s(c, 1),
                                                        d = u[0],
                                                        m = "";
                                                    L(d) &&
                                                        ((m = "-"),
                                                        (d = d.replace(
                                                            "-",
                                                            ""
                                                        )),
                                                        (l = l.replace(
                                                            "-",
                                                            ""
                                                        ))),
                                                        "" === m &&
                                                            d.length >
                                                                i.mIntPos &&
                                                            "0" ===
                                                                l.charAt(0) &&
                                                            (l = l.slice(1)),
                                                        "-" === m &&
                                                            d.length >
                                                                i.mIntNeg &&
                                                            "0" ===
                                                                l.charAt(0) &&
                                                            (l = l.slice(1)),
                                                        (l = m + l);
                                                }
                                                var h = ie(
                                                        this.value,
                                                        this.settingsClone
                                                    ),
                                                    g = h.length;
                                                if (h) {
                                                    var v = l.split("");
                                                    ("s" ===
                                                        i.negativePositiveSignPlacement ||
                                                        ("s" ===
                                                            i.currencySymbolPlacement &&
                                                            "p" !==
                                                                i.negativePositiveSignPlacement)) &&
                                                        "-" === v[0] &&
                                                        "" !==
                                                            i.negativeSignCharacter &&
                                                        (v.shift(),
                                                        (this.eventKeyCode !==
                                                            y.Backspace &&
                                                            this
                                                                .eventKeyCode !==
                                                                y.Delete) ||
                                                            !i.caretFix ||
                                                            ("s" ===
                                                                i.currencySymbolPlacement &&
                                                                "l" ===
                                                                    i.negativePositiveSignPlacement &&
                                                                (v.push("-"),
                                                                (i.caretFix =
                                                                    "keydown" ===
                                                                    t.type)),
                                                            "p" ===
                                                                i.currencySymbolPlacement &&
                                                                "s" ===
                                                                    i.negativePositiveSignPlacement &&
                                                                (v.push("-"),
                                                                (i.caretFix =
                                                                    "keydown" ===
                                                                    t.type)),
                                                            "s" ===
                                                                i.currencySymbolPlacement &&
                                                                "r" ===
                                                                    i.negativePositiveSignPlacement &&
                                                                !(function () {
                                                                    var r =
                                                                            i.currencySymbol.split(
                                                                                ""
                                                                            ),
                                                                        n = [
                                                                            "\\",
                                                                            "^",
                                                                            "$",
                                                                            ".",
                                                                            "|",
                                                                            "?",
                                                                            "*",
                                                                            "+",
                                                                            "(",
                                                                            ")",
                                                                            "[",
                                                                        ],
                                                                        o = [];
                                                                    e.each(
                                                                        r,
                                                                        function (
                                                                            e,
                                                                            t
                                                                        ) {
                                                                            (t =
                                                                                r[
                                                                                    e
                                                                                ]),
                                                                                V(
                                                                                    t,
                                                                                    n
                                                                                )
                                                                                    ? o.push(
                                                                                          "\\" +
                                                                                              t
                                                                                      )
                                                                                    : o.push(
                                                                                          t
                                                                                      );
                                                                        }
                                                                    ),
                                                                        a.eventKeyCode ===
                                                                            y.Backspace &&
                                                                            o.push(
                                                                                "-"
                                                                            ),
                                                                        v.push(
                                                                            o.join(
                                                                                ""
                                                                            )
                                                                        ),
                                                                        (i.caretFix =
                                                                            "keydown" ===
                                                                            t.type);
                                                                })()));
                                                    for (
                                                        var p = 0;
                                                        p < v.length;
                                                        p++
                                                    )
                                                        v[p].match("\\d") ||
                                                            (v[p] =
                                                                "\\" + v[p]);
                                                    var f = new RegExp(
                                                            "^.*?" +
                                                                v.join(".*?")
                                                        ),
                                                        S = h.match(f);
                                                    S
                                                        ? ((g = S[0].length),
                                                          i.showPositiveSign &&
                                                              (0 === g &&
                                                                  S.input.charAt(
                                                                      0
                                                                  ) ===
                                                                      i.positiveSignCharacter &&
                                                                  (g =
                                                                      1 ===
                                                                      S.input.indexOf(
                                                                          i.currencySymbol
                                                                      )
                                                                          ? i
                                                                                .currencySymbol
                                                                                .length +
                                                                            1
                                                                          : 1),
                                                              0 === g &&
                                                                  S.input.charAt(
                                                                      i
                                                                          .currencySymbol
                                                                          .length
                                                                  ) ===
                                                                      i.positiveSignCharacter &&
                                                                  (g =
                                                                      i
                                                                          .currencySymbol
                                                                          .length +
                                                                      1)),
                                                          ((0 === g &&
                                                              h.charAt(0) !==
                                                                  i.negativeSignCharacter) ||
                                                              (1 === g &&
                                                                  h.charAt(
                                                                      0
                                                                  ) ===
                                                                      i.negativeSignCharacter)) &&
                                                              i.currencySymbol &&
                                                              "p" ===
                                                                  i.currencySymbolPlacement &&
                                                              (g =
                                                                  this
                                                                      .settingsClone
                                                                      .currencySymbol
                                                                      .length +
                                                                  (M(h)
                                                                      ? 1
                                                                      : 0)))
                                                        : (i.currencySymbol &&
                                                              "s" ===
                                                                  i.currencySymbolPlacement &&
                                                              (g -=
                                                                  i
                                                                      .currencySymbol
                                                                      .length),
                                                          i.suffixText &&
                                                              (g -=
                                                                  i.suffixText
                                                                      .length));
                                                }
                                                (h === this.that.value &&
                                                    (h !== this.that.value ||
                                                        (this.eventKeyCode !==
                                                            y.num0 &&
                                                            this
                                                                .eventKeyCode !==
                                                                y.numpad0))) ||
                                                    ((this.that.value = h),
                                                    this._setCaretPosition(g)),
                                                    (this.formatted = !0);
                                            },
                                        },
                                    ]),
                                    t
                                );
                            })(),
                            Ue = {
                                init: function (a) {
                                    return this.each(function () {
                                        var i = e(this),
                                            r = ke(i),
                                            n = Ee(a, i, !1);
                                        if (t(n)) return this;
                                        var o = de(i, n, !1);
                                        !n.runOnce &&
                                            n.formatOnPageLoad &&
                                            Ve(n, r, i),
                                            (n.runOnce = !0),
                                            r &&
                                                (this.addEventListener(
                                                    "focusin",
                                                    function (e) {
                                                        Se(i, o, e);
                                                    },
                                                    !1
                                                ),
                                                this.addEventListener(
                                                    "mouseenter",
                                                    function (e) {
                                                        Se(i, o, e);
                                                    },
                                                    !1
                                                ),
                                                this.addEventListener(
                                                    "focusout",
                                                    function (e) {
                                                        we(i, o, e);
                                                    },
                                                    !1
                                                ),
                                                this.addEventListener(
                                                    "mouseleave",
                                                    function (e) {
                                                        we(i, o, e);
                                                    },
                                                    !1
                                                ),
                                                this.addEventListener(
                                                    "keydown",
                                                    function (e) {
                                                        be(o, e);
                                                    },
                                                    !1
                                                ),
                                                this.addEventListener(
                                                    "keypress",
                                                    function (e) {
                                                        Pe(o, e);
                                                    },
                                                    !1
                                                ),
                                                this.addEventListener(
                                                    "keyup",
                                                    function (e) {
                                                        Ce(o, n, e);
                                                    },
                                                    !1
                                                ),
                                                this.addEventListener(
                                                    "blur",
                                                    function (e) {
                                                        Oe(o, e);
                                                    },
                                                    !1
                                                ),
                                                this.addEventListener(
                                                    "paste",
                                                    function (e) {
                                                        xe(i, o, e);
                                                    },
                                                    !1
                                                ),
                                                Ne(i, o));
                                    });
                                },
                                destroy: function () {
                                    return e(this).each(function () {
                                        var e = ue(this),
                                            t = e.data("autoNumeric");
                                        "object" ===
                                            ("undefined" == typeof t
                                                ? "undefined"
                                                : c(t)) &&
                                            (e.val(""),
                                            fe(e[0], t, "wipe"),
                                            e.removeData("autoNumeric"),
                                            e.off(".autoNumeric"));
                                    });
                                },
                                wipe: function () {
                                    return e(this).each(function () {
                                        var e = ue(this),
                                            t = e.data("autoNumeric");
                                        "object" ===
                                            ("undefined" == typeof t
                                                ? "undefined"
                                                : c(t)) &&
                                            (e.val(""),
                                            (t.rawValue = ""),
                                            fe(e[0], t, "wipe"));
                                    });
                                },
                                update: function (t) {
                                    return e(this).each(function () {
                                        var e = ue(this),
                                            a = e.autoNumeric("get"),
                                            i = Ee(t, e, !0);
                                        if (
                                            (de(e, i, !0),
                                            "" !== e.val() || "" !== e.text())
                                        )
                                            return e.autoNumeric("set", a);
                                    });
                                },
                                set: function (t) {
                                    return e(this).each(function () {
                                        if (null !== t && !a(t)) {
                                            var e = ue(this),
                                                i = e.data("autoNumeric");
                                            "object" !==
                                                ("undefined" == typeof i
                                                    ? "undefined"
                                                    : c(i)) &&
                                                z(
                                                    'Initializing autoNumeric is required prior to calling the "set" method.'
                                                ),
                                                (i.trailingNegative = !1);
                                            var r = e.is(
                                                    "input[type=text], input[type=hidden], input[type=tel], input:not([type])"
                                                ),
                                                n = Ie(t, i);
                                            if (isNaN(n)) return e.val("");
                                            if ("" === n) return e.val("");
                                            var o = ce(n, i),
                                                l = s(o, 2),
                                                u = l[0],
                                                d = l[1],
                                                m = E(n);
                                            if ((m && (n = "0"), !u || !d)) {
                                                (i.rawValue = ""),
                                                    fe(e[0], i, "wipe");
                                                var h = n;
                                                return (
                                                    (n = ""),
                                                    u ||
                                                        e.trigger(
                                                            "autoNumeric:minExceeded"
                                                        ),
                                                    d ||
                                                        e.trigger(
                                                            "autoNumeric:maxExceeded"
                                                        ),
                                                    z(
                                                        "The value [" +
                                                            h +
                                                            "] being set falls outside of the minimumValue [" +
                                                            i.minimumValue +
                                                            "] and maximumValue [" +
                                                            i.maximumValue +
                                                            "] range set for this element"
                                                    ),
                                                    e.val("")
                                                );
                                            }
                                            if (
                                                r ||
                                                V(
                                                    e
                                                        .prop("tagName")
                                                        .toLowerCase(),
                                                    i.tagList
                                                )
                                            ) {
                                                var g = !1;
                                                if (
                                                    i.decimalPlacesShownOnFocus
                                                ) {
                                                    var v =
                                                        i.decimalPlacesOverride;
                                                    (i.decimalPlacesOverride =
                                                        i.decimalPlacesShownOnFocus),
                                                        (n = ne(n, i)),
                                                        (g = !0),
                                                        (i.decimalPlacesOverride =
                                                            v);
                                                }
                                                if (
                                                    i.scaleDivisor &&
                                                    !i.onOff &&
                                                    ((n = Ie(n, i)),
                                                    (n /= i.scaleDivisor),
                                                    (n = n.toString()),
                                                    i.scaleDecimalPlaces)
                                                ) {
                                                    var p =
                                                        i.decimalPlacesOverride;
                                                    (i.decimalPlacesOverride =
                                                        i.scaleDecimalPlaces),
                                                        (n = ne(n, i)),
                                                        (g = !0),
                                                        (i.decimalPlacesOverride =
                                                            p);
                                                }
                                                g || (n = ne(n, i)),
                                                    (i.rawValue = ve(
                                                        n.replace(
                                                            i.decimalCharacter,
                                                            "."
                                                        ),
                                                        i
                                                    )),
                                                    (n = te(n, i)),
                                                    (n = ie(n, i));
                                            }
                                            return (
                                                i.saveValueToSessionStorage &&
                                                    (i.decimalPlacesShownOnFocus ||
                                                        i.scaleDivisor) &&
                                                    fe(e[0], i, "set"),
                                                !i.hasFocus &&
                                                    i.scaleSymbol &&
                                                    (n += i.scaleSymbol),
                                                r
                                                    ? e.val(n)
                                                    : !!V(
                                                          e
                                                              .prop("tagName")
                                                              .toLowerCase(),
                                                          i.tagList
                                                      ) && e.text(n)
                                            );
                                        }
                                    });
                                },
                                unSet: function () {
                                    return e(this).each(function () {
                                        var e = ue(this),
                                            t = e.data("autoNumeric");
                                        "object" ===
                                            ("undefined" == typeof t
                                                ? "undefined"
                                                : c(t)) &&
                                            ((t.hasFocus = !0),
                                            e.val(
                                                e.autoNumeric("getLocalized")
                                            ));
                                    });
                                },
                                reSet: function () {
                                    return e(this).each(function () {
                                        var e = ue(this),
                                            t = e.data("autoNumeric");
                                        "object" ===
                                            ("undefined" == typeof t
                                                ? "undefined"
                                                : c(t)) &&
                                            e.autoNumeric("set", e.val());
                                    });
                                },
                                get: function () {
                                    var e = ue(this),
                                        t = e.is(
                                            "input[type=text], input[type=hidden], input[type=tel], input:not([type])"
                                        ),
                                        a = e.data("autoNumeric");
                                    "object" !==
                                        ("undefined" == typeof a
                                            ? "undefined"
                                            : c(a)) &&
                                        z(
                                            'Initializing autoNumeric is required prior to calling the "get" method.'
                                        );
                                    var i = "";
                                    if (
                                        (t
                                            ? (i = e.eq(0).val())
                                            : V(
                                                  e
                                                      .prop("tagName")
                                                      .toLowerCase(),
                                                  a.tagList
                                              )
                                            ? (i = e.eq(0).text())
                                            : z(
                                                  'The "<' +
                                                      e
                                                          .prop("tagName")
                                                          .toLowerCase() +
                                                      '>" tag is not supported by autoNumeric'
                                              ),
                                        a.decimalPlacesShownOnFocus ||
                                            a.scaleDivisor)
                                    )
                                        i = a.rawValue;
                                    else {
                                        var r = L(i);
                                        if (
                                            !/\d/.test(i) &&
                                            "focus" === a.emptyInputBehavior
                                        )
                                            return "";
                                        "" !== i &&
                                            null !==
                                                a.negativeBracketsTypeOnBlur &&
                                            ((a.hasFocus = !0), (i = J(i, a))),
                                            (a.runOnce ||
                                                a.formatOnPageLoad === !1) &&
                                                ((i = Q(i, a, !0)),
                                                (i = ve(
                                                    i.replace(
                                                        a.decimalCharacter,
                                                        "."
                                                    ),
                                                    a
                                                )),
                                                a.trailingNegative &&
                                                    r &&
                                                    !L(i) &&
                                                    0 !== Number(i) &&
                                                    (i = "-" + i)),
                                            ("" !== i ||
                                                ("" === i &&
                                                    "zero" ===
                                                        a.emptyInputBehavior)) &&
                                                (i = ee(i, a));
                                    }
                                    return pe(i);
                                },
                                getLocalized: function () {
                                    var e = ue(this),
                                        t = e.autoNumeric("get"),
                                        a = e.data("autoNumeric");
                                    return (
                                        0 === Number(t) &&
                                            "keep" !== a.leadingZero &&
                                            (t = "0"),
                                        X(t, a.outputFormat)
                                    );
                                },
                                getNumber: function () {
                                    var e = ue(this),
                                        t = e.autoNumeric("get");
                                    return X(t, "number");
                                },
                                getFormatted: function () {
                                    return (
                                        (this.hasOwnProperty("0") &&
                                            "value" in this[0]) ||
                                            z(
                                                "Unable to get the formatted string from the element."
                                            ),
                                        this[0].value
                                    );
                                },
                                getString: function () {
                                    return ye(!1, this);
                                },
                                getArray: function () {
                                    return ye(!0, this);
                                },
                                getSettings: function () {
                                    return this.data("autoNumeric");
                                },
                            };
                        (e.fn.autoNumeric = function (e) {
                            if (Ue[e]) {
                                for (
                                    var t = arguments.length,
                                        a = Array(t > 1 ? t - 1 : 0),
                                        i = 1;
                                    i < t;
                                    i++
                                )
                                    a[i - 1] = arguments[i];
                                return Ue[e].apply(this, a);
                            }
                            return "object" !==
                                ("undefined" == typeof e
                                    ? "undefined"
                                    : c(e)) && e
                                ? void z(
                                      'Method "' +
                                          e +
                                          '" is not supported by autoNumeric'
                                  )
                                : Ue.init.apply(this, [e]);
                        }),
                            (m = function () {
                                return f;
                            }),
                            (e.fn.autoNumeric.defaults = f),
                            (h = function () {
                                return O;
                            }),
                            (e.fn.autoNumeric.lang = O),
                            (u = function (i) {
                                var n =
                                    arguments.length > 1 &&
                                    void 0 !== arguments[1]
                                        ? arguments[1]
                                        : null;
                                if (a(i) || null === i) return null;
                                r(i) ||
                                    w(i) ||
                                    z(
                                        'The value "' +
                                            i +
                                            '" being "set" is not numeric and therefore cannot be used appropriately.'
                                    );
                                var o = e.extend({}, f, { strip: !1 }, n);
                                i < 0 && (o.negativeSignCharacter = "-"),
                                    t(o.decimalPlacesOverride) &&
                                        (o.decimalPlacesOverride = W(
                                            o.minimumValue,
                                            o.maximumValue
                                        ));
                                var l = Ie(i, o);
                                isNaN(l) &&
                                    z(
                                        "The value [" +
                                            l +
                                            "] that you are trying to format is not a recognized number."
                                    );
                                var c = ce(l, o),
                                    u = s(c, 2),
                                    d = u[0],
                                    m = u[1];
                                return (
                                    (d && m) ||
                                        (Ke(
                                            "autoFormat.autoNumeric",
                                            document,
                                            "Range test failed"
                                        ),
                                        z(
                                            "The value [" +
                                                l +
                                                "] being set falls outside of the minimumValue [" +
                                                o.minimumValue +
                                                "] and maximumValue [" +
                                                o.maximumValue +
                                                "] range set for this element"
                                        )),
                                    (l = ne(l, o)),
                                    (l = te(l, o)),
                                    (l = ie(l, o))
                                );
                            }),
                            (e.fn.autoFormat = u),
                            (d = function (t, i) {
                                if (a(t) || null === t) return null;
                                if (w(t)) return Number(t);
                                (F(t) || P(t)) &&
                                    z(
                                        "A number or a string representing a number is needed to be able to unformat it, [" +
                                            t +
                                            "] given."
                                    );
                                var r = e.extend({}, f, { strip: !1 }, i),
                                    n = "-0123456789\\" + r.decimalCharacter,
                                    o = new RegExp("[^" + n + "]", "gi");
                                return (
                                    (t = t.toString()),
                                    L(t)
                                        ? (r.negativeSignCharacter = "-")
                                        : r.negativeBracketsTypeOnBlur &&
                                          r.negativeBracketsTypeOnBlur.split(
                                              ","
                                          )[0] === t.charAt(0) &&
                                          ((r.negativeSignCharacter = "-"),
                                          (r.hasFocus = !0),
                                          (t = J(t, r))),
                                    (t = t.replace(o, "")),
                                    (t = t.replace(r.decimalCharacter, ".")),
                                    (t = X(t, r.outputFormat))
                                );
                            }),
                            (e.fn.autoUnformat = d),
                            (g = function (a) {
                                var o =
                                    !(
                                        arguments.length > 1 &&
                                        void 0 !== arguments[1]
                                    ) || arguments[1];
                                (i(a) || !P(a) || C(a)) &&
                                    z(
                                        "The userOptions are invalid ; it should be a valid object, [" +
                                            a +
                                            "] given."
                                    ),
                                    t(a) || Me(a);
                                var l = void 0;
                                (l = o ? e.extend({}, f, a) : a),
                                    b(l.showWarnings) ||
                                        n(l.showWarnings) ||
                                        z(
                                            "The debug option 'showWarnings' is invalid ; it should be either 'false' or 'true', [" +
                                                l.showWarnings +
                                                "] given."
                                        );
                                var s = /^[0-9]+$/,
                                    c = /[0-9]+/,
                                    u = /^-?[0-9]+(\.?[0-9]+)?$/,
                                    d = /^[0-9]+(\.?[0-9]+)?$/;
                                V(l.digitGroupSeparator, [
                                    ",",
                                    ".",
                                    " ",
                                    " ",
                                    " ",
                                    " ",
                                    "",
                                    "'",
                                    "٬",
                                    "˙",
                                ]) ||
                                    z(
                                        "The thousand separator character option 'digitGroupSeparator' is invalid ; it should be ',', '.', '٬', '˙', \"'\", ' ', ' ', ' ', ' ' or empty (''), [" +
                                            l.digitGroupSeparator +
                                            "] given."
                                    ),
                                    b(l.noSeparatorOnFocus) ||
                                        n(l.noSeparatorOnFocus) ||
                                        z(
                                            "The 'noSeparatorOnFocus' option is invalid ; it should be either 'false' or 'true', [" +
                                                l.noSeparatorOnFocus +
                                                "] given."
                                        ),
                                    s.test(l.digitalGroupSpacing) ||
                                        z(
                                            "The digital grouping for thousand separator option 'digitalGroupSpacing' is invalid ; it should be a positive integer, [" +
                                                l.digitalGroupSpacing +
                                                "] given."
                                        ),
                                    V(l.decimalCharacter, [
                                        ",",
                                        ".",
                                        "·",
                                        "٫",
                                        "⎖",
                                    ]) ||
                                        z(
                                            "The decimal separator character option 'decimalCharacter' is invalid ; it should be '.', ',', '·', '⎖' or '٫', [" +
                                                l.decimalCharacter +
                                                "] given."
                                        ),
                                    l.decimalCharacter ===
                                        l.digitGroupSeparator &&
                                        z(
                                            "autoNumeric will not function properly when the decimal character 'decimalCharacter' [" +
                                                l.decimalCharacter +
                                                "] and the thousand separator 'digitGroupSeparator' [" +
                                                l.digitGroupSeparator +
                                                "] are the same character."
                                        ),
                                    t(l.decimalCharacterAlternative) ||
                                        r(l.decimalCharacterAlternative) ||
                                        z(
                                            "The alternate decimal separator character option 'decimalCharacterAlternative' is invalid ; it should be a string, [" +
                                                l.decimalCharacterAlternative +
                                                "] given."
                                        ),
                                    "" === l.currencySymbol ||
                                        r(l.currencySymbol) ||
                                        z(
                                            "The currency symbol option 'currencySymbol' is invalid ; it should be a string, [" +
                                                l.currencySymbol +
                                                "] given."
                                        ),
                                    V(l.currencySymbolPlacement, ["p", "s"]) ||
                                        z(
                                            "The placement of the currency sign option 'currencySymbolPlacement' is invalid ; it should either be 'p' (prefix) or 's' (suffix), [" +
                                                l.currencySymbolPlacement +
                                                "] given."
                                        ),
                                    V(l.negativePositiveSignPlacement, [
                                        "p",
                                        "s",
                                        "l",
                                        "r",
                                        null,
                                    ]) ||
                                        z(
                                            "The placement of the negative sign option 'negativePositiveSignPlacement' is invalid ; it should either be 'p' (prefix), 's' (suffix), 'l' (left), 'r' (right) or 'null', [" +
                                                l.negativePositiveSignPlacement +
                                                "] given."
                                        ),
                                    b(l.showPositiveSign) ||
                                        n(l.showPositiveSign) ||
                                        z(
                                            "The show positive sign option 'showPositiveSign' is invalid ; it should be either 'false' or 'true', [" +
                                                l.showPositiveSign +
                                                "] given."
                                        ),
                                    (!r(l.suffixText) ||
                                        ("" !== l.suffixText &&
                                            (L(l.suffixText) ||
                                                c.test(l.suffixText)))) &&
                                        z(
                                            "The additional suffix option 'suffixText' is invalid ; it should not contains the negative sign '-' nor any numerical characters, [" +
                                                l.suffixText +
                                                "] given."
                                        ),
                                    t(l.overrideMinMaxLimits) ||
                                        V(l.overrideMinMaxLimits, [
                                            "ceiling",
                                            "floor",
                                            "ignore",
                                        ]) ||
                                        z(
                                            "The override min & max limits option 'overrideMinMaxLimits' is invalid ; it should either be 'ceiling', 'floor' or 'ignore', [" +
                                                l.overrideMinMaxLimits +
                                                "] given."
                                        ),
                                    (r(l.maximumValue) &&
                                        u.test(l.maximumValue)) ||
                                        z(
                                            "The maximum possible value option 'maximumValue' is invalid ; it should be a string that represents a positive or negative number, [" +
                                                l.maximumValue +
                                                "] given."
                                        ),
                                    (r(l.minimumValue) &&
                                        u.test(l.minimumValue)) ||
                                        z(
                                            "The minimum possible value option 'minimumValue' is invalid ; it should be a string that represents a positive or negative number, [" +
                                                l.minimumValue +
                                                "] given."
                                        ),
                                    parseFloat(l.minimumValue) >
                                        parseFloat(l.maximumValue) &&
                                        z(
                                            "The minimum possible value option is greater than the maximum possible value option ; 'minimumValue' [" +
                                                l.minimumValue +
                                                "] should be smaller than 'maximumValue' [" +
                                                l.maximumValue +
                                                "]."
                                        ),
                                    t(l.decimalPlacesOverride) ||
                                        (x(l.decimalPlacesOverride) &&
                                            l.decimalPlacesOverride >= 0) ||
                                        (r(l.decimalPlacesOverride) &&
                                            s.test(l.decimalPlacesOverride)) ||
                                        z(
                                            "The maximum number of decimal places option 'decimalPlacesOverride' is invalid ; it should be a positive integer, [" +
                                                l.decimalPlacesOverride +
                                                "] given."
                                        );
                                var m = W(l.minimumValue, l.maximumValue);
                                t(l.decimalPlacesOverride) ||
                                    m === Number(l.decimalPlacesOverride) ||
                                    H(
                                        "Setting 'decimalPlacesOverride' to [" +
                                            l.decimalPlacesOverride +
                                            "] will override the decimals declared in 'minimumValue' [" +
                                            l.minimumValue +
                                            "] and 'maximumValue' [" +
                                            l.maximumValue +
                                            "].",
                                        l.showWarnings
                                    ),
                                    l.allowDecimalPadding ||
                                        t(l.decimalPlacesOverride) ||
                                        H(
                                            "Setting 'allowDecimalPadding' to [false] will override the current 'decimalPlacesOverride' setting [" +
                                                l.decimalPlacesOverride +
                                                "].",
                                            l.showWarnings
                                        ),
                                    t(l.decimalPlacesShownOnFocus) ||
                                        (r(l.decimalPlacesShownOnFocus) &&
                                            s.test(
                                                l.decimalPlacesShownOnFocus
                                            )) ||
                                        z(
                                            "The number of expanded decimal places option 'decimalPlacesShownOnFocus' is invalid ; it should be a positive integer, [" +
                                                l.decimalPlacesShownOnFocus +
                                                "] given."
                                        ),
                                    !t(l.decimalPlacesShownOnFocus) &&
                                        !t(l.decimalPlacesOverride) &&
                                        Number(l.decimalPlacesOverride) >
                                            Number(
                                                l.decimalPlacesShownOnFocus
                                            ) &&
                                        H(
                                            "The extended decimal places 'decimalPlacesShownOnFocus' [" +
                                                l.decimalPlacesShownOnFocus +
                                                "] should be greater than the 'decimalPlacesOverride' [" +
                                                l.decimalPlacesOverride +
                                                "] value. Currently, this will limit the ability of your client to manually change some of the decimal places. Do you really want to do that?",
                                            l.showWarnings
                                        ),
                                    t(l.scaleDivisor) ||
                                        d.test(l.scaleDivisor) ||
                                        z(
                                            "The scale divisor option 'scaleDivisor' is invalid ; it should be a positive number, preferably an integer, [" +
                                                l.scaleDivisor +
                                                "] given."
                                        ),
                                    t(l.scaleDecimalPlaces) ||
                                        s.test(l.scaleDecimalPlaces) ||
                                        z(
                                            "The scale number of decimals option 'scaleDecimalPlaces' is invalid ; it should be a positive integer, [" +
                                                l.scaleDecimalPlaces +
                                                "] given."
                                        ),
                                    t(l.scaleSymbol) ||
                                        r(l.scaleSymbol) ||
                                        z(
                                            "The scale symbol option 'scaleSymbol' is invalid ; it should be a string, [" +
                                                l.scaleSymbol +
                                                "] given."
                                        ),
                                    b(l.saveValueToSessionStorage) ||
                                        n(l.saveValueToSessionStorage) ||
                                        z(
                                            "The save to session storage option 'saveValueToSessionStorage' is invalid ; it should be either 'false' or 'true', [" +
                                                l.saveValueToSessionStorage +
                                                "] given."
                                        ),
                                    V(l.onInvalidPaste, [
                                        "error",
                                        "ignore",
                                        "clamp",
                                        "truncate",
                                        "replace",
                                    ]) ||
                                        z(
                                            "The paste behavior option 'onInvalidPaste' is invalid ; it should either be 'error', 'ignore', 'clamp', 'truncate' or 'replace' (cf. documentation), [" +
                                                l.onInvalidPaste +
                                                "] given."
                                        ),
                                    V(l.roundingMethod, [
                                        "S",
                                        "A",
                                        "s",
                                        "a",
                                        "B",
                                        "U",
                                        "D",
                                        "C",
                                        "F",
                                        "N05",
                                        "CHF",
                                        "U05",
                                        "D05",
                                    ]) ||
                                        z(
                                            "The rounding method option 'roundingMethod' is invalid ; it should either be 'S', 'A', 's', 'a', 'B', 'U', 'D', 'C', 'F', 'N05', 'CHF', 'U05' or 'D05' (cf. documentation), [" +
                                                l.roundingMethod +
                                                "] given."
                                        ),
                                    b(l.allowDecimalPadding) ||
                                        n(l.allowDecimalPadding) ||
                                        z(
                                            "The control decimal padding option 'allowDecimalPadding' is invalid ; it should be either 'false' or 'true', [" +
                                                l.allowDecimalPadding +
                                                "] given."
                                        ),
                                    t(l.negativeBracketsTypeOnBlur) ||
                                        V(l.negativeBracketsTypeOnBlur, [
                                            "(,)",
                                            "[,]",
                                            "<,>",
                                            "{,}",
                                        ]) ||
                                        z(
                                            "The brackets for negative values option 'negativeBracketsTypeOnBlur' is invalid ; it should either be '(,)', '[,]', '<,>' or '{,}', [" +
                                                l.negativeBracketsTypeOnBlur +
                                                "] given."
                                        ),
                                    V(l.emptyInputBehavior, [
                                        "focus",
                                        "press",
                                        "always",
                                        "zero",
                                    ]) ||
                                        z(
                                            "The display on empty string option 'emptyInputBehavior' is invalid ; it should either be 'focus', 'press', 'always' or 'zero', [" +
                                                l.emptyInputBehavior +
                                                "] given."
                                        ),
                                    V(l.leadingZero, [
                                        "allow",
                                        "deny",
                                        "keep",
                                    ]) ||
                                        z(
                                            "The leading zero behavior option 'leadingZero' is invalid ; it should either be 'allow', 'deny' or 'keep', [" +
                                                l.leadingZero +
                                                "] given."
                                        ),
                                    b(l.formatOnPageLoad) ||
                                        n(l.formatOnPageLoad) ||
                                        z(
                                            "The format on initialization option 'formatOnPageLoad' is invalid ; it should be either 'false' or 'true', [" +
                                                l.formatOnPageLoad +
                                                "] given."
                                        ),
                                    b(l.selectNumberOnly) ||
                                        n(l.selectNumberOnly) ||
                                        z(
                                            "The select number only option 'selectNumberOnly' is invalid ; it should be either 'false' or 'true', [" +
                                                l.selectNumberOnly +
                                                "] given."
                                        ),
                                    t(l.defaultValueOverride) ||
                                        "" === l.defaultValueOverride ||
                                        u.test(l.defaultValueOverride) ||
                                        z(
                                            "The unformatted default value option 'defaultValueOverride' is invalid ; it should be a string that represents a positive or negative number, [" +
                                                l.defaultValueOverride +
                                                "] given."
                                        ),
                                    b(l.unformatOnSubmit) ||
                                        n(l.unformatOnSubmit) ||
                                        z(
                                            "The remove formatting on submit option 'unformatOnSubmit' is invalid ; it should be either 'false' or 'true', [" +
                                                l.unformatOnSubmit +
                                                "] given."
                                        ),
                                    t(l.outputFormat) ||
                                        V(l.outputFormat, [
                                            "string",
                                            "number",
                                            ".",
                                            "-.",
                                            ",",
                                            "-,",
                                            ".-",
                                            ",-",
                                        ]) ||
                                        z(
                                            "The custom locale format option 'outputFormat' is invalid ; it should either be null, 'string', 'number', '.', '-.', ',', '-,', '.-' or ',-', [" +
                                                l.outputFormat +
                                                "] given."
                                        ),
                                    b(l.failOnUnknownOption) ||
                                        n(l.failOnUnknownOption) ||
                                        z(
                                            "The debug option 'failOnUnknownOption' is invalid ; it should be either 'false' or 'true', [" +
                                                l.failOnUnknownOption +
                                                "] given."
                                        );
                            }),
                            (e.fn.autoValidate = g),
                            (v = function (e) {
                                var t = !0;
                                try {
                                    g(e);
                                } catch (e) {
                                    t = !1;
                                }
                                return t;
                            }),
                            (function () {
                                function e(e, t) {
                                    t = t || {
                                        bubbles: !1,
                                        cancelable: !1,
                                        detail: void 0,
                                    };
                                    var a = document.createEvent("CustomEvent");
                                    return (
                                        a.initCustomEvent(
                                            e,
                                            t.bubbles,
                                            t.cancelable,
                                            t.detail
                                        ),
                                        a
                                    );
                                }
                                return (
                                    "function" != typeof window.CustomEvent &&
                                    ((e.prototype = window.Event.prototype),
                                    void (window.CustomEvent = e))
                                );
                            })();
                    }),
                    (t.default = {
                        format: u,
                        unFormat: d,
                        getDefaultConfig: m,
                        getLanguages: h,
                        validate: g,
                        areSettingsValid: v,
                    });
            }).call(window);
        },
        function (t, a) {
            t.exports = e;
        },
    ]);
});
//# sourceMappingURL=autoNumeric.min.js.map

window.formatAngka = function (
    nameId
) {
    const autoRupiah = {
        digitGroupSeparator: ".",
        decimalCharacter: ",",
        decimalPlacesOverride: 0,
        currencySymbolPlacement: "s",
        roundingMethod: "U",
    };

    $(nameId).autoNumeric("init", autoRupiah);
}
