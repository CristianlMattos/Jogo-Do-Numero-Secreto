let listaNumeroSorteados = []
let numeroLimite = 10
let numeroSecreto = gerarNumeroAleatorio()
let numTentativas = 1

function textoTela(tag, texto) {
    let campo = document.querySelector(tag)
    campo.innerHTML = texto
    responseveVoice.speak(texto, "Brazilian Portuguese Male", {rate:1.2})
}

    function mensagemInicial() {
        textoTela('h1', 'Jogo do número secreto')
        textoTela('p', 'Escolha um número entre 1 entre 10')
}

mensagemInicial()

function verificarChute() {
    let chute = document.querySelector('input').value
    
    if (chute == numeroSecreto) {
        textoTela('h1', 'Acertou!')
        let palavraTentativa = numTentativas > 1 ? 'tentativas' : 'tentativa'
        let msgTentativa = (`Você acertou o número secreto com ${numTentativas} ${palavraTentativa}`)
        textoTela('p', msgTentativa)
        document.getElementById('reiniciar').removeAttribute('disabled')
    } else {
        if (chute > numeroSecreto) {
            textoTela('p', 'O número secreto é menor!')
        } else {
            textoTela('p', 'O número secreto é maior!')
        }
        numTentativas++
        limparCampo()
    }
}
   
function gerarNumeroAleatorio() {
       let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1)
       let quantidadeDeElementosDaLista = listaNumeroSorteados.length

       if (quantidadeDeElementosDaLista == numeroLimite){
        listaNumeroSorteados = []
       }

       if (listaNumeroSorteados.includes(numeroEscolhido)) {
            return gerarNumeroAleatorio()
    } else {
        listaNumeroSorteados.push(numeroEscolhido)
        console.log(listaNumeroSorteados)
        return numeroEscolhido
    }
        
}

    function limparCampo() {
        chute = document.querySelector('input')
        chute.value = ''
}
    function reiniciarJogo() {
        numeroSecreto = gerarNumeroAleatorio()
        limparCampo()
        numTentativas = 1
        mensagemInicial()
        document.getElementById('reiniciar').setAttribute('disabled', true)
}