import{f as l,j as h,C as O,a as A,D as I,l as g,E as R,F as c,T as D,u as V,r as v,m as S,G as b,H as B,I as j,e as x,d as e,_ as r,t as N,J as C,h as k,K as z}from"./entry.a8ac503c.js";import{u as M}from"./asyncData.be670248.js";import{h as $}from"./query.bea9e952.js";import{f as q}from"./navigation.206d656e.js";import{a as H}from"./utils.295dcbf1.js";import"./ContentDoc.d4e938ad.js";import"./ContentList.4fc33a75.js";import"./ContentQuery.f6a6bb27.js";import"./ContentSlot.1e2c7678.js";import"./DocumentDrivenEmpty.c429d455.js";import"./DocumentDrivenNotFound.4cdd300a.js";import"./Markdown.8afc65f2.js";import"./ProseCode.68edcdc7.js";const P={},w=l({props:{name:String},async setup(t,o){const i=await P[t.name]().then(n=>n.default||n);return()=>h(i,{},o.slots)}}),U=l({props:{name:{type:[String,Boolean,Object],default:null}},setup(t,o){const i=O("_route"),n=i===A()?I():i,u=g(()=>{var a,_;return(_=(a=V(t.name))!=null?a:n.meta.layout)!=null?_:"default"});return()=>{var p;const a=u.value&&u.value in P,_=(p=n.meta.layoutTransition)!=null?p:R;return c(D,a&&_,{default:()=>c(w,a&&{key:u.value,name:u.value,hasTransition:!!_},o.slots).default()}).default()}}}),F=Object.freeze(Object.defineProperty({__proto__:null,default:U},Symbol.toStringTag,{value:"Module"})),G=l({emits:{error(t){return!0}},setup(t,{slots:o,emit:i}){const n=v(null),u=S();return b(a=>{if(!u.isHydrating)return i("error",a),n.value=a,!1}),()=>{var a,_;return n.value?(a=o.error)==null?void 0:a.call(o,{error:n}):(_=o.default)==null?void 0:_.call(o)}}}),J=Object.freeze(Object.defineProperty({__proto__:null,default:G},Symbol.toStringTag,{value:"Module"})),K=l({name:"ServerPlaceholder",render(){return B("div")}}),Q=Object.freeze(Object.defineProperty({__proto__:null,default:K},Symbol.toStringTag,{value:"Module"})),W=l({name:"NuxtLoadingIndicator",props:{throttle:{type:Number,default:200},duration:{type:Number,default:2e3},height:{type:Number,default:3},color:{type:String,default:"repeating-linear-gradient(to right,#00dc82 0%,#34cdfe 50%,#0047e1 100%)"}},setup(t,{slots:o}){const i=X({duration:t.duration,throttle:t.throttle}),n=S();return n.hook("page:start",i.start),n.hook("page:finish",i.finish),j(()=>i.clear),()=>h("div",{class:"nuxt-loading-indicator",style:{position:"fixed",top:0,right:0,left:0,pointerEvents:"none",width:`${i.progress.value}%`,height:`${t.height}px`,opacity:i.isLoading.value?1:0,background:t.color,backgroundSize:`${100/i.progress.value*100}% auto`,transition:"width 0.1s, height 0.4s, opacity 0.4s",zIndex:999999}},o)}});function X(t){const o=v(0),i=v(!1),n=g(()=>1e4/t.duration);let u=null,a=null;function _(){s(),o.value=0,i.value=!0,t.throttle?a=setTimeout(E,t.throttle):E()}function p(){o.value=100,T()}function s(){clearInterval(u),clearTimeout(a),u=null,a=null}function y(L){o.value=Math.min(100,o.value+L)}function T(){s(),setTimeout(()=>{i.value=!1,setTimeout(()=>{o.value=0},400)},500)}function E(){u=setInterval(()=>{y(n.value)},100)}return{progress:o,isLoading:i,start:_,finish:p,clear:s}}const Y=Object.freeze(Object.defineProperty({__proto__:null,default:W},Symbol.toStringTag,{value:"Module"})),Z=t=>Object.fromEntries(Object.entries(t).filter(([,o])=>o!==void 0)),d=(t,o)=>(i,n)=>(x(()=>t({...Z(i),...n.attrs},n)),()=>{var u,a;return o?(a=(u=n.slots).default)==null?void 0:a.call(u):null}),f={accesskey:String,autocapitalize:String,autofocus:{type:Boolean,default:void 0},class:String,contenteditable:{type:Boolean,default:void 0},contextmenu:String,dir:String,draggable:{type:Boolean,default:void 0},enterkeyhint:String,exportparts:String,hidden:{type:Boolean,default:void 0},id:String,inputmode:String,is:String,itemid:String,itemprop:String,itemref:String,itemscope:String,itemtype:String,lang:String,nonce:String,part:String,slot:String,spellcheck:{type:Boolean,default:void 0},style:String,tabindex:String,title:String,translate:String},tt=l({name:"Script",inheritAttrs:!1,props:{...f,async:Boolean,crossorigin:{type:[Boolean,String],default:void 0},defer:Boolean,fetchpriority:String,integrity:String,nomodule:Boolean,nonce:String,referrerpolicy:String,src:String,type:String,charset:String,language:String,body:Boolean,renderPriority:[String,Number]},setup:d((t,{slots:o})=>{var u;const i={...t},n=(((u=o.default)==null?void 0:u.call(o))||[]).filter(({children:a})=>a).map(({children:a})=>a).join("");return n&&(i.children=n),{script:[i]}})}),et=l({name:"NoScript",inheritAttrs:!1,props:{...f,title:String,body:Boolean,renderPriority:[String,Number]},setup:d((t,{slots:o})=>{var u;const i={...t},n=(((u=o.default)==null?void 0:u.call(o))||[]).filter(({children:a})=>a).map(({children:a})=>a).join("");return n&&(i.children=n),{noscript:[i]}})}),rt=l({name:"Link",inheritAttrs:!1,props:{...f,as:String,crossorigin:String,disabled:Boolean,fetchpriority:String,href:String,hreflang:String,imagesizes:String,imagesrcset:String,integrity:String,media:String,prefetch:{type:Boolean,default:void 0},referrerpolicy:String,rel:String,sizes:String,title:String,type:String,methods:String,target:String,body:Boolean,renderPriority:[String,Number]},setup:d(t=>({link:[t]}))}),ot=l({name:"Base",inheritAttrs:!1,props:{...f,href:String,target:String},setup:d(t=>({base:t}))}),it=l({name:"Title",inheritAttrs:!1,setup:d((t,{slots:o})=>{var n,u,a;return{title:((a=(u=(n=o.default)==null?void 0:n.call(o))==null?void 0:u[0])==null?void 0:a.children)||null}})}),nt=l({name:"Meta",inheritAttrs:!1,props:{...f,charset:String,content:String,httpEquiv:String,name:String,body:Boolean,renderPriority:[String,Number]},setup:d(t=>{const o={...t};return o.httpEquiv&&(o["http-equiv"]=o.httpEquiv,delete o.httpEquiv),{meta:[o]}})}),at=l({name:"Style",inheritAttrs:!1,props:{...f,type:String,media:String,nonce:String,title:String,scoped:{type:Boolean,default:void 0},body:Boolean,renderPriority:[String,Number]},setup:d((t,{slots:o})=>{var u,a,_;const i={...t},n=(_=(a=(u=o.default)==null?void 0:u.call(o))==null?void 0:a[0])==null?void 0:_.children;return n&&(i.children=n),{style:[i]}})}),ut=l({name:"Head",inheritAttrs:!1,setup:(t,o)=>()=>{var i,n;return(n=(i=o.slots).default)==null?void 0:n.call(i)}}),_t=l({name:"Html",inheritAttrs:!1,props:{...f,manifest:String,version:String,xmlns:String,renderPriority:[String,Number]},setup:d(t=>({htmlAttrs:t}),!0)}),lt=l({name:"Body",inheritAttrs:!1,props:{...f,renderPriority:[String,Number]},setup:d(t=>({bodyAttrs:t}),!0)}),m=Object.freeze(Object.defineProperty({__proto__:null,Script:tt,NoScript:et,Link:rt,Base:ot,Title:it,Meta:nt,Style:at,Head:ut,Html:_t,Body:lt},Symbol.toStringTag,{value:"Module"}));e(()=>r(()=>import("./Discount.73cf10e3.js"),["Discount.73cf10e3.js","entry.a8ac503c.js","entry.81dba8ab.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./entry.a8ac503c.js").then(t=>t.ab),["entry.a8ac503c.js","entry.81dba8ab.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./Blog.4bfaeb50.js"),["Blog.4bfaeb50.js","entry.a8ac503c.js","entry.81dba8ab.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./Shirt.635f60cc.js"),["Shirt.635f60cc.js","entry.a8ac503c.js","entry.81dba8ab.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./Nav.e034891e.js"),["Nav.e034891e.js","entry.a8ac503c.js","entry.81dba8ab.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./ContentDoc.d4e938ad.js"),["ContentDoc.d4e938ad.js","entry.a8ac503c.js","entry.81dba8ab.css","ContentQuery.f6a6bb27.js","asyncData.be670248.js","query.bea9e952.js","utils.295dcbf1.js"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./ContentList.4fc33a75.js"),["ContentList.4fc33a75.js","ContentQuery.f6a6bb27.js","entry.a8ac503c.js","entry.81dba8ab.css","asyncData.be670248.js","query.bea9e952.js","utils.295dcbf1.js"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>Promise.resolve().then(()=>dt),void 0,import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./ContentQuery.f6a6bb27.js"),["ContentQuery.f6a6bb27.js","entry.a8ac503c.js","entry.81dba8ab.css","asyncData.be670248.js","query.bea9e952.js","utils.295dcbf1.js"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./entry.a8ac503c.js").then(t=>t.a8),["entry.a8ac503c.js","entry.81dba8ab.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./entry.a8ac503c.js").then(t=>t.a7),["entry.a8ac503c.js","entry.81dba8ab.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./ContentSlot.1e2c7678.js"),["ContentSlot.1e2c7678.js","utils.295dcbf1.js","entry.a8ac503c.js","entry.81dba8ab.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./DocumentDrivenEmpty.c429d455.js"),["DocumentDrivenEmpty.c429d455.js","entry.a8ac503c.js","entry.81dba8ab.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./DocumentDrivenNotFound.4cdd300a.js"),["DocumentDrivenNotFound.4cdd300a.js","entry.a8ac503c.js","entry.81dba8ab.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./Markdown.8afc65f2.js"),["Markdown.8afc65f2.js","ContentSlot.1e2c7678.js","utils.295dcbf1.js","entry.a8ac503c.js","entry.81dba8ab.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./ProseA.4fc10c11.js"),["ProseA.4fc10c11.js","entry.a8ac503c.js","entry.81dba8ab.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./ProseBlockquote.2036e1e5.js"),["ProseBlockquote.2036e1e5.js","entry.a8ac503c.js","entry.81dba8ab.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./ProseCode.68edcdc7.js"),["ProseCode.68edcdc7.js","ProseCode.e63e49c6.css","entry.a8ac503c.js","entry.81dba8ab.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./ProseCodeInline.83465160.js"),["ProseCodeInline.83465160.js","entry.a8ac503c.js","entry.81dba8ab.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./ProseEm.8c236588.js"),["ProseEm.8c236588.js","entry.a8ac503c.js","entry.81dba8ab.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./ProseH1.266737ee.js"),["ProseH1.266737ee.js","entry.a8ac503c.js","entry.81dba8ab.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./ProseH2.5b3e437f.js"),["ProseH2.5b3e437f.js","entry.a8ac503c.js","entry.81dba8ab.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./ProseH3.8a4e02f3.js"),["ProseH3.8a4e02f3.js","entry.a8ac503c.js","entry.81dba8ab.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./ProseH4.6462cc54.js"),["ProseH4.6462cc54.js","entry.a8ac503c.js","entry.81dba8ab.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./ProseH5.21344e09.js"),["ProseH5.21344e09.js","entry.a8ac503c.js","entry.81dba8ab.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./ProseH6.647c44e5.js"),["ProseH6.647c44e5.js","entry.a8ac503c.js","entry.81dba8ab.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./ProseHr.b56be0ac.js"),["ProseHr.b56be0ac.js","entry.a8ac503c.js","entry.81dba8ab.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./ProseImg.f945a92b.js"),["ProseImg.f945a92b.js","entry.a8ac503c.js","entry.81dba8ab.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./ProseLi.a270437c.js"),["ProseLi.a270437c.js","entry.a8ac503c.js","entry.81dba8ab.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./ProseOl.70cb731c.js"),["ProseOl.70cb731c.js","entry.a8ac503c.js","entry.81dba8ab.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./ProseP.15da589b.js"),["ProseP.15da589b.js","entry.a8ac503c.js","entry.81dba8ab.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./ProseStrong.ab1aae8e.js"),["ProseStrong.ab1aae8e.js","entry.a8ac503c.js","entry.81dba8ab.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./ProseTable.a90e6b20.js"),["ProseTable.a90e6b20.js","entry.a8ac503c.js","entry.81dba8ab.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./ProseTbody.e182ba8d.js"),["ProseTbody.e182ba8d.js","entry.a8ac503c.js","entry.81dba8ab.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./ProseTd.eff390d2.js"),["ProseTd.eff390d2.js","entry.a8ac503c.js","entry.81dba8ab.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./ProseTh.84f320ed.js"),["ProseTh.84f320ed.js","entry.a8ac503c.js","entry.81dba8ab.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./ProseThead.12696975.js"),["ProseThead.12696975.js","entry.a8ac503c.js","entry.81dba8ab.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./ProseTr.00914478.js"),["ProseTr.00914478.js","entry.a8ac503c.js","entry.81dba8ab.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./ProseUl.5c878e30.js"),["ProseUl.5c878e30.js","entry.a8ac503c.js","entry.81dba8ab.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./welcome.d3968c48.js"),["welcome.d3968c48.js","entry.a8ac503c.js","entry.81dba8ab.css","asyncData.be670248.js","query.bea9e952.js","utils.295dcbf1.js","navigation.206d656e.js","ContentDoc.d4e938ad.js","ContentQuery.f6a6bb27.js","ContentList.4fc33a75.js","ContentSlot.1e2c7678.js","DocumentDrivenEmpty.c429d455.js","DocumentDrivenNotFound.4cdd300a.js","Markdown.8afc65f2.js","ProseCode.68edcdc7.js","ProseCode.e63e49c6.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>Promise.resolve().then(()=>F),void 0,import.meta.url).then(t=>t.default||t));e(()=>r(()=>Promise.resolve().then(()=>J),void 0,import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./entry.a8ac503c.js").then(t=>t.a9),["entry.a8ac503c.js","entry.81dba8ab.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>Promise.resolve().then(()=>Q),void 0,import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./entry.a8ac503c.js").then(t=>t.a6),["entry.a8ac503c.js","entry.81dba8ab.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>Promise.resolve().then(()=>Y),void 0,import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./entry.a8ac503c.js").then(t=>t.aa),["entry.a8ac503c.js","entry.81dba8ab.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>Promise.resolve().then(()=>m),void 0,import.meta.url).then(t=>t.Script));e(()=>r(()=>Promise.resolve().then(()=>m),void 0,import.meta.url).then(t=>t.NoScript));e(()=>r(()=>Promise.resolve().then(()=>m),void 0,import.meta.url).then(t=>t.Link));e(()=>r(()=>Promise.resolve().then(()=>m),void 0,import.meta.url).then(t=>t.Base));e(()=>r(()=>Promise.resolve().then(()=>m),void 0,import.meta.url).then(t=>t.Title));e(()=>r(()=>Promise.resolve().then(()=>m),void 0,import.meta.url).then(t=>t.Meta));e(()=>r(()=>Promise.resolve().then(()=>m),void 0,import.meta.url).then(t=>t.Style));e(()=>r(()=>Promise.resolve().then(()=>m),void 0,import.meta.url).then(t=>t.Head));e(()=>r(()=>Promise.resolve().then(()=>m),void 0,import.meta.url).then(t=>t.Html));e(()=>r(()=>Promise.resolve().then(()=>m),void 0,import.meta.url).then(t=>t.Body));const mt=l({name:"ContentNavigation",props:{query:{type:Object,required:!1,default:void 0}},async setup(t){const{query:o}=N(t),i=g(()=>{var u;return typeof((u=o.value)==null?void 0:u.params)=="function"?o.value.params():o.value});if(!i.value&&C("dd-navigation").value){const{navigation:u}=H();return{navigation:u}}const{data:n}=await M(`content-navigation-${$(i.value)}`,()=>q(i.value));return{navigation:n}},render(t){const o=k(),{navigation:i}=t,n=_=>h(z,{to:_._path},()=>_.title),u=(_,p)=>h("ul",p?{"data-level":p}:null,_.map(s=>s.children?h("li",null,[n(s),u(s.children,p+1)]):h("li",null,n(s)))),a=_=>u(_,0);return o!=null&&o.default?o.default({navigation:i,...this.$attrs}):a(i)}}),dt=Object.freeze(Object.defineProperty({__proto__:null,default:mt},Symbol.toStringTag,{value:"Module"}));export{mt as default};