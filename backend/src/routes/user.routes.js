/**
 * file: src/routes/user.routes.js
 * description: arquivo responsável pelas rotas do 'User'
 * data: 01/01/2021
 * author: Glaucia Lemos <Twitter: @glaucia_lemos86>
 */

const express = require('express');

const router = express.Router();
const auth = require('../middlewares/auth');
const userController = require('../controllers/user.controller');

// ==> Rota responsável por Criar um novo 'User': (POST): localhost:3000/api/v1/register
router.post('/register', userController.registerNewUser);

// ==> Rota responsável por realizar um novo login 'User': (POST): localhost:3000/api/v1/login
router.post('/login', userController.loginUser);

// ==> Rota responsável por retornar o perfil/profile do 'User': (GET): localhost:3000/api/v1/userProfile
router.get('/userProfile', auth, userController.returnUserProfile);

module.exports = router;
