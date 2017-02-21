import axios from 'axios'
import * as constants from './constants'

export async function getUser() {
  const res = await axios.get(`${constants.CHAMP_URL}/users`, {
    withCredentials:true
  })

  return res.data
}

export async function login(username, password) {
  const res = await axios.post(`${constants.CHAMP_URL}/users/login`, {
    username,
    password
  }, {
    withCredentials:true
  })

  return res.data
}

export async function register(username, password, email) {
  const res = await axios.post(`${constants.CHAMP_URL}/users/create`, {
    username,
    password,
    email
  }, {
    withCredentials:true
  })

  return res.data
}

export async function listen(fn) {
  const sse = new EventSource(`${constants.CHAMP_URL}/msgs`)
  sse.addEventListener('create', (e)=>{
    fn(JSON.parse(e.data))
  })
}

export async function sendMessage(data, type='text') {
  const res = axios.post(`${constants.CHAMP_URL}/msgs`, {
    type: type,
    data
  }, {
    withCredentials:true
  })

  return res.data
}
