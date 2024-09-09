$(document).ready(function() {
    $('a[href^="#"]').on('click', function(event) {
        var target = $(this.getAttribute('href'));
        if( target.length ) {
            event.preventDefault();
            $('html, body').stop().animate({
                scrollTop: target.offset().top - 100
            }, 1000);
        }
    });

    $(window).scroll(function() {
        if ($(this).scrollTop() > 50) {
            $('header').css('background-color', 'rgba(255, 255, 255, 0.95)');
        } else {
            $('header').css('background-color', 'rgba(255, 255, 255, 0.7)');
        }
    });

    $('.testimonial-slider').slick({
        dots: true,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear',
        autoplay: true,
        autoplaySpeed: 5000
    });

    $(window).scroll(function() {
        $('.service-item').each(function() {
            var bottom_of_object = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            if (bottom_of_window > bottom_of_object) {
                $(this).animate({'opacity':'1', 'margin-top':'0px'}, 500);
            }
        });
    });
});