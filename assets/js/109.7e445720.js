(window.webpackJsonp=window.webpackJsonp||[]).push([[109],{826:function(t,e,a){"use strict";a.r(e);var s=a(66),n=Object(s.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"migration-to-1-0"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#migration-to-1-0"}},[t._v("#")]),t._v(" Migration to 1.0")]),t._v(" "),e("p",[t._v("On one hand I wish to minimize breaking-changes in this release, on the other hand,\ndue to beta-testing, I realize that many aspects of the library should be updated. The library has grown\nmuch larger and more difficult to maintain, as a result breaking-changes are inevitable.")]),t._v(" "),e("p",[t._v("The goal of this guide is to facilitate the migration of the library to the newer versions.")]),t._v(" "),e("h2",{attrs:{id:"installation"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#installation"}},[t._v("#")]),t._v(" Installation")]),t._v(" "),e("h3",{attrs:{id:"styles"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#styles"}},[t._v("#")]),t._v(" Styles")]),t._v(" "),e("p",[t._v("Styles are no longer automatically injected. You should import the styles directly.")]),t._v(" "),e("h3",{attrs:{id:"using-bundler"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#using-bundler"}},[t._v("#")]),t._v(" Using Bundler")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" Cropper "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'vue-advanced-cropper'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Add the following line to import the cropper styles")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'vue-advanced-cropper/dist/style.css'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),e("h3",{attrs:{id:"using-cdn"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#using-cdn"}},[t._v("#")]),t._v(" Using CDN")]),t._v(" "),e("div",{staticClass:"language-html extra-class"},[e("pre",{pre:!0,attrs:{class:"language-html"}},[e("code",[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("src")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("https://unpkg.com/vue-advanced-cropper@^1.0.0/dist/index.umd.js"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- Add the following line to import the cropper styles --\x3e")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("link")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("rel")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("stylesheet"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("href")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("https://unpkg.com/vue-advanced-cropper@^1.0.0/dist/style.css"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n")])])]),e("h2",{attrs:{id:"changed-the-markup-of-cropper"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#changed-the-markup-of-cropper"}},[t._v("#")]),t._v(" Changed the markup of cropper")]),t._v(" "),e("ol",[e("li",[e("p",[t._v("Background is limited by the cropper boundary now. If you set the "),e("code",[t._v("background-color")]),t._v(" in the "),e("code",[t._v("background-class")]),t._v(" it won't fill the entire cropper, it will fill only the area that fits in the cropper boundary. The entire cropper could be wider or taller than its boundary. To set the background for the entire cropper set the "),e("code",[t._v("background-color")]),t._v(" in the "),e("code",[t._v("class")]),t._v(" attribute now.")])]),t._v(" "),e("li",[e("p",[t._v("The foreground layer has been added. to customize it use "),e("code",[t._v("foreground-class")]),t._v(". It layers over the background and the image to darken it and sits below the stencil.")])])]),t._v(" "),e("h2",{attrs:{id:"changed-the-defaults"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#changed-the-defaults"}},[t._v("#")]),t._v(" Changed the defaults")]),t._v(" "),e("ol",[e("li",[e("p",[t._v("The default setting for "),e("code",[t._v("default-boundaries")]),t._v(" is "),e("code",[t._v("'fill'")]),t._v(" now (previously "),e("code",[t._v("'fit'")]),t._v("). It seems to be a more appropriate setting for the\nmajority of the available croppers.")])]),t._v(" "),e("li",[e("p",[t._v("The default setting for "),e("code",[t._v("image-restriction")]),t._v(" is "),e("code",[t._v("fit-area")]),t._v(" now (previously "),e("code",[t._v("'fill-area'")]),t._v(")")])]),t._v(" "),e("li",[e("p",[t._v("The default setting for "),e("code",[t._v("size-restrictions-algorithm")]),t._v(" has been changed: "),e("code",[t._v("minWidth")]),t._v(", "),e("code",[t._v("minHeight")]),t._v(", "),e("code",[t._v("maxWidth")]),t._v(" and "),e("code",[t._v("maxHeight")]),t._v(" set\nthe limitations in pixels now (previously limitations were set in percentages).")])]),t._v(" "),e("li",[e("p",[t._v("The default setting of "),e("code",[t._v("resizeImage")]),t._v(" has been changed. Now "),e("code",[t._v("adjustStencil")]),t._v(" is enabled by default.")])])]),t._v(" "),e("h2",{attrs:{id:"changed-props"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#changed-props"}},[t._v("#")]),t._v(" Changed props")]),t._v(" "),e("ol",[e("li",[e("p",[t._v("Replaced "),e("code",[t._v("wheelResize")]),t._v(", "),e("code",[t._v("touchResize")]),t._v(", "),e("code",[t._v("touchMove")]),t._v(", "),e("code",[t._v("mouseMove")]),t._v(" props with "),e("RouterLink",{attrs:{to:"/components/cropper.html#resizeimage"}},[e("code",[t._v("resizeImage")])]),t._v(" and "),e("RouterLink",{attrs:{to:"/components/cropper.html#moveImage"}},[e("code",[t._v("moveImage")])]),t._v(" props.")],1)]),t._v(" "),e("li",[e("p",[t._v("Renamed "),e("code",[t._v("classname")]),t._v(", "),e("code",[t._v("areaClassname")]),t._v(", "),e("code",[t._v("backgroundClassname")]),t._v(", "),e("code",[t._v("imageClassname")]),t._v(", "),e("code",[t._v("linesClassnames")]),t._v(" and "),e("code",[t._v("classnames")]),t._v(" to "),e("code",[t._v("class")]),t._v(", "),e("code",[t._v("boundariesClass")]),t._v(", "),e("code",[t._v("backgroundClass")]),t._v(", "),e("code",[t._v("imageClass")]),t._v(", "),e("code",[t._v("linesClasses")]),t._v(" and "),e("code",[t._v("classes")]),t._v(" respectively.")])]),t._v(" "),e("li",[e("p",[t._v("Renamed "),e("code",[t._v("lineComponent")]),t._v(", "),e("code",[t._v("handlerComponent")]),t._v(" to "),e("code",[t._v("linesComponent")]),t._v(", "),e("code",[t._v("handlersComponent")])])]),t._v(" "),e("li",[e("p",[t._v("Renamed "),e("code",[t._v("restrictions")]),t._v(" to "),e("code",[t._v("size-restrictions-algorithm")])])]),t._v(" "),e("li",[e("p",[t._v("The priority prop now accepts "),e("code",[t._v("'visible-area'")]),t._v(" instead of "),e("code",[t._v("'visibleArea'")]),t._v(".")])]),t._v(" "),e("li",[e("p",[t._v("The "),e("code",[t._v("RectangleStencil")]),t._v(", "),e("code",[t._v("CircleStencil")]),t._v(" and "),e("code",[t._v("BoundingBox")]),t._v(" prop "),e("code",[t._v("scalable")]),t._v(" were renamed to "),e("code",[t._v("resizable")]),t._v(".")])])]),t._v(" "),e("h2",{attrs:{id:"changed-methods"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#changed-methods"}},[t._v("#")]),t._v(" Changed methods")]),t._v(" "),e("ol",[e("li",[t._v("The callback in "),e("code",[t._v("setCoordinates")]),t._v(" method now should accept only one argument: an object with properties "),e("code",[t._v("coordinates")]),t._v(", "),e("code",[t._v("imageSize")]),t._v(" and "),e("code",[t._v("visibleArea")]),t._v(".")])]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("$refs"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("cropper"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("setCoordinates")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token parameter"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" coordinates"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" imageSize"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" visibleArea"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t"),e("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("width")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" visibleArea"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("width"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\t"),e("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("height")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" visibleArea"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("height\n\t"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])])}),[],!1,null,null,null);e.default=n.exports}}]);