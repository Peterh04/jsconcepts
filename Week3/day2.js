
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
// const form =document.querySelector('.search.form')
// const input =document.querySelector('.searc-input')
// let userInput = 'Nairobi'
// form.addEventListener('submit', (e) =>{
//     e.preventDefault()
//     userInput = input.value
// })
// // displayWeatherData()
// const YOUR_API_KEY = '9ad5cb492ab5480ca3364600240802'
// const fetchData = async() =>{

//     //fetch data from API endpoint
//     const responseWeather = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=${YOUR_API_KEY}&q=kenya]`)
//     //connecting data to json
//     const dataWeather = await responseWeather.json()
//     // get results from the data
   
// console.log(dataWeather)
// }

// fetchData()


// const card = document.createElement('div')
// card.classList.add('card')
// card.innerHTML = `
// <div>
// img src = "${
//     "//cdn.weatherapi.com/weather/64x64/night/122.png"}
//     </div>

//     <h2> ${dataWeather.location.country}</h2>

const container =document.querySelector('.container')
const fetchData = async() =>{

    //fetch data from API endpoint
    const response = await fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=abf2c040`)
    //connecting data to json
    const data= await response.json()
    // get results from the data
   
// console.log(data)
console.log(data.Title)
console.log(data.Genre)
console.log(data.Poster)


const card = document.createElement('div')
card.classList.add('card')
card.innerHTML= `

<div class = 'container'>

<img src = "${data.Poster}"/>
<p>${data.Title}</p>
<p>${data.Genre}</p>
</div>

`
container.appendChild(card)

}
fetchData()
