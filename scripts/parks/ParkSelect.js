/*
 *   parkselect component that renders a select HTML element
 *   which lists all parks in the Glassdale PD API
 */
import { getparks, useparks } from "./ParkProvider.js";
// import {CriminalList} from "../criminals/CriminalList.js"

// Get a reference to the DOM element where the <select> will be rendered
const contentTarget = document.querySelector(".parks-select-container");

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
const eventHub = document.querySelector("main")

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
       const parkChosen = eventObject.target.value
       CriminalList(parkChosen)
    }

})


