$(document).ready(function(){

var vid = document.getElementById("bgvid");
console.log(vid);
var pauseButton = document.querySelector("#polina button");

if (window.matchMedia('(prefers-reduced-motion)').matches) {
    vid.removeAttribute("autoplay");
    vid.pause();
    pauseButton.innerHTML = "Paused";
}

function vidFade() {
  vid.classList.add("stopfade");
}

  vid.addEventListener('ended', function()
  {
  // only functional if "loop" is removed 
  vid.pause();
  // to capture IE10
  vidFade();
  }); 


pauseButton.addEventListener("click", function() {
  vid.classList.toggle("stopfade");
  if (vid.paused) {
    vid.play();
    pauseButton.innerHTML = "<i class='fa fa-pause' aria-hidden='true'></i>";
  } else {
    vid.pause();
    pauseButton.innerHTML = "<i class='fa fa-play' aria-hidden='true'></i>";
  }
})

});
