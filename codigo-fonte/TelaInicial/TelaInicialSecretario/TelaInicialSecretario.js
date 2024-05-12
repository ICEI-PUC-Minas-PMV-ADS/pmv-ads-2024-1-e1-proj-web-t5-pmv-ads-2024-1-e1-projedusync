fetch('data.json')
    .then(response => response.json())
    .then(data => {
        document.getElementById('profnum').innerText = data.profnum;
        document.getElementById('proxev').innerText = data.proxev;
        document.getElementById('tdtask').innerText = data.tdtask;
    })
    .catch(error => console.error('Não foi possivel encontrar os dados:', error));

    document.querySelector('.sair').addEventListener('click', function() {
        var confirmLogout = confirm("Tem certeza que deseja sair?");
        if (confirmLogout) {
            window.location.href = "/codigo-fonte/TelaLogin/paginaLogin.html";
        } else {
            alert("Saída cancelada.");
        }
    });