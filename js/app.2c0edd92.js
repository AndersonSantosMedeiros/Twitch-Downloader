(function(t){function e(e){for(var a,i,l=e[0],o=e[1],c=e[2],p=0,d=[];p<l.length;p++)i=l[p],Object.prototype.hasOwnProperty.call(n,i)&&n[i]&&d.push(n[i][0]),n[i]=0;for(a in o)Object.prototype.hasOwnProperty.call(o,a)&&(t[a]=o[a]);u&&u(e);while(d.length)d.shift()();return s.push.apply(s,c||[]),r()}function r(){for(var t,e=0;e<s.length;e++){for(var r=s[e],a=!0,l=1;l<r.length;l++){var o=r[l];0!==n[o]&&(a=!1)}a&&(s.splice(e--,1),t=i(i.s=r[0]))}return t}var a={},n={app:0},s=[];function i(e){if(a[e])return a[e].exports;var r=a[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.m=t,i.c=a,i.d=function(t,e,r){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)i.d(r,a,function(e){return t[e]}.bind(null,a));return r},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/Twitch-Downloader/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],o=l.push.bind(l);l.push=e,l=l.slice();for(var c=0;c<l.length;c++)e(l[c]);var u=o;s.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"56d7":function(t,e,r){"use strict";r.r(e);r("cadf"),r("551c"),r("f751"),r("097d");var a=r("2b0e"),n=(r("d1e7"),r("bb71"));r("da64");a["a"].use(n["a"],{iconfont:"md"});var s=r("8c4f"),i=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-container",{attrs:{"grid-list-sm":"",fluid:""}},[r("v-layout",{attrs:{"justify-space-between":"","align-center":"",row:"",wrap:""}},[r("v-flex",{attrs:{xs4:"",sm3:""}},[r("v-slider",{attrs:{label:"Limit",disabled:t.loading,"thumb-size":25,"thumb-label":"always",max:"100",min:"1"},model:{value:t.limit,callback:function(e){t.limit=e},expression:"limit"}})],1),t.$vuetify.breakpoint.xs?t._e():r("v-spacer"),r("v-flex",{attrs:{xs7:"",lg5:""}},[r("v-text-field",{attrs:{label:"Streamer",loading:t.loading,disabled:t.loading},on:{keydown:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.search()}},scopedSlots:t._u([{key:"append-outer",fn:function(){return[r("v-btn",{attrs:{icon:""},on:{click:t.search}},[r("v-icon",[t._v("search")])],1)]},proxy:!0}]),model:{value:t.streamerQuery,callback:function(e){t.streamerQuery=e},expression:"streamerQuery"}})],1),t.$vuetify.breakpoint.xs?t._e():r("v-spacer")],1),r("v-layout",{attrs:{row:"",wrap:"","justify-center":""}},t._l(t.streamers,(function(t,e){return r("v-flex",{key:e,attrs:{xs6:"",sm3:"",md3:"",lg2:"","d-flex":""}},[r("streamer",{attrs:{streamer:t}})],1)})),1),r("v-dialog",{attrs:{lazy:"",width:"600",fullscreen:t.$vuetify.breakpoint.xs},model:{value:t.dialogClip,callback:function(e){t.dialogClip=e},expression:"dialogClip"}},[r("clips")],1)],1)},l=[],o=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-card",{staticClass:"d-flex",staticStyle:{background:"transparent",cursor:"pointer"},attrs:{tile:"",ripple:""},on:{click:t.setStreamer}},[r("v-container",{attrs:{flex:""}},[r("v-layout",{attrs:{row:"",wrap:"","justify-center":""}},[r("v-flex",{attrs:{xs12:""}},[r("v-card-text",{staticClass:"text-xs-center"},[t._v("\n                  "+t._s(t.streamer.display_name)+"\n              ")])],1),r("v-flex",{attrs:{xs12:""}},[r("v-img",{attrs:{src:t.streamer.logo,"aspect-ratio":"1",contain:""},scopedSlots:t._u([{key:"placeholder",fn:function(){return[r("v-layout",{attrs:{"fill-height":"","align-center":"","justify-center":"","ma-0":""}},[r("v-progress-circular",{attrs:{indeterminate:"",color:"grey"}})],1)]},proxy:!0}])})],1)],1)],1)],1)},c=[],u={props:["streamer"],data:function(){return{}},methods:{setStreamer:function(){this.$store.dispatch("selectStreamer",this.streamer)}}},p=u,d=r("2877"),f=r("6544"),m=r.n(f),h=r("b0af"),v=r("99d9"),g=r("a523"),y=r("0e8f"),x=r("adda"),C=r("a722"),b=r("490a"),_=Object(d["a"])(p,o,c,!1,null,null,null),w=_.exports;m()(_,{VCard:h["a"],VCardText:v["b"],VContainer:g["a"],VFlex:y["a"],VImg:x["a"],VLayout:C["a"],VProgressCircular:b["a"]});var k=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-card",[r("v-container",{staticClass:"pt-0",attrs:{flex:""}},[r("v-layout",{attrs:{row:"",wrap:"","justify-center":""}},[r("v-flex",{staticClass:"text-xs-center",attrs:{xs12:""}},[t.streamer?r("v-card-text",{staticClass:"headline"},[t._v("\n                  Select a clip to watch\n              ")]):t._e()],1),r("v-flex",{attrs:{xs10:""}},[r("v-slider",{attrs:{label:"Clips per page",disabled:t.loadingData,"thumb-size":25,"thumb-label":"always","append-icon":"refresh",max:"10",min:"1"},on:{"click:append":function(e){return t.reloadClips()}},model:{value:t.limit,callback:function(e){t.limit=e},expression:"limit"}})],1),t.clips?[t.clips.length?t._l(t.clips,(function(t,e){return r("v-flex",{key:e,staticClass:"text-xs-center",attrs:{xs12:"","d-flex":""}},[r("clip-details",{attrs:{clip:t}})],1)})):r("v-flex",{staticClass:"text-xs-center"},[r("span",{staticClass:"headline grey--text text--darken-2"},[t._v("Sorry, but there's no clips to show :T")])])]:t.loading?r("v-flex",{attrs:{xs10:""}},[r("v-progress-linear",{attrs:{indeterminate:!0,height:"2"}})],1):t._e()],2)],1),r("v-divider"),r("v-card-actions",[r("v-btn",{attrs:{flat:""},on:{click:function(e){return t.clearData()}}},[t._v("Close")]),r("v-spacer"),r("v-btn",{attrs:{disabled:!t.cursor,flat:""},on:{click:function(e){return t.nextPage()}}},[t._v("Next")])],1)],1)},V=[],S=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-card",{staticClass:"d-flex",staticStyle:{background:"transparent"},attrs:{tile:""}},[r("v-container",{staticClass:"pa-2",attrs:{flex:""}},[r("v-layout",{attrs:{row:"",wrap:"","justify-start":""}},[r("v-flex",{attrs:{xs12:""}},[r("v-card-text",{staticClass:"text-xs-center pt-0 pb-0"},[t._v("\n                "+t._s(t.clip.title)+"\n            ")]),r("v-card-text",{staticClass:"text-xs-center pt-0 pb-1"},[t._v("\n                Game: "+t._s(t.clip.game)+"\n            ")]),t.clicked?[r("iframe",{attrs:{src:t.clip.embed_url,frameborder:"0",width:"100%",height:"250"}})]:r("v-tooltip",{attrs:{bottom:"",lazy:""},scopedSlots:t._u([{key:"activator",fn:function(e){var a=e.on;return[r("v-img",t._g({staticStyle:{cursor:"pointer"},attrs:{src:t.clip.thumbnails.medium,"lazy-src":t.clip.thumbnails.tiny,"aspect-ratio":"1.9",contain:""},on:{click:function(e){t.clicked=!0}},scopedSlots:t._u([{key:"placeholder",fn:function(){return[r("v-layout",{attrs:{"fill-height":"","align-center":"","justify-center":"","ma-0":""}},[r("v-progress-circular",{attrs:{indeterminate:"",color:"grey"}})],1)]},proxy:!0}],null,!0)},a),[r("v-layout",{staticClass:"lightbox white--text",attrs:{"align-center":"","justify-center":"","fill-height":""}},[r("v-flex",[r("v-icon",{attrs:{size:"120",color:"grey lighten-2"}},[t._v("play_arrow")])],1)],1)],1)]}}],null,!1,193316032)},[r("span",[t._v("Click to play clip")])]),r("v-menu",{attrs:{transition:"slide-y-transition",bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var a=e.on;return[r("v-btn",t._g({attrs:{flat:""}},a),[t._v("\n                  Download\n                ")])]}}])},[r("v-list",[t.data?t._l(t.data.quality_options,(function(e,a){return r("v-list-tile",{key:a,attrs:{ripple:""},on:{click:function(r){return t.open(e.source)}}},[t._v("\n                    "+t._s(e.quality)+"p\n                  ")])})):t._e()],2)],1)],2)],1)],1)],1)},j=[],$={"Client-ID":"3n1fwxo1kfd6xiyiymkltmf2bjut1f",Accept:"application/vnd.twitchtv.v5+json"},L=function(t,e){return fetch("https://api.twitch.tv/kraken/search/channels?query=".concat(t,"&limit=").concat(e),{method:"GET",headers:$,cache:"default"})},O=function(t,e,r){return fetch("https://api.twitch.tv/kraken/clips/top?channel=".concat(t,"&limit=").concat(e).concat(r?"&cursor="+r:""),{method:"GET",headers:$,cache:"default"})},D=function(t){return fetch("https://clips.twitch.tv/api/v2/clips/".concat(t,"/status"),{method:"GET",cache:"default"})},T={getStreamers:L,getClips:O,loadClipData:D},P={props:["clip"],data:function(){return{clicked:!1,data:null}},computed:{streamer:function(){return this.$store.getters.streamer}},watch:{streamer:function(t){t||(this.clicked=!1)}},mounted:function(){this.loadData()},methods:{open:function(t){window.open(t,"_self")},loadData:function(){var t=this;T.loadClipData(this.clip.slug).then((function(t){return t.json()})).then((function(e){t.data=e}))}}},E=P,z=r("8336"),I=r("132d"),q=r("8860"),F=r("ba95"),M=r("e449"),Q=r("3a2f"),A=Object(d["a"])(E,S,j,!1,null,null,null),G=A.exports;m()(A,{VBtn:z["a"],VCard:h["a"],VCardText:v["b"],VContainer:g["a"],VFlex:y["a"],VIcon:I["a"],VImg:x["a"],VLayout:C["a"],VList:q["a"],VListTile:F["a"],VMenu:M["a"],VProgressCircular:b["a"],VTooltip:Q["a"]});var B={components:{ClipDetails:G},data:function(){return{loadingData:!1,limit:2,page:1}},mounted:function(){this.streamer&&this.loadClips()},computed:{streamer:function(){return this.$store.getters.streamer},clips:function(){return this.$store.getters.clips},loading:function(){return this.$store.getters.loading},cursor:function(){return this.$store.getters.cursor}},watch:{streamer:function(t,e){t!==e&&t&&this.loadClips()}},methods:{clearData:function(){this.$store.dispatch("clearClips",null),this.$store.dispatch("selectStreamer",null)},loadClips:function(){this.$store.dispatch("loadClips",{limit:this.limit,cursor:null})},reloadClips:function(){this.$store.dispatch("reloadClips",this.limit)},nextPage:function(){this.$store.dispatch("loadClips",{limit:this.limit,cursor:this.cursor})}}},J=B,N=r("ce7e"),R=r("8e36"),U=r("ba0d"),H=r("9910"),K=Object(d["a"])(J,k,V,!1,null,null,null),W=K.exports;m()(K,{VBtn:z["a"],VCard:h["a"],VCardActions:v["a"],VCardText:v["b"],VContainer:g["a"],VDivider:N["a"],VFlex:y["a"],VLayout:C["a"],VProgressLinear:R["a"],VSlider:U["a"],VSpacer:H["a"]});var X={components:{Streamer:w,Clips:W},data:function(){return{streamerQuery:null,limit:25,dialogClip:!1}},computed:{loading:function(){return this.$store.getters.loading},streamers:function(){return this.$store.getters.streamers},streamer:function(){return this.$store.getters.streamer}},watch:{streamer:function(t){this.dialogClip=!!t},dialogClip:function(t){t||(this.$store.dispatch("clearClips",null),this.$store.dispatch("selectStreamer",null))}},methods:{search:function(){this.$store.dispatch("getStreamers",{query:encodeURIComponent(this.streamerQuery),limit:this.limit})}}},Y=X,Z=r("169a"),tt=r("2677"),et=Object(d["a"])(Y,i,l,!1,null,null,null),rt=et.exports;m()(et,{VBtn:z["a"],VContainer:g["a"],VDialog:Z["a"],VFlex:y["a"],VIcon:I["a"],VLayout:C["a"],VSlider:U["a"],VSpacer:H["a"],VTextField:tt["a"]}),a["a"].use(s["a"]);var at=new s["a"]({mode:"history",base:"Twitch-Downloader/",routes:[{path:"/",name:"home",component:rt}]}),nt=r("2f62");a["a"].use(nt["a"]);var st=new nt["a"].Store({state:{loading:!1,streamers:[],clips:[],streamer:null,cursor:null,lastCursor:null},mutations:{setLoading:function(t,e){t.loading=e},setStreamers:function(t,e){t.streamers=e},setClips:function(t,e){t.clips=e},setStreamer:function(t,e){t.streamer=e},setCursor:function(t,e){t.cursor=e},setLastCursor:function(t,e){t.lastCursor=e}},actions:{getStreamers:function(t,e){var r=t.commit;r("setLoading",!0),T.getStreamers(e.query,e.limit).then((function(t){return r("setLoading",!1),t.json()})).then((function(t){r("setStreamers",t.channels)}))},loadClips:function(t,e){var r=t.commit,a=t.state;r("setLoading",!0),T.getClips(a.streamer.display_name,e.limit,e.cursor).then((function(t){return r("setLoading",!1),t.json()})).then((function(t){r("setClips",t.clips),r("setLastCursor",a.cursor),r("setCursor",t._cursor)}))},reloadClips:function(t,e){var r=t.commit,a=t.state;r("setLoading",!0),T.getClips(a.streamer.display_name,e,a.lastCursor).then((function(t){return r("setLoading",!1),t.json()})).then((function(t){r("setClips",t.clips),r("setCursor",t._cursor)}))},selectStreamer:function(t,e){var r=t.commit;r("setStreamer",e)},clearClips:function(t){var e=t.commit;e("setClips",null),e("setCursor",null),e("setLastCursor",null)}},getters:{loading:function(t){return t.loading},streamers:function(t){return t.streamers},streamer:function(t){return t.streamer},clips:function(t){return t.clips},cursor:function(t){return t.cursor},lastCursor:function(t){return t.lastCursor}}}),it=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-app",[r("router-view")],1)},lt=[],ot={name:"App",data:function(){return{}}},ct=ot,ut=r("7496"),pt=Object(d["a"])(ct,it,lt,!1,null,null,null),dt=pt.exports;m()(pt,{VApp:ut["a"]}),a["a"].config.productionTip=!1,new a["a"]({router:at,store:st,render:function(t){return t(dt)}}).$mount("#app")}});
//# sourceMappingURL=app.2c0edd92.js.map