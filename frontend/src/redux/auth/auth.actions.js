import axiosInstance from '../../config/axios'
import AuthActionTypes from './auth.types'

export const authRegisterUser = (user) => async (dispatch) => {
	dispatch({
		type: AuthActionTypes.AUTH_REGISTRATION_START,
	})

	try {
		const { data } = await axiosInstance.post('/api/auth/register', user)
		dispatch({
			type: AuthActionTypes.AUTH_REGISTRATION_SUCCESS,
			payload: data,
		})
	} catch (e) {
		console.log({e})
		let message = null
		if (e.response && e.response.data) {
			message = e.response.data.errors.message || 'Oops ... something went wrong'
		} else {
			message = e.response.statusText
		}
		dispatch({
			type: AuthActionTypes.AUTH_REGISTRATION_FAILURE,
			payload: message,
		})
	}
}