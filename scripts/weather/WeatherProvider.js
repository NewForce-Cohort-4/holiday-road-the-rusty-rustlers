

let weather = []

export const getWeather = (zipOfPark) => {
    return fetch(`http://api.openweathermap.org/data/2.5/forecast?zip=${zipOfPark},us&appid=22f5b08c58aa376de3f7eb42fd8818c9`)
    .then(response => response.json())
    .then((weatherFromAPI) => {
        weather = weatherFromAPI
        console.log(weather)
    })}

