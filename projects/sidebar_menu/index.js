const barsEl = document.querySelector(".fa-bars");
const sidebarEl = document.querySelector(".sidebar");
const closingBtn = document.querySelector(".fa-times");

barsEl.addEventListener("click", () => {
    sidebarEl.classList.toggle("show-sidebar");
});

closingBtn.addEventListener("click", () => {
    sidebarEl.classList.remove("show-sidebar");
});