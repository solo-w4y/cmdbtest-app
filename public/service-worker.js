if(!self.define){let e,s={};const r=(r,i)=>(r=new URL(r+".js",i).href,s[r]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=r,e.onload=s,document.head.appendChild(e)}else e=r,importScripts(r),s()})).then((()=>{let e=s[r];if(!e)throw new Error(`Module ${r} didn’t register its module`);return e})));self.define=(i,n)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(s[o])return;let t={};const l=e=>r(e,o),c={module:{uri:o},exports:t,require:l};s[o]=Promise.all(i.map((e=>c[e]||l(e)))).then((e=>(n(...e),t)))}}define(["./workbox-2d118ab0"],(function(e){"use strict";e.setCacheNameDetails({prefix:"cmdbtest-vue"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"/css/app.f291eb01.css",revision:null},{url:"/index.html",revision:"7e10a6967214e2e7080058b5ba14cccf"},{url:"/js/about.0ff69104.js",revision:null},{url:"/js/app.95736e60.js",revision:null},{url:"/js/chunk-vendors.1835b6f1.js",revision:null},{url:"/manifest.json",revision:"7fbb8a2d3d1d1f7508c24ee2ee7c0522"},{url:"/robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"}],{})}));
//# sourceMappingURL=service-worker.js.map