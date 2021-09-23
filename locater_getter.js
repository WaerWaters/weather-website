
let coords

function locater() {
    coords = navigator.geolocation.getCurrentPosition(crd)
}

function crd(pos) {
    let crd = pos.coords;
    return crd
}

/*let currentAPI;
let APIdata;
const APIkey = "033f8b7bdd5e5139c3fd1ac0efeab481"





async function Prep() {
    console.log("dumb")
    let Coords = navigator.geolocation.getCurrentPosition(locater)
}

async function PrepLoad() {
    console.log(lat,lon)

    currentAPI = (`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APIkey}`)
    const LoadAPI = await fetch(currentAPI);
    APIdata = await LoadAPI.json();

    console.log(APIdata)
}

    

    PrepLoad();
}*/