$(document).ready(function() {
    var resizeSlideshow = function resizeSlideshow() {
      $(".slideshow").css("height", $(".slideshow img").css("height"));
    }

  resizeSlideshow();
  $(window).resize(resizeSlideshow);
  $(".slideshow > div:gt(0)").hide();

  setInterval(function() {
    $(".slideshow > div:first")
      .fadeOut(1000)
      .next()
      .fadeIn(1000)
      .end()
      .appendTo(".slideshow");
  }, 3000);


})