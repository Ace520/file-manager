(function(e){function t(t){for(var r,c,i=t[0],u=t[1],s=t[2],p=0,l=[];p<i.length;p++)c=i[p],Object.prototype.hasOwnProperty.call(o,c)&&o[c]&&l.push(o[c][0]),o[c]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);f&&f(t);while(l.length)l.shift()();return a.push.apply(a,s||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,c=1;c<n.length;c++){var u=n[c];0!==o[u]&&(r=!1)}r&&(a.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},o={app:0},a=[];function c(e){return i.p+"js/"+({}[e]||e)+"."+{"chunk-4872ff5f":"73718373","chunk-b89a95ec":"d817996c"}[e]+".js"}function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n=o[e];if(0!==n)if(n)t.push(n[2]);else{var r=new Promise((function(t,r){n=o[e]=[t,r]}));t.push(n[2]=r);var a,u=document.createElement("script");u.charset="utf-8",u.timeout=120,i.nc&&u.setAttribute("nonce",i.nc),u.src=c(e);var s=new Error;a=function(t){u.onerror=u.onload=null,clearTimeout(p);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;s.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",s.name="ChunkLoadError",s.type=r,s.request=a,n[1](s)}o[e]=void 0}};var p=setTimeout((function(){a({type:"timeout",target:u})}),12e4);u.onerror=u.onload=a,document.head.appendChild(u)}return Promise.all(t)},i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/file-manager/",i.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],s=u.push.bind(u);u.push=t,u=u.slice();for(var p=0;p<u.length;p++)t(u[p]);var f=s;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";n("85ec")},2377:function(e,t){e.exports=OverlayScrollbarsVue},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("8bbf"),o=n.n(r),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},c=[],i=(n("ac1f"),n("841c"),n("1276"),{name:"App",components:{},mounted:function(){var e=this,t="272c05f414538177d1ad",n="901874b1509a97105ac6bd6be422057aecf4ce0f",r=localStorage.getItem("token");if(!r){var o=this.getQueryVariable("code");o?this.octokit.request("POST https://cors-anywhere.herokuapp.com/https://github.com/login/oauth/access_token",{headers:{origin:"x-requested-with"},client_id:t,client_secret:n,code:o}).then((function(t){localStorage.setItem("token",t.data.access_token),e.$router.go(0)})):window.location.href="https://github.com/login/oauth/authorize?client_id="+t}},methods:{getQueryVariable:function(e){for(var t=window.location.search.substring(1),n=t.split("&"),r=0;r<n.length;r++){var o=n[r].split("=");if(o[0]==e)return o[1]}return!1}}}),u=i,s=(n("034f"),n("2877")),p=Object(s["a"])(u,a,c,!1,null,null,null),f=p.exports,l=n("2f62"),h=(n("d3b7"),n("6389")),d=n.n(h),m=function(){return n.e("chunk-b89a95ec").then(n.bind(null,"1e4b"))},b=function(){return n.e("chunk-4872ff5f").then(n.bind(null,"d888"))};o.a.use(d.a);var v=[{path:"/",name:"Index",component:m,children:[{path:"/:repo?/*",name:"Files",component:b}]}],g=new d.a({mode:"history",base:"/file-manager/",routes:v,scrollBehavior:function(e){return e.hash?{selector:e.hash}:{x:0,y:0}}}),y=g,w=(n("def6"),n("1af2")),k=n("2377");o.a.config.productionTip=!1,o.a.component("overlay-scrollbars",k["OverlayScrollbarsComponent"]),o.a.use(l["a"]),o.a.prototype.owner="Ace520";var O=new l["a"].Store({state:{repo:"",path:""},getters:{repo:function(e){return e.repo},path:function(e){return e.path}},mutations:{repo:function(e,t){e.repo=t},path:function(e,t){e.path=t}},actions:{repo:function(e,t){var n=e.commit;n("repo",t)},path:function(e,t){var n=e.commit;n("path",t)}}});o.a.prototype.octokit=new w["a"]({auth:localStorage.getItem("token")}),y.beforeEach((function(e,t,n){var r=e.params.repo,o=e.params.pathMatch;void 0==r&&(r=o,o=""),O.commit("repo",r),O.commit("path",o),n()})),new o.a({router:y,store:O,render:function(e){return e(f)}}).$mount("#app")},6389:function(e,t){e.exports=VueRouter},"85ec":function(e,t,n){},"8bbf":function(e,t){e.exports=Vue},def6:function(e,t,n){}});
//# sourceMappingURL=app.3fe78a31.js.map