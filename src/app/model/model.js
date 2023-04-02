const mongoose = require('mongoose');
const Product = require('../domain/domain');
//Definindo a estrutura da collection 
const ProductSchema = mongoose.Schema(
     {
        name: String,
        price: String,
        category: String,
        subcategory: String
    });
    
//Objeto que contem os dados
ProductSchema.loadClass(Product)
module.exports = mongoose.model('Product', ProductSchema);

