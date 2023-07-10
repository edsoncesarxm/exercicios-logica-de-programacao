let noticiasCadastradas = []
let contadorDeNoticiasCadastradas = 0

//interação com o html
let inNoticia = document.getElementById('inNoticia')
let btAdicionar = document.getElementById('btAdicionar')
let btListar = document.getElementById('btListar')
let outNoticiasCadastradas = document.getElementById('outNoticiasCadastradas')
let outUltimasNoticias = document.getElementById('outUltimasNoticias')

//Salva noticia no array noticiaCadastrada
function adicionarNoticias(){
    let noticia = inNoticia.value 

    if(noticia == "" || !isNaN(noticia)){
        alert("Notícia inválida...")
        inNoticia.value = ""
        inNoticia.focus()
        return
    } else {
        noticiasCadastradas.push(noticia)

        alert('Notícia salva com sucesso')

        inNoticia.value = ""
        inNoticia.focus()

        contadorDeNoticiasCadastradas++

        outNoticiasCadastradas.textContent = "Notícias Cadastradas: " + contadorDeNoticiasCadastradas
        outNoticiasCadastradas.style.color = "blue"
    }
}
btAdicionar.addEventListener('click', adicionarNoticias)

//Lista as últimas notícias de acordo com o informado no prompt
function listarUltimasNoticias(){
    let mostrarNoticias = Number(prompt('Quantas noticias você deseja ver?'))

    //Verifica se valor recebido é valido
    if(mostrarNoticias == false || mostrarNoticias == "" || isNaN(mostrarNoticias) || mostrarNoticias > contadorDeNoticiasCadastradas){
        alert("Precisa informar a quantidade de noticias corretamente")
            inNoticia.focus()
            inNoticia.value = ""
            return
    } 

    //Copia o array noticiasCadastradas e o coloca em ordem decrescente em um novo array
    let copiaNoticias = []
    copiaNoticias = noticiasCadastradas.slice(0)
    copiaNoticias.reverse()

    //exibe as notícias tela de acordo com o número de notícias solicitado
    let = exibirNoticia = ""    
    let = contadorNoticiaReverso = contadorDeNoticiasCadastradas

    for(let i = 0; i < mostrarNoticias; i++){
        if(i == 0){
            exibirNoticia += mostrarNoticias + " Últimas Notícias:\n"+"------------------------------------------------\n" +
            contadorNoticiaReverso + "°) " + copiaNoticias[i] + "\n"
        } else {
            exibirNoticia += +
            contadorNoticiaReverso + "°) " + copiaNoticias[i] + "\n"
        }
        contadorNoticiaReverso--
        console.log(contadorNoticiaReverso)
    }
    outUltimasNoticias.textContent = exibirNoticia
}
btListar.addEventListener('click', listarUltimasNoticias)