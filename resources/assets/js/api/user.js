import Api from './base'

const api = new Api({
    version: 1
})

export default {

	get() {
        return api.get('user')
    },

}