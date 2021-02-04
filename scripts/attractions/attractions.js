//function when dropdown item is selected from the list 
export function attractionInfo(attractionObject){
    return `
    <section class="DOMAttraction">
    <h2>${attractionObject.name}</h2>
    <p>${attractionObject.description}</p>
    <button id="attractions--${attractionObject.id}">More Details</button>
    </section>
    `
}

//function that runs when more details button is pressed 
export function attractionMoreDetails(attractionObject){
    let attractionHTML = `
    <p>${attractionObject.city}, ${attractionObject.state}</p>
    `

    if(attractionObject.ameneties.souvenirs === true){
        attractionHTML += "<p>Souvenirs: Yes, there is a gift shop!</p>"
    } else {
        attractionHTML += "<p>Souvenirs: None</p>"
    } 
    if(attractionObject.ameneties.restrooms === true){
        attractionHTML += "<p>Restrooms: Yes</p>"
    } else {
        attractionHTML += "<p>Restrooms: None, it is recommended that you stop before your visit!</p>"
    }
    
    return `<section class="attraction-preview">${attractionHTML}</section`
}