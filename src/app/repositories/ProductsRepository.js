//Este tratamento do v4 uuid o proprio MongoDB faz por padrao
// const { v4 } = require('uuid');

const mongoose = require('mongoose');
const ProductSchema = require("../model/model")

class ProductRepositoryMongo {
      constructor(){
        this.model = ProductSchema
    }
    adicionar(produto){
        this.model.create(produto)
        console.log("Produto Salvo")
    }
    async excluir(_id){ 
        const query = await this.model.deleteOne({_id})
        return query
    }
    async alterar(_id){
        const query = await {_id: _id._id}
        this.model.findOneAndUpdate(query,  _id).exec()
    }
    async buscar(_id){
        try {
            const query = await this.model.findOne({_id})
            return query
        }
        catch (err) {
            console.log(err.message)
            return
        }

    }
    buscarTodos(produto){
        const query = this.model.find({produto})
        const promise = query.lean().exec()
        return promise;
    }
}


module.exports = ProductRepositoryMongo;
