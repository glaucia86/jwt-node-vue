/**
 * file: server.js
 * description: arquivo responsável por toda a configuração e execução da aplicação
 * data: 01/01/2021
 * author: Glaucia Lemos <Twitter: @glaucia_lemos86>
 */

const app = require('./src/app');

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log('Aplicação executando na porta...: ', port);
});
