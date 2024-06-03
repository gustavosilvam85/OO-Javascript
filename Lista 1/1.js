const prompt = require('prompt-sync')();

class Pessoa {
    constructor(nome,diaNascimento,mesNascimento,anoNascimento){
        this.nome = nome;
        this.diaNascimento = diaNascimento;
        this.mesNascimento = mesNascimento;
        this.anoNascimento = anoNascimento;
        this.idade = null;
    }
    calculaIdade(){
        const dataAtual = new Date();
        const diaAtual = dataAtual.getDate();
        const mesAtual = dataAtual.getMonth() + 1;
        const anoAtual = dataAtual.getFullYear();
    
        let idade = anoAtual - this.anoNascimento;
        if (mesAtual < this.mesNascimento || (mesAtual === this.mesNascimento && diaAtual < this.diaNascimento)) {
          idade--;
        }
        this.idade = idade;
    }
    informaIdade(){
        return this.idade;
    }
    informaNome(){
        return this.nome;
    }
}

const nome = prompt("Digite o nome:");
const diaNascimento = prompt("Digite o dia de nascimento:");
const mesNascimento = prompt("Digite o mes do nascimento:");
const anoNascimento = prompt("Digite o ano de nascimento:");

const pessoa = new Pessoa (nome,diaNascimento,mesNascimento,anoNascimento);
pessoa.calculaIdade();
console.log(pessoa.informaIdade());
console.log(pessoa.informaNome());
console.log(pessoa.nome + " tem " + pessoa.idade + " anos e nasceu dia "+pessoa.diaNascimento+"/"+pessoa.mesNascimento+"/"+pessoa.anoNascimento);
