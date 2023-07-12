const { error } = require('console');
const express = require('express');
const app = express()
const fs = require("fs")
app.use(express.urlencoded({extended: false}))
app.set('view engine', 'ejs');
app.set('views', './views')
app.use(express.static("public"));
app.get('/', (req, res) => {
    res.render('cadastro');
});
app.post('/', (req, res) => {
    const dados  = JSON.stringify(req.body)
    const nomeArq = req.body.email+".txt"
    fs.writeFileSync(nomeArq, dados)
    console.log({valor: nomeArq});
    res.render('sucesso');
});
app.get('/lista',(req,res)=>{
  const rotaContasFeitas = app.route("/views");
  rotaContasFeitas.get((req, res) => {
      let contasGravadas = [];
      arquivos.readdirSync("./dados/").forEach(file => {
        if (file.includes(".txt")) {
          contasGravadas.push(file);
        }
      });
      console.log(contasGravadas);
      res.render("lista", {contas: contasGravadas});
  })  
})
  app.get('/:email/show', (req,res)=>{
    var dados = req.params
    var dadosfinais = JSON.parse(fs.readFileSync(dados.email))
    res.render('dadosfinais', {dadosfinais: JSON.stringify(dadosfinais)})
    })

/*
const rotaContasFeitas = app.route("/views");
rotaContasFeitas.get((req, res) => {
    let contasGravadas = [];
    arquivos.readdirSync("./dados/").forEach(file => {
      if (file.includes(".txt")) {
        contasGravadas.push(file);
      }
    });
    console.log(contasGravadas);
    res.render("lista", {contas: contasGravadas});
})

const rotaUmaConta = app.route("/umaconta");
rotaUmaConta.get((req, res) => {
  const nomeArq = "dados/"+req.query.nome
  const conteudoArq = arquivos.readFileSync(nomeArq)
  const stringArq = conteudoArq.toString()
  const objArq = JSON.parse(stringArq)
  res.render("umaconta", {conta: objArq});
})*/

app.listen(8080)
console.log("servidor rodando...")