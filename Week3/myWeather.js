
let API_KEY = "a8e71c9932b20c4ceb0aed183e6a83bb";

const searchCity = () =>{
	const city = document.querySelector('#city-input').value
	getWeatherData(city)
	.then((res) =>{
		showWeatherData(res)
	}).catch((error) =>{
		console.log(error);
		console.log('something happemed')
	})
}


const getWeatherData = (city) => {
	const URL = "https://api.openweathermap.org/data/2.5/weather";
	const FULL_URL = `${URL}?q=${city}&appid=${API_KEY}&units=imperial`;
	const weatherPromise  = fetch(FULL_URL);
	return weatherPromise.then((response) => {
	  return response.json();
	})
  }


showWeatherData = (weatherData) =>{
	document.querySelector('#city-name').innerHTML = weatherData.name
	document.querySelector('#weather-type').innerHTML = weatherData.weather[0].main
	document.querySelector('#temp').innerHTML = weatherData.main.temp;
	document.querySelector('#min-temp').innerHTML= weatherData.main.temp_min;
	document.querySelector('#max-temp').innerHTML = weatherData.main.temp_max
}




