//array para salvar todos os dados
let todosDadosSalvos = []

//funcao que cria o obj quando usuario clica no botao `criar`
function criarObjLocalStorage() {

    let dadosUsuario = {
        nome: document.getElementById("inputNome").value,
        idade: document.getElementById("inputIdade").value
    }

    todosDadosSalvos.push(dadosUsuario)

    //passando os dados para o localStorage *Precisa do JSON para converter os dados para string
    localStorage.setItem("usuarios", JSON.stringify(todosDadosSalvos))
}

//funcao que apresenta os dados na tela quando o usuario clica no botao `Apresentar Dados`
function apresentarArray() {

    //variavel que armazena os dados do localStorage;  *Precisa do JSON para converter os dados de string de volta para array
    let arrayUsuarios = JSON.parse(localStorage.getItem("usuarios"))

    //limpa o innerHtml, para nao sobrescrever dados
    document.getElementById("divApresentar").innerHTML = ""

    //atualiza o innerHtml
    for (i = 0; i < arrayUsuarios.length; i++) {
        document.getElementById("divApresentar").innerHTML += `Nome: ${arrayUsuarios[i].nome} `
        document.getElementById("divApresentar").innerHTML += `Idade: ${arrayUsuarios[i].idade} ` + "<br>" + "<br>"
    }
}

//funcao para o usuario limpar campos mais facilmente
function limparInputs() {
    document.getElementById("inputNome").value = ""
    document.getElementById("inputIdade").value = ""
}