// Function to calculate wind chill
function calculateWindChill(temperature, windSpeed) {
  if (temperature <= 50 && windSpeed > 3) {
    const windChill = (
      35.74 +
      0.6215 * temperature -
      35.75 * Math.pow(windSpeed, 0.16) +
      0.4275 * temperature * Math.pow(windSpeed, 0.16)
    ).toFixed(2); // Round to two decimal places
    return `${windChill}°F`;
  } else {
    return "N/A";
  }
}

// Function to update wind chill on the page
function updateWindChill() {
  const tempElement = document.getElementById("temperature");
  const windElement = document.getElementById("wind-speed");
  const chillElement = document.getElementById("wind-chill");

  // Extract temperature value (remove '°F')
  const temperature = parseFloat(
  );

  // Extract wind speed value (remove 'MPH')
  const windSpeed = parseFloat(
    windElement.textContent.replace("Wind Speed:", "").replace("MPH", "").trim()
  );

  // Calculate and display the wind chill
  chillElement.textContent = `Wind Chill: ${calculateWindChill(
    temperature,
    windSpeed
  )}`;
}

// Run the function on page load
document.addEventListener("DOMContentLoaded", updateWindChill);
