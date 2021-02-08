// export function parkInfo(parkObject){
//     return `
//     <section class="DOMpark">
//     <h2>${parkObject.name}</h2>
//     <p>${parkObject.description}</p>
//     <button id="parks--${parkObject.id}">More Details</button>
//     </section>
//     `
// }


export function parkInfo(parkObject){
    return `
    <section class="DOMpark">
    <p>${parkObject}</p>

    <button id="attractions--${parkObject}">More Details</button>
    </section>
    `
}

// export function parkMoreDetails(parkObject){
//     let parkHTML = `
//     <section class="park-preview">
//     <p>${parkObject.city}, ${parkObject.state}</p>
//     <p>Souvenirs: ${parkObject.ameneties.souvenirs} </p>
//     <p>Restrooms: ${parkObject.ameneties.restrooms}</p>
//     </section>
//    `
//      return parkHTML
//      }