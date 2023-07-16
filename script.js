const apikey = "614a85ccbf2442b04dae25e970b164a3"; 

const apiUrl = "https://api.openweathermap.org/data/2.5/weather?nits=metric&q=bangalore";

async function checkweather(){
    const response = await fetch (apiUrl + `&appid=${apiKey}`);
    var data = await response.json(); 
}