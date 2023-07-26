/*1) Fazer um programa no qual o usuário deve digitar um número e o expoente dele. Mostrar na tela o resultado do cálculo. (Não é permitido usar o operador **).*/

let numero = Number(prompt('DIGITE UM NÚMERO:'))
let Expoente = Number(prompt('DIGITE O EXPOENTE:'))
let calculo = 1

for (i=0; i < Expoente; i++) {

    calculo *= numero
}

alert(`RESULTADO: ${calculo}`)