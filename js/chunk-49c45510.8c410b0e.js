(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-49c45510"],{1276:function(t,e,n){"use strict";var i=n("d784"),r=n("44e7"),a=n("825a"),o=n("1d80"),s=n("4840"),c=n("8aa5"),l=n("50c4"),h=n("14c3"),u=n("9263"),p=n("d039"),d=[].push,f=Math.min,m=4294967295,v=!p((function(){return!RegExp(m,"y")}));i("split",2,(function(t,e,n){var i;return i="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(t,n){var i=String(o(this)),a=void 0===n?m:n>>>0;if(0===a)return[];if(void 0===t)return[i];if(!r(t))return e.call(i,t,a);var s,c,l,h=[],p=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),f=0,v=new RegExp(t.source,p+"g");while(s=u.call(v,i)){if(c=v.lastIndex,c>f&&(h.push(i.slice(f,s.index)),s.length>1&&s.index<i.length&&d.apply(h,s.slice(1)),l=s[0].length,f=c,h.length>=a))break;v.lastIndex===s.index&&v.lastIndex++}return f===i.length?!l&&v.test("")||h.push(""):h.push(i.slice(f)),h.length>a?h.slice(0,a):h}:"0".split(void 0,0).length?function(t,n){return void 0===t&&0===n?[]:e.call(this,t,n)}:e,[function(e,n){var r=o(this),a=void 0==e?void 0:e[t];return void 0!==a?a.call(e,r,n):i.call(String(r),e,n)},function(t,r){var o=n(i,t,this,r,i!==e);if(o.done)return o.value;var u=a(t),p=String(this),d=s(u,RegExp),g=u.unicode,w=(u.ignoreCase?"i":"")+(u.multiline?"m":"")+(u.unicode?"u":"")+(v?"y":"g"),b=new d(v?u:"^(?:"+u.source+")",w),x=void 0===r?m:r>>>0;if(0===x)return[];if(0===p.length)return null===h(b,p)?[p]:[];var y=0,k=0,C=[];while(k<p.length){b.lastIndex=v?k:0;var E,_=h(b,v?p:p.slice(k));if(null===_||(E=f(l(b.lastIndex+(v?0:k)),p.length))===y)k=c(p,k,g);else{if(C.push(p.slice(y,k)),C.length===x)return C;for(var F=1;F<=_.length-1;F++)if(C.push(_[F]),C.length===x)return C;k=y=E}}return C.push(p.slice(y)),C}]}),!v)},"14c3":function(t,e,n){var i=n("c6b6"),r=n("9263");t.exports=function(t,e){var n=t.exec;if("function"===typeof n){var a=n.call(t,e);if("object"!==typeof a)throw TypeError("RegExp exec method returned something other than an Object or null");return a}if("RegExp"!==i(t))throw TypeError("RegExp#exec called on incompatible receiver");return r.call(t,e)}},6547:function(t,e,n){var i=n("a691"),r=n("1d80"),a=function(t){return function(e,n){var a,o,s=String(r(e)),c=i(n),l=s.length;return c<0||c>=l?t?"":void 0:(a=s.charCodeAt(c),a<55296||a>56319||c+1===l||(o=s.charCodeAt(c+1))<56320||o>57343?t?s.charAt(c):a:t?s.slice(c,c+2):o-56320+(a-55296<<10)+65536)}};t.exports={codeAt:a(!1),charAt:a(!0)}},"8aa5":function(t,e,n){"use strict";var i=n("6547").charAt;t.exports=function(t,e,n){return e+(n?i(t,e).length:1)}},"99af":function(t,e,n){"use strict";var i=n("23e7"),r=n("d039"),a=n("e8b5"),o=n("861d"),s=n("7b0b"),c=n("50c4"),l=n("8418"),h=n("65f0"),u=n("1dde"),p=n("b622"),d=n("2d00"),f=p("isConcatSpreadable"),m=9007199254740991,v="Maximum allowed index exceeded",g=d>=51||!r((function(){var t=[];return t[f]=!1,t.concat()[0]!==t})),w=u("concat"),b=function(t){if(!o(t))return!1;var e=t[f];return void 0!==e?!!e:a(t)},x=!g||!w;i({target:"Array",proto:!0,forced:x},{concat:function(t){var e,n,i,r,a,o=s(this),u=h(o,0),p=0;for(e=-1,i=arguments.length;e<i;e++)if(a=-1===e?o:arguments[e],b(a)){if(r=c(a.length),p+r>m)throw TypeError(v);for(n=0;n<r;n++,p++)n in a&&l(u,p,a[n])}else{if(p>=m)throw TypeError(v);l(u,p++,a)}return u.length=p,u}})},a15b:function(t,e,n){"use strict";var i=n("23e7"),r=n("44ad"),a=n("fc6a"),o=n("a640"),s=[].join,c=r!=Object,l=o("join",",");i({target:"Array",proto:!0,forced:c||!l},{join:function(t){return s.call(a(this),void 0===t?",":t)}})},b0c0:function(t,e,n){var i=n("83ab"),r=n("9bf2").f,a=Function.prototype,o=a.toString,s=/^\s*function ([^ (]*)/,c="name";i&&!(c in a)&&r(a,c,{configurable:!0,get:function(){try{return o.call(this).match(s)[1]}catch(t){return""}}})},d784:function(t,e,n){"use strict";n("ac1f");var i=n("6eeb"),r=n("d039"),a=n("b622"),o=n("9263"),s=n("9112"),c=a("species"),l=!r((function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")})),h=function(){return"$0"==="a".replace(/./,"$0")}(),u=a("replace"),p=function(){return!!/./[u]&&""===/./[u]("a","$0")}(),d=!r((function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var n="ab".split(t);return 2!==n.length||"a"!==n[0]||"b"!==n[1]}));t.exports=function(t,e,n,u){var f=a(t),m=!r((function(){var e={};return e[f]=function(){return 7},7!=""[t](e)})),v=m&&!r((function(){var e=!1,n=/a/;return"split"===t&&(n={},n.constructor={},n.constructor[c]=function(){return n},n.flags="",n[f]=/./[f]),n.exec=function(){return e=!0,null},n[f](""),!e}));if(!m||!v||"replace"===t&&(!l||!h||p)||"split"===t&&!d){var g=/./[f],w=n(f,""[t],(function(t,e,n,i,r){return e.exec===o?m&&!r?{done:!0,value:g.call(e,n,i)}:{done:!0,value:t.call(n,e,i)}:{done:!1}}),{REPLACE_KEEPS_$0:h,REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE:p}),b=w[0],x=w[1];i(String.prototype,t,b),i(RegExp.prototype,f,2==e?function(t,e){return x.call(t,this,e)}:function(t){return x.call(t,this)})}u&&s(RegExp.prototype[f],"sham",!0)}},d888:function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"flex flex-col h-full"},[n("div",{staticClass:"h-12 flex-none flex items-center justify-between text-lg font-blod pl-2 border-b shadow"},[n("div",{staticClass:"flex items-center text-indigo-500 pr-3 pl-1"},[n("a-icon",{staticClass:"mr-2 text-sm text-gray-600",staticStyle:{"margin-bottom":"0.15rem"},attrs:{type:"home"}}),n("a-breadcrumb",[n("a-breadcrumb-item",[n("router-link",{staticClass:"link",attrs:{to:"/"+t.repo}},[t._v(" "+t._s(t.repo)+" ")])],1),t._l(t.paths,(function(e,i){return n("a-breadcrumb-item",{key:i},[n("router-link",{staticClass:"link",attrs:{to:e.path}},[t._v(" "+t._s(e.name)+" ")])],1)}))],2)],1),n("div",{staticClass:"flex items-center"},[n("a-button",{staticClass:"mr-3 flex items-center justify-center",attrs:{type:"primary",shape:"circle",icon:"sync",size:"small",ghost:""},on:{click:t.getContents}}),n("a-button",{staticClass:"mr-3",attrs:{type:"primary",ghost:""},on:{click:function(e){t.showUpload=!t.showUpload}}},[t._v(" 上传文件 ")]),n("a-button",{staticClass:"mr-3",attrs:{type:"danger",ghost:""},on:{click:function(e){return t.clickFile({})}}},[t._v(" 新建文件 ")]),n("a-dropdown",[n("div",{staticClass:"mr-3",on:{click:function(t){return t.preventDefault()}}},[n("a-avatar",{staticClass:"shadow",attrs:{src:t.avatar_url}}),n("a-icon",{staticClass:"text-xs ml-1",attrs:{type:"caret-down"}})],1),n("a-menu",{attrs:{slot:"overlay"},slot:"overlay"},[n("a-menu-item",[n("a",{attrs:{href:"https://github.com/"+t.owner,target:"_blank"}},[t._v(" "+t._s(t.owner)+" ")])]),n("a-menu-item",[n("div",{on:{click:t.outLogin}},[t._v("退出")])])],1)],1)],1)]),n("overlay-scrollbars",{staticClass:"flex-1"},[n("a-list",{attrs:{"item-layout":"horizontal","data-source":t.list},scopedSlots:t._u([{key:"renderItem",fn:function(e){return n("a-list-item",{staticStyle:{height:"45px"}},["dir"===e.type?n("div",{staticClass:"flex items-center px-3"},[n("a-icon",{staticClass:"mr-2",staticStyle:{color:"#79b8ff"},attrs:{type:"folder",theme:"filled"}}),n("router-link",{staticClass:"link",attrs:{to:"/"+t.repo+"/"+e.path}},[t._v(" "+t._s(e.name)+" ")])],1):n("div",{staticClass:"flex items-center px-3"},[n("a-icon",{staticClass:"mr-2 text-gray-600",attrs:{type:"file"}}),n("div",{staticClass:"link",on:{click:function(n){return t.clickFile(e)}}},[t._v(t._s(e.name))])],1),"file"===e.type?n("div",{staticClass:"text-sm text-red-600 cursor-pointer",attrs:{slot:"actions"},on:{click:function(n){return t.delFile(e)}},slot:"actions"},[t._v(" 删除 ")]):t._e()])}}])})],1),n("editor",{attrs:{show:t.showEdit,item:t.item}}),n("upload",{attrs:{show:t.showUpload,item:t.item}})],1)},r=[],a=(n("99af"),n("a15b"),n("ac1f"),n("1276"),n("5530")),o=n("2f62"),s=n("be65"),c=n.n(s),l=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("a-modal",{staticClass:"modal-body-p-0",attrs:{title:"编辑",visible:t.visible,"confirm-loading":t.confirmLoading,okText:"提交",cancelText:"取消",centered:!0,maskClosable:!1,keyboard:!1,width:800},on:{ok:t.handleOk,cancel:t.handleCancel}},[n("a-spin",{attrs:{spinning:t.spinning}},[n("div",{staticClass:"flex flex-col",staticStyle:{height:"75vh"}},[n("a-input",{staticClass:"border-none px-6 my-1",attrs:{placeholder:"地址"},model:{value:t.newFilePath,callback:function(e){t.newFilePath=e},expression:"newFilePath"}}),n("iframe",{ref:"aceEditor",staticClass:"flex-1 w-full",attrs:{src:"https://ace520.github.io/ace?theme=twilight&fontSize=15&mode="+t.mode,frameborder:"no",border:"0",marginwidth:"0",marginheight:"0",scrolling:"no",allowtransparency:"yes"}})],1)])],1)],1)},h=[],u=(n("b0c0"),n("f43e")),p={name:"editor",props:["item","show"],data:function(){return{visible:!1,confirmLoading:!1,content:"",newFilePath:"",newItem:{},mode:"",spinning:!1}},watch:{show:function(){this.spinning=!0,this.visible=!0,void 0!==this.$refs.aceEditor&&this.init()}},mounted:function(){var t=this;window.addEventListener("message",(function(e){var n=e.data;switch(n.method){case"change":t.content=n.content;break;case"setValue":t.spinning=!1;break;case"onload":t.init();break}}),!1)},methods:{init:function(){this.newItem=this.item,void 0!=this.newItem.path?this.newFilePath=this.newItem.path:this.newItem.dir?this.newFilePath=this.newItem.dir+"/":this.newFilePath="",this.getContent()},handleOk:function(){var t=this;this.confirmLoading=!0,this.octokit.request("PUT /repos/{owner}/{repo}/contents/{path}",{owner:this.owner,repo:this.newItem.repo,path:this.newFilePath,message:"put content",content:u["Base64"].encode(this.content),sha:this.newItem&&this.newItem.sha?this.newItem.sha:""}).then((function(){t.visible=!1,t.confirmLoading=!1}))},handleCancel:function(){this.visible=!1},getContent:function(){var t=this;this.newItem&&this.newItem.name?this.octokit.request("GET /repos/{owner}/{repo}/contents/{path}",{owner:this.owner,repo:this.newItem.repo,path:this.newItem.path}).then((function(e){var n=u["Base64"].decode(e.data.content);t.setContent(n)})):this.setContent("")},setContent:function(t){this.$refs.aceEditor.contentWindow.postMessage({method:"setValue",content:t},"*")}},computed:Object(a["a"])({},Object(o["b"])(["owner"]))},d=p,f=n("2877"),m=Object(f["a"])(d,l,h,!1,null,null,null),v=m.exports,g=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("a-modal",{attrs:{title:"上传文件",visible:t.visible,"confirm-loading":t.confirmLoading,okText:"上传",cancelText:"取消",centered:!0,maskClosable:!1,keyboard:!1},on:{ok:t.handleOk,cancel:t.handleCancel}},[n("a-input-search",{attrs:{placeholder:"file path",size:"large"},on:{search:t.addFile},model:{value:t.newFilePath,callback:function(e){t.newFilePath=e},expression:"newFilePath"}},[n("a-button",{attrs:{slot:"enterButton"},slot:"enterButton"},[t._v(" 选择文件 ")])],1),n("input",{ref:"file",staticStyle:{display:"none"},attrs:{type:"file"},on:{change:function(e){return t.getFile(e)}}})],1)],1)},w=[],b={name:"upload",props:["show","item"],data:function(){return{visible:!1,confirmLoading:!1,newFilePath:"",content:""}},watch:{show:function(){this.newFilePath=this.item.dir?this.item.dir+"/":this.item.dir,this.visible=!0}},mounted:function(){},methods:{addFile:function(){this.$refs.file.click()},getFile:function(t){var e=t.target.files[0];this.newFilePath=this.newFilePath+e.name;var n=this;this.getFileBase64(e,(function(t){n.content=t}))},handleOk:function(){var t=this;this.confirmLoading=!0,this.octokit.request("PUT /repos/{owner}/{repo}/contents/{path}",{owner:this.owner,repo:this.item.repo,path:this.newFilePath,message:"put content",content:this.content}).then((function(e){if(e.data.error)return t.$message.error(e.data.error),!1;t.$message.success("上传成功"),t.visible=!1,t.confirmLoading=!1}))},handleCancel:function(){this.visible=!1},getFileBase64:function(t,e){var n=new FileReader;n.readAsDataURL(t),n.onload=function(t){"function"===typeof e&&e(t.target.result.split(",").pop())}}},computed:Object(a["a"])({},Object(o["b"])(["owner"]))},x=b,y=Object(f["a"])(x,g,w,!1,null,null,null),k=y.exports,C={components:{Editor:v,Upload:k},data:function(){return{repo:"",path:"",list:[],showUpload:!1,showEdit:!1,item:{}}},watch:{$route:function(t){this.initPath(t)}},mounted:function(){this.initPath(this.$route)},methods:{clickFile:function(t){t.path?(this.item=t,this.item.repo=this.repo):this.item={repo:this.repo,dir:this.path},this.showEdit=!this.showEdit},delFile:function(t){var e=this;this.$confirm({title:"是否确定要删除此文件吗？",content:t.path,okText:"删除",okType:"danger",cancelText:"取消",centered:!0,onOk:function(){return e.octokit.request("DELETE /repos/{owner}/{repo}/contents/{path}",{owner:e.owner,repo:e.repo,path:t.path,message:"DELETE",sha:t.sha}).then((function(t){if(t.data.error)return e.$message.error(t.data.error),!1;e.$message.success("删除成功")}))},onCancel:function(){}})},getContents:function(){var t=this;this.list=[],this.octokit.request("GET /repos/{owner}/{repo}/contents/{path}",{owner:this.owner,repo:this.repo,path:this.path}).then((function(e){for(var n=[],i=[],r=0;r<e.data.length;r++)"dir"==e.data[r].type?n.push(e.data[r]):i.push(e.data[r]);t.list=n.concat(i)}))},initPath:function(t){var e=t.params.repo,n=t.params.pathMatch;void 0==e&&(e=n,n=""),this.repo=e,this.path=n,this.item={repo:e,dir:n},this.getContents()},outLogin:function(){c.a.remove("user"),c.a.remove("token"),this.$router.push("/login")}},computed:Object(a["a"])(Object(a["a"])({},Object(o["b"])(["owner","avatar_url"])),{},{paths:function(){for(var t=this.path?this.path.split("/"):[],e=[],n=[],i=0;i<t.length;i++)e.push(t[i]),n.push({name:t[i],path:"/"+this.repo+"/"+e.join("/")});return n}})},E=C,_=Object(f["a"])(E,i,r,!1,null,null,null);e["default"]=_.exports}}]);
//# sourceMappingURL=chunk-49c45510.8c410b0e.js.map