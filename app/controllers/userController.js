const User = require('../models/user')
const Validator = require('validator')
const jwt = require('jsonwebtoken')
const config = require('../../config')

exports.index = (req, res) => {
	var token = getToken(req.headers);
	if (token) {
		var decoded = jwt.decode(token, config.secret);
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

getToken = function (headers) {
	if (headers && headers.authorization) {
		var parted = headers.authorization.split(' ');
		if (parted.length === 2) {
			return parted[1];
		} else {
			return null;
		}
	} else {
		return null;
	}
}