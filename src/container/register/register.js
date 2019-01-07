import React, { Component } from 'react'
import Logo from '../../component/logo/logo.js'
import {List, InputItem, Radio, WhiteSpace, Button} from 'antd-mobile'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { register } from "../../redux/user.redux"
import './register.less'

@connect(
  state => state.user,
  { register }
)

class Register extends Component{
  constructor(props) {
    super(props)
    this.state = {
      user:'',
      pwd: '',
      repeatpwd: '',
      type: 'genius'
    }
    this.handleRegister = this.handleRegister.bind(this)
  }
  handleChange(key, val) {
    console.log(key, val);
    this.setState({
      [key]: val
    })
  }
  handleRegister() {
    console.log(this.state)
    this.props.register(this.state)
  }
  render() {
    const RadioItem = Radio.RadioItem
    return (
      <div>
        {this.props.redirectTo ? <Redirect to={this.props.redirectTo} /> : null}
        <Logo></Logo>
        <List>
          {this.props.msg ? <p className='error-msg'>{this.props.msg}</p> : null}
          <InputItem
            onBlur={v=>this.handleChange('user',v)}
          >用户名</InputItem>
          <WhiteSpace />
          <InputItem
            type='password'
            onBlur={v=>this.handleChange('pwd',v)}
          >密码</InputItem>
          <WhiteSpace />
          <InputItem
            type='password'
            onBlur={v=>this.handleChange('repeatpwd',v)}
          >确认密码</InputItem>
          <WhiteSpace />
          <RadioItem
            checked={this.state.type==='genius'}
            onChange={()=>this.handleChange('type','genius')}
          >
            牛人
          </RadioItem>
          <RadioItem
            checked={this.state.type==='boss'}
            onChange={()=>this.handleChange('type','boss')}
          >
            BOSS
          </RadioItem>
          <WhiteSpace />
          <Button type='primary' onClick={this.handleRegister}>注册 </Button>
        </List>
      </div>
    )
  }
}

export default Register