$(function () {
  $(".header-sp-icon-wrap").click(function () {
    if ($(".header-sp-icon-wrap").hasClass("is-open")) {
      $(".header-sp-nav").css("display", "none");
      $(".header-sp-icon-wrap").removeClass("is-open");
    } else {
      $(".header-sp-nav").css("display", "block");
      $(".header-sp-icon-wrap").addClass("is-open");
    }
  });

  if (window.innerWidth < 480) {
    document.getElementById("go-myanmar").href = "sp-myanmar.html";
    document.getElementById("go-indonesia").href = "sp-indonesia.html";
    document.getElementById("go-philippine").href = "sp-philippine.html";
    document.getElementById("go-myanmar").href = "sp-myanmar.html";
    document.getElementById("go-myanmar").href = "sp-myanmar.html";
    document.getElementById("go-myanmar").href = "sp-myanmar.html";
    document.getElementById("go-myanmar").href = "sp-myanmar.html";
    document.getElementById("go-myanmar").href = "sp-myanmar.html";
    document.getElementById("go-myanmar").href = "sp-myanmar.html";
  }
});
