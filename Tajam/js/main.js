$(window).load(function() {
    $('#cover-spin').hide(); 
});

$(document).ready(function(){

    $("a[href^='#']").click(function(e) {
        e.preventDefault();
        
        var position = $($(this).attr("href")).offset().top;

        $("body, html").animate({
            scrollTop: position
        }, 200, 'linear');
    }); 

    var containerEl = document.querySelector('.portfolio-container');	
	var mixer =  mixitup(containerEl,{
        animation: {
            effects: 'fade translateZ(-100px)',
            duration: 0
        },        
		selectors: {
    		control: '[data-mixitup-control]'
		},
        callbacks: {
        onMixEnd: function(){
            $(window).trigger('resize').trigger('scroll');
        }
    }        
	});

    $(".portfolio-link").magnificPopup({
        type:"inline",
        midClick: true
    });

   $('.owl-two').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        autoplay:true,
        autoplayTimeout:5000,
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

   $('.owl-one').owlCarousel({
        loop:true,
        margin:10,
        nav:false,
        autoplay:true,
        autoplayTimeout:5000,
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

    $(".top-container").animated("fadeInUp");

    $(".section-header").animated("fadeIn");

    $(".services-item").animated("fadeIn");

    $(".team-item").animated("fadeIn");

    $(".clients-item").animated("fadeIn");

    $(".pricing-item").animated("fadeIn");

    $(".container-map").animated("fadeIn"); 

    $(".container-form").animated("fadeIn");                     

 
})

// makes sure the whole site is loaded
