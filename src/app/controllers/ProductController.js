const Usuario = require("../domain/domain")
const ProductService = require("../service/product-service");


class ProductController{
  constructor(){
      this.productService = new ProductService()
  }
  adicionar (req, res)  { 
              let usuario = new Usuario(req.body.name ,req.body.price, req.body.category, req.body.subcategory);
              this.productService.adicionar(usuario);
              res.json(usuario)
      }
  
  async excluir (req, res)  { 
          const {id} = req.params
          const produto = await this.productService.excluir(id)
          res.status(200).send('Produto: ' + id + '  Foi deletado com Sucesso!!!')
          
      }

  async alterar (req, res)  { 
          await this.productService.alterar(req.body);
          res.send('Dados do produto "'+ req.body.name + '" foram alterados com Sucesso!!!')
      }   

  async buscar(req, res) { 
          const {id} = req.params
          const produto = await this.productService.buscar(id);
          if (!produto){
              res.status(404).send('o Produto nao existe na base de Dados ')
          }
          else {
              res.json(produto)
          }

  

  }

  async buscarTodos(req, res) {
          const produtos = await this.productService.buscarTodos();
          // console.log(usuarios)
          res.json(produtos)
  }
}

module.exports = ProductController;
