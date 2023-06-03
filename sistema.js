const express = require('express')
const app = express()

app.set('view engine', 'ejs');
app.set('views', './views')
app.use(express.static("public"));
app.get('/', (req, res) => {
    res.render('cadastro');
});
app.post('/', (req, res) => {
    res.render('sucesso');
});
app.listen(8080)
console.log("servidor rodando...")