$(document).ready(function() {
  const audio = document.getElementById('myMusic');
  const elements = document.querySelectorAll('.animation-elem');

  $('.play-btn').click(function() {
    $(this).css({
      'width': '0px',
      'height': '0px'
    });
    audio.play();

    let upDown = true;
    let elemId = 0;

    setInterval(function() {
      if (upDown === true) {
        $(elements[elemId]).css({
          'clip-path': 'circle(100% at center)',
        });
        elemId++;
        if (elemId === 54) {
          upDown = false;
        }
      } else {
        elemId--;
        $(elements[elemId]).css({
          'clip-path': 'circle(0% at center)',
        });
        if (elemId === 0) {
          upDown = true;
        }
      }
    }, 8000);
  });
});
