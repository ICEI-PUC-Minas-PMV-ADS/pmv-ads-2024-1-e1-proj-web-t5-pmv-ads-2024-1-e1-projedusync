ajustarTamanhoLinha();
marcarAba();

window.addEventListener('resize', ajustarTamanhoLinha);

window.onclick = function(event) {
    let modal = document.getElementById("myModal");

    if (event.target == modal) {
      modal.style.display = "none";
    }
  }

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


function ajustarTamanhoLinha() {
    let rowWidth = document.getElementsByClassName('row')[1].offsetHeight;
    let cols1 = document.getElementsByClassName('col1');

    let cols1Arry = [...cols1]

    cols1Arry.forEach(element => {
        element.style.lineHeight = rowWidth + 'px';
    });

    console.log(rowWidth);
}

function hovear(element) {
    let classes = [...element.classList];

    if (classes.some(x => x === 'col1')) {
        if (!!!element.id) return;
        element.style.backgroundColor = '#eff0f1';
        element.addEventListener('mouseout', desHovear);
        abaSelecionada.style.backgroundColor = '#eff0f1';

    }
    else {
        if (!!element.parentNode.children[4].value) {
            element.parentNode.style.backgroundColor = '#eff0f1';
            element.parentNode.children[0].style.backgroundColor = 'white';
            element.addEventListener('mouseout', desHovear);
        }
    }
}

function desHovear(element) {
    let classes = [...element.target.classList]
    if (classes.some(x => x === 'col1')){
        let nomeAbaSelecionada = document.getElementById("aba").value;
        let abaSelecionada = document.getElementById(nomeAbaSelecionada);

        if (element.target.id != abaSelecionada.id)
            element.target.style.backgroundColor = 'white';
    }
    else {
        element.target.parentNode.style.backgroundColor = 'white';
    }
}

function montarLayout() {
    limparGrid();

    let aba = document.getElementById('aba').value;
    let listaDeAvisos = JSON.parse(localStorage.getItem('listaDeAvisos'));

    if (aba === 'recebidos') {
        listaDeAvisos = listaDeAvisos.filter(x => !!!x.dataExclusao);
        renderizarGrid(listaDeAvisos);
    }
    else if (aba === 'enviados') {
        listaDeAvisos = listaDeAvisos.filter(x => !!!x.dataExclusao && x.idCriador === obterUsuarioLogado().id);
        renderizarGrid(listaDeAvisos);
    }
    else if (aba === 'lixeira') {
        listaDeAvisos = listaDeAvisos.filter(x => !!x.dataExclusao);
        renderizarGrid(listaDeAvisos);
    }
}

function renderizarGrid(listaDeAvisos) {
    let primeiros3Avisos = [...listaDeAvisos.splice(0, 3)];

    let contDivChildren = document.getElementsByClassName('cont')[0].children;

    for (let index = 0; index < primeiros3Avisos.length; index++) {
        let aviso = primeiros3Avisos[index];
        let element = contDivChildren[index + 1];

        element.children[1].innerHTML = aviso.aluno;
        element.children[2].innerHTML = new Date(aviso.data).toDateString();
        element.children[3].innerHTML = aviso.tituloAviso;
        element.children[4].value = aviso.id;
    }

    listaDeAvisos.forEach(x => {
        renderizarLinha(x);
    })
}

function renderizarLinha(aviso) {
    let rowHeight = document.getElementsByClassName('row')[1].offsetHeight;
    var container = document.createElement('div');
    container.classList.add('row');
    container.style.height = rowHeight + 'px';

    var col1 = document.createElement('div');
    col1.classList.add('col1');
    col1.addEventListener('mouseover', function() {
        hovear(this);
    });
    
    var col2 = document.createElement('div');
    col2.classList.add('col2');
    col2.innerHTML = aviso.aluno;
    col2.addEventListener('mouseover', function() {
        hovear(this);
    });
    col2.addEventListener('click', function() {
        abrirModalAviso(this);
    });

    var col3 = document.createElement('div');
    col3.classList.add('col3');
    col3.innerHTML = new Date(aviso.data).toDateString()
    col3.addEventListener('mouseover', function() {
        hovear(this);
    });
    col3.addEventListener('click', function() {
        abrirModalAviso(this);
    });

    var col4 = document.createElement('div');
    col4.classList.add('col4');
    col4.innerHTML = aviso.tituloAviso;
    col4.addEventListener('mouseover', function() {
        hovear(this);
    });
    col4.addEventListener('click', function() {
        abrirModalAviso(this);
    });

    var hiddenInput = document.createElement('input');
    hiddenInput.setAttribute('type', 'hidden');
    hiddenInput.value = aviso.id;

    container.appendChild(col1);
    container.appendChild(col2);
    container.appendChild(col3);
    container.appendChild(col4);
    container.appendChild(hiddenInput);

    let contDiv = document.getElementsByClassName('cont')[0];
    contDiv.appendChild(container);
}

function limparGrid() {
    let contDivChildren = [...document.getElementsByClassName('cont')[0].children];

    for (let index = 0; index < 3; index++) {
        let element = contDivChildren[index + 1];

        element.children[1].innerHTML = '';
        element.children[2].innerHTML = '';
        element.children[3].innerHTML = '';
        element.children[4].value = '';
    }

    contDivChildren.splice(0, 4);
    let extraRows = contDivChildren;

    extraRows.forEach(x => x.remove());
}

function abrirModalAviso(element) {
    let modal = document.getElementById("myModal");
    let modalHeader = document.getElementById("modal-header");
    let modalBody = document.getElementById("modal-body");
    let idAviso = element.parentNode.children[4].value;
    let aviso = JSON.parse(localStorage.getItem('listaDeAvisos')).find(x => x.id == idAviso);


    modalHeader.innerHTML = aviso.tituloAviso;
    modalBody.innerHTML = aviso.campoAviso;
    modal.style.display = "block";

    let inputAvisoAberto = document.getElementById('aviso-aberto');
    inputAvisoAberto.value = idAviso;
}

function fecharModal() {
    let modal = document.getElementById("myModal");
    modal.style.display = "none";
}

function excluirAviso() {

    let idAviso = document.getElementById('aviso-aberto').value;
    console.log(idAviso);
    let modal = document.getElementById("myModal");
    let listaDeAvisos = JSON.parse(localStorage.getItem('listaDeAvisos'));
    let aviso = listaDeAvisos.find(x => x.id == idAviso);

    aviso.dataExclusao = new Date();

    localStorage.setItem('listaDeAvisos', JSON.stringify(listaDeAvisos));

    modal.style.display = "none";

    montarLayout();
}

function marcarAba() {
    let abaRecebidos = document.getElementById('recebidos');
    let abaEnviados = document.getElementById('enviados');
    let abaLixeira = document.getElementById('lixeira');

    abaRecebidos.style.backgroundColor = 'white';
    abaEnviados.style.backgroundColor = 'white';
    abaLixeira.style.backgroundColor = 'white';


    let nomeAbaSelecionada = document.getElementById("aba").value;

    let abaSelecionada = document.getElementById(nomeAbaSelecionada);
    abaSelecionada.style.backgroundColor = "#eff0f1";

    montarLayout();
}

function selecionarAba(element) {
    console.log(element.id);

    document.getElementById("aba").value = element.id;

    marcarAba();

}

function direcionarCriacao() {
    let user = obterUsuarioLogado();

    if (user.credencial === 'responsavel')
        window.location.href = '../AvisosResponsavel/pagRegAvisosResp.html';
    else if (user.credencial === 'secretario')
        window.location.href = '../AvisosSecretario/pagRegAvisosSec.html';
}