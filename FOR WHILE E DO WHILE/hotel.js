/*Um hotel possui 130 leitos no total, mas devido a problemas, está atendendo somente com capacidade de 50% leitos, sendo que desses, 25 estão ocupados pelas próximas semanas. Faça um programa que o usuário digite o número de pessoas que entra (com números positivos) e o número de pessoas que saem (com números negativos). Caso a capacidade de 50% seja ultrapassada, mostrar mensagem “não é possível pois ultrapassa a capacidade em X leitos”, sendo X o número a mais de hóspedes que ficariam sem leito. (DESAFIO: Criar condição para não aceitar abrir novas vagas digitando número negativo caso já estejam as 40 vagas livres).*/

let leitosDisponives = 40
let letitosSoma = 0
let letitosNum
let leitosExcentes

    while (letitosSoma < 40) {

        letitosNum = Number(prompt('Quantas pessoas?'))

        leitosExcentes = letitosSoma - leitosDisponives

        console.log(letitosSoma)

        if((letitosSoma + letitosNum) < 0){

            alert('não podemos abrir vagas!!!')
            break
        
        }else{

          letitosSoma += letitosNum
          alert(`excede os leitos em ${leitosExcentes}`)
          
        }

        
    }



