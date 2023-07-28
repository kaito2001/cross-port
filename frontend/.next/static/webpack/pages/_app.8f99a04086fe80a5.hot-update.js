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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ConnectButton; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/react */ \"./node_modules/next-auth/react/index.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _assets_images_download_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/assets/images/download.jpg */ \"./assets/images/download.jpg\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _contract_connectMetamask__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/contract/connectMetamask */ \"./contract/connectMetamask.ts\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nfunction ConnectButton() {\n    _s();\n    const [address, setAddress] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(undefined);\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    const { status } = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_1__.useSession)();\n    const handleSignInButtonClick = (path)=>{\n        router.push(path);\n    };\n    const handleConnectWalletButtonClick = async ()=>{\n        await (0,_contract_connectMetamask__WEBPACK_IMPORTED_MODULE_6__.connectMetamask)().then((value)=>setAddress(value)).catch((err)=>console.log(err));\n    };\n    if (status === \"unauthenticated\") return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n        className: \" rounded-full px-6 py-1 text-slate-400 outline outline-1 outline-slate-400 hover:bg-slate-900 hover:text-white\",\n        onClick: ()=>handleSignInButtonClick(\"/login\"),\n        children: \"Sign in\"\n    }, void 0, false, {\n        fileName: \"D:\\\\CODE\\\\soundbound-client\\\\components\\\\layout\\\\Header\\\\ConnectButton.tsx\",\n        lineNumber: 28,\n        columnNumber: 7\n    }, this);\n    else if (status === \"authenticated\") {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"flex items-center space-x-4\",\n            children: [\n                address ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    className: \"w-40 truncate rounded-full px-6 py-1 text-slate-400 outline outline-1 outline-slate-400 hover:bg-slate-900 hover:text-white\",\n                    children: address\n                }, void 0, false, {\n                    fileName: \"D:\\\\CODE\\\\soundbound-client\\\\components\\\\layout\\\\Header\\\\ConnectButton.tsx\",\n                    lineNumber: 39,\n                    columnNumber: 11\n                }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    className: \"w-40 truncate rounded-full px-6 py-1 text-slate-400 outline outline-1 outline-slate-400 hover:bg-slate-900 hover:text-white\",\n                    onClick: handleConnectWalletButtonClick,\n                    children: \"Connect Wallet\"\n                }, void 0, false, {\n                    fileName: \"D:\\\\CODE\\\\soundbound-client\\\\components\\\\layout\\\\Header\\\\ConnectButton.tsx\",\n                    lineNumber: 43,\n                    columnNumber: 11\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            className: \"relative inline-flex h-8 w-8 items-center justify-center rounded-full bg-gray-200 text-gray-800\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                className: \"h-full w-full rounded-full object-cover\",\n                                src: _assets_images_download_jpg__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n                                fill: true,\n                                sizes: \"large\",\n                                alt: \"Your avatar\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\CODE\\\\soundbound-client\\\\components\\\\layout\\\\Header\\\\ConnectButton.tsx\",\n                                lineNumber: 52,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"D:\\\\CODE\\\\soundbound-client\\\\components\\\\layout\\\\Header\\\\ConnectButton.tsx\",\n                            lineNumber: 51,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"h-40 w-80 bg-slate-500 rounded-full\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\CODE\\\\soundbound-client\\\\components\\\\layout\\\\Header\\\\ConnectButton.tsx\",\n                            lineNumber: 61,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"D:\\\\CODE\\\\soundbound-client\\\\components\\\\layout\\\\Header\\\\ConnectButton.tsx\",\n                    lineNumber: 50,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"D:\\\\CODE\\\\soundbound-client\\\\components\\\\layout\\\\Header\\\\ConnectButton.tsx\",\n            lineNumber: 37,\n            columnNumber: 7\n        }, this);\n    }\n}\n_s(ConnectButton, \"YNlh3TRl339HC8pg1nEG+izZT6s=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter,\n        next_auth_react__WEBPACK_IMPORTED_MODULE_1__.useSession\n    ];\n});\n_c = ConnectButton;\nvar _c;\n$RefreshReg$(_c, \"ConnectButton\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2xheW91dC9IZWFkZXIvQ29ubmVjdEJ1dHRvbi50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQTRDO0FBQ2Q7QUFDUztBQUNVO0FBQ2pCO0FBQzRCO0FBRTdDLFNBQVNNOztJQUN0QixNQUFNLENBQUNDLFNBQVNDLFdBQVcsR0FBR0osK0NBQVFBLENBQ3BDSztJQUdGLE1BQU1DLFNBQVNSLHNEQUFTQTtJQUN4QixNQUFNLEVBQUVTLE1BQU0sRUFBRSxHQUFHWCwyREFBVUE7SUFFN0IsTUFBTVksMEJBQTBCLENBQUNDO1FBQy9CSCxPQUFPSSxJQUFJLENBQUNEO0lBQ2Q7SUFFQSxNQUFNRSxpQ0FBaUM7UUFDckMsTUFBTVYsMEVBQWVBLEdBQ2xCVyxJQUFJLENBQUMsQ0FBQ0MsUUFBVVQsV0FBV1MsUUFDM0JDLEtBQUssQ0FBQyxDQUFDQyxNQUFRQyxRQUFRQyxHQUFHLENBQUNGO0lBQ2hDO0lBRUEsSUFBSVIsV0FBVyxtQkFDYixxQkFDRSw4REFBQ1c7UUFDQ0MsV0FBVTtRQUNWQyxTQUFTLElBQU1aLHdCQUF3QjtrQkFDeEM7Ozs7OztTQUlBLElBQUlELFdBQVcsaUJBQWlCO1FBQ25DLHFCQUNFLDhEQUFDYztZQUFJRixXQUFVOztnQkFDWmhCLHdCQUNDLDhEQUFDZTtvQkFBT0MsV0FBVTs4QkFDZmhCOzs7Ozt5Q0FHSCw4REFBQ2U7b0JBQ0NDLFdBQVU7b0JBQ1ZDLFNBQVNUOzhCQUNWOzs7Ozs7OEJBSUgsOERBQUNVOztzQ0FDQyw4REFBQ0g7NEJBQU9DLFdBQVU7c0NBQ2hCLDRFQUFDdEIsbURBQUtBO2dDQUNKc0IsV0FBVTtnQ0FDVkcsS0FBS3ZCLG1FQUFNQTtnQ0FDWHdCLElBQUk7Z0NBQ0pDLE9BQU07Z0NBQ05DLEtBQUk7Ozs7Ozs7Ozs7O3NDQUlSLDhEQUFDSjs0QkFBSUYsV0FBVTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBS3ZCO0FBQ0Y7R0EzRHdCakI7O1FBS1BKLGtEQUFTQTtRQUNMRix1REFBVUE7OztLQU5QTSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2xheW91dC9IZWFkZXIvQ29ubmVjdEJ1dHRvbi50c3g/YWE0ZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTZXNzaW9uIH0gZnJvbSAnbmV4dC1hdXRoL3JlYWN0J1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSdcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXHJcbmltcG9ydCBhdmF0YXIgZnJvbSAnQC9hc3NldHMvaW1hZ2VzL2Rvd25sb2FkLmpwZydcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgY29ubmVjdE1ldGFtYXNrIH0gZnJvbSAnQC9jb250cmFjdC9jb25uZWN0TWV0YW1hc2snXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDb25uZWN0QnV0dG9uKCkge1xyXG4gIGNvbnN0IFthZGRyZXNzLCBzZXRBZGRyZXNzXSA9IHVzZVN0YXRlPHN0cmluZyB8IHVuZGVmaW5lZD4oXHJcbiAgICB1bmRlZmluZWRcclxuICApXHJcblxyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXHJcbiAgY29uc3QgeyBzdGF0dXMgfSA9IHVzZVNlc3Npb24oKVxyXG5cclxuICBjb25zdCBoYW5kbGVTaWduSW5CdXR0b25DbGljayA9IChwYXRoOiBzdHJpbmcpID0+IHtcclxuICAgIHJvdXRlci5wdXNoKHBhdGgpXHJcbiAgfVxyXG5cclxuICBjb25zdCBoYW5kbGVDb25uZWN0V2FsbGV0QnV0dG9uQ2xpY2sgPSBhc3luYyAoKSA9PiB7XHJcbiAgICBhd2FpdCBjb25uZWN0TWV0YW1hc2soKVxyXG4gICAgICAudGhlbigodmFsdWUpID0+IHNldEFkZHJlc3ModmFsdWUpKVxyXG4gICAgICAuY2F0Y2goKGVycikgPT4gY29uc29sZS5sb2coZXJyKSlcclxuICB9XHJcblxyXG4gIGlmIChzdGF0dXMgPT09ICd1bmF1dGhlbnRpY2F0ZWQnKVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGJ1dHRvblxyXG4gICAgICAgIGNsYXNzTmFtZT1cIiByb3VuZGVkLWZ1bGwgcHgtNiBweS0xIHRleHQtc2xhdGUtNDAwIG91dGxpbmUgb3V0bGluZS0xIG91dGxpbmUtc2xhdGUtNDAwIGhvdmVyOmJnLXNsYXRlLTkwMCBob3Zlcjp0ZXh0LXdoaXRlXCJcclxuICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVTaWduSW5CdXR0b25DbGljaygnL2xvZ2luJyl9XHJcbiAgICAgID5cclxuICAgICAgICBTaWduIGluXHJcbiAgICAgIDwvYnV0dG9uPlxyXG4gICAgKVxyXG4gIGVsc2UgaWYgKHN0YXR1cyA9PT0gJ2F1dGhlbnRpY2F0ZWQnKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIHNwYWNlLXgtNFwiPlxyXG4gICAgICAgIHthZGRyZXNzID8gKFxyXG4gICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJ3LTQwIHRydW5jYXRlIHJvdW5kZWQtZnVsbCBweC02IHB5LTEgdGV4dC1zbGF0ZS00MDAgb3V0bGluZSBvdXRsaW5lLTEgb3V0bGluZS1zbGF0ZS00MDAgaG92ZXI6Ymctc2xhdGUtOTAwIGhvdmVyOnRleHQtd2hpdGVcIj5cclxuICAgICAgICAgICAge2FkZHJlc3N9XHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICApIDogKFxyXG4gICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJ3LTQwIHRydW5jYXRlIHJvdW5kZWQtZnVsbCBweC02IHB5LTEgdGV4dC1zbGF0ZS00MDAgb3V0bGluZSBvdXRsaW5lLTEgb3V0bGluZS1zbGF0ZS00MDAgaG92ZXI6Ymctc2xhdGUtOTAwIGhvdmVyOnRleHQtd2hpdGVcIlxyXG4gICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVDb25uZWN0V2FsbGV0QnV0dG9uQ2xpY2t9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIENvbm5lY3QgV2FsbGV0XHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICApfVxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInJlbGF0aXZlIGlubGluZS1mbGV4IGgtOCB3LTggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHJvdW5kZWQtZnVsbCBiZy1ncmF5LTIwMCB0ZXh0LWdyYXktODAwXCI+XHJcbiAgICAgICAgICAgIDxJbWFnZVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImgtZnVsbCB3LWZ1bGwgcm91bmRlZC1mdWxsIG9iamVjdC1jb3ZlclwiXHJcbiAgICAgICAgICAgICAgc3JjPXthdmF0YXJ9XHJcbiAgICAgICAgICAgICAgZmlsbFxyXG4gICAgICAgICAgICAgIHNpemVzPVwibGFyZ2VcIlxyXG4gICAgICAgICAgICAgIGFsdD1cIllvdXIgYXZhdGFyXCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvYnV0dG9uPlxyXG5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaC00MCB3LTgwIGJnLXNsYXRlLTUwMCByb3VuZGVkLWZ1bGxcIj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIClcclxuICB9XHJcbn1cclxuIl0sIm5hbWVzIjpbInVzZVNlc3Npb24iLCJJbWFnZSIsInVzZVJvdXRlciIsImF2YXRhciIsInVzZVN0YXRlIiwiY29ubmVjdE1ldGFtYXNrIiwiQ29ubmVjdEJ1dHRvbiIsImFkZHJlc3MiLCJzZXRBZGRyZXNzIiwidW5kZWZpbmVkIiwicm91dGVyIiwic3RhdHVzIiwiaGFuZGxlU2lnbkluQnV0dG9uQ2xpY2siLCJwYXRoIiwicHVzaCIsImhhbmRsZUNvbm5lY3RXYWxsZXRCdXR0b25DbGljayIsInRoZW4iLCJ2YWx1ZSIsImNhdGNoIiwiZXJyIiwiY29uc29sZSIsImxvZyIsImJ1dHRvbiIsImNsYXNzTmFtZSIsIm9uQ2xpY2siLCJkaXYiLCJzcmMiLCJmaWxsIiwic2l6ZXMiLCJhbHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/layout/Header/ConnectButton.tsx\n"));

/***/ })

});