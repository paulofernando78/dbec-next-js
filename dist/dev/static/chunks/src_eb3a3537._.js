(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/hooks/useMediaQuery.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useMediaQuery",
    ()=>useMediaQuery
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function useMediaQuery(query) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(4);
    if ($[0] !== "594a3c7e1610cf18f19815ff310161e097fc85c035df0c082148c9330a83eb56") {
        for(let $i = 0; $i < 4; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "594a3c7e1610cf18f19815ff310161e097fc85c035df0c082148c9330a83eb56";
    }
    const [matches, setMatches] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    let t0;
    let t1;
    if ($[1] !== query) {
        t0 = ({
            "useMediaQuery[useEffect()]": ()=>{
                const media = window.matchMedia(query);
                setTimeout({
                    "useMediaQuery[useEffect() > setTimeout()]": ()=>{
                        setMatches(media.matches);
                    }
                }["useMediaQuery[useEffect() > setTimeout()]"], 0);
                const listener = {
                    "useMediaQuery[useEffect() > listener]": ()=>setMatches(media.matches)
                }["useMediaQuery[useEffect() > listener]"];
                media.addEventListener("change", listener);
                return ()=>media.removeEventListener("change", listener);
            }
        })["useMediaQuery[useEffect()]"];
        t1 = [
            query
        ];
        $[1] = query;
        $[2] = t0;
        $[3] = t1;
    } else {
        t0 = $[2];
        t1 = $[3];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t0, t1);
    return matches;
}
_s(useMediaQuery, "/aV7jSECvYA0Ea4uAEPK2AzROhs=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/context/headerContext.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "HeaderContext",
    ()=>HeaderContext,
    "HeaderProvider",
    ()=>HeaderProvider
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useMediaQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useMediaQuery.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
const { createContext, useState, useEffect } = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
const HeaderContext = createContext();
const HeaderProvider = (props)=>{
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(18);
    if ($[0] !== "95318d0299bce2e8906d3b3cc750001a136879e1a7c29d37df2410057906fa3b") {
        for(let $i = 0; $i < 18; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "95318d0299bce2e8906d3b3cc750001a136879e1a7c29d37df2410057906fa3b";
    }
    const isDesktop = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useMediaQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMediaQuery"])("(min-width: 700px)");
    const [showNavBar, setShowNavBar] = useState(isDesktop);
    const [showHam, setShowHam] = useState(true);
    let t0;
    if ($[1] !== setShowHam || $[2] !== setShowNavBar || $[3] !== showNavBar) {
        t0 = ()=>{
            setShowNavBar(!showNavBar);
            setShowHam(showNavBar);
        };
        $[1] = setShowHam;
        $[2] = setShowNavBar;
        $[3] = showNavBar;
        $[4] = t0;
    } else {
        t0 = $[4];
    }
    const handleClick = t0;
    let t1;
    if ($[5] !== isDesktop || $[6] !== setShowHam || $[7] !== setShowNavBar) {
        t1 = ()=>{
            if (isDesktop) {
                setShowNavBar(true);
                setShowHam(true);
            } else {
                setShowNavBar(false);
            }
        };
        $[5] = isDesktop;
        $[6] = setShowHam;
        $[7] = setShowNavBar;
        $[8] = t1;
    } else {
        t1 = $[8];
    }
    let t2;
    if ($[9] !== isDesktop) {
        t2 = [
            isDesktop
        ];
        $[9] = isDesktop;
        $[10] = t2;
    } else {
        t2 = $[10];
    }
    useEffect(t1, t2);
    let t3;
    if ($[11] !== handleClick || $[12] !== showHam || $[13] !== showNavBar) {
        t3 = {
            showNavBar,
            showHam,
            handleClick
        };
        $[11] = handleClick;
        $[12] = showHam;
        $[13] = showNavBar;
        $[14] = t3;
    } else {
        t3 = $[14];
    }
    let t4;
    if ($[15] !== props.children || $[16] !== t3) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(HeaderContext.Provider, {
            value: t3,
            children: props.children
        }, void 0, false, {
            fileName: "[project]/src/context/headerContext.js",
            lineNumber: 78,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[15] = props.children;
        $[16] = t3;
        $[17] = t4;
    } else {
        t4 = $[17];
    }
    return t4;
};
_s(HeaderProvider, "zdFxTDGEvHNQDeVIEXkG71eU0j0=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useMediaQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMediaQuery"]
    ];
});
_c = HeaderProvider;
var _c;
__turbopack_context__.k.register(_c, "HeaderProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/atoms/Button/Button.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "active": "Button-module__8C-t3q__active",
  "btnMenu": "Button-module__8C-t3q__btnMenu",
  "button": "Button-module__8C-t3q__button",
  "menuBtn": "Button-module__8C-t3q__menuBtn",
});
}),
"[project]/src/components/atoms/Button/Button.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Button
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$atoms$2f$Button$2f$Button$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/components/atoms/Button/Button.module.css [app-client] (css module)");
"use client";
;
;
;
function Button(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(14);
    if ($[0] !== "3dd30ffcab4d7826f939a7cf9b1799a15492ef922c029182d0ee36e7c9cbc7ff") {
        for(let $i = 0; $i < 14; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "3dd30ffcab4d7826f939a7cf9b1799a15492ef922c029182d0ee36e7c9cbc7ff";
    }
    const { icon, onToggle, active } = t0;
    if (icon === "menu") {
        const t1 = `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$atoms$2f$Button$2f$Button$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].button} ${active ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$atoms$2f$Button$2f$Button$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].active : ""}`;
        const t2 = `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$atoms$2f$Button$2f$Button$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].menuBtn} ${active ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$atoms$2f$Button$2f$Button$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].active : ""}`;
        let t3;
        let t4;
        let t5;
        if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
            t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {}, void 0, false, {
                fileName: "[project]/src/components/atoms/Button/Button.jsx",
                lineNumber: 25,
                columnNumber: 12
            }, this);
            t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {}, void 0, false, {
                fileName: "[project]/src/components/atoms/Button/Button.jsx",
                lineNumber: 26,
                columnNumber: 12
            }, this);
            t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {}, void 0, false, {
                fileName: "[project]/src/components/atoms/Button/Button.jsx",
                lineNumber: 27,
                columnNumber: 12
            }, this);
            $[1] = t3;
            $[2] = t4;
            $[3] = t5;
        } else {
            t3 = $[1];
            t4 = $[2];
            t5 = $[3];
        }
        let t6;
        if ($[4] !== t2) {
            t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: t2,
                children: [
                    t3,
                    t4,
                    t5
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/atoms/Button/Button.jsx",
                lineNumber: 38,
                columnNumber: 12
            }, this);
            $[4] = t2;
            $[5] = t6;
        } else {
            t6 = $[5];
        }
        let t7;
        if ($[6] !== onToggle || $[7] !== t1 || $[8] !== t6) {
            t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                className: t1,
                onClick: onToggle,
                id: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$atoms$2f$Button$2f$Button$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].btnMenu,
                children: t6
            }, void 0, false, {
                fileName: "[project]/src/components/atoms/Button/Button.jsx",
                lineNumber: 46,
                columnNumber: 12
            }, this);
            $[6] = onToggle;
            $[7] = t1;
            $[8] = t6;
            $[9] = t7;
        } else {
            t7 = $[9];
        }
        return t7;
    }
    const t1 = `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$atoms$2f$Button$2f$Button$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].button} ${active ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$atoms$2f$Button$2f$Button$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].active : ""}`;
    let t2;
    if ($[10] !== icon || $[11] !== onToggle || $[12] !== t1) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            className: t1,
            onClick: onToggle,
            children: icon
        }, void 0, false, {
            fileName: "[project]/src/components/atoms/Button/Button.jsx",
            lineNumber: 59,
            columnNumber: 10
        }, this);
        $[10] = icon;
        $[11] = onToggle;
        $[12] = t1;
        $[13] = t2;
    } else {
        t2 = $[13];
    }
    return t2;
}
_c = Button;
var _c;
__turbopack_context__.k.register(_c, "Button");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/atoms/Button/index.jsx [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$atoms$2f$Button$2f$Button$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/atoms/Button/Button.jsx [app-client] (ecmascript)");
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/context/themeContext.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ThemeContext",
    ()=>ThemeContext,
    "ThemeProvider",
    ()=>ThemeProvider
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
const ThemeContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])();
function ThemeProvider(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(11);
    if ($[0] !== "f93d24e2ce2bd2bfba152f209092524987dcc58b632f2f5f1fe36c88ea1aeafd") {
        for(let $i = 0; $i < 11; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "f93d24e2ce2bd2bfba152f209092524987dcc58b632f2f5f1fe36c88ea1aeafd";
    }
    const { children } = t0;
    const [theme, setTheme] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("light");
    let t1;
    let t2;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = ({
            "ThemeProvider[useEffect()]": ()=>{
                const savedTheme = localStorage.getItem("theme") || "light";
                document.documentElement.classList.add(savedTheme);
                setTheme(savedTheme);
            }
        })["ThemeProvider[useEffect()]"];
        t2 = [];
        $[1] = t1;
        $[2] = t2;
    } else {
        t1 = $[1];
        t2 = $[2];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t1, t2);
    let t3;
    if ($[3] !== theme) {
        t3 = ({
            "ThemeProvider[toggleTheme]": ()=>{
                const newTheme = theme === "light" ? "dark" : "light";
                document.documentElement.classList.remove(theme);
                document.documentElement.classList.add(newTheme);
                localStorage.setItem("theme", newTheme);
                setTheme(newTheme);
            }
        })["ThemeProvider[toggleTheme]"];
        $[3] = theme;
        $[4] = t3;
    } else {
        t3 = $[4];
    }
    const toggleTheme = t3;
    let t4;
    if ($[5] !== theme || $[6] !== toggleTheme) {
        t4 = {
            theme,
            toggleTheme
        };
        $[5] = theme;
        $[6] = toggleTheme;
        $[7] = t4;
    } else {
        t4 = $[7];
    }
    let t5;
    if ($[8] !== children || $[9] !== t4) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ThemeContext.Provider, {
            value: t4,
            children: children
        }, void 0, false, {
            fileName: "[project]/src/context/themeContext.js",
            lineNumber: 67,
            columnNumber: 10
        }, this);
        $[8] = children;
        $[9] = t4;
        $[10] = t5;
    } else {
        t5 = $[10];
    }
    return t5;
}
_s(ThemeProvider, "lm84LOZxHN0YC4jzvAwAP/18Sno=");
_c = ThemeProvider;
var _c;
__turbopack_context__.k.register(_c, "ThemeProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/svg-imports.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DarkMode",
    ()=>DarkMode,
    "LightMode",
    ()=>LightMode
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
;
;
const LightMode = ()=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(2);
    if ($[0] !== "028c66e27232b4ed60db4f1dec2869c21ea481b1a2b2cd07c565e9ced7d2bdf2") {
        for(let $i = 0; $i < 2; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "028c66e27232b4ed60db4f1dec2869c21ea481b1a2b2cd07c565e9ced7d2bdf2";
    }
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "18px",
            height: "18px",
            viewBox: "0 -960 960 960",
            fill: "var(--yellow-4)",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M480-360q50 0 85-35t35-85q0-50-35-85t-85-35q-50 0-85 35t-35 85q0 50 35 85t85 35Zm0 80q-83 0-141.5-58.5T280-480q0-83 58.5-141.5T480-680q83 0 141.5 58.5T680-480q0 83-58.5 141.5T480-280ZM200-440H40v-80h160v80Zm720 0H760v-80h160v80ZM440-760v-160h80v160h-80Zm0 720v-160h80v160h-80ZM256-650l-101-97 57-59 96 100-52 56Zm492 496-97-101 53-55 101 97-57 59Zm-98-550 97-101 59 57-100 96-56-52ZM154-212l101-97 55 53-97 101-59-57Zm326-268Z"
            }, void 0, false, {
                fileName: "[project]/src/lib/svg-imports.js",
                lineNumber: 12,
                columnNumber: 125
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/lib/svg-imports.js",
            lineNumber: 12,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    return t0;
};
_c = LightMode;
const DarkMode = ()=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(2);
    if ($[0] !== "028c66e27232b4ed60db4f1dec2869c21ea481b1a2b2cd07c565e9ced7d2bdf2") {
        for(let $i = 0; $i < 2; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "028c66e27232b4ed60db4f1dec2869c21ea481b1a2b2cd07c565e9ced7d2bdf2";
    }
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "23px",
            height: "23px",
            viewBox: "0 -960 960 960",
            fill: "var(--blue-5)",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M480-120q-150 0-255-105T120-480q0-150 105-255t255-105q14 0 27.5 1t26.5 3q-41 29-65.5 75.5T444-660q0 90 63 153t153 63q55 0 101-24.5t75-65.5q2 13 3 26.5t1 27.5q0 150-105 255T480-120Z"
            }, void 0, false, {
                fileName: "[project]/src/lib/svg-imports.js",
                lineNumber: 29,
                columnNumber: 123
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/lib/svg-imports.js",
            lineNumber: 29,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    return t0;
};
_c1 = DarkMode;
var _c, _c1;
__turbopack_context__.k.register(_c, "LightMode");
__turbopack_context__.k.register(_c1, "DarkMode");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/organisms/Header/Header.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Header
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$headerContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/context/headerContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$atoms$2f$Button$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/components/atoms/Button/index.jsx [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$atoms$2f$Button$2f$Button$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/atoms/Button/Button.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$themeContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/context/themeContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$svg$2d$imports$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/svg-imports.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
function Header() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(14);
    if ($[0] !== "d7cf77528c83f8edf0c154210f0dd96d9e8619de060691f3045478fc7307ced3") {
        for(let $i = 0; $i < 14; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "d7cf77528c83f8edf0c154210f0dd96d9e8619de060691f3045478fc7307ced3";
    }
    const { showHam, handleClick } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$headerContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HeaderContext"]);
    const { theme, toggleTheme } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$themeContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ThemeContext"]);
    const isDarkMode = theme === "dark";
    const t0 = !showHam;
    let t1;
    if ($[1] !== handleClick || $[2] !== t0) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$atoms$2f$Button$2f$Button$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            icon: "menu",
            active: t0,
            onToggle: handleClick
        }, void 0, false, {
            fileName: "[project]/src/components/organisms/Header/Header.jsx",
            lineNumber: 30,
            columnNumber: 10
        }, this);
        $[1] = handleClick;
        $[2] = t0;
        $[3] = t1;
    } else {
        t1 = $[3];
    }
    let t2;
    if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            href: "/",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                children: "DAILY BASIS ENGLISH COURSE"
            }, void 0, false, {
                fileName: "[project]/src/components/organisms/Header/Header.jsx",
                lineNumber: 39,
                columnNumber: 25
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/organisms/Header/Header.jsx",
            lineNumber: 39,
            columnNumber: 10
        }, this);
        $[4] = t2;
    } else {
        t2 = $[4];
    }
    let t3;
    if ($[5] !== isDarkMode) {
        t3 = isDarkMode ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$svg$2d$imports$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LightMode"], {}, void 0, false, {
            fileName: "[project]/src/components/organisms/Header/Header.jsx",
            lineNumber: 46,
            columnNumber: 23
        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$svg$2d$imports$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DarkMode"], {}, void 0, false, {
            fileName: "[project]/src/components/organisms/Header/Header.jsx",
            lineNumber: 46,
            columnNumber: 39
        }, this);
        $[5] = isDarkMode;
        $[6] = t3;
    } else {
        t3 = $[6];
    }
    let t4;
    if ($[7] !== isDarkMode || $[8] !== t3 || $[9] !== toggleTheme) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$atoms$2f$Button$2f$Button$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            icon: t3,
            active: isDarkMode,
            onToggle: toggleTheme
        }, void 0, false, {
            fileName: "[project]/src/components/organisms/Header/Header.jsx",
            lineNumber: 54,
            columnNumber: 10
        }, this);
        $[7] = isDarkMode;
        $[8] = t3;
        $[9] = toggleTheme;
        $[10] = t4;
    } else {
        t4 = $[10];
    }
    let t5;
    if ($[11] !== t1 || $[12] !== t4) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                children: [
                    t1,
                    t2,
                    t4
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/organisms/Header/Header.jsx",
                lineNumber: 64,
                columnNumber: 12
            }, this)
        }, void 0, false);
        $[11] = t1;
        $[12] = t4;
        $[13] = t5;
    } else {
        t5 = $[13];
    }
    return t5;
}
_s(Header, "hQG+cxEt/Aa5vUfe61KftO3y+n0=");
_c = Header;
var _c;
__turbopack_context__.k.register(_c, "Header");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/organisms/Navbar/Navbar.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "nav": "Navbar-module__OwHo2W__nav",
  "navTitle": "Navbar-module__OwHo2W__navTitle",
  "show": "Navbar-module__OwHo2W__show",
});
}),
"[project]/src/components/organisms/Navbar/Navbar.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>NavBar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$organisms$2f$Navbar$2f$Navbar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/components/organisms/Navbar/Navbar.module.css [app-client] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$headerContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/context/headerContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
const linkGroup = [
    {
        title: "Audiobooks",
        links: [
            {
                href: "/audiobook/beginner",
                label: "Beginner"
            }
        ]
    },
    {
        title: "Pronunciation",
        links: [
            {
                href: "/pronunciation/letter-a",
                label: "Letter a"
            },
            {
                href: "/pronunciation/letter-a",
                label: "Letters ee / ea vs. i"
            }
        ]
    },
    {
        title: "Grammar",
        links: [
            {
                href: "/grammar/verb-be",
                label: "Verb Be"
            },
            {
                href: "/grammar/simple-present",
                label: "Simple Present"
            },
            {
                href: "/grammar/present-continuous",
                label: "Present Continuous"
            },
            {
                href: "/grammar/simple-past",
                label: "Simple Past"
            },
            {
                href: "/grammar/past-continuous",
                label: "Past Continuous"
            },
            {
                href: "/grammar/present-perfect",
                label: "Present Perfect"
            },
            {
                href: "/grammar/past-perfect",
                label: "Past Perfect"
            },
            {
                href: "/grammar/simple-future",
                label: "Simple Future"
            },
            {
                href: "/grammar/future-continuous",
                label: "Future Continuous"
            },
            {
                href: "/grammar/future-perfect",
                label: "Future Perfect"
            }
        ]
    },
    {
        title: "Vocabulary",
        links: [
            {
                href: "/vocabulary/collocations",
                label: "collocations"
            },
            {
                href: "/vocabulary/homophones",
                label: "homophones"
            },
            {
                href: "/vocabulary/homohtaphs",
                label: "homohraphs"
            }
        ]
    }
];
function NavBar(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(4);
    if ($[0] !== "a20a7c21b8da0ede433132bde64b66511a6bd06f60cefa1e66eab4f033a277cc") {
        for(let $i = 0; $i < 4; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "a20a7c21b8da0ede433132bde64b66511a6bd06f60cefa1e66eab4f033a277cc";
    }
    const { showNavBar } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$headerContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HeaderContext"]);
    const t1 = `line-break ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$organisms$2f$Navbar$2f$Navbar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].nav} ${showNavBar ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$organisms$2f$Navbar$2f$Navbar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].show : ""}`;
    let t2;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = linkGroup.map(_NavBarLinkGroupMap);
        $[1] = t2;
    } else {
        t2 = $[1];
    }
    let t3;
    if ($[2] !== t1) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
            className: t1,
            children: t2
        }, void 0, false, {
            fileName: "[project]/src/components/organisms/Navbar/Navbar.jsx",
            lineNumber: 102,
            columnNumber: 10
        }, this);
        $[2] = t1;
        $[3] = t3;
    } else {
        t3 = $[3];
    }
    return t3;
}
_s(NavBar, "Lt90tZDGfD9+BOXi8Jtevcy6Hu4=");
_c = NavBar;
function _NavBarLinkGroupMap(group, groupIndex) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$organisms$2f$Navbar$2f$Navbar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].navTitle,
                children: group.title
            }, void 0, false, {
                fileName: "[project]/src/components/organisms/Navbar/Navbar.jsx",
                lineNumber: 111,
                columnNumber: 32
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: group.links.map(_NavBarLinkGroupMapGroupLinksMap)
            }, void 0, false, {
                fileName: "[project]/src/components/organisms/Navbar/Navbar.jsx",
                lineNumber: 111,
                columnNumber: 86
            }, this)
        ]
    }, groupIndex, true, {
        fileName: "[project]/src/components/organisms/Navbar/Navbar.jsx",
        lineNumber: 111,
        columnNumber: 10
    }, this);
}
function _NavBarLinkGroupMapGroupLinksMap(item, linkIndex) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        href: item.href,
        children: item.label
    }, linkIndex, false, {
        fileName: "[project]/src/components/organisms/Navbar/Navbar.jsx",
        lineNumber: 114,
        columnNumber: 10
    }, this);
}
var _c;
__turbopack_context__.k.register(_c, "NavBar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_eb3a3537._.js.map