$(document).ready(function(){
    var containerEl = document.querySelector('.portfolio-container_content');	
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

    $("a[href^='#']").click(function(e) {
        e.preventDefault();
        
        var position = $($(this).attr("href")).offset().top;

        $("body, html").animate({
            scrollTop: position
        } /* speed */ );
    });   

 //   $(".header-title").animated("fadeInUp", "fadeOut");

    $(".section-header").animated("fadeIn", "fadeOut");

    $(".services-container_item").animated("flipInY", "fadeOut");

    $(".team-container_item").animated("fadeIn", "fadeOut");

    $(".portfolio-container_content_item").animated("fadeIn");

    $(".pricing-container_item").animated("flipInY", "fadeOut");

})