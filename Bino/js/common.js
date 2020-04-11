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

    $(function() {
  
          $("#toggle").click(function() {
            $(this).toggleClass("on");
            $("#resize").toggleClass("active");
          });
  
    });

    if ($(window).width() > 576) {
        $(".study-description").animated("fadeInLeft");

        $(".study-image").animated("fadeInRight");    

        $(".section-header").animated("fadeIn");

        $(".header-description").animated("fadeIn");

        $(".whoweare-container").animated("fadeIn");

        $(".portfolio-item").animated("fadeIn");

        $(".stats-icon-container").animated("fadeIn");

        $(".pricing-wrapper").animated("fadeIn");

        $(".team-container_item").animated("fadeIn");

        $(".client-item").animated("fadeIn");

        $(".blog-post").animated("fadeIn");

        $(".contact-container").animated("fadeIn");
    }

})	