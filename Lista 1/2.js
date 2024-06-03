const prompt = require('prompt-sync')();

class Universidade {
    constructor(nomeUniversidade){
        this.nomeUniversidade = nomeUniversidade;
    }
    informaNome(){
        return this.nomeUniversidade;
    }
}
class Pessoa extends Universidade{
    constructor(nomeUniversidade,nomePessoa){
        super(nomeUniversidade)
        this.nomePessoa = nomePessoa;
    }
    informaNomePessoa(){
        return this.nomePessoa;
    }
}
const nomeUniversidade = prompt("Digite o nome da universidade:");
const nomePessoa = prompt("Digite o nome:");

const universidade = new Universidade(nomeUniversidade);
const pessoa = new Pessoa(nomeUniversidade,nomePessoa);

console.log(pessoa.informaNomePessoa()+" trabalha na universidade "+pessoa.nomeUniversidade);

const nomeUniversidade1 = prompt("Digite o nome da universidade:");
const nomePessoa1 = prompt("Digite o nome:");

const universidade1 = new Universidade(nomeUniversidade1);
const pessoa1 = new Pessoa(nomeUniversidade1,nomePessoa1);

console.log(pessoa1.informaNomePessoa()+" trabalha na universidade "+pessoa1.nomeUniversidade);