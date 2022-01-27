const alunos = [
     {nome:'jao',
     nota: 5,
     turma:'1b',}
     ,
     {nome:'pedro',
     nota: 9,
     turma:'1b',}
     ,
     {nome:'jao2',
     nota: 7,
     turma:'1b',},
];

function alunosAprovados(arr,media){
    let aprvados = [];
    for (let i =0; i <arr.length; i++) {
        if(arr[i].nota >= media){
            aprvados.push(arr[i].nome)
        }

    }

    return aprvados;

}

console.log(alunosAprovados(alunos,6));