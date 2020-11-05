$(window).scroll(function(){
    if ($(window).scrollTop() > 400) {
        $('.sample').addClass('free-sample');
    }
    else {
        $('.sample').removeClass('free-sample');
    }
});