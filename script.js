

const searchBar = document.querySelector(".search-bar");
const searchBtn = document.querySelector(".search-btn");
const addToCartBtn = document.querySelectorAll(".addToCart");
const cartCount = document.getElementById("cartCount");

searchBtn.addEventListener("click", () => {
  const query = searchBar.value.trim();
  if (query) {
    alert(`Searching for "${query}" on Amazon Clone...`);
  } else {
    alert("Please enter a product name to search!");
  }
});

document.querySelectorAll(".category img").forEach(img => {
  img.addEventListener("click", () => {
    img.style.border = "2px solid #f90";
    setTimeout(() => img.style.border = "none", 500);
  });
});

let cart = 0;
addToCartBtn.forEach(button => {
  button.addEventListener("click", () => {
    cart++;
    cartCount.textContent = cart;
    alert("Item added to cart!");
  });
});

function backToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}
