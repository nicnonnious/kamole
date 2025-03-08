// Initialize EmailJS
(function() {
    emailjs.init("q2004yGernOmZ8nJP");
})();

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Hamburger menu toggle
const menuToggle = document.getElementById('menu-toggle');
const nav = document.querySelector('nav');

menuToggle.addEventListener('change', function() {
    if (this.checked) {
        nav.style.display = 'flex';
    } else {
        nav.style.display = 'none';
    }
});

// Form submission handler
document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault();

    // Show loading state
    const submitButton = this.querySelector('button[type="submit"]');
    const originalButtonText = submitButton.textContent;
    submitButton.textContent = 'Sending...';
    submitButton.disabled = true;

    // Prepare the template parameters
    const templateParams = {
        from_name: this.querySelector('#name').value,
        reply_to: this.querySelector('#email').value,
        phone_number: this.querySelector('#phone').value,
        address: this.querySelector('#address').value,
        service_type: this.querySelector('#service').value,
        message: this.querySelector('#message').value,
        to_email: 'kamolehomeservicespro@gmail.com'
    };

    // Send the email
    emailjs.send('service_8ucdhmx', 'template_m8wngx4', templateParams)
        .then(() => {
            // Show success message
            const thankYouCard = document.getElementById('thankYouCard');
            const progressBar = document.querySelector('.progress');

            thankYouCard.classList.add('show');
            progressBar.style.transform = 'scaleX(1)';

            // Reset form
            e.target.reset();

            // Hide thank you card after 10 seconds
            setTimeout(function () {
                thankYouCard.classList.remove('show');
                progressBar.style.transform = 'scaleX(0)';
            }, 10000);
        })
        .catch((error) => {
            console.error('Email Error:', error);
            alert('There was an error sending your message. Please try again or contact us directly.');
        })
        .finally(() => {
            // Reset button state
            submitButton.textContent = originalButtonText;
            submitButton.disabled = false;
        });
});

// Close button handler for thank you card
document.getElementById('closeButton').addEventListener('click', function () {
    const thankYouCard = document.getElementById('thankYouCard');
    const progressBar = document.querySelector('.progress');

    thankYouCard.classList.remove('show');
    progressBar.style.transform = 'scaleX(0)';
});