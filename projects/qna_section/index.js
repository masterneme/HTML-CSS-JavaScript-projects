const questionEls = document.querySelectorAll(".question");

questionEls.forEach((question) => {
    const btn = question.querySelector(".question-btn");
    btn.addEventListener("click", () => {
        question.classList.toggle("show-text");
    });
});