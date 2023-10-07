let key = "d1074666bc5f68567590875990ac3676"


function dataonscreen(data) {
console.log(data)
 document.querySelector(".city-weather").innerHTML = "Tempo agora em" + "       " + data.name
 document.querySelector(".temperature").innerHTML = Math.floor(data.main.temp) + "º"
 document.querySelector(".climate").innerHTML = data.weather[0].description
 document.querySelector(".temperaturemax").innerHTML = "🔼" + "   "+ "Máxima:" + "       " + Math.floor(data.main.temp_max) + "º"
 document.querySelector(".line-temp").innerHTML = " |  "
 document.querySelector(".temperaturemin").innerHTML =  "🔽" + "  " + "Minima:" + "       "+  Math.floor(data.main.temp_min) + "º"
 document.querySelector(".sensation").innerHTML = "🌡️ " + "Sensação Térmica:"  + "    " +  Math.floor(data.main.feels_like) + "º"
 document.querySelector(".moisture").innerHTML =  "💧" + "Umidade:" + "       " + data.main.humidity + "%"
 document.querySelector(".line").innerHTML = " |  "
 document.querySelector(".speed").innerHTML = "💨" + "  "+ "Vento:" + "    " + data.wind.speed + "  " + "km/h"
document.querySelector(".icon").src = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`

}

async function searchcity(city) {
    const data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&lang=pt_br&units=metric`).then (response => response.json())

    dataonscreen(data)
}

function clickbutton() {
const city = document.querySelector(".city").value

searchcity(city)
}