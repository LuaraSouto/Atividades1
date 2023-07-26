/*O acampamento base sul do Everest fica a cerca de 5.360m de altura. A partir dele, muitas expedições partem rumo ao cume que fica a 8.848m de altura, levando dias para chegar. Considerando a saída do acampamento base, faça um programa que pergunte ao usuário a altitude em metros escalada no dia. Caso seja atingida a marca de 8 dias e não tenha chegado ao cume, mostrar mensagem “Você deve voltar, pois corre risco de ficar sem oxigênio”. Se chegar ao cume em menos de 8 dias, mostrar a quantidade de dias que foram necessários para tal.*/

let base = 5360
let topo = 8848
//altura restante 3488m
let alturaRestante = topo - base
let alturaDias = 0
let DiasPercorridos = 0


while (alturaRestante > 0 && DiasPercorridos < 8) {
    
    alturaDias = Number(prompt('Altura do dia:'))

    alturaRestante -= alturaDias
    DiasPercorridos ++

}

if(DiasPercorridos == 8){
    alert('volte ou vai fiacr sem oxigenio')
}else{

    alert(`voce atingiu o cume: ${DiasPercorridos} dias`)

}