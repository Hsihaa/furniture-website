// 📌 Sample Products
const products = [
    { id: 1, name: "Wooden Chair", price: 1200, image: "chair1.jpeg" },
    { id: 2, name: "Luxury Sofa", price: 15000, image: "bestsofa.webp" },
    { id: 3, name: "Modern Table", price: 5000, image: "moder table.jpg" },
    { id: 4, name: "Wooden Table", price: 1200, image: "table.webp" },
    { id: 5, name: "Modern Sofa", price: 15000, image: "mod sofa.webp" },
    { id: 6, name: "Modern Chair", price: 5000, image: "chair (2).webp" }
];


// 📌 Display Products on Index Page
function displayProducts() {
    let productList = document.getElementById("product-list");
    if (!productList) return;

    productList.innerHTML = "";

    products.forEach(product => {
        let productCard = `
            <div class="col-md-4 col-sm-6 mb-4">
                <div class="card shadow-sm">
                    <img src="${product.image}" class="card-img-top p-3 rounded" alt="${product.name}">
                    <div class="card-body text-center">
                        <h5 class="card-title">${product.name}</h5>
                        <p class="card-text fw-bold text-success">₹${product.price}</p>
                        <button class="btn btn-primary" onclick="addToCart(${product.id})">
                            <i class="fas fa-cart-plus"></i> Add to Cart
                        </button>
                    </div>
                </div>
            </div>
        `;
        productList.innerHTML += productCard;
    });

    updateCartCount();
}

// 📌 Add to Cart
function addToCart(productId) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    let product = products.find(p => p.id === productId);

    let existingItem = cart.find(item => item.id === productId);
    if (existingItem) {
        existingItem.quantity++;
    } else {
        cart.push({ ...product, quantity: 1 });
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    updateCartCount();
}

// 📌 Display Cart Items
function displayCart() {
    let cartItems = document.getElementById("cart-items");
    let cartTotal = document.getElementById("cart-total");
    if (!cartItems) return;

    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cartItems.innerHTML = "";
    let total = 0;

    cart.forEach((product, index) => {
        let totalPrice = product.price * product.quantity;
        total += totalPrice;

        let row = `
            <tr>
                <td>${product.name}</td>
                <td>₹${product.price}</td>
                <td>
                    <button class="btn btn-sm btn-outline-secondary" onclick="updateQuantity(${index}, -1)">-</button>
                    ${product.quantity}
                    <button class="btn btn-sm btn-outline-secondary" onclick="updateQuantity(${index}, 1)">+</button>
                </td>
                <td>₹${totalPrice}</td>
                <td><button class="btn btn-danger btn-sm" onclick="removeFromCart(${index})">Remove</button></td>
            </tr>
        `;
        cartItems.innerHTML += row;
    });

    cartTotal.innerText = total;
    updateCartCount();
}

// 📌 Update Quantity
function updateQuantity(index, change) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    if (cart[index].quantity + change > 0) {
        cart[index].quantity += change;
    } else {
        cart.splice(index, 1);
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    displayCart();
}

// 📌 Remove Item from Cart
function removeFromCart(index) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(cart));
    displayCart();
}

// 📌 Clear Cart
function clearCart() {
    localStorage.removeItem("cart");
    displayCart();
}

// 📌 Update Cart Count
function updateCartCount() {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    document.getElementById("cart-count").innerText = cart.reduce((sum, item) => sum + item.quantity, 0);
}

// 📌 Process Checkout Function
// 📌 Process Checkout Function
function Checkout() {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    if (cart.length === 0) {
        alert("Your cart is empty. Please add products before checkout.");
        return;
    }
    // Ensure price and quantity are numbers
    let totalAmount = cart.reduce((sum, item) => {
        return sum + (parseFloat(item.price) * parseInt(item.quantity, 10));
    }, 0);
    alert("Total Amount: ₹" + totalAmount);
}

// 📌 Load Products & Cart on Page Load
document.addEventListener("DOMContentLoaded", function() {
    displayProducts();
    displayCart();
});