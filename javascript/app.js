const http = require('http');
const express = require('express');
const app = express();

app.use(express.static('/home/igor/aulas Dh/Retrobol'));

app.get('/', (req, res) => res.sendFile("/home/igor/aulas Dh/Retrobol/index.html"))


app.listen(2022, () => 

console.log("Servidor rodando na porta 2022")

)