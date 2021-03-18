import ReturnCodes from '../../../common/enums/returncode.enums'
import Config from '../../../config/environment.config'

export const loginService = async (
	request: any,
) => {
	const LOGIN_API_ENDPOINT =
		'http://localhost:4000/auth/login'

	const parameters = {
		method: 'POST',
		headers: {
			'Content-Type':
				'application/json',
		},
		body: JSON.stringify(
			request.credentials,
		),
	}

	return await fetch(
		LOGIN_API_ENDPOINT,
		parameters,
	)
		.then((response) => {
			return response.json()
		})
		.then((json) => {
			if (
				json.code ===
				ReturnCodes.SUCCESS
			) {
				localStorage.setItem(
					Config.JWT_HEADER,
					json.data.authtoken,
				)
			}
			return json
		})
}
