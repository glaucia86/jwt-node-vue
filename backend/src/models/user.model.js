/**
 * file: src/models/user.model.js
 * description: arquivo responsavel pelo modelo da classe 'User'
 * data: 01/01/2021
 * author: Glaucia Lemos <Twitter: @glaucia_lemos86>
 */

const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const { Schema } = mongoose;

const userSchema = new Schema({
  name: { type: String, maxlength: 50, required: true },
  email: { type: String, maxlength: 30, required: true },
  password: { type: String, required: true },
  tokens: [
    {
      token: { type: String, required: true },
    },
  ],
}, {
  timestamps: true,
  collection: 'users',
});

// ==> Esse método irá fazer o 'hash' da senha antes de salvar o modelo da classe 'User'
userSchema.pre('save', async function (next) {
  const user = this;
  if (user.isModified('password')) {
    user.password = await bcrypt.hash(user.password, 8);
  }
  next();
});

// ==> Esse método irá criar (gerar) uma autenticação auth para o 'User'
userSchema.methods.generateAuthToken = async function () {
  const user = this;
  const token = jwt.sign({ _id: user._id, name: user.name, email: user.email }, 'secret');
  user.tokens = user.tokens.concat({ token });
  await user.save();
  return token;
};

// ==> Esse método irá fazer uma pesquisa por um 'user' por 'email' e 'password'
userSchema.statics.findByCredentials = async (email, password) => {
  const user = await User.findOne({ email });
  console.log(user);
  if (!user) {
    throw new Error({ error: 'Login inválido!' });
  }
  const isPasswordMatch = await bcrypt.compare(password, user.password);
  if (!isPasswordMatch) {
    throw new Error({ error: 'Login inválido!' });
  }
  return user;
};

const User = mongoose.model('User', userSchema);

module.exports = User;
