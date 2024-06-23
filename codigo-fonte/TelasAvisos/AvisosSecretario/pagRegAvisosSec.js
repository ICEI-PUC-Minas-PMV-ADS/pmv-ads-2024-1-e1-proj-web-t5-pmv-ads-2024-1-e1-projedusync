function enviarAviso() {
    
    var dadosAvisos = {};

    dadosAvisos.anoLetivo = document.getElementById('menuAnoLetivo').value;  
    dadosAvisos.turno = document.getElementById('menuTurno').value;
    dadosAvisos.turma = document.getElementById('menuTurma').value;
    dadosAvisos.pesquisarAluno = document.getElementById('pesquisarAluno').value;
    dadosAvisos.tituloAviso = document.getElementById('tituloAviso').value;
    dadosAvisos.campoAviso = document.getElementById('campoAviso').value;

    console.log(dadosAvisos);
}