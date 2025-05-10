const preLoader = document.querySelector(".preloader");
const video = document.querySelector(".video-container");
const changeButton = document.querySelector(".switch-btn");

document.addEventListener("DOMContentLoaded", function () {
  video.addEventListener("loadeddata", function () {
    preLoader.classList.add("hide-preloader");
  });

  changeButton.addEventListener("click", function () {
    if (!changeButton.classList.contains("slide")) {
      changeButton.classList.add("slide");
      video.pause();
    } else {
      changeButton.classList.remove("slide");
      video.play();
    }
  });
});
