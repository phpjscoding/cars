import{f as m,_ as p}from"./entry.3c4f9604.js";import{q as f,h as o,e as g,j as c}from"./query.0014da6a.js";import{w as s,s as h}from"./utils.a9e27e26.js";import{u as v}from"./preview.5d9d3bfb.js";const T=async t=>{const{content:n}=m().public;typeof(t==null?void 0:t.params)!="function"&&(t=f(t));const a=t.params(),i=n.experimental.stripQueryParameters?s(`/navigation/${`${o(a)}.${n.integrity}`}/${g(a)}.json`):s(`/navigation/${o(a)}.${n.integrity}.json`);if(h())return(await p(()=>import("./client-db.0cca32a8.js"),["./client-db.0cca32a8.js","./entry.3c4f9604.js","./entry.f4da497c.css","./query.0014da6a.js","./utils.a9e27e26.js","./preview.5d9d3bfb.js","./index.a6ef77ff.js"],import.meta.url).then(r=>r.generateNavigation))(a);const e=await $fetch(i,{method:"GET",responseType:"json",params:n.experimental.stripQueryParameters?void 0:{_params:c(a),previewToken:v().getPreviewToken()}});if(typeof e=="string"&&e.startsWith("<!DOCTYPE html>"))throw new Error("Not found");return e};export{T as f};