import { Menu } from 'antd'
import SubMenu from 'antd/lib/menu/SubMenu'
import React, {
	ReactElement,
	useEffect,
} from 'react'
import {
	useDispatch,
	useSelector,
} from 'react-redux'
import { useHistory } from 'react-router'
import ReturnCodes from '../common/enums/returncode.enums'
import OpenNotification from '../common/functions/open-notification.component'
import { logoutUser } from '../stores/auth/actions/auth.action'
import { AuthenticationResults } from '../stores/auth/enums/auth.results.enum'
import { IAuthentication } from '../stores/auth/interfaces/auth.interface'
import {
	BarcodeOutlined,
	DashboardOutlined,
	TeamOutlined,
	LogoutOutlined,
} from '@ant-design/icons'

const TopNavComponent: React.FC = (): ReactElement => {
	const { push } = useHistory()
	const dispatch = useDispatch()

	const authState = useSelector(
		(state: {
			authState: IAuthentication
		}) => state.authState,
	)

	const handleLogout = () => {
		dispatch(logoutUser())
	}

	useEffect(() => {
		if (
			authState.status !==
			ReturnCodes.UNPROCESSED_REQUEST
		) {
			if (!authState.isAuthenticated) {
				OpenNotification(
					'success',
					authState.message,
				)
				push('/login')
			} else {
				if (
					authState.result !==
					AuthenticationResults.LOGIN_SUCCESS
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
		<Menu
			mode='horizontal'
			selectedKeys={[
				'admin',
				'admin-users',
			]}
		>
			<Menu.Item
				key='dashboard'
				icon={<DashboardOutlined />}
			>
				Dashboard
			</Menu.Item>
			<SubMenu
				key='warhouse'
				icon={<BarcodeOutlined />}
				title='Warehouse'
			>
				<Menu.ItemGroup title='Inventory'></Menu.ItemGroup>
			</SubMenu>
			<SubMenu
				key='admin'
				icon={<BarcodeOutlined />}
				title='Administration'
			>
				<Menu.ItemGroup title='User Management'>
					<Menu.Item
						key='admin-users'
						icon={<TeamOutlined />}
					>
						Users
					</Menu.Item>
				</Menu.ItemGroup>
			</SubMenu>
			<Menu.Item
				style={{ float: 'right' }}
				icon={<LogoutOutlined />}
				onClick={handleLogout}
			>
				Logout
			</Menu.Item>
		</Menu>
	)
}

export default TopNavComponent
