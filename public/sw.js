if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let i=Promise.resolve();return s[e]||(i=new Promise((async i=>{if("document"in self){const s=document.createElement("script");s.src=e,document.head.appendChild(s),s.onload=i}else importScripts(e),i()}))),i.then((()=>{if(!s[e])throw new Error(`Module ${e} didn’t register its module`);return s[e]}))},i=(i,s)=>{Promise.all(i.map(e)).then((e=>s(1===e.length?e[0]:e)))},s={require:Promise.resolve(i)};self.define=(i,c,n)=>{s[i]||(s[i]=Promise.resolve().then((()=>{let s={};const o={uri:location.origin+i.slice(1)};return Promise.all(c.map((i=>{switch(i){case"exports":return s;case"module":return o;default:return e(i)}}))).then((e=>{const i=n(...e);return s.default||(s.default=i),s}))})))}}define("./sw.js",["./workbox-1ca495a9"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/chunks/05d954cf.810f4b9bef1ded1c9190.js",revision:"gczLNbbZyviokXE7bhomw"},{url:"/_next/static/chunks/363e8d9c1e915d69d31dc0c706bb0f6e16b98f19.d18c7d27f20eda155268.js",revision:"gczLNbbZyviokXE7bhomw"},{url:"/_next/static/chunks/75fc9c18.60c1ab7504f6eb9ff2f2.js",revision:"gczLNbbZyviokXE7bhomw"},{url:"/_next/static/chunks/8582a227bb2571d0c4794b1a628f42f8e7fe7965.cc4fe5208362e1236348.js",revision:"gczLNbbZyviokXE7bhomw"},{url:"/_next/static/chunks/c7f699be22c48e69e903481fa01fdfb201e245c4.88bab8871cc62b537e23.js",revision:"gczLNbbZyviokXE7bhomw"},{url:"/_next/static/chunks/commons.5f8197daf185e0339044.js",revision:"gczLNbbZyviokXE7bhomw"},{url:"/_next/static/chunks/framework.9d524150d48315f49e80.js",revision:"gczLNbbZyviokXE7bhomw"},{url:"/_next/static/chunks/main-90d8e3ef6672e48d2492.js",revision:"gczLNbbZyviokXE7bhomw"},{url:"/_next/static/chunks/pages/404-ff007c12fff0661b15f3.js",revision:"gczLNbbZyviokXE7bhomw"},{url:"/_next/static/chunks/pages/_app-5cf2bedae003b17214c9.js",revision:"gczLNbbZyviokXE7bhomw"},{url:"/_next/static/chunks/pages/_error-550b537f6ae4dc6a40f5.js",revision:"gczLNbbZyviokXE7bhomw"},{url:"/_next/static/chunks/pages/characters/%5BcharacterId%5D-e96d9f459c0a35db59db.js",revision:"gczLNbbZyviokXE7bhomw"},{url:"/_next/static/chunks/pages/comics-c8725ca3a7a1699cbe13.js",revision:"gczLNbbZyviokXE7bhomw"},{url:"/_next/static/chunks/pages/comics/%5BcomicId%5D-51bc5a1c628dbd252c1d.js",revision:"gczLNbbZyviokXE7bhomw"},{url:"/_next/static/chunks/pages/favs-4f8193ee4a56380bfb7b.js",revision:"gczLNbbZyviokXE7bhomw"},{url:"/_next/static/chunks/pages/index-569ad24de68bf795c9d6.js",revision:"gczLNbbZyviokXE7bhomw"},{url:"/_next/static/chunks/pages/stories-0d074f9bc5e9de84aceb.js",revision:"gczLNbbZyviokXE7bhomw"},{url:"/_next/static/chunks/pages/stories/%5BstoryId%5D-63b85c39bc8cd837695c.js",revision:"gczLNbbZyviokXE7bhomw"},{url:"/_next/static/chunks/polyfills-5ba9c403cc30e4733b64.js",revision:"gczLNbbZyviokXE7bhomw"},{url:"/_next/static/chunks/webpack-50bee04d1dc61f8adf5b.js",revision:"gczLNbbZyviokXE7bhomw"},{url:"/_next/static/css/ebe3520d6cf2d582ca1a.css",revision:"gczLNbbZyviokXE7bhomw"},{url:"/_next/static/gczLNbbZyviokXE7bhomw/_buildManifest.js",revision:"gczLNbbZyviokXE7bhomw"},{url:"/_next/static/gczLNbbZyviokXE7bhomw/_ssgManifest.js",revision:"gczLNbbZyviokXE7bhomw"},{url:"/facebook.png",revision:"6703038823ee7e84d1b0aa06073f070f"},{url:"/facebook.png:Zone.Identifier",revision:"d2716925bb280121efd79638e9e49b83"},{url:"/favicon.ico",revision:"21b739d43fcb9bbb83d8541fe4fe88fa"},{url:"/fonts/ProximaSoft-Bold.ttf",revision:"ce9c09850ccbbdeeee1aaca5464ec624"},{url:"/fonts/ProximaSoft-Medium.ttf",revision:"eecdadd6bed2df3acd47f2c92ac2bb4c"},{url:"/fonts/ProximaSoft-Regular.ttf",revision:"7d58392ed902e76c48302732be5bbd9b"},{url:"/github.png",revision:"9ca667b2d775bb1aeea17fa4b1a93923"},{url:"/github.png:Zone.Identifier",revision:"ea8d8706ba9dd69586d96c7bcd0025a1"},{url:"/hero.png",revision:"2e456a6aa27a71a8808f017f158cdf33"},{url:"/icon-192x192.png",revision:"6319f7596a7a0206d7deed70bc59e149"},{url:"/icon-256x256.png",revision:"274610c5a2f9dc51c119ab17af22d741"},{url:"/icon-384x384.png",revision:"26cc3a0e866c81c9632b1a6256f4b84c"},{url:"/icon-512x512.png",revision:"72c9c541ea3a1a9bdd999b58570806f7"},{url:"/loading.svg",revision:"dd5207968de5fbc3dba04826f5015a2e"},{url:"/loading.svg:Zone.Identifier",revision:"ef0752f091e9b1c9a499221598d85521"},{url:"/logo.png",revision:"5e0289bd6acad9168ddb02d81bd748f8"},{url:"/manifest.json",revision:"7f0095f0cbf8ec8124f2ea98f7b9e596"},{url:"/not-found.png",revision:"41f0592b4de6625e8b9c54437390866a"},{url:"/not-found.png:Zone.Identifier",revision:"90a564ba21092b3dfd4a6e444802cbdf"},{url:"/problem.png:Zone.Identifier",revision:"10db490a9d95f281258a47470b00d1b4"},{url:"/profile.jpeg",revision:"452aee91df9bca62adf62520407cb4a3"},{url:"/search.png",revision:"c3e777de7897f0325b6ab958c6dba2c5"},{url:"/search.png:Zone.Identifier",revision:"4c1836ddf44f72b1909edfacaef01ff6"},{url:"/vercel.svg",revision:"4b4f1876502eb6721764637fe5c41702"},{url:"/youtube.png",revision:"80f1d51b6294193957c7b14b2f9b1861"},{url:"/youtube.png:Zone.Identifier",revision:"59359ec101b972c300cbd701db300395"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[new e.ExpirationPlugin({maxEntries:1,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis|gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\/api\/.*$/i,new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/.*/i,new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET")}));
