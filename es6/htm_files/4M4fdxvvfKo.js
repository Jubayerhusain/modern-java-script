;/*FB_PKG_DELIM*/

__d("EventCometUniversalRSVPButtonGroup_event.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"EventCometUniversalRSVPButtonGroup_event",selections:[{alias:"rsvp_button_group_renderer",args:[{kind:"Literal",name:"supported",value:"3A4icy"}],concreteType:null,kind:"LinkedField",name:"rsvp_style_renderer",plural:!1,selections:[{kind:"InlineFragment",selections:[{args:null,documentName:"EventCometUniversalRSVPButtonGroup_event",fragmentName:"PrivateEventCometRSVPButtonGroupRenderer_rsvpStyleRenderer",fragmentPropName:"rsvpStyleRenderer",kind:"ModuleImport"}],type:"PrivateRsvpStyleRenderer",abstractKey:null},{kind:"InlineFragment",selections:[{args:null,documentName:"EventCometUniversalRSVPButtonGroup_event",fragmentName:"PublicEventCometRSVPButtonGroupRenderer_rsvpStyleRenderer",fragmentPropName:"rsvpStyleRenderer",kind:"ModuleImport"}],type:"PublicRsvpStyleRenderer",abstractKey:null},{kind:"InlineFragment",selections:[{args:null,documentName:"EventCometUniversalRSVPButtonGroup_event",fragmentName:"EventsGeminiPrivateEventRSVPButtonGroupRenderer_rsvpStyleRenderer",fragmentPropName:"rsvpStyleRenderer",kind:"ModuleImport"}],type:"WorkPrivateRsvpStyleRenderer",abstractKey:null},{kind:"InlineFragment",selections:[{args:null,documentName:"EventCometUniversalRSVPButtonGroup_event",fragmentName:"EventsGeminiPublicEventRSVPButtonGroupRenderer_rsvpStyleRenderer",fragmentPropName:"rsvpStyleRenderer",kind:"ModuleImport"}],type:"WorkPublicRsvpStyleRenderer",abstractKey:null},{kind:"InlineFragment",selections:[{args:null,documentName:"EventCometUniversalRSVPButtonGroup_event",fragmentName:"EventsGeminiEnhancedRsvpButtonStyleRenderer_rsvpStyleRenderer",fragmentPropName:"rsvpStyleRenderer",kind:"ModuleImport"}],type:"EventsGeminiEnhancedRsvpStyleRenderer",abstractKey:null}],storageKey:'rsvp_style_renderer(supported:"3A4icy")'}],type:"Event",abstractKey:null};e.exports=a}),null);
__d("EventCometPermalinkPOEDuplicateButton_event.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"EventCometPermalinkPOEDuplicateButton_event",selections:[{kind:"RequiredField",field:{alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},action:"THROW",path:"id"},{args:null,kind:"FragmentSpread",name:"EventCometPermalinkDuplicateButton_event"}],type:"Event",abstractKey:null};e.exports=a}),null);
__d("EventCometPermalinkPOEViewAsVisitorButton_event.graphql",[],(function(a,b,c,d,e,f){"use strict";a=function(){var a={alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},b=[a];return{argumentDefinitions:[],kind:"Fragment",metadata:null,name:"EventCometPermalinkPOEViewAsVisitorButton_event",selections:[a,{args:null,kind:"FragmentSpread",name:"useEventCometHandleChangeActor_event"},{alias:null,args:null,concreteType:"AvailableActorsConnection",kind:"LinkedField",name:"available_actors",plural:!1,selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"nodes",plural:!0,selections:[{kind:"InlineFragment",selections:b,type:"User",abstractKey:null}],storageKey:null}],storageKey:null},{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"event_creator",plural:!1,selections:b,storageKey:null}],type:"Event",abstractKey:null}}();e.exports=a}),null);
__d("EventCometUniversalRSVPButtonActions_event.graphql",[],(function(a,b,c,d,e,f){"use strict";a=function(){var a=[{kind:"Literal",name:"render_location",value:"COMET_EVENTS_RSVP"}];return{argumentDefinitions:[],kind:"Fragment",metadata:null,name:"EventCometUniversalRSVPButtonActions_event",selections:[{args:null,kind:"FragmentSpread",name:"EventCometUniversalRSVPButton_event"},{args:null,kind:"FragmentSpread",name:"EventCometUniversalRSVPButtonGroup_event"},{alias:"privacy_scope_for_toast",args:a,concreteType:"PrivacyScope",kind:"LinkedField",name:"event_connection_data_privacy_scope",plural:!1,selections:[{alias:null,args:[{kind:"Literal",name:"supported",value:"3cEzY3"}],concreteType:null,kind:"LinkedField",name:"privacy_scope_renderer",plural:!1,selections:[{alias:null,args:a,concreteType:"PrivacyScope",kind:"LinkedField",name:"privacy_scope_for_location",plural:!1,selections:[{args:null,kind:"FragmentSpread",name:"useEventsRSVPPrivacyToast_scope"}],storageKey:'privacy_scope_for_location(render_location:"COMET_EVENTS_RSVP")'}],storageKey:'privacy_scope_renderer(supported:"3cEzY3")'}],storageKey:'event_connection_data_privacy_scope(render_location:"COMET_EVENTS_RSVP")'},{alias:null,args:null,kind:"ScalarField",name:"rsvp_style",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"should_show_recurring_event_rsvp_button",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"viewer_guest_status",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"viewer_watch_status",storageKey:null}],type:"Event",abstractKey:null}}();e.exports=a}),null);
__d("EventCometInviteUserVoiceActorProvider_event.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"EventCometInviteUserVoiceActorProvider_event",selections:[{alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null}],type:"Event",abstractKey:null};e.exports=a}),null);
__d("useEventCometPermalinkInviteAction_event.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"useEventCometPermalinkInviteAction_event",selections:[{kind:"RequiredField",field:{alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},action:"THROW",path:"id"},{alias:null,args:null,kind:"ScalarField",name:"event_kind",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"can_viewer_invite",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"can_page_viewer_invite_as_user",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"can_profile_plus_viewer_invite_as_user",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"can_profile_plus_viewer_invite_followers",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"acting_account_name",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"acting_account_id",storageKey:null}],type:"Event",abstractKey:null};e.exports=a}),null);
__d("useEventCometGetPermalinkActionButtons_event.graphql",[],(function(a,b,c,d,e,f){"use strict";a=function(){var a={alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},b=[{alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null}];return{argumentDefinitions:[],kind:"Fragment",metadata:null,name:"useEventCometGetPermalinkActionButtons_event",selections:[{args:null,kind:"FragmentSpread",name:"EventCometPermalinkPOEViewAsVisitorButton_event"},{args:null,kind:"FragmentSpread",name:"EventCometUniversalRSVPButtonActions_event"},{args:null,kind:"FragmentSpread",name:"useEventCometPermalinkInviteAction_event"},{args:null,kind:"FragmentSpread",name:"EventCometPermalinkPOEDuplicateButton_event"},{kind:"RequiredField",field:a,action:"THROW",path:"id"},{alias:"eventUrl",args:[{kind:"Literal",name:"site",value:"comet"}],kind:"ScalarField",name:"url",storageKey:'url(site:"comet")'},{alias:null,args:null,concreteType:"CanBoostEventRenderer",kind:"LinkedField",name:"can_boost_event_renderer",plural:!1,selections:[{args:null,documentName:"useEventCometGetPermalinkActionButtons_event",fragmentName:"EventCometBoostEventButtonRenderer_renderer",fragmentPropName:"renderer",kind:"ModuleImport"}],storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"can_viewer_see_rsvp_button",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"can_viewer_share",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"can_viewer_create_repeat_event",storageKey:null},{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"header_action_menu_items",plural:!0,selections:b,storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"is_pay_to_access_content",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"is_viewer_admin",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"is_event_draft",storageKey:null},{alias:null,args:null,concreteType:"Event",kind:"LinkedField",name:"if_viewer_can_invite_off_fb",plural:!1,selections:[{args:null,documentName:"useEventCometGetPermalinkActionButtons_event_if_viewer_can_invite_off_fb",fragmentName:"EventCometPermalinkOffPlatformInviteAction_event",fragmentPropName:"event",kind:"ModuleImport"}],storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"profile_plus_admin_id_if_self",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"profile_plus_admin_name_if_self",storageKey:null},{alias:null,args:null,concreteType:"Event",kind:"LinkedField",name:"if_viewer_can_publish_draft_event",plural:!1,selections:[{args:null,documentName:"useEventCometGetPermalinkActionButtons_event_if_viewer_can_publish_draft_event",fragmentName:"EventCometPermalinkPublishAction_event",fragmentPropName:"event",kind:"ModuleImport"}],storageKey:null},{alias:null,args:null,concreteType:"OnlineEventSetup",kind:"LinkedField",name:"online_event_setup",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"type",storageKey:null}],storageKey:null},{alias:null,args:null,concreteType:"XFBPaidOnlineEventContext",kind:"LinkedField",name:"paid_online_event_context",plural:!1,selections:[{alias:null,args:null,concreteType:"XFBPaidOnlineEventContext",kind:"LinkedField",name:"if_viewer_can_see_permalink_education_tips",plural:!1,selections:b,storageKey:null}],storageKey:null},{kind:"RequiredField",field:{alias:null,args:null,concreteType:"Event",kind:"LinkedField",name:"parent_if_exists_or_self",plural:!1,selections:[a],storageKey:null},action:"THROW",path:"parent_if_exists_or_self"},{kind:"RequiredField",field:{alias:null,args:null,concreteType:"Event",kind:"LinkedField",name:"event_for_edit_flow",plural:!1,selections:[{alias:null,args:null,concreteType:"Event",kind:"LinkedField",name:"if_viewer_can_edit",plural:!1,selections:[{args:null,documentName:"useEventCometGetPermalinkActionButtons_event__if_viewer_can_edit",fragmentName:"EventCometPermalinkEditAction_event",fragmentPropName:"event",kind:"ModuleImport"}],storageKey:null},{kind:"RequiredField",field:a,action:"THROW",path:"event_for_edit_flow.id"}],storageKey:null},action:"THROW",path:"event_for_edit_flow"},{alias:null,args:null,kind:"ScalarField",name:"is_eligible_for_poe_view_as_visitor_button",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"is_past",storageKey:null},{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"chat",plural:!1,selections:[a,{alias:null,args:null,kind:"ScalarField",name:"group_thread_subtype",storageKey:null},{alias:null,args:null,concreteType:"MessageThreadJoinableMode",kind:"LinkedField",name:"joinable_mode",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"link",storageKey:null}],storageKey:null}],storageKey:null}],type:"Event",abstractKey:null}}();e.exports=a}),null);
__d("useEventCometHandleChangeActorMutation_facebookRelayOperation",[],(function(a,b,c,d,e,f){e.exports="4950399721675049"}),null);
__d("useEventCometHandleChangeActorMutation.graphql",["useEventCometHandleChangeActorMutation_facebookRelayOperation"],(function(a,b,c,d,e,f){"use strict";a=function(){var a=[{defaultValue:null,kind:"LocalArgument",name:"input"}],c=[{kind:"Variable",name:"input",variableName:"input"}],d={alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null};return{fragment:{argumentDefinitions:a,kind:"Fragment",metadata:null,name:"useEventCometHandleChangeActorMutation",selections:[{alias:null,args:c,concreteType:"EventSetDefaultActorResponsePayload",kind:"LinkedField",name:"event_set_default_actor",plural:!1,selections:[{alias:null,args:null,concreteType:"Event",kind:"LinkedField",name:"event",plural:!1,selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"default_actor",plural:!1,selections:[d],storageKey:null}],storageKey:null}],storageKey:null}],type:"Mutation",abstractKey:null},kind:"Request",operation:{argumentDefinitions:a,kind:"Operation",name:"useEventCometHandleChangeActorMutation",selections:[{alias:null,args:c,concreteType:"EventSetDefaultActorResponsePayload",kind:"LinkedField",name:"event_set_default_actor",plural:!1,selections:[{alias:null,args:null,concreteType:"Event",kind:"LinkedField",name:"event",plural:!1,selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"default_actor",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null},d],storageKey:null},d],storageKey:null}],storageKey:null}]},params:{id:b("useEventCometHandleChangeActorMutation_facebookRelayOperation"),metadata:{},name:"useEventCometHandleChangeActorMutation",operationKind:"mutation",text:null}}}();e.exports=a}),null);
__d("useEventCometHandleChangeActor_event.graphql",[],(function(a,b,c,d,e,f){"use strict";a=function(){var a={alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null};return{argumentDefinitions:[],kind:"Fragment",metadata:null,name:"useEventCometHandleChangeActor_event",selections:[{alias:null,args:null,concreteType:"Group",kind:"LinkedField",name:"created_for_group",plural:!1,selections:[a,{alias:null,args:null,kind:"ScalarField",name:"group_address",storageKey:null}],storageKey:null},a],type:"Event",abstractKey:null}}();e.exports=a}),null);
__d("EventCometPermalinkDuplicateButton_event.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"EventCometPermalinkDuplicateButton_event",selections:[{kind:"RequiredField",field:{alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},action:"THROW",path:"id"}],type:"Event",abstractKey:null};e.exports=a}),null);
__d("EventCometUniversalRSVPButtonGroup.react",["CometRelay","EventCometUniversalRSVPButtonGroup_event.graphql","react"],(function(a,b,c,d,e,f,g){"use strict";var h,i=d("react");function a(a){var c=a.event,e=a.onChangeRSVP;a=a.showToast;c=d("CometRelay").useFragment(h!==void 0?h:h=b("EventCometUniversalRSVPButtonGroup_event.graphql"),c);return i.jsx(d("CometRelay").MatchContainer,{match:c.rsvp_button_group_renderer,props:{onChangeRSVP:e,showToast:a}})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("EventCometPOEPayToAccessStrings",["fbt","ix","CometLink.react","ContentRefComet","compactArray","react"],(function(a,b,c,d,e,f,g,h,i){"use strict";var j=d("react"),k=d("ContentRefComet").get("WHERE_TO_HOST_POE","PAID_ONLINE_EVENTS"),l="https://business.facebook.com/creatorstudio/?tab=ct_sound_collection&mode=facebook&sound_collection_tab=sound_tracks";function a(){return h._("__JHASH__yKgOKuwtTA5__JHASH__")}a.displayName=a.name+" [from "+f.id+"]";function b(){return h._("__JHASH__uNzgMXKQ2Nh__JHASH__")}b.displayName=b.name+" [from "+f.id+"]";function e(){return h._("__JHASH__O_8fQlegSKC__JHASH__")}e.displayName=e.name+" [from "+f.id+"]";function m(){return h._("__JHASH__bLotWKFHzkT__JHASH__")}m.displayName=m.name+" [from "+f.id+"]";function n(){return h._("__JHASH__oVb81mkMjAM__JHASH__")}n.displayName=n.name+" [from "+f.id+"]";function o(a){return a===null?h._("__JHASH___QzX_HKy2qH__JHASH__"):h._("__JHASH__eRjsbFBmCqR__JHASH__",[h._param("date",a)])}function p(){return h._("__JHASH___buQZt8NafL__JHASH__")}p.displayName=p.name+" [from "+f.id+"]";function q(){return h._("__JHASH__MitZhAnM59z__JHASH__")}q.displayName=q.name+" [from "+f.id+"]";function r(){return[{description:h._("__JHASH__jqF43mg-8ff__JHASH__"),icon:i("1555021"),title:h._("__JHASH__dPSnQPaOyyS__JHASH__")},{description:h._("__JHASH__cTAJly9KNvL__JHASH__"),icon:i("1583614"),title:h._("__JHASH__CEJ8nZP8kjy__JHASH__")},{description:h._("__JHASH___MljTd1FORI__JHASH__"),icon:i("1292656"),title:h._("__JHASH___JDT7xvg2FP__JHASH__")}]}function s(){return h._("__JHASH__kYaiLcouxA2__JHASH__")}s.displayName=s.name+" [from "+f.id+"]";function t(){return h._("__JHASH__1TE-NWBDLxf__JHASH__")}t.displayName=t.name+" [from "+f.id+"]";function u(){return h._("__JHASH__y5dWYfKxmad__JHASH__")}u.displayName=u.name+" [from "+f.id+"]";function v(){return h._("__JHASH__ALooSb48mD2__JHASH__")}v.displayName=v.name+" [from "+f.id+"]";function w(a){a=a==="fb_live"?[{description:h._("__JHASH__ATi0eJGB3zk__JHASH__",[h._implicitParam("=m2",j.jsx("b",{children:h._("__JHASH__p4VyIIA-nKq__JHASH__")})),h._implicitParam("=m4",j.jsx(c("CometLink.react"),{color:"highlight",href:k,target:"_blank",children:h._("__JHASH__2t-I6QnpXRF__JHASH__")}))]),icon:i("1626196"),title:h._("__JHASH__O4etYhPTxeq__JHASH__")},{description:h._("__JHASH__3PF19-kEAXq__JHASH__",[h._implicitParam("=m1",j.jsx(c("CometLink.react"),{color:"highlight",href:l,target:"_blank",children:h._("__JHASH__fKpGN_F_1eo__JHASH__")}))]),icon:i("1729272"),title:h._("__JHASH__I04dP3qXdPI__JHASH__")}]:a==="messenger_room"?{description:h._("__JHASH__Qh57mRiM7KM__JHASH__",[h._implicitParam("=m2",j.jsx("b",{children:h._("__JHASH__m3DMqia16ZC__JHASH__")})),h._implicitParam("=m4",j.jsx(c("CometLink.react"),{color:"highlight",href:k,target:"_blank",children:h._("__JHASH__DgMtfmdho1X__JHASH__")}))]),icon:i("1626196"),title:h._("__JHASH__zE31mlmIInz__JHASH__")}:null;return c("compactArray")([{description:h._("__JHASH__J-KsiG-EPAN__JHASH__",[h._implicitParam("=m2",j.jsx(c("CometLink.react"),{color:"highlight",href:d("ContentRefComet").get("PROMOTING_POE","PAID_ONLINE_EVENTS"),target:"_blank",children:h._("__JHASH__l9dx9HMKhuW__JHASH__")}))]),icon:i("1260012"),title:h._("__JHASH__7eVBB-RlDje__JHASH__")},{description:h._("__JHASH__JEO6Fn2OkJf__JHASH__",[h._implicitParam("=m1",j.jsx(c("CometLink.react"),{color:"highlight",href:d("ContentRefComet").get("OFFER_FREE_ACCESS","PAID_ONLINE_EVENTS"),target:"_blank",children:h._("__JHASH__vscCaBh3-qR__JHASH__")}))]),icon:i("1447587"),title:h._("__JHASH__pHNa_C33--8__JHASH__")},{description:h._("__JHASH__Q-7rU19dz8t__JHASH__",[h._implicitParam("=m1",j.jsx(c("CometLink.react"),{color:"highlight",href:d("ContentRefComet").get("CREATE_EXCLUSIVE_POST","PAID_ONLINE_EVENTS"),target:"_blank",children:h._("__JHASH___l81xXd9a75__JHASH__")}))]),icon:i("1583614"),title:h._("__JHASH__feIL5DciERS__JHASH__")}].concat(a))}function x(){return h._("__JHASH__F7Oh7CUENGz__JHASH__")}x.displayName=x.name+" [from "+f.id+"]";g.getPayToAccessCancelOrDeleteEventCancelText=a;g.getPayToAccessCancelOrDeleteEventDeleteText=b;g.getPayToAccessEditEventBannerText=e;g.getPayToAccessEditTimeDisclaimer=m;g.getPayToAccessEditTimeModalConfirmButtonText=n;g.getPayToAccessEditTimeModalText=o;g.getPayToAccessEditTimeModalTitle=p;g.getPOECreateFormEducationModalTitle=q;g.getPOECreateFormEducationModalBody=r;g.getPOECreateFormEducationModalConfirmButton=s;g.getPOEEventDetailsTipsEducationModalTitleOnFirstEntry=t;g.getPOEEventDetailsTipsEducationModalTitleFromTipsButton=u;g.getPOEEventDetailsTipsEducationModalDescription=v;g.getPOEEventDetailsTipsEducationModalBody=w;g.getPOEEventDetailsTipsEducationModalConfirmButton=x}),98);
__d("EventCometPermalinkDuplicateButton.react",["ix","Actor","EventCometActionContext","EventCometPermalinkDuplicateButton_event.graphql","RelayHooks","TetraButton.react","XCometEventDuplicateControllerRouteBuilder","fbicon","react"],(function(a,b,c,d,e,f,g,h){"use strict";var i,j=d("react"),k=d("react").useContext;function a(a){var e=a.event$key,f=a.label,g=a.linkTarget;g=g===void 0?"_blank":g;a=a.onPress;a=a===void 0?null:a;var l=k(c("EventCometActionContext")),m=function(){},n=d("Actor").useActor();n=n[0];e=d("RelayHooks").useFragment(i!==void 0?i:i=b("EventCometPermalinkDuplicateButton_event.graphql"),e);return e==null?null:j.jsx(c("TetraButton.react"),{icon:d("fbicon")._(h("500196"),16),label:f,linkProps:{target:g,url:c("XCometEventDuplicateControllerRouteBuilder").buildURL({acontext:JSON.stringify(l),event_id:e.id,host_id:n})},onPress:(f=a)!=null?f:m,type:"secondary"})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("EventCometPermalinkPOEDuplicateButton.react",["fbt","EventCometActionContext","EventCometPermalinkDuplicateButton.react","EventCometPermalinkPOEDuplicateButton_event.graphql","RelayHooks","react","requireDeferred"],(function(a,b,c,d,e,f,g,h){"use strict";var i,j=d("react"),k=d("react").useContext,l=c("requireDeferred")("EventsActionsLogger").__setRef("EventCometPermalinkPOEDuplicateButton.react");function a(a){a=a.event$key;var e=k(c("EventCometActionContext")),f=d("RelayHooks").useFragment(i!==void 0?i:i=b("EventCometPermalinkPOEDuplicateButton_event.graphql"),a);return j.jsx(c("EventCometPermalinkDuplicateButton.react"),{event$key:f,label:h._("__JHASH__Z2tBYtdSmbX__JHASH__"),onPress:function(){l.onReady(function(a){return a.log(f.id,{acontext:JSON.stringify(e),surface:"events_admin_tool",target:"poe_permalink_duplicate_button",type:"click"})})}})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("EventCometPermalinkPOEEducationTipButton.react",["fbt","ix","EventCometActionLoggerDeferred","EventCometPOEPayToAccessStrings","JSResourceForInteraction","TetraButton.react","fbicon","react","useCometLazyDialog"],(function(a,b,c,d,e,f,g,h,i){"use strict";var j=d("react"),k=c("JSResourceForInteraction")("EventCometPOECreateFormEducationModal.react").__setRef("EventCometPermalinkPOEEducationTipButton.react");function a(a){var b=a.eventID,e=a.eventType;a=c("useCometLazyDialog")(k);var f=a[0];return j.jsx(c("TetraButton.react"),{icon:d("fbicon")._(i("496949"),16),label:h._("__JHASH__z4krPxEw4dW__JHASH__"),onPress:function(){d("EventCometActionLoggerDeferred").log(b,{acontext:{},mechanism:"surface",surface:"permalink",target:"pay_to_access_event_tips_button",type:"open"}),f({bodyContent:d("EventCometPOEPayToAccessStrings").getPOEEventDetailsTipsEducationModalBody(e),buttonStyle:"secondary",buttonText:d("EventCometPOEPayToAccessStrings").getPOEEventDetailsTipsEducationModalConfirmButton(),description:d("EventCometPOEPayToAccessStrings").getPOEEventDetailsTipsEducationModalDescription(),entryPoint:"pay_to_access_education_event_details_modal",eventID:b,title:d("EventCometPOEPayToAccessStrings").getPOEEventDetailsTipsEducationModalTitleFromTipsButton()},function(){})},type:"secondary"})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("useEventCometHandleChangeActor.react",["Actor","CometRelay","CometRouteStoreContext","isStringNullOrEmpty","react","useEventCometHandleChangeActorMutation.graphql","useEventCometHandleChangeActor_event.graphql","useNullthrowsViolation"],(function(a,b,c,d,e,f,g){"use strict";var h,i,j=d("react").useContext;function a(a){var e=d("Actor").useActor(),f=e[1],g=d("CometRelay").useFragment(h!==void 0?h:h=b("useEventCometHandleChangeActor_event.graphql"),a);e=d("CometRelay").useMutation(i!==void 0?i:i=b("useEventCometHandleChangeActorMutation.graphql"));var k=e[0],l=c("useNullthrowsViolation")(g==null?void 0:g.id),m=j(c("CometRouteStoreContext")),n=function(){if(m!=null){var a,b;m.invalidatePath("/events");a=g==null?void 0:(a=g.created_for_group)==null?void 0:a.id;b=g==null?void 0:(b=g.created_for_group)==null?void 0:b.group_address;a!=null&&m.invalidatePath("/groups/"+a);c("isStringNullOrEmpty")(b)||m.invalidatePath("/groups/"+b)}};return function(a){f(a),k({onCompleted:n,variables:{input:{default_actor_id:a,event_id:l}}})}}g["default"]=a}),98);
__d("EventCometPermalinkPOEViewAsVisitorButton.react",["fbt","ix","CometRelay","EventCometActionContext","EventCometPermalinkPOEViewAsVisitorButton_event.graphql","EventsActionsLogger","PublicEventCometRoutePropsContext","TetraButton.react","fbicon","react","useEventCometHandleChangeActor.react","useVisibilityObserver"],(function(a,b,c,d,e,f,g,h,i){"use strict";var j,k=d("react");e=d("react");var l=e.useContext,m=e.useEffect;function a(a){var e,f=d("CometRelay").useFragment(j!==void 0?j:j=b("EventCometPermalinkPOEViewAsVisitorButton_event.graphql"),a.event$key),g=c("useEventCometHandleChangeActor.react")(f);a=l(c("PublicEventCometRoutePropsContext"));var n=l(c("EventCometActionContext")),o=f==null?void 0:(e=f.event_creator)==null?void 0:e.id;e=f==null?void 0:(e=f.available_actors)==null?void 0:e.nodes;var p=e==null?void 0:e.filter(function(a){return a.id!=null&&a.id!==o});m(function(){(p==null?void 0:p.length)!==1&&d("EventsActionsLogger").log(null,{acontext:null,surface:d("EventsActionsLogger").Surface.PERMALINK,target:d("EventsActionsLogger").Target.POE_VIEW_AS_VISITOR_BUTTON,type:d("EventsActionsLogger").Type.ERROR},{num_actors:p==null?void 0:p.length})},[p]);e=c("useVisibilityObserver")({onVisible:function(){d("EventsActionsLogger").log(f==null?void 0:f.id,{acontext:n,surface:d("EventsActionsLogger").Surface.PERMALINK,target:d("EventsActionsLogger").Target.POE_VIEW_AS_VISITOR_BUTTON,type:d("EventsActionsLogger").Type.VIEW})}});if(p==null||p.length===0)return null;var q=p[0].id;if(q==null)return null;if(a==null)return null;var r=a.setIsAdminViewingAsPublic;return k.jsx(c("TetraButton.react"),{icon:d("fbicon")._(i("491227"),16),label:h._("__JHASH__0Jv4-yMzQCy__JHASH__"),onPress:function(){g(q),r(!0),d("EventsActionsLogger").log(f==null?void 0:f.id,{acontext:n,surface:d("EventsActionsLogger").Surface.PERMALINK,target:d("EventsActionsLogger").Target.POE_VIEW_AS_VISITOR_BUTTON,type:d("EventsActionsLogger").Type.CLICK})},ref:e,type:"secondary"})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("useEventCometOpenCommunityMessagingChat",["EventCometActionContext","EventCometActionLoggerDeferred","react","useMWChatOpenTabForGroup"],(function(a,b,c,d,e,f,g){"use strict";b=d("react");var h=b.useCallback,i=b.useContext;function a(a,b){var e=c("useMWChatOpenTabForGroup")("groupChats"),f=e[0],g=i(c("EventCometActionContext")),j=b.mechanism,k=b.surface,l=b.actionTarget,m=b.actionType;e=h(function(b){f(b),d("EventCometActionLoggerDeferred").log(a,{acontext:g,mechanism:j,surface:k,target:l,type:m})},[f,a,g,j,k,l,m]);return[e]}g["default"]=a}),98);
__d("EventCometPermalinkSwitchToProfilePlusAction.react",["fbt","ix","CometRelay","JSResourceForInteraction","TetraButton.react","fbicon","goForceFullPageRedirectTo","promiseDone","react"],(function(a,b,c,d,e,f,g,h,i){"use strict";var j=d("react"),k=c("JSResourceForInteraction")("CometProfileSwitchMutation").__setRef("EventCometPermalinkSwitchToProfilePlusAction.react");function a(a){var b=a.eventUrl,e=a.profilePlusID;a=a.profilePlusName;var f=d("CometRelay").useRelayEnvironment();return j.jsx(c("TetraButton.react"),{icon:d("fbicon")._(i("477825"),16),label:h._("__JHASH__90vG26kcSfZ__JHASH__",[h._param("name of profile plus user",a)]),onPress:function(){c("promiseDone")(k.load().then(function(a){a=a.switchProfile;a(f,{profileId:e},{onCompleted:function(){c("goForceFullPageRedirectTo")(b)},onError:function(){}})}))},testid:void 0,type:"secondary"})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("EventCometPermalinkHeaderActionsPlaceholder.react",["CometGlimmer.react","react"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react"),i={actionsRow:{alignItems:"x1qjc9v5",borderBottomStyle:"x1q0q8m5",borderBottomWidth:"x1qhh985",borderEndStyle:"xu3j5b3",borderEndWidth:"xcfux6l",borderStartStyle:"x26u7qi",borderStartWidth:"xm0m39n",borderTopStyle:"x13fuv20",borderTopWidth:"x972fbf",boxSizing:"x9f619",display:"x78zum5",flexDirection:"x1q0g3np",flexGrow:"x1iyjqo2",flexShrink:"xs83m0k",height:"xng8ra",justifyContent:"x1qughib",marginBottom:"xat24cr",marginEnd:"x11i5rnm",marginStart:"x1mh8g0r",marginTop:"xdj266r",minHeight:"x2lwn1j",minWidth:"xeuugli",paddingBottom:"x18d9i69",paddingEnd:"x4uap5",paddingStart:"xkhd6sd",paddingTop:"xexx8yu",position:"x1n2onr6",zIndex:"x1ja2u2z",$$css:!0},buttonPill:{borderTopStartRadius:"xhk9q7s",borderTopEndRadius:"x1otrzb0",borderBottomEndRadius:"x1i1ezom",borderBottomStartRadius:"x1o6z2jb",height:"xc9qbxq",marginStart:"x1i64zmx",width:"xefyazp",$$css:!0},buttonsBar:{alignItems:"x6s0dn4",display:"x78zum5",$$css:!0}};function j(a){var b=a.index;a=a.large;return h.jsxs("div",{className:"x6s0dn4 x78zum5",children:[h.jsx(c("CometGlimmer.react"),{index:b,xstyle:i.buttonPill}),a?h.jsx(c("CometGlimmer.react"),{index:b,xstyle:i.buttonPill}):null]})}j.displayName=j.name+" [from "+f.id+"]";function a(a){var b=a.index;a=a.large;return h.jsxs("div",{className:"x1qjc9v5 x1q0q8m5 x1qhh985 xu3j5b3 xcfux6l x26u7qi xm0m39n x13fuv20 x972fbf x9f619 x78zum5 x1q0g3np x1iyjqo2 xs83m0k xng8ra x1qughib xat24cr x11i5rnm x1mh8g0r xdj266r x2lwn1j xeuugli x18d9i69 x4uap5 xkhd6sd xexx8yu x1n2onr6 x1ja2u2z",children:[h.jsx(j,{index:b,large:a}),h.jsx(j,{index:b,large:a})]})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("EventCometUniversalRSVPButtonActions.react",["CometPlaceholder.react","CometRelay","CometTrackingCodeContext","EventCometPermalinkHeaderActionsPlaceholder.react","EventCometUniversalRSVPButton.react","EventCometUniversalRSVPButtonActions_event.graphql","EventCometUniversalRSVPButtonGroup.react","react","useEventsRSVPPrivacyToast","useRoutePassthroughProps"],(function(a,b,c,d,e,f,g){"use strict";var h,i=d("react"),j=h!==void 0?h:h=b("EventCometUniversalRSVPButtonActions_event.graphql");function k(a){return a!=null&&typeof a==="object"&&a.click_tracking_linkshim_cb!=null&&a.encrypted_click_tracking!=null&&a.encrypted_tracking!=null?a:null}function a(a){var b=a.event,e=a.onChangeRSVP;a=a.showMenuOnLoad;b=d("CometRelay").useFragment(j,b);var f=b.privacy_scope_for_toast,g=b.rsvp_style,h=b.should_show_recurring_event_rsvp_button,l=b.viewer_guest_status,m=b.viewer_watch_status;h=h===!0;f=c("useEventsRSVPPrivacyToast")(f==null?void 0:(f=f.privacy_scope_renderer)==null?void 0:f.privacy_scope_for_location);var n=f[0];f=f[1];g=g==="PUBLIC_RSVP_STYLE"?m==="WATCHED"||m==="GOING":l==="MAYBE"||l==="GOING"||l==="NOT_GOING";m=c("useRoutePassthroughProps")();l=k(m==null?void 0:m.trackingCode);m=i.jsxs(c("CometPlaceholder.react"),{fallback:i.jsx(c("EventCometPermalinkHeaderActionsPlaceholder.react"),{index:0,large:!1}),children:[g&&!h?i.jsx(c("EventCometUniversalRSVPButton.react"),{colorWhenOn:"blue",event:b,showMenuOnLoad:a}):i.jsx(c("EventCometUniversalRSVPButtonGroup.react"),{event:b,onChangeRSVP:e,showToast:f}),n]});if(l)return i.jsx(c("CometTrackingCodeContext").Provider,{value:l,children:m});else return m}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("EventCometInviteUserVoiceActorProvider.react",["Actor","EventCometInviteUserVoiceActorProvider_event.graphql","react"],(function(a,b,c,d,e,f,g){"use strict";var h,i=d("react");h!==void 0?h:h=b("EventCometInviteUserVoiceActorProvider_event.graphql");function a(a){var b=a.children;a=a.initialActorID;return i.jsx(d("Actor").ActorProvider,{initialActorID:a,readonly:!0,children:b})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("EventCometPermalinkInviteAsActingAccountAction.react",["ix","TetraButton.react","fbicon","react"],(function(a,b,c,d,e,f,g,h){"use strict";var i=d("react");function a(a){var b=a.hideLabel;b=b===void 0?!1:b;var e=a.label;a=a.onPress;return i.jsx(c("TetraButton.react"),{icon:d("fbicon")._(h("495078"),16),label:e,labelIsHidden:(e=b)!=null?e:!1,onPress:a,type:"secondary"})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("useEventCometPermalinkInviteAction",["fbt","Actor","CometRelay","CurrentUser","EventCometPermalinkInviteAction.react","EventCometPermalinkInviteAsActingAccountAction.react","EventsActionsLogger","JSResourceForInteraction","goForceFullPageRedirectTo","promiseDone","react","useEventCometPermalinkInviteAction_event.graphql","useIsLoggedOut"],(function(a,b,c,d,e,f,g,h){"use strict";var i,j=d("react"),k=c("JSResourceForInteraction")("CometProfileSwitchMutation").__setRef("useEventCometPermalinkInviteAction");function a(a,e,f){f===void 0&&(f=!1);var g=d("Actor").useActor();g=g[0];var l=d("CometRelay").useRelayEnvironment(),m=d("CometRelay").useFragment(i!==void 0?i:i=b("useEventCometPermalinkInviteAction_event.graphql"),a),n=m.id;a=m.can_viewer_invite===!0;var o=m.can_page_viewer_invite_as_user===!0,p=m.can_profile_plus_viewer_invite_followers===!0,q=m.can_profile_plus_viewer_invite_as_user===!0&&p===!1,r=o&&c("CurrentUser").getID()!==g,s=m.event_kind==="GROUP",t=c("useIsLoggedOut")(),u=e;q&&(u=h._("__JHASH__EZbrAUp-NZR__JHASH__",[h._param("name of personal profile user",m==null?void 0:m.acting_account_name)]));g=o?c("CurrentUser").getID():g;return{button:q?j.jsx(c("EventCometPermalinkInviteAsActingAccountAction.react"),{hideLabel:!1,label:u,onPress:function(){d("EventsActionsLogger").log(null,{acontext:null,surface:d("EventsActionsLogger").Surface.PERMALINK,target:d("EventsActionsLogger").Target.INVITE_AS_PERSONAL_PROFILE_BUTTON,type:d("EventsActionsLogger").Type.CLICK}),c("promiseDone")(k.load().then(function(a){a=a.switchProfile;a(l,{profileId:m==null?void 0:m.acting_account_id},{onCompleted:function(){c("goForceFullPageRedirectTo")(n+"/?onload_action=open_invite_flow")},onError:function(){}})}))}}):a||o||t||p?j.jsx(c("EventCometPermalinkInviteAction.react"),{eventID:n,hideFilterGroups:s,hideLabel:!1,isMultiStepDialog:f,label:e,shouldShowUserVoiceDisclaimerForPageActor:r}):null,initialActorID:g}}g["default"]=a}),98);
__d("EventCometPermalinkMoreAction.react",["fbt","ix","CometEntryPointPopoverTrigger.react","CometPopoverLoadingState.react","EventCometPermalinkMoreActionsMenu.entrypoint","TetraButton.react","TetraIcon.react","fbicon","react"],(function(a,b,c,d,e,f,g,h,i){"use strict";var j=d("react");function a(a){var b=a.eventID,e=a.groupID,f=a.hiddenActions,g=a.isIcon;return j.jsx(c("CometEntryPointPopoverTrigger.react"),{align:"end",entryPointParams:{eventID:b,groupID:e},fallback:j.jsx(c("CometPopoverLoadingState.react"),{}),otherProps:{hiddenActions:f},popoverEntryPoint:c("EventCometPermalinkMoreActionsMenu.entrypoint"),preloadTrigger:"button",children:function(a,b,e,f,k,l){return g===!0?j.jsx(c("TetraIcon.react"),{alt:h._("__JHASH__6dmiecQ7jY___JHASH__"),color:"secondary",icon:d("fbicon")._(i("484387"),20),onHoverIn:f,onHoverOut:k,onPress:b,onPressIn:l,ref:a}):j.jsx(c("TetraButton.react"),{icon:d("fbicon")._(i("484386"),16),label:h._("__JHASH__6dmiecQ7jY___JHASH__"),labelIsHidden:!0,onHoverIn:f,onHoverOut:k,onPress:b,onPressIn:l,ref:a,testid:void 0,type:"secondary"})}})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("OnlineEventSetupType",[],(function(a,b,c,d,e,f){a=Object.freeze({MESSENGER_ROOM:"messenger_room",THIRD_PARTY:"third_party",FB_LIVE:"fb_live",OTHER:"other",NONE:"none"});f["default"]=a}),66);
__d("useEventCometGetPermalinkActionButtons",["fbt","CometRelay","EventCometInviteUserVoiceActorProvider.react","EventCometPermalinkMoreAction.react","EventCometPermalinkPOEDuplicateButton.react","EventCometPermalinkPOEEducationTipButton.react","EventCometPermalinkPOEViewAsVisitorButton.react","EventCometPermalinkShareAction.react","EventCometPermalinkSwitchToProfilePlusAction.react","EventCometUniversalRSVPButtonActions.react","OnlineEventSetupType","getJSEnumSafe","gkx","react","useEventCometGetPermalinkActionButtons_event.graphql","useEventCometOpenCommunityMessagingChat","useEventCometPermalinkInviteAction","usePublicChatShortlinkCallback"],(function(a,b,c,d,e,f,g,h){"use strict";var i,j=d("react");e=d("react");var k=e.useCallback,l=e.useState;function a(a,e,f){var g;e===void 0&&(e=null);a=d("CometRelay").useFragment(i!==void 0?i:i=b("useEventCometGetPermalinkActionButtons_event.graphql"),a);var m=a==null?void 0:a.header_action_menu_items;m=m!=null&&m.length>0;var n=l(!1),o=n[0],p=n[1];n=h._("__JHASH__57JBnrbiYeH__JHASH__");var q=c("useEventCometPermalinkInviteAction")(a,n),r=q.button;q=q.initialActorID;var s=a.can_boost_event_renderer,t=a.can_viewer_create_repeat_event,u=a.can_viewer_see_rsvp_button,v=a.can_viewer_share,w=a.chat,x=a.event_for_edit_flow,y=a.eventUrl,z=a.id,A=a.if_viewer_can_invite_off_fb,B=a.if_viewer_can_publish_draft_event,C=a.is_eligible_for_poe_view_as_visitor_button,D=a.is_event_draft,E=a.is_past,F=a.is_pay_to_access_content,G=a.is_viewer_admin,H=a.paid_online_event_context,I=a.parent_if_exists_or_self,J=a.profile_plus_admin_id_if_self,K=a.profile_plus_admin_name_if_self;I=I.id;I=z!==I?z:void 0;g=c("getJSEnumSafe")(c("OnlineEventSetupType"),a==null?void 0:(g=a.online_event_setup)==null?void 0:g.type);var L=c("gkx")("1341692")&&c("gkx")("4452");A=c("gkx")("7285")&&!!A;L=x.if_viewer_can_edit&&L!==!0&&(C!==!0||E!==!0)?j.jsx(d("CometRelay").MatchContainer,{match:x.if_viewer_can_edit,props:{childEventID:I}},"edit"):J!==null&&K!==null&&y!=null?j.jsx(c("EventCometPermalinkSwitchToProfilePlusAction.react"),{eventUrl:y,profilePlusID:J,profilePlusName:K}):null;x=D!==!0?j.jsx(c("EventCometInviteUserVoiceActorProvider.react"),{initialActorID:q,children:A?j.jsx(d("CometRelay").MatchContainer,{match:a.if_viewer_can_invite_off_fb,props:babelHelpers["extends"]({inviteLabel:n},a)}):r},"invite"):null;J=(H==null?void 0:(I=H.if_viewer_can_see_permalink_education_tips)==null?void 0:I.__typename)!=null&&(C!==!0||E!==!0)?j.jsx(c("EventCometPermalinkPOEEducationTipButton.react"),{eventID:z,eventType:g},"poeTips"):null;K=t===!0&&F===!0&&(C!==!0||E===!0)?j.jsx(c("EventCometPermalinkPOEDuplicateButton.react"),{event$key:a}):null;D=F===!0&&G===!0&&C===!0&&a!=null?j.jsx(c("EventCometPermalinkPOEViewAsVisitorButton.react"),{event$key:a}):null;q=j.jsx(d("CometRelay").MatchContainer,{match:B,props:{loggingSurface:"permalink"}},"publish");A=w==null?void 0:w.group_thread_subtype;var M=w==null?void 0:(n=w.joinable_mode)==null?void 0:n.link,N=["DISCOVERABLE_PUBLIC_CHAT","DISCOVERABLE_PUBLIC_CHAT_V2"].includes(A);r=c("useEventCometOpenCommunityMessagingChat")(a.id,{actionTarget:"public_chat_thread",actionType:"open",mechanism:"permalink_rsvp_button",surface:"permalink"});var O=r[0];H=k(function(){var a=w==null?void 0:w.id;a!=null&&O(a)},[w==null?void 0:w.id,O]);var P=c("usePublicChatShortlinkCallback")({onSuccess:H});I=k(function(){p(!0),e==null&&N&&M!=null&&P(M)},[e,N,P,M]);g=u===!0?j.jsx(c("EventCometUniversalRSVPButtonActions.react"),{event:a,onChangeRSVP:I,showMenuOnLoad:o},"rsvp"):null;t=y!=null&&v===!0?j.jsx(c("EventCometPermalinkShareAction.react"),{eventID:z,eventUrl:y,groupID:e},"share"):null;E=m?j.jsx(c("EventCometPermalinkMoreAction.react"),{eventID:z,groupID:e,hiddenActions:f},"more"):null;F=s!=null?j.jsx(d("CometRelay").MatchContainer,{match:s,props:{buttonProps:{entryPoint:"group_events_tab_events"}}},"boost"):null;return{boostButton:F,editButton:L,inviteButton:x,moreButton:E,poeDuplicateButton:K,poeEducationTipsButton:J,poeViewAsVisitorButton:D,publishButton:q,rsvpButtons:g,shareButton:t}}g["default"]=a}),98);