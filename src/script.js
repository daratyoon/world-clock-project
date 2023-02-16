function updateTime() {
  // New York
  let newYorkElement = document.querySelector("#new-york");
  let newYorkDateElement = newYorkElement.querySelector(".date");
  let newYorkTimeElement = newYorkElement.querySelector(".time");
  let newYorkTime = moment().tz("America/New_York");

  newYorkDateElement.innerHTML = newYorkTime.format("ddd MMM Do, YYYY");
  newYorkTimeElement.innerHTML = newYorkTime.format(
    "HH:mm:ss:SS [<small>]A[</small>]"
  );

  //Tokyo
  let tokyoElement = document.querySelector("#tokyo");
  let tokyoDateElement = tokyoElement.querySelector(".date");
  let tokyoTimeElement = tokyoElement.querySelector(".time");
  let tokyoTime = moment().tz("Asia/Tokyo");

  tokyoDateElement.innerHTML = tokyoTime.format("ddd MMM Do, YYYY");
  tokyoTimeElement.innerHTML = tokyoTime.format(
    "HH:mm:ss:SS [<small>]A[</small>]"
  );

  //Stockholm
  let stockholmElement = document.querySelector("#stockholm");
  let stockholmDateElement = stockholmElement.querySelector(".date");
  let stockholmTimeElement = stockholmElement.querySelector(".time");
  let stockholmTime = moment().tz("Europe/Stockholm");

  stockholmDateElement.innerHTML = stockholmTime.format("ddd MMM Do, YYYY");
  stockholmTimeElement.innerHTML = stockholmTime.format(
    "HH:mm:ss:SS [<small>]A[</small>]"
  );

  //Galápagos
  let galapagosElement = document.querySelector("#galapagos");
  let galapagosDateElement = galapagosElement.querySelector(".date");
  let galapagosTimeElement = galapagosElement.querySelector(".time");
  let galapagosTime = moment().tz("Pacific/Galapagos");

  galapagosDateElement.innerHTML = galapagosTime.format("ddd MMM Do, YYYY");
  galapagosTimeElement.innerHTML = galapagosTime.format(
    "HH:mm:ss:SS [<small>]A[</small>]"
  );

  //Sydney
  let sydneyElement = document.querySelector("#sydney");
  let sydneyDateElement = sydneyElement.querySelector(".date");
  let sydneyTimeElement = sydneyElement.querySelector(".time");
  let sydneyTime = moment().tz("Australia/Sydney");

  sydneyDateElement.innerHTML = sydneyTime.format("ddd MMM Do, YYYY");
  sydneyTimeElement.innerHTML = sydneyTime.format(
    "HH:mm:ss:SS [<small>]A[</small>]"
  );
}

setInterval(updateTime, 1000);
