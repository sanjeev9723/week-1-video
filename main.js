var VideoElem = document.getElementById("video1"); 

function playPause() { 
  if (VideoElem.paused) 
    VideoElem.play(); 
  else 
    VideoElem.pause(); 
} 
 function stop() {
   
    VideoElem.pause(); 
    VideoElem.currentTime() = 0;


 

}
