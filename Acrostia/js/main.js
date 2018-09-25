$(document).ready(function(){
    var containerEl = document.querySelector('.portfolio-container_content');	
	var mixer =  mixitup(containerEl,{
		selectors: {
    		control: '[data-mixitup-control]'
		}
	});

    $(".portfolio-link").magnificPopup({
        type:"inline",
        midClick: true
    });

 //   $(".header-title").animated("fadeInUp", "fadeOut");

    $(".section-header").animated("fadeIn", "fadeOut");

    $(".services-container_item").animated("flipInY", "fadeOut");

    $(".team-container_item").animated("fadeIn", "fadeOut");

    $(".portfolio-container_content_item").animated("fadeIn", "fadeOut");

    $(".pricing-container_item").animated("flipInY", "fadeOut");

})