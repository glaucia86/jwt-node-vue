/**
 * file: src/routes/index.js
 * description: arquivo responsável pela rota default da aplicação
 * data: 01/01/2021
 * author: Glaucia Lemos <Twitter: @glaucia_lemos86>
 */

const express = require('express');

const router = express.Router();

router.get('/api/v1', (req, res) => {
  res.status(200).send({
    success: true,
    message: 'Seja bem-vindo(a) a API Node.js + MongoDB + Azure!',
    version: '1.0.0',
  });
});

module.exports = router;
