import "./../scss/main.scss";

//input variables
const cityInput = document.querySelector(".input");
const form = document.getElementById("search-form");

//details variables
const cityName = document.querySelector(".city-name");
const dateTime = document.querySelector(".date-time");
const degree = document.querySelector(".degree");
const situation = document.querySelector('.situation');
const description = document.querySelector(".description");
const weatherIcon = document.querySelector(".weather-icon");
const wind = document.querySelector(".wind");
const humid = document.querySelector(".humid");
const gust = document.querySelector(".gust");
const pressure = document.querySelector(".pressure");
const visibility = document.querySelector(".visibility");

let current = new Date();

const days = {
    1: "Monday",
    2: "Tuesday",
    3: "Wednesday",
    4: "Thursday",
    5: "Friday",
    6: "Saturday",
    7: "Sunday"
}

const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
]


//add the http request for requesting the api
let apiRequest = new XMLHttpRequest();



//add event listener when submitting the form
form.addEventListener('submit', (e) => {
    //prevent default for refreshing the page
    e.preventDefault();

    //store the user input
    const chosenCity = cityInput.value;

    //send a request to the open weather api

    //1 open and get the api
    apiRequest.open('GET', 'https://api.openweathermap.org/data/2.5/weather?q='+ chosenCity + '&appid=5d27d5f754c4d9fb46a79a45598f8f18&mdoe=json&units=metric')

    //2 send the request
    apiRequest.send();

})


//this function is called everytime the ready state changes
//ready state changes from 0 to 4
//4 means object is populate by the api

apiRequest.onreadystatechange = () => {

    //base case error if city does not exist
    if (apiRequest.status === 404) {
        cityName.textContent = "City not found"
    }

    //variable containing the json object of the result of the api

    const apiResponse = JSON.parse(apiRequest.response);

    //set the results

    //set the degree
    let degreeCelsius = apiResponse.main.temp;
    degree.textContent = Math.round(degreeCelsius) + '°';

    //set city name
    cityName.textContent = apiResponse.name;

    //set date time
    let year = current.getFullYear().toString();
    let yearArr = year.split("");
    yearArr.splice(0,2);

    dateTime.textContent = `${current.getHours()}:${current.getMinutes()} - ${days[current.getDay()]}, ${current.getDate()} ${months[current.getMonth()]} '${yearArr.join("")}`;

    //set situation
    situation.textContent = apiResponse.weather[0].main;

    //set icon here
    weatherIcon.innerHTML = `<img src="http://openweathermap.org/img/wn/${apiResponse.weather[0].icon}.png">`

    //set description
    description.textContent = `Feels like ${Math.round(apiResponse.main.feels_like)}°C. ${apiResponse.weather[0].description}`

    //set wind
    let direction = apiResponse.wind.deg;
    let compass = () => {
        if (direction >= 0 && direction <=22) {
            return "N";
        }
        else if (direction >= 23 && direction <= 67) {
            return "NE";
        }

        else if (direction >= 68 && direction <= 112) {
            return "E";
        }
        // 113 157
        else if (direction >= 113 && direction <= 157) {
            return "SE";
        }

        //158 202 
        else if (direction >= 158 && direction <= 202) {
            return "S";
        }

        //203 247 sw 
        else if (direction >= 203 && direction <= 247) {
            return "SW";
        }

        //248 292 W
        else if (direction >= 248 && direction <= 292) {
            return "W";
        }

        //293 337 nw 
        else if (direction >= 293 && direction <= 337) {
            return "NW";
        }

        //338 359 
        else if (direction >= 338 && direction <= 359) {
            return "N";
        }
    }
    wind.textContent = `${apiResponse.wind.speed} m/s ${compass()}`

    //set humid
    humid.textContent = `${apiResponse.main.humidity}%`;

    //set sea level 
    gust.textContent = `${apiResponse.wind.gust}m/s`
    
    //set pressure 
    pressure.textContent = `${apiResponse.main.pressure}hPa`

    //set visibility
    let km = apiResponse.visibility / 1000;
    visibility.textContent = `${km}km`

}