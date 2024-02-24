;/*FB_PKG_DELIM*/

__d("CometAdActivityRootQuery_facebookRelayOperation",[],(function(a,b,c,d,e,f){e.exports="5643267092430362"}),null);
__d("CometAdActivityRootQuery$Parameters",["CometAdActivityRootQuery_facebookRelayOperation"],(function(a,b,c,d,e,f){"use strict";a={kind:"PreloadableConcreteRequest",params:{id:b("CometAdActivityRootQuery_facebookRelayOperation"),metadata:{},name:"CometAdActivityRootQuery",operationKind:"query",text:null}};e.exports=a}),null);
__d("CometGamingVideoRootContentQuery_facebookRelayOperation",[],(function(a,b,c,d,e,f){e.exports="6389334167846786"}),null);
__d("CometGamingVideoRootContentQuery$Parameters",["CometGamingDestinationApplicationSectionNonHscroll.relayprovider","CometGamingVideoRootContentQuery_facebookRelayOperation"],(function(a,b,c,d,e,f){"use strict";a={kind:"PreloadableConcreteRequest",params:{id:b("CometGamingVideoRootContentQuery_facebookRelayOperation"),metadata:{},name:"CometGamingVideoRootContentQuery",operationKind:"query",text:null,providedVariables:{__relay_internal__pv__CometGamingDestinationApplicationSectionNonHscrollrelayprovider:b("CometGamingDestinationApplicationSectionNonHscroll.relayprovider")}}};e.exports=a}),null);
__d("CometGamingVideoRootHeroBannerQuery_facebookRelayOperation",[],(function(a,b,c,d,e,f){e.exports="24095658733366547"}),null);
__d("CometGamingVideoRootHeroBannerQuery$Parameters",["CometGamingVideoRootHeroBannerQuery_facebookRelayOperation","StoriesRing.relayprovider"],(function(a,b,c,d,e,f){"use strict";a={kind:"PreloadableConcreteRequest",params:{id:b("CometGamingVideoRootHeroBannerQuery_facebookRelayOperation"),metadata:{},name:"CometGamingVideoRootHeroBannerQuery",operationKind:"query",text:null,providedVariables:{__relay_internal__pv__StoriesRingrelayprovider:b("StoriesRing.relayprovider")}}};e.exports=a}),null);
__d("CometProfileAdCenterRootQuery$Parameters",["CometProfileAdCenterRootQuery_facebookRelayOperation"],(function(a,b,c,d,e,f){"use strict";a={kind:"PreloadableConcreteRequest",params:{id:b("CometProfileAdCenterRootQuery_facebookRelayOperation"),metadata:{},name:"CometProfileAdCenterRootQuery",operationKind:"query",text:null}};e.exports=a}),null);
__d("CometAdActivityRootEntryPoint.entrypoint",["CometAdActivityRootQuery$Parameters","JSResourceForInteraction"],(function(a,b,c,d,e,f,g){"use strict";a={getPreloadProps:function(){return{queries:{adActivityRootQueryReference:{parameters:b("CometAdActivityRootQuery$Parameters"),variables:{count:20}}}}},root:c("JSResourceForInteraction")("CometAdActivityRoot.react").__setRef("CometAdActivityRootEntryPoint.entrypoint")};g["default"]=a}),98);
__d("CometAdActivityConstants",["$InternalEnum"],(function(a,b,c,d,e,f){"use strict";a=b("$InternalEnum").Mirrored(["Recent","Saved"]);c=[a.Recent,a.Saved];d=10;e="bookmark";var g={CLICK_AD:"click_ad",REPORT_AD:"report_ad",SAVE_AD:"save_ad",SEE_MORE:"click_see_more",TAB_RECENT:"recent_activity_tab",TAB_SAVED:"saved_ads_tab",UNSAVE_AD:"unsave_ad"},h={CLICKED:"clicked",SAVED:"saved"};b=b("$InternalEnum").Mirrored(["Locked","Unlocked","None"]);f.CometAdActivityTabGroup=a;f.CometAdActivityTabs=c;f.COMET_AD_ACTIVITY_REFETCH_LIMIT=d;f.SOURCE=e;f.CLICK_TYPE=g;f.TAB_TYPE=h;f.GatedContent=b}),66);
__d("CometGamingVideoRoot.entrypoint",["CometGamingVideoRootContentQuery$Parameters","CometGamingVideoRootHeroBannerQuery$Parameters","JSResourceForInteraction","WebPixelRatio","buildCometGamingRoute.entrypoint"],(function(a,b,c,d,e,f,g){"use strict";a=c("buildCometGamingRoute.entrypoint")("GAMING_VIDEO")(c("JSResourceForInteraction")("CometGamingVideoRoot.react").__setRef("CometGamingVideoRoot.entrypoint"),function(a){a=a.routeParams;var c=d("WebPixelRatio").get();return{queries:{contentQueryReference:{parameters:b("CometGamingVideoRootContentQuery$Parameters"),variables:{scale:c}},heroBannerQueryReference:{parameters:b("CometGamingVideoRootHeroBannerQuery$Parameters"),variables:{videoID:a.video_id}}}}});g["default"]=a}),98);
__d("CometProfileAdCenterRoot.entrypoint",["AdCenterUnifiedTwoColumnOverviewCardSectionQuery$Parameters","CometProfileAdCenterRootContentQuery$Parameters","CometProfileAdCenterRootQuery$Parameters","JSResourceForInteraction","WebPixelRatio"],(function(a,b,c,d,e,f,g){"use strict";var h=4,i=365,j=0,k=function(){return++j};a={getPreloadProps:function(a){a=a.routeProps;var e=a.pageID;a=a.supportedAppIDs;return{extraProps:{routeProps:{pageID:e,refSource:"profile_plus_comet_profile_insights"}},queries:{adCenterOverviewCardSectionQueryReference:{options:{fetchKey:k(),fetchPolicy:"network-only"},parameters:c("AdCenterUnifiedTwoColumnOverviewCardSectionQuery$Parameters"),variables:{numCards:h,options:{from_n_days_ago:i,source_app_ids:a},pageID:e,scale:d("WebPixelRatio").get()}},adCenterRootQueryReference:{parameters:c("CometProfileAdCenterRootContentQuery$Parameters"),variables:{pageID:e,scale:d("WebPixelRatio").get()}},cometProfileAdCenterRootQueryReference:{parameters:b("CometProfileAdCenterRootQuery$Parameters"),variables:{pageID:String(e),scale:d("WebPixelRatio").get()}}}}},root:c("JSResourceForInteraction")("CometProfileAdCenterRoot.react").__setRef("CometProfileAdCenterRoot.entrypoint")};g["default"]=a}),98);