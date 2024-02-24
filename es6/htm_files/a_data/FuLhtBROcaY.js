;/*FB_PKG_DELIM*/

__d("BlueBar",["csx","CSS","DOMQuery","Style","ge"],(function(a,b,c,d,e,f,g,h){var i=document,j={};function k(a){return d("DOMQuery").scry(i,a)[0]}function l(a,b){return j[a]?j[a]:j[a]=k(b)}function a(){i=c("ge")("blueBarDOMInspector")||document,j={}}function b(){var a=n();return!a?!1:d("CSS").matchesSelector(a,"._5rmj")||c("Style").isFixed(a)}function m(){return l("bar","div._1s4v")}function e(){return l("navRoot","div._cx4")||m()}function n(){return l("maybeFixedRoot","div._26aw")}function f(){return l("maybeFixedRootLoggedOut","div._1pmx")}function h(){return l("maybeFixedRootLogin","div._53jh")}a();g.hasFixedBlueBar=b;g.getBar=m;g.getNavRoot=e;g.getMaybeFixedRoot=n;g.getLoggedOutRoot=f;g.getNewLoggedOutRoot=h}),98);
__d("CometLinkTrackingUtils.facebook",["ConstUriUtils","isFacebookURI"],(function(a,b,c,d,e,f,g){"use strict";function a(a,b,e){if(a!=null&&a!=="#"&&(e.length||b.length)){var f=d("ConstUriUtils").getUri(a);if(f!=null){if(!c("isFacebookURI")(f))return a;e.length&&(f=f.addQueryParam("__cft__",e));b.length&&f!=null&&(f=f.addQueryParam("__tn__",b.join("")));return f!=null?f.toString():a}}return a}g.decorateHrefWithTrackingInfo=a}),98);
__d("ViewportBounds",["Arbiter","ArbiterMixin","BlueBar","ExecutionEnvironment","PageEvents","Vector","emptyFunction","removeFromArray"],(function(a,b,c,d,e,f){var g={top:[],right:[],bottom:[],left:[]};function a(a){return function(){return g[a].reduce(function(a,b){return Math.max(a,b.getSize())},0)}}function c(a,b){return function(c){return new h(a,c,b)}}var h=function(){"use strict";function a(a,c,d){d===void 0&&(d=!1),this.getSide=b("emptyFunction").thatReturns(a),this.getSize=function(){return typeof c==="function"?c():c},this.isPersistent=b("emptyFunction").thatReturns(d),g[a].push(this),i.inform("change")}var c=a.prototype;c.remove=function(){b("removeFromArray")(g[this.getSide()],this),i.inform("change")};return a}();b("Arbiter").subscribe(b("PageEvents").AJAXPIPE_ONUNLOAD,function(){["top","right","bottom","left"].forEach(function(a){a=g[a];for(var b=a.length-1;b>=0;b--){var c=a[b];c.isPersistent()||c.remove()}})});var i=babelHelpers["extends"]({},b("ArbiterMixin"),{getTop:a("top"),getRight:a("right"),getBottom:a("bottom"),getLeft:a("left"),getElementPosition:function(a){a=b("Vector").getElementPosition(a);a.y-=i.getTop();return a},addTop:c("top"),addRight:c("right"),addBottom:c("bottom"),addLeft:c("left"),addPersistentTop:c("top",!0),addPersistentRight:c("right",!0),addPersistentBottom:c("bottom",!0),addPersistentLeft:c("left",!0)});i.addPersistentTop(function(){if(b("ExecutionEnvironment").canUseDOM&&b("BlueBar").hasFixedBlueBar()){var a=b("BlueBar").getMaybeFixedRoot();return a?a.offsetHeight:0}return 0});e.exports=i}),null);
__d("isAsyncScrollQuery",["UserAgent"],(function(a,b,c,d,e,f,g){var h=null;function a(){h===null&&(h=c("UserAgent").isPlatform("Mac OS X >= 10.8")&&c("UserAgent").isBrowser("Safari >= 6.0"));return h}g["default"]=a}),98);
__d("getReferrerURI",["ErrorGuard","URI","isFacebookURI"],(function(a,b,c,d,e,f,g){"use strict";function b(){if(a.PageTransitions&&a.PageTransitions.isInitialized())return a.PageTransitions.getReferrerURI();else{var b=c("ErrorGuard").applyWithGuard(function(a){return c("URI").tryParseURI(a)},null,[document.referrer]);return b&&c("isFacebookURI")(b)?b:null}}g["default"]=b}),98);
__d("goOrReplace",["Env","URI","isFacebookURI"],(function(a,b,c,d,e,f,g){function a(a,b,d){b=new(c("URI"))(b);c("Env").isCQuick&&c("isFacebookURI")(b)&&b.addQueryData({cquick:c("Env").iframeKey,cquick_token:c("Env").iframeToken,ctarget:c("Env").iframeTarget});b=b.toString();d?a.replace(b):a.href==b?a.reload():a.href=b}g["default"]=a}),98);
__d("LayerHideSources",[],(function(a,b,c,d,e,f){a=Object.freeze({BLUR:"blur",ESCAPE:"escape",LAYER_CANCEL_BUTTON:"layerCancelButton",LAYER_HIDE_BUTTON:"layerHideButton",TRANSITION:"transition"});b=a;f["default"]=b}),66);
__d("LayerHideOnEscape",["Event","Keys","LayerHideSources"],(function(a,b,c,d,e,f,g){a=function(){function a(a){this._layer=a}var b=a.prototype;b.enable=function(){this._subscription=this._layer.subscribe("key",this.handle.bind(this))};b.disable=function(){this._subscription!=null&&this._subscription.unsubscribe(),this._subscription=null};b.handle=function(a,b){if(c("Event").getKeyCode(b)===c("Keys").ESC){this._layer.hide(c("LayerHideSources").ESCAPE);return!1}return void 0};return a}();Object.assign(a.prototype,{_subscription:null});g["default"]=a}),98);
__d("isEmptyObject",[],(function(a,b,c,d,e,f){"use strict";function a(a){for(a in a)return!1;return!0}f["default"]=a}),66);
__d("ReactApiCallFalcoEvent",["FalcoLoggerInternal","getFalcoLogPolicy_DO_NOT_USE"],(function(a,b,c,d,e,f,g){"use strict";a=c("getFalcoLogPolicy_DO_NOT_USE")("1276");b=d("FalcoLoggerInternal").create("react_api_call",a);e=b;g["default"]=e}),98);
__d("CometEnvironmentSite",[],(function(a,b,c,d,e,f){a=Object.freeze({NONE:0,GENERIC_COMET:1,COMET_ON_MOBILE:2,COMET_ON_INSTAGRAM:3,BULLETIN:4,FB_ACCOUNTS_CENTER:5,CANVAS:6,IG_WWW:7,FRL_ACCOUNTS_CENTER:8,NOVI_CHECKOUT:9,ENTERPRISE_CENTER:10,BIZ_WEB:11,BUSINESS_FB:12,CREATOR_PORTAL:13,HORIZON_WORLDS:14,FB_WEB:15,SPARK_AR:16,WHATSAPP:17,META_DOT_COM:18,OCULUS_DOT_COM:19,FRL_FAMILY_CENTER:20,LEGAL_RIGHTS_PORTAL:22,WHATSAPP_FAQ:23,IG_ACCOUNTS_CENTER:24,ADS_MANAGER:25,MESSENGER_FAMILY_CENTER:26,META_WORK_PORTFOLIO:27,BARCELONA_WEB:29,FB_FAMILY_CENTER:30,CANDIDATE_PORTAL:31});f["default"]=a}),66);
__d("cancelAnimationFramePolyfill",[],(function(a,b,c,d,e,f){"use strict";b=a.__fbNativeCancelAnimationFrame||a.cancelAnimationFrame||a.webkitCancelAnimationFrame||a.mozCancelAnimationFrame||a.oCancelAnimationFrame||a.msCancelAnimationFrame||a.clearTimeout;c=b;f["default"]=c}),66);
__d("cancelAnimationFrame",["cancelAnimationFramePolyfill"],(function(a,b,c,d,e,f,g){function a(a){c("cancelAnimationFramePolyfill")(a)}g["default"]=a}),98);
__d("setIntervalBlue",["TimerStorage","setIntervalAcrossTransitions"],(function(a,b,c,d,e,f,g){function a(a,b){for(var d=arguments.length,e=new Array(d>2?d-2:0),f=2;f<d;f++)e[f-2]=arguments[f];var g=c("setIntervalAcrossTransitions").apply(void 0,[a,b].concat(e));c("TimerStorage").set(c("TimerStorage").INTERVAL,g);return g}g["default"]=a}),98);
__d("React.classic",["cr:1292365"],(function(a,b,c,d,e,f){e.exports=b("cr:1292365")}),null);
__d("ReactDOM.classic",["cr:5277"],(function(a,b,c,d,e,f){e.exports=b("cr:5277")}),null);
__d("ReactDOM.classic.prod-or-profiling",["cr:5278"],(function(a,b,c,d,e,f){e.exports=b("cr:5278")}),null);
__d("ReactDOMComet",["cr:1108857","cr:1294159","cr:734","qex"],(function(a,b,c,d,e,f,g){e=b("cr:734")?b("cr:734")(b("cr:1294159").createPortal):b("cr:1294159").createPortal;function a(a,d){return b("cr:1294159").createRoot(a,babelHelpers["extends"]({},d,{unstable_concurrentUpdatesByDefault:c("qex")._("723")?!1:(a=d==null?void 0:d.unstable_concurrentUpdatesByDefault)!=null?a:!1}))}function d(a,d,e){return b("cr:1294159").hydrateRoot(a,d,babelHelpers["extends"]({onRecoverableError:function(a){if(a!=null&&typeof a.message==="string"){var b=a.message;if(b.indexOf("The server could not finish this Suspense boundary")!==-1||b.indexOf("Minified React error #419;")!==-1||b.indexOf("This Suspense boundary received an update")!==-1||b.indexOf("Minified React error #421;")!==-1)return}typeof reportError==="function"&&reportError(a)}},e,{unstable_concurrentUpdatesByDefault:c("qex")._("723")?!1:(a=e==null?void 0:e.unstable_concurrentUpdatesByDefault)!=null?a:!1}))}g.createPortal=e;g.unstable_batchedUpdates=b("cr:1294159").unstable_batchedUpdates;g.flushSync=b("cr:1294159").flushSync;g.createRoot=a;g.hydrateRoot=d;g.unstable_createEventHandle=b("cr:1294159").unstable_createEventHandle;g.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=b("cr:1294159").__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;g.version=b("cr:1294159").version}),98);
__d("ReactDOMCompatibilityLayer",["ReactDOMComet"],(function(a,b,c,d,e,f,g){"use strict";var h=typeof WeakMap==="function"?new WeakMap():new Map();function a(a,b,c){var e=h.get(b);e==null&&(e=d("ReactDOMComet").createRoot(b),h.set(b,e));c=null;var f=a.ref;d("ReactDOMComet").flushSync(function(){var b;return(b=e)==null?void 0:b.render(((b=a.type)==null?void 0:(b=b.prototype)==null?void 0:b.isReactComponent)?babelHelpers["extends"]({},a,{ref:function(a){typeof f==="function"?f(a):f!=null&&(f.current=a),c=a}}):a)});return c}function b(a){if(a==null)return!1;var b=h.get(a);if(b){b.unmount();h["delete"](a);return!0}return!1}g.render=a;g.unmountComponentAtNode=b}),98);
__d("ReactInternalLogger",["$InternalEnum","CometEnvironmentSite","ConstUriUtils","SiteData","cr:4772","gkx","justknobx"],(function(a,b,c,d,e,f,g){"use strict";e=b("$InternalEnum").Mirrored(["ReactDOMLegacy"]);var h=b("$InternalEnum")({Render:"render",FindDOMNode:"findDOMNode",UnmountComponentAtNode:"unmountComponentAtNode"}),i=c("gkx")("1393"),j=c("gkx")("3404");function k(a){if(i)return Object.keys(c("CometEnvironmentSite")).at(c("SiteData").comet_env);else if(j)return"ADS_MANANGER";else return a==null?void 0:a.getDomain()}function a(a,c,d){return b("cr:4772")==null?d:function(){if(l(c)){var b=m(c,arguments.length<=0?void 0:arguments[0]);n(a,c,b)}return d.apply(void 0,arguments)}}function l(a){if(a===h.FindDOMNode&&!c("justknobx")._("948"))return!1;else return!0}function m(a,b){switch(a){case h.Render:if(typeof b==="object"&&b!=null&&b.type!=null){var c;a=b.type;return(c=a.displayName)!=null?c:a.name}return;case h.FindDOMNode:if(b!=null)if(b instanceof Element)return"DOMElement";else if(typeof b==="object"){return(c=b.constructor)==null?void 0:c.name}break;case h.UnmountComponentAtNode:return}}function n(a,c,e,g){b("cr:4772")&&b("cr:4772").log(function(){var b=d("ConstUriUtils").getUri(document.location.href);return{module:a,method:c,site_type:k(b),product_type:b==null?void 0:b.getPath(),component_name:e,source_file_name:g}})}g.Module=e;g.Method=h;g.wrapWithLog=a;g.maybeGetComponentName=m;g.log=n}),98);
__d("ReactDOMLegacy_DEPRECATED",["ReactDOMCompatibilityLayer","ReactInternalLogger","cr:1108857","cr:1294246","cr:3569","cr:734","err","gkx","justknobx"],(function(a,b,c,d,e,f,g){f=b("cr:734")?b("cr:734")(b("cr:1294246").createPortal):b("cr:1294246").createPortal;var h=d("ReactInternalLogger").wrapWithLog(d("ReactInternalLogger").Module.ReactDOMLegacy,d("ReactInternalLogger").Method.FindDOMNode,b("cr:1294246").findDOMNode);function a(a,e,f){if(c("gkx")("1941"))return d("ReactDOMCompatibilityLayer").render(a,e);if(typeof f==="function")throw c("err")("ReactDOM.render callback is no longer supported.");d("ReactInternalLogger").log(d("ReactInternalLogger").Module.ReactDOMLegacy,d("ReactInternalLogger").Method.Render,d("ReactInternalLogger").maybeGetComponentName(d("ReactInternalLogger").Method.Render,a),String(f));b("cr:3569")==null?void 0:b("cr:3569").log(f);return b("cr:1294246").render(a,e)}function e(a,e){if(c("justknobx")._("344")&&d("ReactDOMCompatibilityLayer").unmountComponentAtNode(a))return!0;d("ReactInternalLogger").log(d("ReactInternalLogger").Module.ReactDOMLegacy,d("ReactInternalLogger").Method.UnmountComponentAtNode,null,e);return b("cr:1294246").unmountComponentAtNode(a)}g.createPortal=f;g.findDOMNode=h;g.flushSync=b("cr:1294246").flushSync;g.render=a;g.unmountComponentAtNode=e;g.unstable_batchedUpdates=b("cr:1294246").unstable_batchedUpdates;g.unstable_renderSubtreeIntoContainer=b("cr:1294246").unstable_renderSubtreeIntoContainer;g.version=b("cr:1294246").version;g.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=b("cr:1294246").__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED}),98);
__d("ReactFeatureFlags",["gkx","qex"],(function(a,b,c,d,e,f,g){"use strict";a=!1;b=!0;d=!1;e=!1;f=!1;var h=!0,i=c("gkx")("6361"),j=c("gkx")("1401060"),k=c("gkx")("1778302"),l=c("gkx")("2257"),m=c("gkx")("8003"),n=c("gkx")("201"),o=!c("gkx")("7518"),p=c("qex")._("644")===!0,q=c("gkx")("1596063"),r=c("gkx")("1840809");c=c("gkx")("6862");var s=!1;g.disableInputAttributeSyncing=a;g.enableSyncDefaultUpdates=b;g.enableDeferRootSchedulingToMicrotask=d;g.enableAsyncActions=e;g.alwaysThrottleRetries=f;g.enableDO_NOT_USE_disableStrictPassiveEffect=h;g.enableTrustedTypesIntegration=i;g.enableLegacyFBSupport=j;g.enableUseRefAccessWarning=k;g.enableUnifiedSyncLane=l;g.disableIEWorkarounds=m;g.enableCustomElementPropertySupport=n;g.diffInCommitPhase=o;g.enableLazyContextPropagation=p;g.enableSchedulingProfiler=q;g.enableProfilerNestedUpdateScheduledHook=r;g.enableTransitionTracing=c;g.disableSchedulerTimeoutInWorkLoop=s}),98);
__d("ReactLegacyShim_DEPRECATED",["ReactDOMCompatibilityLayer"],(function(a,b,c,d,e,f,g){function a(a,b){return d("ReactDOMCompatibilityLayer").render(a,b)}g.render=a}),98);
__d("React-prod.classic",["ReactFeatureFlags"],(function(a,b,c,d,e,f){"use strict";var g=Symbol["for"]("react.element"),h=Symbol["for"]("react.portal"),i=Symbol["for"]("react.fragment"),j=Symbol["for"]("react.strict_mode"),k=Symbol["for"]("react.profiler"),l=Symbol["for"]("react.provider"),m=Symbol["for"]("react.context"),n=Symbol["for"]("react.server_context"),o=Symbol["for"]("react.forward_ref"),p=Symbol["for"]("react.suspense"),q=Symbol["for"]("react.suspense_list"),r=Symbol["for"]("react.memo"),s=Symbol["for"]("react.lazy"),t=Symbol["for"]("react.scope"),u=Symbol["for"]("react.debug_trace_mode"),v=Symbol["for"]("react.offscreen"),w=Symbol["for"]("react.legacy_hidden"),x=Symbol["for"]("react.cache"),y=Symbol["for"]("react.tracing_marker"),z=Symbol["for"]("react.default_value"),A=typeof Symbol==="function"?Symbol.iterator:"@@iterator";function B(a){if(null===a||"object"!==typeof a)return null;a=A&&a[A]||a["@@iterator"];return"function"===typeof a?a:null}var C={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},D=Object.assign,E={};function a(a,b,c){this.props=a,this.context=b,this.refs=E,this.updater=c||C}a.prototype.isReactComponent={};a.prototype.setState=function(a,b){if("object"!==typeof a&&"function"!==typeof a&&null!=a)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,a,b,"setState")};a.prototype.forceUpdate=function(a){this.updater.enqueueForceUpdate(this,a,"forceUpdate")};function c(){}c.prototype=a.prototype;function d(a,b,c){this.props=a,this.context=b,this.refs=E,this.updater=c||C}c=d.prototype=new c();c.constructor=d;D(c,a.prototype);c.isPureReactComponent=!0;var F=Array.isArray,G=b("ReactFeatureFlags").enableTransitionTracing,H=Object.prototype.hasOwnProperty,I={current:null},J={key:!0,ref:!0,__self:!0,__source:!0};function K(a,b,c){var d,e={},f=null,h=null;if(null!=b)for(d in void 0!==b.ref&&(h=b.ref),void 0!==b.key&&(f=""+b.key),b)H.call(b,d)&&!Object.prototype.hasOwnProperty.call(J,d)&&(e[d]=b[d]);var i=arguments.length-2;if(1===i)e.children=c;else if(1<i){for(var j=Array(i),k=0;k<i;k++)j[k]=arguments[k+2];e.children=j}if(a&&a.defaultProps)for(d in i=a.defaultProps,i)void 0===e[d]&&(e[d]=i[d]);return{$$typeof:g,type:a,key:f,ref:h,props:e,_owner:I.current}}function L(a,b){return{$$typeof:g,type:a.type,key:b,ref:a.ref,props:a.props,_owner:a._owner}}function M(a){return"object"===typeof a&&null!==a&&a.$$typeof===g}function N(a){var b={"=":"=0",":":"=2"};return"$"+a.replace(/[=:]/g,function(a){return b[a]})}var O=/\/+/g;function P(a,b){return"object"===typeof a&&null!==a&&null!=a.key?N(""+a.key):b.toString(36)}function Q(a,b,c,d,e){var f=typeof a;("undefined"===f||"boolean"===f)&&(a=null);var i=!1;if(null===a)i=!0;else switch(f){case"string":case"number":i=!0;break;case"object":switch(a.$$typeof){case g:case h:i=!0}}if(i)return i=a,e=e(i),a=""===d?"."+P(i,0):d,F(e)?(c="",null!=a&&(c=a.replace(O,"$&/")+"/"),Q(e,b,c,"",function(a){return a})):null!=e&&(M(e)&&(e=L(e,c+(!e.key||i&&i.key===e.key?"":(""+e.key).replace(O,"$&/")+"/")+a)),b.push(e)),1;i=0;d=""===d?".":d+":";if(F(a))for(var j=0;j<a.length;j++){f=a[j];var k=d+P(f,j);i+=Q(f,b,c,k,e)}else if(k=B(a),"function"===typeof k)for(a=k.call(a),j=0;!(f=a.next()).done;)f=f.value,k=d+P(f,j++),i+=Q(f,b,c,k,e);else if("object"===f)throw b=String(a),Error("Objects are not valid as a React child (found: "+("[object Object]"===b?"object with keys {"+Object.keys(a).join(", ")+"}":b)+"). If you meant to render a collection of children, use an array instead.");return i}function R(a,b,c){if(null==a)return a;var d=[],e=0;Q(a,d,"","",function(a){return b.call(c,a,e++)});return d}function S(a){if(-1===a._status){var b=a._result;b=b();b.then(function(b){(0===a._status||-1===a._status)&&(a._status=1,a._result=b)},function(b){(0===a._status||-1===a._status)&&(a._status=2,a._result=b)});-1===a._status&&(a._status=0,a._result=b)}if(1===a._status)return a._result["default"];throw a._result}var T={current:null};function U(){return new WeakMap()}function V(){return{s:0,v:void 0,o:null,p:null}}var W={current:null},X={transition:null};c={ReactCurrentDispatcher:W,ReactCurrentCache:T,ReactCurrentBatchConfig:X,ReactCurrentOwner:I,ContextRegistry:{}};var Y=c.ContextRegistry,Z=c.ReactCurrentOwner,$={key:!0,ref:!0,__self:!0,__source:!0};function e(a,b,c){var d={},e=null,f=null;void 0!==c&&(e=""+c);void 0!==b.key&&(e=""+b.key);void 0!==b.ref&&(f=b.ref);for(c in b)H.call(b,c)&&!Object.prototype.hasOwnProperty.call($,c)&&(d[c]=b[c]);if(a&&a.defaultProps)for(c in b=a.defaultProps,b)void 0===d[c]&&(d[c]=b[c]);return{$$typeof:g,type:a,key:e,ref:f,props:d,_owner:Z.current}}f.Children={map:R,forEach:function(a,b,c){R(a,function(){b.apply(this,arguments)},c)},count:function(a){var b=0;R(a,function(){b++});return b},toArray:function(a){return R(a,function(a){return a})||[]},only:function(a){if(!M(a))throw Error("React.Children.only expected to receive a single React element child.");return a}};f.Component=a;f.Fragment=i;f.Profiler=k;f.PureComponent=d;f.StrictMode=j;f.Suspense=p;f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=c;f.cache=function(a){return function(){var b=T.current;if(!b)return a.apply(null,arguments);var c=b.getCacheForType(U);b=c.get(a);void 0===b&&(b=V(),c.set(a,b));c=0;for(var d=arguments.length;c<d;c++){var e=arguments[c];if("function"===typeof e||"object"===typeof e&&null!==e){var f=b.o;null===f&&(b.o=f=new WeakMap());b=f.get(e);void 0===b&&(b=V(),f.set(e,b))}else f=b.p,null===f&&(b.p=f=new Map()),b=f.get(e),void 0===b&&(b=V(),f.set(e,b))}if(1===b.s)return b.v;if(2===b.s)throw b.v;try{var g=a.apply(null,arguments);c=b;c.s=1;return c.v=g}catch(a){throw g=b,g.s=2,g.v=a,a}}};f.cloneElement=function(a,b,c){if(null===a||void 0===a)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+a+".");var d=D({},a.props),e=a.key,f=a.ref,h=a._owner;if(null!=b){void 0!==b.ref&&(f=b.ref,h=I.current);void 0!==b.key&&(e=""+b.key);if(a.type&&a.type.defaultProps)var i=a.type.defaultProps;for(j in b)H.call(b,j)&&!Object.prototype.hasOwnProperty.call(J,j)&&(d[j]=void 0===b[j]&&void 0!==i?i[j]:b[j])}var j=arguments.length-2;if(1===j)d.children=c;else if(1<j){i=Array(j);for(var k=0;k<j;k++)i[k]=arguments[k+2];d.children=i}return{$$typeof:g,type:a.type,key:e,ref:f,props:d,_owner:h}};f.createContext=function(a){a={$$typeof:m,_currentValue:a,_currentValue2:a,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null};a.Provider={$$typeof:l,_context:a};return a.Consumer=a};f.createElement=K;f.createFactory=function(a){var b=K.bind(null,a);b.type=a;return b};f.createRef=function(){return{current:null}};f.createServerContext=function(a,b){var c=!0;if(!Y[a]){c=!1;var d={$$typeof:n,_currentValue:b,_currentValue2:b,_defaultValue:b,_threadCount:0,Provider:null,Consumer:null,_globalName:a};d.Provider={$$typeof:l,_context:d};Y[a]=d}d=Y[a];if(d._defaultValue===z)d._defaultValue=b,d._currentValue===z&&(d._currentValue=b),d._currentValue2===z&&(d._currentValue2=b);else if(c)throw Error("ServerContext: "+a+" already defined");return d};f.experimental_useEffectEvent=function(a){return W.current.useEffectEvent(a)};f.experimental_useOptimistic=function(a,b){return W.current.useOptimistic(a,b)};f.forwardRef=function(a){return{$$typeof:o,render:a}};f.isValidElement=M;f.jsx=e;f.jsxDEV=void 0;f.jsxs=e;f.lazy=function(a){return{$$typeof:s,_payload:{_status:-1,_result:a},_init:S}};f.memo=function(a,b){return{$$typeof:r,type:a,compare:void 0===b?null:b}};f.startTransition=function(a,b){var c=X.transition;X.transition={};G&&void 0!==b&&void 0!==b.name&&(X.transition.name=b.name,X.transition.startTime=-1);try{a()}finally{X.transition=c}};f.unstable_Cache=x;f.unstable_DebugTracingMode=u;f.unstable_LegacyHidden=w;f.unstable_Offscreen=v;f.unstable_Scope=t;f.unstable_SuspenseList=q;f.unstable_TracingMarker=y;f.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};f.unstable_getCacheForType=function(a){var b=T.current;return b?b.getCacheForType(a):a()};f.unstable_getCacheSignal=function(){var a=T.current;return a?a.getCacheSignal():(a=new AbortController(),a.abort(Error("This CacheSignal was requested outside React which means that it is immediately aborted.")),a.signal)};f.unstable_useCacheRefresh=function(){return W.current.useCacheRefresh()};f.unstable_useMemoCache=function(a){return W.current.useMemoCache(a)};f.use=function(a){return W.current.use(a)};f.useCallback=function(a,b){return W.current.useCallback(a,b)};f.useContext=function(a){return W.current.useContext(a)};f.useDebugValue=function(){};f.useDeferredValue=function(a){return W.current.useDeferredValue(a)};f.useEffect=function(a,b){return W.current.useEffect(a,b)};f.useId=function(){return W.current.useId()};f.useImperativeHandle=function(a,b,c){return W.current.useImperativeHandle(a,b,c)};f.useInsertionEffect=function(a,b){return W.current.useInsertionEffect(a,b)};f.useLayoutEffect=function(a,b){return W.current.useLayoutEffect(a,b)};f.useMemo=function(a,b){return W.current.useMemo(a,b)};f.useReducer=function(a,b,c){return W.current.useReducer(a,b,c)};f.useRef=function(a){return W.current.useRef(a)};f.useState=function(a){return W.current.useState(a)};f.useSyncExternalStore=function(a,b,c){return W.current.useSyncExternalStore(a,b,c)};f.useTransition=function(){return W.current.useTransition()};f.version="18.3.0-www-classic-6a82fa33"}),null);
__d("ReactBrowserEventEmitter_DO_NOT_USE",["ReactDOM"],(function(a,b,c,d,e,f){"use strict";a=b("ReactDOM").__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;e.exports=a.ReactBrowserEventEmitter}),null);
__d("SubscriptionsHandler",["invariant"],(function(a,b,c,d,e,f,g,h){"use strict";function i(a){return a.remove||a.reset||a.unsubscribe||a.cancel||a.dispose}function j(a){i(a).call(a)}a=function(){function a(){this.$1=[]}var b=a.prototype;b.addSubscriptions=function(){for(var a=arguments.length,b=new Array(a),c=0;c<a;c++)b[c]=arguments[c];b.every(i)||h(0,3659);this.$1!=null?this.$1=this.$1.concat(b):b.forEach(j)};b.engage=function(){this.$1==null&&(this.$1=[])};b.release=function(){this.$1!=null&&(this.$1.forEach(j),this.$1=null)};b.releaseOne=function(a){var b=this.$1;if(b==null)return;var c=b.indexOf(a);c!==-1&&(j(a),b.splice(c,1),b.length===0&&(this.$1=null))};return a}();g["default"]=a}),98);
__d("HiddenSubtreePassiveContext",["react"],(function(a,b,c,d,e,f,g){"use strict";a=d("react");b=a.createContext({getCurrentState:function(){return{backgrounded:!1,hidden:!1,hiddenOrBackgrounded:!1,hiddenOrBackgrounded_FIXME:!1}},subscribeToChanges:function(a){return{remove:function(){}}}});g["default"]=b}),98);
__d("useUnsafeRef_DEPRECATED",["react"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react").useMemo;function a(a){return h(function(){return{current:a}},[])}g["default"]=a}),98);