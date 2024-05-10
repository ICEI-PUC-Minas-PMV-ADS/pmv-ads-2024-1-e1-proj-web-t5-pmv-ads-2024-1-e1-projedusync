function cadastrar(event) {
    event.preventDefault();

    var dadosCadastrais = {};

    dadosCadastrais.nomeResp = event.target.elements.nomeResp.value;
    dadosCadastrais.emailResp = event.target.elements.emailResp.value
    dadosCadastrais.nomeAlunoResp = event.target.elements.nomeAlunoResp.value
    dadosCadastrais.senhaResp = event.target.elements.senhaResp.value

    console.log(dadosCadastrais);
}