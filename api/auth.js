const { authSecret } = require('../.env')
const jwt = require('jwt-simple')
const bcrypt = require('bcrypt-nodejs')
const { json } = require('body-parser')

//retornar função 'app' para o consign carregar 
//como os outros módulos
module.exports = app => {
    const signin = async (req, res) => {
        if (!req.body.email || !req.body.password) {
            return res.status(400)
                .send('Dados imcompletos')
        }

        const user = await app.db('users')
            .whereRaw("LOWER(email) = LOWER(?)", req.body.email)
            .first()

        if (user) {
            bcrypt.compare(req.body.password,
                user.password,
                (err, isMatch) => {
                    if(err || !isMatch) {
                        return res.status(401).send('Dados inválidos')
                    }
                    //valor que será armazenado no token
                    const payload = { id: user.id }

                    res.json({
                        name: user.name,
                        email: user.email,
                        token: jwt.encode(payload, authSecret)
                    })
                })
        } else {
            return res.status(400).send('Dados inválidos')
        }
    }

    return { signin }
}