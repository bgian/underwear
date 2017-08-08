const routes = require('../routes/web')

module.exports = (app, passport) => {
    routes.forEach(route => {
    	app.get(route.path, (req, res) => {  res.render('app.html') })
    })
}