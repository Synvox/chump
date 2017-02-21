import React, {Component} from 'react'
import {connect} from 'react-redux'
import {hashHistory} from 'react-router'
import {MessageActions} from '../../store'

const {sendMessage, listen} = MessageActions

class HomeScreen extends Component {
  componentDidMount() {
    const {user} = this.props
    if (user) {
      listen()
    }
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
          console.log(msg)
          if (msg.type === 'text')
            return (<div>{msg.data.value}</div>)
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
