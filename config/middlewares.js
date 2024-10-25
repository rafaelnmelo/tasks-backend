//interceptar e analisar o body
const bodyParser = require('body-parser')
//habilita requisições de origens diferentes
const cors = require('cors')

module.exports = app => {
    app.use(bodyParser.json())
    app.use(cors({
        origin: '*'
    }))
}