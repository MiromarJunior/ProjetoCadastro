const { default : axios} = require("axios");

const baseURL = process.env.REACT_APP_API_URL;


const getProdutos = ()=>{
    return axios.get(`${baseURL}listarProduto`);
} 

const saveProdutos = data =>{
    return axios.post(`${baseURL}cadastrarProduto`,data);
} 





module.exports = { getProdutos,saveProdutos}