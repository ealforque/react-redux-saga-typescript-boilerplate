import logo from '../pages/assets/img/logo.svg'
import './assets/css/login.styles.css'

import {
	Form,
	Input,
	Button,
	Layout,
} from 'antd'
import React, {
	ReactElement,
	useEffect,
	useState,
} from 'react'
import {
	useDispatch,
	useSelector,
} from 'react-redux'

import { loginUser } from '../stores/auth/actions/auth.action'
import { IAuthentication } from '../stores/auth/interfaces/auth.interface'
import { Content } from 'antd/lib/layout/layout'
import OpenNotification from '../common/functions/open-notification.component'
import { useHistory } from 'react-router-dom'
import FooterComponent from '../components/footer.component'
import ReturnCodes from '../common/enums/returncode.enums'
import { AuthenticationResults } from '../stores/auth/enums/auth.results.enum'

const layout = {
	labelCol: {
		span: 10,
	},
	wrapperCol: {
		span: 4,
	},
}

const tailLayout = {
	wrapperCol: {
		offset: 10,
		span: 4,
	},
}

const LoginPage: React.FC = (): ReactElement => {
	type ICredentials = {
		email: string
		password: string
	}

	const { push } = useHistory()
	const dispatch = useDispatch()

	const authState = useSelector(
		(state: {
			authState: IAuthentication
		}) => state.authState,
	)

	const [
		credentials,
		setCredentials,
	] = useState<ICredentials>({
		email: '',
		password: '',
	})

	const handleEmailChange = (
		e: React.ChangeEvent<HTMLInputElement>,
	) => {
		setCredentials({
			...credentials,
			email: e.target.value,
		})
	}

	const handlePasswordChange = (
		e: React.ChangeEvent<HTMLInputElement>,
	) => {
		setCredentials({
			...credentials,
			password: e.target.value,
		})
	}

	const handleSubmit = () => {
		dispatch(loginUser(credentials))
	}

	const handleSubmitFailed = () => {
		OpenNotification(
			'error',
			'Login submission failed',
		)
	}

	useEffect(() => {
		if (
			authState.status !==
			ReturnCodes.UNPROCESSED_REQUEST
		) {
			if (authState.isAuthenticated) {
				OpenNotification(
					'success',
					authState.message,
				)
				push('/')
			} else {
				if (
					authState.result !==
					AuthenticationResults.LOGOUT_COMPLETE
				) {
					OpenNotification(
						'error',
						authState.message,
					)
				}
			}
		}
	}, [authState, push])

	return (
		<Layout className='login-layout'>
			<Content>
				<div>
					<div className='login-logo-container'>
						<img
							src={logo}
							className='login-logo'
							alt='logo'
						/>
					</div>
					<Form
						{...layout}
						onFinish={handleSubmit}
						onFinishFailed={
							handleSubmitFailed
						}
					>
						<Form.Item
							label='Email'
							name='email'
							rules={[
								{
									required: true,
									message:
										'Please input your email',
								},
							]}
						>
							<Input
								value={
									credentials.email
								}
								onChange={
									handleEmailChange
								}
							/>
						</Form.Item>

						<Form.Item
							label='Password'
							name='password'
							rules={[
								{
									required: true,
									message:
										'Please input your password',
								},
							]}
						>
							<Input.Password
								value={
									credentials.password
								}
								onChange={
									handlePasswordChange
								}
							/>
						</Form.Item>

						<Form.Item {...tailLayout}>
							<Button
								type='primary'
								htmlType='submit'
							>
								Submit
							</Button>
						</Form.Item>
					</Form>
				</div>
			</Content>
			<FooterComponent />
		</Layout>
	)
}

export default LoginPage
