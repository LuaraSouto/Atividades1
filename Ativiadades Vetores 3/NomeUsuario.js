/*2) Faça um programa que crie um vetor vazio. Esse programa deve perguntar qual opção o usuário deseja (1, 2, 3, 4, 5, 0) e as opções devem executar as tarefas abaixo. Criar as mensagens e a forma de pesquisa / lista, da forma que achar melhor.

======== MENU ========
1- Cadastrar nome
2- Excluir um nome
3- Editar um nome
4- Pesquisar se um nome está cadastrado
5- Listar todos os nomes cadastrados
0- Sair do programa*/

let NomesRegistrados = []
let CadastroDeNome, DeletarNome
let EscolhaDoMenu

function CadastrarNomes() {   

EscolhaDoMenu = prompt('======== MENU ======== \n\n1- Cadastrar nome \n2- Excluir um nome \n3- Editar um nome \n4- Pesquisar se um nome está cadastrado \n5- Listar todos os nomes cadastrados \n0- Sair do programa')


switch(true){
    case EscolhaDoMenu == 1:
        CadastroDeNome = prompt('Digite o nome a ser cadastrado:')
        NomesRegistrados.unshift(CadastroDeNome)
        alert(`Nome ${NomesRegistrados[0]} Cadastrado`)
        CadastrarNomes()
        break

    case EscolhaDoMenu == 2:
        DeletarNome = prompt('Digite o nome que vai ser deletado:')
        NomesRegistrados.splice(DeletarNome, DeletarNome)
        alert(`Nome ${DeletarNome} deletado com sucesso!`)
        CadastrarNomes()
        break

    case EscolhaDoMenu == 3:
        DeletarNome = prompt('Digite o nome que vai ser editado:')
        NomesRegistrados.slice(DeletarNome, DeletarNome)
        CadastroDeNome = prompt('Digite o novo nome:')
        NomesRegistrados.unshift(CadastroDeNome)
        alert(`O nome ${DeletarNome} foi trocado por ${CadastroDeNome}`)
        CadastrarNomes()
        break

    case EscolhaDoMenu == 4:

    case EscolhaDoMenu == 5:
        alert(NomesRegistrados)
        CadastrarNomes()
        break

    case EscolhaDoMenu == 0:
        alert('adeus')
        break

    default:
        CadastrarNomes()

}
}
CadastrarNomes()


