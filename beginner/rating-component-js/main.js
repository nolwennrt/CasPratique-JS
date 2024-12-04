const rate = document.querySelectorAll(".rate")
let activeRate = null;

rate.forEach(rate => {
    rate.addEventListener("click", () => {
        // Si un élément est déjà actif, on retire la classe 'active'
        if (activeRate) { // Vérifie que activeRate n'est pas null. 
            activeRate.classList.remove("active");
        }

        // Ajouter la classe 'active' à l'élément cliqué
        rate.classList.add("active");

        // Mettre à jour la variable activeRate pour qu'elle pointe vers l'élément cliqué
        activeRate = rate;
    });
});



const submit = document.querySelector(".submit")
const ratePart = document.querySelector(".rating")
const thankPart = document.querySelector(".thank")
const para = document.querySelector(".selected")

submit.addEventListener("click", () => {
    if(activeRate) {
        ratePart.classList.add("hidden");
        thankPart.classList.remove("hidden")
        para.textContent = `You selected ${activeRate.textContent} out of 5`
    }
})
