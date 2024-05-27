let ninja ={
    classe:"profissional",
    arma:"shuriken",
    atirararma:function(){
        console.log("Atirou a " + this.arma);
    },
    atirarDuasVezes: function(){
        for(let i = 2; i > 0 ; i--){
            this.atirararma();
        }
    }
}
let ninja2 ={
    classe:"profissional",
    arma:"kunai",
    atirararma:function(){
        console.log("Atirou a " + this.arma);
    }
}
ninja.atirararma();
ninja2.atirararma();
ninja.atirarDuasVezes();

//THIS ACESSA QUALQUER COISA DENTRO DO OBJETO//