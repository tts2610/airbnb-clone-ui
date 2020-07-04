$(window).scroll(function() {
    if ($(window).scrollTop() > $("body").height() / 2) {
        console.log("half");
    }
});