const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const { listarTarefaId, listarTarefas, cadastrarTarefa, atualizarTarefa } = require('./controllers/gerenciador-tarefas.js');

const app = express();
const port = 3001;

app.use(cors());
app.use(bodyParser.json());

// Requisições: get(retornar dados), post(cadastro/inserir), put(atualizar/modificar objeto), delete.

function naoImplementado(req, res) {
    res.status(501).json({ erro: 'Não implementado' });
}

//listar todas as tarefas - get
app.get('/gerenciador-tarefas', listarTarefas);

//listar uma tarefa por ID - get
app.get('/gerenciador-tarefas/:id', listarTarefaId);

//cadastrar uma tarefa - post
app.post('/gerenciador-tarefas', cadastrarTarefa);

//atualizar uma tarefa - put
app.put('/gerenciador-tarefas/:id', atualizarTarefa);

//remover uma tarefa - delete
app.delete('/gerenciador-tarefas/:id', naoImplementado);

//concluir uma tarefa - put
app.put('/gerenciador-tarefas/:id/concluir', naoImplementado);


app.listen(port, ()=> console.log(`Servidor inicializado na porta ${port}`));