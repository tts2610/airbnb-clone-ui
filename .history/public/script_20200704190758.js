$(window).scroll(function() {
    console.log($(".navbar").css());
    if ($(window).scrollTop() > $(".jumbotron").innerHeight()) {
        $(".navbar").css("background-color", "white");
    } else {}
});