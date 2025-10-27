// Sample products
const products = [
  { id: 1, name: "T-Shirt", price: 20, image: "T-shirt.jpg" },
  { id: 2, name: "Shoes", price: 50, image: "Shoes.jpg" },
  { id: 3, name: "Hat", price: 15, image: "Hat.jpg" },
  { id: 4, name: "Bag", price: 30, image: "Bag.jpg" },
];

let cart = [];

function renderProducts() {
  const productsDiv = document.getElementById('products');
  productsDiv.innerHTML = '';
  products.forEach(product => {
    productsDiv.innerHTML += `
      <div class="product">
        <img src="${product.image}" alt="${product.name}">
        <h3>${product.name}</h3>
        <p>$${product.price}</p>
        <button onclick="addToCart(${product.id})">Add to Cart</button>
      </div>
    `;
  });
}

function addToCart(productId) {
  const product = products.find(p => p.id === productId);
  const item = cart.find(i => i.id === productId);
  if (item) {
    item.quantity += 1;
  } else {
    cart.push({ ...product, quantity: 1 });
  }
  updateCart();
}

function updateCart() {
  const cartItems = document.getElementById('cart-items');
  const cartCount = document.getElementById('cart-count');
  cartItems.innerHTML = '';
  let totalItems = 0;
  cart.forEach(item => {
    totalItems += item.quantity;
    cartItems.innerHTML += `<li>${item.name} x ${item.quantity} - $${item.price * item.quantity}</li>`;
  });
  cartCount.textContent = totalItems;
}

document.getElementById('checkout-btn').onclick = function() {
  if (cart.length === 0) {
    alert("Cart is empty!");
    return;
  }
  alert("Checkout complete! Thank you for your purchase.");
  cart = [];
  updateCart();
};

renderProducts();
updateCart();

