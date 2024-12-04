const btn = document.querySelector('.sharebtn')
const popup = document.querySelector('.popup')
const popupbtn = document.querySelector('.sharebtn-popup')

btn.addEventListener("click", () => {
    popup.classList.toggle("hidden");
    btn.classList.toggle("selected");
})

btn.addEventListener("keydown", (e) => {
    if(e.key === "enter") {
        e.preventDefault();
        popup.classList.toggle("hidden");
        btn.classList.toggle("selected");
    }
})

popupbtn.addEventListener("click", () => {
    popup.classList.add("hidden");
    console.log("Click")
    btn.classList.remove("selected")
})