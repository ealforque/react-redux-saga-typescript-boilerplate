import { takeLatest } from 'redux-saga/effects'
import { loginSaga } from '../sagas/login.saga'

import { AuthenticationActions } from '../enums/auth.actions.enum'

export default function* watchLoginSaga() {
	yield takeLatest(
		AuthenticationActions.LOGIN_USER,
		loginSaga,
	)
}
