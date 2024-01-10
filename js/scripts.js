$(function () {
  $(".down-arrow").click(function () {
    $([document.documentElement, document.body]).animate(
      {
        scrollTop: $("#home_main").offset().top - 120,
      },
      2000
    );
  });
  $("#toggler").click(function () {
    $("nav .menu").toggleClass("actived");
  });
  $(window).scroll(function () {
    if ($(this).scrollTop() > 1) {
      $(".index header").addClass("sticky");
    } else {
      $(".index header").removeClass("sticky");
    }
  });
  
  $('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            autoplay: true
        }
    }
})
});
