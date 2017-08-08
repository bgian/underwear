require('dotenv').config()

module.exports = {
	secret: process.env.APP_ID,
	db: process.env.DB_NAME,
	url: process.env.DB_HOST + '://' + process.env.DB_USER + ':' + process.env.DB_PASS + '@' + process.env.DB_SERVER + ':' + process.env.DB_PORT + '/'
}