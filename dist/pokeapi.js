(function(a,b){'object'==typeof exports&&'undefined'!=typeof module?module.exports=b():'function'==typeof define&&define.amd?define(b):a.PokeApi=b()})(this,function(){'use strict';// Based on:
// https://codepen.io/SitePoint/pen/KrYrXA?editors=0012
function a(a,b,f){'object'!==('undefined'==typeof b?'undefined':c(b))&&(b={}),'number'!=typeof b.expiry&&(b.expiry=86400),void 0===b.cache&&(b.cache=!0);var g=new URL(a);if('/'!=g.pathname.substr(-1)&&(g.pathname+='/'),a=g.toString(),b.cache){if(-1!==a.indexOf(d)&&-1!==a.indexOf(e))// Use shorthand of URL as key
var h='pokeapi.js:'+a.split('/').slice(5,7).join('/');else// Use the URL as the cache key to sessionStorage
var h='pokeapi.js:'+a;var i=localStorage.getItem(h),j=localStorage.getItem(h+':ts');if(null!==i&&null!==j){// it was in sessionStorage! Yay!
// Even though 'whenCached' is a string, this operation
// works because the minus sign tries to convert the
// string to an integer and it will work.
var k=(Date.now()-j)/1e3;if(k<b.expiry){var l=new Response(new Blob([i]));return Promise.resolve(l)}localStorage.removeItem(h),localStorage.removeItem(h+':ts')}}return fetch(a,f).then(function(a){// let's only store in cache if the content-type is
// JSON or something non-binary
if(200===a.status){var b=a.headers.get('Content-Type');b&&(b.match(/application\/json/i)||b.match(/text\//i))&&a.clone().text().then(function(a){localStorage.setItem(h,a),localStorage.setItem(h+':ts',Date.now())})}return a})}function b(b,c){return b=b.split('/'),b[1]=b[1].replace('undefined',''),b=b.join('/'),new Promise(function(f,g){a(d+e+'/'+b,c).then(function(a){a.ok?a.json().then(function(a){f(a)}):g(a.status+' '+a.statusText)},function(a){g(a)})})}var c='function'==typeof Symbol&&'symbol'==typeof Symbol.iterator?function(a){return typeof a}:function(a){return a&&'function'==typeof Symbol&&a.constructor===Symbol&&a!==Symbol.prototype?'symbol':typeof a},d='https://pokeapi.co/api/',e='v2',f=Object.freeze({apiUrl:d,apiVersion:e,getResource:b,getResourceFromUrl:function(a,c){if(-1!==a.indexOf(d)&&-1!==a.indexOf(e))return b(a.split('/').slice(5,7).join('/'),c)}}),g=Object.freeze({getBerry:function(a){return new Promise(function(c,d){b('berry/'+a).then(function(a){c(a)}).catch(function(a){d(a)})})},getBerryFirmness:function(a){return new Promise(function(c,d){b('berry-firmness/'+a).then(function(a){c(a)}).catch(function(a){d(a)})})},getBerryFlavor:function(a){return new Promise(function(c,d){b('berry-flavor/'+a).then(function(a){c(a)}).catch(function(a){d(a)})})}}),h=Object.freeze({getContestType:function(a){return new Promise(function(c,d){b('contest-type/'+a).then(function(a){c(a)}).catch(function(a){d(a)})})},getContestEffect:function(a){return new Promise(function(c,d){b('contest-effect/'+a).then(function(a){c(a)}).catch(function(a){d(a)})})},getSuperContestEffect:function(a){return new Promise(function(c,d){b('super-contest-effect/'+a).then(function(a){c(a)}).catch(function(a){d(a)})})}}),i=Object.freeze({getEncounterMethod:function(a){return new Promise(function(c,d){b('encounter-method/'+a).then(function(a){c(a)}).catch(function(a){d(a)})})},getEncounterCondition:function(a){return new Promise(function(c,d){b('encounter-condition/'+a).then(function(a){c(a)}).catch(function(a){d(a)})})},getEncounterConditionValue:function(a){return new Promise(function(c,d){b('encounter-condition-value/'+a).then(function(a){c(a)}).catch(function(a){d(a)})})}}),j=Object.freeze({getEvolutionChain:function(a){return new Promise(function(c,d){b('evolution-chain/'+a).then(function(a){c(a)}).catch(function(a){d(a)})})},getEvolutionTrigger:function(a){return new Promise(function(c,d){b('evolution-trigger/'+a).then(function(a){c(a)}).catch(function(a){d(a)})})}}),k=Object.freeze({getGeneration:function(a){return new Promise(function(c,d){b('generation/'+a).then(function(a){c(a)}).catch(function(a){d(a)})})},getPokedex:function(a){return new Promise(function(c,d){b('pokedex/'+a).then(function(a){c(a)}).catch(function(a){d(a)})})},getVersion:function(a){return new Promise(function(c,d){b('version/'+a).then(function(a){c(a)}).catch(function(a){d(a)})})},getVersionGroup:function(a){return new Promise(function(c,d){b('version-group/'+a).then(function(a){c(a)}).catch(function(a){d(a)})})}}),l=Object.freeze({getItem:function(a){return new Promise(function(c,d){b('item/'+a).then(function(a){c(a)}).catch(function(a){d(a)})})},getItemAttribute:function(a){return new Promise(function(c,d){b('item-attribute/'+a).then(function(a){c(a)}).catch(function(a){d(a)})})},getItemCategory:function(a){return new Promise(function(c,d){b('item-category/'+a).then(function(a){c(a)}).catch(function(a){d(a)})})},getItemFlingEffect:function(a){return new Promise(function(c,d){b('item-fling-effect/'+a).then(function(a){c(a)}).catch(function(a){d(a)})})},getItemPocket:function(a){return new Promise(function(c,d){b('item-pocket/'+a).then(function(a){c(a)}).catch(function(a){d(a)})})}}),m=Object.freeze({getLanguage:function(a){return new Promise(function(c,d){b('language/'+a).then(function(a){c(a)}).catch(function(a){d(a)})})}}),n=Object.freeze({getLocation:function(a){return new Promise(function(c,d){b('location/'+a).then(function(a){c(a)}).catch(function(a){d(a)})})},getLocationArea:function(a){return new Promise(function(c,d){b('location-area/'+a).then(function(a){c(a)}).catch(function(a){d(a)})})},getPalParkArea:function(a){return new Promise(function(c,d){b('pal-park-area/'+a).then(function(a){c(a)}).catch(function(a){d(a)})})},getRegion:function(a){return new Promise(function(c,d){b('region/'+a).then(function(a){c(a)}).catch(function(a){d(a)})})}}),o=Object.freeze({getMachine:function(a){return new Promise(function(c,d){b('machine/'+a).then(function(a){c(a)}).catch(function(a){d(a)})})}}),p=Object.freeze({getMove:function(a){return new Promise(function(c,d){b('move/'+a).then(function(a){c(a)}).catch(function(a){d(a)})})},getMoveAilment:function(a){return new Promise(function(c,d){b('move-ailment/'+a).then(function(a){c(a)}).catch(function(a){d(a)})})},getMoveBattleStyle:function(a){return new Promise(function(c,d){b('move-battle-style/'+a).then(function(a){c(a)}).catch(function(a){d(a)})})},getMoveCategory:function(a){return new Promise(function(c,d){b('move-category/'+a).then(function(a){c(a)}).catch(function(a){d(a)})})},getMoveDamageClass:function(a){return new Promise(function(c,d){b('move-damage-class/'+a).then(function(a){c(a)}).catch(function(a){d(a)})})},getMoveLearnMethod:function(a){return new Promise(function(c,d){b('move-learn-method/'+a).then(function(a){c(a)}).catch(function(a){d(a)})})},getMoveTarget:function(a){return new Promise(function(c,d){b('move-target/'+a).then(function(a){c(a)}).catch(function(a){d(a)})})}}),q=Object.freeze({getAbility:function(a){return new Promise(function(c,d){b('ability/'+a).then(function(a){c(a)}).catch(function(a){d(a)})})},getCharacteristic:function(a){return new Promise(function(c,d){b('characteristic/'+a).then(function(a){c(a)}).catch(function(a){d(a)})})},getEggGroup:function(a){return new Promise(function(c,d){b('egg-group/'+a).then(function(a){c(a)}).catch(function(a){d(a)})})},getGender:function(a){return new Promise(function(c,d){b('gender/'+a).then(function(a){c(a)}).catch(function(a){d(a)})})},getGrowthRate:function(a){return new Promise(function(c,d){b('growth-rate/'+a).then(function(a){c(a)}).catch(function(a){d(a)})})},getNature:function(a){return new Promise(function(c,d){b('nature/'+a).then(function(a){c(a)}).catch(function(a){d(a)})})},getPokeathlonStat:function(a){return new Promise(function(c,d){b('pokeathlon-stat/'+a).then(function(a){c(a)}).catch(function(a){d(a)})})},getPokemon:function(a){return new Promise(function(c,d){b('pokemon/'+a).then(function(a){c(a)}).catch(function(a){d(a)})})},getPokemonColor:function(a){return new Promise(function(c,d){b('pokemon-color/'+a).then(function(a){c(a)}).catch(function(a){d(a)})})},getPokemonForm:function(a){return new Promise(function(c,d){b('pokemon-form/'+a).then(function(a){c(a)}).catch(function(a){d(a)})})},getPokemonHabitat:function(a){return new Promise(function(c,d){b('pokemon-habitat/'+a).then(function(a){c(a)}).catch(function(a){d(a)})})},getPokemonShape:function(a){return new Promise(function(c,d){b('pokemon-shape/'+a).then(function(a){c(a)}).catch(function(a){d(a)})})},getPokemonSpecies:function(a){return new Promise(function(c,d){b('pokemon-species/'+a).then(function(a){c(a)}).catch(function(a){d(a)})})},getStat:function(a){return new Promise(function(c,d){b('stat/'+a).then(function(a){c(a)}).catch(function(a){d(a)})})},getType:function(a){return new Promise(function(c,d){b('type/'+a).then(function(a){c(a)}).catch(function(a){d(a)})})}}),r=Object.assign||function(a){for(var b,c=1;c<arguments.length;c++)for(var d in b=arguments[c],b)Object.prototype.hasOwnProperty.call(b,d)&&(a[d]=b[d]);return a},s=r({},g,h,i,j,k,l,m,n,o,p,q,f);return s});
//# sourceMappingURL=pokeapi.js.map