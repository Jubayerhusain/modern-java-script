;/*FB_PKG_DELIM*/

__d("LSIssueCommunityAdminModerationActionsFetch",["LSIssueNewTaskAndGetTaskID"],(function(a,b,c,d,e,f){function a(){var a=arguments,c=a[a.length-1];c.n;var d=[],e=[],f;return c.seq([function(g){return c.seq([function(e){return d[0]=new c.Map(),d[0].set("fb_group_id",a[0]),d[0].set("target_user_id",a[1]),d[0].set("source",a[2]),d[0].set("thread_id",a[3]),d[0].set("request_id",a[4]),c.i64.gt(c.i64.cast([0,0]),c.i64.cast([0,0]))?(d[5]=c.i64.of_float(Date.now()),d[1]=c.i64.add(d[5],c.i64.cast([0,0]))):d[1]=c.i64.cast([0,0]),d[2]=d[0].get("fb_group_id"),d[0],d[3]=c.toJSON(d[0]),c.sp(b("LSIssueNewTaskAndGetTaskID"),c.i64.to_string(d[2]),c.i64.cast([0,428]),d[3],f,f,c.i64.cast([0,0]),c.i64.cast([0,0]),f,f,d[1]).then(function(a){return a=a,d[4]=a[0],a})},function(a){return e[0]=d[4]}])},function(a){return c.resolve(e)}])}c=a;f["default"]=c}),66);
__d("MarketplaceCometReviewOffersDialogQuery_facebookRelayOperation",[],(function(a,b,c,d,e,f){e.exports="5336064999757079"}),null);
__d("MarketplaceCometReviewOffersDialogQuery$Parameters",["MarketplaceCometReviewOffersDialogQuery_facebookRelayOperation"],(function(a,b,c,d,e,f){"use strict";a={kind:"PreloadableConcreteRequest",params:{id:b("MarketplaceCometReviewOffersDialogQuery_facebookRelayOperation"),metadata:{},name:"MarketplaceCometReviewOffersDialogQuery",operationKind:"query",text:null}};e.exports=a}),null);
__d("MarketplaceCometReviewOffersDialog.entrypoint",["JSResourceForInteraction","MarketplaceCometReviewOffersDialogQuery$Parameters","WebPixelRatio"],(function(a,b,c,d,e,f,g){"use strict";a={getPreloadProps:function(a){a=a.listingId;return{queries:{queryReference:{options:{fetchPolicy:"network-only"},parameters:c("MarketplaceCometReviewOffersDialogQuery$Parameters"),variables:{listingId:a,scale:d("WebPixelRatio").get()}}}}},root:c("JSResourceForInteraction")("MarketplaceCometReviewOffersDialog.react").__setRef("MarketplaceCometReviewOffersDialog.entrypoint")};g["default"]=a}),98);
__d("MWXButton.react",["cr:2625","cr:2851","cr:5023","cr:5028","react"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react");function a(a,c){var d=a.loading,e=a.size,f=a.type;a=babelHelpers.objectWithoutPropertiesLoose(a,["loading","size","type"]);if(b("cr:2851")){var g=e===36;return h.jsx(b("cr:2851"),babelHelpers["extends"]({addOnPrimary:d===!0&&b("cr:5023")?h.jsx(b("cr:5023"),{color:"disabled",size:g?20:16}):void 0,ref:c,size:g?"large":"medium",type:f==="destructive"?"fdsOverride_negative":f},a))}return b("cr:2625")?h.jsx(b("cr:2625"),babelHelpers["extends"]({addOnStart:d===!0&&b("cr:5028")?h.jsx(b("cr:5028"),{color:"grey",size:24}):void 0,ref:c,size:e,type:f},a)):null}a.displayName=a.name+" [from "+f.id+"]";c=h.forwardRef(a);g["default"]=c}),98);
__d("MWXColumn.react",["cr:804","cr:842","react"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react");function a(a,c){if(b("cr:804")!=null)return h.jsx(b("cr:804"),babelHelpers["extends"]({},a,{ref:c}));return b("cr:842")!=null?h.jsx(b("cr:842"),babelHelpers["extends"]({},a,{ref:c})):null}a.displayName=a.name+" [from "+f.id+"]";c=h.forwardRef(a);e=c;g["default"]=e}),98);
__d("MWXColumnItem.react",["cr:1350","cr:2004","react"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react");function a(a,c){if(b("cr:1350")!=null)return h.jsx(b("cr:1350"),babelHelpers["extends"]({},a,{ref:c}));return b("cr:2004")!=null?h.jsx(b("cr:2004"),babelHelpers["extends"]({},a,{ref:c})):null}a.displayName=a.name+" [from "+f.id+"]";c=h.forwardRef(a);g["default"]=c}),98);
__d("MWSeparatorContainer.react",["react","stylex"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react");function a(a){var b,d=h.Children.toArray(a.children).filter(Boolean);return d.length===0?null:h.jsxs(h.Fragment,{children:[(b=a.beforeContent)!=null?b:null,h.jsx("div",{className:c("stylex")(a.xstyle),children:d.map(function(b,c){return h.jsxs(h.Fragment,{children:[c!==0&&a.separator,b]},"item-"+c)})})]})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("MWChatHeaderDetailsSubtitleMutedIcon.react",["fbt","MWXTooltip.react","cr:4426","react"],(function(a,b,c,d,e,f,g,h){"use strict";var i=d("react");function a(a){a=a.forceInlineDisplay;return i.jsx(c("MWXTooltip.react"),{align:"start",forceInlineDisplay:a===!0?!0:void 0,position:"above",tooltip:h._("__JHASH__XpvJmcPfz_-__JHASH__"),children:i.jsx(b("cr:4426"),{})})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("MWInboxHeaderDetails.react",["fbt","CometMiddot.react","CometPlaceholder.react","I64","LSIntEnum","LSMessagingThreadTypeUtil","LSPresenceStatusText.bs","LSRtcCallState","LSThreadTitle.react","LSVerificationBadge.bs","MWCMInboxHeaderCommunityGroupName.react","MWCMThreadTypes.react","MWChatHeaderDetailsSubtitleMutedIcon.react","MWLSContactTypeExactUtils","MWSeparatorContainer.react","MWVerticalRhythm","MWXText.react","MessengerMuteUtils.bs","ReQL","ReQLSuspense","cr:112","cr:4703","react","useMWChatCalculateIsMutedFromExpireTime","useReStore"],(function(a,b,c,d,e,f,g,h){"use strict";var i=d("react"),j={align:{verticalAlign:"xxymvpz",$$css:!0},container:{alignItems:"x1cy8zhl",display:"x78zum5",flexDirection:"xdt5ytf",flexGrow:"x1iyjqo2",justifyContent:"xl56j7k",minHeight:"xj9xw9b",$$css:!0},item:{alignItems:"x6s0dn4",display:"x78zum5",maxWidth:"x193iq5w",$$css:!0},middot:{paddingStart:"x1k2j06m",paddingEnd:"x10ogl3i",$$css:!0}};function a(a){var e=a.color,g=a.hexColor,k=a.thread;a=a.threadNameSize;var l=c("useReStore")(),m=d("ReQLSuspense").useFirst(function(){return d("ReQL").fromTableAscending(l.table("contacts")).getKeyRange(k.threadKey).filter(d("MWLSContactTypeExactUtils").isIgContact)},[l,k.threadKey],f.id+":97"),n=(m==null?void 0:m.secondaryName)!=null&&(m==null?void 0:m.secondaryName)!==""!==""?m.secondaryName:null;m=d("MWCMThreadTypes.react").isJoinedCMThread(k.threadType);var o=d("LSMessagingThreadTypeUtil").isJoinedSocialChannel(k.threadType),p=d("MessengerMuteUtils.bs").calcMuteUntilMs(k),q=c("useMWChatCalculateIsMutedFromExpireTime")(p);p=!d("I64").equal(k.ongoingCallState,d("LSIntEnum").ofNumber(c("LSRtcCallState").NO_ONGOING_CALL));var r=d("LSMessagingThreadTypeUtil").isDiscoverablePublicBroadcastChannel(k.threadType),s=d("LSMessagingThreadTypeUtil").isDiscoverableChannel(k.threadType),t=i.jsx("div",{className:"x1k2j06m x10ogl3i",children:i.jsx(c("MWXText.react"),{align:"center",color:e,numberOfLines:1,type:"meta3",children:i.jsx(c("CometMiddot.react"),{})})}),u=i.jsx(c("LSThreadTitle.react"),{thread:k});return i.jsxs("div",{className:"x1cy8zhl x78zum5 xdt5ytf x1iyjqo2 xl56j7k xj9xw9b",style:g==null?{}:{"--primary-text":g},children:[i.jsx("div",{className:"x6s0dn4 x78zum5 x193iq5w",children:i.jsx(c("MWXText.react"),{align:"center",color:e,isSemanticHeading:!0,numberOfLines:1,testid:void 0,type:a,children:i.jsxs("span",{className:"xxymvpz",children:[u,i.jsx(c("CometPlaceholder.react"),{fallback:null,children:!s&&i.jsx(c("LSVerificationBadge.bs"),{size:"small",thread:k})})]})})}),r&&b("cr:112")?i.jsxs(i.Fragment,{children:[i.jsx(c("MWVerticalRhythm"),{height:8}),i.jsx(c("MWXText.react"),{align:"center",color:e,numberOfLines:1,type:"meta3",children:i.jsx(b("cr:112"),{memberCount:k.memberCount!=null?d("I64").to_int32(k.memberCount):0})})]}):o?b("cr:4703")!=null&&k.memberCount!=null?i.jsxs(i.Fragment,{children:[i.jsx(c("MWVerticalRhythm"),{height:8}),i.jsx(c("MWXText.react"),{align:"center",color:e,numberOfLines:1,type:"meta3",children:i.jsx(b("cr:4703"),{count:d("I64").to_int32(k.memberCount)})})]}):null:m?i.jsx(c("MWCMInboxHeaderCommunityGroupName.react"),{renderWrapper:function(a){return i.jsxs(i.Fragment,{children:[i.jsx(c("MWVerticalRhythm"),{height:6}),i.jsx("div",{className:"x6s0dn4 x78zum5 x193iq5w","data-testid":void 0,children:i.jsx(c("MWXText.react"),{align:"center",color:e,numberOfLines:1,type:"meta3",children:a})})]})},thread:k}):p?i.jsxs(i.Fragment,{children:[i.jsx(c("MWVerticalRhythm"),{height:6}),i.jsxs(c("MWSeparatorContainer.react"),{separator:t,xstyle:j.item,children:[n!=null?i.jsx(c("MWXText.react"),{align:"center",color:e,numberOfLines:1,type:"meta3",children:n}):null,i.jsx(c("MWXText.react"),{align:"center",color:e,numberOfLines:1,type:"meta3",children:h._("__JHASH__440_c1t5rby__JHASH__")}),q?i.jsx(c("MWChatHeaderDetailsSubtitleMutedIcon.react"),{forceInlineDisplay:!0}):null]})]}):i.jsx(c("LSPresenceStatusText.bs"),{renderNullState:function(){return i.jsxs(c("MWSeparatorContainer.react"),{beforeContent:i.jsx(c("MWVerticalRhythm"),{height:6}),separator:t,xstyle:j.item,children:[n!=null?i.jsxs(c("MWXText.react"),{align:"center",color:e,numberOfLines:1,type:"meta3",children:[" ",n," "]}):null,q?i.jsx(c("MWChatHeaderDetailsSubtitleMutedIcon.react"),{forceInlineDisplay:!0}):null]})},renderWrapper:function(a){return i.jsxs(i.Fragment,{children:[i.jsx(c("MWVerticalRhythm"),{height:6}),i.jsxs(c("MWSeparatorContainer.react"),{separator:t,xstyle:j.item,children:[n!==null?i.jsx(c("MWXText.react"),{align:"center",color:e,numberOfLines:1,type:"meta3",children:n}):null,i.jsx(c("MWXText.react"),{align:"center",color:e,numberOfLines:1,type:"meta3",children:a}),q?i.jsx(c("MWChatHeaderDetailsSubtitleMutedIcon.react"),{forceInlineDisplay:!0}):null]})]})},threadKey:k.threadKey,threadType:k.threadType})]})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("LsFalcoEventEntryPoint.bs",[],(function(a,b,c,d,e,f){"use strict";a="message_actions";b="composer";c="icebreaker";f.messageActions=a;f.composer=b;f.icebreaker=c}),66);
__d("EmojiFormat.bs",[],(function(a,b,c,d,e,f){"use strict";function g(a){return a.split("_").map(function(a){return parseInt(a,16)})}function a(a){return a.map(function(a){return a.toString(16)}).join("_")}function h(a){return a.map(function(a){return String.fromCodePoint(a)}).join("")}function b(a){return h(g(a))}f.codeStringToCodeArray=g;f.codeArrayToCodeString=a;f.codeArrayToUnicode=h;f.codeStringToUnicode=b}),66);
__d("LSEmojiSetsType",[],(function(a,b,c,d,e,f){a=Object.freeze({USER_GENERATED:0,RECENTLY_USED:1});f["default"]=a}),66);
__d("MWChatMessengerReactionsUtils.bs",["EmojiFormat.bs","I64","LSEmojiSetsType","LSIntEnum"],(function(a,b,c,d,e,f,g){"use strict";b=[{categoryIdx:d("I64").of_string("6"),emoji:"\u2764",emojiIdx:d("I64").zero,sortKey:d("I64").zero,type_:d("LSIntEnum").ofNumber(c("LSEmojiSetsType").USER_GENERATED)},{categoryIdx:d("I64").zero,emoji:"\ud83d\ude06",emojiIdx:d("I64").of_string("4"),sortKey:d("I64").one,type_:d("LSIntEnum").ofNumber(c("LSEmojiSetsType").USER_GENERATED)},{categoryIdx:d("I64").zero,emoji:"\ud83d\ude2e",emojiIdx:d("I64").of_string("83"),sortKey:d("I64").of_string("2"),type_:d("LSIntEnum").ofNumber(c("LSEmojiSetsType").USER_GENERATED)},{categoryIdx:d("I64").zero,emoji:"\ud83d\ude22",emojiIdx:d("I64").of_string("48"),sortKey:d("I64").of_string("3"),type_:d("LSIntEnum").ofNumber(c("LSEmojiSetsType").USER_GENERATED)},{categoryIdx:d("I64").zero,emoji:"\ud83d\ude20",emojiIdx:d("I64").of_string("51"),sortKey:d("I64").of_string("4"),type_:d("LSIntEnum").ofNumber(c("LSEmojiSetsType").USER_GENERATED)},{categoryIdx:d("I64").zero,emoji:"\ud83d\udc4d",emojiIdx:d("I64").of_string("130"),sortKey:d("I64").of_string("5"),type_:d("LSIntEnum").ofNumber(c("LSEmojiSetsType").USER_GENERATED)},{categoryIdx:d("I64").zero,emoji:"\ud83d\udc4e",emojiIdx:d("I64").of_string("131"),sortKey:d("I64").of_string("6"),type_:d("LSIntEnum").ofNumber(c("LSEmojiSetsType").USER_GENERATED)}];e=b.slice(0,6);var h=d("EmojiFormat.bs").codeArrayToUnicode([10084,65039]),i=d("EmojiFormat.bs").codeArrayToUnicode([10084]);function a(a){if(a===h)return!0;else return a===i}f=6;g.defaultStaticReactions=b;g.defaultCustomizableReactions=e;g.heartType1=h;g.heartType2=i;g.isHeart=a;g.cUSTOM_REACTIONS_NUM=f}),98);
__d("MWChatReactionEmoji.bs",["cr:4707"],(function(a,b,c,d,e,f,g){"use strict";g.make=b("cr:4707")}),98);
__d("MWChatReactionsUtils.bs",["cr:595"],(function(a,b,c,d,e,f,g){"use strict";g.cUSTOM_REACTIONS_NUM=(a=b("cr:595")).cUSTOM_REACTIONS_NUM;g.defaultStaticReactions=a.defaultStaticReactions;g.defaultCustomizableReactions=a.defaultCustomizableReactions;g.heartType1=a.heartType1;g.heartType2=a.heartType2;g.isHeart=a.isHeart}),98);
__d("MWMessageTableFocusTable.bs",["fbt","CometKeys","FocusTable.react","react"],(function(a,b,c,d,e,f,g,h){"use strict";d("react");var i="messages_table";function a(a,b,c){return c.getAttribute("data-scope")===i}b=d("FocusTable.react").createFocusTable(a);e={key:c("CometKeys").UP};f={key:c("CometKeys").DOWN};d={key:c("CometKeys").LEFT};c={key:c("CometKeys").RIGHT};e=[{command:e,description:h._("__JHASH__HYvhkJNYo2M__JHASH__"),handler:function(){}},{command:f,description:h._("__JHASH__6tFY25IlnV4__JHASH__"),handler:function(){}},{command:d,description:h._("__JHASH__6tFY25IlnV4__JHASH__"),handler:function(){}},{command:c,description:h._("__JHASH__HYvhkJNYo2M__JHASH__"),handler:function(){}}];g.scopeID=i;g.scopeQuery=a;g.FocusTable=b;g.commandConfigs=e}),98);
__d("MWMessageCellFocusTable.bs",["fbt","CometComponentWithKeyCommands.react","CometKeys","FocusTable.react","MWMessageTableFocusTable.bs","focusScopeQueries","react"],(function(a,b,c,d,e,f,g,h){"use strict";var i=d("react");b=d("FocusTable.react").createFocusTable(d("focusScopeQueries").tabbableScopeQuery);var j={key:c("CometKeys").ESCAPE},k={key:c("CometKeys").ENTER},l={key:c("CometKeys").SPACE},m=h._("__JHASH__dr5LK8JTLfs__JHASH__"),n=h._("__JHASH__NgBmedKphX2__JHASH__");function a(a){var b=a.children,e=a.onEnter,f=a.onEscape;a=a.onSpace;var g=[];f!=null&&g.push({command:j,description:m,handler:f});e!=null&&g.push({command:k,description:n,handler:e});a!=null&&g.push({command:l,description:n,handler:a});return i.jsx(c("CometComponentWithKeyCommands.react"),{commandConfigs:d("MWMessageTableFocusTable.bs").commandConfigs.concat(g),xstyle:!1,children:b})}a.displayName=a.name+" [from "+f.id+"]";e=a;g.FocusTable=b;g.keyCommands=e}),98);
__d("useMWV2ComposerOnGifSelect",["I64","LSShape","react"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react").useCallback;function i(a,b,c){return d("LSShape").ofRecord({preview_height:b,preview_url:a,preview_width:c})}function a(a){return h(function(b){var c=b.platformFBID;b=b.source;var e=b.height,f=b.url;b=b.width;c=d("I64").of_string(c);f=f;return a(void 0,void 0,void 0,void 0,c,f,i(f,d("I64").of_int32(e),d("I64").of_int32(b)),void 0,void 0,void 0,void 0)},[a])}g["default"]=a}),98);
__d("useIsMultiReactionEnabled",["LSIntEnum","LSThreadBitOffset","MWLSThread","gkx"],(function(a,b,c,d,e,f,g){"use strict";b=20;function a(a){return(a=d("MWLSThread").useThread(a,function(a){return d("LSThreadBitOffset").has(d("LSIntEnum").ofNumber(156),a)&&c("gkx")("8266")}))!=null?a:!1}g.MAX_REACTION_COUNT=b;g.useIsMultiReactEnabled=a}),98);
__d("FBLikeSvgIcon.react",["react","useCometUniqueID"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react");function a(a){var b=a.alt,d=a.className,e=a.color;a=a.size;a=a===void 0?20:a;var f=b!=null,g=c("useCometUniqueID")();return h.jsxs("svg",{"aria-hidden":f?void 0:!0,"aria-labelledby":f?g:void 0,className:d,height:a,viewBox:"0 0 16 16",width:a,children:[f&&h.jsx("title",{id:g,children:b}),h.jsx("path",{d:"M16,9.1c0-0.8-0.3-1.1-0.6-1.3c0.2-0.3,0.3-0.7,0.3-1.2c0-1-0.8-1.7-2.1-1.7h-3.1c0.1-0.5,0.2-1.3,0.2-1.8 c0-1.1-0.3-2.4-1.2-3C9.3,0.1,9,0,8.7,0C8.1,0,7.7,0.2,7.6,0.4C7.5,0.5,7.5,0.6,7.5,0.7L7.6,3c0,0.2,0,0.4-0.1,0.5L5.7,6.6 c0,0-0.1,0.1-0.1,0.1l0,0l0,0L5.3,6.8C5.1,7,5,7.2,5,7.4v6.1c0,0.2,0.1,0.4,0.2,0.5c0.1,0.1,1,1,2,1h5.2c0.9,0,1.4-0.3,1.8-0.9 c0.3-0.5,0.2-1,0.1-1.4c0.5-0.2,0.9-0.5,1.1-1.2c0.1-0.4,0-0.8-0.2-1C15.6,10.3,16,9.9,16,9.1z",fill:e}),h.jsx("path",{d:"M3.3,6H0.7C0.3,6,0,6.3,0,6.7v8.5C0,15.7,0.3,16,0.7,16h2.5C3.7,16,4,15.7,4,15.3V6.7C4,6.3,3.7,6,3.3,6z",fill:e})]})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("Popup",["isTruthy"],(function(a,b,c,d,e,f,g){function a(a,b,d,e){var f=[];c("isTruthy")(b)&&f.push("width="+b);c("isTruthy")(d)&&f.push("height="+d);var g=document.body;if(g!=null&&b!=null&&b!==0&&d!=null&&d!==0){var h="screenX"in window?window.screenX:window.screenLeft,i="screenY"in window?window.screenY:window.screenTop,j="outerWidth"in window?window.outerWidth:g.clientWidth;g="outerHeight"in window?window.outerHeight:g.clientHeight-22;h=Math.floor(h+(j-b)/2);j=Math.floor(i+(g-d)/2.5);f.push("left="+h);f.push("top="+j)}f.push("scrollbars");return window.open(a,e!=null&&e!==""?e:"_blank",f.join(","))}g.open=a}),98);
__d("isFalsey",[],(function(a,b,c,d,e,f){"use strict";function a(a){return a==null||!Boolean(a)}f["default"]=a}),66);
__d("useDebounced",["debounce","react"],(function(a,b,c,d,e,f,g){"use strict";b=d("react");var h=b.useEffect,i=b.useMemo,j=b.useRef;function a(a,b,d){b===void 0&&(b=100);d===void 0&&(d=!1);var e=j(a),f=j(!0),g=j(null);h(function(){f.current=!0;g.current&&(g.current(),g.current=null);return function(){f.current=!1}},[]);h(function(){e.current=a},[a]);var k=i(function(){return c("debounce")(function(){for(var a=arguments.length,b=new Array(a),c=0;c<a;c++)b[c]=arguments[c];f.current?e.current.apply(e,b):g.current=function(){e.current.apply(e,b)}},b,null,!1,d)},[b,d]);return k}g["default"]=a}),98);
__d("useUniqueID",["uniqueID","useUnsafeRef_DEPRECATED"],(function(a,b,c,d,e,f,g){"use strict";function a(){var a=c("useUnsafeRef_DEPRECATED")(null);a.current===null&&(a.current=c("uniqueID")());return a.current}g["default"]=a}),98);
__d("MessageSendClickFalcoEvent",["FalcoLoggerInternal","getFalcoLogPolicy_DO_NOT_USE"],(function(a,b,c,d,e,f,g){"use strict";a=c("getFalcoLogPolicy_DO_NOT_USE")("1891340");b=d("FalcoLoggerInternal").create("message_send_click",a);e=b;g["default"]=e}),98);