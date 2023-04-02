const mongoose = require('mongoose')

class ManageDB {

    static async connect(){
        //Conexao com MongoDB utilizando .env
        await mongoose.connect('mongodb+srv://usuAPI:FONu1BiMbsz4keU2@escola.w9ahhct.mongodb.net/escola?retryWrites=true&w=majority',
        {useNewUrlParser: true, useUnifiedTopology: true}).catch((err)=>{
            console.log(process.env.MONGODB_REMOTO_KEY)
            console.log("Erro na conexao com MongoDB")
        });

            console.log('CONECTADO AO BANCO')
    }

    static async close() {
        await mongoose.connection.close().catch((err)=>{
            console.log("Erro ao fechar o Banco com MongoDB")
        });

        console.log('Banco fechado com sucesso')
    }

}

module.exports = ManageDB


