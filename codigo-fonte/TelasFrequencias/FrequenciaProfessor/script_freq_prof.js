/**
 * Carrega os dados dos alunos a partir de um arquivo JSON.
 * @returns {Promise<Object>} Dados dos alunos.
 */
async function carregarAlunos() {
    const response = await fetch('alunos.json');
    return await response.json();
  }
  
  /**
   * Gera uma tabela HTML para a turma especificada.
   * @param {string} turma - Nome da turma.
   * @param {Object} alunos - Objeto contendo os dados dos alunos.
   * @returns {HTMLTableElement} Elemento HTML da tabela gerada.
   */
  function gerarTabela(turma, alunos) {
    const tabela = document.createElement("table");
    tabela.innerHTML = `
      <thead>
        <tr>
          <th scope="col">Aluno(a)</th>
          <th scope="col">Opção</th>
          <th scope="col">Presença</th>
        </tr>
      </thead>
      <tbody>
        ${alunos[turma].map(aluno => `
          <tr>
            <td>${aluno["Nome Completo"]}</td>
            <td>
              <button class="button button1" onclick="marcarPresenca(this)">✔</button>
              <button class="button button2" onclick="marcarFalta(this)">X</button>
            </td>
            <td class="status">${recuperarPresenca(aluno["Nome Completo"])}</td>
          </tr>
        `).join("")}
      </tbody>
    `;
    return tabela;
  }
  
  /**
   * Preenche a tabela de frequência com os dados da turma selecionada.
   * @param {string} turmaSelecionada - Nome da turma selecionada.
   */
  async function preencherTabela(turmaSelecionada) {
    const alunos = await carregarAlunos();
    const tabelas = document.getElementById("tabelas");
    tabelas.innerHTML = "";
    tabelas.appendChild(gerarTabela(turmaSelecionada, alunos));
  }
  
  /**
   * Salva a presença do aluno no localStorage.
   * @param {string} nome - Nome do aluno.
   * @param {string} presenca - Presença (Sim/Não).
   */
  function salvarPresenca(nome, presenca) {
    localStorage.setItem(nome, presenca);
    console.log(`Presença de ${nome} salva como: ${presenca}`);
  }
  
  /**
   * Recupera a presença do aluno do localStorage.
   * @param {string} nome - Nome do aluno.
   * @returns {string} Presença (Sim/Não).
   */
  function recuperarPresenca(nome) {
    return localStorage.getItem(nome) || "";
  }
  
  // Adiciona um listener para o evento change do select de turmas
  document.getElementById("selectTurma").addEventListener("change", function () {
    const turmaSelecionada = this.value;
    if (turmaSelecionada !== "Selecionar Turma") {
      preencherTabela(turmaSelecionada);
    }
  });
  
  // Carrega e preenche a tabela com a primeira turma ao carregar a página
  window.addEventListener('DOMContentLoaded', () => {
    preencherTabela("Turma 01");
  });
  
  /**
   * Marca a presença do aluno, alterando a cor do botão e o status de presença.
   * @param {HTMLButtonElement} button - Botão clicado.
   */
  function marcarPresenca(button) {
    const row = button.parentElement.parentElement;
    const nome = row.querySelector("td").textContent;
    row.querySelector(".button1").style.backgroundColor = '#04AA6D';
    row.querySelector(".button1").style.color = '#fff';
    row.querySelector(".button2").style.backgroundColor = '';
    row.querySelector(".button2").style.color = '';
    row.querySelector(".status").textContent = "Sim";
    salvarPresenca(nome, "Sim");
  }
  
  /**
   * Marca a falta do aluno, alterando a cor do botão e o status de presença.
   * @param {HTMLButtonElement} button - Botão clicado.
   */
  function marcarFalta(button) {
    const row = button.parentElement.parentElement;
    const nome = row.querySelector("td").textContent;
    row.querySelector(".button2").style.backgroundColor = '#b61717';
    row.querySelector(".button2").style.color = '#fff';
    row.querySelector(".button1").style.backgroundColor = '';
    row.querySelector(".button1").style.color = '';
    row.querySelector(".status").textContent = "Não";
    salvarPresenca(nome, "Não");
  }
  