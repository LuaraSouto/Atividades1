let NotaUm = document.getElementById("NotaUM")
let NotaDois = document.getElementById("NotaDOIS")
let NotaQuatro = document.getElementById("NotaTRES")
let NotaTres = document.getElementById("NotaQUATRO")
let resultado

function media() {
    
    resultado = (Number(NotaUm.value) + Number(NotaDois.value) + Number(NotaTres.value) + Number(NotaQuatro.value)) / 4

switch(true){

case resultado >= 7 && resultado < 10:
    alert(`aprovado!! \nSua media foi: ${resultado}`)
    break

case resultado <7 && resultado >=5:
    alert(`Em Exame!! \nSua media foi: ${resultado}`)
    break

case resultado < 5:
    alert(`Reprovado!! \nSua media foi: ${resultado}`)
    alert('Tente estudar mais!! \nVocê vai conseguir!!! <3') 
    break

default:
    alert(`erro ao calcular a media!! \nNota acima de 10 \n( ${resultado} )`)
    break

}

}

