// Smooth scroll for anchor links
document.addEventListener("click", (e) => {
  if (e.target.tagName === "A" && e.target.hash) {
    e.preventDefault()
    const target = document.querySelector(e.target.hash)
    if (target) {
      target.scrollIntoView({ behavior: "smooth" })
    }
  }
})

// Add scroll animation
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("animate-fadeInUp")
      observer.unobserve(entry.target)
    }
  })
}, observerOptions)

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".product-card, .feature-card").forEach((el) => {
    observer.observe(el)
  })
})

// Responsive menu
window.addEventListener("resize", () => {
  if (window.innerWidth > 768) {
    const navMenu = document.querySelector(".nav-menu")
    if (navMenu) {
      navMenu.style.display = "flex"
    }
  }
})
