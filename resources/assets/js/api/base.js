import axios from 'axios'
import Cookies from '../cookies'

class Api {

    /**
     * Constuctor
     *
     * @param { object } data
     */

    constructor(data) {
        this.data = data;
        this.cookies = new Cookies()
        for (let field in data) {
            this[field] = data[field];
        }
    }

    /**
     * Post request helper
     *
     * @param {string} url
     * @param {object} data
     * @param  {Boolean} token Optional auth token
     * @return {promise}
     */

    post(url, data) {
        return this.send('post', url, data);
    }


    /**
     * Put request helper
     *
     * @param {string} url
     * @param {object} data
     * @param  {Boolean} token Optional auth token
     * @return {promise}
     */

    put(url, data) {
        return this.send('put', url, data);
    }

    /**
     * Get request helper
     *
     * @param {string} url
     * @param  {Boolean} token Optional auth token
     * @return {promise}
     */

    get(url) {
        return this.send('get', url, {});
    }

    /**
     * Delete request helper
     * 
     * @param  {string}  url 
     * @param  {Boolean} token Optional auth token
     * @return {promise}
     */
    
    delete(url) {
        return this.send('delete', url, {});
    }

    /**
     * Sending requests to the server
     *
     * @param {string} requestType get|post|update|delete
     * @param {string} url
     * @param {object} body
     * @param  {Boolean} token Optional auth token
     * @return {promise}
     */

    send(requestType, url, body = {}) {
        const vm = this;
        const accessToken = this.cookies.getItem('token');
        if(accessToken) {
            axios.defaults.headers.common = {
                "Authorization": accessToken
            };
        }

        return new Promise((resolve, reject) => {
            axios[requestType]('/api/v' + vm.version + '/' + url, body, {
                onUploadProgress: (progressEvent) => {
                    Events.$emit(_.camelCase(url) + 'Progress', progressEvent);
                }
            })
            .then((response) => {
                resolve(response.data);
            })
            .catch((error) => {
                console.log(error)
                reject(error.response.data);
            })
        })
    }
}

export default Api;