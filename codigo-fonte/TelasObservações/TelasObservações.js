let listaDeUsuarios = [];

document.addEventListener('DOMContentLoaded', () => {
    fetch('usuarios.json')
        .then(response => response.json())
        .then(data => {
            listaDeUsuarios = data;
            console.log('Usuários carregados:', listaDeUsuarios);
        })
        .catch(error => {
            console.error('Erro ao carregar dados dos usuários:', error);
        });
});

function buscarAluno() {
    const matricula = document.getElementById('registroAluno').value;
    const alunoEncontrado = listaDeUsuarios.find(usuario => usuario.credencial === 'aluno' && usuario.matricula === matricula);

    if (alunoEncontrado) {
        alert(`Aluno encontrado: ${alunoEncontrado.nome}`);
        habilitarCampos(true);
        localStorage.setItem('alunoSelecionado', JSON.stringify(alunoEncontrado));
    } else {
        alert('Aluno não encontrado.');
        habilitarCampos(false);
        localStorage.removeItem('alunoSelecionado');
    }
}

function habilitarCampos(habilitar) {
    document.getElementById('tituloObservacao').disabled = !habilitar;
    document.getElementById('campoObservacao').disabled = !habilitar;
    document.querySelector('.botaoEnviarObservacao').disabled = !habilitar;
    document.querySelector('.botaoSalvarObservacao').disabled = !habilitar;
}

function enviarObservacaos() {
    const alunoSelecionado = JSON.parse(localStorage.getItem('alunoSelecionado'));
    if (!alunoSelecionado) {
        alert('Nenhum aluno selecionado.');
        return;
    }

    const tituloObservacao = document.getElementById('tituloObservacao').value;
    const campoObservacao = document.getElementById('campoObservacao').value;

    if (!tituloObservacao || !campoObservacao) {
        alert('Por favor, preencha todos os campos.');
        return;
    }

    const observacao = {
        aluno: alunoSelecionado.nome,
        matricula: alunoSelecionado.matricula,
        titulo: tituloObservacao,
        mensagem: campoObservacao,
        data: new Date().toLocaleString()
    };

    salvarObservacao(observacao);
}

function salvarObservacao(observacao) {
    let observacoes = JSON.parse(localStorage.getItem('observacoes')) || [];
    observacoes.push(observacao);
    localStorage.setItem('observacoes', JSON.stringify(observacoes));

    console.log('Observação salva:', observacao);
    alert('Observação enviada com sucesso!');
}
