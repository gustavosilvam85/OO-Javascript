function criarArvore(especie, temFruto){
    return{
        especie: especie,
        temFruto: temFruto
    }
}

let laranjeira = criarArvore('Laranjeira',true);

function Heroi(nome,classe){
    this.nome = nome;
    this.classe = classe;
}

let jaspion = new Heroi('jaspion','robo');

let obj = {
    tete: 'teste',
}

console.log(laranjeira instanceof criarArvore);
console.log(laranjeira instanceof Object);
console.log(jaspion instanceof Heroi);
console.log(obj instanceof Object);

//JAVASCRIPT tudo é objeto e todo tipo de dado vai ter um pai objeto//
//instanceof é um operador //
let arr = [

];

console.log(arr instanceof Array);