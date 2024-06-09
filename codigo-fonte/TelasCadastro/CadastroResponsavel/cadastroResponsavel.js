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

function iniciarBancoDeDados() { // fiz agora
    let listaDeUsuarios = localStorage.getItem('listaDeUsuarios');

    if (!!!listaDeUsuarios) {
        listaDeUsuarios = popularListaDeUsuarios();
        localStorage.setItem('listaDeUsuarios', JSON.stringify(listaDeUsuarios));
    }
}

function popularListaDeUsuarios() { // fiz agora
    let listaDeUsuarios = [];

    listaDeUsuarios.push({
        id: 1,
        nome: 'João Maria',
        email: 'joaomaria@hotmail.com',
        escola: 'belgado filho',
        nomeDoAluno: '',
        nomesResponsavel: [],
        anoEscolar: '',
        turma: '',
        materia: 'Matemática',
        credencial: 'professor',
        matricula: '789123',
        senha: '123'
    });

    listaDeUsuarios.push({
        id: 2,
        nome: 'Maria José',
        email: 'mariajose@gmail.com',
        escola: 'belgado filho',
        nomeDoAluno: '',
        nomesResponsavel: ['João Maria', 'Juana Silva'],
        anoEscolar: '3º ano',
        turma: '3003',
        materia: '',
        credencial: 'aluno',
        matricula: '123456',
        senha: '123'
    });

    listaDeUsuarios.push({
        id: 2,
        nome: 'Joana Souza',
        email: 'joanasouza@gmail.com',
        escola: '',
        nomeDoAluno: 'Maria José',
        nomesResponsavel: '',
        anoEscolar: '',
        turma: '',
        materia: '',
        credencial: 'responsavel',
        matricula: '123456',
        senha: '123'
    });

    return listaDeUsuarios;
}

function usuarioExistente(dadosLogin) {
    let listaDeUsuarios = JSON.parse(localStorage.getItem('listaDeUsuarios'));

    let usuario = listaDeUsuarios.find(usuario => usuario.matricula === dadosLogin.matricula
        && usuario.senha === dadosLogin.senha
        && dadosLogin.credencial === usuario.credencial);

    if (!!usuario) {
        localStorage.setItem('usuarioLogado', JSON.stringify(usuario));
        return true;
    }
}