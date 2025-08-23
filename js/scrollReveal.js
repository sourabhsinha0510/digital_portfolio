// scrollReveal.js
document.addEventListener("DOMContentLoaded", () => {
  const sr = ScrollReveal({
    origin: "bottom",
    distance: "50px",
    duration: 800,
    delay: 200,
    reset: true  // <--- animations run again when element scrolls into view
  });

  sr.reveal(".hero-text", { delay: 100 });
  sr.reveal(".hero-image", { delay: 300 });

  sr.reveal(".about .intro", { delay: 200 });
  sr.reveal(".about .stats", { delay: 400 });
  sr.reveal(".about .skills", { delay: 600 });

  sr.reveal(".projects .project-card", { interval: 200 });
  sr.reveal(".certifications .cert-card", { interval: 200 });
  sr.reveal(".hobbies .hobby-card", { interval: 200 });
  sr.reveal(".resume", { delay: 300 });
  sr.reveal(".contact", { delay: 200 });
});
