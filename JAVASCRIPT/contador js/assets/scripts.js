console.log("opa mundo");
var currentnumbeRepresentante = document.getElementById('currentNumber');
var currentNumber = 0;

function increment(){
    currentNumber = currentNumber +1;
    currentnumbeRepresentante.innerHTML = currentNumber;

}

function decrement(){
    currentNumber = currentNumber -1;
    currentnumbeRepresentante.innerHTML = currentNumber;
    
}