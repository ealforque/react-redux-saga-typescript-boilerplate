import logo from '../pages/assets/img/logo.svg'
import './assets/css/common.styles.css'

import {
	Layout,
} from 'antd'
import React, {
	ReactElement,
} from 'react'
import FooterComponent from '../components/footer.component'
import TopNavComponent from '../components/topnav.component'
import BreadcrumbsComponent from '../components/breadcrumbs.component'
import ContentContainer from '../container/content.container'

const {
	Header,
	Content,
} = Layout

const HomePage: React.FC = (): ReactElement => {
	return (
		<Layout className='layout'>
			<Header className='header'>
				<div className='logo-container'>
					<img
						className='logo'
						src={logo}
						alt='Logo'
					/>
				</div>
				<TopNavComponent />
			</Header>
			<Content
				className='content'
				style={{ padding: '0 50px' }}
			>
				<BreadcrumbsComponent />
				<ContentContainer />
			</Content>
			<FooterComponent />
		</Layout>
	)
}

export default HomePage
