const times = [] 
let timesA = []
let timesB = []
let contador = 0

let inClube = document.getElementById('inClube')
let btAdicionar = document.getElementById('btAdicionar')
let btListarClubes = document.getElementById('btListarClubes')
let btMontarTabela = document.getElementById('btMontarTabela')
let outInfosTimes = document.getElementById('outInfosTimes')
let outQuantidadeTimes = document.getElementById('outQuantidadeTimes')

function adicionarClube(){
    let clube = inClube.value 

    if(clube == "" || !isNaN(clube)){
        alert("Informe o nome do clube corretamente...")
        inClube.focus()
        inClube.value = ""
        return
    } else {
        times.push(clube)
        contador++
    }

    inClube.focus()
    inClube.value = ""

    outQuantidadeTimes.textContent = "Total de clubes cadastrados: " + contador
}

btAdicionar.addEventListener('click', adicionarClube)

function listarClubes(){
    if(contador == 0){
        alert('Não há clubes cadastrados...')
        inClube.focus()
        return
    } else {

        let clubesCadastrados = ""

        for(let i = 0; i < times.length; i++){
            clubesCadastrados += times[i]+"\n"
        }

        outInfosTimes.textContent = clubesCadastrados
    }
}

btListarClubes.addEventListener('click', listarClubes)

function montarTabelaDeJogos(){
    if(contador % 2 != 0){
        alert("Não há times suficiente. O total de clubes cadastrados tem que ser par.")
    } else {
        let tabela = ""

        for(let i = 0; i < contador / 2; i++){

            let A = times.shift()
            A = timesA.push(A)
            let B = times.pop()
            B = timesB.push(B)

            tabela += timesA[i] + " x " + timesB[i] + "\n"
        }
        outInfosTimes.textContent = tabela
    }  
}

btMontarTabela.addEventListener('click', montarTabelaDeJogos)