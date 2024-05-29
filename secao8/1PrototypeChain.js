function Veiculo(){
    this.carenagem = 'aço';
    this.ligar = function(){
        console.log("O veiculo ligou!");
    }
}

function Trem(){
    this.tipo = 'trem';
    this.vagoes = 50;
}

Trem.prototype