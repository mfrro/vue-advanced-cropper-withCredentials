(window.webpackJsonp=window.webpackJsonp||[]).push([[8,52,69,70],{371:function(t,e,i){},372:function(t,e,i){t.exports=i.p+"assets/img/link.03ea4d17.svg"},373:function(t,e,i){"use strict";i(371)},374:function(t,e,i){"use strict";i.r(e);var s={props:{href:{type:String,default:""},noBorder:{type:Boolean,default:!1}}},r=(i(373),i(66)),n=Object(r.a)(s,(function(){var t=this._self._c;return t("div",{staticClass:"example-wrapper",class:{"example-wrapper--no-border":this.noBorder}},[this._t("default"),this._v(" "),this.href?t("a",{staticClass:"example-wrapper__icon",attrs:{href:this.href,title:"Full Source",target:"_blank",rel:"nofollow noopener"}},[t("img",{attrs:{src:i(372)}})]):this._e()],2)}),[],!1,null,null,null);e.default=n.exports},378:function(t,e,i){},379:function(t,e,i){},384:function(t,e,i){"use strict";i(378)},385:function(t,e,i){"use strict";i(379)},388:function(t,e,i){"use strict";i.r(e);i(384);var s=i(66),r=Object(s.a)({},(function(){return(0,this._self._c)("div",{staticClass:"vertical-buttons"},[this._t("default")],2)}),[],!1,null,null,null);e.default=r.exports},389:function(t,e,i){"use strict";i.r(e);i(385);var s=i(66),r=Object(s.a)({},(function(){var t=this;return(0,t._self._c)("div",t._b({staticClass:"square-button",on:{click:function(e){return t.$emit("click",e)}}},"div",t.$attrs,!1),[t._t("default")],2)}),[],!1,null,null,null);e.default=r.exports},474:function(t,e,i){t.exports=i.p+"assets/img/resize.2119d7c7.svg"},475:function(t,e,i){t.exports=i.p+"assets/img/resize-vertical.a5d7f31b.svg"},476:function(t,e,i){t.exports=i.p+"assets/img/resize-horizontal.cf311257.svg"},477:function(t,e,i){t.exports=i.p+"assets/img/resize-reduce.e31b106a.svg"},478:function(t,e,i){t.exports=i.p+"assets/img/resize-maximize.8f96434a.svg"},479:function(t,e,i){t.exports=i.p+"assets/img/center.2e7304ce.svg"},480:function(t,e,i){t.exports=i.p+"assets/img/photo-1532182657011-d3d31357b5d8.2b00b6fe.jpg"},567:function(t,e,i){},727:function(t,e,i){"use strict";i(567)},788:function(t,e,i){"use strict";i.r(e);var s=i(375),r=i(374),n=i(388),o=i(389),a={components:{ExampleWrapper:r.default,Cropper:s.c,VerticalButtons:n.default,SquareButton:o.default},data:function(){return{image:i(480),size:{width:null,height:null}}},methods:{updateSize:function(t){var e=t.coordinates;this.size.width=Math.round(e.width),this.size.height=Math.round(e.height)},resize:function(){var t,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;this.$refs.cropper.setCoordinates([function(s){var r=s.coordinates;s.imageSize;return t=r,{width:r.width*e,height:r.height*i}},function(e){var i=e.coordinates;e.imageSize;return{left:t.left+(t.width-i.width)/2,top:t.top+(t.height-i.height)/2}}])},center:function(){this.$refs.cropper.setCoordinates((function(t){var e=t.coordinates,i=t.imageSize;return{left:i.width/2-e.width/2,top:i.height/2-e.height/2}}))},maximize:function(){var t=this.$refs.cropper,e=t.coordinates.left+t.coordinates.width/2,i=t.coordinates.top+t.coordinates.height/2;t.setCoordinates([function(t){t.coordinates;var e=t.imageSize;return{width:e.width,height:e.height}},function(t){var s=t.coordinates;t.imageSize;return{left:e-s.width/2,top:i-s.height/2}}])}}},c=(i(727),i(66)),u=Object(c.a)(a,(function(){var t=this,e=t._self._c;return e("example-wrapper",{staticClass:"set-coordinates-example",attrs:{href:"https://github.com/advanced-cropper/vue-advanced-cropper/blob/master/example/docs/.vuepress/components/set-coordinates-example.vue"}},[e("cropper",{ref:"cropper",staticClass:"coodinates-cropper",attrs:{src:t.image,"stencil-props":{minAspectRatio:.5},transitions:!0},on:{change:t.updateSize}}),t._v(" "),e("vertical-buttons",[e("square-button",{attrs:{title:"Resize (x2)"},on:{click:function(e){return t.resize(2,2)}}},[e("img",{attrs:{src:i(474)}})]),t._v(" "),e("square-button",{attrs:{title:"Resize height (x2)"},on:{click:function(e){return t.resize(1,2)}}},[e("img",{attrs:{src:i(475)}})]),t._v(" "),e("square-button",{attrs:{title:"Resize width (x2)"},on:{click:function(e){return t.resize(2,1)}}},[e("img",{attrs:{src:i(476)}})]),t._v(" "),e("square-button",{attrs:{title:"Resize (x1/2)"},on:{click:function(e){return t.resize(.5,.5)}}},[e("img",{attrs:{src:i(477)}})]),t._v(" "),e("square-button",{attrs:{title:"Maximize"},on:{click:function(e){return t.maximize()}}},[e("img",{attrs:{src:i(478)}})]),t._v(" "),e("square-button",{attrs:{title:"Center"},on:{click:function(e){return t.center()}}},[e("img",{attrs:{src:i(479)}})])],1),t._v(" "),t.size.width&&t.size.height?e("div",{staticClass:"size-info"},[e("div",[t._v("Width: "+t._s(t.size.width)+"px")]),t._v(" "),e("div",[t._v("Height: "+t._s(t.size.height)+"px")])]):t._e()],1)}),[],!1,null,null,null);e.default=u.exports}}]);