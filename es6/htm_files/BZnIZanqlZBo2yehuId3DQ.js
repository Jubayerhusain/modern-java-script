;/*FB_PKG_DELIM*/

__d("useEventsRSVPPrivacyToast_scope.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"useEventsRSVPPrivacyToast_scope",selections:[{args:null,kind:"FragmentSpread",name:"useEventsRSVPPrivacyToast_toastScope"}],type:"PrivacyScope",abstractKey:null};e.exports=a}),null);
__d("useEventsRSVPPrivacyToast_toastScope.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[{kind:"RootArgument",name:"scale"}],kind:"Fragment",metadata:null,name:"useEventsRSVPPrivacyToast_toastScope",selections:[{args:null,kind:"FragmentSpread",name:"useCometPrivacySelectorDialog_scope"},{alias:null,args:[{kind:"Variable",name:"scale",variableName:"scale"}],concreteType:"Image",kind:"LinkedField",name:"icon_image",plural:!1,selections:[{args:null,kind:"FragmentSpread",name:"useCometPrivacyIcon_image"}],storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"label",storageKey:null}],type:"PrivacyScope",abstractKey:null};e.exports=a}),null);
__d("EventCometName_event.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"EventCometName_event",selections:[{alias:null,args:null,kind:"ScalarField",name:"name",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"is_canceled",storageKey:null}],type:"Event",abstractKey:null};e.exports=a}),null);
__d("EventCometJoinFromRoomMessageDialogQuery_facebookRelayOperation",[],(function(a,b,c,d,e,f){e.exports="6025701924125920"}),null);
__d("EventCometJoinFromRoomMessageDialogQuery$Parameters",["EventCometJoinFromRoomMessageDialogQuery_facebookRelayOperation"],(function(a,b,c,d,e,f){"use strict";a={kind:"PreloadableConcreteRequest",params:{id:b("EventCometJoinFromRoomMessageDialogQuery_facebookRelayOperation"),metadata:{},name:"EventCometJoinFromRoomMessageDialogQuery",operationKind:"query",text:null}};e.exports=a}),null);
__d("EventCometJoinMessageDialogQuery_facebookRelayOperation",[],(function(a,b,c,d,e,f){e.exports="5476311022460985"}),null);
__d("EventCometJoinMessageDialogQuery$Parameters",["EventCometJoinMessageDialogQuery_facebookRelayOperation"],(function(a,b,c,d,e,f){"use strict";a={kind:"PreloadableConcreteRequest",params:{id:b("EventCometJoinMessageDialogQuery_facebookRelayOperation"),metadata:{},name:"EventCometJoinMessageDialogQuery",operationKind:"query",text:null}};e.exports=a}),null);
__d("CometIconLogoFlat.react",["cr:11257","react"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react");function a(a){var c;return h.jsx(b("cr:11257"),babelHelpers["extends"]({color:(c=a.color)!=null?c:"active-tab"},a))}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("useEventsRSVPPrivacyToast",["fbt","CometRelay","TetraIcon.react","TetraText.react","cometPushToast","gkx","react","useCometPrivacyIcon","useCometPrivacySelectorDialog","useCurrentDisplayMode","useEventsRSVPPrivacyToast_scope.graphql","useEventsRSVPPrivacyToast_toastScope.graphql"],(function(a,b,c,d,e,f,g,h){"use strict";var i,j,k=d("react");e=d("react");var l=e.useEffect,m=e.useRef,n=e.useState;function a(a){a=d("CometRelay").useFragment(i!==void 0?i:i=b("useEventsRSVPPrivacyToast_scope.graphql"),a);var e=m(!1),f=n(!1),g=f[0],h=f[1];f=function(a){e.current=!0,h(a.withAction)};return a==null||!c("gkx")("1106435")?[null,f]:[k.jsx(o,{hasAction:g,isVisibleRef:e,scope:a}),f]}function o(a){var e=d("CometRelay").useFragment(j!==void 0?j:j=b("useEventsRSVPPrivacyToast_toastScope.graphql"),a.scope),f=c("useCometPrivacySelectorDialog")(e,{renderLocation:"COMET_EVENTS_RSVP"}),g=f[0],i=d("useCometPrivacyIcon").useCometPrivacyIconForMenuItem(e.icon_image),m=a.hasAction,n=a.isVisibleRef;f=c("useCurrentDisplayMode")();var o=f==="dark";l(function(){n.current===!0&&(d("cometPushToast").cometPushToast({action:m?{label:k.jsx(c("TetraText.react"),{color:"blueLink",type:"body3",children:h._("__JHASH__nwdouFwxIez__JHASH__")}),onPress:function(){g&&g()}}:void 0,message:k.jsx(c("TetraText.react"),{type:"meta3",children:h._("__JHASH__kqCN_wUJvQO__JHASH__",[h._param("privacy_group",k.jsxs(k.Fragment,{children:[k.jsx("span",{className:"x1emribx xsgj6o6",children:i!=null?k.jsx(c("TetraIcon.react"),{color:o?"black":"white",icon:i}):null}),e.label]}))])}),testid:"event-privacy-toast",truncateText:!1}),n.current=!1)},[m,i,o,n,n.current,e,g]);return null}g["default"]=a}),98);
__d("EventCometName.react",["CometEmojiTransform","CometEmoticonTransform","CometTextWithEntities.react","EventCometName_event.graphql","RelayHooks","react","stylex"],(function(a,b,c,d,e,f,g){"use strict";var h,i=d("react"),j={canceled:{textDecoration:"xmqliwb",$$css:!0}};function a(a){var e=a.event;a=a.size;e=d("RelayHooks").useFragment(h!==void 0?h:h=b("EventCometName_event.graphql"),e);var f=e.is_canceled;e=e.name;if(e==null)return null;a=[c("CometEmoticonTransform")({size:a}),c("CometEmojiTransform")({size:a})];return i.jsx("span",{className:c("stylex")(f===!0&&j.canceled),children:i.jsx(c("CometTextWithEntities.react"),{text:e,transforms:a})})}a.displayName=a.name+" [from "+f.id+"]";e=i.memo(a);g["default"]=e}),98);
__d("EventCometActionLoggerDeferred",["promiseDone","requireDeferred"],(function(a,b,c,d,e,f,g){"use strict";var h=c("requireDeferred")("EventCometActionLogger").__setRef("EventCometActionLoggerDeferred");function a(a,b,d){c("promiseDone")(h.load().then(function(c){return c.log(a,b,d)}))}g.log=a}),98);
__d("useEventCometActionContext",["EventCometActionContext","EventCometActionContextDefault","react","recoverableViolation"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react").useContext;function a(){var a=h(c("EventCometActionContext"));a===c("EventCometActionContextDefault")&&c("recoverableViolation")("EventCometActionContext used without provider","events");return a}g["default"]=a}),98);
__d("useEventCometImpressionLogger",["EventCometActionLoggerDeferred","react","usePartialViewImpression"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react").useCallback;function a(a,b,e){return c("usePartialViewImpression")({onImpressionStart:h(function(){b&&d("EventCometActionLoggerDeferred").log(a,b,e)},[a,b,e])})}g["default"]=a}),98);
__d("EventCometJoinMessageDialog.entrypoint",["EventCometJoinMessageDialogQuery$Parameters","JSResourceForInteraction"],(function(a,b,c,d,e,f,g){"use strict";a={getPreloadProps:function(a){var b=a.eventID;a=a.showSkipButton;return{extraProps:{showSkipButton:a},queries:{queryReference:{parameters:c("EventCometJoinMessageDialogQuery$Parameters"),variables:{eventID:b}}}}},root:c("JSResourceForInteraction")("EventCometJoinMessageDialog.react").__setRef("EventCometJoinMessageDialog.entrypoint")};g["default"]=a}),98);
__d("EventCometJoinMessageFromRoomDialog.entrypoint",["EventCometJoinFromRoomMessageDialogQuery$Parameters","JSResourceForInteraction"],(function(a,b,c,d,e,f,g){"use strict";a={getPreloadProps:function(a){var b=a.eventID,d=a.onAccept;a=a.showSkipButton;return{extraProps:{onAccept:d,showSkipButton:a},queries:{queryReference:{parameters:c("EventCometJoinFromRoomMessageDialogQuery$Parameters"),variables:{eventID:b}}}}},root:c("JSResourceForInteraction")("EventCometJoinFromRoomMessageDialog.react").__setRef("EventCometJoinMessageFromRoomDialog.entrypoint")};g["default"]=a}),98);
__d("useEventCometJoinMessageDialog",["EventCometActionContext","EventCometJoinMessageDialog.entrypoint","EventCometJoinMessageFromRoomDialog.entrypoint","react","requireDeferred","useCometEntryPointDialog"],(function(a,b,c,d,e,f,g){"use strict";b=d("react");var h=b.useCallback,i=b.useContext,j=c("requireDeferred")("EventCometActionLogger").__setRef("useEventCometJoinMessageDialog");function a(a){var b=a.dialogEntrypoint,d=a.eventID,e=a.groupID,f=e===void 0?null:e;e=a.isFromRoom;e=e===void 0?!1:e;var g=a.onAccept,k=a.showSkipButton;a=a.surface;var l=a===void 0?"permalink":a;a=c("useCometEntryPointDialog")(e?c("EventCometJoinMessageFromRoomDialog.entrypoint"):c("EventCometJoinMessageDialog.entrypoint"),{eventID:d,onAccept:g,showSkipButton:k});var m=a[0],n=i(c("EventCometActionContext"));e=h(function(){m({dialogEntrypoint:b},function(a){a==="dismissed"&&j.onReady(function(a){return a.log(d,{acontext:n,mechanism:b,surface:l,target:f!=null?"cm_join_sheet":"public_chat_join_sheet",type:"dismiss"})})})},[n,b,d,f,m,l]);return[e]}g["default"]=a}),98);
__d("EventCometRouteHooks",["CometRouteURL"],(function(a,b,c,d,e,f,g){"use strict";function a(){var a=d("CometRouteURL").useRouteURLParams();a=a.notif_id;return a!=null}g.useIsNotifRouteURL=a}),98);
__d("useMWChatJoinVideoChat",["fbt","FBLogger","RTWebPreCallContext","VideoChatLinksUserActionsTypedLoggerLite","cometPushToast","getRequestConstUri","isMessengerDotComURI","promiseDone","react","requireDeferred"],(function(a,b,c,d,e,f,g,h){"use strict";b=d("react");var i=b.useCallback,j=b.useContext,k=b.useState,l=c("requireDeferred")("ZenonPreCallHookBuilderHelper").__setRef("useMWChatJoinVideoChat");function a(a){var b=j(c("RTWebPreCallContext")),e=k(!1),f=e[0],g=e[1];e=i(function(e,f){g(!0);var i=c("isMessengerDotComURI")(c("getRequestConstUri")())?"messenger_dot_com":"www_facebook_window";c("VideoChatLinksUserActionsTypedLoggerLite").log({component:"fb_feed_tofu_unit",event:"meetup_entry_point_clicked",surface:i});var j=(i=f==null?void 0:f.skipLinkUrlRewrite)!=null?i:!1,k=(i=f==null?void 0:f.startCallImmediately)!=null?i:!1;l.loadImmediately(function(i){try{c("promiseDone")(i.joinMeetup({context:b,funnelSessionID:f==null?void 0:f.funnelSessionID,hasVideo:f==null?void 0:f.hasVideo,linkUrl:e,skipLinkUrlRewrite:j,startCallImmediately:k,trigger:f==null?void 0:f.trigger})),a!=null&&a()}catch(a){c("FBLogger")("comet").catching(a).mustfix("Unable to join video chat room"),d("cometPushToast").cometPushErrorToast({message:h._("__JHASH__zA1wuqQVo5W__JHASH__")})}finally{g(!1)}})},[a,b]);return[e,f]}g["default"]=a}),98);
__d("StoriesTrayErrorCardLazyLoaded.react",["JSResourceForInteraction","lazyLoadComponent"],(function(a,b,c,d,e,f,g){"use strict";a=c("lazyLoadComponent")(c("JSResourceForInteraction")("StoriesTrayErrorCard.react").__setRef("StoriesTrayErrorCardLazyLoaded.react"));g["default"]=a}),98);
__d("LiveVirtualEventViewerState",[],(function(a,b,c,d,e,f){a=Object.freeze({PRE_LIVE:"pre_live",COUNTDOWN:"countdown",IS_LIVE:"is_live",PREPARING_VOD:"preparing_vod",WAS_LIVE:"was_live",WAITING_FOR_BROADCAST:"waiting_for_broadcast",PAST_WITH_NO_BROADCAST:"past_with_no_broadcast"});f["default"]=a}),66);
__d("EventCometPermalinkMoreActionsMenuQuery_facebookRelayOperation",[],(function(a,b,c,d,e,f){e.exports="6643899438993530"}),null);/*FB_PKG_DELIM*/
__d("GroupsCometNotifLandingDialogAdminAssistChatsDialogQuery.graphql",["GroupsCometNotifLandingDialogAdminAssistChatsDialogQuery_facebookRelayOperation","relay-runtime"],(function(a,b,c,d,e,f){"use strict";a=function(){var a=[{defaultValue:null,kind:"LocalArgument",name:"groupID"}],c=[{kind:"Variable",name:"id",variableName:"groupID"}],d={alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},e={alias:null,args:null,kind:"ScalarField",name:"title",storageKey:null},f={alias:null,args:null,kind:"ScalarField",name:"body",storageKey:null},g={alias:null,args:null,kind:"ScalarField",name:"uri",storageKey:null},h={alias:null,args:null,kind:"ScalarField",name:"primary_cta",storageKey:null},i={alias:null,args:null,kind:"ScalarField",name:"secondary_cta",storageKey:null},j={alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null},k=[j,d],l=[{alias:null,args:null,concreteType:"Image",kind:"LinkedField",name:"image_source",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"height",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"scale",storageKey:null},g,{alias:null,args:null,kind:"ScalarField",name:"width",storageKey:null}],storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"label",storageKey:null}],m=[e];return{fragment:{argumentDefinitions:a,kind:"Fragment",metadata:null,name:"GroupsCometNotifLandingDialogAdminAssistChatsDialogQuery",selections:[{kind:"RequiredField",field:{alias:null,args:c,concreteType:"Group",kind:"LinkedField",name:"group",plural:!1,selections:[{kind:"RequiredField",field:d,action:"THROW",path:"group.id"},{args:null,kind:"FragmentSpread",name:"useGroupsCometOnClickChatCreate_group"},{args:null,kind:"FragmentSpread",name:"useGroupsCometLeadersEngagementLogger_group"},{args:null,kind:"FragmentSpread",name:"GroupsCometCommunityChatsCreateChatDialogContent_group"},{kind:"RequiredField",field:{alias:null,args:null,concreteType:"XFBCommunityChatsEducation",kind:"LinkedField",name:"education",plural:!1,selections:[{kind:"RequiredField",field:e,action:"THROW",path:"group.education.title"}],storageKey:null},action:"THROW",path:"group.education"},{kind:"RequiredField",field:{alias:null,args:null,concreteType:"XFBCommunityChatsAdminAssistOptOutUpsellObject",kind:"LinkedField",name:"admin_assist_chat_opt_out_upsell",plural:!1,selections:[{kind:"RequiredField",field:e,action:"THROW",path:"group.admin_assist_chat_opt_out_upsell.title"},{kind:"RequiredField",field:f,action:"THROW",path:"group.admin_assist_chat_opt_out_upsell.body"},{kind:"RequiredField",field:{alias:null,args:null,concreteType:"Image",kind:"LinkedField",name:"image_comet",plural:!1,selections:[{kind:"RequiredField",field:g,action:"THROW",path:"group.admin_assist_chat_opt_out_upsell.image_comet.uri"}],storageKey:null},action:"THROW",path:"group.admin_assist_chat_opt_out_upsell.image_comet"},{kind:"RequiredField",field:{alias:null,args:null,concreteType:"XFBQPBulletListItem",kind:"LinkedField",name:"education_info_list",plural:!0,selections:[{kind:"RequiredField",field:e,action:"THROW",path:"group.admin_assist_chat_opt_out_upsell.education_info_list.title"}],storageKey:null},action:"THROW",path:"group.admin_assist_chat_opt_out_upsell.education_info_list"},{kind:"RequiredField",field:{alias:null,args:null,concreteType:"XFBQPBulletListItem",kind:"LinkedField",name:"admin_assist_info",plural:!1,selections:[{kind:"RequiredField",field:e,action:"THROW",path:"group.admin_assist_chat_opt_out_upsell.admin_assist_info.title"}],storageKey:null},action:"THROW",path:"group.admin_assist_chat_opt_out_upsell.admin_assist_info"},{kind:"RequiredField",field:h,action:"THROW",path:"group.admin_assist_chat_opt_out_upsell.primary_cta"},{kind:"RequiredField",field:i,action:"THROW",path:"group.admin_assist_chat_opt_out_upsell.secondary_cta"}],storageKey:null},action:"THROW",path:"group.admin_assist_chat_opt_out_upsell"}],storageKey:null},action:"THROW",path:"group"}],type:"Query",abstractKey:null},kind:"Request",operation:{argumentDefinitions:a,kind:"Operation",name:"GroupsCometNotifLandingDialogAdminAssistChatsDialogQuery",selections:[{alias:null,args:c,concreteType:"Group",kind:"LinkedField",name:"group",plural:!1,selections:[d,{alias:null,args:null,concreteType:"Group",kind:"LinkedField",name:"if_viewer_can_request_to_participate_in_forum",plural:!1,selections:k,storageKey:null},{alias:null,args:null,concreteType:"Group",kind:"LinkedField",name:"if_viewer_can_see_pending_forum_participant_experience",plural:!1,selections:k,storageKey:null},{alias:null,args:null,concreteType:"MessengerCommunity",kind:"LinkedField",name:"community",plural:!1,selections:[{alias:null,args:null,concreteType:"MessengerCommunity",kind:"LinkedField",name:"if_viewer_can_see_admod_chat",plural:!1,selections:[{alias:"admod_create_chat_nux",args:[{kind:"Literal",name:"nux_id",value:10013}],concreteType:null,kind:"LinkedField",name:"nux",plural:!1,selections:[j,{kind:"InlineFragment",selections:[{alias:null,args:null,kind:"ScalarField",name:"nux_id",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"should_show",storageKey:null}],type:"DefaultNUX",abstractKey:null},d],storageKey:"nux(nux_id:10013)"},d],storageKey:null},{alias:null,args:null,concreteType:"MessengerCommunity",kind:"LinkedField",name:"if_viewer_can_use_chat_templates",plural:!1,selections:k,storageKey:null},{alias:null,args:null,concreteType:"MessengerCommunity",kind:"LinkedField",name:"if_viewer_can_create_chat_as_admod",plural:!1,selections:k,storageKey:null},{alias:null,args:null,concreteType:"MessengerCommunity",kind:"LinkedField",name:"if_viewer_can_create_member_chat_as_member",plural:!1,selections:k,storageKey:null},d],storageKey:null},{alias:null,args:null,concreteType:"GroupLeadersEngagementLoggingSettings",kind:"LinkedField",name:"leaders_engagement_logging_settings",plural:!1,selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"comet_surface_mappings",plural:!0,selections:[j,{alias:null,args:null,kind:"ScalarField",name:"surface",storageKey:null},{kind:"InlineFragment",selections:[{alias:null,args:null,kind:"ScalarField",name:"trace_policy",storageKey:null}],type:"GroupLeadersEngagementLoggingExactCometSurfaceMapping",abstractKey:null},{kind:"InlineFragment",selections:[{alias:null,args:null,kind:"ScalarField",name:"prefixes",storageKey:null}],type:"GroupLeadersEngagementLoggingPrefixCometSurfaceMapping",abstractKey:null}],storageKey:null}],storageKey:null},{alias:null,args:null,concreteType:"XFBCommunityChatsEducation",kind:"LinkedField",name:"education",plural:!1,selections:[f,{alias:null,args:null,concreteType:"XFBEducationBulletDetail",kind:"LinkedField",name:"how_it_works_section",plural:!0,selections:l,storageKey:null},{alias:null,args:null,concreteType:"XFBEducationBulletDetail",kind:"LinkedField",name:"how_it_helps_section",plural:!0,selections:l,storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"cta",storageKey:null},e],storageKey:null},{alias:null,args:null,concreteType:"XFBCommunityChatsAdminAssistOptOutUpsellObject",kind:"LinkedField",name:"admin_assist_chat_opt_out_upsell",plural:!1,selections:[e,f,{alias:null,args:null,concreteType:"Image",kind:"LinkedField",name:"image_comet",plural:!1,selections:[g],storageKey:null},{alias:null,args:null,concreteType:"XFBQPBulletListItem",kind:"LinkedField",name:"education_info_list",plural:!0,selections:m,storageKey:null},{alias:null,args:null,concreteType:"XFBQPBulletListItem",kind:"LinkedField",name:"admin_assist_info",plural:!1,selections:m,storageKey:null},h,i],storageKey:null}],storageKey:null}]},params:{id:b("GroupsCometNotifLandingDialogAdminAssistChatsDialogQuery_facebookRelayOperation"),metadata:{},name:"GroupsCometNotifLandingDialogAdminAssistChatsDialogQuery",operationKind:"query",text:null}}}();b("relay-runtime").PreloadableQueryRegistry.set(a.params.id,a);e.exports=a}),null);
__d("GroupsCometNotifLandingDialogAdminAssistChatsDialog.react",["fbt","ix","CometColumn.react","CometColumnItem.react","CometDialogButtonGroupFooter.react","CometDivider.react","CometIcon.react","CometLink.react","CometMultiStepDialogLegacy.react","CometQuickPromotionHeaderComponent.react","CometRelay","CometRow.react","CometRowItem.react","GroupsCometCommunityChatsCreateChatDialogContent.react","GroupsCometNotifLandingDialogAdminAssistChatsDialogQuery.graphql","TetraCircleButton.react","TetraText.react","fbicon","react","useGroupsCometLeadersEngagementLogger","useGroupsCometOnClickChatCreate.react"],(function(a,b,c,d,e,f,g,h,i){"use strict";var j,k=d("react");e=d("react");var l=e.useEffect,m=e.useRef,n={divider:{marginStart:"x1lpp0xw",$$css:!0}};function a(a){var e=a.props;a=a.queries;a=d("CometRelay").usePreloadedQuery(j!==void 0?j:j=b("GroupsCometNotifLandingDialogAdminAssistChatsDialogQuery.graphql"),a.queryReference);var f=a.group,g=c("useGroupsCometLeadersEngagementLogger")(f,"aa_create_chat_notification",!1),o=m(!1);l(function(){o.current||(g({action:"impression",action_subtype:"none",content_type:"admin_assist",extra_metadata:{group_id:f.id}}),o.current=!0)});a=c("useGroupsCometOnClickChatCreate.react")({alwaysShowTemplates:!1,entryPoint:"notifications",group$key:f,isNextDialog:!1,prevDialogClose:function(){},shouldGoToMessenger:!1,surface:"admin_assist"});var p=a.onClickCreate;return k.jsx(c("CometMultiStepDialogLegacy.react"),{onClose:e.onClose,children:function(a){var b;return k.jsxs(c("CometColumn.react"),{children:[k.jsx(c("CometColumnItem.react"),{children:k.jsx(c("CometQuickPromotionHeaderComponent.react"),{header:{faviconColor:"WHITE",imageResizingDisabled:!0,imageUri:f.admin_assist_chat_opt_out_upsell.image_comet.uri,type:"fullbleed"},headerContextComponent:k.jsx(c("TetraCircleButton.react"),{color:"white",icon:d("fbicon")._(i("478233"),20),label:h._("__JHASH__DETcIVYwvSl__JHASH__"),onPress:e.onClose,size:32,type:"dark-overlay"}),isLongTextQP:!1})}),k.jsxs(c("CometColumn.react"),{paddingTop:0,paddingVertical:16,children:[k.jsxs(c("CometColumn.react"),{paddingVertical:16,spacing:12,children:[k.jsx(c("CometColumnItem.react"),{paddingHorizontal:16,children:k.jsx(c("TetraText.react"),{type:"headlineEmphasized2",children:f.admin_assist_chat_opt_out_upsell.title})}),k.jsx(c("CometColumnItem.react"),{paddingHorizontal:16,children:k.jsx(c("TetraText.react"),{type:"body2",children:f.admin_assist_chat_opt_out_upsell.body})})]}),k.jsxs(c("CometRow.react"),{align:"start",paddingHorizontal:16,verticalAlign:"center",children:[k.jsx(c("CometRowItem.react"),{children:k.jsx(c("CometIcon.react"),{icon:d("fbicon")._(i("542884"),24)})}),k.jsx(c("CometRowItem.react"),{expanding:!0,children:k.jsx(c("TetraText.react"),{type:"headlineEmphasized4",children:f.admin_assist_chat_opt_out_upsell.education_info_list[0].title})})]}),k.jsx(c("CometColumnItem.react"),{paddingHorizontal:16,paddingTop:12,xstyle:n.divider,children:k.jsx(c("CometDivider.react"),{})}),k.jsxs(c("CometRow.react"),{align:"start",paddingHorizontal:16,verticalAlign:"center",children:[k.jsx(c("CometRowItem.react"),{children:k.jsx(c("CometIcon.react"),{icon:d("fbicon")._(i("1404281"),24)})}),k.jsx(c("CometRowItem.react"),{expanding:!0,children:k.jsx(c("TetraText.react"),{type:"headlineEmphasized4",children:h._("__JHASH__a5vBCY7vfme__JHASH__",[h._param("Community Standards Link",k.jsx(c("CometLink.react"),{display:"inline",href:"https://transparency.fb.com/policies/community-standards/",children:k.jsx(c("TetraText.react"),{color:"blueLink",type:"body3",children:h._("__JHASH__uQ3Dzii8Yh___JHASH__")})}))])})})]}),k.jsx(c("CometColumnItem.react"),{paddingHorizontal:16,paddingTop:12,xstyle:n.divider,children:k.jsx(c("CometDivider.react"),{})}),k.jsxs(c("CometRow.react"),{align:"start",paddingHorizontal:16,verticalAlign:"center",children:[k.jsx(c("CometRowItem.react"),{children:k.jsx(c("CometIcon.react"),{icon:d("fbicon")._(i("183547"),24)})}),k.jsx(c("CometRowItem.react"),{expanding:!0,children:k.jsx(c("TetraText.react"),{type:"headlineEmphasized4",children:(b=f.admin_assist_chat_opt_out_upsell.admin_assist_info)==null?void 0:b.title})})]})]}),k.jsx(c("CometColumnItem.react"),{children:k.jsx(c("CometDialogButtonGroupFooter.react"),{direction:"backward",primary:{label:f.admin_assist_chat_opt_out_upsell.primary_cta,onPress:function(){p(),g({action:"click",action_subtype:"create_chat",content_type:"admin_assist",extra_metadata:{group_id:f.id}})}},secondary:{label:f.admin_assist_chat_opt_out_upsell.secondary_cta,onPress:function(){g({action:"click",action_subtype:"learn_more",content_type:"other"}),a(function(){return k.jsx(c("GroupsCometCommunityChatsCreateChatDialogContent.react"),{chatCreateEntryPoint:"notifications",chatCreateSurface:"group_mall_qp",group$key:f,onClose:e.onClose})},{title:f.education.title})}}})})]})}})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);