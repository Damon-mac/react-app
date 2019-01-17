import React from 'react'
import ReactDom from 'react-dom'
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Login from './container/login/login'
import Register from './container/register/register'
import AuthRoute from './component/authroute/authroute'
import BossInfo from './container/bossinfo/bossinfo'
import Geniusinfo from './container/geniusinfo/geniusinfo'
import Chat from './component/chat/chat'
import Dashboard from './component/dashboard/dashboard'

import reducers from './reducer'
import './config'
import './index.less'

const store = createStore(reducers, compose(
  applyMiddleware(thunk),
  window.__REDUX_DEVTOOLS_EXTENSION__?window.__REDUX_DEVTOOLS_EXTENSION__():f=>f
))

ReactDom.render(
  (<Provider store={store}>
    <BrowserRouter>
      <div>
        <AuthRoute/>
        <Switch>
          <Route path='/bossinfo' component={BossInfo}/>
          <Route path='/geniusinfo' component={Geniusinfo}/>
          <Route path='/login' component={Login}/>
          <Route path='/register' component={Register}/>
          <Route path='/chat/:user' component={Chat}></Route>
          <Route component={Dashboard}/>
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>),
  document.getElementById('root')
)
