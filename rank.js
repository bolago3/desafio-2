let resultado = rank(63 , 50)

console.log("O Herói tem saldo de: " + resultado)

if(resultado <=10){console.log("Está no nível Ferro")}
else if(resultado <= 20){console.log("Está no nível Bronze")}
else if(resultado <= 50){console.log("Está no nível Prata")}
else if(resultado <= 80){console.log("Está no nível Ouro")}
else if(resultado <= 90){console.log("Está no nível Diamante")}
else if(resultado <= 100){console.log("Está no nível Lendário")}
else if(resultado >= 101){console.log("Está no nível Imortal")}

function rank(vitoria , derrota , result){
    let diferenca = (vitoria - derrota)
    return diferenca
}