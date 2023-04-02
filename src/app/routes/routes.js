const express = require('express');
const ProductController = require('../controllers/ProductController');

class UsuarioRoutes{
    constructor(){
        this.productController = new ProductController()
        this.router = express.Router();
        this.loadRoutes();
    }

    loadRoutes() {
        //Buscar todos os Produtos
        this.router.get("/produtos", this.productController.buscarTodos.bind(this.productController))
        //Buscar Produto especifico por ID
        this.router.get("/produto/:id", this.productController.buscar.bind(this.productController))
        //Cadastrar Novos Produto
        this.router.post("/produto", this.productController.adicionar.bind(this.productController))
        //Alterar dados dos Produtos
        this.router.put("/produto", this.productController.alterar.bind(this.productController))
        //Excluir produtos
        this.router.delete("/produto/:id", this.productController.excluir.bind(this.productController))
    }
}

module.exports = UsuarioRoutes