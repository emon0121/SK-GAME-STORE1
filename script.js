let allProducts = [];

fetch("products.json")
.then(res => res.json())
.then(data => {
  allProducts = data;
  showProducts(allProducts);
});

function showProducts(list){
  const box = document.getElementById("productList");
  box.innerHTML = "";

  list.forEach(p => {
    const card = document.createElement("div");
    card.className = "product";

    card.innerHTML = `
      <img src="${p.image}">
      <h4>${p.name}</h4>
      <p>${p.price}</p>
    `;

    card.onclick = () => {
      localStorage.setItem("product", JSON.stringify(p));
      window.location.href = "product.html";
    };

    box.appendChild(card);
  });
}

function filterCategory(cat){
  if(cat === "All"){
    showProducts(allProducts);
  } else {
    showProducts(allProducts.filter(p => p.category === cat));
  }
}
// ======================
// LEVEL 5 - Telegram User Info Save
// ======================

if (window.Telegram && Telegram.WebApp) {
  Telegram.WebApp.ready();

  const user = Telegram.WebApp.initDataUnsafe.user;

  if (user) {
    localStorage.setItem("tgUser", JSON.stringify(user));
  }
}
// 🎈 Balloon Animation on Load
document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("balloon-container");

  const colors = [
    "#ff4d4d",
    "#ffd633",
    "#4dff88",
    "#4da6ff",
    "#d966ff"
  ];

  for (let i = 0; i < 20; i++) {
    const balloon = document.createElement("div");
    balloon.className = "balloon";

    balloon.style.left = Math.random() * 100 + "vw";
    balloon.style.background =
      colors[Math.floor(Math.random() * colors.length)];
    balloon.style.animationDuration =
      4 + Math.random() * 3 + "s";

    container.appendChild(balloon);

    // Remove balloon after animation
    setTimeout(() => {
      balloon.remove();
    }, 7000);
  }
});
