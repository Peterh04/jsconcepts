let container = document.querySelector('.container')
let hold = document.querySelector('.hold')
const fetchData = async() =>{
    //fetch data from API endpoint
    const response = await fetch('https://rickandmortyapi.com/api/character')
    //connecting data to json
    const data = await response.json()
    // get results from the data
   const characters = data.results
   console.log(characters)

//    for (let i=0; i<characters.length; i++){
//     console.log (characters[i].name)
//    }

characters.forEach((character) => {
    console.log(character.name)

    const card= document.createElement('div')
    // card.textContent = character.name
    // card.appendChild(card)
    
    card.classList.add('card')
    card.innerHTML =`
    
    <img src = "${character.image}"/>
    </div>
    <div class = "charDetails">
    <p class = "nameChar">${character.name}</p>
    <p>${character.status} - ${character.species}</p>

    <p class= "subDetails">Last Known Location  :</p>
    <p>${character.location.name}</p>
 
    <p class = "subDetails">First seen in:</p>
    <p>${character.origin.name}</p>
     </div>
    

    `
   container.appendChild(card)

});

}

fetchData()