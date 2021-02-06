const key = 'fff554ac1ac6ae0af00741abef530250';
const apiBase = 'http://api.openweathermap.org/data/2.5/weather';

const getWeatherData = city =>{
    const url = `${apiBase}?q=${city}&units=metric&appid=${key}`;
    fetch(url)
   .then(response => response.json())
   .then(data => updateUI(data))
   
}
function searchButton(){
  //  console.log("clicked");
  const city = document.getElementById("city").value;
  getWeatherData(city);
}

function updateUI(data){
document.getElementById("show_city").innerText = data.name;
document.getElementById("show_temperature").innerText = data.main.temp;
document.getElementById("weather_status").innerText = data.weather[0].main;
document.getElementById('icon').setAttribute('src', `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`);
document.getElementById('city').value = "";
}

