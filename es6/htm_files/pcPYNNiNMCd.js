;/*FB_PKG_DELIM*/

__d("CometEntityActorSelectorButton_viewer.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[{kind:"RootArgument",name:"scale"}],kind:"Fragment",metadata:null,name:"CometEntityActorSelectorButton_viewer",selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"actor",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"name",storageKey:null},{alias:"profile_image",args:[{kind:"Literal",name:"height",value:36},{kind:"Variable",name:"scale",variableName:"scale"},{kind:"Literal",name:"width",value:36}],concreteType:"Image",kind:"LinkedField",name:"profile_picture",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"uri",storageKey:null}],storageKey:null}],storageKey:null}],type:"Viewer",abstractKey:null};e.exports=a}),null);
__d("CometEntityActorSelectorMenuQuery_facebookRelayOperation",[],(function(a,b,c,d,e,f){e.exports="4853457054775169"}),null);
__d("CometEntityActorSelectorMenuQuery$Parameters",["CometEntityActorSelectorMenuQuery_facebookRelayOperation"],(function(a,b,c,d,e,f){"use strict";a={kind:"PreloadableConcreteRequest",params:{id:b("CometEntityActorSelectorMenuQuery_facebookRelayOperation"),metadata:{},name:"CometEntityActorSelectorMenuQuery",operationKind:"query",text:null}};e.exports=a}),null);
__d("CometEntityActorSelector_entity.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"CometEntityActorSelector_entity",selections:[{kind:"InlineFragment",selections:[{alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null}],type:"Node",abstractKey:"__isNode"},{alias:null,args:null,concreteType:"AvailableActorsConnection",kind:"LinkedField",name:"available_actors",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"count",storageKey:null}],storageKey:null}],type:"SupportsScopedActors",abstractKey:"__isSupportsScopedActors"};e.exports=a}),null);
__d("CometEntityActorSelector_viewer.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"CometEntityActorSelector_viewer",selections:[{args:null,kind:"FragmentSpread",name:"CometEntityActorSelectorButton_viewer"},{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"actor",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null}],storageKey:null}],type:"Viewer",abstractKey:null};e.exports=a}),null);
__d("CometEntityHeaderActorSelector_entity.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"CometEntityHeaderActorSelector_entity",selections:[{args:null,kind:"FragmentSpread",name:"CometEntityActorSelector_entity"},{alias:null,args:null,concreteType:"AvailableActorsConnection",kind:"LinkedField",name:"available_actors",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"count",storageKey:null}],storageKey:null}],type:"SupportsScopedActors",abstractKey:"__isSupportsScopedActors"};e.exports=a}),null);
__d("CometEntityHeaderActorSelector_viewer.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"CometEntityHeaderActorSelector_viewer",selections:[{args:null,kind:"FragmentSpread",name:"CometEntityActorSelector_viewer"}],type:"Viewer",abstractKey:null};e.exports=a}),null);
__d("CometEntityActorSelectorButton.react",["fbt","ix","CometEntityActorSelectorButton_viewer.graphql","CometIcon.react","CometProfilePhoto.react","CometRelay","TetraButton.react","TetraText.react","fbicon","react","recoverableViolation"],(function(a,b,c,d,e,f,g,h,i){"use strict";var j,k=d("react");function l(a,b){if(b)return k.jsx(c("TetraText.react"),{color:"primary",type:"body4",children:h._("__JHASH__TkKGmyNtokn__JHASH__",[h._implicitParam("=m1",k.jsx(c("TetraText.react"),{type:"bodyLink4",children:h._("__JHASH__YQYGCA3HgAV__JHASH__")}))])});else return k.jsx(c("TetraText.react"),{color:"primary",type:"body4",children:h._("__JHASH__RARIxcd_SVo__JHASH__",[h._param("actor",k.jsx(c("TetraText.react"),{type:"bodyLink4",children:a}))])})}function a(a,e){var f,g,m,n=a.viewer$key;a=babelHelpers.objectWithoutPropertiesLoose(a,["viewer$key"]);n=d("CometRelay").useFragment(j!==void 0?j:j=b("CometEntityActorSelectorButton_viewer.graphql"),n);f=n==null?void 0:(f=n.actor)==null?void 0:f.id;g=n==null?void 0:(g=n.actor)==null?void 0:g.name;m=n==null?void 0:(m=n.actor)==null?void 0:(m=m.profile_image)==null?void 0:m.uri;n=(n==null?void 0:(n=n.actor)==null?void 0:n.__typename)==="User";return f==null||g==null||m==null?c("recoverableViolation")("Actor ID, actor name, or profile picture URI are null in actor button","comet_ui"):k.jsx(c("TetraButton.react"),babelHelpers["extends"]({},a,{addOnPrimary:k.jsx(c("CometProfilePhoto.react"),{shape:"circle",size:36,source:{uri:m}}),addOnSecondary:k.jsx(c("CometIcon.react"),{icon:d("fbicon")._(i("481882"),16),size:16}),label:h._("__JHASH__89ptGjj_8FL__JHASH__"),labelIsHidden:!0,reduceEmphasis:!0,ref:e,size:"large",tooltip:l(g,n),type:"secondary"}))}a.displayName=a.name+" [from "+f.id+"]";e=k.forwardRef(a);g["default"]=e}),98);
__d("CometEntityActorSelectorMenu.entrypoint",["CometEntityActorSelectorMenuQuery$Parameters","JSResourceForInteraction","WebPixelRatio"],(function(a,b,c,d,e,f,g){"use strict";a={getPreloadProps:function(a){a=a.entityID;return{queries:{menuQueryReference:{parameters:b("CometEntityActorSelectorMenuQuery$Parameters"),variables:{entityID:a,scale:d("WebPixelRatio").get()}}}}},root:c("JSResourceForInteraction")("CometEntityActorSelectorMenu.react").__setRef("CometEntityActorSelectorMenu.entrypoint")};g["default"]=a}),98);
__d("CometEntityActorSelectorPlaceholder.react",["ix","CometIcon.react","CometProgressIndicator.react","fbicon","react"],(function(a,b,c,d,e,f,g,h){"use strict";var i=d("react");function a(){return i.jsxs("div",{className:"x1vqgdyp x1n2onr6 x1pigqs1",children:[i.jsxs("div",{className:"x6s0dn4 x78zum5 x1120s5i xn6708d x1ye3gou x1nn3v0j",children:[i.jsx("div",{className:"xhzw6zf x14yjl9h xudhj91 x18nykt9 xww2gxu xc9qbxq x1w0mnb x14qfxbe"}),i.jsx(c("CometIcon.react"),{icon:d("fbicon")._(h("481882"),16),size:16})]}),i.jsx("div",{className:"x10l6tqk xn86q54 xoyzfg9",children:i.jsx(c("CometProgressIndicator.react"),{overrideBGColorContext:"media",size:"small"})})]})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("CometEntityActorSelector.react",["CometEntityActorSelectorButton.react","CometEntityActorSelectorMenu.entrypoint","CometEntityActorSelectorPlaceholder.react","CometEntityActorSelector_entity.graphql","CometEntityActorSelector_viewer.graphql","CometEntryPointPopoverTrigger.react","CometRelay","react","recoverableViolation"],(function(a,b,c,d,e,f,g){"use strict";var h,i,j=d("react"),k=d("react").useTransition;function a(a){var e=a.entity$key,f=a.onChangeActor;a=a.viewer$key;e=d("CometRelay").useFragment(h!==void 0?h:h=b("CometEntityActorSelector_entity.graphql"),e);var g=d("CometRelay").useFragment(i!==void 0?i:i=b("CometEntityActorSelector_viewer.graphql"),a);a=k();var l=a[0],m=a[1];a=g==null?void 0:(a=g.actor)==null?void 0:a.id;var n=e==null?void 0:e.id;if(a==null||n==null)return c("recoverableViolation")("Actor ID or entity ID is null in actor selector","comet_ui");a=(e=e==null?void 0:(a=e.available_actors)==null?void 0:a.count)!=null?e:0;if(a===0)return c("recoverableViolation")("No available actors in actor selector for entity "+n,"comet_ui");e=function(a){m(function(){return f(a)})};return j.jsx(c("CometEntryPointPopoverTrigger.react"),{align:"end",entryPointParams:{entityID:n},otherProps:{onChangeActor:e},popoverEntryPoint:c("CometEntityActorSelectorMenu.entrypoint"),position:"below",preloadTrigger:"button",children:function(a,b,d,e,f,h){return l?j.jsx(c("CometEntityActorSelectorPlaceholder.react"),{}):j.jsx(c("CometEntityActorSelectorButton.react"),{onHoverIn:e,onHoverOut:f,onPress:b,onPressIn:h,ref:a,testid:void 0,viewer$key:g})}})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("CometEntityHeaderActorSelector.react",["CometEntityActorSelector.react","CometEntityHeaderActorSelector_entity.graphql","CometEntityHeaderActorSelector_viewer.graphql","CometRelay","react"],(function(a,b,c,d,e,f,g){"use strict";var h,i,j=d("react");function a(a){var e,f=a.entity$key,g=a.onChangeActor;a=a.viewer$key;f=d("CometRelay").useFragment(h!==void 0?h:h=b("CometEntityHeaderActorSelector_entity.graphql"),f);a=d("CometRelay").useFragment(i!==void 0?i:i=b("CometEntityHeaderActorSelector_viewer.graphql"),a);e=(e=f.available_actors)==null?void 0:e.count;return e==null||e<2?null:j.jsx("div",{className:"x1rr5fae x1d52u69 x1e558r4",children:j.jsx(c("CometEntityActorSelector.react"),{entity$key:f,onChangeActor:g,viewer$key:a})})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);