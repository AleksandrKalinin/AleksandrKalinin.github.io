var sandwichIcon = document.getElementById('sandwichIcon');
var topBar = document.getElementById('topBar');
var middleBar = document.getElementById('middleBar');
var bottomBar = document.getElementById('bottomBar');
var overlay = document.getElementById('overlay');
sandwichIcon.addEventListener('click', function(){
  overlay.classList.toggle('overlay_open');
  topBar.classList.toggle('rotated');
  middleBar.classList.toggle('rotated');
  bottomBar.classList.toggle('rotated');
});

var observer = new IntersectionObserver(function(entries){
  entries.forEach(function(entry){
    if (entry.isIntersecting) {
      entry.target.classList.add('animate__fadeIn');
    }    
  })
})

var blogItems = document.querySelectorAll('.blog-item');
var productItems = document.querySelectorAll('.products-card');
var homeDescription = document.querySelectorAll('.home-description');

blogItems.forEach(function(blogItem){
  observer.observe(blogItem)
});


productItems.forEach(function(productItem){
  observer.observe(productItem)
});

homeDescription.forEach(function(homeDescription){
  observer.observe(homeDescription)
});

$(document).ready(function() {
    $('.popup-link').magnificPopup({ 
        type: 'image',
        gallery:{enabled:true},
        type: 'image',
        image: {
            titleSrc: 'title' 
            // this tells the script which attribute has your caption
        }
    });
});