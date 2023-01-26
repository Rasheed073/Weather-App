const apikey = "3265874a2c77ae4a04bb96236a642d2f"

const main = document.getElementById('main')
const form = document.getElementById('form')
const search = document.getElementById('search')

const url = (location) =>
`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apikey}`;

async function getweatherByLocation(location){
 const resp = await fetch(url(location),{
    orgin: "cors"});
    const respData =await resp.json()

    addWeatherToPage(respData);

}

function addWeatherToPage(data){
    const temp = Ktoc(data.main.temp)

    const weather = document.createElement('div')
    weather.classList.add('weather')

    weather.innerHTML = `
    <small>There are</small>
    <h2>${temp}°C</h2>
    <p>in ${location}</p>`;

    main.appenChaild(weather)
}

// getweatherByLocation("meppadi")

function Ktoc(k){
    return (k - 273.15).toFixed(2)
}

form.addEventListener('submit', (e) => {
    e.preventDefault()

    const location = search.value;

    if(location){ 
        getweatherByLocation(location)
    }
})


  