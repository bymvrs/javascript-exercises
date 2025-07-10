const convertToCelsius = function(fahrenheit) {
  return +((fahrenheit - 32) / 1.8).toFixed(1);
};

const convertToFahrenheit = function(celcius) {
  return +((celcius * 1.8) + 32).toFixed(1);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
