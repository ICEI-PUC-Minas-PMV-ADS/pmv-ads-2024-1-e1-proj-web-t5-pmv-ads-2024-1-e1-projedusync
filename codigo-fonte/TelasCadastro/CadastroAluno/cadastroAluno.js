function cadastrar(event) {
    event.preventDefault();

    var dadosCadastrais = {};
    
    dadosCadastrais.nomeAluno = event.target.elements.nomeAluno.value;    
    dadosCadastrais.nomeRespAluno1 = event.target.elements.nomeRespAluno1.value
    dadosCadastrais.nomeRespAluno2 = event.target.elements.nomeRespAluno2.value    
    dadosCadastrais.anoAluno = event.target.elements.anoAluno.value 
    dadosCadastrais.turmaAluno = event.target.elements.turmaAluno.value
    dadosCadastrais.matriculaAluno = event.target.elements.matriculaAluno.value

    console.log(dadosCadastrais);
}