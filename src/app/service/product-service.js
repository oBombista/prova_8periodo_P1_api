
//Usuario service serve como uma regra de negocio,
//aqui manipulamos os CRUDS
const ProductRepositoryMongo = require("../repositories/ProductsRepository");


class ProductService {
    constructor(){
        this.productRepository = new ProductRepositoryMongo()
    }
    adicionar(produto){
        this.productRepository.adicionar(produto);
    }
    excluir(produto){
        this.productRepository.excluir(produto);
    }
    alterar(produto){
        this.productRepository.alterar(produto);
    }
    buscar(produto){
        return this.productRepository.buscar(produto);
    }
    buscarTodos(produto){
        return this.productRepository.buscarTodos()
    }
}

module.exports = ProductService;