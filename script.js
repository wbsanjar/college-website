// Simple JavaScript for TIT Bhopal website

document.addEventListener('DOMContentLoaded', function() {
    console.log('TIT Bhopal website loaded successfully!');

    // Example: Add click event to the header to change the welcome message
    const header = document.querySelector('header');
    header.addEventListener('click', function() {
        const p = header.querySelector('p');
        p.textContent = p.textContent === 'Welcome to TIT Bhopal' ? 'Explore Excellence at TIT Bhopal' : 'Welcome to TIT Bhopal';
    });

    // Example: Add a simple animation to the courses list
    const courses = document.querySelectorAll('#courses li');
    courses.forEach((course, index) => {
        course.style.opacity = '0';
        setTimeout(() => {
            course.style.transition = 'opacity 0.5s';
            course.style.opacity = '1';
        }, index * 200);
    });

    // Payment button event listeners
    const payButtons = document.querySelectorAll('.pay-btn');
    payButtons.forEach(button => {
        button.addEventListener('click', function() {
            alert('Payment gateway not integrated yet. Please contact administration for payment details.');
        });
    });
});
