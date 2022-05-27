import { useState } from "react";
import apiProdutosService from "../../Service/produtoService";
import { useNavigate } from "react-router-dom";


const CadastrarProdutos = ()=>{

    const [descricao,setDescricao] = useState("");
    const [codigo, setCodigo] = useState("");
    const [valor, setValor] = useState("");
    const [dataVal, setDataVal] = useState("");
    const navigate = useNavigate();


    const cadastrarProduto =(e)=>{
        e.preventDefault();

        const dados = {descricao, codigo,valor,dataVal};
        apiProdutosService.saveProdutos(dados)
        .then((res)=>{
            alert(res.data)

        }).catch((err)=>{
            console.log(err);
        })


    }
    
    


    return(

        <div>
            <label>Descrição</label>
            <input type="texto"  onChange={(e)=> setDescricao(e.target.value) }   />            

            <label>Codigo</label>
            <input type="texto"   onChange={(e)=> setCodigo(e.target.value) }/>

            <label>Valor</label>
            <input type={'number'} onChange={(e)=> setValor(e.target.value) }/>

            <label>DATA VALIDADE</label>
            <input type={'date'} onChange={(e)=> setDataVal(e.target.value) } />

            <button onClick={(e)=>cadastrarProduto(e) }   >Salvar Produtos</button>

            <button onClick={()=>navigate("/listarProdutos")}  > LISTAR PRODUTOS</button>

        </div>

    )

}

export default CadastrarProdutos;