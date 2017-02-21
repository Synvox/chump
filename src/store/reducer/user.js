import * as types from '../types'
import deepFreeze from 'deep-freeze'

const initialState = null

export default function(state=initialState, action){
  const actions = {
    [types.PATCH_USER]: ()=>{
      return action.payload
    }
  }

  return actions[action.type] === undefined ? state : deepFreeze(actions[action.type]())
}
