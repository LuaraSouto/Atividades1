/* Elaborar o sistema de cálculo de IMC com interface, que deve conter 2 inputs (peso e altura) e um botão para calcular e mostrar na tela o resultado do IMC e a faixa de peso. Dessa vez, realizar a atividade com 5 faixas: muito abaixo do peso (imc menor que 15), abaixo do peso (15 a 18.5), dentro do peso (18.5 a 25), acima do peso (25 a 28.5) e muito acima do peso (acima de 28.5).*/

let Altura = document.getElementById("altura")
let Peso = document.getElementById("peso")
let IMCResultado
let ValorPeso, ValorAltura

function IMC() {

ValorAltura = Number(Altura.value)
ValorPeso = Number(Peso.value)

    alert
    IMCResultado = ValorPeso / (ValorAltura * ValorAltura)
    IMCResultado = IMCResultado.toFixed(2)

switch(true){

    case IMCResultado <= 15:
        alert(`Você esta muito abaixo do peso \nSeu IMC: ${IMCResultado}`)
        break

    case IMCResultado > 15 && IMCResultado <= 18.5:
        alert(`Você esta abaixo do peso \nSeu IMC: ${IMCResultado}`)
        break

    case IMCResultado > 18.5 && IMCResultado <=25:
        alert(`Você esta Dentro do peso \n${IMCResultado}`)
    break

    case IMCResultado >25 && IMCResultado <= 28.5:
    alert(`Você esta acima do peso \n ${IMCResultado} `)
    break
}


}