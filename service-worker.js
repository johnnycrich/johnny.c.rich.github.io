!function(){"use strict";const e=1606950707015,t=`cache${e}`,n=["/client/client.864d0399.js","/client/inject_styles.5607aec6.js","/client/index.c521e36e.js"].concat(["/service-worker-index.html","/as.png","/bb.png","/ec.png","/favicon.png","/global.css","/gota.png","/hygiene.png","/logo-192.png","/logo-512.png","/manifest.json","/uh.png"]),s=new Set(n);self.addEventListener("install",(e=>{e.waitUntil(caches.open(t).then((e=>e.addAll(n))).then((()=>{self.skipWaiting()})))})),self.addEventListener("activate",(e=>{e.waitUntil(caches.keys().then((async e=>{for(const n of e)n!==t&&await caches.delete(n);self.clients.claim()})))})),self.addEventListener("fetch",(t=>{if("GET"!==t.request.method||t.request.headers.has("range"))return;const n=new URL(t.request.url),c=n.protocol.startsWith("http"),a=n.hostname===self.location.hostname&&n.port!==self.location.port,o=n.host===self.location.host&&s.has(n.pathname),i="only-if-cached"===t.request.cache&&!o;!c||a||i||t.respondWith((async()=>o&&await caches.match(t.request)||async function(t){const n=await caches.open(`offline${e}`);try{const e=await fetch(t);return n.put(t,e.clone()),e}catch(e){const s=await n.match(t);if(s)return s;throw e}}(t.request))())}))}();
