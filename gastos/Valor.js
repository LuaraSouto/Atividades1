/* Desenvolver um sistema simples de cálculo de valor de projeto baseado em horas gastas. O sistema deve possuir dois campos (inputs), um deles referente ao valor que você como profissional cobra por hora de trabalho e outro referente às horas de trabalho gastas no projeto. O resultado do valor total a ser cobrado pelo projeto deve ser mostrado na tela através de um botão "calcular valor".*/

let HorasGastas = document.getElementById("HorasGastas")
let ValorHora = document.getElementById("ValorHoras")
let ValorTotal, HorasTotais

function Horas() {

    ValorTotal = (Number(HorasGastas.value) * Number(ValorHora.value))
 HorasTotais = Number(ValorHora.value)
    alert(`Você ira receber R$${ValorTotal} por ${HorasTotais}h !`)
}