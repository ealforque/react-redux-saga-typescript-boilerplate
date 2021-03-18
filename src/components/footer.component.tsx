import '../pages/assets/css/common.styles.css'

import { Footer } from 'antd/lib/layout/layout'
import { ReactElement } from 'react'

const FooterComponent: React.FC = (): ReactElement => {
	return (
		<Footer className='footer'>
			Application © 2021
		</Footer>
	)
}

export default FooterComponent
