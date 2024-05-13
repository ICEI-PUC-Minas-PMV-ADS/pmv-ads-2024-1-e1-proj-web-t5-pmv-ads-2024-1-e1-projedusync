# Especificação do Projeto

## Perfis de Usuários


<table>
<tbody>
<tr align=center>
<th colspan="2">Perfil 1: Secretário(a) </th>
</tr>
<tr>
<td width="150px"><b>Descrição</b></td>
<td width="600px">Secretário(a) escolar</td>
</tr>
<tr>
<td><b>Necessidades</b></td>
<td>
  <ol>
<li>Registrar e divulgar informações relacionadas a datas comemorativas na instituição de ensino;</li>
<li>Obter comunicados de pais e responsáveis;</li>
<li>Enviar comunicados a pais e responsáveis.</li>
  </ol>
</td>
</tr>
</tbody>
</table>

<table>
<tbody>
<tr align=center>
<th colspan="2">Perfil 2: Professor(a)</th>
</tr>
<tr>
<td width="150px"><b>Descrição</b></td>
<td width="600px">Professor(a) de escola do ensino fundamental</td>
</tr>
<tr>
<td><b>Necessidades</b></td>
<td>
  <ol>
<li>Registrar notas e desempenho de alunos;</li>
<li>Cadastrar frequência de modo prático.</li>
  </ol>
</td>
</tr>
</tbody>
</table>

<table>
<tbody>
<tr align=center>
<th colspan="2">Perfil 3: Responsável</th>
</tr>
<tr>
<td width="150px"><b>Descrição</b></td>
<td width="600px">Responsável de aluno do ensino fundamental
</td>
</tr>
<tr>
<td><b>Necessidades</b></td>
<td>
  <ol>
<li>Acompanhar o desempenho educacional do(a) filho(a);</li>
<li>Ter acesso a datas importantes de eventos escolares;</li>
<li>Saber as notas do(a) filho(a);</li>
<li>Avisar com antecedência e de modo prático sobre a ausência do(a) filho(a).</li>
  </ol>
</td>
</tr>
</tbody>
</table>

<table>
<tbody>
<tr align=center>
<th colspan="2">Perfil 4: Aluno(a)</th>
</tr>
<tr>
<td width="150px"><b>Descrição</b></td>
<td width="600px">Aluno(a) do ensino fundamental
</td>
</tr>
<tr>
<td><b>Necessidades</b></td>
<td>
  <ol>
<li>Acessar notas de modo fácil e rápido;</li>
<li>Saber datas importantes;</li>
<li>Conhecer a grade de matérias com os respectivos horários.</li>
  </ol>
</td>
</tr>
</tbody>
</table>



## Histórias de Usuários


|EU COMO... `QUEM`   | QUERO/PRECISO ... `O QUE` |PARA ... `PORQUE`                 |
|--------------------|---------------------------|----------------------------------|
| Professor(a)       | conseguir trabalhar com praticidade e agilidade    | ter mais tempo para desenvolver atividades educacionais |
| Aluno(a)           | acessar minhas notas o mais rápido possível        | para saber se devo melhorar meu desempenho              |
| Responsável        | acompanhar a vida escolar do meu filho                       | saber como e onde devo ajudá-lo               |
| Responsável        | acompanhar as datas e feriados importantes                   | me programar melhor                           |
| Secretário(a) escolar | receber comunicados dos pais                              | obter informações sobre o aluno de forma prática  |
| Secretário(a) escolar | poder transmitir observações aos pais                     | informá-los com mais rapidez e clareza  |
| Professor(a)  | registrar informações dos alunos para os responsáveis | conscientizá-los sobre o desempenho do(a) aluno(a) |


## Requisitos do Projeto

### Requisitos Funcionais


|ID    | Descrição                | Prioridade |
|-------|---------------------------------|----|
| RF-01 |  A aplicação deve permitir ao professor(a) registrar a frequência dos alunos. | ALTA | 
| RF-02 |  A aplicação deve permitir ao professor(a) inserir as notas dos alunos. | ALTA | 
| RF-03 |  A aplicação deve permitir ao professor(a) registrar e enviar observações sobre os alunos aos responsáveis. | ALTA | 
| RF-04 |  A aplicação deve permitir ao professor(a) e aos responsáveis acessar com login com usuário e senha.  | ALTA |
| RF-05 | A aplicação deve permitir ao aluno acesso somente leitura de notas, datas de eventos e observações do professor com login. | ALTA |
| RF-06 | A aplicação deve possibilitar ao secretário(a) escolar criar o perfil de aluno(a), professor(a) e responsável. | ALTA |
| RF-07 | A aplicação deve permitir ao responsável enviar recados e justificativas de ausência ao acessar com login e senha. | MÉDIA |
| RF-08 | A aplicação deve permitir ao secretário(a) escolar receber e enviar mensagens dos responsáveis. | MÉDIA |
| RF-09 | A aplicação deve permitir ao secretário(a) escolar registrar eventos e datas comemorativas. | BAIXA |
| RF-10 | A aplicação deve permitir ao professor(a) buscar o perfil de aluno(a) pelo nome. | BAIXA |
| RF-11 | A aplicação deve permitir ao responsável acesso somente leitura de notas, eventos, observações e avisos com login e senha. | ALTA |
| RF-12 | A aplicação deve possibilitar ao secretário adicionar e vincular o perfil de aluno(s) e responsável. | ALTA |
| RF-13 | A aplicação deve permitir ao professor(a) visualizar as datas e eventos. | BAIXA |

**Prioridade: Alta / Média / Baixa. 

### Requisitos não Funcionais


|ID      | Descrição               |Prioridade |
|--------|-------------------------|----|
|RNF-01| A aplicação deve ser responsiva, permitindo acesso e visualização em dispositivos diversos.   | ALTA | 
|RNF-02| A aplicação deve ser intuitiva, facilitando o uso por responsáveis, professores e alunos.   | ALTA | 
|RNF-03| A aplicação deve ser compatível com os principais navegadores do mercado.   | ALTA | 
|RNF-04| A aplicação deve oferecer linguagem acessível e de fácil compreensão.   | MÉDIA |

**Prioridade: Alta / Média / Baixa. 

