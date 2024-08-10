
// script.js
document.addEventListener('DOMContentLoaded', function() {
    const slider = document.querySelector('.slider');
    const slides = slider.querySelectorAll('img');
    const totalSlides = slides.length;
    let currentIndex = 0;

    function updateSlidePosition() {
        slider.style.transform = `translateX(-${currentIndex * 100}%)`;
    }

    document.querySelector('.next').addEventListener('click', function() {
        if (currentIndex < totalSlides - 1) {
            currentIndex++;
        } else {
            currentIndex = 0; // Loop back to first slide
        }
        updateSlidePosition();
    });

    document.querySelector('.prev').addEventListener('click', function() {
        if (currentIndex > 0) {
            currentIndex--;
        } else {
            currentIndex = totalSlides - 1; // Loop back to last slide
        }
        updateSlidePosition();
    });

    // Optional: Auto-slide functionality
    setInterval(function() {
        document.querySelector('.next').click();
    }, 3000); // Change slide every 3 seconds
});
