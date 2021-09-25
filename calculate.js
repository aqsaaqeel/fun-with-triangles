var inputAngles = document.querySelectorAll(".angles");
var base = inputAngles[0].value;
var height = inputAngles[1].value;
var output = document.querySelector(".outputArea");
var evaluateButton = document.querySelector("#button-id");
var evaluateArea = document.querySelector("#button-area-triangle");
var outputArea = document.querySelector(".outputArea2");

function calculateHypotenuse() {
    var hypotenuse = Math.sqrt((base*base) + (height*height));
    output.innerText = "Hypotenuse is "+ hypotenuse;
}

function calculateArea() {
    var area = (0.5)*(base*height);
    outputArea.innerText = "Area of triangle is "+ area;
}

evaluateButton.addEventListener("click", calculateHypotenuse());
evaluateArea.addEventListener("click", calculateArea());


