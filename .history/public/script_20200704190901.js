$(window).scroll(function() {
    console.log($(".navbar").css("background-color"));
    if ($(window).scrollTop() > $(".jumbotron").innerHeight()) {
        $(".navbar").css("background-color", "white");
    } else {
        $(".navbar").css("background-color", "rgba(0,0,0,0.1)");
    }
});