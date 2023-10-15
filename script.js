function convertTemperature() {
    let temperature = parseFloat(document.getElementById("temperature").value);
    let unit = document.getElementById("unit").value;
    let result = document.getElementById("result");

    if (isNaN(temperature)) {
        result.textContent = "Invalid input";
        return;
    }

    if (unit === "celsius") {
        result.textContent = `${(temperature * 9/5) + 32} °F | ${(temperature + 273.15)} K`;
    } else if (unit === "fahrenheit") {
        result.textContent = `${(temperature - 32) * 5/9} °C | ${((temperature - 32) * 5/9 + 273.15)} K`;
    } else if (unit === "kelvin") {
        result.textContent = `${(temperature - 273.15)} °C | ${(temperature * 9/5) - 459.67} °F`;
    }
}
