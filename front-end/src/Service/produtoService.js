const { default : axios} = require("axios");

const baseURL = process.env.REACT_APP_API_URL;


const getProdutos = ()=>{
    return axios.get(`http://localhost:5000/listarProduto`);
} 


module.exports = { getProdutos}