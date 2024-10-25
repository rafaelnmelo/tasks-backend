const express = require('express')
const bodyParser = require('body-parser')
const db = require('./config/db') //*knex
const consign = require('consign')

const app = express()
//forma alternativa importando e instanciando ao mesmo tempo
// const app = require('express')()

//centralizar informações dentro de app pelos multiplos módulos(arquivos)
consign()
    .then('./config/middlewares.js')
    .then('./api')
    .then('./config/routes.js')
    .into(app)

//acessar o knex por todo os módulos
app.db = db

app.listen(3000, () => {
    console.log('Backend executando...')
})