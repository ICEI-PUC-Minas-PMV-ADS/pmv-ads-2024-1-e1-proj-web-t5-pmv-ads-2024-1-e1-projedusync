preencherListaAlunos();

function enviarAvisos() {
    var dadosAvisos = {};
 
    dadosAvisos.tituloAviso = document.getElementById('tituloAviso').value;  
    dadosAvisos.campoAviso = document.getElementById('campoAviso').value;
    dadosAvisos.aluno = document.getElementById('aluno').value;
    dadosAvisos.perfil = 'resp';
    dadosAvisos.idCriador = obterUsuarioLogado().id;
    
    console.log(dadosAvisos);
    adicionarAviso(dadosAvisos);
}

function preencherListaAlunos() {
    let user = obterUsuarioLogado();
    let select = document.getElementById('aluno');

    user.nomesDeAluno.forEach(element => {
        var opt = document.createElement('option');
        console.log(element);
        opt.value = element;
        opt.innerHTML = element;
        select.appendChild(opt);
    });
}


 

