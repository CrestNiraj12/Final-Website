/*jslint browser: true*/
/*global $, jQuery, alert*/

$(window).on("load", () => {
    const light = localStorage.getItem("light");
    
    function lightOn() {
        $(":root").css("--box-color-dark", "transparent");
        $(":root").css("--box-color-light", "#fff");
    }
    
    function lightOff() {
        $(":root").css("--box-color-light", "transparent");
        $(":root").css("--box-color-dark", "#fff");
    }
    
    if (light) {
        if (light == "on") {
            $("body").addClass("light");
            lightOn();
        }
        else {
            $("body").removeClass("light");
            lightOff();
        }
    }
    
    $("#dark, #dark2").click(() => {
        $("body").removeClass("light");
        localStorage.setItem("light", "off");
        lightOff();
    });

    $("#light, #light2").click(() => {
        $("body").addClass("light");
        localStorage.setItem("light", "on");
        lightOn();
    });
});

$(".nav1 > ul > li:nth-child(3)").on({
    mouseenter: () => {
        $(".nav1 > ul > li:nth-child(3)").css({cursor: "pointer", backgroundColor: "#fff"});
        $(".nav1 > ul > li:nth-child(3) a").css("color", "#000");
    },
    mouseleave: () => {
        $(".nav1 > ul > li:nth-child(3)").css("background-color", "transparent");
        $(".nav1 > ul > li:nth-child(3) a").css("color", "#fff");
    }
});

$(".explore").on("click", () => {
    if ($(window).width() >= 1000) {
        $(".nav2").css({display: "block", zIndex: "1000"}).animate({width: "45%", opacity: "1"}, 200, () => {
            $(".nav2 > ul > li:nth-child(1) > a").animate({right: "0", opacity: "1"}, 200, () => {
                $(".nav2 > ul > li:nth-child(2) > a").animate({right: "0", opacity: "1"}, 200, () => {
                    $(".nav2 > ul > li:nth-child(3) > a").animate({right: "0", opacity: "1"}, 200, () => {
                        if ($(".nav2 > ul > li:nth-child(4) > a").length) {
                            $(".nav2 > ul > li:nth-child(4) > a").animate({right: "0", opacity: "1"}, 200, () => {
                                $(".nav2 > .info").animate({opacity: "1", top: "50vh"}, 200);
                            });
                        } else $(".nav2 > .info").animate({opacity: "1", top: "50vh"}, 200);
                    });
                });
            });
        });
    } else if ($(window).width() >= 700) {
        $(".nav2").css({display: "block", zIndex: "1000"}).animate({width: "100%", opacity: "1"}, 200, () => {
            $(".nav2 > ul > li:nth-child(1) > a").animate({right: "-10%", opacity: "1", fontSize: "4vw"}, 200, () => {
                $(".nav2 > ul li:nth-child(2) >  a").animate({right: "-10%", opacity: "1", fontSize: "4vw"}, 200, () => {
                    $(".nav2 > ul > li:nth-child(3) >  a").animate({right: "-10%", opacity: "1", fontSize: "4vw"}, 200, () => {
                        if ($(".nav2 > ul > li:nth-child(4) > a").length) {
                            $(".nav2 > ul > li:nth-child(4) > a").animate({right: "-10%", opacity: "1", fontSize: "4vw"}, 200, () => {
                                $(".nav2 > .info").animate({opacity: "1", top: "50vh"}, 200);
                            });
                        } else $(".nav2 > .info").animate({opacity: "1", top: "50vh"}, 200);
                    });
                });
            });
        });
    } else {
        $(".nav2").css({display: "block", zIndex: "1000"}).animate({width: "100%", opacity: "1"}, 200, () => {
            $(".nav2 > ul > li:nth-child(1) >  a").animate({right: "-5%", opacity: "1", fontSize: "2em"}, 200, () => {
                $(".nav2 > ul >  li:nth-child(2) >  a").animate({right: "-5%", opacity: "1", fontSize: "2em"}, 200, () => {
                    $(".nav2 > ul >  li:nth-child(3) >  a").animate({right: "-5%", opacity: "1", fontSize: "2em"}, 200, () => {
                        if ($(".nav2 > ul > li:nth-child(4) > a").length) {
                            $(".nav2 > ul > li:nth-child(4) > a").animate({right: "-5%", opacity: "1", fontSize: "2em"}, 200);
                        }
                    });
                });
            });
        });
    }
    $("#overlay").css("display", "block");
    if ($(window).width() > 1000) {
        $(".stickNav").css({height: "0", opacity: "0", zIndex: "-1"});
    }
    $("body").css("overflow", "hidden");
});

$(".close-icon").on("click", () => {
    $("#overlay").css("display", "none");
    $(".nav2").animate({width: "0", opacity: "0"}, 200, () => {
        $(".nav2").css({display: "none", zIndex: "-1"});
        $(".nav2 > ul > li > a").css({right: "-20vh", opacity: "0"});
        $(".nav2 > .info").css({opacity: "0", top: "0"});
        $(".stickNav").css({height: "12vh", transform: "scaleY(1)", opacity: "1", zIndex: "999"});
    })
    $("body").css("overflow", "visible");
})

$(".nav2 > ul > li > a").on("click", function() {
    $(this).addClass("active-nav2");
});