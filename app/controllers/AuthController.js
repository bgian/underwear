const User = require('../models/user')
const jwt = require('jsonwebtoken')

import {Controller} from "./Controller";


export class AuthController extends Controller {

	constructor() {
		super()
	}

	/**
	 * Function to register a user
	 * 
	 * @param  {object} req Request object
	 * @param  {object} res Response object
	 */
	register(req, res) {

		let validation = super.validate({
			name: 'required',
			email: 'email|required',
			password: 'required'
		}, req)

		if(!validation.success) {
			return res.status(422).json(validation)
		}

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

  			let token = jwt.sign(newUser, super.config().database.secret)
  			return res.json({
  				success: true, 
  				message: 'Successful created new user.',
  				token: 'JWT ' + token
  			})
		})
	}

	/**
	 * Function for logging in the user
	 * 
	 * @param  {object} req The request object
	 * @param  {object} res The response object
	 */
	login(req, res) {

		let validation = super.validate({
			name: 'required',
			email: 'email|required',
			password: 'required',
			teamSize: 'integer'
		}, req)

		if(!validation.success) {
			return res.status(422).json(validation)
		}

		User.findOne({
			email: req.body.email
		}, (err, user) => {
			if (err) {
				throw err
			}

			if (!user) {
	  			return res.status(401).json({
	  				success: false, 
	  				message: 'Authentication failed. User not found.'
	  			})
			} else {
				if(!user.comparePassword(req.body.password)) {
					return res.status(401).json({
	  					success: false, 
	  					message: 'Authentication failed. Wrong password.'
	  				})
				}

				let token = jwt.sign(user, super.config().database.secret)
		  		return res.json({
		  			success: true,
		  			message: 'Successful login for user.',
		  			token: 'JWT ' + token
		  		})
			}
		})
	}
}

module.exports = {
  AuthController: AuthController
};