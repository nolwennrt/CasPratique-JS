const inputs = document.querySelectorAll("input")
const btn = document.querySelector("button")

const showError = (input, error , container, para, message) => {
    input.value = "";
    error.style.display = "block";
    container.style.border = "2px solid hsl(0, 100%, 74%)";
    para.style.display = "block"
    para.textContent = message;
}

const clearError = (input, error, container, para) => {
    error.style.display = "none";
    container.style.border = "1px solid rgb(208, 208, 208)";
    para.style.display = "none";
}

btn.addEventListener("click", (e) => {

    inputs.forEach((input) => {
        let error = input.nextElementSibling;
        let container = input.parentElement;
        const para = container.nextElementSibling;

        if (input.value === "") {
            e.preventDefault();
            input.classList.remove("error-placeholder");
            if (input.getAttribute("placeholder") === "email@example.com") {
                input.setAttribute("placeholder", "Email Address")
            }
            showError(input, error, container, para, `${input.placeholder} cannot be empty`)
        } else if (!input.checkValidity()) {
            e.preventDefault();
            showError(input, error, container, para, "Looks like this is note an email")
            input.setAttribute("placeholder", "email@example.com")
            input.classList.add("error-placeholder");

        } 

        input.addEventListener("input", () => {
            clearError(input, error, container, para)
        })
    })

});


