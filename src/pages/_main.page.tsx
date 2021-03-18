import React, {
	ReactElement,
} from 'react'
import { BrowserRouter } from 'react-router-dom'
import { RootRoute } from '../routes/root.route'

const App: React.FC = (): ReactElement => (
	<div className='main-container'>
		<BrowserRouter>
			<RootRoute />
		</BrowserRouter>
	</div>
)

export default App
