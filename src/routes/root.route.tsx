import {
	Redirect,
	Route,
	Switch,
} from 'react-router-dom'
import LoginPage from '../pages/login.page'
import Error404 from '../pages/404.page'
import HomePage from '../pages/home.page'
import Config from '../config/environment.config'

const isAuthenticated = (): boolean => {
	if (
		localStorage.getItem(
			Config.JWT_HEADER,
		)
	) {
		return true
	}
	return false
}

export const RootRoute = () => (
	<Switch>
		<Route
			exact
			path='/login'
			render={() =>
				isAuthenticated() ? (
					<Redirect to='/' />
				) : (
					<LoginPage />
				)
			}
		/>

		<Route
			exact
			path='/'
			render={() =>
				isAuthenticated() ? (
					<HomePage />
				) : (
					<Redirect to='/login' />
				)
			}
		/>

		<Route component={Error404} />
	</Switch>
)
