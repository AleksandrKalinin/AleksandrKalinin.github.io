$(document).ready(function() {

	$(".portfolio-link").magnificPopup({
		type:"inline",
		midClick: true
	});

	$(".description-logo").animated("flipInY", "fadeOut");

	$(".title-container").animated("fadeIn", "fadeOut");

	$(".service-icon").animated("flipInY", "fadeOut");

	$(".portfolio-container").animated("fadeIn", "fadeOut");

	$(".team-image").animated("flipInY", "fadeOut");

	$(".map-container").animated("fadeIn", "fadeOut");

	$(".pricing-wrap").animated("flipInY", "fadeOut");	

	$(".contact-icon").animated("flipInY", "fadeOut");

	$(".top_mnu ul a").mPageScroll2id();

});
