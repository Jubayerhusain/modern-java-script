;/*FB_PKG_DELIM*/

__d("LSLazyMessageForcedFetch",["LSIssueNewTask"],(function(a,b,c,d,e,f){function a(){var a=arguments,c=a[a.length-1];c.n;var d=[],e=[],f;return c.seq([function(e){return c.db.table(12).fetch([[[a[0]]],"messageId"]).next().then(function(e,g){var h=e.done;e=e.value;return h?0:(g=e.item,c.seq([function(a){return d[5]=g.threadKey,c.db.table(9).fetch([[[d[5]]]]).next().then(function(b,e){var a=b.done;b=b.value;return a?d[0]=c.i64.cast([0,1]):(e=b.item,d[7]=e.syncGroup,c.i64.neq(d[7],f)?d[6]=d[7]:d[6]=c.i64.cast([0,1]),d[0]=d[6])})},function(e){return d[2]=new c.Map(),d[2].set("thread_key",d[5]),d[2].set("message_id",a[0]),d[2].set("sync_group",d[0]),d[3]=d[2].get("thread_key"),d[2],d[4]=c.toJSON(d[2]),c.sp(b("LSIssueNewTask"),c.i64.to_string(d[3]),c.i64.cast([0,19]),d[4],f,f,c.i64.cast([0,0]),c.i64.cast([0,0]),f,f,c.i64.cast([0,0]))}]))})},function(a){return c.resolve(e)}])}c=a;f["default"]=c}),66);
__d("LSRefreshEventXMAsOnRSVP",["LSLazyMessageForcedFetch"],(function(a,b,c,d,e,f){function a(){var a=arguments,c=a[a.length-1];c.n;var d=[];return c.seq([function(d){return c.fe(c.ftr(c.db.table(16).fetch([[[a[1]]]]),function(b){return a[0]===b.attachmentFbid&&c.i64.eq(a[1],b.threadKey)}),function(a){a=a.item;return c.sp(b("LSLazyMessageForcedFetch"),a.messageId,a.threadKey)})},function(a){return c.resolve(d)}])}c=a;f["default"]=c}),66);
__d("LSDeleteThenInsertCmChannelEvent",[],(function(a,b,c,d,e,f){function a(){var a=arguments,b=a[a.length-1];b.n;var c=[];return b.seq([function(c){return b.db.table(201).put({eventId:a[0],threadId:a[1]})},function(a){return b.resolve(c)}])}b=a;f["default"]=b}),66);
__d("LSDeleteThenInsertFbEvent",[],(function(a,b,c,d,e,f){function a(){var a=arguments,b=a[a.length-1];b.n;var c=[];return b.seq([function(c){return b.db.table(200).put({eventId:a[0],eventName:a[3],eventPictureUrl:a[5],numGoingUsers:a[8],numInterestedUsers:a[9],startTimeMs:a[1],endTimeMs:a[2],locationName:a[4],eventPictureUrlFallback:a[6],eventPictureUrlExpirationTimestampMs:a[7],rsvpStatus:a[10]})},function(a){return b.resolve(c)}])}b=a;f["default"]=b}),66);