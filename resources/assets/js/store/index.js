import * as getters from './getters'
import * as actions from './actions'
import mutations from './mutations'

/**
 * Main applications state
 * 
 * @type {object}
 */

const state = {
    user: false
}

export default new Vuex.Store({
	state,
	getters,
	actions,
	mutations
})