/**
 * file: src/config/auth.config.js
 * description: arquivo responsável por fazer a conexão com a base de dados: MongoDB'
 * data: 01/01/2021
 * author: Glaucia Lemos <Twitter: @glaucia_lemos86>
 */

const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  try {
    const token = req.headers.authorization.replace('Bearer ', '');
    console.log(token);
    const decoded = jwt.verify(token, 'secret');
    req.userData = decoded;
    next();
  } catch (err) {
    return res.status(401).json({
      message: "Falha na Autenticação!"
    });
  }
};