/*Desenvolver um programa no qual o usuário digite o número de multas que deseja cadastrar e para cada multa deve colocar o valor em reais e os pontos perdidos na carteira de habilitação. Ao final, mostrar o somatório das multas e dos pontos, caso os pontos alcancem 21 ou mais, exibir a mensagem “Você está irregular”, senão, exibir “Você está regular”.*/
let numMultas, ValorMultas, PontosMultas
let NumPontos = 0
let QuantidadeMultas = 0

numMultas = Number(prompt('Digite a quantidade de multas recebidas:'))

for (i=0; i < numMultas; i++) {
       
    ValorMultas = Number(prompt(`Digite o valor da multa ${i+1}`))
    PontosMultas = Number(prompt(`Digite a quantidade de pontos da multa ${i+1}`))

    NumPontos += PontosMultas
    QuantidadeMultas += ValorMultas

}

if(NumPontos >= 21){
    alert(`Você esta Irregular \nSeus pontos ao todo são: ${NumPontos} \nValor a ser pago: ${(QuantidadeMultas).toFixed(2)}`)
}else{
    alert(`Você esta Regular \nSeus pontos no total são: ${NumPontos} \nValor a ser pago: ${(QuantidadeMultas).toFixed(2)}`)
}
