let celciusInput = document.querySelector("#celcius > input");
let fahrenheitInput = document.querySelector("#fahrenheit > input");
let kelvinInput = document.querySelector("#kelvin > input");

let btn = document.querySelector(".button button");

function roundNumber(number) {
  return Math.round(number * 100) / 100;
}

celciusInput.addEventListener("input", function () {
  let cTemp = parseFloat(celcius.value);
  let fTemp = cTemp * (9 / 5) + 32;
  let kTemp = cTemp + 273.15;

  fahrenheitInput.value = roundNumber(fTemp);
  kelvinInput.value = roundNumber(kTemp);
});

fahrenheitInput.addEventListener("input", function () {
  let fTemp = parseFloat(fahrenheitInput.value);
  let cTemp = (ftemp - 32) * (5 / 9);
  let kTemp = (ftemp - 32) * (5 / 9) + 273.15;

  celciusInput.value = roundNumber(cTemp);
  kelvinInput.value = roundNumber(kTemp);
});
