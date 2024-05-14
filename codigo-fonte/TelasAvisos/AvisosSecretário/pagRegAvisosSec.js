function enviarAviso() {
    
    var dadosAvisos = {};

    dadosAvisos.menuAnoLetivo = document.getElementById('menuAnoLetivo').value;  
    dadosAvisos.menuTurno = document.getElementById('menuTurno').value;
    dadosAvisos.menuTurma = document.getElementById('menuTurma').value;
    dadosAvisos.pesquisarAluno = document.getElementById('pesquisarAluno').value;
    dadosAvisos.tituloAviso = document.getElementById('tituloAviso').value;
    dadosAvisos.campoAviso = document.getElementById('campoAviso').value;

    console.log(dadosAvisos);
}