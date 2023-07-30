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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ConnectButton; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _assets_images_download_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/assets/images/download.jpg */ \"./assets/images/download.jpg\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _contract_connectMetamask__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/contract/connectMetamask */ \"./contract/connectMetamask.ts\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next-auth/react */ \"./node_modules/next-auth/react/index.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_6__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nfunction ConnectButton() {\n    _s();\n    const { data: session, status } = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_6__.useSession)();\n    const [address, setAddress] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(undefined);\n    const [showAvt, setShowAvt] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false);\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const handleSignInButtonClick = (path)=>{\n        router.push(path);\n    };\n    const handleConnectWalletButtonClick = async ()=>{\n        await (0,_contract_connectMetamask__WEBPACK_IMPORTED_MODULE_5__.connectMetamask)().then((value)=>setAddress(value)).catch((err)=>console.log(err));\n    };\n    const handleAvtClick = async ()=>{\n        setShowAvt(!showAvt);\n    };\n    if (status === \"unauthenticated\") return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n        className: \" rounded-full px-6 py-1 text-slate-400 outline outline-1 outline-slate-400 hover:bg-slate-900 hover:text-white\",\n        onClick: ()=>handleSignInButtonClick(\"/login\"),\n        children: \"Sign in\"\n    }, void 0, false, {\n        fileName: \"D:\\\\CODE\\\\soundbound-client\\\\components\\\\layout\\\\Header\\\\ConnectButton.tsx\",\n        lineNumber: 34,\n        columnNumber: 7\n    }, this);\n    else if (status === \"authenticated\") {\n        var _session_user, _session, _session_user1, _session1;\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"flex items-center space-x-4\",\n            children: [\n                address ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    className: \"w-40 truncate rounded-full px-6 py-1 text-slate-400 outline outline-1 outline-slate-400 hover:bg-slate-900 hover:text-white\",\n                    children: address\n                }, void 0, false, {\n                    fileName: \"D:\\\\CODE\\\\soundbound-client\\\\components\\\\layout\\\\Header\\\\ConnectButton.tsx\",\n                    lineNumber: 45,\n                    columnNumber: 11\n                }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    className: \"w-40 truncate rounded-full px-6 py-1 text-slate-400 outline outline-1 outline-slate-400 hover:bg-slate-900 hover:text-white\",\n                    onClick: handleConnectWalletButtonClick,\n                    children: \"Connect Wallet\"\n                }, void 0, false, {\n                    fileName: \"D:\\\\CODE\\\\soundbound-client\\\\components\\\\layout\\\\Header\\\\ConnectButton.tsx\",\n                    lineNumber: 49,\n                    columnNumber: 11\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            className: \"relative inline-flex h-8 w-8 items-center justify-center rounded-full bg-gray-200 text-gray-800\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                className: \"h-full w-full rounded-full object-cover\",\n                                src: _assets_images_download_jpg__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n                                fill: true,\n                                sizes: \"large\",\n                                alt: \"Your avatar\",\n                                onClick: handleAvtClick\n                            }, void 0, false, {\n                                fileName: \"D:\\\\CODE\\\\soundbound-client\\\\components\\\\layout\\\\Header\\\\ConnectButton.tsx\",\n                                lineNumber: 58,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"D:\\\\CODE\\\\soundbound-client\\\\components\\\\layout\\\\Header\\\\ConnectButton.tsx\",\n                            lineNumber: 57,\n                            columnNumber: 11\n                        }, this),\n                        showAvt && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"absolute -left-1/2 top-full h-40 w-80 rounded-full bg-slate-500\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"text-black\",\n                                    children: [\n                                        \"Signed in as \",\n                                        (_session = session) === null || _session === void 0 ? void 0 : (_session_user = _session.user) === null || _session_user === void 0 ? void 0 : _session_user.name\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"D:\\\\CODE\\\\soundbound-client\\\\components\\\\layout\\\\Header\\\\ConnectButton.tsx\",\n                                    lineNumber: 69,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                    fileName: \"D:\\\\CODE\\\\soundbound-client\\\\components\\\\layout\\\\Header\\\\ConnectButton.tsx\",\n                                    lineNumber: 72,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"text-black\",\n                                    children: [\n                                        \"With email: \",\n                                        (_session1 = session) === null || _session1 === void 0 ? void 0 : (_session_user1 = _session1.user) === null || _session_user1 === void 0 ? void 0 : _session_user1.email\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"D:\\\\CODE\\\\soundbound-client\\\\components\\\\layout\\\\Header\\\\ConnectButton.tsx\",\n                                    lineNumber: 73,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                    fileName: \"D:\\\\CODE\\\\soundbound-client\\\\components\\\\layout\\\\Header\\\\ConnectButton.tsx\",\n                                    lineNumber: 76,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    onClick: ()=>(0,next_auth_react__WEBPACK_IMPORTED_MODULE_6__.signOut)(),\n                                    className: \"rounded-full bg-red-700 p-3 hover:bg-red-300\",\n                                    children: \"Sign Out\"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\CODE\\\\soundbound-client\\\\components\\\\layout\\\\Header\\\\ConnectButton.tsx\",\n                                    lineNumber: 77,\n                                    columnNumber: 15\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"D:\\\\CODE\\\\soundbound-client\\\\components\\\\layout\\\\Header\\\\ConnectButton.tsx\",\n                            lineNumber: 68,\n                            columnNumber: 13\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"D:\\\\CODE\\\\soundbound-client\\\\components\\\\layout\\\\Header\\\\ConnectButton.tsx\",\n                    lineNumber: 56,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"D:\\\\CODE\\\\soundbound-client\\\\components\\\\layout\\\\Header\\\\ConnectButton.tsx\",\n            lineNumber: 43,\n            columnNumber: 7\n        }, this);\n    }\n}\n_s(ConnectButton, \"BC0VDK5OODYpYvns61nIdScSqu4=\", false, function() {\n    return [\n        next_auth_react__WEBPACK_IMPORTED_MODULE_6__.useSession,\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = ConnectButton;\nvar _c;\n$RefreshReg$(_c, \"ConnectButton\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2xheW91dC9IZWFkZXIvQ29ubmVjdEJ1dHRvbi50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQThCO0FBQ1M7QUFDVTtBQUNqQjtBQUM0QjtBQUNQO0FBRXRDLFNBQVNPOztJQUN0QixNQUFNLEVBQUVDLE1BQU1DLE9BQU8sRUFBRUMsTUFBTSxFQUFFLEdBQUdMLDJEQUFVQTtJQUU1QyxNQUFNLENBQUNNLFNBQVNDLFdBQVcsR0FBR1QsK0NBQVFBLENBQ3BDVTtJQUVGLE1BQU0sQ0FBQ0MsU0FBU0MsV0FBVyxHQUFHWiwrQ0FBUUEsQ0FBVTtJQUVoRCxNQUFNYSxTQUFTZixzREFBU0E7SUFFeEIsTUFBTWdCLDBCQUEwQixDQUFDQztRQUMvQkYsT0FBT0csSUFBSSxDQUFDRDtJQUNkO0lBRUEsTUFBTUUsaUNBQWlDO1FBQ3JDLE1BQU1oQiwwRUFBZUEsR0FDbEJpQixJQUFJLENBQUMsQ0FBQ0MsUUFBVVYsV0FBV1UsUUFDM0JDLEtBQUssQ0FBQyxDQUFDQyxNQUFRQyxRQUFRQyxHQUFHLENBQUNGO0lBQ2hDO0lBRUEsTUFBTUcsaUJBQWlCO1FBQ3JCWixXQUFXLENBQUNEO0lBQ2Q7SUFFQSxJQUFJSixXQUFXLG1CQUNiLHFCQUNFLDhEQUFDa0I7UUFDQ0MsV0FBVTtRQUNWQyxTQUFTLElBQU1iLHdCQUF3QjtrQkFDeEM7Ozs7OztTQUlBLElBQUlQLFdBQVcsaUJBQWlCO1lBNkJURCxlQUFBQSxVQUlEQSxnQkFBQUE7UUFoQ3pCLHFCQUNFLDhEQUFDc0I7WUFBSUYsV0FBVTs7Z0JBQ1psQix3QkFDQyw4REFBQ2lCO29CQUFPQyxXQUFVOzhCQUNmbEI7Ozs7O3lDQUdILDhEQUFDaUI7b0JBQ0NDLFdBQVU7b0JBQ1ZDLFNBQVNWOzhCQUNWOzs7Ozs7OEJBSUgsOERBQUNXOztzQ0FDQyw4REFBQ0g7NEJBQU9DLFdBQVU7c0NBQ2hCLDRFQUFDN0IsbURBQUtBO2dDQUNKNkIsV0FBVTtnQ0FDVkcsS0FBSzlCLG1FQUFNQTtnQ0FDWCtCLElBQUk7Z0NBQ0pDLE9BQU07Z0NBQ05DLEtBQUk7Z0NBQ0pMLFNBQVNIOzs7Ozs7Ozs7Ozt3QkFHWmIseUJBQ0MsOERBQUNpQjs0QkFBSUYsV0FBVTs7OENBQ2IsOERBQUNPO29DQUFFUCxXQUFVOzt3Q0FBYTt5Q0FDVnBCLFdBQUFBLHFCQUFBQSxnQ0FBQUEsZ0JBQUFBLFNBQVM0QixJQUFJLGNBQWI1QixvQ0FBQUEsY0FBZTZCLElBQUk7Ozs7Ozs7OENBRW5DLDhEQUFDQzs7Ozs7OENBQ0QsOERBQUNIO29DQUFFUCxXQUFVOzt3Q0FBYTt5Q0FDWHBCLFlBQUFBLHFCQUFBQSxpQ0FBQUEsaUJBQUFBLFVBQVM0QixJQUFJLGNBQWI1QixxQ0FBQUEsZUFBZStCLEtBQUs7Ozs7Ozs7OENBRW5DLDhEQUFDRDs7Ozs7OENBQ0QsOERBQUNYO29DQUNDRSxTQUFTLElBQU14Qix3REFBT0E7b0NBQ3RCdUIsV0FBVTs4Q0FDWDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBUWI7QUFDRjtHQWpGd0J0Qjs7UUFDWUYsdURBQVVBO1FBTzdCSixrREFBU0E7OztLQVJGTSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2xheW91dC9IZWFkZXIvQ29ubmVjdEJ1dHRvbi50c3g/YWE0ZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSdcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXHJcbmltcG9ydCBhdmF0YXIgZnJvbSAnQC9hc3NldHMvaW1hZ2VzL2Rvd25sb2FkLmpwZydcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgY29ubmVjdE1ldGFtYXNrIH0gZnJvbSAnQC9jb250cmFjdC9jb25uZWN0TWV0YW1hc2snXHJcbmltcG9ydCB7IHVzZVNlc3Npb24sIHNpZ25PdXQgfSBmcm9tICduZXh0LWF1dGgvcmVhY3QnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDb25uZWN0QnV0dG9uKCkge1xyXG4gIGNvbnN0IHsgZGF0YTogc2Vzc2lvbiwgc3RhdHVzIH0gPSB1c2VTZXNzaW9uKClcclxuXHJcbiAgY29uc3QgW2FkZHJlc3MsIHNldEFkZHJlc3NdID0gdXNlU3RhdGU8c3RyaW5nIHwgdW5kZWZpbmVkPihcclxuICAgIHVuZGVmaW5lZFxyXG4gIClcclxuICBjb25zdCBbc2hvd0F2dCwgc2V0U2hvd0F2dF0gPSB1c2VTdGF0ZTxib29sZWFuPihmYWxzZSlcclxuXHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcclxuXHJcbiAgY29uc3QgaGFuZGxlU2lnbkluQnV0dG9uQ2xpY2sgPSAocGF0aDogc3RyaW5nKSA9PiB7XHJcbiAgICByb3V0ZXIucHVzaChwYXRoKVxyXG4gIH1cclxuXHJcbiAgY29uc3QgaGFuZGxlQ29ubmVjdFdhbGxldEJ1dHRvbkNsaWNrID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgYXdhaXQgY29ubmVjdE1ldGFtYXNrKClcclxuICAgICAgLnRoZW4oKHZhbHVlKSA9PiBzZXRBZGRyZXNzKHZhbHVlKSlcclxuICAgICAgLmNhdGNoKChlcnIpID0+IGNvbnNvbGUubG9nKGVycikpXHJcbiAgfVxyXG5cclxuICBjb25zdCBoYW5kbGVBdnRDbGljayA9IGFzeW5jICgpID0+IHtcclxuICAgIHNldFNob3dBdnQoIXNob3dBdnQpXHJcbiAgfVxyXG5cclxuICBpZiAoc3RhdHVzID09PSAndW5hdXRoZW50aWNhdGVkJylcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxidXR0b25cclxuICAgICAgICBjbGFzc05hbWU9XCIgcm91bmRlZC1mdWxsIHB4LTYgcHktMSB0ZXh0LXNsYXRlLTQwMCBvdXRsaW5lIG91dGxpbmUtMSBvdXRsaW5lLXNsYXRlLTQwMCBob3ZlcjpiZy1zbGF0ZS05MDAgaG92ZXI6dGV4dC13aGl0ZVwiXHJcbiAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlU2lnbkluQnV0dG9uQ2xpY2soJy9sb2dpbicpfVxyXG4gICAgICA+XHJcbiAgICAgICAgU2lnbiBpblxyXG4gICAgICA8L2J1dHRvbj5cclxuICAgIClcclxuICBlbHNlIGlmIChzdGF0dXMgPT09ICdhdXRoZW50aWNhdGVkJykge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBzcGFjZS14LTRcIj5cclxuICAgICAgICB7YWRkcmVzcyA/IChcclxuICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwidy00MCB0cnVuY2F0ZSByb3VuZGVkLWZ1bGwgcHgtNiBweS0xIHRleHQtc2xhdGUtNDAwIG91dGxpbmUgb3V0bGluZS0xIG91dGxpbmUtc2xhdGUtNDAwIGhvdmVyOmJnLXNsYXRlLTkwMCBob3Zlcjp0ZXh0LXdoaXRlXCI+XHJcbiAgICAgICAgICAgIHthZGRyZXNzfVxyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgKSA6IChcclxuICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwidy00MCB0cnVuY2F0ZSByb3VuZGVkLWZ1bGwgcHgtNiBweS0xIHRleHQtc2xhdGUtNDAwIG91dGxpbmUgb3V0bGluZS0xIG91dGxpbmUtc2xhdGUtNDAwIGhvdmVyOmJnLXNsYXRlLTkwMCBob3Zlcjp0ZXh0LXdoaXRlXCJcclxuICAgICAgICAgICAgb25DbGljaz17aGFuZGxlQ29ubmVjdFdhbGxldEJ1dHRvbkNsaWNrfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICBDb25uZWN0IFdhbGxldFxyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgKX1cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJyZWxhdGl2ZSBpbmxpbmUtZmxleCBoLTggdy04IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciByb3VuZGVkLWZ1bGwgYmctZ3JheS0yMDAgdGV4dC1ncmF5LTgwMFwiPlxyXG4gICAgICAgICAgICA8SW1hZ2VcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJoLWZ1bGwgdy1mdWxsIHJvdW5kZWQtZnVsbCBvYmplY3QtY292ZXJcIlxyXG4gICAgICAgICAgICAgIHNyYz17YXZhdGFyfVxyXG4gICAgICAgICAgICAgIGZpbGxcclxuICAgICAgICAgICAgICBzaXplcz1cImxhcmdlXCJcclxuICAgICAgICAgICAgICBhbHQ9XCJZb3VyIGF2YXRhclwiXHJcbiAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlQXZ0Q2xpY2t9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgIHtzaG93QXZ0ICYmIChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSAtbGVmdC0xLzIgdG9wLWZ1bGwgaC00MCB3LTgwIHJvdW5kZWQtZnVsbCBiZy1zbGF0ZS01MDBcIj5cclxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWJsYWNrXCI+XHJcbiAgICAgICAgICAgICAgICBTaWduZWQgaW4gYXMge3Nlc3Npb24/LnVzZXI/Lm5hbWV9XHJcbiAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtYmxhY2tcIj5cclxuICAgICAgICAgICAgICAgIFdpdGggZW1haWw6IHtzZXNzaW9uPy51c2VyPy5lbWFpbH1cclxuICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2lnbk91dCgpfVxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicm91bmRlZC1mdWxsIGJnLXJlZC03MDAgcC0zIGhvdmVyOmJnLXJlZC0zMDBcIlxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIFNpZ24gT3V0XHJcbiAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgKX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICApXHJcbiAgfVxyXG59XHJcbiJdLCJuYW1lcyI6WyJJbWFnZSIsInVzZVJvdXRlciIsImF2YXRhciIsInVzZVN0YXRlIiwiY29ubmVjdE1ldGFtYXNrIiwidXNlU2Vzc2lvbiIsInNpZ25PdXQiLCJDb25uZWN0QnV0dG9uIiwiZGF0YSIsInNlc3Npb24iLCJzdGF0dXMiLCJhZGRyZXNzIiwic2V0QWRkcmVzcyIsInVuZGVmaW5lZCIsInNob3dBdnQiLCJzZXRTaG93QXZ0Iiwicm91dGVyIiwiaGFuZGxlU2lnbkluQnV0dG9uQ2xpY2siLCJwYXRoIiwicHVzaCIsImhhbmRsZUNvbm5lY3RXYWxsZXRCdXR0b25DbGljayIsInRoZW4iLCJ2YWx1ZSIsImNhdGNoIiwiZXJyIiwiY29uc29sZSIsImxvZyIsImhhbmRsZUF2dENsaWNrIiwiYnV0dG9uIiwiY2xhc3NOYW1lIiwib25DbGljayIsImRpdiIsInNyYyIsImZpbGwiLCJzaXplcyIsImFsdCIsInAiLCJ1c2VyIiwibmFtZSIsImJyIiwiZW1haWwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/layout/Header/ConnectButton.tsx\n"));

/***/ })

});