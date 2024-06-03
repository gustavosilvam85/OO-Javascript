class Pessoa {
    constructor(nome, diaNascimento, mesNascimento, anoNascimento) {
        this.nome = nome;
        this.diaNascimento = diaNascimento;
        this.mesNascimento = mesNascimento;
        this.anoNascimento = anoNascimento;
        this.idade = null;
    }

    calculaIdade(diaAtual, mesAtual, anoAtual) {
        let idade = anoAtual - this.anoNascimento;
        if (mesAtual < this.mesNascimento || (mesAtual === this.mesNascimento && diaAtual < this.diaNascimento)) {
            idade--;
        }
        this.idade = idade;
    }

    informaIdade() {
        return this.idade;
    }

    informaNome() {
        return this.nome;
    }

    ajustaDataDeNascimento(dia, mes, ano) {
        this.diaNascimento = dia;
        this.mesNascimento = mes;
        this.anoNascimento = ano;
    }
}

// Criando objetos para testar o código
let pessoa1 = new Pessoa("João", 15, 5, 1990);
let pessoa2 = new Pessoa("Maria", 10, 8, 1985);

// Exemplo de uso dos métodos
pessoa1.calculaIdade(3, 6, 2024);
console.log(`${pessoa1.informaNome()} tem ${pessoa1.informaIdade()} anos.`);

pessoa2.ajustaDataDeNascimento(20, 4, 1990);
pessoa2.calculaIdade(3, 6, 2024);
console.log(`${pessoa2.informaNome()} tem ${pessoa2.informaIdade()} anos.`);
