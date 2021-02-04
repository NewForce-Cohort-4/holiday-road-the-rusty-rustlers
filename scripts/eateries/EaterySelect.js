import {useEateries, getEateries } from './EateryProvider.js'
import {singleEatery, eateryDetails} from './Eatery.js'
// Referenced a DOM element for the dropdown list
const contentTarget = document.querySelector(".eateries-drop-down")

// getting all of the eateries from the API 
export const eaterySelect = () => {
    getEateries().then(() => {
        const eateriesArray = useEateries()
        render(eateriesArray)
    })
}

// this function renders  the select drop down list to the browser with all of the eateries listed
const render = eateryCollection => {
    contentTarget.innerHTML = `
    <select class="eatery__dropdown" id="eatery__select">
        <option value="0">Please select a eatery...</option>
        ${
            eateryCollection.map(currentEatery =>{
                const eateryName = currentEatery.businessName
                return `<option>${eateryName}</option>`
            })
        }
    </select>
    `
}

//listening function when an item is selected from the eatery dropdown list and sends it into the itenierary preview section
const eventHub = document.querySelector("main")
eventHub.addEventListener("change", (eateryObject) => {
    // console.log("you clicked somewhere in the main container")
    // console.log(eateryObject.target.value)
    getEateries().then(() => {
        let selectedEatery = ""
        let allEateries = useEateries()
        for(let thisEatery of allEateries){
            if(eateryObject.target.value === thisEatery.businessName){
                selectedEatery += singleEatery(thisEatery)
            }
        }
        document.querySelector(".eateries-preview").innerHTML = selectedEatery
    })
    document.querySelector(".eateries-preview").innerHTML = ""
    document.querySelector(".eateries-more-details").innerHTML = ""
})

// listening function for when the more details button is selected 
document.querySelector(".eateries-preview").addEventListener("click", (detailsObject) => {
    console.log(detailsObject.target.id)
    let eateryHTML = ""
    if(detailsObject.target.id.includes("eateries--")){
    // get the amenities to appear in the console when the More Details button is clicked
    // .split will seperate the id and .pop() will give me just the targeted items id   
        
        const idOfEateryClicked = detailsObject.target.id.split("--").pop()
        const allTheEateries = useEateries()
        const matchingEatery = allTheEateries.find((singleEateryInLoop) => {
            return singleEateryInLoop.id === +idOfEateryClicked
        })

        console.log("this should be the matching eateries ameneties", matchingEatery)
        
       // print the ameneties to the correct div
        document.querySelector(".eateries-more-details").innerHTML = eateryDetails(matchingEatery)       
    }
})