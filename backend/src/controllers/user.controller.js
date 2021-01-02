/**
 * Arquivo: src/controllers/user.controller.js
 * Descrição: arquivo responsável pelo CRUD da classe: 'User'
 * Data: 01/01/2020
 * Author Glaucia Lemos <Twitter: @glaucia_lemos86>
 */

const User = require('../models/user.model');

// ==> Usando conceito de Async e Await

// ==> Método responsável por Criar um novo 'User':
exports.registerNewUser = async (req, res) => {
  try {
    // => Antes vamos fazer uma verificação se o usuário já possui algum e-mail já cadastrado:
    let isUser = await User.find({ email: req.body.email });
    console.log(isUser);
    if (isUser.length >= 1) {
      return res.status(409).json({ message: 'Sorry! This email is already registered!' });
    }

    const newUser = new User(req.body);
    const user = await newUser.save();
    const token = await newUser.generateAuthToken(); // ==> Aqui chamaremos o método que criamos no model
    res.status(201).json({ message: 'User created successfully!', user, token });
  } catch (err) {
    res.status(400).json({ err: err });
  }
};