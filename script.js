let cart = [];

fetch("products.json")
  .then(res => res.json())
  .then(products => {
    const list = document.getElementById("product-list");

    products.forEach(p => {
      const div = document.createElement("div");
      div.className = "product";

      div.innerHTML = `
        <img src="${p.image}">
        <h3>${p.name}</h3>
        <p>৳${p.price}</p>
        <button onclick="addToCart(${p.id})">Add to Cart</button>
      `;

      list.appendChild(div);
    });
  });

function addToCart(id) {
  cart.push(id);
  alert("Cart-এ যোগ হয়েছে");
}
