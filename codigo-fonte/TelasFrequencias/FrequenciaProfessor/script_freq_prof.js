const alunos = {
    "Turma 01": [
        "João Silva Gonçalves",
        "Maria Oliveira Costa",
        "Pedro Santos Almeida",
        "Ana Oliveira Silva",
        "Carlos Silva Santos",
        "José Oliveira Lima",
        "Fernanda Silva Souza",
        "Lucas Oliveira Pereira",
        "Carolina Silva Martins"
    ],
    "Turma 02": [
        "Gabriel Pereira Alves",
        "Amanda Costa Lima",
        "Bruno Santos Silva",
        "Juliana Oliveira Gonçalves",
        "Felipe Martins Almeida",
        "Larissa Gonçalves Souza",
        "Rodrigo Almeida Pereira",
        "Mariana Lima Costa",
        "Rafaela Silva Oliveira"
    ],
    "Turma 03": [
        "Gustavo Almeida Costa",
        "Patrícia Silva Lima",
        "Ricardo Gonçalves Souza",
        "Vanessa Costa Silva",
        "Leandro Lima Almeida",
        "Camila Oliveira Costa",
        "André Santos Pereira",
        "Fernanda Alves Martins",
        "Vitoria Costa Gonçalves"
    ],
    "Turma 04": [
        "Daniel Oliveira Almeida",
        "Luana Santos Costa",
        "Guilherme Almeida Pereira",
        "Caroline Lima Gonçalves",
        "Diego Costa Martins",
        "Isabela Silva Souza",
        "Lucas Oliveira Lima",
        "Fernanda Santos Alves",
        "Rafael Costa Silva"
    ]
};

function gerarTabela(turma) {
    const tabela = document.createElement("table");
    tabela.innerHTML = `
        <thead>
            <tr>
                <th scope="col">Aluno(a)</th>
                <th scope="col">Presença</th>
                <th scope="col">Faltas</th>
            </tr>
        </thead>
        <tbody>
            ${alunos[turma].map(aluno => `
                <tr>
                    <td>${aluno}</td>
                    <td>
                        <button class="button button1" onclick="mudarCor(this)"> ✔ </button>
                        <button class="button button2" onclick="mudarCor2(event, this)"> X </button>
                    </td>
                    <td class="faltas">0</td>
                </tr>
            `).join("")}
        </tbody>
    `;
    return tabela;
}


function preencherTabela(turmaSelecionada) {
    const tabelas = document.getElementById("tabelas");
    tabelas.innerHTML = "";
    tabelas.appendChild(gerarTabela(turmaSelecionada));
}


document.getElementById("selectTurma").addEventListener("change", function () {
    const turmaSelecionada = this.value;
    preencherTabela(turmaSelecionada);
});


preencherTabela("Turma 01");


function mudarCor(button) {
    button.style.backgroundColor = '#04AA6D';
    button.style.color = '#fff';
}


function mudarCor2(event, button) {
    button.style.backgroundColor = '#b61717';
    button.style.color = '#fff';
    var tdFaltas = button.parentNode.nextElementSibling;
    var faltas = parseInt(tdFaltas.innerText);
    if (!isNaN(faltas)) {
        faltas++;
        tdFaltas.innerText = faltas;
    } else {
        tdFaltas.innerText = 1;
    }

    event.stopPropagation();
    event.preventDefault();
}


var botoesPresenca = document.querySelectorAll('.button1');
var botoesFaltas = document.querySelectorAll('.button2');

botoesPresenca.forEach(function (botao) {
    botao.addEventListener('click', function () {
        mudarCor(botao);
    });
});

botoesFaltas.forEach(function (botao) {
    botao.addEventListener('click', function (event) {
        mudarCor2(event, botao);
    });
});