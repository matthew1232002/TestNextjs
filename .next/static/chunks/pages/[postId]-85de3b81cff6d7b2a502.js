_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[6],{MyuL:function(n,t,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/[postId]",function(){return e("lD4a")}])},lD4a:function(n,t,e){"use strict";e.r(t);var r=e("nKUr"),c=e("q1tI"),o=e("h4VS"),u=e("vOnD");function a(){var n=Object(o.a)(["\n  font-style: italic;\n  font-size: 1.5rem;\n  text-align: right;\n  color: #a1e0e0;\n"]);return a=function(){return n},n}function i(){var n=Object(o.a)(["\n  font-size: 2.5rem;\n"]);return i=function(){return n},n}function s(){var n=Object(o.a)(["\n  background-color: #162b2b;\n  color: white;\n  border-radius: 6px;\n  padding: 3rem;\n  margin: 3rem auto;\n  width: 90%;\n  max-width: 40rem;\n"]);return s=function(){return n},n}var d=u.a.figure(s()),b=u.a.p(i()),j=u.a.p(a()),f=function(n){return Object(r.jsxs)(d,{children:[Object(r.jsx)(b,{children:n.text}),Object(r.jsx)(j,{children:n.author})]})},l=e("20a2");function m(){var n=Object(o.a)(["\n  text-align: center;\n"]);return m=function(){return n},n}var O=u.a.section(m()),x=e("36dv"),h=e("RoF0");function v(){var n=Object(o.a)(["\n      margin: 1rem 0;\n      color: #4a5555;\n      font-size: 1.25rem;\n      padding-bottom: 0.5rem;\n      border-bottom: 2px solid teal;\n    "]);return v=function(){return n},n}var p=u.a.li(v()),g=function(n){var t=n.text;return Object(r.jsx)(p,{children:Object(r.jsx)("p",{children:t})})};function w(){var n=Object(o.a)(["\n  list-style: none;\n  margin: 2.5rem 0;\n  padding: 0;\n"]);return w=function(){return n},n}var _=u.a.ul(w()),k=function(n){var t=n.comments;return Object(r.jsx)(_,{children:t.map((function(n){return Object(r.jsx)(g,{text:n.text},n.id)}))})};function y(){var n=Object(o.a)(["\n  font: inherit;\n  padding: 0.35rem;\n  border-radius: 4px;\n  background-color: #f0f0f0;\n  border: 1px solid #c1d1d1;\n  display: block;\n  width: 100%;\n  font-size: 1.25rem;\n  &:focus {\n    background-color: #cbf8f8;\n    outline-color: teal;\n  }\n"]);return y=function(){return n},n}function E(){var n=Object(o.a)(["\n  font-weight: bold;\n  display: block;\n  margin-bottom: 0.5rem;\n"]);return E=function(){return n},n}function I(){var n=Object(o.a)(["\n  margin-bottom: 0.5rem;\n"]);return I=function(){return n},n}function R(){var n=Object(o.a)(["\n  margin-top: 1rem;\n  position: relative;\n  text-align: center;\n"]);return R=function(){return n},n}var q=u.a.form(R()),C=u.a.div(I()),D=u.a.label(E()),N=u.a.textarea(y()),z=e("HjAX"),A=function(n){var t=Object(c.useRef)(null),e=Object(h.a)(x.a),o=e.sendRequest,u=e.status,a=n.onAddedComment;Object(c.useEffect)((function(){a()}),[a,u]);var i=function(e){e.preventDefault();var r=t.current.value;o({commentData:{text:r},postId:n.postId})};return Object(r.jsxs)(q,{onSubmit:i,children:[Object(r.jsxs)(C,{onSubmit:i,children:[Object(r.jsx)(D,{htmlFor:"comment",children:"Your Comment"}),Object(r.jsx)(N,{id:"comment",rows:"5",ref:t})]}),Object(r.jsx)("div",{children:Object(r.jsx)(z.a,{children:"Add Comment"})})]})},F=function(){var n,t=Object(l.useRouter)(),e=Object(h.a)(x.c),o=e.sendRequest,u=e.data,a=t.query.postId,i=Object(c.useCallback)((function(){o(a)}),[o,a]);return u&&(n=Object(r.jsx)(k,{comments:u})),Object(r.jsxs)(O,{children:[Object(r.jsx)(A,{postId:a,onAddedComment:i}),Object(r.jsx)("h2",{children:"User Comments"}),n]})},L=e("Lu2V");t.default=function(){var n,t,e=Object(l.useRouter)().query.postId,o=Object(h.a)(x.e,!0),u=o.sendRequest,a=o.data;return Object(c.useEffect)((function(){u(e)}),[u,e]),null!==a&&(n=a.text,t=a.author),Object(r.jsx)(c.Fragment,{children:Object(r.jsxs)(L.a,{children:[Object(r.jsx)(f,{text:n,author:t}),Object(r.jsx)(F,{})]})})}}},[["MyuL",0,2,1,3]]]);