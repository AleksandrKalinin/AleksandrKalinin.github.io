$(document).ready(function(){

    $('#lightSlider').lightSlider({
        gallery: true,
        slideMargin: 10,
        item: 1,
        loop: true,
        slideMargin: 0,
        thumbItem: 4,
        controls: true,
        auto: true,
        speed: 400,
        cssEasing: 'ease',
        easing: 'cubic-bezier(0.25, 0, 0.25, 1)',
        prevHtml: '',
        nextHtml: '',
        slideEndAnimation: true,
        pause: 5000
     
        
    });

    $('#btnTop').click(function(e) {
        e.preventDefault();
        $('html, body').animate({
           scrollTop: $('#destTop').offset().top
       }, 300)
    });   


    $(".home-services-item").animated("fadeIn");

    $(".section-header").animated("fadeInUp");

    $(".home-news-item").animated("fadeIn");

    $(".about-news-item").animated("fadeIn");

    $(".services .services-wrapper ").animated("fadeInLeft");

    $(".services:nth-child(even) .services-wrapper ").animated("fadeInRight");

    $(".portfolio-item").animated("fadeIn"); 

    $(".news-item").animated("fadeIn");

    $(".news-single-wrapper").animated("fadeIn");

    $(".contact-address").animated("fadeInLeft"); 

    $(".contact-form").animated("fadeInRight");              

    $(".single-portfolio-sidebar").animated("fadeInLeft"); 

    $(".single-portfolio-text").animated("fadeInRight"); 
   	
})
