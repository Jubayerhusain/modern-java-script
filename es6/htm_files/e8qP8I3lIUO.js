;/*FB_PKG_DELIM*/

__d("LSMailboxTaskCompletionApiOnTaskCompletion",[],(function(a,b,c,d,e,f){function a(){var a=arguments,b=a[a.length-1];b.n;var c=[];return b.seq([function(c){return b.fe(b.db.table(233).fetch([[[a[0]]]]),function(b){var c=b.update;b.item;return c({success:a[1]})})},function(a){return b.resolve(c)}])}b=a;f["default"]=b}),66);
__d("LSUpdateNewBadgeStatus",[],(function(a,b,c,d,e,f){function a(){var a=arguments,b=a[a.length-1];b.n;var c=[];return b.resolve(c)}b=a;f["default"]=b}),66);
__d("LSUpdateThreadActivityStatus",["LSIssueNewTask"],(function(a,b,c,d,e,f){function a(){var a=arguments,c=a[a.length-1];c.n;var d=[],e=[],f;return c.seq([function(g){return c.seq([function(e){return c.db.table(9).fetch([[[a[0]]]]).next().then(function(e,h){var i=e.done;e=e.value;return i?c.seq([function(e){return d[2]=new c.Map(),d[2].set("thread_fbid",a[0]),d[2].set("force_upsert",!1),d[2].set("use_open_messenger_transport",!1),d[2].set("sync_group",c.i64.cast([0,104])),d[2].set("metadata_only",!1),d[2].set("preview_only",!1),d[3]=d[2].get("thread_fbid"),d[2],d[4]=c.toJSON(d[2]),c.sp(b("LSIssueNewTask"),c.i64.to_string(d[3]),c.i64.cast([0,209]),d[4],f,f,c.i64.cast([0,0]),c.i64.cast([0,0]),f,f,c.i64.cast([0,0]))},function(e){return d[5]=c.createArray(),d[8]=(d[5].push(a[0]),d[5]),d[6]=new c.Map(),d[6].set("number_of_threads",c.i64.cast([0,1])),d[6].set("event_type","issue_tpq_for_verify_threads_activity_status"),d[6].set("thread_ids",d[5]),d[7]=c.toJSON(d[6]),c.sp(b("LSIssueNewTask"),"log_community_resnapshot_event",c.i64.cast([0,576]),d[7],f,f,c.i64.cast([0,0]),c.i64.cast([0,0]),f,f,c.i64.cast([0,0]))},function(a){return d[0]=c.i64.cast([0,2])}]):(h=e.item,c.seq([function(b){return c.i64.lt(h.lastActivityTimestampMs,a[1])?c.seq([function(b){return c.fe(c.db.table(9).fetch([[[a[0]]]]),function(b){var c=b.update;b.item;return c({lastActivityTimestampMs:a[1],snippet:a[2]})})},function(a){return d[2]=c.i64.cast([0,1])}]):c.resolve(d[2]=c.i64.cast([0,0]))},function(a){return d[0]=d[2]}]))})},function(a){return e[0]=d[0]}])},function(a){return c.resolve(e)}])}c=a;f["default"]=c}),66);