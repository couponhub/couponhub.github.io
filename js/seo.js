// SEO and performance optimization utilities

// Lazy load images for better performance
function lazyLoadImages() {
  const images = document.querySelectorAll("img[data-src]")
  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const img = entry.target
        img.src = img.dataset.src
        img.removeAttribute("data-src")
        observer.unobserve(img)
      }
    })
  })

  images.forEach((img) => imageObserver.observe(img))
}

// Add JSON-LD Schema markup
function addSchemaMarkup() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "CouponHub",
    description: "Best coupon codes and deals for web services",
    url: "https://couponhub.github.io",
    image: "https://couponhub.github.io/logo.jpg",
    telephone: "",
    sameAs: ["https://twitter.com/couponhub", "https://facebook.com/couponhub"],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "Customer Support",
      availableLanguage: ["en"],
    },
  }

  const script = document.createElement("script")
  script.type = "application/ld+json"
  script.text = JSON.stringify(schema)
  document.head.appendChild(script)
}

// Track page performance
function trackPerformance() {
  if (window.performance && window.performance.timing) {
    const perfData = window.performance.timing
    const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart
    console.log("Page load time:", pageLoadTime + "ms")
  }
}

// Initialize on page load
document.addEventListener("DOMContentLoaded", () => {
  lazyLoadImages()
  addSchemaMarkup()
  trackPerformance()
})

// Sitemap generation helper
function generateSitemap() {
  const pages = [
    "https://couponhub.github.io/index.html",
    "https://couponhub.github.io/hostinger.html",
    "https://couponhub.github.io/godaddy.html",
    "https://couponhub.github.io/namecheap.html",
    "https://couponhub.github.io/semrush.html",
    "https://couponhub.github.io/mangools.html",
    "https://couponhub.github.io/ahrefs.html",
  ]
  return pages
}

// Meta tags dynamic update
function updateMetaTags(title, description, keywords) {
  document.title = title
  updateMetaTag("description", description)
  updateMetaTag("keywords", keywords)
  updateMetaTag("og:title", title)
  updateMetaTag("og:description", description)
}

function updateMetaTag(name, content) {
  let tag = document.querySelector(`meta[name="${name}"], meta[property="${name}"]`)
  if (!tag) {
    tag = document.createElement("meta")
    if (name.startsWith("og:")) {
      tag.setAttribute("property", name)
    } else {
      tag.setAttribute("name", name)
    }
    document.head.appendChild(tag)
  }
  tag.setAttribute("content", content)
}
