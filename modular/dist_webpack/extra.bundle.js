(()=>{"use strict";var e={424:(e,r,t)=>{t.d(r,{Z:()=>i});var n=t(81),o=t.n(n),a=t(645),c=t.n(a)()(o());c.push([e.id,"\r\n\r\n\r\nbody {\r\n\tbackground-color: #14213d; }\r\n  \r\n  h1 {\r\n\tcolor: #e5e5e5;\r\n\tfont-size: 36px;\r\n\ttext-shadow: 6px;\r\n\tborder: 2px solid #e5e5e5;\r\n\tbox-shadow: 10px; }\r\n  \r\n  p {\r\n\tcolor: #e5e5e5;\r\n\tfont-size: 16px;\r\n\tmargin-top: 50px;\r\n\tmargin-bottom: 50px; }\r\n  \r\n  h2 {\r\n\tcolor: #e5e5e5; }\r\n  \r\n  h3 {\r\n\tcolor: #e5e5e5; }\r\n  \r\n  a {\r\n\tcolor: #fca311; }\r\n  ",""]);const i=c},645:e=>{e.exports=function(e){var r=[];return r.toString=function(){return this.map((function(r){var t="",n=void 0!==r[5];return r[4]&&(t+="@supports (".concat(r[4],") {")),r[2]&&(t+="@media ".concat(r[2]," {")),n&&(t+="@layer".concat(r[5].length>0?" ".concat(r[5]):""," {")),t+=e(r),n&&(t+="}"),r[2]&&(t+="}"),r[4]&&(t+="}"),t})).join("")},r.i=function(e,t,n,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var c={};if(n)for(var i=0;i<this.length;i++){var s=this[i][0];null!=s&&(c[s]=!0)}for(var u=0;u<e.length;u++){var p=[].concat(e[u]);n&&c[p[0]]||(void 0!==a&&(void 0===p[5]||(p[1]="@layer".concat(p[5].length>0?" ".concat(p[5]):""," {").concat(p[1],"}")),p[5]=a),t&&(p[2]?(p[1]="@media ".concat(p[2]," {").concat(p[1],"}"),p[2]=t):p[2]=t),o&&(p[4]?(p[1]="@supports (".concat(p[4],") {").concat(p[1],"}"),p[4]=o):p[4]="".concat(o)),r.push(p))}},r}},81:e=>{e.exports=function(e){return e[1]}},548:(e,r,t)=>{var n=t(379),o=t.n(n),a=t(795),c=t.n(a),i=t(569),s=t.n(i),u=t(565),p=t.n(u),l=t(216),d=t.n(l),f=t(589),v=t.n(f),m=t(424),h={};h.styleTagTransform=v(),h.setAttributes=p(),h.insert=s().bind(null,"head"),h.domAPI=c(),h.insertStyleElement=d(),o()(m.Z,h),m.Z&&m.Z.locals&&m.Z.locals},379:e=>{var r=[];function t(e){for(var t=-1,n=0;n<r.length;n++)if(r[n].identifier===e){t=n;break}return t}function n(e,n){for(var a={},c=[],i=0;i<e.length;i++){var s=e[i],u=n.base?s[0]+n.base:s[0],p=a[u]||0,l="".concat(u," ").concat(p);a[u]=p+1;var d=t(l),f={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==d)r[d].references++,r[d].updater(f);else{var v=o(f,n);n.byIndex=i,r.splice(i,0,{identifier:l,updater:v,references:1})}c.push(l)}return c}function o(e,r){var t=r.domAPI(r);return t.update(e),function(r){if(r){if(r.css===e.css&&r.media===e.media&&r.sourceMap===e.sourceMap&&r.supports===e.supports&&r.layer===e.layer)return;t.update(e=r)}else t.remove()}}e.exports=function(e,o){var a=n(e=e||[],o=o||{});return function(e){e=e||[];for(var c=0;c<a.length;c++){var i=t(a[c]);r[i].references--}for(var s=n(e,o),u=0;u<a.length;u++){var p=t(a[u]);0===r[p].references&&(r[p].updater(),r.splice(p,1))}a=s}}},569:e=>{var r={};e.exports=function(e,t){var n=function(e){if(void 0===r[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}r[e]=t}return r[e]}(e);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");n.appendChild(t)}},216:e=>{e.exports=function(e){var r=document.createElement("style");return e.setAttributes(r,e.attributes),e.insert(r,e.options),r}},565:(e,r,t)=>{e.exports=function(e){var r=t.nc;r&&e.setAttribute("nonce",r)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var r=e.insertStyleElement(e);return{update:function(t){!function(e,r,t){var n="";t.supports&&(n+="@supports (".concat(t.supports,") {")),t.media&&(n+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(n+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),n+=t.css,o&&(n+="}"),t.media&&(n+="}"),t.supports&&(n+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(n+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),r.styleTagTransform(n,e,r.options)}(r,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(r)}}}},589:e=>{e.exports=function(e,r){if(r.styleSheet)r.styleSheet.cssText=e;else{for(;r.firstChild;)r.removeChild(r.firstChild);r.appendChild(document.createTextNode(e))}}}},r={};function t(n){var o=r[n];if(void 0!==o)return o.exports;var a=r[n]={id:n,exports:{}};return e[n](a,a.exports,t),a.exports}t.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return t.d(r,{a:r}),r},t.d=(e,r)=>{for(var n in r)t.o(r,n)&&!t.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:r[n]})},t.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),t.nc=void 0,t(548)})();