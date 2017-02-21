import * as types from '../types'
import * as server from '../server'

export const listen = ()=>(dispatch)=>{
  server.listen((msg)=>{
    dispatch({
      type: types.ADD_MESSAGE,
      payload: msg
    })
  })
}

export const sendMessage = (data, type, cb)=>()=>{
  server.sendMessage(data, type).then(cb)
}
