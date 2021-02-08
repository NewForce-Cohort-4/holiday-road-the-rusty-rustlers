/*
 *   parkselect component that renders a select HTML element
 *   which lists all parks in the Glassdale PD API
 */
import { getparks, useparks } from "./ParkProvider.js";
// import {CriminalList} from "../criminals/CriminalList.js"
import { parkInfo } from './parks.js';
// Get a reference to the DOM element where the <select> will be rendered
// const contentTarget = document.querySelector(".parks-select-container");

const contentTarget = document.querySelector(".park-drop-down");
// const dropdownTarget = document.querySelector(".attraction-drop-down")

export const ParkSelect = () => {
  // Get all parks from application state
  getparks().then(() => {
    const parksArray = useparks();
    render(parksArray);
  });
};

const render = (parksCollection) => {
  /*
        Use interpolation here to invoke the map() method on
        the parksCollection to generate the option elements.
        Look back at the example provided above.
    */
  contentTarget.innerHTML = `
        <select class="dropdown" id="parkSelect">
            <option value="0">Please select a park...</option>
            ${
                parksCollection.map((currentParkInLoop) => {
                const parkName = currentParkInLoop.fullName
                return `<option>${parkName}</option>`
            })}
        </select>
    `
};

// This won't throw an error, but it will fire any time there's a change event anywhere in the main container
const eventHub = document.querySelector(".park-drop-down")

 eventHub.addEventListener("change", (eventObject) => {
    console.log("You clicked somewhere in the main container")
    console.log(eventObject)

    // To be more specific, we need to know specifically what we clicked on
    console.log("Here is the element you clicked on: ", eventObject.target.id)

    if(eventObject.target.id === "parkSelect"){
        console.log("You selected something from the park dropdown")
        console.log("This is the park that was selected: ", eventObject.target.value)
        // Your code goes here!
          /*
        - When we select a park, we need to filter the criminals in CriminalList.
        - Start by importing the CriminalList component at the top of this file. - CHECK
        - Then call CriminalList - CHECK
        // and pass in information about the park that was chosen
        */
       const parkThatWasChosen = eventObject.target.value
       console.log("The park that was chosen: ", parkThatWasChosen)

    //    ParkList(parkThatWasChosen)


    // document.querySelector(".park-preview").innerHTML=
    // `${parkThatWasChosen}
    // <button id="attractions--${parkThatWasChosen}">More Details</button>`

    const parkContainer = document.querySelector(".park-preview")
    let htmlBuilder = ""
    htmlBuilder += parkInfo(parkThatWasChosen)
    parkContainer.innerHTML = htmlBuilder
    
   
    }
    
    document.querySelector(".park-more-details").innerHTML = ""

})

document.querySelector(".park-preview").addEventListener("click", (eventObject) => {
console.log("anything")
    // Conditional to test if the thing they clicked on was the known associates button
  
    if(eventObject.target.id.includes("attractions--")){

        // The id of the known associates button is "associates--id", so we split the id up and just steal the number at the end
        const nameOfParkClicked = eventObject.target.id.split("--").pop()
        // console.log(eventObject.target.id.split("--"))
        // console.log(eventObject.target.id.split("--").pop())
        // Now we have to use that number to find the correct criminal from our collection

        // Get all the criminals
        const allTheParks = useparks()

        // Find the criminal that matches the id of the one we clicked on
        const matchingPark = allTheParks.find((singleParkInLoop) => {
            return singleParkInLoop.fullName === nameOfParkClicked
        })

        
        console.log("this should be the matching criminal's associates", matchingPark)
        console.log("MATT", matchingPark.contacts.phoneNumbers)
    
        document.querySelector(".park-more-details").innerHTML=
        `<p> About : </p>
        <p> ${matchingPark.description}</p>
        <p> address: ${matchingPark.addresses[0].line1}, ${matchingPark.addresses[0].city}, ${matchingPark.addresses[0].stateCode} ${matchingPark.addresses[0].postalCode}</p>
        <p> phoneNumber-1: ${matchingPark.contacts.phoneNumbers[0].phoneNumber}</p>`
        

            if (matchingPark.contacts.phoneNumbers[1].phoneNumber){
             document.querySelector(".park-more-details").innerHTML +=
            `<p> phoneNumber-2: ${matchingPark.contacts.phoneNumbers[1].phoneNumber}</p>`
}
        // document.querySelector(".park-more-details").innerHTML = ""
        
        // for(let i = 0; i < matchingPark.data.directionsInfo.length; i++){
        //     document.querySelector(".park-more-details").innerHTML += `
        //     <p>${matchingPark.known_associates[i].directionsInfo}</p>
           
        //     `
        // }
    }
    
})

/*{ <p>${matchingPark.known_associates[i].alibi}</p> }*/
