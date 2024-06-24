
  // Desenha a tabela com os dados armazenados no localStorage
  function mostraTabela() {
    // carrega dados
    let listaDeTarefas = readTarefas();
    let dados = listaDeTarefas

    // gera conteúdo da tabela
    let conteudo = "";
    dados.forEach((item) => {
      conteudo += `
        <tr id='linha-${item.id}'>
          <td class='selecao'>
            <input type="radio" name="campoSelecao" value="${item.id}" />
          </td>
          <td class="celula-1">
            ${item.descricao}
          </td>
          <td class="celula-2"> 
            ${formataData(item.data)}
          </td>
          <td></td>
        </tr>
      `;
    });
    corpoTabela.innerHTML = conteudo;
  
    // determina comportamento dos botões e outros componentes interativos
    let botoesSelecao = document.querySelectorAll("input[name=campoSelecao]");
    botoesSelecao.forEach((b) => {
      b.onclick = function (e) {
        btEditar.disabled = false;
        btExcluir.disabled = false;
      };
    });
    btAdicionar.disabled = false;
    btEditar.disabled = true;
    btExcluir.disabled = true;
};

// Mostra a janela modal para criação de nova tarefa
    btAdicionar.onclick = function () {
    campoDescricao.value = "";
    campoData.value = "";
    campoDescricao.disabled = false;
    campoData.disabled = false;
    modalEventos.style.display = "block";
    btMTCriar.style.display = "inline-block";
    btMTAlterar.style.display = "none";
    btMTExcluir.style.display = "none";
    btMTCriar.disabled = true;
    campoDescricao.focus();
  };
  
  // Verifica se os três campos estão preenchidos antes de criar ou alterar tarefa
  let liberaBotaoMT = function () {
    if (
      campoDescricao.value.length > 0 &&
      campoData.value.length > 0 
    ) {
      btMTCriar.disabled = false;
      btMTAlterar.disabled = false;
    } else {
      btMTCriar.disabled = true;
      btMTAlterar.disabled = true;
    }
  };
  campoDescricao.onkeyup = liberaBotaoMT;
  campoData.onchange = liberaBotaoMT;
  
  // Confirma a criação da tarefa
  btMTCriar.onclick = function () {
    let tarefa = {
      descricao: campoDescricao.value,
      data: campoData.value,
    };
    createTarefa(tarefa, mostraTabela);
    modalEventos.style.display = "none";
  };
  
  // Mostra a janela modal para edição de uma tarefa existente
  btEditar.onclick = function () {
    let selecoes = Array.from(
      document.querySelectorAll("input[name=campoSelecao]")
    );
    let selecionado = selecoes.find((i) => i.checked == true);
    if (selecionado) {
      let tarefa = readTarefa(selecionado.value);
      campoDescricao.value = tarefa.descricao;
      campoData.value = tarefa.data;
      campoID.value = tarefa.id;
      campoDescricao.disabled = false;
      campoData.disabled = false;
      modalEventos.style.display = "block";
      btMTCriar.style.display = "none";
      btMTAlterar.style.display = "inline-block";
      btMTExcluir.style.display = "none";
      btMTAlterar.disabled = false;
      campoDescricao.focus();
    }
  };
  
  // Confirma a alteração da tarefa
  btMTAlterar.onclick = function () {
    let tarefaEditada = {
      id: campoID.value,
      descricao: campoDescricao.value,
      data: campoData.value,
    };
    updateTarefa(tarefaEditada);
    modalEventos.style.display = "none";
    mostraTabela();
  };
  
  // Mostra a janela modal para exclusão de uma tarefa existente
  btExcluir.onclick = function () {
    let selecoes = Array.from(
      document.querySelectorAll("input[name=campoSelecao]")
    );
    let selecionado = selecoes.find((i) => i.checked == true);
    if (selecionado) {
      let tarefa = readTarefa(selecionado.value);
      campoDescricao.value = tarefa.descricao;
      campoData.value = tarefa.data;
      campoID.value = tarefa.id;
      campoDescricao.disabled = true;
      campoData.disabled = true;
      modalEventos.style.display = "block";
      btMTCriar.style.display = "none";
      btMTAlterar.style.display = "none";
      btMTExcluir.style.display = "inline-block";
    }
  };
  
  // Confirma a exclusão da tarefa
  btMTExcluir.onclick = function () {
    deleteTarefa(campoID.value);
    modalEventos.style.display = "none";
    mostraTabela();
  };
  
  // Cancela a criação, alteração ou exclusão da tarefa
  btMTCancelar.onclick = function () {
    modalEventos.style.display = "none";
  };
  
  // Configura o botão de fechar a janela modal
  fechaModal.onclick = function () {
    modalEventos.style.display = "none";
  };
  
  // Ordenação pelas três colunas
  th1.onclick = () => {
    let dados = readTarefas();
    dados.sort((a, b) =>
      a.descricao.localeCompare(b.descricao, "pt-br", { sensitivity: "base" })
    );
    updateTarefas(dados);
    mostraTabela();
  };
  th2.onclick = () => {
    let dados = readTarefas();
    dados.sort((a, b) =>
      a.data.localeCompare(b.data, "pt-br", { sensitivity: "base" })
    );
    updateTarefas(dados);
    mostraTabela();
  };

  // funções de apoio para formatar os valores da tabela

  function formataData(d) {
    [ano, mes, dia] = d.split("-");
    return dia + "-" + mes + "-" + ano;
  }
  
  
  // Após preparar todo o código, desenha a versão preliminar da tabela, com dados já existentes
  mostraTabela();

  
   

 


