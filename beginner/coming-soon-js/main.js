const input = document.querySelector("input")
const btn = document.querySelector("button")
const alert = document.querySelector(".alert")
const error = document.querySelector(".error")
const form = document.querySelector("form")

btn.addEventListener("click", (e) => {
    if (!input.checkValidity() || input.value === "") {
        e.preventDefault();
        input.value = "";
        alert.style.display = "block"
        error.style.display = "block"
        form.style.border = "1px solid rgb(243, 90, 90)"
    }
})

input.addEventListener("input" ,() => {
    if (alert.style.display === "block") {
        alert.style.display = "none"
        error.style.display = "none"
        form.style.border = "0.5px solid hsl(0, 36%, 70%) "
    }
})