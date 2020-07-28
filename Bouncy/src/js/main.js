$(document).ready(function(){

      $(".intro-section__description").animated("fadeInLeft");

      $(".intro-section__thumbnail").animated("fadeInRight");

      $(".intro-section__thumbnail").animated("fadeIn");

      $(".price-section__item").animated("fadeIn");

      $(".contact-section__item").animated("fadeIn");         

  

  $('body').addClass('loaded')

  $('.sandwich').click(function(){
     if ($('.sandwich').hasClass('sandwich_rotated')) {
        toggleSandwich();
        toggleMenu();
    }
    else {
      toggleSandwich();
      toggleMenu();
    }
  });

   function toggleSandwich(){
        $('.sandwich-bar_top').toggleClass('sandwich-bar_rotated-top');
        $('.sandwich-bar_middle').toggleClass('sandwich-bar_hidden');
        $('.sandwich-bar_bottom').toggleClass('sandwich-bar_rotated-bottom');
        $('.sandwich').toggleClass('sandwich_rotated');    
  };

  function toggleMenu(){
    $('.menu-overlay').toggleClass('menu-overlay_hidden'); 
    $('.menu-overlay').toggleClass('menu-overlay_visible');  
    $('.top-menu__logo').toggleClass('top-menu__logo_hidden');
  };

  $('.menu__item').click(function(){
      console.log("click");
      toggleSandwich();
      toggleMenu();  
  })


})


//progress bars in team-section
var rating1 = document.getElementById("rating-1");
var rating2 = document.getElementById("rating-2");
var rating3 = document.getElementById("rating-3");
var rating4 = document.getElementById("rating-4");
var rating5 = document.getElementById("rating-5");
var rating6 = document.getElementById("rating-6");
var rating7 = document.getElementById("rating-7");
var rating8 = document.getElementById("rating-8");
var rating9 = document.getElementById("rating-9");
var rating10 = document.getElementById("rating-10");
var rating11 = document.getElementById("rating-11");
var rating12 = document.getElementById("rating-12");


function progressStart(value, element){
  var id = setInterval(frame, 10);
  width = 1;
  function frame() {
    if (width >= value) {
      clearInterval(id);
    } else {
      width++; 
     element.style.width = width + '%'; 
    }
  } 
}  

$('portfolio-menu__link').click(function(){
  $('portfolio-menu__link').removeClass('portfolio-menu__link_active');
  $(this).addClass('portfolio-menu__link_active');
})

//pie progress initialising
  $('.pie_progress').asPieProgress({
    namespace: 'pie_progress',
    easing: 'ease'
  });

$.fn.isInViewport = function() {
    var elementTop = $(this).offset().top + ($(window).height() / 2 );
    var elementBottom = elementTop + $(this).outerHeight();

    var viewportTop = $(window).scrollTop();
    var viewportBottom = viewportTop + $(window).height();

    return elementBottom > viewportTop && elementTop < viewportBottom;
};

var scrollCounter = true;
var progressCounter = true;

$(window).on('resize scroll', function() {
    if ( ($('.services-section').isInViewport()) && (scrollCounter)  ) {
      scrollCounter = false;
      $('.pie_progress').asPieProgress('start');
    } 
    else if ( ($('.team-section').isInViewport()) && (progressCounter)  ) {
        progressCounter = false;
        progressStart(75, rating1);
        progressStart(85, rating2);
        progressStart(95, rating3);
        progressStart(90, rating4);
        progressStart(75, rating5);
        progressStart(85, rating6);
        progressStart(95, rating7);
        progressStart(90, rating8);
        progressStart(75, rating9);
        progressStart(85, rating10);
        progressStart(95, rating11);
        progressStart(90, rating12);                          
    }
});

//tabs services
  $('.services-section__button').click(function(){
    $('.pie_progress').asPieProgress('reset');
    $('.pie_progress').asPieProgress('start');
    var tab_id = $(this).attr('data-tab');
    $('.services-section__button').removeClass('services-section__button_active');
    $('.services-section__description').removeClass('services-section__description_active');
    $('.counters-wrapper').removeClass('counters-wrapper_active');
    $(this).addClass('services-section__button_active');
    $("#"+tab_id).addClass('services-section__description_active');
    $("#"+ (Number(tab_id)+4)).addClass('counters-wrapper_active');
  })

//tabs details
  $('.details-section__button').click(function(){
    var tab_id = $(this).attr('data-tab');
    console.log(this);
    $('.details-section__main').removeClass('details-section__main_active');
    $('.details-section__button').removeClass('details-section__button_active');
    $(this).addClass('details-section__button_active');
;
    $("#"+tab_id).addClass('details-section__main_active');
  })


 //carousel
 
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
            nav:false
        },
        600:{
            items:1,
            nav:false
        },
        1000:{
            items:1,
            nav:false,
            loop:false
        }
    }
}) 


//scroll
$("#scrollDown").click(function() {
    $('html, body').animate({
        scrollTop: $(".team-section").offset().top
    }, 1000);
});

$("#connectButton").click(function() {
    $('html, body').animate({
        scrollTop: $(".message-section").offset().top
    }, 1000);
});  

$("#projectsButton").click(function() {
    $('html, body').animate({
        scrollTop: $(".portfolio-section").offset().top
    }, 1000);
});


  ymaps.ready(init);
  function init(){
      var myMap = new ymaps.Map("map", {
          center: [55.76, 37.64],
          zoom: 7
      });
  }

  var containerEl = document.querySelector('.portfolio-section__container'); 
  
  var mixer =  mixitup(containerEl,{
    selectors: {
        control: '[data-mixitup-control]'
    },
    animation: {
      effects: ""
    }
  });  