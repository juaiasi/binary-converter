let inputElement = document.getElementById("input");
let result = document.getElementById("result");
let decToBin = false;

function binToDecState(){
    decToBin = false;
}
function decToBinState(){
    decToBin = true;
}

function update(){
    /*Pega o número inserido*/
    let inputValue = document.getElementById("input").value;

    /* Cria função para voltar a ser número e em seguida transforma inputValue em inputArray */
    let toNumber = num => Number(num);
    let inputArray = Array.from(String(inputValue), toNumber);

    /* transforma cada dígito binário em decimal e soma*/
    
    let exponent = inputArray.length-1;
    let resultNumber = 0;

    function binToDecConverter(digito){
        n = digito*Math.pow(2,exponent);
        resultNumber += n;
        exponent --
    }
    function decToBinConverter(){
        let binArray = [];
        let dividedByTwo = Math.trunc(inputValue/2);
        let reminder = inputValue%2;
        console.log(dividedByTwo);
        while(dividedByTwo >= 1){
            binArray.unshift(reminder);
            reminder=dividedByTwo%2;
            dividedByTwo = Math.trunc(dividedByTwo/2);
        }
        binArray.unshift(inputValue%2);
        resultNumber=parseInt(binArray.join(''));
    }
    if(decToBin == true){
        decToBinConverter();
    }else{
        inputArray.forEach(binToDecConverter);
    }

    result.innerHTML = `${resultNumber}`;
}

inputElement.addEventListener('change', update);