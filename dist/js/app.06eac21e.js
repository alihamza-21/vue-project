(function(e){function t(t){for(var r,a,s=t[0],u=t[1],c=t[2],l=0,f=[];l<s.length;l++)a=s[l],o[a]&&f.push(o[a][0]),o[a]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);d&&d(t);while(f.length)f.shift()();return i.push.apply(i,c||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,a=1;a<n.length;a++){var s=n[a];0!==o[s]&&(r=!1)}r&&(i.splice(t--,1),e=u(u.s=n[0]))}return e}var r={},a={app:0},o={app:0},i=[];function s(e){return u.p+"js/"+({about:"about"}[e]||e)+"."+{about:"c0e6344f"}[e]+".js"}function u(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(e){var t=[],n={about:1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise(function(t,n){for(var r="css/"+({about:"about"}[e]||e)+"."+{about:"c3e936b2"}[e]+".css",o=u.p+r,i=document.getElementsByTagName("link"),s=0;s<i.length;s++){var c=i[s],l=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(l===r||l===o))return t()}var f=document.getElementsByTagName("style");for(s=0;s<f.length;s++){c=f[s],l=c.getAttribute("data-href");if(l===r||l===o)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var r=t&&t.target&&t.target.src||o,i=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=r,delete a[e],d.parentNode.removeChild(d),n(i)},d.href=o;var p=document.getElementsByTagName("head")[0];p.appendChild(d)}).then(function(){a[e]=0}));var r=o[e];if(0!==r)if(r)t.push(r[2]);else{var i=new Promise(function(t,n){r=o[e]=[t,n]});t.push(r[2]=i);var c,l=document.createElement("script");l.charset="utf-8",l.timeout=120,u.nc&&l.setAttribute("nonce",u.nc),l.src=s(e),c=function(t){l.onerror=l.onload=null,clearTimeout(f);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src,i=new Error("Loading chunk "+e+" failed.\n("+r+": "+a+")");i.type=r,i.request=a,n[1](i)}o[e]=void 0}};var f=setTimeout(function(){c({type:"timeout",target:l})},12e4);l.onerror=l.onload=c,document.head.appendChild(l)}return Promise.all(t)},u.m=e,u.c=r,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)u.d(n,r,function(t){return e[t]}.bind(null,r));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/",u.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=t,c=c.slice();for(var f=0;f<c.length;f++)t(c[f]);var d=l;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"3f9d":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("f751"),n("097d");var r=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("div",{staticClass:"nav"},[n("router-link",{staticClass:"nav__link",attrs:{to:"/"}},[e._v("Home")]),n("router-link",{staticClass:"nav__link",attrs:{to:"/about"}},[e._v("About")])],1),n("router-view")],1)},o=[],i=(n("5c0b"),n("2877")),s={},u=Object(i["a"])(s,a,o,!1,null,null,null),c=u.exports,l=n("8c4f"),f=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home"},[n("weatherWidget")],1)},d=[],p=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[this.$store.state.dataIsRecived?n("div",{staticClass:"weather-widget"},[n("p",{staticClass:"weather-widget__city"},[e._v(e._s(e.weather.city_name))]),n("h2",{staticClass:"weather-widget__temp"},[e._v(e._s(e.weather.temp)),n("span",[e._v("°C")])]),n("p",{staticClass:"weather-widget__status"},[e._v(e._s(e.weather.weather.description))])]):n("div",{staticClass:"weather-widget"},[n("img",{attrs:{src:"spinner.svg",alt:""}})])])},h=[],v={computed:{weather:function(){return this.$store.state.weather}},created:function(){this.$store.dispatch("updateWeather")}},m=v,b=(n("6fa2"),Object(i["a"])(m,p,h,!1,null,"65537994",null)),g=b.exports,w={name:"home",components:{weatherWidget:g}},_=w,y=(n("e5a6"),Object(i["a"])(_,f,d,!1,null,"2de48d42",null)),C=y.exports;r["a"].use(l["a"]);var E=new l["a"]({mode:"history",base:"/",routes:[{path:"/",name:"home",component:C},{path:"/about",name:"about",component:function(){return n.e("about").then(n.bind(null,"f820"))}}]}),j=n("2f62"),T=n("bc3a"),A=n.n(T),O="b60f3577e8eb46f089853e2a9fd7d744",k="https://api.weatherbit.io/v2.0/current?city=Kiev,UA&key=".concat(O),P=A.a.create({baseURL:k,withCredentials:!1,headers:{Accept:"application/json","Content-Type":"application/json"}}),x={getWeather:function(){return P.get()}};r["a"].use(j["a"]);var S=new j["a"].Store({state:{weather:{},dataIsRecived:!1},mutations:{UPDATE_WEATHER:function(e){x.getWeather().then(function(t){e.weather=t.data.data[0],e.dataIsRecived=!0,console.log(t)}).catch(function(e){console.log("There was an error:",e.response)})}},actions:{updateWeather:function(e){e.commit("UPDATE_WEATHER")}}});n("f5df");r["a"].config.productionTip=!1,new r["a"]({router:E,store:S,render:function(e){return e(c)}}).$mount("#app")},"5c0b":function(e,t,n){"use strict";var r=n("e332"),a=n.n(r);a.a},"6fa2":function(e,t,n){"use strict";var r=n("3f9d"),a=n.n(r);a.a},de45:function(e,t,n){},e332:function(e,t,n){},e5a6:function(e,t,n){"use strict";var r=n("de45"),a=n.n(r);a.a}});
//# sourceMappingURL=app.06eac21e.js.map