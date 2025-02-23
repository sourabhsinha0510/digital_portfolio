
    (function (){
        emailjs.init("zkrEp_3ruB3NrL-3g"); // Replace with your EmailJS Public Key
    })();

    document.getElementById("contact-form").addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent form from refreshing

        // Collect user input
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const message = document.getElementById("message").value;

        // Send the email using EmailJS
        emailjs.send("service_zlqqvcu", "template_d1o579x", {
            from_name: name,
            from_email: email,
            message: message
        }).then(
            function(response) {
                console.log("SUCCESS!", response.status, response.text);
                document.getElementById("success-message").style.display = "block";
                document.getElementById("contact-form").reset(); // Clear form after sending
            },
            function(error) {
                console.log("FAILED...", error);
            }
        );
    });

