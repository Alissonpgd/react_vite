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
