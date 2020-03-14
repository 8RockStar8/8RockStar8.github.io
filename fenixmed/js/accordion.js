$(document).ready(function() {
  // open close accordion
  $('.branches-accordion-item').on('click', function() {
    if ($(this).css('height') === '400px') {
      $(this).css({
        'height': '100px',
        'background-color': 'rgba(0, 0, 0, 0.5)'
      });
      $(this).children('.branches-accordion-info-place').css({
        'z-index': '-3'
      });
    } else {
      $('.branches-accordion-item').css({
        'height': '100px',
        'background-color': 'rgba(0, 0, 0, 0.5)'
      });
      $('.branches-accordion-info-place').css({
        'z-index': '-3'
      });
      $(this).css({
        'height': '400px',
        'background-color': 'rgba(0, 0, 0, 0)'
      });
      $(this).children('.branches-accordion-info-place').css({
        'z-index': '0'
      });
    }
  });

  $('.branch-soc-link').on('click', function(e) {
    e.stopPropagation();
  });
  // open close accordion
});
