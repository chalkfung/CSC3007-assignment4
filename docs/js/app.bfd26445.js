(function(){"use strict";var t={2565:function(t,e,a){var r=a(144),n=a(9132);r.Z.use(n.Z);var o=new n.Z({}),i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[a("v-app-bar",{attrs:{color:"deep-purple",dark:"",app:""}},[a("v-app-bar-nav-icon",{on:{click:t.toggleNavBar}}),a("v-toolbar-title",[t._v("CSC3007 Assignment")])],1),a("NavBar",{ref:"navbar"}),a("v-main",[a("router-view")],1),a("v-footer",{attrs:{color:"deep-purple",dark:"",app:""}},[t._v("Author: Ng Cheuk Fung")])],1)},s=[],u=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-navigation-drawer",{attrs:{absolute:"",temporary:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[a("v-list",{attrs:{nav:"",dense:""}},[a("v-list-item-group",{attrs:{"active-class":"deep-purple--text text--accent-4"},model:{value:t.group,callback:function(e){t.group=e},expression:"group"}},[a("v-list-item",{attrs:{to:"/"}},[a("v-list-item-icon",[a("v-icon",[t._v("mdi-home")])],1),a("v-list-item-title",[t._v("Home")])],1),a("v-list-item",{attrs:{to:"/a1"}},[a("v-list-item-icon",[a("v-icon",[t._v("mdi-weather-hazy")])],1),a("v-list-item-title",[t._v("Assignment 1 - PSI Table")])],1),a("v-list-item",{attrs:{to:"/a2"}},[a("v-list-item-icon",[a("v-icon",[t._v("mdi-account-tie-hat")])],1),a("v-list-item-title",[t._v("Assignment 2 - Crime Rate")])],1)],1)],1)],1)},l=[],_={name:"NavBar",methods:{toggleDrawer(){this.drawer=!this.drawer}},data(){return{drawer:!1,group:null,items:{}}}},c=_,h=a(1001),m=a(3453),d=a.n(m),p=a(6428),v=a(6816),f=a(7620),y=a(3249),x=a(459),g=a(2710),b=a(9194),w=(0,h.Z)(c,u,l,!1,null,null,null),C=w.exports;d()(w,{VIcon:p.Z,VList:v.Z,VListItem:f.Z,VListItemGroup:y.Z,VListItemIcon:x.Z,VListItemTitle:g.V9,VNavigationDrawer:b.Z});var Z={data:()=>({}),methods:{toggleNavBar(){this.$refs.navbar.toggleDrawer()}},components:{NavBar:C}},S=Z,I=a(7524),O=a(8320),V=a(5206),k=a(899),j=a(7877),D=a(7921),T=(0,h.Z)(S,i,s,!1,null,null,null),H=T.exports;d()(T,{VApp:I.Z,VAppBar:O.Z,VAppBarNavIcon:V.Z,VFooter:k.Z,VMain:j.Z,VToolbarTitle:D.qW});var L=a(8345),M=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{attrs:{"fill-height":"",fluid:""}},[a("v-row",{attrs:{align:"center",justify:"center"}},[a("div",{staticClass:"text-center"},[a("h1",[t._v("Homepage of Cheuk Fung's CSC3007 Assignments")])])])],1)},P=[],N=a(247),$=a(2877),A={},B=(0,h.Z)(A,M,P,!1,null,null,null),E=B.exports;d()(B,{VContainer:N.Z,VRow:$.Z});var z=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{attrs:{fluid:""}},[a("v-row",{staticClass:"py-6",attrs:{justify:"center"}},[a("h1",[t._v("Singapore Air Quality Table")])]),a("v-row",{staticClass:"py-6",attrs:{justify:"center"}},[a("v-data-table",{staticClass:"elevation-1",attrs:{headers:t.headers,items:t.locations,"hide-default-footer":!0}})],1),a("v-row",{attrs:{justify:"center"}},[a("h3",[t._v("Updated as of: "+t._s(this.updateTime))])])],1)},R=[],U=a(9669),F=a.n(U);const Y=F();var q={install(t){t.prototype.$axios=F()}},G={methods:{fetchUpdateData:async function(){return await Y.get("https://api.data.gov.sg/v1/environment/psi").then((t=>{let e=t.data.items[0].readings;Object.entries(e).forEach((([t,e])=>{Object.entries(e).forEach((([e,a])=>{switch(e){case"west":this.locations.filter((t=>"West"==t.name))[0][t]=a;break;case"central":this.locations.filter((t=>"Central"==t.name))[0][t]=a;break;case"north":this.locations.filter((t=>"North"==t.name))[0][t]=a;break;case"south":this.locations.filter((t=>"South"==t.name))[0][t]=a;break;case"east":this.locations.filter((t=>"East"==t.name))[0][t]=a;break;case"national":this.locations.filter((t=>"National"==t.name))[0][t]=a;break;default:break}}))})),this.updateTime=new Date(t.data.items[0].update_timestamp)}))}},created(){this.interval=setInterval((()=>this.fetchUpdateData()),3e3)},destroyed(){clearInterval(this.interval)},data(){return{updateTime:null,headers:[{text:"Location",align:"start",sortable:!1,value:"name"},{text:"O3 Sub Index",value:"o3_sub_index"},{text:"O3 8H Max",value:"o3_eight_hour_max"},{text:"PM10 Sub Index",value:"pm10_sub_index"},{text:"PM10 24H Hourly",value:"pm10_twenty_four_hourly"},{text:"PM2.5 Sub Index",value:"pm25_sub_index"},{text:"PM2.5 24H Hourly ",value:"pm25_twenty_four_hourly"},{text:"SO2 Sub Index",value:"so2_sub_index"},{text:"SO2 24H Hourly",value:"so2_twenty_four_hourly"},{text:"CO Sub Index",value:"co_sub_index"},{text:"CO 8H Max",value:"co_eight_hour_max"},{text:"NO2 1H Max",value:"no2_one_hour_max"},{text:"PSI 24H Max",value:"psi_twenty_four_hourly"}],locations:[{name:"National",o3_sub_index:0,o3_eight_hour_max:0,pm10_sub_index:0,pm10_twenty_four_hourly:0,pm25_sub_index:0,pm25_twenty_four_hourly:0,so2_sub_index:0,so2_twenty_four_hourly:0,co_sub_index:0,co_eight_hour_max:0,no2_one_hour_max:0,psi_twenty_four_hourly:0},{name:"North",o3_sub_index:0,o3_eight_hour_max:0,pm10_sub_index:0,pm10_twenty_four_hourly:0,pm25_sub_index:0,pm25_twenty_four_hourly:0,so2_sub_index:0,so2_twenty_four_hourly:0,co_sub_index:0,co_eight_hour_max:0,no2_one_hour_max:0,psi_twenty_four_hourly:0},{name:"South",o3_sub_index:0,o3_eight_hour_max:0,pm10_sub_index:0,pm10_twenty_four_hourly:0,pm25_sub_index:0,pm25_twenty_four_hourly:0,so2_sub_index:0,so2_twenty_four_hourly:0,co_sub_index:0,co_eight_hour_max:0,no2_one_hour_max:0,psi_twenty_four_hourly:0},{name:"East",o3_sub_index:0,o3_eight_hour_max:0,pm10_sub_index:0,pm10_twenty_four_hourly:0,pm25_sub_index:0,pm25_twenty_four_hourly:0,so2_sub_index:0,so2_twenty_four_hourly:0,co_sub_index:0,co_eight_hour_max:0,no2_one_hour_max:0,psi_twenty_four_hourly:0},{name:"West",o3_sub_index:0,o3_eight_hour_max:0,pm10_sub_index:0,pm10_twenty_four_hourly:0,pm25_sub_index:0,pm25_twenty_four_hourly:0,so2_sub_index:0,so2_twenty_four_hourly:0,co_sub_index:0,co_eight_hour_max:0,no2_one_hour_max:0,psi_twenty_four_hourly:0},{name:"Central",o3_sub_index:0,o3_eight_hour_max:0,pm10_sub_index:0,pm10_twenty_four_hourly:0,pm25_sub_index:0,pm25_twenty_four_hourly:0,so2_sub_index:0,so2_twenty_four_hourly:0,co_sub_index:0,co_eight_hour_max:0,no2_one_hour_max:0,psi_twenty_four_hourly:0}]}}},W=G,K=a(2090),Q=(0,h.Z)(W,z,R,!1,null,null,null),J=Q.exports;d()(Q,{VContainer:N.Z,VDataTable:K.Z,VRow:$.Z});var X=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{attrs:{fluid:""}},[a("v-row",{staticClass:"py-6",attrs:{justify:"center"}},[a("h1",[t._v("Crime Rate")])]),a("v-row",{staticClass:"py-3",attrs:{justify:"center"},domProps:{innerHTML:t._s(t.chart)}}),a("v-row",{staticClass:"py-3",attrs:{justify:"center"}},[t._v(" Some bars might not be visible due to small values. You may use the dropdown menu below to inspect individual crime categories. ")]),a("v-row",{staticClass:"py-3",attrs:{justify:"center"}},[a("v-col",{attrs:{cols:"3"}},[a("v-select",{attrs:{label:"Choose a category",dense:"",outlined:"",items:t.crimes},on:{change:t.onSelectChange}})],1)],1),a("v-row",{staticClass:"py-3",attrs:{justify:"center"},domProps:{innerHTML:t._s(t.selectChart)}})],1)},tt=[],et=(a(6699),a(8331)),at={data(){return{crimeyear:[],years:[],crimes:[],chart:null,selectChart:null,data:null}},methods:{fetchCrimeData:async function(){return await Y.get("https://data.gov.sg/api/action/datastore_search?resource_id=83c21090-bd19-4b54-ab6b-d999c251edcf").then((t=>{let e=t.data.result.records;this.data=e,e.forEach((t=>{this.crimeyear.push({crime:t["level_2"],year:t["year"],value:parseInt(t["value"])}),this.years.includes(t["year"])||this.years.push(t["year"]),this.crimes.includes(t["level_2"])||this.crimes.push(t["level_2"])}))}))},onSelectChange:function(t){let e=[],a=[];this.data.forEach((r=>{r["level_2"]==t&&(e.push({crime:r["level_2"],year:r["year"],value:parseInt(r["value"])}),a.push(r["year"]))})),this.selectChart=this.groupedBarChart(e,{x:t=>t.crime,y:t=>t.value,z:t=>t.year,xDomain:et.IRY(e,(t=>et.Smz(t,(t=>-t.value))),(t=>t.crime)),yLabel:"Cases",zDomain:a,colors:et.lqd[a.length],width:1400,height:550}).outerHTML},groupedBarChart:function(t,{x:e=((t,e)=>e),y:a=(t=>t),z:r=(()=>1),title:n,marginTop:o=30,marginRight:i=0,marginBottom:s=30,marginLeft:u=40,width:l=640,height:_=400,xDomain:c,xRange:h=[u,l-i],xPadding:m=.1,yType:d=et.BYU,yDomain:p,yRange:v=[_-s,o],zDomain:f,zPadding:y=.05,yFormat:x,yLabel:g,colors:b=et.K2I}={}){const w=et.UID(t,e),C=et.UID(t,a),Z=et.UID(t,r);void 0===c&&(c=w),void 0===p&&(p=[0,et.Fp7(C)]),void 0===f&&(f=Z),c=new et.H0G(c),f=new et.H0G(f);const S=et.w6H(w.length).filter((t=>c.has(w[t])&&f.has(Z[t]))),I=et.tiA(c,h).paddingInner(m),O=et.tiA(f,[0,I.bandwidth()]).padding(y),V=d(p,v),k=et.PKp(f,b),j=et.LLu(I).tickSizeOuter(0),D=et.y4O(V).ticks(_/60,x);if(void 0===n){const t=V.tickFormat(100,x);n=e=>`${w[e]}\n${Z[e]}\n${t(C[e])}`}else{const e=et.UID(t,(t=>t)),a=n;n=r=>a(e[r],r,t)}const T=et.Ue8("svg").attr("width",l).attr("height",_).attr("viewBox",[0,0,l,_]).attr("style","max-width: 100%; height: auto; height: intrinsic;");T.append("g").attr("transform",`translate(${u},0)`).call(D).call((t=>t.select(".domain").remove())).call((t=>t.selectAll(".tick line").clone().attr("x2",l-u-i).attr("stroke-opacity",.1))).call((t=>t.append("text").attr("x",-u).attr("y",10).attr("fill","currentColor").attr("text-anchor","start").text(g)));const H=T.append("g").selectAll("rect").data(S).join("rect").attr("x",(t=>I(w[t])+O(Z[t]))).attr("y",(t=>V(C[t]))).attr("width",O.bandwidth()).attr("height",(t=>V(0)-V(C[t]))).attr("fill",(t=>k(Z[t])));return n&&H.append("title").text(n),T.append("g").attr("transform",`translate(0,${_-s})`).call(j),Object.assign(T.node(),{scales:{color:k}})}},async mounted(){await this.fetchCrimeData(),this.chart=this.groupedBarChart(this.crimeyear,{x:t=>t.crime,y:t=>t.value,z:t=>t.year,xDomain:et.IRY(this.crimeyear,(t=>et.Smz(t,(t=>-t.value))),(t=>t.crime)),yLabel:"Cases",zDomain:this.years,colors:et.lqd[this.years.length],width:1400,height:550}).outerHTML}},rt=at,nt=a(2102),ot=a(6784),it=(0,h.Z)(rt,X,tt,!1,null,null,null),st=it.exports;d()(it,{VCol:nt.Z,VContainer:N.Z,VRow:$.Z,VSelect:ot.Z});var ut=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{attrs:{"fill-height":"",fluid:""}},[a("v-row",{attrs:{align:"center",justify:"center"}},[a("div",{staticClass:"text-center"},[a("h1",[t._v("404 Page Not Found")])])])],1)},lt=[],_t={},ct=(0,h.Z)(_t,ut,lt,!1,null,null,null),ht=ct.exports;d()(ct,{VContainer:N.Z,VRow:$.Z}),r.Z.use(L.Z);var mt=new L.Z({mode:"hash",base:"/CSC3007-assignment2/",routes:[{path:"/",name:"home",components:{default:E}},{path:"/a1",name:"a1",components:{default:J}},{path:"/a2",name:"a2",components:{default:st}},{path:"*",components:{default:ht}}]});r.Z.config.productionTip=!1,r.Z.use(q),new r.Z({router:mt,vuetify:o,render:t=>t(H)}).$mount("#app")}},e={};function a(r){var n=e[r];if(void 0!==n)return n.exports;var o=e[r]={exports:{}};return t[r](o,o.exports,a),o.exports}a.m=t,function(){var t=[];a.O=function(e,r,n,o){if(!r){var i=1/0;for(_=0;_<t.length;_++){r=t[_][0],n=t[_][1],o=t[_][2];for(var s=!0,u=0;u<r.length;u++)(!1&o||i>=o)&&Object.keys(a.O).every((function(t){return a.O[t](r[u])}))?r.splice(u--,1):(s=!1,o<i&&(i=o));if(s){t.splice(_--,1);var l=n();void 0!==l&&(e=l)}}return e}o=o||0;for(var _=t.length;_>0&&t[_-1][2]>o;_--)t[_]=t[_-1];t[_]=[r,n,o]}}(),function(){a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,{a:e}),e}}(),function(){a.d=function(t,e){for(var r in e)a.o(e,r)&&!a.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){var t={143:0};a.O.j=function(e){return 0===t[e]};var e=function(e,r){var n,o,i=r[0],s=r[1],u=r[2],l=0;if(i.some((function(e){return 0!==t[e]}))){for(n in s)a.o(s,n)&&(a.m[n]=s[n]);if(u)var _=u(a)}for(e&&e(r);l<i.length;l++)o=i[l],a.o(t,o)&&t[o]&&t[o][0](),t[o]=0;return a.O(_)},r=self["webpackChunkcsc3007_assignment2_crime_rate"]=self["webpackChunkcsc3007_assignment2_crime_rate"]||[];r.forEach(e.bind(null,0)),r.push=e.bind(null,r.push.bind(r))}();var r=a.O(void 0,[998],(function(){return a(2565)}));r=a.O(r)})();
//# sourceMappingURL=app.bfd26445.js.map