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

// Show Thank You Card on Form Submission
document.querySelector('form').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent the form from submitting traditionally

    // Simulate form submission (replace this with your actual form submission logic)
    setTimeout(function () {
        const thankYouCard = document.getElementById('thankYouCard');
        const progressBar = document.querySelector('.progress');

        // Show the Thank You card with smooth transition
        thankYouCard.classList.add('show');

        // Animate the progress bar
        progressBar.style.transform = 'scaleX(1)';

        // Automatically hide the card after 5 seconds
        setTimeout(function () {
            thankYouCard.classList.remove('show');
            progressBar.style.transform = 'scaleX(0)'; // Reset the progress bar
        }, 10000); // 5000 milliseconds = 5 seconds

        // Clear the form fields
        e.target.reset(); // Reset the form
    }, 500); // Simulate a delay for form submission
});

document.getElementById('closeButton').addEventListener('click', function () {
    const thankYouCard = document.getElementById('thankYouCard');
    const progressBar = document.querySelector('.progress');

    thankYouCard.classList.remove('show'); // Hide the card with smooth transition
    progressBar.style.transform = 'scaleX(0)'; // Reset the progress bar
});