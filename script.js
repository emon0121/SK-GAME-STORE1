fetch("products.json")
  .then(res => res.json())
  .then(data => {
    const list = document.getElementById("productList");
    data.forEach(p => {
      const card = document.createElement("div");
      card.className = "product-card";
      card.innerHTML = `
        <img src="${p.image}">
        <h4>${p.name}</h4>
        <p>${p.price}</p>
      `;
      card.onclick = () => {
        localStorage.setItem("product", JSON.stringify(p));
        location.href = "product.html";
      };
      list.appendChild(card);
    });
  });
