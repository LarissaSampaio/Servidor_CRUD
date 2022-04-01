const express = require('express');
const app = express();
const port = 3000;
const clientes = [];

app.use(express.json());


app.get('/clientes', (req,res) => {
    return res.json(clientes);
});

app.get('/clientes/:index', (req, res) => {
    return res.json(req.user);
})

app.post('/clientes', (req, res) => {
    const { name } = req.body;
    clientes.push(name);
    return res.json(clientes);
})

app.patch('/clientes/:index', (req, res) => {
    const{ index } = req.params;
    const { name } = req.body;
    clientes[index] = name;
    return res.json(clientes);
})

app.delete('/clientes/:index', (req, res) => {
    const{ index } = req.params;
    clientes.splice(index, 1);
    return res.send();
})

app.listen(3000);