const prompt = require('prompt-sync')();

class Funcionario {
    constructor(id, nome, cargo) {
        this.id = id;
        this.nome = nome;
        this.cargo = cargo;
    }

    calculaSalario() {
        return 1500;
    }
}

class Gerente extends Funcionario {
    constructor(id, nome, cargo, quantidadeDeColaboradores) {
        super(id, nome, cargo);
        this.quantidadeDeColaboradores = quantidadeDeColaboradores;
    }

    calculaSalarioGerente() {
        return 2000 + this.calculaSalario();
    }
}

console.log("=====Cadastro Funcionario=====");
const idFuncionario = prompt("Digite um id: ");
const nomeFuncionario = prompt("Digite um nome: ");
const cargoFuncionario = prompt("Digite o cargo: ");

const funcionario1 = new Funcionario(idFuncionario, nomeFuncionario, cargoFuncionario);
console.log(funcionario1.calculaSalario()); 

console.log("=====Cadastro Gerente=====");
const idGerente = prompt("Digite um id: ");
const nomeGerente = prompt("Digite um nome: ");
const cargoGerente = prompt("Digite o cargo: ");
const quantidadeDeColaboradores = prompt("Digite a quantidade de colaboradores: ")

const gerente1 = new Gerente(idGerente,nomeGerente,cargoGerente, quantidadeDeColaboradores);
console.log(gerente1.calculaSalarioGerente()); 
