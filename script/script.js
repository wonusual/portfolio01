$(document).ready(function () {

      $(".top_btn").click(function(){
    $("html , body").animate({scrollTop: 0 },500);    
  });  

function topbar_change() {
    $(window).scroll(function () {
        var topbar_change = $(this).scrollTop();
        if (topbar_change > 0) {
            $("header").addClass("active");
            $(".top-bar").addClass("active");
            $(".logo-box").addClass("active");
        } else {
            $("header").removeClass("active");
            $(".top-bar").removeClass("active");
            $(".logo-box").removeClass("active");
        }

    });

}
topbar_change()

function toggle() {
    $(".nav-on-btn").click(function () {
        $(".layer-bg").addClass("active");
        $(".nav-tabile").addClass("active");
    });

}
toggle()

function toggle_detail() {

    $(".toggle-menu > ul > .li > a").on("click", function () {
        $(this).next(".submenu").slideToggle();
        $(this).parent().siblings().removeClass("active").find(".submenu").slideUp();
        $(this).parent().toggleClass("active");
    });

}
toggle_detail()


function toggle_off() {
    $(".nav-off-btn").click(function () {
        $(".layer-bg").removeClass("active");
        $(".nav-tabile").removeClass("active");
    });

}
toggle_off()




function slide_mobile() {
    $(".mob-slide-wrap").slick({

        autoplay: true,
        fade: true,
        dots: true,
        dotsClass: 'slick-dots',
        autoPlaySpeed: 4000,
        pauseOnHover: false,

    });
}
slide_mobile()

function slide() {
    $(".mainSlide-wrap").slick({

        autoplay: true,
        fade: true,
        dots: true,
        dotsClass: 'slick-dots',
        autoPlaySpeed: 4000,
        pauseOnHover: false,

    });

    $(".play-btn").click(function () {
        $(".play-btn").removeClass("active");
        $(".pause-btn").addClass("active");
        $(".mainSlide-wrap").slick("slickPlay");
    });

    $(".pause-btn").click(function () {
        $(".pause-btn").removeClass("active");
        $(".play-btn").addClass("active");
        $(".mainSlide-wrap").slick("slickPause");

    });

    $(".mainSlide-wrap").on("afterChange", function () {

        var currentSlide = $('.mainSlide-wrap').slick('slickCurrentSlide');

        var current_slide_num = $(".mainSlide-wrap").slick("slickCurrentSlide");
        $(".page-num > .current-txt").text(current_slide_num + 1);

        if (currentSlide == 3) {
            $(".page-num").addClass("active");
        } else {
            $(".page-num").removeClass("active");
        }
    });
}
slide()


function vertical_slide() {
    $(".vertical-slide-list").slick({
        vertical: true,
        autoplay: true,
        arrows: false,
    });
}
vertical_slide()

function pc_vertical_slide() {
    $(".pc-vertical-slide-list").slick({
        vertical: true,
        autoplay: true,
        arrows: false,
    });
}
pc_vertical_slide()

function tt_menu_slide() {
    $(".menu-imgSlide-wrap").slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        dots: true,
        pauseOnHover: false,
        arrows: true,
        prevArrow: "<i class='fas fa-chevron-left'></i>",
        nextArrow: "<i class='fas fa-chevron-right'></i>",
        responsive: [

            {
                breakpoint: 0,
                settings: {
                    slidesToShow: 3,

                },
                breakpoint: 320,
                settings: {
                    slidesToShow: 3,

                },

                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                },


                    }

            ]
    });

    $(".pause-btn-2").click(function () {
        $(".pause-btn-2").removeClass("active");
        $(".play-btn-2").addClass("active");
        $(".menu-imgSlide-wrap-1").slick("slickPause");
    });

    $(".play-btn-2").click(function () {
        $(".play-btn-2").removeClass("active");
        $(".pause-btn-2").addClass("active");
        $(".menu-imgSlide-wrap-1").slick("slickPlay");
    });

    $(".menu-imgSlide-wrap-1").on("afterChange", function () {
        var current_slide_num = $(".menu-imgSlide-wrap").slick("slickCurrentSlide");
        $(".page-num-2 > .current-txt-2").text(current_slide_num + 1);
    });

    $(".pause-btn-3").click(function () {
        $(".pause-btn-3").removeClass("active");
        $(".play-btn-3").addClass("active");
        $(".menu-imgSlide-wrap-2").slick("slickPause");
    });

    $(".play-btn-3").click(function () {
        $(".play-btn-3").removeClass("active");
        $(".pause-btn-3").addClass("active");
        $(".menu-imgSlide-wrap-2").slick("slickPlay");
    });


    $(".menu-imgSlide-wrap-2").on("afterChange", function () {
        var current_slide_num_2 = $(".menu-imgSlide-wrap-2").slick("slickCurrentSlide");
        $(".page-num-3 > .current-txt-3").text(current_slide_num_2 + 1);
    });

}
tt_menu_slide()



function top() {
    $(window).scroll(function () {
        var scrollTop = $(this).scrollTop();
        console.log(scrollTop);
        if (scrollTop > 0) {
            $(".top_btn").addClass("active");
        } else {
            $(".top_btn").removeClass("active");
        }

    });

}
top()

function banner() {

    $(".banner-wrap .close-btn").click(function () {
        $(".banner-wrap").toggleClass("active");
    });
}
banner()
});
