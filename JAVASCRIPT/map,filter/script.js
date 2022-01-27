
const maca ={
    value: 2,
}
const laranja ={
    value: 3,
}

function mapComThis(arr, thisArg) {
    return arr.map(function(item){
        return item * this.value;
    }, thisArg);
}

const nums = [1,2,5,4,45];

console.log('this --> maçã',mapComThis(nums,maca));

console.log('this --> laranja',mapComThis(nums,laranja));


console.log('função sem essa merda do this')


function mapSemthis(arr){
    return arr.map(function(item){
        return item*5;
    })
}

const nums2 = [1,2,5,4,45]


console.log('sem this',mapSemthis(nums2));



console.log('retornar numeros pares com filter')


function filtraPares(arr){
    return arr.filter(callback);
}

function callback(item){
    return item % 2 ===0;
}

console.log('numeros pares',filtraPares(nums2));


console.log('usando o reduce')


function somaNumeros(arr){
    return arr.reduce(function(previosValor,vaoratual){
        return previosValor + vaoratual;
    },0);
}

console.log('somando nmeros',somaNumeros(nums2));