
import {settings} from "../Settings.js"
// console.log(settings)
// let parks = []

// export const useparks = () => {
//     return parks.slice()
// }

// export const getparks = () => {
//     return fetch(`https://developer.nps.gov/api/v1/parks?api_key=${settings.npsKey}`)
//         .then(function(response){ return response.json()})
//         .then(function(parsedparks ){
//                 console.table(parsedparks)
//                 parks = parsedparks
//             }
//         )
// }

let parks =[];

export const useparks = () =>  parks.slice()


export const getparks = () => {
  /*
        Load database state into application state with a fetch().
        Make sure the last `then()` sets the local `parks`
        variable to what is in the response from the API.

    */

  return fetch(`https://developer.nps.gov/api/v1/parks?api_key=${settings.npsKey}`)
    .then(r => r.json())
    .then((parksFromAPI) => {
        console.table(parksFromAPI)
      parks = parksFromAPI.data;
    });
};