// animations.js
document.addEventListener("DOMContentLoaded", () => {
  // 1. Smooth scrolling for internal links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        window.scrollTo({
          top: target.offsetTop - 60, // adjust if you have a fixed navbar
          behavior: "smooth"
        });
      }
    });
  });

  // 2. Add active link highlight in navbar on scroll
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll("nav a");

  window.addEventListener("scroll", () => {
    let scrollPos = window.scrollY + 100; // offset for navbar
    sections.forEach(sec => {
      if (scrollPos >= sec.offsetTop && scrollPos < sec.offsetTop + sec.offsetHeight) {
        navLinks.forEach(link => {
          link.classList.remove("active-link");
          if (link.getAttribute("href") === `#${sec.id}`) {
            link.classList.add("active-link");
          }
        });
      }
    });
  });

  // 3. Button ripple effect (for all .ripple-btn)
  document.querySelectorAll(".ripple-btn").forEach(button => {
    button.addEventListener("click", function(e) {
      const ripple = document.createElement("span");
      ripple.classList.add("ripple");
      ripple.style.left = `${e.clientX - this.offsetLeft}px`;
      ripple.style.top = `${e.clientY - this.offsetTop}px`;
      this.appendChild(ripple);
      setTimeout(() => ripple.remove(), 600);
    });
  });

  // 4. Optional fade-in for elements (if not using ScrollReveal)
  document.querySelectorAll(".fade-in").forEach(el => {
    el.style.opacity = 0;
    el.style.transition = "opacity 1s ease-out";
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = 1;
        } else {
          entry.target.style.opacity = 0; // if you want it to hide again
        }
      });
    });
    observer.observe(el);
  });
});
