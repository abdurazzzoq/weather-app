

const api = {
    key: '0de1cd9c40eb5ce0ed1ab633b1cb785e',
    baseurl: 'https://api.openweathermap.org/data/2.5/',
};
const searchBox = document.querySelector('.search-box');
searchBox.addEventListener('keypress', setQuery );
function setQuery(e){
    getResults(searchBox.value);
    if(e.keyCode == 13){
        console.log(searchBox.value);
    }
}
function getResults(query) {
    fetch(`${api.baseurl}weather?q=${query}&units=metric&APPID=${api.key}`).then((weather)=>{
        return weather.json();
    }).then(displayResults);
}

function displayResults(weather){
console.log(weather); 
let city = document.querySelector('.location .city');
city.innerHTML = `${weather.name}, ${weather.sys.country}`;
let now = new Date();
let date = document.querySelector('.location .date');
date.innerHTML = dateBuilder(now);
let temp = document.querySelector('.main-temp .temp');
temp.innerHTML = `${Math.round(weather.main.temp)}<span>°C</span>`;
let weatherEl = document.querySelector('.weather');
weatherEl.innerHTML = weather.weather[0].main;
let hiLow = document.querySelector('.hi-low');

hiLow.innerHTML = `${Math.round(weather.main.temp_min)}°C / ${Math.round(weather.main.temp_max)}°C`;
}
function dateBuilder(s) {
    let months = ['Janunary', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'Sepmtempber', 'October', 'November', 'December'];
    let days = [ 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    let day = days[s.getDay()];
    let date = s.getDate();
    let month = months[s.getMonth()];
    let year = s.getFullYear();
    return ` ${day} ${date} ${month} ${year}`;
}




