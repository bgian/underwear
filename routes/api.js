const middleware = require('../app/middleware')
const authController = require('../app/controllers/authController')

module.exports = (app, passport) => {

    //Authentication routes - Uses passport
    app.post('/api/v1/auth/register', authController.register)
    app.post('/api/v1/auth/login', authController.login)

}