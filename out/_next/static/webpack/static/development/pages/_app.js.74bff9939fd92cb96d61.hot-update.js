webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./layout/blogLayout.js":
/*!******************************!*\
  !*** ./layout/blogLayout.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ \"./node_modules/classnames/index.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);\nvar _jsxFileName = \"/Users/jeanhernandez/Documents/personal/next/gh-pages-app/layout/blogLayout.js\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\nfunction blogLayout(props) {\n  _s();\n\n  var _this = this;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false),\n      openMenu = _useState[0],\n      setOpenMenu = _useState[1];\n\n  var toggleMenu = function toggleMenu() {\n    setOpenMenu(!openMenu);\n  };\n\n  var containerClass = classnames__WEBPACK_IMPORTED_MODULE_2___default()({\n    \"theme-container\": true,\n    \"sidebar-open\": openMenu\n  });\n  return __jsx(\"div\", {\n    className: containerClass,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 5\n    }\n  }, __jsx(\"header\", {\n    className: \"navbar\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 7\n    }\n  }, __jsx(\"div\", {\n    onClick: toggleMenu,\n    className: \"sidebar-button\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 9\n    }\n  }, __jsx(\"svg\", {\n    xmlns: \"http://www.w3.org/2000/svg\",\n    \"aria-hidden\": \"true\",\n    role: \"img\",\n    viewBox: \"0 0 448 512\",\n    className: \"icon\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 11\n    }\n  }, __jsx(\"path\", {\n    fill: \"currentColor\",\n    d: \"M436 124H12c-6.627 0-12-5.373-12-12V80c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12z\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 13\n    }\n  }))), __jsx(\"a\", {\n    href: \"/\",\n    className: \"home-link router-link-active\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 9\n    }\n  }, __jsx(\"span\", {\n    className: \"site-name\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 11\n    }\n  }, \"JH\")), __jsx(\"div\", {\n    className: \"links\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 9\n    }\n  }, __jsx(\"nav\", {\n    className: \"nav-links can-hide\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 11\n    }\n  }, __jsx(\"div\", {\n    className: \"nav-item\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 40,\n      columnNumber: 13\n    }\n  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {\n    href: \"/\",\n    as: \"/\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 41,\n      columnNumber: 15\n    }\n  }, __jsx(\"a\", {\n    className: \"nav-link router-link-exact-active \",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 42,\n      columnNumber: 17\n    }\n  }, \"Home\"))), __jsx(\"div\", {\n    className: \"nav-item\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 45,\n      columnNumber: 13\n    }\n  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {\n    href: \"/blog\",\n    as: \"/blog\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 46,\n      columnNumber: 15\n    }\n  }, __jsx(\"a\", {\n    className: \"nav-link router-link-exact-active \",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 47,\n      columnNumber: 17\n    }\n  }, \"Blog\"))), __jsx(\"div\", {\n    className: \"nav-item\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 50,\n      columnNumber: 13\n    }\n  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {\n    href: \"/javascript\",\n    as: \"/javascript\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 51,\n      columnNumber: 15\n    }\n  }, __jsx(\"a\", {\n    className: \"nav-link router-link-exact-active \",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 55,\n      columnNumber: 17\n    }\n  }, \"JS\")))))), __jsx(\"aside\", {\n    className: \"sidebar\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 61,\n      columnNumber: 7\n    }\n  }, __jsx(\"ul\", {\n    className: \"sidebar-links\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 62,\n      columnNumber: 9\n    }\n  }, __jsx(\"li\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 63,\n      columnNumber: 11\n    }\n  }), __jsx(\"li\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 105,\n      columnNumber: 11\n    }\n  }, __jsx(\"section\", {\n    className: \"sidebar-group depth-0\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 106,\n      columnNumber: 13\n    }\n  }, props.menu.map(function (aside, i) {\n    return __jsx(\"div\", {\n      key: i + 'section',\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 109,\n        columnNumber: 19\n      }\n    }, __jsx(\"p\", {\n      className: \"sidebar-heading\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 110,\n        columnNumber: 21\n      }\n    }, __jsx(\"span\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 111,\n        columnNumber: 23\n      }\n    }, aside.section)), aside.content.map(function (content, i) {\n      return __jsx(\"ul\", {\n        className: \"sidebar-links sidebar-group-items\",\n        key: i + 'option',\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 115,\n          columnNumber: 25\n        }\n      }, __jsx(\"li\", {\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 116,\n          columnNumber: 27\n        }\n      }, __jsx(\"a\", {\n        href: \"#\".concat(content.slug),\n        className: \"sidebar-link\",\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 117,\n          columnNumber: 29\n        }\n      }, content.name)));\n    }));\n  }))))), __jsx(\"main\", {\n    className: \"page\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 134,\n      columnNumber: 7\n    }\n  }, \"hola\"));\n}\n\n_s(blogLayout, \"qV1mtfM2fjcqS+QRhZwG0vvhG2w=\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (blogLayout);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9sYXlvdXQvYmxvZ0xheW91dC5qcz8zMDIwIl0sIm5hbWVzIjpbImJsb2dMYXlvdXQiLCJwcm9wcyIsInVzZVN0YXRlIiwib3Blbk1lbnUiLCJzZXRPcGVuTWVudSIsInRvZ2dsZU1lbnUiLCJjb250YWluZXJDbGFzcyIsImNsYXNzTmFtZXMiLCJtZW51IiwibWFwIiwiYXNpZGUiLCJpIiwic2VjdGlvbiIsImNvbnRlbnQiLCJzbHVnIiwibmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU0EsVUFBVCxDQUFvQkMsS0FBcEIsRUFBNEI7QUFBQTs7QUFBQTs7QUFBQSxrQkFHTUMsc0RBQVEsQ0FBQyxLQUFELENBSGQ7QUFBQSxNQUduQkMsUUFIbUI7QUFBQSxNQUdUQyxXQUhTOztBQUkxQixNQUFNQyxVQUFVLEdBQUcsU0FBYkEsVUFBYSxHQUFNO0FBQ3ZCRCxlQUFXLENBQUMsQ0FBQ0QsUUFBRixDQUFYO0FBQ0QsR0FGRDs7QUFJQSxNQUFJRyxjQUFjLEdBQUdDLGlEQUFVLENBQUM7QUFDOUIsdUJBQW1CLElBRFc7QUFFOUIsb0JBQWdCSjtBQUZjLEdBQUQsQ0FBL0I7QUFLQSxTQUNFO0FBQUssYUFBUyxFQUFFRyxjQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBUSxhQUFTLEVBQUMsUUFBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssV0FBTyxFQUFFRCxVQUFkO0FBQTBCLGFBQVMsRUFBQyxnQkFBcEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQ0UsU0FBSyxFQUFDLDRCQURSO0FBRUUsbUJBQVksTUFGZDtBQUdFLFFBQUksRUFBQyxLQUhQO0FBSUUsV0FBTyxFQUFDLGFBSlY7QUFLRSxhQUFTLEVBQUMsTUFMWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFB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QUFBQTtBQUFBLFNBQ0U7QUFDRSxZQUFJLGFBQU1FLE9BQU8sQ0FBQ0MsSUFBZCxDQUROO0FBRUUsaUJBQVMsRUFBQyxjQUZaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FJR0QsT0FBTyxDQUFDRSxJQUpYLENBREYsQ0FERixDQURGO0FBWUQsS0FiQSxDQUpILENBREY7QUFxQkQsR0F0QkEsQ0FESCxDQURGLENBM0NGLENBREYsQ0ExQ0YsRUFtSEU7QUFBTSxhQUFTLEVBQUMsTUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQW5IRixDQURGO0FBeUhEOztHQXRJUWYsVTs7QUF3SU1BLHlFQUFmIiwiZmlsZSI6Ii4vbGF5b3V0L2Jsb2dMYXlvdXQuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gXCJjbGFzc25hbWVzXCI7XG5cbmZ1bmN0aW9uIGJsb2dMYXlvdXQocHJvcHMgKSB7XG5cblxuICBjb25zdCBbb3Blbk1lbnUsIHNldE9wZW5NZW51XSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgdG9nZ2xlTWVudSA9ICgpID0+IHtcbiAgICBzZXRPcGVuTWVudSghb3Blbk1lbnUpO1xuICB9O1xuXG4gIGxldCBjb250YWluZXJDbGFzcyA9IGNsYXNzTmFtZXMoe1xuICAgIFwidGhlbWUtY29udGFpbmVyXCI6IHRydWUsXG4gICAgXCJzaWRlYmFyLW9wZW5cIjogb3Blbk1lbnUsXG4gIH0pO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2NvbnRhaW5lckNsYXNzfT5cbiAgICAgIDxoZWFkZXIgY2xhc3NOYW1lPVwibmF2YmFyXCI+XG4gICAgICAgIDxkaXYgb25DbGljaz17dG9nZ2xlTWVudX0gY2xhc3NOYW1lPVwic2lkZWJhci1idXR0b25cIj5cbiAgICAgICAgICA8c3ZnXG4gICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgICAgICAgIGFyaWEtaGlkZGVuPVwidHJ1ZVwiXG4gICAgICAgICAgICByb2xlPVwiaW1nXCJcbiAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgNDQ4IDUxMlwiXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJpY29uXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICBmaWxsPVwiY3VycmVudENvbG9yXCJcbiAgICAgICAgICAgICAgZD1cIk00MzYgMTI0SDEyYy02LjYyNyAwLTEyLTUuMzczLTEyLTEyVjgwYzAtNi42MjcgNS4zNzMtMTIgMTItMTJoNDI0YzYuNjI3IDAgMTIgNS4zNzMgMTIgMTJ2MzJjMCA2LjYyNy01LjM3MyAxMi0xMiAxMnptMCAxNjBIMTJjLTYuNjI3IDAtMTItNS4zNzMtMTItMTJ2LTMyYzAtNi42MjcgNS4zNzMtMTIgMTItMTJoNDI0YzYuNjI3IDAgMTIgNS4zNzMgMTIgMTJ2MzJjMCA2LjYyNy01LjM3MyAxMi0xMiAxMnptMCAxNjBIMTJjLTYuNjI3IDAtMTItNS4zNzMtMTItMTJ2LTMyYzAtNi42MjcgNS4zNzMtMTIgMTItMTJoNDI0YzYuNjI3IDAgMTIgNS4zNzMgMTIgMTJ2MzJjMCA2LjYyNy01LjM3MyAxMi0xMiAxMnpcIlxuICAgICAgICAgICAgPjwvcGF0aD5cbiAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxhIGhyZWY9XCIvXCIgY2xhc3NOYW1lPVwiaG9tZS1saW5rIHJvdXRlci1saW5rLWFjdGl2ZVwiPlxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInNpdGUtbmFtZVwiPkpIPC9zcGFuPlxuICAgICAgICA8L2E+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGlua3NcIj5cbiAgICAgICAgICA8bmF2IGNsYXNzTmFtZT1cIm5hdi1saW5rcyBjYW4taGlkZVwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXYtaXRlbVwiPlxuICAgICAgICAgICAgICA8TGluayBocmVmPVwiL1wiIGFzPXtwcm9jZXNzLmVudi5CQUNLRU5EX1VSTCArIFwiL1wifT5cbiAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJuYXYtbGluayByb3V0ZXItbGluay1leGFjdC1hY3RpdmUgXCI+SG9tZTwvYT5cbiAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdi1pdGVtXCI+XG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvYmxvZ1wiIGFzPXtwcm9jZXNzLmVudi5CQUNLRU5EX1VSTCArIFwiL2Jsb2dcIn0+XG4gICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibmF2LWxpbmsgcm91dGVyLWxpbmstZXhhY3QtYWN0aXZlIFwiPkJsb2c8L2E+XG4gICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXYtaXRlbVwiPlxuICAgICAgICAgICAgICA8TGlua1xuICAgICAgICAgICAgICAgIGhyZWY9XCIvamF2YXNjcmlwdFwiXG4gICAgICAgICAgICAgICAgYXM9e3Byb2Nlc3MuZW52LkJBQ0tFTkRfVVJMICsgXCIvamF2YXNjcmlwdFwifVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibmF2LWxpbmsgcm91dGVyLWxpbmstZXhhY3QtYWN0aXZlIFwiPkpTPC9hPlxuICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L25hdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2hlYWRlcj5cbiAgICAgIDxhc2lkZSBjbGFzc05hbWU9XCJzaWRlYmFyXCI+XG4gICAgICAgIDx1bCBjbGFzc05hbWU9XCJzaWRlYmFyLWxpbmtzXCI+XG4gICAgICAgICAgPGxpPlxuICAgICAgICAgICAgey8qIDxzZWN0aW9uIGNsYXNzTmFtZT1cInNpZGViYXItZ3JvdXAgZGVwdGgtMFwiPlxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJzaWRlYmFyLWhlYWRpbmcgb3BlblwiPlxuICAgICAgICAgICAgICAgIDxzcGFuPkd1aWRlPC9zcGFuPlxuICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJzaWRlYmFyLWxpbmtzIHNpZGViYXItZ3JvdXAtaXRlbXNcIj5cbiAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIi9ndWlkZS9cIiBjbGFzc05hbWU9XCJhY3RpdmUgc2lkZWJhci1saW5rXCI+XG4gICAgICAgICAgICAgICAgICAgIEludHJvZHVjdGlvblxuICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cInNpZGViYXItc3ViLWhlYWRlcnNcIj5cbiAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInNpZGViYXItc3ViLWhlYWRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgICAgICAgICBocmVmPVwiL2d1aWRlLyNob3ctaXQtd29ya3NcIlxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYWN0aXZlIHNpZGViYXItbGlua1wiXG4gICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgSG93IEl0IFdvcmtzXG4gICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwic2lkZWJhci1zdWItaGVhZGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIi9ndWlkZS8jZmVhdHVyZXNcIiBjbGFzc05hbWU9XCJzaWRlYmFyLWxpbmtcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIEZlYXR1cmVzXG4gICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwic2lkZWJhci1zdWItaGVhZGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIi9ndWlkZS8jd2h5LW5vdFwiIGNsYXNzTmFtZT1cInNpZGViYXItbGlua1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgV2h5IE5vdCAuLi4/XG4gICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICA8L2xpPiBcbiAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgICAgICBocmVmPVwiL2d1aWRlL2dldHRpbmctc3RhcnRlZC5odG1sXCJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic2lkZWJhci1saW5rXCJcbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgR2V0dGluZyBTdGFydGVkXG4gICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgIDwvc2VjdGlvbj4gKi99XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgICA8bGk+XG4gICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJzaWRlYmFyLWdyb3VwIGRlcHRoLTBcIj5cbiAgICAgICAgICAgICAge3Byb3BzLm1lbnUubWFwKChhc2lkZSwgaSkgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICA8ZGl2IGtleT17aSsnc2VjdGlvbid9PlxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJzaWRlYmFyLWhlYWRpbmdcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj57YXNpZGUuc2VjdGlvbn08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAge2FzaWRlLmNvbnRlbnQubWFwKChjb250ZW50LCBpKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJzaWRlYmFyLWxpbmtzIHNpZGViYXItZ3JvdXAtaXRlbXNcIiBrZXk9e2krJ29wdGlvbid9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9e2AjJHtjb250ZW50LnNsdWd9YH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInNpZGViYXItbGlua1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2NvbnRlbnQubmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgPC91bD5cbiAgICAgIDwvYXNpZGU+XG4gICAgICA8bWFpbiBjbGFzc05hbWU9XCJwYWdlXCI+XG4gICAgICAgICAgICAgIGhvbGFcbiAgICAgIDwvbWFpbj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgYmxvZ0xheW91dDtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./layout/blogLayout.js\n");

/***/ })

})