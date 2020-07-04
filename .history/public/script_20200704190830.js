$(window).scroll(function() {
    console.log($(".navbar").css("background-color"));
    if ($(window).scrollTop() > $(".jumbotron").innerHeight()) {
        $(".navbar").css("background-color", "white");
    } else {}
});