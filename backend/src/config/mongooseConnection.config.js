/**
 * file: src/config/mongooseConnection.config.js
 * description: arquivo responsável por fazer a conexão via mongoose'
 * data: 02/01/2021
 * author: Glaucia Lemos <Twitter: @glaucia_lemos86>
 */

const mongoose = require('mongoose');

// ==> Importar o arquivo: 'db.config.js'
const database = require('./db.config'); // ==> aqui é conexão local: MongoDB

mongoose.Promise = global.Promise;

// ==> Conexão Base de Dados:
mongoose.connect(database.local.localUrlDatabse, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
}).then(() => {
  console.log('A Base de Dados foi conectada com sucesso!');
}, (err) => {
  console.log(`Erro ao conectar com a Base de Dados...: ${err}`);
  process.exit();
});
