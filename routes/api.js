const middleware = require('../app/middleware')
const passport = require('passport')
import { AuthController } from '../app/controllers/AuthController'
import { UserController } from '../app/controllers/UserController'



module.exports = (app, passport) => {

    //Authentication routes - Uses passport
    app.post('/api/v1/auth/register', new AuthController().register)
    app.post('/api/v1/auth/login', new AuthController().login)
    app.get('/api/v1/user', passport.authenticate('jwt', { session: false}), new UserController().index)

}