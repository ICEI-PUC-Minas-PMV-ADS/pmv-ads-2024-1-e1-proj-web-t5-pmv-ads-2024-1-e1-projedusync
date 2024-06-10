function fazerLogin(event) {
    event.preventDefault();
    iniciarBancoDeDados();

    var dadosLogin = {};

    dadosLogin.credencial = event.target.elements.credencial.value;
    dadosLogin.matricula = event.target.elements.matricula.value
    dadosLogin.senha = event.target.elements.senha.value

    if (usuarioExistente(dadosLogin)) { // início Local Storage
        if (dadosLogin.credencial === 'professor') {
            window.location.href = '../TelaInicial/TelaInicialProfessor/TelaInicialProfessor.html';
        }
        else if (dadosLogin.credencial === 'aluno') {
            window.location.href = '../TelaInicial/TelaInicialAluno/TelaInicialAluno.html';
        }
        else if (dadosLogin.credencial === 'resposavel') {
            window.location.href = '../TelaInicial/TelaInicialRespon/TelaInicialResponsa.html';
        }
        else if (dadosLogin.credencial === 'secretario') {
            window.location.href = '../TelaInicial/TelaInicialSecretario/TelaInicialSecretario.html';
        }
        console.log(dadosLogin);
    }
    else {
        alert('Usuário ou senha incorreto.');
    }
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