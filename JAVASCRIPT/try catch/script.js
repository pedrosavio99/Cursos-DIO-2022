console.log('Try e catchs e los erros')

function validaArray(arr, num){

    try{
        //se n enviou nenhum paramentro erro de referenias e varios errinhos 
        if(!arr && !num) throw new ReferenceError("Envie os parametros");
        if(typeof arr !== 'object') throw new TypeError("Array precisa ser do tipo object");
        if(typeof num !== 'number') throw new TypeError("numero invaldo");
        if(arr.length !== num) throw new RangeError("tamanho invalido");

        return arr;

    }
    catch(e){
        console.log(e)
        if(e instanceof ReferenceError){
            console.log('este é um erro de referencia')
            console.log(e.name)
            console.log(e.stack)
        }
        else if(e instanceof TypeError){
            console.log('este é um erro de tipo')
            console.log(e.name)
            console.log(e.stack)
        }
        else if(e instanceof RangeError){
            console.log('este é um erro de tamanho')
            console.log(e.name)
            console.log(e.stack)
        }
        else{
            console.log(e + "sei la que erro é esse")
        }

    }


}

console.log(validaArray([1,1,1,1,1,1],6));
//vc pode ir mudando as entradas nessa função pra ver los erros

