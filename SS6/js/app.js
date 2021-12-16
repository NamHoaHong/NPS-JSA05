const APP_ID = '6a9d875ee04f37af8fc25ff7c9fd5544';
const DEFAULT_VALUE = "_ _";

const searchInput = document.querySelector('#search-input');
const cityName = document.querySelector('.city-name');
const weatherState = document.querySelector('.weather-state')
const weatherIcon = document.querySelector('.weather-icon');
const temperature = document.querySelector('.temperature');
const sunrise = document.querySelector('.sunrise');
const sunset = document.querySelector('.sunset');
const humidity = document.querySelector('.humidity');
const windSpeed = document.querySelector('.wind-speed');
searchInput.addEventListener('change', (event) => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${event.target.value}&appid=${APP_ID}&units=metric&lang=vi`)
    .then(async function (res) {
        const data = await res.json();
        console.log('searchInput', data);
        cityName.innerHTML = data.name ||DEFAULT_VALUE
        weatherState.innerHTML = data.weather[0].description || DEFAULT_VALUE
        weatherIcon.setAttribute('src',`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`)
        temperature.innerHTML = Math.round(data.main.temp)  || DEFAULT_VALUE
        sunrise.innerHTML = moment.unix(data.sys.sunrise).format('HH:mm')
        sunset.innerHTML = moment.unix(data.sys.sunset).format('HH:mm')
        humidity.innerHTML = data.main.humidity || DEFAULT_VALUE
        windSpeed.innerHTML = (data.wind.speed * 3.6).toFixed(2) || DEFAULT_VALUE
    })
})