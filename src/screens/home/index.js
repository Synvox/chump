import React, {Component} from 'react'
import {connect} from 'react-redux'
import {hashHistory} from 'react-router'
import {MessageActions, UserActions} from '../../store'

const {sendMessage, listen} = MessageActions
const {getUser} = UserActions

class HomeScreen extends Component {
  componentDidMount() {
    const {user} = this.props
    if (user)
      listen()
    else
      getUser()
  }
  render() {

    const {user, messages} = this.props
    if (!user) {
      requestAnimationFrame(()=>hashHistory.push('/login'))
      return null
    }

    let textInput = null

    const submit = (e)=>{
      e.preventDefault()
      sendMessage({value: textInput.value})
      textInput.value = ''
    }

    return (
      <form onSubmit={submit}>
        {messages.map((msg)=>{
          if (msg.type === 'text')
            return (
            <div key={msg.id}>{msg.data.value}</div>
          )
        })}
        <div>
          <input required type="text" ref={el=>textInput = el}/>
          <button>Send</button>
        </div>
      </form>
    )
  }
}

export default connect(
  state=>({
    user: state.user,
    messages: state.messages
  })
)(HomeScreen)
