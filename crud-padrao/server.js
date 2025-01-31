const express = require('express');
const bodyParser = require('body-parser')
const cors = require('cors')
const UseCase = require('./useCase')
const app = express();
const porta =  3000;
const baseApi = "/dev"

const service = new UseCase()

app.listen(porta, () => {
  console.log(`O servidor está sendo executado em http://localhost:${porta}`);
});
app.use(bodyParser.json())
app.use(cors())

app.get('/' , ( _, res ) => {

  res.send ('Olá, Mundo!');
});

app.delete(`${baseApi}/:id`, async ( req, res ) => {
  const  { id } = req.params
  if (!id) res.status(400).send({message: 'Requisição invalida'})
  const retorno = await service.deleteDev(id)
  res.send(retorno);
});

app.put(`${baseApi}/:id`, async ( req, res ) => {
  const { id } = req.params; 
  const { nome, email, tecnologias, nivel, salario } = req.body;
  if (!id || (!nome && !email && !tecnologias && !nivel && !salario)) {
    return res.status(400).send({ message: "Requisição inválida" });
  }
  try {
    const retorno = await service.updateDev(id, { nome, email, tecnologias, nivel, salario });
    res.send(retorno);
  } catch (error) {
    console.error("Erro ao atualizar dev:", error);
    res.status(500).send({ message: `Erro ao atualizar dev: ${error.message}` });
  }
});

app.post(`${baseApi}`, async ( req, res ) => {
  const { nome, email, tecnologias, nivel, salario } = req.body
  if(!nome || !email || !tecnologias || !nivel || !salario) res.status(400).send({message: 'Requisição invalida'})
  const retorno = await service.createDev({ nome, email, tecnologias, nivel, salario })
  res.send(retorno);
});

app.get(`${baseApi}/:id`, async ( req, res ) => {
  const  { id } = req.params
  if (!id) res.status(400).send({message: 'Requisição invalida'})
  const retorno = await service.getDevById(id)
  res.send(retorno);
});

app.get(`/all${baseApi}`, async ( _, res ) => {
  const retorno = await service.getAllDevs()
  res.send(retorno);
});

app.get(`/email${baseApi}/:email`, async ( req, res ) => {
  const { email } = req.params
  if (!email) res.status(400).send({message: 'Requisição invalida'})
  const retorno = await service.getDevByEmail(email)
  res.send(retorno);
});

process.on('uncaughtException', (err) => {
  console.error('Erro não capturado:', err);
  // Pode ser útil reiniciar o servidor ou realizar alguma ação de recuperação
});

process.on('unhandledRejection', (reason, promise) => {
  console.error('Promise rejeitada sem tratamento:', {promise, reason});
});
