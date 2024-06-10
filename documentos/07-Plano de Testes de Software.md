# Plano de Testes de Software

<span style="color:red">Pré-requisitos: <a href="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e1-proj-web-t5-pmv-ads-2024-1-e1-projedusync/blob/main/documentos/02-Especifica%C3%A7%C3%A3o%20do%20Projeto.md"> Especificação do Projeto</a></span>, <a href="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e1-proj-web-t5-pmv-ads-2024-1-e1-projedusync/blob/main/documentos/04-Projeto%20de%20Interface.md"> Projeto de Interface</a>

Os requisitos para realização dos testes de software são:
<ul><li>Site armazenado no LocalStorage;</li>
<li>Navegador da internet: Chrome, Firefox ou Edge.</li>
</ul>

Os testes funcionais a serem realizados na aplicação são descritos a seguir.

<table>
 <tr>
  <th>Caso de teste</th>
  <th>Requisitos associados</th>
  <th>Objetivo do teste</th>
  <th>Passos</th>
  <th>Critérios de êxito</th>
  <th>Responsável</th>
 </tr>

 <tr>
  <td>CT-01: Verificar login dos usuários e vínculo com a página inicial</td>
  <td>
   <ul>
   
   <li>RF-04: A aplicação deve permitir ao professor(a) e aos responsáveis acessar com login com usuário e senha.</li>
    <li>RF-05: A aplicação deve permitir ao aluno acesso somente leitura de notas, datas de eventos e observações do professor com login.</li>
   </ul>
  </td>
  <td>Verificar se a página de login efetua o login com sucesso e vincula à página inicial dos respectivos usuários.</td>
  <td>
   <ol>
    <li>Acessar o navegador.</li>
    <li>Informar o endereço do site.</li>
    <li>Informar as credenciais de acesso.</li>
    <li>Clicar no botão Entrar.</li>
   </ol>
   </td>
  <td>O clique no botão com as credenciais corretas inseridas deve efetuar o login do usuário.</td>
  <td>Juliane</td>
 </tr>
</table>

<table>
 <tr>
  <th>Caso de teste</th>
  <th>Requisitos associados</th>
  <th>Objetivo do teste</th>
  <th>Passos</th>
  <th>Critérios de êxito</th>
  <th>Responsável</th>
 </tr>
<tr>
  <td>CT-02: Verificar o funcionamente dos links da página HOME.</td>
  <td>
   <ul>
   
   <li>RF-04: A aplicação deve permitir ao professor(a) e aos responsáveis acessar com login com usuário e senha.</li>
    <li>RF-05: A aplicação deve permitir ao aluno acesso somente leitura de notas, datas de eventos e observações do professor com login.</li>
   </ul>
  </td>
  <td>Verificar se as páginas estão propriamente conectadas a página inicial. </td>
  <td>
   <ol>
    <li>Acessar o navegador.</li>
    <li>Informar o endereço do site.</li>
    <li>Entrar com login e senha do usuário.</li>
    <li>Clicar nos links da página home.</li>
    <li>Clicar no botão sair.</li>
    <li>Confirmar.</li>
   </ol>
   </td>
  <td> Links própriamente direcionados e confirmação para sair funcionando.</td>
  <td> Juan </td>
 </tr>
</table>

<table>
 <tr>
  <th>Caso de teste</th>
  <th>Requisitos associados</th>
  <th>Objetivo do teste</th>
  <th>Passos</th>
  <th>Critérios de êxito</th>
  <th>Responsável</th>
 </tr>
 
 <tr>
  <td>CT-03: Verificar a página de frequência do Professor</td>
  <td>
   <ul>
   
   <li>RF-01: A aplicação deve permitir ao professor(a) registrar a frequência dos alunos.</li>
   
   </ul>
  </td>
  <td>Verificar se a lista de frequência está marcando ou não presença dos alunos. </td>
  <td>
   <ol>
    <li>Acessar o navegador.</li>
    <li>Informar o endereço do site.</li>
    <li>Entrar com login e senha do usuário (Professor).</li>
    <li> Clicar na aba de Frequência da página home.  </li>
    <li> Marcar presença ou falta do aluno. </li>
   </ol>
   </td>
  <td> Ao clicar nos botões de presença ou falta, marca na tabela e mantém salvo. </td>
  <td> Igor </td>
 </tr>
</table>

<table>
<tr>
  <th>Caso de teste</th>
  <th>Requisitos associados</th>
  <th>Objetivo do teste</th>
  <th>Passos</th>
  <th>Critérios de êxito</th>
  <th>Responsável</th>
</tr>



<tr>
  <td>CT-04: Verificar lançamento de notas do Professor</td>
  <td>
   <ul>
   
   <li>RF-09: A aplicação deve permitir ao Professor lançar/editar notas de alunos.</li>
   </ul>
  </td>
  <td>Verificar se a soma e amostragem das notas estão corretos.</td>
  <td>
   <ol>
    <li>Abrir boletim.</li>
    <li>Achar nome do aluno.</li>
    <li>Colar as notas nos três campos.</li>
    <li>Verificar nota Total do aluno.</li>
    <li>Verificar Resultado Final.</li>
   </ol>
   </td>
  <td>A pagina deve ter feito o calculo das notas e mostrado os resultasdos de forma correta com "Aprovado" para notas acima de 60% e "Reprovado" para notas abaixo de 60%.</td>
  <td>Luan Marinheiro</td>
</tr>
</table>

<table>
 <tr>
  <th>Caso de teste</th>
  <th>Requisitos associados</th>
  <th>Objetivo do teste</th>
  <th>Passos</th>
  <th>Critérios de êxito</th>
  <th>Responsável</th>
 </tr>
<tr>
  <td>CT-05: Verificar a página de datas e eventos do secretário</td>
  <td>
   <ul>
   
   <li>RF-09: A aplicação deve permitir ao secretário(a) escolar registrar eventos e datas comemorativas.</li>
   
   </ul>
  </td>
  <td>Verificar se registro de eventos está sendo feito corretamente. </td>
  <td>
   <ol>
    <li>Acessar o navegador.</li>
    <li>Informar o endereço do site.</li>
    <li>Entrar com login e senha do usuário (Secretário).</li>
    <li> Clicar na aba de Datas e Eventos da página home.  </li>
    <li> Adicionar evento. </li>
   </ol>
   </td>
  <td> Ao clicar no ícone adicionar, abre uma tela para selecionar a data e um campo para inserir o evento. </td>
  <td> Suzany </td>
 </tr>
</table>

<table>
 <tr>
  <th>Caso de teste</th>
  <th>Requisitos associados</th>
  <th>Objetivo do teste</th>
  <th>Passos</th>
  <th>Critérios de êxito</th>
  <th>Responsável</th>
 </tr>
<tr>
  <td>CT-06: Permitir o envio da observação, para um dos alunos cadastrados.</td>
  <td>
   <ul>
   
   <li>RF-03: A aplicação deve permitir ao professor(a) registrar e enviar observações sobre os alunos aos responsáveis.</li>
   
   </ul>
  </td>
  <td>Verificar se as observações estão sendo registradas. </td>
  <td>
   <ol>
    <li>Acessar o navegador.</li>
    <li>Informar o endereço do site.</li>
    <li>Entrar com login e senha do usuário (Professor).</li>
    <li>Clicar na aba Observações da página home.</li>
    <li>Preencher a matricula do aluno.</li>
     <li>Preencher os campos da observação.</li>
    <li>Enviar a observação.</li>
   </ol>
   </td>
  <td> Observações registradas para o aluno cadastrado.</td>
  <td> Juan </td>
 </tr>
</table>


