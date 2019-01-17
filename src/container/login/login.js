import React, { Component } from 'react'
import Logo from '../../component/logo/logo.js'
import {List, InputItem, WingBlank, WhiteSpace, Button} from 'antd-mobile'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { login } from '../../redux/user.redux'

@connect(
  state => state.user,
  { login }
)

class Login extends Component{
  constructor(props) {
    super(props)
    this.state = {
      user: '',
      pwd: ''
    }
    this.register = this.register.bind(this)
    this.handleLogin = this.handleLogin.bind(this)
  }
  handleChange(key, val) {
    console.log(key);
    this.setState({
      [key]: val
    })
  }
  register(){
    this.props.history.push('/register')
  }
  handleLogin() {
    this.props.login(this.state)
  }
  render() {
    return (
      <div>
        {this.props.redirectTo && this.props.redirectTo !== '/login' ? <Redirect to={this.props.redirectTo} /> : null}
        <Logo></Logo>
        <WingBlank>
          <List>
            {this.props.msg ? <p className='error-msg'>{this.props.msg}</p> : null}
            <InputItem
              onBlur={v => this.handleChange('user',v)}
            >用户</InputItem>
            <WhiteSpace />
            <InputItem
              onBlur={v=>this.handleChange('pwd',v)}
              type='password'
            >密码</InputItem>
          </List>
          <WhiteSpace />
          <Button type='primary' onClick={this.handleLogin}>登录</Button>
          <WhiteSpace />
          <Button onClick={this.register} type='primary'>注册</Button>
        </WingBlank>
      </div>
    )
  }
}

export default Login
