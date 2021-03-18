import { takeLatest } from 'redux-saga/effects'
import { logoutSaga } from '../sagas/logout.saga'

import { AuthenticationActions } from '../enums/auth.actions.enum'

export default function* watchLogoutSaga() {
	yield takeLatest(
		AuthenticationActions.LOGOUT_USER,
		logoutSaga,
	)
}
