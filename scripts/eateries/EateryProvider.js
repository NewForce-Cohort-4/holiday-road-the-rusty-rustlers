let eateries = []

export const useEateries = () => {
    return eateries.slice()
}
// this function will fetch all of the restaurants and all of the information about them from the array in the API
export const getEateries = () => {
    return fetch("http://holidayroad.nss.team/eateries")
    .then(response => response.json())
    .then(
        parsedEateries => {
            //  console.table(parsedEateries)
            eateries = parsedEateries
        }
    )
}