// Initialize animations and interactive elements
document.addEventListener("DOMContentLoaded", () => {
  console.log("[v0] Initializing CouponHub interactive elements...")

  // Hero Slider logic
  const container = document.querySelector(".slider-container")
  const slides = document.querySelectorAll(".slider-slide")
  const prevBtn = document.getElementById("prev-slide")
  const nextBtn = document.getElementById("next-slide")

  if (container && slides.length > 0) {
    let currentSlide = 0
    const totalSlides = slides.length

    function updateSlider() {
      container.style.transform = `translateX(-${currentSlide * 100}%)`
      // Reset animations on slide change
      slides.forEach((slide, index) => {
        const elements = slide.querySelectorAll(".animate-in")
        if (index === currentSlide) {
          elements.forEach((el) => {
            el.style.animation = "none"
            el.offsetHeight // trigger reflow
            el.style.animation = null
          })
        }
      })
    }

    if (nextBtn && prevBtn) {
      nextBtn.addEventListener("click", () => {
        currentSlide = (currentSlide + 1) % totalSlides
        updateSlider()
      })

      prevBtn.addEventListener("click", () => {
        currentSlide = (currentSlide - 1 + totalSlides) % totalSlides
        updateSlider()
      })
    }

    // Auto-slide every 6 seconds
    setInterval(() => {
      currentSlide = (currentSlide + 1) % totalSlides
      updateSlider()
    }, 6000)
  }

  const observerOptions = {
    threshold: 0.1,
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animate-in", "fade-in", "slide-in-from-bottom-4", "duration-500")
        observer.unobserve(entry.target)
      }
    })
  }, observerOptions)

  document.querySelectorAll(".coupon-card").forEach((card) => {
    observer.observe(card)
  })

  // Modal logic for "GET CODE" buttons
  document.body.addEventListener("click", (e) => {
    const btn = e.target.closest("button")
    if (btn && (btn.innerText.includes("GET CODE") || btn.innerText.match(/[A-Z0-9]{4,}/))) {
      const code = btn.innerText.match(/[A-Z0-9]{4,}/) ? btn.innerText : "COUPON2026"
      navigator.clipboard.writeText(code).then(() => {
        alert(`Code "${code}" copied to clipboard!\nRedirecting to store...`)
      })
    }
  })
})
