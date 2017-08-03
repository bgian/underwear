import Api from './base'

const api = new Api({
    version: 1
})

export default {

	register(data) {
        return api.post('auth/register', data)
    },

    login(data) {
        return api.post('auth/login', data)
    }

}