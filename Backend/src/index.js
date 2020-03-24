const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();
app.use(cors());

app.use(express.json());
app.use(routes);
app.listen(3333);


/**
 * Metodos http:
 * 
 * GET: Buscar/listar uma informação do back-end
 * POST: Criar uma informação no back-end
 * PUT: Alterar uma informção no back-end
 * DELETE: Deletar uma informação no back-end
 */

 /**
  * Tipos de parâmetros:
  * 
  * Query Params: Parâmetros nomeados enviados na rota apos o simbolo de '?'(Filtros,paginação)
  * Route Params: Parâmetros utilizados para identificar recursos
  * Request Body: Corpor da requisição, utilizado  para criar ou alterar recursos
  */
 /**
  * SQL: MySQL, SQLite, PostgreSQL, Orclae, Microsoft SQL Server
  * NoSQL: MongoDB, CouchDB, etc
  */

  /**
   * Driver: SELECT * FROM users
   * Query Builder: table('users').select('*').where()
   */

