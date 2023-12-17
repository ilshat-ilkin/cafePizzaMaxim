
// ПРОКРУТКА ВНИЗ К КАРТЕ ПРИ НАЖАТИИ НА АДРЕСС

jQuery(document).ready(function ($) {
    $(".header__address").click(function () { // ID откуда кликаем
        $('html, body').animate({
            scrollTop: $(".main-secondList__img4").offset().top // класс объекта к которому приезжаем
        }, 2000); // Скорость прокрутки
    });
});

// ПРОКРУТКА ВНИЗ К ОБЛАСТЯМ ПРИ НАЖАТИИ НА КНОПКИ В HEADER-BOTTOM

jQuery(document).ready(function ($) {
    $(".menu_item1").click(function () { // ID откуда кликаем
        $('html, body').animate({
            scrollTop: $(".main-secondList__img1").offset().top // класс объекта к которому приезжаем
        }, 1000); // Скорость прокрутки
    });
});

jQuery(document).ready(function ($) {
    $(".menu_item2").click(function () { // ID откуда кликаем
        $('html, body').animate({
            scrollTop: $(".main-secondList__img2").offset().top // класс объекта к которому приезжаем
        }, 1000); // Скорость прокрутки
    });
});

jQuery(document).ready(function ($) {
    $(".menu_item3").click(function () { // ID откуда кликаем
        $('html, body').animate({
            scrollTop: $(".main-secondList__img3").offset().top // класс объекта к которому приезжаем
        }, 1000); // Скорость прокрутки
    });
});

jQuery(document).ready(function ($) {
    $(".menu_item4").click(function () { // ID откуда кликаем
        $('html, body').animate({
            scrollTop: $(".main-secondList__img4").offset().top // класс объекта к которому приезжаем
        }, 1000); // Скорость прокрутки
    });
});


// КНОПКА НАВЕРХ

$(function () {
    $(window).scroll(function () {
        if ($(window).scrollTop() > 120) {
            $('#scroll_top').show();
        } else {
            $('#scroll_top').hide();
        }
    });

    $('#scroll_top').click(function () {
        $('html, body').animate({ scrollTop: 0 }, 2000);
        return false;
    });
});


// КАРУСЕЛЬ ОБО МНЕ

var slideNow = 1; // текущий слайд ( по умолчанию первый слайд) или номер слайда в текущий момент
var slideCount = $('#slidewrapper').children().length; // количество слайдов
var slideInterval = 1000; // время вызова функции
var navBtnId = 0;
var translateWidth = 0; // расстояние на которое смещается наша полоса со слайдами
var currentColor = 1;

$(document).ready(function () {
    var switchInterval = setInterval(nextSlide, slideInterval); // вызов функции nextSlide с интервалом slideInterval и помещаем это во встроенную функцию setInterval, которую в свою очередь присваиваем переменной
    $('#viewport').hover(function () {
        clearInterval(switchInterval);
    }, function () {
        switchInterval = setInterval(nextSlide, slideInterval);
    });

    // Подсветка навигационных кнопок при переключении слайдов в блоке ОБО МНЕ
    $(document).ready(function () {
        if (currentColor == 1) {
            $(".slide-nav-btn").css({
                "background-color": "#ffeaee"
            })
            $(".btn1").css({
                "background-color": "#1a1f3d",
                "border-color": "#ffeaee",
            }

            )
        }

    });

    $('.slide-nav-btn').click(function () {
        navBtnId = $(this).index();

        currentColor = $(this).index() + 1
        if (currentColor == 1) {
            $(".slide-nav-btn").css({
                "background-color": "#ffeaee"
            })
            $(".btn1").css({
                "background-color": "#1a1f3d",
            }

            )
        }

        if (currentColor == 2) {
            $(".slide-nav-btn").css({
                "background-color": "#ffeaee"
            })
            $(".btn2").css({
                "background-color": "#1a1f3d",
                "border-color": "#ffeaee",
            }

            )
        }

        if (currentColor == 3) {
            $(".slide-nav-btn").css({
                "background-color": "#ffeaee"
            })
            $(".btn3").css({
                "background-color": "#1a1f3d",
                // "border-color":"#ffeaee",
            }

            )
        }

        if (navBtnId + 1 != slideNow) {
            translateWidth = -$('#viewport').width() * (navBtnId);
            $('#slidewrapper').css({
                'transform': 'translate(' + translateWidth + 'px, 0)',
                '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
                '-ms-transform': 'translate(' + translateWidth + 'px, 0)',
            });
            slideNow = navBtnId + 1;
        }
    });
});


function nextSlide() { // переключение на следующий слайд
    if (slideNow == slideCount || slideNow <= 0 || slideNow > slideCount) {
        $('#slidewrapper').css('transform', 'translate(0, 0)');
        slideNow = 1;
    } else {
        translateWidth = -$('#viewport').width() * (slideNow);
        $('#slidewrapper').css({
            'transform': 'translate(' + translateWidth + 'px, 0)',
            '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
            '-ms-transform': 'translate(' + translateWidth + 'px, 0)',
        });
        slideNow++;
    }
}

function prevSlide() { // переключение на предыдущий слайд
    if (slideNow == 1 || slideNow <= 0 || slideNow > slideCount) {
        translateWidth = -$('#viewport').width() * (slideCount - 1);
        $('#slidewrapper').css({
            'transform': 'translate(' + translateWidth + 'px, 0)',
            '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
            '-ms-transform': 'translate(' + translateWidth + 'px, 0)',
        });
        slideNow = slideCount;
    } else {
        translateWidth = -$('#viewport').width() * (slideNow - 2);
        $('#slidewrapper').css({
            'transform': 'translate(' + translateWidth + 'px, 0)',
            '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
            '-ms-transform': 'translate(' + translateWidth + 'px, 0)',
        });
        slideNow--;
    }
}

// КАРУСЕЛЬ ОТЗЫВЫ

var slideNow1 = 1;
var slideCount1 = $('#feedback-slidewrapper').children().length;
var slideInterval1 = 3000;
var navBtnId1 = 0;
var translateWidth1 = 0;
var currentColor1 = 1;

$(document).ready(function () {
    var switchInterval1 = setInterval(nextSlide1, slideInterval1);

    $('#feedback-viewport').hover(function () {
        clearInterval(switchInterval1);
    }, function () {
        switchInterval1 = setInterval(nextSlide1, slideInterval1);
    });


    // Подсветка навигационных кнопок при переключении слайдов в блоке ОТЫЗЫВЫ

    $(document).ready(function () {
        if (currentColor1 == 1) {
            $(".feedback-slide-nav-btn").css({
                "background-color": "#ffeaee"
            })
            $(".btn4").css({
                "background-color": "#1a1f3d",
                "border-color": "#ffeaee",
            }

            )
        }

    });

    $('.feedback-slide-nav-btn').click(function () {
        navBtnId1 = $(this).index();

        currentColor1 = $(this).index() + 1
        if (currentColor1 == 1) {
            $(".feedback-slide-nav-btn").css({
                "background-color": "#ffeaee"
            })
            $(".btn4").css({
                "background-color": "#1a1f3d",
            }

            )
        }

        if (currentColor1 == 2) {
            $(".feedback-slide-nav-btn").css({
                "background-color": "#ffeaee"
            })
            $(".btn5").css({
                "background-color": "#1a1f3d",
                "border-color": "#ffeaee",
            }

            )
        }

        if (currentColor1 == 3) {
            $(".feedback-slide-nav-btn").css({
                "background-color": "#ffeaee"
            })
            $(".btn6").css({
                "background-color": "#1a1f3d",
                "border-color": "#ffeaee",
            }

            )
        }
    })


    $('.feedback-slide-nav-btn').click(function () {
        navBtnId1 = $(this).index();

        if (navBtnId1 + 1 != slideNow1) {
            translateWidth1 = -$('#feedback-viewport').width() * (navBtnId1);
            $('#feedback-slidewrapper').css({
                'transform': 'translate(' + translateWidth1 + 'px, 0)',
                '-webkit-transform': 'translate(' + translateWidth1 + 'px, 0)',
                '-ms-transform': 'translate(' + translateWidth1 + 'px, 0)',
            });
            slideNow1 = navBtnId1 + 1;
        }
    });
});


function nextSlide1() {
    if (slideNow1 == slideCount1 || slideNow1 <= 0 || slideNow1 > slideCount1) {
        $('#feedback-slidewrapper').css('transform', 'translate(0, 0)');
        slideNow1 = 1;
    } else {
        translateWidth1 = -$('#feedback-viewport').width() * (slideNow1);
        $('#feedback-slidewrapper').css({
            'transform': 'translate(' + translateWidth1 + 'px, 0)',
            '-webkit-transform': 'translate(' + translateWidth1 + 'px, 0)',
            '-ms-transform': 'translate(' + translateWidth1 + 'px, 0)',
        });
        slideNow1++;
    }
}

function prevSlide1() {
    if (slideNow1 == 1 || slideNow1 <= 0 || slideNow1 > slideCount1) {
        translateWidth1 = -$('#feedback-viewport').width() * (slideCount1 - 1);
        $('#feedback-slidewrapper').css({
            'transform': 'translate(' + translateWidth1 + 'px, 0)',
            '-webkit-transform': 'translate(' + translateWidth1 + 'px, 0)',
            '-ms-transform': 'translate(' + translateWidth1 + 'px, 0)',
        });
        slideNow1 = slideCount1;
    } else {
        translateWidth1 = -$('#feedback-viewport').width() * (slideNow1 - 2);
        $('#feedback-slidewrapper').css({
            'transform': 'translate(' + translateWidth1 + 'px, 0)',
            '-webkit-transform': 'translate(' + translateWidth1 + 'px, 0)',
            '-ms-transform': 'translate(' + translateWidth1 + 'px, 0)',
        });
        slideNow1--;
    }
}


