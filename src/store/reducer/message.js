import * as types from '../types'
import deepFreeze from 'deep-freeze'

const initialState = []

export default function(state=initialState, action){
  const actions = {
    [types.ADD_MESSAGE]: ()=>{
      return [...state, action.payload]
    }
  }

  return actions[action.type] === undefined ? state : deepFreeze(actions[action.type]())
}
