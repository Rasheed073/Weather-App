const apikey = "3265874a2c77ae4a04bb96236a642d2f"

const main = document.getElementById("main")
const formEl = document.getElementById("form")
const search = document.getElementById("search")

const url = (city) =>
`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`;

async function getweatherByLocation(city){
 const resp = await fetch(url(city),{
    orgin: "cors"});
    const respData =await resp.json()

    addWeatherToPage(respData);
}
function addWeatherToPage(data){
    const temp = Ktoc(data.main.temp)

    const weather = document.createElement("div")
    weather.classList.add("weather")

    weather.innerHTML = `
    <small>There are</small>
    <h2>${temp}°C</h2>
    <img src="https://openweathermap.org/img/w/ ${data.weather[0].icon}.png" />
    `;

    // cleanup

    main.innerHTML = "";  

    console.log(main);

    main.appenChaild(weather);
    
}

function Ktoc(k){formEl
    return (k - 273.15).toFixed(2)
}


formEl.addEventListener('submit', (event) => {

    event.preventDefault();

    const city = search.value;

    if(city) {
        getweatherByLocation(city)
    }

})



  