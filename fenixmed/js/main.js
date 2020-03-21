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

  

  // check / uncheck analize from price list
  $('.all-price-item-center').on('click', function() {
    if ($(this).data('check') === false) {
      $(this).find('.analize-uncheked').css({
        'display': 'none'
      });
      $(this).find('.analize-cheked').css({
        'display': 'block'
      });
      $(this).data('check', true);
      // TODO: AJAX request
    } else {
      $(this).find('.analize-uncheked').css({
        'display': 'block'
      });
      $(this).find('.analize-cheked').css({
        'display': 'none'
      });
      $(this).data('check', false);
      // TODO: AJAX request
    }
  });
  // check / uncheck  analize from price list



  // open / close selected analize place
  $('.open-selected-analize-btn').on('click', function() {
    if ($(this).data('open') === false) {
      $('.selected-analize-place').css({
        'right': '0px'
      });
      $('.open-analize-img').css({
        'transform': 'rotate(0deg)'
      });
      $(this).data('open', true);
    } else {
      $('.selected-analize-place').css({
        'right': '-500px'
      });
      $('.open-analize-img').css({
        'transform': 'rotate(180deg)'
      });
      $(this).data('open', false);
    }
  });
  // open / close selected analize place



  // check if analize exist
  let analize = $('.selected-analize-item');
  let analizeExistPrice = 0;
  let analizePriceText = 'Ընդհամենը՝ ';
  let analizePriceCurency = 'դր.';
  let mustCheckAnalize = 'Ընտրեք անալիզ';
  if (analize && analize.length !== 0) {
    analize.each(function(index, item) {
      let singleAnalize = item;
      analizeExistPrice += +$(singleAnalize)[0].dataset.price;
    });
    $('.selected-analize-info-place').css({
      'margin-top': '40px'
    });
    $('.link-from-selected-analize-list').css({
      'display': 'inline-block'
    });
    $('.selected-analize-all-price').text(analizePriceText + analizeExistPrice + analizePriceCurency);
  } else {
    $('.selected-analize-all-price').text(mustCheckAnalize);
    $('.selected-analize-info-place').css({
      'margin-top': '0px'
    });
    $('.link-from-selected-analize-list').css({
      'display': 'none'
    });
  }
  // check if analize exist



  // remove exist analize
  $('.remove-analize-btn').on('click', function() {
    $(this).parent().parent().remove();
    let analize = $('.selected-analize-item');
    let analizeExistPrice = 0;
    if (analize && analize.length !== 0) {
      analize.each(function(index, item) {
        let singleAnalize = item;
        analizeExistPrice += +$(singleAnalize)[0].dataset.price;
      });
      $('.selected-analize-info-place').css({
        'margin-top': '40px'
      });
      $('.link-from-selected-analize-list').css({
        'display': 'inline-block'
      });
      $('.selected-analize-all-price').text(analizePriceText + analizeExistPrice + analizePriceCurency);
    } else {
      $('.selected-analize-all-price').text(mustCheckAnalize);
      $('.selected-analize-info-place').css({
        'margin-top': '0px'
      });
      $('.link-from-selected-analize-list').css({
        'display': 'none'
      });
    }
    // TODO: AJAX request
  });
  // remove exist analize
});
