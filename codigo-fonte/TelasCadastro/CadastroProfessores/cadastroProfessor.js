function cadastrar(event) {
    event.preventDefault();

    var dadosCadastrais = {};

    dadosCadastrais.nomeProf = event.target.elements.nomeProf.value;
    dadosCadastrais.emailProf = event.target.elements.emailProf.value
    dadosCadastrais.disciplinaProf = event.target.elements.disciplinaProf.value
    dadosCadastrais.escolaProf = event.target.elements.escolaProf.value
    dadosCadastrais.matricula = event.target.elements.matricula.value
    dadosCadastrais.senhaProf = event.target.elements.senhaProf.value

    console.log(dadosCadastrais);
}