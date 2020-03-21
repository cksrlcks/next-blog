webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_cardList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/cardList */ "./components/cardList.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../config */ "./config.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

var _jsxFileName = "/Users/chanki/react/next-blog/pages/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;





function Home(props) {
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    var grid = document.querySelector('.grid');
    var msnry = new Masonry(grid, {
      itemSelector: '.grid-item'
    });
  }, []);
  return __jsx(CardContainer, {
    className: "grid",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, props.items.map(function (item) {
    return __jsx(_components_cardList__WEBPACK_IMPORTED_MODULE_2__["default"], {
      item: item,
      key: item.sys.id,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16
      },
      __self: this
    });
  }));
}

Home.getInitialProps = function _callee() {
  var enteries;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(_config__WEBPACK_IMPORTED_MODULE_3__["default"].getEntries());

        case 2:
          enteries = _context.sent;
          return _context.abrupt("return", enteries);

        case 4:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, null, Promise);
};

/* harmony default export */ __webpack_exports__["default"] = (Home);
var CardContainer = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div.withConfig({
  displayName: "pages__CardContainer",
  componentId: "sc-1cl0c4r-0"
})(["padding:2em 0 1em;@media (max-width:968px){padding:0;}"]);

/***/ })

})
//# sourceMappingURL=index.js.1413f5d0baf9b67ad286.hot-update.js.map