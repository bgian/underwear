var validator = require('validator'),
    config = require('../../config')
 
export class Controller {

    validation() {
        return validator
    }

    config() {
        return config
    }

    getToken(headers) {
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
}

module.exports = {
    Controller: Controller
}