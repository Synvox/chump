import { routerReducer } from 'react-router-redux'
import { combineReducers } from 'redux'
import {optimistic} from 'redux-optimistic-ui'

import MessageReducer from './message'
import UserReducer from './user'

export default optimistic(combineReducers({
  routing: routerReducer,
  user: UserReducer,
  messages: MessageReducer
}))
