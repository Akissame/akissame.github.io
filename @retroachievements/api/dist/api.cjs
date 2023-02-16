function e(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var r=/*#__PURE__*/e(require("isomorphic-unfetch")),t="https://retroachievements.org/API",o=function(e,r,t,o){void 0===o&&(o={});for(var n=(e+"/"+r).replace(/([^:]\/)\/+/g,"$1"),s={z:t.userName,y:t.webApiKey},i=0,a=Object.entries(o);i<a.length;i++){var u=a[i],c=u[0],l=u[1];n.includes(":"+c)?n=n.replace(":"+c,String(l)):void 0!==l&&(s[c]=String(l))}return n+"?"+new URLSearchParams(s).toString()},n=function(e){try{return Promise.resolve(r.default(e.url)).then(function(e){return Promise.resolve(e.json())})}catch(e){return Promise.reject(e)}};function s(){return s=Object.assign?Object.assign.bind():function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},s.apply(this,arguments)}function i(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,o=new Array(r);t<r;t++)o[t]=e[t];return o}function a(e,r){var t="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(t)return(t=t.call(e)).next.bind(t);if(Array.isArray(e)||(t=function(e,r){if(e){if("string"==typeof e)return i(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?i(e,r):void 0}}(e))||r&&e&&"number"==typeof e.length){t&&(e=t);var o=0;return function(){return o>=e.length?{done:!0}:{done:!1,value:e[o++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var u,c,l,m,h,d=function e(r,t){void 0===t&&(t={});var o=t.shouldCastToNumbers,n=t.shouldMapToBooleans,i=r;if(Array.isArray(r)){for(var u,c=[],l=a(r);!(u=l()).done;)c.push(e(u.value,t));i=c}else if(!Array.isArray(r)&&r instanceof Object){for(var m={},h=0,d=Object.entries(r);h<d.length;h++){var v,P=d[h],f=P[0],A=P[1],y=A;null!=o&&o.includes(f)&&(y=null===A?null:Number(A)),null!=n&&n.includes(f)&&(y=null===A?null:"1"===A),m=s({},m,((v={})[p(f)]=e(y,t),v))}i=m}return i},p=function(e){if(e.toUpperCase()===e)return e.toLowerCase();var r=e.charAt(0).toLowerCase()+e.slice(1);return(r=(r=r.replace(/ID/g,"Id")).replace(/URL/g,"Url")).replace(/rA/g,"ra")};exports.ClaimType=void 0,(u=exports.ClaimType||(exports.ClaimType={}))[u.Primary=0]="Primary",u[u.Collaboration=1]="Collaboration",exports.ClaimSetType=void 0,(c=exports.ClaimSetType||(exports.ClaimSetType={}))[c.NewSet=0]="NewSet",c[c.Revision=1]="Revision",exports.ClaimStatus=void 0,(l=exports.ClaimStatus||(exports.ClaimStatus={}))[l.Active=0]="Active",l[l.Complete=1]="Complete",l[l.Dropped=2]="Dropped",exports.AchievementDistributionFlags=void 0,(m=exports.AchievementDistributionFlags||(exports.AchievementDistributionFlags={}))[m.CoreAchievements=3]="CoreAchievements",m[m.UnofficialAchievements=5]="UnofficialAchievements",function(e){e.Primary="0",e.Collaboration="1"}(h||(h={}));var v=function(e,r){var t=s({},e);return void 0!==r.count&&(t.c=r.count),void 0!==r.offset&&(t.o=r.offset),t};exports.buildAuthorization=function(e){if(!e.userName||!e.webApiKey)throw new Error('\n      buildAuthorization() requires an object containing a\n      userName and webApiKey. eg:\n\n      const authorization = buildAuthorization({\n        userName: "myUserName",\n        webApiKey: "myWebApiKey"\n      })\n    ');return e},exports.getAchievementCount=function(e,r){try{var s=o(t,"/API_GetAchievementCount.php",e,{i:r.gameId});return Promise.resolve(n({url:s})).then(d)}catch(e){return Promise.reject(e)}},exports.getAchievementDistribution=function(e,r){try{var s=r.flags,i=r.hardcore,a={i:r.gameId};void 0!==s&&(a.f=s),void 0!==i&&(a.h=!0===i?1:0);var u=o(t,"/API_GetAchievementDistribution.php",e,a);return Promise.resolve(n({url:u}))}catch(e){return Promise.reject(e)}},exports.getAchievementOfTheWeek=function(e){try{var r=o(t,"/API_GetAchievementOfTheWeek.php",e);return Promise.resolve(n({url:r})).then(function(e){return d(e,{shouldCastToNumbers:["ID","Points","TrueRatio","TotalPlayers","RAPoints","UnlocksCount"],shouldMapToBooleans:["HardcoreMode"]})})}catch(e){return Promise.reject(e)}},exports.getAchievementUnlocks=function(e,r){try{var s=r.offset,i=r.count,a={a:r.achievementId};s&&(a.o=s),i&&(a.c=i);var u=o(t,"/API_GetAchievementUnlocks.php",e,a);return Promise.resolve(n({url:u})).then(function(e){return d(e,{shouldCastToNumbers:["ID","Points","TrueRatio","RAPoints"],shouldMapToBooleans:["HardcoreMode"]})})}catch(e){return Promise.reject(e)}},exports.getAchievementsEarnedBetween=function(e,r){try{var s=r.toDate,i=o(t,"/API_GetAchievementsEarnedBetween.php",e,{u:r.userName,f:(r.fromDate.getTime()/1e3).toFixed(0),t:(s.getTime()/1e3).toFixed(0)});return Promise.resolve(n({url:i})).then(function(e){return d(e,{shouldCastToNumbers:["AchievementID","Points","GameID"],shouldMapToBooleans:["HardcoreMode"]})})}catch(e){return Promise.reject(e)}},exports.getAchievementsEarnedOnDay=function(e,r){try{var s=r.onDate,i=o(t,"/API_GetAchievementsEarnedOnDay.php",e,{u:r.userName,d:s.getFullYear()+"-"+(s.getMonth()+1)+"-"+s.getDate()});return Promise.resolve(n({url:i})).then(function(e){return d(e,{shouldCastToNumbers:["AchievementID","Points","GameID"],shouldMapToBooleans:["HardcoreMode"]})})}catch(e){return Promise.reject(e)}},exports.getActiveClaims=function(e){try{var r=o(t,"/API_GetActiveClaims.php",e);return Promise.resolve(n({url:r})).then(function(e){return d(e,{shouldCastToNumbers:["ID","GameID","ClaimType","SetType","Status","Extension","Special","MinutesLeft"]})})}catch(e){return Promise.reject(e)}},exports.getConsoleIds=function(e){try{var r=o(t,"/API_GetConsoleIDs.php",e);return Promise.resolve(n({url:r})).then(function(e){return d(e,{shouldCastToNumbers:["ID"]})})}catch(e){return Promise.reject(e)}},exports.getGame=function(e,r){try{var s=o(t,"/API_GetGame.php",e,{i:r.gameId});return Promise.resolve(n({url:s})).then(function(e){return d(e,{shouldCastToNumbers:["ID","ForumTopicID","ConsoleID","Flags","Released"]})})}catch(e){return Promise.reject(e)}},exports.getGameExtended=function(e,r){try{var s=o(t,"/API_GetGameExtended.php",e,{i:r.gameId});return Promise.resolve(n({url:s})).then(function(e){return d(e,{shouldCastToNumbers:["ID","NumAwarded","NumAwardedHardcore","Points","TrueRatio","DisplayOrder","NumDistinctPlayersCasual","NumDistinctPlayersHardcore","Released"]})})}catch(e){return Promise.reject(e)}},exports.getGameInfoAndUserProgress=function(e,r){try{var s=o(t,"/API_GetGameInfoAndUserProgress.php",e,{g:r.gameId,u:r.userName});return Promise.resolve(n({url:s})).then(function(e){return d(e,{shouldCastToNumbers:["ID","NumAwarded","NumAwardedHardcore","Points","TrueRatio","DisplayOrder","NumDistinctPlayersCasual","NumDistinctPlayersHardcore","Released"]})})}catch(e){return Promise.reject(e)}},exports.getGameList=function(e,r){try{var i=r.shouldOnlyRetrieveGamesWithAchievements,a=r.shouldRetrieveGameHashes,u={i:r.consoleId};void 0!==i&&(u=s({},u,{f:i?1:0})),a&&(u=s({},u,{h:a?1:0}));var c=o(t,"/API_GetGameList.php",e,u);return Promise.resolve(n({url:c})).then(function(e){return d(e,{shouldCastToNumbers:["ID","ConsoleID"]})})}catch(e){return Promise.reject(e)}},exports.getGameRankAndScore=function(e,r){try{var s=o(t,"/API_GetGameRankAndScore.php",e,{g:r.gameId,t:"latest-masters"===r.type?1:0});return Promise.resolve(n({url:s})).then(function(e){return d(e,{shouldCastToNumbers:["TotalScore"]})})}catch(e){return Promise.reject(e)}},exports.getGameRating=function(e,r){try{var s=o(t,"/API_GetGameRating.php",e,{i:r.gameId});return Promise.resolve(n({url:s})).then(d)}catch(e){return Promise.reject(e)}},exports.getTicketData=function(e,r){void 0===r&&(r={});try{var s=function(e){var r=e.ticketId,t=e.isGettingMostTicketedGames,o=e.userName,n=e.gameId,s=e.isGettingTicketsForUnofficialAchievements,i=e.shouldReturnTicketsList,a=e.achievementId,u={};return void 0!==r?u.i=r:t?(u.f="1",u=v(u,e)):o?u.u=o:n?(u.g=n,s&&(u.f="5"),i&&(u.d="1")):a?u.a=a:u=v(u,e),u}(r),i=o(t,"/API_GetTicketData.php",e,s);return Promise.resolve(n({url:i})).then(function(e){return d(e,{shouldCastToNumbers:["ID","AchievementID","Points","GameID","ReportType","ReportState","OpenTickets"],shouldMapToBooleans:["Hardcore"]})})}catch(e){return Promise.reject(e)}},exports.getTopTenUsers=function(e){try{var r=o(t,"/API_GetTopTenUsers.php",e);return Promise.resolve(n({url:r})).then(function(e){for(var r,t=[],o=a(e);!(r=o()).done;){var n=r.value;t.push({userName:n[1],totalPoints:Number(n[2]),totalRatioPoints:Number(n[3])})}return t})}catch(e){return Promise.reject(e)}},exports.getUserClaims=function(e,r){try{var s=o(t,"/API_GetUserClaims.php",e,{u:r.userName});return Promise.resolve(n({url:s})).then(function(e){return d(e,{shouldCastToNumbers:["ID","GameID","ClaimType","SetType","Status","Extension","Special","MinutesLeft"]})})}catch(e){return Promise.reject(e)}},exports.getUserCompletedGames=function(e,r){try{var s=o(t,"/API_GetUserCompletedGames.php",e,{u:r.userName});return Promise.resolve(n({url:s})).then(function(e){return d(e,{shouldCastToNumbers:["GameID","ConsoleID","MaxPossible","NumAwarded","PctWon"],shouldMapToBooleans:["HardcoreMode"]})})}catch(e){return Promise.reject(e)}},exports.getUserGameRankAndScore=function(e,r){try{var s=o(t,"/API_GetUserGameRankAndScore.php",e,{g:r.gameId,u:r.userName});return Promise.resolve(n({url:s})).then(function(e){return d(e,{shouldCastToNumbers:["TotalScore","UserRank"]})})}catch(e){return Promise.reject(e)}},exports.getUserPoints=function(e,r){try{var s=o(t,"/API_GetUserPoints.php",e,{u:r.userName});return Promise.resolve(n({url:s})).then(d)}catch(e){return Promise.reject(e)}},exports.getUserProgress=function(e,r){try{var s=o(t,"/API_GetUserProgress.php",e,{u:r.userName,i:r.gameIds.join(",")});return Promise.resolve(n({url:s})).then(function(e){return d(e,{shouldCastToNumbers:["NumPossibleAchievements","PossibleScore","NumAchieved","ScoreAchieved","NumAchievedHardcore","ScoreAchievedHardcore"]})})}catch(e){return Promise.reject(e)}},exports.getUserRecentlyPlayedGames=function(e,r){try{var s=r.offset,i=r.count,a={u:r.userName};void 0!==s&&(a.o=s),void 0!==i&&(a.c=i);var u=o(t,"/API_GetUserRecentlyPlayedGames.php",e,a);return Promise.resolve(n({url:u})).then(function(e){return d(e,{shouldCastToNumbers:["GameID","ConsoleID","NumPossibleAchievements","PossibleScore","NumAchieved","ScoreAchieved","NumAchievedHardcore","ScoreAchievedHardcore","MyVote"]})})}catch(e){return Promise.reject(e)}},exports.getUserSummary=function(e,r){try{var s=r.recentGamesCount,i=r.recentAchievementsCount,a={u:r.userName};void 0!==s&&(a.g=s),void 0!==i&&(a.a=i);var u=o(t,"/API_GetUserSummary.php",e,a);return Promise.resolve(n({url:u})).then(function(e){return d(e,{shouldCastToNumbers:["GameID","ConsoleID","ID","LastGameID","ForumTopicID","activitytype","ContribCount","ContribYield","TotalPoints","TotalSoftcorePoints","TotalTruePoints","Permissions","NumPossibleAchievements","PossibleScore","NumAchieved","ScoreAchieved","NumAchievedHardcore","ScoreAchievedHardcore","Points","SoftcorePoints"],shouldMapToBooleans:["Untracked","UserWallActive","IsAwarded","HardcoreAchieved"]})})}catch(e){return Promise.reject(e)}},exports.unsafe_call=n;
//# sourceMappingURL=api.cjs.map