let maquina = {
    material : "Aço inox",
    equipamentos: ['motos','freios','esteira','cilindro'],
    vaiMontada : false,
    numeroDeMotores:1,
};

console.log(maquina);
console.log(maquina.material);
console.log(maquina.equipamentos[2]);

for(let i = 0;i< maquina.equipamentos.length; i++){
    console.log(maquina.equipamentos[i]);
}

if(maquina.vaiMontada == false){
    console.log("O comprador precisa montar a maquina");
}