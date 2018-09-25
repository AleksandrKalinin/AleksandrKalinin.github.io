$(document).ready(function(){
    var containerEl = document.querySelector('.portfolio-images');	
	var mixer =  mixitup(containerEl,{
		selectors: {
    		control: '[data-mixitup-control]'
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


    $(".section-header").animated("fadeIn", "fadeOut");

    $(".header-description").animated("fadeIn", "fadeOut");

    $(".whoweare-container").animated("fadeIn", "fadeOut");

    $(".portfolio-item").animated("fadeIn", "fadeOut");

    $(".stats-icon-container").animated("fadeIn", "fadeOut");

    $(".pricing-wrapper").animated("fadeIn", "fadeOut");

    $(".team-container_item").animated("fadeIn", "fadeOut");

    $(".client-item").animated("fadeIn", "fadeOut");

    $(".blog-post").animated("fadeIn", "fadeOut");

    $(".contact-container").animated("fadeIn", "fadeOut");    

})	