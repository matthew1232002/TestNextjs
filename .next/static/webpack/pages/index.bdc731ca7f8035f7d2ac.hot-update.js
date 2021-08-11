webpackHotUpdate_N_E("pages/index",{

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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9hcGkvYXBpLnRzIl0sIm5hbWVzIjpbIkZJUkVCQVNFX0RPTUFJTiIsImdldEFsbFBvc3RzIiwiZmV0Y2giLCJyZXNwb25zZSIsImpzb24iLCJkYXRhIiwidHJhbnNmb3JtZWRRdW90ZXMiLCJrZXkiLCJxdW90ZU9iaiIsImlkIiwicHVzaCIsImdldFNpbmdsZVBvc3QiLCJwb3N0SWQiLCJsb2FkZWRRdW90ZSIsImFkZFF1b3RlIiwicXVvdGVEYXRhIiwibWV0aG9kIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJoZWFkZXJzIiwiYWRkQ29tbWVudCIsInJlcXVlc3REYXRhIiwiY29tbWVudERhdGEiLCJjb21tZW50SWQiLCJnZXRBbGxDb21tZW50cyIsInRyYW5zZm9ybWVkQ29tbWVudHMiLCJjb21tZW50T2JqIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBR0EsSUFBTUEsZUFBZSxHQUFHLGtEQUF4QjtBQUVPLFNBQWVDLFdBQXRCO0FBQUE7QUFBQTs7O2dUQUFPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBQ29CQyxLQUFLLFdBQUlGLGVBQUosaUJBRHpCOztBQUFBO0FBQ0dHLG9CQURIO0FBQUE7QUFBQSxtQkFFZ0JBLFFBQVEsQ0FBQ0MsSUFBVCxFQUZoQjs7QUFBQTtBQUVHQyxnQkFGSDtBQUlHQyw2QkFKSCxHQUl1QixFQUp2Qjs7QUFNSCxpQkFBV0MsR0FBWCxJQUFrQkYsSUFBbEIsRUFBd0I7QUFDZEcsc0JBRGM7QUFFaEJDLGtCQUFFLEVBQUVGO0FBRlksaUJBR2JGLElBQUksQ0FBQ0UsR0FBRCxDQUhTO0FBTXBCRCwrQkFBaUIsQ0FBQ0ksSUFBbEIsQ0FBdUJGLFFBQXZCO0FBQ0g7O0FBYkUsNkNBZUlGLGlCQWZKOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEc7Ozs7QUFrQkEsU0FBZUssYUFBdEI7QUFBQTtBQUFBOzs7a1RBQU8sa0JBQTZCQyxNQUE3QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUNvQlYsS0FBSyxXQUFJRixlQUFKLG9CQUE2QlksTUFBN0IsV0FEekI7O0FBQUE7QUFDR1Qsb0JBREg7QUFBQTtBQUFBLG1CQUUwQkEsUUFBUSxDQUFDQyxJQUFULEVBRjFCOztBQUFBO0FBRUdDLGdCQUZIO0FBSUdRLHVCQUpIO0FBS0NKLGdCQUFFLEVBQUVHO0FBTEwsZUFNSVAsSUFOSjtBQUFBLDhDQVNJUSxXQVRKOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEc7Ozs7QUFZQSxTQUFlQyxRQUF0QjtBQUFBO0FBQUE7Ozs2U0FBTyxrQkFBd0JDLFNBQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUNHYixLQUFLLFdBQUlGLGVBQUosa0JBQWtDO0FBQ3pDZ0Isb0JBQU0sRUFBRSxNQURpQztBQUV6Q0Msa0JBQUksRUFBRUMsSUFBSSxDQUFDQyxTQUFMLENBQWVKLFNBQWYsQ0FGbUM7QUFHekNLLHFCQUFPLEVBQUU7QUFDTCxnQ0FBZ0I7QUFEWDtBQUhnQyxhQUFsQyxDQURSOztBQUFBO0FBQUEsOENBU0ksSUFUSjs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHOzs7O0FBWUEsU0FBZUMsVUFBdEI7QUFBQTtBQUFBOzs7K1NBQU8sa0JBQTBCQyxXQUExQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUNvQnBCLEtBQUssV0FBSUYsZUFBSix1QkFBZ0NzQixXQUFXLENBQUNWLE1BQTVDLFlBQTJEO0FBQ25GSSxvQkFBTSxFQUFFLE1BRDJFO0FBRW5GQyxrQkFBSSxFQUFFQyxJQUFJLENBQUNDLFNBQUwsQ0FBZUcsV0FBVyxDQUFDQyxXQUEzQixDQUY2RTtBQUduRkgscUJBQU8sRUFBRTtBQUNMLGdDQUFnQjtBQURYO0FBSDBFLGFBQTNELENBRHpCOztBQUFBO0FBQ0dqQixvQkFESDtBQUFBO0FBQUEsbUJBUThCQSxRQUFRLENBQUNDLElBQVQsRUFSOUI7O0FBQUE7QUFRR0MsZ0JBUkg7QUFBQSw4Q0FXSTtBQUFDbUIsdUJBQVMsRUFBRW5CLElBQUksQ0FBQ0k7QUFBakIsYUFYSjs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHOzs7O0FBY0EsU0FBZWdCLGNBQXRCO0FBQUE7QUFBQTs7O21UQUFPLGtCQUE4QmIsTUFBOUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFDb0JWLEtBQUssV0FBSUYsZUFBSix1QkFBZ0NZLE1BQWhDLFdBRHpCOztBQUFBO0FBQ0dULG9CQURIO0FBQUE7QUFBQSxtQkFHZ0NBLFFBQVEsQ0FBQ0MsSUFBVCxFQUhoQzs7QUFBQTtBQUdHQyxnQkFISDtBQUtHcUIsK0JBTEgsR0FLeUIsRUFMekI7O0FBT0gsaUJBQVduQixHQUFYLElBQWtCRixJQUFsQixFQUF3QjtBQUNkc0Isd0JBRGM7QUFFaEJsQixrQkFBRSxFQUFFRjtBQUZZLGlCQUdiRixJQUFJLENBQUNFLEdBQUQsQ0FIUztBQU1wQm1CLGlDQUFtQixDQUFDaEIsSUFBcEIsQ0FBeUJpQixVQUF6QjtBQUNIOztBQWRFLDhDQWdCSUQsbUJBaEJKOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEciLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguYmRjNzMxY2E3ZjgwMzVmN2QyYWMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7UG9zdE1vZGVsfSBmcm9tIFwiLi4vLi4vbW9kZWxzL1Bvc3QubW9kZWxcIjtcclxuaW1wb3J0IHtDb21tZW50TW9kZWx9IGZyb20gXCIuLi8uLi9tb2RlbHMvQ29tbWVudC5tb2RlbFwiO1xyXG5cclxuY29uc3QgRklSRUJBU0VfRE9NQUlOID0gJ2h0dHBzOi8vcmVhY3QtMmZhZWYtZGVmYXVsdC1ydGRiLmZpcmViYXNlaW8uY29tLyc7XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0QWxsUG9zdHMoKSB7XHJcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGAke0ZJUkVCQVNFX0RPTUFJTn0vcG9zdHMuanNvbmApO1xyXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuXHJcbiAgICBjb25zdCB0cmFuc2Zvcm1lZFF1b3RlcyA9IFtdO1xyXG5cclxuICAgIGZvciAoY29uc3Qga2V5IGluIGRhdGEpIHtcclxuICAgICAgICBjb25zdCBxdW90ZU9iaiA9IHtcclxuICAgICAgICAgICAgaWQ6IGtleSxcclxuICAgICAgICAgICAgLi4uZGF0YVtrZXldLFxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHRyYW5zZm9ybWVkUXVvdGVzLnB1c2gocXVvdGVPYmopO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB0cmFuc2Zvcm1lZFF1b3RlcztcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNpbmdsZVBvc3QocG9zdElkKSB7XHJcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGAke0ZJUkVCQVNFX0RPTUFJTn0vcG9zdHMvJHtwb3N0SWR9Lmpzb25gKTtcclxuICAgIGNvbnN0IGRhdGE6UG9zdE1vZGVsID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG5cclxuICAgIGNvbnN0IGxvYWRlZFF1b3RlID0ge1xyXG4gICAgICAgIGlkOiBwb3N0SWQsXHJcbiAgICAgICAgLi4uZGF0YVxyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4gbG9hZGVkUXVvdGU7XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBhZGRRdW90ZShxdW90ZURhdGEpIHtcclxuICAgIGF3YWl0IGZldGNoKGAke0ZJUkVCQVNFX0RPTUFJTn0vcG9zdHMuanNvbmAsIHtcclxuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShxdW90ZURhdGEpLFxyXG4gICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICB9LFxyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIG51bGw7XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBhZGRDb21tZW50KHJlcXVlc3REYXRhKSB7XHJcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGAke0ZJUkVCQVNFX0RPTUFJTn0vY29tbWVudHMvJHtyZXF1ZXN0RGF0YS5wb3N0SWR9Lmpzb25gLCB7XHJcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkocmVxdWVzdERhdGEuY29tbWVudERhdGEpLFxyXG4gICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICB9LFxyXG4gICAgfSk7XHJcbiAgICBjb25zdCBkYXRhOiBDb21tZW50TW9kZWwgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcblxyXG5cclxuICAgIHJldHVybiB7Y29tbWVudElkOiBkYXRhLmlkfTtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEFsbENvbW1lbnRzKHBvc3RJZDogc3RyaW5nKSB7XHJcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGAke0ZJUkVCQVNFX0RPTUFJTn0vY29tbWVudHMvJHtwb3N0SWR9Lmpzb25gKTtcclxuXHJcbiAgICBjb25zdCBkYXRhOiBDb21tZW50TW9kZWxbXSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuXHJcbiAgICBjb25zdCB0cmFuc2Zvcm1lZENvbW1lbnRzID0gW107XHJcblxyXG4gICAgZm9yIChjb25zdCBrZXkgaW4gZGF0YSkge1xyXG4gICAgICAgIGNvbnN0IGNvbW1lbnRPYmogPSB7XHJcbiAgICAgICAgICAgIGlkOiBrZXksXHJcbiAgICAgICAgICAgIC4uLmRhdGFba2V5XSxcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICB0cmFuc2Zvcm1lZENvbW1lbnRzLnB1c2goY29tbWVudE9iaik7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHRyYW5zZm9ybWVkQ29tbWVudHM7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==