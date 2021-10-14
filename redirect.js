
function inBetween() {
    location.href = "city.html"
}

function storeCityFromCity() {
    //variable to pass
    let cityName = document.getElementById("city-input").value;
    
    //save to session
    sessionStorage.setItem("cityName", cityName);

    //redirect
    location.href = "in-between.html"
}

function storeCity() {
    //variable to pass
    let cityName = document.getElementById("city-input").value;
    
    //save to session
    sessionStorage.setItem("cityName", cityName);

    //redirect
    location.href = "city.html"
}

function getCity() {
    //retrieve from session
    let cityName = sessionStorage.getItem("cityName");
    document.querySelector("#city").textContent = cityName

    //to delete
    //sessionStorage.removeItem(KEY)
    //to clear all
    sessionStorage.clear()

    let weatherData = getWeatherData()
    weatherData.then(function(data) {
        console.log(data)
        for (let day = 0; day <= 4; day++) {
            time = (day + 1) * 8;
            if (day == 0) {
                if (data.list[day].weather[0].main == "Rain") {
                    let img = document.createElement("img"); 
                    img.src = "pictures/regn.png"; 
                    let src = document.getElementById("weather" + day.toString()); 
                    src.appendChild(img); 
                } else if (data.list[day].weather[0].main == "Clouds") {
                    let img = document.createElement("img"); 
                    img.src = "pictures/clouds.png"; 
                    let src = document.getElementById("weather" + day.toString()); 
                    src.appendChild(img); 
                } else if (data.list[day].weather[0].main == "Drizzle") {
                    let img = document.createElement("img"); 
                    img.src = "pictures/regn.png"; 
                    let src = document.getElementById("weather" + day.toString()); 
                    src.appendChild(img); 
                } else if (data.list[day].weather[0].main == "Clear") {
                    let img = document.createElement("img"); 
                    img.src = "pictures/sol.png"; 
                    let src = document.getElementById("weather" + day.toString()); 
                    src.appendChild(img); 
                }
                document.querySelector("#description" + day.toString()).textContent = `${data.list[day].weather[0].description}`
                document.querySelector("#temp" + day.toString()).textContent = `${data.list[day].main.temp}°`;
                if (data.list[day].weather[0].main == "Rain") {
                    document.querySelector("#rain" + day.toString()).textContent = `${data.list[day].rain["3h"]}mm precipitation`
                } else {
                    
                }
                document.querySelector("#pressure" + day.toString()).textContent = `${data.list[day].main.pressure}N/m^2`
                document.querySelector("#wind" + day.toString()).textContent = `wind ${data.list[day].wind.speed}m/s`;
                if (data.list[day].wind.deg < 22.5 || data.list[day].wind.deg > 337.5) {
                    document.querySelector("#wind-deg" + day.toString()).textContent = `N`;
                } else if (data.list[day].wind.deg < 22.5 * 2 || data.list[day].wind.deg > 22.5) {
                    document.querySelector("#wind-deg" + day.toString()).textContent = `NE`;
                } else if (data.list[day].wind.deg < 22.5 * 3 || data.list[day].wind.deg > 22.5 * 2) {
                    document.querySelector("#wind-deg" + day.toString()).textContent = `E`;
                } else if (data.list[day].wind.deg < 22.5 * 4 || data.list[day].wind.deg > 22.5 * 3) {
                    document.querySelector("#wind-deg" + day.toString()).textContent = `SE`;
                } else if (data.list[day].wind.deg < 22.5 * 5 || data.list[day].wind.deg > 22.5 * 4) {
                    document.querySelector("#wind-deg" + day.toString()).textContent = `S`;
                } else if (data.list[day].wind.deg < 22.5 * 6 || data.list[day].wind.deg > 22.5 * 5) {
                    document.querySelector("#wind-deg" + day.toString()).textContent = `SW`;
                } else if (data.list[day].wind.deg < 22.5 * 7 || data.list[day].wind.deg > 22.5 * 6) {
                    document.querySelector("#wind-deg" + day.toString()).textContent = `W`;
                } else if (data.list[day].wind.deg < 22.5 * 8 || data.list[day].wind.deg > 22.5 * 7) {
                    document.querySelector("#wind-deg" + day.toString()).textContent = `NW  `;
                }
            }
            if (day == 1) {
                if (data.list[time].weather[0].main == "Rain") {
                    let img = document.createElement("img"); 
                    img.src = "pictures/regn.png"; 
                    let src = document.getElementById("weather" + day.toString()); 
                    src.appendChild(img); 
                } else if (data.list[time].weather[0].main == "Clouds") {
                    let img = document.createElement("img"); 
                    img.src = "pictures/clouds.png"; 
                    let src = document.getElementById("weather" + day.toString()); 
                    src.appendChild(img); 
                } else if (data.list[time].weather[0].main == "Drizzle") {
                    let img = document.createElement("img"); 
                    img.src = "pictures/regn.png"; 
                    let src = document.getElementById("weather" + day.toString()); 
                    src.appendChild(img); 
                } else if (data.list[time].weather[0].main == "Clear") {
                    let img = document.createElement("img"); 
                    img.src = "pictures/sol.png"; 
                    let src = document.getElementById("weather" + day.toString()); 
                    src.appendChild(img); 
                }
                document.querySelector("#description" + day.toString()).textContent = `${data.list[time].weather[0].description}`
                document.querySelector("#temp" + day.toString()).textContent = `${data.list[time].main.temp}°`;
                if (data.list[time].weather[0].main == "Rain") {
                    document.querySelector("#rain" + day.toString()).textContent = `${data.list[time].rain["3h"]}mm precipitation`
                } else {
                    
                }
                document.querySelector("#pressure" + day.toString()).textContent = `${data.list[time].main.pressure}N/m^2`
                document.querySelector("#wind" + day.toString()).textContent = `wind ${data.list[time].wind.speed}m/s`;
                if (data.list[time].wind.deg < 22.5 || data.list[time].wind.deg > 337.5) {
                    document.querySelector("#wind-deg" + day.toString()).textContent = `N`;
                } else if (data.list[time].wind.deg < 22.5 * 2 || data.list[time].wind.deg > 22.5) {
                    document.querySelector("#wind-deg" + day.toString()).textContent = `NE`;
                } else if (data.list[time].wind.deg < 22.5 * 3 || data.list[time].wind.deg > 22.5 * 2) {
                    document.querySelector("#wind-deg" + day.toString()).textContent = `E`;
                } else if (data.list[time].wind.deg < 22.5 * 4 || data.list[time].wind.deg > 22.5 * 3) {
                    document.querySelector("#wind-deg" + day.toString()).textContent = `SE`;
                } else if (data.list[time].wind.deg < 22.5 * 5 || data.list[time].wind.deg > 22.5 * 4) {
                    document.querySelector("#wind-deg" + day.toString()).textContent = `S`;
                } else if (data.list[time].wind.deg < 22.5 * 6 || data.list[time].wind.deg > 22.5 * 5) {
                    document.querySelector("#wind-deg" + day.toString()).textContent = `SW`;
                } else if (data.list[time].wind.deg < 22.5 * 7 || data.list[time].wind.deg > 22.5 * 6) {
                    document.querySelector("#wind-deg" + day.toString()).textContent = `W`;
                } else if (data.list[time].wind.deg < 22.5 * 8 || data.list[time].wind.deg > 22.5 * 7) {
                    document.querySelector("#wind-deg" + day.toString()).textContent = `NW  `;
                }
            }
            if (day == 2) {
                if (data.list[time].weather[0].main == "Rain") {
                    let img = document.createElement("img"); 
                    img.src = "pictures/regn.png"; 
                    let src = document.getElementById("weather" + day.toString()); 
                    src.appendChild(img); 
                } else if (data.list[time].weather[0].main == "Clouds") {
                    let img = document.createElement("img"); 
                    img.src = "pictures/clouds.png"; 
                    let src = document.getElementById("weather" + day.toString()); 
                    src.appendChild(img); 
                } else if (data.list[time].weather[0].main == "Drizzle") {
                    let img = document.createElement("img"); 
                    img.src = "pictures/regn.png"; 
                    let src = document.getElementById("weather" + day.toString()); 
                    src.appendChild(img); 
                } else if (data.list[time].weather[0].main == "Clear") {
                    let img = document.createElement("img"); 
                    img.src = "pictures/sol.png"; 
                    let src = document.getElementById("weather" + day.toString()); 
                    src.appendChild(img); 
                }
                document.querySelector("#description" + day.toString()).textContent = `${data.list[time].weather[0].description}`
                document.querySelector("#temp" + day.toString()).textContent = `${data.list[time].main.temp}°`;
                if (data.list[time].weather[0].main == "Rain") {
                    document.querySelector("#rain" + day.toString()).textContent = `${data.list[time].rain["3h"]}mm precipitation`
                } else {
                    
                }
                document.querySelector("#pressure" + day.toString()).textContent = `${data.list[time].main.pressure}N/m^2`
                document.querySelector("#wind" + day.toString()).textContent = `wind ${data.list[time].wind.speed}m/s`;
                if (data.list[time].wind.deg < 22.5 || data.list[time].wind.deg > 337.5) {
                    document.querySelector("#wind-deg" + day.toString()).textContent = `N`;
                } else if (data.list[time].wind.deg < 22.5 * 2 || data.list[time].wind.deg > 22.5) {
                    document.querySelector("#wind-deg" + day.toString()).textContent = `NE`;
                } else if (data.list[time].wind.deg < 22.5 * 3 || data.list[time].wind.deg > 22.5 * 2) {
                    document.querySelector("#wind-deg" + day.toString()).textContent = `E`;
                } else if (data.list[time].wind.deg < 22.5 * 4 || data.list[time].wind.deg > 22.5 * 3) {
                    document.querySelector("#wind-deg" + day.toString()).textContent = `SE`;
                } else if (data.list[time].wind.deg < 22.5 * 5 || data.list[time].wind.deg > 22.5 * 4) {
                    document.querySelector("#wind-deg" + day.toString()).textContent = `S`;
                } else if (data.list[time].wind.deg < 22.5 * 6 || data.list[time].wind.deg > 22.5 * 5) {
                    document.querySelector("#wind-deg" + day.toString()).textContent = `SW`;
                } else if (data.list[time].wind.deg < 22.5 * 7 || data.list[time].wind.deg > 22.5 * 6) {
                    document.querySelector("#wind-deg" + day.toString()).textContent = `W`;
                } else if (data.list[time].wind.deg < 22.5 * 8 || data.list[time].wind.deg > 22.5 * 7) {
                    document.querySelector("#wind-deg" + day.toString()).textContent = `NW  `;
                }
            }
            if (day == 3) {
                if (data.list[time].weather[0].main == "Rain") {
                    let img = document.createElement("img"); 
                    img.src = "pictures/regn.png"; 
                    let src = document.getElementById("weather" + day.toString()); 
                    src.appendChild(img); 
                } else if (data.list[time].weather[0].main == "Clouds") {
                    let img = document.createElement("img"); 
                    img.src = "pictures/clouds.png"; 
                    let src = document.getElementById("weather" + day.toString()); 
                    src.appendChild(img); 
                } else if (data.list[time].weather[0].main == "Drizzle") {
                    let img = document.createElement("img"); 
                    img.src = "pictures/regn.png"; 
                    let src = document.getElementById("weather" + day.toString()); 
                    src.appendChild(img); 
                } else if (data.list[time].weather[0].main == "Clear") {
                    let img = document.createElement("img"); 
                    img.src = "pictures/sol.png"; 
                    let src = document.getElementById("weather" + day.toString()); 
                    src.appendChild(img); 
                }
                document.querySelector("#description" + day.toString()).textContent = `${data.list[time].weather[0].description}`
                document.querySelector("#temp" + day.toString()).textContent = `${data.list[time].main.temp}°`;
                if (data.list[time].weather[0].main == "Rain") {
                    document.querySelector("#rain" + day.toString()).textContent = `${data.list[time].rain["3h"]}mm precipitation`
                } else {
                    
                }
                document.querySelector("#pressure" + day.toString()).textContent = `${data.list[time].main.pressure}N/m^2`
                document.querySelector("#wind" + day.toString()).textContent = `wind ${data.list[time].wind.speed}m/s`;
                if (data.list[time].wind.deg < 22.5 || data.list[time].wind.deg > 337.5) {
                    document.querySelector("#wind-deg" + day.toString()).textContent = `N`;
                } else if (data.list[time].wind.deg < 22.5 * 2 || data.list[time].wind.deg > 22.5) {
                    document.querySelector("#wind-deg" + day.toString()).textContent = `NE`;
                } else if (data.list[time].wind.deg < 22.5 * 3 || data.list[time].wind.deg > 22.5 * 2) {
                    document.querySelector("#wind-deg" + day.toString()).textContent = `E`;
                } else if (data.list[time].wind.deg < 22.5 * 4 || data.list[time].wind.deg > 22.5 * 3) {
                    document.querySelector("#wind-deg" + day.toString()).textContent = `SE`;
                } else if (data.list[time].wind.deg < 22.5 * 5 || data.list[time].wind.deg > 22.5 * 4) {
                    document.querySelector("#wind-deg" + day.toString()).textContent = `S`;
                } else if (data.list[time].wind.deg < 22.5 * 6 || data.list[time].wind.deg > 22.5 * 5) {
                    document.querySelector("#wind-deg" + day.toString()).textContent = `SW`;
                } else if (data.list[time].wind.deg < 22.5 * 7 || data.list[time].wind.deg > 22.5 * 6) {
                    document.querySelector("#wind-deg" + day.toString()).textContent = `W`;
                } else if (data.list[time].wind.deg < 22.5 * 8 || data.list[time].wind.deg > 22.5 * 7) {
                    document.querySelector("#wind-deg" + day.toString()).textContent = `NW  `;
                }
            }
            if (day == 4) {
                if (data.list[time-1].weather[0].main == "Rain") {
                    let img = document.createElement("img"); 
                    img.src = "pictures/regn.png"; 
                    let src = document.getElementById("weather" + day.toString()); 
                    src.appendChild(img); 
                } else if (data.list[time-1].weather[0].main == "Clouds") {
                    let img = document.createElement("img"); 
                    img.src = "pictures/clouds.png"; 
                    let src = document.getElementById("weather" + day.toString()); 
                    src.appendChild(img); 
                } else if (data.list[time-1].weather[0].main == "Drizzle") {
                    let img = document.createElement("img"); 
                    img.src = "pictures/regn.png"; 
                    let src = document.getElementById("weather" + day.toString()); 
                    src.appendChild(img); 
                } else if (data.list[time-1].weather[0].main == "Clear") {
                    let img = document.createElement("img"); 
                    img.src = "pictures/sol.png"; 
                    let src = document.getElementById("weather" + day.toString()); 
                    src.appendChild(img); 
                }
                document.querySelector("#description" + day.toString()).textContent = `${data.list[time-1].weather[0].description}`
                document.querySelector("#temp" + day.toString()).textContent = `${data.list[time-1].main.temp}°`;
                if (data.list[time-1].weather[0].main == "Rain") {
                    document.querySelector("#rain" + day.toString()).textContent = `${data.list[time-1].rain["3h"]}mm precipitation`
                } else {
                    
                }
                document.querySelector("#pressure" + day.toString()).textContent = `${data.list[time-1].main.pressure}N/m^2`
                document.querySelector("#wind" + day.toString()).textContent = `wind ${data.list[time-1].wind.speed}m/s`;
                if (data.list[time-1].wind.deg < 22.5 || data.list[time-1].wind.deg > 337.5) {
                    document.querySelector("#wind-deg" + day.toString()).textContent = `N`;
                } else if (data.list[time-1].wind.deg < 22.5 * 2 || data.list[time-1].wind.deg > 22.5) {
                    document.querySelector("#wind-deg" + day.toString()).textContent = `NE`;
                } else if (data.list[time-1].wind.deg < 22.5 * 3 || data.list[time-1].wind.deg > 22.5 * 2) {
                    document.querySelector("#wind-deg" + day.toString()).textContent = `E`;
                } else if (data.list[time-1].wind.deg < 22.5 * 4 || data.list[time-1].wind.deg > 22.5 * 3) {
                    document.querySelector("#wind-deg" + day.toString()).textContent = `SE`;
                } else if (data.list[time-1].wind.deg < 22.5 * 5 || data.list[time-1].wind.deg > 22.5 * 4) {
                    document.querySelector("#wind-deg" + day.toString()).textContent = `S`;
                } else if (data.list[time-1].wind.deg < 22.5 * 6 || data.list[time-1].wind.deg > 22.5 * 5) {
                    document.querySelector("#wind-deg" + day.toString()).textContent = `SW`;
                } else if (data.list[time-1].wind.deg < 22.5 * 7 || data.list[time-1].wind.deg > 22.5 * 6) {
                    document.querySelector("#wind-deg" + day.toString()).textContent = `W`;
                } else if (data.list[time-1].wind.deg < 22.5 * 8 || data.list[time-1].wind.deg > 22.5 * 7) {
                    document.querySelector("#wind-deg" + day.toString()).textContent = `NW  `;
                }
            }
        }
    }) 
}


const openweatherAPIKey = "6e8451bd63a23a43ff60968eae073e4c";

async function getWeatherData() {
    const response = await fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${document.querySelector("#city").textContent}&appid=${openweatherAPIKey}`);
    return await response.json();
}
