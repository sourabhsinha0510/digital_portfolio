// formValidation.js
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm"); // matches your HTML ID
  const nameInput = form.querySelector("input[name='name']");
  const emailInput = form.querySelector("input[name='email']");
  const messageInput = form.querySelector("textarea[name='message']");

  // Create a status element if it doesn't exist
  let status = document.querySelector(".form-status");
  if (!status) {
    status = document.createElement("p");
    status.className = "form-status";
    form.appendChild(status);
  }

  // Initialize EmailJS safely
  try {
    emailjs.init("HEJdcWHEO3kZO4HUJ"); // Replace with your actual EmailJS Public Key
  } catch (err) {
    console.error("EmailJS failed to initialize. Check your script and Public Key.", err);
  }

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    let valid = true;

    // Reset previous messages
    status.textContent = "";
    status.className = "form-status";

    // Validate name
    if (nameInput.value.trim() === "") {
      valid = false;
      showError(nameInput, "Name is required");
    } else {
      clearError(nameInput);
    }

    // Validate email
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(emailInput.value.trim())) {
      valid = false;
      showError(emailInput, "Enter a valid email");
    } else {
      clearError(emailInput);
    }

    // Validate message
    if (messageInput.value.trim().length < 10) {
      valid = false;
      showError(messageInput, "Message should be at least 10 characters");
    } else {
      clearError(messageInput);
    }

    if (valid) {
      status.textContent = "Sending...";
      emailjs.sendForm('service_zlqqvcu', 'template_d1o579x', form)
        .then(() => {
          status.textContent = "Message sent successfully!";
          status.classList.add("success");
          form.reset();
        })
        .catch((err) => {
          console.error("EmailJS Error:", err);
          status.textContent = "Something went wrong. Try again.";
          status.classList.add("error");
        });
    }
  });

  function showError(input, message) {
    input.classList.add("input-error");
    let err = input.nextElementSibling;
    if (!err || !err.classList.contains("error-message")) {
      err = document.createElement("span");
      err.className = "error-message";
      input.insertAdjacentElement("afterend", err);
    }
    err.textContent = message;
  }

  function clearError(input) {
    input.classList.remove("input-error");
    let err = input.nextElementSibling;
    if (err && err.classList.contains("error-message")) {
      err.textContent = "";
    }
  }
});
