const numeros = []

let inNumero = document.getElementById('inNumero')
let btAdicionar = document.getElementById('btAdicionar')
let btVerificarOrdem = document.getElementById('btVerificarOrdem')
let outListaDeNumeros = document.getElementById('outListaDeNumeros')
let outAtencao = document.getElementById('outAtencao')

function adicionarNumero(){
    let numero = Number(inNumero.value)

    //verifica se número já foi digitado antes
    let numeroRepetido = numeros.includes(numero)
    if(numeroRepetido){
        alert('Número já digitado, informe outro número')
        inNumero.value = ""
        inNumero.focus()
        return
    }

    //verifica o campo numero
    if(numero == "" || isNaN(numero)){
        alert('Informe um número:')
        inNumero.value = ""
        inNumero.focus()
        return
    } else {
        numeros.push(numero)
        inNumero.value = ""
        inNumero.focus()
    }

    //concatena e transforma o array em texto
    let lista = ""
    for(let i = 0; i < numeros.length; i++){ 
        if((i + 1) == numeros.length){
            lista += numeros[i] + "."
        } else {
             lista += numeros[i] + ", "
        }
        outListaDeNumeros.textContent = lista
    }
}
btAdicionar.addEventListener('click', adicionarNumero)

//função para verificar se os números estão ordenados
function verificarOrdem(){
    for(let i = 0; i < numeros.length - 1; i ++){
        if(numeros[i] > numeros[i + 1]){
            outAtencao.textContent = "Atenção... os NÃO números estão em ordem"
            outAtencao.style.color = "red"
        } else {
            outAtencao.textContent = "Os números estão em ordem"
            outAtencao.style.color = "green"
        }
    }
}
btVerificarOrdem.addEventListener('click', verificarOrdem)