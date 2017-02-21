import React from 'react'
import {connect} from 'react-redux'
import {Link, hashHistory} from 'react-router'
import {UserActions} from '../../store'
const {login} = UserActions

function LoginScreen({user}){
  if (user) {
    requestAnimationFrame(()=>hashHistory.push('/'))
    return null
  }

  let usernameInput = null
  let passwordInput = null

  const submit = (e)=>{
    e.preventDefault()
    login(usernameInput.value, passwordInput.value, ()=>{
      hashHistory.push('/')
    })
  }

  return (
    <form onSubmit={submit}>
      <fieldset>
        <legend>Login:</legend>
        <div>
          <label>Username: <input required type="text" ref={el=>usernameInput = el}/></label>
        </div>
        <div>
          <label>Password: <input required type="password" ref={el=>passwordInput = el}/></label>
        </div>
        <div>
          <Link to="/register">Register</Link>
          <button>Login</button>
        </div>
      </fieldset>
    </form>
  )
}

export default connect(
  state=>({user: state.user})
)(LoginScreen)
