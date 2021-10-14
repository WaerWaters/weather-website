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
        } else if (map.overlayMapTypes.Be[0].name == "precipitation") {
            map.overlayMapTypes.removeAt(0)
            precipitationPressed = false
        } else if (map.overlayMapTypes.Be[0].name != "precipitation") {
            
        }
    }
    
    document.getElementById("temp").onclick = function() {
        if (map.overlayMapTypes.Be[0].name != temp ) {

        }
        if (tempPressed == false) { 
            map.overlayMapTypes.setAt(0, temp)
            tempPressed = true
            console.log(map)
        }
    }

    //map.overlayMapTypes.removeAt(0);

}











