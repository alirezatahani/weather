(this.webpackJsonpweather=this.webpackJsonpweather||[]).push([[0],{135:function(e,a,t){},136:function(e,a,t){},214:function(e,a,t){},215:function(e,a,t){},216:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(20),i=t.n(c),o=(t(135),t(32)),g=t.n(o),d=t(44),h=t(42),s=t(34);function y(e){return e.status>=200&&e.status<300?l(e):e.json().then((function(e){return Promise.reject(e)}))}function l(e){return m.apply(this,arguments)}function m(){return(m=Object(d.a)(g.a.mark((function e(a){return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!a||!a.headers){e.next=9;break}if("application/json"!==a.headers.get("Content-Type")){e.next=5;break}return e.next=4,a.json();case 4:return e.abrupt("return",e.sent);case 5:if("text/plain;charset=UTF-8"!==a.headers.get("Content-Type")){e.next=9;break}return e.next=8,a.text();case 8:return e.abrupt("return",e.sent);case 9:return e.abrupt("return",a);case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var u=function(e,a){var t=function(e){return"http://api.weatherapi.com/v1"+("/"!==e[0]?"/".concat(e):e)}(e),n=a;if(n.headers=n.headers||{},"formdata"===n.type)for(var r in n.body=new FormData,a.data)"string"===typeof r&&a.data.hasOwnProperty(r)&&"undefined"!==typeof a.data[r]&&n.body.append(r,a.data[r]);else n.body=JSON.stringify(a.data),n.headers["Content-Type"]="application/json",n.headers.Accept="application/json";var c=JSON.parse(window.localStorage.getItem("user"));return c&&c.token&&(n.headers.Authorization="Bearer ".concat(c.token)),fetch(t,Object(s.a)({},n)).then(y).then(l)},p=function(e,a){switch(a.type){case"FETCH_INIT":return Object(s.a)(Object(s.a)({},e),{},{isLoading:!0,error:null,response:null});case"FETCH_SUCCESS":return Object(s.a)(Object(s.a)({},e),{},{isLoading:!1,error:null,response:a.payload});case"FETCH_FAILURE":return Object(s.a)(Object(s.a)({},e),{},{isLoading:!1,error:a.payload,response:null});default:return e}};var j=function(e){var a=Object(n.useReducer)(p,{isLoading:!1,error:null,response:null}),t=Object(h.a)(a,2),r=t[0],c=t[1];function i(){return(i=Object(d.a)(g.a.mark((function a(t){var n;return g.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,c({type:"FETCH_INIT"}),a.next=4,u(t.url,t);case 4:n=a.sent,e&&e.onSuccess&&e.onSuccess(n),c({type:"FETCH_SUCCESS",payload:n}),a.next=14;break;case 9:a.prev=9,a.t0=a.catch(0),console.log("here",a.t0),e&&e.onError&&e.onError(a.t0),c({type:"FETCH_FAILURE",payload:a.t0});case 14:case"end":return a.stop()}}),a,null,[[0,9]])})))).apply(this,arguments)}return[r,function(e){return i.apply(this,arguments)}]},I=t.p+"static/media/day.7587ca57.jpg",b=t.p+"static/media/clearNight.fecdaf42.jpg",f=t.p+"static/media/rainyDay.9709840e.jpg",N=t.p+"static/media/rainyNight.bc5b131c.jpg",O=t.p+"static/media/stormNight.3cefe2bb.jpg",x={1e3:{code:1e3,nightImage:"clearNight",dayImage:"day"},1003:{code:1003,nightImage:"clearNight",dayImage:"day"},1006:{code:1006,nightImage:"clearNight",dayImage:"day"},1009:{code:1009,nightImage:"clearNight",dayImage:"day"},1030:{code:1030,nightImage:"clearNight",dayImage:"day"},1063:{code:1063,nightImage:"rainyNight",dayImage:"rainyDay"},1066:{code:1066,nightImage:"rainyNight",dayImage:"rainyDay"},1069:{code:1069,nightImage:"rainyNight",dayImage:"rainyDay"},1072:{code:1072,nightImage:"rainyNight",dayImage:"rainyDay"},1087:{code:1087,nightImage:"stormNight",dayImage:"stormNight"},1114:{code:1114,nightImage:"rainyNight",dayImage:"rainyDay"},1117:{code:1117,nightImage:"rainyNight",dayImage:"rainyDay"},1135:{code:1135,nightImage:"rainyNight",dayImage:"rainyDay"},1147:{code:1147,nightImage:"clearNight",dayImage:"rainyDay"},1150:{code:1150,nightImage:"clearNight",dayImage:"rainyDay"},1153:{code:1153,nightImage:"clearNight",dayImage:"clearNight"},1168:{code:1168,nightImage:"clearNight",dayImage:"clearNight"},1171:{code:1171,nightImage:"clearNight",dayImage:"rainyDay"},1180:{code:1180,nightImage:"clearNight",dayImage:"rainyNight"},1183:{code:1183,nightImage:"clearNight",dayImage:"rainyNight"},1186:{code:1186,nightImage:"clearNight",dayImage:"rainyNight"},1189:{code:1189,nightImage:"clearNight",dayImage:"rainyNight"},1192:{code:1192,nightImage:"clearNight",dayImage:"rainyDay"},1195:{code:1195,nightImage:"clearNight",dayImage:"rainyDay"},1198:{code:1198,nightImage:"clearNight",dayImage:"rainyDay"},1201:{code:1201,nightImage:"clearNight",dayImage:"rainyDay"},1204:{code:1204,nightImage:"clearNight",dayImage:"clearNight"},1207:{code:1207,nightImage:"clearNight",dayImage:"clearNight"},1210:{code:1210,nightImage:"clearNight",dayImage:"clearNight"},1213:{code:1213,nightImage:"clearNight",dayImage:"clearNight"},1216:{code:1216,nightImage:"clearNight",dayImage:"clearNight"},1219:{code:1219,nightImage:"clearNight",dayImage:"rainyDay"},1222:{code:1222,nightImage:"clearNight",dayImage:"clearNight"},1225:{code:1225,nightImage:"clearNight",dayImage:"rainyDay"},1237:{code:1237,nightImage:"clearNight",dayImage:"rainyDay"},1240:{code:1240,nightImage:"clearNight",dayImage:"rainyDay"},1243:{code:1243,nightImage:"clearNight",dayImage:"rainyDay"},1246:{code:1246,nightImage:"clearNight",dayImage:"rainyDay"},1249:{code:1249,nightImage:"clearNight",dayImage:"rainyDay"},1252:{code:1252,nightImage:"clearNight",dayImage:"rainyDay"},1255:{code:1255,nightImage:"clearNight",dayImage:"rainyDay"},1258:{code:1258,nightImage:"clearNight",dayImage:"rainyDay"},1261:{code:1261,nightImage:"clearNight",dayImage:"rainyDay"},1264:{code:1264,nightImage:"clearNight",dayImage:"rainyDay"},1273:{code:1273,nightImage:"clearNight",dayImage:"rainyDay"},1276:{code:1276,nightImage:"clearNight",dayImage:"rainyDay"},1279:{code:1279,nightImage:"clearNight",dayImage:"rainyDay"},1282:{code:1282,nightImage:"clearNight",dayImage:"rainyDay"}};function v(e){var a=[],t=function(t){e[t]&&("object"===typeof e[t]?e[t].forEach((function(e){a.push(encodeURIComponent(t)+"="+encodeURIComponent(e))})):a.push(encodeURIComponent(t)+"="+encodeURIComponent(e[t])))};for(var n in e)t(n);return"?".concat(a.join("&"))}var D=t(219),C=t(223),w=t(224),T=t(225),_=(t(136),t(10)),S=D.a.Text,F=D.a.Title,E={clearNight:b,day:I,rainyNight:N,rainyDay:f,stormNight:O};var k=function(e){var a=e.cityName,t=j(),r=Object(h.a)(t,2),c=r[0],i=c.response,o=(c.loading,c.error,r[1]);Object(n.useEffect)((function(){s()}),[a]);var s=function(){var e=Object(d.a)(g.a.mark((function e(){var t;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=v({q:a,key:"c7691944721c42578bd135700210510"}),e.next=3,o({url:"forecast.json".concat(t)});case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),y=function(e){return e.chance_of_rain?"".concat(e.chance_of_rain,"%"):e.chance_of_snow?"".concat(e.chance_of_snow,"%"):" "};return Object(_.jsx)(_.Fragment,{children:i&&Object(_.jsxs)("div",{className:"weatherWrapper",children:[Object(_.jsx)("img",{src:function(){var e=i.current.condition.code;return i.current.is_day?E[x[e].dayImage]:E[x[e].nightImage]}()}),Object(_.jsxs)("div",{className:"weatherDetail",children:[Object(_.jsxs)(C.a,{children:[Object(_.jsxs)(w.a,{span:16,children:[Object(_.jsx)(F,{level:1,children:i.location.name}),Object(_.jsx)(F,{level:3,children:i.location.country})]}),Object(_.jsx)(w.a,{span:8,children:Object(_.jsxs)(F,{level:2,children:[i.current.temp_c,"\xb0C / ",i.current.temp_f,"\xb0F"," "]})})]}),Object(_.jsx)(C.a,{children:Object(_.jsx)(w.a,{span:24,children:i.forecast.forecastday.map((function(e){return Object(_.jsxs)(_.Fragment,{children:[Object(_.jsx)(w.a,{span:24,children:Object(_.jsxs)(T.b,{children:[Object(_.jsxs)(S,{type:"secondary",children:["H: ",e.day.maxtemp_c,"\xb0C"]})," ",Object(_.jsxs)(S,{type:"secondary",children:["C: ",e.day.mintemp_c,"\xb0C"]})]})}),Object(_.jsx)(w.a,{span:24,className:"weatherDetailHours",children:e.hour.map((function(e){return Object(_.jsxs)("div",{children:[Object(_.jsx)("img",{src:"https:".concat(e.condition.icon)}),Object(_.jsx)(S,{children:y(e)})]})}))})]})}))})})]})]})})},L=t(222),U=t(221),H=t(69),R=t(226),P=t(62),A="SET_LOCATION";t(214),D.a.Title;var J=function(){var e=Object(n.useState)(!1),a=Object(h.a)(e,2),t=a[0],r=a[1],c=Object(n.useState)([]),i=Object(h.a)(c,2),o=i[0],s=i[1],y=Object(n.useState)([]),l=Object(h.a)(y,2),m=l[0],u=l[1],p=j(),I=Object(h.a)(p,2),b=I[0],f=b.response,N=(b.loading,b.error,I[1]),O=Object(P.b)(),x=function(){var e=Object(d.a)(g.a.mark((function e(a){var t;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=v({q:a,key:"c7691944721c42578bd135700210510"}),e.next=3,N({url:"search.json".concat(t)});case 3:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){if(f){var e=f.reduce((function(e,a){return e.push({label:a.name,value:a.name}),e}),[]);s(e)}}),[f]),Object(_.jsxs)("div",{className:"getLocationWrapper",children:[Object(_.jsx)(L.a,{visible:t,onOk:function(){r(!1),O({type:A,payload:m})},onCancel:function(){r(!1)},children:Object(_.jsx)(U.a,{options:o,style:{width:"100%",paddingTop:20},onSelect:function(e){u(e)},onSearch:x,placeholder:"Please Choose Your Location"})}),Object(_.jsx)(H.a,{size:"large",type:"primary",shape:"circle",onClick:function(){r(!0)},icon:Object(_.jsx)(R.a,{})})]})},B=t(220),q=(t(215),B.a.TabPane);var z=function(){var e=Object(P.c)((function(e){return e.weather.locationNames}));return Object(_.jsxs)(_.Fragment,{children:[Object(_.jsx)(J,{}),Object(_.jsx)(B.a,{type:"card",children:e.map((function(e,a){return Object(_.jsx)(q,{tab:e,children:Object(_.jsx)(k,{cityName:e})},a)}))})]})},W=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,227)).then((function(a){var t=a.getCLS,n=a.getFID,r=a.getFCP,c=a.getLCP,i=a.getTTFB;t(e),n(e),r(e),c(e),i(e)}))},M=t(92),Y=t(126),G={locationNames:[]};var K=Object(M.a)({weather:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:G,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case A:return Object(s.a)(Object(s.a)({},e),{},{locationNames:[].concat(Object(Y.a)(e.locationNames),[a.payload])});default:return e}}}),Q=Object(M.b)(K);i.a.render(Object(_.jsx)(r.a.StrictMode,{children:Object(_.jsx)(P.a,{store:Q,children:Object(_.jsx)(z,{})})}),document.getElementById("root")),W()}},[[216,1,2]]]);
//# sourceMappingURL=main.d88052dc.chunk.js.map