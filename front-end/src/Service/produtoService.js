const { default : axios} = require("axios");

const baseURL = process.env.REACT_APP_API_URL;


const getProdutos = ()=>{
    return axios.get(`${baseURL}listarProduto`);
} 
const getProdutosID = data=>{
    return axios.post(`${baseURL}listarProdutoID`,data);
} 

const deleteProduto = data =>{
    return axios.post(`${baseURL}excluirProduto`, data)
}



const saveProdutos = data =>{
    return axios.post(`${baseURL}cadastrarProduto`,data);
} 

const dataFormatadaInput = (data)=>{
    return(
    new Date(data).getFullYear()+"-"+
    ((new Date(data).getMonth()+(1))< 10 ?
    "0"+(new Date(data).getMonth()+(1)) :
    (new Date(data).getMonth()+(1)) 
    )+"-"+
    ((new Date(data).getDate())< 10 ?
    "0"+(new Date(data).getDate()) :
    (new Date(data).getDate()) 

    )
    )
  

}
const dataFormatadaListar =(data)=>{
    return(
        
        ((new Date(data).getDate()) < 10 ? "0"+new Date(data).getDate() : new Date(data).getDate())+"/"
        +((new Date(data).getMonth()+(1)) < 10 ? "0"+(new Date(data).getMonth()+(1)) : (new Date(data).getMonth()+(1))) +"/"
        +new Date(data).getFullYear()
    )
}




module.exports = {deleteProduto,getProdutosID,dataFormatadaInput,dataFormatadaListar, getProdutos,saveProdutos}