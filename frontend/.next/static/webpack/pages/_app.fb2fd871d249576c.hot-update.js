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

/***/ "./components/layout/Header/ConnectButton/ConnectButton.tsx":
/*!******************************************************************!*\
  !*** ./components/layout/Header/ConnectButton/ConnectButton.tsx ***!
  \******************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ConnectButton; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _assets_images_download_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/assets/images/download.jpg */ \"./assets/images/download.jpg\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _contract_connectMetamask__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/contract/connectMetamask */ \"./contract/connectMetamask.ts\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next-auth/react */ \"./node_modules/next-auth/react/index.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_6__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nfunction ConnectButton() {\n    _s();\n    const { status } = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_6__.useSession)();\n    const [address, setAddress] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(undefined);\n    const [showAvt, setShowAvt] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false);\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const handleSignInButtonClick = (path)=>{\n        router.push(path);\n    };\n    const handleConnectWalletButtonClick = async ()=>{\n        await (0,_contract_connectMetamask__WEBPACK_IMPORTED_MODULE_5__.connectMetamask)().then((value)=>setAddress(value)).catch((err)=>console.log(err));\n    };\n    const handleAvtClick = async ()=>{\n        setShowAvt(!showAvt);\n    };\n    if (status === \"unauthenticated\") return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n        className: \" rounded-full px-6 py-1 text-slate-400 outline outline-1 outline-slate-400 hover:bg-slate-900 hover:text-white\",\n        onClick: ()=>handleSignInButtonClick(\"/login\"),\n        children: \"Sign in\"\n    }, void 0, false, {\n        fileName: \"D:\\\\CODE\\\\soundbound-client\\\\components\\\\layout\\\\Header\\\\ConnectButton\\\\ConnectButton.tsx\",\n        lineNumber: 34,\n        columnNumber: 7\n    }, this);\n    else if (status === \"authenticated\") {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"flex items-center space-x-4\",\n            children: [\n                address ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    className: \"w-40 truncate rounded-full px-6 py-1 text-slate-400 outline outline-1 outline-slate-400 hover:bg-slate-900 hover:text-white\",\n                    children: address\n                }, void 0, false, {\n                    fileName: \"D:\\\\CODE\\\\soundbound-client\\\\components\\\\layout\\\\Header\\\\ConnectButton\\\\ConnectButton.tsx\",\n                    lineNumber: 45,\n                    columnNumber: 11\n                }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    className: \"w-40 truncate rounded-full px-6 py-1 text-slate-400 outline outline-1 outline-slate-400 hover:bg-slate-900 hover:text-white\",\n                    onClick: handleConnectWalletButtonClick,\n                    children: \"Connect Wallet\"\n                }, void 0, false, {\n                    fileName: \"D:\\\\CODE\\\\soundbound-client\\\\components\\\\layout\\\\Header\\\\ConnectButton\\\\ConnectButton.tsx\",\n                    lineNumber: 49,\n                    columnNumber: 11\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"relative\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            className: \"inline-flex h-8 w-8 items-center justify-center rounded-full bg-gray-200 text-gray-800\",\n                            id: \"menu-button\",\n                            \"aria-expanded\": \"true\",\n                            \"aria-haspopup\": \"true\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                className: \"h-full w-full rounded-full object-cover\",\n                                src: _assets_images_download_jpg__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n                                fill: true,\n                                sizes: \"large\",\n                                alt: \"Your avatar\",\n                                onClick: handleAvtClick\n                            }, void 0, false, {\n                                fileName: \"D:\\\\CODE\\\\soundbound-client\\\\components\\\\layout\\\\Header\\\\ConnectButton\\\\ConnectButton.tsx\",\n                                lineNumber: 63,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"D:\\\\CODE\\\\soundbound-client\\\\components\\\\layout\\\\Header\\\\ConnectButton\\\\ConnectButton.tsx\",\n                            lineNumber: 57,\n                            columnNumber: 11\n                        }, this),\n                        showAvt && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"w-58 absolute right-0 z-10 mt-2 origin-top-right overflow-hidden rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5\",\n                            role: \"menu\",\n                            \"aria-orientation\": \"vertical\",\n                            \"aria-labelledby\": \"menu-button\",\n                            tabIndex: -1,\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                    href: \"#\",\n                                    className: \"block px-4 py-2 text-lg  text-gray-700 hover:bg-gray-50\",\n                                    role: \"menuitem\",\n                                    tabIndex: -1,\n                                    children: \"Profile\"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\CODE\\\\soundbound-client\\\\components\\\\layout\\\\Header\\\\ConnectButton\\\\ConnectButton.tsx\",\n                                    lineNumber: 80,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                    href: \"#\",\n                                    className: \"block px-4 py-2 text-lg text-gray-700 hover:bg-gray-50\",\n                                    role: \"menuitem\",\n                                    tabIndex: -1,\n                                    children: \"Setting\"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\CODE\\\\soundbound-client\\\\components\\\\layout\\\\Header\\\\ConnectButton\\\\ConnectButton.tsx\",\n                                    lineNumber: 88,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    onClick: ()=>(0,next_auth_react__WEBPACK_IMPORTED_MODULE_6__.signOut)(),\n                                    className: \"block w-full px-4 py-2 text-left text-lg  text-gray-700 hover:bg-red-400\",\n                                    role: \"menuitem\",\n                                    tabIndex: -1,\n                                    children: \"Sign out\"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\CODE\\\\soundbound-client\\\\components\\\\layout\\\\Header\\\\ConnectButton\\\\ConnectButton.tsx\",\n                                    lineNumber: 96,\n                                    columnNumber: 15\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"D:\\\\CODE\\\\soundbound-client\\\\components\\\\layout\\\\Header\\\\ConnectButton\\\\ConnectButton.tsx\",\n                            lineNumber: 73,\n                            columnNumber: 13\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"D:\\\\CODE\\\\soundbound-client\\\\components\\\\layout\\\\Header\\\\ConnectButton\\\\ConnectButton.tsx\",\n                    lineNumber: 56,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"D:\\\\CODE\\\\soundbound-client\\\\components\\\\layout\\\\Header\\\\ConnectButton\\\\ConnectButton.tsx\",\n            lineNumber: 43,\n            columnNumber: 7\n        }, this);\n    }\n}\n_s(ConnectButton, \"9JWVm44iQqpNk46CTOJgAKmrsaE=\", false, function() {\n    return [\n        next_auth_react__WEBPACK_IMPORTED_MODULE_6__.useSession,\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = ConnectButton;\nvar _c;\n$RefreshReg$(_c, \"ConnectButton\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2xheW91dC9IZWFkZXIvQ29ubmVjdEJ1dHRvbi9Db25uZWN0QnV0dG9uLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBOEI7QUFDUztBQUNVO0FBQ2pCO0FBQzRCO0FBQ1A7QUFFdEMsU0FBU087O0lBQ3RCLE1BQU0sRUFBRUMsTUFBTSxFQUFFLEdBQUdILDJEQUFVQTtJQUU3QixNQUFNLENBQUNJLFNBQVNDLFdBQVcsR0FBR1AsK0NBQVFBLENBQ3BDUTtJQUVGLE1BQU0sQ0FBQ0MsU0FBU0MsV0FBVyxHQUFHViwrQ0FBUUEsQ0FBVTtJQUVoRCxNQUFNVyxTQUFTYixzREFBU0E7SUFFeEIsTUFBTWMsMEJBQTBCLENBQUNDO1FBQy9CRixPQUFPRyxJQUFJLENBQUNEO0lBQ2Q7SUFFQSxNQUFNRSxpQ0FBaUM7UUFDckMsTUFBTWQsMEVBQWVBLEdBQ2xCZSxJQUFJLENBQUMsQ0FBQ0MsUUFBVVYsV0FBV1UsUUFDM0JDLEtBQUssQ0FBQyxDQUFDQyxNQUFRQyxRQUFRQyxHQUFHLENBQUNGO0lBQ2hDO0lBRUEsTUFBTUcsaUJBQWlCO1FBQ3JCWixXQUFXLENBQUNEO0lBQ2Q7SUFFQSxJQUFJSixXQUFXLG1CQUNiLHFCQUNFLDhEQUFDa0I7UUFDQ0MsV0FBVTtRQUNWQyxTQUFTLElBQU1iLHdCQUF3QjtrQkFDeEM7Ozs7OztTQUlBLElBQUlQLFdBQVcsaUJBQWlCO1FBQ25DLHFCQUNFLDhEQUFDcUI7WUFBSUYsV0FBVTs7Z0JBQ1psQix3QkFDQyw4REFBQ2lCO29CQUFPQyxXQUFVOzhCQUNmbEI7Ozs7O3lDQUdILDhEQUFDaUI7b0JBQ0NDLFdBQVU7b0JBQ1ZDLFNBQVNWOzhCQUNWOzs7Ozs7OEJBSUgsOERBQUNXO29CQUFJRixXQUFVOztzQ0FDYiw4REFBQ0Q7NEJBQ0NDLFdBQVU7NEJBQ1ZHLElBQUc7NEJBQ0hDLGlCQUFjOzRCQUNkQyxpQkFBYztzQ0FFZCw0RUFBQ2hDLG1EQUFLQTtnQ0FDSjJCLFdBQVU7Z0NBQ1ZNLEtBQUsvQixtRUFBTUE7Z0NBQ1hnQyxJQUFJO2dDQUNKQyxPQUFNO2dDQUNOQyxLQUFJO2dDQUNKUixTQUFTSDs7Ozs7Ozs7Ozs7d0JBR1piLHlCQUNDLDhEQUFDaUI7NEJBQ0NGLFdBQVU7NEJBQ1ZVLE1BQUs7NEJBQ0xDLG9CQUFpQjs0QkFDakJDLG1CQUFnQjs0QkFDaEJDLFVBQVUsQ0FBQzs7OENBRVgsOERBQUNDO29DQUNDQyxNQUFLO29DQUNMZixXQUFVO29DQUNWVSxNQUFLO29DQUNMRyxVQUFVLENBQUM7OENBQ1o7Ozs7Ozs4Q0FHRCw4REFBQ0M7b0NBQ0NDLE1BQUs7b0NBQ0xmLFdBQVU7b0NBQ1ZVLE1BQUs7b0NBQ0xHLFVBQVUsQ0FBQzs4Q0FDWjs7Ozs7OzhDQUdELDhEQUFDZDtvQ0FDQ0UsU0FBUyxJQUFNdEIsd0RBQU9BO29DQUN0QnFCLFdBQVU7b0NBQ1ZVLE1BQUs7b0NBQ0xHLFVBQVUsQ0FBQzs4Q0FDWjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBUWI7QUFDRjtHQXRHd0JqQzs7UUFDSEYsdURBQVVBO1FBT2RKLGtEQUFTQTs7O0tBUkZNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvbGF5b3V0L0hlYWRlci9Db25uZWN0QnV0dG9uL0Nvbm5lY3RCdXR0b24udHN4PzQyM2MiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnXHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xyXG5pbXBvcnQgYXZhdGFyIGZyb20gJ0AvYXNzZXRzL2ltYWdlcy9kb3dubG9hZC5qcGcnXHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IGNvbm5lY3RNZXRhbWFzayB9IGZyb20gJ0AvY29udHJhY3QvY29ubmVjdE1ldGFtYXNrJ1xyXG5pbXBvcnQgeyB1c2VTZXNzaW9uLCBzaWduT3V0IH0gZnJvbSAnbmV4dC1hdXRoL3JlYWN0J1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ29ubmVjdEJ1dHRvbigpIHtcclxuICBjb25zdCB7IHN0YXR1cyB9ID0gdXNlU2Vzc2lvbigpXHJcblxyXG4gIGNvbnN0IFthZGRyZXNzLCBzZXRBZGRyZXNzXSA9IHVzZVN0YXRlPHN0cmluZyB8IHVuZGVmaW5lZD4oXHJcbiAgICB1bmRlZmluZWRcclxuICApXHJcbiAgY29uc3QgW3Nob3dBdnQsIHNldFNob3dBdnRdID0gdXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpXHJcblxyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXHJcblxyXG4gIGNvbnN0IGhhbmRsZVNpZ25JbkJ1dHRvbkNsaWNrID0gKHBhdGg6IHN0cmluZykgPT4ge1xyXG4gICAgcm91dGVyLnB1c2gocGF0aClcclxuICB9XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNvbm5lY3RXYWxsZXRCdXR0b25DbGljayA9IGFzeW5jICgpID0+IHtcclxuICAgIGF3YWl0IGNvbm5lY3RNZXRhbWFzaygpXHJcbiAgICAgIC50aGVuKCh2YWx1ZSkgPT4gc2V0QWRkcmVzcyh2YWx1ZSkpXHJcbiAgICAgIC5jYXRjaCgoZXJyKSA9PiBjb25zb2xlLmxvZyhlcnIpKVxyXG4gIH1cclxuXHJcbiAgY29uc3QgaGFuZGxlQXZ0Q2xpY2sgPSBhc3luYyAoKSA9PiB7XHJcbiAgICBzZXRTaG93QXZ0KCFzaG93QXZ0KVxyXG4gIH1cclxuXHJcbiAgaWYgKHN0YXR1cyA9PT0gJ3VuYXV0aGVudGljYXRlZCcpXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8YnV0dG9uXHJcbiAgICAgICAgY2xhc3NOYW1lPVwiIHJvdW5kZWQtZnVsbCBweC02IHB5LTEgdGV4dC1zbGF0ZS00MDAgb3V0bGluZSBvdXRsaW5lLTEgb3V0bGluZS1zbGF0ZS00MDAgaG92ZXI6Ymctc2xhdGUtOTAwIGhvdmVyOnRleHQtd2hpdGVcIlxyXG4gICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZVNpZ25JbkJ1dHRvbkNsaWNrKCcvbG9naW4nKX1cclxuICAgICAgPlxyXG4gICAgICAgIFNpZ24gaW5cclxuICAgICAgPC9idXR0b24+XHJcbiAgICApXHJcbiAgZWxzZSBpZiAoc3RhdHVzID09PSAnYXV0aGVudGljYXRlZCcpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgc3BhY2UteC00XCI+XHJcbiAgICAgICAge2FkZHJlc3MgPyAoXHJcbiAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInctNDAgdHJ1bmNhdGUgcm91bmRlZC1mdWxsIHB4LTYgcHktMSB0ZXh0LXNsYXRlLTQwMCBvdXRsaW5lIG91dGxpbmUtMSBvdXRsaW5lLXNsYXRlLTQwMCBob3ZlcjpiZy1zbGF0ZS05MDAgaG92ZXI6dGV4dC13aGl0ZVwiPlxyXG4gICAgICAgICAgICB7YWRkcmVzc31cclxuICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICkgOiAoXHJcbiAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInctNDAgdHJ1bmNhdGUgcm91bmRlZC1mdWxsIHB4LTYgcHktMSB0ZXh0LXNsYXRlLTQwMCBvdXRsaW5lIG91dGxpbmUtMSBvdXRsaW5lLXNsYXRlLTQwMCBob3ZlcjpiZy1zbGF0ZS05MDAgaG92ZXI6dGV4dC13aGl0ZVwiXHJcbiAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZUNvbm5lY3RXYWxsZXRCdXR0b25DbGlja31cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgQ29ubmVjdCBXYWxsZXRcclxuICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICl9XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZVwiPlxyXG4gICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJpbmxpbmUtZmxleCBoLTggdy04IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciByb3VuZGVkLWZ1bGwgYmctZ3JheS0yMDAgdGV4dC1ncmF5LTgwMFwiXHJcbiAgICAgICAgICAgIGlkPVwibWVudS1idXR0b25cIlxyXG4gICAgICAgICAgICBhcmlhLWV4cGFuZGVkPVwidHJ1ZVwiXHJcbiAgICAgICAgICAgIGFyaWEtaGFzcG9wdXA9XCJ0cnVlXCJcclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPEltYWdlXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaC1mdWxsIHctZnVsbCByb3VuZGVkLWZ1bGwgb2JqZWN0LWNvdmVyXCJcclxuICAgICAgICAgICAgICBzcmM9e2F2YXRhcn1cclxuICAgICAgICAgICAgICBmaWxsXHJcbiAgICAgICAgICAgICAgc2l6ZXM9XCJsYXJnZVwiXHJcbiAgICAgICAgICAgICAgYWx0PVwiWW91ciBhdmF0YXJcIlxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZUF2dENsaWNrfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICB7c2hvd0F2dCAmJiAoXHJcbiAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LTU4IGFic29sdXRlIHJpZ2h0LTAgei0xMCBtdC0yIG9yaWdpbi10b3AtcmlnaHQgb3ZlcmZsb3ctaGlkZGVuIHJvdW5kZWQtbWQgYmctd2hpdGUgc2hhZG93LWxnIHJpbmctMSByaW5nLWJsYWNrIHJpbmctb3BhY2l0eS01XCJcclxuICAgICAgICAgICAgICByb2xlPVwibWVudVwiXHJcbiAgICAgICAgICAgICAgYXJpYS1vcmllbnRhdGlvbj1cInZlcnRpY2FsXCJcclxuICAgICAgICAgICAgICBhcmlhLWxhYmVsbGVkYnk9XCJtZW51LWJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgdGFiSW5kZXg9ey0xfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgIGhyZWY9XCIjXCJcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJsb2NrIHB4LTQgcHktMiB0ZXh0LWxnICB0ZXh0LWdyYXktNzAwIGhvdmVyOmJnLWdyYXktNTBcIlxyXG4gICAgICAgICAgICAgICAgcm9sZT1cIm1lbnVpdGVtXCJcclxuICAgICAgICAgICAgICAgIHRhYkluZGV4PXstMX1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICBQcm9maWxlXHJcbiAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICBocmVmPVwiI1wiXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJibG9jayBweC00IHB5LTIgdGV4dC1sZyB0ZXh0LWdyYXktNzAwIGhvdmVyOmJnLWdyYXktNTBcIlxyXG4gICAgICAgICAgICAgICAgcm9sZT1cIm1lbnVpdGVtXCJcclxuICAgICAgICAgICAgICAgIHRhYkluZGV4PXstMX1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICBTZXR0aW5nXHJcbiAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNpZ25PdXQoKX1cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJsb2NrIHctZnVsbCBweC00IHB5LTIgdGV4dC1sZWZ0IHRleHQtbGcgIHRleHQtZ3JheS03MDAgaG92ZXI6YmctcmVkLTQwMFwiXHJcbiAgICAgICAgICAgICAgICByb2xlPVwibWVudWl0ZW1cIlxyXG4gICAgICAgICAgICAgICAgdGFiSW5kZXg9ey0xfVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIFNpZ24gb3V0XHJcbiAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgKX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICApXHJcbiAgfVxyXG59XHJcbiJdLCJuYW1lcyI6WyJJbWFnZSIsInVzZVJvdXRlciIsImF2YXRhciIsInVzZVN0YXRlIiwiY29ubmVjdE1ldGFtYXNrIiwidXNlU2Vzc2lvbiIsInNpZ25PdXQiLCJDb25uZWN0QnV0dG9uIiwic3RhdHVzIiwiYWRkcmVzcyIsInNldEFkZHJlc3MiLCJ1bmRlZmluZWQiLCJzaG93QXZ0Iiwic2V0U2hvd0F2dCIsInJvdXRlciIsImhhbmRsZVNpZ25JbkJ1dHRvbkNsaWNrIiwicGF0aCIsInB1c2giLCJoYW5kbGVDb25uZWN0V2FsbGV0QnV0dG9uQ2xpY2siLCJ0aGVuIiwidmFsdWUiLCJjYXRjaCIsImVyciIsImNvbnNvbGUiLCJsb2ciLCJoYW5kbGVBdnRDbGljayIsImJ1dHRvbiIsImNsYXNzTmFtZSIsIm9uQ2xpY2siLCJkaXYiLCJpZCIsImFyaWEtZXhwYW5kZWQiLCJhcmlhLWhhc3BvcHVwIiwic3JjIiwiZmlsbCIsInNpemVzIiwiYWx0Iiwicm9sZSIsImFyaWEtb3JpZW50YXRpb24iLCJhcmlhLWxhYmVsbGVkYnkiLCJ0YWJJbmRleCIsImEiLCJocmVmIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/layout/Header/ConnectButton/ConnectButton.tsx\n"));

/***/ }),

/***/ "./components/layout/Header/index.tsx":
/*!********************************************!*\
  !*** ./components/layout/Header/index.tsx ***!
  \********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Header; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _ConnectButton_ConnectButton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ConnectButton/ConnectButton */ \"./components/layout/Header/ConnectButton/ConnectButton.tsx\");\n/* harmony import */ var _Logo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Logo */ \"./components/layout/Header/Logo.tsx\");\n\n\n\nfunction Header() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"fixed left-0 top-0 flex h-14 w-full justify-center shadow-md shadow-slate-100\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"flex h-full w-3/4 items-center justify-between\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Logo__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                    fileName: \"D:\\\\CODE\\\\soundbound-client\\\\components\\\\layout\\\\Header\\\\index.tsx\",\n                    lineNumber: 10,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ConnectButton_ConnectButton__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n                    fileName: \"D:\\\\CODE\\\\soundbound-client\\\\components\\\\layout\\\\Header\\\\index.tsx\",\n                    lineNumber: 16,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"D:\\\\CODE\\\\soundbound-client\\\\components\\\\layout\\\\Header\\\\index.tsx\",\n            lineNumber: 8,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"D:\\\\CODE\\\\soundbound-client\\\\components\\\\layout\\\\Header\\\\index.tsx\",\n        lineNumber: 7,\n        columnNumber: 5\n    }, this);\n}\n_c = Header;\nvar _c;\n$RefreshReg$(_c, \"Header\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2xheW91dC9IZWFkZXIvaW5kZXgudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUF5RDtBQUNoQztBQUdWLFNBQVNFO0lBQ3RCLHFCQUNFLDhEQUFDQztRQUFJQyxXQUFVO2tCQUNiLDRFQUFDRDtZQUFJQyxXQUFVOzs4QkFFYiw4REFBQ0gsNkNBQUlBOzs7Ozs4QkFNTCw4REFBQ0Qsb0VBQWFBOzs7Ozs7Ozs7Ozs7Ozs7O0FBS3RCO0tBaEJ3QkUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9sYXlvdXQvSGVhZGVyL2luZGV4LnRzeD9lMmFjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBDb25uZWN0QnV0dG9uIGZyb20gJy4vQ29ubmVjdEJ1dHRvbi9Db25uZWN0QnV0dG9uJ1xyXG5pbXBvcnQgTG9nbyBmcm9tICcuL0xvZ28nXHJcbmltcG9ydCBOYXZiYXIgZnJvbSAnLi9OYXZiYXInXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIZWFkZXIoKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZml4ZWQgbGVmdC0wIHRvcC0wIGZsZXggaC0xNCB3LWZ1bGwganVzdGlmeS1jZW50ZXIgc2hhZG93LW1kIHNoYWRvdy1zbGF0ZS0xMDBcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGgtZnVsbCB3LTMvNCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuXCI+XHJcbiAgICAgICAgey8qIDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgbGVmdC0wXCI+ICovfVxyXG4gICAgICAgIDxMb2dvIC8+XHJcbiAgICAgICAgey8qIDwvZGl2PiAqL31cclxuICAgICAgICB7LyogPGRpdiBjbGFzc05hbWU9XCJmbGV4IHctZnVsbCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXJcIj5cclxuICAgICAgICAgIDxOYXZiYXIgLz5cclxuICAgICAgICA8L2Rpdj4gKi99XHJcbiAgICAgICAgey8qIDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgcmlnaHQtMFwiPiAqL31cclxuICAgICAgICA8Q29ubmVjdEJ1dHRvbiAvPlxyXG4gICAgICAgIHsvKiA8L2Rpdj4gKi99XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcbiJdLCJuYW1lcyI6WyJDb25uZWN0QnV0dG9uIiwiTG9nbyIsIkhlYWRlciIsImRpdiIsImNsYXNzTmFtZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/layout/Header/index.tsx\n"));

/***/ })

});