// Tampereen tapahtumat
fetch('https://api.visittampere.com/api/v1/visittampere/event/published/all/?format=json&lang=fi')
  .then(response => response.json())
  .then(responseJson => {
      tapahtumat(responseJson);
  })
  .catch(error => {
      document.getElementById("vastaus").innerHTML = "<p>Tietoa ei pystytä hakemaan </p>" + error;
  });

function tapahtumat(data) {
    var teksti = "<h1>Tampereella tapahtuu</h1>";
    for (var i = 0; i < data.length; i++) {
        teksti += "<h3>" + data[i].name + "</h3>";
        teksti += "<p>" + data[i].description + "</p>";
        teksti += "<p><a href='" + data[i].url + "'>" + data[i].url + "</a></p>";
    }
    document.getElementById("vastaus").innerHTML = teksti;
}

// Helsingin säätiedot
fetch('https://api.openweathermap.org/data/2.5/weather?lang=fi&q=helsinki&units=metric&APPID=314de1b8dabfbace7321a5ff474e27d1')
  .then(response => response.json())
  .then(responseJson => {
      saa(responseJson);
  })
  .catch(error => {
      document.getElementById("vastaus").innerHTML = "<p>Tietoa ei pystytä hakemaan</p>";
  });

function saa(data) {
    var teksti = "<h1>" + data.name + "</h1>";
    teksti += "<p>Sää: " + data.weather[0].description + "</p>";
    teksti += "<p>Lämpötila: " + data.main.temp + " °C</p>";
    teksti += "<p>Tuulen nopeus: " + data.wind.speed + " m/s</p>";
    var kuva = 'http://openweathermap.org/img/w/' + data.weather[0].icon + '.png';
    teksti += "<p><img src='" + kuva + "' alt='kuva'></p>";
    document.getElementById("vastaus").innerHTML = teksti;
}
