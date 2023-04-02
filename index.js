const Server = require("./server")
const ManageDB = require('./src/app/database/ManageDB')


//ComonJS
class App{

  start() {

  //Servidor
  new Server().start()

  // Conexao com Banco de dados MongoDB
  ManageDB.connect()

  }
}

new App().start();