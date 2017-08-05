const User = require('../models/user')
const jwt = require('jsonwebtoken')

var {BaseController} = require("./BaseController");


export default class AuthController extends BaseController {

	constructor(basePath) {
		super(basePath)
	}

	/**
	 * Function to register a user
	 * 
	 * @param  {object} req Request object
	 * @param  {object} res Response object
	 */
	register(req, res) {
		console.log(req)
		if (!req.body.email || !req.body.password || !req.body.name) {
			res.status(422).json({
				success: false, 
				message: 'Please pass email, password and name.'
			})
		} else {
			var newUser = new User()
			newUser.name = req.body.name
	  		newUser.email = req.body.email
	  		newUser.password = newUser.generateHash(req.body.password)

			newUser.save((err) => {
	  			if (err) {
	    			return res.status(422).json({
	    				success: false, 
	    				message: 'That email is already in use.'
	    			})
	  			}

	  			let token = jwt.sign(newUser, this.config.database.secret)
	  			res.json({
	  				success: true, 
	  				message: 'Successful created new user.',
	  				token: 'JWT ' + token
	  			})
			})
		}
	}

	/**
	 * Function for logging in the user
	 * 
	 * @param  {object} req The request object
	 * @param  {object} res The response object
	 */
	login(req, res) {
		console.log(this)
		User.findOne({
			email: req.body.email
		}, (err, user) => {
			if (err) {
				throw err
			}

			if (!user) {
	  			res.status(401).json({
	  				success: false, 
	  				message: 'Authentication failed. User not found.'
	  			})
			} else {
				if(!user.comparePassword(req.body.password)) {
					res.status(401).json({
	  					success: false, 
	  					message: 'Authentication failed. Wrong password.'
	  				})
				}

				let token = jwt.sign(user, this.config.database.secret)
		  		res.json({
		  			success: true,
		  			message: 'Successful login for user.',
		  			token: 'JWT ' + token
		  		})

			}
		})
	}
}