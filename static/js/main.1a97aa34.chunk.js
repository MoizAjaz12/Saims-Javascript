(this["webpackJsonpquiz-app"]=this["webpackJsonpquiz-app"]||[]).push([[0],{14:function(e,t,o){},21:function(e,t,o){"use strict";o.r(t);var n=o(0),i=o.n(n),s=o(2),r=o.n(s),a=(o(14),o(8),o(9)),c={questions:[{Question:"React is a __________ ?",option1:"Javascript Library",option2:"Framework",option3:"Programing Language",Answer:"Javascript Library"},{Question:"Javascript is a:",option1:"Programming Language.",option2:"Style Sheet",option3:"Both A & B",Answer:"Programming Language."},{Question:"CSS used for:",option1:"Website designing.",option2:"Backend Programming.",option3:"Making Website Functional.",Answer:"Website designing."},{Question:"CSS Stand for:",option1:"Commenting Style Sheet.",option2:"Cascading Style Sheet.",option3:"Cast Style Sheet.",Answer:"Cascading Style Sheet."},{Question:"HTML is a ________ language : ",option1:"Case Sensitive.",option2:"Programming.",option3:"Both A & B",Answer:"Case Sensitive."},{Question:"How to write function in javascript: ",option1:"var func = function{}.",option2:"function(){}.",option3:"function[]().",Answer:"function(){}."},{Question:"How to apply color on h1:",option1:"h1 { color : red ; }",option2:"h1[ color = 'red']",option3:"h1( color: 'red' )",Answer:"h1 { color : red ; }"},{Question:"Tick correct text to write border:",option1:"border : 1px solid black;",option2:"border:(1px, solid, black)",option3:"border['1px solid black']",Answer:"border : 1px solid black;"},{Question:"Correct way to show alert box:",option1:"ALERT('Hello World')",option2:"alert('Hello World')",option3:"Alert('Hello World')",Answer:"alert('Hello World')"},{Question:"Declare a var in javascript:",option1:"var name;",option2:"var name : ,",option3:"var name = ,",Answer:"var name;"}]},l=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:c;return e},u=Object(a.a)(l),p=o(7),b=o(3),j=(o(19),o(1)),d=function(){var e=Object(b.b)((function(e){return e})),t=Object(n.useState)(0),o=Object(p.a)(t,2),i=o[0],s=o[1],r=Object(n.useState)(0),a=Object(p.a)(r,2),c=a[0],l=a[1],u=function(t){i<=9?s(i+1):console.log(i),t===e.questions[i].Answer&&l(c+1)};return Object(j.jsxs)("div",{className:"quiz_box",children:[Object(j.jsxs)("header",{children:[Object(j.jsx)("h1",{className:"title",children:"React Quiz App"}),Object(j.jsx)("p",{className:"title",children:"60% Passing Marks"})]}),i<=9?Object(j.jsx)("section",{children:Object(j.jsxs)("h2",{className:"que_text",children:[Object(j.jsxs)("span",{children:["Q",i+1,"). ",e.questions[i].Question]}),Object(j.jsx)("br",{}),Object(j.jsx)("br",{}),Object(j.jsxs)("button",{value:e.questions[i].option1,className:"option",onClick:function(e){return u(e.target.value)},children:[" 1. ",e.questions[i].option1," "]}),Object(j.jsxs)("button",{value:e.questions[i].option2,className:"option",onClick:function(e){return u(e.target.value)},children:[" 2. ",e.questions[i].option2," "]}),Object(j.jsxs)("button",{value:e.questions[i].option3,className:"option",onClick:function(e){return u(e.target.value)},children:[" 3. ",e.questions[i].option3," "]}),Object(j.jsx)("hr",{}),Object(j.jsx)("h5",{className:"total_que",children:Object(j.jsxs)("span",{children:[i+1," of 10 Questions"]})})]})}):Object(j.jsxs)("h2",{className:"que_text",children:[Object(j.jsx)("br",{}),"Your Score Is ",c," out of ",e.questions.length,Object(j.jsx)("br",{}),"Your Percentage is ",c/10*100,"%",Object(j.jsx)("br",{}),Object(j.jsx)("br",{}),Object(j.jsx)("progress",{id:"file",value:10*c,max:"100",children:" 32% "}),Object(j.jsx)("hr",{}),Object(j.jsx)("br",{})]})]})};var h=function(){return Object(j.jsx)("div",{className:"App",children:Object(j.jsx)(b.a,{store:u,children:Object(j.jsx)(d,{})})})},g=function(e){e&&e instanceof Function&&o.e(3).then(o.bind(null,22)).then((function(t){var o=t.getCLS,n=t.getFID,i=t.getFCP,s=t.getLCP,r=t.getTTFB;o(e),n(e),i(e),s(e),r(e)}))};r.a.render(Object(j.jsx)(i.a.StrictMode,{children:Object(j.jsx)(h,{})}),document.getElementById("root")),g()},8:function(e,t,o){}},[[21,1,2]]]);
//# sourceMappingURL=main.1a97aa34.chunk.js.map