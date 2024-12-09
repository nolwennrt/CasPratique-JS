fetch('data.json')
    .then(Response => {
        if (!Response.ok) {
            throw new Error("Erreur lors du chargement des données")
        }
        return Response.json();
    })
    .then(data => {
        const container = document.querySelector(".products-container");

        data.forEach(item => {
            const addCard = document.createElement("div");
            addCard.className = "card-button";

            let text = document.createElement("p");
            text.textContent = "Add to Cart"

            const minusIcon = document.createElement("img");
            minusIcon.src = "./assets/images/icon-decrement-quantity.svg"
            minusIcon.className = "decrease"

            const cartIcon = document.createElement("img");
            cartIcon.src = "./assets/images/icon-add-to-cart.svg"
            cartIcon.className = "cart-icon"

            const plusIcon = document.createElement("img");
            plusIcon.src = "./assets/images/icon-increment-quantity.svg"
            plusIcon.className = "increase"

            addCard.appendChild(minusIcon);
            addCard.appendChild(cartIcon);
            addCard.appendChild(text)
            addCard.appendChild(plusIcon);


            addCard.addEventListener("click", () => {
                const isActive = addCard.classList.toggle("active")
                cartIcon.classList.toggle("active")
                minusIcon.classList.toggle("active")
                plusIcon.classList.toggle("active")
                
                text.textContent = isActive ? "0" : "Add to Cart";
            })

            const card = document.createElement("div");
            card.className = "product-card";

            const productImg = document.createElement("img");
            productImg.src = item.image.thumbnail;
            productImg.className = "product-img"

            const name = document.createElement("p");
            name.textContent = item.name;
            name.className = "light";

            const category = document.createElement("p");
            category.textContent = item.category;

            const price = document.createElement("p");
            price.textContent =(`$${item.price.toFixed(2)}`);
            price.className = "price";

            card.appendChild(addCard)
            card.appendChild(productImg);
            card.appendChild(name);
            card.appendChild(category);
            card.appendChild(price);

            container.appendChild(card)
        });
    })
.catch(Error => {
    console.error("Erreur", Error);
})




