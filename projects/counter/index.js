let num = 0;

const valueEl = document.querySelector(".value");
const btnEls = document.querySelectorAll(".btn");

btnEls.forEach((btn) => {
    btn.addEventListener("click", (event) => {
        const styles = event.currentTarget.classList;
        if (styles.contains("btn-danger")) {
            num--;
        } else if (styles.contains("btn-success")) {
            num++;
        } else {
            num = 0;
        }
        valueEl.textContent = num;
        if (num > 0) {
            valueEl.style.color = "green";
        } else if (num < 0) {
            valueEl.style.color = "red";
        } else {
            valueEl.style.color = "black";
        }
    });
});