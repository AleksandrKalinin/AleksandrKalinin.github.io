$(document).ready(function(){function e(){$(".sandwich-bar_top").toggleClass("sandwich-bar_rotated-top"),$(".sandwich-bar_middle").toggleClass("sandwich-bar_hidden"),$(".sandwich-bar_bottom").toggleClass("sandwich-bar_rotated-bottom"),$(".sandwich").toggleClass("sandwich_rotated")}function t(){$(".menu-overlay").toggleClass("menu-overlay_hidden"),$(".menu-overlay").toggleClass("menu-overlay_visible"),$(".top-menu__logo").toggleClass("top-menu__logo_hidden")}$(".intro-section__description").animated("fadeInLeft"),$(".intro-section__thumbnail").animated("fadeInRight"),$(".intro-section__thumbnail").animated("fadeIn"),$(".price-section__item").animated("fadeIn"),$(".contact-section__item").animated("fadeIn"),$("body").addClass("loaded"),$(".sandwich").click(function(){$(".sandwich").hasClass("sandwich_rotated"),e(),t()}),$(".menu__item").click(function(){console.log("click"),e(),t()})});var e=document.getElementById("rating-1"),t=document.getElementById("rating-2"),o=document.getElementById("rating-3"),i=document.getElementById("rating-4"),n=document.getElementById("rating-5"),s=document.getElementById("rating-6"),a=document.getElementById("rating-7"),c=document.getElementById("rating-8"),r=document.getElementById("rating-9"),l=document.getElementById("rating-10"),d=document.getElementById("rating-11"),m=document.getElementById("rating-12");function _(e,t){var o=setInterval(function(){width>=e?clearInterval(o):(width++,t.style.width=width+"%")},10);width=1}$("portfolio-menu__link").click(function(){$("portfolio-menu__link").removeClass("portfolio-menu__link_active"),$(this).addClass("portfolio-menu__link_active")}),$(".pie_progress").asPieProgress({namespace:"pie_progress",easing:"ease"}),$.fn.isInViewport=function(){var e=$(this).offset().top+$(window).height()/2,t=e+$(this).outerHeight(),o=$(window).scrollTop(),i=o+$(window).height();return o<t&&e<i};var u=!0,g=!0;$(window).on("resize scroll",function(){$(".services-section").isInViewport()&&u?(u=!1,$(".pie_progress").asPieProgress("start")):$(".team-section").isInViewport()&&g&&(g=!1,_(75,e),_(85,t),_(95,o),_(90,i),_(75,n),_(85,s),_(95,a),_(90,c),_(75,r),_(85,l),_(95,d),_(90,m))}),$(".services-section__button").click(function(){$(".pie_progress").asPieProgress("reset"),$(".pie_progress").asPieProgress("start");var e=$(this).attr("data-tab");$(".services-section__button").removeClass("services-section__button_active"),$(".services-section__description").removeClass("services-section__description_active"),$(".counters-wrapper").removeClass("counters-wrapper_active"),$(this).addClass("services-section__button_active"),$("#"+e).addClass("services-section__description_active"),$("#"+(Number(e)+4)).addClass("counters-wrapper_active")}),$(".details-section__button").click(function(){var e=$(this).attr("data-tab");console.log(this),$(".details-section__main").removeClass("details-section__main_active"),$(".details-section__button").removeClass("details-section__button_active"),$(this).addClass("details-section__button_active"),$("#"+e).addClass("details-section__main_active")}),$(".owl-carousel").owlCarousel({loop:!0,dots:!0,rewind:!0,margin:0,autoplay:!0,autoplayTimeout:8e3,smartSpeed:1e3,autoplayHoverPause:!0,responsiveClass:!0,responsive:{0:{items:1,nav:!1},600:{items:1,nav:!1},1e3:{items:1,nav:!1,loop:!1}}}),$("#scrollDown").click(function(){$("html, body").animate({scrollTop:$(".team-section").offset().top},1e3)}),$("#connectButton").click(function(){$("html, body").animate({scrollTop:$(".message-section").offset().top},1e3)}),$("#projectsButton").click(function(){$("html, body").animate({scrollTop:$(".portfolio-section").offset().top},1e3)}),ymaps.ready(function(){new ymaps.Map("map",{center:[55.76,37.64],zoom:7})});var p=document.querySelector(".portfolio-section__container");mixitup(p,{selectors:{control:"[data-mixitup-control]"},animation:{effects:""}});