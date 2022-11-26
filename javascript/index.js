function updateTime() {
  //Brussels

  let brusselsElement = document.querySelector("#brussels");
  if (brusselsElement) {
    let brusselsDateElement = document.querySelector("#brussels .date");
    let brusselsTimeElement = document.querySelector("#brussels .time");
    let brusselsTime = moment().tz("Europe/Brussels");
    brusselsDateElement.innerHTML = brusselsTime.format("MMMM Do YYYY");
    brusselsTimeElement.innerHTML = brusselsTime.format(
      "h:mm:ss:SS [<small>]A[</small>]"
    );
  }
  //Shanghai
  let shanghaiElement = document.querySelector("#shanghai");
  if (shanghaiElement) {
    let shanghaiDateElement = document.querySelector("#shanghai .date");
    let shanghaiTimeElement = document.querySelector("#shanghai .time");
    let shanghaiTime = moment().tz("Asia/Shanghai");
    shanghaiDateElement.innerHTML = shanghaiTime.format("MMMM Do YYYY");
    shanghaiTimeElement.innerHTML = shanghaiTime.format(
      "h:mm:ss:SS [<small>]A[</small>]"
    );
  }
  //Toronto
  let torontoElement = document.querySelector("#toronto");
  if (torontoElement) {
    let torontoDateElement = document.querySelector("#toronto .date");
    let torontoTimeElement = document.querySelector("#toronto .time");
    let torontoTime = moment().tz("America/Toronto");
    torontoDateElement.innerHTML = torontoTime.format("MMMM Do YYYY");
    torontoTimeElement.innerHTML = torontoTime.format(
      "h:mm:ss:SS [<small>]A[</small>]"
    );
  }
}

function updateCity(event) {
  let cityTimeZone = event.target.value;
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `<div class="city">
<div>
<h2>${cityName}</h2>
<div class="date">${cityTime.format("MMMM Do YYYY")}</div>
</div>
<div class="time">${cityTime.format("h:mm:ss:SS")} <small>${cityTime.format(
    "A"
  )}</small>
</div>
</div>
`;
}

updateTime();

setInterval(updateTime, 1);

let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity);
