function criarCarro(modelo,portas,aro,tetoSolar){
    return{
        modeloDoCarro: modelo,
        portas: portas,
        aro: aro,
        tetoSolar:tetoSolar,

        ligarCarro: function(){
            console.log("ligou");
        },

        temTetoSolar:function(){
            if(this.tetoSolar == true){
                console.log("Tem teto solar");
            }else{
                console.log("Nao tem teto solar");
            }
        }
    }
}

let ferrari = criarCarro('Ferrari', 4, 18, true);

console.log(ferrari.modeloDoCarro);

ferrari.ligarCarro();
ferrari.temTetoSolar();    

let bmw = criarCarro('bmw',4,18,false);

console.log(bmw.modeloDoCarro);