/**
 * file: src/services/Api.js
 * data: 11/03/2021
 * description: arquivo responsável por inicializar o 'axios' e
 *  as requisições da url base dos HTTP's
 * author: Glaucia Lemos <twitter: @glaucia_lemos86>
 */

import axios from 'axios';

export default () => axios.create({
  // 'baseURL' do Back-End -> fará a comunicação do Front com o Back
  baseURL: 'http://localhost:3000/api/v1',
});
