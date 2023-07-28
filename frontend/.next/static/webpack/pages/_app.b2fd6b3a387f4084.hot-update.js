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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ConnectButton; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _assets_images_download_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/assets/images/download.jpg */ \"./assets/images/download.jpg\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _contract_connectMetamask__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/contract/connectMetamask */ \"./contract/connectMetamask.ts\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next-auth/react */ \"./node_modules/next-auth/react/index.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_6__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nfunction ConnectButton() {\n    _s();\n    const { data: session, status } = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_6__.useSession)();\n    const [address, setAddress] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(undefined);\n    const [showAvt, setShowAvt] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false);\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const handleSignInButtonClick = (path)=>{\n        router.push(path);\n    };\n    const handleConnectWalletButtonClick = async ()=>{\n        await (0,_contract_connectMetamask__WEBPACK_IMPORTED_MODULE_5__.connectMetamask)().then((value)=>setAddress(value)).catch((err)=>console.log(err));\n    };\n    const handleAvtClick = async ()=>{\n        setShowAvt(!showAvt);\n        console.log(\"clicked\");\n    };\n    if (status === \"unauthenticated\") return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n        className: \" rounded-full px-6 py-1 text-slate-400 outline outline-1 outline-slate-400 hover:bg-slate-900 hover:text-white\",\n        onClick: ()=>handleSignInButtonClick(\"/login\"),\n        children: \"Sign in\"\n    }, void 0, false, {\n        fileName: \"D:\\\\CODE\\\\soundbound-client\\\\components\\\\layout\\\\Header\\\\ConnectButton.tsx\",\n        lineNumber: 35,\n        columnNumber: 7\n    }, this);\n    else if (status === \"authenticated\") {\n        var _session_user, _session, _session_user1, _session1;\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"flex items-center space-x-4\",\n            children: [\n                address ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    className: \"w-40 truncate rounded-full px-6 py-1 text-slate-400 outline outline-1 outline-slate-400 hover:bg-slate-900 hover:text-white\",\n                    children: address\n                }, void 0, false, {\n                    fileName: \"D:\\\\CODE\\\\soundbound-client\\\\components\\\\layout\\\\Header\\\\ConnectButton.tsx\",\n                    lineNumber: 46,\n                    columnNumber: 11\n                }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    className: \"w-40 truncate rounded-full px-6 py-1 text-slate-400 outline outline-1 outline-slate-400 hover:bg-slate-900 hover:text-white\",\n                    onClick: handleConnectWalletButtonClick,\n                    children: \"Connect Wallet\"\n                }, void 0, false, {\n                    fileName: \"D:\\\\CODE\\\\soundbound-client\\\\components\\\\layout\\\\Header\\\\ConnectButton.tsx\",\n                    lineNumber: 50,\n                    columnNumber: 11\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"relative\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            className: \"inline-flex h-8 w-8 items-center justify-center rounded-full bg-gray-200 text-gray-800\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                className: \"h-full w-full rounded-full object-cover\",\n                                src: _assets_images_download_jpg__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n                                fill: true,\n                                sizes: \"large\",\n                                alt: \"Your avatar\",\n                                onClick: handleAvtClick\n                            }, void 0, false, {\n                                fileName: \"D:\\\\CODE\\\\soundbound-client\\\\components\\\\layout\\\\Header\\\\ConnectButton.tsx\",\n                                lineNumber: 59,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"D:\\\\CODE\\\\soundbound-client\\\\components\\\\layout\\\\Header\\\\ConnectButton.tsx\",\n                            lineNumber: 58,\n                            columnNumber: 11\n                        }, this),\n                        showAvt && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"absolute right-0 z-10 mt-2 h-auto w-80 rounded-xl bg-white p-2 shadow-xl outline outline-1 outline-slate-300\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"text-black\"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\CODE\\\\soundbound-client\\\\components\\\\layout\\\\Header\\\\ConnectButton.tsx\",\n                                    lineNumber: 70,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                    href: \"#\",\n                                    className: \"block px-4 py-2 text-sm text-gray-700\",\n                                    role: \"menuitem\",\n                                    tabIndex: -1,\n                                    children: [\n                                        (_session = session) === null || _session === void 0 ? void 0 : (_session_user = _session.user) === null || _session_user === void 0 ? void 0 : _session_user.name,\n                                        \"              \"\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"D:\\\\CODE\\\\soundbound-client\\\\components\\\\layout\\\\Header\\\\ConnectButton.tsx\",\n                                    lineNumber: 72,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                    href: \"#\",\n                                    className: \"block px-4 py-2 text-sm text-gray-700\",\n                                    role: \"menuitem\",\n                                    tabIndex: -1,\n                                    children: [\n                                        (_session1 = session) === null || _session1 === void 0 ? void 0 : (_session_user1 = _session1.user) === null || _session_user1 === void 0 ? void 0 : _session_user1.email,\n                                        \"              \"\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"D:\\\\CODE\\\\soundbound-client\\\\components\\\\layout\\\\Header\\\\ConnectButton.tsx\",\n                                    lineNumber: 79,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"flex w-full justify-end\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        onClick: ()=>(0,next_auth_react__WEBPACK_IMPORTED_MODULE_6__.signOut)(),\n                                        className: \"rounded-full bg-red-700 px-4 py-2 hover:bg-red-300\",\n                                        children: \"Sign Out\"\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\CODE\\\\soundbound-client\\\\components\\\\layout\\\\Header\\\\ConnectButton.tsx\",\n                                        lineNumber: 87,\n                                        columnNumber: 17\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\CODE\\\\soundbound-client\\\\components\\\\layout\\\\Header\\\\ConnectButton.tsx\",\n                                    lineNumber: 86,\n                                    columnNumber: 15\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"D:\\\\CODE\\\\soundbound-client\\\\components\\\\layout\\\\Header\\\\ConnectButton.tsx\",\n                            lineNumber: 69,\n                            columnNumber: 13\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"D:\\\\CODE\\\\soundbound-client\\\\components\\\\layout\\\\Header\\\\ConnectButton.tsx\",\n                    lineNumber: 57,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"D:\\\\CODE\\\\soundbound-client\\\\components\\\\layout\\\\Header\\\\ConnectButton.tsx\",\n            lineNumber: 44,\n            columnNumber: 7\n        }, this);\n    }\n}\n_s(ConnectButton, \"BC0VDK5OODYpYvns61nIdScSqu4=\", false, function() {\n    return [\n        next_auth_react__WEBPACK_IMPORTED_MODULE_6__.useSession,\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = ConnectButton;\nvar _c;\n$RefreshReg$(_c, \"ConnectButton\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2xheW91dC9IZWFkZXIvQ29ubmVjdEJ1dHRvbi50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQThCO0FBQ1M7QUFDVTtBQUNqQjtBQUM0QjtBQUNQO0FBRXRDLFNBQVNPOztJQUN0QixNQUFNLEVBQUVDLE1BQU1DLE9BQU8sRUFBRUMsTUFBTSxFQUFFLEdBQUdMLDJEQUFVQTtJQUU1QyxNQUFNLENBQUNNLFNBQVNDLFdBQVcsR0FBR1QsK0NBQVFBLENBQ3BDVTtJQUVGLE1BQU0sQ0FBQ0MsU0FBU0MsV0FBVyxHQUFHWiwrQ0FBUUEsQ0FBVTtJQUVoRCxNQUFNYSxTQUFTZixzREFBU0E7SUFFeEIsTUFBTWdCLDBCQUEwQixDQUFDQztRQUMvQkYsT0FBT0csSUFBSSxDQUFDRDtJQUNkO0lBRUEsTUFBTUUsaUNBQWlDO1FBQ3JDLE1BQU1oQiwwRUFBZUEsR0FDbEJpQixJQUFJLENBQUMsQ0FBQ0MsUUFBVVYsV0FBV1UsUUFDM0JDLEtBQUssQ0FBQyxDQUFDQyxNQUFRQyxRQUFRQyxHQUFHLENBQUNGO0lBQ2hDO0lBRUEsTUFBTUcsaUJBQWlCO1FBQ3JCWixXQUFXLENBQUNEO1FBQ1pXLFFBQVFDLEdBQUcsQ0FBQztJQUNkO0lBRUEsSUFBSWhCLFdBQVcsbUJBQ2IscUJBQ0UsOERBQUNrQjtRQUNDQyxXQUFVO1FBQ1ZDLFNBQVMsSUFBTWIsd0JBQXdCO2tCQUN4Qzs7Ozs7O1NBSUEsSUFBSVAsV0FBVyxpQkFBaUI7WUFvQ3RDRCxlQUFBQSxVQU9BQSxnQkFBQUE7UUExQ0cscUJBQ0UsOERBQUNzQjtZQUFJRixXQUFVOztnQkFDWmxCLHdCQUNDLDhEQUFDaUI7b0JBQU9DLFdBQVU7OEJBQ2ZsQjs7Ozs7eUNBR0gsOERBQUNpQjtvQkFDQ0MsV0FBVTtvQkFDVkMsU0FBU1Y7OEJBQ1Y7Ozs7Ozs4QkFJSCw4REFBQ1c7b0JBQUlGLFdBQVU7O3NDQUNiLDhEQUFDRDs0QkFBT0MsV0FBVTtzQ0FDaEIsNEVBQUM3QixtREFBS0E7Z0NBQ0o2QixXQUFVO2dDQUNWRyxLQUFLOUIsbUVBQU1BO2dDQUNYK0IsSUFBSTtnQ0FDSkMsT0FBTTtnQ0FDTkMsS0FBSTtnQ0FDSkwsU0FBU0g7Ozs7Ozs7Ozs7O3dCQUdaYix5QkFDQyw4REFBQ2lCOzRCQUFJRixXQUFVOzs4Q0FDYiw4REFBQ087b0NBQUVQLFdBQVU7Ozs7Ozs4Q0FFYiw4REFBQ1E7b0NBQ0NDLE1BQUs7b0NBQ0xULFdBQVU7b0NBQ1ZVLE1BQUs7b0NBQ0xDLFVBQVUsQ0FBQzs7eUNBRTFCL0IsV0FBQUEscUJBQUFBLGdDQUFBQSxnQkFBQUEsU0FBU2dDLElBQUksY0FBYmhDLG9DQUFBQSxjQUFlaUMsSUFBSTt3Q0FBQzs7Ozs7Ozs4Q0FDUCw4REFBQ0w7b0NBQ0NDLE1BQUs7b0NBQ0xULFdBQVU7b0NBQ1ZVLE1BQUs7b0NBQ0xDLFVBQVUsQ0FBQzs7eUNBRTFCL0IsWUFBQUEscUJBQUFBLGlDQUFBQSxpQkFBQUEsVUFBU2dDLElBQUksY0FBYmhDLHFDQUFBQSxlQUFla0MsS0FBSzt3Q0FBQzs7Ozs7Ozs4Q0FDUiw4REFBQ1o7b0NBQUlGLFdBQVU7OENBQ2IsNEVBQUNEO3dDQUNDRSxTQUFTLElBQU14Qix3REFBT0E7d0NBQ3RCdUIsV0FBVTtrREFDWDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFTZjtBQUNGO0dBNUZ3QnRCOztRQUNZRix1REFBVUE7UUFPN0JKLGtEQUFTQTs7O0tBUkZNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvbGF5b3V0L0hlYWRlci9Db25uZWN0QnV0dG9uLnRzeD9hYTRmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJ1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcclxuaW1wb3J0IGF2YXRhciBmcm9tICdAL2Fzc2V0cy9pbWFnZXMvZG93bmxvYWQuanBnJ1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBjb25uZWN0TWV0YW1hc2sgfSBmcm9tICdAL2NvbnRyYWN0L2Nvbm5lY3RNZXRhbWFzaydcclxuaW1wb3J0IHsgdXNlU2Vzc2lvbiwgc2lnbk91dCB9IGZyb20gJ25leHQtYXV0aC9yZWFjdCdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENvbm5lY3RCdXR0b24oKSB7XHJcbiAgY29uc3QgeyBkYXRhOiBzZXNzaW9uLCBzdGF0dXMgfSA9IHVzZVNlc3Npb24oKVxyXG5cclxuICBjb25zdCBbYWRkcmVzcywgc2V0QWRkcmVzc10gPSB1c2VTdGF0ZTxzdHJpbmcgfCB1bmRlZmluZWQ+KFxyXG4gICAgdW5kZWZpbmVkXHJcbiAgKVxyXG4gIGNvbnN0IFtzaG93QXZ0LCBzZXRTaG93QXZ0XSA9IHVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKVxyXG5cclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxyXG5cclxuICBjb25zdCBoYW5kbGVTaWduSW5CdXR0b25DbGljayA9IChwYXRoOiBzdHJpbmcpID0+IHtcclxuICAgIHJvdXRlci5wdXNoKHBhdGgpXHJcbiAgfVxyXG5cclxuICBjb25zdCBoYW5kbGVDb25uZWN0V2FsbGV0QnV0dG9uQ2xpY2sgPSBhc3luYyAoKSA9PiB7XHJcbiAgICBhd2FpdCBjb25uZWN0TWV0YW1hc2soKVxyXG4gICAgICAudGhlbigodmFsdWUpID0+IHNldEFkZHJlc3ModmFsdWUpKVxyXG4gICAgICAuY2F0Y2goKGVycikgPT4gY29uc29sZS5sb2coZXJyKSlcclxuICB9XHJcblxyXG4gIGNvbnN0IGhhbmRsZUF2dENsaWNrID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgc2V0U2hvd0F2dCghc2hvd0F2dClcclxuICAgIGNvbnNvbGUubG9nKCdjbGlja2VkJylcclxuICB9XHJcblxyXG4gIGlmIChzdGF0dXMgPT09ICd1bmF1dGhlbnRpY2F0ZWQnKVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGJ1dHRvblxyXG4gICAgICAgIGNsYXNzTmFtZT1cIiByb3VuZGVkLWZ1bGwgcHgtNiBweS0xIHRleHQtc2xhdGUtNDAwIG91dGxpbmUgb3V0bGluZS0xIG91dGxpbmUtc2xhdGUtNDAwIGhvdmVyOmJnLXNsYXRlLTkwMCBob3Zlcjp0ZXh0LXdoaXRlXCJcclxuICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVTaWduSW5CdXR0b25DbGljaygnL2xvZ2luJyl9XHJcbiAgICAgID5cclxuICAgICAgICBTaWduIGluXHJcbiAgICAgIDwvYnV0dG9uPlxyXG4gICAgKVxyXG4gIGVsc2UgaWYgKHN0YXR1cyA9PT0gJ2F1dGhlbnRpY2F0ZWQnKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIHNwYWNlLXgtNFwiPlxyXG4gICAgICAgIHthZGRyZXNzID8gKFxyXG4gICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJ3LTQwIHRydW5jYXRlIHJvdW5kZWQtZnVsbCBweC02IHB5LTEgdGV4dC1zbGF0ZS00MDAgb3V0bGluZSBvdXRsaW5lLTEgb3V0bGluZS1zbGF0ZS00MDAgaG92ZXI6Ymctc2xhdGUtOTAwIGhvdmVyOnRleHQtd2hpdGVcIj5cclxuICAgICAgICAgICAge2FkZHJlc3N9XHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICApIDogKFxyXG4gICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJ3LTQwIHRydW5jYXRlIHJvdW5kZWQtZnVsbCBweC02IHB5LTEgdGV4dC1zbGF0ZS00MDAgb3V0bGluZSBvdXRsaW5lLTEgb3V0bGluZS1zbGF0ZS00MDAgaG92ZXI6Ymctc2xhdGUtOTAwIGhvdmVyOnRleHQtd2hpdGVcIlxyXG4gICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVDb25uZWN0V2FsbGV0QnV0dG9uQ2xpY2t9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIENvbm5lY3QgV2FsbGV0XHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICApfVxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmVcIj5cclxuICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiaW5saW5lLWZsZXggaC04IHctOCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgcm91bmRlZC1mdWxsIGJnLWdyYXktMjAwIHRleHQtZ3JheS04MDBcIj5cclxuICAgICAgICAgICAgPEltYWdlXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaC1mdWxsIHctZnVsbCByb3VuZGVkLWZ1bGwgb2JqZWN0LWNvdmVyXCJcclxuICAgICAgICAgICAgICBzcmM9e2F2YXRhcn1cclxuICAgICAgICAgICAgICBmaWxsXHJcbiAgICAgICAgICAgICAgc2l6ZXM9XCJsYXJnZVwiXHJcbiAgICAgICAgICAgICAgYWx0PVwiWW91ciBhdmF0YXJcIlxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZUF2dENsaWNrfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICB7c2hvd0F2dCAmJiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgcmlnaHQtMCB6LTEwIG10LTIgaC1hdXRvIHctODAgcm91bmRlZC14bCBiZy13aGl0ZSBwLTIgc2hhZG93LXhsIG91dGxpbmUgb3V0bGluZS0xIG91dGxpbmUtc2xhdGUtMzAwXCI+XHJcbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1ibGFja1wiPjwvcD5cclxuICAgIFxyXG4gICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICBocmVmPVwiI1wiXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJibG9jayBweC00IHB5LTIgdGV4dC1zbSB0ZXh0LWdyYXktNzAwXCJcclxuICAgICAgICAgICAgICAgIHJvbGU9XCJtZW51aXRlbVwiXHJcbiAgICAgICAgICAgICAgICB0YWJJbmRleD17LTF9XHJcbiAgICAgICAgICAgICAgPlxyXG57c2Vzc2lvbj8udXNlcj8ubmFtZX0gICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgaHJlZj1cIiNcIlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmxvY2sgcHgtNCBweS0yIHRleHQtc20gdGV4dC1ncmF5LTcwMFwiXHJcbiAgICAgICAgICAgICAgICByb2xlPVwibWVudWl0ZW1cIlxyXG4gICAgICAgICAgICAgICAgdGFiSW5kZXg9ey0xfVxyXG4gICAgICAgICAgICAgID5cclxue3Nlc3Npb24/LnVzZXI/LmVtYWlsfSAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCB3LWZ1bGwganVzdGlmeS1lbmRcIj5cclxuICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2lnbk91dCgpfVxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJyb3VuZGVkLWZ1bGwgYmctcmVkLTcwMCBweC00IHB5LTIgaG92ZXI6YmctcmVkLTMwMFwiXHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIFNpZ24gT3V0XHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIClcclxuICB9XHJcbn1cclxuIl0sIm5hbWVzIjpbIkltYWdlIiwidXNlUm91dGVyIiwiYXZhdGFyIiwidXNlU3RhdGUiLCJjb25uZWN0TWV0YW1hc2siLCJ1c2VTZXNzaW9uIiwic2lnbk91dCIsIkNvbm5lY3RCdXR0b24iLCJkYXRhIiwic2Vzc2lvbiIsInN0YXR1cyIsImFkZHJlc3MiLCJzZXRBZGRyZXNzIiwidW5kZWZpbmVkIiwic2hvd0F2dCIsInNldFNob3dBdnQiLCJyb3V0ZXIiLCJoYW5kbGVTaWduSW5CdXR0b25DbGljayIsInBhdGgiLCJwdXNoIiwiaGFuZGxlQ29ubmVjdFdhbGxldEJ1dHRvbkNsaWNrIiwidGhlbiIsInZhbHVlIiwiY2F0Y2giLCJlcnIiLCJjb25zb2xlIiwibG9nIiwiaGFuZGxlQXZ0Q2xpY2siLCJidXR0b24iLCJjbGFzc05hbWUiLCJvbkNsaWNrIiwiZGl2Iiwic3JjIiwiZmlsbCIsInNpemVzIiwiYWx0IiwicCIsImEiLCJocmVmIiwicm9sZSIsInRhYkluZGV4IiwidXNlciIsIm5hbWUiLCJlbWFpbCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/layout/Header/ConnectButton.tsx\n"));

/***/ })

});