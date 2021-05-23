window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.menu'),
    closeElem = document.querySelector('.menu__close'),
    hamburger = document.querySelector('.hamburger'),
    overlay = document.querySelector('.menu__overlay'),
    preim__link = document.getElementById('preim__link');
    work__link = document.getElementById('work__link');
    price__link = document.getElementById('price__link');
    shema__link = document.getElementById('shema__link');
    otzivi__link = document.getElementById('otzivi__link');
    footer__link = document.getElementById('footer__link');
    overlayModal = document.querySelector('.overlay'),


    preim__link.addEventListener('click', () => {
        menu.classList.toggle('active');
    });
    work__link.addEventListener('click', () => {
        menu.classList.toggle('active');
    });
    price__link.addEventListener('click', () => {
        menu.classList.toggle('active');
    });
    shema__link.addEventListener('click', () => {
        menu.classList.toggle('active');
    });
    otzivi__link.addEventListener('click', () => {
        menu.classList.toggle('active');
    });
    footer__link.addEventListener('click', () => {
        menu.classList.toggle('active');
    });

    hamburger.addEventListener('click', () => {
        menu.classList.toggle('active');
    });

    closeElem.addEventListener('click', () => {
        menu.classList.toggle('active');
    });

    overlay.addEventListener('click', () => {
        menu.classList.toggle('active');
    });

});

/* $('[data-modal=send]').on('click', function () {
    $('.overlay').fadeIn();
    $('.modal').fadeOut();
    $('#thanks').fadeIn();
});  */

 $('.modal__close').on('click', function () {
    $('.overlay').fadeOut();
    $('#thanks').fadeOut();
    $('#callme').fadeOut();
});

$('[data-modal=callme]').on('click', function () {
    $('.overlay').fadeIn();
    $('#callme').fadeIn();
});

$(document).ready(function(){
    $('.otzivi__carousel').slick({
        prevArrow: '<button type="button" class="slick-prev"><img src="icons/slider/prevArrow.png"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="icons/slider/nextArrow.png"></button>',
        speed: 1000,
        centerMode: true,
        centerPadding: '60px',
        slidesToShow: 1,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: true,
                    centerMode: false,
                    centerPadding: '40px',
                    slidesToShow: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    arrows: true,
                    centerMode: false,
                    centerPadding: '40px',
                    slidesToShow: 1
                }
            }
        ]
    });
  });

$(function(){
        $("a[href^='#']").click(function(){
                var _href = $(this).attr("href");
                $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
                return false;
        });
});

$(window).scroll(function() {
    if ($(this).scrollTop() > 1000) {
        $('.arrow__up').fadeIn();
    } else {
        $('.arrow__up').fadeOut();
    }
});

$('form').submit(function(e) {
    e.preventDefault();
    $.ajax({
        type: "POST",
        url: "mailer/smart.php",
        data: $(this).serialize()
    }).done(function() {
        $(this).find("input").val("");
	$('#callme').fadeOut();
        $('#thanks').fadeIn();
	$('.overlay').fadeIn();
        $('form').trigger('reset');
    });
    return false;
});

$('input[name=tel]').mask("+7 (999) 999-99-99");

/* $('.voprosi__form').validate({
    rules: {
        tel: "required",
        email: {
            required: true,
            email: true
        }
    },
    messages: {
        tel: "Введите номер телефона",
        email: "Введите корректный e-mail адрес"
    }
}); */
