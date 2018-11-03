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

 $('#btnTop').click(function(e) {
   e.preventDefault();
   $('html, body').animate({
     scrollTop: $('#destTop').offset().top
   }, 300)
   closeBurger();
 });

 $('#btnAbout').click(function(e) {
   e.preventDefault();
   $('html, body').animate({
     scrollTop: $('#destAbout').offset().top
   }, 300)
   closeBurger();
 });

/*
 $('#btnHeaderServices').click(function(e) {
   e.preventDefault();
   $('html, body').animate({
     scrollTop: $('#destServices').offset().top
   }, 500)
 });

 $('#btnVideo').click(function(e) {
   e.preventDefault();
   $('html, body').animate({
     scrollTop: $('#destVideo').offset().top
   }, 500)
   closeBurger();
 });
*/
 $('#btnServices').click(function(e) {
   e.preventDefault();
   $('html, body').animate({
     scrollTop: $('#destServices').offset().top
   }, 300)
   closeBurger();
 });

 $('#btnTeam').click(function(e) {
   e.preventDefault();
   $('html, body').animate({
     scrollTop: $('#destTeam').offset().top
   }, 300)
   closeBurger();
 });

 $('#btnPortfolio').click(function(e) {
   e.preventDefault();
   $('html, body').animate({
     scrollTop: $('#destPortfolio').offset().top
   }, 300)
   closeBurger();
 });

 $('#btnPricing').click(function(e) {
   e.preventDefault();
   $('html, body').animate({
     scrollTop: $('#destPricing').offset().top
   }, 300)
   closeBurger();
 });

 $('#btnBlog').click(function(e) {
   e.preventDefault();
   $('html, body').animate({
     scrollTop: $('#destBlog').offset().top
   }, 300)
   closeBurger();
 });

 $('#btnTestimonials').click(function(e) {
   e.preventDefault();
   $('html, body').animate({
     scrollTop: $('#destTestimonials').offset().top
   }, 300)
   closeBurger();
 });

 $('#btnClients').click(function(e) {
   e.preventDefault();
   $('html, body').animate({
     scrollTop: $('#destClients').offset().top
   }, 300)
   closeBurger();
 });

 $('#btnContact').click(function(e) {
   e.preventDefault();
   $('html, body').animate({
     scrollTop: $('#destContact').offset().top
   }, 300)
   closeBurger();
 });


});
