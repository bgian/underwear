import * as types from './mutation-types'

export default {

	/**
	 * When the users information has been collected
	 */
	[types.SET_USER] (state, { user }) {
		setUser(state, user)
	}

}

/**
 * Update the users state object
 * 
 * @param  {object} state 
 * @param  {object} userData
 */

const setUser = (state, userData) => {
	state.user = userData
}