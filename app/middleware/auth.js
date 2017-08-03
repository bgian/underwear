/**
 * Check a user is authenticated
 * 
 * @param  {object}   req  The request object
 * @param  {object}   res  The repsonse object
 * @param  {Function} next 
 */
module.exports = (req, res, next) => {
    if (req.isAuthenticated())
        return next();

    res.redirect('/');
}