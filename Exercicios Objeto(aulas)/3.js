function Ninja(nome) {
    this.nome = nome;
    this.AtirarShuriken = function() {
        console.    log("O " + this.nome + " atirou shuriken!");
    };
}

let ninja1 = new Ninja('Obito');
ninja1.AtirarShuriken();
