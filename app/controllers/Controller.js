var validator = require('validator'),
    config = require('../../config'),
    async = require("async"),
    validation = require('../services/validation').default
 
export class Controller {

   validate(fields, req) {
        let fieldsErrors = {}
        Object.keys(fields).forEach((field) => {
            let errors = new validation().validateField(field, fields[field].split('|'), req)
            if(errors) {
                fieldsErrors[field] = errors
            }
        })

        if(Object.keys(fieldsErrors).length > 0) {
            return {success: false, errors: fieldsErrors}
        }else{
            return {success: true}
        }
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