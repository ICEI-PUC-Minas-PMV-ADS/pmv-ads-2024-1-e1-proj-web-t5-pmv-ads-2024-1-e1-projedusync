// Carrega os dados dos alunos a partir de um arquivo JSON.
async function carregarAlunos() {
    const response = await fetch('alunos.json');
    return await response.json();
  }
  
  // Gera uma tabela HTML para a turma especificada.
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
    setTimeout(() => {
      alunos[turma].forEach(aluno => {
        aplicarEstiloBotoes(aluno["Nome Completo"]);
      });
    }, 0);
    return tabela;
  }
  
  // Preenche a tabela de frequência com os dados da turma selecionada.
  async function preencherTabela(turmaSelecionada) {
    const alunos = await carregarAlunos();
    const tabelas = document.getElementById("tabelas");
    tabelas.innerHTML = "";
    tabelas.appendChild(gerarTabela(turmaSelecionada, alunos));
  }
  
  // Salva a presença do aluno no localStorage.
  function salvarPresenca(nome, presenca) {
    localStorage.setItem(nome, presenca);
    console.log(`Presença de ${nome} salva como: ${presenca}`);
  }
  
  // Recupera a presença do aluno do localStorage.
  function recuperarPresenca(nome) {
    return localStorage.getItem(nome) || "";
  }
  
  // Aplica o estilo aos botões de acordo com a presença salva no localStorage.
  function aplicarEstiloBotoes(nome) {
    const presenca = recuperarPresenca(nome);
    const rows = document.querySelectorAll("tr");
    rows.forEach(row => {
      if (row.querySelector("td") && row.querySelector("td").textContent === nome) {
        const buttonPresenca = row.querySelector(".button1");
        const buttonFalta = row.querySelector(".button2");
        const status = row.querySelector(".status");
  
        if (presenca === "Sim") {
          buttonPresenca.style.backgroundColor = '#04AA6D';
          buttonPresenca.style.color = '#fff';
          buttonFalta.style.backgroundColor = '';
          buttonFalta.style.color = '';
          status.textContent = "Sim";
        } else if (presenca === "Não") {
          buttonFalta.style.backgroundColor = '#b61717';
          buttonFalta.style.color = '#fff';
          buttonPresenca.style.backgroundColor = '';
          buttonPresenca.style.color = '';
          status.textContent = "Não";
        } else {
          buttonPresenca.style.backgroundColor = '';
          buttonPresenca.style.color = '';
          buttonFalta.style.backgroundColor = '';
          buttonFalta.style.color = '';
          status.textContent = "";
        }
      }
    });
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
  
  // Marca a presença do aluno, alterando a cor do botão e o status de presença.
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
  
  // Marca a falta do aluno, alterando a cor do botão e o status de presença.
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
  