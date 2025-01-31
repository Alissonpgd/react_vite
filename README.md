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






