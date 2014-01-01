!function(e){"object"==typeof exports?module.exports=e():"function"==typeof define&&define.amd?define(e):"undefined"!=typeof window?window.osmtogeojson=e():"undefined"!=typeof global?global.osmtogeojson=e():"undefined"!=typeof self&&(self.osmtogeojson=e())}(function(){var e;return function n(e,t,r){function u(a,i){if(!t[a]){if(!e[a]){var f="function"==typeof require&&require;if(!i&&f)return f(a,!0);if(o)return o(a,!0);throw new Error("Cannot find module '"+a+"'")}var l=t[a]={exports:{}};e[a][0].call(l.exports,function(n){var t=e[a][1][n];return u(t?t:n)},l,l.exports,n,e,t,r)}return t[a].exports}for(var o="function"==typeof require&&require,a=0;a<r.length;a++)u(r[a]);return u}({1:[function(e,n){_=e("lodash"),rewind=e("geojson-rewind");var t={};t=function(e,n){function t(e){for(var n=new Array,t=new Array,r=new Array,o=0;o<e.elements.length;o++)switch(e.elements[o].type){case"node":var a=e.elements[o];n.push(a);break;case"way":var i=_.clone(e.elements[o]);i.nodes=_.clone(i.nodes),t.push(i);break;case"relation":var f=_.clone(e.elements[o]);f.members=_.clone(f.members),r.push(f)}return u(n,t,r)}function r(e){function n(e,n,t){e.hasAttribute(t)&&(n[t]=e.getAttribute(t))}var t=new Array,r=new Array,o=new Array;return _.each(e.getElementsByTagName("node"),function(e,r){var u={};_.each(e.getElementsByTagName("tag"),function(e){u[e.getAttribute("k")]=e.getAttribute("v")}),t[r]={type:"node"},n(e,t[r],"id"),n(e,t[r],"lat"),n(e,t[r],"lon"),n(e,t[r],"version"),n(e,t[r],"timestamp"),n(e,t[r],"changeset"),n(e,t[r],"uid"),n(e,t[r],"user"),_.isEmpty(u)||(t[r].tags=u)}),_.each(e.getElementsByTagName("way"),function(e,t){var u={},o=[];_.each(e.getElementsByTagName("tag"),function(e){u[e.getAttribute("k")]=e.getAttribute("v")}),_.each(e.getElementsByTagName("nd"),function(e,n){o[n]=e.getAttribute("ref")}),r[t]={type:"way"},n(e,r[t],"id"),n(e,r[t],"version"),n(e,r[t],"timestamp"),n(e,r[t],"changeset"),n(e,r[t],"uid"),n(e,r[t],"user"),o.length>0&&(r[t].nodes=o),_.isEmpty(u)||(r[t].tags=u)}),_.each(e.getElementsByTagName("relation"),function(e,t){var r={},u=[];_.each(e.getElementsByTagName("tag"),function(e){r[e.getAttribute("k")]=e.getAttribute("v")}),_.each(e.getElementsByTagName("member"),function(e,t){u[t]={},n(e,u[t],"ref"),n(e,u[t],"role"),n(e,u[t],"type")}),o[t]={type:"relation"},n(e,o[t],"id"),n(e,o[t],"version"),n(e,o[t],"timestamp"),n(e,o[t],"changeset"),n(e,o[t],"uid"),n(e,o[t],"user"),u.length>0&&(o[t].members=u),_.isEmpty(r)||(o[t].tags=r)}),u(t,r,o)}function u(e,t,r){function u(e,t){if("object"!=typeof t&&(t={}),"function"==typeof n.uninterestingTags)return!n.uninterestingTags(e,t);for(var r in e)if(n.uninterestingTags[r]!==!0&&t[r]!==!0&&t[r]!==e[r])return!0;return!1}function a(e){for(var n,t,r,u,o,a,i=function(e){return e[0]},f=function(e){return e[e.length-1]},l=[];e.length;)for(n=e.pop().nodes.slice(),l.push(n);e.length&&i(n)!==f(n);){for(t=i(n),r=f(n),u=0;u<e.length;u++){if(a=e[u].nodes,r===i(a)){o=n.push,a=a.slice(1);break}if(r===f(a)){o=n.push,a=a.slice(0,-1).reverse();break}if(t==f(a)){o=n.unshift,a=a.slice(0,-1);break}if(t==i(a)){o=n.unshift,a=a.slice(1).reverse();break}a=o=null}if(!a)break;e.splice(u,1),o.apply(n,a)}return l}function i(e){var n,t,r=function(e,n){for(var t=0;t<n.length;t++)if(o(n[t],e))return!0;return!1},u=function(e){return _.map(e,function(e){return[+e.lat,+e.lon]})},o=function(e,n){for(var t=e[0],r=e[1],u=!1,o=0,a=n.length-1;o<n.length;a=o++){var i=n[o][0],f=n[o][1],l=n[a][0],c=n[a][1],s=f>r!=c>r&&(l-i)*(r-f)/(c-f)+i>t;s&&(u=!u)}return u};for(e=u(e),n=0;n<D.length;n++)if(t=u(D[n]),r(t,e))return n}for(var f=new Object,l=0;l<e.length;l++)void 0!==e[l].lat&&(f[e[l].id]=e[l]);for(var c=new Object,l=0;l<e.length;l++)"undefined"!=typeof e[l].tags&&u(e[l].tags)&&(c[e[l].id]=!0);for(var l=0;l<r.length;l++)if(_.isArray(r[l].members))for(var s=0;s<r[l].members.length;s++)"node"==r[l].members[s].type&&(c[r[l].members[s].ref]=!0);for(var p=new Object,g=new Object,l=0;l<t.length;l++)if(_.isArray(t[l].nodes)){p[t[l].id]=t[l];for(var s=0;s<t[l].nodes.length;s++)g[t[l].nodes[s]]=!0,t[l].nodes[s]=f[t[l].nodes[s]]}for(var v=new Array,l=0;l<e.length;l++)(!g[e[l].id]||c[e[l].id])&&v.push(e[l]);for(var d=new Array,l=0;l<r.length;l++)_.isArray(r[l].members)&&(d[r[l].id]=r[l]);for(var y={node:{},way:{},relation:{}},l=0;l<r.length;l++)if(_.isArray(r[l].members))for(var s=0;s<r[l].members.length;s++){var h;switch(r[l].members[s].type){case"node":h=f[r[l].members[s].ref];break;case"way":h=p[r[l].members[s].ref];break;case"relation":h=d[r[l].members[s].ref]}if(h){var m=r[l].members[s].type,b=r[l].members[s].ref;"undefined"==typeof y[m][b]&&(y[m][b]=[]),y[m][b].push({role:r[l].members[s].role,rel:r[l].id,reltags:r[l].tags})}}var w,j={type:"FeatureCollection",features:new Array};for(l=0;l<v.length;l++)"undefined"!=typeof v[l].lon&&"undefined"!=typeof v[l].lat&&j.features.push({type:"Feature",id:"node/"+v[l].id,properties:{type:"node",id:v[l].id,tags:v[l].tags||{},relations:y.node[v[l].id]||[],meta:function(e){var n={};for(I in e)void 0!=e[I]&&(n[I]=e[I]);return n}({timestamp:v[l].timestamp,version:v[l].version,changeset:v[l].changeset,user:v[l].user,uid:v[l].uid})},geometry:{type:"Point",coordinates:[+v[l].lon,+v[l].lat]}});for(var x={type:"FeatureCollection",features:new Array},k={type:"FeatureCollection",features:new Array},l=0;l<r.length;l++)if("undefined"!=typeof r[l].tags&&("multipolygon"==r[l].tags.type||"boundary"==r[l].tags.type)){if(!_.isArray(r[l].members))continue;for(var A=0,s=0;s<r[l].members.length;s++)"outer"==r[l].members[s].role&&A++;if(_.each(r[l].members,function(e){p[e.ref]&&("outer"!==e.role||u(p[e.ref].tags,r[l].tags)||(p[e.ref].is_multipolygon_outline=!0),"inner"!==e.role||u(p[e.ref].tags)||(p[e.ref].is_multipolygon_outline=!0))}),0==A)continue;var C=!1;if(1!=A||u(r[l].tags,{type:!0})||(C=!0),C){r[l].tainted=!1;for(var E=new Array,N=new Array,O=void 0,s=0;s<r[l].members.length;s++)if("way"==r[l].members[s].type&&_.contains(["outer","inner"],r[l].members[s].role)){var T=p[r[l].members[s].ref];if("undefined"==typeof T){r[l].tainted=!0;continue}for(var F=new Array,I=0;I<T.nodes.length;I++)"object"==typeof T.nodes[I]?F.push([+T.nodes[I].lon,+T.nodes[I].lat]):r[l].tainted=!0;"outer"==r[l].members[s].role?(E.push(F),O=T,O.is_multipolygon_outline=!0):"inner"==r[l].members[s].role&&N.push(F)}if("undefined"==typeof O)continue;if(0==E[0].length)continue;q="Polygon";var R={type:"Feature",id:"way/"+O.id,properties:{type:"way",id:O.id,tags:O.tags||{},relations:y.way[O.id]||[],meta:function(e){var n={};for(I in e)void 0!=e[I]&&(n[I]=e[I]);return n}({timestamp:O.timestamp,version:O.version,changeset:O.changeset,user:O.user,uid:O.uid})},geometry:{type:q,coordinates:[].concat(E,N)}};r[l].tainted&&(R.properties.tainted=!0),k.features.push(R)}else{var S,B=!1;S=_.filter(r[l].members,function(e){return"way"===e.type}),S=_.map(S,function(e){var n=p[e.ref];return void 0===n?(B=!0,void 0):{id:e.ref,role:e.role||"outer",way:n,nodes:_.filter(n.nodes,function(e){return void 0!==e?!0:(B=!0,!1)})}}),S=_.compact(S);var D,P;D=a(_.filter(S,function(e){return"outer"===e.role})),P=a(_.filter(S,function(e){return"inner"===e.role}));var M;M=_.map(D,function(e){return[e]});for(var s=0;s<P.length;s++){var L=i(P[s]);void 0!==L&&M[L].push(P[s])}var $=[];if($=_.compact(_.map(M,function(e){var n=_.compact(_.map(e,function(e){return e.length<4?void 0:_.compact(_.map(e,function(e){return[+e.lon,+e.lat]}))}));if(0!=n.length)return n})),0==$.length)continue;var R={type:"Feature",id:"relation/"+r[l].id,properties:{type:"relation",id:r[l].id,tags:r[l].tags||{},relations:y.relation[r[l].id]||[],meta:function(e){var n={};for(I in e)void 0!=e[I]&&(n[I]=e[I]);return n}({timestamp:r[l].timestamp,version:r[l].version,changeset:r[l].changeset,user:r[l].user,uid:r[l].uid})},geometry:{type:"MultiPolygon",coordinates:$}};B&&(R.properties.tainted=!0),k.features.push(R)}}for(var l=0;l<t.length;l++)if(_.isArray(t[l].nodes)&&!t[l].is_multipolygon_outline){for(t[l].tainted=!1,t[l].hidden=!1,F=new Array,s=0;s<t[l].nodes.length;s++)"object"==typeof t[l].nodes[s]?F.push([+t[l].nodes[s].lon,+t[l].nodes[s].lat]):t[l].tainted=!0;if(!(F.length<=1)){var q="LineString";"undefined"!=typeof t[l].nodes[0]&&t[l].nodes[0]===t[l].nodes[t[l].nodes.length-1]&&"undefined"!=typeof t[l].tags&&o(t[l].tags)&&(q="Polygon",F=[F]);var R={type:"Feature",id:"way/"+t[l].id,properties:{type:"way",id:t[l].id,tags:t[l].tags||{},relations:y.way[t[l].id]||[],meta:function(e){var n={};for(I in e)void 0!=e[I]&&(n[I]=e[I]);return n}({timestamp:t[l].timestamp,version:t[l].version,changeset:t[l].changeset,user:t[l].user,uid:t[l].uid})},geometry:{type:q,coordinates:F}};t[l].tainted&&(R.properties.tainted=!0),"LineString"==q?x.features.push(R):k.features.push(R)}}return w={type:"FeatureCollection",features:[]},w.features=w.features.concat(k.features),w.features=w.features.concat(x.features),w.features=w.features.concat(j.features),n.flatProperties&&_.each(w.features,function(e){e.properties=_.merge(e.properties.meta,e.properties.tags,{id:e.properties.type+"/"+e.properties.id})}),w=rewind(w,!0)}function o(e){var t=n.polygonFeatures;if("function"==typeof t)return t(e);if("no"===e.area)return!1;for(var r in e){var u=e[r],o=t[r];if("undefined"!=typeof o&&"no"!==u){if(o===!0)return!0;if(o.included_values&&o.included_values[u]===!0)return!0;if(o.excluded_values&&o.excluded_values[u]!==!0)return!0}}return!1}n=_.merge({flatProperties:!1,uninterestingTags:{source:!0,source_ref:!0,"source:ref":!0,history:!0,attribution:!0,created_by:!0,"tiger:county":!0,"tiger:tlid":!0,"tiger:upload_uuid":!0},polygonFeatures:{building:!0,highway:{included_values:{services:!0,rest_area:!0,escape:!0}},natural:{excluded_values:{coastline:!0,ridge:!0,arete:!0,tree_row:!0}},landuse:!0,waterway:{included_values:{riverbank:!0,dock:!0,boatyard:!0,dam:!0}},amenity:!0,leisure:!0,barrier:{included_values:{city_wall:!0,ditch:!0,hedge:!0,retaining_wall:!0,wall:!0,spikes:!0}},railway:{included_values:{station:!0,turntable:!0,roundhouse:!0,platform:!0}},area:!0,boundary:!0,man_made:{excluded_values:{cutline:!0,embankment:!0,pipeline:!0}},power:{included_values:{generator:!0,station:!0,sub_station:!0,transformer:!0}},place:!0,shop:!0,aeroway:{excluded_values:{taxiway:!0}},tourism:!0,historic:!0,public_transport:!0,office:!0,"building:part":!0,military:!0,ruins:!0,"area:highway":!0,craft:!0}},n);var a;return a="undefined"!=typeof XMLDocument&&e instanceof XMLDocument||"undefined"==typeof XMLDocument&&e.childNodes?r(e):t(e)},t.toGeojson=t,n.exports=t},{"geojson-rewind":2,lodash:5}],2:[function(e,n){function t(e,n){switch(e&&e.type||null){case"FeatureCollection":return e.features=e.features.map(r(t,n)),e;case"Feature":return e.geometry=t(e.geometry,n),e;case"Polygon":case"MultiPolygon":return u(e,n);default:return e}}function r(e,n){return function(t){return e(t,n)}}function u(e,n){return"Polygon"===e.type?e.coordinates=o(e.coordinates,n):"MultiPolygon"===e.type&&(e.coordinates=e.coordinates.map(r(o,n))),e}function o(e,n){n=!!n,e[0]=a(e[0],!n);for(var t=1;t<e.length;t++)e[t]=a(e[t],n);return e}function a(e,n){return i(e)===n?e:e.reverse()}function i(e){return f.ring(e)>=0}var f=e("geojson-area");n.exports=t},{"geojson-area":3}],3:[function(e,n){function t(e){if("Polygon"===e.type)return r(e.coordinates);if("MultiPolygon"===e.type){for(var n=0,t=0;t<e.coordinates.length;t++)n+=r(e.coordinates[t]);return n}return null}function r(e){var n=0;if(e&&e.length>0){n+=Math.abs(u(e[0]));for(var t=1;t<e.length;t++)n-=Math.abs(u(e[t]))}return n}function u(e){var n=0;if(e.length>2){for(var t,r,u=0;u<e.length-1;u++)t=e[u],r=e[u+1],n+=o(r[0]-t[0])*(2+Math.sin(o(t[1]))+Math.sin(o(r[1])));n=n*a.RADIUS*a.RADIUS/2}return n}function o(e){return e*Math.PI/180}var a=e("wgs84");n.exports.geometry=t,n.exports.ring=u},{wgs84:4}],4:[function(e,n){n.exports.RADIUS=6378137,n.exports.FLATTENING=1/298.257223563,n.exports.POLAR_RADIUS=6356752.3142},{}],5:[function(n,t,r){var u="undefined"!=typeof self?self:"undefined"!=typeof window?window:{};(function(){function n(e,n,t){for(var r=(t||0)-1,u=e?e.length:0;++r<u;)if(e[r]===n)return r;return-1}function o(e,t){var r=typeof t;if(e=e.cache,"boolean"==r||null==t)return e[t]?0:-1;"number"!=r&&"string"!=r&&(r="object");var u="number"==r?t:j+t;return e=(e=e[r])&&e[u],"object"==r?e&&n(e,t)>-1?0:-1:e?0:-1}function a(e){var n=this.cache,t=typeof e;if("boolean"==t||null==e)n[e]=!0;else{"number"!=t&&"string"!=t&&(t="object");var r="number"==t?e:j+e,u=n[t]||(n[t]={});"object"==t?(u[r]||(u[r]=[])).push(e):u[r]=!0}}function i(e){return e.charCodeAt(0)}function f(e,n){var t=e.criteria,r=n.criteria;if(t!==r){if(t>r||"undefined"==typeof t)return 1;if(r>t||"undefined"==typeof r)return-1}return e.index-n.index}function l(e){var n=-1,t=e.length,r=e[0],u=e[0|t/2],o=e[t-1];if(r&&"object"==typeof r&&u&&"object"==typeof u&&o&&"object"==typeof o)return!1;var i=p();i["false"]=i["null"]=i["true"]=i.undefined=!1;var f=p();for(f.array=e,f.cache=i,f.push=a;++n<t;)f.push(e[n]);return f}function c(e){return"\\"+Y[e]}function s(){return _.pop()||[]}function p(){return b.pop()||{array:null,cache:null,criteria:null,"false":!1,index:0,"null":!1,number:null,object:null,push:null,string:null,"true":!1,undefined:!1,value:null}}function g(){}function v(e){e.length=0,_.length<k&&_.push(e)}function d(e){var n=e.cache;n&&d(n),e.array=e.cache=e.criteria=e.object=e.number=e.string=e.value=null,b.length<k&&b.push(e)}function y(e,n,t){n||(n=0),"undefined"==typeof t&&(t=e?e.length:0);for(var r=-1,u=t-n||0,o=Array(0>u?0:u);++r<u;)o[r]=e[n+r];return o}function h(e){function t(e){return e&&"object"==typeof e&&!Jr(e)&&Ar.call(e,"__wrapped__")?e:new r(e)}function r(e,n){this.__chain__=!!n,this.__wrapped__=e}function u(e,n,t,r,o){if(t){var a=t(e);if("undefined"!=typeof a)return a}var i=En(e);if(!i)return e;var f=Fr.call(e);if(!V[f])return e;var l=Gr[f];switch(f){case q:case U:return new l(+e);case z:case G:return new l(e);case X:return a=l(e.source,T.exec(e)),a.lastIndex=e.lastIndex,a}var c=Jr(e);if(n){var p=!r;r||(r=s()),o||(o=s());for(var g=r.length;g--;)if(r[g]==e)return o[g];a=c?l(e.length):{}}else a=c?y(e):ru({},e);return c&&(Ar.call(e,"index")&&(a.index=e.index),Ar.call(e,"input")&&(a.input=e.input)),n?(r.push(e),o.push(a),(c?Xn:au)(e,function(e,i){a[i]=u(e,n,t,r,o)}),p&&(v(r),v(o)),a):a}function a(e,n,t){if("function"!=typeof e)return Xt;if("undefined"==typeof n)return e;var r=e.__bindData__||Vr.funcNames&&!e.name;if("undefined"==typeof r){var u=B&&xr.call(e);Vr.funcNames||!u||F.test(u)||(r=!0),(Vr.funcNames||!r)&&(r=!Vr.funcDecomp||B.test(u),Hr(e,r))}if(r!==!0&&r&&1&r[1])return e;switch(t){case 1:return function(t){return e.call(n,t)};case 2:return function(t,r){return e.call(n,t,r)};case 3:return function(t,r,u){return e.call(n,t,r,u)};case 4:return function(t,r,u,o){return e.call(n,t,r,u,o)}}return Tt(e,n)}function _(e,n,t,r){for(var u=(r||0)-1,o=e?e.length:0,a=[];++u<o;){var i=e[u];if(i&&"object"==typeof i&&"number"==typeof i.length&&(Jr(i)||cn(i))){n||(i=_(i,n,t));var f=-1,l=i.length,c=a.length;for(a.length+=l;++f<l;)a[c++]=i[f]}else t||a.push(i)}return a}function b(e,n,t,r,u,o){if(t){var a=t(e,n);if("undefined"!=typeof a)return!!a}if(e===n)return 0!==e||1/e==1/n;var i=typeof e,f=typeof n;if(!(e!==e||e&&Q[i]||n&&Q[f]))return!1;if(null==e||null==n)return e===n;var l=Fr.call(e),c=Fr.call(n);if(l==L&&(l=K),c==L&&(c=K),l!=c)return!1;switch(l){case q:case U:return+e==+n;case z:return e!=+e?n!=+n:0==e?1/e==1/n:e==+n;case X:case G:return e==vr(n)}var p=l==$;if(!p){if(Ar.call(e,"__wrapped__ ")||Ar.call(n,"__wrapped__"))return b(e.__wrapped__||e,n.__wrapped__||n,t,r,u,o);if(l!=K)return!1;var g=e.constructor,d=n.constructor;if(g!=d&&!(Cn(g)&&g instanceof g&&Cn(d)&&d instanceof d))return!1}var y=!u;u||(u=s()),o||(o=s());for(var h=u.length;h--;)if(u[h]==e)return o[h]==n;var m=0;if(a=!0,u.push(e),o.push(n),p){if(h=e.length,m=n.length,a=m==e.length,!a&&!r)return a;for(;m--;){var _=h,w=n[m];if(r)for(;_--&&!(a=b(e[_],w,t,r,u,o)););else if(!(a=b(e[m],w,t,r,u,o)))break}return a}return ou(n,function(n,i,f){return Ar.call(f,i)?(m++,a=Ar.call(e,i)&&b(e[i],n,t,r,u,o)):void 0}),a&&!r&&ou(e,function(e,n,t){return Ar.call(t,n)?a=--m>-1:void 0}),y&&(v(u),v(o)),a}function k(e,n,t,r,u){(Jr(n)?Xn:au)(n,function(n,o){var a,i,f=n,l=e[o];if(n&&((i=Jr(n))||iu(n))){for(var c=r.length;c--;)if(a=r[c]==n){l=u[c];break}if(!a){var s;t&&(f=t(l,n),(s="undefined"!=typeof f)&&(l=f)),s||(l=i?Jr(l)?l:[]:iu(l)?l:{}),r.push(n),u.push(l),s||k(l,n,t,r,u)}}else t&&(f=t(l,n),"undefined"==typeof f&&(f=n)),"undefined"!=typeof f&&(l=f);e[o]=l})}function Y(e,t,r){var u=-1,a=an(),i=e?e.length:0,f=[],c=!t&&i>=x&&a===n,p=r||c?s():f;if(c){var g=l(p);g?(a=o,p=g):(c=!1,p=r?p:(v(p),f))}for(;++u<i;){var y=e[u],h=r?r(y,u,e):y;(t?!u||p[p.length-1]!==h:a(p,h)<0)&&((r||c)&&p.push(h),f.push(y))}return c?(v(p.array),d(p)):r&&v(p),f}function en(e){return function(n,r,u){var o={};r=t.createCallback(r,u,3);var a=-1,i=n?n.length:0;if("number"==typeof i)for(;++a<i;){var f=n[a];e(o,f,r(f,a,n),n)}else au(n,function(n,t,u){e(o,n,r(n,t,u),u)});return o}}function nn(e,n,t,r,u,o){var a=1&n,i=2&n,f=4&n,l=8&n,c=16&n,s=32&n,p=e;if(!i&&!Cn(e))throw new dr;c&&!t.length&&(n&=-17,c=t=!1),s&&!r.length&&(n&=-33,s=r=!1);var g=e&&e.__bindData__;if(g)return!a||1&g[1]||(g[4]=u),!a&&1&g[1]&&(n|=8),!f||4&g[1]||(g[5]=o),c&&Er.apply(g[2]||(g[2]=[]),t),s&&Er.apply(g[3]||(g[3]=[]),r),g[1]|=n,nn.apply(null,g);if(!a||i||f||s||!(Vr.fastBind||Sr&&c))d=function(){var g=arguments,v=a?u:this;if((f||c||s)&&(g=zr.call(g),c&&Ir.apply(g,t),s&&Er.apply(g,r),f&&g.length<o))return n|=16,nn(e,l?n:-4&n,g,null,u,o);if(i&&(e=v[p]),this instanceof d){v=rn(e.prototype);var y=e.apply(v,g);return En(y)?y:v}return e.apply(v,g)};else{if(c){var v=[u];Er.apply(v,t)}var d=c?Sr.apply(e,v):Sr.call(e,u)}return Hr(d,zr.call(arguments)),d}function rn(e){return En(e)?Br(e):{}}function on(e){return Zr[e]}function an(){var e=(e=t.indexOf)===vt?n:e;return e}function fn(e){var n,t;return e&&Fr.call(e)==K&&(n=e.constructor,!Cn(n)||n instanceof n)?(ou(e,function(e,n){t=n}),"undefined"==typeof t||Ar.call(e,t)):!1}function ln(e){return eu[e]}function cn(e){return e&&"object"==typeof e&&"number"==typeof e.length&&Fr.call(e)==L||!1}function sn(e,n,t,r){return"boolean"!=typeof n&&null!=n&&(r=t,t=n,n=!1),u(e,n,"function"==typeof t&&a(t,r,1))}function pn(e,n,t){return u(e,!0,"function"==typeof n&&a(n,t,1))}function gn(e,n,r){var u;return n=t.createCallback(n,r,3),au(e,function(e,t,r){return n(e,t,r)?(u=t,!1):void 0}),u}function vn(e,n,r){var u;return n=t.createCallback(n,r,3),yn(e,function(e,t,r){return n(e,t,r)?(u=t,!1):void 0}),u}function dn(e,n,t){var r=[];ou(e,function(e,n){r.push(n,e)});var u=r.length;for(n=a(n,t,3);u--&&n(r[u--],r[u],e)!==!1;);return e}function yn(e,n,t){var r=Yr(e),u=r.length;for(n=a(n,t,3);u--;){var o=r[u];if(n(e[o],o,e)===!1)break}return e}function hn(e){var n=[];return ou(e,function(e,t){Cn(e)&&n.push(t)}),n.sort()}function mn(e,n){return e?Ar.call(e,n):!1}function _n(e){for(var n=-1,t=Yr(e),r=t.length,u={};++n<r;){var o=t[n];u[e[o]]=o}return u}function bn(e){return e===!0||e===!1||Fr.call(e)==q}function wn(e){return e?"object"==typeof e&&Fr.call(e)==U:!1}function jn(e){return e?1===e.nodeType:!1}function xn(e){var n=!0;if(!e)return n;var t=Fr.call(e),r=e.length;return t==$||t==G||t==L||t==K&&"number"==typeof r&&Cn(e.splice)?!r:(au(e,function(){return n=!1}),n)}function kn(e,n,t,r){return b(e,n,"function"==typeof t&&a(t,r,2))}function An(e){return Pr(e)&&!Mr(parseFloat(e))}function Cn(e){return"function"==typeof e}function En(e){return!(!e||!Q[typeof e])}function Nn(e){return Tn(e)&&e!=+e}function On(e){return null===e}function Tn(e){return"number"==typeof e||Fr.call(e)==z}function Fn(e){return e?"object"==typeof e&&Fr.call(e)==X:!1}function In(e){return"string"==typeof e||Fr.call(e)==G}function Rn(e){return"undefined"==typeof e}function Sn(e){var n=arguments,t=2;if(!En(e))return e;if("number"!=typeof n[2]&&(t=n.length),t>3&&"function"==typeof n[t-2])var r=a(n[--t-1],n[t--],2);else t>2&&"function"==typeof n[t-1]&&(r=n[--t]);for(var u=zr.call(arguments,1,t),o=-1,i=s(),f=s();++o<t;)k(e,u[o],r,i,f);return v(i),v(f),e}function Bn(e,n,r){var u=an(),o="function"==typeof n,a={};if(o)n=t.createCallback(n,r,3);else var i=_(arguments,!0,!1,1);return ou(e,function(e,t,r){(o?!n(e,t,r):u(i,t)<0)&&(a[t]=e)}),a}function Dn(e){for(var n=-1,t=Yr(e),r=t.length,u=ar(r);++n<r;){var o=t[n];u[n]=[o,e[o]]}return u}function Pn(e,n,r){var u={};if("function"!=typeof n)for(var o=-1,a=_(arguments,!0,!1,1),i=En(e)?a.length:0;++o<i;){var f=a[o];f in e&&(u[f]=e[f])}else n=t.createCallback(n,r,3),ou(e,function(e,t,r){n(e,t,r)&&(u[t]=e)});return u}function Mn(e,n,t,r){var u=Jr(e);if(n=a(n,r,4),null==t)if(u)t=[];else{var o=e&&e.constructor,i=o&&o.prototype;t=rn(i)}return(u?Xn:au)(e,function(e,r,u){return n(t,e,r,u)}),t}function Ln(e){for(var n=-1,t=Yr(e),r=t.length,u=ar(r);++n<r;)u[n]=e[t[n]];return u}function $n(e){for(var n=arguments,t=-1,r=_(n,!0,!1,1),u=n[2]&&n[2][n[1]]===e?1:r.length,o=ar(u);++t<u;)o[t]=e[r[t]];return o}function qn(e,n,t){var r=-1,u=an(),o=e?e.length:0,a=!1;return t=(0>t?$r(0,o+t):t)||0,Jr(e)?a=u(e,n,t)>-1:"number"==typeof o?a=(In(e)?e.indexOf(n,t):u(e,n,t))>-1:au(e,function(e){return++r>=t?!(a=e===n):void 0}),a}function Un(e,n,r){var u=!0;n=t.createCallback(n,r,3);var o=-1,a=e?e.length:0;if("number"==typeof a)for(;++o<a&&(u=!!n(e[o],o,e)););else au(e,function(e,t,r){return u=!!n(e,t,r)});return u}function Wn(e,n,r){var u=[];n=t.createCallback(n,r,3);var o=-1,a=e?e.length:0;if("number"==typeof a)for(;++o<a;){var i=e[o];n(i,o,e)&&u.push(i)}else au(e,function(e,t,r){n(e,t,r)&&u.push(e)});return u}function zn(e,n,r){n=t.createCallback(n,r,3);var u=-1,o=e?e.length:0;if("number"!=typeof o){var a;return au(e,function(e,t,r){return n(e,t,r)?(a=e,!1):void 0}),a}for(;++u<o;){var i=e[u];if(n(i,u,e))return i}}function Kn(e,n,r){var u;return n=t.createCallback(n,r,3),Gn(e,function(e,t,r){return n(e,t,r)?(u=e,!1):void 0}),u}function Xn(e,n,t){var r=-1,u=e?e.length:0;if(n=n&&"undefined"==typeof t?n:a(n,t,3),"number"==typeof u)for(;++r<u&&n(e[r],r,e)!==!1;);else au(e,n);return e}function Gn(e,n,t){var r=e?e.length:0;if(n=n&&"undefined"==typeof t?n:a(n,t,3),"number"==typeof r)for(;r--&&n(e[r],r,e)!==!1;);else{var u=Yr(e);r=u.length,au(e,function(e,t,o){return t=u?u[--r]:--r,n(o[t],t,o)})}return e}function Vn(e,n){var t=zr.call(arguments,2),r=-1,u="function"==typeof n,o=e?e.length:0,a=ar("number"==typeof o?o:0);return Xn(e,function(e){a[++r]=(u?n:e[n]).apply(e,t)}),a}function Hn(e,n,r){var u=-1,o=e?e.length:0;if(n=t.createCallback(n,r,3),"number"==typeof o)for(var a=ar(o);++u<o;)a[u]=n(e[u],u,e);else a=[],au(e,function(e,t,r){a[++u]=n(e,t,r)});return a}function Jn(e,n,r){var u=-1/0,o=u;if(!n&&Jr(e))for(var a=-1,f=e.length;++a<f;){var l=e[a];l>o&&(o=l)}else n=!n&&In(e)?i:t.createCallback(n,r,3),Xn(e,function(e,t,r){var a=n(e,t,r);a>u&&(u=a,o=e)});return o}function Qn(e,n,r){var u=1/0,o=u;if(!n&&Jr(e))for(var a=-1,f=e.length;++a<f;){var l=e[a];o>l&&(o=l)}else n=!n&&In(e)?i:t.createCallback(n,r,3),Xn(e,function(e,t,r){var a=n(e,t,r);u>a&&(u=a,o=e)});return o}function Yn(e,n){var t=-1,r=e?e.length:0;if("number"==typeof r)for(var u=ar(r);++t<r;)u[t]=e[t][n];return u||Hn(e,n)}function Zn(e,n,t,r){if(!e)return t;var u=arguments.length<3;n=a(n,r,4);var o=-1,i=e.length;if("number"==typeof i)for(u&&(t=e[++o]);++o<i;)t=n(t,e[o],o,e);else au(e,function(e,r,o){t=u?(u=!1,e):n(t,e,r,o)});return t}function et(e,n,t,r){var u=arguments.length<3;return n=a(n,r,4),Gn(e,function(e,r,o){t=u?(u=!1,e):n(t,e,r,o)}),t}function nt(e,n,r){return n=t.createCallback(n,r,3),Wn(e,function(e,t,r){return!n(e,t,r)})}function tt(e,n,t){var r=e?e.length:0;if("number"!=typeof r&&(e=Ln(e)),null==n||t)return e?e[Ht(r-1)]:m;var u=rt(e);return u.length=qr($r(0,n),u.length),u}function rt(e){var n=-1,t=e?e.length:0,r=ar("number"==typeof t?t:0);return Xn(e,function(e){var t=Ht(++n);r[n]=r[t],r[t]=e}),r}function ut(e){var n=e?e.length:0;return"number"==typeof n?n:Yr(e).length}function ot(e,n,r){var u;n=t.createCallback(n,r,3);var o=-1,a=e?e.length:0;if("number"==typeof a)for(;++o<a&&!(u=n(e[o],o,e)););else au(e,function(e,t,r){return!(u=n(e,t,r))});return!!u}function at(e,n,r){var u=-1,o=e?e.length:0,a=ar("number"==typeof o?o:0);for(n=t.createCallback(n,r,3),Xn(e,function(e,t,r){var o=a[++u]=p();o.criteria=n(e,t,r),o.index=u,o.value=e}),o=a.length,a.sort(f);o--;){var i=a[o];a[o]=i.value,d(i)}return a}function it(e){return e&&"number"==typeof e.length?y(e):Ln(e)}function ft(e){for(var n=-1,t=e?e.length:0,r=[];++n<t;){var u=e[n];u&&r.push(u)}return r}function lt(e){var t=-1,r=an(),u=e?e.length:0,a=_(arguments,!0,!0,1),i=[],f=u>=x&&r===n;if(f){var c=l(a);c?(r=o,a=c):f=!1}for(;++t<u;){var s=e[t];r(a,s)<0&&i.push(s)}return f&&d(a),i}function ct(e,n,r){var u=-1,o=e?e.length:0;for(n=t.createCallback(n,r,3);++u<o;)if(n(e[u],u,e))return u;return-1}function st(e,n,r){var u=e?e.length:0;for(n=t.createCallback(n,r,3);u--;)if(n(e[u],u,e))return u;return-1}function pt(e,n,r){var u=0,o=e?e.length:0;if("number"!=typeof n&&null!=n){var a=-1;for(n=t.createCallback(n,r,3);++a<o&&n(e[a],a,e);)u++}else if(u=n,null==u||r)return e?e[0]:m;return y(e,0,qr($r(0,u),o))}function gt(e,n,t,r){return"boolean"!=typeof n&&null!=n&&(r=t,t=r&&r[n]===e?null:n,n=!1),null!=t&&(e=Hn(e,t,r)),_(e,n)}function vt(e,t,r){if("number"==typeof r){var u=e?e.length:0;r=0>r?$r(0,u+r):r||0}else if(r){var o=xt(e,t);return e[o]===t?o:-1}return n(e,t,r)}function dt(e,n,r){var u=0,o=e?e.length:0;if("number"!=typeof n&&null!=n){var a=o;for(n=t.createCallback(n,r,3);a--&&n(e[a],a,e);)u++}else u=null==n||r?1:n||u;return y(e,0,qr($r(0,o-u),o))}function yt(e){for(var t=arguments,r=t.length,u=-1,a=s(),i=-1,f=an(),c=e?e.length:0,p=[],g=s();++u<r;){var y=t[u];a[u]=f===n&&(y?y.length:0)>=x&&l(u?t[u]:g)}e:for(;++i<c;){var h=a[0];if(y=e[i],(h?o(h,y):f(g,y))<0){for(u=r,(h||g).push(y);--u;)if(h=a[u],(h?o(h,y):f(t[u],y))<0)continue e;p.push(y)}}for(;r--;)h=a[r],h&&d(h);return v(a),v(g),p}function ht(e,n,r){var u=0,o=e?e.length:0;if("number"!=typeof n&&null!=n){var a=o;for(n=t.createCallback(n,r,3);a--&&n(e[a],a,e);)u++}else if(u=n,null==u||r)return e?e[o-1]:m;return y(e,$r(0,o-u))}function mt(e,n,t){var r=e?e.length:0;for("number"==typeof t&&(r=(0>t?$r(0,r+t):qr(t,r-1))+1);r--;)if(e[r]===n)return r;return-1}function _t(e){for(var n=arguments,t=0,r=n.length,u=e?e.length:0;++t<r;)for(var o=-1,a=n[t];++o<u;)e[o]===a&&(Tr.call(e,o--,1),u--);return e}function bt(e,n,t){e=+e||0,t="number"==typeof t?t:+t||1,null==n&&(n=e,e=0);for(var r=-1,u=$r(0,br((n-e)/(t||1))),o=ar(u);++r<u;)o[r]=e,e+=t;return o}function wt(e,n,r){var u=-1,o=e?e.length:0,a=[];for(n=t.createCallback(n,r,3);++u<o;){var i=e[u];n(i,u,e)&&(a.push(i),Tr.call(e,u--,1),o--)}return a}function jt(e,n,r){if("number"!=typeof n&&null!=n){var u=0,o=-1,a=e?e.length:0;for(n=t.createCallback(n,r,3);++o<a&&n(e[o],o,e);)u++}else u=null==n||r?1:$r(0,n);return y(e,u)}function xt(e,n,r,u){var o=0,a=e?e.length:o;for(r=r?t.createCallback(r,u,1):Xt,n=r(n);a>o;){var i=o+a>>>1;r(e[i])<n?o=i+1:a=i}return o}function kt(){return Y(_(arguments,!0,!0))}function At(e,n,r,u){return"boolean"!=typeof n&&null!=n&&(u=r,r=u&&u[n]===e?null:n,n=!1),null!=r&&(r=t.createCallback(r,u,3)),Y(e,n,r)}function Ct(e){return lt(e,zr.call(arguments,1))}function Et(){for(var e=arguments.length>1?arguments:arguments[0],n=-1,t=e?Jn(Yn(e,"length")):0,r=ar(0>t?0:t);++n<t;)r[n]=Yn(e,n);return r}function Nt(e,n){for(var t=-1,r=e?e.length:0,u={};++t<r;){var o=e[t];n?u[o]=n[t]:o&&(u[o[0]]=o[1])}return u}function Ot(e,n){if(!Cn(n))throw new dr;return function(){return--e<1?n.apply(this,arguments):void 0}}function Tt(e,n){return arguments.length>2?nn(e,17,zr.call(arguments,2),null,n):nn(e,1,null,null,n)}function Ft(e){for(var n=arguments.length>1?_(arguments,!0,!1,1):hn(e),t=-1,r=n.length;++t<r;){var u=n[t];e[u]=nn(e[u],1,null,null,e)}return e}function It(e,n){return arguments.length>2?nn(n,19,zr.call(arguments,2),null,e):nn(n,3,null,null,e)}function Rt(){for(var e=arguments,n=e.length;n--;)if(!Cn(e[n]))throw new dr;return function(){for(var n=arguments,t=e.length;t--;)n=[e[t].apply(this,n)];return n[0]}}function St(e,n,t){var r=typeof e;if(null==e||"function"==r)return a(e,n,t);if("object"!=r)return function(n){return n[e]};var u=Yr(e),o=u[0],i=e[o];return 1!=u.length||i!==i||En(i)?function(n){for(var t=u.length,r=!1;t--&&(r=b(n[u[t]],e[u[t]],null,!0)););return r}:function(e){var n=e[o];return i===n&&(0!==i||1/i==1/n)}}function Bt(e,n){return n="number"==typeof n?n:+n||e.length,nn(e,4,null,null,null,n)}function Dt(e,n,t){var r,u,o,a,i,f,l,c=0,s=!1,p=!0;if(!Cn(e))throw new dr;if(n=$r(0,n)||0,t===!0){var g=!0;p=!1}else En(t)&&(g=t.leading,s="maxWait"in t&&($r(n,t.maxWait)||0),p="trailing"in t?t.trailing:p);var v=function(){var t=n-(Cr()-a);if(0>=t){u&&wr(u);var s=l;u=f=l=m,s&&(c=Cr(),o=e.apply(i,r))}else f=Or(v,t)},d=function(){f&&wr(f),u=f=l=m,(p||s!==n)&&(c=Cr(),o=e.apply(i,r))};return function(){if(r=arguments,a=Cr(),i=this,l=p&&(f||!g),s===!1)var t=g&&!f;else{u||g||(c=a);var y=s-(a-c);0>=y?(u&&(u=wr(u)),c=a,o=e.apply(i,r)):u||(u=Or(d,y))}return f||n===s||(f=Or(v,n)),t&&(o=e.apply(i,r)),o}}function Pt(e){if(!Cn(e))throw new dr;var n=zr.call(arguments,1);return Or(function(){e.apply(m,n)},1)}function Mt(e,n){if(!Cn(e))throw new dr;var t=zr.call(arguments,2);return Or(function(){e.apply(m,t)},n)}function Lt(e,n){if(!Cn(e))throw new dr;var t=function(){var r=t.cache,u=n?n.apply(this,arguments):j+arguments[0];return Ar.call(r,u)?r[u]:r[u]=e.apply(this,arguments)};return t.cache={},t}function $t(e){var n,t;if(!Cn(e))throw new dr;return function(){return n?t:(n=!0,t=e.apply(this,arguments),e=null,t)}}function qt(e){return nn(e,16,zr.call(arguments,1))}function Ut(e){return nn(e,32,null,zr.call(arguments,1))}function Wt(e,n,t){var r=!0,u=!0;if(!Cn(e))throw new dr;t===!1?r=!1:En(t)&&(r="leading"in t?t.leading:r,u="trailing"in t?t.trailing:u),H.leading=r,H.maxWait=n,H.trailing=u;var o=Dt(e,n,H);return o}function zt(e,n){if(!Cn(n))throw new dr;return function(){var t=[e];return Er.apply(t,arguments),n.apply(this,t)}}function Kt(e){return null==e?"":vr(e).replace(tu,on)}function Xt(e){return e}function Gt(e,n){var u=e,o=!n||Cn(u);n||(u=r,n=e,e=t),Xn(hn(n),function(t){var r=e[t]=n[t];o&&(u.prototype[t]=function(){var n=this.__wrapped__,t=[n];Er.apply(t,arguments);var o=r.apply(e,t);return n&&"object"==typeof n&&n===o?this:(o=new u(o),o.__chain__=this.__chain__,o)})})}function Vt(){return e._=mr,this}function Ht(e,n,t){var r=null==e,u=null==n;null==t&&("boolean"==typeof e&&u?(t=e,e=1):u||"boolean"!=typeof n||(t=n,u=!0)),r&&u&&(n=1),e=+e||0,u?(n=e,e=0):n=+n||0;var o=Wr();return t||e%1||n%1?qr(e+o*(n-e+parseFloat("1e-"+((o+"").length-1))),n):e+jr(o*(n-e+1))}function Jt(e,n){if(e){var t=e[n];return Cn(t)?e[n]():t}}function Qt(e,n,r){var u=t.templateSettings;e||(e=""),r=uu({},r,u);var o,a=uu({},r.imports,u.imports),i=Yr(a),f=Ln(a),l=0,s=r.interpolate||S,p="__p += '",g=gr((r.escape||S).source+"|"+s.source+"|"+(s===I?O:S).source+"|"+(r.evaluate||S).source+"|$","g");e.replace(g,function(n,t,r,u,a,i){return r||(r=u),p+=e.slice(l,i).replace(D,c),t&&(p+="' +\n__e("+t+") +\n'"),a&&(o=!0,p+="';\n"+a+";\n__p += '"),r&&(p+="' +\n((__t = ("+r+")) == null ? '' : __t) +\n'"),l=i+n.length,n}),p+="';\n";var v=r.variable,d=v;d||(v="obj",p="with ("+v+") {\n"+p+"\n}\n"),p=(o?p.replace(C,""):p).replace(E,"$1").replace(N,"$1;"),p="function("+v+") {\n"+(d?"":v+" || ("+v+" = {});\n")+"var __t, __p = '', __e = _.escape"+(o?", __j = Array.prototype.join;\nfunction print() { __p += __j.call(arguments, '') }\n":";\n")+p+"return __p\n}";var y="\n/*\n//# sourceURL="+(r.sourceURL||"/lodash/template/source["+M++ +"]")+"\n*/";try{var h=lr(i,"return "+p+y).apply(m,f)}catch(_){throw _.source=p,_}return n?h(n):(h.source=p,h)}function Yt(e,n,t){e=(e=+e)>-1?e:0;var r=-1,u=ar(e);for(n=a(n,t,1);++r<e;)u[r]=n(r);return u}function Zt(e){return null==e?"":vr(e).replace(nu,ln)}function er(e){var n=++w;return vr(null==e?"":e)+n}function nr(e){return e=new r(e),e.__chain__=!0,e
}function tr(e,n){return n(e),e}function rr(){return this.__chain__=!0,this}function ur(){return vr(this.__wrapped__)}function or(){return this.__wrapped__}e=e?un.defaults(Z.Object(),e,un.pick(Z,P)):Z;var ar=e.Array,ir=e.Boolean,fr=e.Date,lr=e.Function,cr=e.Math,sr=e.Number,pr=e.Object,gr=e.RegExp,vr=e.String,dr=e.TypeError,yr=[],hr=pr.prototype,mr=e._,_r=gr("^"+vr(hr.valueOf).replace(/[.*+?^${}()|[\]\\]/g,"\\$&").replace(/valueOf|for [^\]]+/g,".+?")+"$"),br=cr.ceil,wr=e.clearTimeout,jr=cr.floor,xr=lr.prototype.toString,kr=_r.test(kr=pr.getPrototypeOf)&&kr,Ar=hr.hasOwnProperty,Cr=_r.test(Cr=fr.now)&&Cr||function(){return+new fr},Er=yr.push,Nr=e.setImmediate,Or=e.setTimeout,Tr=yr.splice,Fr=hr.toString,Ir=yr.unshift,Rr=function(){try{var e={},n=_r.test(n=pr.defineProperty)&&n,t=n(e,e,e)&&n}catch(r){}return t}(),Sr=_r.test(Sr=Fr.bind)&&Sr,Br=_r.test(Br=pr.create)&&Br,Dr=_r.test(Dr=ar.isArray)&&Dr,Pr=e.isFinite,Mr=e.isNaN,Lr=_r.test(Lr=pr.keys)&&Lr,$r=cr.max,qr=cr.min,Ur=e.parseInt,Wr=cr.random,zr=yr.slice,Kr=_r.test(e.attachEvent),Xr=Sr&&!/\n|true/.test(Sr+Kr),Gr={};Gr[$]=ar,Gr[q]=ir,Gr[U]=fr,Gr[W]=lr,Gr[K]=pr,Gr[z]=sr,Gr[X]=gr,Gr[G]=vr,r.prototype=t.prototype;var Vr=t.support={};Vr.fastBind=Sr&&!Xr,Vr.funcDecomp=!_r.test(e.WinRTError)&&B.test(h),Vr.funcNames="string"==typeof lr.name,t.templateSettings={escape:/<%-([\s\S]+?)%>/g,evaluate:/<%([\s\S]+?)%>/g,interpolate:I,variable:"",imports:{_:t}},Br||(rn=function(e){if(En(e)){g.prototype=e;var n=new g;g.prototype=null}return n||{}});var Hr=Rr?function(e,n){J.value=n,Rr(e,"__bindData__",J)}:g,Jr=Dr||function(e){return e&&"object"==typeof e&&"number"==typeof e.length&&Fr.call(e)==$||!1},Qr=function(e){var n,t=e,r=[];if(!t)return r;if(!Q[typeof e])return r;for(n in t)Ar.call(t,n)&&r.push(n);return r},Yr=Lr?function(e){return En(e)?Lr(e):[]}:Qr,Zr={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},eu=_n(Zr),nu=gr("("+Yr(eu).join("|")+")","g"),tu=gr("["+Yr(Zr).join("")+"]","g"),ru=function(e,n,t){var r,u=e,o=u;if(!u)return o;var i=arguments,f=0,l="number"==typeof t?2:i.length;if(l>3&&"function"==typeof i[l-2])var c=a(i[--l-1],i[l--],2);else l>2&&"function"==typeof i[l-1]&&(c=i[--l]);for(;++f<l;)if(u=i[f],u&&Q[typeof u])for(var s=-1,p=Q[typeof u]&&Yr(u),g=p?p.length:0;++s<g;)r=p[s],o[r]=c?c(o[r],u[r]):u[r];return o},uu=function(e,n,t){var r,u=e,o=u;if(!u)return o;for(var a=arguments,i=0,f="number"==typeof t?2:a.length;++i<f;)if(u=a[i],u&&Q[typeof u])for(var l=-1,c=Q[typeof u]&&Yr(u),s=c?c.length:0;++l<s;)r=c[l],"undefined"==typeof o[r]&&(o[r]=u[r]);return o},ou=function(e,n,t){var r,u=e,o=u;if(!u)return o;if(!Q[typeof u])return o;n=n&&"undefined"==typeof t?n:a(n,t,3);for(r in u)if(n(u[r],r,e)===!1)return o;return o},au=function(e,n,t){var r,u=e,o=u;if(!u)return o;if(!Q[typeof u])return o;n=n&&"undefined"==typeof t?n:a(n,t,3);for(var i=-1,f=Q[typeof u]&&Yr(u),l=f?f.length:0;++i<l;)if(r=f[i],n(u[r],r,e)===!1)return o;return o},iu=function(e){if(!e||Fr.call(e)!=K)return!1;var n=e.valueOf,t="function"==typeof n&&(t=kr(n))&&kr(t);return t?e==t||kr(e)==t:fn(e)},fu=en(function(e,n,t){Ar.call(e,t)?e[t]++:e[t]=1}),lu=en(function(e,n,t){(Ar.call(e,t)?e[t]:e[t]=[]).push(n)}),cu=en(function(e,n,t){e[t]=n}),su=Wn;Xr&&tn&&"function"==typeof Nr&&(Pt=function(n){if(!Cn(n))throw new dr;return Nr.apply(e,arguments)});var pu=8==Ur(A+"08")?Ur:function(e,n){return Ur(In(e)?e.replace(R,""):e,n||0)};return t.after=Ot,t.assign=ru,t.at=$n,t.bind=Tt,t.bindAll=Ft,t.bindKey=It,t.chain=nr,t.compact=ft,t.compose=Rt,t.countBy=fu,t.createCallback=St,t.curry=Bt,t.debounce=Dt,t.defaults=uu,t.defer=Pt,t.delay=Mt,t.difference=lt,t.filter=Wn,t.flatten=gt,t.forEach=Xn,t.forEachRight=Gn,t.forIn=ou,t.forInRight=dn,t.forOwn=au,t.forOwnRight=yn,t.functions=hn,t.groupBy=lu,t.indexBy=cu,t.initial=dt,t.intersection=yt,t.invert=_n,t.invoke=Vn,t.keys=Yr,t.map=Hn,t.max=Jn,t.memoize=Lt,t.merge=Sn,t.min=Qn,t.omit=Bn,t.once=$t,t.pairs=Dn,t.partial=qt,t.partialRight=Ut,t.pick=Pn,t.pluck=Yn,t.pull=_t,t.range=bt,t.reject=nt,t.remove=wt,t.rest=jt,t.shuffle=rt,t.sortBy=at,t.tap=tr,t.throttle=Wt,t.times=Yt,t.toArray=it,t.transform=Mn,t.union=kt,t.uniq=At,t.values=Ln,t.where=su,t.without=Ct,t.wrap=zt,t.zip=Et,t.zipObject=Nt,t.collect=Hn,t.drop=jt,t.each=Xn,t.eachRight=Gn,t.extend=ru,t.methods=hn,t.object=Nt,t.select=Wn,t.tail=jt,t.unique=At,t.unzip=Et,Gt(t),t.clone=sn,t.cloneDeep=pn,t.contains=qn,t.escape=Kt,t.every=Un,t.find=zn,t.findIndex=ct,t.findKey=gn,t.findLast=Kn,t.findLastIndex=st,t.findLastKey=vn,t.has=mn,t.identity=Xt,t.indexOf=vt,t.isArguments=cn,t.isArray=Jr,t.isBoolean=bn,t.isDate=wn,t.isElement=jn,t.isEmpty=xn,t.isEqual=kn,t.isFinite=An,t.isFunction=Cn,t.isNaN=Nn,t.isNull=On,t.isNumber=Tn,t.isObject=En,t.isPlainObject=iu,t.isRegExp=Fn,t.isString=In,t.isUndefined=Rn,t.lastIndexOf=mt,t.mixin=Gt,t.noConflict=Vt,t.parseInt=pu,t.random=Ht,t.reduce=Zn,t.reduceRight=et,t.result=Jt,t.runInContext=h,t.size=ut,t.some=ot,t.sortedIndex=xt,t.template=Qt,t.unescape=Zt,t.uniqueId=er,t.all=Un,t.any=ot,t.detect=zn,t.findWhere=zn,t.foldl=Zn,t.foldr=et,t.include=qn,t.inject=Zn,au(t,function(e,n){t.prototype[n]||(t.prototype[n]=function(){var n=[this.__wrapped__],u=this.__chain__;Er.apply(n,arguments);var o=e.apply(t,n);return u?new r(o,u):o})}),t.first=pt,t.last=ht,t.sample=tt,t.take=pt,t.head=pt,au(t,function(e,n){var u="sample"!==n;t.prototype[n]||(t.prototype[n]=function(n,t){var o=this.__chain__,a=e(this.__wrapped__,n,t);return o||null!=n&&(!t||u&&"function"==typeof n)?new r(a,o):a})}),t.VERSION="2.2.1",t.prototype.chain=rr,t.prototype.toString=ur,t.prototype.value=or,t.prototype.valueOf=or,Xn(["join","pop","shift"],function(e){var n=yr[e];t.prototype[e]=function(){var e=this.__chain__,t=n.apply(this.__wrapped__,arguments);return e?new r(t,e):t}}),Xn(["push","reverse","sort","unshift"],function(e){var n=yr[e];t.prototype[e]=function(){return n.apply(this.__wrapped__,arguments),this}}),Xn(["concat","slice","splice"],function(e){var n=yr[e];t.prototype[e]=function(){return new r(n.apply(this.__wrapped__,arguments),this.__chain__)}}),t}var m,_=[],b=[],w=0,j=+new Date+"",x=75,k=40,A=" 	\f ﻿\n\r\u2028\u2029 ᠎             　",C=/\b__p \+= '';/g,E=/\b(__p \+=) '' \+/g,N=/(__e\(.*?\)|\b__t\)) \+\n'';/g,O=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,T=/\w*$/,F=/^function[ \n\r\t]+\w/,I=/<%=([\s\S]+?)%>/g,R=RegExp("^["+A+"]*0+(?=.$)"),S=/($^)/,B=/\bthis\b/,D=/['\n\r\t\u2028\u2029\\]/g,P=["Array","Boolean","Date","Function","Math","Number","Object","RegExp","String","_","attachEvent","clearTimeout","isFinite","isNaN","parseInt","setImmediate","setTimeout"],M=0,L="[object Arguments]",$="[object Array]",q="[object Boolean]",U="[object Date]",W="[object Function]",z="[object Number]",K="[object Object]",X="[object RegExp]",G="[object String]",V={};V[W]=!1,V[L]=V[$]=V[q]=V[U]=V[z]=V[K]=V[X]=V[G]=!0;var H={leading:!1,maxWait:0,trailing:!1},J={configurable:!1,enumerable:!1,value:null,writable:!1},Q={"boolean":!1,"function":!0,object:!0,number:!1,string:!1,undefined:!1},Y={"\\":"\\","'":"'","\n":"n","\r":"r","	":"t","\u2028":"u2028","\u2029":"u2029"},Z=Q[typeof window]&&window||this,en=Q[typeof r]&&r&&!r.nodeType&&r,nn=Q[typeof t]&&t&&!t.nodeType&&t,tn=nn&&nn.exports===en&&en,rn=Q[typeof u]&&u;!rn||rn.global!==rn&&rn.window!==rn||(Z=rn);var un=h();"function"==typeof e&&"object"==typeof e.amd&&e.amd?(Z._=un,e(function(){return un})):en&&nn?tn?(nn.exports=un)._=un:en._=un:Z._=un}).call(this)},{}]},{},[1])(1)});