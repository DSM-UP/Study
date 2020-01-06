const roomTempC = 21.5;
let currentTempC = 19.5;
const message =
  `The current temperature is ` +
  `${currentTempC - roomTempC}\u00b0C different than room temperature.`;
const fahrenheit = `The current temperature is ${(currentTempC * 9) / 5 +
  32}\u00b0F`;
