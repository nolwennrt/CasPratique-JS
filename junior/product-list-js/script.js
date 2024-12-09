let panier = [];

fetch('data.json')
    .then(Response => {
        if (!Response.ok) {
            throw new Error("Erreur lors du chargement des données");
        }
        return Response.json();
    })
    .then(data => {
        const container = document.querySelector(".products-container");

        data.forEach(item => {
            const addCard = document.createElement("div");
            addCard.className = "card-button";

            let text = document.createElement("p");
            text.textContent = "Add to Cart";

            const minusIcon = document.createElement("img");
            minusIcon.src = "./assets/images/icon-decrement-quantity.svg";
            minusIcon.className = "decrease";

            const cartIcon = document.createElement("img");
            cartIcon.src = "./assets/images/icon-add-to-cart.svg";
            cartIcon.className = "cart-icon";

            const plusIcon = document.createElement("img");
            plusIcon.src = "./assets/images/icon-increment-quantity.svg";
            plusIcon.className = "increase";

            addCard.appendChild(minusIcon);
            addCard.appendChild(cartIcon);
            addCard.appendChild(text);
            addCard.appendChild(plusIcon);

            let nombre = 0;

            function toggleActive(isActive) {
                const elements = [addCard, cartIcon, minusIcon, plusIcon, productImg];
                elements.forEach(el => el.classList.toggle("active", isActive));
                text.textContent = isActive ? nombre : "Add to Cart";
            }

            addCard.addEventListener("click", () => {
                if (nombre === 0) {
                    nombre = 1;
                    toggleActive(true);
                    ajouterAuPanier(item, nombre, [addCard, cartIcon, minusIcon, plusIcon, productImg, text]);
                }
            });

            plusIcon.addEventListener("click", (e) => {
                e.stopPropagation();
                nombre++;
                text.textContent = nombre;
                ajouterAuPanier(item, nombre, [addCard, cartIcon, minusIcon, plusIcon, productImg, text]);
            });

            minusIcon.addEventListener("click", (e) => {
                e.stopPropagation();
                if (nombre > 0) {
                    nombre--;
                    text.textContent = nombre;

                    if (nombre === 0) {
                        toggleActive(false);
                    }

                    ajouterAuPanier(item, nombre, [addCard, cartIcon, minusIcon, plusIcon, productImg, text]);
                }
            });

            const card = document.createElement("div");
            card.className = "product-card";

            const productImg = document.createElement("img");
            productImg.src = item.image.thumbnail;
            productImg.className = "product-img";

            const name = document.createElement("p");
            name.textContent = item.name;
            name.className = "light";

            const category = document.createElement("p");
            category.textContent = item.category;

            const price = document.createElement("p");
            price.textContent = (`$${item.price.toFixed(2)}`);
            price.className = "price";

            card.appendChild(addCard);
            card.appendChild(productImg);
            card.appendChild(name);
            card.appendChild(category);
            card.appendChild(price);

            container.appendChild(card);
        });
    });

function ajouterAuPanier(item, quantite, elements) {
    const produitExist = panier.find(p => p.category === item.category);

    const cartContainer = document.querySelector(".article-total");

    if (quantite === 0) {
        // Supprimer du panier et du DOM
        panier = panier.filter(p => p.category !== item.category);

        const itemElement = cartContainer.querySelector(`[data-category="${item.category}"]`);
        if (itemElement) {
            cartContainer.removeChild(itemElement);
        }
    } else if (produitExist) {
        // Mise à jour du produit existant
        produitExist.quantite = quantite;
        produitExist.prixTotal = produitExist.price * quantite;

        const itemElement = cartContainer.querySelector(`[data-category="${item.category}"]`);
        if (itemElement) {
            itemElement.querySelector(".quantite-produit").textContent = quantite;
            itemElement.querySelector(".prix-produit").textContent = `$${produitExist.prixTotal.toFixed(2)}`;
        }
    } else {
        // Ajouter un nouvel élément
        const nouvelItem = {
            category: item.category,
            price: item.price,
            quantite: quantite,
            prixTotal: item.price * quantite
        };

        panier.push(nouvelItem);

        const itemElement = document.createElement("div");
        itemElement.className = "article";
        itemElement.setAttribute("data-category", item.category);

        itemElement.innerHTML = `
            <p>
                ${nouvelItem.category}<br>
                <span class="quantite-produit">${nouvelItem.quantite}</span>
                <span class="prix-unitaire">$${nouvelItem.price.toFixed(2)}</span>
                <span class="prix-produit">$${nouvelItem.prixTotal.toFixed(2)}</span>
            </p>
            <img class="retrait-produit" src="assets/images/icon-remove-item.svg" alt="">
        `;

        cartContainer.appendChild(itemElement);

        const removeItem = itemElement.querySelector(".retrait-produit");

        // Réinitialiser les éléments associés
        removeItem.addEventListener("click", () => {
            cartContainer.removeChild(itemElement);
            panier = panier.filter(p => p.category !== item.category);

            // Désactiver les classes des éléments et réinitialiser le texte
            elements.forEach(el => el.classList.remove("active"));
            elements.find(el => el.tagName === "P").textContent = "Add to Cart";

        });
    }
    
}







