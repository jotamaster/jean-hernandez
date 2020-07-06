webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./layout/blogLayout.js":
/*!******************************!*\
  !*** ./layout/blogLayout.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ \"./node_modules/classnames/index.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);\nvar _jsxFileName = \"/Users/jeanhernandez/Documents/personal/next/gh-pages-app/layout/blogLayout.js\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\nfunction blogLayout(props) {\n  _s();\n\n  var _this = this;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false),\n      openMenu = _useState[0],\n      setOpenMenu = _useState[1];\n\n  var toggleMenu = function toggleMenu() {\n    setOpenMenu(!openMenu);\n  };\n\n  var containerClass = classnames__WEBPACK_IMPORTED_MODULE_2___default()({\n    \"theme-container\": true,\n    \"sidebar-open\": openMenu\n  });\n  return __jsx(\"div\", {\n    className: containerClass,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 5\n    }\n  }, __jsx(\"header\", {\n    className: \"navbar\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 7\n    }\n  }, __jsx(\"div\", {\n    onClick: toggleMenu,\n    className: \"sidebar-button\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 9\n    }\n  }, __jsx(\"svg\", {\n    xmlns: \"http://www.w3.org/2000/svg\",\n    \"aria-hidden\": \"true\",\n    role: \"img\",\n    viewBox: \"0 0 448 512\",\n    className: \"icon\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 11\n    }\n  }, __jsx(\"path\", {\n    fill: \"currentColor\",\n    d: \"M436 124H12c-6.627 0-12-5.373-12-12V80c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12z\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 13\n    }\n  }))), __jsx(\"a\", {\n    href: \"/\",\n    className: \"home-link router-link-active\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 9\n    }\n  }, __jsx(\"span\", {\n    className: \"site-name\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 11\n    }\n  }, \"JH\")), __jsx(\"div\", {\n    className: \"links\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 9\n    }\n  }, __jsx(\"nav\", {\n    className: \"nav-links can-hide\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 11\n    }\n  }, __jsx(\"div\", {\n    className: \"nav-item\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 40,\n      columnNumber: 13\n    }\n  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {\n    href: \"/\",\n    as: \"/\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 41,\n      columnNumber: 15\n    }\n  }, __jsx(\"a\", {\n    className: \"nav-link router-link-exact-active \",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 42,\n      columnNumber: 17\n    }\n  }, \"Home\"))), __jsx(\"div\", {\n    className: \"nav-item\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 45,\n      columnNumber: 13\n    }\n  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {\n    href: \"/blog\",\n    as: \"/blog\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 46,\n      columnNumber: 15\n    }\n  }, __jsx(\"a\", {\n    className: \"nav-link router-link-exact-active \",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 47,\n      columnNumber: 17\n    }\n  }, \"Blog\"))), __jsx(\"div\", {\n    className: \"nav-item\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 50,\n      columnNumber: 13\n    }\n  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {\n    href: \"/javascript\",\n    as: \"/javascript\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 51,\n      columnNumber: 15\n    }\n  }, __jsx(\"a\", {\n    className: \"nav-link router-link-exact-active \",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 55,\n      columnNumber: 17\n    }\n  }, \"JS\")))))), __jsx(\"aside\", {\n    className: \"sidebar\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 61,\n      columnNumber: 7\n    }\n  }, __jsx(\"ul\", {\n    className: \"sidebar-links\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 62,\n      columnNumber: 9\n    }\n  }, __jsx(\"li\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 63,\n      columnNumber: 11\n    }\n  }), __jsx(\"li\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 105,\n      columnNumber: 11\n    }\n  }, __jsx(\"section\", {\n    className: \"sidebar-group depth-0\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 106,\n      columnNumber: 13\n    }\n  }, props.menu.map(function (aside, i) {\n    return __jsx(\"div\", {\n      key: i + 'section',\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 109,\n        columnNumber: 19\n      }\n    }, __jsx(\"p\", {\n      className: \"sidebar-heading\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 110,\n        columnNumber: 21\n      }\n    }, __jsx(\"span\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 111,\n        columnNumber: 23\n      }\n    }, aside.section)), aside.content.map(function (content, i) {\n      return __jsx(\"ul\", {\n        className: \"sidebar-links sidebar-group-items\",\n        key: i + 'option',\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 115,\n          columnNumber: 25\n        }\n      }, __jsx(\"li\", {\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 116,\n          columnNumber: 27\n        }\n      }, __jsx(\"a\", {\n        href: \"#\".concat(content.slug),\n        className: \"sidebar-link\",\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 117,\n          columnNumber: 29\n        }\n      }, content.name)));\n    }));\n  }))))), __jsx(\"main\", {\n    className: \"page\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 134,\n      columnNumber: 7\n    }\n  }, __jsx(\"div\", {\n    className: \"theme-default-content content__default\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 135,\n      columnNumber: 9\n    }\n  }, props.children)));\n}\n\n_s(blogLayout, \"qV1mtfM2fjcqS+QRhZwG0vvhG2w=\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (blogLayout);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9sYXlvdXQvYmxvZ0xheW91dC5qcz8zMDIwIl0sIm5hbWVzIjpbImJsb2dMYXlvdXQiLCJwcm9wcyIsInVzZVN0YXRlIiwib3Blbk1lbnUiLCJzZXRPcGVuTWVudSIsInRvZ2dsZU1lbnUiLCJjb250YWluZXJDbGFzcyIsImNsYXNzTmFtZXMiLCJtZW51IiwibWFwIiwiYXNpZGUiLCJpIiwic2VjdGlvbiIsImNvbnRlbnQiLCJzbHVnIiwibmFtZSIsImNoaWxkcmVuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTQSxVQUFULENBQW9CQyxLQUFwQixFQUE0QjtBQUFBOztBQUFBOztBQUFBLGtCQUdNQyxzREFBUSxDQUFDLEtBQUQsQ0FIZDtBQUFBLE1BR25CQyxRQUhtQjtBQUFBLE1BR1RDLFdBSFM7O0FBSTFCLE1BQU1DLFVBQVUsR0FBRyxTQUFiQSxVQUFhLEdBQU07QUFDdkJELGVBQVcsQ0FBQyxDQUFDRCxRQUFGLENBQVg7QUFDRCxHQUZEOztBQUlBLE1BQUlHLGNBQWMsR0FBR0MsaURBQVUsQ0FBQztBQUM5Qix1QkFBbUIsSUFEVztBQUU5QixvQkFBZ0JKO0FBRmMsR0FBRCxDQUEvQjtBQUtBLFNBQ0U7QUFBSyxhQUFTLEVBQUVHLGNBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFRLGFBQVMsRUFBQyxRQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxXQUFPLEVBQUVELFVBQWQ7QUFBMEIsYUFBUyxFQUFDLGdCQUFwQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFDRSxTQUFLLEVBQUMsNEJBRFI7QUFFRSxtQkFBWSxNQUZkO0FBR0UsUUFBSSxFQUFDLEtBSFA7QUFJRSxXQUFPLEVBQUMsYUFKVjtBQUtFLGFBQVMsRUFBQyxNQUxaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFB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O0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDRTtBQUNFLFlBQUksYUFBTUUsT0FBTyxDQUFDQyxJQUFkLENBRE47QUFFRSxpQkFBUyxFQUFDLGNBRlo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUlHRCxPQUFPLENBQUNFLElBSlgsQ0FERixDQURGLENBREY7QUFZRCxLQWJBLENBSkgsQ0FERjtBQXFCRCxHQXRCQSxDQURILENBREYsQ0EzQ0YsQ0FERixDQTFDRixFQW1IRTtBQUFNLGFBQVMsRUFBQyxNQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxhQUFTLEVBQUMsd0NBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNPZCxLQUFLLENBQUNlLFFBRGIsQ0FERixDQW5IRixDQURGO0FBMkhEOztHQXhJUWhCLFU7O0FBMElNQSx5RUFBZiIsImZpbGUiOiIuL2xheW91dC9ibG9nTGF5b3V0LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCBDaGlsZHJlbiB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSBcImNsYXNzbmFtZXNcIjtcblxuZnVuY3Rpb24gYmxvZ0xheW91dChwcm9wcyApIHtcblxuXG4gIGNvbnN0IFtvcGVuTWVudSwgc2V0T3Blbk1lbnVdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCB0b2dnbGVNZW51ID0gKCkgPT4ge1xuICAgIHNldE9wZW5NZW51KCFvcGVuTWVudSk7XG4gIH07XG5cbiAgbGV0IGNvbnRhaW5lckNsYXNzID0gY2xhc3NOYW1lcyh7XG4gICAgXCJ0aGVtZS1jb250YWluZXJcIjogdHJ1ZSxcbiAgICBcInNpZGViYXItb3BlblwiOiBvcGVuTWVudSxcbiAgfSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y29udGFpbmVyQ2xhc3N9PlxuICAgICAgPGhlYWRlciBjbGFzc05hbWU9XCJuYXZiYXJcIj5cbiAgICAgICAgPGRpdiBvbkNsaWNrPXt0b2dnbGVNZW51fSBjbGFzc05hbWU9XCJzaWRlYmFyLWJ1dHRvblwiPlxuICAgICAgICAgIDxzdmdcbiAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgICAgICAgICAgYXJpYS1oaWRkZW49XCJ0cnVlXCJcbiAgICAgICAgICAgIHJvbGU9XCJpbWdcIlxuICAgICAgICAgICAgdmlld0JveD1cIjAgMCA0NDggNTEyXCJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImljb25cIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgIGZpbGw9XCJjdXJyZW50Q29sb3JcIlxuICAgICAgICAgICAgICBkPVwiTTQzNiAxMjRIMTJjLTYuNjI3IDAtMTItNS4zNzMtMTItMTJWODBjMC02LjYyNyA1LjM3My0xMiAxMi0xMmg0MjRjNi42MjcgMCAxMiA1LjM3MyAxMiAxMnYzMmMwIDYuNjI3LTUuMzczIDEyLTEyIDEyem0wIDE2MEgxMmMtNi42MjcgMC0xMi01LjM3My0xMi0xMnYtMzJjMC02LjYyNyA1LjM3My0xMiAxMi0xMmg0MjRjNi42MjcgMCAxMiA1LjM3MyAxMiAxMnYzMmMwIDYuNjI3LTUuMzczIDEyLTEyIDEyem0wIDE2MEgxMmMtNi42MjcgMC0xMi01LjM3My0xMi0xMnYtMzJjMC02LjYyNyA1LjM3My0xMiAxMi0xMmg0MjRjNi42MjcgMCAxMiA1LjM3MyAxMiAxMnYzMmMwIDYuNjI3LTUuMzczIDEyLTEyIDEyelwiXG4gICAgICAgICAgICA+PC9wYXRoPlxuICAgICAgICAgIDwvc3ZnPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGEgaHJlZj1cIi9cIiBjbGFzc05hbWU9XCJob21lLWxpbmsgcm91dGVyLWxpbmstYWN0aXZlXCI+XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic2l0ZS1uYW1lXCI+Skg8L3NwYW4+XG4gICAgICAgIDwvYT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaW5rc1wiPlxuICAgICAgICAgIDxuYXYgY2xhc3NOYW1lPVwibmF2LWxpbmtzIGNhbi1oaWRlXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdi1pdGVtXCI+XG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCIgYXM9e3Byb2Nlc3MuZW52LkJBQ0tFTkRfVVJMICsgXCIvXCJ9PlxuICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm5hdi1saW5rIHJvdXRlci1saW5rLWV4YWN0LWFjdGl2ZSBcIj5Ib21lPC9hPlxuICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIj5cbiAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9ibG9nXCIgYXM9e3Byb2Nlc3MuZW52LkJBQ0tFTkRfVVJMICsgXCIvYmxvZ1wifT5cbiAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJuYXYtbGluayByb3V0ZXItbGluay1leGFjdC1hY3RpdmUgXCI+QmxvZzwvYT5cbiAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdi1pdGVtXCI+XG4gICAgICAgICAgICAgIDxMaW5rXG4gICAgICAgICAgICAgICAgaHJlZj1cIi9qYXZhc2NyaXB0XCJcbiAgICAgICAgICAgICAgICBhcz17cHJvY2Vzcy5lbnYuQkFDS0VORF9VUkwgKyBcIi9qYXZhc2NyaXB0XCJ9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJuYXYtbGluayByb3V0ZXItbGluay1leGFjdC1hY3RpdmUgXCI+SlM8L2E+XG4gICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvbmF2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvaGVhZGVyPlxuICAgICAgPGFzaWRlIGNsYXNzTmFtZT1cInNpZGViYXJcIj5cbiAgICAgICAgPHVsIGNsYXNzTmFtZT1cInNpZGViYXItbGlua3NcIj5cbiAgICAgICAgICA8bGk+XG4gICAgICAgICAgICB7LyogPHNlY3Rpb24gY2xhc3NOYW1lPVwic2lkZWJhci1ncm91cCBkZXB0aC0wXCI+XG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInNpZGViYXItaGVhZGluZyBvcGVuXCI+XG4gICAgICAgICAgICAgICAgPHNwYW4+R3VpZGU8L3NwYW4+XG4gICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cInNpZGViYXItbGlua3Mgc2lkZWJhci1ncm91cC1pdGVtc1wiPlxuICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICA8YSBocmVmPVwiL2d1aWRlL1wiIGNsYXNzTmFtZT1cImFjdGl2ZSBzaWRlYmFyLWxpbmtcIj5cbiAgICAgICAgICAgICAgICAgICAgSW50cm9kdWN0aW9uXG4gICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwic2lkZWJhci1zdWItaGVhZGVyc1wiPlxuICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwic2lkZWJhci1zdWItaGVhZGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9XCIvZ3VpZGUvI2hvdy1pdC13b3Jrc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJhY3RpdmUgc2lkZWJhci1saW5rXCJcbiAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICBIb3cgSXQgV29ya3NcbiAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJzaWRlYmFyLXN1Yi1oZWFkZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiL2d1aWRlLyNmZWF0dXJlc1wiIGNsYXNzTmFtZT1cInNpZGViYXItbGlua1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgRmVhdHVyZXNcbiAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJzaWRlYmFyLXN1Yi1oZWFkZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiL2d1aWRlLyN3aHktbm90XCIgY2xhc3NOYW1lPVwic2lkZWJhci1saW5rXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICBXaHkgTm90IC4uLj9cbiAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgIDwvbGk+IFxuICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgICAgIGhyZWY9XCIvZ3VpZGUvZ2V0dGluZy1zdGFydGVkLmh0bWxcIlxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJzaWRlYmFyLWxpbmtcIlxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICBHZXR0aW5nIFN0YXJ0ZWRcbiAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgPC9zZWN0aW9uPiAqL31cbiAgICAgICAgICA8L2xpPlxuICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInNpZGViYXItZ3JvdXAgZGVwdGgtMFwiPlxuICAgICAgICAgICAgICB7cHJvcHMubWVudS5tYXAoKGFzaWRlLCBpKSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtpKydzZWN0aW9uJ30+XG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInNpZGViYXItaGVhZGluZ1wiPlxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPnthc2lkZS5zZWN0aW9ufTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICB7YXNpZGUuY29udGVudC5tYXAoKGNvbnRlbnQsIGkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cInNpZGViYXItbGlua3Mgc2lkZWJhci1ncm91cC1pdGVtc1wiIGtleT17aSsnb3B0aW9uJ30+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj17YCMke2NvbnRlbnQuc2x1Z31gfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic2lkZWJhci1saW5rXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Y29udGVudC5uYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgICA8L2xpPlxuICAgICAgICA8L3VsPlxuICAgICAgPC9hc2lkZT5cbiAgICAgIDxtYWluIGNsYXNzTmFtZT1cInBhZ2VcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aGVtZS1kZWZhdWx0LWNvbnRlbnQgY29udGVudF9fZGVmYXVsdFwiPlxuICAgICAgICAgICAgICB7cHJvcHMuY2hpbGRyZW59XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9tYWluPlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBibG9nTGF5b3V0O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./layout/blogLayout.js\n");

/***/ })

})