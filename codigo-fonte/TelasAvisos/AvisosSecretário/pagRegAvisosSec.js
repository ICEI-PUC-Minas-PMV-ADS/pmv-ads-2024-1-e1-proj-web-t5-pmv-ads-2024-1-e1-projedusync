function enviarObservacao() {
    
        var dadosObservacaos = {};
    
        dadosObservacaos.menuAnoLetivo = document.getElementById('menuAnoLetivo').value;  
        dadosObservacaos.menuTurno = document.getElementById('menuTurno').value; 
        dadosObservacaos.menuTurma = document.getElementById('menuTurma').value; 
        dadosObservacaos.pesquisarAluno = document.getElementById('pesquisarAluno').value;
        dadosObservacaos.tituloObservacao = document.getElementById('tituloObservacao').value;
        dadosObservacaos.campoObservacao = document.getElementById('campoObservacao').value;
    
        console.log(dadosObservacaos);
    }
    