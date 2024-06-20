// Toggle the navigation menu
const menuButton = document.getElementById('menuButton');
const menuItems = document.getElementById('menuItems');

menuButton.addEventListener('click', () => {
  menuItems.classList.toggle('hidden');
          if (menuItems.classList.contains('hidden')) {
          menuButton.innerHTML = '&#9776;'; // Hamburger icon
          menuButton.setAttribute('aria-label', 'Open Menu');
        } else {
          menuButton.innerHTML = '&times;'; // X icon
          menuButton.setAttribute('aria-label', 'Close Menu');}
});

// Get the current year
const currentYear = new Date().getFullYear();
document.getElementById('currentYear').textContent = currentYear;

// Get the last modified date
const lastModified = new Date(document.lastModified);
const lastModifiedText = lastModified.toLocaleString();
document.getElementById('lastModified').textContent = `Last Updated: ${lastModifiedText}`;