(function(e){function t(t){for(var r,o,c=t[0],u=t[1],s=t[2],l=0,m=[];l<c.length;l++)o=c[l],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&m.push(a[o][0]),a[o]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);f&&f(t);while(m.length)m.shift()();return i.push.apply(i,s||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,o=1;o<n.length;o++){var c=n[o];0!==a[c]&&(r=!1)}r&&(i.splice(t--,1),e=u(u.s=n[0]))}return e}var r={},o={app:0},a={app:0},i=[];function c(e){return u.p+"js/"+({}[e]||e)+"."+{"chunk-0680891c":"5c74cdea","chunk-3dacf5d7":"a224733e"}[e]+".js"}function u(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(e){var t=[],n={"chunk-0680891c":1,"chunk-3dacf5d7":1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=new Promise((function(t,n){for(var r="css/"+({}[e]||e)+"."+{"chunk-0680891c":"efa397bc","chunk-3dacf5d7":"d754c17e"}[e]+".css",a=u.p+r,i=document.getElementsByTagName("link"),c=0;c<i.length;c++){var s=i[c],l=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(l===r||l===a))return t()}var m=document.getElementsByTagName("style");for(c=0;c<m.length;c++){s=m[c],l=s.getAttribute("data-href");if(l===r||l===a)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var r=t&&t.target&&t.target.src||a,i=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=r,delete o[e],f.parentNode.removeChild(f),n(i)},f.href=a;var d=document.getElementsByTagName("head")[0];d.appendChild(f)})).then((function(){o[e]=0})));var r=a[e];if(0!==r)if(r)t.push(r[2]);else{var i=new Promise((function(t,n){r=a[e]=[t,n]}));t.push(r[2]=i);var s,l=document.createElement("script");l.charset="utf-8",l.timeout=120,u.nc&&l.setAttribute("nonce",u.nc),l.src=c(e);var m=new Error;s=function(t){l.onerror=l.onload=null,clearTimeout(f);var n=a[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;m.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",m.name="ChunkLoadError",m.type=r,m.request=o,n[1](m)}a[e]=void 0}};var f=setTimeout((function(){s({type:"timeout",target:l})}),12e4);l.onerror=l.onload=s,document.head.appendChild(l)}return Promise.all(t)},u.m=e,u.c=r,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)u.d(n,r,function(t){return e[t]}.bind(null,r));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/F2EWeek6/",u.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var m=0;m<s.length;m++)t(s[m]);var f=l;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("e623"),n("e379"),n("5dc8"),n("37e1");var r=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view",{staticClass:"views"})],1)},a=[],i=(n("5c0b"),n("2877")),c={},u=Object(i["a"])(c,o,a,!1,null,null,null),s=u.exports,l=(n("d3b7"),n("8c4f"));r["default"].use(l["a"]);var m=[{path:"/home-page",name:"HomePage",component:function(){return n.e("chunk-3dacf5d7").then(n.bind(null,"f4a9"))}},{path:"/RoomsInfo/:id",name:"RoomsInfo",component:function(){return n.e("chunk-0680891c").then(n.bind(null,"9bb7"))},props:!0},{path:"*",redirect:"/home-page"}],f=new l["a"]({routes:m}),d=f,p=n("2f62"),g={rooms:[],singleRoom:{room:[{amenities:{"Air-Conditioner":!0,Breakfast:!0,"Child-Friendly":!1,"Great-View":!1,"Mini-Bar":!1,"Pet-Friendly":!0,Refrigerator:!0,"Room-Service":!1,"Smoke-Free":!0,Sofa:!1,Television:!0,"Wi-Fi":!0},imageUrl:[],checkInAndOut:{},description:"",name:""}]},bookingStatus:{success:!1,fail:""}},h={updateAllRooms:function(e,t){e.rooms=t},updateSingleRooms:function(e,t){e.singleRoom=t},updateBookingRoomSucces:function(e,t){var n=t.success;e.bookingStatus.success=n,e.bookingStatus.fail=""},updateBookingRoomFail:function(e,t){var n=t.message;e.bookingStatus.fail=n,e.bookingStatus.success=!1}},v=(n("b0c0"),n("96cf"),n("1da1")),b=n("bc3a"),k=n.n(b),R="https://challenge.thef2e.com/api/thef2e2019/stage6",y="1SROjHz7pTcLsiaAUwEJzAnfJU0XVvQ95Gy1R1QEDYWgL7Bm5AbNXtuZT3c4",w=k.a.create({baseURL:R,headers:{Authorization:"Bearer ".concat(y),Accept:"application/json","content-type":"application/json"}}),S=w,O={getAllRooms:function(e){return Object(v["a"])(regeneratorRuntime.mark((function t(){var n,r,o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e.commit,t.next=3,S.get("/rooms");case 3:r=t.sent,o=r.data.items,n("updateAllRooms",o);case 6:case"end":return t.stop()}}),t)})))()},getSingleRoom:function(e,t){return Object(v["a"])(regeneratorRuntime.mark((function n(){var r,o,a;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=e.commit,n.next=3,S.get("/room/".concat(t));case 3:return o=n.sent,a=o.data,r("updateSingleRooms",a),n.abrupt("return",o);case 7:case"end":return n.stop()}}),n)})))()},bookingRoom:function(e,t){return Object(v["a"])(regeneratorRuntime.mark((function n(){var r,o,a,i,c,u;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=e.commit,o=t.postParams,a=t.id,n.prev=2,n.next=5,S.post("/room/".concat(a),{date:o.date,name:o.name,tel:o.tel});case 5:return i=n.sent,c=i.data,r("updateBookingRoomSucces",c),n.abrupt("return",i);case 11:return n.prev=11,n.t0=n["catch"](2),u=n.t0.response.data,r("updateBookingRoomFail",u),n.abrupt("return",n.t0.response);case 16:case"end":return n.stop()}}),n,null,[[2,11]])})))()}},A=(n("a4d3"),n("e01a"),n("4de4"),n("d81d"),n("ac1f"),n("1276"),{formatAllRooms:function(e){var t=e.rooms;return t.map((function(e){return{id:e.id,img:e.imageUrl}}))},singleRoomImgs:function(e){var t=e.singleRoom;return t.room[0].imageUrl},singleRoomName:function(e){var t=e.singleRoom,n=t.room[0].name;return n},roomSpecification:function(e){return function(e){var t={default:"","Single Room":"1人・ 單人床・ 附早餐・衛浴1間・18平方公尺","Double Room":"2~3人・ 雙人床・ 附早餐・衛浴1間・26平方公尺","Twin Room":"2~4人・ 雙人床・ 附早餐・衛浴1間・36平方公尺","Deluxe Twin Room":"2~4人・ 大型雙人床・ 附早餐・衛浴1間・40平方公尺","Deluxe Single Room":"1人・ 小型雙人床・ 附早餐・衛浴1間・22平方公尺","Deluxe Double Room":"2~3人・ 雙人床・ 附早餐・衛浴1間・26平方公尺"};return e?t[e]:t["default"]}},roomPrice:function(e){var t=e.singleRoom,n=t.room[0],r=n.holidayPrice,o=n.normalDayPrice;return{holidayPrice:r,normalDayPrice:o}},roomCheckInandOut:function(e){var t=e.singleRoom,n=t.room[0].checkInAndOut,r=n.checkInEarly,o=n.checkInLate,a=n.checkOut;return{checkInEarly:r,checkInLate:o,checkOut:a}},roomUseGuide:function(e){var t=e.singleRoom,n=t.room[0].description,r=n.split(".").filter((function(e){return e}));return r},roomAmentities:function(e){var t=e.singleRoom,n=t.room[0].amenities;return n},bookingRoomSuccess:function(e){var t=e.bookingStatus,n=t.success;return n},bookingRoomFail:function(e){var t=e.bookingStatus,n=t.fail;return n}});r["default"].use(p["a"]);var j=new p["a"].Store({state:g,mutations:h,actions:O,getters:A,modules:{}}),P=n("5c96"),x=n.n(P),E=(n("0fae"),n("c87b")),T=n.n(E);r["default"].use(x.a,{locale:T.a}),r["default"].config.productionTip=!1,new r["default"]({router:d,store:j,render:function(e){return e(s)}}).$mount("#app")},"5c0b":function(e,t,n){"use strict";var r=n("9c0c"),o=n.n(r);o.a},"9c0c":function(e,t,n){}});
//# sourceMappingURL=app.fed37437.js.map