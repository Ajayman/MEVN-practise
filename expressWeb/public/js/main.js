const submitBtn = document.getElementById('submitbutton');
const cityName = document.getElementById('cityName');
const city_name = document.getElementById('city_name');
const temp_status = document.getElementById('temp_status');
const weather_status = document.getElementById('weather_status');
const getInfo = async(event)=> {
    event.preventDefault();
    let cityVal = city_name.value;
    console.log(cityVal);
    if(cityVal ===""){
        cityName.innerText= `Plz write the name before search`;
    }else{
        try{
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&appid=bfcfd9f62c3a927e63996f6c0a459fea`;
        const response = await fetch(url);
        const data = await response.json();
        const arrData = [data];
        cityName.innerText = arrData[0].name;
        temp_status.innerText = arrData[0].main.temp;
        weather_status.innerText = arrData[0].weather[0].main;
        }catch {
            cityName.innerText = `Please enter the city name properly`;
        }
    }
}


submitBtn.addEventListener('click', getInfo);