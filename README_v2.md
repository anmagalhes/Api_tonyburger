
# GERENCIADOR

01 - Criar o arquivo package

npm init -y

02 - // Gerencia as requisições, rotas e URLs, entre outra funcionalidades
yarn add express

03 - só para minha maquina //Instalar o módulo para reiniciar o servidor sempre que houver alteração no código fonte

yarn global add nodemon   NÃO PRECISAR SOMENTE VAI PRECISAR PARA DEV.
yarn add -D nodemon

04 - Biblioteca Ou pode ser essa a babel é melhor

 yarn add sucrase -D

06 - Biblioteca para padronizar o código.

 yarn add eslint -D
 yarn eslint --init
 
 07 - Configuração do Eslint (Depois apertar um enter)

07.01 - To check syntax, find problems, and enforce code style -

07.02 -  JavaScript modules (import/export)

07.03 - > None of these

07.04 - > Does your project use TypeScript? » No / Yes

07.05 -> VAi no Browser apertar espaço para retirar e depois vai no node e apertar espaço depois enter . √ Node

07.06 -> > Airbnb: https://github.com/airbnb/javascript

07.07 -> > JavaScript

07.08 ->  Would you like to install them now with npm? » No / Yes

07.09 - Depois remover a pagckge-lock.json

07.10 - Depois só fazer o yarn e aperta enter


09 . Instalação do prettier 

yarn add prettier eslint-config-prettier eslint-plugin-prettier -D


10 . Instalar o sequelize - conversar Transformar os dados em SQL 

yarn add sequelize

11 . Instalar o sequelizeli-cli melhora para não digitar tudo manual.

yarn add sequelize-cli -D

11.2 PRIMEIRO CONTANIER NO DOCKER - postgres

docker run --name tonyburguer-postgres -e POSTGRES_PASSWORD=postgres -p 5432:5432 -d postgres

11.3 PRIMEIRO CONTANIER NO DOCKER - MONGOBD

docker run --name mongo -p 27017:27017 -d -t mongo

VERSÃO MAIS ANTIGAR POR CONTA DO MEU PROCESSOR

docker run --name mongo -p 27017:27017 -d -t mongo:4.4.6

11.4 ULTILIZAR MONGOBD - SEQUELIZE SÓ FUNCIONAR EM BANCO RELACIONAL

yarn add mongoose

12 . Caso venha utlilizar o banco de dados postgres é necessario instalar dois arquivo conforme a documentação do sequelize.

yarn add pg pg-hstore

13 - Criando tabela com o sequelizecli e migrations

yarn sequelize migration:create --name=create-users (USUARIOS)

yarn sequelize migration:create --name=create-products (PRODUTOS)

yarn sequelize migration:create --name=create-caterogories (CATERGORIA)


13.1 - Editar uma tabela já criada com o sequelizecli e migrations

yarn sequelize migration:create --name=delete-category-column (EXEMPLOS DELETAR CATERGORIA DA TABELA PRODUTO) - REFEFERENCIA O NOME DA TABELA

13.2 - Criando outra com outra com relacionamento tabela, onde deletada a coluna anterior já criada com o sequelizecli e migrations.

yarn sequelize migration:create --name=create-category-column (EXEMPLOS DELETAR CATERGORIA DA TABELA PRODUTO) - REFEFERENCIA O NOME DA TABELA


14 - Depois de configurando as tabela fazer o seguinte processo com o sequelizecli e migrations metodo UP : (CRIAR)

yarn sequelize db:migrate

15 - Refazer as tabelas com seqaulizecli e migrations metodo down(REFAZER ULTIMAS MODIFICAÇÕES)

yarn sequelize db:migrate:undo:all   ( TODAS)
yarn sequelize db:migrate:undo:      (ULTIMAS MODIFICADA)





16 - RODA DOCKER QUAL CONTANIER

exemplo: docker start nomedoaplicação

Minha aplicação real =>docker start tonyburger-postgres 

17 - BIBLIOTECA CRIAR ID DO NODEJS

yarn add uuid
npm install uuid

18 - Instalar o ESM

yarn add esm

19 - PARA AUTORIZAR O FONT CONVERSAR COM O BANCK FAZER ESSE PROCESSO NO BACK END ()
yarn add cors

20 - VALIDAÇÃO DE DADOS QUE USUARIO ENVIAR ESTÁ DE ACORDO PARA LEVAR O BACK END.
yarn add yup ou joi são muitos parecidas

21 - DEIXAR A SENHA COMO BINARIO ENVIAR ESTÁ DE ACORDO PARA LEVAR O BACK END.
yarn add bcrypt

22 - BIBLIOTECA UPLOAD DE IMAGENS MULTER - MULTIPART FORM ( CASO SEJA NECESSÁRIO ).
yarn add multer

23 - BIBLIOTECA JSONWEB TOKEN  - PARA VALIDAR SE O USUARIO ESTÁ LOGANDO MESMO APLICAÇÃO E O TEMPO (PODE SER USADO TANTO NO FRONT OU BACK END)
yarn add jsonwebtoken




23 - CASO SEJA NECESSARIO - Instalar o Mongoose - Mongoose traduz os dados do banco de dados para objetos JavaScript para que possam ser utilizados por sua aplicação.

yarn add mongoose
yarn --save mongoose









05 - Instalar o roda o java scrpit 

yarn add  -D babel
npm i -D babel-cli babel-preset-env nodemon

> Depois deletar 












04 -Entender a URL e transInstalar o body-parser do MongoDB
yarn add body-parser

// Atualização do yarn ultimas versões
yarn set version berry
yarn set version latest

// Forçado atualização do yarn para git
yarn set version from sources


// Cliclar no sinal de + criar no novo servidor - depois continuar exercução do processo

05 - instalar o mongo

yarn add  mongo --save
yarn add  mongo

//Instalar o MongoDB
yarn --save mongodb

06 - só para minha maquina //Produz código JS válido - para import do ES6

08 - // installar

npm install -g yarn



10 - PARA O TRABALHAR CSS COM JAVASCRPIT NO REACT BIBLIOTECA ()
yarn add styled-components



12 - REACT ROUTER DOM 5 MAIS HOUVE ATUALIZAÇÃO VERSÃO PARA 6 17.12.2021 AINDA MUITO SITE AINDA USAR 5
yarn add react-router-dom@5



  00 - Roda sempre precisar o programa //Iniciar o servidor
npm rum dev

C:\Users\Antonio\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Kong

