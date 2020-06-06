/*jslint browser: true*/
/*global $, jQuery, alert*/

$(window).on('load', () => {
    $('#status').fadeOut();
    $('#preloader').delay(350).fadeOut('slow');
    if ($(window).width() < 1000) {
        $(".nav1").css("display", "none");
        $(".stickNav").css({transform: "scale(1)", position: "static", opacity: "1", zIndex: "1", backgroundColor: "transparent", boxShadow: "none"});
        $(".explore").css({top: "0"});
        $(".explore p").css({fontSize: "0.8em", marginTop: "19px"});
    } else {
        $("#nav").addClass("nav1");
    }
    $('body').delay(350).css({overflowY: 'visible'});
    $('body').scrollLeft(0);
});

if ($(window).width() >= 1000) {
    var previousScroll = 0;

    $(window).scroll(() => {
        var top = $(this).scrollTop();
        if (top >= 100 && $(".nav2").css("display") == "none") {
            $(".stickNav").css({transform: "scale(1)", opacity: "1", zIndex: "999"});
        } else {
            $(".stickNav").css({transform: "scaleY(1.5)", opacity: "0", zIndex: "-1"});
        }
        previousScroll = top;
    });
}

$(".footer > p ").on ({
    mouseenter: () => {
        $(".footer > p ").css({cursor: "pointer", backgroundColor: "var(--ui-bg2)", color: "#1a1a1a"});
        $(".footer > img").css({display: "none"});
        $(".footer > p > span > img").css("visibility", "visible").animate({top: "0.6vh"}, 100);
    },
    mouseleave: () => {
        $(".footer > p ").css({backgroundColor: "transparent", color: "var(--ui-bg2)"});
        $(".footer > img").css({display: "block"});
        $(".footer > p > span > img").css({visibility: "hidden", top: "3vh"});
    },
    click: () => {
        window.scroll({
            top: 0,
            behavior: 'smooth'
        });
    }
});