const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
  menuToggle.classList.toggle("active");
  document.body.classList.toggle("menu-open");
});

// close menu on link click
document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
    menuToggle.classList.remove("active");
    document.body.classList.remove("menu-open");
  });
});