import moment from 'moment'
import ReturnCodes from '../../../common/enums/returncode.enums'
import Config from '../../../config/environment.config'

export const logoutService = (): any => {
	localStorage.removeItem(
		Config.JWT_HEADER,
	)

	return {
		msge:
			'Successfully logged out user',
		token: '',
		isAuth: false,
		timestamp: moment()
			.unix()
			.valueOf(),
		status: ReturnCodes.SUCCESS,
	}
}
