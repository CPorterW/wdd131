// Toggle the navigation menu
const home = document.getElementById('home');
const old = document.getElementById('old');
const New = document.getElementById('new');
const large = document.getElementById('large');
const small = document.getElementById('small');
const filterOld = temple => new Date(temple.dedicated).getFullYear() < 1900;
const filterNew = temple => new Date(temple.dedicated).getFullYear() > 2000;
const filterLarge = temple => temple.area > 90000;
const filterSmall = temple => temple.area < 10000;
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

home.addEventListener('click', () => {
  temples.forEach(temple => {
  })
});

// Get the current year
const currentYear = new Date().getFullYear();
document.getElementById('currentYear').textContent = currentYear;

// Get the last modified date
const lastModified = new Date(document.lastModified);
const lastModifiedText = lastModified.toLocaleString();
document.getElementById('lastModified').textContent = `Last Updated: ${lastModifiedText}`;

const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  {
    templeName: "Seoul Korea",
    location: "Seoul, South Korea",
    dedicated: "1985, December, 14",
    area: 27870,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/seoul-korea/400x250/seoul-korea-temple-lds-424784-wallpaper.jpg"
  },
  {
    templeName: "Salt Lake",
    location: "Salt Lake City, Utah, United States",
    dedicated: "1893, April, 6",
    area: 253015,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/salt-lake-city-utah/2018/400x250/slctemple5.jpg"
  },
  {
    templeName: "Rome Italy",
    location: "Rome, Italy",
    dedicated: "2019, March, 10",
    area: 40600,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/rome-italy/2019/400x250/2-Rome-Temple-2190090.jpg"
  }
];

document.addEventListener('DOMContentLoaded', function() {
  displayTemples(temples); // Display all temples initially

  home.addEventListener('click', () => displayTemples(temples));
  old.addEventListener('click', () => displayTemples(temples.filter(filterOld)));
  New.addEventListener('click', () => displayTemples(temples.filter(filterNew)));
  large.addEventListener('click', () => displayTemples(temples.filter(filterLarge)));
  small.addEventListener('click', () => displayTemples(temples.filter(filterSmall)));
const gridContainer = document.getElementById('templeGrid');

function displayTemples(filteredTemples) {
  const gridContainer = document.getElementById('templeGrid');
  gridContainer.innerHTML = ''; // Clear existing cards

  filteredTemples.forEach(temple => {
    const card = document.createElement('figure');
    card.className = 'temple-card';
  card.id = temple.templeName;

  const img = document.createElement('img');
  img.src = temple.imageUrl;
  img.alt = temple.templeName;
  img.loading = 'lazy';

  const name = document.createElement('h2');
  name.textContent = temple.templeName;

  const location = document.createElement('p');
  location.textContent = `Location: ${temple.location}`;

  const dedicated = document.createElement('p');
  dedicated.textContent = `Dedicated: ${temple.dedicated}`;

  const area = document.createElement('p');
  area.textContent = `Area: ${temple.area} sq ft`;

  card.appendChild(img);
  card.appendChild(name);
  card.appendChild(location);
  card.appendChild(dedicated);
  card.appendChild(area);

  gridContainer.appendChild(card);
});
}});
