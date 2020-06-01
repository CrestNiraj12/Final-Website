$(window).on('load', () => {
    $(".container > p").css({padding: 0});
    
    var texts = ["Feedback", "Offer", "Suggestion", "Question", "Support", "Recommendation"];
    var i = 0;

    function changeText() {
        $(".container > h1 > span").text(texts[i]);
        if (i == 5) i = 0;
        if (++i < texts.length){
            setTimeout(changeText, 2000);
        }
    }

    changeText();
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
