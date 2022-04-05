const express = require('express');
const app = express();
const port = 3000;
const dados = require('./banco-dados');

app.use(express.json());
app.use(express.urlencoded({ extended: true}));
 
app.get('/clientes', (req,res) => {
   res.json(dados.clientes);
});

app.get('/clientes/:index', (req, res) => {
    const { index } = req.params;
    res.json(dados.clientes[index]);
});

app.post('/clientes', (req, res) => {
    let id = req.body.id;
    let nome = req.body.nome;
    let endereco = req.body.endereco;
    let email = req.body.email;
    dados.clientes[id] = { id, nome, endereco, email };
    res.json(dados.clientes[id]);
})

app.patch('/clientes/:index', (req, res) => {
    const{ index } = req.params;
    const { name } = req.body;
    dados.clientes[index] = name;
    res.json(dados.clientes);
})

app.delete('/clientes/:index', (req, res) => {
    const{ index } = req.params;
    dados.splice(index, 1);
    res.send();
});

app.listen(port);