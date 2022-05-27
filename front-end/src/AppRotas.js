import HomePage from "./Pages/Home";
import ListarProdutos from "./Pages/Produtos/ListarProdutos";


const { BrowserRouter, Routes, Route, Navigate, } = require("react-router-dom");


const AppRotas = () => {


    return (

        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<HomePage />} />
                <Route exact path="/listarProdutos" element={<ListarProdutos />} />
            </Routes>
        </BrowserRouter>
    )
}

export default AppRotas;