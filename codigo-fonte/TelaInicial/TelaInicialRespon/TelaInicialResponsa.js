

fetch('data.json')
    .then(response => response.json())
    .then(data => {
        document.getElementById('notalun').innerText = data.notalun;
        document.getElementById('proxev').innerText = data.proxev;
    })
    .catch(error => console.error('Não foi possivel encontrar os dados:', error));

    document.querySelector('.sair').addEventListener('click', function () {
        var confirmLogout = confirm("Tem certeza que deseja sair?");
        if (confirmLogout) {
            localStorage.removeItem('usuarioLogado');
            window.location.href = "../../TelaLogin/index.html";
        } else {
            alert("Saída cancelada.");
        }
    });