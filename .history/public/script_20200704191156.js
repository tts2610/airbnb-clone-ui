$(window).scroll(function() {
    console.log($(".navbar").css("background-color"));
    if ($(window).scrollTop() > $(".jumbotron").height()) {
        $(".navbar").css("background-color", "white");
        $(".navbar .links a.nav-link").attr("style", "color: black !important");
    } else {
        $(".navbar").css("background-color", "rgba(0,0,0,0.1)");
        $(".navbar .links a.nav-link").attr("style", "color: white !important");
    }
});