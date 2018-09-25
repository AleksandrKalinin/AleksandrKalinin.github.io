jQuery(function($) {

/* Alicia's Code */
  var stickyNavTop = $('.navHeader').offset().top;

  var stickyNav = function(){
  var scrollTop = $(window).scrollTop();

  if (scrollTop > stickyNavTop) {
      $('.navHeader').addClass('sticky');
  } else {
      $('.navHeader').removeClass('sticky');
  }
  };

  stickyNav();

  $(window).scroll(function() {
      stickyNav();
  });
/* //Alicia's Code */

  function closeBurger() {
    $(".menu").slideToggle("slow", function() {
      $(".hamburger").show();
    });
  };

  $(".menu").hide();
  $(".hamburger").click(function() {
    $(".menu").slideToggle("slow", function() {
      $(".hamburger").show();
    });
  });

 $('#btnHome').click(function(e) {
   e.preventDefault();
   $('html, body').animate({
     scrollTop: $('#destHome').offset().top
   }, 500)
   closeBurger();
 });

 $('#btnServices').click(function(e) {
   e.preventDefault();
   $('html, body').animate({
     scrollTop: $('#destServices').offset().top
   }, 500)
   closeBurger();
 });

 $('#btnPortfolio').click(function(e) {
   e.preventDefault();
   $('html, body').animate({
     scrollTop: $('#destPortfolio').offset().top
   }, 500)
   closeBurger();
 });

 $('#btnTeam').click(function(e) {
   e.preventDefault();
   $('html, body').animate({
     scrollTop: $('#destTeam').offset().top
   }, 500)
   closeBurger();
 });

 $('#btnFacts').click(function(e) {
   e.preventDefault();
   $('html, body').animate({
     scrollTop: $('#destFacts').offset().top
   }, 500)
   closeBurger();
 });

 $('#btnBlog').click(function(e) {
   e.preventDefault();
   $('html, body').animate({
     scrollTop: $('#destBlog').offset().top
   }, 500)
   closeBurger();
 });

 $('#btnContact').click(function(e) {
   e.preventDefault();
   $('html, body').animate({
     scrollTop: $('#destContact').offset().top
   }, 500)
   closeBurger();
 });


});
