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

  

  // check analize from price list
  $('.all-price-item-center').on('click', function() {
    if ($(this).data('check') === false) {
      $(this).find('.analize-uncheked').css({
        'display': 'none'
      });
      $(this).find('.analize-cheked').css({
        'display': 'block'
      });
      $(this).data('check', true);
    } else {
      $(this).find('.analize-uncheked').css({
        'display': 'block'
      });
      $(this).find('.analize-cheked').css({
        'display': 'none'
      });
      $(this).data('check', false);
    }
  });
  // check analize from price list
});
