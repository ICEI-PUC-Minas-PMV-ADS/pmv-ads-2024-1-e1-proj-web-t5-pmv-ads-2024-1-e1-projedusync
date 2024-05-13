# Programação de Funcionalidades

<span style="color:red">Pré-requisitos: <a href="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e1-proj-web-t5-pmv-ads-2024-1-e1-projedusync/blob/main/documentos/02-Especifica%C3%A7%C3%A3o%20do%20Projeto.md">Especificação do Projeto</a></span>, <a href="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e1-proj-web-t5-pmv-ads-2024-1-e1-projedusync/blob/main/documentos/03-Metodologia.md">Metodologia</a>, <a href="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e1-proj-web-t5-pmv-ads-2024-1-e1-projedusync/blob/main/documentos/04-Projeto%20de%20Interface.md"> Projeto de Interface</a>, <a href="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e1-proj-web-t5-pmv-ads-2024-1-e1-projedusync/blob/main/documentos/05-Template%20padr%C3%A3o%20da%20Aplica%C3%A7%C3%A3o.md"> Template padrão da Aplicação.</a>

 ### Tela Frequência dos alunos (Professor) (RF-01)

#### Responsável

Igor Yuri

O acesso da tela pode ser feito por meio da tela inicial. A tela de frequência é usada pelo professor para registro de frequências e faltas dos alunos.
As estruturas de dados foram baseadas em HTML, CSS e JS. O JavaScript possibilita a seleção de turmas, bem como o registro da frequência de alunos.
<figure>
  <img src="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e1-proj-web-t5-pmv-ads-2024-1-e1-projedusync/blob/main/documentos/img/Edusync/TelaFreqenciaProfessor.png"> 
</figure>

#### Requisito atendido

RF-01: A aplicação deve permitir ao professor(a) registrar a frequência dos alunos.	  


#### Artefatos da funcionalidade

●Frequencia_professor.html

●style_freq_prof.css

●script_freq_prof.js


#### Estrutura de Dados

●[Frequencia_professor.html](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e1-proj-web-t5-pmv-ads-2024-1-e1-projedusync/blob/main/codigo-fonte/TelasFrequencias/FrequenciaProfessor/Frequencia_professor.html)

### Tela Boletim (RF-02)

#### Responsável

Luan Marinheiro

O acesso da tela pode ser feito por meio da tela inicial. A tela de boletim permite ao professor inserir as notas dos alunos. As estruturas de dados foram baseadas em HTML, CSS e JS. O JavaScript foi usado para automatizar o cálculo das médias dos alunos.

<figure>
  <img src="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e1-proj-web-t5-pmv-ads-2024-1-e1-projedusync/blob/main/documentos/img/Edusync/TelaBoletimProfessor.png"> 
</figure>

#### Requisito atendido

RF-02: A aplicação deve permitir ao professor(a) inserir as notas dos alunos.		  


#### Artefatos da funcionalidade

●telaboletimprofessor.html

●styleprofboletim.css

●scriptprofboletim.js


#### Estrutura de Dados

●[telaboletimprofessor.html](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e1-proj-web-t5-pmv-ads-2024-1-e1-projedusync/blob/main/codigo-fonte/TelasBoletim/telaboletimprofessor.html)

### Tela de registro de observações (RF-03)

#### Responsável

Juan Phablo

O acesso da tela pode ser feito por meio da tela inicial. A tela de registro de observações permite ao professor registrar e enviar observações sobre o comportamento e desempenho do aluno aos responsáveis. As estruturas de dados foram baseadas em HTML, CSS e JS.
<figure>
  <img src="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e1-proj-web-t5-pmv-ads-2024-1-e1-projedusync/blob/main/documentos/img/Edusync/TelaObservacoesProfessor.png.png"> 
</figure>

#### Requisito atendido

RF-03: A aplicação deve permitir ao professor(a) registrar e enviar observações sobre os alunos aos responsáveis.		  


#### Artefatos da funcionalidade

●TelasObservações.html

●TelasObservações.css

●TelasObservações.js


#### Estrutura de Dados

●[TelasObservações.html](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e1-proj-web-t5-pmv-ads-2024-1-e1-projedusync/blob/main/codigo-fonte/TelasObserva%C3%A7%C3%B5es/TelasObserva%C3%A7%C3%B5es.html)

### Tela de login (RF-04/RF-05)

#### Responsável

Juliane Guerra

A tela de login é a primeira tela que o usuário vai precisar acessar no navegador para ter acesso ao sistema. As estruturas de dados foram criadas em HTML, CSS e JS.
<figure>
  <img src="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e1-proj-web-t5-pmv-ads-2024-1-e1-projedusync/blob/main/documentos/img/Edusync/TelaInicialLogin.png"> 
</figure>

#### Requisito atendido

RF-04: A aplicação deve permitir ao professor(a) e aos responsáveis acessar com login com usuário e senha.  

#### Requisito parcialmente atendido

RF-05: A aplicação deve permitir ao aluno acesso somente leitura de notas, datas de eventos e observações do professor com login.

#### Artefatos da funcionalidade

●paginaLogin.html

●paginaLogin.css

●paginaLogin.js


#### Estrutura de Dados

●[paginaLogin.html](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e1-proj-web-t5-pmv-ads-2024-1-e1-projedusync/blob/main/codigo-fonte/TelaLogin/paginaLogin.html)

### Tela de cadastro de responsáveis (RF-06/RF-12)

#### Responsável

Juliane Guerra

A tela de cadastros é de acesso exclusivo do secretário. Temos três tipos de cadastros diferentes: alunos, responsáveis e professores. No exemplo abaixo, é possível ver a tela de cadastro de responsáveis. Nela, o secretário pode adicionar as informações referentes ao responsável, bem como um ou mais nomes de aluno. As estruturas de dados foram criadas em HTML, CSS e JS.
<figure>
  <img src="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e1-proj-web-t5-pmv-ads-2024-1-e1-projedusync/blob/main/documentos/img/Edusync/CadastroRespons%C3%A1vel.png"> 
</figure>

#### Requisitos atendidos

RF-06: A aplicação deve possibilitar ao secretário(a) escolar criar o perfil de aluno(a), professor(a) e responsável.

RF-12: A aplicação deve possibilitar ao secretário adicionar e vincular o perfil de aluno(s) e responsável.


#### Artefatos da funcionalidade

●cadastroResponsavel.html

●cadastroResponsavel.css

●cadastroResponsavel.js


#### Estrutura de Dados

●[cadastroResponsavel.html](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e1-proj-web-t5-pmv-ads-2024-1-e1-projedusync/blob/main/codigo-fonte/TelasCadastro/CadastroResponsavel/cadastroResponsavel.html)

### Tela de registro de avisos (RF-08)

#### Responsável

Juliane Guerra

A tela de registro de avisos oferece duas versões, a do secretário e a do responsável. Na imagem abaixo, é possível ver a tela de registro de avisos do secretário. As estruturas de dados foram criadas em HTML, CSS e JS.
<figure>
  <img src="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e1-proj-web-t5-pmv-ads-2024-1-e1-projedusync/blob/main/documentos/img/Edusync/TelaAvisosSecretario.png"> 
</figure>

#### Requisitos atendidos

RF-08: A aplicação deve permitir ao secretário(a) escolar receber e enviar mensagens dos responsáveis.

#### Artefatos da funcionalidade

●pagRegAvisosSec.html

●pagRegAvisosSec.css

●pagRegAvisosSec.js


#### Estrutura de Dados

●[pagRegAvisosSec.html](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e1-proj-web-t5-pmv-ads-2024-1-e1-projedusync/blob/main/codigo-fonte/TelasAvisos/AvisosSecret%C3%A1rio/pagRegAvisosSec.html)

### Datas e Eventos (RF-13)

#### Responsável

Suzany Napolitano

O acesso da tela pode ser feito por meio da tela inicial. Permite ao professor visualizar as datas e eventos relacionados à escola. As estruturas de dados foram baseadas em HTML, CSS e JS.
<figure>
  <img src="https://raw.githubusercontent.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e1-proj-web-t5-pmv-ads-2024-1-e1-projedusync/main/documentos/img/Edusync/telaDatasEventosProfessor.png"> 
</figure>

#### Requisito atendido

RF-011: A aplicação deve permitir ao professor(a) visualizar as datas e eventos. 


#### Artefatos da funcionalidade

●DatasEventos.html

●DatasEventos.css

●DatasEventos.js


#### Estrutura de Dados

●[DatasEventos.html](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e1-proj-web-t5-pmv-ads-2024-1-e1-projedusync/blob/main/codigo-fonte/TelasDatasEventos/DatasEventosProfessor/DatasEventos.html)








