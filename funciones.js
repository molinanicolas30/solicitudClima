const boton = document.getElementById("boton");
const pronostico = document.getElementById("pronostico");
const APIkey = "d98356f3bf53255011ee875e6eb0167d";


boton.addEventListener("click", async () => {
    const ciudad = document.getElementById("input").value;
    const URL = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${APIkey}`;
    const devuelve = await fetchData(URL);
    console.log(devuelve);
    pronostico.innerHTML = ` 
    <h4>Temperatura actual: </h4>
        <p id="temoActual"> ${kelvin (devuelve.main.temp)} ºC</p>
        <h4>Sensación térmica: </h4>
        <p id="feels_like">${kelvin (devuelve.main.feels_like)} ºC</p>
        <h4>Presión atmosférica:</h4>
        <p id="pressure">${kelvin (devuelve.main.pressure)} hPa</p>
        <h4>Temperatura máxima:</h4>
        <p id="tempMax">$devuelve.main.temp_max} ºC</p>
        <h4>Temperatura mínima: </h4>
        <p id="tempMin">${kelvin (devuelve.main.temp_min)} ºC</p>
        <h4>Nubosidad: </h4>
        <p id="nubosidad">${devuelve.weather[0].description}</p>
        <h4>Visibilidad:</h4>
        <p id="visibilidad">${km(devuelve.visibility)} km</p>
    `;

});

function kelvin (temp){
    let celsius = temp - 273;
    return Math.round(celsius * 10)/10;
}

function km(metros){
    let visibilidad = metros/1000;
    return visibilidad;
}

async function fetchData(url) {
    try {
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        return data;
      } else {
        throw new Error("Error al obtener los datos");
      }
    } catch (error) {
      console.error("Error al cargar el archivo JSON:", error);
    }
  }
