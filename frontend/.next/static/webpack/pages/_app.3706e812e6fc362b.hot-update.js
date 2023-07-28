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

/***/ "./components/layout/Header/ConnectButton.tsx":
/*!****************************************************!*\
  !*** ./components/layout/Header/ConnectButton.tsx ***!
  \****************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ConnectButton; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _assets_images_download_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/assets/images/download.jpg */ \"./assets/images/download.jpg\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _contract_connectMetamask__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/contract/connectMetamask */ \"./contract/connectMetamask.ts\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next-auth/react */ \"./node_modules/next-auth/react/index.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_6__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nfunction ConnectButton() {\n    _s();\n    const { data: session, status } = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_6__.useSession)();\n    const [address, setAddress] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(undefined);\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const handleSignInButtonClick = (path)=>{\n        router.push(path);\n    };\n    const handleConnectWalletButtonClick = async ()=>{\n        await (0,_contract_connectMetamask__WEBPACK_IMPORTED_MODULE_5__.connectMetamask)().then((value)=>setAddress(value)).catch((err)=>console.log(err));\n    };\n    if (status === \"unauthenticated\") return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n        className: \" rounded-full px-6 py-1 text-slate-400 outline outline-1 outline-slate-400 hover:bg-slate-900 hover:text-white\",\n        onClick: ()=>handleSignInButtonClick(\"/login\"),\n        children: \"Sign in\"\n    }, void 0, false, {\n        fileName: \"D:\\\\CODE\\\\soundbound-client\\\\components\\\\layout\\\\Header\\\\ConnectButton.tsx\",\n        lineNumber: 29,\n        columnNumber: 7\n    }, this);\n    else if (status === \"authenticated\") {\n        var _session_user, _session, _session_user1, _session1;\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"flex items-center space-x-4\",\n            children: [\n                address ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    className: \"w-40 truncate rounded-full px-6 py-1 text-slate-400 outline outline-1 outline-slate-400 hover:bg-slate-900 hover:text-white\",\n                    children: address\n                }, void 0, false, {\n                    fileName: \"D:\\\\CODE\\\\soundbound-client\\\\components\\\\layout\\\\Header\\\\ConnectButton.tsx\",\n                    lineNumber: 40,\n                    columnNumber: 11\n                }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    className: \"w-40 truncate rounded-full px-6 py-1 text-slate-400 outline outline-1 outline-slate-400 hover:bg-slate-900 hover:text-white\",\n                    onClick: handleConnectWalletButtonClick,\n                    children: \"Connect Wallet\"\n                }, void 0, false, {\n                    fileName: \"D:\\\\CODE\\\\soundbound-client\\\\components\\\\layout\\\\Header\\\\ConnectButton.tsx\",\n                    lineNumber: 44,\n                    columnNumber: 11\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            className: \"relative inline-flex h-8 w-8 items-center justify-center rounded-full bg-gray-200 text-gray-800\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                className: \"h-full w-full rounded-full object-cover\",\n                                src: _assets_images_download_jpg__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n                                fill: true,\n                                sizes: \"large\",\n                                alt: \"Your avatar\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\CODE\\\\soundbound-client\\\\components\\\\layout\\\\Header\\\\ConnectButton.tsx\",\n                                lineNumber: 53,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"D:\\\\CODE\\\\soundbound-client\\\\components\\\\layout\\\\Header\\\\ConnectButton.tsx\",\n                            lineNumber: 52,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"h-40 w-80 rounded-full bg-slate-500 absolute top-full left-1/\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"text-black\",\n                                    children: [\n                                        \"Signed in as \",\n                                        (_session = session) === null || _session === void 0 ? void 0 : (_session_user = _session.user) === null || _session_user === void 0 ? void 0 : _session_user.name\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"D:\\\\CODE\\\\soundbound-client\\\\components\\\\layout\\\\Header\\\\ConnectButton.tsx\",\n                                    lineNumber: 63,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                    fileName: \"D:\\\\CODE\\\\soundbound-client\\\\components\\\\layout\\\\Header\\\\ConnectButton.tsx\",\n                                    lineNumber: 66,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"text-black\",\n                                    children: [\n                                        \"With email: \",\n                                        (_session1 = session) === null || _session1 === void 0 ? void 0 : (_session_user1 = _session1.user) === null || _session_user1 === void 0 ? void 0 : _session_user1.email\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"D:\\\\CODE\\\\soundbound-client\\\\components\\\\layout\\\\Header\\\\ConnectButton.tsx\",\n                                    lineNumber: 67,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                    fileName: \"D:\\\\CODE\\\\soundbound-client\\\\components\\\\layout\\\\Header\\\\ConnectButton.tsx\",\n                                    lineNumber: 70,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    onClick: ()=>(0,next_auth_react__WEBPACK_IMPORTED_MODULE_6__.signOut)(),\n                                    className: \"rounded-full bg-red-700 p-3 hover:bg-red-300\",\n                                    children: \"Sign Out\"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\CODE\\\\soundbound-client\\\\components\\\\layout\\\\Header\\\\ConnectButton.tsx\",\n                                    lineNumber: 71,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"D:\\\\CODE\\\\soundbound-client\\\\components\\\\layout\\\\Header\\\\ConnectButton.tsx\",\n                            lineNumber: 62,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"D:\\\\CODE\\\\soundbound-client\\\\components\\\\layout\\\\Header\\\\ConnectButton.tsx\",\n                    lineNumber: 51,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"D:\\\\CODE\\\\soundbound-client\\\\components\\\\layout\\\\Header\\\\ConnectButton.tsx\",\n            lineNumber: 38,\n            columnNumber: 7\n        }, this);\n    }\n}\n_s(ConnectButton, \"Kv6CbkhKogBGI9SMWWPAohCEhFk=\", false, function() {\n    return [\n        next_auth_react__WEBPACK_IMPORTED_MODULE_6__.useSession,\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = ConnectButton;\nvar _c;\n$RefreshReg$(_c, \"ConnectButton\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2xheW91dC9IZWFkZXIvQ29ubmVjdEJ1dHRvbi50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQThCO0FBQ1M7QUFDVTtBQUNqQjtBQUM0QjtBQUNQO0FBRXRDLFNBQVNPOztJQUN0QixNQUFNLEVBQUVDLE1BQU1DLE9BQU8sRUFBRUMsTUFBTSxFQUFFLEdBQUdMLDJEQUFVQTtJQUU1QyxNQUFNLENBQUNNLFNBQVNDLFdBQVcsR0FBR1QsK0NBQVFBLENBQ3BDVTtJQUdGLE1BQU1DLFNBQVNiLHNEQUFTQTtJQUV4QixNQUFNYywwQkFBMEIsQ0FBQ0M7UUFDL0JGLE9BQU9HLElBQUksQ0FBQ0Q7SUFDZDtJQUVBLE1BQU1FLGlDQUFpQztRQUNyQyxNQUFNZCwwRUFBZUEsR0FDbEJlLElBQUksQ0FBQyxDQUFDQyxRQUFVUixXQUFXUSxRQUMzQkMsS0FBSyxDQUFDLENBQUNDLE1BQVFDLFFBQVFDLEdBQUcsQ0FBQ0Y7SUFDaEM7SUFFQSxJQUFJWixXQUFXLG1CQUNiLHFCQUNFLDhEQUFDZTtRQUNDQyxXQUFVO1FBQ1ZDLFNBQVMsSUFBTVosd0JBQXdCO2tCQUN4Qzs7Ozs7O1NBSUEsSUFBSUwsV0FBVyxpQkFBaUI7WUE0QlhELGVBQUFBLFVBSURBLGdCQUFBQTtRQS9CdkIscUJBQ0UsOERBQUNtQjtZQUFJRixXQUFVOztnQkFDWmYsd0JBQ0MsOERBQUNjO29CQUFPQyxXQUFVOzhCQUNmZjs7Ozs7eUNBR0gsOERBQUNjO29CQUNDQyxXQUFVO29CQUNWQyxTQUFTVDs4QkFDVjs7Ozs7OzhCQUlILDhEQUFDVTs7c0NBQ0MsOERBQUNIOzRCQUFPQyxXQUFVO3NDQUNoQiw0RUFBQzFCLG1EQUFLQTtnQ0FDSjBCLFdBQVU7Z0NBQ1ZHLEtBQUszQixtRUFBTUE7Z0NBQ1g0QixJQUFJO2dDQUNKQyxPQUFNO2dDQUNOQyxLQUFJOzs7Ozs7Ozs7OztzQ0FJUiw4REFBQ0o7NEJBQUlGLFdBQVU7OzhDQUNiLDhEQUFDTztvQ0FBRVAsV0FBVTs7d0NBQWE7eUNBQ1ZqQixXQUFBQSxxQkFBQUEsZ0NBQUFBLGdCQUFBQSxTQUFTeUIsSUFBSSxjQUFiekIsb0NBQUFBLGNBQWUwQixJQUFJOzs7Ozs7OzhDQUVuQyw4REFBQ0M7Ozs7OzhDQUNELDhEQUFDSDtvQ0FBRVAsV0FBVTs7d0NBQWE7eUNBQ1hqQixZQUFBQSxxQkFBQUEsaUNBQUFBLGlCQUFBQSxVQUFTeUIsSUFBSSxjQUFiekIscUNBQUFBLGVBQWU0QixLQUFLOzs7Ozs7OzhDQUVuQyw4REFBQ0Q7Ozs7OzhDQUNELDhEQUFDWDtvQ0FDQ0UsU0FBUyxJQUFNckIsd0RBQU9BO29DQUN0Qm9CLFdBQVU7OENBQ1g7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQU9YO0FBQ0Y7R0ExRXdCbkI7O1FBQ1lGLHVEQUFVQTtRQU03Qkosa0RBQVNBOzs7S0FQRk0iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9sYXlvdXQvSGVhZGVyL0Nvbm5lY3RCdXR0b24udHN4P2FhNGYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnXHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xyXG5pbXBvcnQgYXZhdGFyIGZyb20gJ0AvYXNzZXRzL2ltYWdlcy9kb3dubG9hZC5qcGcnXHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IGNvbm5lY3RNZXRhbWFzayB9IGZyb20gJ0AvY29udHJhY3QvY29ubmVjdE1ldGFtYXNrJ1xyXG5pbXBvcnQgeyB1c2VTZXNzaW9uLCBzaWduT3V0IH0gZnJvbSAnbmV4dC1hdXRoL3JlYWN0J1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ29ubmVjdEJ1dHRvbigpIHtcclxuICBjb25zdCB7IGRhdGE6IHNlc3Npb24sIHN0YXR1cyB9ID0gdXNlU2Vzc2lvbigpXHJcblxyXG4gIGNvbnN0IFthZGRyZXNzLCBzZXRBZGRyZXNzXSA9IHVzZVN0YXRlPHN0cmluZyB8IHVuZGVmaW5lZD4oXHJcbiAgICB1bmRlZmluZWRcclxuICApXHJcblxyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXHJcblxyXG4gIGNvbnN0IGhhbmRsZVNpZ25JbkJ1dHRvbkNsaWNrID0gKHBhdGg6IHN0cmluZykgPT4ge1xyXG4gICAgcm91dGVyLnB1c2gocGF0aClcclxuICB9XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNvbm5lY3RXYWxsZXRCdXR0b25DbGljayA9IGFzeW5jICgpID0+IHtcclxuICAgIGF3YWl0IGNvbm5lY3RNZXRhbWFzaygpXHJcbiAgICAgIC50aGVuKCh2YWx1ZSkgPT4gc2V0QWRkcmVzcyh2YWx1ZSkpXHJcbiAgICAgIC5jYXRjaCgoZXJyKSA9PiBjb25zb2xlLmxvZyhlcnIpKVxyXG4gIH1cclxuXHJcbiAgaWYgKHN0YXR1cyA9PT0gJ3VuYXV0aGVudGljYXRlZCcpXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8YnV0dG9uXHJcbiAgICAgICAgY2xhc3NOYW1lPVwiIHJvdW5kZWQtZnVsbCBweC02IHB5LTEgdGV4dC1zbGF0ZS00MDAgb3V0bGluZSBvdXRsaW5lLTEgb3V0bGluZS1zbGF0ZS00MDAgaG92ZXI6Ymctc2xhdGUtOTAwIGhvdmVyOnRleHQtd2hpdGVcIlxyXG4gICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZVNpZ25JbkJ1dHRvbkNsaWNrKCcvbG9naW4nKX1cclxuICAgICAgPlxyXG4gICAgICAgIFNpZ24gaW5cclxuICAgICAgPC9idXR0b24+XHJcbiAgICApXHJcbiAgZWxzZSBpZiAoc3RhdHVzID09PSAnYXV0aGVudGljYXRlZCcpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgc3BhY2UteC00XCI+XHJcbiAgICAgICAge2FkZHJlc3MgPyAoXHJcbiAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInctNDAgdHJ1bmNhdGUgcm91bmRlZC1mdWxsIHB4LTYgcHktMSB0ZXh0LXNsYXRlLTQwMCBvdXRsaW5lIG91dGxpbmUtMSBvdXRsaW5lLXNsYXRlLTQwMCBob3ZlcjpiZy1zbGF0ZS05MDAgaG92ZXI6dGV4dC13aGl0ZVwiPlxyXG4gICAgICAgICAgICB7YWRkcmVzc31cclxuICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICkgOiAoXHJcbiAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInctNDAgdHJ1bmNhdGUgcm91bmRlZC1mdWxsIHB4LTYgcHktMSB0ZXh0LXNsYXRlLTQwMCBvdXRsaW5lIG91dGxpbmUtMSBvdXRsaW5lLXNsYXRlLTQwMCBob3ZlcjpiZy1zbGF0ZS05MDAgaG92ZXI6dGV4dC13aGl0ZVwiXHJcbiAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZUNvbm5lY3RXYWxsZXRCdXR0b25DbGlja31cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgQ29ubmVjdCBXYWxsZXRcclxuICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICl9XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwicmVsYXRpdmUgaW5saW5lLWZsZXggaC04IHctOCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgcm91bmRlZC1mdWxsIGJnLWdyYXktMjAwIHRleHQtZ3JheS04MDBcIj5cclxuICAgICAgICAgICAgPEltYWdlXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaC1mdWxsIHctZnVsbCByb3VuZGVkLWZ1bGwgb2JqZWN0LWNvdmVyXCJcclxuICAgICAgICAgICAgICBzcmM9e2F2YXRhcn1cclxuICAgICAgICAgICAgICBmaWxsXHJcbiAgICAgICAgICAgICAgc2l6ZXM9XCJsYXJnZVwiXHJcbiAgICAgICAgICAgICAgYWx0PVwiWW91ciBhdmF0YXJcIlxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9idXR0b24+XHJcblxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoLTQwIHctODAgcm91bmRlZC1mdWxsIGJnLXNsYXRlLTUwMCBhYnNvbHV0ZSB0b3AtZnVsbCBsZWZ0LTEvXCI+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtYmxhY2tcIj5cclxuICAgICAgICAgICAgICBTaWduZWQgaW4gYXMge3Nlc3Npb24/LnVzZXI/Lm5hbWV9XHJcbiAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtYmxhY2tcIj5cclxuICAgICAgICAgICAgICBXaXRoIGVtYWlsOiB7c2Vzc2lvbj8udXNlcj8uZW1haWx9XHJcbiAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzaWduT3V0KCl9XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicm91bmRlZC1mdWxsIGJnLXJlZC03MDAgcC0zIGhvdmVyOmJnLXJlZC0zMDBcIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgU2lnbiBPdXRcclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICApXHJcbiAgfVxyXG59XHJcbiJdLCJuYW1lcyI6WyJJbWFnZSIsInVzZVJvdXRlciIsImF2YXRhciIsInVzZVN0YXRlIiwiY29ubmVjdE1ldGFtYXNrIiwidXNlU2Vzc2lvbiIsInNpZ25PdXQiLCJDb25uZWN0QnV0dG9uIiwiZGF0YSIsInNlc3Npb24iLCJzdGF0dXMiLCJhZGRyZXNzIiwic2V0QWRkcmVzcyIsInVuZGVmaW5lZCIsInJvdXRlciIsImhhbmRsZVNpZ25JbkJ1dHRvbkNsaWNrIiwicGF0aCIsInB1c2giLCJoYW5kbGVDb25uZWN0V2FsbGV0QnV0dG9uQ2xpY2siLCJ0aGVuIiwidmFsdWUiLCJjYXRjaCIsImVyciIsImNvbnNvbGUiLCJsb2ciLCJidXR0b24iLCJjbGFzc05hbWUiLCJvbkNsaWNrIiwiZGl2Iiwic3JjIiwiZmlsbCIsInNpemVzIiwiYWx0IiwicCIsInVzZXIiLCJuYW1lIiwiYnIiLCJlbWFpbCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/layout/Header/ConnectButton.tsx\n"));

/***/ })

});