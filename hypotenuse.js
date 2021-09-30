var sides = document.querySelectorAll(".inputs");
var submitButton = document.querySelector("#button-id");
var submitAreaButton = document.querySelector("#button-area-triangle");
var displayAnswer = document.querySelector("#output-area");
var displayArea = document.querySelector(".output-area-second");

function calculateSumOfSquares(base, height) {
  var sumOfSquares = base * base +  height * height;
  return sumOfSquares;
}

function calculateArea(base, height){
    var area = (0.5)*(base*height);
    return area;
}

function calculateHypotenuse() {
  var sumOfSquares = calculateSumOfSquares(
    Number(sides[0].value),
    Number(sides[1].value)
  );
  var lengthOfHypotenuse = Math.sqrt(sumOfSquares);

  displayAnswer.innerText =
    "Hypotenuse is " + lengthOfHypotenuse.toFixed(2) + " cm";
}

submitButton.addEventListener("click", calculateHypotenuse);
submitAreaButton.addEventListener("click", outputArea);

function outputArea (){
    var areaResult = calculateArea(
        Number(sides[0].value),
        Number(sides[1].value)
      );
    displayArea.innerText = "Area of triangle is "+ areaResult + " cm";
}


