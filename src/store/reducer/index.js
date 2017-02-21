import { routerReducer } from 'react-router-redux'
import { combineReducers } from 'redux'

import MessageReducer from './message'
import UserReducer from './user'

export default combineReducers({
  routing: routerReducer,
  user: UserReducer,
  messages: MessageReducer
})
