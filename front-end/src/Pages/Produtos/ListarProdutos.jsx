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
            console.log(res.data)


        })
        .catch((res)=>{
            console.log(res);
        })
    }



return(
    <div> 
        
         
        <h1>Listar Produtos</h1>
        <button onClick={()=>navigate("/")}  > HOME</button>
        <button onClick={()=>navigate("/cadastrarProdutos")}  > CADASTRAR</button>
         <table>
             <tbody>         
                      { listaProdutos.map((a)=>
                 <tr key={a.PRDT_ID}>
                     <th>{a.PRDT_DESCRICAO}</th>
                     <th>{a.PRDT_CODIGO}</th>
                     <th>{Number(a.PRDT_VALOR).toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</th>
                     <th>                      
                         
                         {(new Date(a.PRDT_DT_VALIDADE).getDate()) < 10 ? "0"+new Date(a.PRDT_DT_VALIDADE).getDate() : new Date(a.PRDT_DT_VALIDADE).getDate()+"/"+(new Date(a.PRDT_DT_VALIDADE).getMonth()+(1))+"/"+new Date(a.PRDT_DT_VALIDADE).getFullYear()}
                                            
                     
                     </th>
                 </tr>
                  )} 

             </tbody>                 
             </table>         


    </div>

)

}

export default ListarProdutos;