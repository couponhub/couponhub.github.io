// Load Header
function loadHeader() {
  fetch("components/header.html")
    .then((response) => response.text())
    .then((html) => {
      document.getElementById("header-container").innerHTML = html
    })
    .catch((error) => console.log("Error loading header:", error))
}

// Load Footer
function loadFooter() {
  fetch("components/footer.html")
    .then((response) => response.text())
    .then((html) => {
      document.getElementById("footer-container").innerHTML = html
    })
    .catch((error) => console.log("Error loading footer:", error))
}

// Load Products
function loadProducts() {
  fetch("components/products.html")
    .then((response) => response.text())
    .then((html) => {
      document.getElementById("products-container").innerHTML = html
    })
    .catch((error) => console.log("Error loading products:", error))
}

// Toggle Search
function toggleSearch() {
  const searchContainer = document.getElementById("search-container")
  if (searchContainer) {
    searchContainer.style.display = searchContainer.style.display === "none" ? "flex" : "none"
  }
}

// Toggle Mobile Menu
function toggleMenu() {
  const navMenu = document.querySelector(".nav-menu")
  if (navMenu) {
    navMenu.style.display = navMenu.style.display === "flex" ? "none" : "flex"
  }
}

// Load all components when DOM is ready
document.addEventListener("DOMContentLoaded", () => {
  loadHeader()
  loadFooter()
  loadProducts()
})
