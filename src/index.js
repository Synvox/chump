import './index.css'

import 'babel-polyfill'

import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import { Router, Route, IndexRoute } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import { hashHistory } from 'react-router'

import store from './store'

import IndexScreen from './screens/index'
import LoginScreen from './screens/login'
import HomeScreen from './screens/home'
import RegisterScreen from './screens/register'

const history = syncHistoryWithStore(hashHistory, store)

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={IndexScreen}>
        <IndexRoute component={HomeScreen}/>
        <Route path="register" component={RegisterScreen}/>
        <Route path="login" component={LoginScreen}/>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
)
