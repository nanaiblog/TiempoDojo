function hideCookie(){
    cookie.remove();
}

window.addEventListener("DOMContentLoaded", function() {
    // Set initial temperature values when the page loads
    var tempMax1 = document.getElementById("tempmax1");
    var tempMin1 = document.getElementById("tempmin1");
    var tempMax2 = document.getElementById("tempmax2");
    var tempMin2 = document.getElementById("tempmin2");
    var tempMax3 = document.getElementById("tempmax3");
    var tempMin3 = document.getElementById("tempmin3");
    var tempMax4 = document.getElementById("tempmax4");
    var tempMin4 = document.getElementById("tempmin4");
    
    // Set initial values in Fahrenheit
    tempMax1.textContent = "65°";
    tempMin1.textContent = "75°";
    tempMax2.textContent = "66°";
    tempMin2.textContent = "80°";
    tempMax3.textContent = "61°";
    tempMin3.textContent = "69°";
    tempMax4.textContent = "78°";
    tempMin4.textContent = "70°";
});

function changeTempUnit(selectElement) {
    var tempMax1 = document.getElementById("tempmax1");
    var tempMin1 = document.getElementById("tempmin1");
    var tempMax2 = document.getElementById("tempmax2");
    var tempMin2 = document.getElementById("tempmin2");
    var tempMax3 = document.getElementById("tempmax3");
    var tempMin3 = document.getElementById("tempmin3");
    var tempMax4 = document.getElementById("tempmax4");
    var tempMin4 = document.getElementById("tempmin4");

    var selectedUnit = selectElement.value;
    
    if (selectedUnit === "cen") {
        tempMax1.textContent = convertFahrenheitToCelsius(65);
        tempMin1.textContent = convertFahrenheitToCelsius(75);
        tempMax2.textContent = convertFahrenheitToCelsius(66);
        tempMin2.textContent = convertFahrenheitToCelsius(80);
        tempMax3.textContent = convertFahrenheitToCelsius(61);
        tempMin3.textContent = convertFahrenheitToCelsius(69);
        tempMax4.textContent = convertFahrenheitToCelsius(78);
        tempMin4.textContent = convertFahrenheitToCelsius(70);
    } else {
        // Reset to Fahrenheit values
        tempMax1.textContent = "65°";
        tempMin1.textContent = "75°";
        tempMax2.textContent = "66°";
        tempMin2.textContent = "80°";
        tempMax3.textContent = "61°";
        tempMin3.textContent = "69°";
        tempMax4.textContent = "78°";
        tempMin4.textContent = "70°";
    }
}

function convertFahrenheitToCelsius(fahrenheit) {
    return Math.round((fahrenheit - 32) * 5 / 9) + "°";
}
