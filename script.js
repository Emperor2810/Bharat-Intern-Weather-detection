var inputvalue = document.querySelector('#cityinput');
var btn = document.querySelector('#add');
var city = document.querySelector('#cityoutput');
var descrip = document.querySelector('#description');
var temp = document.querySelector('#temp');
var wind = document.querySelector('#wind');

var apiKey = "c15552c7da91e04aa645cdb10ce88dcf";

function convertToCelsius(val) {
    return (val - 273.15).toFixed(2);
}

btn.addEventListener('click', function() {
    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + inputvalue.value + '&appid=' + apiKey)
        .then(res => res.json())
        .then(data => {
            var nameval = data['name'];
            var description = data['weather'][0]['description'];
            var temperature = data['main']['temp'];
            var windSpeed = data['wind']['speed'];

            city.innerText = `Weather of ${nameval}`;
            temp.innerText = `Temperature: ${convertToCelsius(temperature)}°C`;
            descrip.innerText = `Description: ${description}`;
            wind.innerText = `Wind Speed: ${windSpeed} m/s`;
        })
        .catch(err => alert('You entered a wrong city name'));
});
