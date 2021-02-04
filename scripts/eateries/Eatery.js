// function that will print to the itenierary preview section of the html page 
export function singleEatery(eateryObject){
    return `
    <section class="eatery_card">
    <h2>${eateryObject.businessName}</h2>
    <p>${eateryObject.description}</p>
    <button id="eateries--${eateryObject.id}">More Details</button>
    </section>
    `
}
// function that will print to the DOM with a card representing additional details when you click the more details button
export function eateryDetails(detailsObject){
    let eateryHTML = `
    <p>City: ${detailsObject.city}</p>
    <p>State: ${detailsObject.state}</p>
    <p>Ameneties:</p>
    `
    if(detailsObject.ameneties.wheelchairAccessible === true){
        eateryHTML += "<p>Wheelchair Accesible</p>"
    } else{
        eateryHTML += "<p>Not Wheelchair Accessible</p>"
    }
    if(detailsObject.ameneties.petFriendly === true){
        eateryHTML += "<p>Pet Friendly</p>"
    } else{
        eateryHTML += "<p>No Pets</p>"
    }
    if(detailsObject.ameneties.wifi === true){
        eateryHTML += "<p>Wifi!</p>"
    } 
    if(detailsObject.ameneties.diaperFacilitiy === true){
        eateryHTML += "<p>Diaper Facility</p>"
    } 
    if(detailsObject.ameneties.playground === true){
        eateryHTML += "<p>Playground</p>"
    }
    if(detailsObject.ameneties.restrooms === true){
        eateryHTML += "<p>Restrooms</p>"
    } else {
        eateryHTML += "<p>No Restrooms</p>"
    }
    return `<section class="eatery-detail-card">${eateryHTML}</section> `
}