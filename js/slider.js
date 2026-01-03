let currentSlide = 0
const slides = document.querySelectorAll(".slide")
const indicators = document.querySelectorAll(".indicator")

function showSlide(n) {
  slides.forEach((slide) => slide.classList.remove("active"))
  indicators.forEach((indicator) => indicator.classList.remove("active"))

  slides[n].classList.add("active")
  indicators[n].classList.add("active")
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length
  showSlide(currentSlide)
}

function prevSlide() {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length
  showSlide(currentSlide)
}

function goToSlide(n) {
  currentSlide = n
  showSlide(currentSlide)
}

// Auto-advance slides every 8 seconds
setInterval(nextSlide, 8000)

// Initialize
document.addEventListener("DOMContentLoaded", () => {
  showSlide(0)
})
