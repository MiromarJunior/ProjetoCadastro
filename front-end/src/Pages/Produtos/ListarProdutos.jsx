import { useEffect, useState } from "react";
import apiProdutosService from "../../Service/produtoService"

function ListarProdutos(){

    const [listaProdutos, setListaProdutos] = useState([]);


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



return(
    <div> 
        
         
        <h1>Listar Produtos</h1>
         <table>
             <tbody>         
                      { listaProdutos.map((a)=>
                 <tr key={a.PRDT_ID}>
                     <th>{a.PRDT_DESCRICAO}</th>
                     <th>{a.PRDT_CODIGO}</th>
                     <th>{a.PRDT_VALOR}</th>
                 </tr>
                  )} 

             </tbody>                 
             </table>         


    </div>

)

}

export default ListarProdutos;