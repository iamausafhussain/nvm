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

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_FragmanPopUp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/FragmanPopUp */ \"./components/FragmanPopUp.js\");\n/* harmony import */ var _components_VimeoPlayer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/VimeoPlayer */ \"./components/VimeoPlayer.js\");\n\nvar _s = $RefreshSig$();\n\n\n\nfunction Home() {\n    _s();\n    const [selectedFragman, setSelectedFragman] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [popUpIsActive, setPopUpIsActive] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-col justify-center items-center p-10\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mb-20\",\n                children: \"Nextstacks vimeo sample\"\n            }, void 0, false, {\n                fileName: \"D:\\\\Appstone\\\\nvm\\\\pages\\\\index.js\",\n                lineNumber: 11,\n                columnNumber: 4\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-col lg:w-1/2 md:w-2/3 w-full px-3\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"w-full justify-center\",\n                        children: \"This video is without popup view mode!!\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Appstone\\\\nvm\\\\pages\\\\index.js\",\n                        lineNumber: 14,\n                        columnNumber: 5\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_VimeoPlayer__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        videoLink: \"https://vimeo.com/779904406\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Appstone\\\\nvm\\\\pages\\\\index.js\",\n                        lineNumber: 17,\n                        columnNumber: 5\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\Appstone\\\\nvm\\\\pages\\\\index.js\",\n                lineNumber: 13,\n                columnNumber: 4\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-row\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"p-2\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            className: \"block rounded-md cursor-pointer py-3 px-5 text-white bg-red-600\",\n                            onClick: ()=>{\n                                //we can use id of vimeo uploaded file also\n                                setSelectedFragman(779904406);\n                                setPopUpIsActive(true);\n                            },\n                            children: \"Play Video 1\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\Appstone\\\\nvm\\\\pages\\\\index.js\",\n                            lineNumber: 22,\n                            columnNumber: 6\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Appstone\\\\nvm\\\\pages\\\\index.js\",\n                        lineNumber: 21,\n                        columnNumber: 5\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"p-2\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            className: \"block rounded-md cursor-pointer py-3 px-5 text-white bg-red-600\",\n                            onClick: ()=>{\n                                setSelectedFragman(\"https://vimeo.com/779904406\");\n                                setPopUpIsActive(true);\n                            },\n                            children: \"Play Video 2\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\Appstone\\\\nvm\\\\pages\\\\index.js\",\n                            lineNumber: 34,\n                            columnNumber: 6\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Appstone\\\\nvm\\\\pages\\\\index.js\",\n                        lineNumber: 33,\n                        columnNumber: 5\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\Appstone\\\\nvm\\\\pages\\\\index.js\",\n                lineNumber: 20,\n                columnNumber: 4\n            }, this),\n            selectedFragman !== null && popUpIsActive && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_FragmanPopUp__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                videoLink: selectedFragman,\n                setPopUpIsActive: setPopUpIsActive\n            }, void 0, false, {\n                fileName: \"D:\\\\Appstone\\\\nvm\\\\pages\\\\index.js\",\n                lineNumber: 46,\n                columnNumber: 5\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\Appstone\\\\nvm\\\\pages\\\\index.js\",\n        lineNumber: 10,\n        columnNumber: 3\n    }, this);\n}\n_s(Home, \"mijNEnVnRd7U8Rk8WAGcRR2Mbs8=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7O0FBQTRDO0FBQ1U7QUFDRjtBQUVyQyxTQUFTSSxPQUFPOztJQUM5QixNQUFNLENBQUNDLGlCQUFpQkMsbUJBQW1CLEdBQUdMLCtDQUFRQSxDQUFDLElBQUk7SUFDM0QsTUFBTSxDQUFDTSxlQUFlQyxpQkFBaUIsR0FBR1AsK0NBQVFBLENBQUMsS0FBSztJQUV4RCxxQkFDQyw4REFBQ1E7UUFBSUMsV0FBVTs7MEJBQ2QsOERBQUNEO2dCQUFJQyxXQUFVOzBCQUFROzs7Ozs7MEJBRXZCLDhEQUFDRDtnQkFBSUMsV0FBVTs7a0NBQ2QsOERBQUNEO3dCQUFJQyxXQUFVO2tDQUF3Qjs7Ozs7O2tDQUd2Qyw4REFBQ1AsK0RBQVdBO3dCQUFDUSxXQUFVOzs7Ozs7Ozs7Ozs7MEJBR3hCLDhEQUFDRjtnQkFBSUMsV0FBVTs7a0NBQ2QsOERBQUNEO3dCQUFJQyxXQUFVO2tDQUNkLDRFQUFDRTs0QkFDQUYsV0FBVTs0QkFDVkcsU0FBUyxJQUFNO2dDQUNkLDJDQUEyQztnQ0FDM0NQLG1CQUFtQjtnQ0FDbkJFLGlCQUFpQixJQUFJOzRCQUN0QjtzQ0FBRzs7Ozs7Ozs7Ozs7a0NBS0wsOERBQUNDO3dCQUFJQyxXQUFVO2tDQUNkLDRFQUFDRTs0QkFDQUYsV0FBVTs0QkFDVkcsU0FBUyxJQUFNO2dDQUNkUCxtQkFBbUI7Z0NBQ25CRSxpQkFBaUIsSUFBSTs0QkFDdEI7c0NBQUc7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBTUxILG9CQUFvQixJQUFJLElBQUlFLCtCQUM1Qiw4REFBQ0wsZ0VBQVlBO2dCQUNaUyxXQUFXTjtnQkFDWEcsa0JBQWtCQTs7Ozs7Ozs7Ozs7O0FBS3ZCLENBQUM7R0FoRHVCSjtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5qcz9iZWU3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEZyYWdtYW5Qb3BVcCBmcm9tIFwiLi4vY29tcG9uZW50cy9GcmFnbWFuUG9wVXBcIjtcclxuaW1wb3J0IFZpbWVvUGxheWVyIGZyb20gXCIuLi9jb21wb25lbnRzL1ZpbWVvUGxheWVyXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xyXG5cdGNvbnN0IFtzZWxlY3RlZEZyYWdtYW4sIHNldFNlbGVjdGVkRnJhZ21hbl0gPSB1c2VTdGF0ZShudWxsKTtcclxuXHRjb25zdCBbcG9wVXBJc0FjdGl2ZSwgc2V0UG9wVXBJc0FjdGl2ZV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG5cdHJldHVybiAoXHJcblx0XHQ8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIHAtMTBcIj5cclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJtYi0yMFwiPk5leHRzdGFja3MgdmltZW8gc2FtcGxlPC9kaXY+XHJcblxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgbGc6dy0xLzIgbWQ6dy0yLzMgdy1mdWxsIHB4LTNcIj5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBqdXN0aWZ5LWNlbnRlclwiPlxyXG5cdFx0XHRcdFx0VGhpcyB2aWRlbyBpcyB3aXRob3V0IHBvcHVwIHZpZXcgbW9kZSEhXHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PFZpbWVvUGxheWVyIHZpZGVvTGluaz1cImh0dHBzOi8vdmltZW8uY29tLzc3OTkwNDQwNlwiIC8+XHJcblx0XHRcdDwvZGl2PlxyXG5cclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtcm93XCI+XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJwLTJcIj5cclxuXHRcdFx0XHRcdDxidXR0b25cclxuXHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwiYmxvY2sgcm91bmRlZC1tZCBjdXJzb3ItcG9pbnRlciBweS0zIHB4LTUgdGV4dC13aGl0ZSBiZy1yZWQtNjAwXCJcclxuXHRcdFx0XHRcdFx0b25DbGljaz17KCkgPT4ge1xyXG5cdFx0XHRcdFx0XHRcdC8vd2UgY2FuIHVzZSBpZCBvZiB2aW1lbyB1cGxvYWRlZCBmaWxlIGFsc29cclxuXHRcdFx0XHRcdFx0XHRzZXRTZWxlY3RlZEZyYWdtYW4oNzc5OTA0NDA2KTtcclxuXHRcdFx0XHRcdFx0XHRzZXRQb3BVcElzQWN0aXZlKHRydWUpO1xyXG5cdFx0XHRcdFx0XHR9fT5cclxuXHRcdFx0XHRcdFx0UGxheSBWaWRlbyAxXHJcblx0XHRcdFx0XHQ8L2J1dHRvbj5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJwLTJcIj5cclxuXHRcdFx0XHRcdDxidXR0b25cclxuXHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwiYmxvY2sgcm91bmRlZC1tZCBjdXJzb3ItcG9pbnRlciBweS0zIHB4LTUgdGV4dC13aGl0ZSBiZy1yZWQtNjAwXCJcclxuXHRcdFx0XHRcdFx0b25DbGljaz17KCkgPT4ge1xyXG5cdFx0XHRcdFx0XHRcdHNldFNlbGVjdGVkRnJhZ21hbihcImh0dHBzOi8vdmltZW8uY29tLzc3OTkwNDQwNlwiKTtcclxuXHRcdFx0XHRcdFx0XHRzZXRQb3BVcElzQWN0aXZlKHRydWUpO1xyXG5cdFx0XHRcdFx0XHR9fT5cclxuXHRcdFx0XHRcdFx0UGxheSBWaWRlbyAyXHJcblx0XHRcdFx0XHQ8L2J1dHRvbj5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PC9kaXY+XHJcblxyXG5cdFx0XHR7c2VsZWN0ZWRGcmFnbWFuICE9PSBudWxsICYmIHBvcFVwSXNBY3RpdmUgJiYgKFxyXG5cdFx0XHRcdDxGcmFnbWFuUG9wVXBcclxuXHRcdFx0XHRcdHZpZGVvTGluaz17c2VsZWN0ZWRGcmFnbWFufVxyXG5cdFx0XHRcdFx0c2V0UG9wVXBJc0FjdGl2ZT17c2V0UG9wVXBJc0FjdGl2ZX1cclxuXHRcdFx0XHQvPlxyXG5cdFx0XHQpfVxyXG5cdFx0PC9kaXY+XHJcblx0KTtcclxufVxyXG4iXSwibmFtZXMiOlsidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJGcmFnbWFuUG9wVXAiLCJWaW1lb1BsYXllciIsIkhvbWUiLCJzZWxlY3RlZEZyYWdtYW4iLCJzZXRTZWxlY3RlZEZyYWdtYW4iLCJwb3BVcElzQWN0aXZlIiwic2V0UG9wVXBJc0FjdGl2ZSIsImRpdiIsImNsYXNzTmFtZSIsInZpZGVvTGluayIsImJ1dHRvbiIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});