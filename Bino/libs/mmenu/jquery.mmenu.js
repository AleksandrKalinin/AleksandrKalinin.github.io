;(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    define(['jquery'], factory);
  } else if (typeof exports === 'object') {
    module.exports = factory(require('jquery'));
  } else {
    root.jquery_mmenu_js = factory(root.jQuery);
  }
}(this, function(jQuery) {
/*!
 * jQuery mmenu v7.2.0
 * @requires jQuery 1.7.0 or later
 *
 * mmenu.frebsite.nl
 *
 * Copyright (c) Fred Heusschen
 * www.frebsite.nl
 *
 * License: CC-BY-NC-4.0
 * http://creativecommons.org/licenses/by-nc/4.0/
 */
!function(h){var n,p,o,a,e,f="mmenu",t="7.2.0";h[f]&&h[f].version>t||(h[f]=function(e,t,n){return this.$menu=e,this._api=["bind","getInstance","initPanels","openPanel","closePanel","closeAllPanels","setSelected"],this.opts=t,this.conf=n,this.vars={},this.cbck={},this.mtch={},"function"==typeof this.___deprecated&&this.___deprecated(),this._initWrappers(),this._initAddons(),this._initExtensions(),this._initHooks(),this._initMenu(),this._initPanels(),this._initOpened(),this._initAnchors(),this._initMatchMedia(),"function"==typeof this.___debug&&this.___debug(),this},h[f].version=t,h[f].uniqueId=0,h[f].wrappers={},h[f].addons={},h[f].defaults={hooks:{},extensions:[],wrappers:[],navbar:{add:!0,title:"Меню",titleLink:"parent"},onClick:{setSelected:!0},slidingSubmenus:!0},h[f].configuration={classNames:{divider:"Divider",inset:"Inset",nolistview:"NoListview",nopanel:"NoPanel",panel:"Panel",selected:"Selected",spacer:"Spacer",vertical:"Vertical"},clone:!1,language:null,openingInterval:25,panelNodetype:"ul, ol, div",transitionDuration:400},h[f].prototype={getInstance:function(){return this},initPanels:function(e){this._initPanels(e)},openPanel:function(e,t){if(this.trigger("openPanel:before",e),e&&e.length&&(e.is("."+p.panel)||(e=e.closest("."+p.panel)),e.is("."+p.panel))){var n=this;if("boolean"!=typeof t&&(t=!0),e.parent("."+p.listitem+"_vertical").length)e.parents("."+p.listitem+"_vertical").addClass(p.listitem+"_opened").children("."+p.panel).removeClass(p.hidden),this.openPanel(e.parents("."+p.panel).not(function(){return h(this).parent("."+p.listitem+"_vertical").length}).first()),this.trigger("openPanel:start",e),this.trigger("openPanel:finish",e);else{if(e.hasClass(p.panel+"_opened"))return;var i=this.$pnls.children("."+p.panel),s=this.$pnls.children("."+p.panel+"_opened");if(!h[f].support.csstransitions)return s.addClass(p.hidden).removeClass(p.panel+"_opened"),e.removeClass(p.hidden).addClass(p.panel+"_opened"),this.trigger("openPanel:start",e),void this.trigger("openPanel:finish",e);i.not(e).removeClass(p.panel+"_opened-parent");for(var a=e.data(o.parent);a;)(a=a.closest("."+p.panel)).parent("."+p.listitem+"_vertical").length||a.addClass(p.panel+"_opened-parent"),a=a.data(o.parent);i.removeClass(p.panel+"_highest").not(s).not(e).addClass(p.hidden),e.removeClass(p.hidden);var r=function(){s.removeClass(p.panel+"_opened"),e.addClass(p.panel+"_opened"),e.hasClass(p.panel+"_opened-parent")?(s.addClass(p.panel+"_highest"),e.removeClass(p.panel+"_opened-parent")):(s.addClass(p.panel+"_opened-parent"),e.addClass(p.panel+"_highest")),n.trigger("openPanel:start",e)},l=function(){s.removeClass(p.panel+"_highest").addClass(p.hidden),e.removeClass(p.panel+"_highest"),n.trigger("openPanel:finish",e)};t&&!e.hasClass(p.panel+"_noanimation")?setTimeout(function(){n.__transitionend(e,function(){l()},n.conf.transitionDuration),r()},n.conf.openingInterval):(r(),l())}this.trigger("openPanel:after",e)}},closePanel:function(e){this.trigger("closePanel:before",e);var t=e.parent();t.hasClass(p.listitem+"_vertical")&&(t.removeClass(p.listitem+"_opened"),e.addClass(p.hidden),this.trigger("closePanel",e)),this.trigger("closePanel:after",e)},closeAllPanels:function(e){this.trigger("closeAllPanels:before"),this.$pnls.find("."+p.listview).children().removeClass(p.listitem+"_selected").filter("."+p.listitem+"_vertical").removeClass(p.listitem+"_opened");var t=this.$pnls.children("."+p.panel),n=e&&e.length?e:t.first();this.$pnls.children("."+p.panel).not(n).removeClass(p.panel+"_opened").removeClass(p.panel+"_opened-parent").removeClass(p.panel+"_highest").addClass(p.hidden),this.openPanel(n,!1),this.trigger("closeAllPanels:after")},togglePanel:function(e){var t=e.parent();t.hasClass(p.listitem+"_vertical")&&this[t.hasClass(p.listitem+"_opened")?"closePanel":"openPanel"](e)},setSelected:function(e){this.trigger("setSelected:before",e),this.$menu.find("."+p.listitem+"_selected").removeClass(p.listitem+"_selected"),e.addClass(p.listitem+"_selected"),this.trigger("setSelected:after",e)},bind:function(e,t){this.cbck[e]=this.cbck[e]||[],this.cbck[e].push(t)},trigger:function(){var e=Array.prototype.slice.call(arguments),t=e.shift();if(this.cbck[t])for(var n=0,i=this.cbck[t].length;n<i;n++)this.cbck[t][n].apply(this,e)},matchMedia:function(e,t,n){var i={yes:t,no:n};this.mtch[e]=this.mtch[e]||[],this.mtch[e].push(i)},i18n:function(e){return h[f].i18n(e,this.conf.language)},_initHooks:function(){for(var e in this.opts.hooks)this.bind(e,this.opts.hooks[e])},_initWrappers:function(){this.trigger("initWrappers:before");for(var e=0;e<this.opts.wrappers.length;e++){var t=h[f].wrappers[this.opts.wrappers[e]];"function"==typeof t&&t.call(this)}this.trigger("initWrappers:after")},_initAddons:function(){var e;for(e in this.trigger("initAddons:before"),h[f].addons)h[f].addons[e].add.call(this),h[f].addons[e].add=function(){};for(e in h[f].addons)h[f].addons[e].setup.call(this);this.trigger("initAddons:after")},_initExtensions:function(){this.trigger("initExtensions:before");var t=this;for(var e in this.opts.extensions.constructor===Array&&(this.opts.extensions={all:this.opts.extensions}),this.opts.extensions)this.opts.extensions[e]=this.opts.extensions[e].length?p.menu+"_"+this.opts.extensions[e].join(" "+p.menu+"_"):"",this.opts.extensions[e]&&function(e){t.matchMedia(e,function(){this.$menu.addClass(this.opts.extensions[e])},function(){this.$menu.removeClass(this.opts.extensions[e])})}(e);this.trigger("initExtensions:after")},_initMenu:function(){this.trigger("initMenu:before");this.conf.clone&&(this.$orig=this.$menu,this.$menu=this.$orig.clone(),this.$menu.add(this.$menu.find("[id]")).filter("[id]").each(function(){h(this).attr("id",p.mm(h(this).attr("id")))})),this.$menu.attr("id",this.$menu.attr("id")||this.__getUniqueId()),this.$pnls=h('<div class="'+p.panels+'" />').append(this.$menu.children(this.conf.panelNodetype)).prependTo(this.$menu),this.$menu.addClass(p.menu).parent().addClass(p.wrapper),this.trigger("initMenu:after")},_initPanels:function(e){this.trigger("initPanels:before",e),e=e||this.$pnls.children(this.conf.panelNodetype);var i=h(),s=this,a=function(e){e.filter(s.conf.panelNodetype).each(function(e){var t=s._initPanel(h(this));if(t){s._initNavbar(t),s._initListview(t),i=i.add(t);var n=t.children("."+p.listview).children("li").children(s.conf.panelNodetype).add(t.children("."+s.conf.classNames.panel));n.length&&a(n)}})};a(e),this.trigger("initPanels:after",i)},_initPanel:function(e){this.trigger("initPanel:before",e);if(e.hasClass(p.panel))return e;if(this.__refactorClass(e,this.conf.classNames.panel,p.panel),this.__refactorClass(e,this.conf.classNames.nopanel,p.nopanel),this.__refactorClass(e,this.conf.classNames.inset,p.listview+"_inset"),e.filter("."+p.listview+"_inset").addClass(p.nopanel),e.hasClass(p.nopanel))return!1;var t=e.hasClass(this.conf.classNames.vertical)||!this.opts.slidingSubmenus;e.removeClass(this.conf.classNames.vertical);var n=e.attr("id")||this.__getUniqueId();e.is("ul, ol")&&(e.removeAttr("id"),e.wrap("<div />"),e=e.parent()),e.attr("id",n),e.addClass(p.panel+" "+p.hidden);var i=e.parent("li");return t?i.addClass(p.listitem+"_vertical"):e.appendTo(this.$pnls),i.length&&(i.data(o.child,e),e.data(o.parent,i)),this.trigger("initPanel:after",e),e},_initNavbar:function(e){if(this.trigger("initNavbar:before",e),!e.children("."+p.navbar).length){var t=e.data(o.parent),n=h('<div class="'+p.navbar+'" />'),i=this.__getPanelTitle(e,this.opts.navbar.title),s="";if(t&&t.length){if(t.hasClass(p.listitem+"_vertical"))return;if(t.parent().is("."+p.listview))var a=t.children("a, span").not("."+p.btn+"_next");else a=t.closest("."+p.panel).find('a[href="#'+e.attr("id")+'"]');var r=(t=(a=a.first()).closest("."+p.panel)).attr("id");switch(i=this.__getPanelTitle(e,h("<span>"+a.text()+"</span>").text()),this.opts.navbar.titleLink){case"anchor":s=a.attr("href");break;case"parent":s="#"+r}n.append('<a class="'+p.btn+" "+p.btn+"_prev "+p.navbar+'__btn" href="#'+r+'" />')}else if(!this.opts.navbar.title)return;this.opts.navbar.add&&e.addClass(p.panel+"_has-navbar"),n.append('<a class="'+p.navbar+'__title"'+(s.length?' href="'+s+'"':"")+">"+i+"</a>").prependTo(e),this.trigger("initNavbar:after",e)}},_initListview:function(e){this.trigger("initListview:before",e);var t=this.__childAddBack(e,"ul, ol");this.__refactorClass(t,this.conf.classNames.nolistview,p.nolistview);var n=t.not("."+p.nolistview).addClass(p.listview).children().addClass(p.listitem);this.__refactorClass(n,this.conf.classNames.selected,p.listitem+"_selected"),this.__refactorClass(n,this.conf.classNames.divider,p.listitem+"_divider"),this.__refactorClass(n,this.conf.classNames.spacer,p.listitem+"_spacer"),n.children("a, span").not("."+p.btn).addClass(p.listitem+"__text");var i=e.data(o.parent);if(i&&i.is("."+p.listitem)&&!i.children("."+p.btn).length){var s=i.children("a, span").first(),a=h('<a class="'+p.btn+" "+p.btn+"_next "+p.listitem+'__btn" href="#'+e.attr("id")+'" />');a.insertAfter(s),s.is("span")&&(a.addClass(p.listitem+"__text").html(s.html()),s.remove())}this.trigger("initListview:after",e)},_initOpened:function(){this.trigger("initOpened:before");var e=this.$pnls.find("."+p.listitem+"_selected").removeClass(p.listitem+"_selected").last().addClass(p.listitem+"_selected"),t=e.length?e.closest("."+p.panel):this.$pnls.children("."+p.panel).first();this.openPanel(t,!1),this.trigger("initOpened:after")},_initAnchors:function(){this.trigger("initAnchors:before");var c=this;e.$body.on(a.click+"-oncanvas","a[href]",function(e){var t=h(this),n=t.attr("href"),i=c.$menu.find(t).length,s=t.is("."+p.listitem+" > a"),a=t.is('[rel="external"]')||t.is('[target="_blank"]');if(i&&1<n.length&&"#"==n.slice(0,1))try{var r=c.$menu.find(n);if(r.is("."+p.panel))return c[t.parent().hasClass(p.listitem+"_vertical")?"togglePanel":"openPanel"](r),void e.preventDefault()}catch(e){}var l={close:null,setSelected:null,preventDefault:"#"==n.slice(0,1)};for(var o in h[f].addons){var d=h[f].addons[o].clickAnchor.call(c,t,i,s,a);if(d){if("boolean"==typeof d)return void e.preventDefault();"object"==typeof d&&(l=h.extend({},l,d))}}i&&s&&!a&&(c.__valueOrFn(t,c.opts.onClick.setSelected,l.setSelected)&&c.setSelected(h(e.target).parent()),c.__valueOrFn(t,c.opts.onClick.preventDefault,l.preventDefault)&&e.preventDefault(),c.__valueOrFn(t,c.opts.onClick.close,l.close)&&c.opts.offCanvas&&"function"==typeof c.close&&c.close())}),this.trigger("initAnchors:after")},_initMatchMedia:function(){var n=this;for(var i in this.mtch)!function(){var t=i,e=window.matchMedia(t);n._fireMatchMedia(t,e),e.addListener(function(e){n._fireMatchMedia(t,e)})}()},_fireMatchMedia:function(e,t){for(var n=t.matches?"yes":"no",i=0;i<this.mtch[e].length;i++)this.mtch[e][i][n].call(this)},_getOriginalMenuId:function(){var e=this.$menu.attr("id");return this.conf.clone&&e&&e.length&&(e=p.umm(e)),e},__api:function(){var n=this,i={};return h.each(this._api,function(e){var t=this;i[t]=function(){var e=n[t].apply(n,arguments);return void 0===e?i:e}}),i},__valueOrFn:function(e,t,n){if("function"==typeof t){var i=t.call(e[0]);if(void 0!==i)return i}return"function"!=typeof t&&void 0!==t||void 0===n?t:n},__getPanelTitle:function(e,t){var n;return"function"==typeof this.opts.navbar.title&&(n=this.opts.navbar.title.call(e[0])),void 0===n&&(n=e.data(o.title)),void 0!==n?n:"string"==typeof t?this.i18n(t):this.i18n(h[f].defaults.navbar.title)},__refactorClass:function(e,t,n){return e.filter("."+t).removeClass(t).addClass(n)},__findAddBack:function(e,t){return e.find(t).add(e.filter(t))},__childAddBack:function(e,t){return e.children(t).add(e.filter(t))},__filterListItems:function(e){return e.not("."+p.listitem+"_divider").not("."+p.hidden)},__filterListItemAnchors:function(e){return this.__filterListItems(e).children("a").not("."+p.btn+"_next")},__openPanelWoAnimation:function(e){e.hasClass(p.panel+"_noanimation")||(e.addClass(p.panel+"_noanimation"),this.__transitionend(e,function(){e.removeClass(p.panel+"_noanimation")},this.conf.openingInterval),this.openPanel(e))},__transitionend:function(t,n,e){var i=!1,s=function(e){void 0!==e&&e.target!=t[0]||(i||(t.off(a.transitionend),t.off(a.webkitTransitionEnd),n.call(t[0])),i=!0)};t.on(a.transitionend,s),t.on(a.webkitTransitionEnd,s),setTimeout(s,1.1*e)},__getUniqueId:function(){return p.mm(h[f].uniqueId++)}},h.fn[f]=function(n,i){!function(){if(h[f].glbl)return;e={$wndw:h(window),$docu:h(document),$html:h("html"),$body:h("body")},p={},o={},a={},h.each([p,o,a],function(e,i){i.add=function(e){e=e.split(" ");for(var t=0,n=e.length;t<n;t++)i[e[t]]=i.mm(e[t])}}),p.mm=function(e){return"mm-"+e},p.add("wrapper menu panels panel nopanel navbar listview nolistview listitem btn hidden"),p.umm=function(e){return"mm-"==e.slice(0,3)&&(e=e.slice(3)),e},o.mm=function(e){return"mm-"+e},o.add("parent child title"),a.mm=function(e){return e+".mm"},a.add("transitionend webkitTransitionEnd click scroll resize keydown mousedown mouseup touchstart touchmove touchend orientationchange"),h[f]._c=p,h[f]._d=o,h[f]._e=a,h[f].glbl=e}(),n=h.extend(!0,{},h[f].defaults,n),i=h.extend(!0,{},h[f].configuration,i);var s=h();return this.each(function(){var e=h(this);if(!e.data(f)){var t=new h[f](e,n,i);t.$menu.data(f,t.__api()),s=s.add(t.$menu)}}),s},h[f].i18n=(n={},function(e,t){switch(typeof e){case"object":return"string"==typeof t&&(void 0===n[t]&&(n[t]={}),h.extend(n[t],e)),n;case"string":return"string"==typeof t&&void 0!==n[t]&&n[t][e]||e;case"undefined":default:return n}}),h[f].support={touch:"ontouchstart"in window||navigator.msMaxTouchPoints||!1,csstransitions:"undefined"==typeof Modernizr||void 0===Modernizr.csstransitions||Modernizr.csstransitions,csstransforms:"undefined"==typeof Modernizr||void 0===Modernizr.csstransforms||Modernizr.csstransforms,csstransforms3d:"undefined"==typeof Modernizr||void 0===Modernizr.csstransforms3d||Modernizr.csstransforms3d})}(jQuery);

!function(s){var r,i,o,a,t="mmenu",p="offCanvas";s[t].addons[p]={setup:function(){if(this.opts[p]){var e=this.opts[p],i=this.conf[p];a=s[t].glbl,this._api=s.merge(this._api,["open","close","setPage"]),"object"!=typeof e&&(e={}),e=this.opts[p]=s.extend(!0,{},s[t].defaults[p],e),"string"!=typeof i.page.selector&&(i.page.selector="> "+i.page.nodetype),this.vars.opened=!1;var o=[r.menu+"_offcanvas"];s[t].support.csstransforms||o.push(r["no-csstransforms"]),s[t].support.csstransforms3d||o.push(r["no-csstransforms3d"]),this.bind("initMenu:after",function(){var e=this;this._initBlocker(),this.setPage(a.$page),this["_initWindow_"+p](),this.$menu.addClass(o.join(" ")).parent("."+r.wrapper).removeClass(r.wrapper),this.$menu[i.menu.insertMethod](i.menu.insertSelector);var t=window.location.hash;if(t){var n=this._getOriginalMenuId();n&&n==t.slice(1)&&setTimeout(function(){e.open()},1e3)}}),this.bind("setPage:after",function(e){a.$blck&&a.$blck.children("a").attr("href","#"+e.attr("id"))}),this.bind("open:start:sr-aria",function(){this.__sr_aria(this.$menu,"hidden",!1)}),this.bind("close:finish:sr-aria",function(){this.__sr_aria(this.$menu,"hidden",!0)}),this.bind("initMenu:after:sr-aria",function(){this.__sr_aria(this.$menu,"hidden",!0)}),this.bind("initBlocker:after:sr-text",function(){a.$blck.children("a").html(this.__sr_text(this.i18n(this.conf.screenReader.text.closeMenu)))})}},add:function(){r=s[t]._c,i=s[t]._d,o=s[t]._e,r.add("slideout page no-csstransforms3d"),i.add("style")},clickAnchor:function(e,t){var n=this;if(this.opts[p]){var i=this._getOriginalMenuId();if(i&&e.is('[href="#'+i+'"]')){if(t)return this.open(),!0;var o=e.closest("."+r.menu);if(o.length){var s=o.data("mmenu");if(s&&s.close)return s.close(),n.__transitionend(o,function(){n.open()},n.conf.transitionDuration),!0}return this.open(),!0}if(a.$page)return(i=a.$page.first().attr("id"))&&e.is('[href="#'+i+'"]')?(this.close(),!0):void 0}}},s[t].defaults[p]={blockUI:!0,moveBackground:!0},s[t].configuration[p]={menu:{insertMethod:"prependTo",insertSelector:"body"},page:{nodetype:"div",selector:null,noSelector:[],wrapIfNeeded:!0}},s[t].prototype.open=function(){if(this.trigger("open:before"),!this.vars.opened){var e=this;this._openSetup(),setTimeout(function(){e._openFinish()},this.conf.openingInterval),this.trigger("open:after")}},s[t].prototype._openSetup=function(){var e=this,t=this.opts[p];this.closeAllOthers(),a.$page.each(function(){s(this).data(i.style,s(this).attr("style")||"")}),a.$wndw.trigger(o.resize+"-"+p,[!0]);var n=[r.wrapper+"_opened"];t.blockUI&&n.push(r.wrapper+"_blocking"),"modal"==t.blockUI&&n.push(r.wrapper+"_modal"),t.moveBackground&&n.push(r.wrapper+"_background"),a.$html.addClass(n.join(" ")),setTimeout(function(){e.vars.opened=!0},this.conf.openingInterval),this.$menu.addClass(r.menu+"_opened")},s[t].prototype._openFinish=function(){var e=this;this.__transitionend(a.$page.first(),function(){e.trigger("open:finish")},this.conf.transitionDuration),this.trigger("open:start"),a.$html.addClass(r.wrapper+"_opening")},s[t].prototype.close=function(){if(this.trigger("close:before"),this.vars.opened){var t=this;this.__transitionend(a.$page.first(),function(){t.$menu.removeClass(r.menu+"_opened");var e=[r.wrapper+"_opened",r.wrapper+"_blocking",r.wrapper+"_modal",r.wrapper+"_background"];a.$html.removeClass(e.join(" ")),a.$page.each(function(){var e=s(this).data(i.style);s(this).attr("style",e)}),t.vars.opened=!1,t.trigger("close:finish")},this.conf.transitionDuration),this.trigger("close:start"),a.$html.removeClass(r.wrapper+"_opening"),this.trigger("close:after")}},s[t].prototype.closeAllOthers=function(){a.$body.find("."+r.menu+"_offcanvas").not(this.$menu).each(function(){var e=s(this).data(t);e&&e.close&&e.close()})},s[t].prototype.setPage=function(e){this.trigger("setPage:before",e);var t=this,n=this.conf[p];e&&e.length||(e=a.$body.find(n.page.selector).not("."+r.menu).not("."+r.wrapper+"__blocker"),n.page.noSelector.length&&(e=e.not(n.page.noSelector.join(", "))),1<e.length&&n.page.wrapIfNeeded&&(e=e.wrapAll("<"+this.conf[p].page.nodetype+" />").parent())),e.addClass(r.page+" "+r.slideout).each(function(){s(this).attr("id",s(this).attr("id")||t.__getUniqueId())}),a.$page=e,this.trigger("setPage:after",e)},s[t].prototype["_initWindow_"+p]=function(){a.$wndw.off(o.keydown+"-"+p).on(o.keydown+"-"+p,function(e){if(a.$html.hasClass(r.wrapper+"_opened")&&9==e.keyCode)return e.preventDefault(),!1});var i=0;a.$wndw.off(o.resize+"-"+p).on(o.resize+"-"+p,function(e,t){if(1==a.$page.length&&(t||a.$html.hasClass(r.wrapper+"_opened"))){var n=a.$wndw.height();(t||n!=i)&&(i=n,a.$page.css("minHeight",n))}})},s[t].prototype._initBlocker=function(){var t=this,e=this.opts[p],n=this.conf[p];this.trigger("initBlocker:before"),e.blockUI&&(a.$blck||(a.$blck=s('<div class="'+r.wrapper+"__blocker "+r.slideout+'" />').append("<a />")),a.$blck.appendTo(n.menu.insertSelector).off(o.touchstart+"-"+p+" "+o.touchmove+"-"+p).on(o.touchstart+"-"+p+" "+o.touchmove+"-"+p,function(e){e.preventDefault(),e.stopPropagation(),a.$blck.trigger(o.mousedown+"-"+p)}).off(o.mousedown+"-"+p).on(o.mousedown+"-"+p,function(e){e.preventDefault(),a.$html.hasClass(r.wrapper+"_modal")||(t.closeAllOthers(),t.close())}),this.trigger("initBlocker:after"))}}(jQuery);
!function(n){var s,o,i="mmenu",e="screenReader";n[i].addons[e]={setup:function(){var r=this,t=this.opts[e],a=this.conf[e];n[i].glbl,"boolean"==typeof t&&(t={aria:t,text:t}),"object"!=typeof t&&(t={}),(t=this.opts[e]=n.extend(!0,{},n[i].defaults[e],t)).aria&&(this.bind("initAddons:after",function(){this.bind("initMenu:after",function(){this.trigger("initMenu:after:sr-aria")}),this.bind("initNavbar:after",function(){this.trigger("initNavbar:after:sr-aria",arguments[0])}),this.bind("openPanel:start",function(){this.trigger("openPanel:start:sr-aria",arguments[0])}),this.bind("close:start",function(){this.trigger("close:start:sr-aria")}),this.bind("close:finish",function(){this.trigger("close:finish:sr-aria")}),this.bind("open:start",function(){this.trigger("open:start:sr-aria")}),this.bind("initOpened:after",function(){this.trigger("initOpened:after:sr-aria")})}),this.bind("updateListview",function(){this.$pnls.find("."+s.listview).children().each(function(){r.__sr_aria(n(this),"hidden",n(this).is("."+s.hidden))})}),this.bind("openPanel:start",function(t){var i=this.$menu.find("."+s.panel).not(t).not(t.parents("."+s.panel)),n=t.add(t.find("."+s.listitem+"_vertical ."+s.listitem+"_opened").children("."+s.panel));this.__sr_aria(i,"hidden",!0),this.__sr_aria(n,"hidden",!1)}),this.bind("closePanel",function(t){this.__sr_aria(t,"hidden",!0)}),this.bind("initPanels:after",function(t){var i=t.find("."+s.btn).each(function(){r.__sr_aria(n(this),"owns",n(this).attr("href").replace("#",""))});this.__sr_aria(i,"haspopup",!0)}),this.bind("initNavbar:after",function(t){var i=t.children("."+s.navbar);this.__sr_aria(i,"hidden",!t.hasClass(s.panel+"_has-navbar"))}),t.text&&"parent"==this.opts.navbar.titleLink&&this.bind("initNavbar:after",function(t){var i=t.children("."+s.navbar),n=!!i.children("."+s.btn+"_prev").length;this.__sr_aria(i.children("."+s.title),"hidden",n)})),t.text&&(this.bind("initAddons:after",function(){this.bind("setPage:after",function(){this.trigger("setPage:after:sr-text",arguments[0])}),this.bind("initBlocker:after",function(){this.trigger("initBlocker:after:sr-text")})}),this.bind("initNavbar:after",function(t){var i=t.children("."+s.navbar),n=this.i18n(a.text.closeSubmenu);i.children("."+s.btn+"_prev").html(this.__sr_text(n))}),this.bind("initListview:after",function(t){var i=t.data(o.parent);if(i&&i.length){var n=i.children("."+s.btn+"_next"),e=this.i18n(a.text[n.parent().is("."+s.listitem+"_vertical")?"toggleSubmenu":"openSubmenu"]);n.append(r.__sr_text(e))}}))},add:function(){s=n[i]._c,o=n[i]._d,n[i]._e,s.add("sronly")},clickAnchor:function(t,i){}},n[i].defaults[e]={aria:!0,text:!0},n[i].configuration[e]={text:{closeMenu:"Close menu",closeSubmenu:"Close submenu",openSubmenu:"Open submenu",toggleSubmenu:"Toggle submenu"}},n[i].prototype.__sr_aria=function(t,i,n){t.prop("aria-"+i,n)[n?"attr":"removeAttr"]("aria-"+i,n)},n[i].prototype.__sr_role=function(t,i){t.prop("role",i)[i?"attr":"removeAttr"]("role",i)},n[i].prototype.__sr_text=function(t){return'<span class="'+s.sronly+'">'+t+"</span>"}}(jQuery);
!function(n){var e,r,s,t="mmenu",i="scrollBugFix";n[t].addons[i]={setup:function(){var o=this.opts[i];this.conf[i];s=n[t].glbl,n[t].support.touch&&this.opts.offCanvas&&this.opts.offCanvas.blockUI&&("boolean"==typeof o&&(o={fix:o}),"object"!=typeof o&&(o={}),(o=this.opts[i]=n.extend(!0,{},n[t].defaults[i],o)).fix&&(this.bind("open:start",function(){this.$pnls.children("."+e.panel+"_opened").scrollTop(0)}),this.bind("initMenu:after",function(){this["_initWindow_"+i]()})))},add:function(){e=n[t]._c,n[t]._d,r=n[t]._e},clickAnchor:function(o,t){}},n[t].defaults[i]={fix:!0},n[t].prototype["_initWindow_"+i]=function(){var o=this;s.$docu.off(r.touchmove+"-"+i).on(r.touchmove+"-"+i,function(o){s.$html.hasClass(e.wrapper+"_opened")&&o.preventDefault()});var t=!1;s.$body.off(r.touchstart+"-"+i).on(r.touchstart+"-"+i,"."+e.panels+"> ."+e.panel,function(o){s.$html.hasClass(e.wrapper+"_opened")&&(t||(t=!0,0===o.currentTarget.scrollTop?o.currentTarget.scrollTop=1:o.currentTarget.scrollHeight===o.currentTarget.scrollTop+o.currentTarget.offsetHeight&&(o.currentTarget.scrollTop-=1),t=!1))}).off(r.touchmove+"-"+i).on(r.touchmove+"-"+i,"."+e.panels+"> ."+e.panel,function(o){s.$html.hasClass(e.wrapper+"_opened")&&n(this)[0].scrollHeight>n(this).innerHeight()&&o.stopPropagation()}),s.$wndw.off(r.orientationchange+"-"+i).on(r.orientationchange+"-"+i,function(){o.$pnls.children("."+e.panel+"_opened").scrollTop(0).css({"-webkit-overflow-scrolling":"auto"}).css({"-webkit-overflow-scrolling":"touch"})})}}(jQuery);
return true;
}));
