const express = require('express');
const {required} = require('nodemon/lib/config');
const app = express()

app.set('view engine', 'ejs');
app.set('views', './views')
app.use(express.static("public"));
app.get('/', (req, res) => {
    res.render('cadastro');
});
app.post('/', (req, res) => {
    const dados  = JSON.stringify(req.query)
    console.log(dados);
    const nomeArq = 'dados/'+ req.query.email+".txt"
    const fs = require("fs")
    fs.writeFileSync(nomeArq, dados)
    console.log({valor: result});
    res.render('sucesso');
});
app.listen(8080)
console.log("servidor rodando...")