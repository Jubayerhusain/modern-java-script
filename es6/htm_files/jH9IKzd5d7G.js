;/*FB_PKG_DELIM*/

__d("useMaybeNUX_nux.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"useMaybeNUX_nux",selections:[{alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"nux_id",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"should_show",storageKey:null}],type:"DefaultNUX",abstractKey:null};e.exports=a}),null);
__d("CometEntityHeaderStickyBottomRow_entity.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"CometEntityHeaderStickyBottomRow_entity",selections:[{alias:null,args:null,kind:"ScalarField",name:"name",storageKey:null},{args:null,kind:"FragmentSpread",name:"useBaseEntityHeaderProfile_profile"}],type:"Profile",abstractKey:"__isProfile"};e.exports=a}),null);
__d("ProfileCometCreateAvatarCoverPhotoDialogQuery_facebookRelayOperation",[],(function(a,b,c,d,e,f){e.exports="6437296436292595"}),null);
__d("ProfileCometCreateAvatarCoverPhotoDialogQuery$Parameters",["ProfileCometCreateAvatarCoverPhotoDialogQuery_facebookRelayOperation"],(function(a,b,c,d,e,f){"use strict";a={kind:"PreloadableConcreteRequest",params:{id:b("ProfileCometCreateAvatarCoverPhotoDialogQuery_facebookRelayOperation"),metadata:{},name:"ProfileCometCreateAvatarCoverPhotoDialogQuery",operationKind:"query",text:null}};e.exports=a}),null);
__d("ProfileCometProfilePictureEditDialogQuery_facebookRelayOperation",[],(function(a,b,c,d,e,f){e.exports="6538389469586494"}),null);
__d("ProfileCometProfilePictureEditDialogQuery$Parameters",["ProfileCometProfilePictureEditDialogQuery_facebookRelayOperation"],(function(a,b,c,d,e,f){"use strict";a={kind:"PreloadableConcreteRequest",params:{id:b("ProfileCometProfilePictureEditDialogQuery_facebookRelayOperation"),metadata:{},name:"ProfileCometProfilePictureEditDialogQuery",operationKind:"query",text:null}};e.exports=a}),null);
__d("useProfileCometStoryStatus_user.graphql",[],(function(a,b,c,d,e,f){"use strict";a=function(){var a={alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null};return{argumentDefinitions:[],kind:"Fragment",metadata:null,name:"useProfileCometStoryStatus_user",selections:[{alias:null,args:[{kind:"Literal",name:"first",value:1}],concreteType:"DirectInboxBroadcastBucketConnection",kind:"LinkedField",name:"story_bucket",plural:!1,selections:[{alias:null,args:null,concreteType:"DirectMessageThreadBucket",kind:"LinkedField",name:"nodes",plural:!0,selections:[{alias:null,args:null,kind:"ScalarField",name:"should_show_close_friend_badge",storageKey:null},a,{alias:null,args:null,concreteType:"Story",kind:"LinkedField",name:"first_story_to_show",plural:!1,selections:[a,{alias:null,args:null,concreteType:"StoryCardSeenState",kind:"LinkedField",name:"story_card_seen_state",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"is_seen_by_viewer",storageKey:null}],storageKey:null}],storageKey:null}],storageKey:null}],storageKey:"story_bucket(first:1)"}],type:"User",abstractKey:null}}();e.exports=a}),null);
__d("useMaybeNUX",["CometRelay","emptyFunction","react","useMaybeNUX_nux.graphql","useNUX"],(function(a,b,c,d,e,f,g){"use strict";var h;e=d("react");var i=e.useCallback,j=e.useEffect;function a(a){var e=d("CometRelay").useRelayEnvironment();a=d("CometRelay").useFragment(h!==void 0?h:h=b("useMaybeNUX_nux.graphql"),a);var f=a==null?void 0:a.id,g=a==null?void 0:a.nux_id,k=c("useNUX")(g,Boolean(a==null?void 0:a.should_show)),l=k[0],m=k[1],n=l&&(a==null?void 0:a.should_show)===!0&&g!=null;k=i(function(){m==null?void 0:m.onDismiss();if(f==null)return;d("CometRelay").commitLocalUpdate(e,function(a){a=a.get(f);a==null?void 0:a.setValue(!1,"should_show")})},[m,f,e]);j(function(){g!=null&&n&&(m==null?void 0:m.onVisible())},[g,n,m]);return a!=null?[n,k]:[null,c("emptyFunction")]}g["default"]=a}),98);
__d("getCometPrefersReducedMotion",["getPrefersReducedMotion"],(function(a,b,c,d,e,f,g){"use strict";g["default"]=c("getPrefersReducedMotion")}),98);
__d("GeometryInterfaces",[],(function(a,b,c,d,e,f){"use strict";a=window.DOMPointReadOnly;b=window.DOMPoint;c=window.DOMRectReadOnly;d=window.DOMRect;e=window.DOMQuad;var g=window.DOMMatrix,h=window.DOMMatrixReadOnly;f.DOMPointReadOnly=a;f.DOMPoint=b;f.DOMRectReadOnly=c;f.DOMRect=d;f.DOMQuad=e;f.DOMMatrix=g;f.DOMMatrixReadOnly=h}),66);
__d("KeyframeSpringConifg",[],(function(a,b,c,d,e,f){"use strict";function g(a){return(a-30)*3.62+194}function h(a){return(a-8)*3+25}function a(a,b){return{damping:h(b),stiffness:g(a)}}function i(a,b,c){return(a-b)/(c-b)}function j(a,b,c){return b+a*(c-b)}function k(a,b,c){return a*c+(1-a)*b}function l(a,b,c){return k(2*a-a*a,b,c)}function m(a){return 7e-4*Math.pow(a,3)-.031*Math.pow(a,2)+.64*a+1.28}function n(a){return 44e-6*Math.pow(a,3)-.006*Math.pow(a,2)+.36*a+2}function o(a){return 45e-8*Math.pow(a,3)-332e-6*Math.pow(a,2)+.1078*a+5.84}function p(a){if(a<=18)return m(a);else if(a>18&&a<=44)return n(a);else return o(a)}function b(a,b){a=j(i(a/1.7,0,20),0,.8);b=i(b/1.7,0,20);b=j(b,.5,200);a=l(a,p(b),.01);return{damping:h(a),stiffness:g(b)}}f.fromOrigamiTensionAndFriction=a;f.fromBouncinessAndSpeed=b}),66);
__d("KeyframeSpringConstants",[],(function(a,b,c,d,e,f){"use strict";a=16.667;f.defaultTimestepCoefficient=a}),66);
__d("KeyframeSpring",["KeyframeSpringConifg","KeyframeSpringConstants","unrecoverableViolation"],(function(a,b,c,d,e,f,g){"use strict";a=function(){function a(a){var b;this.$2=(b=a.overshootClamping)!=null?b:!1;this.$3=(b=a.restDisplacementThreshold)!=null?b:.001;this.$4=(b=a.restSpeedThreshold)!=null?b:.001;this.$11=this.$5=(b=a.initialVelocity)!=null?b:0;this.$1=a.initialValue;this.$12=(b=a.timestepCoefficient)!=null?b:d("KeyframeSpringConstants").defaultTimestepCoefficient;if(a.stiffness!==void 0||a.damping!==void 0||a.mass!==void 0){if(a.bounciness!==void 0||a.speed!==void 0||a.tension!==void 0||a.friction!==void 0)throw c("unrecoverableViolation")("You can define one of bounciness/speed, tension/friction, or stiffness/damping/mass, but not more than one","comet_ui");this.$8=(b=a.stiffness)!=null?b:100;this.$9=(b=a.damping)!=null?b:10;this.$10=(b=a.mass)!=null?b:1}else if(a.bounciness!==void 0||a.speed!==void 0){if(a.tension!==void 0||a.friction!==void 0||a.stiffness!==void 0||a.damping!==void 0||a.mass!==void 0)throw c("unrecoverableViolation")("You can define one of bounciness/speed, tension/friction, or stiffness/damping/mass, but not more than one","comet_ui");b=d("KeyframeSpringConifg").fromBouncinessAndSpeed((b=a.bounciness)!=null?b:8,(b=a.speed)!=null?b:12);this.$8=b.stiffness;this.$9=b.damping;this.$10=1}else{a=d("KeyframeSpringConifg").fromOrigamiTensionAndFriction((b=a.tension)!=null?b:40,(b=a.friction)!=null?b:7);this.$8=a.stiffness;this.$9=a.damping;this.$10=1}this.$6=-1;this.$7=-1;this.$13=-1;this.$14=-1;this.$15=-1;this.$16=-1}var b=a.prototype;b.nextFrame=function(a,b){var c=(a-this.$14)/1e3;this.$15+=c;c=this.$9;var d=this.$10,e=this.$8,f=-this.$11;c=c/(2*Math.sqrt(e*d));e=Math.sqrt(e/d);d=e*Math.sqrt(1-c*c);var g=b-this.$6,h=0,i=this.$15;if(c<1){var j=Math.exp(-c*e*i);h=b-j*((f+c*e*g)/d*Math.sin(d*i)+g*Math.cos(d*i));j=c*e*j*(Math.sin(d*i)*(f+c*e*g)/d+g*Math.cos(d*i))-j*(Math.cos(d*i)*(f+c*e*g)-d*g*Math.sin(d*i))}else{c=Math.exp(-e*i);h=b-c*(g+(f+e*g)*i);j=c*(f*(i*e-1)+i*g*(e*e))}this.$14=a;this.$7=h;this.$5=j;d=!1;c=!1;this.$2&&this.$8!==0&&(this.$6<b?c=h>b:c=h<b);f=Math.abs(j)<=this.$4;i=!0;this.$8!==0&&(i=Math.abs(b-h)<=this.$3);(c||f&&i)&&(this.$8!==0&&(this.$7=b,this.$5=0,h=b),d=!0);return[h,d]};b.generate=function(a){this.$6=this.$7=this.$1;this.$14=0;this.$15=0;var b=0,c=!1,d=[];while(!c){var e=this.nextFrame(b,a),f=e[0];e=e[1];d.push(f);e||(b+=this.$12);c=e}f={duration:b};return{keyframes:d,options:f}};return a}();g["default"]=a}),98);
__d("createInterpolator",["$InternalEnum","unrecoverableViolation"],(function(a,b,c,d,e,f,g){"use strict";var h=b("$InternalEnum").Mirrored(["Extend","Identity","Clamp"]),i=function(a){return a};function j(a){if(a.length<2)throw c("unrecoverableViolation")("inputRange must have at least 2 elements","comet_ui");for(var b=1;b<a.length;++b)if(a[b]<a[b-1])throw c("unrecoverableViolation")("inputRange must be monotonically increasing "+String(a),"comet_ui")}function k(a,b){if(b.length<2)throw c("unrecoverableViolation")(a+" must have at least 2 elements","comet_ui");if(b.length===2&&b[0]===-Infinity&&b[1]===Infinity)throw c("unrecoverableViolation")(a+"cannot be -infinity;+infinity ["+String(b)+"]","comet_ui")}function l(a,b){for(var c=1;c<b.length-1;++c)if(b[c]>=a)return c-1;return b.length-2}function m(a,b,c,d,e,f,g,i){var j=a;if(j<b)if(g===h.Identity)return j;else g===h.Clamp&&(j=b);if(j>c)if(i===h.Identity)return j;else i===h.Clamp&&(j=c);if(d===e)return d;if(b===c)return a<=b?d:e;b===-Infinity?j=-j:c===Infinity?j-=b:j=(j-b)/(c-b);j=f(j);d===-Infinity?j=-j:e===Infinity?j+=d:j=j*(e-d)+d;return j}function a(a){var b=a.outputRange;k("outputRange",b);var d=a.inputRange;k("inputRange",d);j(d);if(d.length!==b.length)throw c("unrecoverableViolation")("inputRange ("+d.length+") and outputRange ("+b.length+") must have the same length","comet_ui");var e=a.easing||i,f=h.Extend;a.extrapolateLeft!==void 0?f=a.extrapolateLeft:a.extrapolate!==void 0&&(f=a.extrapolate);var g=h.Extend;a.extrapolateRight!==void 0?g=a.extrapolateRight:a.extrapolate!==void 0&&(g=a.extrapolate);return function(a){if(typeof a!=="number")throw c("unrecoverableViolation")("Cannot interpolate an input which is not a number","comet_ui");var h=l(a,d);return m(a,d[h],d[h+1],b[h],b[h+1],e,f,g)}}g.Extrapolate=h;g.createInterpolator=a}),98);
__d("CometEntityStickyHeader.react",["BaseRow.react","BaseRowItem.react","BaseStickyHeader.react","CometEntityHeaderResponsiveRow.react","CometEntityHeaderStickyBar.react","react","useCometEntityStickyHeaderHeadline","useCometEntityStickyHeaderResizeObserver"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react"),i=d("react").useRef,j={headerHiddenByDefault:{display:"x78zum5",flexDirection:"xdt5ytf",height:"xqtp20y",justifyContent:"x13a6bvl",$$css:!0},headerHiddenByDefaultNotSticky:{pointerEvents:"x47corl",visibility:"xlshs6z",zIndex:"x8knxv4",$$css:!0},headerHiddenByDefaultSticky:{position:"xixxii4",width:"xh8yej3",$$css:!0},row:{backgroundColor:"x1ve1bff",boxShadow:"xvo6coq",flexShrink:"x2lah0s",$$css:!0}};function a(a){var b=a.headline,d=a.headlineLinkProps,e=a.headlineOnPress,f=a.hiddenByDefault;f=f===void 0?!1:f;var g=a.onStickyChange,k=a.paddingHorizontal,l=a.primaryContent,m=a.profilePhoto,n=a.profilePhotoShape,o=a.secondaryContent,p=a.topOffset;a=a.url;var q=i();b=c("useCometEntityStickyHeaderHeadline")({headline:b,linkProps:d,onPress:e,onStickyChange:function(a){q.current!=null&&q.current.setSticky(a),g&&g(a)},paddingHorizontal:k,profilePhoto:m,profilePhotoShape:n,url:a});d=b.headline;e=b.isSticky;k=b.onStickyChange;m=c("useCometEntityStickyHeaderResizeObserver")({topOffset:p});n=m.resizeObserverRef;a=m.stickyHeaderRef;b=m.topOffset;return h.jsx(c("BaseStickyHeader.react"),{onStickyChange:k,ref:a,topOffset:b,xstyle:[f&&j.headerHiddenByDefault,f&&(e?j.headerHiddenByDefaultSticky:j.headerHiddenByDefaultNotSticky)],children:h.jsx(c("CometEntityHeaderResponsiveRow.react"),{ref:n,xstyle:j.row,children:h.jsxs(c("BaseRow.react"),{verticalAlign:"center",children:[h.jsx(c("BaseRowItem.react"),{expanding:!0,children:h.jsx(c("CometEntityHeaderStickyBar.react"),{primaryContent:l,ref:q,stickyContent:h.jsx(c("BaseRow.react"),{align:"start",children:h.jsx(c("BaseRowItem.react"),{children:d})})})}),o!=null&&h.jsx(c("BaseRowItem.react"),{verticalAlign:"center",children:typeof o==="function"?o({sticky:e}):o})]})})})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("CometEntityHeaderStickyBottomRow.react",["CometEntityHeaderStickyBottomRow_entity.graphql","CometEntityStickyHeader.react","CometRelay","react","recoverableViolation","useBaseEntityHeaderProfile"],(function(a,b,c,d,e,f,g){"use strict";var h,i=d("react");function a(a){var e=a.entity,f=a.headline,g=a.paddingHorizontal;a=babelHelpers.objectWithoutPropertiesLoose(a,["entity","headline","paddingHorizontal"]);e=d("CometRelay").useFragment(h!==void 0?h:h=b("CometEntityHeaderStickyBottomRow_entity.graphql"),e);var j=c("useBaseEntityHeaderProfile")(e);f=(f=f)!=null?f:e.name;if(f==null)return c("recoverableViolation")("Name of the entity cannot be null","comet_ui");e=babelHelpers["extends"]({},a,j,{headline:f,paddingHorizontal:g});return i.jsx(c("CometEntityStickyHeader.react"),babelHelpers["extends"]({},e))}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("ProfileCometCoverPhotoUploaderContainer.react",["CometFileSelector.react","ProfileCometCoverPhotoEditContext","react"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react");b=d("react");var i=b.useCallback,j=b.useContext;function a(a){var b=a.children;a=j(c("ProfileCometCoverPhotoEditContext"));var d=a.dispatch;a=i(function(a){if(!a.length)return;d({file:a[0],type:"UPLOAD_STARTED"})},[d]);return h.jsx(c("CometFileSelector.react"),{accept:["image/*","image/heif","image/heic"],onFilesSelected:a,children:function(a){return b(a)}})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("ProfileCometAvatarCoverPhotoGating",["gkx"],(function(a,b,c,d,e,f,g){"use strict";function a(){var a;return(a=c("gkx")("7388"))!=null?a:!1}g.canCreateAvatarCoverPhoto=a}),98);
__d("CreateAvatarCoverPhotoEntryPoint",["$InternalEnum"],(function(a,b,c,d,e,f){a=b("$InternalEnum")({EDITOR:"editor",DIALOG:"dialog"});c=a;f["default"]=c}),66);
__d("ProfileCometCreateAvatarCoverPhotoDialog.entrypoint",["JSResourceForInteraction","ProfileCometCreateAvatarCoverPhotoDialogQuery$Parameters"],(function(a,b,c,d,e,f,g){"use strict";a={getPreloadProps:function(a){var b="5587317814625891",d="646230063154098";a=a.routeProps!=null&&a.routeProps.entryPoint!=null?a.routeProps.entryPoint:(a=a.entryPoint)!=null?a:"dialog";return{extraProps:{backgroundCategoryID:b,entryPoint:a,poseCategoryID:d},queries:{queryReference:{parameters:c("ProfileCometCreateAvatarCoverPhotoDialogQuery$Parameters"),variables:{backgroundCategoryID:b,choicesToLoad:12,poseCategoryID:d}}}}},root:c("JSResourceForInteraction")("ProfileCometCreateAvatarCoverPhotoDialog.react").__setRef("ProfileCometCreateAvatarCoverPhotoDialog.entrypoint")};g["default"]=a}),98);
__d("ProfileCometCreateAvatarCoverPhotoStrings",["fbt"],(function(a,b,c,d,e,f,g,h){"use strict";a=h._("__JHASH__os8hAO6fE4X__JHASH__");b=h._("__JHASH__Q4Mv6CxKnWt__JHASH__");c=h._("__JHASH__9lDsMTDMFMc__JHASH__");d=h._("__JHASH__IY7iRYFIve0__JHASH__");e=h._("__JHASH__Z1RI2dFeqNf__JHASH__");f=h._("__JHASH__NPbBpSNkwAq__JHASH__");h=h._("__JHASH__dJ7XJUc03zw__JHASH__");g.TITLE=a;g.PRIVACY_NOTICE=b;g.SHARE_TO_FEED=c;g.BUTTON_CTA=d;g.CREATE_AVATAR_COVER_PHOTO=e;g.PREVIEW=f;g.CREATE_WITH_AVATAR=h}),98);
__d("ProfileCometProfilePictureEditDialog.entrypoint",["JSResourceForInteraction","ProfileCometProfilePictureEditDialogQuery$Parameters","WebPixelRatio"],(function(a,b,c,d,e,f,g){"use strict";a={getPreloadProps:function(){return{queries:{queryReference:{parameters:c("ProfileCometProfilePictureEditDialogQuery$Parameters"),variables:{scale:d("WebPixelRatio").get()}}}}},root:c("JSResourceForInteraction")("ProfileCometProfilePictureEditDialog.react").__setRef("ProfileCometProfilePictureEditDialog.entrypoint")};g["default"]=a}),98);
__d("ProfileCometProfilePictureEditStrings",["fbt"],(function(a,b,c,d,e,f,g,h){"use strict";a=h._("__JHASH__f092YVx-E7c__JHASH__");b=h._("__JHASH__P6eJPzRVAiu__JHASH__");c=h._("__JHASH__h7vkVE9Of0c__JHASH__");d=h._("__JHASH__kJGt6zFfsc7__JHASH__");e=h._("__JHASH__MKZqr9SJjHk__JHASH__");f=h._("__JHASH__sX7c9Q3pReC__JHASH__");var i=h._("__JHASH__A2WJVxziJwb__JHASH__"),j=h._("__JHASH__-GGz4-Sz_X0__JHASH__"),k=h._("__JHASH__Cg56o9MFo5G__JHASH__"),l=h._("__JHASH__4pkaXC-hUQy__JHASH__"),m=h._("__JHASH__e_wRS6iR5k1__JHASH__"),n=h._("__JHASH__ifzVxzDzFMH__JHASH__"),o=h._("__JHASH__7LgvlHYsLgI__JHASH__"),p=h._("__JHASH__-ATbEXeP42v__JHASH__"),q=h._("__JHASH__SsF0HmVDigV__JHASH__"),r=h._("__JHASH__djcvbULlMfu__JHASH__"),s=h._("__JHASH__mBogQEfebl___JHASH__"),t=h._("__JHASH__3-2U57XKHo9__JHASH__"),u=h._("__JHASH__O0eAlion_nr__JHASH__"),v=h._("__JHASH__vz93c9DP0fs__JHASH__"),w=h._("__JHASH__X1FYhpPEzu7__JHASH__"),x=h._("__JHASH__gZVyUo9V48T__JHASH__"),y=h._("__JHASH__Ajy2VInRnh-__JHASH__"),z=h._("__JHASH__NgSwU7fO_-o__JHASH__"),A=h._("__JHASH__SFfNiBtlzcf__JHASH__"),B=h._("__JHASH__iwnSu7v6JaV__JHASH__"),C=h._("__JHASH__sWR9Yh3K3s5__JHASH__"),D=h._("__JHASH__eOI4VVkmQT-__JHASH__"),E=h._("__JHASH__VOlkKZEqbV___JHASH__"),F=h._("__JHASH__KU_eN6Th-EX__JHASH__"),G=h._("__JHASH__YCVM1KcewRL__JHASH__"),H=h._("__JHASH__q8hJzcivYEl__JHASH__"),I=h._("__JHASH__yUYlrKtuNd5__JHASH__"),J=h._("__JHASH__inYkkvZUFyj__JHASH__"),K=h._("__JHASH__L3f2yhPzJcz__JHASH__"),L=h._("__JHASH__A3utpXDnchr__JHASH__"),M=h._("__JHASH__ze6NXOWlR_V__JHASH__"),N=h._("__JHASH__Zzy2CopcHFq__JHASH__"),O=h._("__JHASH__tik-iCIwpS8__JHASH__"),P=h._("__JHASH__LeiUjurOv0b__JHASH__"),Q=h._("__JHASH__B1zHMtkMBt8__JHASH__"),R=h._("__JHASH__Ix2z7FsM1EY__JHASH__"),S=h._("__JHASH__oa6-mBI9-Ox__JHASH__"),T=h._("__JHASH__TB4M9F7ihkI__JHASH__");h=h._("__JHASH__nWjyNP7YVWX__JHASH__");g.ADD_DESCRIPTION=a;g.ADD_FRAME=b;g.ADD_FRAME_TO_PROFILE=c;g.ADD_PHOTO=d;g.AVATAR_PRIVACY_DISCLAIMER=e;g.CANCEL=f;g.CHANGE_EXPIRATION_TIME=i;g.CHANGE_PHOTO=j;g.CHOOSE_A_FRAME=k;g.CREATE_AVATAR_PROFILE_PICTURE=l;g.DIALOG_TITLE=m;g.DRAG_INSTRUCTIONS=n;g.EDIT_THUMBNAIL=o;g.EDIT_THUMBNAIL_TITLE=p;g.KEEP_TEMPORARY_PROFILE_PICTURE=q;g.MAKE_TEMPORARY=r;g.NO_RESULTS=s;g.PHOTO_ALBUMS=t;g.PREVIEW=u;g.PRIVACY_DISCLAIMER=v;g.RECENT_PHOTOS=w;g.REMOVE=x;g.REMOVE_CONFIRMATION_BODY=y;g.REMOVE_CONFIRMATION_TITLE=z;g.REVERT_TEMPORARY_PROFILE_PICTURE=A;g.SAVE=B;g.SEARCH_FOR_FRAMES=C;g.SEE_MORE=D;g.SELECT_BACKGROUND=E;g.SELECT_PHOTO=F;g.SELECT_POSE=G;g.TEMPORARY_OPTION_CUSTOM=H;g.TEMPORARY_OPTION_NEVER=I;g.TEMPORARY_OPTION_ONE_DAY=J;g.TEMPORARY_OPTION_ONE_HOUR=K;g.TEMPORARY_OPTION_ONE_MONTH=L;g.TEMPORARY_OPTION_ONE_WEEK=M;g.TEMPORARY_PROFILE_PIC_CONTROL=N;g.UPLOAD_PHOTO=O;g.USE_AS_PROFILE_PICTURE=P;g.ZOOM_DECREASE=Q;g.ZOOM_INCREASE=R;g.ZOOM_SLIDER=S;g.SYSTEM_ERROR_MESSAGE=T;g.CHOOSE_PROFILE_PICTURE=h}),98);
__d("ProfileCometProfilePictureEditDialogFallback.react",["CometCardedDialogLoadingStateLegacy.react","ProfileCometProfilePictureEditStrings","qex","react"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react");function a(a){var b;a=a.onClose;b=(b=c("qex")._("118"))!=null?b:!1;return h.jsx(c("CometCardedDialogLoadingStateLegacy.react"),{onClose:a,size:"medium",title:b?d("ProfileCometProfilePictureEditStrings").CHOOSE_PROFILE_PICTURE:d("ProfileCometProfilePictureEditStrings").DIALOG_TITLE,withCloseButton:!0})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("useProfileCometProfilePictureEditDialog",["ProfileCometProfilePictureEditDialog.entrypoint","ProfileCometProfilePictureEditDialogFallback.react","react","useCometEntryPointDialog"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react");b=d("react");var i=b.useCallback,j=b.useRef,k=function(a){return h.jsx(c("ProfileCometProfilePictureEditDialogFallback.react"),{onClose:a})};function a(a,b,d,e,f,g,h,l){f=j(null);g=c("useCometEntryPointDialog")(c("ProfileCometProfilePictureEditDialog.entrypoint"),{},"button",k);var m=g[0],n=g[1],o=g[2];g=g[3];return[i(function(){d?m({collectionToken:l,onClose:d,onSave:e,profileID:a,sectionToken:h,source:b}):m({collectionToken:l,onSave:e,profileID:a,sectionToken:h,source:b})},[m,d,e,a,b,h,l]),f,n,o,g]}g["default"]=a}),98);
__d("useProfileCometStoryStatus",["CometRelay","XCometStoriesControllerRouteBuilder","react","useProfileCometStoryStatus_user.graphql"],(function(a,b,c,d,e,f,g){"use strict";var h;d("react");function a(a){a=d("CometRelay").useFragment(h!==void 0?h:h=b("useProfileCometStoryStatus_user.graphql"),a);var e="none",f;a=(a=a.story_bucket)==null?void 0:a.nodes;var g=!1;if(a){var i;a=a?a[0]:null;var j=(a==null?void 0:a.id)||null;i=(a==null?void 0:(i=a.first_story_to_show)==null?void 0:i.id)||null;if(a&&j&&i){var k;k=((k=a.first_story_to_show)==null?void 0:(k=k.story_card_seen_state)==null?void 0:k.is_seen_by_viewer)||!1;e=k?"seen":"unseen";g=(k=a.should_show_close_friend_badge)!=null?k:!1}e!=="none"&&(f=c("XCometStoriesControllerRouteBuilder").buildURL({bucket_id:j,card_id:i,view_single:!1}))}return{shouldShowCloseFriendsBadge:g,storyStatus:e,storyUrl:f}}g["default"]=a}),98);
__d("useProfileCometIsCenteredLayout",["CometLeftRailLayoutContext","CometRouteRenderType","react","useMatchViewport"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react").useContext;function a(){var a=h(c("CometLeftRailLayoutContext")),b=d("CometRouteRenderType").useIsHosted();a=a||b;b=a?1259:899;return c("useMatchViewport")("max","width",b)}g["default"]=a}),98);
__d("XCometAvatarEditorControllerRouteBuilder",["jsRouteBuilder"],(function(a,b,c,d,e,f,g){a=c("jsRouteBuilder")("/profile/avatar/",Object.freeze({}),void 0);b=a;g["default"]=b}),98);
__d("CometUsersEntityScopedTypeaheadDialogQuery_facebookRelayOperation",[],(function(a,b,c,d,e,f){e.exports="4964981010255581"}),null);
__d("ProfileCometManageSectionsDialogQuery_facebookRelayOperation",[],(function(a,b,c,d,e,f){e.exports="7228243620551614"}),null);
__d("FXPasswordlessContactPointType",["$InternalEnum"],(function(a,b,c,d,e,f){a=b("$InternalEnum")({EMAIL:"email",PHONE:"phone"});c=a;f["default"]=c}),66);
__d("FXPasswordlessFlowType",["$InternalEnum"],(function(a,b,c,d,e,f){a=b("$InternalEnum")({CS_DEACTIVATION_PASSWORDLESS:"cs_deactivation_passwordless",CS_DELETION_PASSWORDLESS:"cs_deletion_passwordless",DEACTIVATION:"deactivation",DEACTIVATION_NO_ELIGIBLE_ACCOUNTS_FOR_REAUTH:"deactivation_centralized_settings_no_eligible_accounts_for_reauth",DELETION:"deletion",DELETION_NO_ELIGIBLE_ACCOUNTS_FOR_REAUTH:"deletion_no_eligible_accounts_for_reauth",GENERIC_CENTRALIZED_SETTINGS_NO_ELIGIBLE_ACCOUNTS_FOR_REAUTH:"generic_centralized_settings_no_eligible_accounts_for_reauth",META_PW_CREATION:"meta_pw_creation",SSO:"sso",UNLINK:"unlink"});c=a;f["default"]=c}),66);
__d("MAEntAccountType",[],(function(a,b,c,d,e,f){a=Object.freeze({FACEBOOK:0,INSTAGRAM:1,WHATSAPP:3,FRL:4});f["default"]=a}),66);
__d("fximUserAgent",["UserAgent"],(function(a,b,c,d,e,f,g){"use strict";function h(){return c("UserAgent").isBrowser("Oculus Browser")}function a(){return h()&&window.matchMedia("(display-mode: standalone)").matches}g.isOculusBrowser=h;g.isOculusPWA=a}),98);
__d("getFXClientInterfaceName.entrypoint",["XPlatReactEnvironment","fximUserAgent"],(function(a,b,c,d,e,f,g){"use strict";function a(){if(d("XPlatReactEnvironment").isInstagramEnvironment())return"IG_WEB";if(d("fximUserAgent").isOculusBrowser()||!d("XPlatReactEnvironment").isWeb())return"FRL_VR";return d("XPlatReactEnvironment").isFRLEnvironment()?"FRL_WEB":"FB_WEB"}g["default"]=a}),98);
__d("FXUtils",["invariant","$InternalEnum","getFXClientInterfaceName.entrypoint"],(function(a,b,c,d,e,f,g,h){"use strict";function a(){var a=c("getFXClientInterfaceName.entrypoint")();switch(a){case"IG_WEB":case"IG_LITE":return 1;case"FB_WEB":return 0;case"FRL_WEB":case"FRL_IOS":case"FRL_ANDROID":case"FRL_VR":return 4}}function d(){var a=c("getFXClientInterfaceName.entrypoint")();switch(a){case"IG_WEB":case"IG_LITE":return"INSTAGRAM";case"FB_WEB":return"FACEBOOK";case"FRL_WEB":case"FRL_IOS":case"FRL_ANDROID":case"FRL_VR":return"FRL"}}function e(a){return a==null?void 0:(a=a.getLinkedRecord("node_v2"))==null?void 0:a.getValue("id")}function f(a){return a==null?void 0:(a=a.getLinkedRecord("node"))==null?void 0:a.getValue("id")}function i(a){switch(a){case"FACEBOOK":return"Facebook";case"INSTAGRAM":return"Instagram";case"FRL":return"Oculus";default:h(0,47233)}}function j(a){switch(a){case"FACEBOOK":return 0;case"INSTAGRAM":return 1;case"WHATSAPP":return 3;case"FRL":return 4;default:h(0,62141)}}function k(a){switch(a){case"meta_pw_creation":return"META_PW_CREATION";case"cs_deactivation_passwordless":return"CS_DEACTIVATION_PASSWORDLESS";case"cs_deletion_passwordless":return"CS_DELETION_PASSWORDLESS";case"deactivation":return"DEACTIVATION";case"deactivation_centralized_settings_no_eligible_accounts_for_reauth":return"DEACTIVATION_NO_ELIGIBLE_ACCOUNTS_FOR_REAUTH";case"deletion":return"DELETION";case"deletion_no_eligible_accounts_for_reauth":return"DELETION_NO_ELIGIBLE_ACCOUNTS_FOR_REAUTH";case"generic_centralized_settings_no_eligible_accounts_for_reauth":return"GENERIC_CENTRALIZED_SETTINGS_NO_ELIGIBLE_ACCOUNTS_FOR_REAUTH";case"sso":return"SSO";case"unlink":return"UNLINK"}}function l(a){if(a)switch(a){case"PHONE":return"phone";case"EMAIL":return"email";default:h(0,62141)}return null}var m=b("$InternalEnum").Mirrored(["FACEBOOK","INSTAGRAM","FRL"]);b=b("$InternalEnum").Mirrored(["REQUIRE_NEW_NONCE","PASSWORD_EXISTS","GENERIC","RATE_LIMITED"]);g.getFXClientActorAccountType=a;g.getFXClientActorPlatform=d;g.getFXAccountId=e;g.getFXIdentityId=f;g.getPlatformName=i;g.getMAEntAccountTypeFromPlatformName=j;g.getFXPasswordlessFlowTypeFromEntrypointName=k;g.getFXPasswordlessContactPointTypeName=l;g.AccountType=m;g.PasswordlessFlowCreatePasswordErrorDialogType=b}),98);
__d("useFxGrowthIdentitySyncingFalcoEventLogger",["Actor","FXUtils","promiseDone","react","requireDeferred"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react").useCallback,i=c("requireDeferred")("FxGrowthIdentitySyncingFalcoEvent").__setRef("useFxGrowthIdentitySyncingFalcoEventLogger");function a(){var a=d("Actor").useActor(),b=a[0];return h(function(a){c("promiseDone")(i.load(),function(c){c.log(function(){return babelHelpers["extends"]({},a,{initiator_account_id:b,initiator_account_type:d("FXUtils").getFXClientActorAccountType()})})})},[b])}g["default"]=a}),98);