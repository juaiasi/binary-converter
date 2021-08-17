let inputElement = document.getElementById("input");
let result = document.getElementById("result");

inputElement.addEventListener('change', update);

function update(){
    let decimal =0;

    /*Pega o número*/
    let inputValue = document.getElementById("input").value;
    console.log(inputValue);

    /* Transforma em uma array */
    let myFunc = num => Number(num);
    let inputArray = Array.from(String(inputValue), myFunc);
    console.log(inputArray);

    /* transforma cada dígito binário em decimal e concatena*/
    let position=inputArray.length-1;
    function binToDec(number){
        console.log(position);
        digito = number*Math.pow(2,position);
        decimal += digito;
        position --
    }

    inputArray.forEach(binToDec);
    result.innerHTML = `${decimal}`;
}


