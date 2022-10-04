const videoBtn = document.querySelector(".btn");
const videoEl = document.querySelector(".background-video");
const faEl = document.querySelector(".fa");
const preloaderEl = document.querySelector(".preloader");

videoBtn.addEventListener("click", () => {
    if (videoBtn.classList.contains("pause")) {
        videoBtn.classList.remove("pause");
        videoEl.play();
        faEl.classList.add("fa-pause");
        faEl.classList.remove("fa-play");
    } else {
        videoBtn.classList.add("pause");
        videoEl.pause();
        faEl.classList.add("fa-play");
        faEl.classList.remove("fa-pause");
    }
});

window.addEventListener("load", () => {
    preloaderEl.style.zIndex = "-2";
});