const prompt = require('prompt-sync')();

class Universidade {
    constructor(nomeUniversidade){
        this.nomeUniversidade = nomeUniversidade;
    }
    informaNome(){
        return this.nomeUniversidade;
    }
}

const nomeUniversidade = prompt("Digite o nome da universidade:");

const universidade = new Universidade(nomeUniversidade);
console.log(universidade.informaNome());
