!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){e.exports=n(8)},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);n(1),n(2),n(3);const r="xp_db",o="xp_store",c="users_xp_score";function s(){}function a(e){return e()}function i(){return Object.create(null)}function u(e){e.forEach(a)}function l(e){return"function"==typeof e}function f(e,t){return e!=e?t==t:e!==t||e&&"object"==typeof e||"function"==typeof e}function d(e,t,n){const r=t.subscribe(n);e.$$.on_destroy.push(r.unsubscribe?()=>r.unsubscribe():r)}new Set;function p(e,t){e.appendChild(t)}function m(e,t,n){e.insertBefore(t,n||null)}function $(e){e.parentNode.removeChild(e)}function h(e){return document.createElement(e)}function g(e){return document.createTextNode(e)}function v(){return g(" ")}function b(e,t,n){null==n?e.removeAttribute(t):e.setAttribute(t,n)}function y(e,t){t=""+t,e.data!==t&&(e.data=t)}let x;function _(e){x=e}const w=[],k=Promise.resolve();let N=!1;const S=[],j=[],E=[];function C(){N||(N=!0,k.then(M))}function O(e){j.push(e)}function M(){const e=new Set;do{for(;w.length;){const e=w.shift();_(e),P(e.$$)}for(;S.length;)S.shift()();for(;j.length;){const t=j.pop();e.has(t)||(t(),e.add(t))}}while(w.length);for(;E.length;)E.pop()();N=!1}function P(e){e.fragment&&(e.update(e.dirty),u(e.before_render),e.fragment.p(e.dirty,e.ctx),e.dirty=null,e.after_render.forEach(O))}let T;function B(){T={remaining:0,callbacks:[]}}function I(){T.remaining||u(T.callbacks)}function L(e){T.callbacks.push(e)}let V;function A(e,t,n){const{fragment:r,on_mount:o,on_destroy:c,after_render:s}=e.$$;r.m(t,n),O(()=>{const t=o.map(a).filter(l);c?c.push(...t):u(t),e.$$.on_mount=[]}),s.forEach(O)}function D(e,t){e.$$&&(u(e.$$.on_destroy),e.$$.fragment.d(t),e.$$.on_destroy=e.$$.fragment=null,e.$$.ctx={})}function H(e,t,n,r,o,c){const a=x;_(e);const l=t.props||{},f=e.$$={fragment:null,ctx:null,props:c,update:s,not_equal:o,bound:i(),on_mount:[],on_destroy:[],before_render:[],after_render:[],context:new Map(a?a.$$.context:[]),callbacks:i(),dirty:null};let d=!1;var p;f.ctx=n?n(e,l,(t,n)=>{f.ctx&&o(f.ctx[t],f.ctx[t]=n)&&(f.bound[t]&&f.bound[t](n),d&&function(e,t){e.$$.dirty||(w.push(e),C(),e.$$.dirty=i()),e.$$.dirty[t]=!0}(e,t))}):l,f.update(),d=!0,u(f.before_render),f.fragment=r(f.ctx),t.target&&(t.hydrate?f.fragment.l((p=t.target,Array.from(p.childNodes))):f.fragment.c(),t.intro&&e.$$.fragment.i&&e.$$.fragment.i(),A(e,t.target,t.anchor),M()),_(a)}"undefined"!=typeof HTMLElement&&(V=class extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){for(const e in this.$$.slotted)this.appendChild(this.$$.slotted[e])}attributeChangedCallback(e,t,n){this[e]=n}$destroy(){D(this,!0),this.$destroy=s}$on(e,t){const n=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return n.push(t),()=>{const e=n.indexOf(t);-1!==e&&n.splice(e,1)}}$set(){}});class W{$destroy(){D(this,!0),this.$destroy=s}$on(e,t){const n=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return n.push(t),()=>{const e=n.indexOf(t);-1!==e&&n.splice(e,1)}}$set(){}}function q(e,t=s){let n;const r=[];function o(t){if(f(e,t)){if(e=t,!n)return;r.forEach(e=>e[1]()),r.forEach(t=>t[0](e))}}return{set:o,update:function(t){o(t(e))},subscribe:function(c,a=s){const i=[c,a];return r.push(i),1===r.length&&(n=t(o)||s),c(e),()=>{const e=r.indexOf(i);-1!==e&&r.splice(e,1),0===r.length&&n()}}}}const G=q(0);class U{constructor(e="keyval-store",t="keyval"){this.storeName=t,this._dbp=new Promise((n,r)=>{const o=indexedDB.open(e,1);o.onerror=(()=>r(o.error)),o.onsuccess=(()=>n(o.result)),o.onupgradeneeded=(()=>{o.result.createObjectStore(t)})})}_withIDBStore(e,t){return this._dbp.then(n=>new Promise((r,o)=>{const c=n.transaction(this.storeName,e);c.oncomplete=(()=>r()),c.onabort=c.onerror=(()=>o(c.error)),t(c.objectStore(this.storeName))}))}}let X;function Y(){return X||(X=new U),X}const z=new U(r,o);function F(e){!function(e,t,n=Y()){n._withIDBStore("readwrite",n=>{n.put(t,e)})}(c,e,z)}(function(e,t=Y()){let n;return t._withIDBStore("readonly",t=>{n=t.get(e)}).then(()=>n.result)})(c,z).then(function(e){let t=e;void 0!==t?G.set(parseInt(t)):G.set(0)});n(4);function J(e){var t,n,r,o,c;return{c(){var s,a,i,u;t=h("button"),n=g("Click to Gain "),r=g(e.value),o=g("!"),t.className="experience-box svelte-17g6747",s=t,a="click",i=e.increment,s.addEventListener(a,i,u),c=(()=>s.removeEventListener(a,i,u))},m(e,c){m(e,t,c),p(t,n),p(t,r),p(t,o)},p(e,t){e.value&&y(r,t.value)},i:s,o:s,d(e){e&&$(t),c()}}}function K(e,t,n){let r;d(e,G,e=>{n("$count",r=e)});let{value:o}=t;return e.$set=(e=>{"value"in e&&n("value",o=e.value)}),{value:o,increment:function(){G.update(e=>e+o),F(r)}}}var Q=class extends W{constructor(e){super(),H(this,e,K,J,f,["value"])}};n(5);function R(e){var t,n,r,o,c;return{c(){t=h("section"),(n=h("div")).textContent="Your XP points -",r=v(),o=h("div"),c=g(e.$count),n.className="users-xp__text svelte-9b18vh",o.className="users-xp__count svelte-9b18vh",t.className="users-xp svelte-9b18vh"},m(e,s){m(e,t,s),p(t,n),p(t,r),p(t,o),p(o,c)},p(e,t){e.$count&&y(c,t.$count)},i:s,o:s,d(e){e&&$(t)}}}function Z(e,t,n){let r;return d(e,G,e=>{n("$count",r=e)}),{$count:r}}var ee=class extends W{constructor(e){super(),H(this,e,Z,R,f,[])}};n(6);function te(e){var t,n,r,o,c,a,i=new ee({});return{c(){t=h("header"),n=h("div"),r=h("h1"),o=g(ne),c=v(),i.$$.fragment.c(),r.className="svelte-gsag4y",n.className="grid grid--container",t.className="svelte-gsag4y"},m(e,s){m(e,t,s),p(t,n),p(n,r),p(r,o),p(n,c),A(i,n,null),a=!0},p:s,i(e){a||(i.$$.fragment.i(e),a=!0)},o(e){i.$$.fragment.o(e),a=!1},d(e){e&&$(t),i.$destroy()}}}let ne="PWA Test";var re=class extends W{constructor(e){super(),H(this,e,null,te,f,[])}};n(7);function oe(e){var t,n;return{c(){t=h("section"),(n=h("img")).src=ce,n.alt=se,n.className="svelte-c4fd7a",t.className="placeholder-image svelte-c4fd7a"},m(e,r){m(e,t,r),p(t,n)},p:s,i:s,o:s,d(e){e&&$(t)}}}let ce="assets/images/placeholder-bg.jpg",se="This is a Ben10 placeholder image";var ae=class extends W{constructor(e){super(),H(this,e,null,oe,f,[])}};function ie(e,t,n){const r=Object.create(e);return r.xp=t[n],r}function ue(e){var t,n=new Q({props:{value:e.xp}});return{c(){n.$$.fragment.c()},m(e,r){A(n,e,r),t=!0},p(e,t){var r={};e.xpValues&&(r.value=t.xp),n.$set(r)},i(e){t||(n.$$.fragment.i(e),t=!0)},o(e){n.$$.fragment.o(e),t=!1},d(e){n.$destroy(e)}}}function le(e){for(var t,n,r,o,c,s,a=new re({}),i=new ae({}),u=e.xpValues,l=[],f=0;f<u.length;f+=1)l[f]=ue(ie(e,u,f));function d(e,t,n){l[e]&&(t&&L(()=>{l[e].d(t),l[e]=null}),l[e].o(n))}return{c(){a.$$.fragment.c(),t=v(),i.$$.fragment.c(),n=v(),r=h("main"),o=h("div"),c=h("div");for(var e=0;e<l.length;e+=1)l[e].c();c.className="grid__blocks",o.className="grid grid--container",b(r,"role","main")},m(e,u){A(a,e,u),m(e,t,u),A(i,e,u),m(e,n,u),m(e,r,u),p(r,o),p(o,c);for(var f=0;f<l.length;f+=1)l[f].m(c,null);s=!0},p(e,t){if(e.xpValues){u=t.xpValues;for(var n=0;n<u.length;n+=1){const r=ie(t,u,n);l[n]?(l[n].p(e,r),l[n].i(1)):(l[n]=ue(r),l[n].c(),l[n].i(1),l[n].m(c,null))}for(B();n<l.length;n+=1)d(n,1,1);I()}},i(e){if(!s){a.$$.fragment.i(e),i.$$.fragment.i(e);for(var t=0;t<u.length;t+=1)l[t].i();s=!0}},o(e){a.$$.fragment.o(e),i.$$.fragment.o(e),l=l.filter(Boolean);for(let e=0;e<l.length;e+=1)d(e,0);s=!1},d(e){a.$destroy(e),e&&$(t),i.$destroy(e),e&&($(n),$(r)),function(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}(l,e)}}}function fe(e){return{xpValues:[5,10,20]}}var de=class extends W{constructor(e){super(),H(this,e,fe,le,f,[])}};if("serviceWorker"in navigator)try{navigator.serviceWorker.register("sw.js").then(function(){if("storage"in navigator&&"estimate"in navigator.storage)navigator.storage.estimate().then(e=>{var t=document.createElement("p"),n=parseInt(e.usage)/1e6,r=parseInt(e.quota)/1e6;t.innerHTML=`Using ${n} out of ${r} MB.`;var o=document.createElement("div");o.appendChild(t),document.body.appendChild(o)});else{var e=document.createElement("p");e.innerHTML="Sorry pal! Can't use storage quota";var t=document.createElement("div");t.appendChild(e),document.body.appendChild(t)}})}catch(e){console.log("ServiceWorker registration failed. Sorry about that.",e)}const pe=new de({target:document.body});window.app=pe;t.default=pe}]);