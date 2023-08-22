$(document).ready(function() {
  $('.open').click(function() {
    $('#modal').css({
      "display": "flex"
    });
  });

  $('.close').click(function () {
    $('#modal').css({
      "display": "none"
    });
  });
});
