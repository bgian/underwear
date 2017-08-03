// Set up ======================================================================
const express = require('express')
const app = express()
const port = process.env.PORT || 8080
const path = require('path')
const mongoose = require('mongoose')
const passport = require('passport')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
const session = require('express-session')
const config = require('../config')
require('dotenv').config()

// Configuration ===============================================================
mongoose.connect(config.database.url + config.database.db);


// Setup view engine ===============================================================
app.engine('html', require('ejs').renderFile)
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname + '/../resources/views/'))


// Setup our express application ============================================================
app.use(cookieParser())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(express.static('public'))

// Setup passport configuration for authentication ============================================================
require('../config/passport')(passport)
app.use(session({ 
	secret: process.env.APP_ID,
	resave: true,
    saveUninitialized: true
}))
app.use(passport.initialize())
app.use(passport.session())

// routes ======================================================================
require('../routes/api.js')(app, passport)
require('../routes/server.js')(app, passport)

module.exports = app