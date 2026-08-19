const body = document.body;
const themeToggle = document.getElementById("themeToggle");
const langToggle = document.getElementById("langToggle");
const menuToggle = document.getElementById("menuToggle");
const mobileMenu = document.getElementById("mobileMenu");
const year = document.getElementById("year");

year.textContent = new Date().getFullYear();

const savedTheme = localStorage.getItem("mt-theme");
if (savedTheme === "light") body.classList.add("light");

themeToggle.addEventListener("click", () => {
  body.classList.toggle("light");
  localStorage.setItem("mt-theme", body.classList.contains("light") ? "light" : "dark");
  themeToggle.textContent = body.classList.contains("light") ? "☀" : "☾";
});

menuToggle.addEventListener("click", () => {
  mobileMenu.classList.toggle("open");
});

mobileMenu.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => mobileMenu.classList.remove("open"));
});

/*
  Language toggle placeholder:
  When we build the Arabic version, this button can swap the full page content.
  Keeping it here now makes the architecture ready for a bilingual site.
*/
langToggle.addEventListener("click", () => {
  alert("Arabic version can be enabled next — the layout is already prepared for it.");
});
