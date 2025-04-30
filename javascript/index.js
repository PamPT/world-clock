function updateTime() {
  let losAngelesElement = document.querySelector("#los-angeles");
  let losAngelesDateElement = losAngelesElement.querySelector(".date");
  let losAngelesTimeElement = losAngelesElement.querySelector(".time");
  let losAngelesTime = moment().tz("America/Los_Angeles");

  losAngelesDateElement.innerHTML = moment().format("MMMM Do YYYY");
  losAngelesTimeElement.innerHTML = losAngelesTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );

  let laPazElement = document.querySelector("#la-paz");
  let laPazDateElement = laPazElement.querySelector(".date");
  let laPazTimeElement = laPazElement.querySelector(".time");
  let laPazTime = moment().tz("America/La_Paz");

  laPazDateElement.innerHTML = moment().format("MMMM Do YYYY");
  laPazTimeElement.innerHTML = laPazTime.format("h:mm:ss [<small>]A[</small>]");
}
updateTime();
setInterval(updateTime, 1000);
