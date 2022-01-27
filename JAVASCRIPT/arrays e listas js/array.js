//oq são vetores ou arrays


//como declarar um array

let array = ['string',1,true,['arrays2',2],['array3']];
console.log(array);
console.log(array[0]);

//forEach

array.forEach(function(item,indice){console.log(item, indice,'esse é o foreach, ele faz uma reptição para cada item de um array')})

//push
array.push('um novo item será add e sera apagado pelo pop')
console.log(array);

//pop

array.pop();
console.log(array);

//array.shift(); vai apagar um do inico da lista

//array.unshift(); add um item no iniico do array
array.unshift("um novo item add no inicio");
console.log(array);


//agr vem os objetos

let objeto = { string: 'stringteste', number: 1, prpriedadequalquer: true, objetointerno: {valor:'objetointerno',preço: 15}};
console.log(objeto);
console.log(objeto.objetointerno);
console.log(objeto.objetointerno.preço);
console.log(objeto.prpriedadequalquer);


var pegueiUmPedaçodoObjeto = objeto.string
console.log(pegueiUmPedaçodoObjeto, 'é assim que se pga um pedaço de um objeto pra poder usar');




