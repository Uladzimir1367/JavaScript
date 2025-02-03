document.addEventListener("DOMContentLoaded", function () {
  const productList = document.getElementById("product-list");
  const cartList = document.getElementById("cart-list");

  // Функция для добавления товара в корзину
  function addToCart(productId) {
    const product = data.find((item) => item.id === productId);
    if (product) {
      const cartItem = document.createElement("li");
      cartItem.innerHTML = `
         <img src="${product.image}" alt="${product.title}" width="50">
         <h3>${product.title}</h3>
         <p><strong>Price: $${product.price}</strong></p>
         <button class="remove-from-cart">X</button>
       `;
      cartList.appendChild(cartItem);

      // Обработчик клика для удаления товара из корзины
      cartItem
        .querySelector(".remove-from-cart")
        .addEventListener("click", function () {
          cartList.removeChild(cartItem);
        });
    }
  }

  // Добавление продуктов в список
  data.forEach((product) => {
    const productItem = document.createElement("li");
    productItem.innerHTML = `
       <img src="${product.image}" alt="${product.title}" width="150">
       <h2>${product.title}</h2>
       <p>${product.description}</p>
       <p><strong>Price: $${product.price}</strong></p>
       <button class="add-to-cart" data-id="${product.id}">Add to Cart</button>
     `;
    productList.appendChild(productItem);
  });

  // Обработчик клика для добавления товара в корзину
  document.addEventListener("click", function (event) {
    if (event.target && event.target.classList.contains("add-to-cart")) {
      const productId = parseInt(event.target.getAttribute("data-id"), 10);
      addToCart(productId);
    }
  });
});
