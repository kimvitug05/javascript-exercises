const ftoc = function(tempInFarenheit) {
    let celsius;
    celsius = (tempInFarenheit - 32) * (5/9);
    console.log("Celsius: " + celsius);
    return celsius;
}

const ctof = function(tempInCelsius) {
    let farenheit;
    farenheit = tempInCelsius * (9/5) + 32;
    console.log("Farenheit: " + farenheit);
    return farenheit;
}

module.exports = {
  ftoc,
  ctof
}
