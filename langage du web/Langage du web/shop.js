let cart = JSON.parse(localStorage.getItem('musclefit_cart')) || [];

function toggleCart() {
    document.getElementById('cart-sidebar').classList.toggle('active');
    renderCart();
}

function addToCart(name, price, img) {
    cart.push({ name, price, img });
    localStorage.setItem('musclefit_cart', JSON.stringify(cart));
    updateCartCount();
    
    // Optionnel: Ouvrir le panier automatiquement lors de l'ajout
    if(!document.getElementById('cart-sidebar').classList.contains('active')) {
        toggleCart();
    }
}

function renderCart() {
    const list = document.getElementById('cart-items-list');
    const totalEl = document.getElementById('cart-total');
    list.innerHTML = '';
    let total = 0;

    cart.forEach((item, index) => {
        total += item.price;
        list.innerHTML += `
            <div class="cart-item">
                <img src="${item.img}">
                <div>
                    <h4>${item.name}</h4>
                    <p>${item.price}€</p>
                    <small onclick="removeItem(${index})" style="color:red; cursor:pointer">Supprimer</small>
                </div>
            </div>
        `;
    });

    totalEl.innerText = total.toFixed(2);
    updateCartCount();
}

function removeItem(index) {
    cart.splice(index, 1);
    localStorage.setItem('musclefit_cart', JSON.stringify(cart));
    renderCart();
}

function updateCartCount() {
    document.getElementById('cart-count').innerText = cart.length;
}

function checkout() {
    if(cart.length === 0) return alert("Ton panier est vide !");
    alert("Merci pour ton achat ! (Simulation de paiement)");
    cart = [];
    localStorage.removeItem('musclefit_cart');
    toggleCart();
}

// Initialisation au chargement
updateCartCount();