!function(e){var t={};function n(r){if(t[r])return t[r].exports;var s=t[r]={i:r,l:!1,exports:{}};return e[r].call(s.exports,s,s.exports,n),s.l=!0,s.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)n.d(r,s,function(t){return e[t]}.bind(null,s));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){e.exports=n(9)},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);n(1),n(2),n(3);const r="xp_db",s="xp_store",a="users_xp_score";function o(){}function c(e){return e()}function i(){return Object.create(null)}function u(e){e.forEach(c)}function l(e){return"function"==typeof e}function f(e,t){return e!=e?t==t:e!==t||e&&"object"==typeof e||"function"==typeof e}function g(e,t,n){const r=t.subscribe(n);e.$$.on_destroy.push(r.unsubscribe?()=>r.unsubscribe():r)}new Set;function d(e,t){e.appendChild(t)}function m(e,t,n){e.insertBefore(t,n||null)}function h(e){e.parentNode.removeChild(e)}function p(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function $(e){return document.createElement(e)}function v(e){return document.createTextNode(e)}function b(){return v(" ")}function y(e,t,n){null==n?e.removeAttribute(t):e.setAttribute(t,n)}function x(e,t){t=""+t,e.data!==t&&(e.data=t)}let _;function w(e){_=e}const k=[],j=Promise.resolve();let N=!1;const S=[],O=[],E=[];function I(){N||(N=!0,j.then(B))}function P(e){O.push(e)}function B(){const e=new Set;do{for(;k.length;){const e=k.shift();w(e),C(e.$$)}for(;S.length;)S.shift()();for(;O.length;){const t=O.pop();e.has(t)||(t(),e.add(t))}}while(k.length);for(;E.length;)E.pop()();N=!1}function C(e){e.fragment&&(e.update(e.dirty),u(e.before_render),e.fragment.p(e.dirty,e.ctx),e.dirty=null,e.after_render.forEach(P))}let M;function T(){M={remaining:0,callbacks:[]}}function V(){M.remaining||u(M.callbacks)}function L(e){M.callbacks.push(e)}let q;function A(e,t,n){const{fragment:r,on_mount:s,on_destroy:a,after_render:o}=e.$$;r.m(t,n),P(()=>{const t=s.map(c).filter(l);a?a.push(...t):u(t),e.$$.on_mount=[]}),o.forEach(P)}function D(e,t){e.$$&&(u(e.$$.on_destroy),e.$$.fragment.d(t),e.$$.on_destroy=e.$$.fragment=null,e.$$.ctx={})}function H(e,t,n,r,s,a){const c=_;w(e);const l=t.props||{},f=e.$$={fragment:null,ctx:null,props:a,update:o,not_equal:s,bound:i(),on_mount:[],on_destroy:[],before_render:[],after_render:[],context:new Map(c?c.$$.context:[]),callbacks:i(),dirty:null};let g=!1;var d;f.ctx=n?n(e,l,(t,n)=>{f.ctx&&s(f.ctx[t],f.ctx[t]=n)&&(f.bound[t]&&f.bound[t](n),g&&function(e,t){e.$$.dirty||(k.push(e),I(),e.$$.dirty=i()),e.$$.dirty[t]=!0}(e,t))}):l,f.update(),g=!0,u(f.before_render),f.fragment=r(f.ctx),t.target&&(t.hydrate?f.fragment.l((d=t.target,Array.from(d.childNodes))):f.fragment.c(),t.intro&&e.$$.fragment.i&&e.$$.fragment.i(),A(e,t.target,t.anchor),B()),w(c)}"undefined"!=typeof HTMLElement&&(q=class extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){for(const e in this.$$.slotted)this.appendChild(this.$$.slotted[e])}attributeChangedCallback(e,t,n){this[e]=n}$destroy(){D(this,!0),this.$destroy=o}$on(e,t){const n=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return n.push(t),()=>{const e=n.indexOf(t);-1!==e&&n.splice(e,1)}}$set(){}});class W{$destroy(){D(this,!0),this.$destroy=o}$on(e,t){const n=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return n.push(t),()=>{const e=n.indexOf(t);-1!==e&&n.splice(e,1)}}$set(){}}function G(e,t=o){let n;const r=[];function s(t){if(f(e,t)){if(e=t,!n)return;r.forEach(e=>e[1]()),r.forEach(t=>t[0](e))}}return{set:s,update:function(t){s(t(e))},subscribe:function(a,c=o){const i=[a,c];return r.push(i),1===r.length&&(n=t(s)||o),a(e),()=>{const e=r.indexOf(i);-1!==e&&r.splice(e,1),0===r.length&&n()}}}}const Q=G(0);class U{constructor(e="keyval-store",t="keyval"){this.storeName=t,this._dbp=new Promise((n,r)=>{const s=indexedDB.open(e,1);s.onerror=(()=>r(s.error)),s.onsuccess=(()=>n(s.result)),s.onupgradeneeded=(()=>{s.result.createObjectStore(t)})})}_withIDBStore(e,t){return this._dbp.then(n=>new Promise((r,s)=>{const a=n.transaction(this.storeName,e);a.oncomplete=(()=>r()),a.onabort=a.onerror=(()=>s(a.error)),t(a.objectStore(this.storeName))}))}}let X;function Y(){return X||(X=new U),X}const z=new U(r,s);function F(e){!function(e,t,n=Y()){n._withIDBStore("readwrite",n=>{n.put(t,e)})}(a,e,z)}(function(e,t=Y()){let n;return t._withIDBStore("readonly",t=>{n=t.get(e)}).then(()=>n.result)})(a,z).then(function(e){let t=e;void 0!==t?Q.set(parseInt(t)):Q.set(0)});n(4);function J(e){var t,n,r,s,a;return{c(){var o,c,i,u;t=$("button"),n=v("Click to Gain "),r=v(e.value),s=v("!"),t.className="experience-box svelte-17g6747",o=t,c="click",i=e.increment,o.addEventListener(c,i,u),a=(()=>o.removeEventListener(c,i,u))},m(e,a){m(e,t,a),d(t,n),d(t,r),d(t,s)},p(e,t){e.value&&x(r,t.value)},i:o,o:o,d(e){e&&h(t),a()}}}function K(e,t,n){let r;g(e,Q,e=>{n("$count",r=e)});let{value:s}=t;return e.$set=(e=>{"value"in e&&n("value",s=e.value)}),{value:s,increment:function(){Q.update(e=>e+s),F(r)}}}var R=class extends W{constructor(e){super(),H(this,e,K,J,f,["value"])}};n(5);function Z(e){var t,n,r,s,a;return{c(){t=$("section"),(n=$("div")).textContent="Your XP points -",r=b(),s=$("div"),a=v(e.$count),n.className="users-xp__text svelte-9b18vh",s.className="users-xp__count svelte-9b18vh",t.className="users-xp svelte-9b18vh"},m(e,o){m(e,t,o),d(t,n),d(t,r),d(t,s),d(s,a)},p(e,t){e.$count&&x(a,t.$count)},i:o,o:o,d(e){e&&h(t)}}}function ee(e,t,n){let r;return g(e,Q,e=>{n("$count",r=e)}),{$count:r}}var te=class extends W{constructor(e){super(),H(this,e,ee,Z,f,[])}};n(6);function ne(e){var t,n,r,s,a,c,i=new te({});return{c(){t=$("header"),n=$("div"),r=$("h1"),s=v(re),a=b(),i.$$.fragment.c(),r.className="svelte-gsag4y",n.className="grid grid--container",t.className="svelte-gsag4y"},m(e,o){m(e,t,o),d(t,n),d(n,r),d(r,s),d(n,a),A(i,n,null),c=!0},p:o,i(e){c||(i.$$.fragment.i(e),c=!0)},o(e){i.$$.fragment.o(e),c=!1},d(e){e&&h(t),i.$destroy()}}}let re="PWA Test";var se=class extends W{constructor(e){super(),H(this,e,null,ne,f,[])}};n(7);function ae(e){var t,n;return{c(){t=$("section"),(n=$("img")).src=oe,n.alt=ce,n.className="svelte-c4fd7a",t.className="placeholder-image svelte-c4fd7a"},m(e,r){m(e,t,r),d(t,n)},p:o,i:o,o:o,d(e){e&&h(t)}}}let oe="assets/images/placeholder-bg.jpg",ce="This is a Ben10 placeholder image";var ie=class extends W{constructor(e){super(),H(this,e,null,ae,f,[])}};n(8);function ue(e,t,n){const r=Object.create(e);return r.src=t[n],r}function le(e,t,n){const r=Object.create(e);return r.src=t[n],r}function fe(e){var t;return{c(){(t=$("img")).src=e.src,t.alt="test",t.className="svelte-a4rpnu"},m(e,n){m(e,t,n)},p:o,d(e){e&&h(t)}}}function ge(e){var t;return{c(){(t=$("img")).src=e.src,t.alt="test"},m(e,n){m(e,t,n)},p:o,d(e){e&&h(t)}}}function de(e){for(var t,n,r,s=e.imageValues,a=[],c=0;c<s.length;c+=1)a[c]=fe(le(e,s,c));var i=e.otherImages,u=[];for(c=0;c<i.length;c+=1)u[c]=ge(ue(e,i,c));return{c(){t=$("div");for(var e=0;e<a.length;e+=1)a[e].c();n=b(),r=$("section");for(e=0;e<u.length;e+=1)u[e].c();t.className="images svelte-a4rpnu",r.className="bigbois"},m(e,s){m(e,t,s);for(var o=0;o<a.length;o+=1)a[o].m(t,null);m(e,n,s),m(e,r,s);for(o=0;o<u.length;o+=1)u[o].m(r,null)},p(e,n){if(e.imageValues){s=n.imageValues;for(var o=0;o<s.length;o+=1){const r=le(n,s,o);a[o]?a[o].p(e,r):(a[o]=fe(r),a[o].c(),a[o].m(t,null))}for(;o<a.length;o+=1)a[o].d(1);a.length=s.length}if(e.otherImages){i=n.otherImages;for(o=0;o<i.length;o+=1){const t=ue(n,i,o);u[o]?u[o].p(e,t):(u[o]=ge(t),u[o].c(),u[o].m(r,null))}for(;o<u.length;o+=1)u[o].d(1);u.length=i.length}},i:o,o:o,d(e){e&&h(t),p(a,e),e&&(h(n),h(r)),p(u,e)}}}function me(e){return{imageValues:["assets/images/characters/cannonbolt_enhanced.png","assets/images/characters/cannonbolt.png","assets/images/characters/diamondhead_enhanced.png","assets/images/characters/diamondhead.png","assets/images/characters/four_arms_enhanced.png","assets/images/characters/four_arms.png","assets/images/characters/grey_matter_enhanced.png","assets/images/characters/grey_matter.png","assets/images/characters/heatblast_enhanced.png","assets/images/characters/heatblast.png","assets/images/characters/hex.png","assets/images/characters/overflow.png","assets/images/characters/overflow_enhanced.png","assets/images/characters/shock_rock_enhanced.png","assets/images/characters/shockrock.png","assets/images/characters/stinkfly_enhanced.png","assets/images/characters/stinkfly.png","assets/images/characters/upgrade.png","assets/images/characters/wildvine_enhanced.png","assets/images/characters/wildvine.png","assets/images/characters/xlr8_enhanced.png","assets/images/characters/xlr8.png"],otherImages:["assets/images/large-image-1.jpg","assets/images/large-image-2.jpg","assets/images/large-image-3.jpg","assets/images/large-image-4.jpg","assets/images/large-image-5.jpg"]}}var he=class extends W{constructor(e){super(),H(this,e,me,de,f,[])}};function pe(e,t,n){const r=Object.create(e);return r.xp=t[n],r}function $e(e){var t,n=new R({props:{value:e.xp}});return{c(){n.$$.fragment.c()},m(e,r){A(n,e,r),t=!0},p(e,t){var r={};e.xpValues&&(r.value=t.xp),n.$set(r)},i(e){t||(n.$$.fragment.i(e),t=!0)},o(e){n.$$.fragment.o(e),t=!1},d(e){n.$destroy(e)}}}function ve(e){for(var t,n,r,s,a,o,c,i=new se({}),u=new ie({}),l=e.xpValues,f=[],g=0;g<l.length;g+=1)f[g]=$e(pe(e,l,g));function v(e,t,n){f[e]&&(t&&L(()=>{f[e].d(t),f[e]=null}),f[e].o(n))}var x=new he({});return{c(){i.$$.fragment.c(),t=b(),u.$$.fragment.c(),n=b(),r=$("main"),s=$("div"),a=$("div");for(var e=0;e<f.length;e+=1)f[e].c();o=b(),x.$$.fragment.c(),a.className="grid__blocks",s.className="grid grid--container",y(r,"role","main")},m(e,l){A(i,e,l),m(e,t,l),A(u,e,l),m(e,n,l),m(e,r,l),d(r,s),d(s,a);for(var g=0;g<f.length;g+=1)f[g].m(a,null);d(r,o),A(x,r,null),c=!0},p(e,t){if(e.xpValues){l=t.xpValues;for(var n=0;n<l.length;n+=1){const r=pe(t,l,n);f[n]?(f[n].p(e,r),f[n].i(1)):(f[n]=$e(r),f[n].c(),f[n].i(1),f[n].m(a,null))}for(T();n<f.length;n+=1)v(n,1,1);V()}},i(e){if(!c){i.$$.fragment.i(e),u.$$.fragment.i(e);for(var t=0;t<l.length;t+=1)f[t].i();x.$$.fragment.i(e),c=!0}},o(e){i.$$.fragment.o(e),u.$$.fragment.o(e),f=f.filter(Boolean);for(let e=0;e<f.length;e+=1)v(e,0);x.$$.fragment.o(e),c=!1},d(e){i.$destroy(e),e&&h(t),u.$destroy(e),e&&(h(n),h(r)),p(f,e),x.$destroy()}}}function be(e){return{xpValues:[5,10,20]}}var ye=class extends W{constructor(e){super(),H(this,e,be,ve,f,[])}};if("serviceWorker"in navigator)try{navigator.serviceWorker.register("/sandbox-pwa/sw.js",{scope:"/sandbox-pwa/"}).then(function(){"storage"in navigator&&"estimate"in navigator.storage?navigator.storage.estimate().then(e=>{var t=document.getElementById("storage-quota"),n=parseInt(e.usage)/1e6,r=parseInt(e.quota)/1e6;t.innerHTML=`Storage Quota: Using ${n} out of ${r} mb`}):document.getElementById("storage-quota").innerHTML="Sorry pal! Can't use storage quota"})}catch(e){console.log("ServiceWorker registration failed. Sorry about that.",e)}const xe=new ye({target:document.body});window.app=xe;t.default=xe}]);