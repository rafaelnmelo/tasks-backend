const express = require('express')
const bodyParser = require('body-parser')

const app = express()
//forma alternativa importando e instanciando ao mesmo tempo
// const app = require('express')()

app.use(bodyParser.json())

app.get('/', (req, res, next) => {
    console.log('Função 0')
    next()
})

app.get('/', (req, res, next) => {
    console.log('Função 1')
    res.status(200).send('<h1>Meu Backend!</h1>')
    next()
})

app.get('/', (req, res) => {
    console.log('Função 2')
})

app.listen(3000, () => {
    console.log('Backend executando...')
})