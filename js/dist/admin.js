module.exports=function(t){var n={};function r(a){if(n[a])return n[a].exports;var e=n[a]={i:a,l:!1,exports:{}};return t[a].call(e.exports,e,e.exports,r),e.l=!0,e.exports}return r.m=t,r.c=n,r.d=function(t,n,a){r.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:a})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,n){if(1&n&&(t=r(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var e in t)r.d(a,e,function(n){return t[n]}.bind(null,e));return a},r.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(n,"a",n),n},r.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},r.p="",r(r.s=3)}([function(t,n){t.exports=flarum.core.compat.app},function(t,n){t.exports=flarum.core.compat["components/SettingsModal"]},function(t,n){t.exports=flarum.core.compat["components/Select"]},function(t,n,r){"use strict";r.r(n);var a=r(0),e=r.n(a);var o=r(1),s=r.n(o),i=r(2),l=r.n(i),u="migratetoflarum-canonical.",c="migratetoflarum-canonical.admin.settings.",p=["admin_on_canonical","enable_temporary","enable_permanent"],f=function(t){var n,r;function a(){return t.apply(this,arguments)||this}r=t,(n=a).prototype=Object.create(r.prototype),n.prototype.constructor=n,n.__proto__=r;var o=a.prototype;return o.title=function(){return e.a.translator.trans(c+"title")},o.form=function(){var t=-1,n=e.a.forum.attribute("baseUrl");301===parseInt(e.a.data.settings[u+"status"])?t=2:302===parseInt(e.a.data.settings[u+"status"])?t=1:0===window.location.href.indexOf(n)&&(t=0);var r=this.setting(u+"status")()<301&&t<0;return[m("h4",e.a.translator.trans(c+"step.how_to")),m("ul",[m("li",[m("span.mtf-canonical-step.mtf-canonical-step--done",t>=0?"✓":"?")," ",e.a.translator.trans(c+"step.check_config_url",{url:n})]),p.map((function(n,r){return m("li",[m("span.mtf-canonical-step",{className:t>=r?"mtf-canonical-step--done":""},t>=r?"✓":"×")," ",e.a.translator.trans(c+"step."+n)])}))]),m("h4",e.a.translator.trans(c+"step.suggestions")),m("ul",[m("li",e.a.translator.trans(c+"step.use_https")),m("li",e.a.translator.trans(c+"step.use_hsts"))]),m(".Form-group",[m("label",e.a.translator.trans(c+"field.status")),l.a.component({options:{0:e.a.translator.trans(c+"option.disabled"),302:e.a.translator.trans(c+"option.302"),301:e.a.translator.trans(c+"option.301")},value:this.setting(u+"status")()||0,onchange:this.setting(u+"status"),disabled:r}),r?m(".helpText",e.a.translator.trans(c+"field.wrong_url")):null])]},a}(s.a);e.a.initializers.add("migratetoflarum-canonical",(function(t){t.extensionSettings["migratetoflarum-canonical"]=function(){return t.modal.show(new f)}}))}]);
//# sourceMappingURL=admin.js.map