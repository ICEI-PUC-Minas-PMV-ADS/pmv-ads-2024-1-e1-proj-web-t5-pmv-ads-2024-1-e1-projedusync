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
1. Registrar notas e desempenho de alunos;
2. Cadastrar frequência de modo prático.
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
1. Acompanhar o desempenho educacional do(a) filho(a);
2. Ter acesso a datas importantes de eventos escolares;
3. Saber as notas do(a) filho(a);
4. Avisar com antecedência e de modo prático sobre a ausência do(a) filho(a).
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
1. Acessar notas de modo fácil e rápido;
2. Saber datas importantes;
3. Conhecer a grade de matérias com os respectivos horários.
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

[Com base nas Histórias de Usuários, enumere os requisitos da solução. Lembre-se que cada requisito deve corresponder a uma, e somente uma, característica alvo da solução. Além disso, certifique-se de que todos os aspectos capturados nas Histórias de Usuário foram cobertos.]

### Requisitos Funcionais

[Utilize o modelo de tabela abaixo para apresentar os requisitos funcionais]

|ID    | Descrição                | Prioridade |
|-------|---------------------------------|----|
| RF-01 |  A aplicação deve permitir ao professor(a) registrar frequência, notas e observações sobre os alunos. | ALTA | 
| RF-02 |  A aplicação deve permitir ao professor(a) e aos responsáveis acessar com login com usuário e senha.  | ALTA |
| RF-03 | A aplicação deve permitir ao aluno acesso somente visualização de notas e datas de eventos com usuário. | ALTA |
| RF-04 | A aplicação deve possibilitar ao secretário(a) escolar criar o perfil de aluno(a). | ALTA |
| RF-05 | A aplicação deve permitir ao responsável enviar recados e justificativas de ausência. | MÉDIA |
| RF-06 | A aplicação deve permitir ao secretário(a) escolar receber e enviar mensagens dos responsáveis. | MÉDIA |
| RF-07 | A aplicação deve permitir ao secretário(a) escolar registrar eventos e datas comemorativas | BAIXA |
| RF-08 | A aplicação deve permitir ao professor(a) buscar o perfil de aluno(a) pelo nome. | BAIXA |

**Prioridade: Alta / Média / Baixa. 

### Requisitos não Funcionais

[Utilize o modelo de tabela abaixo para apresentar os requisitos não-funcionais]

|ID      | Descrição               |Prioridade |
|--------|-------------------------|----|
|RNF-01| A aplicação deve ser responsiva, permitindo acesso e visualização em dispositivos diversos.   | ALTA | 
|RNF-02| A aplicação deve ser intuitiva, facilitando o uso por responsáveis, professores e alunos.   | ALTA | 
|RNF-03| A aplicação deve ser compatível com os principais navegadores do mercado.   | ALTA | 
|RNF-04| A aplicação deve oferecer linguagem acessível e de fácil compreensão.   | MÉDIA |

**Prioridade: Alta / Média / Baixa. 

