const apiKey = "0d37d999b4705308cc960c47e35d754d";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".card__search-container input");
const searchBtn = document.querySelector(".card__search-container i");
const wheatherIcon = document.querySelector(".wheather__icon");


async function checkWheather(city){
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    let data = await response.json();

    if (response.status == 404) {
        document.querySelector(".error").style.display= "block";
        return;
    }

    document.querySelector(".whather__city").innerHTML = data.name;
    document.querySelector(".whather__temp").innerHTML = Math.round(data.main.temp) + "°c";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = Math.round(data.wind.speed) + " km/hr";


    console.log(wheatherIcon.src);
    console.log(data.weather[0].main);

    if (data.weather[0].main == "Clouds") 
    {
        wheatherIcon.src = "./assets/clouds.png";
        
    } 
    if(data.weather[0].main == "Clear") 
    {
        wheatherIcon.src = "./assets/clear.png";
    } 
    if(data.weather[0].main == "Rain") 
    {
        wheatherIcon.src = "./assets/rain.png";
    } 
    if(data.weather[0].main == "Drizzle") 
    {
        wheatherIcon.src = "./assets/drizzle.png";
    } 
    if (data.weather[0].main == "Mist") 
    {
        wheatherIcon.src = "./assets/mist.png";
    }

    document.querySelector(".wheather").style.display = "flex"
    document.querySelector(".error").style.display= "none";
}


searchBtn.addEventListener("click", () => {
    checkWheather(searchBox.value);
})