
function getcity(city) {
    document.querySelector("#city").value = city;
    city = city.toLowerCase();
    let city_url = `http://api.weatherapi.com/v1/current.json?key=ac602ec143fe4a8eabe10018232405&q=${city}&aqi=no`;

    return city_url;
}

async function getdata(url) {
    const response = await fetch(url);

    if (response.ok){

        const data = await response.json();

        createresults(data);
    }

}

function main(data) {

    let city = document.querySelector("#city").value;

    let url = getcity(city);

    getdata(url);

}


function createresults(data) {



    let results = data;
    
    let cityName = document.createElement("p");
    cityName.textContent = results.location.name;
    const country = `<p>Country:${results.location.country}</p>`;
    const coord = `<p>Lat:${results.location.lat} Lon:${results.location.lon}</p>`;
    const current = `<p>Last update:${results.current.last_update}</p>`;
    const condition = `<p>Condition:${results.current.condition.text}</p>`;
    let weatherImg = document.createElement("img");
    weatherImg.src= results.current.condition.icon;
    weatherImg.alt = "icon weather condition";
    const temp = `<p>Temperature (°C):${results.current.temp_c}`;
    const humidity = `<p>Humidity:${results.current.humidity}</p>`;
    const wind = `<p>Wind Speed (mph):${results.current.wind_mph}</p>`;
    const feelslike = `<p>Feelsike (°C):${results.current.feelslike_c}</p>`;

    let output = document.querySelector("#results");
   

    output.innerHTML += country;
    output.innerHTML += coord;
    output.innerHTML += current;
    output.innerHTML += condition;
    output.innerHTML += temp;
    output.innerHTML += humidity;
    output.innerHTML += wind;
    output.innerHTML += feelslike;
    output.appendChild(weatherImg);
    output.appendChild(cityName);

    output;
}

const button = document.querySelector("#button");
button.addEventListener("click", main);