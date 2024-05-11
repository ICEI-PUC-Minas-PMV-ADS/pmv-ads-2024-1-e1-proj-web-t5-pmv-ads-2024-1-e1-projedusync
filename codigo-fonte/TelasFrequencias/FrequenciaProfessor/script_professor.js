function mudarCor(button) {
    button.style.backgroundColor = '#04AA6D';
    button.style.color = '#fff';
}

// Função para contar faltas e mudar a cor de fundo do botão "Faltas" quando clicado
function mudarCor2(button) {
    // Altera a cor de fundo do botão "X"
    button.style.backgroundColor = '#b61717';
    button.style.color = '#fff';

    // Encontra o elemento td que contém o número de faltas
    var tdFaltas = button.parentNode.nextElementSibling;

    // Verifica se o conteúdo atual é um número
    var faltas = parseInt(tdFaltas.innerText);
    if (!isNaN(faltas)) {
        // Realiza a contagem de faltas da mesma forma
        faltas++;
        tdFaltas.innerText = faltas;
    } else {
        // Se não for um número, define como 1
        tdFaltas.innerText = 1;
    }
}

// Seleciona todos os botões pela classe e associa as funções aos eventos de clique
var botoesPresenca = document.querySelectorAll('.button1');
var botoesFaltas = document.querySelectorAll('.button2');

botoesPresenca.forEach(function(botao) {
    botao.addEventListener('click', function() {
        mudarCor(botao);
    });
});

botoesFaltas.forEach(function(botao) {
    botao.addEventListener('click', function() {
        mudarCor2(botao);
    });
});