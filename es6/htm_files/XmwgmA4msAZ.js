;/*FB_PKG_DELIM*/

__d("LSDeleteCommunityUnjoinedChannel",[],(function(a,b,c,d,e,f){function a(){var a=arguments,b=a[a.length-1];b.n;var c=[];return b.seq([function(c){return b.fe(b.ftr(b.db.table(9).fetch([[[a[0]]]]),function(c){return b.i64.eq(c.threadKey,a[0])&&b.i64.eq(c.threadType,b.i64.cast([0,19]))}),function(a){return a["delete"]()})},function(a){return b.resolve(c)}])}b=a;f["default"]=b}),66);
__d("LSDeleteThenInsertCommunityUnjoinedThread",[],(function(a,b,c,d,e,f){function a(){var a=arguments,b=a[a.length-1];b.n;var c=[],d=[],e;return b.seq([function(d){return c[1]=a[12]==null?b.i64.cast([0,19]):a[12],c[2]="community",b.db.table(9).fetch([[[a[0]]]]).next().then(function(d,f){var g=d.done;d=d.value;return g?b.db.table(9).put({threadKey:a[0],parentThreadKey:a[1],mailboxType:b.i64.cast([0,0]),threadType:c[1],threadName:a[2],folderName:c[2],threadPictureUrl:a[3],threadPictureUrlFallback:a[4],threadPictureUrlExpirationTimestampMs:a[5],authorityLevel:a[6],lastActivityTimestampMs:a[7],lastReadWatermarkTimestampMs:a[8],removeWatermarkTimestampMs:b.i64.cast([-1,4294967295]),ongoingCallState:b.i64.cast([0,0]),threadDescription:a[9],snippet:a[10],hasPendingInvitation:a[13],eventStartTimestampMs:a[14],eventEndTimestampMs:a[15],takedownState:a[16],cannotReplyReason:a[17],themeFbid:a[18],threadStatus:a[19],needsAdminApprovalForNewParticipant:a[20],capabilities:b.i64.cast([0,0]),capabilities2:b.i64.cast([0,0]),capabilities3:b.i64.cast([0,0])}):(f=d.item,c[3]=f.lastActivityTimestampMs,c[5]=f.parentThreadKey,c[4]=f.disappearingThreadKey,c[6]=f.isDisappearingMode,b.i64.le(f.authorityLevel,a[6])?b.i64.gt(c[3],a[7])&&b.i64.neq(c[4],e)?(b.i64.eq(a[1],b.i64.cast([-1,4294967286]))&&b.i64.eq(c[5],b.i64.cast([0,0]))?(g=[c[5],f.folderName],c[7]=g[0],c[8]=g[1],g):(d=[a[1],c[2]],c[7]=d[0],c[8]=d[1],d),b.db.table(9).put({threadKey:a[0],parentThreadKey:c[7],mailboxType:b.i64.cast([0,0]),threadType:c[1],threadName:a[2],folderName:c[8],threadPictureUrl:a[3],threadPictureUrlFallback:a[4],threadPictureUrlExpirationTimestampMs:a[5],authorityLevel:a[6],lastActivityTimestampMs:c[3],lastReadWatermarkTimestampMs:f.lastReadWatermarkTimestampMs,removeWatermarkTimestampMs:b.i64.cast([-1,4294967295]),ongoingCallState:b.i64.cast([0,0]),threadDescription:a[9],snippet:a[10],hasPendingInvitation:a[13],eventStartTimestampMs:a[14],eventEndTimestampMs:a[15],takedownState:a[16],cannotReplyReason:a[17],themeFbid:a[18],threadStatus:a[19],needsAdminApprovalForNewParticipant:a[20],capabilities:b.i64.cast([0,0]),capabilities2:b.i64.cast([0,0]),capabilities3:b.i64.cast([0,0]),disappearingThreadKey:c[4],isDisappearingMode:c[6]})):b.db.table(9).put({threadKey:a[0],parentThreadKey:a[1],mailboxType:b.i64.cast([0,0]),threadType:c[1],threadName:a[2],folderName:c[2],threadPictureUrl:a[3],threadPictureUrlFallback:a[4],threadPictureUrlExpirationTimestampMs:a[5],authorityLevel:a[6],lastActivityTimestampMs:a[7],lastReadWatermarkTimestampMs:a[8],removeWatermarkTimestampMs:b.i64.cast([-1,4294967295]),ongoingCallState:b.i64.cast([0,0]),threadDescription:a[9],snippet:a[10],hasPendingInvitation:a[13],eventStartTimestampMs:a[14],eventEndTimestampMs:a[15],takedownState:a[16],cannotReplyReason:a[17],themeFbid:a[18],threadStatus:a[19],needsAdminApprovalForNewParticipant:a[20],capabilities:b.i64.cast([0,0]),capabilities2:b.i64.cast([0,0]),capabilities3:b.i64.cast([0,0]),disappearingThreadKey:c[4],isDisappearingMode:c[6]}):b.resolve())})},function(a){return b.resolve(d)}])}b=a;f["default"]=b}),66);
__d("LSSetNeedsAdminApprovalForNewParticipant",[],(function(a,b,c,d,e,f){function a(){var a=arguments,b=a[a.length-1];b.n;var c=[];return b.seq([function(c){return b.fe(b.db.table(9).fetch([[[a[0]]]]),function(b){var c=b.update;b.item;return c({needsAdminApprovalForNewParticipant:a[1]})})},function(a){return b.resolve(c)}])}b=a;f["default"]=b}),66);
__d("LSSetSecondaryParentThreadKey",[],(function(a,b,c,d,e,f){function a(){var a=arguments,b=a[a.length-1];b.n;var c=[];return b.seq([function(c){return b.fe(b.db.table(9).fetch([[[a[0]]]]),function(b){var c=b.update;b.item;return c({secondaryParentThreadKey:a[1]})})},function(a){return b.resolve(c)}])}b=a;f["default"]=b}),66);
__d("LSUpdateCommunityChannelSortOrderOverride",[],(function(a,b,c,d,e,f){function a(){var a=arguments,b=a[a.length-1];b.n;var c=[];return b.resolve(c)}b=a;f["default"]=b}),66);
__d("LSUpdateThreadJoinRequestApprovalSetting",[],(function(a,b,c,d,e,f){function a(){var a=arguments,b=a[a.length-1];b.n;var c=[];return b.resolve(c)}b=a;f["default"]=b}),66);
__d("LSDeleteThenInsertCmChannelList",[],(function(a,b,c,d,e,f){function a(){var a=arguments,b=a[a.length-1];b.n;var c=[];return b.seq([function(c){return b.db.table(167).put({communityId:a[0],threadId:a[1],categoryId:a[2],channelPrivacy:a[3]})},function(a){return b.resolve(c)}])}b=a;f["default"]=b}),66);