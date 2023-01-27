const citiesOnly = (arr) => arr.map((elem) => elem["city"]);

const upperCasingStates = (arr) => arr.map((str) => str.split(" ").map((str) =>
  str.charAt(0).toUpperCase() + str.slice(1)).join(" ")
)

const fahrenheitToCelsius = (arr) => arr.map((str) => Math.floor(((str.split("°F")[0] - 32) * 5) / 9) + "°C");

const trimTemp = (arr) => arr.map((obj) => { obj["temperature"] = obj["temperature"].replaceAll(" ", ""); return obj; });

const theTemp = (arr) => arr.map((obj) => obj["temperature"].replaceAll(" ", "")); // only number and degree abbreviation

const tempForecasts = (arr) => arr.map((obj) =>
  fahrenheitToCelsius(theTemp([obj])) + "elsius in " + citiesOnly([obj]) + ", " + upperCasingStates([obj["state"]])
);
