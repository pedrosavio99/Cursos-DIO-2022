var jogador1 = 0;
var jogador2 = 0;
var placar;

if(jogador1>0){
    console.log("jogador 1 marcou ponto")
} else if(jogador2>0){
    console.log("jogador 2 marcou ponto")
} else{ console.log('nada aconteceu')}




//REPETIÇÕESS
let array = ['valor1','valçor2', 'valor3','valor4','valor5']
let objeto = {prop1: 'val1', prop2: 'val2', prop3: 'val3'}

//for executa uma função ate que ela seja falsa

for (let indice = 0; indice < array.length; indice++){
    console.log(indice, array[indice]);
}

//for/in executa uyma repetição a partir de uma prpriedade

for ( let i in array){
    console.log(i, array[i]);
}

//for/of executar a repetição a partir do valor

for(i of array){
    console.log(i)
}


//whilezada

var a = 0;

while (a <= 5){
    console.log(a)
    a = a +1;
}