$(document).ready(function(){

$('#lightSlider').lightSlider({
    gallery: true,
    slideMargin: 10,
    item: 1,
    loop: true,
    slideMargin: 0,
    thumbItem: 4,
    controls: true,
    auto: true,
    speed: 400,
    cssEasing: 'ease',
    easing: 'cubic-bezier(0.25, 0, 0.25, 1)',
    prevHtml: '',
    nextHtml: '',
    slideEndAnimation: true,
    pause: 5000,
    onSliderLoad: function(el) {
        el.lightGallery({
            selector: '#lightSlider .lslide'
        });
    }      
    
});    

   	
})
