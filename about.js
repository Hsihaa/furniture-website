document.addEventListener("DOMContentLoaded", function () {
    // Navbar toggle for mobile
    const toggleBtn = document.querySelector(".navbar-toggler");
    const navbarMenu = document.querySelector("#navbarNav");

    toggleBtn.addEventListener("click", function () {
        navbarMenu.classList.toggle("show");
    });

    // Search button alert
    document.querySelector(".search-bar button").addEventListener("click", function (event) {
        event.preventDefault();
        alert("Search functionality coming soon!");
    });
});