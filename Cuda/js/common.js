$(document).ready(function(){
    var containerEl = document.querySelector('.portfolio-container');	
	var mixer =  mixitup(containerEl,{
		selectors: {
    		control: '[data-mixitup-control]'
		}
	});

    $(".section-header").animated("fadeIn", "fadeOut");

    $(".services-icon-container").animated("flipInY", "fadeOut");

    $(".team-icon-container").animated("fadeIn", "fadeOut");

    $(".skill-wrapper").animated("fadeIn", "fadeOut");

    $(".portfolio-item").animated("fadeIn", "fadeOut");

    $(".testimonials-icon-container").animated("fadeIn", "fadeOut");	
})
