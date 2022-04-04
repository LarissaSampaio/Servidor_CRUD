const express = require('express');
const app = express();
const port = 3000;
const clientes = require('./banco-dados');

app.use(express.json());
app.use(express.urlencoded({ extended: true}));

app.get('/clientes', (req,res) => {
   res.json(clientes);
});

app.get('/clientes/:id', (req, res) => {
    res.json(req.user)
});

app.post('/clientes', (req, res) => {
    const {newClient} = req.body;
    clientes.push(newClient);
    res.json(clientes);
})

app.patch('/clientes/:index', (req, res) => {
    const{ index } = req.params;
    const { name } = req.body;
    clientes[index] = name;
    res.json(clientes);
})

app.delete('/clientes/:index', (req, res) => {
    const{ index } = req.params;
    clientes.splice(index, 1);
    res.send();
})

app.listen(port);