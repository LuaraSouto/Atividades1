/*Programar para que o usuário digite 5 números e caso sejam pares, mostre a média deles. Se algum número digitado não for par, ao final não será mostrada a média e sim uma mensagem “Um dos números digitados era ímpar”.*/

let Valor
let SomaPar = 0

for(i=0; i < 5; i++){

    Valor = Number(prompt('Digite um número par:'))

        SomaPar += Valor

}

if(SomaPar % 2 === 1){
    alert("Um dos número digitados era Impar");
}else{
    alert((SomaPar / 5).toFixed(2))
    }
