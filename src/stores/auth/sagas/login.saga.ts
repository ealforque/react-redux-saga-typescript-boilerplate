import {
	put,
	call,
} from 'redux-saga/effects'
import { loginService } from '../services/login.service'
import ReturnCodes from '../../../common/enums/returncode.enums'
import { AuthenticationResults } from '../enums/auth.results.enum'

export function* loginSaga(
	payload: object,
): any {
	try {
		const response = yield call(
			loginService,
			payload,
		)

		if (
			response.code ===
			ReturnCodes.SUCCESS
		) {
			yield put({
				type:
					AuthenticationResults.LOGIN_SUCCESS,
				isAuth: true,
				token: response.data.authtoken,
				msge: response.msge,
				timestamp: response.time,
				status: response.code,
			})
		}

		if (
			response.code ===
			ReturnCodes.BAD_REQUEST
		) {
			yield put({
				type:
					AuthenticationResults.LOGIN_FAILED,
				isAuth: false,
				token: '',
				msge: response.msge,
				timestamp: response.time,
				status: response.code,
			})
		}

		if (
			response.code ===
			ReturnCodes.ERROR
		) {
			yield put({
				type:
					AuthenticationResults.LOGIN_ERROR,
				msge: response.msge,
				token: '',
				isAuth: false,
				timestamp: response.time,
				status: response.code,
			})
		}
	} catch (error) {
		yield put({
			type:
				AuthenticationResults.LOGIN_RUNTIME_ERROR,
			data: error,
		})
	}
}
