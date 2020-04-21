$(function(){

    $('.header__slider').slick({
        infinite: true,
        fade: true,
        nextArrow: '<img class="slider__arrows slider__arrows-right" src="images/arrow-right.svg" alt=""></img>',
        prevArrow: '<img class="slider__arrows slider__arrows-left" src="images/arrow-left.svg" alt="">',
        asNavFor: '.slider__dotshead'
    });

    $('.slider__dotshead').slick({
        slidesToShow: 4,
        slidesToScroll: 4,
        asNavFor: '.header__slider',
        responsive: [
            {
                breakpoint: 1210,
                settings: {
                    slidesToShow: 3,
                }
            }
        ]
    });

    $('.surf-slider').slick({ //+
        slidesToShow: 4,
        slidesToScroll: 1,
        nextArrow: '<img class="slider__arrows slider__arrows-right" src="images/arrow-right.svg" alt=""></img>',
        prevArrow: '<img class="slider__arrows slider__arrows-left" src="images/arrow-left.svg" alt="">',
        asNavFor: '.slider-map',
        responsive: [
            {
                breakpoint: 1210,
                settings: {
                    slidesToShow: 3,
                }
            },
              {
                breakpoint: 900,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 720,
                settings: {
                    slidesToShow: 1,
                    centerMode: true,
                }
            },
            {
                breakpoint: 426,
                settings: {
                    slidesToShow: 1,
                    centerMode: false,
                }
            }
        ]
    });

    $('.slider-map').slick({ //+
        slidesToShow: 8,
        slidesToScroll: 1,
        arrows: false,
        asNavFor: '.surf-slider',
        focusOnSelect: true,
        responsive: [
            {
                breakpoint: 1103,
                settings: {
                    slidesToShow: 3,
                }
            },
             {
                breakpoint: 900,
                settings: {
                    slidesToShow: 2,
                    centerMode: true,
                }
            },
            {
                breakpoint: 720,
                settings: {
                    slidesToShow: 1,
                    centerMode: true,
                }
            },
        ]
    });

    $('.holder__slider, .shop__slider').slick({
        infinite: true,
        fade: true,
        nextArrow: '<img class="slider__arrows slider__arrows-right" src="images/arrow-right.svg" alt=""></img>',
        prevArrow: '<img class="slider__arrows slider__arrows-left" src="images/arrow-left.svg" alt="">',
    });

    $('<div class="quantity-nav"><div class="quantity-button quantity-up"><img src="images/plus.svg" alt=""></div><div class="quantity-button quantity-down"><img src="images/minus.svg" alt=""></div></div>').insertAfter('.quantity input');
    $('.quantity').each(function () {
        var spinner = $(this),
            input = spinner.find('input[type="number"]'),
            btnUp = spinner.find('.quantity-up'),
            btnDown = spinner.find('.quantity-down'),
            min = input.attr('min'),
            max = input.attr('max');

        btnUp.click(function () {
            var oldValue = parseFloat(input.val());
            if (oldValue >= max) {
                var newVal = oldValue;
            } else {
                var newVal = oldValue + 1;
            }
            spinner.find("input").val(newVal);
            spinner.find("input").trigger("change");
        });

        btnDown.click(function () {
            var oldValue = parseFloat(input.val());
            if (oldValue <= min) {
                var newVal = oldValue;
            } else {
                var newVal = oldValue - 1;
            }
            spinner.find("input").val(newVal);
            spinner.find("input").trigger("change");
        });

    });

    // let summ = $('.nights').val() * $('.summ').data('.nights') + ($('.guests').val() - 1) * $('.summ').data('.guests');

    $('.quantity-button').on('click', function(){
        let summ = ($('.guests').val() * $('.summ').data('nights')) * $('.nights').val();
        $('.summ').html('$' + summ);
    });

    let summ = ($('.guests').val() * $('.summ').data('nights')) * $('.nights').val();
    $('.summ').html('$' + summ);

    $('.surfboard-box__circle').on('click', function(){
        $(this).toggleClass('active')
    });

    //----------------------------------------------menu-----------------------------------------------

    $(".menu-btn").click(function () {
        $(".overlay").fadeToggle(200);
        $(this).toggleClass('btn-open').toggleClass('btn-close');
    });

    $('.overlay').on('click', function () {
        $(".menu-btn").toggleClass('btn-open').toggleClass('btn-close');
    });

    $('.menu-mobile').on('click', function () {
        $(".overlay").fadeToggle(200);
        $(".menu-btn").toggleClass('btn-open').toggleClass('btn-close');
    });

    new WOW().init();
});