function cadastrar(event) {
    event.preventDefault();

    var dadosCadastrais = {};
    
    dadosCadastrais.nomeAluno = event.target.elements.nomeAluno.value;    
    dadosCadastrais.nomeRespAluno1 = event.target.elements.nomeRespAluno1.value
    dadosCadastrais.nomeRespAluno2 = event.target.elements.nomeRespAluno2.value    
    dadosCadastrais.anoAluno = event.target.elements.anoAluno.value 
    dadosCadastrais.turmaAluno = event.target.elements.turmaAluno.value
    dadosCadastrais.matriculaAluno = event.target.elements.matriculaAluno.value

    console.log(dadosCadastrais);
    let listaDeUsuarios = JSON.parse(localStorage.getItem('listaDeUsuarios'));// início Local Storage

    listaDeUsuarios.push({
        id: listaDeUsuarios.length + 1,
        nome: '',
        email: '',
        escola: '',
        nomesDeAluno: dadosCadastrais.nomeAluno,
        nomesResponsavel: [dadosCadastrais.nomeRespAluno1, dadosCadastrais.nomeRespAluno2],
        anoEscolar:  dadosCadastrais.anoAluno,
        turma:  dadosCadastrais.turmaAluno,
        materia: '',
        credencial: 'aluno',
        matricula:  dadosCadastrais.matriculaAluno,
        senha: dadosCadastrais.senhaResp,
    });

    localStorage.setItem('listaDeUsuarios', JSON.stringify(listaDeUsuarios));

   alert('Aluno(a) registrado(a) com sucesso!');
   window.location.href = '../../TelaInicial/TelaInicialAluno/TelaInicialAluno.html';
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