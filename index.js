//step 2: create a dictionary/object to map cities to their coordinates:
const cityCoords = {
    Amol : { lat: 36.4696, lon: 52.3507 },
    Manchester: { lat: 53.4808, lon: -2.2426 },
    Tehran: { lat: 35.6892, lon: 51.3890 }
}


//step 3: Create an async function called getWeather(cityName)
// temperature and wind speed 
const displayEl = document.getElementById('show-msg');

async function getWeather(cityName){
    try{
        const response = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${cityCoords[cityName].lat}&longitude=${cityCoords[cityName].lon}&current_weather=true`); //cityCoords.cityName.lon will give error.
        if(!response.ok) throw new Error('problem in fetching data from API');
        const data = await response.json();
        //console.log(data);
        const currentTemp = data.current_weather.temperature;
        const currentWindSpeed = data.current_weather.windspeed;
        displayEl.innerHTML = `<p>Current weather in <span id='cityName'>${cityName}</span>: ${currentTemp}°C / ${((currentTemp*9.5)+32).toFixed(1)}°F. Wind speed: ${currentWindSpeed} km/h / ${(currentWindSpeed*0.621371).toFixed(2)} mi/h .</p>`
        
    } catch(error){
        console.error(`error found: ${error}.`)
    }
}
//step 4: add an event listener to select:
const selectEl = document.getElementById('city-select');
selectEl.addEventListener('change', e => {
    getWeather(e.target.value);
})
/*step 5: add an event listener that makes select el slide from the left only ONCE and makes the select element
background color animate on hover */





