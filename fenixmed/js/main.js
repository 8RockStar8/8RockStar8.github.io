$(document).ready(function() {
  // open modal
  $('.get-analize-btn').on('click', function(e) {
    e.preventDefault();
    $('.modal-place-fix').css({
      'display': 'flex'
    });
  });
  // open modal


  // close modal
  $('.modal-place-fix').on('click', function() {
    $(this).css({
      'display': 'none'
    });
  });
  $('.modal-close-btn').on('click', function() {
    $('.modal-place-fix').css({
      'display': 'none'
    });
  });
  // close modal


  // stop close modal
  $('.modal-place-center').on('click', function(e) {
    e.stopPropagation();
  });
  // stop close modal
});
