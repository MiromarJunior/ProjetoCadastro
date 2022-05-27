import { useNavigate } from "react-router-dom";


const HomePage = ()=>{
    const navigate = useNavigate();

    

    function pageListarProdutos(){

    }



    return(
        <div>
           <h1> Seja bem vindo !!!</h1>

           <button onClick={()=>navigate("/listarProdutos")}  > LISTAR PRODUTOS</button>


        </div>

    )

}

export default HomePage;