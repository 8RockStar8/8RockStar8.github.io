$(document).ready(function() {
  // detect window width
  let width = $(window).width();
  // detect window width



  // open close accordion
  $('.branches-accordion-item').on('click', function () {
    if (width > 1280) {
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
    } else if (width <= 1280 && width > 700) {
      if ($(this).css('height') === '250px') {
        $(this).css({
          'height': '70px',
          'background-color': 'rgba(0, 0, 0, 0.5)'
        });
        $(this).children('.branches-accordion-info-place').css({
          'z-index': '-3'
        });
      } else {
        $('.branches-accordion-item').css({
          'height': '70px',
          'background-color': 'rgba(0, 0, 0, 0.5)'
        });
        $('.branches-accordion-info-place').css({
          'z-index': '-3'
        });
        $(this).css({
          'height': '250px',
          'background-color': 'rgba(0, 0, 0, 0)'
        });
        $(this).children('.branches-accordion-info-place').css({
          'z-index': '0'
        });
      }
    } else {
      if ($(this).css('height') === '170px') {
        $(this).css({
          'height': '50px',
          'background-color': 'rgba(0, 0, 0, 0.5)'
        });
        $(this).children('.branches-accordion-info-place').css({
          'z-index': '-3'
        });
      } else {
        $('.branches-accordion-item').css({
          'height': '50px',
          'background-color': 'rgba(0, 0, 0, 0.5)'
        });
        $('.branches-accordion-info-place').css({
          'z-index': '-3'
        });
        $(this).css({
          'height': '170px',
          'background-color': 'rgba(0, 0, 0, 0)'
        });
        $(this).children('.branches-accordion-info-place').css({
          'z-index': '0'
        });
      }
    }

    
  });

  $('.branch-soc-link').on('click', function(e) {
    e.stopPropagation();
  });
  // open close accordion
});
