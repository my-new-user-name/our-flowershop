const cartCountElement = document.querySelector('.cart-count');
const cartCount = 3;

cartCountElement.textContent = cartCount;

const addToCartButton = document.querySelector('.add-to-cart');
addToCartButton.addEventListener('click', function() {console.log('Product added to cart!');})