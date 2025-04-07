// 543b25f5306a6bd35ae1625b04e51bca
// Cozomel:  [20.5083, -86.9458]

// select HTML elements in the document
const currentTemp = document.querySelector("#current-temp");
const weatherIcon = document.querySelector("#weather-icon");
const captionDesc = document.querySelector("#weather-type");
const humidity = document.querySelector("#humidity");
const windSpeed = document.querySelector("#wind-speed");
const maxTemp = document.querySelector("#max-temp");

const url ="https://api.openweathermap.org/data/2.5/weather?lat=20.5083&lon=-86.945&appid=543b25f5306a6bd35ae1625b04e51bca&units=imperial";

async function apiFetch() {
  try {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      // console.log(data); // testing only
      displayResults(data); // uncomment when ready
    } else {
      throw Error(await response.text());
    }
  } catch (error) {
    console.log(error);
  }
}

function displayResults(data) {
  currentTemp.innerHTML = `${Math.round(data.main.temp)}`;
  const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
  let desc = data.weather[0].description;
  let capitalizedDesc = capitalizeWords(desc);
  
  weatherIcon.setAttribute("src", iconsrc);
  captionDesc.textContent = `${capitalizedDesc}`;
  humidity.textContent = `Humidity: ${data.main.humidity}%`;
  windSpeed.textContent = `Wind Speed: ${Math.round(data.wind.speed)} mph`;
  maxTemp.textContent = `${data.main.temp_max}`;
}

function capitalizeWords(str) {
  return str
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

const forecastUrl = "https://api.openweathermap.org/data/2.5/forecast?lat=20.5083&lon=-86.9458&units=imperial&appid=543b25f5306a6bd35ae1625b04e51bca";

async function fetchForecast() {
  try {
    const response = await fetch(forecastUrl);
    if (response.ok) {
      const forecastData = await response.json();
      // console.log(forecastData); // testing only
      displayForecast(forecastData);
    } else {
      throw Error(await response.text());
    }
  } catch (error) {
    console.error("Forecast error:", error);
  }
}

function displayForecast(data) {
  const middayForecasts = data.list.filter((entry) => entry.dt_txt.includes("15:00:00")).slice(0, 1);

  const forecastContainer = document.querySelector("#forecast");
  let forecastHTML = `<h3>Tomorrow's Forecast</h3>`;

  middayForecasts.forEach((day) => {
    forecastHTML += `
        <div class="forecast-day">
          <p>${new Date(day.dt_txt).toLocaleDateString()}</p>
          <p>${Math.round(day.main.temp)}&deg;F</p>
          <p>${capitalizeWords(day.weather[0].description)}</p>
          <img src="https://openweathermap.org/img/w/${day.weather[0].icon}.png" alt="${day.weather[0].description}">
        </div>
      `;
  });

  forecastContainer.innerHTML = forecastHTML;
}

function showMeetBanner() {
  const banner = document.getElementById("temp-banner");
  banner.style.display = "flex";
}

document.getElementById("close-banner").addEventListener("click", function () {
  document.getElementById("temp-banner").style.display = "none";
});

apiFetch();
fetchForecast();
showMeetBanner();