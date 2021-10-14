const confirm = document.querySelector("#confirm")
const cityInput = document.querySelector("#city-input")
const weatherElement = document.querySelector("#weather")
const tempElementHigh = document.querySelector("#temperatureHigh")
const tempElementLow = document.querySelector("#temperatureLow")
const headLine = document.querySelector("#headline")
const closestMatch = document.querySelector("#closest-match")
const day = document.querySelector("#day")
const count = [1,2,3,4,5]
const APIKey = "ufDZJwfr9wCVbbCgmY4y8oQl3SwZDMEX";




async function onClick() {
	try {
		const locationData = await getLocationKey(cityInput.value);
		console.log(locationData);
		const weatherData = await getWeather(locationData[0].Key);
		const tempDataHigh = await fahrenheitToCelcius(weatherData.DailyForecasts[0].Temperature.Maximum);
		const tempDataLow = await fahrenheitToCelcius(weatherData.DailyForecasts[0].Temperature.Minimum);
		const headlineData = await combineHeadline(weatherData.Headline);
		
		
		cityElement.textContent = cityInput.value
		headLine.textContent = headlineData
		day.textContent = count[0]
		weatherElement.textContent = weatherData.DailyForecasts[0].Day.IconPhrase
		tempElementHigh.textContent = `${Math.floor(tempDataHigh)}°C`
		tempElementLow.textContent = `${Math.floor(tempDataLow)}°C`
		console.log(weatherData)
	} catch {
		/*if (cityInput.value == "") {
			clearUi(headLine);
			clearUi(day);
			clearUi(weatherElement);
			clearUi(tempElementHigh);
			clearUi(tempElementLow);
		} else {
			clearUi(headLine);
			clearUi(day);
			clearUi(weatherElement);
			clearUi(tempElementHigh);
			clearUi(tempElementLow);
			cityElement.textContent = `Could not find the city: ${cityInput.value}`
		}*/
	}
}

/*async function clearUi(data) {
	data.textContent = "";
}*/

async function getLocationKey(city) {
	const response = await fetch(`http://dataservice.accuweather.com/locations/v1/cities/search?apikey=${APIKey}&q=${city}`);
	return await response.json();
}	

async function getWeather(data) {
	const response = await fetch(`http://dataservice.accuweather.com/forecasts/v1/daily/5day/${data}?apikey=${APIKey}`)
	return await response.json();
}

async function fahrenheitToCelcius(data) {
	return (data.Value-32)*5/9;
}

async function combineHeadline(data) {
	const category = data.Category;
	const text = data.Text;
	const combined = `${category}: ${text}`
	return combined
}
