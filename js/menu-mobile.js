let widthView = $(document).width();

$(document).ready(function () {
    $(".whatsapp-tag").load("tag/whatsapp.html");
});

$(window).scroll(function (event) {
    let scrollPage = $(window).scrollTop();

    scrollPage >= 4400 ? $(".whatsapp-tag").fadeOut() : $(".whatsapp-tag").fadeIn();
});

$(".menu-mobile").click(function () {
    $(".header__menu").css("right", "0px");
});

$(".close-mobile").click(function () {
    $(".header__menu").css("right", "-9999px");
});

if (widthView > 900) {
    $(".service-item").hover(function () {
        $(".sub-list", this).stop().slideDown();
    },
    function () {
        $(".sub-list", this).stop().slideUp();
    });
}
