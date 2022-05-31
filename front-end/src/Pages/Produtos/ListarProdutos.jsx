import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import apiProdutosService from "../../Service/produtoService";


function ListarProdutos(){

    const [listaProdutos, setListaProdutos] = useState([]);
    const navigate = useNavigate();


    useEffect(() => {
        buscarProdutos();
      
    }, []);



    function buscarProdutos(){
        apiProdutosService.getProdutos()
        .then((res)=>{
            setListaProdutos(res.data);         

        })
        .catch((res)=>{
            console.log(res);
        })
    }

function deletarProduto(id){
    let dados = {id};
    if(window.confirm("deseja excluir o item ?") ){
       
        apiProdutosService.deleteProduto(dados)
        .then((res)=>{
            alert(res.data); 
            window.location.reload();   
        })
        .catch((res)=>{
            console.log(res);
        })
    }  

}






return(
    <div>        
         
        <h1>Listar Produtos</h1>

        <div className="centralizar">
        <button onClick={()=>navigate("/")}  > HOME</button>
        <button onClick={()=>navigate("/cadastrarProdutos/0")}  > CADASTRAR</button>
        </div>  

        <div className="centralizar tableLista" >
         <table>
         <tbody>
                 <tr style={{backgroundColor : "silver"}} >
                     <th>DESCRIÇÃO</th>
                     <th>CÓDIGO</th>
                     <th>VALOR</th>
                     <th>DATA VENCIMENTO</th>
                     <th>ALTERAÇÃO</th>
                     <th>EXCLUIR</th>

                 </tr>
             </tbody>

             <tbody>         
                      { listaProdutos.map((a)=>
                 <tr key={a.PRDT_ID}>
                     <th>{a.PRDT_DESCRICAO}</th>
                     <th>{a.PRDT_CODIGO}</th>
                     <th className="alinharDir" >{(a.PRDT_VALOR).toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</th>
                     <th>            
                         {apiProdutosService.dataFormatadaListar(a.PRDT_DT_VALIDADE)}
                     </th>


                     <th>
                         <button onClick={()=>navigate( `/cadastrarProdutos/${a.PRDT_ID}`)}>EDITAR</button>
                         </th>


                         <th>
                         <button onClick={()=>deletarProduto(a.PRDT_ID)}>EXCLUIR</button>                      
                            </th>
            
                 </tr>

                  )} 

             </tbody> 
             



             </table>  
             </div>       


    </div>

)

}

export default ListarProdutos;