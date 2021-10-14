let precipitationPressed = false;
let windPressed = false;
let tempPressed = false;
let pressurePressed = false;
let cloudsPressed = false;

let onSucces = function locater(pos) {
    lat = pos.coords.latitude;
    lng = pos.coords.longitude;
    initMap(lat, lng);
    //console.log(getCities());

} 
navigator.geolocation.getCurrentPosition(onSucces)
 

let map;
function initMap(latValue, lngValue) {
    let map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: latValue, lng: lngValue},
        zoom: 6
    });

    let precipitation = new google.maps.ImageMapType({
        getTileUrl: function(coord, zoom) {
        return "https://tile.openweathermap.org/map/precipitation_new/" + 
                zoom + "/" + coord.x + "/" + coord.y + ".png?appid=6e8451bd63a23a43ff60968eae073e4c";
        },
        tileSize: new google.maps.Size(256, 256),
        maxZoom: 9,
        minZoom: 0,
        name: 'precipitation'
    });

    let temp = new google.maps.ImageMapType({
        getTileUrl: function(coord, zoom) {
        return "https://tile.openweathermap.org/map/temp_new/" + 
                zoom + "/" + coord.x + "/" + coord.y + ".png?appid=6e8451bd63a23a43ff60968eae073e4c";
        },
        tileSize: new google.maps.Size(256, 256),
        maxZoom: 9,
        minZoom: 0,
        name: 'temp'
    });

    let clouds = new google.maps.ImageMapType({
        getTileUrl: function(coord, zoom) {
        return "https://tile.openweathermap.org/map/clouds_new/" + 
                zoom + "/" + coord.x + "/" + coord.y + ".png?appid=6e8451bd63a23a43ff60968eae073e4c";
        },
        tileSize: new google.maps.Size(256, 256),
        maxZoom: 9,
        minZoom: 0,
        name: 'clouds'
    });

    let pressure = new google.maps.ImageMapType({
        getTileUrl: function(coord, zoom) {
        return "https://tile.openweathermap.org/map/pressure_new/" + 
                zoom + "/" + coord.x + "/" + coord.y + ".png?appid=6e8451bd63a23a43ff60968eae073e4c";
        },
        tileSize: new google.maps.Size(256, 256),
        maxZoom: 9,
        minZoom: 0,
        name: 'pressure'
    });

    let wind = new google.maps.ImageMapType({
        getTileUrl: function(coord, zoom) {
        return "https://tile.openweathermap.org/map/wind_new/" + 
                zoom + "/" + coord.x + "/" + coord.y + ".png?appid=6e8451bd63a23a43ff60968eae073e4c";
        },
        tileSize: new google.maps.Size(256, 256),
        maxZoom: 9,
        minZoom: 0,
        name: 'wind'
    });

    //map.overlayMapTypes.insertAt(2, wind);
    //map.overlayMapTypes.insertAt(3, pressure);
    //map.overlayMapTypes.insertAt(4, clouds);

    document.getElementById("precipitation").onclick = function() {
        if (precipitationPressed == false) {
            map.overlayMapTypes.setAt(0, precipitation)
            precipitationPressed = true
            console.log(map.overlayMapTypes.Be)
        } else if (map.overlayMapTypes.Be[0].name == "precipitation") {
            map.overlayMapTypes.removeAt(0)
            precipitationPressed = false
        }
    }
    
    document.getElementById("temp").onclick = function() {
        if (tempPressed == false) {
            map.overlayMapTypes.setAt(1, temp)
            tempPressed = true
            console.log(map.overlayMapTypes.Be)
        } else if (map.overlayMapTypes.Be.length >= 2) {
            map.overlayMapTypes.removeAt(1)
            tempPressed = false
        } else if (map.overlayMapTypes.Be[0].name == "temp") {
            map.overlayMapTypes.removeAt(0)
            tempPressed = false
        } 
    }

    document.getElementById("wind").onclick = function() {
        if (windPressed == false) {
            map.overlayMapTypes.setAt(2, wind)
            windPressed = true
            console.log(map.overlayMapTypes.Be)
        } else if (map.overlayMapTypes.Be.length >= 3) {
            map.overlayMapTypes.removeAt(2)
            windPressed = false
        } else if (map.overlayMapTypes.Be.length == 2) {
            map.overlayMapTypes.removeAt(1)
            windPressed = false
        } else if (map.overlayMapTypes.Be[0].name == "wind") {
            map.overlayMapTypes.removeAt(0)
            windPressed = false
        } 
    }

    document.getElementById("pressure").onclick = function() {
        if (pressurePressed == false) {
            map.overlayMapTypes.setAt(3, pressure)
            pressurePressed = true
            console.log(map.overlayMapTypes.Be)
        } else if (map.overlayMapTypes.Be.length >= 4) {
            map.overlayMapTypes.removeAt(3)
            pressurePressed = false
        } else if (map.overlayMapTypes.Be.length == 3) {
            map.overlayMapTypes.removeAt(2)
            pressurePressed = false
        } else if (map.overlayMapTypes.Be.length == 2) {
            map.overlayMapTypes.removeAt(1)
            pressurePressed = false
        } else if (map.overlayMapTypes.Be[0].name == "pressure") {
            map.overlayMapTypes.removeAt(0)
            pressurePressed = false
        } 
    }

    document.getElementById("clouds").onclick = function() {
        if (cloudsPressed == false) {
            map.overlayMapTypes.setAt(3, clouds)
            cloudsPressed = true
            console.log(map.overlayMapTypes.Be)
        } else if (map.overlayMapTypes.Be.length >= 5) {
            map.overlayMapTypes.removeAt(4)
            cloudsPressed = false
        } else if (map.overlayMapTypes.Be.length == 4) {
            map.overlayMapTypes.removeAt(3)
            cloudsPressed = false
        } else if (map.overlayMapTypes.Be.length == 3) {
            map.overlayMapTypes.removeAt(2)
            cloudsPressed = false
        } else if (map.overlayMapTypes.Be.length == 2) {
            map.overlayMapTypes.removeAt(1)
            cloudsPressed = false
        } else if (map.overlayMapTypes.Be[0].name == "clouds") {
            map.overlayMapTypes.removeAt(0)
            cloudsPressed = false
        } 
    }
}











