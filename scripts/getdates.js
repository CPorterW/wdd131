// Get the current year
const currentYear = new Date().getFullYear();
document.getElementById('currentyear').textContent = currentYear;

// Get the last modified date
const lastModified = new Date(document.lastModified);
const lastModifiedText = lastModified.toLocaleString();
document.getElementById('lastModified').textContent = `Last Updated: ${lastModifiedText}`;