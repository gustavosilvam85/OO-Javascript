const prompt = require('prompt-sync')();

class Animal{
    constructor(nome,raca,qtdPatas,cor,peso,tamanho,dono){    
        this.nome = nome;
        this.raca = raca;
        this.qtdPatas = qtdPatas
        this.cor = cor;
        this.peso = peso;
        this.tamanho = tamanho;
        this.dono = dono;
    }
    falar(){
        return "";
    }
}

class Gato extends Animal {
    constructor(nome,raca,qtdPatas,cor,peso,tamanho,dono){
        super(nome,raca,qtdPatas,cor,peso,tamanho,dono)
    }
    falar(){
        console.log("\n MIAU \n");
    }
}

class Cachorro extends Animal {
    constructor(nome,raca,qtdPatas,cor,peso,tamanho,dono){
        super(nome,raca,qtdPatas,cor,peso,tamanho,dono)
    }
    falar(){
        console.log("\n AUAUAU \n");
    }
}

class Galinha extends Animal{
    constructor(nome,raca,qtdPatas,cor,peso,tamanho,dono){
        super(nome,raca,qtdPatas,cor,peso,tamanho,dono)
    }
    falar(){
        console.log("COCORICÓ")
    }
}

class Humano{
    constructor(nome,idade,endereco,contato){
        this.nome = nome;
        this.idade = idade;
        this.endereco = endereco;
        this.contato = contato;
    }
}

class Funcionario extends Humano{
    constructor(nome,idade,endereco,contato){
        super(nome,idade,endereco,contato)
    }
}

class Balconista extends Funcionario {
    constructor(nome,idade,endereco,contato){
        super(nome,idade,endereco,contato)
    }
    salario(){
        console.log("O salario de balconista é R$1500")
    }
}
class Vendedor extends Funcionario {
    constructor(nome,idade,endereco,contato){
        super(nome,idade,endereco,contato)
    }
    salario(){
        console.log("O salario de balconista é R$2000")
    }
}
class Veterinario extends Funcionario {
    constructor(nome,idade,endereco,contato){
        super(nome,idade,endereco,contato)
    }
    salario(){
        console.log("O salario de balconista é R$4000")
    }
}

class Produto{
    constructor(item,quantidade,descricao,preco){
        this.item = item;
        this.quantidade = quantidade;
        this.descricao = descricao;
        this.preco = preco ;
    }
}

class venda extends Humano {
    constructor(listaProduto,nome){
        super(nome);
        this.listaProduto = listaProduto;
    }
}
console.log("=====Clinica Veterinaria=====");
console.log("1-Cadastrar animal");
console.log("2-Cadastrar um produto no estoque")
let escolheMenu = parseInt(prompt("Escolha uma opção:"))

if(escolheMenu == 1) {

    console.log("1-Gato");
    console.log("2-Cachorro");
    console.log("3-Galinha");

    let escolheAnimal= parseInt(prompt("escolha o animal:"));
    const nome = prompt("digite o nome do animal:");
    const raca = prompt("digite a raca do animal:");
    const qtdPatas = prompt("digite a quantidade de patas do animal:");
    const cor = prompt("digite a cor do animal:");
    const peso = prompt("digite o peso do animal:");
    const tamanho = prompt("digite tamanho do animal:");
    const dono = prompt("Digite o nome do dono:");

    if (escolheAnimal == 1){
        const gato = new Gato(nome,raca,qtdPatas,cor,peso,tamanho,dono);
        gato.falar();
        console.log(gato);
    }else if(escolheAnimal == 2){
        const cachorro = new Cachorro(nome,raca,qtdPatas,cor,peso,tamanho,dono);
        cachorro.falar();
        console.log(cachorro);
    }else if(escolheAnimal == 3){
        const galinha = new Galinha(nome,raca,qtdPatas,cor,peso,tamanho,dono);
        galinha.falar();
        console.log(galinha);
    }else{
        console.log("Animal invalido");
    }    
}else if(escolheMenu == 2){
    const item = prompt("Digite o nome do Produto:");
    const quantidade = prompt("Digite a quantidade:");
    const descricao = prompt("Digite a descricao do produto:");
    const preco = prompt("Digite o preço:")
    const produto = new Produto(item,quantidade,descricao,preco);
    console.log(produto);

}else{
    console.log("Opção invalida");
}   