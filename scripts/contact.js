$(window).on("load", () => {
    $("#nav1-2").addClass("active");
    $("#nav2-2").addClass("active-nav");
    $(".container > p").css({padding: 0});
});
$("nav2 > ul > li > a").on("click", function() {
    $("#nav1-2").removeClass("active");
    $("#nav2-2").removeClass("active-nav");
});

$("form > button").on("click", (e) => {
    e.preventDefault();
    var error = false;
    $("form > input, form > textarea").each((n, e) => {
        if (e.value === "") {
            $(e).css("border", "1px solid red");
            error = true;
        } else {
            $(e).css("border", "1px solid #000");
        }

    });
    if (error)
        alert("All fields must be field!");
    else {
        $("form > input, form > textarea").each((n, e) => {
            e.value = "";
        });
        alert("We have received your message. Thank you!");                                    
    }
});