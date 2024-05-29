let Humano = class {
    constructor(nome,idade){
        this.nome = nome;
        this.idade = idade;
    }
    nomeDaPessoa(){
        return "O nome da pessoa é " + this.nome;
    }
}


console.log(typeof Humano);

let matheus = new Humano('Matheus',29);

console.log(matheus);

console.log(matheus.nomeDaPessoa());
