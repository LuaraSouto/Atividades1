
/*1) Faça um programa em que o usuário digite o nome de 5 produtos e seus preços (“Digite o produto” / “Digite o seu preço”) e armazene esses nomes e preços em dois vetores separados. O programa deve calcular e mostrar:

a) A quantidade de produtos com preço inferior a R$50;
b) O nome dos produtos com preço entre R$50 e R$100;
c) A média dos preços dos produtos com preço superior a R$100.*/

let NomeDoProduto = []
let PrecoDoProduto = []
let DigiteNomeProdudo, DigitePrecoProduto

for (i = 0; i < 5 ;i++) {

    DigiteNomeProdudo = prompt('Digite o nome do Produto')  
    DigitePrecoProduto = Number(prompt('Digite o valor do produto'))

    NomeDoProduto.push(DigiteNomeProdudo)
    PrecoDoProduto.push(DigitePrecoProduto)

  

}

alert(NomeDoProduto)
alert(PrecoDoProduto)
alert(SomaDeValorProduto)