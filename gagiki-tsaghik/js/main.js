const image = document.getElementById('love-image');
let imageCount = 1;

setTimeout(function() {
  setInterval(function() {
    if (imageCount === 1) {
      image.setAttribute('src', './images/es-u-du-third.jpg');
      imageCount++;
    } else if (imageCount === 2) {
      image.setAttribute('src', './images/es-u-du-second.jpg');
      imageCount++;
    } else if (imageCount === 3) {
      image.setAttribute('src', './images/es-u-du-first.jpg');
      imageCount = 1;
    }
  }, 10000);
}, 15000);
