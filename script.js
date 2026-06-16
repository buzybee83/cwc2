// Simple cart functionality
const cartCount = document.querySelector('.cart-count');
let cartItems = 0;

// Grid item click handling
const gridItems = document.querySelectorAll('.grid-item');
gridItems.forEach(item => {
    item.addEventListener('click', () => {
        const img = item.querySelector('img');
        const altText = img.alt;
        console.log(`Clicked: ${altText}`);

        // Optional: Add animation or modal functionality here
        item.style.transform = 'scale(0.98)';
        setTimeout(() => {
            item.style.transform = '';
        }, 200);
    });
});

// Search functionality
const searchBar = document.querySelector('.search-bar input');
const searchButton = document.querySelector('.search-bar button');

function performSearch() {
    const searchTerm = searchBar.value.trim();
    if (searchTerm) {
        console.log(`Searching for: ${searchTerm}`);
        searchBar.value = '';
    }
}

if (searchButton) {
    searchButton.addEventListener('click', performSearch);
}

if (searchBar) {
    searchBar.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            performSearch();
        }
    });
}

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;

        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Initialize
console.log('Williams-Sonoma Product Grid - Ready');
console.log('6 product tiles loaded');
