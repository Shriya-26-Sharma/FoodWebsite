// Simple animation on page load
window.onload = function() {
    const items = document.querySelectorAll('.gallery-item');
    items.forEach((item, index) => {
        item.style.animationDelay = `${index * 0.1}s`; // Stagger the animation
    });
};
