export function attractionInfo(attractionObject){
    return `
    <section class="DOMAttraction">
    <h2>${attractionObject.name}</h2>
    <p>${attractionObject.description}</p>
    <button id="attractions--${attractionObject.id}">More Details</button>
    </section>
    `
}

export function attractionMoreDetails(attractionObject){
    let attractionHTML = `
    <section class="attraction-preview">
    <p>${attractionObject.city}, ${attractionObject.state}</p>
    <p>Souvenirs: ${attractionObject.ameneties.souvenirs} </p>
    <p>Restrooms: ${attractionObject.ameneties.restrooms}</p>
    </section>
    `
    return attractionHTML
}