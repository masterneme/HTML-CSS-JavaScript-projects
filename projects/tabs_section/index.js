const tabsEl = document.querySelector(".tabs");
const btnEls = document.querySelectorAll(".button");
const articles = document.querySelectorAll(".content");

tabsEl.addEventListener("click", (event) => {
    const id = event.target.dataset.id;

    if (id) {
        btnEls.forEach((btn) => {
            btn.classList.remove("live");
        });
        event.target.classList.add("live");
        articles.forEach((article) => {
            article.classList.remove("live");
        });
        const element = document.getElementById(id);
        element.classList.add("live");
    }
});