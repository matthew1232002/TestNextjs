webpackHotUpdate_N_E("pages/[postId]",{

/***/ "./components/api/api.ts":
/*!*******************************!*\
  !*** ./components/api/api.ts ***!
  \*******************************/
/*! exports provided: getAllPosts, getSinglePost, addQuote, addComment, getAllComments */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllPosts", function() { return getAllPosts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSinglePost", function() { return getSinglePost; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addQuote", function() { return addQuote; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addComment", function() { return addComment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllComments", function() { return getAllComments; });
/* harmony import */ var C_Users_Lazarev_WebstormProjects_Test_task_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_Lazarev_WebstormProjects_Test_task_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_Lazarev_WebstormProjects_Test_task_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_Lazarev_WebstormProjects_Test_task_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var C_Users_Lazarev_WebstormProjects_Test_task_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");




function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(C_Users_Lazarev_WebstormProjects_Test_task_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var FIREBASE_DOMAIN = 'https://react-2faef-default-rtdb.firebaseio.com/';
function getAllPosts() {
  return _getAllPosts.apply(this, arguments);
}

function _getAllPosts() {
  _getAllPosts = Object(C_Users_Lazarev_WebstormProjects_Test_task_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/C_Users_Lazarev_WebstormProjects_Test_task_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
    var response, data, transformedQuotes, key, quoteObj;
    return C_Users_Lazarev_WebstormProjects_Test_task_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return fetch("".concat(FIREBASE_DOMAIN, "/posts.json"));

          case 2:
            response = _context.sent;
            _context.next = 5;
            return response.json();

          case 5:
            data = _context.sent;
            transformedQuotes = [];

            for (key in data) {
              quoteObj = _objectSpread({
                id: key
              }, data[key]);
              transformedQuotes.push(quoteObj);
            }

            return _context.abrupt("return", transformedQuotes);

          case 9:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _getAllPosts.apply(this, arguments);
}

function getSinglePost(_x) {
  return _getSinglePost.apply(this, arguments);
}

function _getSinglePost() {
  _getSinglePost = Object(C_Users_Lazarev_WebstormProjects_Test_task_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/C_Users_Lazarev_WebstormProjects_Test_task_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(postId) {
    var response, data, loadedQuote;
    return C_Users_Lazarev_WebstormProjects_Test_task_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return fetch("".concat(FIREBASE_DOMAIN, "/posts/").concat(postId, ".json"));

          case 2:
            response = _context2.sent;
            _context2.next = 5;
            return response.json();

          case 5:
            data = _context2.sent;
            loadedQuote = _objectSpread({
              id: postId
            }, data);
            return _context2.abrupt("return", loadedQuote);

          case 8:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _getSinglePost.apply(this, arguments);
}

function addQuote(_x2) {
  return _addQuote.apply(this, arguments);
}

function _addQuote() {
  _addQuote = Object(C_Users_Lazarev_WebstormProjects_Test_task_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/C_Users_Lazarev_WebstormProjects_Test_task_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3(quoteData) {
    return C_Users_Lazarev_WebstormProjects_Test_task_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return fetch("".concat(FIREBASE_DOMAIN, "/posts.json"), {
              method: 'POST',
              body: JSON.stringify(quoteData),
              headers: {
                'Content-Type': 'application/json'
              }
            });

          case 2:
            return _context3.abrupt("return", null);

          case 3:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));
  return _addQuote.apply(this, arguments);
}

function addComment(_x3) {
  return _addComment.apply(this, arguments);
}

function _addComment() {
  _addComment = Object(C_Users_Lazarev_WebstormProjects_Test_task_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/C_Users_Lazarev_WebstormProjects_Test_task_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4(requestData) {
    var response, data;
    return C_Users_Lazarev_WebstormProjects_Test_task_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.next = 2;
            return fetch("".concat(FIREBASE_DOMAIN, "/comments/").concat(requestData.postId, ".json"), {
              method: 'POST',
              body: JSON.stringify(requestData.commentData),
              headers: {
                'Content-Type': 'application/json'
              }
            });

          case 2:
            response = _context4.sent;
            _context4.next = 5;
            return response.json();

          case 5:
            data = _context4.sent;
            return _context4.abrupt("return", {
              commentId: data.id
            });

          case 7:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));
  return _addComment.apply(this, arguments);
}

function getAllComments(_x4) {
  return _getAllComments.apply(this, arguments);
}

function _getAllComments() {
  _getAllComments = Object(C_Users_Lazarev_WebstormProjects_Test_task_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/C_Users_Lazarev_WebstormProjects_Test_task_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee5(postId) {
    var response, data, transformedComments, key, commentObj;
    return C_Users_Lazarev_WebstormProjects_Test_task_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.next = 2;
            return fetch("".concat(FIREBASE_DOMAIN, "/comments/").concat(postId, ".json"));

          case 2:
            response = _context5.sent;
            _context5.next = 5;
            return response.json();

          case 5:
            data = _context5.sent;
            transformedComments = [];

            for (key in data) {
              commentObj = _objectSpread({
                id: key
              }, data[key]);
              transformedComments.push(commentObj);
            }

            return _context5.abrupt("return", transformedComments);

          case 9:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));
  return _getAllComments.apply(this, arguments);
}

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ }),

/***/ "./components/comments/CommentItem.tsx":
/*!*********************************************!*\
  !*** ./components/comments/CommentItem.tsx ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_Lazarev_WebstormProjects_Test_task_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");



var _jsxFileName = "C:\\Users\\Lazarev\\WebstormProjects\\Test task\\components\\comments\\CommentItem.tsx",
    _this = undefined;

function _templateObject() {
  var data = Object(C_Users_Lazarev_WebstormProjects_Test_task_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n      margin: 1rem 0;\n      color: #4a5555;\n      font-size: 1.25rem;\n      padding-bottom: 0.5rem;\n      border-bottom: 2px solid teal;\n    "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}



var StyledComment = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].li(_templateObject());
_c = StyledComment;

var CommentItem = function CommentItem(props) {
  var commentText = props.text;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(StyledComment, {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      children: commentText
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 13
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 17,
    columnNumber: 9
  }, _this);
};

_c2 = CommentItem;
/* harmony default export */ __webpack_exports__["default"] = (CommentItem);

var _c, _c2;

$RefreshReg$(_c, "StyledComment");
$RefreshReg$(_c2, "CommentItem");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ }),

/***/ "./components/comments/CommentsList.tsx":
/*!**********************************************!*\
  !*** ./components/comments/CommentsList.tsx ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_Lazarev_WebstormProjects_Test_task_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _CommentItem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./CommentItem */ "./components/comments/CommentItem.tsx");



var _jsxFileName = "C:\\Users\\Lazarev\\WebstormProjects\\Test task\\components\\comments\\CommentsList.tsx",
    _this = undefined;

function _templateObject() {
  var data = Object(C_Users_Lazarev_WebstormProjects_Test_task_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n  list-style: none;\n  margin: 2.5rem 0;\n  padding: 0;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}




var StyledCommentsList = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].ul(_templateObject());
_c = StyledCommentsList;

var CommentsList = function CommentsList(props) {
  var commentsList = props.comments;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(StyledCommentsList, {
    children: commentsList.map(function (comment) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_CommentItem__WEBPACK_IMPORTED_MODULE_4__["default"], {
        text: comment.text
      }, comment.id, false, {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 17
      }, _this);
    })
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 16,
    columnNumber: 9
  }, _this);
};

_c2 = CommentsList;
/* harmony default export */ __webpack_exports__["default"] = (CommentsList);

var _c, _c2;

$RefreshReg$(_c, "StyledCommentsList");
$RefreshReg$(_c2, "CommentsList");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9hcGkvYXBpLnRzIiwid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2NvbW1lbnRzL0NvbW1lbnRJdGVtLnRzeCIsIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jb21tZW50cy9Db21tZW50c0xpc3QudHN4Il0sIm5hbWVzIjpbIkZJUkVCQVNFX0RPTUFJTiIsImdldEFsbFBvc3RzIiwiZmV0Y2giLCJyZXNwb25zZSIsImpzb24iLCJkYXRhIiwidHJhbnNmb3JtZWRRdW90ZXMiLCJrZXkiLCJxdW90ZU9iaiIsImlkIiwicHVzaCIsImdldFNpbmdsZVBvc3QiLCJwb3N0SWQiLCJsb2FkZWRRdW90ZSIsImFkZFF1b3RlIiwicXVvdGVEYXRhIiwibWV0aG9kIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJoZWFkZXJzIiwiYWRkQ29tbWVudCIsInJlcXVlc3REYXRhIiwiY29tbWVudERhdGEiLCJjb21tZW50SWQiLCJnZXRBbGxDb21tZW50cyIsInRyYW5zZm9ybWVkQ29tbWVudHMiLCJjb21tZW50T2JqIiwiU3R5bGVkQ29tbWVudCIsInN0eWxlZCIsImxpIiwiQ29tbWVudEl0ZW0iLCJwcm9wcyIsImNvbW1lbnRUZXh0IiwidGV4dCIsIlN0eWxlZENvbW1lbnRzTGlzdCIsInVsIiwiQ29tbWVudHNMaXN0IiwiY29tbWVudHNMaXN0IiwiY29tbWVudHMiLCJtYXAiLCJjb21tZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBR0EsSUFBTUEsZUFBZSxHQUFHLGtEQUF4QjtBQUVPLFNBQWVDLFdBQXRCO0FBQUE7QUFBQTs7O2dUQUFPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBQ29CQyxLQUFLLFdBQUlGLGVBQUosaUJBRHpCOztBQUFBO0FBQ0dHLG9CQURIO0FBQUE7QUFBQSxtQkFFZ0JBLFFBQVEsQ0FBQ0MsSUFBVCxFQUZoQjs7QUFBQTtBQUVHQyxnQkFGSDtBQUlHQyw2QkFKSCxHQUl1QixFQUp2Qjs7QUFNSCxpQkFBV0MsR0FBWCxJQUFrQkYsSUFBbEIsRUFBd0I7QUFDZEcsc0JBRGM7QUFFaEJDLGtCQUFFLEVBQUVGO0FBRlksaUJBR2JGLElBQUksQ0FBQ0UsR0FBRCxDQUhTO0FBTXBCRCwrQkFBaUIsQ0FBQ0ksSUFBbEIsQ0FBdUJGLFFBQXZCO0FBQ0g7O0FBYkUsNkNBZUlGLGlCQWZKOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEc7Ozs7QUFrQkEsU0FBZUssYUFBdEI7QUFBQTtBQUFBOzs7a1RBQU8sa0JBQTZCQyxNQUE3QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUNvQlYsS0FBSyxXQUFJRixlQUFKLG9CQUE2QlksTUFBN0IsV0FEekI7O0FBQUE7QUFDR1Qsb0JBREg7QUFBQTtBQUFBLG1CQUUwQkEsUUFBUSxDQUFDQyxJQUFULEVBRjFCOztBQUFBO0FBRUdDLGdCQUZIO0FBSUdRLHVCQUpIO0FBS0NKLGdCQUFFLEVBQUVHO0FBTEwsZUFNSVAsSUFOSjtBQUFBLDhDQVNJUSxXQVRKOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEc7Ozs7QUFZQSxTQUFlQyxRQUF0QjtBQUFBO0FBQUE7Ozs2U0FBTyxrQkFBd0JDLFNBQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUNHYixLQUFLLFdBQUlGLGVBQUosa0JBQWtDO0FBQ3pDZ0Isb0JBQU0sRUFBRSxNQURpQztBQUV6Q0Msa0JBQUksRUFBRUMsSUFBSSxDQUFDQyxTQUFMLENBQWVKLFNBQWYsQ0FGbUM7QUFHekNLLHFCQUFPLEVBQUU7QUFDTCxnQ0FBZ0I7QUFEWDtBQUhnQyxhQUFsQyxDQURSOztBQUFBO0FBQUEsOENBU0ksSUFUSjs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHOzs7O0FBWUEsU0FBZUMsVUFBdEI7QUFBQTtBQUFBOzs7K1NBQU8sa0JBQTBCQyxXQUExQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUNvQnBCLEtBQUssV0FBSUYsZUFBSix1QkFBZ0NzQixXQUFXLENBQUNWLE1BQTVDLFlBQTJEO0FBQ25GSSxvQkFBTSxFQUFFLE1BRDJFO0FBRW5GQyxrQkFBSSxFQUFFQyxJQUFJLENBQUNDLFNBQUwsQ0FBZUcsV0FBVyxDQUFDQyxXQUEzQixDQUY2RTtBQUduRkgscUJBQU8sRUFBRTtBQUNMLGdDQUFnQjtBQURYO0FBSDBFLGFBQTNELENBRHpCOztBQUFBO0FBQ0dqQixvQkFESDtBQUFBO0FBQUEsbUJBUThCQSxRQUFRLENBQUNDLElBQVQsRUFSOUI7O0FBQUE7QUFRR0MsZ0JBUkg7QUFBQSw4Q0FXSTtBQUFDbUIsdUJBQVMsRUFBRW5CLElBQUksQ0FBQ0k7QUFBakIsYUFYSjs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHOzs7O0FBY0EsU0FBZWdCLGNBQXRCO0FBQUE7QUFBQTs7O21UQUFPLGtCQUE4QmIsTUFBOUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFDb0JWLEtBQUssV0FBSUYsZUFBSix1QkFBZ0NZLE1BQWhDLFdBRHpCOztBQUFBO0FBQ0dULG9CQURIO0FBQUE7QUFBQSxtQkFHZ0NBLFFBQVEsQ0FBQ0MsSUFBVCxFQUhoQzs7QUFBQTtBQUdHQyxnQkFISDtBQUtHcUIsK0JBTEgsR0FLeUIsRUFMekI7O0FBT0gsaUJBQVduQixHQUFYLElBQWtCRixJQUFsQixFQUF3QjtBQUNkc0Isd0JBRGM7QUFFaEJsQixrQkFBRSxFQUFFRjtBQUZZLGlCQUdiRixJQUFJLENBQUNFLEdBQUQsQ0FIUztBQU1wQm1CLGlDQUFtQixDQUFDaEIsSUFBcEIsQ0FBeUJpQixVQUF6QjtBQUNIOztBQWRFLDhDQWdCSUQsbUJBaEJKOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3RFA7QUFFQTtBQUVBLElBQU1FLGFBQWEsR0FBR0MseURBQU0sQ0FBQ0MsRUFBVixtQkFBbkI7S0FBTUYsYTs7QUFRTixJQUFNRyxXQUF1QyxHQUFHLFNBQTFDQSxXQUEwQyxDQUFDQyxLQUFELEVBQVc7QUFDdkQsTUFBTUMsV0FBbUIsR0FBR0QsS0FBSyxDQUFDRSxJQUFsQztBQUVBLHNCQUNJLHFFQUFDLGFBQUQ7QUFBQSwyQkFDSTtBQUFBLGdCQUFJRDtBQUFKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREo7QUFLSCxDQVJEOztNQUFNRixXO0FBVVNBLDBFQUFmOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3RCQTtBQUNBO0FBQ0E7QUFHQSxJQUFNSSxrQkFBa0IsR0FBR04seURBQU0sQ0FBQ08sRUFBVixtQkFBeEI7S0FBTUQsa0I7O0FBTU4sSUFBTUUsWUFBWSxHQUFHLFNBQWZBLFlBQWUsQ0FBQ0wsS0FBRCxFQUFXO0FBQzVCLE1BQU1NLFlBQTRCLEdBQUdOLEtBQUssQ0FBQ08sUUFBM0M7QUFFQSxzQkFDSSxxRUFBQyxrQkFBRDtBQUFBLGNBQ0tELFlBQVksQ0FBQ0UsR0FBYixDQUFpQixVQUFDQyxPQUFEO0FBQUEsMEJBQ2QscUVBQUMsb0RBQUQ7QUFBOEIsWUFBSSxFQUFFQSxPQUFPLENBQUNQO0FBQTVDLFNBQWtCTyxPQUFPLENBQUNoQyxFQUExQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRGM7QUFBQSxLQUFqQjtBQURMO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FESjtBQU9ILENBVkQ7O01BQU00QixZO0FBWVNBLDJFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL1twb3N0SWRdLmJkYzczMWNhN2Y4MDM1ZjdkMmFjLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1Bvc3RNb2RlbH0gZnJvbSBcIi4uLy4uL21vZGVscy9Qb3N0Lm1vZGVsXCI7XHJcbmltcG9ydCB7Q29tbWVudE1vZGVsfSBmcm9tIFwiLi4vLi4vbW9kZWxzL0NvbW1lbnQubW9kZWxcIjtcclxuXHJcbmNvbnN0IEZJUkVCQVNFX0RPTUFJTiA9ICdodHRwczovL3JlYWN0LTJmYWVmLWRlZmF1bHQtcnRkYi5maXJlYmFzZWlvLmNvbS8nO1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEFsbFBvc3RzKCkge1xyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgJHtGSVJFQkFTRV9ET01BSU59L3Bvc3RzLmpzb25gKTtcclxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcblxyXG4gICAgY29uc3QgdHJhbnNmb3JtZWRRdW90ZXMgPSBbXTtcclxuXHJcbiAgICBmb3IgKGNvbnN0IGtleSBpbiBkYXRhKSB7XHJcbiAgICAgICAgY29uc3QgcXVvdGVPYmogPSB7XHJcbiAgICAgICAgICAgIGlkOiBrZXksXHJcbiAgICAgICAgICAgIC4uLmRhdGFba2V5XSxcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICB0cmFuc2Zvcm1lZFF1b3Rlcy5wdXNoKHF1b3RlT2JqKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdHJhbnNmb3JtZWRRdW90ZXM7XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTaW5nbGVQb3N0KHBvc3RJZCkge1xyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgJHtGSVJFQkFTRV9ET01BSU59L3Bvc3RzLyR7cG9zdElkfS5qc29uYCk7XHJcbiAgICBjb25zdCBkYXRhOlBvc3RNb2RlbCA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuXHJcbiAgICBjb25zdCBsb2FkZWRRdW90ZSA9IHtcclxuICAgICAgICBpZDogcG9zdElkLFxyXG4gICAgICAgIC4uLmRhdGFcclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIGxvYWRlZFF1b3RlO1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gYWRkUXVvdGUocXVvdGVEYXRhKSB7XHJcbiAgICBhd2FpdCBmZXRjaChgJHtGSVJFQkFTRV9ET01BSU59L3Bvc3RzLmpzb25gLCB7XHJcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkocXVvdGVEYXRhKSxcclxuICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgfSxcclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiBudWxsO1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gYWRkQ29tbWVudChyZXF1ZXN0RGF0YSkge1xyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgJHtGSVJFQkFTRV9ET01BSU59L2NvbW1lbnRzLyR7cmVxdWVzdERhdGEucG9zdElkfS5qc29uYCwge1xyXG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHJlcXVlc3REYXRhLmNvbW1lbnREYXRhKSxcclxuICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgfSxcclxuICAgIH0pO1xyXG4gICAgY29uc3QgZGF0YTogQ29tbWVudE1vZGVsID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG5cclxuXHJcbiAgICByZXR1cm4ge2NvbW1lbnRJZDogZGF0YS5pZH07XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRBbGxDb21tZW50cyhwb3N0SWQ6IHN0cmluZykge1xyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgJHtGSVJFQkFTRV9ET01BSU59L2NvbW1lbnRzLyR7cG9zdElkfS5qc29uYCk7XHJcblxyXG4gICAgY29uc3QgZGF0YTogQ29tbWVudE1vZGVsW10gPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcblxyXG4gICAgY29uc3QgdHJhbnNmb3JtZWRDb21tZW50cyA9IFtdO1xyXG5cclxuICAgIGZvciAoY29uc3Qga2V5IGluIGRhdGEpIHtcclxuICAgICAgICBjb25zdCBjb21tZW50T2JqID0ge1xyXG4gICAgICAgICAgICBpZDoga2V5LFxyXG4gICAgICAgICAgICAuLi5kYXRhW2tleV0sXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgdHJhbnNmb3JtZWRDb21tZW50cy5wdXNoKGNvbW1lbnRPYmopO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB0cmFuc2Zvcm1lZENvbW1lbnRzO1xyXG59XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcblxyXG5jb25zdCBTdHlsZWRDb21tZW50ID0gc3R5bGVkLmxpYFxyXG4gICAgICBtYXJnaW46IDFyZW0gMDtcclxuICAgICAgY29sb3I6ICM0YTU1NTU7XHJcbiAgICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcclxuICAgICAgcGFkZGluZy1ib3R0b206IDAuNXJlbTtcclxuICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHRlYWw7XHJcbiAgICBgO1xyXG5cclxuY29uc3QgQ29tbWVudEl0ZW06IFJlYWN0LkZDPHsgdGV4dDogc3RyaW5nIH0+ID0gKHByb3BzKSA9PiB7XHJcbiAgICBjb25zdCBjb21tZW50VGV4dDogc3RyaW5nID0gcHJvcHMudGV4dDtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxTdHlsZWRDb21tZW50ID5cclxuICAgICAgICAgICAgPHA+e2NvbW1lbnRUZXh0fTwvcD5cclxuICAgICAgICA8L1N0eWxlZENvbW1lbnQ+XHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ29tbWVudEl0ZW07IiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5pbXBvcnQgQ29tbWVudEl0ZW0gZnJvbSBcIi4vQ29tbWVudEl0ZW1cIjtcclxuaW1wb3J0IHtDb21tZW50TW9kZWx9IGZyb20gXCIuLi8uLi9tb2RlbHMvQ29tbWVudC5tb2RlbFwiO1xyXG5cclxuY29uc3QgU3R5bGVkQ29tbWVudHNMaXN0ID0gc3R5bGVkLnVsYFxyXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgbWFyZ2luOiAyLjVyZW0gMDtcclxuICBwYWRkaW5nOiAwO1xyXG5gO1xyXG5cclxuY29uc3QgQ29tbWVudHNMaXN0ID0gKHByb3BzKSA9PiB7XHJcbiAgICBjb25zdCBjb21tZW50c0xpc3Q6IENvbW1lbnRNb2RlbFtdID0gcHJvcHMuY29tbWVudHM7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8U3R5bGVkQ29tbWVudHNMaXN0PlxyXG4gICAgICAgICAgICB7Y29tbWVudHNMaXN0Lm1hcCgoY29tbWVudDogQ29tbWVudE1vZGVsKSA9PiAoXHJcbiAgICAgICAgICAgICAgICA8Q29tbWVudEl0ZW0ga2V5PXtjb21tZW50LmlkfSB0ZXh0PXtjb21tZW50LnRleHR9Lz5cclxuICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgPC9TdHlsZWRDb21tZW50c0xpc3Q+XHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ29tbWVudHNMaXN0OyJdLCJzb3VyY2VSb290IjoiIn0=