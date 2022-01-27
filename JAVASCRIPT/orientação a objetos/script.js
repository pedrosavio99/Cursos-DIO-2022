console.log("js soo tem objetos mas da pra mandar as asses")
//classe pai
class ContaBancaria{
    constructor(agenia,numero,tipo){
        this.agencia = agenia;
        this.numero = numero;
        this.tipo = tipo;
        this._saldo = 0;
    }

    get saldo(){
        return this._saldo;
    }

    set saldo( valor ){
        this._saldo = valor;
    }

    sacar(valor){
        if(valor> this._saldo){
            return "operação negada"
        }
        this._saldo = this._saldo - valor;

        return this._saldo;
    }

    depositar(valor){
        this._saldo = this._saldo + valor;

        return this._saldo;
    }
}


//classe filha que vai herdar todos os parametros do pai

class Contacorrente extends ContaBancaria {
    constructor(agenia,numero,cartaoCreddito){
        super(agenia,numero);
        this.tipo = 'corrente';
        this._cartaoCreddito = cartaoCreddito;

    }
        //vei esses gets e seeters são o conseito de encapsulamento ou seja so essas classes tem essas caracteristicas 
    get cartaoCreddito(){
        return this._cartaoCreddito;
    }

    set cartaoCreddito(valor){
        this._cartaoCreddito = valor;
    }
}

//outra classe filha se liga que elas sempre usam o super pra referencias ao pai


class ContaPoupanca extends ContaBancaria {
    constructor(agenia,numero){
        super(agenia,numero);
        this.tipo = 'paupanca';
        
    }
}


class ContaUniversitaria extends ContaBancaria{
    constructor(agenia,numero){
        super(agenia,numero);
        this.tipo = 'universitaria';
        
    }

    sacar(valor){
        if(valor>500){
            return 'Operação negada!'
        }

        this._saldo - this._saldo - valor;
    }
}



///como criar e ver esses objetos

const minhaconta = new Contacorrente(1,234, true);

console.log(minhaconta)
console.log(" deposito de 1000")
minhaconta.depositar(1000)
console.log(minhaconta)
console.log(minhaconta.sacar(100000000))