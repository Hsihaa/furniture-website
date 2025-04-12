document.addEventListener("DOMContentLoaded", function () {
  console.log("Furniture Store Script Loaded!");

  // Search Functionality
  document.querySelector(".search-bar").addEventListener("submit", function (event) {
      event.preventDefault();
      let query = document.querySelector(".search-bar input").value.trim().toLowerCase();
      if (query !== "") {
          alert("Searching for: " + query);
          // Here, you can implement actual search logic or redirect to a search results page.
      }
  });

  // Smooth Scroll for Navbar Links
  document.querySelectorAll(".navbar-nav a").forEach(link => {
      link.addEventListener("click", function (event) {
          if (this.getAttribute("href").startsWith("#")) {
              event.preventDefault();
              let target = document.querySelector(this.getAttribute("href"));
              if (target) {
                  window.scrollTo({
                      top: target.offsetTop - 50,
                      behavior: "smooth"
                  });
              }
          }
      });
  });

  // Auto-rotate Bootstrap Carousel
  let carouselElement = document.querySelector("#furnitureCarousel");
  if (carouselElement) {
      let carousel = new bootstrap.Carousel(carouselElement, {
          interval: 3000, // Change slide every 3 seconds
          wrap: true
      });
  }

  // Add to Cart Functionality
  document.querySelectorAll(".btn-warning").forEach(button => {
      button.addEventListener("click", function () {
          let product = this.closest(".card").querySelector(".card-title").innerText;
          alert("${product}");
      });
  });
});