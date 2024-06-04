const prompt = require('prompt-sync')();

class Objeto {
    constructor(largura, altura) {
        this.largura = largura;
        this.altura = altura;
    }

    calculaArea() {
    }
}

class Triangulo extends Objeto {
    constructor(largura, altura, tipo) {
        super(largura, altura);
        this.tipo = tipo;
    }

    calculaArea() {
        return (this.largura * this.altura) / 2; 
    }
}

class Retangulo extends Objeto {
    constructor(largura, altura) {
        super(largura, altura);
    }

    calculaArea() {
        return this.largura * this.altura; 
    }

    verificaQuadrado() {
        return this.largura === this.altura; 
        console.log("É Quadrado");
    }
}

const larguraTriangulo = prompt("Digite a largura: ");
const alturaTriangulo = prompt("Digite a altura: ");
const tipoTriangulo = prompt("Digite o tipo do triangulo: ");

const triangulo1 = new Triangulo(larguraTriangulo,alturaTriangulo,tipoTriangulo);
console.log('Área do triângulo:', triangulo1.calculaArea());

const larguraRetangulo = prompt("Digite a Largura:");
const alturaRetangulo = prompt("Digite a altura:");

const retangulo1 = new Retangulo(larguraRetangulo,alturaRetangulo);
console.log('Área do retângulo:', retangulo1.calculaArea());
console.log('É quadrado?', retangulo1.verificaQuadrado());
