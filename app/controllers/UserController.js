const User = require('../models/user')
const jwt = require('jsonwebtoken')

import {Controller} from "./Controller";


export class UserController extends Controller {

	constructor() {
		super()
	}

	index(req, res) {
		var token = super.getToken(req.headers);
		if (token) {
			var decoded = jwt.decode(token, super.config().secret);
			User.findOne({
				email: decoded._doc.email
			}, function(err, user) {
				if (err) throw err;

				if (!user) {
					return res.status(403).send({success: false, msg: 'Authentication failed. User not found.'});
				} else {
					res.json({success: true, user: user});
				}
			});
		} else {
			return res.status(403).send({success: false, msg: 'No token provided.'});
		}
	}
}

module.exports = {
  UserController: UserController
};