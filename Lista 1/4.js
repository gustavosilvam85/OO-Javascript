const prompt = require('prompt-sync')();

class Pessoa {
    constructor(nome, endereco, email, telefone) {
        this.nome = nome;
        this.endereco = endereco;
        this.email = email;
        this.telefone = telefone;
    }
}

class Livro {
    constructor(nome, autor, numeroPaginas) {
        this.nome = nome;
        this.autor = autor;
        this.numeroPaginas = numeroPaginas;
        this.disponivel = true;
        this.pessoaAlugou = null;
    }

    alugarLivro(pessoa) {
        if (this.disponivel) {
            this.disponivel = false;
            this.pessoaAlugou = pessoa;
            console.log(`Livro '${this.nome}' alugado por ${pessoa.nome}.`);
        } else {
            console.log(`Desculpe, o livro '${this.nome}' não está disponível para aluguel no momento.`);
        }
    }

    devolverLivro() {
        this.disponivel = true;
        this.pessoaAlugou = null;
        console.log(`Livro '${this.nome}' devolvido com sucesso.`);
    }
}

const nome = prompt("Digite o nome: ");
const endereco = prompt("Digite o endereço: ");
const email = prompt("Digite o e-mail: ");
const telefone = prompt("Digite o telefone: ");
const pessoa1 = new Pessoa (nome, endereco, email, telefone);
console.log(pessoa1)

const livro1 = new Livro("O homem mais rico da babilonia", "George S. Clason", 160);
const livro2 = new Livro("A revolução dos bichos", "George Orwell", 144);

livro1.alugarLivro(pessoa1);
livro1.devolverLivro();
livro2.alugarLivro(pessoa1);