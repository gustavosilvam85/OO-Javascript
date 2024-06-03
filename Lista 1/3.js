const prompt = require('prompt-sync')();

class Produto {
    constructor(nome, preco, quantidade) {
        this.nome = nome;
        this.preco = preco;
        this.quantidade = quantidade;
    }
}

class Pedido {
    constructor(produto,quantidade) {
        this.produto = produto;
        this.quantidade = quantidade;
    }
}

class Cliente {
    constructor(nome,metodo) {
        this.nome = nome;
    }
    metodoPagamento(metodo){
        if (["Dinheiro", "Cheque", "Cartão"].includes(metodo)) {
            this.tipoPagamento = metodo;
            console.log("O metodo de pagamento escolhido foi : "+ metodo);
        } else {
            console.log("Tipo de pagamento inválido.");
        }
    }
}

class Pagamento {
    constructor(metodo, valor) {
        this.metodo = metodo;
        this.valor = valor;
    }
}

const arroz = new Produto ("Arroz",30,10);
const feijao = new Produto ("Feijão",30,8);
const ovo = new Produto ("Ovo",30,2);

console.log("=====MENU=====");
console.log("1-Estoque");
console.log("2-Pedido");

const menu = parseInt(prompt("Escolha uma opção: "));

if(menu == 1){
    console.log("=====ITENS DISPONIVEIS=====");
    console.log(arroz);
    console.log(feijao);
    console.log(ovo);

}else if (menu == 2){
    console.log("=====PEDIDO=====")
    const nome = prompt("Qual seu nome ?")
    const cliente = new Cliente(nome);

    const produto = prompt("Digite o produto: ");
    const quantidade = prompt ("Digite a quantidade: ");
    const pedido = new Pedido(produto,quantidade);
    console.log("Metodos de pagamentos aceitos")
    console.log("Dinheiro");
    console.log("Cartão");
    console.log("Cheque");
    cliente.metodoPagamento(prompt("Digite o metodo de pagamento:"));
}