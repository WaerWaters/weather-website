

let onSucces = function locater(pos) {
    lat = pos.coords.latitude;
    lng = pos.coords.longitude;
    initMap(lat, lng);

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
        name: 'mymaptype'
    });

    let temp = new google.maps.ImageMapType({
        getTileUrl: function(coord, zoom) {
        return "https://tile.openweathermap.org/map/temp_new/" + 
                zoom + "/" + coord.x + "/" + coord.y + ".png?appid=6e8451bd63a23a43ff60968eae073e4c";
        },
        tileSize: new google.maps.Size(256, 256),
        maxZoom: 9,
        minZoom: 0,
        name: 'mymaptype'
    });

    let clouds = new google.maps.ImageMapType({
        getTileUrl: function(coord, zoom) {
        return "https://tile.openweathermap.org/map/clouds_new/" + 
                zoom + "/" + coord.x + "/" + coord.y + ".png?appid=6e8451bd63a23a43ff60968eae073e4c";
        },
        tileSize: new google.maps.Size(256, 256),
        maxZoom: 9,
        minZoom: 0,
        name: 'mymaptype'
    });

    let pressure = new google.maps.ImageMapType({
        getTileUrl: function(coord, zoom) {
        return "https://tile.openweathermap.org/map/pressure_new/" + 
                zoom + "/" + coord.x + "/" + coord.y + ".png?appid=6e8451bd63a23a43ff60968eae073e4c";
        },
        tileSize: new google.maps.Size(256, 256),
        maxZoom: 9,
        minZoom: 0,
        name: 'mymaptype'
    });

    let wind = new google.maps.ImageMapType({
        getTileUrl: function(coord, zoom) {
        return "https://tile.openweathermap.org/map/wind_new/" + 
                zoom + "/" + coord.x + "/" + coord.y + ".png?appid=6e8451bd63a23a43ff60968eae073e4c";
        },
        tileSize: new google.maps.Size(256, 256),
        maxZoom: 9,
        minZoom: 0,
        name: 'mymaptype'
    });

map.overlayMapTypes.insertAt(0, precipitation);
map.overlayMapTypes.insertAt(1, temp);
map.overlayMapTypes.insertAt(1, wind);
map.overlayMapTypes.insertAt(1, pressure);
map.overlayMapTypes.insertAt(1, clouds);
}

