//vendors
import 'normalize.css'
//styles
import './sass/style.sass'

import './js/main'
//react
import React from 'react'
import {render} from 'react-dom'

import App from './components/App.jsx'

render(<App />, document.getElementById('app'))