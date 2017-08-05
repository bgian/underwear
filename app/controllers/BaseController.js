var express = require("express"),
    extend = require("extend"),
    validator = require('validator'),
    config = require('../../config')
 
export class BaseController {

	/**
	 * BaseController Contructor
	 * 
	 * @param  {object} basePath
	 */
    constructor(basePath) {
        this.prvBase = basePath
        this.prvRouter = express.Router()
        this.validator = validator
        this.config = config
    }
 	
 	/**
 	 * get the base path
 	 */
    get basePath() {
        return this.prvBase;
    }
 	
 	/**
 	 * Get the router
 	 */
    get router() {
        return this.prvRouter;
    }
}
