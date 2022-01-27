console.log('Maps e sets')

function getAdmins(map) {
    let admins = [];
    let users = [];
    for([key, value] of map){
        if(value ==='Admin') {
            admins.push(key)
        }
    }
    
    for ([kay, value]of map){
        if(value != 'Admin'){
            users.push(key)
        }

    }
    return admins;

}

const usuarios = new Map();

usuarios.set('luiz', 'Admin');
usuarios.set('pedro', 'Admin');
usuarios.set('luiz2', 'user');
usuarios.set('pedro2', 'user');

console.log(getAdmins(usuarios));


const meuArray = [1,2,3,3,3,4,4,4,5];

function valoresUnicos(arr) {
    const myset = new Set(arr);
    // mermao isso é um sprede esse 3 pontinho ele faz um arraY NOVO

    return [...myset];
}

console.log(valoresUnicos(meuArray));



