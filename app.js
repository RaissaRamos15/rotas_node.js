const express = require("express")
const app3 = express()

app3.listen(8081, function(){
    console.log("Servidor Ativo!")
})

app3.get("/", function(req, res){
    res.end("Node JS")
})



app3.get("/cadastrar/:produto", function(req, res){
    res.end(req.params.item)
})


app3.get("/pesquisar/:produto/:modelo",function(req, res){
    res.send("Produto: " + req.params.produto + "<br>Modelo: " + req.params.modelo)
})

app3.get("/contato/:sac/:produto",function(req, res){
    res.send("Sac: " + req.params.sac + "<br>Produto: " + req.params.produto)
})