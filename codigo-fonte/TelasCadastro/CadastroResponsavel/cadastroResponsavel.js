function cadastrar(event) {
    event.preventDefault();

    var dadosCadastrais = {};

    dadosCadastrais.nomesAlunosResp = [];

    if (!!event.target.elements.nomeAlunoResp.value)
        dadosCadastrais.nomesAlunosResp.push(event.target.elements.nomeAlunoResp.value);

    dadosCadastrais.nomeResp = event.target.elements.nomeResp.value;
    dadosCadastrais.emailResp = event.target.elements.emailResp.value
    dadosCadastrais.senhaResp = event.target.elements.senhaResp.value

    var inputsAdicionais = document.querySelectorAll(".input-aluno-plus");

    inputsAdicionais.forEach(x => {
        if (!!x.value)
            dadosCadastrais.nomesAlunosResp.push(x.value);
    })

    if (dadosCadastrais.nomesAlunosResp.length == 0)
        alert("Adicione pelo menos um(a) aluno(a).");

    console.log(dadosCadastrais);
}

function adicionarAluno() {
    var divAlunos = document.getElementById("inputs-alunos");

    var input = document.createElement("input");

    input.type = "text";
    input.placeholder = "Nome do(a) aluno(a)";
    input.name = "nomeAlunoRespPlus";
    input.classList.add("input-aluno-plus");
    

    divAlunos.appendChild(input);
}