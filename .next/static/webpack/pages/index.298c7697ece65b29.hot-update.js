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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_FragmanPopUp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/FragmanPopUp */ \"./components/FragmanPopUp.js\");\n/* harmony import */ var _components_VimeoPlayer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/VimeoPlayer */ \"./components/VimeoPlayer.js\");\n\nvar _s = $RefreshSig$();\n\n\n\nfunction Home() {\n    _s();\n    const [selectedFragman, setSelectedFragman] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [popUpIsActive, setPopUpIsActive] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-col justify-center items-center p-10\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"p-10\",\n                children: \"Nextstacks vimeo sample\"\n            }, void 0, false, {\n                fileName: \"D:\\\\Appstone\\\\nvm\\\\pages\\\\index.js\",\n                lineNumber: 11,\n                columnNumber: 4\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"lg:w-1/2 md:w-2/3 w-full px-3\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_VimeoPlayer__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                    videoLink: \"https://vimeo.com/779904406\"\n                }, void 0, false, {\n                    fileName: \"D:\\\\Appstone\\\\nvm\\\\pages\\\\index.js\",\n                    lineNumber: 14,\n                    columnNumber: 5\n                }, this)\n            }, void 0, false, {\n                fileName: \"D:\\\\Appstone\\\\nvm\\\\pages\\\\index.js\",\n                lineNumber: 13,\n                columnNumber: 4\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-row\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"p-2\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            className: \"block rounded-md cursor-pointer py-3 px-5 text-white bg-red-600\",\n                            onClick: ()=>{\n                                setSelectedFragman(\"https://vimeo.com/779904406\");\n                                setPopUpIsActive(true);\n                            },\n                            children: \"Play Video 1\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\Appstone\\\\nvm\\\\pages\\\\index.js\",\n                            lineNumber: 19,\n                            columnNumber: 6\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Appstone\\\\nvm\\\\pages\\\\index.js\",\n                        lineNumber: 18,\n                        columnNumber: 5\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"p-2\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            className: \"block rounded-md cursor-pointer py-3 px-5 text-white bg-red-600\",\n                            onClick: ()=>{\n                                setSelectedFragman(\"https://vimeo.com/779904406\");\n                                setPopUpIsActive(true);\n                            },\n                            children: \"Play Video 2\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\Appstone\\\\nvm\\\\pages\\\\index.js\",\n                            lineNumber: 30,\n                            columnNumber: 6\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Appstone\\\\nvm\\\\pages\\\\index.js\",\n                        lineNumber: 29,\n                        columnNumber: 5\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\Appstone\\\\nvm\\\\pages\\\\index.js\",\n                lineNumber: 17,\n                columnNumber: 4\n            }, this),\n            selectedFragman !== null && popUpIsActive && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_FragmanPopUp__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                videoLink: selectedFragman,\n                setPopUpIsActive: setPopUpIsActive\n            }, void 0, false, {\n                fileName: \"D:\\\\Appstone\\\\nvm\\\\pages\\\\index.js\",\n                lineNumber: 42,\n                columnNumber: 5\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\Appstone\\\\nvm\\\\pages\\\\index.js\",\n        lineNumber: 10,\n        columnNumber: 3\n    }, this);\n}\n_s(Home, \"mijNEnVnRd7U8Rk8WAGcRR2Mbs8=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7O0FBQTRDO0FBQ1U7QUFDRjtBQUVyQyxTQUFTSSxPQUFPOztJQUM5QixNQUFNLENBQUNDLGlCQUFpQkMsbUJBQW1CLEdBQUdMLCtDQUFRQSxDQUFDLElBQUk7SUFDM0QsTUFBTSxDQUFDTSxlQUFlQyxpQkFBaUIsR0FBR1AsK0NBQVFBLENBQUMsS0FBSztJQUV4RCxxQkFDQyw4REFBQ1E7UUFBSUMsV0FBVTs7MEJBQ2QsOERBQUNEO2dCQUFJQyxXQUFVOzBCQUFPOzs7Ozs7MEJBRXRCLDhEQUFDRDtnQkFBSUMsV0FBVTswQkFDZCw0RUFBQ1AsK0RBQVdBO29CQUFDUSxXQUFVOzs7Ozs7Ozs7OzswQkFHeEIsOERBQUNGO2dCQUFJQyxXQUFVOztrQ0FDZCw4REFBQ0Q7d0JBQUlDLFdBQVU7a0NBQ2QsNEVBQUNFOzRCQUNBRixXQUFVOzRCQUNWRyxTQUFTLElBQU07Z0NBQ2RQLG1CQUFtQjtnQ0FDbkJFLGlCQUFpQixJQUFJOzRCQUN0QjtzQ0FBRzs7Ozs7Ozs7Ozs7a0NBS0wsOERBQUNDO3dCQUFJQyxXQUFVO2tDQUNkLDRFQUFDRTs0QkFDQUYsV0FBVTs0QkFDVkcsU0FBUyxJQUFNO2dDQUNkUCxtQkFBbUI7Z0NBQ25CRSxpQkFBaUIsSUFBSTs0QkFDdEI7c0NBQUc7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBTUxILG9CQUFvQixJQUFJLElBQUlFLCtCQUM1Qiw4REFBQ0wsZ0VBQVlBO2dCQUNaUyxXQUFXTjtnQkFDWEcsa0JBQWtCQTs7Ozs7Ozs7Ozs7O0FBS3ZCLENBQUM7R0E1Q3VCSjtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5qcz9iZWU3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEZyYWdtYW5Qb3BVcCBmcm9tIFwiLi4vY29tcG9uZW50cy9GcmFnbWFuUG9wVXBcIjtcclxuaW1wb3J0IFZpbWVvUGxheWVyIGZyb20gXCIuLi9jb21wb25lbnRzL1ZpbWVvUGxheWVyXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xyXG5cdGNvbnN0IFtzZWxlY3RlZEZyYWdtYW4sIHNldFNlbGVjdGVkRnJhZ21hbl0gPSB1c2VTdGF0ZShudWxsKTtcclxuXHRjb25zdCBbcG9wVXBJc0FjdGl2ZSwgc2V0UG9wVXBJc0FjdGl2ZV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG5cdHJldHVybiAoXHJcblx0XHQ8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIHAtMTBcIj5cclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJwLTEwXCI+TmV4dHN0YWNrcyB2aW1lbyBzYW1wbGU8L2Rpdj5cclxuXHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibGc6dy0xLzIgbWQ6dy0yLzMgdy1mdWxsIHB4LTNcIj5cclxuXHRcdFx0XHQ8VmltZW9QbGF5ZXIgdmlkZW9MaW5rPVwiaHR0cHM6Ly92aW1lby5jb20vNzc5OTA0NDA2XCIgLz5cclxuXHRcdFx0PC9kaXY+XHJcblxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1yb3dcIj5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInAtMlwiPlxyXG5cdFx0XHRcdFx0PGJ1dHRvblxyXG5cdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJibG9jayByb3VuZGVkLW1kIGN1cnNvci1wb2ludGVyIHB5LTMgcHgtNSB0ZXh0LXdoaXRlIGJnLXJlZC02MDBcIlxyXG5cdFx0XHRcdFx0XHRvbkNsaWNrPXsoKSA9PiB7XHJcblx0XHRcdFx0XHRcdFx0c2V0U2VsZWN0ZWRGcmFnbWFuKFwiaHR0cHM6Ly92aW1lby5jb20vNzc5OTA0NDA2XCIpO1xyXG5cdFx0XHRcdFx0XHRcdHNldFBvcFVwSXNBY3RpdmUodHJ1ZSk7XHJcblx0XHRcdFx0XHRcdH19PlxyXG5cdFx0XHRcdFx0XHRQbGF5IFZpZGVvIDFcclxuXHRcdFx0XHRcdDwvYnV0dG9uPlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInAtMlwiPlxyXG5cdFx0XHRcdFx0PGJ1dHRvblxyXG5cdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJibG9jayByb3VuZGVkLW1kIGN1cnNvci1wb2ludGVyIHB5LTMgcHgtNSB0ZXh0LXdoaXRlIGJnLXJlZC02MDBcIlxyXG5cdFx0XHRcdFx0XHRvbkNsaWNrPXsoKSA9PiB7XHJcblx0XHRcdFx0XHRcdFx0c2V0U2VsZWN0ZWRGcmFnbWFuKFwiaHR0cHM6Ly92aW1lby5jb20vNzc5OTA0NDA2XCIpO1xyXG5cdFx0XHRcdFx0XHRcdHNldFBvcFVwSXNBY3RpdmUodHJ1ZSk7XHJcblx0XHRcdFx0XHRcdH19PlxyXG5cdFx0XHRcdFx0XHRQbGF5IFZpZGVvIDJcclxuXHRcdFx0XHRcdDwvYnV0dG9uPlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHJcblx0XHRcdHtzZWxlY3RlZEZyYWdtYW4gIT09IG51bGwgJiYgcG9wVXBJc0FjdGl2ZSAmJiAoXHJcblx0XHRcdFx0PEZyYWdtYW5Qb3BVcFxyXG5cdFx0XHRcdFx0dmlkZW9MaW5rPXtzZWxlY3RlZEZyYWdtYW59XHJcblx0XHRcdFx0XHRzZXRQb3BVcElzQWN0aXZlPXtzZXRQb3BVcElzQWN0aXZlfVxyXG5cdFx0XHRcdC8+XHJcblx0XHRcdCl9XHJcblx0XHQ8L2Rpdj5cclxuXHQpO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkZyYWdtYW5Qb3BVcCIsIlZpbWVvUGxheWVyIiwiSG9tZSIsInNlbGVjdGVkRnJhZ21hbiIsInNldFNlbGVjdGVkRnJhZ21hbiIsInBvcFVwSXNBY3RpdmUiLCJzZXRQb3BVcElzQWN0aXZlIiwiZGl2IiwiY2xhc3NOYW1lIiwidmlkZW9MaW5rIiwiYnV0dG9uIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});