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

/***/ "./components/layout/Header/ConnectButton/index.tsx":
/*!**********************************************************!*\
  !*** ./components/layout/Header/ConnectButton/index.tsx ***!
  \**********************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ConnectButton; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-auth/react */ \"./node_modules/next-auth/react/index.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _AuthenticatedButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./AuthenticatedButton */ \"./components/layout/Header/ConnectButton/AuthenticatedButton.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\nfunction ConnectButton() {\n    _s();\n    const { status } = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_2__.useSession)();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    const handleSignInButtonClick = (path)=>{\n        router.push(path);\n    };\n    if (status === \"unauthenticated\") return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n        className: \" rounded-full px-6 py-1 text-slate-400 outline outline-1 outline-slate-400 hover:bg-slate-900 hover:text-white\",\n        onClick: ()=>handleSignInButtonClick(\"/login\"),\n        children: \"Sign in\"\n    }, void 0, false, {\n        fileName: \"D:\\\\CODE\\\\soundbound-client\\\\components\\\\layout\\\\Header\\\\ConnectButton\\\\index.tsx\",\n        lineNumber: 20,\n        columnNumber: 7\n    }, this);\n    else if (status === \"authenticated\") {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_AuthenticatedButton__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n            fileName: \"D:\\\\CODE\\\\soundbound-client\\\\components\\\\layout\\\\Header\\\\ConnectButton\\\\index.tsx\",\n            lineNumber: 28,\n            columnNumber: 12\n        }, this);\n    }\n}\n_s(ConnectButton, \"3gYlHoNKaidhH1fllV1rBoMGztw=\", false, function() {\n    return [\n        next_auth_react__WEBPACK_IMPORTED_MODULE_2__.useSession,\n        next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter\n    ];\n});\n_c = ConnectButton;\nvar _c;\n$RefreshReg$(_c, \"ConnectButton\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2xheW91dC9IZWFkZXIvQ29ubmVjdEJ1dHRvbi9pbmRleC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUN1QztBQUljO0FBQ0U7QUFFeEMsU0FBU0c7O0lBQ3RCLE1BQU0sRUFBRUMsTUFBTSxFQUFFLEdBQUdILDJEQUFVQTtJQUU3QixNQUFNSSxTQUFTTCxzREFBU0E7SUFFeEIsTUFBTU0sMEJBQTBCLENBQUNDO1FBQy9CRixPQUFPRyxJQUFJLENBQUNEO0lBQ2Q7SUFFQSxJQUFJSCxXQUFXLG1CQUNiLHFCQUNFLDhEQUFDSztRQUNDQyxXQUFVO1FBQ1ZDLFNBQVMsSUFBTUwsd0JBQXdCO2tCQUN4Qzs7Ozs7O1NBSUEsSUFBSUYsV0FBVyxpQkFBaUI7UUFDbkMscUJBQU8sOERBQUNGLDREQUFtQkE7Ozs7O0lBQzdCO0FBQ0Y7R0FyQndCQzs7UUFDSEYsdURBQVVBO1FBRWRELGtEQUFTQTs7O0tBSEZHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvbGF5b3V0L0hlYWRlci9Db25uZWN0QnV0dG9uL2luZGV4LnRzeD8xZDk0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJ1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcclxuaW1wb3J0IGF2YXRhciBmcm9tICdAL2Fzc2V0cy9pbWFnZXMvZG93bmxvYWQuanBnJ1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBjb25uZWN0TWV0YW1hc2sgfSBmcm9tICdAL2NvbnRyYWN0L2Nvbm5lY3RNZXRhbWFzaydcclxuaW1wb3J0IHsgdXNlU2Vzc2lvbiwgc2lnbk91dCB9IGZyb20gJ25leHQtYXV0aC9yZWFjdCdcclxuaW1wb3J0IEF1dGhlbnRpY2F0ZWRCdXR0b24gZnJvbSAnLi9BdXRoZW50aWNhdGVkQnV0dG9uJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ29ubmVjdEJ1dHRvbigpIHtcclxuICBjb25zdCB7IHN0YXR1cyB9ID0gdXNlU2Vzc2lvbigpXHJcblxyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXHJcblxyXG4gIGNvbnN0IGhhbmRsZVNpZ25JbkJ1dHRvbkNsaWNrID0gKHBhdGg6IHN0cmluZykgPT4ge1xyXG4gICAgcm91dGVyLnB1c2gocGF0aClcclxuICB9XHJcblxyXG4gIGlmIChzdGF0dXMgPT09ICd1bmF1dGhlbnRpY2F0ZWQnKVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGJ1dHRvblxyXG4gICAgICAgIGNsYXNzTmFtZT1cIiByb3VuZGVkLWZ1bGwgcHgtNiBweS0xIHRleHQtc2xhdGUtNDAwIG91dGxpbmUgb3V0bGluZS0xIG91dGxpbmUtc2xhdGUtNDAwIGhvdmVyOmJnLXNsYXRlLTkwMCBob3Zlcjp0ZXh0LXdoaXRlXCJcclxuICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVTaWduSW5CdXR0b25DbGljaygnL2xvZ2luJyl9XHJcbiAgICAgID5cclxuICAgICAgICBTaWduIGluXHJcbiAgICAgIDwvYnV0dG9uPlxyXG4gICAgKVxyXG4gIGVsc2UgaWYgKHN0YXR1cyA9PT0gJ2F1dGhlbnRpY2F0ZWQnKSB7XHJcbiAgICByZXR1cm4gPEF1dGhlbnRpY2F0ZWRCdXR0b24gLz5cclxuICB9XHJcbn1cclxuIl0sIm5hbWVzIjpbInVzZVJvdXRlciIsInVzZVNlc3Npb24iLCJBdXRoZW50aWNhdGVkQnV0dG9uIiwiQ29ubmVjdEJ1dHRvbiIsInN0YXR1cyIsInJvdXRlciIsImhhbmRsZVNpZ25JbkJ1dHRvbkNsaWNrIiwicGF0aCIsInB1c2giLCJidXR0b24iLCJjbGFzc05hbWUiLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/layout/Header/ConnectButton/index.tsx\n"));

/***/ })

});