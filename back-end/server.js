const express = require("express");
const app = express();
const cors = require("cors");
const port = 5000;
app.use(express.json());

app.use(cors());

app.use(express.urlencoded({
    extended : true
}));


app.listen(port, ()=>{ 

  let usuarioRotas = require("./UsuarioController/usuarioController");
  app.use("/",usuarioRotas)  ;
 
  let produtoRotas = require("./ProdutoController/produtoController");
  app.use("/",produtoRotas) ;



  console.log("Servidor online na porta  : ", port);
  




});