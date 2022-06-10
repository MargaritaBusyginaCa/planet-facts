import React from "react";
import reactDom from "react-dom"
import App from './components/App'

import {BrowserRouter as Router} from 'react-router-dom'

const root = reactDom.createRoot(document.getElementById('root'))
root.render(
    <Router>
    <App/>
    </Router>
)