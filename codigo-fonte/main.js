iniciarListaDeAvisos();
iniciarListaDeUsuarios();

function iniciarListaDeAvisos() {
    let listaDeAvisos = localStorage.getItem('listaDeAvisos');

    if (!!!listaDeAvisos) {
        listaDeAvisos = popularlistaDeAvisos();
        localStorage.setItem('listaDeAvisos', JSON.stringify(listaDeAvisos));
    }
}

function popularlistaDeAvisos() {
    let listaDeAvisos = [];

    listaDeAvisos.push({
        tituloAviso: 'Aluna vai precisar se ausentar por doença.',
        campoAviso: 'Minha filha está com gripe',
        perfil: 'resp',
        idCriador: 2,
        data: new Date(),
        aluno: 'Maria'
    });

    return listaDeAvisos;
}

function adicionarAviso(aviso) {
    let listaDeAvisos = JSON.parse(localStorage.getItem('listaDeAvisos'));

    if (!!!listaDeAvisos) {
        aviso.id = 1;
        aviso.data = new Date();
        listaDeAvisos = [aviso];
    }
    else {
        aviso.id = listaDeAvisos.length + 1;
        aviso.data = new Date();
        listaDeAvisos.push(aviso);
    }

    localStorage.setItem('listaDeAvisos', JSON.stringify(listaDeAvisos));
}

function obterUsuarioLogado() {
    let usuario = JSON.parse(localStorage.getItem('usuarioLogado'));
  
    if (!!!usuario) {
        usuario = {
            id: 0,
            nome: 'usuario nao logado',
            email: 'usuario nao logado',
            escola: 'usuario nao logado',
            nomesDeAluno: [],
            nomesResponsavel: [],
            anoEscolar: '',
            turma: '',
            materia: 'usuario nao logado',
            credencial: 'usuario nao logado',
            matricula: '',
            senha: ''
        }
    }

    return usuario;
}

function iniciarListaDeUsuarios() { 
    let listaDeUsuarios = JSON.parse(localStorage.getItem('listaDeUsuarios'));

    if (!!!listaDeUsuarios) {
        listaDeUsuarios = popularListaDeUsuarios();
        localStorage.setItem('listaDeUsuarios', JSON.stringify(listaDeUsuarios));
    }

    let usuario = listaDeUsuarios.find(usuario => usuario.credencial === 'responsavel');

    if (!!usuario) {
        localStorage.setItem('usuarioLogado', JSON.stringify(usuario));
        return true;
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
        nomesDeAluno: ['Maria','José'],
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