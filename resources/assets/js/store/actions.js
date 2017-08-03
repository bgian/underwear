import * as types from './mutation-types'


/**
 * Update the user information
 * 
 * @param  {function} store.commit
 * @param  {object} team
 */

export const setUser = ({ commit }, user) => {
	commit(types.SET_USER, { user })
}
