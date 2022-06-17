!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e(require("core-js/modules/es.object.to-string.js"),require("core-js/modules/es.promise.js"),require("core-js/modules/es.array.join.js"),require("core-js/modules/es.array.slice.js"),require("core-js/modules/es.regexp.exec.js"),require("core-js/modules/es.string.split.js"),require("core-js/modules/es.string.replace.js"),require("core-js/modules/es.array.iterator.js"),require("core-js/modules/es.string.iterator.js"),require("core-js/modules/web.dom-collections.iterator.js"),require("core-js/modules/web.url.js"),require("core-js/modules/web.url-search-params.js"),require("core-js/modules/es.regexp.to-string.js"),require("core-js/modules/es.string.match.js")):"function"==typeof define&&define.amd?define(["core-js/modules/es.object.to-string.js","core-js/modules/es.promise.js","core-js/modules/es.array.join.js","core-js/modules/es.array.slice.js","core-js/modules/es.regexp.exec.js","core-js/modules/es.string.split.js","core-js/modules/es.string.replace.js","core-js/modules/es.array.iterator.js","core-js/modules/es.string.iterator.js","core-js/modules/web.dom-collections.iterator.js","core-js/modules/web.url.js","core-js/modules/web.url-search-params.js","core-js/modules/es.regexp.to-string.js","core-js/modules/es.string.match.js"],e):(t="undefined"!=typeof globalThis?globalThis:t||self).PokeApi=e()}(this,(function(){"use strict";function t(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function e(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?t(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):t(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function n(){
/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
n=function(){return t};var t={},e=Object.prototype,r=e.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",c=o.asyncIterator||"@@asyncIterator",u=o.toStringTag||"@@toStringTag";function a(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{a({},"")}catch(t){a=function(t,e,n){return t[e]=n}}function f(t,e,n,r){var o=e&&e.prototype instanceof l?e:l,i=Object.create(o.prototype),c=new x(r||[]);return i._invoke=function(t,e,n){var r="suspendedStart";return function(o,i){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===o)throw i;return k()}for(n.method=o,n.arg=i;;){var c=n.delegate;if(c){var u=b(c,n);if(u){if(u===h)continue;return u}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var a=s(t,e,n);if("normal"===a.type){if(r=n.done?"completed":"suspendedYield",a.arg===h)continue;return{value:a.arg,done:n.done}}"throw"===a.type&&(r="completed",n.method="throw",n.arg=a.arg)}}}(t,n,c),i}function s(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}t.wrap=f;var h={};function l(){}function p(){}function m(){}var g={};a(g,i,(function(){return this}));var d=Object.getPrototypeOf,v=d&&d(d(O([])));v&&v!==e&&r.call(v,i)&&(g=v);var y=m.prototype=l.prototype=Object.create(g);function w(t){["next","throw","return"].forEach((function(e){a(t,e,(function(t){return this._invoke(e,t)}))}))}function j(t,e){function n(o,i,c,u){var a=s(t[o],t,i);if("throw"!==a.type){var f=a.arg,h=f.value;return h&&"object"==typeof h&&r.call(h,"__await")?e.resolve(h.__await).then((function(t){n("next",t,c,u)}),(function(t){n("throw",t,c,u)})):e.resolve(h).then((function(t){f.value=t,c(f)}),(function(t){return n("throw",t,c,u)}))}u(a.arg)}var o;this._invoke=function(t,r){function i(){return new e((function(e,o){n(t,r,e,o)}))}return o=o?o.then(i,i):i()}}function b(t,e){var n=t.iterator[e.method];if(void 0===n){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,b(t,e),"throw"===e.method))return h;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return h}var r=s(n,t.iterator,e.arg);if("throw"===r.type)return e.method="throw",e.arg=r.arg,e.delegate=null,h;var o=r.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,h):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,h)}function P(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function _(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function x(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(P,this),this.reset(!0)}function O(t){if(t){var e=t[i];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,o=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return o.next=o}}return{next:k}}function k(){return{value:void 0,done:!0}}return p.prototype=m,a(y,"constructor",m),a(m,"constructor",p),p.displayName=a(m,u,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===p||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,m):(t.__proto__=m,a(t,u,"GeneratorFunction")),t.prototype=Object.create(y),t},t.awrap=function(t){return{__await:t}},w(j.prototype),a(j.prototype,c,(function(){return this})),t.AsyncIterator=j,t.async=function(e,n,r,o,i){void 0===i&&(i=Promise);var c=new j(f(e,n,r,o),i);return t.isGeneratorFunction(n)?c:c.next().then((function(t){return t.done?t.value:c.next()}))},w(y),a(y,u,"Generator"),a(y,i,(function(){return this})),a(y,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){for(;e.length;){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},t.values=O,x.prototype={constructor:x,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(_),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(n,r){return c.type="throw",c.arg=t,e.next=n,r&&(e.method="next",e.arg=void 0),!!r}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],c=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var u=r.call(i,"catchLoc"),a=r.call(i,"finallyLoc");if(u&&a){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(u){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!a)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var c=i?i.completion:{};return c.type=t,c.arg=e,i?(this.method="next",this.next=i.finallyLoc,h):this.complete(c)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),h},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),_(n),h}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;_(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:O(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=void 0),h}},t}function r(t,e,n,r,o,i,c){try{var u=t[i](c),a=u.value}catch(t){return void n(t)}u.done?e(a):Promise.resolve(a).then(r,o)}function o(t){return function(){var e=this,n=arguments;return new Promise((function(o,i){var c=t.apply(e,n);function u(t){r(c,o,i,u,a,"next",t)}function a(t){r(c,o,i,u,a,"throw",t)}u(void 0)}))}}function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function c(t){return u.apply(this,arguments)}function u(){return u=o(n().mark((function t(e){var r,o,i,c,u,s,h,l,p,m,g=arguments;return n().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(r=g.length>1&&void 0!==g[1]?g[1]:{},o=g.length>2?g[2]:void 0,"number"!=typeof r.expiry&&(r.expiry=86400),void 0===r.cache&&(r.cache=!0),"/"!=(i=new URL(e)).pathname.substring(-1)&&(i.pathname+="/"),e=i.toString(),c="",!r.cache){t.next=21;break}if(c=-1!==e.indexOf(a)&&-1!==e.indexOf(f)?"pokeapi.js:"+e.split("/").slice(5,7).join("/"):"pokeapi.js:"+e,u=localStorage.getItem(c),s=localStorage.getItem(c+":ts"),null===u||null===s){t.next=21;break}if(!((Date.now()-s)/1e3<r.expiry)){t.next=19;break}return h=new Response(new Blob([u])),t.abrupt("return",Promise.resolve(h));case 19:localStorage.removeItem(c),localStorage.removeItem(c+":ts");case 21:return t.next=23,fetch(e,o);case 23:if(200!==(l=t.sent).status){t.next=32;break}if(!(p=l.headers.get("Content-Type"))||!p.match(/application\/json/i)&&!p.match(/text\//i)){t.next=32;break}return t.next=29,l.clone().text();case 29:m=t.sent,localStorage.setItem(c,m),localStorage.setItem(c+":ts",Date.now());case 32:return t.abrupt("return",l);case 33:case"end":return t.stop()}}),t)}))),u.apply(this,arguments)}var a="https://pokeapi.co/api/",f="v2";function s(t,e){return h.apply(this,arguments)}function h(){return(h=o(n().mark((function t(e,r){var o;return n().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return(e=e.split("/"))[1]=e[1].replace("undefined",""),e=e.join("/"),t.prev=3,t.next=6,c(a+f+"/"+e,r);case 6:if(!(o=t.sent).ok){t.next=13;break}return t.next=10,o.json();case 10:return t.abrupt("return",t.sent);case 13:throw o.status+" "+o.statusText;case 14:t.next=19;break;case 16:throw t.prev=16,t.t0=t.catch(3),t.t0;case 19:case"end":return t.stop()}}),t,null,[[3,16]])})))).apply(this,arguments)}var l=Object.freeze({__proto__:null,apiUrl:a,apiVersion:f,getResource:s,getResourceFromUrl:function(t,e){if(-1!==t.indexOf(a)&&-1!==t.indexOf(f))return s(t.split("/").slice(5,7).join("/"),e)}});var p=Object.freeze({__proto__:null,getBerry:function(t){return new Promise((function(e,n){s("berry/"+t).then((function(t){e(t)})).catch((function(t){n(t)}))}))},getBerryFirmness:function(t){return new Promise((function(e,n){s("berry-firmness/"+t).then((function(t){e(t)})).catch((function(t){n(t)}))}))},getBerryFlavor:function(t){return new Promise((function(e,n){s("berry-flavor/"+t).then((function(t){e(t)})).catch((function(t){n(t)}))}))}});var m=Object.freeze({__proto__:null,getContestType:function(t){return new Promise((function(e,n){s("contest-type/"+t).then((function(t){e(t)})).catch((function(t){n(t)}))}))},getContestEffect:function(t){return new Promise((function(e,n){s("contest-effect/"+t).then((function(t){e(t)})).catch((function(t){n(t)}))}))},getSuperContestEffect:function(t){return new Promise((function(e,n){s("super-contest-effect/"+t).then((function(t){e(t)})).catch((function(t){n(t)}))}))}});var g=Object.freeze({__proto__:null,getEncounterMethod:function(t){return new Promise((function(e,n){s("encounter-method/"+t).then((function(t){e(t)})).catch((function(t){n(t)}))}))},getEncounterCondition:function(t){return new Promise((function(e,n){s("encounter-condition/"+t).then((function(t){e(t)})).catch((function(t){n(t)}))}))},getEncounterConditionValue:function(t){return new Promise((function(e,n){s("encounter-condition-value/"+t).then((function(t){e(t)})).catch((function(t){n(t)}))}))}});var d=Object.freeze({__proto__:null,getEvolutionChain:function(t){return new Promise((function(e,n){s("evolution-chain/"+t).then((function(t){e(t)})).catch((function(t){n(t)}))}))},getEvolutionTrigger:function(t){return new Promise((function(e,n){s("evolution-trigger/"+t).then((function(t){e(t)})).catch((function(t){n(t)}))}))}});var v=Object.freeze({__proto__:null,getGeneration:function(t){return new Promise((function(e,n){s("generation/"+t).then((function(t){e(t)})).catch((function(t){n(t)}))}))},getPokedex:function(t){return new Promise((function(e,n){s("pokedex/"+t).then((function(t){e(t)})).catch((function(t){n(t)}))}))},getVersion:function(t){return new Promise((function(e,n){s("version/"+t).then((function(t){e(t)})).catch((function(t){n(t)}))}))},getVersionGroup:function(t){return new Promise((function(e,n){s("version-group/"+t).then((function(t){e(t)})).catch((function(t){n(t)}))}))}});var y=Object.freeze({__proto__:null,getItem:function(t){return new Promise((function(e,n){s("item/"+t).then((function(t){e(t)})).catch((function(t){n(t)}))}))},getItemAttribute:function(t){return new Promise((function(e,n){s("item-attribute/"+t).then((function(t){e(t)})).catch((function(t){n(t)}))}))},getItemCategory:function(t){return new Promise((function(e,n){s("item-category/"+t).then((function(t){e(t)})).catch((function(t){n(t)}))}))},getItemFlingEffect:function(t){return new Promise((function(e,n){s("item-fling-effect/"+t).then((function(t){e(t)})).catch((function(t){n(t)}))}))},getItemPocket:function(t){return new Promise((function(e,n){s("item-pocket/"+t).then((function(t){e(t)})).catch((function(t){n(t)}))}))}});var w=Object.freeze({__proto__:null,getLanguage:function(t){return new Promise((function(e,n){s("language/"+t).then((function(t){e(t)})).catch((function(t){n(t)}))}))}});var j=Object.freeze({__proto__:null,getLocation:function(t){return new Promise((function(e,n){s("location/"+t).then((function(t){e(t)})).catch((function(t){n(t)}))}))},getLocationArea:function(t){return new Promise((function(e,n){s("location-area/"+t).then((function(t){e(t)})).catch((function(t){n(t)}))}))},getPalParkArea:function(t){return new Promise((function(e,n){s("pal-park-area/"+t).then((function(t){e(t)})).catch((function(t){n(t)}))}))},getRegion:function(t){return new Promise((function(e,n){s("region/"+t).then((function(t){e(t)})).catch((function(t){n(t)}))}))}});var b=Object.freeze({__proto__:null,getMachine:function(t){return new Promise((function(e,n){s("machine/"+t).then((function(t){e(t)})).catch((function(t){n(t)}))}))}});var P=Object.freeze({__proto__:null,getMove:function(t){return new Promise((function(e,n){s("move/"+t).then((function(t){e(t)})).catch((function(t){n(t)}))}))},getMoveAilment:function(t){return new Promise((function(e,n){s("move-ailment/"+t).then((function(t){e(t)})).catch((function(t){n(t)}))}))},getMoveBattleStyle:function(t){return new Promise((function(e,n){s("move-battle-style/"+t).then((function(t){e(t)})).catch((function(t){n(t)}))}))},getMoveCategory:function(t){return new Promise((function(e,n){s("move-category/"+t).then((function(t){e(t)})).catch((function(t){n(t)}))}))},getMoveDamageClass:function(t){return new Promise((function(e,n){s("move-damage-class/"+t).then((function(t){e(t)})).catch((function(t){n(t)}))}))},getMoveLearnMethod:function(t){return new Promise((function(e,n){s("move-learn-method/"+t).then((function(t){e(t)})).catch((function(t){n(t)}))}))},getMoveTarget:function(t){return new Promise((function(e,n){s("move-target/"+t).then((function(t){e(t)})).catch((function(t){n(t)}))}))}});var _=Object.freeze({__proto__:null,getAbility:function(t){return new Promise((function(e,n){s("ability/"+t).then((function(t){e(t)})).catch((function(t){n(t)}))}))},getCharacteristic:function(t){return new Promise((function(e,n){s("characteristic/"+t).then((function(t){e(t)})).catch((function(t){n(t)}))}))},getEggGroup:function(t){return new Promise((function(e,n){s("egg-group/"+t).then((function(t){e(t)})).catch((function(t){n(t)}))}))},getGender:function(t){return new Promise((function(e,n){s("gender/"+t).then((function(t){e(t)})).catch((function(t){n(t)}))}))},getGrowthRate:function(t){return new Promise((function(e,n){s("growth-rate/"+t).then((function(t){e(t)})).catch((function(t){n(t)}))}))},getNature:function(t){return new Promise((function(e,n){s("nature/"+t).then((function(t){e(t)})).catch((function(t){n(t)}))}))},getPokeathlonStat:function(t){return new Promise((function(e,n){s("pokeathlon-stat/"+t).then((function(t){e(t)})).catch((function(t){n(t)}))}))},getPokemon:function(t){return new Promise((function(e,n){s("pokemon/"+t).then((function(t){e(t)})).catch((function(t){n(t)}))}))},getPokemonColor:function(t){return new Promise((function(e,n){s("pokemon-color/"+t).then((function(t){e(t)})).catch((function(t){n(t)}))}))},getPokemonForm:function(t){return new Promise((function(e,n){s("pokemon-form/"+t).then((function(t){e(t)})).catch((function(t){n(t)}))}))},getPokemonHabitat:function(t){return new Promise((function(e,n){s("pokemon-habitat/"+t).then((function(t){e(t)})).catch((function(t){n(t)}))}))},getPokemonShape:function(t){return new Promise((function(e,n){s("pokemon-shape/"+t).then((function(t){e(t)})).catch((function(t){n(t)}))}))},getPokemonSpecies:function(t){return new Promise((function(e,n){s("pokemon-species/"+t).then((function(t){e(t)})).catch((function(t){n(t)}))}))},getStat:function(t){return new Promise((function(e,n){s("stat/"+t).then((function(t){e(t)})).catch((function(t){n(t)}))}))},getType:function(t){return new Promise((function(e,n){s("type/"+t).then((function(t){e(t)})).catch((function(t){n(t)}))}))}});return e(e(e(e(e(e(e(e(e(e(e(e({},p),m),g),d),v),y),w),j),b),P),_),l)}));
//# sourceMappingURL=pokeapi.js.map
