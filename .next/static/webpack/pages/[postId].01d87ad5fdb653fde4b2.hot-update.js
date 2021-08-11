webpackHotUpdate_N_E("pages/[postId]",{

/***/ "./components/comments/Comments.tsx":
/*!******************************************!*\
  !*** ./components/comments/Comments.tsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Comments_styled__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Comments.styled */ "./components/comments/Comments.styled.ts");
/* harmony import */ var _api_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../api/api */ "./components/api/api.ts");
/* harmony import */ var _hooks_use_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../hooks/use-http */ "./components/hooks/use-http.ts");
/* harmony import */ var _CommentsList__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./CommentsList */ "./components/comments/CommentsList.tsx");
/* harmony import */ var _NewCommentForm__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./NewCommentForm */ "./components/comments/NewCommentForm.tsx");


var _jsxFileName = "C:\\Users\\Lazarev\\WebstormProjects\\Test task\\components\\comments\\Comments.tsx",
    _this = undefined,
    _s = $RefreshSig$();









var Comments = function Comments() {
  _s();

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"])();

  var _useHttp = Object(_hooks_use_http__WEBPACK_IMPORTED_MODULE_5__["default"])(_api_api__WEBPACK_IMPORTED_MODULE_4__["getAllComments"]),
      sendRequest = _useHttp.sendRequest,
      loadedComments = _useHttp.data;

  var postId = router.query.postId;
  var addedCommentHandler = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function () {
    sendRequest(postId);
  }, [sendRequest, postId]);
  var comments;

  if (loadedComments) {
    comments = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_CommentsList__WEBPACK_IMPORTED_MODULE_6__["default"], {
      comments: loadedComments
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 20
    }, _this);
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Comments_styled__WEBPACK_IMPORTED_MODULE_3__["StyledComments"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_NewCommentForm__WEBPACK_IMPORTED_MODULE_7__["default"], {
      postId: postId,
      onAddedComment: addedCommentHandler
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
      children: "User Comments"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 13
    }, _this), comments]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 26,
    columnNumber: 9
  }, _this);
};

_s(Comments, "+nxGLoBMzdwa14BL3rdZgIiWcZ4=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"], _hooks_use_http__WEBPACK_IMPORTED_MODULE_5__["default"]];
});

_c = Comments;
/* harmony default export */ __webpack_exports__["default"] = (Comments);

var _c;

$RefreshReg$(_c, "Comments");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jb21tZW50cy9Db21tZW50cy50c3giXSwibmFtZXMiOlsiQ29tbWVudHMiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJ1c2VIdHRwIiwiZ2V0QWxsQ29tbWVudHMiLCJzZW5kUmVxdWVzdCIsImxvYWRlZENvbW1lbnRzIiwiZGF0YSIsInBvc3RJZCIsInF1ZXJ5IiwiYWRkZWRDb21tZW50SGFuZGxlciIsInVzZUNhbGxiYWNrIiwiY29tbWVudHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxRQUFRLEdBQUcsU0FBWEEsUUFBVyxHQUFNO0FBQUE7O0FBQ25CLE1BQU1DLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7O0FBRG1CLGlCQUV5QkMsK0RBQU8sQ0FBQ0MsdURBQUQsQ0FGaEM7QUFBQSxNQUVaQyxXQUZZLFlBRVpBLFdBRlk7QUFBQSxNQUVPQyxjQUZQLFlBRUNDLElBRkQ7O0FBR25CLE1BQU1DLE1BQU0sR0FBR1AsTUFBTSxDQUFDUSxLQUFQLENBQWFELE1BQTVCO0FBRUEsTUFBTUUsbUJBQW1CLEdBQUdDLHlEQUFXLENBQUMsWUFBTTtBQUMxQ04sZUFBVyxDQUFDRyxNQUFELENBQVg7QUFDSCxHQUZzQyxFQUVwQyxDQUFDSCxXQUFELEVBQWNHLE1BQWQsQ0FGb0MsQ0FBdkM7QUFJQSxNQUFJSSxRQUFKOztBQUVBLE1BQUlOLGNBQUosRUFBcUI7QUFDakJNLFlBQVEsZ0JBQUcscUVBQUMscURBQUQ7QUFBYyxjQUFRLEVBQUVOO0FBQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFBWDtBQUNIOztBQUVELHNCQUNJLHFFQUFDLCtEQUFEO0FBQUEsNEJBQ0kscUVBQUMsdURBQUQ7QUFBZ0IsWUFBTSxFQUFFRSxNQUF4QjtBQUFnQyxvQkFBYyxFQUFFRTtBQUFoRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREosZUFFSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUZKLEVBR0tFLFFBSEw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREo7QUFRSCxDQXZCRDs7R0FBTVosUTtVQUNhRSxxRCxFQUM2QkMsdUQ7OztLQUYxQ0gsUTtBQXlCU0EsdUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvW3Bvc3RJZF0uMDFkODdhZDVmZGI2NTNmZGU0YjIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZVN0YXRlLCB1c2VDYWxsYmFjaywgdXNlRWZmZWN0fSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHt1c2VSb3V0ZXJ9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5cclxuaW1wb3J0IHtTdHlsZWRDb21tZW50c30gZnJvbSBcIi4vQ29tbWVudHMuc3R5bGVkXCI7XHJcbmltcG9ydCB7Z2V0QWxsQ29tbWVudHN9IGZyb20gXCIuLi9hcGkvYXBpXCI7XHJcbmltcG9ydCB1c2VIdHRwIGZyb20gXCIuLi9ob29rcy91c2UtaHR0cFwiO1xyXG5pbXBvcnQgQ29tbWVudHNMaXN0IGZyb20gXCIuL0NvbW1lbnRzTGlzdFwiO1xyXG5pbXBvcnQgTmV3Q29tbWVudEZvcm0gZnJvbSBcIi4vTmV3Q29tbWVudEZvcm1cIjtcclxuXHJcbmNvbnN0IENvbW1lbnRzID0gKCkgPT4ge1xyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgICBjb25zdCB7c2VuZFJlcXVlc3QsIGRhdGE6IGxvYWRlZENvbW1lbnRzfSA9IHVzZUh0dHAoZ2V0QWxsQ29tbWVudHMpO1xyXG4gICAgY29uc3QgcG9zdElkID0gcm91dGVyLnF1ZXJ5LnBvc3RJZDtcclxuXHJcbiAgICBjb25zdCBhZGRlZENvbW1lbnRIYW5kbGVyID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xyXG4gICAgICAgIHNlbmRSZXF1ZXN0KHBvc3RJZCk7XHJcbiAgICB9LCBbc2VuZFJlcXVlc3QsIHBvc3RJZF0pO1xyXG5cclxuICAgIGxldCBjb21tZW50cztcclxuXHJcbiAgICBpZiAobG9hZGVkQ29tbWVudHMgKSB7XHJcbiAgICAgICAgY29tbWVudHMgPSA8Q29tbWVudHNMaXN0IGNvbW1lbnRzPXtsb2FkZWRDb21tZW50c30vPlxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPFN0eWxlZENvbW1lbnRzPlxyXG4gICAgICAgICAgICA8TmV3Q29tbWVudEZvcm0gcG9zdElkPXtwb3N0SWR9IG9uQWRkZWRDb21tZW50PXthZGRlZENvbW1lbnRIYW5kbGVyfS8+XHJcbiAgICAgICAgICAgIDxoMj5Vc2VyIENvbW1lbnRzPC9oMj5cclxuICAgICAgICAgICAge2NvbW1lbnRzfVxyXG4gICAgICAgIDwvU3R5bGVkQ29tbWVudHM+XHJcblxyXG4gICAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ29tbWVudHM7Il0sInNvdXJjZVJvb3QiOiIifQ==