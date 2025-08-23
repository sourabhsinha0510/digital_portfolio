// -------------------------------
// Theme Toggle (dark default)
// -------------------------------
// main.js
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;
const themeIcon = themeToggle.querySelector('img');
const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'light') {
    body.classList.add('light');  // apply light mode
    themeIcon.src = "https://cdn.jsdelivr.net/npm/lucide-static/icons/moon.svg";
  } else {
    body.classList.remove('light'); // dark default
    themeIcon.src = "https://cdn.jsdelivr.net/npm/lucide-static/icons/sun.svg";
  }
// Start in dark mode by default
body.classList.add('dark-theme');
themeIcon.src = "https://cdn.jsdelivr.net/npm/lucide-static/icons/sun.svg";  // moon icon for dark mode

themeToggle.addEventListener('click', () => {
 const isLight = body.classList.toggle('light');
  if (isLight) {
    themeIcon.src = "https://cdn.jsdelivr.net/npm/lucide-static/icons/moon.svg"; // light mode icon
  } else {
    themeIcon.src = "https://cdn.jsdelivr.net/npm/lucide-static/icons/sun.svg"; // dark mode icon
  }
   localStorage.setItem('theme', isLight ? 'light' : 'dark');
});


 

// -------------------------------
// Navbar Scroll Shadow (optional)
// -------------------------------
const navbar = document.querySelector('nav');
window.addEventListener('scroll', () => {
  if (!navbar) return;
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// -------------------------------
// Mobile Menu Toggle (optional)
// -------------------------------
const menuToggle = document.querySelector('#menu-toggle');
const navMenu = document.querySelector('.nav-menu');

if (menuToggle && navMenu) {
  menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('open');
  });
}
