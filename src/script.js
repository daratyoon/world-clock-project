// New York
let newYorkElement = document.querySelector("#new-york");
let newYorkDateElement = newYorkElement.querySelector(".date");
let newYorkTimeElement = newYorkElement.querySelector(".time");
let newYorkTime = moment().tz("America/New York");

newYorkDateElement.innerHTML = newYorkTime.format("ddd MMM Do, YYYY");
newYorkTimeElement.innerHTML = newYorkTime.format("HH:mm:ss:SS A");

//Tokyo
let tokyoElement = document.querySelector("#tokyo");
let tokyoDateElement = tokyoElement.querySelector(".date");
let tokyoTimeElement = tokyoElement.querySelector(".time");
let tokyoTime = moment().tz("Asia/Tokyo");

tokyoDateElement.innerHTML = tokyoTime.format("ddd MMM Do, YYYY");
tokyoTimeElement.innerHTML = tokyoTime.format("HH:mm:ss:SS A");
