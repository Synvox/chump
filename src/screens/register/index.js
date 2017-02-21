import React from 'react'
import {connect} from 'react-redux'
import {Link, hashHistory} from 'react-router'
import {UserActions} from '../../store'
const {register} = UserActions

function RegisterScreen({user}){
  if (user) {
    requestAnimationFrame(()=>hashHistory.push('/'))
    return null
  }

  let usernameInput = null
  let passwordInput = null
  let emailInput = null

  const submit = (e)=>{
    e.preventDefault()
    register(usernameInput.value, passwordInput.value, emailInput.value, ()=>{
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
          <label>Email: <input required type="email" ref={el=>emailInput = el}/></label>
        </div>
        <div>
          <Link to="/login">Login</Link>
          <button>Register</button>
        </div>
      </fieldset>
    </form>
  )
}

export default connect(
  state=>({user: state.user})
)(RegisterScreen)
