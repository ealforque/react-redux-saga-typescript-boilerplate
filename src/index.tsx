import React from 'react'
import ReactDOM from 'react-dom'
import 'antd/dist/antd.css'

import './index.css'

import CreateStore from './stores/root.store'
import { Provider } from 'react-redux'
import Main from './pages/_main.page'

const store = CreateStore()

ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<Main />
		</Provider>
	</React.StrictMode>,
	document.getElementById('root'),
)
