$(document).ready(function() {
  let debug = $('body').data('debug');
  let prefix;
  if (debug) {
    prefix = '/app_dev.php';
  }
  else {
    prefix = '';
  }


  // detect window width
  let width = $(window).width();
  let height = $(window).height();
  let widthResize = 0;
  $(window).resize(function () {
    widthResize = $(window).width();
  });
  // detect window width



  // check language
  let lang = $('body').data('lang');

  let analizeName = lang === 'ru' ? ' анализов' : lang === 'en' ? ' analysis' : ' անալիզ';
  let analizePlaceholder = lang === 'ru' ? 'Анализов *' : lang === 'en' ? 'Analysis *' : 'Անալիզներ *';

  let allError = lang === 'ru' ? 'Заполните все обязательные поля' : lang === 'en' ? 'Fill all required fields' : 'Լրացրեք բոլոր պարտադիր դաշտերը';
  let nameError = lang === 'ru' ? 'Заполнить поле Имя' : lang === 'en' ? 'Fill Name field' : 'Լրացրեք Անուն դաշտեը';
  let fullNameError = lang === 'ru' ? 'Заполните поле Полное Имя' : lang === 'en' ? 'Fill Fullname field' : 'Լրացրեք Ազգանուն դաշտեը';
  let phoneEmptyError = lang === 'ru' ? 'Заполнить поле телефон' : lang === 'en' ? 'Fill Phone field' : 'Լրացրեք Հեռախոսահամար դաշտեը';
  let phoneError = lang === 'ru' ? 'Неверный телефон' : lang === 'en' ? 'Invalid Phone' : 'Սխալ Հեռախոսահամար';
  let emailEmptyError = lang === 'ru' ? 'Заполните поле электронной почты' : lang === 'en' ? 'Fill Email field' : 'Լրացրեք Էլ.հասցե դաշտեը';
  let emailError = lang === 'ru' ? 'Неверный адрес электронной почты' : lang === 'en' ? 'Invalid Email' : 'Էլ.հասցեն սխալ է';
  let branchError = lang === 'ru' ? 'Выберите поле Филиалы' : lang === 'en' ? 'Choose Branches field' : 'Ընտրեք Մասնաճյուղեր դաշտեը';
  let analizeError = lang === 'ru' ? 'Выберите поле анализы' : lang === 'en' ? 'Choose Analysis field' : 'Ընտրեք Անալիզներ դաշտեը';
  let dateError = lang === 'ru' ? 'Выберите поле Дня' : lang === 'en' ? 'Choose Date field' : 'Ընտրեք Ամիս ամսաթիվ դաշտեը';
  let timeError = lang === 'ru' ? 'Выберите поле Время' : lang === 'en' ? 'Choose Time field' : 'Ընտրեք Ժամ դաշտեը';

  let successText = lang === 'ru' ? 'Регистрация выполнена' : lang === 'en' ? 'Registration completed' : 'Գրանցումն ավարտված է';

  let analizeNumberError = lang === 'ru' ? 'Заполнить поле номер анализа' : lang === 'en' ? 'Fill Analysis number field' : 'Լրացրեք Անալիզի համար դաշտեը';
  let userBirthdayError = lang === 'ru' ? 'Заполнить поле день рождения' : lang === 'en' ? 'Fill Birthday field' : 'Լրացրեք Ծննդյան ամիս ամսաթիվ դաշտեը';
  let selectTypeError = lang === 'ru' ? 'Выберите версию получения Анализа' : lang === 'en' ? 'Choose version get Analysis' : 'Ընտրեք պատասխանը ստանալու տարբերակը';
  // check language



  // open close header menu mobile, burger button
  $('.burger').on('click', function() {
    $(this).toggleClass('active');
    $(this).toggleClass('not-active');

    if ($('.header-menu-mobile').height() === 0) {
      if (height > 450) {
        $('.header-menu-mobile').css({
          'height': '360px'
        });
      } else {
        $('.header-menu-mobile').css({
          'height': '300px'
        });
      }
    } else {
      $('.header-menu-mobile').css({
        'height': '0px'
      });
    }
  });
  // open close header menu mobile, burger button


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



  // check analize from price list when page is load
  if ($('.all-price-item-center')) {
    $('.all-price-item-center').each(function() {
      if ($(this).data('check') === true) {
        $(this).find('.analize-uncheked').css({
          'display': 'none'
        });
        $(this).find('.analize-cheked').css({
          'display': 'block'
        });
      }
    });
  }
  // check analize from price list when page is load

  

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
      if (widthResize > 0) {
        if (widthResize > 560) {
          $('.selected-analize-place').css({
            'right': '-500px'
          });
        } else if (widthResize <= 560 && widthResize > 420) {
          $('.selected-analize-place').css({
            'right': '-360px'
          });
        } else {
          $('.selected-analize-place').css({
            'right': '-270px'
          });
        }
      } else {
        if (width > 560) {
          $('.selected-analize-place').css({
            'right': '-500px'
          });
        } else if (width <= 560 && width > 420) {
          $('.selected-analize-place').css({
            'right': '-360px'
          });
        } else {
          $('.selected-analize-place').css({
            'right': '-270px'
          });
        }
      }
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
    var lang = $('.loc').val();
    var id = $(this).attr('data-id');
    // console.log(lang)
    $.ajax({
      type: "post",
      data: {
        id: id,
      },
      url: prefix + '/' + lang + "/api/delete-analiysys",
      success: function (data) {

        //  $('.product_inner_price').text(data)
      }
    });
  });
  // remove exist analize



  // open / close form analize list
  $('.form-analize-place').on('click', function() {
    if ($(this).data('isopen') === false) {
      $(this).addClass('form-analize-place-arrow-active');
      $('.form-analize-list-abs-place').css({
        'display': 'block'
      });
      $(this).data('isopen', true);
    } else {
      $(this).removeClass('form-analize-place-arrow-active');
      $('.form-analize-list-abs-place').css({
        'display': 'none'
      });
      $(this).data('isopen', false);
    }
  });
  // open / close form analize list



  // stop close form analize list
  $('.form-analize-list-abs-place').on('click', function(e) {
    e.stopPropagation();
  });
  // stop close form analize list



  // select form analize
  if ($('.form-analize-list-item')) {
    var selectAnalizeArray = [];
  }
  $('.form-analize-list-item').on('click', function() {
    if ($(this).data('check') === false) {
      $(this).css({
        'background-color': 'rgba(0, 0, 0, 0.1)'
      });
      $(this).find('.analize-uncheked').css({
        'display': 'none'
      });
      $(this).find('.analize-cheked').css({
        'display': 'block'
      });
      $(this).data('check', true);
      selectAnalizeArray.push($(this).data('analizeId'));
      $('.form-analize-text').text(selectAnalizeArray.length + analizeName);
    } else {
      $(this).css({
        'background-color': 'var(--header-footer-bg-color)'
      });
      $(this).find('.analize-uncheked').css({
        'display': 'block'
      });
      $(this).find('.analize-cheked').css({
        'display': 'none'
      });
      $(this).data('check', false);
      selectAnalizeArray = selectAnalizeArray.filter(item => {
        return item !== $(this).data('analizeId');
      });
      if (selectAnalizeArray.length > 0) {
        $('.form-analize-text').text(selectAnalizeArray.length + analizeName);
      } else {
        $('.form-analize-text').text(analizePlaceholder);
      }
    }
  });
  // select form analize



  // check selected form analize when page is load
  if ($('.form-analize-list-item')) {
    $('.form-analize-list-item').each(function() {
      if ($(this).data('check') === true) {
        $(this).css({
          'background-color': 'rgba(0, 0, 0, 0.1)'
        });
        $(this).find('.analize-uncheked').css({
          'display': 'none'
        });
        $(this).find('.analize-cheked').css({
          'display': 'block'
        });
        selectAnalizeArray.push($(this).data('analizeId'));
        $('.form-analize-text').text(selectAnalizeArray.length + analizeName);
      }
    });
  }
  // check selected form analize when page is load



  // remove error border, clear error text, with typing
  $('.register-input').on('keypress keydown keyup', function() {
    $(this).css({
      'border': '2px solid var(--green-block-border-decor)'
    });
    $('.form-error-message').text('');
  });
  $('.select-items').on('click', function() {
    $('.select-selected').css({
      'border': '2px solid var(--green-block-border-decor)'
    });
    $('.form-error-message').text('');
  });
  $('.form-analize-list-item').on('click', function() {
    $('.form-analize-place').css({
      'border': '2px solid var(--green-block-border-decor)'
    });
    $('.form-error-message').text('');
  });
  $('#datepicker').on('change', function() {
    $('.ui-datepicker-trigger').css({
      'border': '2px solid var(--green-block-border-decor)'
    });
    $('.form-error-message').text('');
  });
  $('#timepicker').on('change', function() {
    $('.input-btn').css({
      'border': '2px solid var(--green-block-border-decor)'
    });
    $('.form-error-message').text('');
  });
  $('.short-input').on('change', function() {
    $(this).css({
      'border': '2px solid var(--green-block-border-decor)'
    });
    $('.form-error-message').text('');
  });
  // remove error border, clear error text, with typing



  // email validation with regex
  function validateEmail(email) {
    let regexEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regexEmail.test(String(email).toLowerCase());
  }
  // email validation with regex



  // phone validation with regex
  function validatePhone(phone) {
      var reg = /^(0)((33)|4(1|3|4|9)|(55)|(77)|(9([1|3-6]|[8-9])))[\-]?[0-9]{2}[\-]?[0-9]{2}[\-]?[0-9]{2}$/;
      return reg.test(String(phone).toLowerCase());
  }
  // phone validation with regex



  // send form data to backend
  $('.form-btn').on('click', function() {
    let name = $('#name').val();
    let fullName = $('#fullname').val();
    let phone = $('#phone').val();
    let email = $('#email').val();
    let branch = $('#branch').val();
    let analizes = selectAnalizeArray;
    let datepicker = $('#datepicker').val();
    let timepicker = $('#timepicker').val();
    let message = $('#message').val();

    if (analizes === undefined) {
      if (name === '' && fullName === '' && phone === '' && email === '' && branch === '0' && datepicker === '' && timepicker === '') {
        $('.form-error-message').text(allError);
        $('.register-input').css({
          'border': '2px solid var(--error-red)'
        });
        $('.select-selected').css({
          'border': '2px solid var(--error-red)'
        });
        $('.ui-datepicker-trigger').css({
          'border': '2px solid var(--error-red)'
        });
        $('.input-btn').css({
          'border': '2px solid var(--error-red)'
        });
        return;
      }
    } else {
      if (name === '' && fullName === '' && phone === '' && email === '' && branch === '0' && analizes.length <= 0 && datepicker === '' && timepicker === '') {
        $('.form-error-message').text(allError);
        $('.register-input').css({
          'border': '2px solid var(--error-red)'
        });
        $('.select-selected').css({
          'border': '2px solid var(--error-red)'
        });
        $('.form-analize-place').css({
          'border': '2px solid var(--error-red)'
        });
        $('.ui-datepicker-trigger').css({
          'border': '2px solid var(--error-red)'
        });
        $('.input-btn').css({
          'border': '2px solid var(--error-red)'
        });
        return;
      }
    }

    if (name === '') {
      $('.form-error-message').text(nameError);
      $('#name').css({
        'border': '2px solid var(--error-red)'
      });
      return;
    }

    if (fullName === '') {
      $('.form-error-message').text(fullNameError);
      $('#fullname').css({
        'border': '2px solid var(--error-red)'
      });
      return;
    }

    if (phone === '') {
      $('.form-error-message').text(phoneEmptyError);
      $('#phone').css({
        'border': '2px solid var(--error-red)'
      });
      return;
    }

    if (!validatePhone(phone)) {
      $('.form-error-message').text(phoneError);
      $('#phone').css({
        'border': '2px solid var(--error-red)'
      });
      return;
    }

    if (email === '') {
      $('.form-error-message').text(emailEmptyError);
      $('#email').css({
        'border': '2px solid var(--error-red)'
      });
      return;
    }

    if (!validateEmail(email)) {
      $('.form-error-message').text(emailError);
      $('#email').css({
        'border': '2px solid var(--error-red)'
      });
      return;
    }

    if (branch === '0') {
      $('.form-error-message').text(branchError);
      $('.select-selected').css({
        'border': '2px solid var(--error-red)'
      });
      return;
    }

    if (analizes.length <= 0) {
      $('.form-error-message').text(analizeError);
      $('.form-analize-place').css({
        'border': '2px solid var(--error-red)'
      });
      return;
    }

    if (datepicker === '') {
      $('.form-error-message').text(dateError);
      $('#datepicker').css({
        'border': '2px solid var(--error-red)'
      });
      $('.ui-datepicker-trigger').css({
        'border': '2px solid var(--error-red)'
      });
      return;
    }

    if (timepicker === '') {
      $('.form-error-message').text(timeError);
      $('#timepicker').css({
        'border': '2px solid var(--error-red)'
      });
      $('.input-btn').css({
        'border': '2px solid var(--error-red)'
      });
      return;
    }
    
    $.ajax({
      method: 'POST',
      url: 'api url',
      data: {
        name,
        fullName,
        phone,
        email,
        branch,
        analizes,
        datepicker,
        timepicker,
        message
      },
      success: function() {
        $('#name').val('');
        $('#fullname').val('');
        $('#phone').val('');
        $('#email').val('');
        $('#branch').val('0');
        selectAnalizeArray = [];
        $('#datepicker').val('');
        $('#timepicker').val('');
        $('#message').val('');
        
        $('.register-input').css({
          'border': '2px solid var(--green-block-border-decor)'
        });
        $('.select-selected').css({
          'border': '2px solid var(--green-block-border-decor)'
        });
        $('.form-analize-place').css({
          'border': '2px solid var(--green-block-border-decor)'
        });
        $('.ui-datepicker-trigger').css({
          'border': '2px solid var(--green-block-border-decor)'
        });
        $('.input-btn').css({
          'border': '2px solid var(--green-block-border-decor)'
        });
        $('.short-input').css({
          'border': '2px solid var(--green-block-border-decor)'
        });

        $('.form-success-message').text(successText);
        setTimeout(function() {
          $('.form-success-message').text('');
        }, 3000);
      },
      error: function(res) {
        $('.form-error-message').text(res);
        setTimeout(function() {
          $('.form-error-message').text('');
        }, 3000);
      }
    });
  });
  // send form data to backend



  // get analize result
  $('.modal-get-result-btn').on('click', function() {
    let analizeNumber = $('#analiz-number').val();
    let userBirthday = $('#birthday').val();
    let userFullName = $('#analiz-fullname').val();

    if (analizeNumber === '' && userBirthday === '' && userFullName === '') {
      $('.modal-input').css({
        'border': '1px solid var(--error-red)'
      });
      $('.error-text').text(allError);
      return;
    }

    if (analizeNumber === '') {
      $('#analiz-number').css({
        'border': '1px solid var(--error-red)'
      });
      $('.error-text').text(analizeNumberError);
      return;
    }

    if (userBirthday === '') {
      $('#birthday').css({
        'border': '1px solid var(--error-red)'
      });
      $('.error-text').text(userBirthdayError);
      return;
    }

    if (userFullName === '') {
      $('#analiz-fullname').css({
        'border': '1px solid var(--error-red)'
      });
      $('.error-text').text(fullNameError);
      return;
    }

    if (!$('input[name="getAnalize"]').is(':checked')) {
      $('.error-text').text(selectTypeError);
      return;
    }

    $.ajax({
      method: 'POST',
      url: 'api url',
      data: {
        analizeNumber,
        userBirthday,
        userFullName
      },
      success: function(res) {
        $('.success-text').text(res.text);
        setTimeout(function() {
          $('.success-text').text('');
        }, 3000);
      },
      error: function(res) {
        $('.error-text').text(res.text);
        setTimeout(function() {
          $('.error-text').text('');
        }, 3000);
      }
    });
  });
  // get analize result



  // remove error border from modal inputs, radio check
  $('.modal-input').on('keypress keydown keyup', function() {
    $(this).css({
      'border': 'none'
    });
    $('.error-text').text('');
  });
  $('input[name="getAnalize"]').on('click', function() {
    $('.error-text').text('');
  });
  // remove error border from modal inputs, radio check
});
