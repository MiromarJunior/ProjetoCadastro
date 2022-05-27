const router = require("express").Router();
const express = require("express");
const oracledb = require("oracledb");
const dbConfig = require("../ConfigDB/configDB.js");
const app = express();
app.use(express.json());


router.get("/listarProduto", async(req, res)=> {
    let connection = await oracledb.getConnection(dbConfig);
    let result;

  try {

    result = await connection.execute ( 

        ` SELECT  * FROM PRODUTO  `,
        [],
        { outFormat  :  oracledb.OUT_FORMAT_OBJECT} 
         );
         res.send(result.rows).status(200);
        
    
      
  } catch (error) {
      console.error(error);
      res.send("erro de conexao").status(500);
      
  }finally {
      if(connection){
          try {
              await connection.close();
              console.log("conexão fechada");
          } catch (error) {
            console.error(error);              
          }
      }
  }




});

router.post("/cadastrarProduto", async(req, res)=> {
  let = {descricao, codigo,valor,dataVal} = req.body;
  console.log(new Date(dataVal));
  let connection = await oracledb.getConnection(dbConfig);

  let result;

try {

   await connection.execute ( 

      ` 
      INSERT INTO PRODUTO
            (PRDT_DESCRICAO, PRDT_CODIGO, PRDT_VALOR, PRDT_DT_VALIDADE, PRDT_ID)
             VALUES
            (:DESCRICAO,
             :CODIGO,
              :VALOR,
           :VALIDADE,
             SQ_PRDT.NEXTVAL)     
      
      
      
      `,
      [descricao, codigo,Number(valor),new Date(dataVal)],
      { outFormat  :  oracledb.OUT_FORMAT_OBJECT,
        autoCommit : true
      
      } 
       );
       res.send("Cadastrado com sucesso!").status(200);
      
  
    
} catch (error) {
    console.error(error);
    res.send("erro de conexao").status(500);
    
}finally {
    if(connection){
        try {
            await connection.close();
            console.log("conexão fechada");
        } catch (error) {
          console.error(error);              
        }
    }
}




});






module.exports = router;