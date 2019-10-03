//sass
import 'normalize.css'
import './sass/style.sass'
//js
import './js/main'
//img
import './js/files'
//react
import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter  } from "react-router-dom"

import App from './components/app/App.jsx'

ReactDOM.render(
    <HashRouter >
        <App />
    </HashRouter >,
    document.getElementById('app')
)