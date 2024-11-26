let opened = document.querySelectorAll(".questions");
let boutonPlus = "icon-plus.svg";
let boutonMin = "icon-minus.svg";


opened.forEach((question) => {
    let bouton = question.querySelector(".bouton");
    let answer = question.querySelector(".answer");


    question.addEventListener("click" , () => {

        let img = bouton.src.split("/").pop();

        if (img === boutonPlus) {
            bouton.src = `assets/images/${boutonMin}`;
            answer.style.display = "block";
        } else {
            bouton.src = `assets/images/${boutonPlus}`;
            answer.style.display = "none";
        }
    })
});


