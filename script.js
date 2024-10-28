document.addEventListener("DOMContentLoaded", () => {
    const path = window.location.pathname;
    const page = path.split("/").pop();  // Gets the filename (e.g., "story.html")

    // Match page with corresponding link id and add "active" class
    document.querySelectorAll(".navbar a").forEach(link => {
        if (link.getAttribute("href") === page) {
            link.classList.add("active");
        } else {
            link.classList.remove("active");
        }
    });
});



let currentIndex = 0;
const slides = document.querySelectorAll('.carousel-item');

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove('active');
        slide.style.opacity = '0'; // Hide all slides
    });

    currentIndex = (index + slides.length) % slides.length;

    slides[currentIndex].classList.add('active');
    slides[currentIndex].style.opacity = '1'; // Show current slide
}

function moveSlide(direction) {
    showSlide(currentIndex + direction);
}

// Initial display for carousel
showSlide(currentIndex);