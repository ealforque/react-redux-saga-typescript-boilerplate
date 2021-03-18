import '../pages/assets/css/common.styles.css'

import {
	Card,
	Divider,
	Table,
	Typography,
} from 'antd'
import React, {
	ReactElement,
} from 'react'

const ContentContainer: React.FC = (): ReactElement => {
	interface Item {
		key: string
		firstname: string
		lastname: string
		email: string
		contact_no: string
		restrictions: string
		verified_at: string
		status: string
	}

	const data: Item[] = []
	for (let i = 0; i < 100; i++) {
		data.push({
			key: i.toString(),
			firstname: `First Name ${i}`,
			lastname: `Last Name ${i}`,
			email: `Email ${i}`,
			contact_no: `Contact No ${i}`,
			restrictions: `Restrictions ${i}`,
			verified_at: `Verified At ${i}`,
			status: `Status ${i}`,
		})
	}

	const handleEdit = () => {
		alert('edit')
	}

	const columns = [
		{
			title: 'First Name',
			dataIndex: 'firstname',
			editable: true,
		},
		{
			title: 'Last Name',
			dataIndex: 'lastname',
			editable: true,
		},
		{
			title: 'Email',
			dataIndex: 'email',
			editable: true,
		},
		{
			title: 'Contact #',
			dataIndex: 'contact_no',
			editable: true,
		},
		{
			title: 'Restrictions',
			dataIndex: 'restrictions',
			editable: true,
		},
		{
			title: 'Verified At',
			dataIndex: 'verified_at',
		},
		{
			title: 'Status',
			dataIndex: 'status',
		},
		{
			title: 'Actions',
			dataIndex: 'actions',
			align: 'center' as 'center',
			render: (record: Item) => {
				return (
					<>
						<Typography.Link
							onClick={handleEdit}
						>
							Edit
						</Typography.Link>
						<Divider type='vertical' />
						<Typography.Link
							onClick={handleEdit}
						>
							Delete
						</Typography.Link>
					</>
				)
			},
		},
	]

	return (
		<Card title='Users'>
			<Table
				bordered
				dataSource={data}
				columns={columns}
				pagination={{
					position: ['bottomCenter'],
				}}
			/>
		</Card>
	)
}

export default ContentContainer
