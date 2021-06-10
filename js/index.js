let scrollPage = 0;
let pageContents = [$(".about-us"), $(".our-service"), $(".contact")];
let animationSlideTop = "slide-top";
let widthView = $(document).width();
let offset = $(window).height() * 3 / 4;

$(".menu-mobile").click(function() {
    $(".header__menu").css("right", "0px");
});

$(".close-mobile").click(function() {
   $(".header__menu").css("right", "-9999px"); 
});

if(widthView > 900) {
    $('.service-item').hover(
        function () {
            $('.sub-list', this).stop().slideDown();
        },
        function () {
            $('.sub-list', this).stop().slideUp();
        }
    );
}

$('nav a').click(function(e) {
    let id = $(this).attr('href');
    let targetOffset = $(id).offset().top - 75; 

    if(widthView < 900) {
        $(".header__menu").css("right", "-9999px");
        $('html, body').animate({
            scrollTop: targetOffset
        }, 1200);
    } else {
        $('html, body').animate({
            scrollTop: targetOffset
        }, 500);
    }
});

function menuFixed(scroll) {
  
    if(scroll > 780) {
        $(".home__header").addClass("home__header--fixed");
    } else {
        $(".home__header").removeClass("home__header--fixed");
    }
    
}

function animationScroll(target, animacaoClass) {
    let documentTop = $(document).scrollTop();

    $(target).each(function(index, container) {
        let itemTop = container.offset().top;

        if(documentTop > itemTop - offset) {
            $(this).addClass("animation-top");
        }else {
            $(this).removeClass("animation-top");
            
        }
    })
};

$(window).scroll(function (event) {
    scrollPage = $(window).scrollTop();
    menuFixed(scrollPage);
    animationScroll(pageContents);
});
