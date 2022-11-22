window.onscroll = function () {
  scrollFunction();
};
function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 10) {
    document.getElementById("navigationControlller").classList.add("fixed");
  } else {
    document.getElementById("navigationControlller").classList.remove("fixed");
  }
}
