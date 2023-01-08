const main = document.getElementById("main");
const form = document.getElementById("form");
const search = document.getElementById("search");
const submit = document.getElementById("submit");

function fetchWeather(){
    var api = 'http://api.openweathermap.org/data/2.5/weather?q=';
    const city = document.getElementById("search").value;
    var key = '&APPID=75f387deab4456cd89ba5a152153d972';
    var units = '&units=metric';
    const url = api + city + key + units;
    async function getData(){
        try{
        const resp = await fetch(url);
        const respData = await resp.json();
        displayWeather(respData);
        } catch(error){
            console.log(error);
        }
    }
    getData();
}

function displayWeather(data){
    const name = data.name;
    const {main, icon} = data.weather[0];
    const speed = data.wind.speed;
    const {temp, humidity} = data.main;
    console.log(name, main, icon, speed, humidity, temp);
    document.querySelector(".city").innerText = "Weather in " + name;
    document.querySelector(".temp").innerText = temp+ "°C";
    document.querySelector(".description").innerText = main;
    document.querySelector(".humidity").innerText = "Humidity: " + humidity + "%";
    document.querySelector(".wind").innerText = "Wind speed: " + speed + " km/h";
    document.querySelector(".icon").src = "https://openweathermap.org/img/wn/" + icon + ".png";
}

submit.addEventListener('click', ()=>{
    fetchWeather();
})


