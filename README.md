
# GERENCIADOR

API REST: VOLTADA PARA LANCHONETE (HAMBURGER)


FUNCIONALIDADE: API VOLTANDO PARA PEDIDOS, ONDE O CLIENTE VAI ESTÁ PODENDO REALIZAR,

01 - REALIZAÇÃO DE CADASTRO DE USUARIO.

02 - REALIZAÇÃO CONSTRUÇÃO MONTAGEM DO PEDIDO SEJA ELA BEBIDAS / SOMBRESAS / HAMBURGER / E DEMAIS SERVIÇOS VOLTANDO PARA LANCHONETE (HAMBURGER).



# INICIAR A APLICAÇÃO:

01 - // Gerencia as requisições, rotas e URLs, entre outra funcionalidades
yarn add express

02 CONTANIER NO DOCKER - BANCO DE DADOS POSTGRES.

docker run --name tonyburguer-postgres -e POSTGRES_PASSWORD=postgres -p 5432:5432 -d postgres

03 - INICIAR O CONTANIER.

docker start tonyburguer-postgres

