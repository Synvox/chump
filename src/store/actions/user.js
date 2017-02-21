import * as types from '../types'
import * as server from '../server'

export const getUser = ()=>(dispatch)=>{
  server.getUser().then(user=>dispatch(patchUser(user)))
}

export const login = (username, password)=>(dispatch)=>{
  server.login(username, password).then(user=>dispatch(patchUser(user)))
}

export const register = (username, password, email)=>(dispatch)=>{
  server.register(username, password, email).then(user=>dispatch(patchUser(user)))
}

export const patchUser = (data)=>{
  return {
    type: types.PATCH_USER,
    payload: data
  }
}
