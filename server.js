const express = require('express')
const path = require('path')
const UsuariosRoutes = require("./src/app/routes/routes")


class Server{
    constructor(){
        this.app = express()
        this.usuariosRoutes = new UsuariosRoutes()
    }
    start() {
    
    // middlewares express
    this.app.use(express.json());
    this.app.use(express.static(path.join(__dirname,'public')));
    this.app.use(this.usuariosRoutes.router)

    //config das portas
    const port= process.env.PORT || 3000
    this.app.listen(port, function(){
        console.log(`Server Iniciado Na Porta: ${port}`);
    })
    }
}

module.exports = Server