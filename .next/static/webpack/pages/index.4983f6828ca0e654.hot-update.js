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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_FragmanPopUp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/FragmanPopUp */ \"./components/FragmanPopUp.js\");\n\nvar _s = $RefreshSig$();\n\n\nfunction Home() {\n    _s();\n    const [selectedFragman, setSelectedFragman] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [popUpIsActive, setPopUpIsActive] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex gap-5 p-10\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: \"Nextstacks vimeo sample\"\n            }, void 0, false, {\n                fileName: \"D:\\\\Appstone\\\\nvm\\\\pages\\\\index.js\",\n                lineNumber: 10,\n                columnNumber: 4\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    className: \"block rounded-md cursor-pointer py-3 px-5 text-white bg-red-600\",\n                    onClick: ()=>{\n                        setSelectedFragman(\"https://vimeo.com/779904406\");\n                        setPopUpIsActive(true);\n                    },\n                    children: \"Play Video\"\n                }, void 0, false, {\n                    fileName: \"D:\\\\Appstone\\\\nvm\\\\pages\\\\index.js\",\n                    lineNumber: 12,\n                    columnNumber: 5\n                }, this)\n            }, void 0, false, {\n                fileName: \"D:\\\\Appstone\\\\nvm\\\\pages\\\\index.js\",\n                lineNumber: 11,\n                columnNumber: 4\n            }, this),\n            selectedFragman !== null && popUpIsActive && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_FragmanPopUp__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                videoLink: selectedFragman,\n                setPopUpIsActive: setPopUpIsActive\n            }, void 0, false, {\n                fileName: \"D:\\\\Appstone\\\\nvm\\\\pages\\\\index.js\",\n                lineNumber: 23,\n                columnNumber: 5\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\Appstone\\\\nvm\\\\pages\\\\index.js\",\n        lineNumber: 9,\n        columnNumber: 3\n    }, this);\n}\n_s(Home, \"mijNEnVnRd7U8Rk8WAGcRR2Mbs8=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7QUFBNEM7QUFDVTtBQUV2QyxTQUFTRyxPQUFPOztJQUM5QixNQUFNLENBQUNDLGlCQUFpQkMsbUJBQW1CLEdBQUdKLCtDQUFRQSxDQUFDLElBQUk7SUFDM0QsTUFBTSxDQUFDSyxlQUFlQyxpQkFBaUIsR0FBR04sK0NBQVFBLENBQUMsS0FBSztJQUV4RCxxQkFDQyw4REFBQ087UUFBSUMsV0FBVTs7MEJBQ2QsOERBQUNEOzBCQUFJOzs7Ozs7MEJBQ0wsOERBQUNBOzBCQUNBLDRFQUFDRTtvQkFDQUQsV0FBVTtvQkFDVkUsU0FBUyxJQUFNO3dCQUNkTixtQkFBbUI7d0JBQ25CRSxpQkFBaUIsSUFBSTtvQkFDdEI7OEJBQUc7Ozs7Ozs7Ozs7O1lBS0pILG9CQUFvQixJQUFJLElBQUlFLCtCQUM1Qiw4REFBQ0osZ0VBQVlBO2dCQUNaVSxXQUFXUjtnQkFDWEcsa0JBQWtCQTs7Ozs7Ozs7Ozs7O0FBS3ZCLENBQUM7R0ExQnVCSjtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5qcz9iZWU3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEZyYWdtYW5Qb3BVcCBmcm9tIFwiLi4vY29tcG9uZW50cy9GcmFnbWFuUG9wVXBcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XHJcblx0Y29uc3QgW3NlbGVjdGVkRnJhZ21hbiwgc2V0U2VsZWN0ZWRGcmFnbWFuXSA9IHVzZVN0YXRlKG51bGwpO1xyXG5cdGNvbnN0IFtwb3BVcElzQWN0aXZlLCBzZXRQb3BVcElzQWN0aXZlXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcblx0cmV0dXJuIChcclxuXHRcdDxkaXYgY2xhc3NOYW1lPVwiZmxleCBnYXAtNSBwLTEwXCI+XHJcblx0XHRcdDxkaXY+TmV4dHN0YWNrcyB2aW1lbyBzYW1wbGU8L2Rpdj5cclxuXHRcdFx0PGRpdj5cclxuXHRcdFx0XHQ8YnV0dG9uXHJcblx0XHRcdFx0XHRjbGFzc05hbWU9XCJibG9jayByb3VuZGVkLW1kIGN1cnNvci1wb2ludGVyIHB5LTMgcHgtNSB0ZXh0LXdoaXRlIGJnLXJlZC02MDBcIlxyXG5cdFx0XHRcdFx0b25DbGljaz17KCkgPT4ge1xyXG5cdFx0XHRcdFx0XHRzZXRTZWxlY3RlZEZyYWdtYW4oXCJodHRwczovL3ZpbWVvLmNvbS83Nzk5MDQ0MDZcIik7XHJcblx0XHRcdFx0XHRcdHNldFBvcFVwSXNBY3RpdmUodHJ1ZSk7XHJcblx0XHRcdFx0XHR9fT5cclxuXHRcdFx0XHRcdFBsYXkgVmlkZW9cclxuXHRcdFx0XHQ8L2J1dHRvbj5cclxuXHRcdFx0PC9kaXY+XHJcblxyXG5cdFx0XHR7c2VsZWN0ZWRGcmFnbWFuICE9PSBudWxsICYmIHBvcFVwSXNBY3RpdmUgJiYgKFxyXG5cdFx0XHRcdDxGcmFnbWFuUG9wVXBcclxuXHRcdFx0XHRcdHZpZGVvTGluaz17c2VsZWN0ZWRGcmFnbWFufVxyXG5cdFx0XHRcdFx0c2V0UG9wVXBJc0FjdGl2ZT17c2V0UG9wVXBJc0FjdGl2ZX1cclxuXHRcdFx0XHQvPlxyXG5cdFx0XHQpfVxyXG5cdFx0PC9kaXY+XHJcblx0KTtcclxufVxyXG4iXSwibmFtZXMiOlsidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJGcmFnbWFuUG9wVXAiLCJIb21lIiwic2VsZWN0ZWRGcmFnbWFuIiwic2V0U2VsZWN0ZWRGcmFnbWFuIiwicG9wVXBJc0FjdGl2ZSIsInNldFBvcFVwSXNBY3RpdmUiLCJkaXYiLCJjbGFzc05hbWUiLCJidXR0b24iLCJvbkNsaWNrIiwidmlkZW9MaW5rIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});