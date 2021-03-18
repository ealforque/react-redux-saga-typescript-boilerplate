import { Breadcrumb } from 'antd'
import { ReactElement } from 'react'

const BreadcrumbsComponent: React.FC = (): ReactElement => {
	return (
		<Breadcrumb
			style={{
				padding: '15px 25px',
				margin: '16px 0',
			}}
			separator='>'
		>
			<Breadcrumb.Item>
				Application
			</Breadcrumb.Item>
			<Breadcrumb.Item>
				Administration
			</Breadcrumb.Item>
			<Breadcrumb.Item>
				User Management
			</Breadcrumb.Item>
			<Breadcrumb.Item>
				Users
			</Breadcrumb.Item>
		</Breadcrumb>
	)
}

export default BreadcrumbsComponent
