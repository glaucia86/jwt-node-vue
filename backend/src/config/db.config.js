/**
 * file: src/config/db.config.js
 * description: arquivo responsável por fazer a conexão com a base de dados: MongoDB'
 * data: 01/01/2021
 * author: Glaucia Lemos <Twitter: @glaucia_lemos86>
 */

const dotenv = require('dotenv');

dotenv.config();

module.exports = {
  local: {
    localUrlDatabse: process.env.DB_URI,
    secret: 'password',
  },
};
