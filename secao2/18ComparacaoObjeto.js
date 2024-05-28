function Ninja(nome,arma){
    this.nome = nome;
    this.arma = arma;
}

const naruto = new Ninja ('Naruto','Shuriken');
const rocklee = new Ninja('Rock lee','punhos');
const cloneNaruto = new Ninja('Naruto','Suriken');
const cloneVerdadeiroDoNaruto = naruto;

console.log(naruto === rocklee);

console.log(naruto === cloneNaruto);

console.log(naruto === cloneVerdadeiroDoNaruto);

console.log(cloneNaruto === cloneVerdadeiroDoNaruto);