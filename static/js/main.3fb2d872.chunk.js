(this.webpackJsonpmodusreactapp=this.webpackJsonpmodusreactapp||[]).push([[0],{112:function(e,t,a){e.exports=a.p+"static/media/background-1.f4f7f1bb.png"},113:function(e,t,a){e.exports=a.p+"static/media/background-2.92a311c4.png"},114:function(e,t,a){e.exports=a.p+"static/media/background-3.20f71cf4.png"},115:function(e,t,a){e.exports=a.p+"static/media/star.8f49b044.svg"},116:function(e,t,a){e.exports=a.p+"static/media/starOutline.931c3532.svg"},117:function(e,t,a){e.exports=a.p+"static/media/room-2.d7cef0d5.png"},118:function(e,t,a){e.exports=a.p+"static/media/room-3.3d8d66c3.png"},119:function(e,t,a){e.exports=a.p+"static/media/room-4.b5ebf46a.png"},120:function(e,t,a){e.exports=a.p+"static/media/room-5.5fe5f577.png"},121:function(e,t,a){e.exports=a.p+"static/media/convenience.42ab1b73.svg"},122:function(e,t,a){e.exports=a.p+"static/media/cosiness.b3249b83.svg"},123:function(e,t,a){e.exports=a.p+"static/media/logo.38e729eb.svg"},124:function(e,t,a){e.exports=a.p+"static/media/twitter.d042f79d.svg"},125:function(e,t,a){e.exports=a.p+"static/media/facebook.6b1abf02.svg"},126:function(e,t,a){e.exports=a.p+"static/media/instagram.104bbadd.svg"},128:function(e,t,a){e.exports=a(165)},134:function(e,t,a){},135:function(e,t,a){},136:function(e,t,a){},137:function(e,t,a){},156:function(e,t,a){},159:function(e,t,a){},160:function(e,t,a){},161:function(e,t,a){},162:function(e,t,a){},163:function(e,t,a){},164:function(e,t,a){},165:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(53),o=a.n(s),i=(a(133),a(4)),c=a(5),l=a(7),m=a(6),u=a(8),d=a(26),h=a(34),p=(a(134),a(87),function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"main-container"},this.props.children)}}]),t}(r.a.Component)),f=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(l.a)(this,Object(m.a)(t).call(this,e))).state={isTitled:"string"===typeof a.props.title},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"form-wrapper"},!0===this.state.isTitled?r.a.createElement("p",{className:"form-wrapper__title"},this.props.title):r.a.createElement(r.a.Fragment,null),this.props.children)}}]),t}(r.a.Component);a(135);function g(e){return"link"===e.type?r.a.createElement("a",{className:"btn",href:e.address},r.a.createElement("p",{className:"btn__text"},e.title)):r.a.createElement("button",{className:"btn","data-href":e.address},r.a.createElement("div",{className:"btn__text"},e.title))}a(136),a(137);var _=a(64),v=(a(138),function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(l.a)(this,Object(m.a)(t).call(this,e))).state={startDate:new Date,endDate:new Date((new Date).getTime()+864e5),seed:Math.floor(1e4*Math.random())},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"datepicker"},!0===this.props.multi?r.a.createElement("div",{className:"datepicker-multi ".concat(this.props.classNameAdd)},r.a.createElement("div",{className:"datepicker__item"},r.a.createElement("label",{className:"datepicker__label",htmlFor:"datepicker-".concat(this.state.seed)},this.props.title[0]),r.a.createElement(_.a,{className:"datepicker__input",id:"datepicker-".concat(this.state.seed),onChange:function(t){return e.setState({startDate:t})},minDate:new Date,selected:this.state.startDate,selectsStart:!0,startDate:this.state.startDate,endDate:this.state.endDate})),r.a.createElement("div",{className:"datepicker__item"},r.a.createElement("label",{className:"datepicker__label",htmlFor:"datepicker-".concat(this.state.seed+1)},this.props.title[1]),r.a.createElement(_.a,{className:"datepicker__input",id:"datepicker-".concat(this.state.seed+1),onChange:function(t){return e.setState({endDate:t})},selected:this.state.endDate,selectsEnd:!0,startDate:this.state.startDate,endDate:this.state.endDate,minDate:this.state.endDate}))):r.a.createElement("div",{className:"datepicker-single"},r.a.createElement(_.a,{minDate:new Date,selected:this.state.startDate,onChange:function(t){return e.setState({startDate:t})}})))}}]),t}(r.a.Component));v.defaultProps={multi:!1,classNameAdd:"",title:["",""]};var E=a(17),b=a.n(E),N=(a(156),a(59)),M=a.n(N),k=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(l.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={total:0,Adults:0,Children:0,Babies:0,isOpenAdditionalMenu:!1},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"changeAdults",value:function(){var e,t=arguments;return b.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:if(!("+"===(e=t.length>0&&void 0!==t[0]?t[0]:"-")&&this.state.total<8)){a.next=6;break}return a.next=4,b.a.awrap(this.setState((function(e){return{Adults:e.Adults+1}})));case 4:a.next=9;break;case 6:if(!("-"===e&&this.state.Adults>0)){a.next=9;break}return a.next=9,b.a.awrap(this.setState((function(e){return{Adults:e.Adults-1}})));case 9:return a.next=11,b.a.awrap(this.setState({total:this.state.Adults+this.state.Babies+this.state.Children}));case 11:case"end":return a.stop()}}),null,this)}},{key:"changeChildren",value:function(){var e,t=arguments;return b.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:if(!("+"===(e=t.length>0&&void 0!==t[0]?t[0]:"-")&&this.state.total<8)){a.next=6;break}return a.next=4,b.a.awrap(this.setState((function(e){return{Children:e.Children+1}})));case 4:a.next=9;break;case 6:if(!("-"===e&&this.state.Children>0)){a.next=9;break}return a.next=9,b.a.awrap(this.setState((function(e){return{Children:e.Children-1}})));case 9:return a.next=11,b.a.awrap(this.setState({total:this.state.Adults+this.state.Babies+this.state.Children}));case 11:case"end":return a.stop()}}),null,this)}},{key:"changeBabies",value:function(){var e,t=arguments;return b.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:if(!("+"===(e=t.length>0&&void 0!==t[0]?t[0]:"-")&&this.state.total<8)){a.next=6;break}return a.next=4,b.a.awrap(this.setState((function(e){return{Babies:e.Babies+1}})));case 4:a.next=9;break;case 6:if(!("-"===e&&this.state.Babies>0)){a.next=9;break}return a.next=9,b.a.awrap(this.setState((function(e){return{Babies:e.Babies-1}})));case 9:return a.next=11,b.a.awrap(this.setState({total:this.state.Adults+this.state.Babies+this.state.Children}));case 11:case"end":return a.stop()}}),null,this)}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"guests"},r.a.createElement("div",{className:"guests__inner",onClick:function(t){document.querySelector(".guests__param").classList.toggle("guests__param--open"),e.setState((function(e){return{isOpenAdditionalMenu:!e.isOpenAdditionalMenu}}))}},r.a.createElement("p",{className:"guests__title"},0===this.state.total?"Enter the value of guests":"guests: "+this.state.total),r.a.createElement("img",{src:M.a,alt:"arrow",className:"guests__arrow ".concat(!0===this.state.isOpenAdditionalMenu?"guests__arrow--open":"")})),r.a.createElement("div",{className:"guests__param"},r.a.createElement("div",{className:"guests__item"},r.a.createElement("p",{className:"guests__title"},"Adults"),r.a.createElement("div",{className:"guests__control"},r.a.createElement("button",{className:"guests__button ".concat(0===this.state.Adults?"guests__button--enougth":""),onClick:function(t){t.preventDefault(),e.changeAdults()}},"-"),this.state.Adults,r.a.createElement("button",{className:"guests__button ".concat(8===this.state.total?"guests__button--enougth":""),onClick:function(t){t.preventDefault(),e.changeAdults("+")}},"+"))),r.a.createElement("div",{className:"guests__item"},r.a.createElement("p",{className:"guests__title"},"Children"),r.a.createElement("div",{className:"guests__control"},r.a.createElement("button",{className:"guests__button ".concat(0===this.state.Children?"guests__button--enougth":""),onClick:function(t){t.preventDefault(),e.changeChildren()}},"-"),this.state.Children,r.a.createElement("button",{className:"guests__button ".concat(8===this.state.total?"guests__button--enougth":""),onClick:function(t){t.preventDefault(),e.changeChildren("+")}},"+"))),r.a.createElement("div",{className:"guests__item"},r.a.createElement("p",{className:"guests__title"},"Babies"),r.a.createElement("div",{className:"guests__control"},r.a.createElement("button",{className:"guests__button ".concat(0===this.state.Babies?"guests__button--enougth":""),onClick:function(t){t.preventDefault(),e.changeBabies()}},"-"),this.state.Babies,r.a.createElement("button",{className:"guests__button ".concat(8===this.state.total?"guests__button--enougth":""),onClick:function(t){t.preventDefault(),e.changeBabies("+")}},"+"))),r.a.createElement("div",{className:"guests__item"},r.a.createElement("div",{className:"guests__clean",onClick:function(){e.setState({total:0,Children:0,Adults:0,Babies:0})}},"Clear"),r.a.createElement("div",{className:"guests__accept"},"Accept"))))}}]),t}(r.a.Component),x="/modusreactapp/";function w(e){return r.a.createElement(f,{title:"Find room for you wishes"},r.a.createElement("form",null,r.a.createElement(v,{multi:!0,classNameAdd:"datepicker--room-search",title:["Arrived","Shipped"]}),r.a.createElement("label",{htmlFor:"guests",className:"datepicker__label datepicker__label--guests"},"Guests"),r.a.createElement(k,null),r.a.createElement("div",{className:"btn--find-room"},r.a.createElement(d.b,{to:"".concat(x,"room")},r.a.createElement(g,{title:"Find room",type:"Link",locate:"/room"})))))}a(159);var y=a(112),O=a.n(y),j=a(113),C=a.n(j),D=a(114),A=a.n(D),L=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(l.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={bgTimer:"",bgImgs:[O.a,C.a,A.a]},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){document.querySelector(".home-page").style.backgroundImage="url('".concat(this.state.bgImgs[Math.floor(3*Math.random())],"')")}},{key:"render",value:function(){return r.a.createElement("div",{className:"home-page"},r.a.createElement(p,null,r.a.createElement(w,null)))}}]),t}(r.a.Component),S=(a(160),a(115)),B=a.n(S),F=a(116),P=a.n(F);function R(e){var t=e.rating,a=new Array(5);return a.fill(""),r.a.createElement("div",null,a.map((function(e,a){return 0!==t&&"undefined"!==typeof t?(e=r.a.createElement("img",{key:a,src:B.a,alt:"star"}),t--):e=r.a.createElement("img",{key:a,src:P.a,alt:"star"}),e})))}a(33);var T=a(85),I=a.n(T),G=function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=Object.values(this.props.reviews).reduce((function(e,t){return e+t}));return r.a.createElement(d.b,{to:"".concat(x,"room/").concat(this.props.slug)},r.a.createElement("div",{className:"mini-room"},r.a.createElement("img",{className:"mini-room__img",src:null===this.props.img[0]?I.a:this.props.img[0],alt:"room"}),r.a.createElement("div",{className:"mini-room__description"},r.a.createElement("div",{className:"mini-room__item"},r.a.createElement("span",{className:"mini-room__left"},"\u2116 ",this.props.hotelRoom," ",!0===this.props.isLux?r.a.createElement("span",{className:"mini-room__lux"},"lux"):""),r.a.createElement("span",{className:"mini-room__right"},r.a.createElement("span",{className:"mini-room__value"},"$",this.props.costPerDay)," per day")),r.a.createElement("div",{className:"mini-room__item"},r.a.createElement(R,{rating:this.props.rating}),r.a.createElement("span",{className:"mini-room__right"},r.a.createElement("span",{className:"mini-room__value"},e)," reviews")))))}}]),t}(r.a.Component);G.defaultProps={slug:"None",img:I.a,hotelRoom:999,isLux:!0,costPerDay:9999,rating:3,reviews:0};var q=a(60),H=a.n(q),U=a(117),J=a.n(U),W=a(118),K=a.n(W),Y=a(119),$=a.n(Y),z=a(120),Q=a.n(z),V=a(35),X=a.n(V),Z=a(36),ee=a.n(Z),te=a(75),ae=a.n(te),ne=a(121),re=a.n(ne),se=a(122),oe=a.n(se),ie=[{slug:"lux-room",img:[H.a,X.a,ee.a],hotelRoom:Math.floor(999*Math.random()+1),isLux:!1,costPerDay:Math.floor(8801*Math.random()+200),rating:Math.floor(5*Math.random()+1),reviews:{excellent:Math.floor(100*Math.random()+1),nice:Math.floor(100*Math.random()+1),good:Math.floor(100*Math.random()+1),bad:Math.floor(100*Math.random()+1)},details:["comfort","convenience","cosiness"]},{slug:"simple-room",img:[$.a,X.a,ee.a],hotelRoom:Math.floor(999*Math.random()+1),isLux:!0,costPerDay:Math.floor(8801*Math.random()+200),rating:Math.floor(5*Math.random()+1),reviews:{excellent:Math.floor(100*Math.random()+1),nice:Math.floor(100*Math.random()+1),good:Math.floor(100*Math.random()+1),bad:Math.floor(100*Math.random()+1)},details:["comfort","cosiness"]},{slug:"soft-room",img:[J.a,X.a,ee.a],hotelRoom:Math.floor(999*Math.random()+1),isLux:!1,costPerDay:Math.floor(8801*Math.random()+200),rating:Math.floor(5*Math.random()+1),reviews:{excellent:Math.floor(100*Math.random()+1),nice:Math.floor(100*Math.random()+1),good:Math.floor(100*Math.random()+1),bad:Math.floor(100*Math.random()+1)},details:["comfort","convenience","cosiness"]},{slug:"hard-room",img:[K.a,X.a,ee.a],hotelRoom:Math.floor(999*Math.random()+1),isLux:!1,costPerDay:Math.floor(8801*Math.random()+200),rating:Math.floor(5*Math.random()+1),reviews:{excellent:Math.floor(100*Math.random()+1),nice:Math.floor(100*Math.random()+1),good:Math.floor(100*Math.random()+1),bad:Math.floor(100*Math.random()+1)},details:["comfort","convenience","cosiness"]},{slug:"luxary-room",img:[Q.a,X.a,ee.a],hotelRoom:Math.floor(999*Math.random()+1),isLux:!0,costPerDay:Math.floor(8801*Math.random()+200),rating:Math.floor(5*Math.random()+1),reviews:{excellent:Math.floor(100*Math.random()+1),nice:Math.floor(100*Math.random()+1),good:Math.floor(100*Math.random()+1),bad:Math.floor(100*Math.random()+1)},details:["comfort","convenience","cosiness"]},{slug:"exclusive-room",img:[null,null,null],hotelRoom:Math.floor(999*Math.random()+1),isLux:!1,costPerDay:Math.floor(8801*Math.random()+200),rating:Math.floor(5*Math.random()+1),reviews:{excellent:Math.floor(100*Math.random()+1),nice:Math.floor(100*Math.random()+1),good:Math.floor(100*Math.random()+1),bad:Math.floor(100*Math.random()+1)},details:["comfort","convenience","cosiness"]},{slug:"allIn-room",img:[null,null,null],hotelRoom:Math.floor(999*Math.random()+1),isLux:!0,costPerDay:Math.floor(8801*Math.random()+200),rating:Math.floor(5*Math.random()+1),reviews:{excellent:Math.floor(100*Math.random()+1),nice:Math.floor(100*Math.random()+1),good:Math.floor(100*Math.random()+1),bad:Math.floor(100*Math.random()+1)},details:["comfort","convenience","cosiness"]}],ce={comfort:{img:ae.a,title:"Comfort",subTitle:"This is room has noise canceling windows"},convenience:{img:re.a,title:"Convenience",subTitle:"Windows in the each room"},cosiness:{img:oe.a,title:"Cosiness",subTitle:"Here's fireplace"}},le=function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"room-page"},r.a.createElement(p,null,r.a.createElement("div",{className:"room-page__inner"},ie.map((function(e,t){return r.a.createElement(G,{key:t,slug:e.slug,img:null!==e.img?e.img:null,hotelRoom:e.hotelRoom,isLux:e.isLux,costPerDay:e.costPerDay,rating:e.rating,reviews:e.reviews})})))))}}]),t}(r.a.Component),me=a(127);function ue(e){e.children;var t=e.title,a=e.subtitle;return r.a.createElement("div",{className:"banner"},r.a.createElement("h1",{className:"banner__title"},t),r.a.createElement("p",{className:"banner__subtitle"},a))}a(161);var de=function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e,t,a=(e=this.props.match.params.slug,t=ie,Object(me.a)(t).find((function(t){return t.slug===e})));if(!a)return r.a.createElement(ue,{title:"no such page",subtitle:"Somewhen here will be room, but no now"});a.img,a.hotelRoom,a.isLux,a.costPerDay;var n=a.reviews,s=a.details,o=function(e){var t=Object.values(e).reduce((function(e,t){return e+t})),a=[];for(var n in e)a.push(e[n]/t*100);a=a.reverse();for(var r=[],s=0;s<a.length;s++){var o={lengthOfLine:a[s]-.5,revLength:100-(a[s]-.5),position:0===s?24.5:r[s-1].position-a[s-1]};r.push(o)}return r.push(t),r}(n);return r.a.createElement("div",{className:"single-room"},r.a.createElement("header",{className:"single-room__header"},r.a.createElement("img",{src:H.a,alt:"img",className:"single-room__img single-room__main-img"}),r.a.createElement("img",{src:X.a,alt:"img",className:"single-room__img"}),r.a.createElement("img",{src:ee.a,alt:"img",className:"single-room__img"})),r.a.createElement(p,null,r.a.createElement("div",{className:"single-room__inner"},r.a.createElement("div",{className:"single-room__info"},r.a.createElement("div",{className:"single-room__description"},r.a.createElement("div",{className:"details"},r.a.createElement("h2",{className:"single-room__title"},"Room Details"),r.a.createElement("div",{className:"details__inner"},s.map((function(e){return r.a.createElement(he,{item:e})})))),r.a.createElement("div",{className:"single-room__impressions"},r.a.createElement("h2",{className:"single-room__title"},"Room Impressions"),r.a.createElement("div",{className:"reviews"},r.a.createElement("svg",{width:"100%",height:"100%",viewBox:"0 0 42 42",className:"reviews__diagram"},r.a.createElement("linearGradient",{id:"linear-gradient"},r.a.createElement("stop",{offset:"0%","stop-color":"#FFE39C"}),r.a.createElement("stop",{offset:"100%","stop-color":"#FFBA9C"})),r.a.createElement("linearGradient",{id:"linear-gradient-2"},r.a.createElement("stop",{offset:"0%","stop-color":"#6FCF97"}),r.a.createElement("stop",{offset:"100%","stop-color":"#66D2EA"})),r.a.createElement("linearGradient",{id:"linear-gradient-3"},r.a.createElement("stop",{offset:"0%","stop-color":"#BC9CFF"}),r.a.createElement("stop",{offset:"100%","stop-color":"#8BA4F9"})),r.a.createElement("linearGradient",{id:"linear-gradient-4"},r.a.createElement("stop",{offset:"0%","stop-color":"#919191"}),r.a.createElement("stop",{offset:"100%","stop-color":"#3D4975"})),r.a.createElement("circle",{className:"donut-hole",cx:"21",cy:"21",r:"15.91549430918954",fill:"#fff"}),r.a.createElement("circle",{className:"donut-ring",cx:"21",cy:"21",r:"15.91549430918954",fill:"transparent",stroke:"#fff","stroke-width":"1"}),r.a.createElement("circle",{className:"donut-segment",cx:"21",cy:"21",r:"15.91549430918954",fill:"transparent",stroke:"url(#linear-gradient-4)","stroke-width":"1","stroke-dasharray":"".concat(o[0].lengthOfLine," ").concat(o[0].revLength),"stroke-dashoffset":"".concat(o[0].position)}),r.a.createElement("circle",{className:"donut-segment",cx:"21",cy:"21",r:"15.91549430918954",fill:"transparent",stroke:"url(#linear-gradient-3)","stroke-width":"1","stroke-dasharray":"".concat(o[1].lengthOfLine," ").concat(o[1].revLength),"stroke-dashoffset":"".concat(o[1].position)}),r.a.createElement("circle",{className:"donut-segment",cx:"21",cy:"21",r:"15.91549430918954",fill:"transparent",stroke:"url(#linear-gradient-2)","stroke-width":"1","stroke-dasharray":"".concat(o[2].lengthOfLine," ").concat(o[2].revLength),"stroke-dashoffset":"".concat(o[2].position)}),r.a.createElement("circle",{className:"donut-segment",cx:"21",cy:"21",r:"15.91549430918954",fill:"transparent",stroke:"url(#linear-gradient)","stroke-width":"1","stroke-dasharray":"".concat(o[3].lengthOfLine," ").concat(o[3].revLength),"stroke-dashoffset":"".concat(o[3].position)}),r.a.createElement("g",{className:"reviews-text"},r.a.createElement("text",{x:"50%",y:"50%",className:"reviews__total"},o[4]),r.a.createElement("text",{x:"50%",y:"50%",className:"reviews__label"},"votes"))),r.a.createElement("div",{className:"reviews__description"},r.a.createElement("p",{className:"reviews__item reviews__item--excellent"},"Excellent reviews"),r.a.createElement("p",{className:"reviews__item reviews__item--nice"},"Nice reviews"),r.a.createElement("p",{className:"reviews__item reviews__item--good"},"Good reviews"),r.a.createElement("p",{className:"reviews__item reviews__item--bad"},"Bad reviews"))))),r.a.createElement("div",{className:"single-room__reviews"}),r.a.createElement("div",{className:"single-room__rules"})),r.a.createElement("div",{className:"single-room__payment"}))))}}]),t}(r.a.Component);function he(e){var t,a,n=e.item,s=(t=n)in(a=ce)?a[t]:null;if(!s)return r.a.createElement(r.a.Fragment,null);var o=s.img,i=s.title,c=s.subTitle;return r.a.createElement("div",{className:"details__item"},r.a.createElement("img",{src:o,alt:"details"}),r.a.createElement("div",{className:"details__info"},r.a.createElement("h2",{className:"details__title"},i),r.a.createElement("p",{className:"details__description"},c)))}function pe(){return r.a.createElement(p,null,r.a.createElement("div",{className:"page-404"},r.a.createElement("h1",{className:"page-404__title ".concat(window.location.href.length>30?"page-404__title--long":"")},"link ",window.location.href," not found"),r.a.createElement("p",{className:"page-404__subtitle"},"I'm sorry, we make this page functional soon")))}a(162);var fe=a(123),ge=a.n(fe);function _e(e){return r.a.createElement("div",{className:"logo"},r.a.createElement("img",{src:ge.a,alt:"logo"}))}var ve=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(l.a)(this,Object(m.a)(t).call(this,e))).props=e,a.state={isLogin:!1,userName:"None"},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("header",{className:"header"},r.a.createElement(p,null,r.a.createElement("header",{className:"header__inner"},r.a.createElement(_e,null),r.a.createElement(Ee,{locate:this.props.links.map((function(e){return e=e.replace(" ",""),e=x+("Home"===e?"":e)})),linksArr:this.props.links,isLogin:this.state.isLogin},!1===this.state.isLogin?r.a.createElement("div",{className:"btnBlock"},r.a.createElement(g,{title:"login"}),r.a.createElement(g,{title:"register"})):r.a.createElement(Me,{name:this.state.userName})),r.a.createElement(Ne,{func:function(){e.navOpen(e.state.isOpen)}}))))}}]),t}(r.a.Component);function Ee(e){var t=e.linksArr.map((function(t,a){return r.a.createElement(be,{locate:e.locate[a],key:a,linkTitle:t})}));return r.a.createElement("nav",{className:"nav ".concat(!0===e.isLogin?"nav--logined":"")},r.a.createElement("section",{className:"nav__menu"},t),r.a.createElement("section",{className:"nav__personalAccount"},e.children))}var be=function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement(d.b,{to:this.props.locate,className:"nav__link"},this.props.linkTitle)}}]),t}(r.a.Component);function Ne(e){return r.a.createElement("div",{className:"hamburgerMenu",onClick:function(){document.querySelector(".nav").classList.toggle("nav--opened")}},r.a.createElement("div",{className:"hamburgerMenu__inner"}))}function Me(e){return r.a.createElement("div",{className:"account"},r.a.createElement("a",{href:"#account",className:"account__link"},e.name))}be.defaultProps={locale:""};a(163);var ke=a(124),xe=a.n(ke),we=a(125),ye=a.n(we),Oe=a(126),je=a.n(Oe),Ce=function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("footer",{className:"footer"},r.a.createElement(p,null,r.a.createElement("section",{className:"footer__inner"},r.a.createElement(De,{className:"footer__item"},r.a.createElement(_e,null),r.a.createElement("div",{className:"footer__description"},"Lorem ipsum dolor sit amet consectetur adipiscing elit aliquam eget nullam pellentesque aliquam curabitur cociis.")),r.a.createElement(De,null,r.a.createElement(Ae,{title:"Navigation",items:["About Us","News","Support","Products"]})),r.a.createElement(De,null,r.a.createElement(Ae,{title:"About us",items:["Who we are","Our team","Careers","Investors"]})),r.a.createElement(De,null,r.a.createElement(Ae,{title:"Support",items:["Documentation","Community","Get in Touch"]})),r.a.createElement(De,null,r.a.createElement(Le,null))),r.a.createElement(Se,{items:[xe.a,ye.a,je.a],alt:["twitter","facebook","instagram"],link:["#","#","#"]})))}}]),t}(r.a.Component);function De(e){return r.a.createElement("div",{className:"footer__item"},e.children)}function Ae(e){return r.a.createElement("article",null,r.a.createElement("h3",{className:"footer__title"},e.title),r.a.createElement("ul",{className:"footer__linklist"},e.items.map((function(e,t){return r.a.createElement("li",{key:t,className:"footer__link"},e)}))))}function Le(){return r.a.createElement("article",{className:"footer__subscribe"},r.a.createElement("h3",{className:"footer__title"},"Subscribe to our newsletter"),r.a.createElement("p",{className:"footer__description"},"Receive our latest news and promotions in your inbox!"),r.a.createElement("form",{action:"",className:"footer__form"},r.a.createElement("input",{type:"email",placeholder:"Your email address",className:"footer__input",id:"SubscribeInput"}),r.a.createElement("label",{htmlFor:"SubscribeInput",className:"footer__label"},r.a.createElement("img",{src:M.a,alt:""}))))}function Se(e){return r.a.createElement("section",{className:"footer__copyright"},r.a.createElement("div",{className:"footer__description"},"Copyright \xa9 2018 Toxin UI Kit. All rights reserved."),r.a.createElement(Be,{items:e.items,alt:e.alt,link:e.link}))}function Be(e){return r.a.createElement("div",{className:"social"},e.items.map((function(t,a){return r.a.createElement("a",{className:"social-icon",key:a,href:e.link[a]},r.a.createElement("img",{src:t,alt:e.alt[a]}))})))}a(164);var Fe=function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement(d.a,null,r.a.createElement(ve,{links:["Home","About Us","Services","Careers","News","Documentation"]}),r.a.createElement(h.c,null,r.a.createElement(h.a,{exact:!0,path:"".concat(x),component:L}),r.a.createElement(h.a,{exact:!0,path:"".concat(x,"room"),component:le}),r.a.createElement(h.a,{exact:!0,path:"".concat(x,"room/:slug"),component:de}),r.a.createElement(h.a,{component:pe})),r.a.createElement(Ce,null))}}]),t}(r.a.Component);o.a.render(r.a.createElement(Fe,null),document.getElementById("root"))},35:function(e,t,a){e.exports=a.p+"static/media/room-1-bedroom.c23680bd.png"},36:function(e,t,a){e.exports=a.p+"static/media/room-1-livingRoom.62111f8e.png"},59:function(e,t,a){e.exports=a.p+"static/media/keyboard-backspace.e198230b.svg"},60:function(e,t,a){e.exports=a.p+"static/media/room-1.3063a8c5.png"},75:function(e,t,a){e.exports=a.p+"static/media/comfort.35a82132.svg"},85:function(e,t,a){e.exports=a.p+"static/media/noPict.d2e2063f.png"},87:function(e,t,a){}},[[128,1,2]]]);
//# sourceMappingURL=main.3fb2d872.chunk.js.map