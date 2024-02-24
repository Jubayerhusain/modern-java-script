;/*FB_PKG_DELIM*/

__d("FundraiserDonateButton_fundraiser.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[{defaultValue:null,kind:"LocalArgument",name:"donateRef"},{defaultValue:null,kind:"LocalArgument",name:"prevSource"},{defaultValue:null,kind:"LocalArgument",name:"source"}],kind:"Fragment",metadata:null,name:"FundraiserDonateButton_fundraiser",selections:[{alias:null,args:null,kind:"ScalarField",name:"can_donate",storageKey:null},{alias:null,args:null,concreteType:"TextWithEntities",kind:"LinkedField",name:"donation_disabled_reason_message",plural:!1,selections:[{args:null,kind:"FragmentSpread",name:"CometTextWithEntitiesRelay_textWithEntities"}],storageKey:null},{alias:null,args:[{kind:"Variable",name:"donate_ref",variableName:"donateRef"},{kind:"Variable",name:"prev_source",variableName:"prevSource"},{kind:"Variable",name:"source",variableName:"source"}],kind:"ScalarField",name:"mobile_donate_url",storageKey:null},{args:null,kind:"FragmentSpread",name:"useFundraiserDonateCometCheckout_fundraiser"}],type:"Fundraiser",abstractKey:"__isFundraiser"};e.exports=a}),null);
__d("useFundraiserDonateCometCheckoutECPAssignmentQuery_facebookRelayOperation",[],(function(a,b,c,d,e,f){e.exports="5517126125005239"}),null);
__d("useFundraiserDonateCometCheckoutECPAssignmentQuery.graphql",["useFundraiserDonateCometCheckoutECPAssignmentQuery_facebookRelayOperation"],(function(a,b,c,d,e,f){"use strict";a=function(){var a={defaultValue:null,kind:"LocalArgument",name:"donateRef"},c={defaultValue:null,kind:"LocalArgument",name:"fundraiserID"},d=[{kind:"Variable",name:"id",variableName:"fundraiserID"}],e={kind:"InlineFragment",selections:[{alias:null,args:[{kind:"Variable",name:"source",variableName:"donateRef"}],kind:"ScalarField",name:"is_assigned_to_ecp_experiment",storageKey:null}],type:"Fundraiser",abstractKey:"__isFundraiser"};return{fragment:{argumentDefinitions:[a,c],kind:"Fragment",metadata:null,name:"useFundraiserDonateCometCheckoutECPAssignmentQuery",selections:[{alias:"fundraiser",args:d,concreteType:null,kind:"LinkedField",name:"node",plural:!1,selections:[e],storageKey:null}],type:"Query",abstractKey:null},kind:"Request",operation:{argumentDefinitions:[c,a],kind:"Operation",name:"useFundraiserDonateCometCheckoutECPAssignmentQuery",selections:[{alias:"fundraiser",args:d,concreteType:null,kind:"LinkedField",name:"node",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null},e,{alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null}],storageKey:null}]},params:{id:b("useFundraiserDonateCometCheckoutECPAssignmentQuery_facebookRelayOperation"),metadata:{},name:"useFundraiserDonateCometCheckoutECPAssignmentQuery",operationKind:"query",text:null}}}();e.exports=a}),null);
__d("useFundraiserDonateCometCheckoutMatchExperimentAssigmentQuery_facebookRelayOperation",[],(function(a,b,c,d,e,f){e.exports="5750398171673011"}),null);
__d("useFundraiserDonateCometCheckoutMatchExperimentAssigmentQuery.graphql",["useFundraiserDonateCometCheckoutMatchExperimentAssigmentQuery_facebookRelayOperation"],(function(a,b,c,d,e,f){"use strict";a=function(){var a=[{defaultValue:null,kind:"LocalArgument",name:"fundraiserID"}],c=[{kind:"Variable",name:"id",variableName:"fundraiserID"}],d={kind:"InlineFragment",selections:[{alias:null,args:null,kind:"ScalarField",name:"should_show_recurring_splash_dialog",storageKey:null}],type:"Fundraiser",abstractKey:"__isFundraiser"};return{fragment:{argumentDefinitions:a,kind:"Fragment",metadata:null,name:"useFundraiserDonateCometCheckoutMatchExperimentAssigmentQuery",selections:[{alias:"fundraiser",args:c,concreteType:null,kind:"LinkedField",name:"node",plural:!1,selections:[d],storageKey:null}],type:"Query",abstractKey:null},kind:"Request",operation:{argumentDefinitions:a,kind:"Operation",name:"useFundraiserDonateCometCheckoutMatchExperimentAssigmentQuery",selections:[{alias:"fundraiser",args:c,concreteType:null,kind:"LinkedField",name:"node",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null},d,{alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null}],storageKey:null}]},params:{id:b("useFundraiserDonateCometCheckoutMatchExperimentAssigmentQuery_facebookRelayOperation"),metadata:{},name:"useFundraiserDonateCometCheckoutMatchExperimentAssigmentQuery",operationKind:"query",text:null}}}();e.exports=a}),null);
__d("useFundraiserDonateCometCheckout_fundraiser.graphql",[],(function(a,b,c,d,e,f){"use strict";a=function(){var a={alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},b={alias:null,args:null,kind:"ScalarField",name:"name",storageKey:null};return{argumentDefinitions:[],kind:"Fragment",metadata:null,name:"useFundraiserDonateCometCheckout_fundraiser",selections:[a,{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"beneficiary",plural:!1,selections:[a,b],storageKey:null},{kind:"RequiredField",field:{alias:null,args:null,kind:"ScalarField",name:"payment_type",storageKey:null},action:"THROW",path:"payment_type"},{kind:"RequiredField",field:{alias:null,args:null,kind:"ScalarField",name:"receiver_id",storageKey:null},action:"THROW",path:"receiver_id"},{alias:null,args:null,kind:"ScalarField",name:"can_donate",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"psd_agreement_id",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"fundraiser_campaign_type",storageKey:null},{args:null,kind:"FragmentSpread",name:"FundraiserCheckoutDialog_fundraiser"},{kind:"InlineFragment",selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"parent_container",plural:!1,selections:[{kind:"InlineFragment",selections:[b],type:"Group",abstractKey:null}],storageKey:null}],type:"FundraiserPersonForPerson",abstractKey:null}],type:"Fundraiser",abstractKey:"__isFundraiser"}}();e.exports=a}),null);
__d("FundraiserRecurringSplashDialogQuery_facebookRelayOperation",[],(function(a,b,c,d,e,f){e.exports="5260978594008887"}),null);
__d("FundraiserRecurringSplashDialogQuery$Parameters",["FundraiserRecurringSplashDialogQuery_facebookRelayOperation"],(function(a,b,c,d,e,f){"use strict";a={kind:"PreloadableConcreteRequest",params:{id:b("FundraiserRecurringSplashDialogQuery_facebookRelayOperation"),metadata:{},name:"FundraiserRecurringSplashDialogQuery",operationKind:"query",text:null}};e.exports=a}),null);
__d("useOpenPageShareComposer",["react","useCometPageComposerDialog","useResumableComposerViewState"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react").useCallback;function a(a,b,d){var e=c("useResumableComposerViewState")(),f=e.clearResumableViewState,g=e.saveResumableViewState;e=h(function(a){g(a)},[g]);var i=h(function(){f()},[f]);e=c("useCometPageComposerDialog")({actorID:a,composerEntryPointRef:"pages_posts",composerType:"page",onBeforeClose:e,onClose:d,onSave:i,pageID:a});var j=e[0];return h(function(){j({beginningViewState:b})},[b,j])}g["default"]=a}),98);
__d("FBPayECPUPLDebugLogger",["ClientAddDebugAtomicFalcoEvent","FBPayBaseUPLLogger"],(function(a,b,c,d,e,f,g){"use strict";a=function(a){babelHelpers.inheritsLoose(b,a);function b(){return a.apply(this,arguments)||this}var d=b.prototype;d.logClientAddDebugAtomic=function(a,b,d,e){c("ClientAddDebugAtomicFalcoEvent").log(function(){return{actual_event_time:b,event_payload:d,extra_data:e,platform:"comet",product_type:"ecp",session_id:a}})};return b}(c("FBPayBaseUPLLogger"));g["default"]=a}),98);
__d("FundraiserFeedConversionFalcoEvent",["FalcoLoggerInternal","getFalcoLogPolicy_DO_NOT_USE"],(function(a,b,c,d,e,f,g){"use strict";a=c("getFalcoLogPolicy_DO_NOT_USE")("3230");b=d("FalcoLoggerInternal").create("fundraiser_feed_conversion",a);e=b;g["default"]=e}),98);
__d("FundraiserRecurringSplashDialog.entrypoint",["FundraiserRecurringSplashDialogQuery$Parameters","JSResourceForInteraction","WebPixelRatio"],(function(a,b,c,d,e,f,g){"use strict";a={getPreloadProps:function(a){a=a.fundraiserID;return{extraProps:{fundraiserID:a},queries:{dialogQueryReference:{parameters:b("FundraiserRecurringSplashDialogQuery$Parameters"),variables:{fundraiserID:a,scale:d("WebPixelRatio").get()}}}}},root:c("JSResourceForInteraction")("FundraiserRecurringSplashDialog.react").__setRef("FundraiserRecurringSplashDialog.entrypoint")};g["default"]=a}),98);
__d("useFundraiserRecurringSplashDialog",["FundraiserRecurringSplashDialog.entrypoint","react","useCometEntryPointDialog"],(function(a,b,c,d,e,f,g){"use strict";b=d("react");var h=b.useCallback,i=b.useRef;function a(a){var b=a.fundraiserID,d=a.onClose,e=a.onDonateMonthly,f=a.onDonateOneTime,g=a.source;a=i(null);b=c("useCometEntryPointDialog")(c("FundraiserRecurringSplashDialog.entrypoint"),{fundraiserID:b},"button");var j=b[0],k=b[1],l=b[2];b=b[3];var m=h(function(){j({onClose:d,onDonateMonthly:e,onDonateOneTime:f,source:g},d)},[j,d,e,f,g]);return[m,a,k,l,b]}g.useFundraiserRecurringSplashDialog=a}),98);
__d("useFundraiserDonateCometCheckout",["CometRelay","FBPayECPUPLDebugLogger","FundraiserFeedConversionFalcoEvent","JSResourceForInteraction","emptyFunction","gkx","promiseDone","react","requireDeferred","unrecoverableViolation","useCometLazyDialog","useFundraiserDonateCometCheckoutECPAssignmentQuery.graphql","useFundraiserDonateCometCheckoutMatchExperimentAssigmentQuery.graphql","useFundraiserDonateCometCheckout_fundraiser.graphql","useFundraiserRecurringSplashDialog","usePaymentsCometCheckout","uuidv4"],(function(a,b,c,d,e,f,g){"use strict";var h,i,j;e=d("react");var k=e.useCallback,l=e.useMemo,m=c("requireDeferred")("SocialGoodCharityActionsLoggingUtils").__setRef("useFundraiserDonateCometCheckout"),n=c("JSResourceForInteraction")("FundraiserCheckoutDialog.react").__setRef("useFundraiserDonateCometCheckout"),o=h!==void 0?h:h=b("useFundraiserDonateCometCheckout_fundraiser.graphql"),p=i!==void 0?i:i=b("useFundraiserDonateCometCheckoutECPAssignmentQuery.graphql"),q=j!==void 0?j:j=b("useFundraiserDonateCometCheckoutMatchExperimentAssigmentQuery.graphql");function a(a){var b=a.extraData,e=a.fundraiser,f=a.onClose,g=a.overrideAmountForMatching,h=a.overridePaymentTypeForMatching,i=a.overrideShouldShowRecurringSplashScreen,j=d("CometRelay").useFragment(o,e);a=c("useCometLazyDialog")(n);var r=a[0];if(j==null)throw c("unrecoverableViolation")("Fundraiser data cannot be null","charitable_giving");var s=j.id;if(s==null)throw c("unrecoverableViolation")("Fundraiser ID cannot be null","charitable_giving");var t=l(function(){var a={donateRef:b==null?void 0:b.donateRef,isMonthlySubscription:b==null?void 0:b.isMonthlySubscription,sourceData:babelHelpers["extends"]({},b==null?void 0:b.sourceData,{is_ecp:"false"})};return{extraData:a,orderID:j.id,overrideAmount:g,paymentType:(a=h)!=null?a:j==null?void 0:j.payment_type,psdAgreementID:(a=j.psd_agreement_id)!=null?a:"",receiverID:j.receiver_id,receiverName:(a=j.beneficiary)==null?void 0:a.name,receiverOrganizationName:j==null?void 0:(a=j.parent_container)==null?void 0:a.name}},[b,j,g,h]);e=c("usePaymentsCometCheckout")({checkoutProps:t,onClose:f||c("emptyFunction")});var u=e[0],v=d("CometRelay").useRelayEnvironment(),w=k(function(a){var e=(b==null?void 0:b.isMonthlySubscription)===!0;a===!0&&(t.extraData.isMonthlySubscription=!0,e=!0);a===!1&&(t.extraData.isMonthlySubscription=!1,e=!1);m.onReady(function(a){a=a.logFundraiserDonateEvent;a("donate_click",(a=b==null?void 0:b.sourceData)!=null?a:{},j==null?void 0:j.id,j==null?void 0:j.fundraiser_campaign_type,{is_monthly_subscription:e?"true":"false"})});var g=new(c("FBPayECPUPLDebugLogger"))({client_suppression_policy:[]},"","ecp","comet");c("FundraiserFeedConversionFalcoEvent").log(function(){return{feed_event:"donate_click",fundraiser_id:j==null?void 0:j.id}});var i=["upl",Date.now(),c("uuidv4")()].join("_");g.logClientAddDebugAtomic(i,Date.now().toString(),{debug_step:"user_press_donate_button_atomic"});(h!=null||(j==null?void 0:j.payment_type)!=="NMOR_DONATION_P4C")&&(m.onReady(function(a){a=a.logFundraiserDonateEvent;a("initialization",(a=b==null?void 0:b.sourceData)!=null?a:{},j==null?void 0:j.id,j==null?void 0:j.fundraiser_campaign_type,{is_monthly_subscription:e?"true":"false"})}),h!=null?(g.logClientAddDebugAtomic(i,Date.now().toString(),{debug_step:"Open legacy b/c ECP is not eligible"},{isEligibleForECP:"false"}),u()):c("promiseDone")(d("CometRelay").fetchQuery(v,p,{donateRef:b==null?void 0:b.donateRef,fundraiserID:s}).toPromise().then(function(a){(a==null?void 0:(a=a.fundraiser)==null?void 0:a.is_assigned_to_ecp_experiment)===!0?(g.logClientAddDebugAtomic(i,Date.now().toString(),{debug_step:"QE exposes user as ecp"}),r({checkoutProps:t,extraData:b?babelHelpers["extends"]({},b,{isMonthlySubscription:e}):void 0,fundraiser:j,logger:g,onClose:f||c("emptyFunction"),sessionID:i})):(g.logClientAddDebugAtomic(i,Date.now().toString(),{debug_step:"QE exposes user as legacy and legacy is opened"}),u())})))},[h,j,b,u,v,s,r,t,f]);a=function(){w(!0)};e=function(){w(!1)};e=d("useFundraiserRecurringSplashDialog").useFundraiserRecurringSplashDialog({fundraiserID:s,onClose:f||c("emptyFunction"),onDonateMonthly:a,onDonateOneTime:e,source:b==null?void 0:(a=b.sourceData)==null?void 0:a.source_name});var x=e[0];a=k(function(){c("promiseDone")(d("CometRelay").fetchQuery(v,q,{fundraiserID:s}).toPromise().then(function(a){var b;a=(b=i)!=null?b:a==null?void 0:(b=a.fundraiser)==null?void 0:b.should_show_recurring_splash_dialog;a===!0?x():w()}))},[v,s,x,w,i]);return(j==null?void 0:j.can_donate)!==!0&&g==null||!c("gkx")("708253")?null:a}g["default"]=a}),98);
__d("FundraiserDonateButton.react",["fbt","ix","CometErrorBoundary.react","CometLazyPopoverTrigger.react","CometRelay","FundraiserDonateButton_fundraiser.graphql","JSResourceForInteraction","TetraButton.react","fbicon","gkx","react","useFundraiserDonateCometCheckout"],(function(a,b,c,d,e,f,g,h,i){"use strict";var j,k=d("react"),l=c("JSResourceForInteraction")("FundraiserTextWithEntitiesPopover.react").__setRef("FundraiserDonateButton.react"),m=j!==void 0?j:j=b("FundraiserDonateButton_fundraiser.graphql");function n(a){var b=a.disabled;b=b===void 0?!1:b;var e=a.donateRef,f=a.fundraiser,g=a.isMonthlySubscription;g=g===void 0?!1:g;var j=a.isPrivateGiving,n=a.label,o=a.labelIsHidden;o=o===void 0?!1:o;var p=a.onClose,q=a.onPress,r=a.overrideShouldShowRecurringSplashScreen,s=a.reduceEmphasis;s=s===void 0?!1:s;var t=a.showIcon,u=a.size;u=u===void 0?"medium":u;var v=a.source;a=a.type;a=a===void 0?"primary":a;f=d("CometRelay").useFragment(m,f);var w=c("useFundraiserDonateCometCheckout")({extraData:{donateRef:e,isMonthlySubscription:g,isPrivateGiving:j,sourceData:{donate_ref:e,source_name:v}},fundraiser:f,onClose:p,overrideShouldShowRecurringSplashScreen:r});if(f==null)return null;e=f.mobile_donate_url;var x;!c("gkx")("708253")&&e!=null&&w==null&&(x={preventLocalNavigation:!0,rel:"dialog",url:e});v=n;v==null&&(v=j===!0?h._("__JHASH__9VnDiSLhdP-__JHASH__"):h._("__JHASH__wBlYmupCuhF__JHASH__"));var y;t===!0&&(y=g?d("fbicon")._(i("894753"),16):d("fbicon")._(i("510953"),16));var z=k.jsx(c("TetraButton.react"),{disabled:b||w==null&&f.can_donate!==!0,icon:y,label:v,labelIsHidden:o,linkProps:x,onPress:function(){q&&q(),w&&w()},reduceEmphasis:s,size:u,testid:void 0,type:a});p=f.donation_disabled_reason_message;return p==null||p===""?z:k.jsx(c("CometLazyPopoverTrigger.react"),{popoverProps:{tooltipTextWithEntities:p},popoverResource:l,position:"above",children:function(a,b){return k.jsx("span",{onMouseEnter:b,ref:a,children:z})}})}n.displayName=n.name+" [from "+f.id+"]";function a(a){return k.jsx(c("CometErrorBoundary.react"),{children:k.jsx(n,babelHelpers["extends"]({},a))})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("FundraiserPercentProgressBar.react",["fbt","TetraText.react","isStringNullOrEmpty","react","stylex"],(function(a,b,c,d,e,f,g,h){"use strict";var i=d("react"),j=12,k=8,l={backgroundLegacy:{backgroundColor:"x1281ex9",$$css:!0},backgroundOnCard:{backgroundColor:"x1rfik1p",$$css:!0},backgroundOnStoryAttachment:{backgroundColor:"x1qhmfi1",$$css:!0},backgroundWash:{backgroundColor:"x14nfmen",$$css:!0},badgeIcon:{marginStart:"xsgj6o6",position:"x1n2onr6",top:"x1e0gzzx",$$css:!0},deemphasizedfiller:{backgroundColor:"x1iuwi03",$$css:!0},filler:{backgroundColor:"xwnonoy",$$css:!0},fullWidth:{backgroundColor:"xv9rvxn",$$css:!0},mediumHeight:{borderTopStartRadius:"xhk9q7s",borderTopEndRadius:"x1otrzb0",borderBottomEndRadius:"x1i1ezom",borderBottomStartRadius:"x1o6z2jb",height:"x1kpxq89",$$css:!0},root:{width:"xh8yej3",$$css:!0},smallHeight:{borderTopStartRadius:"x1lcm9me",borderTopEndRadius:"x1yr5g0i",borderBottomEndRadius:"xrt01vj",borderBottomStartRadius:"x10y3i5r",height:"xdk7pt",$$css:!0},textInfo:{display:"x78zum5",flexDirection:"x1q0g3np",justifyContent:"x1qughib",$$css:!0}};function a(a){var b=a.backgroundType;b=b===void 0?"card":b;var d=a.donationLabel,e=a.hasEnded,f=a.heightSize;f=f===void 0?"medium":f;var g=a.labelPosition;g=g===void 0?"below":g;var m=a.primaryLabel,n=a.primaryLabelBadge,o=a.progressPercentage,p=a.reduceEmphasis;p=p===void 0?!1:p;a=a.secondaryLabel;var q=f==="small"?k:j,r=f==="small"?"body4":"body3",s=f==="small"?8:12;o=o>100?100:o;q=o<=1?q+"px":o+"%";var t=o===100,u="highlight";p&&(u="secondary");t&&(u="positive");s=i.jsxs("div",{className:"x78zum5 x1q0g3np x1qughib",style:g==="above"?{paddingBottom:s}:{paddingTop:s},children:[i.jsxs(c("TetraText.react"),{color:u,type:r,children:[m,n!=null&&i.jsx("span",{className:"xsgj6o6 x1n2onr6 x1e0gzzx",children:n}),!c("isStringNullOrEmpty")(d)&&" \u2022 ",d]}),e?i.jsx(c("TetraText.react"),{color:"secondary",type:r,children:h._("__JHASH__6PiC1tfsGxF__JHASH__")}):a!=null?i.jsx(c("TetraText.react"),{color:"secondary",testid:void 0,type:r,children:a}):null]});return i.jsxs(i.Fragment,{children:[g==="above"?s:null,i.jsx("div",{"aria-valuemax":100,"aria-valuemin":0,"aria-valuenow":o,className:c("stylex")(l.root,b==="attachment"&&l.backgroundOnStoryAttachment,b==="card"&&l.backgroundOnCard,b==="legacy"&&l.backgroundLegacy,b==="wash"&&l.backgroundWash,f==="small"&&l.smallHeight,f==="medium"&&l.mediumHeight),role:"progressbar",children:i.jsx("div",{className:c("stylex")(l.filler,p&&l.deemphasizedfiller,t&&l.fullWidth,f==="small"&&l.smallHeight,f==="medium"&&l.mediumHeight),style:{width:q}})}),g==="below"?s:null]})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("XCometFundraiserWithPresenceControllerRouteBuilder",["jsRouteBuilder"],(function(a,b,c,d,e,f,g){a=c("jsRouteBuilder")("/donate/{?campaign_id}/{?post_id}/",Object.freeze({add_organizers:!1,apply_profile_frame:!1,composer:!1,create_outro:!1,create_outro_skip_to_first_step:!1,edit:!1,invite:!1,match_confirm:!1,match_pledge:!1,payout_setup:!1,payout_verification:!1,share:!1,thank_you:!1}),new Set(["add_organizers","apply_profile_frame","composer","create_outro","create_outro_skip_to_first_step","edit","invite","match_confirm","match_pledge","payout_setup","payout_verification","share","thank_you"]));b=a;g["default"]=b}),98);
__d("XCometPayoutHubOverviewControllerRouteBuilder",["jsRouteBuilder"],(function(a,b,c,d,e,f,g){a=c("jsRouteBuilder")("/payout/overview/{?fe_id}/",Object.freeze({}),void 0);b=a;g["default"]=b}),98);