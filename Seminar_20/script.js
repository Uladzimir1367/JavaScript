document.addEventListener("DOMContentLoaded", function() {
   const productList = document.getElementById("product-list");
 
   data.forEach(product => {
     const productItem = document.createElement("li");
 
     productItem.innerHTML = `
       <img src="${product.image}" alt="${product.title}" width="150">
       <h2>${product.title}</h2>
       <p>${product.description}</p>
       <p><strong>Price: $${product.price}</strong></p>
       <button>Add to Cart</button>
     `;
 
     productList.appendChild(productItem);
   });
 });
 
