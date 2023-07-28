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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ConnectButton; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _assets_images_download_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/assets/images/download.jpg */ \"./assets/images/download.jpg\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _contract_connectMetamask__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/contract/connectMetamask */ \"./contract/connectMetamask.ts\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next-auth/react */ \"./node_modules/next-auth/react/index.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_6__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nfunction ConnectButton() {\n    _s();\n    const { data: session, status } = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_6__.useSession)();\n    const [address, setAddress] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(undefined);\n    const [showAvt, setShowAvt] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false);\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const handleSignInButtonClick = (path)=>{\n        router.push(path);\n    };\n    const handleConnectWalletButtonClick = async ()=>{\n        await (0,_contract_connectMetamask__WEBPACK_IMPORTED_MODULE_5__.connectMetamask)().then((value)=>setAddress(value)).catch((err)=>console.log(err));\n    };\n    const handleAvtClick = async ()=>{\n        setShowAvt(!showAvt);\n        console.log(\"clicked\");\n    };\n    if (status === \"unauthenticated\") return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n        className: \" rounded-full px-6 py-1 text-slate-400 outline outline-1 outline-slate-400 hover:bg-slate-900 hover:text-white\",\n        onClick: ()=>handleSignInButtonClick(\"/login\"),\n        children: \"Sign in\"\n    }, void 0, false, {\n        fileName: \"D:\\\\CODE\\\\soundbound-client\\\\components\\\\layout\\\\Header\\\\ConnectButton.tsx\",\n        lineNumber: 35,\n        columnNumber: 7\n    }, this);\n    else if (status === \"authenticated\") {\n        var _session_user, _session, _session_user1, _session1;\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"flex items-center space-x-4\",\n            children: [\n                address ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    className: \"w-40 truncate rounded-full px-6 py-1 text-slate-400 outline outline-1 outline-slate-400 hover:bg-slate-900 hover:text-white\",\n                    children: address\n                }, void 0, false, {\n                    fileName: \"D:\\\\CODE\\\\soundbound-client\\\\components\\\\layout\\\\Header\\\\ConnectButton.tsx\",\n                    lineNumber: 46,\n                    columnNumber: 11\n                }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    className: \"w-40 truncate rounded-full px-6 py-1 text-slate-400 outline outline-1 outline-slate-400 hover:bg-slate-900 hover:text-white\",\n                    onClick: handleConnectWalletButtonClick,\n                    children: \"Connect Wallet\"\n                }, void 0, false, {\n                    fileName: \"D:\\\\CODE\\\\soundbound-client\\\\components\\\\layout\\\\Header\\\\ConnectButton.tsx\",\n                    lineNumber: 50,\n                    columnNumber: 11\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"relative\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            className: \"inline-flex h-8 w-8 items-center justify-center rounded-full bg-gray-200 text-gray-800\",\n                            id: \"menu-button\",\n                            \"aria-expanded\": \"true\",\n                            \"aria-haspopup\": \"true\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                className: \"h-full w-full rounded-full object-cover\",\n                                src: _assets_images_download_jpg__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n                                fill: true,\n                                sizes: \"large\",\n                                alt: \"Your avatar\",\n                                onClick: handleAvtClick\n                            }, void 0, false, {\n                                fileName: \"D:\\\\CODE\\\\soundbound-client\\\\components\\\\layout\\\\Header\\\\ConnectButton.tsx\",\n                                lineNumber: 64,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"D:\\\\CODE\\\\soundbound-client\\\\components\\\\layout\\\\Header\\\\ConnectButton.tsx\",\n                            lineNumber: 58,\n                            columnNumber: 11\n                        }, this),\n                        showAvt && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none\",\n                            role: \"menu\",\n                            \"aria-orientation\": \"vertical\",\n                            \"aria-labelledby\": \"menu-button\",\n                            tabIndex: -1,\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                    href: \"#\",\n                                    className: \"block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50\",\n                                    role: \"menuitem\",\n                                    tabIndex: -1,\n                                    children: (_session = session) === null || _session === void 0 ? void 0 : (_session_user = _session.user) === null || _session_user === void 0 ? void 0 : _session_user.name\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\CODE\\\\soundbound-client\\\\components\\\\layout\\\\Header\\\\ConnectButton.tsx\",\n                                    lineNumber: 81,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                    href: \"#\",\n                                    className: \"block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50\",\n                                    role: \"menuitem\",\n                                    tabIndex: -1,\n                                    children: (_session1 = session) === null || _session1 === void 0 ? void 0 : (_session_user1 = _session1.user) === null || _session_user1 === void 0 ? void 0 : _session_user1.email\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\CODE\\\\soundbound-client\\\\components\\\\layout\\\\Header\\\\ConnectButton.tsx\",\n                                    lineNumber: 89,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    onClick: ()=>(0,next_auth_react__WEBPACK_IMPORTED_MODULE_6__.signOut)(),\n                                    className: \"block w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-red\",\n                                    role: \"menuitem\",\n                                    tabIndex: -1,\n                                    children: \"Sign out\"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\CODE\\\\soundbound-client\\\\components\\\\layout\\\\Header\\\\ConnectButton.tsx\",\n                                    lineNumber: 98,\n                                    columnNumber: 15\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"D:\\\\CODE\\\\soundbound-client\\\\components\\\\layout\\\\Header\\\\ConnectButton.tsx\",\n                            lineNumber: 74,\n                            columnNumber: 13\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"D:\\\\CODE\\\\soundbound-client\\\\components\\\\layout\\\\Header\\\\ConnectButton.tsx\",\n                    lineNumber: 57,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"D:\\\\CODE\\\\soundbound-client\\\\components\\\\layout\\\\Header\\\\ConnectButton.tsx\",\n            lineNumber: 44,\n            columnNumber: 7\n        }, this);\n    }\n}\n_s(ConnectButton, \"BC0VDK5OODYpYvns61nIdScSqu4=\", false, function() {\n    return [\n        next_auth_react__WEBPACK_IMPORTED_MODULE_6__.useSession,\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = ConnectButton;\nvar _c;\n$RefreshReg$(_c, \"ConnectButton\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2xheW91dC9IZWFkZXIvQ29ubmVjdEJ1dHRvbi50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQThCO0FBQ1M7QUFDVTtBQUNqQjtBQUM0QjtBQUNQO0FBRXRDLFNBQVNPOztJQUN0QixNQUFNLEVBQUVDLE1BQU1DLE9BQU8sRUFBRUMsTUFBTSxFQUFFLEdBQUdMLDJEQUFVQTtJQUU1QyxNQUFNLENBQUNNLFNBQVNDLFdBQVcsR0FBR1QsK0NBQVFBLENBQ3BDVTtJQUVGLE1BQU0sQ0FBQ0MsU0FBU0MsV0FBVyxHQUFHWiwrQ0FBUUEsQ0FBVTtJQUVoRCxNQUFNYSxTQUFTZixzREFBU0E7SUFFeEIsTUFBTWdCLDBCQUEwQixDQUFDQztRQUMvQkYsT0FBT0csSUFBSSxDQUFDRDtJQUNkO0lBRUEsTUFBTUUsaUNBQWlDO1FBQ3JDLE1BQU1oQiwwRUFBZUEsR0FDbEJpQixJQUFJLENBQUMsQ0FBQ0MsUUFBVVYsV0FBV1UsUUFDM0JDLEtBQUssQ0FBQyxDQUFDQyxNQUFRQyxRQUFRQyxHQUFHLENBQUNGO0lBQ2hDO0lBRUEsTUFBTUcsaUJBQWlCO1FBQ3JCWixXQUFXLENBQUNEO1FBQ1pXLFFBQVFDLEdBQUcsQ0FBQztJQUNkO0lBRUEsSUFBSWhCLFdBQVcsbUJBQ2IscUJBQ0UsOERBQUNrQjtRQUNDQyxXQUFVO1FBQ1ZDLFNBQVMsSUFBTWIsd0JBQXdCO2tCQUN4Qzs7Ozs7O1NBSUEsSUFBSVAsV0FBVyxpQkFBaUI7WUE2Q3RCRCxlQUFBQSxVQVFBQSxnQkFBQUE7UUFwRGIscUJBQ0UsOERBQUNzQjtZQUFJRixXQUFVOztnQkFDWmxCLHdCQUNDLDhEQUFDaUI7b0JBQU9DLFdBQVU7OEJBQ2ZsQjs7Ozs7eUNBR0gsOERBQUNpQjtvQkFDQ0MsV0FBVTtvQkFDVkMsU0FBU1Y7OEJBQ1Y7Ozs7Ozs4QkFJSCw4REFBQ1c7b0JBQUlGLFdBQVU7O3NDQUNiLDhEQUFDRDs0QkFDQ0MsV0FBVTs0QkFDVkcsSUFBRzs0QkFDSEMsaUJBQWM7NEJBQ2RDLGlCQUFjO3NDQUVkLDRFQUFDbEMsbURBQUtBO2dDQUNKNkIsV0FBVTtnQ0FDVk0sS0FBS2pDLG1FQUFNQTtnQ0FDWGtDLElBQUk7Z0NBQ0pDLE9BQU07Z0NBQ05DLEtBQUk7Z0NBQ0pSLFNBQVNIOzs7Ozs7Ozs7Ozt3QkFHWmIseUJBQ0MsOERBQUNpQjs0QkFDQ0YsV0FBVTs0QkFDVlUsTUFBSzs0QkFDTEMsb0JBQWlCOzRCQUNqQkMsbUJBQWdCOzRCQUNoQkMsVUFBVSxDQUFDOzs4Q0FFWCw4REFBQ0M7b0NBQ0NDLE1BQUs7b0NBQ0xmLFdBQVU7b0NBQ1ZVLE1BQUs7b0NBQ0xHLFVBQVUsQ0FBQzsrQ0FFVmpDLFdBQUFBLHFCQUFBQSxnQ0FBQUEsZ0JBQUFBLFNBQVNvQyxJQUFJLGNBQWJwQyxvQ0FBQUEsY0FBZXFDLElBQUk7Ozs7Ozs4Q0FFdEIsOERBQUNIO29DQUNDQyxNQUFLO29DQUNMZixXQUFVO29DQUNWVSxNQUFLO29DQUNMRyxVQUFVLENBQUM7K0NBRVZqQyxZQUFBQSxxQkFBQUEsaUNBQUFBLGlCQUFBQSxVQUFTb0MsSUFBSSxjQUFicEMscUNBQUFBLGVBQWVzQyxLQUFLOzs7Ozs7OENBR3ZCLDhEQUFDbkI7b0NBQ0NFLFNBQVMsSUFBTXhCLHdEQUFPQTtvQ0FDdEJ1QixXQUFVO29DQUNWVSxNQUFLO29DQUNMRyxVQUFVLENBQUM7OENBQ1o7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQVFiO0FBQ0Y7R0F4R3dCbkM7O1FBQ1lGLHVEQUFVQTtRQU83Qkosa0RBQVNBOzs7S0FSRk0iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9sYXlvdXQvSGVhZGVyL0Nvbm5lY3RCdXR0b24udHN4P2FhNGYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnXHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xyXG5pbXBvcnQgYXZhdGFyIGZyb20gJ0AvYXNzZXRzL2ltYWdlcy9kb3dubG9hZC5qcGcnXHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IGNvbm5lY3RNZXRhbWFzayB9IGZyb20gJ0AvY29udHJhY3QvY29ubmVjdE1ldGFtYXNrJ1xyXG5pbXBvcnQgeyB1c2VTZXNzaW9uLCBzaWduT3V0IH0gZnJvbSAnbmV4dC1hdXRoL3JlYWN0J1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ29ubmVjdEJ1dHRvbigpIHtcclxuICBjb25zdCB7IGRhdGE6IHNlc3Npb24sIHN0YXR1cyB9ID0gdXNlU2Vzc2lvbigpXHJcblxyXG4gIGNvbnN0IFthZGRyZXNzLCBzZXRBZGRyZXNzXSA9IHVzZVN0YXRlPHN0cmluZyB8IHVuZGVmaW5lZD4oXHJcbiAgICB1bmRlZmluZWRcclxuICApXHJcbiAgY29uc3QgW3Nob3dBdnQsIHNldFNob3dBdnRdID0gdXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpXHJcblxyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXHJcblxyXG4gIGNvbnN0IGhhbmRsZVNpZ25JbkJ1dHRvbkNsaWNrID0gKHBhdGg6IHN0cmluZykgPT4ge1xyXG4gICAgcm91dGVyLnB1c2gocGF0aClcclxuICB9XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNvbm5lY3RXYWxsZXRCdXR0b25DbGljayA9IGFzeW5jICgpID0+IHtcclxuICAgIGF3YWl0IGNvbm5lY3RNZXRhbWFzaygpXHJcbiAgICAgIC50aGVuKCh2YWx1ZSkgPT4gc2V0QWRkcmVzcyh2YWx1ZSkpXHJcbiAgICAgIC5jYXRjaCgoZXJyKSA9PiBjb25zb2xlLmxvZyhlcnIpKVxyXG4gIH1cclxuXHJcbiAgY29uc3QgaGFuZGxlQXZ0Q2xpY2sgPSBhc3luYyAoKSA9PiB7XHJcbiAgICBzZXRTaG93QXZ0KCFzaG93QXZ0KVxyXG4gICAgY29uc29sZS5sb2coJ2NsaWNrZWQnKVxyXG4gIH1cclxuXHJcbiAgaWYgKHN0YXR1cyA9PT0gJ3VuYXV0aGVudGljYXRlZCcpXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8YnV0dG9uXHJcbiAgICAgICAgY2xhc3NOYW1lPVwiIHJvdW5kZWQtZnVsbCBweC02IHB5LTEgdGV4dC1zbGF0ZS00MDAgb3V0bGluZSBvdXRsaW5lLTEgb3V0bGluZS1zbGF0ZS00MDAgaG92ZXI6Ymctc2xhdGUtOTAwIGhvdmVyOnRleHQtd2hpdGVcIlxyXG4gICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZVNpZ25JbkJ1dHRvbkNsaWNrKCcvbG9naW4nKX1cclxuICAgICAgPlxyXG4gICAgICAgIFNpZ24gaW5cclxuICAgICAgPC9idXR0b24+XHJcbiAgICApXHJcbiAgZWxzZSBpZiAoc3RhdHVzID09PSAnYXV0aGVudGljYXRlZCcpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgc3BhY2UteC00XCI+XHJcbiAgICAgICAge2FkZHJlc3MgPyAoXHJcbiAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInctNDAgdHJ1bmNhdGUgcm91bmRlZC1mdWxsIHB4LTYgcHktMSB0ZXh0LXNsYXRlLTQwMCBvdXRsaW5lIG91dGxpbmUtMSBvdXRsaW5lLXNsYXRlLTQwMCBob3ZlcjpiZy1zbGF0ZS05MDAgaG92ZXI6dGV4dC13aGl0ZVwiPlxyXG4gICAgICAgICAgICB7YWRkcmVzc31cclxuICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICkgOiAoXHJcbiAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInctNDAgdHJ1bmNhdGUgcm91bmRlZC1mdWxsIHB4LTYgcHktMSB0ZXh0LXNsYXRlLTQwMCBvdXRsaW5lIG91dGxpbmUtMSBvdXRsaW5lLXNsYXRlLTQwMCBob3ZlcjpiZy1zbGF0ZS05MDAgaG92ZXI6dGV4dC13aGl0ZVwiXHJcbiAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZUNvbm5lY3RXYWxsZXRCdXR0b25DbGlja31cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgQ29ubmVjdCBXYWxsZXRcclxuICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICl9XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZVwiPlxyXG4gICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJpbmxpbmUtZmxleCBoLTggdy04IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciByb3VuZGVkLWZ1bGwgYmctZ3JheS0yMDAgdGV4dC1ncmF5LTgwMFwiXHJcbiAgICAgICAgICAgIGlkPVwibWVudS1idXR0b25cIlxyXG4gICAgICAgICAgICBhcmlhLWV4cGFuZGVkPVwidHJ1ZVwiXHJcbiAgICAgICAgICAgIGFyaWEtaGFzcG9wdXA9XCJ0cnVlXCJcclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPEltYWdlXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaC1mdWxsIHctZnVsbCByb3VuZGVkLWZ1bGwgb2JqZWN0LWNvdmVyXCJcclxuICAgICAgICAgICAgICBzcmM9e2F2YXRhcn1cclxuICAgICAgICAgICAgICBmaWxsXHJcbiAgICAgICAgICAgICAgc2l6ZXM9XCJsYXJnZVwiXHJcbiAgICAgICAgICAgICAgYWx0PVwiWW91ciBhdmF0YXJcIlxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZUF2dENsaWNrfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICB7c2hvd0F2dCAmJiAoXHJcbiAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJhYnNvbHV0ZSByaWdodC0wIHotMTAgbXQtMiB3LTU2IG9yaWdpbi10b3AtcmlnaHQgcm91bmRlZC1tZCBiZy13aGl0ZSBzaGFkb3ctbGcgcmluZy0xIHJpbmctYmxhY2sgcmluZy1vcGFjaXR5LTUgZm9jdXM6b3V0bGluZS1ub25lXCJcclxuICAgICAgICAgICAgICByb2xlPVwibWVudVwiXHJcbiAgICAgICAgICAgICAgYXJpYS1vcmllbnRhdGlvbj1cInZlcnRpY2FsXCJcclxuICAgICAgICAgICAgICBhcmlhLWxhYmVsbGVkYnk9XCJtZW51LWJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgdGFiSW5kZXg9ey0xfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgIGhyZWY9XCIjXCJcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJsb2NrIHB4LTQgcHktMiB0ZXh0LXNtIHRleHQtZ3JheS03MDAgaG92ZXI6YmctZ3JheS01MFwiXHJcbiAgICAgICAgICAgICAgICByb2xlPVwibWVudWl0ZW1cIlxyXG4gICAgICAgICAgICAgICAgdGFiSW5kZXg9ey0xfVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIHtzZXNzaW9uPy51c2VyPy5uYW1lfVxyXG4gICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgaHJlZj1cIiNcIlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmxvY2sgcHgtNCBweS0yIHRleHQtc20gdGV4dC1ncmF5LTcwMCBob3ZlcjpiZy1ncmF5LTUwXCJcclxuICAgICAgICAgICAgICAgIHJvbGU9XCJtZW51aXRlbVwiXHJcbiAgICAgICAgICAgICAgICB0YWJJbmRleD17LTF9XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAge3Nlc3Npb24/LnVzZXI/LmVtYWlsfVxyXG4gICAgICAgICAgICAgIDwvYT5cclxuXHJcbiAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2lnbk91dCgpfVxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmxvY2sgdy1mdWxsIHB4LTQgcHktMiB0ZXh0LWxlZnQgdGV4dC1zbSB0ZXh0LWdyYXktNzAwIGhvdmVyOmJnLXJlZFwiXHJcbiAgICAgICAgICAgICAgICByb2xlPVwibWVudWl0ZW1cIlxyXG4gICAgICAgICAgICAgICAgdGFiSW5kZXg9ey0xfVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIFNpZ24gb3V0XHJcbiAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgKX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICApXHJcbiAgfVxyXG59XHJcbiJdLCJuYW1lcyI6WyJJbWFnZSIsInVzZVJvdXRlciIsImF2YXRhciIsInVzZVN0YXRlIiwiY29ubmVjdE1ldGFtYXNrIiwidXNlU2Vzc2lvbiIsInNpZ25PdXQiLCJDb25uZWN0QnV0dG9uIiwiZGF0YSIsInNlc3Npb24iLCJzdGF0dXMiLCJhZGRyZXNzIiwic2V0QWRkcmVzcyIsInVuZGVmaW5lZCIsInNob3dBdnQiLCJzZXRTaG93QXZ0Iiwicm91dGVyIiwiaGFuZGxlU2lnbkluQnV0dG9uQ2xpY2siLCJwYXRoIiwicHVzaCIsImhhbmRsZUNvbm5lY3RXYWxsZXRCdXR0b25DbGljayIsInRoZW4iLCJ2YWx1ZSIsImNhdGNoIiwiZXJyIiwiY29uc29sZSIsImxvZyIsImhhbmRsZUF2dENsaWNrIiwiYnV0dG9uIiwiY2xhc3NOYW1lIiwib25DbGljayIsImRpdiIsImlkIiwiYXJpYS1leHBhbmRlZCIsImFyaWEtaGFzcG9wdXAiLCJzcmMiLCJmaWxsIiwic2l6ZXMiLCJhbHQiLCJyb2xlIiwiYXJpYS1vcmllbnRhdGlvbiIsImFyaWEtbGFiZWxsZWRieSIsInRhYkluZGV4IiwiYSIsImhyZWYiLCJ1c2VyIiwibmFtZSIsImVtYWlsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/layout/Header/ConnectButton.tsx\n"));

/***/ })

});