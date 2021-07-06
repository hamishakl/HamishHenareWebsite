console.clear();

var textPath = document.querySelector('#text-path');

var textContainer = document.querySelector('#text-container');

var path = document.querySelector( textPath.getAttribute('href') );

var pathLength = path.getTotalLength();

function updateTextPathOffset(offset){
  textPath.setAttribute('startOffset', offset); 
}



function onScroll(){
  requestAnimationFrame(function(){
    var rect = textContainer.getBoundingClientRect();
    var scrollPercent = rect.y / window.innerHeight /5;
    updateTextPathOffset( window.scrollY/scrollPercent);
  });
}

window.addEventListener('scroll',onScroll);