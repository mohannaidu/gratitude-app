(this.webpackJsonpgratitude=this.webpackJsonpgratitude||[]).push([[0],{119:function(e,t,n){"use strict";n.r(t);var a=n(4),c=n.n(a),r=n(24),i=n.n(r),o=(n(62),n(23)),s=n.n(o),l=n(30),u=n(29),d=(n(64),n(65),n(47)),f=n(49),b=n(31),h=n(32),j=n(27),v=n(55),p=n(54),m=(n(70),n(7)),g=function(e){Object(v.a)(n,e);var t=Object(p.a)(n);function n(e){var a;return Object(b.a)(this,n),(a=t.call(this,e)).textInput=void 0,a.focus=function(){var e=a.textInput.current;if(e){var t=e.value;e.focus(),e.value="",e.value=t}},a.handleKeyDown=function(e){if("Enter"===e.key){var t=a.getTextAreaLineCounter(a.props.entry);a.props.handleCallback(a.props.entry),a.setState({counter:t+1},(function(){a.props.onEntryChange(a.props.entry+"\n"+a.state.counter+". ")})),e.preventDefault(),e.stopPropagation()}},a.handleChange=function(e){a.props.onEntryChange(e.target.value)},a.textInput=c.a.createRef(),a.handleChange=a.handleChange.bind(Object(j.a)(a)),a.handleKeyDown=a.handleKeyDown.bind(Object(j.a)(a)),a}return Object(h.a)(n,[{key:"componentDidMount",value:function(){this.focus()}},{key:"getTextAreaLineCounter",value:function(e){return e.split(/\r?\n/).length}},{key:"render",value:function(){return Object(m.jsx)("textarea",{ref:this.textInput,value:this.props.entry,onKeyDown:this.handleKeyDown,onChange:this.handleChange,spellCheck:"false"})}}]),n}(a.Component),O=n(51),x=n.n(O),y=(n(72),n(18)),N=(n(123),n(73),{firebase:{apiKey:"AIzaSyCttZecFRXSssN4I5TX7257K5OXRlFQVbQ",authDomain:"begindailygratitude.firebaseapp.com",databaseURL:"https://begindailygratitude-default-rtdb.firebaseio.com",projectId:"begindailygratitude",storageBucket:"begindailygratitude.appspot.com",messagingSenderId:"1036161507454",appId:"1:1036161507454:web:1a2019ff80eb671568382f",measurementId:"G-T9HSXJ6V9J"}}),w=y.a.initializeApp(N.firebase),C={google:new y.a.auth.GoogleAuthProvider},k=y.a.auth(),D=w.firestore(),A=function(){function e(){Object(b.a)(this,e)}return Object(h.a)(e,[{key:"getAllGratitudeByUserAndDate",value:function(e,t){return new Promise(function(){var n=Object(l.a)(s.a.mark((function n(a,c){var r,i,o,l,u;return s.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(r="",i=y.a.firestore.Timestamp.fromDate(new Date(e+" 00:00:00")),void 0===t){n.next=8;break}return o=D.collection("users").doc(t),n.next=6,o.collection("entry").where("date_of_entry","==",i).get();case 6:(l=n.sent).empty?a(""):(u=1,l.docs.forEach((function(e){console.log(e.data().text),1===u?(r=e.data().text,a(r)):a(""),u++})));case 8:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}())}},{key:"getAll",value:function(){return D.collection("users").get()}},{key:"create",value:function(e,t){var n,a,c,r=y.a.firestore.Timestamp.fromDate(new Date(t+" 00:00:00"));c=null===(n=k.currentUser)||void 0===n?void 0:n.uid;null===(a=k.currentUser)||void 0===a||a.email;var i=D.collection("users");void 0!==c&&i.doc(c).collection("entry").where("date_of_entry","==",r).get().then((function(t){t.empty?i.doc(c).collection("entry").add({date_of_entry:r,text:e}):i.doc(c).collection("entry").doc(t.docs[0].id).update({date_of_entry:r,text:e})}))}},{key:"update",value:function(e,t){return D.collection("users").doc(e).update(t)}},{key:"delete",value:function(e){return D.collection("users").doc(e).delete()}}]),e}();function I(){var e=Object(a.useState)(new Date),t=Object(u.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)(""),i=Object(u.a)(r,2),o=i[0],b=i[1],h=Object(a.useState)({isAuthenticated:!1,name:""}),j=Object(u.a)(h,2),v=j[0],p=j[1],O=new A,y=Object(a.useState)(""),N=Object(u.a)(y,2),w=N[0],D=N[1];Object(a.useEffect)((function(){k.onAuthStateChanged((function(e){if(e){var t,n,a=null===(t=k.currentUser)||void 0===t?void 0:t.displayName,c=null===(n=k.currentUser)||void 0===n?void 0:n.uid;p({isAuthenticated:!0,name:a}),S(c)}else console.log("No user detected"),p({isAuthenticated:!1,name:""})}))}),[]);var I,S=function(){var e=Object(l.a)(s.a.mark((function e(t){var n,a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=new Date,a=n.getFullYear()+"-"+(n.getMonth()+1)+"-"+n.getDate(),O.getAllGratitudeByUserAndDate(a,t).then((function(e){D(e||"1. ")}));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),T=function(e){""!==o&&b(""),function(e){return new Promise((function(t,n){k.signInWithPopup(e).then((function(e){return t(e)})).catch((function(e){return n(e)}))}))}(e).then((function(e){var t;p({isAuthenticated:!0,name:null===(t=e.user)||void 0===t?void 0:t.displayName})})).catch((function(e){b(e.message)}))};function F(e){return Object(m.jsx)("button",{className:"custom",onClick:e.onClick,children:Object(m.jsx)(d.a,{icon:f.a})})}function P(e){return Object(m.jsx)("button",{className:"custom",onClick:e.onClick,children:Object(m.jsx)(d.a,{icon:f.b})})}return I=v.isAuthenticated?Object(m.jsx)(P,{onClick:function(){p({isAuthenticated:!1,name:""})}}):Object(m.jsx)(F,{onClick:function(){T(C.google),p({isAuthenticated:!0,name:""})}}),Object(m.jsxs)("div",{className:"container-fluid",children:[Object(m.jsx)("div",{className:"row",children:Object(m.jsx)("div",{className:"col-md-6 offset-md-3",children:Object(m.jsxs)("nav",{className:"navbar navbar-expand-lg navbar-light bg-light",children:[Object(m.jsx)("div",{className:"navbar-brand",children:Object(m.jsx)("h1",{className:"display-3 text-muted",children:"Thankful Diary"})}),Object(m.jsx)("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(m.jsx)("span",{className:"navbar-toggler-icon"})}),Object(m.jsx)("div",{className:"collapse navbar-collapse justify-content-end",id:"navbarNav",children:Object(m.jsx)("ul",{className:"navbar-nav",children:Object(m.jsx)("li",{className:"nav-item",children:I})})})]})})}),Object(m.jsxs)("div",{className:"row",children:[Object(m.jsx)("div",{className:"col-md-3 outside"}),Object(m.jsx)("div",{className:"col-md-6",children:Object(m.jsxs)("div",{className:"row",children:[Object(m.jsxs)("div",{className:"col-md-6",children:["Welcome ",v.name]}),Object(m.jsx)("div",{className:"col-md-6 calendar",children:Object(m.jsx)(x.a,{selected:n,wrapperClassName:"datePicker",onChange:function(e){return c(e)}})})]})}),Object(m.jsx)("div",{className:"col-md-3 outside"})]}),Object(m.jsx)("div",{className:"row",children:Object(m.jsx)("div",{className:"col-md-6 offset-md-3",children:Object(m.jsx)(g,{entry:w,handleCallback:function(e){var t=n.getFullYear()+"-"+(n.getMonth()+1)+"-"+n.getDate();console.log(e),O.create(e,t)},onEntryChange:function(e){D(e)}})})})]})}var S=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,127)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),a(e),c(e),r(e),i(e)}))};i.a.render(Object(m.jsx)(c.a.StrictMode,{children:Object(m.jsx)(I,{})}),document.getElementById("root")),S()},62:function(e,t,n){},64:function(e,t,n){},70:function(e,t,n){}},[[119,1,2]]]);
//# sourceMappingURL=main.f6111ff6.chunk.js.map