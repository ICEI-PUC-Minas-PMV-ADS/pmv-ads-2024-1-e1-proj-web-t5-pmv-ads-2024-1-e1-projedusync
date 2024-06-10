function cadastrar(event) {
    event.preventDefault();

    iniciarBancoDeDados();

    var dadosCadastrais = {};

    dadosCadastrais.nomeProf = event.target.elements.nomeProf.value;
    dadosCadastrais.emailProf = event.target.elements.emailProf.value
    dadosCadastrais.materiaProf = event.target.elements.materiaProf.value
    dadosCadastrais.escolaProf = event.target.elements.escolaProf.value
    dadosCadastrais.matricula = event.target.elements.matricula.value
    dadosCadastrais.senhaProf = event.target.elements.senhaProf.value

    console.log(dadosCadastrais);
    
    let listaDeUsuarios = JSON.parse(localStorage.getItem('listaDeUsuarios'));// início Local Storage

    listaDeUsuarios.push({
        id: listaDeUsuarios.length + 1,
        nome: dadosCadastrais.nomeProf,
        email: dadosCadastrais.emailProf,
        escola:  dadosCadastrais.escolaProf,
        nomesDeAluno: '',
        nomesResponsavel: [],
        anoEscolar: '',
        turma: '',
        materia: dadosCadastrais.materiaProf,
        credencial: 'professor',
        matricula: dadosCadastrais.matricula,
        senha: dadosCadastrais.senhaProf,
    });

    localStorage.setItem('listaDeUsuarios', JSON.stringify(listaDeUsuarios));

   alert('Professor(a) registrado(a) com sucesso!');
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