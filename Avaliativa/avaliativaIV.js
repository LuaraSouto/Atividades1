/*Criação de uma página WEB, onde será possível realizar o cadastro de um produto de uma loja, alterar o valor desse produto, deletar o produto da prateleira e apresentar a lista dos produtos para os clientes na página.

Tudo isso deverá ser realizado em uma única página.

Itens obrigatórios:

- Criação de um array de objetos para armazenar os produtos V. Deverá ser armazenados dentro do LocalStorage com a chave "produtosLoja" V. (3,0)
- Criação da página HTML para apresentar / alterar / cadastrar V / deletar os produtos. (2,0)
- Função para listar os produtos. (1,0)
- Função para alterar o valor de um produto, deverá buscar cada produto pelo seu nome. (2,0)
- Função para deletar um produto. (1,0)
- Função para cadastrar um produto V. (1,0)*/

let ObjetoProduto = {}
let VetorProdutos = []
let ValorNomeProduto = document.getElementById("NomeProduto")
let ValorPrecoProduto = document.getElementById("PrecoProduto")


function CadastrarProduto() {

    VetorProdutos = JSON.parse(localStorage.getItem('produtosLoja'))

    if (VetorProdutos == null) {
        VetorProdutos = []

        ObjetoProduto.NomeProduto = ValorNomeProduto.value

        ObjetoProduto.PrecoProduto = ValorPrecoProduto.value

        VetorProdutos.push(ObjetoProduto)

        localStorage.setItem('produtosLoja', JSON.stringify(VetorProdutos))

    } else {

        ObjetoProduto.NomeProduto = ValorNomeProduto.value

        ObjetoProduto.PrecoProduto = ValorPrecoProduto.value

        VetorProdutos.push(ObjetoProduto)

        localStorage.setItem('produtosLoja', JSON.stringify(VetorProdutos))
    }

}

function DeletarProdutos() {

    VetorProdutos = JSON.parse(localStorage.getItem('produtosLoja'))

    let Posicao

    let ProdutoExcluir = document.getElementById("ExcluirDeletar")

    for (i = 0; i < VetorProdutos.length; i++) {

        if (ProdutoExcluir.value == VetorProdutos[i].NomeProduto) {

            Posicao = i
            VetorProdutos.splice(Posicao, 1)

            alert("Produto Excluído com Sucesso!!" + Posicao)
        }
    }
    localStorage.setItem('produtosLoja', JSON.stringify(VetorProdutos))

}

function EditarProduto() {

    VetorProdutos = JSON.parse(localStorage.getItem('produtosLoja'))

    let posicao
    let nomeEditar = document.getElementById("NomeProdutoAntigo")

    for (i = 0; i < VetorProdutos.length; i++) {

        if (nomeEditar.value == VetorProdutos[i].NomeProduto) {

            posicao = i
            let novoPreco = document.getElementById("EditarProduto")
            VetorProdutos[posicao].PrecoProduto = novoPreco.value

        }
    }

    localStorage.setItem('produtosLoja', JSON.stringify(VetorProdutos))

}

function Listar() {

    let listaProduto = ''

    VetorProdutos = JSON.parse(localStorage.getItem('produtosLoja'))
    for (i = 0; i < VetorProdutos.length; i++) {

        listaProduto += (Object.values(VetorProdutos[i]).join(' / ')) + '<br>'
    }
    document.getElementById("lista").innerHTML = listaProduto



}
