(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],{10:function(t,e,n){t.exports={button:"FeedbackOptions_button__2H74e"}},11:function(t,e,n){t.exports={title:"Seaction_title__3OTNC"}},12:function(t,e,n){t.exports={message:"Notification_message__1jxlD"}},18:function(t,e,n){"use strict";n.r(e);var a=n(1),c=n.n(a),r=n(8),s=n.n(r),i=n(9),o=n(2),l=n(3),u=n(5),b=n(4),j=n(6),d=n.n(j),h=n(0),p=function(t){Object(u.a)(n,t);var e=Object(b.a)(n);function n(){return Object(o.a)(this,n),e.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){var t=this.props,e=t.good,n=t.neutral,a=t.bad,c=t.total,r=t.positivePercentage;return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsxs)("p",{className:d.a.text,children:["Good: ",e]}),Object(h.jsxs)("p",{className:d.a.text,children:["Neutral: ",n]}),Object(h.jsxs)("p",{className:d.a.text,children:["Bad:",a]}),Object(h.jsxs)("p",{className:d.a.text,children:["Total:",c]}),Object(h.jsxs)("p",{className:d.a.text,children:["Positive feedback: ",r,"%"]})]})}}]),n}(a.Component),O=n(10),f=n.n(O),x=function(t){Object(u.a)(n,t);var e=Object(b.a)(n);function n(){return Object(o.a)(this,n),e.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){var t=this.props,e=t.options,n=t.onLeaveFeedback;return Object(h.jsx)(h.Fragment,{children:e.map((function(t){return Object(h.jsxs)("button",{name:t,onClick:n,className:f.a.button,children:[" ",t," "]},t)}))})}}]),n}(a.Component),g=n(11),m=n.n(g),v=function(t){Object(u.a)(n,t);var e=Object(b.a)(n);function n(){return Object(o.a)(this,n),e.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){var t=this.props,e=t.title,n=t.children;return Object(h.jsxs)("section",{children:[Object(h.jsx)("h2",{className:m.a.title,children:e}),n]})}}]),n}(a.Component),k=n(12),y=n.n(k),C=function(t){Object(u.a)(n,t);var e=Object(b.a)(n);function n(){return Object(o.a)(this,n),e.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){var t=this.props.message;return Object(h.jsx)(h.Fragment,{children:Object(h.jsx)("p",{className:y.a.message,children:t})})}}]),n}(a.Component),N=function(t){Object(u.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(o.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={good:0,neutral:0,bad:0},t.handleButtonClick=function(e){var n=e.currentTarget.name;t.setState((function(t){return Object(i.a)({},n,t[n]+1)}))},t}return Object(l.a)(n,[{key:"render",value:function(){var t=this.state,e=t.good,n=e+t.neutral+t.bad,a=Math.floor(e/n*100);return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(v,{title:"Please leave feedback",children:Object(h.jsx)(x,{options:["good","neutral","bad"],onLeaveFeedback:this.handleButtonClick})}),Object(h.jsxs)(v,{title:"Statistics",children:[n?Object(h.jsx)(p,{good:this.state.good,neutral:this.state.neutral,bad:this.state.bad,total:n,positivePercentage:a}):null,n?null:Object(h.jsx)(C,{message:"No feedback given"})]})]})}}]),n}(a.Component),_=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,19)).then((function(e){var n=e.getCLS,a=e.getFID,c=e.getFCP,r=e.getLCP,s=e.getTTFB;n(t),a(t),c(t),r(t),s(t)}))};s.a.render(Object(h.jsx)(c.a.StrictMode,{children:Object(h.jsx)(N,{})}),document.getElementById("root")),_()},6:function(t,e,n){t.exports={text:"Statistics_text__2ifxb"}}},[[18,1,2]]]);
//# sourceMappingURL=main.5dd0d097.chunk.js.map