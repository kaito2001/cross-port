"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./components/layout/Header/Navbar.tsx":
/*!*********************************************!*\
  !*** ./components/layout/Header/Navbar.tsx ***!
  \*********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Navbar; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nfunction Navbar() {\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    const handleNavbarClick = (path)=>{\n        router.push(path);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n            className: \"flex space-x-10 text-slate-400\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"font-semibold hover:text-black\",\n                        onClick: ()=>handleNavbarClick(\"/\"),\n                        children: \"Home\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\CODE\\\\soundbound-client\\\\components\\\\layout\\\\Header\\\\Navbar.tsx\",\n                        lineNumber: 14,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"D:\\\\CODE\\\\soundbound-client\\\\components\\\\layout\\\\Header\\\\Navbar.tsx\",\n                    lineNumber: 13,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"font-semibold hover:text-black\",\n                        onClick: ()=>handleNavbarClick(\"/faucet\"),\n                        children: \"Faucet\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\CODE\\\\soundbound-client\\\\components\\\\layout\\\\Header\\\\Navbar.tsx\",\n                        lineNumber: 22,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"D:\\\\CODE\\\\soundbound-client\\\\components\\\\layout\\\\Header\\\\Navbar.tsx\",\n                    lineNumber: 21,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"D:\\\\CODE\\\\soundbound-client\\\\components\\\\layout\\\\Header\\\\Navbar.tsx\",\n            lineNumber: 12,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"D:\\\\CODE\\\\soundbound-client\\\\components\\\\layout\\\\Header\\\\Navbar.tsx\",\n        lineNumber: 11,\n        columnNumber: 5\n    }, this);\n}\n_s(Navbar, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter\n    ];\n});\n_c = Navbar;\nvar _c;\n$RefreshReg$(_c, \"Navbar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2xheW91dC9IZWFkZXIvTmF2YmFyLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQXVDO0FBRXhCLFNBQVNDOztJQUN0QixNQUFNQyxTQUFTRixzREFBU0E7SUFFeEIsTUFBTUcsb0JBQW9CLENBQUNDO1FBQ3pCRixPQUFPRyxJQUFJLENBQUNEO0lBQ2Q7SUFFQSxxQkFDRSw4REFBQ0U7a0JBQ0MsNEVBQUNDO1lBQUdDLFdBQVU7OzhCQUNaLDhEQUFDQzs4QkFDQyw0RUFBQ0M7d0JBQ0NGLFdBQVU7d0JBQ1ZHLFNBQVMsSUFBTVIsa0JBQWtCO2tDQUNsQzs7Ozs7Ozs7Ozs7OEJBSUgsOERBQUNNOzhCQUNDLDRFQUFDQzt3QkFDQ0YsV0FBVTt3QkFDVkcsU0FBUyxJQUFNUixrQkFBa0I7a0NBQ2xDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBT1g7R0E3QndCRjs7UUFDUEQsa0RBQVNBOzs7S0FERkMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9sYXlvdXQvSGVhZGVyL05hdmJhci50c3g/ZjcxNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE5hdmJhcigpIHtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxyXG5cclxuICBjb25zdCBoYW5kbGVOYXZiYXJDbGljayA9IChwYXRoOiBzdHJpbmcpID0+IHtcclxuICAgIHJvdXRlci5wdXNoKHBhdGgpXHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPHVsIGNsYXNzTmFtZT1cImZsZXggc3BhY2UteC0xMCB0ZXh0LXNsYXRlLTQwMFwiPlxyXG4gICAgICAgIDxsaT5cclxuICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9udC1zZW1pYm9sZCBob3Zlcjp0ZXh0LWJsYWNrXCJcclxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlTmF2YmFyQ2xpY2soJy8nKX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgSG9tZVxyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgPC9saT5cclxuICAgICAgICA8bGk+XHJcbiAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvbnQtc2VtaWJvbGQgaG92ZXI6dGV4dC1ibGFja1wiXHJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZU5hdmJhckNsaWNrKCcvZmF1Y2V0Jyl9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIEZhdWNldFxyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgPC9saT5cclxuICAgICAgPC91bD5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG4iXSwibmFtZXMiOlsidXNlUm91dGVyIiwiTmF2YmFyIiwicm91dGVyIiwiaGFuZGxlTmF2YmFyQ2xpY2siLCJwYXRoIiwicHVzaCIsImRpdiIsInVsIiwiY2xhc3NOYW1lIiwibGkiLCJidXR0b24iLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/layout/Header/Navbar.tsx\n"));

/***/ }),

/***/ "./components/layout/Header/index.tsx":
/*!********************************************!*\
  !*** ./components/layout/Header/index.tsx ***!
  \********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Header; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _ConnectButton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ConnectButton */ \"./components/layout/Header/ConnectButton.tsx\");\n/* harmony import */ var _Logo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Logo */ \"./components/layout/Header/Logo.tsx\");\n/* harmony import */ var _Navbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Navbar */ \"./components/layout/Header/Navbar.tsx\");\n\n\n\n\nfunction Header() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"fixed left-0 top-0 flex h-14 w-full justify-center shadow-md shadow-slate-100\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"relative flex h-full w-3/4 items-center\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"absolute left-0\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Logo__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                        fileName: \"D:\\\\CODE\\\\soundbound-client\\\\components\\\\layout\\\\Header\\\\index.tsx\",\n                        lineNumber: 10,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"D:\\\\CODE\\\\soundbound-client\\\\components\\\\layout\\\\Header\\\\index.tsx\",\n                    lineNumber: 9,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex w-full items-center justify-center\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Navbar__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                        fileName: \"D:\\\\CODE\\\\soundbound-client\\\\components\\\\layout\\\\Header\\\\index.tsx\",\n                        lineNumber: 13,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"D:\\\\CODE\\\\soundbound-client\\\\components\\\\layout\\\\Header\\\\index.tsx\",\n                    lineNumber: 12,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"absolute right-0\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ConnectButton__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n                        fileName: \"D:\\\\CODE\\\\soundbound-client\\\\components\\\\layout\\\\Header\\\\index.tsx\",\n                        lineNumber: 16,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"D:\\\\CODE\\\\soundbound-client\\\\components\\\\layout\\\\Header\\\\index.tsx\",\n                    lineNumber: 15,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"D:\\\\CODE\\\\soundbound-client\\\\components\\\\layout\\\\Header\\\\index.tsx\",\n            lineNumber: 8,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"D:\\\\CODE\\\\soundbound-client\\\\components\\\\layout\\\\Header\\\\index.tsx\",\n        lineNumber: 7,\n        columnNumber: 5\n    }, this);\n}\n_c = Header;\nvar _c;\n$RefreshReg$(_c, \"Header\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2xheW91dC9IZWFkZXIvaW5kZXgudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBMkM7QUFDbEI7QUFDSTtBQUVkLFNBQVNHO0lBQ3RCLHFCQUNFLDhEQUFDQztRQUFJQyxXQUFVO2tCQUNiLDRFQUFDRDtZQUFJQyxXQUFVOzs4QkFDYiw4REFBQ0Q7b0JBQUlDLFdBQVU7OEJBQ2IsNEVBQUNKLDZDQUFJQTs7Ozs7Ozs7Ozs4QkFFUCw4REFBQ0c7b0JBQUlDLFdBQVU7OEJBQ2IsNEVBQUNILCtDQUFNQTs7Ozs7Ozs7Ozs4QkFFVCw4REFBQ0U7b0JBQUlDLFdBQVU7OEJBQ2IsNEVBQUNMLHNEQUFhQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS3hCO0tBaEJ3QkciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9sYXlvdXQvSGVhZGVyL2luZGV4LnRzeD9lMmFjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBDb25uZWN0QnV0dG9uIGZyb20gJy4vQ29ubmVjdEJ1dHRvbidcclxuaW1wb3J0IExvZ28gZnJvbSAnLi9Mb2dvJ1xyXG5pbXBvcnQgTmF2YmFyIGZyb20gJy4vTmF2YmFyJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSGVhZGVyKCkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZpeGVkIGxlZnQtMCB0b3AtMCBmbGV4IGgtMTQgdy1mdWxsIGp1c3RpZnktY2VudGVyIHNoYWRvdy1tZCBzaGFkb3ctc2xhdGUtMTAwXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgZmxleCBoLWZ1bGwgdy0zLzQgaXRlbXMtY2VudGVyXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSBsZWZ0LTBcIj5cclxuICAgICAgICAgIDxMb2dvIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IHctZnVsbCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXJcIj5cclxuICAgICAgICAgIDxOYXZiYXIgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIHJpZ2h0LTBcIj5cclxuICAgICAgICAgIDxDb25uZWN0QnV0dG9uIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcbiJdLCJuYW1lcyI6WyJDb25uZWN0QnV0dG9uIiwiTG9nbyIsIk5hdmJhciIsIkhlYWRlciIsImRpdiIsImNsYXNzTmFtZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/layout/Header/index.tsx\n"));

/***/ })

});