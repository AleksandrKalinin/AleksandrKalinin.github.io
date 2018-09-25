$(document).ready(function() {

    $(".portfolio-link").magnificPopup({
        type:"inline",
        midClick: true
    });

    $(".header-title").animated("fadeInUp", "fadeOut");

    $(".section-header").animated("fadeIn", "fadeOut");

    $(".service-icon").animated("flipInY", "fadeOut");

    $(".team-member").animated("fadeIn", "fadeOut");

    $(".portfolio-wrapper").animated("fadeIn", "fadeOut");

    $(".clients-item").animated("flipInY", "fadeOut");

    $(".pricing-item").animated("flipInY", "fadeOut");

//    $(".top_mnu ul a").mPageScroll2id();

   $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:false,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    });

    $('span').click(function() {
        $('.overlay').toggleClass('anim');
    });

    $('.animation').click(function(){
        $('.anim').toggleClass('reverse-animation');
    })

    $(".overlay ul li a").mPageScroll2id();

});