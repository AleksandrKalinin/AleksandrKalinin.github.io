$(document).ready(function(){
    var containerEl = document.querySelector('.portfolio-container');	
	var mixer =  mixitup(containerEl,{
		selectors: {
    		control: '[data-mixitup-control]'
		}
	});

/*  
    $("a[href^='#']").click(function(e) {
        e.preventDefault();
        
        var position = $($(this).attr("href")).offset().top;

        $("body, html").animate({
            scrollTop: position
        } );
    });
*/
    $(".portfolio-link").magnificPopup({
        type:"inline",
        midClick: true
    });


    $(".features-container").animated("fadeIn", "fadeOut");

    $(".portfolio-wrapper").animated("fadeIn", "fadeOut");

    $(".team-container").animated("fadeIn", "fadeOut");

    $(".blog-item").animated("fadeIn", "fadeOut");

    $(".facts-item").animated("flipInY", "fadeOut");

    $(".contact-wrapper").animated("fadeIn", "fadeOut");

    $(".section-header").animated("fadeIn", "fadeOut");                	

})
