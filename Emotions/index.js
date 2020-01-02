//different functions for main menu and secondary menu

$('#hamb-icon').click(function() {
    if ( ($('body').width() > 768) && ($('.hamb-container').hasClass('hamb-visible')) && ($(".hamb-overlay").hasClass("shown")) ) {
      $('.hamb-container').removeClass('hamb-visible')
      $('.main-menu').removeClass('not-visible')
    }
    $('.top-bar').toggleClass('rotated-right');
    $('.middle-bar').toggleClass('toggled');
    $('.bottom-bar').toggleClass('rotated-left');
    $('body').toggleClass('stop-scrolling');
    $(".header-logo").toggleClass("hidden-item");
});


$("#hamb-icon").click(function(){
  if($(".hamb-overlay").hasClass("shown")){
    console.log($("#hamb-icon"));
    $(".hamb-overlay").removeClass("shown");
    $(".hamb-overlay").addClass("toggled");
  }
  else{
    console.log($("#hamb-icon"));
    $(".hamb-overlay").removeClass("toggled");
    $(".hamb-overlay").addClass("shown");
  }
});

//menu

$('.scrollTo').click(function(){
    $(".hamb-overlay").removeClass("shown");
    $(".hamb-overlay").addClass("toggled"); 
    $('.top-bar').toggleClass('rotated-right');
    $('.middle-bar').toggleClass('toggled');
    $('.bottom-bar').toggleClass('rotated-left');
    $('body').removeClass('stop-scrolling');
    $('html, body').animate({
        scrollTop: $( $(this).attr('href') ).offset().top
    }, 500);
    return false;
});

$(".scrollOverlay").click(function(){
  $(".header-logo").toggleClass("hidden-item");
})


window.onscroll = function() {myFunction()};

function myFunction() {

	if(window.pageYOffset>0){
    $('.header-logo img').attr("src","images/logo-dark.png");
    console.log("light");    
	  $('header').css("background-color","#fff");
	  $('header').css("height","60px");
	  $('.top-menu a').css("color", "#111");
    $('.hamb-container span').css("background", "#111");
		if(  !($('.top-menu a').hasClass('scrolled')) ){
			$('.top-menu a').addClass('scrolled');
			$('header').addClass("header-border");
		}	  	
	} else{
    $('.header-logo img').attr("src","images/logo-light.png");   
    console.log("dark");   
	  $('header').css("background-color","transparent");
	  $('header').css("height","75px");
	  $('.top-menu a').css("color", "#fff");
    $('.hamb-container span').css("background", "#fff");
	  $('.top-menu a').removeClass('scrolled');
	  $('header').removeClass("header-border");			
	}
}

  var containerEl = document.querySelector('.portfolio-wrapper'); 
  
  var mixer =  mixitup(containerEl,{
    selectors: {
        control: '[data-mixitup-control]'
    }
  });

  $('.pie_progress').asPieProgress({
    namespace: 'pie_progress'
  });


$.fn.isInViewport = function() {
    var elementTop = $(this).offset().top + ($(window).height() / 2 );
    var elementBottom = elementTop + $(this).outerHeight();

    var viewportTop = $(window).scrollTop();
    var viewportBottom = viewportTop + $(window).height();

    return elementBottom > viewportTop && elementTop < viewportBottom;
};



let scrollCounter = true;

$(window).on('resize scroll', function() {
    if ( ($('.section-skills').isInViewport()) && (scrollCounter)  ) {
    	scrollCounter = false;
        $('.pie_progress').asPieProgress('start');
    } else {
        
    }
});


$(function() {
      $( '.portfolio-menu nav button' ).on( 'click', function() {
            $( this ).parent().find( 'button.active' ).removeClass( 'active' );
            $( this ).addClass( 'active' );
      });
});

$('.owl-carousel').owlCarousel({
    loop:true,
    dots:true,
    rewind: true,
    margin: 0,
    autoplay:true,
    autoplayTimeout: 8000,
    smartSpeed: 1000,
    autoplayHoverPause: true,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:1,
            nav:false
        },
        1000:{
            items:1,
            nav:true,
            loop:false
        }
    }
})

$(document).ready(function(){

  if ($('body').width() < 768) {
    $('.hamb-container').addClass('hamb-visible')
    $('.top-menu').addClass('not-visible');

  }

  if ($(window).width() < 576) {
    $("#light-slider").lightSlider({
      controls: false,
      item:1,
      slideMargin: 0,
      speed:800,
      pause: 10000,
      auto:true,
      loop:true,
      pauseOnHover: true,
      pager: false,
      onSliderLoad: function() {
          $('#image-gallery').removeClass('cS-hidden');
      }       
    });    
  }

  else{
    $("#light-slider").lightSlider({
      item:1,
      controls: true,
      slideMargin: 0,
      speed:800,
      pause: 10000,
      auto:false,
      loop:true,
      pauseOnHover: true,
      pager: false,
      onSliderLoad: function() {
          $('#image-gallery').removeClass('cS-hidden');
      }       
    });
  }

});


$('body').bind('touchmove', function(e){e.preventDefault()});

$('body').unbind('touchmove');

$(window).resize(function(){

	let height = $('.gallery-item-image img').height();
	console.log(height);
	
	$('.gallery-item-image').css("height", height);

  if (($('body').width() < 768 ) && ( !($('body').hasClass('stop-scrolling')) )  ) {
    $('.top-bar').removeClass('rotated-right');
    $('.middle-bar').removeClass('toggled');
    $('.bottom-bar').removeClass('rotated-left');
  }

  if($('body').width() < 768 ){
    $('.top-menu').addClass('not-visible');
  }

    if($('body').width() > 768 ){
    $('.top-menu').removeClass('not-visible');
  }

    if (($('body').width() < 768) && (!($('.hamb-container').hasClass('hamb-visible'))) ) {
      $('.hamb-container').addClass('hamb-visible')
    } 

    if ( ($('body').hasClass('stop-scrolling')) && ($('body').width() > 768) ){
      $('.top-menu').toggleClass('not-visible')
    }   

    if ( ($('body').width() > 768) && ($('.hamb-container').hasClass('hamb-visible'))) {
      $('.hamb-container').removeClass('hamb-visible')
    }

    if ( ($('.body').width() > 768) && ($('.hamb-container').hasClass('hamb-visible'))) {
      $('.hamb-container').removeClass('hamb-visible')
    }

    if ( ($('body').hasClass('stop-scrolling')) && ($('body').width() > 768) && (!($('.hamb-container').hasClass('hamb-visible')))) {
      $('.hamb-container').addClass('hamb-visible')
    } 
})

