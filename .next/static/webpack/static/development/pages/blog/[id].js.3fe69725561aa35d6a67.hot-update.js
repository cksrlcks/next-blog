webpackHotUpdate("static/development/pages/blog/[id].js",{

/***/ "./components/postDetail.js":
/*!**********************************!*\
  !*** ./components/postDetail.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_codeRender__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/codeRender */ "./components/codeRender.js");
/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-markdown */ "./node_modules/react-markdown/lib/react-markdown.js");
/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_markdown__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _components_renderDate__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/renderDate */ "./components/renderDate.js");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
var _jsxFileName = "/Users/chanki/react/next-blog/components/postDetail.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







var Post = function Post(_ref) {
  var pageContent = _ref.pageContent;
  var _pageContent$fields = pageContent.fields,
      title = _pageContent$fields.title,
      postbody = _pageContent$fields.postbody,
      tags = _pageContent$fields.tags;
  var updatedAt = pageContent.sys.updatedAt;
  return __jsx(PostBody, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, __jsx(TitleBlock, {
    className: "title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, title), __jsx("div", {
    className: "meta",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, __jsx("div", {
    className: "date",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, __jsx(ClockIcon, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }), " ", Object(_components_renderDate__WEBPACK_IMPORTED_MODULE_5__["default"])(updatedAt)), tags && __jsx("div", {
    className: "tags",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, __jsx(TagIcon, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }), __jsx(TagsList, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, tags.map(function (tag, index) {
    return __jsx("li", {
      key: index,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20
      },
      __self: this
    }, tag);
  })))), __jsx("div", {
    className: "post-body",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, __jsx(react_markdown__WEBPACK_IMPORTED_MODULE_3___default.a, {
    source: postbody,
    renderers: {
      code: _components_codeRender__WEBPACK_IMPORTED_MODULE_2__["default"],
      link: function link(props) {
        return __jsx("a", {
          href: props.href,
          target: "_blank",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 32
          },
          __self: this
        }, props.children);
      }
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Post);
var TitleBlock = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].h1.withConfig({
  displayName: "postDetail__TitleBlock",
  componentId: "sc-1jm833q-0"
})(["font-size:3em;line-height:1.3em;letter-spacing:-0.02em;margin-bottom:1.7em;font-weight:800;word-break:keep-all;"]);
var PostBody = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div.withConfig({
  displayName: "postDetail__PostBody",
  componentId: "sc-1jm833q-1"
})(["padding:3em 1em;.meta{padding-bottom:2em;&:after{content:\"\";display:block;clear:both;}.tags{float:left;}.date{float:left;margin-right:1em;color:#8794a3;}}.post-body{padding-top:2em;border-top:1px solid #eee;}"]);
var TagsList = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].ul.withConfig({
  displayName: "postDetail__TagsList",
  componentId: "sc-1jm833q-2"
})(["display:inline-block;li{display:inline-block;margin-right:0.6em;color:#8794a3;}"]);
var TagIcon = Object(styled_components__WEBPACK_IMPORTED_MODULE_4__["default"])(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_6__["FontAwesomeIcon"]).attrs({
  icon: "tag",
  color: "#8794a3"
}).withConfig({
  displayName: "postDetail__TagIcon",
  componentId: "sc-1jm833q-3"
})(["display:inline-block;margin:0 1em 0 0.4em;opacity:0.5;"]);
var ClockIcon = Object(styled_components__WEBPACK_IMPORTED_MODULE_4__["default"])(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_6__["FontAwesomeIcon"]).attrs({
  icon: "clock",
  color: "#8794a3"
}).withConfig({
  displayName: "postDetail__ClockIcon",
  componentId: "sc-1jm833q-4"
})(["display:inline-block;margin:0 0.6em 0 0.4em;opacity:0.5;"]);

/***/ })

})
//# sourceMappingURL=[id].js.3fe69725561aa35d6a67.hot-update.js.map