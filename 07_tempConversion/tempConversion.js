const convertToCelsius = function(temp) {
//(x − 32) × 5/9 °C
    return parseFloat(((temp - 32) * (5/9)).toFixed(1))
};

const convertToFahrenheit = function(temp) {
  //(x × 9/5 + 32) °F
    return parseFloat(((temp * (9/5)) + 32).toFixed(1))
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
