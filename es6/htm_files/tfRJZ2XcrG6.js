;/*FB_PKG_DELIM*/

__d("CometMemoriesRootQuery_facebookRelayOperation",[],(function(a,b,c,d,e,f){e.exports="5939006269532203"}),null);
__d("CometMemoriesRootQuery$Parameters",["CometMemoriesRootQuery_facebookRelayOperation","IsMergQAPolls.relayprovider","IsWorkUser.relayprovider","StoriesArmadilloReplyEnabled.relayprovider","StoriesRing.relayprovider"],(function(a,b,c,d,e,f){"use strict";a={kind:"PreloadableConcreteRequest",params:{id:b("CometMemoriesRootQuery_facebookRelayOperation"),metadata:{},name:"CometMemoriesRootQuery",operationKind:"query",text:null,providedVariables:{__relay_internal__pv__IsWorkUserrelayprovider:b("IsWorkUser.relayprovider"),__relay_internal__pv__IsMergQAPollsrelayprovider:b("IsMergQAPolls.relayprovider"),__relay_internal__pv__StoriesArmadilloReplyEnabledrelayprovider:b("StoriesArmadilloReplyEnabled.relayprovider"),__relay_internal__pv__StoriesRingrelayprovider:b("StoriesRing.relayprovider")}}};e.exports=a}),null);
__d("PageCometLaunchpointLeftNavMenuRootQuery_facebookRelayOperation",[],(function(a,b,c,d,e,f){e.exports="7149071045102997"}),null);
__d("PageCometLaunchpointLeftNavMenuRootQuery$Parameters",["PageCometLaunchpointLeftNavMenuRootQuery_facebookRelayOperation"],(function(a,b,c,d,e,f){"use strict";a={kind:"PreloadableConcreteRequest",params:{id:b("PageCometLaunchpointLeftNavMenuRootQuery_facebookRelayOperation"),metadata:{},name:"PageCometLaunchpointLeftNavMenuRootQuery",operationKind:"query",text:null}};e.exports=a}),null);
__d("PageCometLaunchpointDiscoverRootQuery_facebookRelayOperation",[],(function(a,b,c,d,e,f){e.exports="5793443624090518"}),null);
__d("PagesCometLaunchpointDiscoverQueryFixEnabled.relayprovider",["gkx"],(function(a,b,c,d,e,f,g){"use strict";a={get:function(){return Boolean(c("gkx")("2989"))}};g["default"]=a}),98);
__d("PageCometLaunchpointDiscoverRootQuery$Parameters",["PageCometLaunchpointDiscoverRootQuery_facebookRelayOperation","PagesCometLaunchpointDiscoverQueryFixEnabled.relayprovider"],(function(a,b,c,d,e,f){"use strict";a={kind:"PreloadableConcreteRequest",params:{id:b("PageCometLaunchpointDiscoverRootQuery_facebookRelayOperation"),metadata:{},name:"PageCometLaunchpointDiscoverRootQuery",operationKind:"query",text:null,providedVariables:{__relay_internal__pv__PagesCometLaunchpointDiscoverQueryFixEnabledrelayprovider:b("PagesCometLaunchpointDiscoverQueryFixEnabled.relayprovider")}}};e.exports=a}),null);
__d("PagesCometLaunchpointUnifiedQueryPagesListRedesignedQuery_facebookRelayOperation",[],(function(a,b,c,d,e,f){e.exports="9616863061721819"}),null);
__d("PagesCometLaunchpointUnifiedQueryPagesListRedesignedQuery$Parameters",["PagesCometLaunchpointUnifiedQueryPagesListRedesignedQuery_facebookRelayOperation"],(function(a,b,c,d,e,f){"use strict";a={kind:"PreloadableConcreteRequest",params:{id:b("PagesCometLaunchpointUnifiedQueryPagesListRedesignedQuery_facebookRelayOperation"),metadata:{},name:"PagesCometLaunchpointUnifiedQueryPagesListRedesignedQuery",operationKind:"query",text:null}};e.exports=a}),null);
__d("CometSaveDashboardRootQuery_facebookRelayOperation",[],(function(a,b,c,d,e,f){e.exports="6421018147996645"}),null);
__d("CometSaveDashboardRootQuery$Parameters",["CometSaveDashboardRootQuery_facebookRelayOperation"],(function(a,b,c,d,e,f){"use strict";a={kind:"PreloadableConcreteRequest",params:{id:b("CometSaveDashboardRootQuery_facebookRelayOperation"),metadata:{},name:"CometSaveDashboardRootQuery",operationKind:"query",text:null}};e.exports=a}),null);
__d("CometSavePrimaryNavigationQuery_facebookRelayOperation",[],(function(a,b,c,d,e,f){e.exports="7964745310264333"}),null);
__d("SaveCollectionsFeatureParityComet.relayprovider",["gkx"],(function(a,b,c,d,e,f,g){"use strict";a={get:function(){return c("gkx")("7185")===!0}};g["default"]=a}),98);
__d("CometSavePrimaryNavigationQuery$Parameters",["CometSavePrimaryNavigationQuery_facebookRelayOperation","SaveCollectionsFeatureParityComet.relayprovider"],(function(a,b,c,d,e,f){"use strict";a={kind:"PreloadableConcreteRequest",params:{id:b("CometSavePrimaryNavigationQuery_facebookRelayOperation"),metadata:{},name:"CometSavePrimaryNavigationQuery",operationKind:"query",text:null,providedVariables:{__relay_internal__pv__SaveCollectionsFeatureParityCometrelayprovider:b("SaveCollectionsFeatureParityComet.relayprovider")}}};e.exports=a}),null);
__d("CometMemoriesRoot.entrypoint",["CometMemoriesRootQuery$Parameters","JSResourceForInteraction","WebPixelRatio"],(function(a,b,c,d,e,f,g){"use strict";a={getPreloadProps:function(a){return{queries:{memoriesReference:{parameters:b("CometMemoriesRootQuery$Parameters"),variables:{displayCommentsContextEnableComment:null,displayCommentsContextIsAdPreview:null,displayCommentsContextIsAggregatedShare:null,displayCommentsContextIsStorySet:null,displayCommentsFeedbackContext:null,feedbackSource:0,feedLocation:"GOODWILL_THROWBACK_PERMALINK",focusCommentID:null,goodwillTimestamp:a.routeProps.goodwillTimestamp,privacySelectorRenderLocation:"COMET_STREAM",renderLocation:"throwback_composer",scale:d("WebPixelRatio").get(),useDefaultActor:!1}}}}},root:c("JSResourceForInteraction")("CometMemoriesRoot.react").__setRef("CometMemoriesRoot.entrypoint")};g["default"]=a}),98);
__d("buildPageCometLaunchpointRoute.entrypoint",["JSResourceForInteraction","PageCometLaunchpointLeftNavMenuRootQuery$Parameters","createContentAreaCompoundEntryPointBuilder","gkx"],(function(a,b,c,d,e,f,g){"use strict";a=c("createContentAreaCompoundEntryPointBuilder")(c("JSResourceForInteraction")("PageCometLaunchpointEntryPointRoot.react").__setRef("buildPageCometLaunchpointRoute.entrypoint"),function(a){a=c("gkx")("1549707")&&!((a=(a=a.routeProps)==null?void 0:a.enablePagesLaunchpoint)!=null?a:!1);var d=c("gkx")("4510");return{leftNavContainerQueryReference:{parameters:b("PageCometLaunchpointLeftNavMenuRootQuery$Parameters"),variables:{showUpdatedLaunchpointRedesign:c("gkx")("3277"),useAdminedPagesForActingAccount:d,useNewPagesYouManage:a||d}}}});g["default"]=a}),98);
__d("PageCometLaunchpointDiscoverRoot.entrypoint",["JSResourceForInteraction","PageCometLaunchpointDiscoverRootQuery$Parameters","WebPixelRatio","buildPageCometLaunchpointRoute.entrypoint"],(function(a,b,c,d,e,f,g){"use strict";a=c("buildPageCometLaunchpointRoute.entrypoint")(c("JSResourceForInteraction")("PageCometLaunchpointDiscoverRoot.react").__setRef("PageCometLaunchpointDiscoverRoot.entrypoint"),function(a){return{queries:{pageDiscoverRootQueryReference:{parameters:c("PageCometLaunchpointDiscoverRootQuery$Parameters"),variables:{id:a.routeProps.userID,scale:d("WebPixelRatio").get()}}}}});g["default"]=a}),98);
__d("PagesCometLaunchpointUnifiedQueryPagesListRedesigned.entrypoint",["JSResourceForInteraction","PagesCometLaunchpointUnifiedQueryPagesListRedesignedQuery$Parameters","WebPixelRatio","buildPageCometLaunchpointRoute.entrypoint"],(function(a,b,c,d,e,f,g){"use strict";a=c("buildPageCometLaunchpointRoute.entrypoint")(c("JSResourceForInteraction")("PagesCometLaunchpointUnifiedQueryPagesListRedesigned.react").__setRef("PagesCometLaunchpointUnifiedQueryPagesListRedesigned.entrypoint"),function(){return{queries:{pagesCometLaunchpointUnifiedQueryPagesListRedesignedQueryRef:{parameters:b("PagesCometLaunchpointUnifiedQueryPagesListRedesignedQuery$Parameters"),variables:{scale:d("WebPixelRatio").get()}}}}});g["default"]=a}),98);
__d("buildSaveRoute.entrypoint",["CometSavePrimaryNavigationQuery$Parameters","JSResourceForInteraction","createContentAreaCompoundEntryPointBuilder"],(function(a,b,c,d,e,f,g){"use strict";a=c("createContentAreaCompoundEntryPointBuilder")(c("JSResourceForInteraction")("CometSaveRoot.react").__setRef("buildSaveRoute.entrypoint"),function(a){return{navigationQueryReference:{parameters:b("CometSavePrimaryNavigationQuery$Parameters"),variables:{contributorRoles:["CONTRIBUTOR"]}}}});g["default"]=a}),98);
__d("CometSaveDashboardRoot.entrypoint",["CometSaveDashboardRootQuery$Parameters","JSResourceForInteraction","WebPixelRatio","buildSaveRoute.entrypoint"],(function(a,b,c,d,e,f,g){"use strict";a=c("buildSaveRoute.entrypoint")(c("JSResourceForInteraction")("CometSaveDashboardRoot.react").__setRef("CometSaveDashboardRoot.entrypoint"),function(a){var b=a.routeProps,e=b.content_filter,f=b.referrer;b=b.section;a=a.routeParams;var g=a.hoisted_item_id;a=a.notif_id;return{extraProps:{routeProps:{referrer:f,section:b}},queries:{rootQueryRef:{parameters:c("CometSaveDashboardRootQuery$Parameters"),variables:{content_filter:e!=null?[e]:null,hoisted_item_id:g!=null?String(g):null,notif_id:a!=null?String(a):null,scale:d("WebPixelRatio").get()}}}}});g["default"]=a}),98);
__d("CometSaveCollectionRootQuery_facebookRelayOperation",[],(function(a,b,c,d,e,f){e.exports="6423889494392629"}),null);