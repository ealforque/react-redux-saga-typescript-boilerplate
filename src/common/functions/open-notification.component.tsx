import { notification } from 'antd'

type NotificationType = {
	success: 'success'
	error: 'error'
	warning: 'warning'
	info: 'info'
}

const OpenNotification = (
	type: keyof NotificationType,
	message: string,
) => {
	notification[type]({
		message: message,
	})
}

export default OpenNotification
