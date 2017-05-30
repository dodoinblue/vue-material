/*!
* Vue Material v0.7.1
* Made with love by Marcos Moura
* Released under the MIT License.
*/   
!(function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.VueMaterial=t():e.VueMaterial=t()})(this,(function(){return (function(e){function t(o){if(c[o])return c[o].exports;var r=c[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,t),r.l=!0,r.exports}var c={};return t.m=e,t.c=c,t.i=function(e){return e},t.d=function(e,c,o){t.o(e,c)||Object.defineProperty(e,c,{configurable:!1,enumerable:!0,get:o})},t.n=function(e){var c=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(c,"a",c),c},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="/",t(t.s=443)})({0:function(e,t){e.exports=function(e,t,c,o){var r,n=e=e||{},d=typeof e.default;"object"!==d&&"function"!==d||(r=e,n=e.default);var i="function"==typeof n?n.options:n;if(t&&(i.render=t.render,i.staticRenderFns=t.staticRenderFns),c&&(i._scopeId=c),o){var a=Object.create(i.computed||null);Object.keys(o).forEach((function(e){var t=o[e];a[e]=function(){return t}})),i.computed=a}return{esModule:r,exports:n,options:i}}},1:function(e,t,c){"use strict";function o(e){if(!e)return null;var t=e.mdTheme;return t||"md-theme"!==e.$options._componentTag||(t=e.mdName),t||o(e.$parent)}Object.defineProperty(t,"__esModule",{value:!0}),t.default={props:{mdTheme:String},computed:{mdEffectiveTheme:function(){return o(this)||this.$material.currentTheme},themeClass:function(){return this.$material.prefix+this.mdEffectiveTheme}},watch:{mdTheme:function(e){this.$material.useTheme(e)}},beforeMount:function(){var e=this.mdTheme;this.$material.useTheme(e||"default")}},e.exports=t.default},137:function(e,t,c){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=c(1),r=(function(e){return e&&e.__esModule?e:{default:e}})(o);t.default={name:"md-checkbox",props:{name:String,value:[String,Boolean],id:String,disabled:Boolean},mixins:[r.default],data:function(){return{checked:this.value}},computed:{classes:function(){return{"md-checked":this.checked,"md-disabled":this.disabled}}},watch:{value:function(){this.checked=!!this.value}},methods:{toggleCheck:function(e){this.disabled||(this.checked=!this.checked,this.$emit("change",this.checked,e),this.$emit("input",this.checked,e))}}},e.exports=t.default},251:function(e,t){},264:function(e,t){e.exports=".THEME_NAME.md-checkbox.md-checked .md-checkbox-container{background-color:ACCENT-COLOR;border-color:ACCENT-COLOR}.THEME_NAME.md-checkbox.md-checked .md-checkbox-container:after{border-color:ACCENT-CONTRAST}.THEME_NAME.md-checkbox .md-ink-ripple{color:ACCENT-COLOR}.THEME_NAME.md-checkbox .md-ripple{opacity:.26}.THEME_NAME.md-checkbox.md-primary.md-checked .md-checkbox-container{background-color:PRIMARY-COLOR;border-color:PRIMARY-COLOR}.THEME_NAME.md-checkbox.md-primary.md-checked .md-checkbox-container:after{border-color:PRIMARY-CONTRAST}.THEME_NAME.md-checkbox.md-primary .md-ink-ripple{color:PRIMARY-COLOR}.THEME_NAME.md-checkbox.md-warn.md-checked .md-checkbox-container{background-color:WARN-COLOR;border-color:WARN-COLOR}.THEME_NAME.md-checkbox.md-warn.md-checked .md-checkbox-container:after{border-color:WARN-CONTRAST}.THEME_NAME.md-checkbox.md-warn .md-ink-ripple{color:WARN-COLOR}.THEME_NAME.md-checkbox.md-disabled.md-checked .md-checkbox-container{background-color:rgba(0,0,0,0.26);border-color:transparent}.THEME_NAME.md-checkbox.md-disabled:not(.md-checked) .md-checkbox-container{border-color:rgba(0,0,0,0.26)}\n"},304:function(e,t,c){c(251);var o=c(0)(c(137),c(426),null,null);e.exports=o.exports},426:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,c=e._self._c||t;return c("div",{staticClass:"md-checkbox",class:[e.themeClass,e.classes]},[c("div",{staticClass:"md-checkbox-container",attrs:{tabindex:"0"},on:{click:function(t){t.stopPropagation(),e.toggleCheck(t)}}},[c("input",{attrs:{type:"checkbox",name:e.name,id:e.id,disabled:e.disabled,tabindex:"-1"},domProps:{value:e.value,checked:e.checked}}),e._v(" "),c("md-ink-ripple",{attrs:{"md-disabled":e.disabled}})],1),e._v(" "),e.$slots.default?c("label",{staticClass:"md-checkbox-label",attrs:{for:e.id||e.name},on:{click:e.toggleCheck}},[e._t("default")],2):e._e()])},staticRenderFns:[]}},443:function(e,t,c){e.exports=c(82)},82:function(e,t,c){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e){e.component("md-checkbox",d.default),e.material.styles.push(a.default)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=r;var n=c(304),d=o(n),i=c(264),a=o(i);e.exports=t.default}})}));