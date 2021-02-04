import { getWeather } from '../weather/WeatherProvider.js'
import { getAttractions, useAttractions } from './AttractionProvider.js'
import { attractionInfo, attractionMoreDetails } from './attractions.js'

const dropdownTarget = document.querySelector(".attraction-drop-down")

//function imported to main.js for dropdown to appear 
export const attractionSelect = () => {
    getAttractions().then(() => {
        const attractionsArray = useAttractions();
        console.log(attractionsArray);
        render(attractionsArray)
    })
}

// Attractions Dropdown Menu
const render = (attractionsCollection) => {
    dropdownTarget.innerHTML =`
    <select class="dropdown" id="attractionSelect">
    <option value ="0">Select Attraction...</option>
    ${attractionsCollection.map((currentAttractionInLoop) => {
        return `<option> ${currentAttractionInLoop.name} </option>`
    })}
    </select>`
}

//listening function when iten in attractions dropdown menu is clicked
const eventHub = document.querySelector(".attraction-drop-down")
eventHub.addEventListener("change", (attractionObject) => {
    console.log(attractionObject.target.value)
    getAttractions()
    .then(() => {
        let selectedAttraction = ""
        let allAttractions = useAttractions()
        for(let thisAttraction of allAttractions){
            if(attractionObject.target.value === thisAttraction.name){
                selectedAttraction += attractionInfo(thisAttraction)
            }
        }
        document.querySelector(".attraction-preview").innerHTML = selectedAttraction
    })
    document.querySelector(".attraction-more-details").innerHTML  = ""
})

//Attractions More Details Button
document.querySelector(".attraction-preview").addEventListener('click', (attractionFunction) => {
    if(attractionFunction.target.id.includes("attractions--")){
        console.log(attractionFunction.target.id)
        getAttractions().then(() => {
            let attractionHTML = ""
            let allAttractions = useAttractions()
            allAttractions.filter(currentAttraction => {
                console.log(attractionFunction.target.id.split("--")[1])
                if(parseInt(attractionFunction.target.id.split("--")[1]) === currentAttraction.id)
                attractionHTML += attractionMoreDetails(currentAttraction)
            })
            document.querySelector(".attraction-more-details").innerHTML = attractionHTML
        })}
})

