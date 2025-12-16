(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/molecules/Text/Text.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "PlayIcon": "Text-module__7jfE3q__PlayIcon",
  "bottom": "Text-module__7jfE3q__bottom",
  "image": "Text-module__7jfE3q__image",
  "left": "Text-module__7jfE3q__left",
  "right": "Text-module__7jfE3q__right",
  "top": "Text-module__7jfE3q__top",
  "withImage": "Text-module__7jfE3q__withImage",
});
}),
"[project]/src/components/molecules/Text/Text.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Text
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$molecules$2f$Text$2f$Text$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/components/molecules/Text/Text.module.css [app-client] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$svg$2d$imports$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/svg-imports.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
function Text(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(23);
    if ($[0] !== "10027b1d6e09a7c47425bc383555ed1fc49eedd2745721665a8a70dd307390a8") {
        for(let $i = 0; $i < 23; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "10027b1d6e09a7c47425bc383555ed1fc49eedd2745721665a8a70dd307390a8";
    }
    const { playAudio, children, imgSrc, imgAlt, imgPosition: t1 } = t0;
    const imgPosition = t1 === undefined ? "left" : t1;
    const hasImage = Boolean(imgSrc);
    const [playing, setPlaying] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const audioRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    let t2;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = function handlePlay() {
            audioRef.current?.play();
            setPlaying(true);
        };
        $[1] = t2;
    } else {
        t2 = $[1];
    }
    const handlePlay = t2;
    let t3;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = function handleStop() {
            audioRef.current?.pause();
            audioRef.current.currentTime = 0;
            setPlaying(false);
        };
        $[2] = t3;
    } else {
        t3 = $[2];
    }
    const handleStop = t3;
    const t4 = hasImage && __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$molecules$2f$Text$2f$Text$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].withImage;
    const t5 = hasImage && __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$molecules$2f$Text$2f$Text$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"][imgPosition];
    let t6;
    if ($[3] !== t4 || $[4] !== t5) {
        t6 = [
            t4,
            t5
        ].filter(Boolean);
        $[3] = t4;
        $[4] = t5;
        $[5] = t6;
    } else {
        t6 = $[5];
    }
    const t7 = t6.join(" ");
    let t8;
    if ($[6] !== hasImage || $[7] !== imgAlt || $[8] !== imgSrc) {
        t8 = hasImage && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            src: imgSrc,
            alt: imgAlt,
            width: 200,
            height: 200,
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$molecules$2f$Text$2f$Text$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].image
        }, void 0, false, {
            fileName: "[project]/src/components/molecules/Text/Text.jsx",
            lineNumber: 64,
            columnNumber: 22
        }, this);
        $[6] = hasImage;
        $[7] = imgAlt;
        $[8] = imgSrc;
        $[9] = t8;
    } else {
        t8 = $[9];
    }
    let t9;
    if ($[10] !== playAudio || $[11] !== playing) {
        t9 = playAudio && (playing ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$svg$2d$imports$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StopAudio"], {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$molecules$2f$Text$2f$Text$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].PlayIcon,
            onClick: handleStop
        }, void 0, false, {
            fileName: "[project]/src/components/molecules/Text/Text.jsx",
            lineNumber: 74,
            columnNumber: 34
        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$svg$2d$imports$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PlayAudio"], {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$molecules$2f$Text$2f$Text$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].PlayIcon,
            onClick: handlePlay
        }, void 0, false, {
            fileName: "[project]/src/components/molecules/Text/Text.jsx",
            lineNumber: 74,
            columnNumber: 99
        }, this));
        $[10] = playAudio;
        $[11] = playing;
        $[12] = t9;
    } else {
        t9 = $[12];
    }
    let t10;
    if ($[13] !== playAudio) {
        t10 = playAudio && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("audio", {
            ref: audioRef,
            src: playAudio,
            preload: "metadata",
            onEnded: {
                "Text[<audio>.onEnded]": ()=>setPlaying(false)
            }["Text[<audio>.onEnded]"]
        }, void 0, false, {
            fileName: "[project]/src/components/molecules/Text/Text.jsx",
            lineNumber: 83,
            columnNumber: 24
        }, this);
        $[13] = playAudio;
        $[14] = t10;
    } else {
        t10 = $[14];
    }
    let t11;
    if ($[15] !== children || $[16] !== t10 || $[17] !== t9) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            children: [
                t9,
                children,
                t10
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/molecules/Text/Text.jsx",
            lineNumber: 93,
            columnNumber: 11
        }, this);
        $[15] = children;
        $[16] = t10;
        $[17] = t9;
        $[18] = t11;
    } else {
        t11 = $[18];
    }
    let t12;
    if ($[19] !== t11 || $[20] !== t7 || $[21] !== t8) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t7,
            children: [
                t8,
                t11
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/molecules/Text/Text.jsx",
            lineNumber: 103,
            columnNumber: 11
        }, this);
        $[19] = t11;
        $[20] = t7;
        $[21] = t8;
        $[22] = t12;
    } else {
        t12 = $[22];
    }
    return t12;
}
_s(Text, "XUhw9Ulqs+ATTlP6jiSDfdrWuNE=");
_c = Text;
var _c;
__turbopack_context__.k.register(_c, "Text");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_components_molecules_Text_ba91bf80._.js.map