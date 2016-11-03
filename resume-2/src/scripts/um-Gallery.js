/*!
 * imagesLoaded PACKAGED v3.1.4
 * JavaScript is all like "You images are done yet or what?"
 * MIT License
 */

(function(){function e(){}function t(e,t){for(var n=e.length;n--;)if(e[n].listener===t)return n;return-1}function n(e){return function(){return this[e].apply(this,arguments)}}var i=e.prototype,r=this,o=r.EventEmitter;i.getListeners=function(e){var t,n,i=this._getEvents();if("object"==typeof e){t={};for(n in i)i.hasOwnProperty(n)&&e.test(n)&&(t[n]=i[n])}else t=i[e]||(i[e]=[]);return t},i.flattenListeners=function(e){var t,n=[];for(t=0;e.length>t;t+=1)n.push(e[t].listener);return n},i.getListenersAsObject=function(e){var t,n=this.getListeners(e);return n instanceof Array&&(t={},t[e]=n),t||n},i.addListener=function(e,n){var i,r=this.getListenersAsObject(e),o="object"==typeof n;for(i in r)r.hasOwnProperty(i)&&-1===t(r[i],n)&&r[i].push(o?n:{listener:n,once:!1});return this},i.on=n("addListener"),i.addOnceListener=function(e,t){return this.addListener(e,{listener:t,once:!0})},i.once=n("addOnceListener"),i.defineEvent=function(e){return this.getListeners(e),this},i.defineEvents=function(e){for(var t=0;e.length>t;t+=1)this.defineEvent(e[t]);return this},i.removeListener=function(e,n){var i,r,o=this.getListenersAsObject(e);for(r in o)o.hasOwnProperty(r)&&(i=t(o[r],n),-1!==i&&o[r].splice(i,1));return this},i.off=n("removeListener"),i.addListeners=function(e,t){return this.manipulateListeners(!1,e,t)},i.removeListeners=function(e,t){return this.manipulateListeners(!0,e,t)},i.manipulateListeners=function(e,t,n){var i,r,o=e?this.removeListener:this.addListener,s=e?this.removeListeners:this.addListeners;if("object"!=typeof t||t instanceof RegExp)for(i=n.length;i--;)o.call(this,t,n[i]);else for(i in t)t.hasOwnProperty(i)&&(r=t[i])&&("function"==typeof r?o.call(this,i,r):s.call(this,i,r));return this},i.removeEvent=function(e){var t,n=typeof e,i=this._getEvents();if("string"===n)delete i[e];else if("object"===n)for(t in i)i.hasOwnProperty(t)&&e.test(t)&&delete i[t];else delete this._events;return this},i.removeAllListeners=n("removeEvent"),i.emitEvent=function(e,t){var n,i,r,o,s=this.getListenersAsObject(e);for(r in s)if(s.hasOwnProperty(r))for(i=s[r].length;i--;)n=s[r][i],n.once===!0&&this.removeListener(e,n.listener),o=n.listener.apply(this,t||[]),o===this._getOnceReturnValue()&&this.removeListener(e,n.listener);return this},i.trigger=n("emitEvent"),i.emit=function(e){var t=Array.prototype.slice.call(arguments,1);return this.emitEvent(e,t)},i.setOnceReturnValue=function(e){return this._onceReturnValue=e,this},i._getOnceReturnValue=function(){return this.hasOwnProperty("_onceReturnValue")?this._onceReturnValue:!0},i._getEvents=function(){return this._events||(this._events={})},e.noConflict=function(){return r.EventEmitter=o,e},"function"==typeof define&&define.amd?define("eventEmitter/EventEmitter",[],function(){return e}):"object"==typeof module&&module.exports?module.exports=e:this.EventEmitter=e}).call(this),function(e){function t(t){var n=e.event;return n.target=n.target||n.srcElement||t,n}var n=document.documentElement,i=function(){};n.addEventListener?i=function(e,t,n){e.addEventListener(t,n,!1)}:n.attachEvent&&(i=function(e,n,i){e[n+i]=i.handleEvent?function(){var n=t(e);i.handleEvent.call(i,n)}:function(){var n=t(e);i.call(e,n)},e.attachEvent("on"+n,e[n+i])});var r=function(){};n.removeEventListener?r=function(e,t,n){e.removeEventListener(t,n,!1)}:n.detachEvent&&(r=function(e,t,n){e.detachEvent("on"+t,e[t+n]);try{delete e[t+n]}catch(i){e[t+n]=void 0}});var o={bind:i,unbind:r};"function"==typeof define&&define.amd?define("eventie/eventie",o):e.eventie=o}(this),function(e,t){"function"==typeof define&&define.amd?define(["eventEmitter/EventEmitter","eventie/eventie"],function(n,i){return t(e,n,i)}):"object"==typeof exports?module.exports=t(e,require("eventEmitter"),require("eventie")):e.imagesLoaded=t(e,e.EventEmitter,e.eventie)}(this,function(e,t,n){function i(e,t){for(var n in t)e[n]=t[n];return e}function r(e){return"[object Array]"===d.call(e)}function o(e){var t=[];if(r(e))t=e;else if("number"==typeof e.length)for(var n=0,i=e.length;i>n;n++)t.push(e[n]);else t.push(e);return t}function s(e,t,n){if(!(this instanceof s))return new s(e,t);"string"==typeof e&&(e=document.querySelectorAll(e)),this.elements=o(e),this.options=i({},this.options),"function"==typeof t?n=t:i(this.options,t),n&&this.on("always",n),this.getImages(),a&&(this.jqDeferred=new a.Deferred);var r=this;setTimeout(function(){r.check()})}function c(e){this.img=e}function f(e){this.src=e,v[e]=this}var a=e.jQuery,u=e.console,h=u!==void 0,d=Object.prototype.toString;s.prototype=new t,s.prototype.options={},s.prototype.getImages=function(){this.images=[];for(var e=0,t=this.elements.length;t>e;e++){var n=this.elements[e];"IMG"===n.nodeName&&this.addImage(n);for(var i=n.querySelectorAll("img"),r=0,o=i.length;o>r;r++){var s=i[r];this.addImage(s)}}},s.prototype.addImage=function(e){var t=new c(e);this.images.push(t)},s.prototype.check=function(){function e(e,r){return t.options.debug&&h&&u.log("confirm",e,r),t.progress(e),n++,n===i&&t.complete(),!0}var t=this,n=0,i=this.images.length;if(this.hasAnyBroken=!1,!i)return this.complete(),void 0;for(var r=0;i>r;r++){var o=this.images[r];o.on("confirm",e),o.check()}},s.prototype.progress=function(e){this.hasAnyBroken=this.hasAnyBroken||!e.isLoaded;var t=this;setTimeout(function(){t.emit("progress",t,e),t.jqDeferred&&t.jqDeferred.notify&&t.jqDeferred.notify(t,e)})},s.prototype.complete=function(){var e=this.hasAnyBroken?"fail":"done";this.isComplete=!0;var t=this;setTimeout(function(){if(t.emit(e,t),t.emit("always",t),t.jqDeferred){var n=t.hasAnyBroken?"reject":"resolve";t.jqDeferred[n](t)}})},a&&(a.fn.imagesLoaded=function(e,t){var n=new s(this,e,t);return n.jqDeferred.promise(a(this))}),c.prototype=new t,c.prototype.check=function(){var e=v[this.img.src]||new f(this.img.src);if(e.isConfirmed)return this.confirm(e.isLoaded,"cached was confirmed"),void 0;if(this.img.complete&&void 0!==this.img.naturalWidth)return this.confirm(0!==this.img.naturalWidth,"naturalWidth"),void 0;var t=this;e.on("confirm",function(e,n){return t.confirm(e.isLoaded,n),!0}),e.check()},c.prototype.confirm=function(e,t){this.isLoaded=e,this.emit("confirm",this,t)};var v={};return f.prototype=new t,f.prototype.check=function(){if(!this.isChecked){var e=new Image;n.bind(e,"load",this),n.bind(e,"error",this),e.src=this.src,this.isChecked=!0}},f.prototype.handleEvent=function(e){var t="on"+e.type;this[t]&&this[t](e)},f.prototype.onload=function(e){this.confirm(!0,"onload"),this.unbindProxyEvents(e)},f.prototype.onerror=function(e){this.confirm(!1,"onerror"),this.unbindProxyEvents(e)},f.prototype.confirm=function(e,t){this.isConfirmed=!0,this.isLoaded=e,this.emit("confirm",this,t)},f.prototype.unbindProxyEvents=function(e){n.unbind(e.target,"load",this),n.unbind(e.target,"error",this)},s});



/* Modernizr 2.7.1 (Custom Build) | MIT & BSD
 * Build: http://modernizr.com/download/#-csstransforms3d-csstransitions-shiv-cssclasses-prefixed-teststyles-testprop-testallprops-prefixes-domprefixes-load
 */
;window.Modernizr=function(a,b,c){function z(a){j.cssText=a}function A(a,b){return z(m.join(a+";")+(b||""))}function B(a,b){return typeof a===b}function C(a,b){return!!~(""+a).indexOf(b)}function D(a,b){for(var d in a){var e=a[d];if(!C(e,"-")&&j[e]!==c)return b=="pfx"?e:!0}return!1}function E(a,b,d){for(var e in a){var f=b[a[e]];if(f!==c)return d===!1?a[e]:B(f,"function")?f.bind(d||b):f}return!1}function F(a,b,c){var d=a.charAt(0).toUpperCase()+a.slice(1),e=(a+" "+o.join(d+" ")+d).split(" ");return B(b,"string")||B(b,"undefined")?D(e,b):(e=(a+" "+p.join(d+" ")+d).split(" "),E(e,b,c))}var d="2.7.1",e={},f=!0,g=b.documentElement,h="modernizr",i=b.createElement(h),j=i.style,k,l={}.toString,m=" -webkit- -moz- -o- -ms- ".split(" "),n="Webkit Moz O ms",o=n.split(" "),p=n.toLowerCase().split(" "),q={},r={},s={},t=[],u=t.slice,v,w=function(a,c,d,e){var f,i,j,k,l=b.createElement("div"),m=b.body,n=m||b.createElement("body");if(parseInt(d,10))while(d--)j=b.createElement("div"),j.id=e?e[d]:h+(d+1),l.appendChild(j);return f=["&#173;",'<style id="s',h,'">',a,"</style>"].join(""),l.id=h,(m?l:n).innerHTML+=f,n.appendChild(l),m||(n.style.background="",n.style.overflow="hidden",k=g.style.overflow,g.style.overflow="hidden",g.appendChild(n)),i=c(l,a),m?l.parentNode.removeChild(l):(n.parentNode.removeChild(n),g.style.overflow=k),!!i},x={}.hasOwnProperty,y;!B(x,"undefined")&&!B(x.call,"undefined")?y=function(a,b){return x.call(a,b)}:y=function(a,b){return b in a&&B(a.constructor.prototype[b],"undefined")},Function.prototype.bind||(Function.prototype.bind=function(b){var c=this;if(typeof c!="function")throw new TypeError;var d=u.call(arguments,1),e=function(){if(this instanceof e){var a=function(){};a.prototype=c.prototype;var f=new a,g=c.apply(f,d.concat(u.call(arguments)));return Object(g)===g?g:f}return c.apply(b,d.concat(u.call(arguments)))};return e}),q.csstransforms3d=function(){var a=!!F("perspective");return a&&"webkitPerspective"in g.style&&w("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}",function(b,c){a=b.offsetLeft===9&&b.offsetHeight===3}),a},q.csstransitions=function(){return F("transition")};for(var G in q)y(q,G)&&(v=G.toLowerCase(),e[v]=q[G](),t.push((e[v]?"":"no-")+v));return e.addTest=function(a,b){if(typeof a=="object")for(var d in a)y(a,d)&&e.addTest(d,a[d]);else{a=a.toLowerCase();if(e[a]!==c)return e;b=typeof b=="function"?b():b,typeof f!="undefined"&&f&&(g.className+=" "+(b?"":"no-")+a),e[a]=b}return e},z(""),i=k=null,function(a,b){function l(a,b){var c=a.createElement("p"),d=a.getElementsByTagName("head")[0]||a.documentElement;return c.innerHTML="x<style>"+b+"</style>",d.insertBefore(c.lastChild,d.firstChild)}function m(){var a=s.elements;return typeof a=="string"?a.split(" "):a}function n(a){var b=j[a[h]];return b||(b={},i++,a[h]=i,j[i]=b),b}function o(a,c,d){c||(c=b);if(k)return c.createElement(a);d||(d=n(c));var g;return d.cache[a]?g=d.cache[a].cloneNode():f.test(a)?g=(d.cache[a]=d.createElem(a)).cloneNode():g=d.createElem(a),g.canHaveChildren&&!e.test(a)&&!g.tagUrn?d.frag.appendChild(g):g}function p(a,c){a||(a=b);if(k)return a.createDocumentFragment();c=c||n(a);var d=c.frag.cloneNode(),e=0,f=m(),g=f.length;for(;e<g;e++)d.createElement(f[e]);return d}function q(a,b){b.cache||(b.cache={},b.createElem=a.createElement,b.createFrag=a.createDocumentFragment,b.frag=b.createFrag()),a.createElement=function(c){return s.shivMethods?o(c,a,b):b.createElem(c)},a.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+m().join().replace(/[\w\-]+/g,function(a){return b.createElem(a),b.frag.createElement(a),'c("'+a+'")'})+");return n}")(s,b.frag)}function r(a){a||(a=b);var c=n(a);return s.shivCSS&&!g&&!c.hasCSS&&(c.hasCSS=!!l(a,"article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")),k||q(a,c),a}var c="3.7.0",d=a.html5||{},e=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,f=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,g,h="_html5shiv",i=0,j={},k;(function(){try{var a=b.createElement("a");a.innerHTML="<xyz></xyz>",g="hidden"in a,k=a.childNodes.length==1||function(){b.createElement("a");var a=b.createDocumentFragment();return typeof a.cloneNode=="undefined"||typeof a.createDocumentFragment=="undefined"||typeof a.createElement=="undefined"}()}catch(c){g=!0,k=!0}})();var s={elements:d.elements||"abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video",version:c,shivCSS:d.shivCSS!==!1,supportsUnknownElements:k,shivMethods:d.shivMethods!==!1,type:"default",shivDocument:r,createElement:o,createDocumentFragment:p};a.html5=s,r(b)}(this,b),e._version=d,e._prefixes=m,e._domPrefixes=p,e._cssomPrefixes=o,e.testProp=function(a){return D([a])},e.testAllProps=F,e.testStyles=w,e.prefixed=function(a,b,c){return b?F(a,b,c):F(a,"pfx")},g.className=g.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+(f?" js "+t.join(" "):""),e}(this,this.document),function(a,b,c){function d(a){return"[object Function]"==o.call(a)}function e(a){return"string"==typeof a}function f(){}function g(a){return!a||"loaded"==a||"complete"==a||"uninitialized"==a}function h(){var a=p.shift();q=1,a?a.t?m(function(){("c"==a.t?B.injectCss:B.injectJs)(a.s,0,a.a,a.x,a.e,1)},0):(a(),h()):q=0}function i(a,c,d,e,f,i,j){function k(b){if(!o&&g(l.readyState)&&(u.r=o=1,!q&&h(),l.onload=l.onreadystatechange=null,b)){"img"!=a&&m(function(){t.removeChild(l)},50);for(var d in y[c])y[c].hasOwnProperty(d)&&y[c][d].onload()}}var j=j||B.errorTimeout,l=b.createElement(a),o=0,r=0,u={t:d,s:c,e:f,a:i,x:j};1===y[c]&&(r=1,y[c]=[]),"object"==a?l.data=c:(l.src=c,l.type=a),l.width=l.height="0",l.onerror=l.onload=l.onreadystatechange=function(){k.call(this,r)},p.splice(e,0,u),"img"!=a&&(r||2===y[c]?(t.insertBefore(l,s?null:n),m(k,j)):y[c].push(l))}function j(a,b,c,d,f){return q=0,b=b||"j",e(a)?i("c"==b?v:u,a,b,this.i++,c,d,f):(p.splice(this.i++,0,a),1==p.length&&h()),this}function k(){var a=B;return a.loader={load:j,i:0},a}var l=b.documentElement,m=a.setTimeout,n=b.getElementsByTagName("script")[0],o={}.toString,p=[],q=0,r="MozAppearance"in l.style,s=r&&!!b.createRange().compareNode,t=s?l:n.parentNode,l=a.opera&&"[object Opera]"==o.call(a.opera),l=!!b.attachEvent&&!l,u=r?"object":l?"script":"img",v=l?"script":u,w=Array.isArray||function(a){return"[object Array]"==o.call(a)},x=[],y={},z={timeout:function(a,b){return b.length&&(a.timeout=b[0]),a}},A,B;B=function(a){function b(a){var a=a.split("!"),b=x.length,c=a.pop(),d=a.length,c={url:c,origUrl:c,prefixes:a},e,f,g;for(f=0;f<d;f++)g=a[f].split("="),(e=z[g.shift()])&&(c=e(c,g));for(f=0;f<b;f++)c=x[f](c);return c}function g(a,e,f,g,h){var i=b(a),j=i.autoCallback;i.url.split(".").pop().split("?").shift(),i.bypass||(e&&(e=d(e)?e:e[a]||e[g]||e[a.split("/").pop().split("?")[0]]),i.instead?i.instead(a,e,f,g,h):(y[i.url]?i.noexec=!0:y[i.url]=1,f.load(i.url,i.forceCSS||!i.forceJS&&"css"==i.url.split(".").pop().split("?").shift()?"c":c,i.noexec,i.attrs,i.timeout),(d(e)||d(j))&&f.load(function(){k(),e&&e(i.origUrl,h,g),j&&j(i.origUrl,h,g),y[i.url]=2})))}function h(a,b){function c(a,c){if(a){if(e(a))c||(j=function(){var a=[].slice.call(arguments);k.apply(this,a),l()}),g(a,j,b,0,h);else if(Object(a)===a)for(n in m=function(){var b=0,c;for(c in a)a.hasOwnProperty(c)&&b++;return b}(),a)a.hasOwnProperty(n)&&(!c&&!--m&&(d(j)?j=function(){var a=[].slice.call(arguments);k.apply(this,a),l()}:j[n]=function(a){return function(){var b=[].slice.call(arguments);a&&a.apply(this,b),l()}}(k[n])),g(a[n],j,b,n,h))}else!c&&l()}var h=!!a.test,i=a.load||a.both,j=a.callback||f,k=j,l=a.complete||f,m,n;c(h?a.yep:a.nope,!!i),i&&c(i)}var i,j,l=this.yepnope.loader;if(e(a))g(a,0,l,0);else if(w(a))for(i=0;i<a.length;i++)j=a[i],e(j)?g(j,0,l,0):w(j)?B(j):Object(j)===j&&h(j,l);else Object(a)===a&&h(a,l)},B.addPrefix=function(a,b){z[a]=b},B.addFilter=function(a){x.push(a)},B.errorTimeout=1e4,null==b.readyState&&b.addEventListener&&(b.readyState="loading",b.addEventListener("DOMContentLoaded",A=function(){b.removeEventListener("DOMContentLoaded",A,0),b.readyState="complete"},0)),a.yepnope=k(),a.yepnope.executeStack=h,a.yepnope.injectJs=function(a,c,d,e,i,j){var k=b.createElement("script"),l,o,e=e||B.errorTimeout;k.src=a;for(o in d)k.setAttribute(o,d[o]);c=j?h:c||f,k.onreadystatechange=k.onload=function(){!l&&g(k.readyState)&&(l=1,c(),k.onload=k.onreadystatechange=null)},m(function(){l||(l=1,c(1))},e),i?k.onload():n.parentNode.insertBefore(k,n)},a.yepnope.injectCss=function(a,c,d,e,g,i){var e=b.createElement("link"),j,c=i?h:c||f;e.href=a,e.rel="stylesheet",e.type="text/css";for(j in d)e.setAttribute(j,d[j]);g||(n.parentNode.insertBefore(e,n),m(c,0))}}(this,document),Modernizr.load=function(){yepnope.apply(window,[].slice.call(arguments,0))};


/*!
 * classie - class helper functions
 * from bonzo https://github.com/ded/bonzo
 *
 * classie.has( elem, 'my-class' ) -> true/false
 * classie.add( elem, 'my-new-class' )
 * classie.remove( elem, 'my-unwanted-class' )
 * classie.toggle( elem, 'my-class' )
 */

/*jshint browser: true, strict: true, undef: true */
/*global define: false */

( function( window ) {

'use strict';

// class helper functions from bonzo https://github.com/ded/bonzo

function classReg( className ) {
  return new RegExp("(^|\\s+)" + className + "(\\s+|$)");
}

// classList support for class management
// altho to be fair, the api sucks because it won't accept multiple classes at once
var hasClass, addClass, removeClass;

if ( 'classList' in document.documentElement ) {
  hasClass = function( elem, c ) {
    return elem.classList.contains( c );
  };
  addClass = function( elem, c ) {
    elem.classList.add( c );
  };
  removeClass = function( elem, c ) {
    elem.classList.remove( c );
  };
}
else {
  hasClass = function( elem, c ) {
    return classReg( c ).test( elem.className );
  };
  addClass = function( elem, c ) {
    if ( !hasClass( elem, c ) ) {
      elem.className = elem.className + ' ' + c;
    }
  };
  removeClass = function( elem, c ) {
    elem.className = elem.className.replace( classReg( c ), ' ' );
  };
}

function toggleClass( elem, c ) {
  var fn = hasClass( elem, c ) ? removeClass : addClass;
  fn( elem, c );
}

var classie = {
  // full names
  hasClass: hasClass,
  addClass: addClass,
  removeClass: removeClass,
  toggleClass: toggleClass,
  // short names
  has: hasClass,
  add: addClass,
  remove: removeClass,
  toggle: toggleClass
};

// transport
if ( typeof define === 'function' && define.amd ) {
  // AMD
  define( classie );
} else {
  // browser global
  window.classie = classie;
}

})( window );



/**
 * cbpGridGallery.js v1.0.0
 * http://www.codrops.com
 *
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 *
 * Copyright 2014, Codrops
 * http://www.codrops.com
 */
;( function( window ) {

  'use strict';

  var docElem = window.document.documentElement,
    transEndEventNames = {
      'WebkitTransition': 'webkitTransitionEnd',
      'MozTransition': 'transitionend',
      'OTransition': 'oTransitionEnd',
      'msTransition': 'MSTransitionEnd',
      'transition': 'transitionend'
    },
    transEndEventName = transEndEventNames[ Modernizr.prefixed( 'transition' ) ],
    support = {
      transitions : Modernizr.csstransitions,
      support3d : Modernizr.csstransforms3d
    };

  function setTransform( el, transformStr ) {
    el.style.WebkitTransform = transformStr;
    el.style.msTransform = transformStr;
    el.style.transform = transformStr;
  }

  // from http://responsejs.com/labs/dimensions/
  function getViewportW() {
    var client = docElem['clientWidth'],
      inner = window['innerWidth'];

    if( client < inner )
      return inner;
    else
      return client;
  }

  function extend( a, b ) {
    for( var key in b ) {
      if( b.hasOwnProperty( key ) ) {
        a[key] = b[key];
      }
    }
    return a;
  }

  function CBPGridGallery( el, options ) {
    this.el = el;
    this.options = extend( {}, this.options );
      extend( this.options, options );
      this._init();
  }

  CBPGridGallery.prototype.options = {
  };

  CBPGridGallery.prototype._init = function() {
    // main grid
    this.grid = this.el.querySelector( 'section.grid-wrap > ul.grid' );
    // main grid items
    this.gridItems = [].slice.call( this.grid.querySelectorAll( 'li:not(.grid-sizer)' ) );
    // items total
    this.itemsCount = this.gridItems.length;
    // slideshow grid
    this.slideshow = this.el.querySelector( 'section.slideshow > ul' );
    // slideshow grid items
    this.slideshowItems = [].slice.call( this.slideshow.children );
    // index of current slideshow item
    this.current = -1;
    // slideshow control buttons
    this.ctrlPrev = this.el.querySelector( 'section.slideshow > nav > span.nav-prev' );
    this.ctrlNext = this.el.querySelector( 'section.slideshow > nav > span.nav-next' );
    this.ctrlClose = this.el.querySelector( 'section.slideshow > nav > span.nav-close' );
    // init masonry grid
    this._initMasonry();
    // init events
    this._initEvents();
  };

  CBPGridGallery.prototype._initMasonry = function() {
    var grid = this.grid;
    imagesLoaded( grid, function() {
      new Masonry( grid, {
        itemSelector: 'li',
        columnWidth: grid.querySelector( '.grid-sizer' )
      });
    });
  };

  CBPGridGallery.prototype._initEvents = function() {
    var self = this;

    // open the slideshow when clicking on the main grid items
    this.gridItems.forEach( function( item, idx ) {
      item.addEventListener( 'click', function() {
        self._openSlideshow( idx );
      } );
    } );

    // slideshow controls
    this.ctrlPrev.addEventListener( 'click', function() { self._navigate( 'prev' ); } );
    this.ctrlNext.addEventListener( 'click', function() { self._navigate( 'next' ); } );
    this.ctrlClose.addEventListener( 'click', function() { self._closeSlideshow(); } );

    // window resize
    window.addEventListener( 'resize', function() { self._resizeHandler(); } );

    // trick to prevent scrolling when slideshow is visible
    window.addEventListener( 'scroll', function() {
      if ( self.isSlideshowVisible ) {
        window.scrollTo( self.scrollPosition ? self.scrollPosition.x : 0, self.scrollPosition ? self.scrollPosition.y : 0 );
      }
      else {
        self.scrollPosition = { x : window.pageXOffset || docElem.scrollLeft, y : window.pageYOffset || docElem.scrollTop };
      }
    });
  };

  CBPGridGallery.prototype._openSlideshow = function( pos ) {
    this.isSlideshowVisible = true;
    this.current = pos;

    classie.addClass( this.el, 'slideshow-open' );

    var body = document.getElementsByTagName('body')[0];
    classie.addClass( body, 'um-hidelogo' );

    /* position slideshow items */

    // set viewport items (current, next and previous)
    this._setViewportItems();

    // add class "current" and "show" to currentItem
    classie.addClass( this.currentItem, 'current' );
    classie.addClass( this.currentItem, 'show' );

    // add class show to next and previous items
    // position previous item on the left side and the next item on the right side
    if( this.prevItem ) {
      classie.addClass( this.prevItem, 'show' );
      var translateVal = Number( -1 * ( getViewportW() / 2 + this.prevItem.offsetWidth / 2 ) );
      setTransform( this.prevItem, support.support3d ? 'translate3d(' + translateVal + 'px, 0, 0px)' : 'translate(' + translateVal + 'px)' );
    }
    if( this.nextItem ) {
      classie.addClass( this.nextItem, 'show' );
      var translateVal = Number( getViewportW() / 2 + this.nextItem.offsetWidth / 2 );
      setTransform( this.nextItem, support.support3d ? 'translate3d(' + translateVal + 'px, 0, 0px)' : 'translate(' + translateVal + 'px)' );
    }
  };

  CBPGridGallery.prototype._navigate = function( dir ) {
    if( this.isAnimating ) return;
    if( dir === 'next' && this.current === this.itemsCount - 1 ||  dir === 'prev' && this.current === 0  ) {
      this._closeSlideshow();
      return;
    }

    this.isAnimating = true;

    // reset viewport items
    this._setViewportItems();

    var self = this,
      itemWidth = this.currentItem.offsetWidth,
      // positions for the centered/current item, both the side items and the incoming ones
      transformLeftStr = support.support3d ? 'translate3d(-' + Number( getViewportW() / 2 + itemWidth / 2 ) + 'px, 0, 0px)' : 'translate(-' + Number( getViewportW() / 2 + itemWidth / 2 ) + 'px)',
      transformRightStr = support.support3d ? 'translate3d(' + Number( getViewportW() / 2 + itemWidth / 2 ) + 'px, 0, 0px)' : 'translate(' + Number( getViewportW() / 2 + itemWidth / 2 ) + 'px)',
      transformCenterStr = '', transformOutStr, transformIncomingStr,
      // incoming item
      incomingItem;

    if( dir === 'next' ) {
      transformOutStr = support.support3d ? 'translate3d( -' + Number( (getViewportW() * 2) / 2 + itemWidth / 2 ) + 'px, 0, 0px )' : 'translate(-' + Number( (getViewportW() * 2) / 2 + itemWidth / 2 ) + 'px)';
      transformIncomingStr = support.support3d ? 'translate3d( ' + Number( (getViewportW() * 2) / 2 + itemWidth / 2 ) + 'px, 0, 0px )' : 'translate(' + Number( (getViewportW() * 2) / 2 + itemWidth / 2 ) + 'px)';
    }
    else {
      transformOutStr = support.support3d ? 'translate3d( ' + Number( (getViewportW() * 2) / 2 + itemWidth / 2 ) + 'px, 0, 0px )' : 'translate(' + Number( (getViewportW() * 2) / 2 + itemWidth / 2 ) + 'px)';
      transformIncomingStr = support.support3d ? 'translate3d( -' + Number( (getViewportW() * 2) / 2 + itemWidth / 2 ) + 'px, 0, 0px )' : 'translate(-' + Number( (getViewportW() * 2) / 2 + itemWidth / 2 ) + 'px)';
    }

    // remove class animatable from the slideshow grid (if it has already)
    classie.removeClass( self.slideshow, 'animatable' );

    if( dir === 'next' && this.current < this.itemsCount - 2 || dir === 'prev' && this.current > 1 ) {
      // we have an incoming item!
      incomingItem = this.slideshowItems[ dir === 'next' ? this.current + 2 : this.current - 2 ];
      setTransform( incomingItem, transformIncomingStr );
      classie.addClass( incomingItem, 'show' );
    }

    var slide = function() {
      // add class animatable to the slideshow grid
      classie.addClass( self.slideshow, 'animatable' );

      // overlays:
      classie.removeClass( self.currentItem, 'current' );
      var nextCurrent = dir === 'next' ? self.nextItem : self.prevItem;
      classie.addClass( nextCurrent, 'current' );

      setTransform( self.currentItem, dir === 'next' ? transformLeftStr : transformRightStr );

      if( self.nextItem ) {
        setTransform( self.nextItem, dir === 'next' ? transformCenterStr : transformOutStr );
      }

      if( self.prevItem ) {
        setTransform( self.prevItem, dir === 'next' ? transformOutStr : transformCenterStr );
      }

      if( incomingItem ) {
        setTransform( incomingItem, dir === 'next' ? transformRightStr : transformLeftStr );
      }

      var onEndTransitionFn = function( ev ) {
        if( support.transitions ) {
          if( ev.propertyName.indexOf( 'transform' ) === -1 ) return false;
          this.removeEventListener( transEndEventName, onEndTransitionFn );
        }

        if( self.prevItem && dir === 'next' ) {
          classie.removeClass( self.prevItem, 'show' );
        }
        else if( self.nextItem && dir === 'prev' ) {
          classie.removeClass( self.nextItem, 'show' );
        }

        if( dir === 'next' ) {
          self.prevItem = self.currentItem;
          self.currentItem = self.nextItem;
          if( incomingItem ) {
            self.nextItem = incomingItem;
          }
        }
        else {
          self.nextItem = self.currentItem;
          self.currentItem = self.prevItem;
          if( incomingItem ) {
            self.prevItem = incomingItem;
          }
        }

        self.current = dir === 'next' ? self.current + 1 : self.current - 1;
        self.isAnimating = false;
      };

      if( support.transitions ) {
        self.currentItem.addEventListener( transEndEventName, onEndTransitionFn );
      }
      else {
        onEndTransitionFn();
      }
    };

    setTimeout( slide, 25 );
  }

  CBPGridGallery.prototype._closeSlideshow = function( pos ) {
    // remove class slideshow-open from the grid gallery elem
    classie.removeClass( this.el, 'slideshow-open' );
    // remove class animatable from the slideshow grid
    classie.removeClass( this.slideshow, 'animatable' );

    var body = document.getElementsByTagName('body')[0];
    classie.removeClass( body, 'um-hidelogo' );

    var self = this,
      onEndTransitionFn = function( ev ) {
        if( support.transitions ) {
          if( ev.target.tagName.toLowerCase() !== 'ul' ) return;
          this.removeEventListener( transEndEventName, onEndTransitionFn );
        }
        // remove classes show and current from the slideshow items
        classie.removeClass( self.currentItem, 'current' );
        classie.removeClass( self.currentItem, 'show' );

        if( self.prevItem ) {
          classie.removeClass( self.prevItem, 'show' );
        }
        if( self.nextItem ) {
          classie.removeClass( self.nextItem, 'show' );
        }

        // also reset any transforms for all the items
        self.slideshowItems.forEach( function( item ) { setTransform( item, '' ); } );

        self.isSlideshowVisible = false;
      };

    if( support.transitions ) {
      this.el.addEventListener( transEndEventName, onEndTransitionFn );
    }
    else {
      onEndTransitionFn();
    }
  };

  CBPGridGallery.prototype._setViewportItems = function() {
    this.currentItem = null;
    this.prevItem = null;
    this.nextItem = null;

    if( this.current > 0 ) {
      this.prevItem = this.slideshowItems[ this.current - 1 ];
    }
    if( this.current < this.itemsCount - 1 ) {
      this.nextItem = this.slideshowItems[ this.current + 1 ];
    }
    this.currentItem = this.slideshowItems[ this.current ];
  }

  // taken from https://github.com/desandro/vanilla-masonry/blob/master/masonry.js by David DeSandro
  // original debounce by John Hann
  // http://unscriptable.com/index.php/2009/03/20/debouncing-javascript-methods/
  CBPGridGallery.prototype._resizeHandler = function() {
    var self = this;
    function delayed() {
      self._resize();
      self._resizeTimeout = null;
    }
    if ( this._resizeTimeout ) {
      clearTimeout( this._resizeTimeout );
    }
    this._resizeTimeout = setTimeout( delayed, 50 );
  }

  CBPGridGallery.prototype._resize = function() {
    if ( this.isSlideshowVisible ) {
      // update width value
      if( this.prevItem ) {
        var translateVal = Number( -1 * ( getViewportW() / 2 + this.prevItem.offsetWidth / 2 ) );
        setTransform( this.prevItem, support.support3d ? 'translate3d(' + translateVal + 'px, 0, -150px)' : 'translate(' + translateVal + 'px)' );
      }
      if( this.nextItem ) {
        var translateVal = Number( getViewportW() / 2 + this.nextItem.offsetWidth / 2 );
        setTransform( this.nextItem, support.support3d ? 'translate3d(' + translateVal + 'px, 0, -150px)' : 'translate(' + translateVal + 'px)' );
      }
    }
  }

  // add to global namespace
  window.CBPGridGallery = CBPGridGallery;

})( window );
