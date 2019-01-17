import React from 'react'
import { List, InputItem } from 'antd-mobile'
import io from 'socket.io-client'

const socket = io('ws://localhost:9003')
class Chat extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      text: ''
    }
  }
  componentDidMount() {
  }
  handleSubmit() {
    socket.emit('sendmsg', {text: this.state.text})
    this.setState({text: ''})
  }
  render() {
    console.log(this.props)
    return (
      <div className='stick-footer'>
        <List>
          <InputItem
            placeholder='请输入'
            value={this.state.text}
            onChange={v=>{
              this.setState({text: v})
            }}
            extra={<span onClick={() => this.handleSubmit()}>发送</span>}/>
        </List>
      </div>
    )
  }
}

export default Chat
