import dotenv from 'dotenv'

dotenv.config()

const config = {
	JWT_HEADER:
		process.env.REACT_APP_JWT_HEADER ||
		'',
}

export default config
