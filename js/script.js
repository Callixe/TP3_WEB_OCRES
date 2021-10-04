// Fonction appelée lors du click du bouton
function start() {
  city = document.getElementById('city-input').value;
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
  return axios
    .get(`${API_URL}?q=${this.city}&units=metric&cnt=3&appid=${API_KEY}`, {
      crossdomain: true
    })
}

/*
      const main1 = data.weather[1].main;
      const description1 = data.weather[1].description;
      const temp1 = data.main.temp;
      const icon1 = apiWeather.getHTMLElementFromIcon(data.weather[1].icon);

      const main2 = data.weather[2].main;
      const description2 = data.weather[2].description;
      const temp2 = data.main.temp;
      const icon2 = apiWeather.getHTMLElementFromIcon(data.weather[2].icon);

      const main3 = data.weather[3].main;
      const description3 = data.weather[3].description;
      const temp3 = data.main.temp;
      const icon3 = apiWeather.getHTMLElementFromIcon(data.weather[3].icon);

      document.getElementById('today-forecast-main1').innerHTML = main1;
      document.getElementById('today-forecast-more-info1').innerHTML = description1;
      document.getElementById('icon-weather-container1').innerHTML = icon1;
      document.getElementById('today-forecast-temp1').innerHTML = `${temp1}°C`;

      document.getElementById('today-forecast-main2').innerHTML = main2;
      document.getElementById('today-forecast-more-info2').innerHTML = description2;
      document.getElementById('icon-weather-container2').innerHTML = icon2;
      document.getElementById('today-forecast-temp2').innerHTML = `${temp2}°C`;

      document.getElementById('today-forecast-main3').innerHTML = main3;
      document.getElementById('today-forecast-more-info3').innerHTML = description3;
      document.getElementById('icon-weather-container3').innerHTML = icon3;
      document.getElementById('today-forecast-temp3').innerHTML = `${temp3}°C`;
*/