// Activate Library
AOS.init({
  delay: 200,
  duration: 1500,
  once: false,
});

document.addEventListener("DOMContentLoaded", function () {
  const toggleButton = document.querySelector(".navbar .mobile-menu-toggle");
  const mobileMenu = document.querySelector(".navbar .mobile-menu-items");

  toggleButton.addEventListener("click", () => {
    mobileMenu.classList.toggle("active");
  });
});

// Change navbar background on scroll
window.addEventListener("scroll", function () {
  const navbar = document.querySelector(".navbar");

  if (window.scrollY > 0) {
    navbar.classList.add("navbar-scroll");
  } else {
    navbar.classList.remove("navbar-scroll");
  }
});
