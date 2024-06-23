function cadastrar(event) {
    event.preventDefault();

    iniciarBancoDeDados();

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

    let listaDeUsuarios = JSON.parse(localStorage.getItem('listaDeUsuarios'));// inicio Local Storage

    listaDeUsuarios.push({
        id: listaDeUsuarios.length + 1,
        nome: dadosCadastrais.nomeResp,
        email: dadosCadastrais.emailResp,
        escola: '',
        nomesDeAluno: dadosCadastrais.nomesAlunosResp,
        nomesResponsavel: [],
        anoEscolar: '',
        turma: '',
        materia: '',
        credencial: 'responsavel',
        matricula: '',
        senha: dadosCadastrais.senhaResp,
    });

    localStorage.setItem('listaDeUsuarios', JSON.stringify(listaDeUsuarios));

   alert('Responsável registrado com sucesso!');
   window.location.href = '../../TelaInicial/TelaInicialRespon/TelaInicialResponsa.html';
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

function iniciarBancoDeDados() { 
        let listaDeUsuarios = localStorage.getItem('listaDeUsuarios');

        if (!!!listaDeUsuarios) {
            listaDeUsuarios = popularListaDeUsuarios();
            localStorage.setItem('listaDeUsuarios', JSON.stringify(listaDeUsuarios));
        }
    }

    function popularListaDeUsuarios() { 
        let listaDeUsuarios = [];

        listaDeUsuarios.push({
            id: 1,
            nome: 'João Maria',
            email: 'joaomaria@hotmail.com',
            escola: 'Belgado Filho',
            nomesDeAluno: [],
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
            escola: 'Belgado Filho',
            nomesDeAluno: [],
            nomesResponsavel: ['João Maria', 'Joana Souza'],
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
            nomesDeAluno: ['Maria José'],
            nomesResponsavel: '',
            anoEscolar: '',
            turma: '',
            materia: '',
            credencial: 'responsavel',
            matricula: '123456',
            senha: '123'
        });

        listaDeUsuarios.push({
            id: 2,
            nome: 'Gisele Pereira',
            email: '',
            escola: '',
            nomesDeAluno: [],
            nomesResponsavel: '',
            anoEscolar: '',
            turma: '',
            materia: '',
            credencial: 'secretario',
            matricula: '654321',
            senha: '123'
        });

        return listaDeUsuarios;
    }// fim Local Storage