const express = require('express');
const app = express()

const fs = require("fs")
app.use(express.json())


app.post('/post', (req, res) => {
    const dados  = JSON.stringify(req.body)
    const nomeArq = req.body.email+".json"
    fs.writeFileSync(nomeArq, dados)
    res.send('sucesso');
})

app.get('/lista', (req,res)=>{
  fs.readdir(__dirname, (err, files)=>{
     if (err) console.log(err);
     var newfiles =  files.filter(data => data.includes('.json') )
     console.log(newfiles);
      res.send({files: newfiles})
  })
})
app.delete('/delete/:email', (req,res)=>{
    var dados = req.params.email
    fs.unlinkSync(dados)
    res.send("dados apagados!")
})

app.use((req, res, next) => {
    res.send({erro: true, msg: "Rota não definida no servidor."})
});

app.listen(8080)
console.log("servidor rodando...")