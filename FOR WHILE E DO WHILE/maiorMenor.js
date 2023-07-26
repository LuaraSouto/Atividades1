/* Fazer um programa no qual o usuário deve digitar 10 números entre 0 e 50. Ao final deve mostrar o maior número digitado e o menor número digitado. Os números digitados que não estiverem entre 0 e 50, devem ser desconsiderados.*/

let numeros
let MaiorNumero = 0
let MenorNumero = 50

for(i=0; i < 10; i++){

    numeros = Number(prompt('Digite 10 numeros entre 0 e 50:' )) 

    if(numeros <= 50 && numeros >= 0){
    if(MaiorNumero <= numeros){
        MaiorNumero = numeros

    }
    if(MenorNumero >= numeros){
        MenorNumero = numeros

    }}

}
alert(`Maior ${MaiorNumero}  menor ${MenorNumero}`)