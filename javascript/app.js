const http = require('http');
const express = require('express');
const app = express();

app.use(express.static('./'));

app.get('/', (req, res) => res.sendFile("./index.html"))


app.listen(2022, () => 

console.log("Servidor rodando na porta 2022")

)