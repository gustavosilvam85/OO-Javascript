let o1 = {};
let o2 = new Object();

console.log(o1);
console.log(o2);

o1.nome = "Matheus";
o2.nome = "João";

console.log(o1.valueOf());
console.log(o2.valueOf()); // retorna o proprio objeto

console.log(o1.toString());
console.log(o1.toString()); //representação do objeto em string vem do pai Object()

