const middleware = require('../app/middleware')
const passport = require('passport')
const authController = require('../app/controllers/authController')
const userController = require('../app/controllers/userController')

module.exports = (app, passport) => {

    //Authentication routes - Uses passport
    app.post('/api/v1/auth/register', authController.register)
    app.post('/api/v1/auth/login', authController.login)
    app.get('/api/v1/user', passport.authenticate('jwt', { session: false}), userController.index)

}