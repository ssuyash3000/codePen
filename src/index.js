import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import { BrowserRouter as Router } from 'react-router-dom'
import {Provider} from 'react-redux'
import Store from './context/store'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <React.StrictMode>
        {/* this will act as a data provider for the complete app */}
        <Provider store={Store}>
        <Router>
        <App/>
        </Router>
        </Provider>
    </React.StrictMode>
)