function updateTime() {
  //Brussels

  let brusselsElement = document.querySelector("#brussels");
  let brusselsDateElement = document.querySelector("#brussels .date");
  let brusselsTimeElement = document.querySelector("#brussels .time");
  let brusselsTime = moment().tz("Europe/Brussels");
  brusselsDateElement.innerHTML = brusselsTime.format("MMMM Do YYYY");
  brusselsTimeElement.innerHTML = brusselsTime.format(
    "h:mm:ss:SS [<small>]A[</small>]"
  );

  //Shanghai
  let shanghaiElement = document.querySelector("#shanghai");
  let shanghaiDateElement = document.querySelector("#shanghai .date");
  let shanghaiTimeElement = document.querySelector("#shanghai .time");
  let shanghaiTime = moment().tz("Asia/Shanghai");
  shanghaiDateElement.innerHTML = shanghaiTime.format("MMMM Do YYYY");
  shanghaiTimeElement.innerHTML = shanghaiTime.format(
    "h:mm:ss:SS [<small>]A[</small>]"
  );
  //Toronto
  let torontoElement = document.querySelector("#toronto");
  let torontoDateElement = document.querySelector("#toronto .date");
  let torontoTimeElement = document.querySelector("#toronto .time");
  let torontoTime = moment().tz("America/Toronto");
  torontoDateElement.innerHTML = torontoTime.format("MMMM Do YYYY");
  torontoTimeElement.innerHTML = torontoTime.format(
    "h:mm:ss:SS [<small>]A[</small>]"
  );
}
updateTime();
setInterval(updateTime, 1);
