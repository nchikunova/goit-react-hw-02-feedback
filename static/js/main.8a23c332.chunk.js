(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],[,,,,,,,,,,,,,,function(e,t,c){},,function(e,t,c){},function(e,t,c){},function(e,t,c){},,function(e,t,c){},function(e,t,c){"use strict";c.r(t);var a=c(1),s=c.n(a),n=c(5),i=c.n(n),r=c(2),o=c(4),l=c(6),d=c(7),b=c(9),j=c(8),u=(c(14),c(0)),h=function(e){var t=e.title,c=e.children;return Object(u.jsxs)("section",{className:"Section",children:[Object(u.jsx)("h2",{className:"title",children:t}),c]})},O=(c(16),function(e){var t=e.options,c=e.onLeaveFeedback;return Object(u.jsx)("div",{children:t.map((function(e){return Object(u.jsx)("button",{className:"feedback-button",onClick:function(){return c(e)},children:e},e)}))})}),f=(c(17),function(e){var t=e.message;return Object(u.jsx)("p",{className:"message",children:t})}),m=(c(18),function(e){var t=e.good,c=e.neutral,a=e.bad,s=e.total,n=e.positivePercentageFeedback;return Object(u.jsxs)("ul",{className:"Statistics",children:[Object(u.jsxs)("li",{className:"Statisctics__item",children:["good: ",t]}),Object(u.jsxs)("li",{className:"Statisctics__item",children:["neutral: ",c]}),Object(u.jsxs)("li",{className:"Statisctics__item",children:["bad: ",a]}),Object(u.jsxs)("li",{className:"Statisctics__item",children:["total: ",s]}),Object(u.jsxs)("li",{className:"Statisctics__item",children:["positive feedback: ",n,"%"]})]})}),v=function(e){Object(b.a)(c,e);var t=Object(j.a)(c);function c(){var e;Object(l.a)(this,c);for(var a=arguments.length,s=new Array(a),n=0;n<a;n++)s[n]=arguments[n];return(e=t.call.apply(t,[this].concat(s))).state={good:0,neutral:0,bad:0},e.clickHandler=function(t){e.setState((function(e){return Object(o.a)(Object(o.a)({},e),{},Object(r.a)({},t,e[t]+1))}))},e}return Object(d.a)(c,[{key:"render",value:function(){var e=Object.keys(this.state),t=this.state,c=t.good,a=t.neutral,s=t.bad,n=Object.values(this.state).reduce((function(e,t){return e+t}),0),i=0===n?0:Math.round(this.state.good/n*100);return Object(u.jsxs)("div",{className:"container",children:[Object(u.jsx)(h,{title:"Please leave feedback",children:Object(u.jsx)(O,{options:e,onLeaveFeedback:this.clickHandler})}),Object(u.jsx)(h,{title:"Statistics",children:n?Object(u.jsx)(m,{title:"Statistics",good:c,neutral:a,bad:s,total:n,positivePercentageFeedback:i}):Object(u.jsx)(f,{message:"No feedback given"})})]})}}]),c}(a.Component);c(19),c(20);i.a.render(Object(u.jsx)(s.a.StrictMode,{children:Object(u.jsx)(v,{})}),document.getElementById("root"))}],[[21,1,2]]]);
//# sourceMappingURL=main.8a23c332.chunk.js.map