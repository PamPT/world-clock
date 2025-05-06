function updateTime() {
  let losAngelesElement = document.querySelector("#los-angeles");
  if (losAngelesElement) {
    let losAngelesDateElement = losAngelesElement.querySelector(".date");
    let losAngelesTimeElement = losAngelesElement.querySelector(".time");
    let losAngelesTime = moment().tz("America/Los_Angeles");

    losAngelesDateElement.innerHTML = moment().format("MMMM Do YYYY");
    losAngelesTimeElement.innerHTML = losAngelesTime.format("HH:mm:ss");

    let laPazElement = document.querySelector("#la-paz");
    if (laPazElement) {
      let laPazDateElement = laPazElement.querySelector(".date");
      let laPazTimeElement = laPazElement.querySelector(".time");
      let laPazTime = moment().tz("America/La_Paz");

      laPazDateElement.innerHTML = moment().format("MMMM Do YYYY");
      laPazTimeElement.innerHTML = laPazTime.format("HH:mm:ss");
    }
  }
}

function updateCity(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `<div class="city">
          <div>
            <h2>${cityName}</h2>
            <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
          </div>
          <div class="time">${cityTime.format("HH:mm:ss")} </div> </br>
          <a href="/">All cities</a>`;

  updateBackground(cityTime.hour());
}

function updateBackground(hour) {
  let container = document.querySelector("#container");
  let greeting = document.querySelector("h1");
  if (hour >= 3 && hour <= 12) {
    container.style.backgroundImage =
      "url('https://www.paradisecanvasprints.com/wp-content/uploads/2022/09/summer-sun-field-flowers-blue-sky-nature-canvas-prints-wall-art.jpg      ')";
    greeting.innerHTML = "Good morning!☀️";
  } else if (hour >= 12 && hour <= 19) {
    container.style.backgroundImage =
      "url('https://img.freepik.com/free-photo/beautiful-shot-grassy-field-trees-distance-with-sun-shining-sky_181624-19020.jpg?semt=ais_hybrid&w=740')";
    greeting.innerHTML = "Good afternoon!🌇";
  } else {
    container.style.backgroundImage =
      "url('https://vinsweb.org/wp-content/uploads/2020/04/AtHome-NightSky-1080x810-1-1024x768.jpg')";
    greeting.innerHTML = "Good night!🌙";
  }
}

updateTime();
setInterval(updateTime, 1000);

let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity);
