var validator = require('validator')

export default class Validation {

	validateField(field, options, request)
	{
		let fieldErrors = []
		let input = request.body[field]

		for(let i = 0; i < options.length; i++) {
			let optionArray = options[i].split(':')
			let option = optionArray[0]
			
			if(option == 'required') {
				if(this.isRequired(input)) {
					fieldErrors.push('The ' + field + ' field is required.')
				}
			}

			if(option == 'email') {
				if(!this.isEmail(input)) {
					fieldErrors.push('The ' + field + ' field is not a valid email address.')
				}
			}

			if(option == 'integer') {
				if(!this.isInt(input)) {
					fieldErrors.push('The ' + field + ' field needs to be a integer.')
				}
			}

			if(option == 'unique') {
				if(optionArray[1]) {
					let params = optionArray[1].split(',')
					if(! this.isUnique(input, params[0], params[1])) {
						fieldErrors.push('The ' + field + ' field is already in use.')
					}
				}
			}
		}

		if(fieldErrors.length > 0) {
			return fieldErrors
		}else{
			return false
		}
	}


	isRequired(input = false) 
	{
		if(!input || validator.isEmpty(input)) {
			return true
		}
		return false
	}

	isInt(input = false) 
	{
		if(!input || !validator.isInt(input)) {
			return false
		}

		return true
	}


	isEmail(input = false) 
	{
		if(!input || !validator.isEmail(input)) {
			return false
		}

		return true
	}

	isUnique(input, model, field)
	{
		if(!input) {
			return true
		}

        let requiredModel = require(`../models/${model}`)
        requiredModel.count().where(field, input).then(results => {
            if(results > 0) {
                return false
                console.log('the email was not unique')
            } else {
            	return true
            }
        })
	}



}