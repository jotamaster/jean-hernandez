webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ \"./node_modules/classnames/index.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);\nvar _jsxFileName = \"/Users/jeanhernandez/Documents/personal/next/gh-pages-app/pages/index.js\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\nfunction Index() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false),\n      openMenu = _useState[0],\n      setOpenMenu = _useState[1];\n\n  var handleSlider = function handleSlider() {\n    statusImage = !statusImage;\n\n    if (statusImage) {\n      if (true) {\n        document.getElementById('slider');\n        document.getElementById('slider').style.backgroundImage = \"url('https://66.media.tumblr.com/0331e318ec15f4515b9316a445125400/5e773b75fc80fa0d-9e/s640x960/1088c9370afbbb9f36454e16fc14df20e7e57083.png')\";\n      }\n    } else {\n      if (true) {\n        document.getElementById('slider').style.backgroundImage = \"url('https://i.pinimg.com/564x/55/3a/12/553a12d8ba7860bcddfb4186cf0c99dd.jpg')\";\n      }\n    }\n\n    setTimeout(function () {\n      handleSlider();\n    }, 8000);\n  };\n\n  var statusImage = true;\n  handleSlider();\n\n  var toggleMenu = function toggleMenu() {\n    setOpenMenu(!openMenu);\n  };\n\n  var containerClass = classnames__WEBPACK_IMPORTED_MODULE_1___default()({\n    'personal': true\n  });\n  var btnClass = classnames__WEBPACK_IMPORTED_MODULE_1___default()({\n    'toggle': true,\n    'active': openMenu,\n    'openMenu': openMenu\n  });\n  return __jsx(\"div\", {\n    className: containerClass,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 44,\n      columnNumber: 2\n    }\n  }, __jsx(\"a\", {\n    className: btnClass,\n    onClick: function onClick() {\n      return toggleMenu();\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 45,\n      columnNumber: 7\n    }\n  }, __jsx(\"i\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 46,\n      columnNumber: 7\n    }\n  })), __jsx(\"div\", {\n    className: \"sectionMenu\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 48,\n      columnNumber: 4\n    }\n  }, __jsx(\"div\", {\n    className: \"headerMenu\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 49,\n      columnNumber: 5\n    }\n  }, __jsx(\"img\", {\n    src: \"https://i.pinimg.com/564x/23/e3/95/23e3955dec33e9b4f4a1db30d1844216.jpg\",\n    alt: \"personal photography\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 50,\n      columnNumber: 6\n    }\n  }), __jsx(\"h3\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 54,\n      columnNumber: 6\n    }\n  }, \"Jean Hern\\xE1ndez \", statusImage), __jsx(\"div\", {\n    className: \"menu\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 55,\n      columnNumber: 11\n    }\n  }, __jsx(\"div\", {\n    className: \"item\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 56,\n      columnNumber: 11\n    }\n  }, __jsx(\"p\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 57,\n      columnNumber: 13\n    }\n  }, \"Home\")), __jsx(\"div\", {\n    className: \"item\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 59,\n      columnNumber: 11\n    }\n  }, __jsx(\"p\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 60,\n      columnNumber: 13\n    }\n  }, \"Blog\"))))), __jsx(\"div\", {\n    id: \"slider\",\n    className: \"sectionImages\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 66,\n      columnNumber: 4\n    }\n  }), __jsx(\"div\", {\n    className: \"sectionDesc\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 68,\n      columnNumber: 4\n    }\n  }, __jsx(\"div\", {\n    className: \"desc\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 69,\n      columnNumber: 5\n    }\n  }, __jsx(\"p\", {\n    className: \"padding\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 70,\n      columnNumber: 6\n    }\n  }), __jsx(\"p\", {\n    className: \"preTitle\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 71,\n      columnNumber: 5\n    }\n  }, \"Hello! I'm \", openMenu), __jsx(\"h3\", {\n    className: \"fontTitle\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 72,\n      columnNumber: 6\n    }\n  }, \"Jean Hern\\xE1ndez\"), __jsx(\"p\", {\n    className: \"titleDesc\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 73,\n      columnNumber: 6\n    }\n  }, \"Jean Hern\\xE1ndez \", __jsx(\"span\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 74,\n      columnNumber: 22\n    }\n  }, \"un programador.\"), \" aficionados a la tecnolog\\xEDa\"), __jsx(\"p\", {\n    className: \"description\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 76,\n      columnNumber: 6\n    }\n  }, \"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.\"))));\n}\n\n_s(Index, \"qV1mtfM2fjcqS+QRhZwG0vvhG2w=\");\n\n_c = Index;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Index); // import Link from 'next/link'\n// export default () => (\n//   <div>Hello World. <Link href='/about' as={ process.env.BACKEND_URL + '/about'}><a>About</a></Link></div>\n// )\n\nvar _c;\n\n$RefreshReg$(_c, \"Index\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcz80NGQ4Il0sIm5hbWVzIjpbIkluZGV4IiwidXNlU3RhdGUiLCJvcGVuTWVudSIsInNldE9wZW5NZW51IiwiaGFuZGxlU2xpZGVyIiwic3RhdHVzSW1hZ2UiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwic3R5bGUiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJzZXRUaW1lb3V0IiwidG9nZ2xlTWVudSIsImNvbnRhaW5lckNsYXNzIiwiY2xhc3NOYW1lcyIsImJ0bkNsYXNzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBOztBQUVBLFNBQVNBLEtBQVQsR0FBaUI7QUFBQTs7QUFBQSxrQkFDaUJDLHNEQUFRLENBQUMsS0FBRCxDQUR6QjtBQUFBLE1BQ1JDLFFBRFE7QUFBQSxNQUNFQyxXQURGOztBQUlmLE1BQU1DLFlBQVksR0FBRyxTQUFmQSxZQUFlLEdBQU07QUFDM0JDLGVBQVcsR0FBRyxDQUFDQSxXQUFmOztBQUNBLFFBQUlBLFdBQUosRUFBaUI7QUFDaEIsZ0JBQW1DO0FBQ2xDQyxnQkFBUSxDQUFDQyxjQUFULENBQXdCLFFBQXhCO0FBQ0FELGdCQUFRLENBQUNDLGNBQVQsQ0FBd0IsUUFBeEIsRUFBa0NDLEtBQWxDLENBQXdDQyxlQUF4QyxHQUNDLCtJQUREO0FBRUE7QUFDRCxLQU5ELE1BTU87QUFDTixnQkFBbUM7QUFDbENILGdCQUFRLENBQUNDLGNBQVQsQ0FBd0IsUUFBeEIsRUFBa0NDLEtBQWxDLENBQXdDQyxlQUF4QyxHQUNDLGdGQUREO0FBRUE7QUFDRDs7QUFDREMsY0FBVSxDQUFDLFlBQU07QUFDaEJOLGtCQUFZO0FBQ1osS0FGUyxFQUVQLElBRk8sQ0FBVjtBQUdBLEdBakJBOztBQW1CRCxNQUFJQyxXQUFXLEdBQUcsSUFBbEI7QUFDQ0QsY0FBWTs7QUFFVixNQUFNTyxVQUFVLEdBQUcsU0FBYkEsVUFBYSxHQUFLO0FBQ3RCUixlQUFXLENBQUMsQ0FBQ0QsUUFBRixDQUFYO0FBQ0QsR0FGRDs7QUFJSCxNQUFJVSxjQUFjLEdBQUdDLGlEQUFVLENBQUM7QUFDN0IsZ0JBQVc7QUFEa0IsR0FBRCxDQUEvQjtBQUdDLE1BQUlDLFFBQVEsR0FBR0QsaURBQVUsQ0FBQztBQUN4QixjQUFTLElBRGU7QUFFeEIsY0FBVVgsUUFGYztBQUd4QixnQkFBWUE7QUFIWSxHQUFELENBQXpCO0FBTUQsU0FDQTtBQUFLLGFBQVMsRUFBRVUsY0FBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNLO0FBQUcsYUFBUyxFQUFFRSxRQUFkO0FBQXdCLFdBQU8sRUFBRTtBQUFBLGFBQUtILFVBQVUsRUFBZjtBQUFBLEtBQWpDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREEsQ0FETCxFQUlFO0FBQUssYUFBUyxFQUFDLGFBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNDO0FBQUssYUFBUyxFQUFDLFlBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNDO0FBQ0MsT0FBRyxFQUFDLHlFQURMO0FBRUMsT0FBRyxFQUFDLHNCQUZMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERCxFQUtDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMkJBQW9CTixXQUFwQixDQUxELEVBTU07QUFBSyxhQUFTLEVBQUMsTUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0E7QUFBSyxhQUFTLEVBQUMsTUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLENBREEsRUFJQTtBQUFLLGFBQVMsRUFBQyxNQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsQ0FKQSxDQU5OLENBREQsQ0FKRixFQXNCRTtBQUFLLE1BQUUsRUFBQyxRQUFSO0FBQWlCLGFBQVMsRUFBQyxlQUEzQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBdEJGLEVBd0JFO0FBQUssYUFBUyxFQUFDLGFBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNDO0FBQUssYUFBUyxFQUFDLE1BQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNDO0FBQUcsYUFBUyxFQUFDLFNBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURELEVBRUE7QUFBRyxhQUFTLEVBQUMsVUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUFvQ0gsUUFBcEMsQ0FGQSxFQUdDO0FBQUksYUFBUyxFQUFDLFdBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFIRCxFQUlDO0FBQUcsYUFBUyxFQUFDLFdBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQkFDZ0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFEaEIsb0NBSkQsRUFPQztBQUFHLGFBQVMsRUFBQyxhQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa05BUEQsQ0FERCxDQXhCRixDQURBO0FBMENBOztHQWpGUUYsSzs7S0FBQUEsSztBQWtGTUEsb0VBQWYsRSxDQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6Ii4vcGFnZXMvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gJ2NsYXNzbmFtZXMnXG5cbmZ1bmN0aW9uIEluZGV4KCkge1xuICBjb25zdCBbb3Blbk1lbnUsIHNldE9wZW5NZW51XSA9IHVzZVN0YXRlKGZhbHNlKVxuICBcbiAgXG4gIGNvbnN0IGhhbmRsZVNsaWRlciA9ICgpID0+IHtcblx0XHRzdGF0dXNJbWFnZSA9ICFzdGF0dXNJbWFnZTtcblx0XHRpZiAoc3RhdHVzSW1hZ2UpIHtcblx0XHRcdGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuXHRcdFx0XHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2xpZGVyJyk7XG5cdFx0XHRcdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzbGlkZXInKS5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPVxuXHRcdFx0XHRcdFwidXJsKCdodHRwczovLzY2Lm1lZGlhLnR1bWJsci5jb20vMDMzMWUzMThlYzE1ZjQ1MTViOTMxNmE0NDUxMjU0MDAvNWU3NzNiNzVmYzgwZmEwZC05ZS9zNjQweDk2MC8xMDg4YzkzNzBhZmJiYjlmMzY0NTRlMTZmYzE0ZGYyMGU3ZTU3MDgzLnBuZycpXCI7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuXHRcdFx0XHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2xpZGVyJykuc3R5bGUuYmFja2dyb3VuZEltYWdlID1cblx0XHRcdFx0XHRcInVybCgnaHR0cHM6Ly9pLnBpbmltZy5jb20vNTY0eC81NS8zYS8xMi81NTNhMTJkOGJhNzg2MGJjZGRmYjQxODZjZjBjOTlkZC5qcGcnKVwiO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRzZXRUaW1lb3V0KCgpID0+IHtcblx0XHRcdGhhbmRsZVNsaWRlcigpO1xuXHRcdH0sIDgwMDApO1xuXHR9O1xuXG5cdGxldCBzdGF0dXNJbWFnZSA9IHRydWU7XG4gIGhhbmRsZVNsaWRlcigpO1xuXG4gICAgY29uc3QgdG9nZ2xlTWVudSA9ICgpID0+e1xuICAgICAgc2V0T3Blbk1lbnUoIW9wZW5NZW51KVxuICAgIH1cbiAgXG5cdGxldCBjb250YWluZXJDbGFzcyA9IGNsYXNzTmFtZXMoe1xuICAgICdwZXJzb25hbCc6dHJ1ZSxcbiAgfSlcbiAgbGV0IGJ0bkNsYXNzID0gY2xhc3NOYW1lcyh7XG4gICAgJ3RvZ2dsZSc6dHJ1ZSxcbiAgICAnYWN0aXZlJzogb3Blbk1lbnUsXG4gICAgJ29wZW5NZW51Jzogb3Blbk1lbnVcblxuICB9KVxuXHRyZXR1cm4gKFxuXHQ8ZGl2IGNsYXNzTmFtZT17Y29udGFpbmVyQ2xhc3N9PlxuICAgICAgPGEgY2xhc3NOYW1lPXtidG5DbGFzc30gb25DbGljaz17KCk9PiB0b2dnbGVNZW51KCl9ID5cbiAgICAgIDxpPjwvaT5cbiAgICAgIDwvYT5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwic2VjdGlvbk1lbnVcIj5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJoZWFkZXJNZW51XCI+XG5cdFx0XHRcdFx0PGltZ1xuXHRcdFx0XHRcdFx0c3JjPVwiaHR0cHM6Ly9pLnBpbmltZy5jb20vNTY0eC8yMy9lMy85NS8yM2UzOTU1ZGVjMzNlOWI0ZjRhMWRiMzBkMTg0NDIxNi5qcGdcIlxuXHRcdFx0XHRcdFx0YWx0PVwicGVyc29uYWwgcGhvdG9ncmFwaHlcIlxuXHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0PGgzPkplYW4gSGVybsOhbmRleiB7c3RhdHVzSW1hZ2V9PC9oMz5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lbnVcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIml0ZW1cIj5cbiAgICAgICAgICAgIDxwPkhvbWU8L3A+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpdGVtXCI+XG4gICAgICAgICAgICA8cD5CbG9nPC9wPlxuICAgICAgICAgIDwvZGl2PlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFxuXHRcdFx0PC9kaXY+XG5cdFx0XHQ8ZGl2IGlkPVwic2xpZGVyXCIgY2xhc3NOYW1lPVwic2VjdGlvbkltYWdlc1wiPlxuXHRcdFx0PC9kaXY+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInNlY3Rpb25EZXNjXCI+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZGVzY1wiPlxuXHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cInBhZGRpbmdcIiAvPlxuICAgIDxwIGNsYXNzTmFtZT1cInByZVRpdGxlXCI+SGVsbG8hIEknbSB7b3Blbk1lbnV9PC9wPlxuXHRcdFx0XHRcdDxoMyBjbGFzc05hbWU9XCJmb250VGl0bGVcIj5KZWFuIEhlcm7DoW5kZXo8L2gzPlxuXHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cInRpdGxlRGVzY1wiPlxuXHRcdFx0XHRcdFx0SmVhbiBIZXJuw6FuZGV6IDxzcGFuPnVuIHByb2dyYW1hZG9yLjwvc3Bhbj4gYWZpY2lvbmFkb3MgYSBsYSB0ZWNub2xvZ8OtYVxuXHRcdFx0XHRcdDwvcD5cblx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJkZXNjcmlwdGlvblwiPlxuXHRcdFx0XHRcdFx0VGhlcmUgYXJlIG1hbnkgdmFyaWF0aW9ucyBvZiBwYXNzYWdlcyBvZiBMb3JlbSBJcHN1bSBhdmFpbGFibGUsIGJ1dCB0aGUgbWFqb3JpdHkgaGF2ZSBzdWZmZXJlZFxuXHRcdFx0XHRcdFx0YWx0ZXJhdGlvbiBpbiBzb21lIGZvcm0sIGJ5IGluamVjdGVkIGh1bW91ciwgb3IgcmFuZG9taXNlZCB3b3JkcyB3aGljaCBkb24ndCBsb29rIGV2ZW4gc2xpZ2h0bHlcblx0XHRcdFx0XHRcdGJlbGlldmFibGUuXG5cdFx0XHRcdFx0PC9wPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvZGl2PlxuXHRcdDwvZGl2PlxuXHQpO1xufVxuZXhwb3J0IGRlZmF1bHQgSW5kZXg7XG4vLyBpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG4vLyBleHBvcnQgZGVmYXVsdCAoKSA9PiAoXG4vLyAgIDxkaXY+SGVsbG8gV29ybGQuIDxMaW5rIGhyZWY9Jy9hYm91dCcgYXM9eyBwcm9jZXNzLmVudi5CQUNLRU5EX1VSTCArICcvYWJvdXQnfT48YT5BYm91dDwvYT48L0xpbms+PC9kaXY+XG4vLyApXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

})