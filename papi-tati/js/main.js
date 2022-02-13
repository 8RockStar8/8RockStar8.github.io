$(document).ready(function() {
  const elements = document.querySelectorAll('.animation-elem');
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
