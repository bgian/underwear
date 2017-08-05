const middleware = require('../app/middleware')
const passport = require('passport')
const userController = require('../app/controllers/userController')

var AuthController = require("../app/controllers/AuthController");



module.exports = (app, passport) => {

    //Authentication routes - Uses passport
    app.post('/api/v1/auth/register', AuthController.register)
    app.post('/api/v1/auth/login', AuthController.login)
    app.get('/api/v1/user', passport.authenticate('jwt', { session: false}), userController.index)

}