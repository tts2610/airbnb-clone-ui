$(window).scroll(function() {
    if ($(window).scrollTop() > $(".jumbotron").innerHeight()) {
        console.log("half");
    }
});