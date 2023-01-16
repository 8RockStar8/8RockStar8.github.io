$(document).ready(function(){    
    let content = 'Peaky Blinders, Peaky Blinders, Peaky Blinders, Peaky Blinders, Peaky Blinders...';

    let ele = '<span>' + content.split('').join('</span><span>') + '</span>';

    setTimeout(function() {
        $(ele).hide().appendTo('p').each(function (i) {
            $(this).delay(100 * i).css({
                display: 'inline',
                opacity: 0
            }).animate({
                opacity: 1
            }, 200, function() {
                if (i + 1 === content.length) {
                    $('.offer-text').addClass('offer-animation');
                }
            });
        });
    }, 2200);
});
