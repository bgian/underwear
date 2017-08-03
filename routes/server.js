const routes = require('./web')

module.exports = (app, passport) => {
    for(let i = 0; i < routes.length; i++) {
        app.get(routes[i].path, (req, res) => {  res.render('app.html') })
    }
}