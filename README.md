# javascript-marco-2023
repositórios dos arquivos do curso de Javascript da UTD


Iniciar um repositório git
	- git init
	- git clone (colar url)

Caso queira renomear o nome do ramo principal
	-git branch -m <nome anterior> <novo nome>

Configurar seus dados de usuário
	- git config  --global user.name “digite seu nome aqui”
	- git config  --global user.email “digite seu email aqui”

Verificar o status dos arquivos
	- git status

Adicionar arquivos para o git fazer o controle 
	- git add (nome do arquivo)
	- git add . (adicionam todos os arquivos do repositório, menos os que estão no git ignore)
	- git add *

Preparar os arquivos para envio para repositório on-line
	- git commit -m “escreva aqui uma boa mensagem”

Setando o endereço do reposi	tório on-line
	- git remote add origin (copie seu endereço do repositório remoto aqui)	

Remover o endereço do repositório
	- git remote remove origin

Enviando os dados para o repositório remoto
	- git push origin (nome da branch)

Trazer modificações que estão no repositório remoto
	- git pull (url da origem)

Criando uma nova branch
	- git branch “nome da branch”

Trocar para outra branch 
	- git checkout “nome da branch”

Criar e já trocar para a branch nova
	- git checkout -b “nome da branch”


