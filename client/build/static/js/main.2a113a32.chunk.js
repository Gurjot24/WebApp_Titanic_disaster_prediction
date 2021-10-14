(this["webpackJsonpfrontend-titanic"]=this["webpackJsonpfrontend-titanic"]||[]).push([[0],{117:function(e,a,t){e.exports=t(230)},122:function(e,a,t){},124:function(e,a,t){},230:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(29),c=t.n(r),s=(t(122),t(115)),i=t(234),m=t(235),o=t(237),u=t(238),p=t(240),E=t(239),b=t(236);t(123),t(124);var d=function(){var e=Object(n.useState)({}),a=Object(s.a)(e,2),t=a[0],r=a[1],c=100*t.percentage,d=0===Object.keys(t).length?"":"".concat(t.value," with ").concat(c.toFixed(2)," %");return l.a.createElement("div",{className:"page-container"},l.a.createElement("div",{className:"container content-wrap"},l.a.createElement(i.a,{className:"title"},"Titanic Survivors"),l.a.createElement(i.a,null,l.a.createElement(m.a,{xs:24,xl:12},l.a.createElement(o.a,{name:"nest-messages",onFinish:function(e){fetch("https://titanic-web-ml.herokuapp.com/predict",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e.passager)}).then((function(e){return e.json()})).then((function(e){r(e)}))},validateMessages:{required:"${label} is required!",types:{email:"${label} is not validate email!",number:"${label} is not a validate number!"},number:{range:"${label} must be between ${min} and ${max}"}}},l.a.createElement(i.a,null,l.a.createElement(o.a.Item,{name:["passager","pclass"],label:"P-class",rules:[{required:!0}]},l.a.createElement(u.a.Group,null,[1,2,3].map((function(e,a){return l.a.createElement(u.a,{key:a,value:e},e,"st Ticket class")}))))),l.a.createElement(i.a,null,l.a.createElement(m.a,{span:12},l.a.createElement(o.a.Item,{name:["passager","fare"],label:"Fare",rules:[{required:!0,type:"number",min:0,max:513}]},l.a.createElement(p.a,null))),l.a.createElement(m.a,{span:12},l.a.createElement(o.a.Item,{name:["passager","age"],label:"Age",rules:[{required:!0,type:"number",min:0,max:80}]},l.a.createElement(p.a,null)))),l.a.createElement(i.a,null,l.a.createElement(m.a,{span:12},l.a.createElement(o.a.Item,{name:["passager","sibsp"],label:"Sibps",rules:[{required:!0,type:"number",min:0,max:8}]},l.a.createElement(p.a,null))),l.a.createElement(m.a,{span:12},l.a.createElement(o.a.Item,{name:["passager","parch"],label:"Parch",rules:[{required:!0,type:"number",min:0,max:6}]},l.a.createElement(p.a,null)))),l.a.createElement(i.a,null,l.a.createElement(m.a,{span:12},l.a.createElement(o.a.Item,{name:["passager","sex"],label:"Sex",rules:[{required:!0}]},l.a.createElement(u.a.Group,null,l.a.createElement(u.a,{value:"female"},"Female"),l.a.createElement(u.a,{value:"male"},"Male")))),l.a.createElement(m.a,{span:12},l.a.createElement(o.a.Item,{name:["passager","embarked"],label:"Embarked",rules:[{required:!0}]},l.a.createElement(u.a.Group,null,["C","Q","S"].map((function(e,a){return l.a.createElement(u.a,{key:a,value:e},e)})))))),l.a.createElement(o.a.Item,{wrapperCol:{span:12,offset:6}},l.a.createElement(E.a,{type:"primary",htmlType:"submit"},"Submit")))),l.a.createElement(m.a,{className:"answer",xs:24,xl:12},"Would you survive? ",d)),l.a.createElement(i.a,{className:"legend"},l.a.createElement(b.a,null,l.a.createElement("h5",null,"About:"),"This is a ",l.a.createElement("a",{href:"https://www.kaggle.com/c/titanic",target:"_blank"},"titanic disaster")," solution. This proposal predict whether a passenger will be able to survive the disaster"),l.a.createElement(b.a,null,l.a.createElement("h5",null,"Form description:"),l.a.createElement("ul",null,l.a.createElement("li",null,"Pclass - Ticket class (A proxy for socio-economic status) 1 = Upper, 2 = Middle, 3 = Lower"),l.a.createElement("li",null,"Fare - Ticket value"),l.a.createElement("li",null,"Age - Age in years "),l.a.createElement("li",null,"Sibps - Number of siblings / spouses aboard the Titanic "),l.a.createElement("li",null,"Parch - Number of parents / children aboard the Titanic "),l.a.createElement("li",null,"Sex - Sex "),l.a.createElement("li",null,"Embarked - Port of Embarkation C = Cherbourg, Q = Queenstown, S = Southampton"))),l.a.createElement(b.a,null,l.a.createElement("h5",null,"Algorithm:"),"As a predictor, a logistic regression with 81% accuracy was used."))),l.a.createElement("footer",{className:"footer"},"Created By - ",l.a.createElement("a",{href:"https://github.com/viniCerutti",target:"_blank"}," Vinicius Cerutti ")))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(d,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[117,1,2]]]);
//# sourceMappingURL=main.2a113a32.chunk.js.map