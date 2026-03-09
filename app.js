let numeroAleatorio = gerarNumeroAleatorio();
let tentativas = 1;
function gerarNumeroAleatorio() {
    return parseInt(Math.random() * 100 + 1)
}

function exibirTexto(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto
}
mensagemInicial();

function mensagemInicial() {
exibirTexto('h1', 'Jogo do número secreto');
exibirTexto('p', 'Escolha um número entre 1 e 100');
}

function verificarResposta() {
    let chute = document.querySelector('input').value;

    if (chute == numeroAleatorio) {
        exibirTexto('h1', 'Parabéns, você adivinhou o número secreto!')
        let palavraTentativas = tentativas > 1 ? 'tentativas' : 'tentativa'
        exibirTexto('p', `Você descobriu o número secreto em ${tentativas} ${palavraTentativas}.`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else { tentativas++;
        limparCampo();
        exibirTexto('h1', 'Você errou! Tente novamente');
        if (chute > numeroAleatorio){
            exibirTexto('p', `O número secreto é menor que ${chute}`);
        } else {
            exibirTexto('p', `O número secreto é maior que ${chute}`);
        } 
    }
}



 function limparCampo() {
    campo = document.querySelector('input');
    campo.value = '';
 }

 function reiniciarJogo() {
    numeroAleatorio = gerarNumeroAleatorio();
    limparCampo();
    mensagemInicial();
    tentativas = 1;
    document.getElementById('reiniciar').setAttribute('disabled', true);
 }