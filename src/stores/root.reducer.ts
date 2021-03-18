import { combineReducers } from 'redux'

import { authReducer } from './auth/reducers/auth.reducer'

const RootReducer = combineReducers({
	authState: authReducer,
})

export default RootReducer
