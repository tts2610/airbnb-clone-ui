$(window).scroll(function() {
    if ($(window).scrollTop() > $(".jumbotron").innerHeight()) {
        $(".navbar").css("background-color", "white");
    }
});