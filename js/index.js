let scrollPage = 0;
let pageContents = [$(".about-us"), $(".our-service"), $(".gallery"), $(".contact"), $(".maps") ];
let slideItems = $(".card__content");
let sliderIndex  = 0;
let animationSlideTop = "slide-top";
let slideActiveClass = "slider-active";
let offset = $(window).height() * 3 / 3;

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
        }, 300);
    }
});

function menuFixed(scroll) {
    if(scroll > 780) {
        $(".home__header").addClass("home__header--fixed");
    } else {
        $(".home__header").removeClass("home__header--fixed");
    }
    
}

function animationScroll(target) {
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

$(".prox").click(function(event) {
    event.preventDefault();
    sliderIndex++;
    if (sliderIndex >= slideItems.length) sliderIndex = 0;
    $.each(slideItems, function(index, element) {
        if(sliderIndex == index) {
            let beforeSlide = (index - 1);
            if (beforeSlide < 0) beforeSlide = slideItems.length - 1; 
            $(slideItems[beforeSlide]).removeClass(slideActiveClass);
            $(slideItems[sliderIndex]).addClass(slideActiveClass);
        }
    });

})

$(".prev").click(function(event) {
    event.preventDefault();
    sliderIndex--;
    if (sliderIndex < 0) sliderIndex = slideItems.length -1;

    $.each(slideItems, function(index, element) {
        if(sliderIndex == index) {
            let beforeSlide = (index + 1);
            if (beforeSlide >= slideItems.length) beforeSlide = 0;
            $(slideItems[beforeSlide]).removeClass(slideActiveClass);
            $(slideItems[sliderIndex]).addClass(slideActiveClass);
        }
    });

})

$(window).scroll(function (event) {
    scrollPage = $(window).scrollTop();
    menuFixed(scrollPage);
    animationScroll(pageContents);
});
