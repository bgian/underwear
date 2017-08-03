const mongoose = require('mongoose')

/**
 * User Schema
 */
module.exports = mongoose.Schema({
	admin: Boolean,
	name : String,
    email : {
    	type: String,
    	required: true,
    	unique: true
    },
    password : {
    	type: String,
    	required: true
    }
}, {
	timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }
})