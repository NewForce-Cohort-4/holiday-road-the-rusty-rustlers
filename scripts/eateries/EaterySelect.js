import {useEateries, getEateries } from './EateryProvider.js'
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

const eventHub = document.querySelector("main")
eventHub.addEventListener("change", (eateryObject) => {
    // console.log("you clicked somewhere in the main container")
    console.log(eateryObject.target.value)
    getEateries().then(() => {
        let selectedEatery = ""
        let allEateries = useEateries()
        for(let thisEatery of allEateries){
            console.log(allEateries)
        }
    }

    )
}

)