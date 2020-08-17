function getNumber() {
    let input = parseInt(document.querySelector("#number").value);
    toRomanNumber(input);
}

function toRomanNumber(num) {
    let romanNum = "";
    let romanNumeral = [
        "M",
        "CM",
        "D",
        "CD",
        "C",
        "XC",
        "L",
        "XL",
        "X",
        "IX",
        "V",
        "IV",
        "I"
    ];
    let decimalValue = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    for (let i = 0; i < decimalValue.length; i++) {
        while (decimalValue[i] <= num) {
            romanNum += romanNumeral[i];
            num -= decimalValue[i];
        }
    }
    updateUI(romanNum);
}

function updateUI(roman) {
    document.querySelector("#roman").innerHTML = roman;
    console.log(input);
    toRomanNumber(input);
}