const input = document.querySelector("input")
const btn = document.querySelector("button")
const error = document.querySelector(".error")

btn.addEventListener("click", (e) => {
    if (!input.checkValidity() || input.value ==="") {
        e.preventDefault();
        input.value = "";
        error.style.display = "block";
        input.style.border = "1px solid hsl(354, 100%, 66%)"
    }
})

input.addEventListener("input", () => {
    error.style.display = "none";
    input.style.border = "1px solid hsl(223, 100%, 88%)"
})