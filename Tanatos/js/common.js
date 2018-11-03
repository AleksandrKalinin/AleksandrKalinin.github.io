$(document).ready(function(){


    $(".work_item_link").magnificPopup({
        type:"inline",
        midClick: true
    });


   $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        autoplay:true,
        autoplayTimeout:3000,
        autoplayHoverPause: true,
        navText : ['<i class="fa fa-angle-left" aria-hidden="true"></i>','<i class="fa fa-angle-right" aria-hidden="true"></i>'], 
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

    $("a[href^='#']").click(function(e) {
        e.preventDefault();
        
        var position = $($(this).attr("href")).offset().top;

        $("body, html").animate({
            scrollTop: position
        });
    });

    $(".header_content").animated("fadeIn", "fadeOut");

    $(".section-header").animated("fadeIn", "fadeOut");

    $(".services_item").animated("fadeIn", "fadeOut");

    $(".work_item").animated("fadeIn", "fadeOut");

    $(".team_item").animated("fadeIn", "fadeOut");

    $(".contact_container").animated("fadeIn", "fadeOut");

   	
})
