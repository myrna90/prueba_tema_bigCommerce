"use strict";(self.webpackChunklonestar_vault=self.webpackChunklonestar_vault||[]).push([[488],{97488:(t,e,n)=>{n.r(e),n.d(e,{default:()=>u});var o=n(91238),r=n(33977),a=n(71305),c=n(33270);function i(t,e){return i=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},i(t,e)}var u=function(t){var e,n;function o(){return t.apply(this,arguments)||this}return n=t,(e=o).prototype=Object.create(n.prototype),e.prototype.constructor=e,i(e,n),o.prototype.onReady=function(){var t=this;(0,a.A)(this.context);var e=this.context.compareRemoveMessage;c("body").on("click","[data-comparison-remove]",(function(n){t.context.comparisons.length<=2&&((0,r.ji)(e),n.preventDefault())}))},o}(o.A)},71305:(t,e,n)=>{n.d(e,{A:()=>c});var o=n(33977),r=n(33270);function a(t,e,n){0!==t.length?(e.is("visible")||e.addClass("show"),e.attr("href",n.compare+"/"+t.join("/")),e.find("span.countPill").html(t.length)):e.removeClass("show")}function c(t){var e=t.noCompareMessage,n=t.urls,c=[],i=r("a[data-compare-nav]");r("body").on("compareReset",(function(){var t=r("body").find('input[name="products[]"]:checked');a(c=t.length?t.map((function(t,e){return e.value})).get():[],i,n)})),r("body").triggerHandler("compareReset"),r("body").on("click","[data-compare-id]",(function(t){var e,o=t.currentTarget.value,i=r("a[data-compare-nav]");t.currentTarget.checked?(e=o,c.push(e)):function(t,e){var n=t.indexOf(e);n>-1&&t.splice(n,1)}(c,o),a(c,i,n)})),r("body").on("submit","[data-product-compare]",(function(t){r(t.currentTarget).find('input[name="products[]"]:checked').length<=1&&((0,o.ji)(e),t.preventDefault())})),r("body").on("click","a[data-compare-nav]",(function(){if(r("body").find('input[name="products[]"]:checked').length<=1)return(0,o.ji)(e),!1}))}}}]);
//# sourceMappingURL=theme-bundle.chunk.488.js.map