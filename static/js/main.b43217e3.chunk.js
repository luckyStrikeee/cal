(this.webpackJsonppatients=this.webpackJsonppatients||[]).push([[0],[,,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),r=n(4),i=n.n(r),d=(n(9),n(10),n(2)),s=(n(11),n(12),n(0));var u=function(e){return Object(s.jsx)("div",{children:Object(s.jsxs)("div",{className:"contact",id:e.contact.name,onClick:function(t){e.setcontact(t.target.id)},children:[" ",e.contact.name]})})};n(14);var o=function(e){return Object(s.jsxs)("div",{children:[Object(s.jsx)("div",{className:"header",children:Object(s.jsx)("span",{children:e.dayNum})}),Object(s.jsx)("div",{className:"body",children:e.data.filter((function(t){return t.date-new Date(e.curYear,e.curMonth,e.dayNum)<864e5&&t.date-new Date(e.curYear,e.curMonth,e.dayNum)>0})).map((function(e,t){return Object(s.jsxs)("div",{id:"m-"+e.name,children:[" ",e.date.getHours(),":",e.date.getMinutes()," ",e.name]},t)}))})]})};n(15);var l=function(e){return Object(s.jsxs)("div",{className:"contact",onClick:function(){return alert(e.meeting.name)},children:[e.meeting.name," ",e.meeting.date.toLocaleDateString(void 0,{weekday:"short",year:"numeric",month:"long",day:"numeric"})]})};var j=function(){var e=Object(c.useState)(new Date),t=Object(d.a)(e,2),n=t[0],a=t[1],r=Object(c.useState)(null),i=Object(d.a)(r,2),j=i[0],h=i[1],b=Object(c.useState)(null),m=Object(d.a)(b,2),O=(m[0],m[1],["<",">"]),g=[{name:"avi",date:new Date(2021,3,15,15)},{name:"ben",date:new Date(2021,3,15,11)},{name:"gad",date:new Date(2021,3,15,10)},{name:"gad",date:new Date(2021,3,15,14,30)},{name:"dan",date:new Date(2021,3,1,9)},{name:"dan",date:new Date(2021,3,12,13)},{name:"dan",date:new Date(2021,3,15,16)}];return Object(c.useEffect)((function(){j&&(document.getElementById("m-"+j).className="x1")}),[j]),Object(s.jsxs)("div",{children:[Object(s.jsx)("button",{onClick:function(){return console.log(j)},children:" log"}),Object(s.jsx)("button",{onClick:function(){return document.getElementById("m-gad").className="x1"},children:" log2"}),Object(s.jsxs)("div",{className:"calander-bar",children:[Object(s.jsxs)("h2",{children:[["January","February","March","April","May","June","July","August","September","October","November","December"][n.getMonth()]," - ",n.getFullYear()]}),Object(s.jsx)("button",{onClick:function(){return a(new Date(n.setMonth(n.getMonth()-1)))},children:O[0]})," ",Object(s.jsx)("button",{onClick:function(){return a(new Date(n.setMonth(n.getMonth()+1)))},children:O[1]})]}),Object(s.jsx)("div",{children:Object(s.jsx)("table",{children:Object(s.jsx)("tbody",{children:Object(s.jsxs)("tr",{children:[Object(s.jsx)("td",{className:"contacts-list",children:[{name:"avi",phone:"0501111111"},{name:"ben",phone:"0502222222"},{name:"gad",phone:"0503333333"},{name:"dan",phone:"0504444444"}].map((function(e,t){return Object(s.jsx)(u,{contact:e,setcontact:h},t)}))}),Object(s.jsx)("td",{children:Object(s.jsxs)("table",{className:"calander",children:[Object(s.jsx)("thead",{children:Object(s.jsx)("tr",{children:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"].map((function(e,t){return Object(s.jsx)("th",{className:"t-header",children:e},t)}))})}),Object(s.jsx)("tbody",{children:function(){for(var e=new Date(n.getFullYear(),n.getMonth(),1).getDay(),t=new Date(n.getFullYear(),n.getMonth()+1,0).getDate(),c=[],a=[],r=0;r<e;r++)a.push("-");for(var i=1;i<=t;i++)6===a.length||i===t?(a.push(i),c.push(a),a=[]):a.push(i);return c}().map((function(e,t){return Object(s.jsx)("tr",{children:e.map((function(e,t){return Object(s.jsx)("td",{className:"td-day",children:Object(s.jsx)(o,{dayNum:e,curYear:n.getFullYear(),curMonth:n.getMonth(),data:g},t)},t)}))},t)}))})]})}),Object(s.jsxs)("td",{className:"meeting-list",children:[Object(s.jsx)("button",{onClick:function(){return h(null)},children:" All "}),g.filter((function(e){return null===j||e.name===j})).map((function(e,t){return Object(s.jsx)(l,{meeting:e},t)}))]})]})})})})]})};var h=function(){return Object(s.jsx)("div",{children:Object(s.jsx)(j,{})})},b=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,17)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),c(e),a(e),r(e),i(e)}))};i.a.render(Object(s.jsx)(a.a.StrictMode,{children:Object(s.jsx)(h,{})}),document.getElementById("root")),b()}],[[16,1,2]]]);
//# sourceMappingURL=main.b43217e3.chunk.js.map