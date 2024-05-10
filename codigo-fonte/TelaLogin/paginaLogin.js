function fazerLogin(event) {
    event.preventDefault();

    var dadosLogin = {};

    dadosLogin.credencial = event.target.elements.credencial.value;    
    dadosLogin.matricula = event.target.elements.matricula.value
    dadosLogin.senha = event.target.elements.senha.value

    console.log(dadosLogin);
}
