const nomeCandidatos = []
const numeroAcertos = []
let notaDeCorte = Number(prompt('Informe a quantidade de acertos Aprovação:'))

//Se certifica de conseguir um valor para quantidade de acertos(notaDeCorte) e se essa valor é um número
while(notaDeCorte == false || isNaN(notaDeCorte)){
    alert("É preciso informar a quantidade de acertos corretamente")
    notaDeCorte = Number(prompt('Quantidade de acertos necessarios para aprovação'))
}

//Interação com o html
let inCandidato = document.getElementById('inCandidato')
let inAcertos = document.getElementById('inAcertos')
let btAdicionar = document.getElementById('btAdicionar')
let btListarTodos = document.getElementById('btListarTodos')
let btAprovados = document.getElementById('btAprovados')
let outCandidatos = document.getElementById('outCandidatos')


//Adiciona os candidatos e quantidade de acertos recebidos no input, coloca eles em arrays separados e concatena os arrays por indice
function adicionarCandidatoENota(){
    let candidato = inCandidato.value
    let acertos = Number(inAcertos.value)

    if(candidato == "" || !isNaN(candidato) || acertos == "" || isNaN(acertos)){
        alert('Preencha os campos corretamente...')
        inCandidato.value = ''
        inAcertos.value = ''
        inCandidato.focus()
        return
    } else {
        nomeCandidatos.push(candidato)
        numeroAcertos.push(acertos)

        let candidatosEAcertos = ""

        for(let i = 0; i < nomeCandidatos.length; i++){
            candidatosEAcertos += nomeCandidatos[i] + " - " + numeroAcertos[i] + " acertos\n"

            inCandidato.value = ''
            inAcertos.value = ''
            inCandidato.focus()
        }
        outCandidatos.textContent = candidatosEAcertos
    }
}
btAdicionar.addEventListener('click', adicionarCandidatoENota)

//Laço de repetição retirado da função a cima, funciona para concatenar os arrays novamente quando clicado no botão listar todos
function listarTodos(){
    let candidatosEAcertos = ""

        for(let i = 0; i < nomeCandidatos.length; i++){
            candidatosEAcertos += nomeCandidatos[i] + " - " + numeroAcertos[i] + " acertos\n"

            inCandidato.value = ''
            inAcertos.value = ''
            inCandidato.focus()
        }
        outCandidatos.textContent = candidatosEAcertos
}
btListarTodos.addEventListener('click', listarTodos)

//Faz a verificação da quantidade de acertos e mostra na tela somente quem tem nota de corte maior ou igual a nota informada no prompt inicial
function verificarAprovados(){
    let aprovados = ""
    
    for(let i = 0; i < numeroAcertos.length; i++){
        if(numeroAcertos[i] >= notaDeCorte){
            aprovados += nomeCandidatos[i] + " - " + numeroAcertos[i] + " acertos\n"
        }
    }
    outCandidatos.textContent = aprovados
}
btAprovados.addEventListener('click', verificarAprovados)