document.addEventListener("DOMContentLoaded", () => {
  const typeTarget = document.querySelector(".typewriter");
  if (!typeTarget) return;

  const words = ["Software Developer", "Web Developer"];
  let wordIndex = 0;
  let charIndex = 0;
  let isDeleting = false;

  const typingSpeed = 120;      // typing speed
  const deletingSpeed = 60;     // deleting speed
  const delayBetweenWords = 1500; // pause after full word
  const initialDelay = 800;       // wait before typing starts

  function typeEffect() {
    const currentWord = words[wordIndex];
    typeTarget.textContent = currentWord.substring(0, charIndex);

    if (!isDeleting && charIndex < currentWord.length) {
      charIndex++;
      setTimeout(typeEffect, typingSpeed);
    } else if (isDeleting && charIndex > 0) {
      charIndex--;
      setTimeout(typeEffect, deletingSpeed);
    } else {
      if (!isDeleting && charIndex === currentWord.length) {
        isDeleting = true;
        setTimeout(typeEffect, delayBetweenWords);
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        setTimeout(typeEffect, typingSpeed);
      }
    }
  }

  setTimeout(typeEffect, initialDelay); // <-- wait before starting
});
