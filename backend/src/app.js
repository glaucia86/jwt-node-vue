/**
 * file: app.js
 * description: arquivo responsável por fazer a conexão com arquivo 'server.js'
 * data: 01/01/2021
 * author: Glaucia Lemos <Twitter: @glaucia_lemos86>
 */

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const morgan = require('morgan');

const app = express();

// ==> Rotas da API:
const index = require('./routes/index');
// TODO: Declarar rota user.routes.js

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));
app.use(morgan('dev'));
app.use(cors());

app.use(index);
// TODO: Incluir a chamada da rota 'user.routes.js'

module.exports = app;
