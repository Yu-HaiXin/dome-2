(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-home-home_grid-home_grid"],{"1b2e":function(n,e,t){"use strict";var i;t.d(e,"b",(function(){return a})),t.d(e,"c",(function(){return r})),t.d(e,"a",(function(){return i}));var a=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("v-uni-view",{},[t("v-uni-swiper",{staticClass:"card-swiper square-dot",attrs:{"indicator-dots":!0,circular:"true",autoplay:!0,interval:"5000",duration:"500","indicator-color":"#8799a3","indicator-active-color":"#0081ff"},on:{change:function(e){arguments[0]=e=n.$handleEvent(e),n.cardSwiper.apply(void 0,arguments)}}},n._l(n.swiperList,(function(e,i){return t("v-uni-swiper-item",{key:i,class:n.cardCur==i?"cur":"",on:{click:function(e){arguments[0]=e=n.$handleEvent(e),n.toDescPage.apply(void 0,arguments)}}},[t("v-uni-view",{staticClass:"swiper-item"},["image"==e.type?t("v-uni-image",{attrs:{src:e.url,mode:"aspectFill"}}):n._e(),"video"==e.type?t("v-uni-video",{attrs:{src:e.url,autoplay:!0,loop:!0,muted:!0,"show-play-btn":"false",controls:"false",objectFit:"cover"}}):n._e()],1)],1)})),1)],1)},r=[]},"2d04":function(n,e,t){"use strict";t.r(e);var i=t("7b18"),a=t.n(i);for(var r in i)"default"!==r&&function(n){t.d(e,n,(function(){return i[n]}))}(r);e["default"]=a.a},"3a29":function(n,e,t){"use strict";t.r(e);var i=t("ab94"),a=t.n(i);for(var r in i)"default"!==r&&function(n){t.d(e,n,(function(){return i[n]}))}(r);e["default"]=a.a},"3e83":function(n,e,t){"use strict";t.r(e);var i=t("1b2e"),a=t("2d04");for(var r in a)"default"!==r&&function(n){t.d(e,n,(function(){return a[n]}))}(r);t("a5d2");var c,o=t("f0c5"),s=Object(o["a"])(a["default"],i["b"],i["c"],!1,null,"11780692",null,!1,i["a"],c);e["default"]=s.exports},5174:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={data:function(){return{tablist:this.dataList}},props:{TabCur:{type:String,default:"0"},dataList:{}},created:function(){},methods:{tabSelect:function(n){this.$emit("click",n)}}};e.default=i},"5aa4":function(n,e,t){var i=t("696b");"string"===typeof i&&(i=[[n.i,i,""]]),i.locals&&(n.exports=i.locals);var a=t("4f06").default;a("68a9fea3",i,!0,{sourceMap:!1,shadowMode:!1})},"696b":function(n,e,t){var i=t("24fb");e=i(!1),e.push([n.i,"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n/* 内容 */.container[data-v-3812e7ec]{margin-left:%?29?%;margin-right:%?20?%;float:left;height:%?530?%;width:43%;background:#fff;margin-bottom:%?20?%}.container_img uni-image[data-v-3812e7ec]{height:%?300?%;width:100%}.container_text[data-v-3812e7ec]{color:#000;padding:%?10?%;font-size:%?23?%}.container_price[data-v-3812e7ec]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;padding-left:%?8?%;padding-right:%?8?%}.container_price_text_0[data-v-3812e7ec]{color:red;font-family:Franklin Gothic Medium,Arial Narrow,Arial,sans-serif}.container_price_text_1[data-v-3812e7ec]{font-size:%?22?%}.container_line[data-v-3812e7ec]{width:100%;background:#dcdcdc;height:%?1?%;margin-top:%?10?%}.container_user[data-v-3812e7ec]{margin-top:%?20?%;display:-webkit-box;display:-webkit-flex;display:flex;line-height:%?50?%}.container_user uni-image[data-v-3812e7ec]{margin-left:%?10?%;margin-right:%?50?%;height:%?50?%;width:%?50?%}\n/* end */\n/* 吸附置顶 */.navTab[data-v-3812e7ec]{position:fixed;z-index:9999;top:0}\n/* end */",""]),n.exports=e},"7b18":function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={data:function(){return{cardCur:0,swiperList:this.swiperlist}},created:function(){},props:{swiperlist:{}},methods:{cardSwiper:function(n){this.cardCur=n.detail.current},toDescPage:function(n){this.$emit("click",n)}}};e.default=i},a030:function(n,e,t){"use strict";t.r(e);var i=t("5174"),a=t.n(i);for(var r in i)"default"!==r&&function(n){t.d(e,n,(function(){return i[n]}))}(r);e["default"]=a.a},a5d2:function(n,e,t){"use strict";var i=t("c92e"),a=t.n(i);a.a},ab94:function(n,e,t){"use strict";(function(n){var i=t("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=i(t("3e83")),r=i(t("f905")),c={data:function(){return{TabCur:"0",swiperList:[{id:0,type:"image",url:"https://ossweb-img.qq.com/images/lol/web201310/skin/big84000.jpg"},{id:1,type:"image",url:"https://ossweb-img.qq.com/images/lol/web201310/skin/big84001.jpg"},{id:2,type:"image",url:"https://ossweb-img.qq.com/images/lol/web201310/skin/big39000.jpg"},{id:3,type:"image",url:"https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg"},{id:4,type:"image",url:"https://ossweb-img.qq.com/images/lol/web201310/skin/big25011.jpg"},{id:5,type:"image",url:"https://ossweb-img.qq.com/images/lol/web201310/skin/big21016.jpg"},{id:6,type:"image",url:"https://ossweb-img.qq.com/images/lol/web201310/skin/big99008.jpg"}],iconList:[{icon:"cardboardfill",color:"red",badge:120,name:"手机"},{icon:"recordfill",color:"orange",badge:1,name:"图书"},{icon:"picfill",color:"yellow",badge:0,name:"游戏交易"},{icon:"noticefill",color:"olive",badge:22,name:"服装鞋帽"},{icon:"upstagefill",color:"cyan",badge:0,name:"数码"},{icon:"clothesfill",color:"blue",badge:0,name:"二手车"},{icon:"discoverfill",color:"purple",badge:0,name:"电脑"},{icon:"questionfill",color:"mauve",badge:0,name:"毕业季"},{icon:"commandfill",color:"purple",badge:0,name:"寝室用品"},{icon:"brandfill",color:"美妆捡漏",badge:0,name:"全部分类"}],gridCol:5,tablist:[{id:1,name:"导航条888"},{id:2,name:"导航条2"},{id:3,name:"导航条3"},{id:4,name:"导航条4"},{id:5,name:"导航条5"},{id:6,name:"导航条6"}]}},methods:{toDescPage:function(e){n("log",e," at pages/home/home_grid/home_grid.vue:174")},tabSelect:function(n){this.TabCur=n.currentTarget.dataset.id}},components:{foldSwiper:a.default,TopBar:r.default},onLoad:function(){},onShow:function(){}};e.default=c}).call(this,t("0de9")["log"])},b23c:function(n,e,t){"use strict";t.r(e);var i=t("c460"),a=t("3a29");for(var r in a)"default"!==r&&function(n){t.d(e,n,(function(){return a[n]}))}(r);t("d257");var c,o=t("f0c5"),s=Object(o["a"])(a["default"],i["b"],i["c"],!1,null,"3812e7ec",null,!1,i["a"],c);e["default"]=s.exports},c460:function(n,e,t){"use strict";var i;t.d(e,"b",(function(){return a})),t.d(e,"c",(function(){return r})),t.d(e,"a",(function(){return i}));var a=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("v-uni-view",{},[t("v-uni-view",{staticClass:"cu-bar search bg-white"},[t("v-uni-view",{staticClass:"search-form round"},[t("v-uni-text",{staticClass:"cuIcon-search"}),t("v-uni-input",{attrs:{type:"text",placeholder:"搜索图片、文章、视频","confirm-type":"search"}})],1),t("v-uni-view",{staticClass:"action"},[t("v-uni-button",{staticClass:"cu-btn bg-green shadow-blur round"},[n._v("搜索")])],1)],1),t("fold-swiper",{attrs:{swiperlist:n.swiperList},on:{click:function(e){arguments[0]=e=n.$handleEvent(e),n.toDescPage.apply(void 0,arguments)}}}),t("v-uni-view",{staticClass:"cu-list no-border grid  card-menu margin-bottom",class:["col-"+n.gridCol]},n._l(n.iconList,(function(e,i){return i<2*n.gridCol?t("v-uni-view",{key:i,staticClass:"cu-item"},[t("v-uni-navigator",{attrs:{url:"全部分类"==e.name?"/pages/classify/classify_index/classify_index":"/pages/home/home_grid/home_grid","data-value":e.name,"hover-class":"none"}},[t("v-uni-view",{class:["cuIcon-"+e.icon,"text-"+e.color]},[0!=e.badge?t("v-uni-view",{staticClass:"cu-tag badge"},[1!=e.badge?[n._v(n._s(e.badge>99?"99+":e.badge))]:n._e()],2):n._e()],1),t("v-uni-text",[n._v(n._s(e.name))])],1)],1):n._e()})),1),t("TopBar",{attrs:{TabCur:n.TabCur,dataList:n.tablist},on:{click:function(e){arguments[0]=e=n.$handleEvent(e),n.tabSelect.apply(void 0,arguments)}}}),n._l(10,(function(e,i){return t("v-uni-view",{key:i,staticClass:"card-menu container margin-top"},[t("v-uni-navigator",{attrs:{url:"/pages/home/home_detail/home_detail","hover-class":"none"}},[t("v-uni-view",{staticClass:"container_img"},[t("v-uni-image",{attrs:{src:"http://pic25.nipic.com/20121205/10197997_003647426000_2.jpg"}})],1),t("v-uni-view",{staticClass:"container_text"},[t("v-uni-text",{},[n._v("Huawei/华为Mate 20 Pro运气真好双卡双待全网通")])],1),t("v-uni-view",{staticClass:"container_price"},[t("v-uni-text",{staticClass:"container_price_text_0"},[n._v("￥980")]),t("v-uni-view",{staticClass:"cu-tag line-orange"},[n._v("全新")])],1),t("v-uni-view",{staticClass:"container_line"}),t("v-uni-view",{staticClass:"container_user"},[t("v-uni-image",{attrs:{src:"http://pic25.nipic.com/20121205/10197997_003647426000_2.jpg"}}),t("v-uni-text",[n._v("Amibition")])],1)],1)],1)}))],2)},r=[]},c92e:function(n,e,t){var i=t("e951");"string"===typeof i&&(i=[[n.i,i,""]]),i.locals&&(n.exports=i.locals);var a=t("4f06").default;a("620e5208",i,!0,{sourceMap:!1,shadowMode:!1})},d257:function(n,e,t){"use strict";var i=t("5aa4"),a=t.n(i);a.a},e951:function(n,e,t){var i=t("24fb");e=i(!1),e.push([n.i,"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n/* 轮播图 */.magrith-0[data-v-11780692]{margin-top:%?0?%;padding-top:%?0?%}.card-swiper uni-swiper-item[data-v-11780692]{padding:%?25?% %?0?% %?50?%}\n/* end */",""]),n.exports=e},f905:function(n,e,t){"use strict";t.r(e);var i=t("fc5d"),a=t("a030");for(var r in a)"default"!==r&&function(n){t.d(e,n,(function(){return a[n]}))}(r);var c,o=t("f0c5"),s=Object(o["a"])(a["default"],i["b"],i["c"],!1,null,"83c12d04",null,!1,i["a"],c);e["default"]=s.exports},fc5d:function(n,e,t){"use strict";var i;t.d(e,"b",(function(){return a})),t.d(e,"c",(function(){return r})),t.d(e,"a",(function(){return i}));var a=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("v-uni-scroll-view",{staticClass:"bg-white nav ",attrs:{"scroll-x":!0,id:"navTab"}},[t("v-uni-view",{staticClass:"flex text-center"},n._l(n.tablist,(function(e,i){return t("v-uni-view",{key:i,staticClass:"cu-item flex-sub",class:i==n.TabCur?"text-orange cur":"",attrs:{"data-id":i},on:{click:function(e){arguments[0]=e=n.$handleEvent(e),n.tabSelect.apply(void 0,arguments)}}},[n._v(n._s(e.name))])})),1)],1)},r=[]}}]);