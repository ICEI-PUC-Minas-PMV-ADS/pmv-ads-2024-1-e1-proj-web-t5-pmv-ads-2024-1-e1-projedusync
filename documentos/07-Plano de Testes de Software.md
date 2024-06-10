# Plano de Testes de Software

<span style="color:red">Pré-requisitos: <a href="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e1-proj-web-t5-pmv-ads-2024-1-e1-projedusync/blob/main/documentos/02-Especifica%C3%A7%C3%A3o%20do%20Projeto.md"> Especificação do Projeto</a></span>, <a href="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e1-proj-web-t5-pmv-ads-2024-1-e1-projedusync/blob/main/documentos/04-Projeto%20de%20Interface.md"> Projeto de Interface</a>

Os requisitos para realização dos testes de software são:
<ul><li>Site armazenado no LocalStorage ;</li>
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
  <td>CT-01: Verificar o funcionamento dos links da página Home</td>
  <td>
   <ul>
   
   <li>RF-05: A aplicação deve permitir ao aluno acesso somente leitura de notas, datas de eventos e observações do professor com login.</li>
    <li>RF-07:	A aplicação deve permitir ao responsável enviar recados e justificativas de ausência ao acessar com login e senha.</li>
    <li>RF-11: A aplicação deve permitir ao responsável acesso somente leitura de notas, eventos, observações e avisos com login e senha.</li>
   </ul>
  </td>
  <td>Verificar se os links da página Home do usuário específico estão encaminhando para as respectivas páginas corretamente</td>
  <td>
   <ol>
    <li>Acessar o navegador.</li>
    <li>Informar o endereço do site.</li>
    <li>Visualizar a página de Cadastro.</li>
    <li>Entrar com login e senha do usuário.</li>
    <li>Clicar nos links da página Home. </li>
   </ol>
   </td>
  <td>Todos os links da página Home devem encaminhar o usuário específico para as páginas descritas.</td>
  <td>#</td>
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
  <td>CT-02: Verificar a página de frequência do Professor</td>
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
    <li>Visualizar a página de Cadastro.</li>
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
  <td>CT-04: Verificar a página de datas e eventos do secretário</td>
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
    <li>Visualizar a página de Cadastro.</li>
    <li>Entrar com login e senha do usuário (Secretário).</li>
    <li> Clicar na aba de Datas e Eventos da página home.  </li>
    <li> Adicionar evento. </li>
   </ol>
   </td>
  <td> Ao clicar no icone adicionar, abre uma tela para selecionar a data e um campo para inserir o evento. </td>
  <td> Suzany </td>
 </tr>
</table>





 
> **Links Úteis**:
> - [IBM - Criação e Geração de Planos de Teste](https://www.ibm.com/developerworks/br/local/rational/criacao_geracao_planos_testes_software/index.html)
> -  [Teste de Software: Conceitos e tipos de testes](https://blog.onedaytesting.com.br/teste-de-software/)
> - [Criação e Geração de Planos de Teste de Software](https://www.ibm.com/developerworks/br/local/rational/criacao_geracao_planos_testes_software/index.html)
> - [Ferramentas de Test para Java Script](https://geekflare.com/javascript-unit-testing/)
> - [UX Tools](https://uxdesign.cc/ux-user-research-and-user-testing-tools-2d339d379dc7)
