// Array of page titles
const pageTitles = ['Home', 'History that Doesn\'t Suck', 'Art of Manliness', 'Ender\'s Game', 'About'];

// Object to store page visit counts
const pageVisits = {};

// Function to update page visit count
function updatePageVisits(pageName) {
    if (pageVisits[pageName]) {
        pageVisits[pageName]++;
    } else {
        pageVisits[pageName] = 1;
    }
    localStorage.setItem('pageVisits', JSON.stringify(pageVisits));
}

// Function to display page visit count
function displayPageVisits() {
    const storedVisits = JSON.parse(localStorage.getItem('pageVisits'));
    if (storedVisits) {
        Object.assign(pageVisits, storedVisits);
    }
    
    const currentPage = document.title;
    updatePageVisits(currentPage);
    
    const visitCounter = document.getElementById('visit-counter');
    visitCounter.id = 'visit-counter';
    visitCounter.textContent = `You've visited this page ${pageVisits[currentPage]} time(s).`;
}

// Function to create a dynamic navigation menu
function createDynamicNav() {
    const nav = document.querySelector('nav');
    nav.innerHTML = ''; // Clear existing navigation
    
    pageTitles.forEach(title => {
        const link = document.createElement('a');
        link.href = `${title.toLowerCase().replace(/\s+/g, '-')}.html`;
        link.textContent = title;
        nav.appendChild(link);
    });
}

// Event listener for DOM content loaded
document.addEventListener('DOMContentLoaded', () => {
    createDynamicNav();
    displayPageVisits();
    
    // Add lazy loading to images
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        img.loading = 'lazy';
    });
});