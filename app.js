var inputAngles = document.querySelectorAll(".angles");
var checkTriangleBtn = document.querySelector(".check-triangle");
var outputArea = document.querySelector(".output");

checkTriangleBtn.addEventListener("click", isTriangle);

function sumOfAngles(a1, a2, a3) {
    var sum = a1+a2+a3;
    return sum;

}

function isTriangle() {
    var sumAngle = sumOfAngles(Number(inputAngles[0].value), Number(inputAngles[1].value), Number(inputAngles[2].value));

    if (sumAngle == 180) {
        outputArea.innerText = "It is a triangle";
    }
    else {
        outputArea.innerText = "It is not a triangle";
    }
}


