webpackHotUpdate("static/development/pages/work.js",{

/***/ "./components/postList.js":
/*!********************************!*\
  !*** ./components/postList.js ***!
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
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
var _jsxFileName = "/Users/chanki/react/next-blog/components/postList.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





var PostList = function PostList(_ref) {
  var item = _ref.item;
  var _item$fields = item.fields,
      title = _item$fields.title,
      summary = _item$fields.summary,
      featuredImage = _item$fields.featuredImage,
      tags = _item$fields.tags;
  var _item$sys = item.sys,
      updatedAt = _item$sys.updatedAt,
      id = _item$sys.id,
      contentType = _item$sys.contentType;
  var postType = contentType.sys.id;
  var pageType = postType.replace('Post', '');
  var featuredImageUrl = featuredImage && featuredImage.fields.file.url;
  return __jsx(PostItem, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, __jsx("div", {
    className: "post-item-wrapper",
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
  }, title), summary && __jsx("p", {
    className: "summary",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, summary))), __jsx("div", {
    className: "meta",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, tags && __jsx("div", {
    className: "tags",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, __jsx(TagIcon, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }), __jsx(TagsList, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, tags.map(function (tag, index) {
    return __jsx("li", {
      key: index,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29
      },
      __self: this
    }, tag);
  }))), __jsx("div", {
    className: "date",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, __jsx(ClockIcon, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }), " ", Object(_components_renderDate__WEBPACK_IMPORTED_MODULE_3__["default"])(updatedAt)))));
};

/* harmony default export */ __webpack_exports__["default"] = (PostList);
var PostItem = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].section.withConfig({
  displayName: "postList__PostItem",
  componentId: "o27xk9-0"
})(["margin:2em 0 3em;padding:0 0.6em 2em;border-bottom:1px solid #efefef;&:last-child{border-bottom:none;}.post-item-wrapper{.feature-img{width:100%;padding-top:52%;position:relative;display:block;background-position:center;background-size:cover;border-radius:4px;overflow:hidden;}.content{display:block;padding:2em 0.4em 1.5em;box-sizing:border-box;.title{font-size:1.6em;color:#223141;font-weight:700;margin-bottom:0.7em;text-overflow:ellipsis;overflow:hidden;white-space:nowrap;line-height:1.2em;}.summary{font-size:1.2em;color:#8794A3;line-height:1.4em;}}.meta{&:after{content:\"\";display:block;clear:both;}.tags{float:right;}.date{float:left;box-sizing:border-box;padding:1em 0;font-size:1em;color:#8794A3;}}}"]);
var TagsList = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].ul.withConfig({
  displayName: "postList__TagsList",
  componentId: "o27xk9-1"
})(["display:inline-block;padding:1.2em 0.6em;li{display:inline-block;margin-right:0.6em;color:#8794a3;}"]);
var TagIcon = Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["default"])(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FontAwesomeIcon"]).attrs({
  icon: "tag",
  color: "#8794a3"
}).withConfig({
  displayName: "postList__TagIcon",
  componentId: "o27xk9-2"
})(["display:inline-block;margin:0 0.2em 0 0.4em;opacity:0.5;"]);
var ClockIcon = Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["default"])(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FontAwesomeIcon"]).attrs({
  icon: "clock",
  color: "#8794a3"
}).withConfig({
  displayName: "postList__ClockIcon",
  componentId: "o27xk9-3"
})(["display:inline-block;margin:0 0.6em 0 0.4em;opacity:0.5;"]);

/***/ })

})
//# sourceMappingURL=work.js.d42b2c118be8d1f7aa1a.hot-update.js.map