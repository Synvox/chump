import { createStore, applyMiddleware, bindActionCreators} from 'redux'
import reduxThunk from 'redux-thunk'

import reducer from './reducer'
import optimisticMiddleware from '../middleware/optimisticMiddleware'
import * as messageActions from './actions/message'
import * as userActions from './actions/user'

const store = createStore(reducer, applyMiddleware(reduxThunk, optimisticMiddleware))

export const MessageActions = bindActionCreators(messageActions, store.dispatch)
export const UserActions = bindActionCreators(userActions, store.dispatch)

export default store
