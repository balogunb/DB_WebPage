(function(t){function e(e){for(var s,r,o=e[0],l=e[1],d=e[2],f=0,u=[];f<o.length;f++)r=o[f],Object.prototype.hasOwnProperty.call(n,r)&&n[r]&&u.push(n[r][0]),n[r]=0;for(s in l)Object.prototype.hasOwnProperty.call(l,s)&&(t[s]=l[s]);i&&i(e);while(u.length)u.shift()();return c.push.apply(c,d||[]),a()}function a(){for(var t,e=0;e<c.length;e++){for(var a=c[e],s=!0,o=1;o<a.length;o++){var l=a[o];0!==n[l]&&(s=!1)}s&&(c.splice(e--,1),t=r(r.s=a[0]))}return t}var s={},n={app:0},c=[];function r(e){if(s[e])return s[e].exports;var a=s[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=t,r.c=s,r.d=function(t,e,a){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)r.d(a,s,function(e){return t[e]}.bind(null,s));return a},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=e,o=o.slice();for(var d=0;d<o.length;d++)e(o[d]);var i=l;c.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";a("85ec")},"23ed":function(t,e,a){},4678:function(t,e,a){var s={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn-bd":"9686","./bn-bd.js":"9686","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-in":"ec2e","./en-in.js":"ec2e","./en-nz":"6f50","./en-nz.js":"6f50","./en-sg":"b7e9","./en-sg.js":"b7e9","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-mx":"b5b7","./es-mx.js":"b5b7","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fil":"d69a","./fil.js":"d69a","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-deva":"aaf2","./gom-deva.js":"aaf2","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./oc-lnc":"167b","./oc-lnc.js":"167b","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tk":"5aff","./tk.js":"5aff","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-mo":"3a6c","./zh-mo.js":"3a6c","./zh-tw":"90ea","./zh-tw.js":"90ea"};function n(t){var e=c(t);return a(e)}function c(t){if(!a.o(s,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return s[t]}n.keys=function(){return Object.keys(s)},n.resolve=c,t.exports=n,n.id="4678"},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var s=a("2b0e"),n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("h1",[t._v("DreamTeam Lehigh Valley COVID-19 Dashboard")]),a("v-select",{staticClass:"small",attrs:{label:"name",clearable:!1,options:t.counties,reduce:function(t){return t.name}},model:{value:t.selected,callback:function(e){t.selected=e},expression:"selected"}}),a("RandomChart",{attrs:{customdata:t.chart1data,stack:!1,title:t.chart1title}}),a("RandomChart",{attrs:{customdata:t.chart3data,stack:!1,title:t.chart3title}}),a("RandomChart",{attrs:{customdata:t.chart2data,displayAverage:!1,displayFloats:!0,stack:!1,title:t.chart2title}}),a("RandomChart",{attrs:{customdata:t.chart4data,stack:!1,title:t.chart4title}})],1)},c=[],r=(a("99af"),a("cb29"),a("d81d"),a("b0c0"),a("ac1f"),a("466d"),a("b85c")),o=a("ade3"),l=a("2909"),d=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"small"},[a("line-chart",{attrs:{"chart-data":t.datacollection,options:t.opts}})],1)},i=[],f=(a("b680"),a("1fca")),u=f["b"].reactiveProp,b={extends:f["a"],mixins:[u],props:["options"],mounted:function(){this.renderChart(this.chartData,this.options)}},h={components:{LineChart:b},props:["stack","customdata","displayAverage","displayFloats","title"],data:function(){return{datacollection:this.customdata,opts:{tooltips:{mode:"index",intersect:!1,callbacks:{}},hover:{mode:"index",intersect:!1},scales:{yAxes:[{stacked:this.stack}]},title:{display:!0,text:this.title,fontSize:20,fontColor:"black"}}}},methods:{getRandomInt:function(){return Math.floor(46*Math.random())+5}},watch:{customdata:function(t){this.datacollection=t}},created:function(){this.displayAverage&&(this.opts.tooltips.callbacks.footer=function(t){for(var e=0,a=0;a<t.length;a++)e+=parseFloat(t[a].value);return"Lehigh Valley Total: "+e.toFixed(3)+" per 4000 ("+(e/4).toFixed(3)+" per 1000)"}),this.displayFloats&&(this.opts.tooltips.callbacks.label=function(t,e){return e.datasets[t.datasetIndex].label+": "+e.datasets[t.datasetIndex].data[t.index].toFixed(3)+" per 1000"})}},p=h,j=(a("7aea"),a("2877")),m=Object(j["a"])(p,d,i,!1,null,null,null),g=m.exports,y=a("fd9b"),v=a.n(y),k={name:"App",components:{RandomChart:g},title:function(){return"DreamTeam COVID-19 Dashboard"},data:function(){return{selected:{},counties:[],countyPops:{},chart1data:{},chart2data:{},chart3data:{},chart4data:{},chart1title:"Cases and Deaths (Selected County)",chart2title:"Cases (All Counties)",chart3title:"Cases by College (Selected County)",chart4title:"Cases at All Colleges and Total Cases in Lehigh Valley",paletteSize:{},palette:{}}},watch:{selected:function(t){var e=this;this.$http.get("http://139.147.9.191:80/countydata",{params:{county_name:t}}).then((function(a){var s=a.data.map((function(t){return t.date.match(/[^T]*/i)[0]})),n={label:t+" Deaths",data:a.data.map((function(t){return t.new_deaths})),backgroundColor:"#f87979",borderColor:"#f87979",fill:!1},c={label:t+" Cases",data:a.data.map((function(t){return t.new_cases})),backgroundColor:"#f21979",borderColor:"#f21979",fill:!1},r={labels:s,datasets:[c,n]};e.chart1data=r,e.$http.get("http://139.147.9.191:80/countycolleges",{params:{county_name:t}}).then((function(t){var a=t.data.map((function(t){return e.$http.get("http://139.147.9.191:80/collegedata",{params:{college_name:t.name}})}));e.$http.all(a).then((function(t){var a=t.map((function(t,a){var n=new Array(s.length-t.data.length).fill(0).concat(t.data.map((function(t){return t.new_cases})));return{label:t.data[0].college_name,data:n,backgroundColor:e.palette[a],borderColor:e.palette[a],fill:!1}}));a.push(c),e.chart3data={labels:s,datasets:a}}))}))}))}},mounted:function(){var t=this;this.$http.get("http://139.147.9.191:80/colleges").then((function(e){t.paletteSize=e.data.length,console.log(t.paletteSize),t.$http.get("http://139.147.9.191:80/counties").then((function(e){t.counties=e.data,t.countyPops=Object.assign.apply(Object,[{}].concat(Object(l["a"])(e.data.map((function(t){return Object(o["a"])({},t.name,t.population)}))))),t.selected=e.data[0].name,t.paletteSize+=e.data.length,console.log(t.paletteSize),t.palette=v()({seed:1234,count:t.paletteSize});var a=e.data.map((function(e){return t.$http.get("http://139.147.9.191:80/countydata",{params:{county_name:e.name}})}));t.$http.all(a).then((function(e){var a=e[0].data.map((function(t){return t.date.match(/[^T]*/i)[0]})),s=e.map((function(e,a){return{label:e.data[0].county_name,data:e.data.map((function(e){return 1e3*e.new_cases/t.countyPops[e.county_name]})),backgroundColor:t.palette[a],borderColor:t.palette[a],fill:!1}})),n=[],c=[],o=0,l=0;for(var d in t.countyPops)l+=t.countyPops[d];for(var i=0;i<e[0].data.length;i++){o=0;var f,u=Object(r["a"])(e);try{for(u.s();!(f=u.n()).done;){var b=f.value;o+=b.data[i].new_cases}}catch(j){u.e(j)}finally{u.f()}n.push(o),c.push(o/l*1e3)}var h={label:"Lehigh Valley Cases",data:n,backgroundColor:"#f27997",borderColor:"#f27997",fill:!1},p={label:"Lehigh Valley Incidence",data:c,backgroundColor:"#3D2B56",borderColor:"#3D2B56",fill:!1};s.push(p),t.chart2data={labels:a,datasets:s},t.$http.get("http://139.147.9.191:80/colleges").then((function(e){var s=e.data.map((function(e){return t.$http.get("http://139.147.9.191:80/collegedata",{params:{college_name:e.name}})}));t.$http.all(s).then((function(e){var s=e.map((function(e,s){var n=new Array(a.length-e.data.length).fill(0).concat(e.data.map((function(t){return t.new_cases})));return{label:e.data[0].college_name,data:n,backgroundColor:t.palette[s],borderColor:t.palette[s],fill:!1}}));s.push(h),t.chart4data={labels:a,datasets:s}}))}))}))}))}))}},C=k,z=(a("034f"),Object(j["a"])(C,n,c,!1,null,null,null)),w=z.exports,_=a("bc3a"),x=a.n(_),O=a("4a7a"),$=a.n(O);a("6dfc");s["a"].config.productionTip=!1,s["a"].component("v-select",$.a),s["a"].prototype.$http=x.a,new s["a"]({render:function(t){return t(w)}}).$mount("#app")},"7aea":function(t,e,a){"use strict";a("23ed")},"85ec":function(t,e,a){}});
//# sourceMappingURL=app.ca727386.js.map