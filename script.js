const apikey = "863242cfb2b1d357e6093d9a4df19a4b"; 

const apiUrl = "https://api.openweathermap.org/data/2.5/weather?nits=metric&q=bangalore";

async function checkweather(){
    const response = await fetch (apiUrl + `&appid=${apiKey}`);
    var data = await response.json(); 
}