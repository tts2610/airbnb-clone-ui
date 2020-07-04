$(window).scroll(function () {
  if ($(window).scrollTop() > $(".jumbotron").innerHeight() - 50) {
    $(".navbar").css("background-color", "white");
    $(".navbar .links a.nav-link").attr("style", "color: black !important");
    $(".navbar").attr("class", "navbar-dark");
  } else {
    $(".navbar").css("background-color", "rgba(0,0,0,0.1)");
    $(".navbar .links a.nav-link").attr("style", "color: white !important");
  }
});
