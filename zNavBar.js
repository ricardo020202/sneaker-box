
$(document).ready(function () {
  $(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll > 300) {
      $(".black").css("background", "rgb(27, 25, 25)");
    }

    else {
      $(".black").css("background", "none");
    }
  })
})

function myFunction() {
  document.getElementById("navbarSupportedContent").style.backgroundColor = "rgb(27, 25, 25)";
}