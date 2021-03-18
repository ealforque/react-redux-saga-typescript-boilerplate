import { AuthenticationActions } from '../enums/auth.actions.enum'

export const loginUser = (
	credentials: object,
) => {
	return {
		type:
			AuthenticationActions.LOGIN_USER,
		credentials,
	}
}

export const logoutUser = () => {
	return {
		type:
			AuthenticationActions.LOGOUT_USER,
	}
}
