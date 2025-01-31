<<<<<<< HEAD
# Projeto React com TypeScript

Este repositório contém a configuração inicial de um projeto React utilizando TypeScript, com as dependências essenciais para desenvolvimento.

## Requisitos
Certifique-se de ter instalado previamente:
- [Node.js](https://nodejs.org/) (versão recomendada LTS)
- npm (gerenciador de pacotes do Node.js)
Caso precise manter versões diferentes:
- [NVM](https://github.com/coreybutler/nvm-windows/releases)

## Instalação

Siga os passos abaixo para configurar o ambiente:

1. Crie um novo projeto utilizando o Vite com React e TypeScript:

   ```sh
   npx create vite@latest [nome-do-seu-projeto] --template react-ts
   cd [nome-do-seu-projeto]
   ```

2. Instale as dependências do projeto:

   ```sh
   npm install @mui/material @emotion/react @emotion/styled
   npm install @mui/icons-material
   npm install axios
   npm install react-router-dom
   npm install react-hook-form
   ```

## Executando o projeto

Para iniciar o projeto em modo de desenvolvimento, utilize o comando:

```sh
npm run dev
```

O projeto será iniciado e poderá ser acessado via navegador no endereço indicado no terminal (geralmente `http://localhost:5173`).

## Executando a API de teste

Para rodar a API localmente, siga os passos abaixo:

1. Entre na pasta `crud_padrao`:

   ```sh
   cd crud_padrao
   ```

2. Instale as dependências:

   ```sh
   npm install
   ```

3. Inicie o servidor:

   ```sh
   npm run server
   ```

A API estará disponível em `http://localhost:3000` com os seguintes recursos:

  - `GET /all/dev` - Retorna todos os registros de dev.
  - `GET /email/dev/:email` - Retorna um item específico pelo e-mail. - Retorna a lista completa de itens.
  - `POST /dev` - Cria um novo item. Requer um corpo JSON com os dados do item.
  - `PUT /dev` - Atualiza um item existente com base no ID. Requer um corpo JSON com os novos dados.
  - `DELETE /dev/:id` - Remove um item com base no ID.

## Scripts disponíveis

- `npm run dev` - Inicia o projeto em ambiente de desenvolvimento.
- `npm run build` - Compila o projeto para produção.






=======
# react_vite

projeto Crud Basico, criado em treinamento na Accenture, com finalidade de desenvolver habilidades em React, Vite, Talwind e Node.

para rodar o projeto:

npm install npm run dev (para o front) npm run server (para o back)

endPoints

curl --request POST
--url http://localhost:3000/dev
--header 'Content-Type: application/json'
--data '{ "nome": "Jose", "email": "Jose@hotmail.com", "tecnologias": "java, react, spring", "nivel": "junior", "salario": 1800 }'

curl --request GET
--url http://localhost:3000/all/dev

curl --request GET
--url http://localhost:3000/email/dev/{email}

curl --request GET
--url http://localhost:3000/dev/{id}

curl --request PUT
--url http://localhost:3000/dev
--header 'Content-Type: application/json'
--data '{ "id": 1, "nome": "Joao Santos", "email": "js@email.com", "tecnologias": "java, react, spring, mongodb", "nivel": "junior", "salario": 1800 }'

curl --request DELETE
--url http://localhost:3000/dev
>>>>>>> 0c788d6a27a1e7533cb63eeadbcea25364418371
