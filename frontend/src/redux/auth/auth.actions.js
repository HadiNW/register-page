import axiosInstance from '../../config/axios'
import AuthActionTypes from './auth.types'

export const authRegisterUser = (user) => async (dispatch) => {
	dispatch({
		type: AuthActionTypes.AUTH_REGISTRATION_START,
	})

	try {
		const { data } = await axiosInstance.post('/api/auth/register', user)
		console.log(data)
		dispatch({
			type: AuthActionTypes.AUTH_REGISTRATION_SUCCESS,
			payload: data,
		})
	} catch (e) {
		console.log({e})
		let message = e.response.statusText
		if (e.response && e.response.data) {
			message = e.response.data.errors.message
		}
		console.log({e}, '[][][][]', message)
		dispatch({
			type: AuthActionTypes.AUTH_REGISTRATION_FAILURE,
			payload: message,
		})
	}
}