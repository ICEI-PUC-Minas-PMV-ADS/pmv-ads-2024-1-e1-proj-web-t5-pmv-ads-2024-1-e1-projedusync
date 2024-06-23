fetch('data.json')
    .then(response => response.json())
    .then(data => {
        document.getElementById('profnum').innerText = data.profnum;
        document.getElementById('proxev').innerText = data.proxev;
        document.getElementById('tdtask').innerText = data.tdtask;
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

    document.querySelector('.cadastro-li').addEventListener('mouseenter', function () {
        document.getElementById("optionsMenu").style.display = "block";
    });
    
    document.querySelector('.cadastro-li').addEventListener('mouseleave', function () {
        document.getElementById("optionsMenu").style.display = "none";
    });