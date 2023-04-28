import './style.scss'


const weathershowcase = document.getElementById('weathershowcase');
const weatherdisplay = document.getElementById('weathersearch');
const ViewWeatherButton = document.getElementById('goToResults');
const GoHome = document.getElementById('goHome');
const cityName = document.getElementById('location');
const CityNameDisplay = document.getElementById('CityNameField');
const DegreFieldDisplay = document.getElementById('DegreeNameField');

ViewWeatherButton.addEventListener('click', (e) => {
  
  let CityName = cityName.value;
  console.log(CityName);
  if(CityName == '') {
    return
  }
  else {
    let lowercase = CityName.toLowerCase();
    GetWeather(lowercase);
   
  }
  
})
GoHome.addEventListener('click', (e) => {
  
  goHome();
  
})

async function GetWeather(a){
  let city = a;
  let url = '//api.weatherapi.com/v1/current.json?key=9bef6260d5904ed79a6144744232704&q=' + city;
  
  try {
    const response = await fetch(url, {mode: 'cors'});
    const weatherdata = await response.json();
    console.log(weatherdata.current);
    CityNameDisplay.textContent = weatherdata.location.name;
    DegreFieldDisplay.textContent = weatherdata.current.temp_c + "C";
    goToForecast();
   
  }
  catch(error) {
    console.log("NE moze smradu");
  }
   
}


function goHome(){
  weathershowcase.classList.add('absolute');
  weathershowcase.classList.add('hidden');

  if(weatherdisplay.classList.contains('hidden') && weatherdisplay.classList.contains('absolute')){
    weatherdisplay.classList.remove('hidden');
    weatherdisplay.classList.remove('absolute');
  }
}
function goToForecast(){
      weatherdisplay.classList.add('absolute');
      weatherdisplay.classList.add('hidden');

      if(weathershowcase.classList.contains('hidden') && weathershowcase.classList.contains('absolute')){
        weathershowcase.classList.remove('hidden');
        weathershowcase.classList.remove('absolute');
      }
}




