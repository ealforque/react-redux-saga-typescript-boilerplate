import moment from 'moment'
import ReturnCodes from '../../../common/enums/returncode.enums'
import { AuthenticationResults } from '../enums/auth.results.enum'
import { IAuthentication } from '../interfaces/auth.interface'

const initialState = {
	authToken: '',
	isAuthenticated: false,
	message: 'unprocessed request',
	result: '',
	status:
		ReturnCodes.UNPROCESSED_REQUEST,
	timestamp: `${moment()
		.unix()
		.valueOf()}`,
}

export const authReducer = (
	state = { ...initialState },
	prop: any,
): IAuthentication | undefined => {
	switch (prop.type) {
		case AuthenticationResults.LOGIN_SUCCESS:
			return {
				authToken: prop.token,
				isAuthenticated: prop.isAuth,
				message: prop.msge,
				result:
					AuthenticationResults.LOGIN_SUCCESS,
				status: prop.status,
				timestamp: prop.timestamp,
			}
		case AuthenticationResults.LOGIN_FAILED:
			return {
				authToken: prop.token,
				isAuthenticated: prop.isAuth,
				message: prop.msge,
				result:
					AuthenticationResults.LOGIN_FAILED,
				status: prop.status,
				timestamp: prop.timestamp,
			}
		case AuthenticationResults.LOGIN_ERROR:
			return {
				authToken: prop.token,
				isAuthenticated: prop.isAuth,
				message: prop.msge,
				result:
					AuthenticationResults.LOGIN_ERROR,
				status: prop.status,
				timestamp: prop.timestamp,
			}
		case AuthenticationResults.LOGOUT_COMPLETE:
			return {
				authToken: prop.token,
				isAuthenticated: prop.isAuth,
				message: prop.msge,
				result:
					AuthenticationResults.LOGOUT_COMPLETE,
				status: prop.status,
				timestamp: prop.timestamp,
			}
		default:
			return state
	}
}
