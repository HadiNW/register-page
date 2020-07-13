import AuthActionTypes from './auth.types'

const INIT_STATE = {
	isLoading: false,
	errorMessage: null,
	isSuccess: false
}

const authReducer = (state = INIT_STATE, action) => {
	switch (action.type) {
		case AuthActionTypes.AUTH_REGISTRATION_START:
			return {
				...state,
				isLoading: true,
				isSuccess: false,
				errorMessage: null
			}

		case AuthActionTypes.AUTH_REGISTRATION_SUCCESS:
			return {
				...state,
				isLoading: false,
				isSuccess: true,
				errorMessage: null
			}
		case AuthActionTypes.AUTH_REGISTRATION_FAILURE:
			return {
				...state,
				isLoading: false,
				isSuccess: false,
				errorMessage: action.payload
			}
		default:
			return state
	}
}

export default authReducer
