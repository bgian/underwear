var validator = require('validator'),
    config = require('../../config')
 
export class Controller {

    validate(fields, req) {
        let errors = {};
        Object.keys(fields).forEach((field) => {
            let options = fields[field].split('|')
            let fieldErrors = []

            options.forEach((optionStr) => {
                let optionArray = optionStr.split(':')
                let option = optionArray[0]

                if(option == 'required') {
                    if(!req.body[field] || validator.isEmpty(req.body[field])) {
                        fieldErrors.push('The ' + field + ' field is required.') 
                    }
                }

                if(option == 'email') {
                    if(req.body[field] && !validator.isEmail(req.body[field])) {
                        fieldErrors.push('The ' + field + ' needs to be a valid email.')
                    }
                }

                if(option == 'integer') {
                    if(req.body[field] && !validator.isInt(req.body[field])) {
                        fieldErrors.push('The ' + field + ' needs to be an integer.')
                    }
                }

                if(option == 'unique') {
                    if(optionArray[1]) {
                        let params = optionArray[1].split(',')
                        let dbTable = params[0]
                        let dbField = params[1]   
                    }
                }
            })

            if(fieldErrors.length > 0) {
                errors[field] = fieldErrors
            }
        })

        if(Object.keys(errors).length > 0) {
            return {success: false, errors}
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