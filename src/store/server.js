import axios from 'axios'
import * as constants from './constants'

const server = axios.create({
  baseURL: `${constants.CHAMP_URL}`,
  withCredentials: true
})

export async function getUser() {
  const res = await server.get(`/users`)

  return res.data
}

export async function login(username, password) {
  const res = await server.post(`/users/login`, {
    username,
    password
  })

  return res.data
}

export async function register(username, password, email) {
  const res = await server.post(`/users/create`, {
    username,
    password,
    email
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
  const res = server.post(`/msgs`, {
    type: type,
    data
  })

  return res.data
}
