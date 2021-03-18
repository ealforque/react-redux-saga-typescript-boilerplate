import { fork } from 'redux-saga/effects'
import watchLoginSaga from './auth/watchers/login.watcher'
import watchLogoutSaga from './auth/watchers/logout.watcher'

export default function* startForman() {
	yield fork(watchLoginSaga)
	yield fork(watchLogoutSaga)
}
