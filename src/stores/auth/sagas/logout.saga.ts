import {
	put,
	call,
} from 'redux-saga/effects'
import { AuthenticationResults } from '../enums/auth.results.enum'
import { logoutService } from '../services/logout.service'

export function* logoutSaga(): any {
	const response = yield call(
		logoutService,
	)

	yield put({
		type:
			AuthenticationResults.LOGOUT_COMPLETE,
		isAuth: response.isAuth,
		token: response.token,
		msge: response.msge,
		timestamp: response.time,
		status: response.status,
	})
}
