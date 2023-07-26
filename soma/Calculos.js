let NumeroUm = document.getElementById("NumeroUm")
let NumeroDois = document.getElementById("NumeroDois")
let resultado
let ValorUm, ValorDois


function soma() {
ValorUm = Number(NumeroUm.value)
ValorDois = Number(NumeroDois.value)

resultado = ValorUm + ValorDois

alert(`Esse e o Resultado: ${ValorUm} + ${ValorDois} = ${resultado}`)

}
