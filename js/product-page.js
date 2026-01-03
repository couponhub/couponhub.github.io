// Copy coupon code to clipboard
function copyCode(code) {
  navigator.clipboard.writeText(code).then(() => {
    const btn = event.target
    const originalText = btn.textContent
    btn.textContent = "✓ Copied!"
    btn.classList.add("copied")

    setTimeout(() => {
      btn.textContent = originalText
      btn.classList.remove("copied")
    }, 2000)
  })
}

// Add scroll animation
document.addEventListener("DOMContentLoaded", () => {
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

  document.querySelectorAll(".highlight, .step-card, .coupon-card, .related-card").forEach((el) => {
    observer.observe(el)
  })
})
