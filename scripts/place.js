function calculateWindChill(tempC, speedKmh) {
    const tempF = (tempC * 9/5) + 32;
    const speedMph = speedKmh / 1.60934;
    
    if (tempF <= 50 && speedMph > 3) {
        const windChill = 35.74 + (0.6215 * tempF) - (35.75 * Math.pow(speedMph, 0.16)) + (0.4275 * tempF * Math.pow(speedMph, 0.16));
        return Math.round(windChill);
    }
    return null;
}

function updateWindChill() {
    const tempElement = document.getElementById('temperature');
    const windSpeedElement = document.getElementById('wind-speed');
    const windChillElement = document.getElementById('wind-chill');

    const tempC = parseInt(tempElement.textContent);
    const speedKmh = parseInt(windSpeedElement.textContent);

    const windChillF = calculateWindChill(tempC, speedKmh);
    
    if (windChillF !== null) {
        windChillElement.textContent = `${windChillF}°F`;
    } else {
        windChillElement.textContent = 'N/A';
    }
}

function updateFooter() {
    const currentYearElement = document.getElementById('current-year');
    const lastModifiedElement = document.getElementById('last-modified');

    currentYearElement.textContent = new Date().getFullYear();
    lastModifiedElement.textContent = document.lastModified;
}

document.addEventListener('DOMContentLoaded', () => {
    updateWindChill();
    updateFooter();
});