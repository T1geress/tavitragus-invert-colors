$(document).ready(function() {
  $(".inverter").click(function() {
    $("body").toggleClass("dude")
    $(".navbar").toggleClass("navbar_light");
    $(".navbar").toggleClass("navbar_dark");
    $(".button").toggleClass("button_light");
    $(".button").toggleClass("button_dark");
    $("a").toggleClass("dark");
    $("h1").toggleClass("dark");
    $("h2").toggleClass("dark");
    $("button").toggleClass("dark");
    $(".name").toggleClass("name_dark");
    $(".name").toggleClass("name_light");
    $(".main-img").toggleClass("main-img_light");
    $(".main-img").toggleClass("main-img_dark");
    $(".home").toggleClass("home_light");
    $(".home").toggleClass("home_dark");
    $("p").toggleClass("dark2")
    $(".character").toggleClass("character_light");
    $(".character").toggleClass("character_dark");
    $(".info_p").toggleClass("info_p_light");
    $(".info_p").toggleClass("info_p_dark");
    $(".char_img").toggleClass("char_img_light");
    $(".char_img").toggleClass("char_img_dark");
  });
});
