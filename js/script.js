function launch() {
  start();
  getThreeDayForecast();
}


// Fonction appelée lors du click du bouton
function start() {
  //initialisation de city
  city = document.getElementById("city-input").value;
  // Création de l'objet apiWeather
  const apiWeather = new API_WEATHER(city);
  // Appel de la fonction fetchTodayForecast

  apiWeather
    .fetchTodayForecast()
    .then(function(response) {
      // Récupère la donnée d'une API
      const data = response.data;

      // On récupère l'information principal
      const main = data.weather[0].main;
      const description = data.weather[0].description;
      const temp = data.main.temp;
      const icon = apiWeather.getHTMLElementFromIcon(data.weather[0].icon);

      // Modifier le DOM
      document.getElementById('today-forecast-main').innerHTML = main;
      document.getElementById('today-forecast-more-info').innerHTML = description;
      document.getElementById('icon-weather-container').innerHTML = icon;
      document.getElementById('today-forecast-temp').innerHTML = `${temp}°C`;
      
    })
    .catch(function(error) {
      // Affiche une erreur
      console.error(error);
    });
}


function getThreeDayForecast(){
  //initialisation de city
  city = document.getElementById("city-input").value;
  // Création de l'objet apiWeather
  const apiWeather3Day = new API_WEATHER(city);
  // Appel de la fonction fetchTodayForecast

  apiWeather3Day  
    .fetchThreeDaysForecast()
    .then(function(response) {
      // Récupère la donnée d'une API
      const data = response.data;
      console.log(data);

      for (i=1;i<4;i++){
        // On récupère l'information principal
        const main = data.list[i-1].weather[0].main;
        const description = data.list[i-1].weather[0].description;
        const temp = data.list[i-1].temp.day;
        const icon = apiWeather3Day.getHTMLElementFromIcon(data.list[i-1].weather[0].icon);

        // Modifier le DOM
        document.getElementById('forecast-main' + i).innerHTML = main;
        document.getElementById('forecast-more-info' + i).innerHTML = description;
        document.getElementById('icon-weather-container' + i).innerHTML = icon;
        document.getElementById('forecast-temp' + i).innerHTML = `${temp}°C`;

      }
    })
    .catch(function(error) {
      // Affiche une erreur
      console.error(error);
    });
}