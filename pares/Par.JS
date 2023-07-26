/*Programar um sistema onde o usuário preencha 5 números (inputs) com um botão que verifica se os números são pares. Clicando no botão, deve mostrar na tela quantos dos números digitados são pares. Não precisa especificar quais.*/

let NumeroUm 
let NumeroDois 
let NumeroTres
let NumeroQuatro 
let NumeroCinco 
let Contador = 0

function VerificarNumPar(){
document.getElementById("NumeroUM").value
document.getElementById("NumeroDois").value
document.getElementById("NumeroTres").value
document.getElementById("NumeroQuatro").value
document.getElementById("NumeroCinco").value

if( Number(document.getElementById("NumeroUM").value) % 2 === 0 ){
    Contador++
}

if( Number(document.getElementById("NumeroDois").value) % 2 === 0 ){
    Contador++
}

if( Number(document.getElementById("NumeroTres").value) % 2 === 0 ){
    Contador++
}

if( Number(document.getElementById("NumeroQuatro").value) % 2 === 0 ){
    Contador++
}

if( Number(document.getElementById("NumeroCinco").value) % 2 === 0 ){
    Contador++
}

alert(Contador)
}