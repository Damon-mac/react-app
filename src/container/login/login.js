import React, { Component } from 'react'
import Logo from '../../component/logo/logo.js'
import {List, InputItem, WingBlank, WhiteSpace, Button} from 'antd-mobile'

class Login extends Component{
  constructor(props) {
    super(props)
    this.register = this.register.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }
  handleChange(key, val) {
    this.setState({
      [key]: val
    })
  }
  register(){
    this.props.history.push('/register')
  }
  render() {
    return (
      <div>
        <Logo></Logo>
        <WingBlank>
          <List>
            <InputItem
              onChange={v=>this.handleChange('user',v)}
            >用户</InputItem>
            <WhiteSpace />
            <InputItem
              onChange={v=>this.handleChange('pwd',v)}
              type='password'
            >密码</InputItem>
          </List>
          <WhiteSpace />
          <Button type='primary'>登录</Button>
          <WhiteSpace />
          <Button onClick={this.register} type='primary'>注册</Button>
        </WingBlank>
      </div>
    )
  }
}

export default Login
