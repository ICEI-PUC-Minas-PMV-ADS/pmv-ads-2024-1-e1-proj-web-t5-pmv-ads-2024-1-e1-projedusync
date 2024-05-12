function enviarAvisos() {
console.log('funcionou')

    var dadosAvisos = {};

    dadosAvisos.tituloAviso = document.getElementById('tituloAviso').value;  
    dadosAvisos.campoAviso = document.getElementById('campoAviso').value; 

    console.log(dadosAvisos);
}

