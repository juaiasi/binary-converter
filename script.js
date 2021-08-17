let inputElement = document.getElementById("input");
let result = document.getElementById("result");
let binary = "";
let decimal = "";

inputElement.addEventListener('change', update);

function update(){
    let inputValue = document.getElementById("input").value;
    console.log(inputValue);
    let myFunc = num => Number(num);
    let inputArray = Array.from(String(inputValue), myFunc);
    console.log(inputArray);

    function binToDec(number){
        let position = inputArray.indexOf(number);
        digito = number*Math.pow(2,position);
        decimal += String(digito);
    }

    inputArray.forEach(binToDec);
    result.innerHTML += `${decimal}`;
}


