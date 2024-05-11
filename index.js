const apiKey="c609a07ee15e6ca5d0c6a9e9dbd042f6";
const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchbox=document.querySelector(".search input");
const searchbtn=document.querySelector(".search button");
const weatherIcon= document.querySelector(".weather-icon")

async function checkweather(city){
    const response = await fetch(apiUrl  + city + `&appid=${apiKey}`);
    var data = await response.json();
    console.log(data);
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/hr";   

    if(data.weather[0].main=="Clouds"){
        weatherIcon.src="images/cloudy-day-2.svg";
    }else if(data.weather[0].main=="Clear"){
        weatherIcon.src="images/day.svg";}
       else if (data.weather[0].main=="Rain"){
            weatherIcon.src="images/rainy-6.svg";}
         else if(data.weather[0].main=="Drizzle"){
            weatherIcon.src="images/rainy-1";}
            else if(data.weather[0].main=="Mist"){
                weatherIcon.src="images/cloudy-day-2.svg";}

}
searchbtn.addEventListener("click", function(){
    checkweather(searchbox.value);
})