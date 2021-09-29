(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[0],{12:function(e,t,n){e.exports={header:"MainNavigation_header__3MwBH",logo:"MainNavigation_logo__2zzy4",nav:"MainNavigation_nav__2XFj9",active:"MainNavigation_active__C-bWb"}},14:function(e,t,n){"use strict";var r=n(27),c=n.n(r),a=n(0);t.a=function(){return Object(a.jsx)("div",{className:c.a.spinner})}},19:function(e,t,n){e.exports={list:"QuoteList_list__1f8KH",sorting:"QuoteList_sorting__3BIau"}},20:function(e,t,n){"use strict";var r=n(11),c=n(4),a=n.n(c),s=n(9),o=n(22),i=n(1);function u(e,t){return"SEND"===t.type?{data:null,error:null,status:"pending"}:"SUCCESS"===t.type?{data:t.responseData,error:null,status:"completed"}:"ERROR"===t.type?{data:null,error:t.errorMessage,status:"completed"}:e}t.a=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=Object(i.useReducer)(u,{status:t?"pending":null,data:null,error:null}),c=Object(o.a)(n,2),l=c[0],j=c[1],d=Object(i.useCallback)(function(){var t=Object(s.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return j({type:"SEND"}),t.prev=1,t.next=4,e(n);case 4:r=t.sent,j({type:"SUCCESS",responseData:r}),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),j({type:"ERROR",errorMessage:t.t0.message||"Something went wrong!"});case 11:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(e){return t.apply(this,arguments)}}(),[e]);return Object(r.a)({sendRequest:d},l)}},21:function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"c",(function(){return l})),n.d(t,"a",(function(){return d}));var r=n(4),c=n.n(r),a=n(11),s=n(9),o="https://great-quote-app-default-rtdb.europe-west1.firebasedatabase.app";function i(){return u.apply(this,arguments)}function u(){return(u=Object(s.a)(c.a.mark((function e(){var t,n,r,s,i;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(o,"/quotes.json"));case 2:return t=e.sent,e.next=5,t.json();case 5:if(n=e.sent,t.ok){e.next=8;break}throw new Error(n.message||"Could not fetch quotes.");case 8:for(s in r=[],n)i=Object(a.a)({id:s},n[s]),r.push(i);return e.abrupt("return",r);case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function l(e){return j.apply(this,arguments)}function j(){return(j=Object(s.a)(c.a.mark((function e(t){var n,r,s;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(o,"/quotes/").concat(t,".json"));case 2:return n=e.sent,e.next=5,n.json();case 5:if(r=e.sent,n.ok){e.next=8;break}throw new Error(r.message||"Could not fetch quote.");case 8:return s=Object(a.a)({id:t},r),e.abrupt("return",s);case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function d(e){return b.apply(this,arguments)}function b(){return(b=Object(s.a)(c.a.mark((function e(t){var n,r;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(o,"/quotes.json"),{method:"POST",body:JSON.stringify(t),headers:{"Content-Type":"application/json"}});case 2:return n=e.sent,e.next=5,n.json();case 5:if(r=e.sent,n.ok){e.next=8;break}throw new Error(r.message||"Could not create quote.");case 8:return e.abrupt("return",null);case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}},24:function(e,t,n){e.exports={item:"QuoteItem_item__1aZBV"}},27:function(e,t,n){e.exports={spinner:"LoadingSpinner_spinner__2CBb8"}},28:function(e,t,n){e.exports={noquotes:"NoQuotesFound_noquotes__22Faw"}},29:function(e,t,n){e.exports={main:"Layout_main__rNWQz"}},33:function(e,t,n){},44:function(e,t,n){"use strict";n.r(t);var r=n(23),c=n.n(r),a=n(8),s=(n(33),n(1)),o=n.n(s),i=n(2),u=n(24),l=n.n(u),j=n(0),d=function(e){return Object(j.jsxs)("li",{className:l.a.item,children:[Object(j.jsxs)("figure",{children:[Object(j.jsx)("blockquote",{children:Object(j.jsx)("p",{children:e.text})}),Object(j.jsx)("figcaption",{children:e.author})]}),Object(j.jsx)(a.b,{className:"btn",to:"/quotes/".concat(e.id),children:"View Fullscreen"})]})},b=n(19),h=n.n(b),p=function(e){var t,n,r=Object(i.h)(),c=Object(i.i)(),a="asc"===new URLSearchParams(c.search).get("sort"),o=(t=e.quotes,n=a,t.sort((function(e,t){return n?e.id>t.id?1:-1:e.id<t.id?1:-1})));return Object(j.jsxs)(s.Fragment,{children:[Object(j.jsx)("div",{className:h.a.sorting,children:Object(j.jsxs)("button",{onClick:function(){r.push({pathname:c.pathname,search:"?sort=".concat(a?"desc":"asc")})},children:["Sort ",a?"Descending":"Ascending"]})}),Object(j.jsx)("ul",{className:h.a.list,children:o.map((function(e){return Object(j.jsx)(d,{id:e.id,author:e.author,text:e.text},e.id)}))})]})},x=n(20),f=n(21),O=n(14),m=n(28),v=n.n(m),g=function(){return Object(j.jsxs)("div",{className:v.a.noquotes,children:[Object(j.jsx)("p",{children:"No quotes found!"}),Object(j.jsx)(a.b,{className:"btn",to:"/new-quote",children:"Add a Quote"})]})},_=function(){var e=Object(x.a)(f.b,!0),t=e.sendRequest,n=e.status,r=e.data,c=e.error;return Object(s.useEffect)((function(){t()}),[t]),"pending"===n?Object(j.jsx)("div",{className:"centered",children:Object(j.jsx)(O.a,{})}):c?Object(j.jsx)("p",{className:"centered focused",children:c}):"completed"!==n||r&&0!==r.length?Object(j.jsx)(p,{quotes:r}):Object(j.jsx)(g,{})},q=n(16),w=n(12),N=n.n(w),y=function(){return Object(j.jsxs)("header",{className:N.a.header,children:[Object(j.jsx)("div",{className:N.a.logo,children:"Great Quotes"}),Object(j.jsx)("nav",{className:N.a.nav,children:Object(j.jsxs)("ul",{children:[Object(j.jsx)("li",{children:Object(j.jsx)(a.c,{to:"/quotes",activeClassName:N.a.active,children:"All Quotes"})}),Object(j.jsx)("li",{children:Object(j.jsx)(a.c,{to:"/new-quote",activeClassName:N.a.active,children:"Add a quote"})})]})})]})},k=n(29),S=n.n(k),C=function(e){return Object(j.jsxs)(q.Fragment,{children:[Object(j.jsx)(y,{}),Object(j.jsx)("main",{className:S.a.main,children:e.children})]})},E=o.a.lazy((function(){return n.e(4).then(n.bind(null,52))})),R=o.a.lazy((function(){return n.e(3).then(n.bind(null,51))})),Q=o.a.lazy((function(){return n.e(5).then(n.bind(null,50))}));var M=function(){return Object(j.jsx)(C,{children:Object(j.jsx)(s.Suspense,{fallback:Object(j.jsx)("div",{className:"centered",children:Object(j.jsx)(O.a,{})}),children:Object(j.jsxs)(i.e,{children:[Object(j.jsx)(i.c,{path:"/",exact:!0,children:Object(j.jsx)(i.b,{to:"/quotes"})}),Object(j.jsx)(i.c,{path:"/quotes",exact:!0,children:Object(j.jsx)(_,{})}),Object(j.jsx)(i.c,{path:"/quotes/:quoteId",children:Object(j.jsx)(R,{})}),Object(j.jsx)(i.c,{path:"/new-quote",children:Object(j.jsx)(E,{})}),Object(j.jsx)(i.c,{path:"*",children:Object(j.jsx)(Q,{})})]})})})};c.a.render(Object(j.jsx)(a.a,{children:Object(j.jsx)(M,{})}),document.getElementById("root"))}},[[44,1,2]]]);
//# sourceMappingURL=main.b7598c6b.chunk.js.map