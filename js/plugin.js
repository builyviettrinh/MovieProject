$(document).ready(function() {
    $('.venobox').venobox();
});

$(function() {
    $('.phone-slick').slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        adaptiveHeight: false,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2000,
    });
});