const express = require('express')
const app = express()
// const app = require('express')() //forma resumida

app.get('/', (req, res) => {
    res.status(200).send('Meu Backend!')
})

app.listen(3000, () => {
    console.log('Backend executando...')
})