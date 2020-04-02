$(function() {
  let header = $("#header");
  let intro = $("#intro");
  let scrollPos = $(window).scrollTop();
  let nav = $("#nav");
  let navToggle = $("#navToggle");
  $(window).on("scroll load resize", function() {
    introH = intro.innerHeight();
    scrollPos = $(this).scrollTop();
    if (scrollPos > introH) {
      header.addClass("fixed");
    } else {
      header.removeClass("fixed");
    }
  });
  header.addClass("fixed");

  // SMOOTH SCROLL
  $("[data-scroll]").on("click", function(event) {
    event.preventDefault();
    let elementID = $(this).data("scroll");
    let elementOffset = $(elementID).offset().top;
    nav.removeClass("show");
    console.log(elementOffset);
    $("html, body").animate(
      {
        scrollTop: elementOffset - 70
      },
      700
    );
  });

  // NAVTOGGLE
  navToggle.on("click", function(event) {
    event.preventDefault();
    nav.toggleClass("show");
  });

  // REVIEWS:
  let slider = $("#reviewsSlider");
  slider.slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    arrows: false,
    dots: true
  });
});
