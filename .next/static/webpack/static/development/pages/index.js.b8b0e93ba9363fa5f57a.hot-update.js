webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/cardList.js":
/*!********************************!*\
  !*** ./components/cardList.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _components_renderDate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/renderDate */ "./components/renderDate.js");
var _jsxFileName = "/Users/chanki/react/next-blog/components/cardList.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




var CardList = function CardList(_ref) {
  var item = _ref.item;
  var _item$fields = item.fields,
      title = _item$fields.title,
      summary = _item$fields.summary,
      featuredImage = _item$fields.featuredImage;
  var _item$sys = item.sys,
      updatedAt = _item$sys.updatedAt,
      id = _item$sys.id,
      contentType = _item$sys.contentType;
  var postType = contentType.sys.id;
  var pageType = postType.replace('Post', '');
  var featuredImageUrl = featuredImage && featuredImage.fields.file.url;
  return __jsx(Card, {
    className: "grid-item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, __jsx("div", {
    className: "card-wrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, featuredImage && __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/".concat(pageType, "/[id]"),
    as: "/".concat(pageType, "/").concat(id),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, __jsx("a", {
    className: "feature-img",
    style: {
      backgroundImage: "url(" + featuredImageUrl + ")"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  })), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/".concat(pageType, "/[id]"),
    as: "/".concat(pageType, "/").concat(id),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, __jsx("a", {
    className: "content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, __jsx("h4", {
    className: "title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, title), __jsx("p", {
    className: "summary",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, summary))), __jsx("div", {
    className: "date",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, Object(_components_renderDate__WEBPACK_IMPORTED_MODULE_3__["default"])(updatedAt))));
};

/* harmony default export */ __webpack_exports__["default"] = (CardList);
var Card = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "cardList__Card",
  componentId: "sc-618xny-0"
})(["width:33.333%;box-sizing:border-box;padding:0.6em;@media (max-width:968px){width:50%;}@media (max-width:768px){width:100%;}.card-wrapper{display:block;background:#fff;height:100%;border-radius:4px;overflow:hidden;border:1px solid #eee;box-shadow:3px 3px 10px rgba(0,0,0,0.015);transition:all 0.2s ease;position:relative;&:hover{border-color:#ddd;box-shadow:3px 3px 20px rgba(0,0,0,0.035);transform:translateY(-5px)}.feature-img{width:100%;padding-top:52%;position:relative;display:block;background-position:center;background-size:cover;}.content{display:block;padding:1.2em 1.2em;box-sizing:border-box;.title{color:#223141;font-weight:500;margin-bottom:0.4em;text-overflow:ellipsis;overflow:hidden;white-space:nowrap;line-height:1.2em;}.summary{font-size:13px;color:#8794A3;line-height:1.4em;display:-webkit-box;-webkit-line-clamp:3;-webkit-box-orient:vertical;text-overflow:ellipsis;overflow:hidden;max-height:4.2em;}}.date{box-sizing:border-box;border-top:1px solid #eee;padding:1.2em;font-size:13px;color:#8794A3;}}"]);

/***/ })

})
//# sourceMappingURL=index.js.b8b0e93ba9363fa5f57a.hot-update.js.map