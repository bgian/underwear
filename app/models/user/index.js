const bcrypt = require('bcrypt-nodejs')
const mongoose = require('mongoose')
const userSchema = require('./schema')


/**
 * Generating a secure hash
 * 
 * @param  {string} password The users password
 * @return {string}          The hashed value of the password
 */
userSchema.methods.generateHash = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null)
}

/**
 * Validate a password
 * 
 * @param  {string} passw The users password
 * @param  {function} cb The callback function
 */
userSchema.methods.comparePassword = function(password) {
	var user = this;
    return bcrypt.compareSync(password, user.password);
}


// create the model for users
module.exports = mongoose.model('User', userSchema);