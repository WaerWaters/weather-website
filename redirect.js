//Vil blive kladt når der enten "city-input" eller "image" fra home.html bliver aktiveret
var cityName;
function redirect() {
    cityName = document.getElementById('city-input').value;
    window.location.href = "city.html";
}
//Her kan man tilgå by navnet
function getCityName(){
    return cityName;
}
