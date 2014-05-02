/**
*
*   Classy.js
*   @version: 0.5.5
*
*   Object-Oriented mini-framework for JavaScript
*   https://github.com/foo123/classy.js
*
**/!function(e,t,n,r,o){var i="undefined"!=typeof global&&"[object global]"=={}.toString.call(global)?1:0,l=i||"undefined"==typeof navigator?0:1,a="function"==typeof importScripts&&navigator instanceof WorkerNavigator?1:0,u=Array,c=u.prototype,f=function(){var e=null;if(i)return e=__filename,{path:__dirname,file:__filename};if(a)e=self.location.href;else if(l){var t;(t=document.getElementsByTagName("script"))&&t.length&&(e=t[t.length-1].src)}return e?{path:e.split("/").slice(0,-1).join("/"),file:e}:{path:null,file:null}},s=f(),p=function(e,t){if(i)return t;if("."==t.charAt(0)){e=e.split("/"),t=t.split("/");var n,r=0,o=0,l=t.length,a=e.length;for(n=0;l>n;n++)if(/^\.\./.test(t[n]))r++,o++;else{if(!/^\./.test(t[n]))break;o++}r=r>=a?0:a-r,t=e.slice(0,r).concat(t.slice(o)).join("/")}return t};n=n?[].concat(n):[];var b,d,y,g=n.length,v=new u(g),m=new u(g),h=new u(g),w=new u(g);for(b=0;g>b;b++)v[b]=n[b][0],m[b]=n[b][1],h[b]=/\.js$/i.test(m[b])?p(s.path,m[b]):p(s.path,m[b]+".js");if("object"==typeof module&&module.exports){if(o===module.exports[t]){for(b=0;g>b;b++)w[b]=module.exports[v[b]]||require(h[b])[v[b]];d=r.apply(e,w),module.exports[t]=d||1}}else if("function"==typeof define&&define.amd)define(["exports"].concat(m),function(n){if(o===n[t]){for(var i=c.slice.call(arguments,1),l=i.length,a=0;l>a;a++)w[a]=n[v[a]]||i[a];d=r.apply(e,w),n[t]=d||1}});else if(a){for(b=0;g>b;b++)self[v[b]]||importScripts(h[b]),w[b]=self[v[b]];d=r.apply(e,w),self[t]=d||1}else if(o===e[t]){var j=function(e,t){y=y||document.getElementsByTagName("head")[0];var n=0,r=document.createElement("script");r.type="text/javascript",r.language="javascript",r.src=e,r.onload=r.onreadystatechange=function(){n||r.readyState&&"loaded"!=r.readyState&&"complete"!=r.readyState||(n=1,r.onload=r.onreadystatechange=null,y.removeChild(r),r=null,t&&t())},y.appendChild(r)},E=function(t,n,r){e[t]?r():j(n,r)},x=function(n){return function(){g>n&&(w[n]=e[v[n]]),++n<g?E(v[n],h[n],x(n)):(d=r.apply(e,w),e[t]=d||1)}};g?E(v[0],h[0],x(0)):(d=r.apply(e,w),e[t]=d||1)}}(this,"Classy",null,function(){var e={};return function(e,t){var n=function(e,t,n){this.v=e||null,this.prev=t||null,this.next=n||null};n.prototype={constructor:n,v:null,prev:null,next:null};var r=Array.prototype,o=Object.prototype,i=Function.prototype,l=i.call.bind(r.slice),a=i.call.bind(o.toString),u=i.call.bind(o.hasOwnProperty),c=i.call.bind(o.propertyIsEnumerable),f=Object.keys,s=Object.defineProperty,p=2,b=3,d=4,y=8,g=9,v=16,m=32,h=64,w=128,j=256,E=512,x=1024,_=function(e){var t=typeof e,n=a(e);return"undefined"===t?E:"number"===t||e instanceof Number?isNaN(e)?b:p:null===e?j:!0===e||!1===e?d:e&&("string"===t||e instanceof String)?1===e.length?g:y:e&&("[object Array]"===n||e instanceof Array)?v:e&&("[object RegExp]"===n||e instanceof RegExp)?w:e&&("function"===t&&"[object Function]"===n||e instanceof Function)?h:e&&"[object Object]"===n?m:x},O=function(e,t){var n,r=t.length,o=[].concat(e);for(n=0;r>n;n++)o.indexOf(t[n])>-1||o.push(t[n]);return o},N=function(e,t){if(m!==_(e))throw new TypeError("bad desc");var n={};if(u(e,"enumerable")&&(n.enumerable=!!t.enumerable),u(e,"configurable")&&(n.configurable=!!t.configurable),u(e,"value")&&(n.value=t.value),u(e,"writable")&&(n.writable=!!e.writable),u(e,"get")){var r=e.get;if(h!==_(r)&&"undefined"!==r)throw new TypeError("bad get");n.get=r}if(u(e,"set")){var o=e.set;if(h!==_(o)&&"undefined"!==o)throw new TypeError("bad set");n.set=o}if(("get"in n||"set"in n)&&("value"in n||"writable"in n))throw new TypeError("identity-confused descriptor");return n},T=Object.defineProperties||function(e,t){if("object"!=typeof e||null===e)throw new TypeError("bad obj");t=Object(t);for(var n=f(t),r=[],o=0;o<n.length;o++)r.push([n[o],N(t[n[o]],e)]);for(var o=0;o<r.length;o++)s(e,r[o][0],r[o][1]);return e},S=Object.create||function(e,t){var n,r=function(){};return r.prototype=e,n=new r,n.__proto__=e,"object"==typeof t&&T(n,t),n},A=function(e){var t=new n(e);return function(e){if(e&&t&&t.v){var r,o=this;if(e="constructor"==e?t.v:t.v.prototype[e])return t=new n(t.v.$super,t),r=e.apply(o,l(arguments,1)),t=t.prev,r}}},C=function(){var e,t,n,r,o,i,a,f=l(arguments);for(t=f.shift()||{},e=f.length,i=0;e>i;i++)if(n=f[i],m===_(n))for(o in n)u(n,o)&&c(n,o)&&(r=n[o],a=_(r),t[o]=p&a?0+r:(y|v)&a?r.slice(0):r);return t},R=function(e,n){e=e||Object,n=n||{};var r,o,i,l,a,c,s,b,d=null,g=e.$static||null;if(u(n,"constructor")?o=n.constructor:(r=function(){},n.constructor=o=r),u(n,"__static__")&&(d=n.__static__,delete n.__static__,g=O(g||[],f(d))),o.prototype=S(e.prototype),o.prototype=C(o.prototype,n),T(o.prototype,{constructor:{value:o,enumerable:!1,writable:!0,configurable:!0},$class:{value:o,enumerable:!1,writable:!0,configurable:!0},$super:{value:A(e),enumerable:!1,writable:!0,configurable:!0}}),T(o,{$super:{value:e,enumerable:!1,writable:!0,configurable:!0},$static:{value:g,enumerable:!1,writable:!0,configurable:!0}}),g){for(l=g.length,a={},i=0;l>i;i++)c=g[i],s=null,d&&t!==d[c]?s=d[c]:t!==e[c]&&(b=_(e[c]),s=m===b?C(null,e[c]):(y|v)&b?e[c].slice(0):p&b?0+e[c]:e[c]),a[c]={value:s,enumerable:!1,writable:!0,configurable:!0};T(o,a)}return o},I=Mixin=C,M=function(){var e=l(arguments),t=e.length,n=null;if(t>=2){var r=_(e[0]);r=h===r?{Extends:e[0]}:m===r?e[0]:{Extends:Object};var o,i,a=e[1]||{},u={},c=r.Extends||r.extends||Object,f=r.Implements||r.implements,s=r.Mixin||r.mixin;if(f=f?[].concat(f):null,s=s?[].concat(s):null)for(o=0,i=s.length;i>o;o++)s[o].prototype&&(u=Mixin(u,s[o].prototype));if(f)for(o=0,i=f.length;i>o;o++)f[o].prototype&&(u=I(u,f[o].prototype));n=R(c,C(u,a))}else n=R(Object,e[0]);return n};e.Classy={VERSION:"0.5.5",T:{UNDEFINED:E,NULL:j,BOOLEAN:d,STRING:y,NUMBER:p,NAN:b,FUNCTION:h,REGEXP:w,ARRAY:v,OBJECT:m},Type:_,Create:S,Merge:C,Implements:I,Mixin:Mixin,Extends:R,Static:function(e){return e},Class:M}}(e),e.Classy});