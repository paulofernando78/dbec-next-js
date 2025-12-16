module.exports = [
"[project]/src/components/molecules/Whiteboard/Paragraph/Text.module.css [app-ssr] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "PlayIcon": "Text-module__Yqu4AW__PlayIcon",
  "bottom": "Text-module__Yqu4AW__bottom",
  "image": "Text-module__Yqu4AW__image",
  "left": "Text-module__Yqu4AW__left",
  "right": "Text-module__Yqu4AW__right",
  "top": "Text-module__Yqu4AW__top",
  "withImage": "Text-module__Yqu4AW__withImage",
});
}),
"[project]/src/components/molecules/Whiteboard/Paragraph/Text.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Text
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$molecules$2f$Whiteboard$2f$Paragraph$2f$Text$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/components/molecules/Whiteboard/Paragraph/Text.module.css [app-ssr] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$svg$2d$imports$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/svg-imports.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
function Text({ playAudio, children, imgSrc, imgAlt, imgPosition = "left" }) {
    const hasImage = Boolean(imgSrc);
    const [playing, setPlaying] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const audioRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    function handlePlay() {
        audioRef.current?.play();
        setPlaying(true);
    }
    function handleStop() {
        audioRef.current?.pause();
        audioRef.current.currentTime = 0;
        setPlaying(false);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: [
            hasImage && __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$molecules$2f$Whiteboard$2f$Paragraph$2f$Text$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].withImage,
            hasImage && __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$molecules$2f$Whiteboard$2f$Paragraph$2f$Text$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"][imgPosition]
        ].filter(Boolean).join(" "),
        children: [
            hasImage && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                src: imgSrc,
                alt: imgAlt,
                width: 200,
                height: 200,
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$molecules$2f$Whiteboard$2f$Paragraph$2f$Text$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].image
            }, void 0, false, {
                fileName: "[project]/src/components/molecules/Whiteboard/Paragraph/Text.jsx",
                lineNumber: 38,
                columnNumber: 11
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                children: [
                    playAudio && (playing ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$svg$2d$imports$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["StopAudio"], {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$molecules$2f$Whiteboard$2f$Paragraph$2f$Text$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].PlayIcon,
                        onClick: handleStop
                    }, void 0, false, {
                        fileName: "[project]/src/components/molecules/Whiteboard/Paragraph/Text.jsx",
                        lineNumber: 49,
                        columnNumber: 13
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$svg$2d$imports$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PlayAudio"], {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$molecules$2f$Whiteboard$2f$Paragraph$2f$Text$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].PlayIcon,
                        onClick: handlePlay
                    }, void 0, false, {
                        fileName: "[project]/src/components/molecules/Whiteboard/Paragraph/Text.jsx",
                        lineNumber: 53,
                        columnNumber: 13
                    }, this)),
                    children,
                    playAudio && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("audio", {
                        ref: audioRef,
                        src: playAudio,
                        preload: "metadata",
                        onEnded: ()=>setPlaying(false)
                    }, void 0, false, {
                        fileName: "[project]/src/components/molecules/Whiteboard/Paragraph/Text.jsx",
                        lineNumber: 63,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/molecules/Whiteboard/Paragraph/Text.jsx",
                lineNumber: 46,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/molecules/Whiteboard/Paragraph/Text.jsx",
        lineNumber: 31,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=src_components_molecules_Whiteboard_Paragraph_5eda4620._.js.map