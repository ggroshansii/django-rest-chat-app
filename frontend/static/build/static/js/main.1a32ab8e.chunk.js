(this.webpackJsonpstatic=this.webpackJsonpstatic||[]).push([[0],{22:function(e,t,n){},24:function(e,t,n){},25:function(e,t,n){},27:function(e,t,n){},28:function(e,t,n){},29:function(e,t,n){},30:function(e,t,n){},31:function(e,t,n){},32:function(e,t,n){},33:function(e,t,n){},34:function(e,t,n){},35:function(e,t,n){},36:function(e,t,n){"use strict";n.r(t);var a=n(2),s=n.n(a),c=n(12),r=n.n(c),o=(n(21),n(22),n(3)),i=n.n(o),u=n(6),l=n(4),b=n(7),j=n.n(b),h=(n(24),n(25),n.p+"static/media/logo.c507efeb.png"),m=n(1);function d(e){function t(){return(t=Object(u.a)(i.a.mark((function t(){var n,a;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n={method:"POST",headers:{"Content-Type":"application/json","X-CSRFToken":j.a.get("csrftoken")},body:JSON.stringify({})},t.next=3,fetch("/rest-auth/logout/",n);case 3:if(a=t.sent){t.next=8;break}console.log(a),t.next=14;break;case 8:return console.log(a),t.next=11,a.json();case 11:t.sent,j.a.remove("Authorization"),e.changeStatus("splash");case 14:case"end":return t.stop()}}),t)})))).apply(this,arguments)}var n;return"approved"==e.userStatus&&(n=Object(m.jsx)("button",{className:"header-logout-btn",onClick:function(){return t.apply(this,arguments)},children:"Logout"})),Object(m.jsxs)("div",{className:"header-container",children:[Object(m.jsx)("img",{className:"header-img mt-2",onClick:function(){"approved"!==e.userStatus&&e.changeStatus("splash")},src:h}),n]})}n(27);var p=n(5),f=(n(28),n(29),n(9));function O(e){return Object(m.jsx)("div",{className:"chatroom-container",children:Object(m.jsxs)("button",{className:"btn btn-outline-success chatroom-btn",value:e.id,onClick:function(t){return function(t){e.changeChatRoom(t.target.value),console.log(t)}(t)},children:["#",e.name," ",Object(m.jsx)("button",{className:"chatroom-close-btn",value:e.id,onClick:function(t){return function(t){e.deleteChatRoom(t.currentTarget.value)}(t)},children:Object(m.jsx)(f.a,{})})]})})}var g=n(37),x=n(13);function v(e){var t,n=Object(a.useState)(!1),s=Object(l.a)(n,2),c=s[0],r=s[1],o=Object(a.useState)(""),i=Object(l.a)(o,2),u=i[0],b=i[1];return t=c?Object(m.jsx)("div",{className:"create-chatroom-container",children:Object(m.jsxs)("form",{action:"",children:[Object(m.jsx)("input",{onChange:function(e){return function(e){b(e.target.value)}(e)},value:u,type:"text",className:"form-control create-chat-input"}),Object(m.jsx)("button",{onClick:function(t){return e.postChatRoom(u),b(""),void r(!1)},type:"submit",className:"btn btn-success-outline create-chat-btn",children:"Create"})]})}):Object(m.jsxs)("button",{onClick:function(e){r(!0)},className:"btn btn-success-outline add-chatroom-btn",children:[" ",Object(m.jsx)(x.a,{})," Add Channel "]}),Object(m.jsxs)("div",{className:"chatroom-list-container",children:[Object(m.jsxs)("div",{className:"chatroom-list-header",children:[Object(m.jsx)("h2",{children:"Channels:"}),t]}),Object(m.jsx)("div",{className:"chatroom-list",children:e.chatRooms.map((function(t){return Object(a.createElement)(O,Object(p.a)(Object(p.a)({},t),{},{key:Object(g.a)(),changeChatRoom:e.changeChatRoom,deleteChatRoom:e.deleteChatRoom}))}))})]})}n(30),n(31);var N=n(14),y=n(15);function k(e){var t,n=Object(a.useState)(""),s=Object(l.a)(n,2),c=s[0],r=s[1],o=Object(a.useState)(!1),i=Object(l.a)(o,2),u=i[0],b=i[1];return t=u?Object(m.jsx)(m.Fragment,{children:Object(m.jsxs)("div",{className:"message-bubble-editing",children:[Object(m.jsx)("div",{className:"message-icon-container",children:Object(m.jsx)("button",{type:"submit",value:e.id,onClick:function(t){return function(t){b(!1);var n=Object(p.a)({},e);n.body=c,console.log("AYYY",n),e.updateMessage(t.currentTarget.value,n)}(t)},className:"message-submit-edit-btn",children:Object(m.jsx)(N.a,{})})}),Object(m.jsx)("input",{onChange:function(e){return function(e){r(e.currentTarget.value),console.log(e.currentTarget.value)}(e)},value:c,type:"textarea",placeholder:"Edit message here...",className:"form-control"}),Object(m.jsxs)("span",{className:"message-content-author",children:[e.username,":"]})]})}):Object(m.jsxs)("div",{className:"message-bubble",children:[Object(m.jsxs)("div",{className:"message-icon-container",children:[Object(m.jsx)("button",{onClick:function(e){b(!0)},className:"message-edit-btn",children:Object(m.jsx)(y.a,{})}),Object(m.jsx)("button",{value:e.id,onClick:function(t){return function(t){console.log(t.currentTarget.value),e.deleteMessage(t.currentTarget.value)}(t)},className:"message-close-btn",children:Object(m.jsx)(f.a,{})})]}),Object(m.jsxs)("div",{className:"message-content-container",children:[Object(m.jsxs)("span",{className:"message-content-author",children:[e.username,":"]}),Object(m.jsx)("span",{className:"message-content-body",children:e.body})]})]}),Object(m.jsx)(m.Fragment,{children:t})}function w(e){var t=Object(a.useState)(""),n=Object(l.a)(t,2),s=n[0],c=n[1];return Object(m.jsxs)("div",{className:"message-list-container",children:[e.messages.map((function(t){return Object(m.jsx)(k,Object(p.a)(Object(p.a)({},t),{},{deleteMessage:e.deleteMessage,updateMessage:e.updateMessage}),Object(g.a)())})),Object(m.jsx)("div",{className:"new-message-container",children:Object(m.jsxs)("form",{onSubmit:function(t){return function(t){t.preventDefault(),e.postMessage(s),c("")}(t)},children:[Object(m.jsx)("label",{htmlFor:"chat-message"}),Object(m.jsx)("input",{type:"textarea",id:"chat-message",placeholder:"Enter Message...",onChange:function(e){return function(e){c(e.target.value)}(e)},value:s,className:"form-control enter-message-input"}),Object(m.jsx)("button",{type:"submit",className:"btn btn-outline-success submit-message-btn",children:"Send"})]})})]})}function C(){var e=Object(a.useState)([]),t=Object(l.a)(e,2),n=t[0],s=t[1],c=Object(a.useState)([]),r=Object(l.a)(c,2),o=r[0],b=r[1],h=Object(a.useState)(0),d=Object(l.a)(h,2),p=d[0],f=d[1],O=Object(a.useRef)(!0);function g(){return x.apply(this,arguments)}function x(){return(x=Object(u.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/chatrooms/").then((function(e){return e.json()})).then((function(e){return s(e)}));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function N(){return(N=Object(u.a)(i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/chatrooms/".concat(p,"/messages/").concat(t,"/"),{method:"DELETE",headers:{"X-CSRFToken":j.a.get("csrftoken")}});case 2:k();case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function y(){return(y=Object(u.a)(i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/chatrooms/".concat(t,"/"),{method:"DELETE",headers:{"X-CSRFToken":j.a.get("csrftoken")}});case 2:g();case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function k(){return C.apply(this,arguments)}function C(){return(C=Object(u.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/chatrooms/".concat(p,"/messages/")).then((function(e){return e.json()})).then((function(e){return b(e)}));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function S(){return(S=Object(u.a)(i.a.mark((function e(t){var n,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={name:t},e.next=3,fetch("/api/chatrooms/",{method:"POST",headers:{"Content-Type":"application/json","X-CSRFToken":j.a.get("csrftoken")},body:JSON.stringify(n)});case 3:return a=e.sent,g(),e.abrupt("return",a.json());case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function T(){return(T=Object(u.a)(i.a.mark((function e(t){var n,a,s;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={room:p,user:"Username",body:t},e.next=3,fetch("/api/chatrooms/".concat(p,"/messages/"),{method:"POST",headers:{"Content-Type":"application/json","X-CSRFToken":j.a.get("csrftoken")},body:JSON.stringify(n)});case 3:return a=e.sent,k(),e.next=7,a.json();case 7:s=e.sent,console.log(s.username);case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function R(){return(R=Object(u.a)(i.a.mark((function e(t,n){var a,s;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={method:"PUT",headers:{"Content-Type":"application/json","X-CSRFToken":j.a.get("csrftoken")},body:JSON.stringify(n)},e.next=3,fetch("/api/chatrooms/".concat(p,"/messages/").concat(t,"/"),a);case 3:return s=e.sent,k(),e.abrupt("return",s.json());case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(a.useEffect)((function(){g(),console.log(o)}),[]),Object(a.useEffect)((function(){O.current?O.current=!1:k(p)}),[p]),Object(m.jsxs)("div",{className:"main-container",children:[Object(m.jsx)(v,{chatRooms:n,changeChatRoom:function(e){f(e)},postChatRoom:function(e){return S.apply(this,arguments)},deleteChatRoom:function(e){return y.apply(this,arguments)}}),Object(m.jsx)(w,{messages:o,grabMessages:k,postMessage:function(e){return T.apply(this,arguments)},deleteMessage:function(e){return N.apply(this,arguments)},updateMessage:function(e,t){return R.apply(this,arguments)}})]})}n(32);function S(){return Object(m.jsx)("div",{className:"footer-container",children:Object(m.jsxs)("p",{className:"footer-copyright",children:[" Copyright ",Object(m.jsx)(f.b,{})," 2021 Diskord. All Rights Reserved"]})})}var T=n(8),R=(n(33),n(10));function E(e){var t,n=Object(a.useState)({username:"",email:"",password1:"",password2:""}),s=Object(l.a)(n,2),c=s[0],r=s[1];function o(e){r((function(t){return Object(p.a)(Object(p.a)({},t),{},Object(T.a)({},e.target.id,e.target.value))})),console.log("FORMDATA",c)}return t=c.password1!==c.password2?Object(m.jsx)("p",{className:"text-danger",children:"Passwords do not match"}):"",Object(m.jsxs)("div",{className:"registration-form-container",children:[Object(m.jsx)("button",{className:"registration-back-btn",onClick:function(){e.changeStatus("splash")},children:Object(m.jsx)(R.a,{})}),Object(m.jsxs)("form",{className:"registration-form",onSubmit:function(t){return function(t){console.log(c),t.preventDefault(),c.password1===c.password2&&""!==c.password1&&e.handleRegistration(c)}(t)},children:[Object(m.jsxs)("div",{className:"form-group text-left mb-3 mt-1",children:[Object(m.jsx)("label",{className:"form-label",htmlFor:"username",children:"Username:"}),Object(m.jsx)("input",{type:"text",id:"username",value:c.username,onChange:function(e){return o(e)},placeholder:"Enter Username",className:"form-control"})]}),Object(m.jsxs)("div",{className:"form-group text-left mb-3 mt-3",children:[Object(m.jsx)("label",{className:"form-label",htmlFor:"email",children:"Email:"}),Object(m.jsx)("input",{type:"email",id:"email",value:c.email,onChange:function(e){return o(e)},placeholder:"Enter Email",className:"form-control"})]}),Object(m.jsxs)("div",{className:"form-group mb-3 mt-3",children:[Object(m.jsx)("label",{className:"form-label",htmlFor:"Password",children:"Password:"}),Object(m.jsx)("input",{type:"password",id:"password1",value:c.password1,onChange:function(e){return o(e)},placeholder:"Enter Password",className:"form-control"})]}),Object(m.jsxs)("div",{className:"form-group mb-3 mt-3",children:[Object(m.jsx)("label",{className:"form-label",htmlFor:"password",children:"Re-enter Password:"}),Object(m.jsx)("input",{type:"password",id:"password2",value:c.password2,onChange:function(e){return o(e)},placeholder:"Enter Password",className:"form-control"}),t]}),Object(m.jsx)("button",{type:"submit",className:"btn btn-success mt-3 registration-submit-btn",children:"Register"})]})]})}n(34);function F(e){function t(t){e.changeStatus(t.target.value)}return Object(m.jsxs)("div",{className:"splash-container",children:[Object(m.jsxs)("h1",{children:["Welcome to ",Object(m.jsx)("span",{className:"diskord-green",children:"Diskord"})," Chat Client"]}),Object(m.jsx)("p",{children:"Diskord is a place where you can belong to a programming cohort, a school club, a gaming group, or a worldwide art community. Where just you and a handful of friends can spend time together. A place that makes it easy to talk every day and hang out more often."}),Object(m.jsxs)("div",{className:"splash-btn-group",children:[Object(m.jsx)("button",{className:"btn btn-success",value:"register",onClick:t,children:"Register"}),Object(m.jsx)("button",{className:"btn btn-success mt-2",value:"login",onClick:t,children:"Login"})]})]})}n(35);function M(e){var t=Object(a.useState)({username:"",password:""}),n=Object(l.a)(t,2),s=n[0],c=n[1];function r(e){c((function(t){return Object(p.a)(Object(p.a)({},t),{},Object(T.a)({},e.target.id,e.target.value))})),console.log("FORMDATA",s)}return Object(m.jsxs)("div",{className:"login-container",children:[Object(m.jsx)("button",{className:"login-back-btn",onClick:function(){e.changeStatus("splash")},children:Object(m.jsx)(R.a,{})}),Object(m.jsxs)("form",{onSubmit:function(t){console.log(s),t.preventDefault(),e.handleLogin(s)},children:[Object(m.jsxs)("div",{className:"form-group text-left mb-3",children:[Object(m.jsx)("label",{className:"form-label",htmlFor:"username",children:"Username:"}),Object(m.jsx)("input",{type:"text",id:"username",value:s.username,onChange:function(e){return r(e)},placeholder:"Enter Username",className:"form-control"})]}),Object(m.jsxs)("div",{className:"form-group text-left mb-3 mt-2",children:[Object(m.jsx)("label",{className:"form-label",htmlFor:"Password",children:"Password:"}),Object(m.jsx)("input",{type:"password",id:"password",value:s.password,onChange:function(e){return r(e)},placeholder:"Enter Password",className:"form-control"})]}),Object(m.jsx)("button",{type:"submit",className:"btn btn-success submit-login-btn",children:"Login"})]})]})}var P=function(){var e,t=Object(a.useState)("splash"),n=Object(l.a)(t,2),s=n[0],c=n[1],r=Object(a.useState)(!1),o=Object(l.a)(r,2),b=o[0];function h(){return(h=Object(u.a)(i.a.mark((function e(t){var n,a,s;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={method:"POST",headers:{"Content-Type":"application/json","X-CSRFToken":j.a.get("csrftoken")},body:JSON.stringify(t)},e.next=3,fetch("/rest-auth/registration/",n);case 3:return a=e.sent,e.prev=4,e.next=7,a.json();case 7:s=e.sent,console.log(s),j.a.set("Authorization","Token ".concat(s.key)),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(4),console.error(e.t0);case 15:case"end":return e.stop()}}),e,null,[[4,12]])})))).apply(this,arguments)}function p(){return(p=Object(u.a)(i.a.mark((function e(t){var n,a,s;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={method:"POST",headers:{"Content-Type":"application/json","X-CSRFToken":j.a.get("csrftoken")},body:JSON.stringify(t)},e.next=3,fetch("/rest-auth/login/",n);case 3:if(!0!==(a=e.sent).ok){e.next=12;break}return e.next=7,a.json();case 7:s=e.sent,j.a.set("Authorization","Token ".concat(s.key)),c("approved"),e.next=13;break;case 12:console.error(a.statusText);case 13:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function f(e){c(e)}switch(o[1],Object(a.useEffect)((function(){var e=function(){var e=Object(u.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:!1===fetch("/rest-auth/user/").ok?c("splash"):c("approved");case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[]),s){case"splash":e=Object(m.jsx)(F,{changeStatus:f});break;case"register":e=Object(m.jsx)(E,{handleRegistration:function(e){return h.apply(this,arguments)},changeStatus:f});break;case"login":e=Object(m.jsx)(M,{handleLogin:function(e){return p.apply(this,arguments)},changeStatus:f,isAuth:b});break;case"approved":e=Object(m.jsx)(C,{})}return Object(m.jsxs)("div",{className:"App",children:[Object(m.jsx)(d,{changeStatus:f,userStatus:s}),e,Object(m.jsx)(S,{})]})};r.a.render(Object(m.jsx)(s.a.StrictMode,{children:Object(m.jsx)(P,{})}),document.getElementById("root"))}},[[36,1,2]]]);
//# sourceMappingURL=main.1a32ab8e.chunk.js.map