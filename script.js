let inputElement = document.getElementById("input");
let result = document.getElementById("result");
let convertedTo = document.getElementById("convertedTo");
let toConvert = document.getElementById("toConvert");
let btnBinToDec = document.getElementById("binToDec");
let btnDecToBin = document.getElementById("decToBin");
let decToBin = false;

function binToDecState(){
    decToBin = false;
    toConvert.innerHTML = "binary";
    convertedTo.innerHTML = "Decimal";
    btnBinToDec.classList.toggle("active");
    btnDecToBin.classList.toggle("active");
}
function decToBinState(){
    decToBin = true;
    toConvert.innerHTML = "decimal";
    convertedTo.innerHTML = "Binary";
    btnBinToDec.classList.toggle("active");
    btnDecToBin.classList.toggle("active");
}

function update(){
    /*Pega o número inserido*/
    let inputValue = document.getElementById("input").value;

    /* BINARY TO DECIMAL*/
    /* Cria função para voltar a ser número e em seguida transforma inputValue em inputArray */
    let toNumber = num => Number(num);
    let inputArray = Array.from(String(inputValue), toNumber);
    /* transforma cada dígito binário em decimal e soma*/
    let exponent = inputArray.length-1;
    let resultNumber = 0;
    function binaryDigit(digito){
        n = digito*Math.pow(2,exponent);
        resultNumber += n;
        exponent --
    }
    function binToDecConverter(){
        inputArray.forEach(binaryDigit);
    }

    /* DECIMAL TO BINARY*/
    let binArray = [];
    let binResult = 0;
    let dividedByTwo = Math.trunc(inputValue/2);
    let reminder = inputValue%2;
    /* coloca o resto da divisão por 2 no começo da array*/
    function fillBinArray(firstOfArray){
        while(dividedByTwo >= 1){
            binArray.unshift(reminder);
            reminder=dividedByTwo%2;
            dividedByTwo = Math.trunc(dividedByTwo/2);
        }
        binArray.unshift(firstOfArray);
    }

    /* concatena */
    function decToBinConverter(){
        if(reminder !== 0 || inputValue == 0){
            fillBinArray(reminder);
        }else{
            fillBinArray(1);
        }
        resultNumber=parseInt(binArray.join(''));
    }

    /*Verifica se está no modo decToBin ou binToDec e aplica a função*/
    if(decToBin == true){
        decToBinConverter();
    }else{
        binToDecConverter();
    }
    let patt = new RegExp("[2-9]");
    /* Retorna a conversão */
    if(decToBin == false && patt.test(inputValue) == true){
        result.innerHTML = `<em>This is not a binary number! Use only 0 and 1.</em>`;
    }
    else{
        result.innerHTML = `${resultNumber}`;
    }
}
