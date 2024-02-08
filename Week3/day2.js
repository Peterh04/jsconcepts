
// const fetchdata= require('./data.json');

// console.log(fetchdata)

// const displayData = ()=>{
//     fetchdata.products.forEach((product) =>{
// console.log(product.title)
//     })
// }

// displayData()

// const fetchWeather = require('./weather.json');
// console.log (fetchWeather)

// const displayWeatherData = () =>{
//     const data = fetchWeather.location.name[0]
//     console.log(data)
       
// }

// displayWeatherData()
const YOUR_API_KEY = '9ad5cb492ab5480ca3364600240802'
const fetchData = async() =>{

    //fetch data from API endpoint
    const responseWeather = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=${YOUR_API_KEY}&q=paris`)
    //connecting data to json
    const dataWeather = await responseWeather.json()
    // get results from the data
   
console.log(dataWeather)
}

fetchData()