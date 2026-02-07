let currentBanner = 0;
const banners = document.querySelectorAll(".banner");
const dots = document.querySelectorAll(".dot");

setInterval(() => {
  banners[currentBanner].classList.remove("active");
  dots[currentBanner].classList.remove("active");

  currentBanner = (currentBanner + 1) % banners.length;

  banners[currentBanner].classList.add("active");
  dots[currentBanner].classList.add("active");
}, 3000);
