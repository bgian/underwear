const JwtStrategy = require('passport-jwt').Strategy
const ExtractJwt = require('passport-jwt').ExtractJwt
const User = require('../app/models/user')
const config = require('../config')


module.exports = (passport) => {
  let opts = {}
  opts.jwtFromRequest = ExtractJwt.fromAuthHeader()
  opts.secretOrKey = config.database.secret

    /**
     * Used to serialize the users session
     * 
     * @param  {object} user  The user object
     * @param  {function} done
     */
    passport.serializeUser(function(user, done) {
        done(null, user.id)
    })

    /**
     * Used to deserialize the user
     * @param  {integer} id    the ID of the desired user
     * 
     * @param  {function} done
     */
    passport.deserializeUser((id, done) => {
        User.findById(id, (err, user) => {
            done(err, user);
        })
    })



    passport.use(new JwtStrategy(opts, (jwt_payload, done) => {
        User.findOne({id: jwt_payload.id}, (err, user) => {
            if (err) {
                return done(err, false)
            }
          
            if (user) {
                done(null, user)
            } else {
                done(null, false)
            }
        })
    }))
}