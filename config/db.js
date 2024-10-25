//arquivo com a config de conexão com o banco
const config = require('../knexfile.js')
//iniciando o knex com esta configuração
const knex = require('knex')(config)

knex.migrate.latest([config])

module.exports = knex