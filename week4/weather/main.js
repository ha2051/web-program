var myCity = [

{
    "name" : "Dubai",
    "country" : "UAE",
    "place" : "Dubai Mall"
} ,
{
    "name" : "Milan",
    "country" : "Italy",
    "place" : "Domo di milan"
} ,
{
    "name" : "Abu Dhabi",
    "country" : "UAE",
    "place" : "Marina Mall"
}
]
console.log(myCity[1].country);

const apiKey = 'YOUR_API_KEY';
const cityInput = document.getElementById('city-input');
const searchButton = document.getElementById('search-button');
const weatherInfo = document.getElementById('weather-info');
searchButton.addEventListener('click', () => {
    // Your code for fetching weather data will go here
  });
  const city = cityInput.value;
if (city === '') {
  alert('Please enter a city name.');
  return;
}

// Continue with API request

const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
fetch(apiUrl)
  .then((response) => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then((data) => {
    // Continue with parsing and updating weather info
  })
  .catch((error) => {
    // Handle errors
  });

  // Inside the second .then block
const weatherDescription = data.weather[0].description;
const mainTemperature = data.main.temp;
const windSpeed = data.wind.speed;

weatherInfo.innerHTML = `Weather: ${weatherDescription}<br>Temperature: ${mainTemperature}°C<br>Wind Speed: ${windSpeed} m/s`;

  