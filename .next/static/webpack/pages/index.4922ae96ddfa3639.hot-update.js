"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/VimeoPlayer.js":
/*!***********************************!*\
  !*** ./components/VimeoPlayer.js ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _u_wave_react_vimeo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @u-wave/react-vimeo */ \"./node_modules/@u-wave/react-vimeo/dist/react-vimeo.es.js\");\n\n\nconst VimeoPlayer = (param)=>{\n    let { videoLink , setIsVideoLoading , setPopUpIsActive  } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"w-full rounded-2xl relative overflow-hidden\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_u_wave_react_vimeo__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n            video: videoLink,\n            responsive: true,\n            autoplay: true,\n            muted: true,\n            start: 0,\n            controls: true,\n            width: \"100%\",\n            showTitle: true,\n            showByline: false,\n            onReady: ()=>{},\n            onLoaded: ()=>{},\n            onPlay: ()=>{\n                setIsVideoLoading(false);\n            },\n            onPlaying: ()=>{},\n            onEnd: ()=>{\n                setPopUpIsActive(false);\n            }\n        }, void 0, false, {\n            fileName: \"D:\\\\Appstone\\\\nvm\\\\components\\\\VimeoPlayer.js\",\n            lineNumber: 6,\n            columnNumber: 4\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"D:\\\\Appstone\\\\nvm\\\\components\\\\VimeoPlayer.js\",\n        lineNumber: 5,\n        columnNumber: 3\n    }, undefined);\n};\n_c = VimeoPlayer;\n/* harmony default export */ __webpack_exports__[\"default\"] = (VimeoPlayer);\nvar _c;\n$RefreshReg$(_c, \"VimeoPlayer\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1ZpbWVvUGxheWVyLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQTtBQUF3QztBQUV4QyxNQUFNQyxjQUFjLFNBQXdEO1FBQXZELEVBQUVDLFVBQVMsRUFBRUMsa0JBQWlCLEVBQUVDLGlCQUFnQixFQUFFO0lBQ3RFLHFCQUNDLDhEQUFDQztRQUFJQyxXQUFVO2tCQUNkLDRFQUFDTiwyREFBS0E7WUFDTE8sT0FBT0w7WUFDUE0sWUFBWSxJQUFJO1lBQ2hCQyxVQUFVLElBQUk7WUFDZEMsT0FBTyxJQUFJO1lBQ1hDLE9BQU87WUFDUEMsVUFBVSxJQUFJO1lBQ2RDLE9BQU07WUFDTkMsV0FBVyxJQUFJO1lBQ2ZDLFlBQVksS0FBSztZQUNqQkMsU0FBUyxJQUFNLENBQUM7WUFDaEJDLFVBQVUsSUFBTSxDQUFDO1lBQ2pCQyxRQUFRLElBQU07Z0JBQ2JmLGtCQUFrQixLQUFLO1lBQ3hCO1lBQ0FnQixXQUFXLElBQU0sQ0FBQztZQUNsQkMsT0FBTyxJQUFNO2dCQUNaaEIsaUJBQWlCLEtBQUs7WUFDdkI7Ozs7Ozs7Ozs7O0FBSUo7S0F6Qk1IO0FBMkJOLCtEQUFlQSxXQUFXQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvVmltZW9QbGF5ZXIuanM/MzliNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVmltZW8gZnJvbSBcIkB1LXdhdmUvcmVhY3QtdmltZW9cIjtcclxuXHJcbmNvbnN0IFZpbWVvUGxheWVyID0gKHsgdmlkZW9MaW5rLCBzZXRJc1ZpZGVvTG9hZGluZywgc2V0UG9wVXBJc0FjdGl2ZSB9KSA9PiB7XHJcblx0cmV0dXJuIChcclxuXHRcdDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIHJvdW5kZWQtMnhsIHJlbGF0aXZlIG92ZXJmbG93LWhpZGRlblwiPlxyXG5cdFx0XHQ8VmltZW9cclxuXHRcdFx0XHR2aWRlbz17dmlkZW9MaW5rfVxyXG5cdFx0XHRcdHJlc3BvbnNpdmU9e3RydWV9XHJcblx0XHRcdFx0YXV0b3BsYXk9e3RydWV9XHJcblx0XHRcdFx0bXV0ZWQ9e3RydWV9XHJcblx0XHRcdFx0c3RhcnQ9ezB9XHJcblx0XHRcdFx0Y29udHJvbHM9e3RydWV9XHJcblx0XHRcdFx0d2lkdGg9XCIxMDAlXCJcclxuXHRcdFx0XHRzaG93VGl0bGU9e3RydWV9XHJcblx0XHRcdFx0c2hvd0J5bGluZT17ZmFsc2V9XHJcblx0XHRcdFx0b25SZWFkeT17KCkgPT4ge319XHJcblx0XHRcdFx0b25Mb2FkZWQ9eygpID0+IHt9fVxyXG5cdFx0XHRcdG9uUGxheT17KCkgPT4ge1xyXG5cdFx0XHRcdFx0c2V0SXNWaWRlb0xvYWRpbmcoZmFsc2UpO1xyXG5cdFx0XHRcdH19XHJcblx0XHRcdFx0b25QbGF5aW5nPXsoKSA9PiB7fX1cclxuXHRcdFx0XHRvbkVuZD17KCkgPT4ge1xyXG5cdFx0XHRcdFx0c2V0UG9wVXBJc0FjdGl2ZShmYWxzZSk7XHJcblx0XHRcdFx0fX1cclxuXHRcdFx0Lz5cclxuXHRcdDwvZGl2PlxyXG5cdCk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBWaW1lb1BsYXllcjtcclxuIl0sIm5hbWVzIjpbIlZpbWVvIiwiVmltZW9QbGF5ZXIiLCJ2aWRlb0xpbmsiLCJzZXRJc1ZpZGVvTG9hZGluZyIsInNldFBvcFVwSXNBY3RpdmUiLCJkaXYiLCJjbGFzc05hbWUiLCJ2aWRlbyIsInJlc3BvbnNpdmUiLCJhdXRvcGxheSIsIm11dGVkIiwic3RhcnQiLCJjb250cm9scyIsIndpZHRoIiwic2hvd1RpdGxlIiwic2hvd0J5bGluZSIsIm9uUmVhZHkiLCJvbkxvYWRlZCIsIm9uUGxheSIsIm9uUGxheWluZyIsIm9uRW5kIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/VimeoPlayer.js\n"));

/***/ })

});