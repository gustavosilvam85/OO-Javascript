let pessoa1 = {
    nome: "Matheus",
    getNome(){
        console.log("Esse é o nome do objeto: "+this.nome)
    }
};

let pessoa2 = {
    nome: "João",
    age: 12
};

Object.assign(pessoa2,pessoa1);

console.log(pessoa2);

pessoa2.getNome();

pessoa2.nome = "João";

console.log(pessoa1);

console.log(pessoa1 === pessoa2)